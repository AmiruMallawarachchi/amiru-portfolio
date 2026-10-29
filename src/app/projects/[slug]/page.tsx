import { Metadata } from "next";
import { notFound } from "next/navigation";
import { projects } from "@/lib/content";
import { SITE, OG_BASE } from "@/lib/site";
import { breadcrumbSchema, buildGraph, projectSchema, webPageSchema } from "@/lib/schema";
import JsonLd from "@/components/seo/JsonLd";
import ProjectDetailClient from "@/components/sections/ProjectDetailClient";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) return { title: "Project not found" };

  const path = `/projects/${project.slug}`;
  const title = `${project.title} — ${project.technologies.slice(0, 2).join(" & ")} case study`;

  return {
    title,
    description: project.description,
    keywords: project.technologies,
    alternates: { canonical: path },
    openGraph: {
      ...OG_BASE,
      type: "article",
      url: path,
      title: `${project.title} · Amiru Mallawarachchi`,
      description: project.description,
      ...(project.thumbnail ? { images: [{ url: project.thumbnail, alt: `${project.title} project interface` }] } : {}),
    },
    twitter: {
      card: "summary_large_image",
      title: `${project.title} · Amiru Mallawarachchi`,
      description: project.description,
    },
  };
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) return notFound();

  return (
    <>
      <JsonLd
        data={buildGraph([
          webPageSchema({
            path: `/projects/${project.slug}`,
            name: `${project.title} · Amiru Mallawarachchi`,
            description: project.description,
            mainEntity: { "@id": `${SITE.url}/projects/${project.slug}#software` },
          }),
          projectSchema(project),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Projects", path: "/projects" },
            { name: project.title, path: `/projects/${project.slug}` },
          ]),
        ])}
      />
      <ProjectDetailClient project={project} />
    </>
  );
}
