import type { Metadata } from "next";
import { projects } from "@/lib/content";
import ProjectsPage from "./ProjectsPage";

export const metadata: Metadata = {
  title: "Projects | Amiru Mallawarachchi",
  description: "The complete collection: agentic AI systems, MCP applications, backend platforms, data projects, and full-stack builds.",
};

export default function Page() {
  return <ProjectsPage projects={projects} />;
}
