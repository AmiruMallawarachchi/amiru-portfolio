"use client";

import { motion, useScroll } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { pinnedProjects } from "@/lib/data";
import { ArrowUpRight } from "lucide-react";
import TextReveal from "@/components/ui/TextReveal";

export default function ProjectsListing() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section ref={containerRef} className="py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
          <div>
            <span className="text-white/30 uppercase tracking-widest text-xs mb-4 block">06 / Projects</span>
            <TextReveal>
              <h2 className="text-5xl md:text-7xl font-display font-medium leading-tight">
                FEATURED <br />
                <span className="text-white/20 italic">WORKS</span>
              </h2>
            </TextReveal>
          </div>
          <p className="max-w-md text-white/50 text-right font-light">
            A selection of projects ranging from enterprise systems to AI-powered experiments.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-32">
          {pinnedProjects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="group relative"
            >
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
                  <h3 className="text-4xl font-display mb-6 group-hover:translate-x-4 transition-transform duration-500">
                    {project.title}
                  </h3>
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
                  className="text-accent/60 hover:text-accent transition-colors uppercase tracking-[0.2em] text-[10px] font-bold"
                >
                  View Case Study
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Projects Link */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex justify-center mt-24"
        >
          <Link
            href="/projects"
            className="group flex items-center gap-4 glass px-10 py-5 rounded-full hover:bg-white hover:text-black transition-all duration-500"
          >
            <span className="text-xs uppercase tracking-[0.3em] font-bold">View All Projects</span>
            <ArrowUpRight
              size={16}
              className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300"
            />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
