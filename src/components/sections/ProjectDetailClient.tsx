import Image from "next/image";
import Link from "next/link";
import { Github, ExternalLink, BookOpen, Cpu, ArrowLeft, ArrowUpRight } from "lucide-react";
import { TECH_NOTES, type Project } from "@/lib/content";
import StackChip from "@/components/StackChip";
import ProjectArtwork from "@/components/ProjectArtwork";

export default function ProjectDetailClient({ project }: { project: Project }) {
  const isLive = Boolean(project.demo_url);

  return (
    <div className="min-h-screen bg-background text-foreground pt-28 sm:pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <Link href="/projects" className="group mb-12 inline-flex items-center gap-2 font-mono text-foreground/65 transition-colors hover:text-foreground">
          <ArrowLeft size={16} className="transition-transform group-hover:-translate-x-1" />
          <span className="text-sm uppercase tracking-widest">Back to Gallery</span>
        </Link>

        <header className="mb-14 sm:mb-20">
          <h1 className="mb-6 break-words font-display text-[clamp(2rem,7vw,5rem)] font-medium leading-[0.95]">
            {project.title}
          </h1>
          <p className="max-w-2xl font-light leading-relaxed text-foreground/65 sm:text-lg">
            {project.description}
          </p>

          <div className="mt-10 flex flex-wrap gap-x-10 gap-y-6 border-t border-white/10 pt-6">
            <div className="flex flex-col gap-2">
              <span className="font-mono text-[10px] uppercase tracking-widest text-foreground/60">Year</span>
              <span className="text-base">{project.year}</span>
            </div>
            <div className="flex flex-col gap-2">
              <span className="font-mono text-[10px] uppercase tracking-widest text-foreground/60">Focus</span>
              <span className="text-base">{project.technologies[0]}</span>
            </div>
            <div className="flex flex-col gap-2">
              <span className="font-mono text-[10px] uppercase tracking-widest text-foreground/60">Status</span>
              <span className="text-base">{isLive ? "Live demo" : "Source only"}</span>
            </div>
            <div className="flex flex-col gap-2">
              <span className="font-mono text-[10px] uppercase tracking-widest text-foreground/60">Links</span>
              <div className="flex items-center gap-4">
                <a href={project.github_url} target="_blank" rel="noopener noreferrer" aria-label={`${project.title} source on GitHub`} className="transition-colors hover:text-accent">
                  <Github size={20} />
                </a>
                {project.demo_url && (
                  <a href={project.demo_url} target="_blank" rel="noopener noreferrer" aria-label={`${project.title} live demo`} className="transition-colors hover:text-accent">
                    <ExternalLink size={20} />
                  </a>
                )}
                {project.hf_url && (
                  <a href={project.hf_url} target="_blank" rel="noopener noreferrer" aria-label="Hugging Face profile" className="transition-colors hover:text-accent">
                    <Cpu size={20} />
                  </a>
                )}
              </div>
            </div>
          </div>
        </header>

        <section className="mb-20 sm:mb-32">
          <div className="relative aspect-[16/9] overflow-hidden rounded-2xl border border-white/10 sm:rounded-[2rem]">
            {project.thumbnail ? (
              <Image
                src={project.thumbnail}
                alt={`${project.title} — ${project.description}`}
                fill
                sizes="(min-width: 1024px) 80vw, 92vw"
                priority
                className="object-cover"
              />
            ) : (
              <ProjectArtwork project={project} />
            )}
          </div>
        </section>

        <div className="mb-24 grid gap-14 lg:mb-32 lg:grid-cols-3 lg:gap-24">
          <div className="lg:col-span-2">
            <section>
              <h2 className="mb-6 font-mono text-sm font-bold uppercase tracking-widest text-foreground/65">Overview</h2>
              {project.overview && (
                <p className="mb-6 border-l-2 border-white/20 pl-5 text-lg font-light leading-relaxed text-foreground/75 sm:pl-8 sm:text-xl">
                  {project.overview}
                </p>
              )}
              <p className="text-base leading-relaxed text-foreground/65 sm:text-lg">{project.body}</p>
            </section>

            {project.problem && (
              <section className="mt-16">
                <h2 className="mb-5 font-mono text-sm font-bold uppercase tracking-widest text-foreground/65">The problem</h2>
                <p className="text-base leading-relaxed text-foreground/65 sm:text-lg">{project.problem}</p>
              </section>
            )}

            {project.architecture && project.architecture.length > 0 && (
              <section className="mt-16">
                <h2 className="mb-8 font-mono text-sm font-bold uppercase tracking-widest text-foreground/65">How it works</h2>
                <ol className="space-y-7">
                  {project.architecture.map((step, index) => (
                    <li key={step.title} className="flex gap-4 sm:gap-6">
                      <span className="shrink-0 pt-1 font-mono text-xs tabular-nums text-accent/70">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <div>
                        <h3 className="mb-2 font-display text-lg text-foreground/90">{step.title}</h3>
                        <p className="text-sm leading-relaxed text-foreground/60 sm:text-base">{step.detail}</p>
                      </div>
                    </li>
                  ))}
                </ol>
              </section>
            )}

            {project.highlights && project.highlights.length > 0 && (
              <section className="mt-16">
                <h2 className="mb-8 font-mono text-sm font-bold uppercase tracking-widest text-foreground/65">What I built</h2>
                <ul className="space-y-5">
                  {project.highlights.map((item) => (
                    <li key={item} className="flex gap-4 border-l border-white/10 pl-5">
                      <p className="text-sm leading-relaxed text-foreground/65 sm:text-base">{item}</p>
                    </li>
                  ))}
                </ul>
              </section>
            )}
          </div>

          <aside className="space-y-12 lg:sticky lg:top-28 lg:self-start">
            <div>
              <h2 className="mb-2 font-mono text-xs font-bold uppercase tracking-widest text-foreground/65">Stack</h2>
              <p className="mb-5 font-mono text-[10px] uppercase tracking-[0.14em] text-foreground/40">
                Hover or tab a chip for what it did here
              </p>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <StackChip
                    key={tech}
                    name={tech}
                    note={project.stackNotes?.[tech] ?? TECH_NOTES[tech] ?? "Used in this build."}
                  />
                ))}
              </div>
            </div>

            <div>
              <h2 className="mb-5 font-mono text-xs font-bold uppercase tracking-widest text-foreground/65">Links</h2>
              <div className="flex flex-col gap-3">
                <a href={project.github_url} target="_blank" rel="noopener noreferrer" className="group flex items-center justify-between gap-3 border-b border-white/5 pb-3 text-foreground/65 transition-colors hover:text-foreground">
                  <span className="flex items-center gap-3 text-sm"><Github size={16} /> Source code</span>
                  <ArrowUpRight size={14} className="opacity-50 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </a>
                {project.demo_url && (
                  <a href={project.demo_url} target="_blank" rel="noopener noreferrer" className="group flex items-center justify-between gap-3 border-b border-white/5 pb-3 text-foreground/65 transition-colors hover:text-foreground">
                    <span className="flex items-center gap-3 text-sm"><ExternalLink size={16} /> Live demo</span>
                    <ArrowUpRight size={14} className="opacity-50 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </a>
                )}
                {project.wiki_url && (
                  <a href={project.wiki_url} target="_blank" rel="noopener noreferrer" className="group flex items-center justify-between gap-3 border-b border-white/5 pb-3 text-foreground/65 transition-colors hover:text-foreground">
                    <span className="flex items-center gap-3 text-sm"><BookOpen size={16} /> Documentation</span>
                    <ArrowUpRight size={14} className="opacity-50 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </a>
                )}
              </div>
            </div>
          </aside>
        </div>

        <section className="space-y-20 sm:space-y-32">
          {project.video_url && (
            <div>
              <h2 className="mb-12 text-center font-mono text-xs uppercase italic tracking-[0.3em] text-foreground/65">System walkthrough</h2>
              <div className="aspect-video w-full overflow-hidden rounded-2xl border border-white/10 bg-white/5 sm:rounded-[2rem]">
                <iframe
                  src={project.video_url}
                  title={`${project.title} system walkthrough`}
                  className="h-full w-full border-0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>
          )}

          {project.architecture_image && (
            <div>
              <h2 className="mb-12 flex items-center gap-3 font-mono text-sm font-bold uppercase tracking-widest text-foreground/65">
                <Cpu size={18} />
                System architecture
              </h2>
              <div className="relative aspect-[16/9] overflow-hidden rounded-2xl border border-white/10 grayscale transition-all duration-700 hover:grayscale-0 sm:rounded-[2rem]">
                <Image src={project.architecture_image} alt={`${project.title} architecture diagram`} fill sizes="92vw" className="object-cover" />
              </div>
            </div>
          )}
        </section>

        <footer className="mt-28 border-t border-white/5 pt-16 text-center sm:mt-48 sm:pt-24">
          <Link
            href="/#contact"
            className="font-display text-[clamp(1.75rem,6vw,4rem)] font-medium leading-tight transition-colors hover:text-foreground/65"
          >
            HAVE A PROJECT IN MIND?
          </Link>
        </footer>
      </div>
    </div>
  );
}
