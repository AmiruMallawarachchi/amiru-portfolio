"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import ScrollProgress from "@/components/layout/ScrollProgress";
import AboutSection from "@/components/sections/About";
import SkillsSection from "@/components/sections/Skills";
import ExperienceEducation from "@/components/sections/ExperienceEducation";
import Interests from "@/components/sections/Interests";
import ProjectsListing from "@/components/sections/ProjectsListing";
import BlogSection from "@/components/sections/BlogSection";
import ContactSection from "@/components/sections/ContactSection";
import Magnetic from "@/components/ui/Magnetic";

export default function Home() {
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <div className="relative">
      <ScrollProgress />
      
      {/* Hero Section */}
      <section ref={heroRef} id="home" className="relative h-screen flex flex-col items-center justify-center overflow-hidden px-4">
        <div className="absolute inset-0 z-0">
          <motion.div 
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{ 
              duration: 8, 
              repeat: Infinity, 
              ease: "easeInOut" 
            }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white/5 rounded-full blur-[120px]" 
          />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-white/10 rounded-full blur-[80px]" />
        </div>

        <motion.div
          style={{ y, opacity }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative z-10 text-center"
        >
          <div className="flex justify-center mb-10">
            <div className="px-5 py-2 rounded-full border border-white/5 bg-white/5 backdrop-blur-sm flex items-center gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse shadow-[0_0_10px_rgba(255,255,255,0.8)]" />
              <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-white/50">GEN AI ENGINEER</span>
            </div>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-display font-bold mb-8 leading-tight">
            AMIRU <br />
            <span className="text-white/20 hover:text-white transition-colors duration-500">
              MALLAWA ARACHCHI
            </span>
          </h1>
          <p className="text-lg md:text-xl text-white/60 max-w-2xl mx-auto font-light leading-relaxed mb-12">
            Crafting the future of intelligent systems through <span className="text-white">advanced AI engineering</span> 
            and modern full-stack development. Passionate about <span className="text-white italic">Generative AI</span>.
          </p>
          
          <div className="flex justify-center">
            <Magnetic>
              <a href="#projects" className="glass px-8 py-4 rounded-full text-xs uppercase tracking-[0.2em] font-bold hover:bg-white hover:text-black transition-all duration-500">
                View My Work
              </a>
            </Magnetic>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4"
        >
          <div className="w-px h-12 bg-gradient-to-b from-white/30 to-transparent" />
        </motion.div>
      </section>

      <div id="about"><AboutSection /></div>
      <div id="skills"><SkillsSection /></div>
      <ExperienceEducation />
      <Interests />
      <div id="projects" className="bg-background">
        <ProjectsListing />
      </div>
      <div id="blog"><BlogSection /></div>
      <div id="contact"><ContactSection /></div>

      <footer className="py-20 bg-background text-center border-t border-white/5">
        <div className="flex justify-center mb-8">
          <Magnetic strength={0.3}>
            <button 
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="text-[10px] uppercase tracking-[0.3em] text-white/20 hover:text-white transition-colors"
            >
              Back to top
            </button>
          </Magnetic>
        </div>
        <p className="text-white/10 text-xs uppercase tracking-widest mb-4">
          © {new Date().getFullYear()} Precision Engineered
        </p>
        <span className="text-white/30 font-display italic">Amiru Mallawa Arachchi</span>
      </footer>
    </div>
  );
}
