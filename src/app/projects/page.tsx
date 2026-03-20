import type { Metadata } from "next";
import ProjectsPage from "./ProjectsPage";

export const metadata: Metadata = {
  title: "Projects | Amiru Mallawa Arachchi",
  description: "Full collection of projects by Amiru Mallawa Arachchi — spanning enterprise systems, AI engineering, and mobile applications.",
};

export default function Page() {
  return <ProjectsPage />;
}
