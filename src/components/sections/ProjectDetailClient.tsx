"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { 
  Github, 
  ExternalLink, 
  BookOpen, 
  Cpu, 
  ArrowLeft
} from "lucide-react";

export default function ProjectDetailClient({ project }: { project: any }) {
  return (
    <div className="min-h-screen bg-background text-white pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4">
        {/* Back Button */}
        <Link href="/" className="inline-flex items-center gap-2 text-white/30 hover:text-white transition-colors mb-12 group">
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
              <span className="text-white/30 text-[10px] uppercase tracking-widest">Year</span>
              <span className="text-lg">2024</span>
            </div>
            <div className="flex flex-col gap-2">
              <span className="text-white/30 text-[10px] uppercase tracking-widest">Focus</span>
              <span className="text-lg">{project.technologies[0]}</span>
            </div>
            <div className="flex flex-col gap-2">
              <span className="text-white/30 text-[10px] uppercase tracking-widest">Links</span>
              <div className="flex gap-4">
                {project.github_url && <a href={project.github_url} target="_blank" className="hover:text-white/50 transition-colors"><Github size={20} /></a>}
                {project.demo_url && <a href={project.demo_url} target="_blank" className="hover:text-white/50 transition-colors"><ExternalLink size={20} /></a>}
                {project.hf_url && <a href={project.hf_url} target="_blank" className="hover:text-white/50 transition-colors"><Cpu size={20} /></a>}
              </div>
            </div>
          </div>
        </header>

        {/* Main Image */}
        <section className="mb-32">
          <div className="relative aspect-[21/9] rounded-[2rem] overflow-hidden border border-white/10">
            <Image 
              src={project.gallery[0] || ""} 
              alt={project.title} 
              fill 
              className="object-cover"
              priority
            />
          </div>
        </section>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-3 gap-24 mb-32">
          <div className="lg:col-span-2">
            <h2 className="text-sm uppercase tracking-widest text-white/30 mb-8 font-bold">The Vision</h2>
            <div className="prose prose-invert max-w-none">
              <p className="text-2xl text-white/70 leading-relaxed font-light mb-12 border-l-2 border-white/20 pl-8">
                {project.description}
              </p>
              <p className="text-lg text-white/50 leading-relaxed font-light">
                {project.full_content}
              </p>
            </div>
          </div>
          <div className="space-y-12">
            <div>
              <h3 className="text-xs uppercase tracking-widest text-white/30 mb-6 font-bold">Stack</h3>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech: string) => (
                  <span key={tech} className="px-4 py-2 rounded-full border border-white/10 text-xs bg-white/5">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            {project.wiki_url && (
              <div>
                <h3 className="text-xs uppercase tracking-widest text-white/30 mb-6 font-bold">Resources</h3>
                <a 
                  href={project.wiki_url}
                  target="_blank"
                  className="flex items-center gap-3 text-white/60 hover:text-white transition-colors group"
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
          {/* Video */}
          {project.video_url && (
            <div>
              <h2 className="text-center text-white/30 uppercase tracking-[0.3em] text-xs mb-12 italic">System Walkthrough</h2>
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

          {/* Architecture */}
          {project.architecture_img && (
            <div>
              <h2 className="text-sm uppercase tracking-widest text-white/30 mb-12 font-bold flex items-center gap-3">
                <Cpu size={18} />
                System Architecture
              </h2>
              <div className="relative aspect-[16/9] rounded-[2rem] overflow-hidden border border-white/10 grayscale hover:grayscale-0 transition-all duration-700">
                <Image 
                  src={project.architecture_img} 
                  alt="Architecture" 
                  fill 
                  className="object-cover"
                />
              </div>
            </div>
          )}
        </section>

        {/* CTA */}
        <footer className="mt-48 pt-24 border-t border-white/5 text-center">
          <Link 
            href="/#contact"
            className="text-5xl md:text-7xl font-display font-medium hover:text-white/50 transition-colors"
          >
            HAVE A PROJECT IN MIND?
          </Link>
        </footer>
      </div>
    </div>
  );
}
