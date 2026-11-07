"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import TextReveal from "@/components/ui/TextReveal";
import Reveal from "@/components/ui/Reveal";
import ProjectCard from "@/components/ProjectCard";
import { profile } from "@/lib/content";
import type { Project } from "@/lib/content";

export default function ProjectsPage({ projects }: { projects: Project[] }) {
  return (
    <div className="relative min-h-screen bg-background">
      {/* Hero */}
      <section className="relative pt-32 sm:pt-40 md:pt-48 pb-16 sm:pb-24 overflow-hidden px-5 sm:px-8">
        <div className="max-w-7xl mx-auto">
          <Reveal distance={16}>
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-foreground/55 hover:text-foreground transition-colors text-xs uppercase tracking-widest mb-12 font-mono"
            >
              <ArrowLeft size={14} />
              Back to Home
            </Link>
          </Reveal>

          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8">
            <div>
              <span
                className="font-mono text-accent/70 uppercase tracking-widest text-xs mb-4 block"
              >
                {"// all work"}
              </span>
              <TextReveal>
                <h1 className="font-display font-medium leading-[0.95] text-[clamp(2.5rem,9vw,6rem)]">
                  ALL <br />
                  <span className="text-foreground/40 italic">PROJECTS</span>
                </h1>
              </TextReveal>
            </div>
            <Reveal delay={0.15} distance={16}>
            <p
              className="max-w-md text-foreground/65 md:text-right font-light"
            >
              The complete collection — from agentic AI systems to enterprise apps and mobile builds.
            </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Projects List */}
      <section className="pb-24 sm:pb-32 px-5 sm:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-8 gap-y-16 sm:gap-y-20">
            {projects.map((project, index) => (
              <ProjectCard
                key={project.slug}
                project={project}
                featured={project.featured}
                compact
                priority={index === 0}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <div className="py-20 border-t border-white/5 text-center">
        <p className="font-mono text-foreground/55 text-xs uppercase tracking-widest mb-8">Want to work together?</p>
        <a
          href={`mailto:${profile.email}`}
          className="text-3xl md:text-5xl font-display text-foreground/80 hover:text-foreground transition-colors"
        >
          {profile.email}
        </a>
      </div>
    </div>
  );
}
