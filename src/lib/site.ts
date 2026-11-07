// Single source of truth for everything search engines, social cards and AI
// answer engines read. Change the domain here, not in six places.

import { profile, skills } from "@/lib/content";

const rawUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://amiru-portfolio.vercel.app";

export const SITE = {
  url: rawUrl.replace(/\/$/, ""),
  name: profile.full_name,
  alternateNames: ["Amiru", "Amiru Noel", "Amiru Noel Mallawarachchi", "Amiru Mallawarachchi portfolio"],
  locale: "en_US",
  role: "AI Engineering Student",
  discipline: "Gen AI Engineering · Agentic Systems · Production AI",
  title: "Amiru Mallawarachchi — AI Engineering Student | Gen AI & Agentic Systems",
  description:
    "Amiru Mallawarachchi is a final-year software engineering student in Moratuwa, Sri Lanka, building Gen AI systems: LangGraph agent workflows, MCP tool servers, retrieval pipelines, and the FastAPI and Next.js backends that keep them reliable.",
  shortDescription:
    "Final-year software engineering student building agentic Gen AI systems with LangGraph, MCP and retrieval.",
  keywords: [
    "Amiru Mallawarachchi",
    "Amiru Mallawarachchi portfolio",
    "Amiru Noel Mallawarachchi",
    "AI engineer Sri Lanka",
    "AI engineering student",
    "Gen AI engineer",
    "AI engineer intern",
    "agentic systems",
    "LangGraph developer",
    "MCP server",
    "RAG pipeline",
    "FastAPI engineer",
    "LLM production systems",
  ],
  ogImage: {
    path: "/opengraph-image",
    width: 1200,
    height: 630,
    alt: "Amiru Mallawarachchi — AI engineering student building agentic Gen AI systems",
  },
  sameAs: [profile.github_url, profile.linkedin_url, profile.huggingface_url, "https://medium.com/@amirunoel8"],
  // Used by sitemap.xml instead of a fresh timestamp on every build, so search
  // engines are not told the whole site changed when only a deploy happened.
  contentUpdated: "2026-11-07",
  googleSiteVerification: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION ?? "",
  bingSiteVerification: process.env.NEXT_PUBLIC_BING_SITE_VERIFICATION ?? "",
} as const;

export const SKILL_KEYWORDS = skills.flatMap((group) => group.items);

// Next replaces a parent's openGraph object with a child's, so every page that
// declares openGraph has to re-state the site-wide fields.
export const OG_BASE = {
  siteName: SITE.name,
  locale: SITE.locale,
} as const;
