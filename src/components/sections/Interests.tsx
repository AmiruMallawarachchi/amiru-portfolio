"use client";

import { motion } from "framer-motion";

const interests = [
  "Generative AI", "Neural Networks", "Human-Computer Interaction", 
  "Sustainable Tech", "Digital Art", "Space Exploration", "Quantum Computing"
];

export default function Interests() {
  return (
    <section className="relative py-32 px-4 bg-surface overflow-hidden">
      <div className="max-w-4xl mx-auto text-center">
        <span className="text-white/30 uppercase tracking-widest text-xs mb-8 block">05 / Interests</span>
        <h2 className="text-4xl md:text-5xl font-display mb-16 italic">"Passionate about the future"</h2>
        
        <div className="flex flex-wrap justify-center gap-4">
          {interests.map((interest, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.1, rotate: idx % 2 === 0 ? 2 : -2 }}
              className="px-6 py-3 rounded-full border border-white/10 glass text-lg font-light text-white/60 hover:text-white hover:border-white/30 transition-all cursor-default"
            >
              {interest}
            </motion.div>
          ))}
        </div>
      </div>

      {/* Decorative large text */}
      <div className="absolute -bottom-20 left-0 right-0 pointer-events-none overflow-hidden h-40">
        <motion.div 
          animate={{ x: [0, -1000] }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          className="text-white/[0.02] text-[200px] font-bold whitespace-nowrap leading-none uppercase"
        >
          GEN AI • INNOVATION • SOFTWARE • FUTURE • INTELLIGENCE • GEN AI • INNOVATION • SOFTWARE • FUTURE • INTELLIGENCE
        </motion.div>
      </div>
    </section>
  );
}
