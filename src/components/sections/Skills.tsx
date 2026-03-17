"use client";

import { motion, useMotionValue } from "framer-motion";
import TextReveal from "@/components/ui/TextReveal";

const skills = [
  { category: "AI & Gen AI", items: ["OpenAI", "Pinecone", "Hugging Face", "LangChain", "LangGraph", "LlamaIndex", "FastAPI"] },
  { category: "Front-end & Web", items: ["React", "TypeScript", "Tailwind CSS", "Next.js", "HTML5", "CSS3"] },
  { category: "Back-end & Languages", items: ["Java", "Python", "SQL", "C#", "ASP.NET Core", "Java Servlets"] },
  { category: "Tools & Ecosystem", items: ["Git", "GitHub", "Android Studio", "VS Code", "Firebase", "SQLite"] },
];

export default function SkillsSection() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = ({ currentTarget, clientX, clientY }: React.MouseEvent) => {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  };

  return (
    <section className="relative min-h-screen py-32 px-4 bg-surface overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <span className="text-white/30 uppercase tracking-widest text-xs mb-8 block text-center">02 / Expertise</span>
        <div className="flex justify-center mb-32">
          <TextReveal>
            <h2 className="text-5xl md:text-7xl font-display font-bold text-center tracking-tighter">
              SKILLS <span className="text-white/20">&</span> CAPABILITIES
            </h2>
          </TextReveal>
        </div>

        <div 
          onMouseMove={handleMouseMove}
          className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-white/10 border border-white/10 rounded-2xl overflow-hidden group/grid"
        >
          {/* Spotlight Effect */}
          <motion.div
            className="pointer-events-none absolute -inset-px opacity-0 group-hover/grid:opacity-100 transition duration-300 z-10"
            style={{
              background: `radial-gradient(600px circle at ${mouseX}px ${mouseY}px, rgba(99,102,241,0.15), transparent 40%)`,
            }}
          />

          {skills.map((skillGroup, groupIdx) => (
            <div key={groupIdx} className="bg-background p-8 group transition-colors duration-500 hover:bg-white/5 relative z-20">
              <h3 className="text-white/30 text-xs uppercase tracking-widest mb-12 group-hover:text-white transition-colors">
                {skillGroup.category}
              </h3>
              <div className="space-y-4">
                {skillGroup.items.map((skill, skillIdx) => (
                  <motion.div 
                    key={skillIdx}
                    whileHover={{ x: 10 }}
                    className="flex items-center gap-3 text-lg font-light text-white/60 hover:text-white transition-all cursor-default"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-accent scale-0 group-hover:scale-100 transition-transform duration-500 shadow-[0_0_8px_rgba(99,102,241,0.8)]" />
                    {skill}
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
