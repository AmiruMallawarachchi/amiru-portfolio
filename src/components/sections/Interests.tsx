"use client";

import { motion } from "framer-motion";

interface InterestsProps {
  interests: string[];
}

export default function Interests({ interests }: InterestsProps) {
  return (
    <section className="relative py-24 sm:py-32 px-5 sm:px-8 bg-surface overflow-hidden">
      <div className="max-w-4xl mx-auto text-center">
        <span className="font-mono text-accent/70 uppercase tracking-widest text-xs mb-8 block">{"// interests"}</span>
        <h2 className="text-[clamp(1.5rem,5vw,3rem)] font-display mb-12 sm:mb-16 italic">&ldquo;Passionate about the future&rdquo;</h2>
        
        <div className="flex flex-wrap justify-center gap-4">
          {interests.map((interest, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.1, rotate: idx % 2 === 0 ? 2 : -2 }}
              className="px-4 sm:px-6 py-2.5 sm:py-3 rounded-full border border-white/10 glass text-sm sm:text-base md:text-lg font-light text-white/60 hover:text-white hover:border-white/30 transition-all cursor-default"
            >
              {interest}
            </motion.div>
          ))}
        </div>
      </div>

      {/* Decorative large text */}
      <div className="absolute -bottom-6 sm:-bottom-20 left-0 right-0 pointer-events-none overflow-hidden h-16 sm:h-40">
        <motion.div 
          animate={{ x: [0, -1000] }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          className="text-white/[0.02] text-[70px] sm:text-[120px] md:text-[200px] font-bold whitespace-nowrap leading-none uppercase"
        >
          GEN AI • INNOVATION • SOFTWARE • FUTURE • INTELLIGENCE • GEN AI • INNOVATION • SOFTWARE • FUTURE • INTELLIGENCE
        </motion.div>
      </div>
    </section>
  );
}
