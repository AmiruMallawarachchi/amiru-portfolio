"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import TextReveal from "@/components/ui/TextReveal";
import type { Profile } from "@/lib/content";

interface AboutProps {
  profile: Profile;
}

export default function AboutSection({ profile }: AboutProps) {
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
      <motion.div style={{ opacity, y }} className="max-w-6xl w-full">
        <span className="font-mono text-accent/70 uppercase tracking-widest text-xs mb-8 block">{"// profile"}</span>

        <div className="grid md:grid-cols-[1fr_2fr] gap-16 items-start">
          <div className="relative aspect-[3/4] rounded-2xl overflow-hidden border border-white/10 grayscale hover:grayscale-0 transition-all duration-700">
            <Image
              src={profile.hero_image || "/amiru.jpg"}
              alt={profile.full_name}
              fill
              className="object-cover object-top"
            />
          </div>

          <div>
            <TextReveal>
              <h2 className="text-4xl md:text-6xl font-display font-medium mb-12 leading-tight">
                {profile.bio_intro}
              </h2>
            </TextReveal>

            <div className="grid md:grid-cols-2 gap-12">
              <p className="text-foreground/60 text-lg font-light leading-relaxed">
                {profile.bio_description}
              </p>
              <div className="space-y-4">
                <div className="border-l border-white/10 pl-6 py-2">
                  <span className="font-mono text-foreground/30 text-xs block mb-1">Status</span>
                  <p className="text-sm font-medium">{profile.status}</p>
                </div>
                <div className="border-l border-white/10 pl-6 py-2">
                  <span className="font-mono text-foreground/30 text-xs block mb-1">Location</span>
                  <p className="text-sm font-medium">{profile.location}</p>
                </div>
                <div className="border-l border-white/10 pl-6 py-2">
                  <span className="font-mono text-foreground/30 text-xs block mb-1">Passions</span>
                  <p className="text-sm font-medium text-foreground italic">{profile.passions}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
