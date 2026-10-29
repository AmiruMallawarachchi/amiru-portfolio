// Single source of truth for everything search engines, social cards and AI
// answer engines read. Change the domain here, not in six places.

import { profile, skills } from "@/lib/content";

const rawUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://amiru-portfolio.vercel.app";

export const SITE = {
  url: rawUrl.replace(/\/$/, ""),
  name: profile.full_name,
  locale: "en_US",
  role: "AI Engineering Student",
  discipline: "Gen AI Engineering · Agentic Systems · Production AI",
  title: "Amiru Mallawarachchi — AI Engineering Student | Gen AI & Agentic Systems",
  description:
    "AI engineering student building production-grade Gen AI systems: LangGraph agent workflows, MCP tool servers, retrieval pipelines, and the FastAPI and Next.js backends that keep them reliable.",
  shortDescription:
    "AI engineering student building agentic Gen AI systems — LangGraph, MCP and retrieval — with production backends.",
  keywords: [
    "Amiru Mallawarachchi",
    "AI engineer intern",
    "Gen AI engineer",
    "AI engineering student",
    "agentic systems",
    "LangGraph developer",
    "MCP server",
    "RAG pipeline",
    "FastAPI engineer",
    "Sri Lanka AI engineer",
    "LLM production systems",
  ],
  ogImage: {
    path: "/opengraph-image",
    width: 1200,
    height: 630,
    alt: "Amiru Mallawarachchi — AI engineering student building agentic Gen AI systems",
  },
  sameAs: [profile.github_url, profile.linkedin_url, profile.huggingface_url, "https://medium.com/@amirunoel8"],
} as const;

export const SKILL_KEYWORDS = skills.flatMap((group) => group.items);

// Next replaces a parent's openGraph object with a child's, so every page that
// declares openGraph has to re-state the site-wide fields.
export const OG_BASE = {
  siteName: SITE.name,
  locale: SITE.locale,
} as const;
