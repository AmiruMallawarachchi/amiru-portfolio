import { ImageResponse } from "next/og";
import { SITE } from "@/lib/site";

export const alt = SITE.ogImage.alt;
export const size = { width: SITE.ogImage.width, height: SITE.ogImage.height };
export const contentType = "image/png";

// Social + AI-preview card. Drawn from the same tokens as the site so a shared
// link looks like the page it points at.
export default async function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "68px 76px",
          background: "radial-gradient(circle at 82% 8%, #1d1408 0%, #08090b 58%)",
          color: "#ecebe5",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
            <div style={{ width: 10, height: 10, borderRadius: 10, background: "#2ec4b6" }} />
            <div style={{ fontSize: 22, letterSpacing: 6, color: "rgba(236,235,229,0.55)" }}>
              AI ENGINEERING STUDENT
            </div>
          </div>
          <div style={{ display: "flex", fontSize: 22, letterSpacing: 3, color: "rgba(236,235,229,0.35)" }}>
            amiru-portfolio.vercel.app
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", fontSize: 78, fontWeight: 800, letterSpacing: -2, lineHeight: 1 }}>
            <span style={{ marginRight: 20 }}>AMIRU</span>
            <span style={{ color: "#ff9f1c" }}>MALLAWARACHCHI</span>
          </div>
          <div
            style={{
              marginTop: 26,
              fontSize: 24,
              letterSpacing: 5,
              color: "rgba(236,235,229,0.5)",
            }}
          >
            GEN AI ENGINEERING · AGENTIC SYSTEMS · PRODUCTION AI
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <div style={{ width: 88, height: 3, background: "#ff9f1c" }} />
          <div style={{ display: "flex", fontSize: 32, color: "rgba(236,235,229,0.82)", lineHeight: 1.25 }}>
            Building agentic systems that hold up outside the demo.
          </div>
        </div>
      </div>
    ),
    size,
  );
}
