import { Resend } from 'resend';
import { NextResponse } from 'next/server';
import { profile } from '@/lib/content';

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    if (!process.env.RESEND_API_KEY) {
      return NextResponse.json({ error: 'Email service not configured' }, { status: 500 });
    }

    const resend = new Resend(process.env.RESEND_API_KEY);
    const { data, error: sendError } = await resend.emails.send({
      from: 'Portfolio Contact <onboarding@resend.dev>',
      to: profile.email,
      subject: `New Message from ${name}`,
      replyTo: email,
      html: `
        <div style="font-family: sans-serif; background-color: #f4f4f4; padding: 40px; color: #333;">
          <div style="max-width: 600px; margin: 0 auto; background-color: #fff; border-radius: 8px; overflow: hidden; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
            <div style="background-color: #ff9f1c; padding: 20px; text-align: center;">
              <h1 style="color: #fff; margin: 0; font-size: 24px;">New Portfolio Inquiry</h1>
            </div>
            <div style="padding: 30px;">
              <p style="margin-top: 0;"><strong>Name:</strong> ${name}</p>
              <p><strong>Email:</strong> ${email}</p>
              <div style="margin-top: 30px; padding: 20px; background-color: #f9f9f9; border-radius: 8px; border-left: 4px solid #ff9f1c;">
                <p style="margin: 0; line-height: 1.6;">${message}</p>
              </div>
            </div>
            <div style="padding: 20px; text-align: center; font-size: 12px; color: #999; border-top: 1px solid #eee;">
              Sent from your Portfolio Website
            </div>
          </div>
        </div>
      `,
    });

    if (sendError) {
      return NextResponse.json({ error: sendError }, { status: 500 });
    }

    return NextResponse.json({ success: true, data });
  } catch {
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    );
  }
}
