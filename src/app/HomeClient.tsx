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

      {/* Hero — corner-anchored: identity top, statement centre, meta bar bottom.
          The router graph owns the middle instead of a centred text stack. */}
      <section
        ref={heroRef}
        id="home"
        className="relative min-h-[100svh] flex flex-col overflow-hidden px-5 sm:px-8 lg:px-12 pt-28 sm:pt-32 pb-8 sm:pb-10"
      >
        {/* Signature visual, given its own column on the right so its node
            labels never collide with the copy. Hidden on phones, where the
            nodes fall outside the viewport and the labels go illegible. */}
        <div className="absolute right-0 top-0 bottom-0 w-[52%] z-0 hidden md:flex items-center justify-center pointer-events-none">
          <div className="w-full px-6">
            <RouterGraph />
          </div>
          <div className="absolute inset-y-0 left-0 w-40 bg-gradient-to-r from-background to-transparent" />
        </div>

        <motion.div
          style={{ y, opacity }}
          className="relative z-10 flex flex-col flex-1 min-w-0"
        >
          {/* Identity */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="flex flex-wrap items-start justify-between gap-x-8 gap-y-3 min-w-0"
          >
            <div className="min-w-0 md:max-w-[58%]">
              <h1 className="font-display font-bold leading-[0.95] text-[clamp(1.5rem,6vw,4rem)] break-words">
                {profile.name}{" "}
                <span className="accent-gradient">{profile.last_name}</span>
              </h1>
              <p className="font-mono text-[9px] sm:text-[11px] uppercase tracking-[0.1em] sm:tracking-[0.22em] text-foreground/40 mt-3">
                {profile.subtitle}
              </p>
            </div>

            <div className="flex items-center gap-2.5 shrink-0">
              <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse shadow-[0_0_10px_rgba(255,159,28,0.8)]" />
              <span className="font-mono text-[9px] sm:text-[10px] uppercase tracking-[0.15em] sm:tracking-[0.2em] text-accent whitespace-nowrap">
                Open to work
              </span>
            </div>
          </motion.div>

          {/* Statement + meta bar, anchored to the bottom so the space between
              them and the name reads as one deliberate gap, not two. */}
          <div className="mt-auto pt-16 flex flex-col gap-8 sm:gap-10">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
              className="max-w-[20ch] sm:max-w-[24ch] md:max-w-[19ch] font-display font-medium leading-[1.12] tracking-tight text-[clamp(1.5rem,3.9vw,2.85rem)] [hyphens:none]"
            >
              {profile.hero_line}
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.35 }}
              className="pt-5 sm:pt-6 border-t border-white/10 flex flex-col md:flex-row md:items-center justify-between gap-5 sm:gap-6"
            >
              <div className="flex flex-wrap items-center gap-x-4 sm:gap-x-5 gap-y-3">
                {ctaButtons.map((btn) => (
                  <a
                    key={btn.label}
                    href={btn.href}
                    {...(btn.download ? { download: true } : {})}
                    {...(btn.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                    className="flex items-center gap-2 font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.14em] sm:tracking-[0.18em] text-foreground/60 hover:text-accent transition-colors"
                  >
                    {btn.icon}
                    {btn.label}
                  </a>
                ))}
              </div>

              <Magnetic strength={0.25}>
                <a
                  href="#projects"
                  className="group inline-flex items-center justify-center gap-3 rounded-full border border-white/15 bg-white/5 backdrop-blur-sm px-6 py-3.5 font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.2em] font-bold hover:bg-foreground hover:text-background hover:border-foreground transition-all duration-500"
                >
                  Selected work
                  <ArrowDown size={13} strokeWidth={2} className="group-hover:translate-y-0.5 transition-transform" />
                </a>
              </Magnetic>
            </motion.div>
          </div>
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

      <footer className="py-16 sm:py-20 px-5 bg-background text-center border-t border-white/5">
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
