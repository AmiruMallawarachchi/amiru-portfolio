"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import TextReveal from "@/components/ui/TextReveal";

export default function AboutSection() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [100, 0, 0, -100]);

  return (
    <section 
      ref={containerRef}
      className="relative min-h-screen py-32 px-4 flex items-center justify-center bg-background"
    >
      <motion.div 
        style={{ opacity, y }}
        className="max-w-6xl w-full"
      >
        <span className="text-white/30 uppercase tracking-widest text-xs mb-8 block">01 / Profile</span>
        
        <div className="grid md:grid-cols-[1fr_2fr] gap-16 items-start">
          <div className="relative aspect-square rounded-2xl overflow-hidden border border-white/10 grayscale hover:grayscale-0 transition-all duration-700">
            <Image 
              src="/amiru.jpg"
              alt="Amiru Mallawa Arachchi"
              fill
              className="object-cover"
            />
          </div>
          
          <div>
            <TextReveal>
              <h2 className="text-4xl md:text-6xl font-display font-medium mb-12 leading-tight">
                Pioneering the intersection of <span className="text-white/40">Software Intelligence</span> and 
                <span className="italic text-white"> Human Potential</span>.
              </h2>
            </TextReveal>
            
            <div className="grid md:grid-cols-2 gap-12">
          <p className="text-white/60 text-lg font-light leading-relaxed">
            Motivated Software Engineering student with strong technical knowledge in full-stack 
            development and growing expertise in AI engineering. Experienced with modern 
            AI-powered development tools including Claude Code, GitHub Copilot, and Cursor.
          </p>
          <div className="space-y-4">
            <div className="border-l border-white/10 pl-6 py-2">
              <span className="text-white/30 text-xs block mb-1">Status</span>
              <p className="text-sm font-medium">BSc (Hons) Software Engineering Student</p>
            </div>
            <div className="border-l border-white/10 pl-6 py-2">
              <span className="text-white/30 text-xs block mb-1">Location</span>
              <p className="text-sm font-medium">Kaldemulla, Moratuwa</p>
            </div>
            <div className="border-l border-white/10 pl-6 py-2">
              <span className="text-white/30 text-xs block mb-1">Passions</span>
              <p className="text-sm font-medium text-white italic">"I Love AI"</p>
            </div>
          </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
