"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Github, ExternalLink } from "lucide-react";
import type { Project } from "@/lib/content";
import ProjectArtwork from "@/components/ProjectArtwork";

export default function ProjectCard({
  project,
  featured,
  compact = false,
  priority = false,
}: {
  project: Project;
  featured?: boolean;
  compact?: boolean;
  priority?: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="group relative"
    >
      {featured && (
        <div className="absolute -top-6 left-0 flex items-center gap-2 z-10">
          <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse shadow-[0_0_8px_rgba(255,159,28,0.8)]" />
          <span className="font-mono text-[9px] uppercase tracking-[0.3em] text-accent/80">Featured</span>
        </div>
      )}

      {/* Mono header strip */}
      <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mb-4 font-mono text-[10px] sm:text-[11px] text-foreground/65">
        <span className="text-accent-secondary">▸</span>
        <span className="uppercase tracking-wider">{project.repo}</span>
        <span className="text-foreground/65">·</span>
        <span className="uppercase tracking-wider">{project.language}</span>
        {project.demo_url && (
          <>
            <span className="text-foreground/65">·</span>
            <span className="flex items-center gap-1.5 text-accent">
              <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
              live
            </span>
          </>
        )}
      </div>

      <Link
        href={`/projects/${project.slug}`}
        className={`block overflow-hidden rounded-3xl relative group-hover:shadow-[0_0_50px_rgba(255,159,28,0.15)] transition-shadow duration-500 border border-white/10 ${compact ? "aspect-[4/3]" : "aspect-[16/9]"}`}
      >
        {project.thumbnail ? (
          <Image
            src={project.thumbnail}
            alt={`${project.title} — ${project.description}`}
            fill
            sizes={compact ? "(min-width: 1024px) 30vw, (min-width: 768px) 45vw, 90vw" : "(min-width: 1024px) 55vw, 92vw"}
            priority={priority}
            className="object-cover transition-transform duration-1000 group-hover:scale-105"
          />
        ) : (
          <ProjectArtwork project={project} />
        )}
        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
          <div className="w-20 h-20 rounded-full bg-accent flex items-center justify-center text-background shadow-[0_0_20px_rgba(255,159,28,0.5)]">
            <ArrowUpRight strokeWidth={1} />
          </div>
        </div>
      </Link>

      <div className={`${compact ? "mt-5" : "mt-6 sm:mt-10"} flex flex-col justify-between items-start gap-5`}>
        <div className="max-w-2xl">
          <h3 className={`${compact ? "text-xl sm:text-2xl" : "text-2xl sm:text-3xl md:text-4xl"} font-display mb-3 group-hover:translate-x-2 transition-transform duration-500`}>
            {project.title}
          </h3>
          <p className={`${compact ? "text-sm" : "text-base sm:text-lg md:text-xl"} text-foreground/55 font-light leading-relaxed mb-5`}>{project.description}</p>
          <div className="flex flex-wrap gap-2 mb-6">
            {project.technologies.map((tag) => (
              <span
                key={tag}
                className="font-mono text-[9px] uppercase tracking-widest border border-white/10 px-2.5 py-1 rounded-full text-foreground/65"
              >
                {tag}
              </span>
            ))}
          </div>
          <div className="flex flex-wrap items-center gap-4">
            <a
              href={project.github_url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-foreground/65 hover:text-foreground transition-colors font-mono text-xs uppercase tracking-widest"
            >
              <Github size={14} /> GitHub
            </a>
            {project.demo_url && (
              <a
                href={project.demo_url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-accent-secondary/80 hover:text-accent-secondary transition-colors font-mono text-xs uppercase tracking-widest"
              >
                <ExternalLink size={14} /> Live demo
              </a>
            )}
          </div>
        </div>
        <Link
          href={`/projects/${project.slug}`}
          className="text-accent/70 hover:text-accent transition-colors uppercase tracking-[0.2em] text-[10px] font-bold whitespace-nowrap font-mono"
        >
          Case study →
        </Link>
      </div>
    </motion.div>
  );
}
