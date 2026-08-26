"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import TextReveal from "@/components/ui/TextReveal";
import ProjectCard from "@/components/ProjectCard";
import { profile } from "@/lib/content";
import type { Project } from "@/lib/content";

export default function ProjectsPage({ projects }: { projects: Project[] }) {
  return (
    <div className="relative min-h-screen bg-background">
      {/* Hero */}
      <section className="relative pt-48 pb-24 overflow-hidden px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-foreground/40 hover:text-foreground transition-colors text-xs uppercase tracking-widest mb-12 font-mono"
            >
              <ArrowLeft size={14} />
              Back to Home
            </Link>
          </motion.div>

          <div className="flex flex-col md:flex-row justify-between items-end gap-8">
            <div>
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.1 }}
                className="font-mono text-accent/70 uppercase tracking-widest text-xs mb-4 block"
              >
                {"// all work"}
              </motion.span>
              <TextReveal>
                <h1 className="text-5xl md:text-8xl font-display font-medium leading-tight">
                  ALL <br />
                  <span className="text-foreground/20 italic">PROJECTS</span>
                </h1>
              </TextReveal>
            </div>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="max-w-md text-foreground/50 text-right font-light"
            >
              The complete collection — from agentic AI systems to enterprise apps and mobile builds.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Projects List */}
      <section className="pb-32 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 gap-32">
            {projects.map((project) => (
              <ProjectCard key={project.slug} project={project} featured={project.featured} />
            ))}
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <div className="py-20 border-t border-white/5 text-center">
        <p className="font-mono text-foreground/20 text-xs uppercase tracking-widest mb-8">Want to work together?</p>
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
