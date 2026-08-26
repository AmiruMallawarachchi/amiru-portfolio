"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Github, ExternalLink } from "lucide-react";
import type { Project } from "@/lib/content";

export default function ProjectCard({ project, featured }: { project: Project; featured?: boolean }) {
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
      <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mb-4 font-mono text-[10px] sm:text-[11px] text-foreground/40">
        <span className="text-accent-secondary">▸</span>
        <span className="uppercase tracking-wider">{project.repo}</span>
        <span className="text-foreground/20">·</span>
        <span className="uppercase tracking-wider">{project.language}</span>
        {project.demo_url && (
          <>
            <span className="text-foreground/20">·</span>
            <span className="flex items-center gap-1.5 text-accent">
              <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
              live
            </span>
          </>
        )}
      </div>

      <Link
        href={`/projects/${project.slug}`}
        className="block overflow-hidden rounded-3xl aspect-[16/9] relative group-hover:shadow-[0_0_50px_rgba(255,159,28,0.15)] transition-shadow duration-500 border border-white/10"
      >
        {project.thumbnail ? (
          <Image
            src={project.thumbnail}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-1000 group-hover:scale-105"
          />
        ) : (
          <div className="absolute inset-0 bg-surface flex items-center justify-center px-6 text-center">
            <span className="font-display text-[clamp(1.75rem,7vw,4.5rem)] leading-[0.95] text-foreground/[0.07] font-bold tracking-tighter uppercase select-none">
              {project.title}
            </span>
          </div>
        )}
        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
          <div className="w-20 h-20 rounded-full bg-accent flex items-center justify-center text-background shadow-[0_0_20px_rgba(255,159,28,0.5)]">
            <ArrowUpRight strokeWidth={1} />
          </div>
        </div>
      </Link>

      <div className="mt-6 sm:mt-10 flex flex-col md:flex-row justify-between items-start gap-6 md:gap-8">
        <div className="max-w-2xl">
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-display mb-4 sm:mb-6 group-hover:translate-x-4 transition-transform duration-500">
            {project.title}
          </h3>
          <p className="text-base sm:text-lg md:text-xl text-foreground/50 font-light leading-relaxed mb-6 sm:mb-8">{project.description}</p>
          <div className="flex flex-wrap gap-3 mb-8">
            {project.technologies.map((tag) => (
              <span
                key={tag}
                className="font-mono text-[10px] uppercase tracking-widest border border-white/10 px-3 py-1 rounded-full text-foreground/40"
              >
                {tag}
              </span>
            ))}
          </div>
          <div className="flex flex-wrap items-center gap-6">
            <a
              href={project.github_url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-foreground/50 hover:text-foreground transition-colors font-mono text-xs uppercase tracking-widest"
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
