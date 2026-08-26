import { Metadata } from "next";
import { notFound } from "next/navigation";
import { projects } from "@/lib/content";
import ProjectDetailClient from "@/components/sections/ProjectDetailClient";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  return {
    title: project ? `${project.title} | Amiru Mallawarachchi` : "Project Not Found",
    description: project?.description || "Project details",
  };
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) return notFound();

  return <ProjectDetailClient project={project} />;
}
