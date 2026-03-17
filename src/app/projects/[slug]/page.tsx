import { Metadata } from "next";
import { projectDetails } from "@/lib/data";
import ProjectDetailClient from "@/components/sections/ProjectDetailClient";
import Link from "next/link";

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const project = projectDetails[params.slug];
  return {
    title: project ? `${project.title} | Amiru Mallawa Arachchi` : "Project Not Found",
    description: project?.description || "Project details",
  };
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projectDetails[slug];

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center">
          <h1 className="text-4xl font-display mb-8">Project Not Found</h1>
          <Link href="/" className="text-white/50 hover:text-white transition-colors">
            Return Home
          </Link>
        </div>
      </div>
    );
  }

  return <ProjectDetailClient project={project} />;
}
