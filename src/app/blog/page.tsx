import type { Metadata } from "next";
import { articles } from "@/lib/content";
import BlogPage from "./BlogPage";

export const metadata: Metadata = {
  title: "Writing | Amiru Mallawarachchi",
  description: "Notes on transformers, agentic systems and applied AI engineering.",
};

export default function Page() {
  return <BlogPage posts={articles} />;
}
