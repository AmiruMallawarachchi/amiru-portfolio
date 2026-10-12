"use client";

import { motion } from "framer-motion";
import {
  Activity,
  BrainCircuit,
  Code2,
  Database,
  LockKeyhole,
  Network,
  Smartphone,
  Sparkles,
} from "lucide-react";
import type { Project } from "@/lib/content";

const artwork = {
  mindlens: { icon: BrainCircuit, accent: "#ff9f1c", secondary: "#2ec4b6", label: "bounded intelligence" },
  travel: { icon: Network, accent: "#8da7ff", secondary: "#f19bd8", label: "tool-aware routing" },
  solvix: { icon: Activity, accent: "#56d7a7", secondary: "#e6c77a", label: "accountable operations" },
  data: { icon: Database, accent: "#78c8ff", secondary: "#bf8fff", label: "signals into systems" },
  security: { icon: LockKeyhole, accent: "#ffb85c", secondary: "#e67a86", label: "trust by design" },
  mobile: { icon: Smartphone, accent: "#b8a4ff", secondary: "#6be3d0", label: "built for the pocket" },
  web: { icon: Code2, accent: "#65d4ca", secondary: "#ff9f1c", label: "software in motion" },
  learning: { icon: Sparkles, accent: "#ff9f1c", secondary: "#9e8cff", label: "always in progress" },
};

export default function ProjectArtwork({ project }: { project: Project }) {
  const theme = artwork[project.visual || "learning"];
  const Icon = theme.icon;

  return (
    <div
      className="absolute inset-0 overflow-hidden bg-[#11151b]"
      style={{ background: `radial-gradient(circle at 78% 22%, ${theme.accent}26, transparent 38%), radial-gradient(circle at 18% 86%, ${theme.secondary}20, transparent 42%), #0e1218` }}
    >
      <div className="absolute inset-0 opacity-25 [background-image:linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:32px_32px]" />
      <motion.div
        aria-hidden="true"
        className="absolute -right-10 -top-20 h-72 w-72 rounded-full border border-white/10"
        animate={{ rotate: 360, scale: [1, 1.08, 1] }}
        transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        aria-hidden="true"
        className="absolute right-16 top-12 h-28 w-28 rounded-full border border-white/10"
        animate={{ rotate: -360, scale: [1, 0.9, 1] }}
        transition={{ duration: 14, repeat: Infinity, ease: "linear" }}
      />
      <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/55 to-transparent" />

      <div className="relative flex h-full flex-col justify-between p-5 sm:p-7">
        <div className="flex items-start justify-between">
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/15 bg-black/20 backdrop-blur-md" style={{ color: theme.accent }}>
            <Icon size={21} strokeWidth={1.5} />
          </div>
          <span className="font-mono text-[9px] uppercase tracking-[0.22em] text-white/45">generated visual / 0{(project.title.length % 7) + 1}</span>
        </div>

        <div>
          <div className="mb-3 flex items-center gap-2 font-mono text-[9px] uppercase tracking-[0.2em] text-white/45">
            <span className="h-1.5 w-1.5 rounded-full" style={{ background: theme.accent, boxShadow: `0 0 12px ${theme.accent}` }} />
            {theme.label}
          </div>
          <div className="flex items-end justify-between gap-4">
            <h3 className="max-w-[14ch] font-display text-2xl leading-[0.95] text-white/90 sm:text-3xl">{project.title}</h3>
            <div className="hidden items-end gap-1 sm:flex" aria-hidden="true">
              {[0.3, 0.7, 0.45, 0.9, 0.55].map((height, index) => (
                <motion.span
                  key={index}
                  className="w-1 rounded-full"
                  style={{ background: index % 2 ? theme.secondary : theme.accent }}
                  animate={{ height: [`${height * 22}px`, `${(1 - height) * 26 + 5}px`, `${height * 22}px`] }}
                  transition={{ duration: 1.8 + index * 0.16, repeat: Infinity, ease: "easeInOut" }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
