import type { Metadata } from "next";
import { orderedProjects } from "@/lib/content";
import { OG_BASE } from "@/lib/site";
import { breadcrumbSchema, buildGraph, projectListSchema, webPageSchema } from "@/lib/schema";
import JsonLd from "@/components/seo/JsonLd";
import ProjectsPage from "./ProjectsPage";

const description =
  "Every build in one place: LangGraph agent systems, MCP tool servers, retrieval pipelines, and production backends — with live demos and source code.";

export const metadata: Metadata = {
  title: "Projects",
  description,
  alternates: { canonical: "/projects" },
  openGraph: {
    ...OG_BASE,
    url: "/projects",
    title: "Projects · Amiru Mallawarachchi",
    description,
  },
};

export default function Page() {
  return (
    <>
      <JsonLd
        data={buildGraph([
          webPageSchema({
            path: "/projects",
            name: "Projects · Amiru Mallawarachchi",
            description,
            type: "CollectionPage",
            mainEntity: projectListSchema(),
          }),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Projects", path: "/projects" },
          ]),
        ])}
      />
      <ProjectsPage projects={orderedProjects} />
    </>
  );
}
