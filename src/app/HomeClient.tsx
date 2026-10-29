"use client";

import { motion } from "framer-motion";
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
import AgentGraph from "@/components/hero/AgentGraph";
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

      {/* Hero — identity top, statement bottom, the agent topology owning the
          space between them. The graph is decoratively absolute on desktop so
          it never pushes the statement or the meta bar off the fold. */}
      <section
        ref={heroRef}
        id="home"
        className="relative flex min-h-[100svh] flex-col overflow-hidden px-5 pb-8 pt-24 sm:px-8 sm:pb-10 sm:pt-28 lg:px-12"
      >
        {/* Corner registration marks — a quiet "engineered" detail. */}
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 hidden sm:block">
          <span className="absolute left-5 top-5 font-mono text-xs text-foreground/25 sm:left-8 lg:left-12">+</span>
          <span className="absolute right-5 top-5 font-mono text-xs text-foreground/25 sm:right-8 lg:right-12">+</span>
          <span className="absolute bottom-5 left-5 font-mono text-xs text-foreground/25 sm:left-8 lg:left-12">+</span>
          <span className="absolute bottom-5 right-5 font-mono text-xs text-foreground/25 sm:right-8 lg:right-12">+</span>
        </div>

        <div className="relative z-10 flex min-w-0 flex-1 flex-col">
          {/* Identity */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="flex flex-wrap items-start justify-between gap-x-8 gap-y-4"
          >
            <div className="min-w-0">
              <h1 className="font-display font-bold leading-[0.95] text-[clamp(1.5rem,5.2vw,3.5rem)] break-words">
                {profile.name}{" "}
                <span className="accent-gradient">{profile.last_name}</span>
              </h1>
              <p className="mt-3 font-mono text-[9px] uppercase tracking-[0.1em] text-foreground/55 sm:text-[11px] sm:tracking-[0.22em]">
                {profile.subtitle}
              </p>
            </div>

            <div className="flex shrink-0 flex-col gap-2">
              <span className="flex items-center gap-2">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent-secondary opacity-60" />
                  <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent-secondary" />
                </span>
                <span className="whitespace-nowrap font-mono text-[9px] uppercase tracking-[0.14em] text-foreground/65 sm:text-[10px] sm:tracking-[0.16em]">
                  {profile.location}
                </span>
              </span>
              <span className="whitespace-nowrap font-mono text-[9px] uppercase tracking-[0.14em] text-foreground/60 sm:text-[10px] sm:tracking-[0.16em]">
                BSc (Hons) SE · Graduating 2027
              </span>
            </div>
          </motion.div>

          {/* System map */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.1, delay: 0.2, ease: "easeOut" }}
            className="relative mt-10 lg:absolute lg:bottom-[26%] lg:left-[42%] lg:right-0 lg:top-[14%] lg:mt-0"
          >
            <div className="flex h-full items-center justify-center">
              <AgentGraph />
            </div>
          </motion.div>

          {/* Statement + meta bar, anchored to the bottom so the space between
              them and the name reads as one deliberate gap, not two. */}
          <div className="mt-auto flex flex-col gap-8 pt-12 sm:gap-10 sm:pt-14">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
              className="max-w-[30rem]"
            >
              <p className="max-w-[24ch] font-display font-medium leading-[1.1] tracking-tight text-[clamp(1.55rem,3.4vw,2.6rem)] [hyphens:none]">
                {profile.hero_line}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.35 }}
              className="flex flex-col justify-between gap-5 border-t border-white/10 pt-5 sm:pt-6 md:flex-row md:items-center sm:gap-6"
            >
              <div className="flex flex-wrap items-center gap-x-4 gap-y-3 sm:gap-x-5">
                {ctaButtons.map((btn) => (
                  <a
                    key={btn.label}
                    href={btn.href}
                    {...(btn.download ? { download: true } : {})}
                    {...(btn.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                    className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.14em] text-foreground/60 transition-colors hover:text-accent sm:text-[11px] sm:tracking-[0.18em]"
                  >
                    {btn.icon}
                    {btn.label}
                  </a>
                ))}
              </div>

              <Magnetic strength={0.25}>
                <a
                  href="#projects"
                  className="group inline-flex items-center justify-center gap-3 rounded-full border border-white/15 bg-white/5 px-6 py-3.5 font-mono text-[10px] font-bold uppercase tracking-[0.2em] backdrop-blur-sm transition-all duration-500 hover:border-foreground hover:bg-foreground hover:text-background sm:text-[11px]"
                >
                  Selected work
                  <ArrowDown size={13} strokeWidth={2} className="transition-transform group-hover:translate-y-0.5" />
                </a>
              </Magnetic>
            </motion.div>
          </div>
        </div>
      </section>

      <div id="about">
        <AboutSection profile={profile} />
      </div>
      <div id="skills">
        <SkillsSection skills={skills} />
      </div>
      <ExperienceEducation experience={experience} education={education} />
      <div id="projects" className="bg-background">
        <ProjectsListing projects={projects} />
      </div>
      <div id="blog">
        <BlogSection posts={articles} />
      </div>
      <Interests interests={interests} />
      <div id="contact">
        <ContactSection />
      </div>

      <footer className="py-16 sm:py-20 px-5 bg-background text-center border-t border-white/5">
        <div className="flex justify-center mb-8">
          <Magnetic strength={0.3}>
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="font-mono text-[10px] uppercase tracking-[0.3em] text-foreground/55 hover:text-foreground transition-colors"
            >
              Back to top
            </button>
          </Magnetic>
        </div>
        <p className="font-mono text-foreground/55 text-xs uppercase tracking-widest mb-4">
          © {new Date().getFullYear()} Built with intent
        </p>
        <span className="text-foreground/55 font-display italic">{profile.full_name}</span>
      </footer>
    </div>
  );
}
