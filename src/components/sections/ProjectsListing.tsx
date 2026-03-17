"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { allProjects } from "@/lib/data";
import { ArrowUpRight } from "lucide-react";
import TextReveal from "@/components/ui/TextReveal";

export default function ProjectsListing() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

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
          {allProjects.map((project, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="group relative"
            >
              <Link href={`/projects/${project.slug}`} className="block overflow-hidden rounded-3xl aspect-[16/9] relative">
                <Image 
                  src={project.thumbnail}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-1000 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                  <div className="w-20 h-20 rounded-full bg-white flex items-center justify-center text-black">
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
                      <span key={tIdx} className="text-[10px] uppercase tracking-widest border border-white/10 px-3 py-1 rounded-full text-white/40">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <Link 
                  href={`/projects/${project.slug}`}
                  className="text-white/30 hover:text-white transition-colors uppercase tracking-[0.2em] text-[10px] font-bold"
                >
                  View Case Study
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
