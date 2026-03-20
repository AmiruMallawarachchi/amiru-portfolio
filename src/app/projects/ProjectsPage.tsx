"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { allProjects } from "@/lib/data";
import { ArrowUpRight, ArrowLeft } from "lucide-react";
import TextReveal from "@/components/ui/TextReveal";

export default function ProjectsPage() {
  return (
    <div className="relative min-h-screen bg-background">
      {/* Hero */}
      <section className="relative pt-48 pb-24 overflow-hidden px-4">
        <div className="absolute inset-0 z-0 pointer-events-none">
          <motion.div
            animate={{ scale: [1, 1.15, 1], opacity: [0.2, 0.4, 0.2] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-accent/5 rounded-full blur-[120px]"
          />
        </div>
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-white/40 hover:text-white transition-colors text-xs uppercase tracking-widest mb-12"
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
                className="text-white/30 uppercase tracking-widest text-xs mb-4 block"
              >
                All Work
              </motion.span>
              <TextReveal>
                <h1 className="text-5xl md:text-8xl font-display font-medium leading-tight">
                  ALL <br />
                  <span className="text-white/20 italic">PROJECTS</span>
                </h1>
              </TextReveal>
            </div>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="max-w-md text-white/50 text-right font-light"
            >
              The complete collection — from enterprise systems and mobile apps to AI-powered experiments.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Projects List */}
      <section className="pb-32 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 gap-32">
            {allProjects.map((project, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="group relative"
              >
                {project.pinned && (
                  <div className="absolute -top-6 left-0 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse shadow-[0_0_8px_rgba(99,102,241,0.8)]" />
                    <span className="text-[9px] uppercase tracking-[0.3em] text-accent/70">Featured</span>
                  </div>
                )}

                <Link
                  href={`/projects/${project.slug}`}
                  className="block overflow-hidden rounded-3xl aspect-[16/9] relative group-hover:shadow-[0_0_50px_rgba(99,102,241,0.2)] transition-shadow duration-500"
                >
                  <Image
                    src={project.thumbnail}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-1000 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                    <div className="w-20 h-20 rounded-full bg-accent flex items-center justify-center text-white shadow-[0_0_20px_rgba(99,102,241,0.5)]">
                      <ArrowUpRight strokeWidth={1} />
                    </div>
                  </div>
                </Link>

                <div className="mt-12 flex flex-col md:flex-row justify-between items-start gap-8">
                  <div className="max-w-2xl">
                    <h2 className="text-4xl font-display mb-6 group-hover:translate-x-4 transition-transform duration-500">
                      {project.title}
                    </h2>
                    <p className="text-xl text-white/50 font-light leading-relaxed mb-8">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-3">
                      {project.technologies.map((tag: string, tIdx: number) => (
                        <span
                          key={tIdx}
                          className="text-[10px] uppercase tracking-widest border border-white/10 px-3 py-1 rounded-full text-white/40"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  <Link
                    href={`/projects/${project.slug}`}
                    className="text-accent/60 hover:text-accent transition-colors uppercase tracking-[0.2em] text-[10px] font-bold whitespace-nowrap"
                  >
                    View Case Study
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <div className="py-20 border-t border-white/5 text-center">
        <p className="text-white/20 text-xs uppercase tracking-widest mb-8">Want to work together?</p>
        <a
          href="mailto:amiru@example.com"
          className="text-3xl md:text-5xl font-display text-white/80 hover:text-white transition-colors"
        >
          amiru@example.com
        </a>
      </div>
    </div>
  );
}
