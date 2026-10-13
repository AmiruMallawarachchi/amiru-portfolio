"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Check, Code2, Database, GitBranch, Sparkles } from "lucide-react";

const layers = [
  { icon: Code2, label: "product layer", value: "Next.js / React" },
  { icon: Sparkles, label: "intelligence layer", value: "Agents / RAG / MCP" },
  { icon: Database, label: "systems layer", value: "APIs / data / delivery" },
];

export default function EngineeringHeroVisual() {
  return (
    <div className="relative mx-auto w-full max-w-[620px]">
      <div className="absolute -inset-12 bg-[radial-gradient(circle_at_60%_40%,rgba(46,196,182,0.12),transparent_42%),radial-gradient(circle_at_30%_70%,rgba(255,159,28,0.12),transparent_45%)] blur-3xl" />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative overflow-hidden rounded-[2rem] border border-white/12 bg-[#0c1015]/90 p-5 shadow-[0_25px_80px_rgba(0,0,0,0.35)] backdrop-blur-xl sm:p-7"
      >
        <div className="absolute inset-0 opacity-20 [background-image:linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:32px_32px]" />
        <div className="relative flex items-center justify-between border-b border-white/10 pb-4 font-mono text-[9px] uppercase tracking-[0.22em] text-white/40">
          <span className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-accent shadow-[0_0_10px_rgba(255,159,28,0.9)]" /> system / 01</span>
          <span className="text-accent-secondary">available to build</span>
        </div>

        <div className="relative py-12 sm:py-16">
          <div className="mb-8 flex items-end justify-between gap-6">
            <div>
              <p className="mb-3 font-mono text-[10px] uppercase tracking-[0.25em] text-white/35">software × intelligence</p>
              <h2 className="font-display text-[clamp(2.6rem,7vw,5.5rem)] font-medium leading-[0.84] tracking-[-0.06em]">
                BUILD<br /><span className="text-white/25">WITH INTENT.</span>
              </h2>
            </div>
            <div className="hidden h-16 w-16 items-center justify-center rounded-full border border-accent/40 text-accent sm:flex">
              <ArrowUpRight size={24} strokeWidth={1.2} />
            </div>
          </div>

          <div className="space-y-2">
            {layers.map((layer, index) => {
              const Icon = layer.icon;
              return (
                <div key={layer.label} className="flex items-center gap-3 rounded-xl border border-white/8 bg-white/[0.035] px-3 py-3 sm:px-4">
                  <div className={`flex h-8 w-8 items-center justify-center rounded-lg ${index === 1 ? "bg-accent/15 text-accent" : "bg-white/5 text-accent-secondary"}`}>
                    <Icon size={15} strokeWidth={1.5} />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="font-mono text-[9px] uppercase tracking-[0.18em] text-white/35">{layer.label}</p>
                    <p className="mt-1 truncate text-sm text-white/75">{layer.value}</p>
                  </div>
                  <Check size={14} className="text-accent-secondary/70" />
                </div>
              );
            })}
          </div>
        </div>

        <div className="relative flex items-center justify-between border-t border-white/10 pt-4 font-mono text-[9px] uppercase tracking-[0.18em] text-white/35">
          <span>design → engineer → ship</span>
          <GitBranch size={14} className="text-accent-secondary" />
        </div>
      </motion.div>
    </div>
  );
}
