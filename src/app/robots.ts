import type { MetadataRoute } from "next";
import { SITE } from "@/lib/site";

// AI crawlers are explicitly allowed: being readable by answer engines is the
// point of the GEO layer (llms.txt + JSON-LD), so blocking them would defeat it.
const AI_CRAWLERS = ["GPTBot", "ChatGPT-User", "ClaudeBot", "Claude-Web", "PerplexityBot", "Google-Extended", "Applebot-Extended", "OAI-SearchBot"];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "*", allow: "/", disallow: ["/api/"] },
      ...AI_CRAWLERS.map((userAgent) => ({ userAgent, allow: "/" })),
    ],
    sitemap: `${SITE.url}/sitemap.xml`,
    host: SITE.url,
  };
}
