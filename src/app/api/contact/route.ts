import { Resend } from "resend";
import { NextResponse } from "next/server";
import { profile } from "@/lib/content";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const LIMITS = { name: 100, email: 254, message: 5000 } as const;

const ESCAPES: Record<string, string> = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#39;",
};

// Values land inside an HTML email, so they are escaped rather than trusted.
function escapeHtml(value: string) {
  return value.replace(/[&<>"']/g, (character) => ESCAPES[character]);
}

function singleLine(value: string) {
  return value.replace(/[\r\n]+/g, " ").trim();
}

// Per-instance, best-effort throttle. Serverless instances do not share memory,
// so this raises the cost of casual abuse rather than guaranteeing a hard limit.
const WINDOW_MS = 60 * 60 * 1000;
const MAX_PER_WINDOW = 5;
const recentSubmissions = new Map<string, number[]>();

function isRateLimited(key: string) {
  const now = Date.now();
  const timestamps = (recentSubmissions.get(key) ?? []).filter((time) => now - time < WINDOW_MS);

  if (timestamps.length >= MAX_PER_WINDOW) {
    recentSubmissions.set(key, timestamps);
    return true;
  }

  timestamps.push(now);
  recentSubmissions.set(key, timestamps);

  if (recentSubmissions.size > 500) {
    for (const [entry, times] of recentSubmissions) {
      if (!times.some((time) => now - time < WINDOW_MS)) recentSubmissions.delete(entry);
    }
  }

  return false;
}

export async function POST(req: Request) {
  const ip =
    req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    req.headers.get("x-real-ip") ||
    "unknown";

  if (isRateLimited(ip)) {
    return NextResponse.json({ error: "Too many messages. Please try again later." }, { status: 429 });
  }

  let payload: unknown;
  try {
    payload = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body" }, { status: 400 });
  }

  const { name, email, message, website } = (payload ?? {}) as Record<string, unknown>;

  // Hidden field: humans never fill it, most bots do.
  if (typeof website === "string" && website.trim() !== "") {
    return NextResponse.json({ success: true });
  }

  if (
    typeof name !== "string" ||
    typeof email !== "string" ||
    typeof message !== "string" ||
    !name.trim() ||
    !email.trim() ||
    !message.trim()
  ) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
  }

  const trimmedName = name.trim();
  const trimmedEmail = email.trim();
  const trimmedMessage = message.trim();

  if (
    trimmedName.length > LIMITS.name ||
    trimmedEmail.length > LIMITS.email ||
    trimmedMessage.length > LIMITS.message
  ) {
    return NextResponse.json({ error: "Message is too long" }, { status: 413 });
  }

  if (!EMAIL_PATTERN.test(trimmedEmail)) {
    return NextResponse.json({ error: "Please use a valid email address" }, { status: 400 });
  }

  if (!process.env.RESEND_API_KEY) {
    return NextResponse.json({ error: "Email service not configured" }, { status: 500 });
  }

  const safeName = escapeHtml(singleLine(trimmedName));
  const safeEmail = escapeHtml(singleLine(trimmedEmail));
  const safeMessage = escapeHtml(trimmedMessage).replace(/\r?\n/g, "<br />");

  try {
    const resend = new Resend(process.env.RESEND_API_KEY);
    const { error: sendError } = await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: profile.email,
      subject: `New message from ${singleLine(trimmedName).slice(0, 80)}`,
      replyTo: trimmedEmail,
      html: `
        <div style="font-family: sans-serif; background-color: #f4f4f4; padding: 40px; color: #333;">
          <div style="max-width: 600px; margin: 0 auto; background-color: #fff; border-radius: 8px; overflow: hidden; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
            <div style="background-color: #ff9f1c; padding: 20px; text-align: center;">
              <h1 style="color: #fff; margin: 0; font-size: 24px;">New portfolio message</h1>
            </div>
            <div style="padding: 30px;">
              <p style="margin-top: 0;"><strong>Name:</strong> ${safeName}</p>
              <p><strong>Email:</strong> ${safeEmail}</p>
              <div style="margin-top: 30px; padding: 20px; background-color: #f9f9f9; border-radius: 8px; border-left: 4px solid #ff9f1c;">
                <p style="margin: 0; line-height: 1.6;">${safeMessage}</p>
              </div>
            </div>
            <div style="padding: 20px; text-align: center; font-size: 12px; color: #999; border-top: 1px solid #eee;">
              Sent from amiru-portfolio.vercel.app
            </div>
          </div>
        </div>
      `,
    });

    if (sendError) {
      return NextResponse.json({ error: "Could not send message" }, { status: 502 });
    }

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
