import type { Metadata } from "next";
import { projects } from "@/lib/content";
import ProjectsPage from "./ProjectsPage";

export const metadata: Metadata = {
  title: "Projects | Amiru Mallawarachchi",
  description:
    "Multi-agent AI systems, transformer model training, RAG pipelines and full-stack platforms — the complete collection.",
};

export default function Page() {
  return <ProjectsPage projects={projects} />;
}
