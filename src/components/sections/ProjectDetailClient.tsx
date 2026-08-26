"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Github, ExternalLink, BookOpen, Cpu, ArrowLeft } from "lucide-react";
import type { Project } from "@/lib/content";

export default function ProjectDetailClient({ project }: { project: Project }) {
  return (
    <div className="min-h-screen bg-background text-foreground pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4">
        {/* Back Button */}
        <Link href="/projects" className="inline-flex items-center gap-2 text-foreground/30 hover:text-foreground transition-colors mb-12 group font-mono">
          <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
          <span className="text-sm uppercase tracking-widest">Back to Gallery</span>
        </Link>

        {/* Header */}
        <header className="mb-20">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-6xl md:text-8xl font-display font-medium mb-8"
          >
            {project.title}
          </motion.h1>
          <div className="flex flex-wrap gap-12">
            <div className="flex flex-col gap-2">
              <span className="font-mono text-foreground/30 text-[10px] uppercase tracking-widest">Year</span>
              <span className="text-lg">{project.year}</span>
            </div>
            <div className="flex flex-col gap-2">
              <span className="font-mono text-foreground/30 text-[10px] uppercase tracking-widest">Focus</span>
              <span className="text-lg">{project.technologies[0]}</span>
            </div>
            <div className="flex flex-col gap-2">
              <span className="font-mono text-foreground/30 text-[10px] uppercase tracking-widest">Links</span>
              <div className="flex gap-4">
                <a href={project.github_url} target="_blank" rel="noopener noreferrer" className="hover:text-foreground/50 transition-colors"><Github size={20} /></a>
                {project.demo_url && <a href={project.demo_url} target="_blank" rel="noopener noreferrer" className="hover:text-foreground/50 transition-colors"><ExternalLink size={20} /></a>}
                {project.hf_url && <a href={project.hf_url} target="_blank" rel="noopener noreferrer" className="hover:text-foreground/50 transition-colors"><Cpu size={20} /></a>}
              </div>
            </div>
          </div>
        </header>

        {/* Main Image */}
        <section className="mb-32">
          <div className="relative aspect-[21/9] rounded-[2rem] overflow-hidden border border-white/10">
            {project.thumbnail ? (
              <Image src={project.thumbnail} alt={project.title} fill className="object-cover" priority />
            ) : (
              <div className="absolute inset-0 bg-surface flex items-center justify-center">
                <span className="font-display text-7xl md:text-8xl text-foreground/[0.06] font-bold tracking-tighter uppercase select-none">
                  {project.repo}
                </span>
              </div>
            )}
          </div>
        </section>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-3 gap-24 mb-32">
          <div className="lg:col-span-2">
            <h2 className="font-mono text-sm uppercase tracking-widest text-foreground/30 mb-8 font-bold">The Vision</h2>
            <div className="prose prose-invert max-w-none">
              <p className="text-2xl text-foreground/70 leading-relaxed font-light mb-12 border-l-2 border-white/20 pl-8">
                {project.description}
              </p>
              <p className="text-lg text-foreground/50 leading-relaxed font-light">{project.body}</p>
            </div>

            {project.highlights && project.highlights.length > 0 && (
              <div className="mt-20">
                <h2 className="font-mono text-sm uppercase tracking-widest text-foreground/30 mb-10 font-bold">
                  What I Built
                </h2>
                <ul className="space-y-8">
                  {project.highlights.map((item, i) => (
                    <li key={i} className="flex gap-6">
                      <span className="font-mono text-accent/70 text-xs pt-1.5 shrink-0 tabular-nums">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <p className="text-base md:text-lg text-foreground/60 leading-relaxed font-light">{item}</p>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
          <div className="space-y-12">
            <div>
              <h3 className="font-mono text-xs uppercase tracking-widest text-foreground/30 mb-6 font-bold">Stack</h3>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span key={tech} className="px-4 py-2 rounded-full border border-white/10 text-xs bg-white/5 font-mono">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            {project.wiki_url && (
              <div>
                <h3 className="font-mono text-xs uppercase tracking-widest text-foreground/30 mb-6 font-bold">Resources</h3>
                <a
                  href={project.wiki_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-foreground/60 hover:text-foreground transition-colors group"
                >
                  <BookOpen size={18} />
                  <span>Documentation Wiki</span>
                  <ExternalLink size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </div>
            )}
          </div>
        </div>

        {/* Media Highlights */}
        <section className="space-y-32">
          {project.video_url && (
            <div>
              <h2 className="text-center text-foreground/30 uppercase tracking-[0.3em] text-xs mb-12 italic font-mono">System Walkthrough</h2>
              <div className="aspect-video w-full rounded-[2rem] overflow-hidden border border-white/10 bg-white/5">
                <iframe
                  src={project.video_url}
                  className="w-full h-full border-0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>
          )}

          {project.architecture_image && (
            <div>
              <h2 className="font-mono text-sm uppercase tracking-widest text-foreground/30 mb-12 font-bold flex items-center gap-3">
                <Cpu size={18} />
                System Architecture
              </h2>
              <div className="relative aspect-[16/9] rounded-[2rem] overflow-hidden border border-white/10 grayscale hover:grayscale-0 transition-all duration-700">
                <Image src={project.architecture_image} alt="Architecture" fill className="object-cover" />
              </div>
            </div>
          )}
        </section>

        {/* CTA */}
        <footer className="mt-48 pt-24 border-t border-white/5 text-center">
          <Link
            href="/#contact"
            className="text-5xl md:text-7xl font-display font-medium hover:text-foreground/50 transition-colors"
          >
            HAVE A PROJECT IN MIND?
          </Link>
        </footer>
      </div>
    </div>
  );
}
