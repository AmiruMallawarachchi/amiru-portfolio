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
import RouterGraph from "@/components/hero/RouterGraph";
import { Download, Github, Linkedin, Mail, ArrowDown, Cpu } from "lucide-react";
import type { Project, Profile, Article } from "@/lib/content";

interface HomeClientProps {
  profile: Profile;
  skills: { category: string; items: string[] }[];
  experience: { title: string; company: string; period: string; description: string }[];
  education: { degree: string; institution: string; period: string; description: string }[];
  interests: string[];
  projects: Project[];
  articles: Article[];
}

export default function HomeClient({
  profile,
  skills,
  experience,
  education,
  interests,
  projects,
  articles,
}: HomeClientProps) {
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const ctaButtons = [
    {
      label: "Download CV",
      icon: <Download size={13} strokeWidth={2} />,
      href: profile.cv_url,
      download: true,
      primary: false,
    },
    {
      label: "GitHub",
      icon: <Github size={13} strokeWidth={2} />,
      href: profile.github_url,
      external: true,
      primary: false,
    },
    {
      label: "LinkedIn",
      icon: <Linkedin size={13} strokeWidth={2} />,
      href: profile.linkedin_url,
      external: true,
      primary: false,
    },
    {
      label: "Hugging Face",
      icon: <Cpu size={13} strokeWidth={2} />,
      href: profile.huggingface_url,
      external: true,
      primary: false,
    },
    {
      label: "Email Me",
      icon: <Mail size={13} strokeWidth={2} />,
      href: `mailto:${profile.email}`,
      primary: false,
    },
  ];

  return (
    <div className="relative">
      <ScrollProgress />

      {/* Hero Section */}
      <section
        ref={heroRef}
        id="home"
        className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-4 pt-32 pb-20"
      >
        {/* Router graph — signature visual. Hidden on small screens, where the
            nodes fall outside the viewport and only add noise. */}
        <div className="absolute inset-0 z-0 hidden md:flex items-center justify-center pointer-events-none">
          <div className="w-[1200px] max-w-[110vw]">
            <RouterGraph />
          </div>
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_40%_32%_at_50%_50%,var(--color-background)_35%,transparent_100%)]" />
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
            <div className="px-5 py-2 rounded-full border border-accent/30 bg-accent/10 backdrop-blur-sm flex items-center gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse shadow-[0_0_10px_rgba(255,159,28,0.8)]" />
              <span className="font-mono text-[10px] uppercase tracking-[0.4em] font-bold text-accent">
                {profile.title}
              </span>
            </div>
          </div>

          <h1 className="text-6xl md:text-8xl font-display font-bold mb-6 leading-[0.95]">
            {profile.name} <br />
            <span className="accent-gradient">{profile.last_name}</span>
          </h1>
          <p className="font-mono text-[10px] md:text-xs uppercase tracking-[0.25em] text-foreground/35 mb-8">
            {profile.subtitle}
          </p>
          <p className="text-lg md:text-xl text-foreground/70 max-w-2xl mx-auto font-light leading-relaxed mb-12">
            {profile.hero_line}
          </p>

          {/* CTA Row */}
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Magnetic>
              <a
                href="#projects"
                className="glass px-7 py-3.5 rounded-full text-xs uppercase tracking-[0.2em] font-bold hover:bg-foreground hover:text-background transition-all duration-500 flex items-center gap-2"
              >
                <ArrowDown size={13} strokeWidth={2} />
                View My Work
              </a>
            </Magnetic>

            {ctaButtons.map((btn) => (
              <Magnetic key={btn.label} strength={0.3}>
                <a
                  href={btn.href}
                  {...(btn.download ? { download: true } : {})}
                  {...(btn.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  className="flex items-center gap-2 px-5 py-3.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm text-foreground/60 hover:text-foreground hover:border-white/30 hover:bg-white/10 transition-all duration-300 text-xs uppercase tracking-[0.15em] font-semibold"
                >
                  {btn.icon}
                  {btn.label}
                </a>
              </Magnetic>
            ))}
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

      <div id="about">
        <AboutSection profile={profile} />
      </div>
      <div id="skills">
        <SkillsSection skills={skills} />
      </div>
      <ExperienceEducation experience={experience} education={education} />
      <Interests interests={interests} />
      <div id="projects" className="bg-background">
        <ProjectsListing projects={projects} />
      </div>
      <div id="blog">
        <BlogSection posts={articles} />
      </div>
      <div id="contact">
        <ContactSection />
      </div>

      <footer className="py-20 bg-background text-center border-t border-white/5">
        <div className="flex justify-center mb-8">
          <Magnetic strength={0.3}>
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="font-mono text-[10px] uppercase tracking-[0.3em] text-foreground/20 hover:text-foreground transition-colors"
            >
              Back to top
            </button>
          </Magnetic>
        </div>
        <p className="font-mono text-foreground/20 text-xs uppercase tracking-widest mb-4">
          © {new Date().getFullYear()} Built with intent
        </p>
        <span className="text-foreground/40 font-display italic">{profile.full_name}</span>
      </footer>
    </div>
  );
}
