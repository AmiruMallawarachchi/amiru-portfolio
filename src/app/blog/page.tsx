import type { Metadata } from "next";
import BlogPage from "./BlogPage";

export const metadata: Metadata = {
  title: "Blog | Amiru Mallawa Arachchi",
  description: "Thoughts on AI engineering, full-stack development, and building intelligent systems — by Amiru Mallawa Arachchi.",
};

export default function Page() {
  return <BlogPage />;
}
