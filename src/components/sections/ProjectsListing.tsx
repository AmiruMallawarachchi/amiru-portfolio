"use client";

import { useRef } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import TextReveal from "@/components/ui/TextReveal";
import ProjectCard from "@/components/ProjectCard";
import type { Project } from "@/lib/content";

export default function ProjectsListing({ projects }: { projects: Project[] }) {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section ref={containerRef} className="py-24 sm:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 sm:mb-24 gap-8">
          <div>
            <span className="font-mono text-accent/70 uppercase tracking-widest text-xs mb-4 block">{"// featured"}</span>
            <TextReveal>
              <h2 className="font-display font-medium leading-[0.95] text-[clamp(2.25rem,8vw,5rem)]">
                FEATURED <br />
                <span className="text-foreground/20 italic">WORKS</span>
              </h2>
            </TextReveal>
          </div>
          <p className="max-w-md text-foreground/50 md:text-right font-light">
            Multi-agent systems, full-stack platforms, and everything shipped in between.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-20 sm:gap-28 md:gap-32">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>

        <div className="flex justify-center mt-24">
          <Link
            href="/projects"
            className="group flex items-center gap-4 glass px-7 sm:px-10 py-4 sm:py-5 rounded-full hover:bg-foreground hover:text-background transition-all duration-500"
          >
            <span className="text-xs uppercase tracking-[0.3em] font-bold">View All Projects</span>
            <ArrowUpRight
              size={16}
              className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300"
            />
          </Link>
        </div>
      </div>
    </section>
  );
}
