"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { blogPosts } from "@/lib/data";
import { ArrowUpRight, ArrowLeft, BookOpen, Clock, Tag } from "lucide-react";
import TextReveal from "@/components/ui/TextReveal";

export default function BlogPage() {
  const categories = Array.from(new Set(blogPosts.map((p) => p.category)));

  return (
    <div className="relative min-h-screen bg-background">
      {/* Hero */}
      <section className="relative pt-48 pb-24 overflow-hidden px-4">
        <div className="absolute inset-0 z-0 pointer-events-none">
          <motion.div
            animate={{ scale: [1, 1.15, 1], opacity: [0.15, 0.35, 0.15] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-accent/5 rounded-full blur-[120px]"
          />
        </div>

        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-white/40 hover:text-white transition-colors text-xs uppercase tracking-widest mb-12"
            >
              <ArrowLeft size={14} />
              Back to Home
            </Link>
          </motion.div>

          <div className="flex flex-col md:flex-row justify-between items-end gap-8">
            <div>
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.1 }}
                className="text-white/30 uppercase tracking-widest text-xs mb-4 block"
              >
                All Insights
              </motion.span>
              <TextReveal>
                <h1 className="text-5xl md:text-8xl font-display font-medium leading-tight">
                  THE <br />
                  <span className="text-white/20 italic">JOURNAL</span>
                </h1>
              </TextReveal>
            </div>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-right"
            >
              <p className="text-white/50 font-light mb-4">
                Thoughts on AI, full-stack engineering, and the craft of building intelligent systems.
              </p>
              <a
                href="https://medium.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 text-white/40 hover:text-white transition-colors border-b border-white/10 pb-1 text-sm"
              >
                All articles on Medium
                <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </motion.div>
          </div>

          {/* Category pills */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-wrap gap-3 mt-16"
          >
            {categories.map((cat) => (
              <span
                key={cat}
                className="px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-[10px] uppercase tracking-widest text-white/50"
              >
                {cat}
              </span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Featured Article (first post, large) */}
      <section className="pb-16 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.a
            href={blogPosts[0].link}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="group glass p-3 rounded-[2.5rem] grid grid-cols-1 md:grid-cols-2 gap-0 hover:border-white/30 transition-all duration-500 overflow-hidden mb-8"
          >
            <div className="relative aspect-[4/3] md:aspect-auto rounded-[2rem] overflow-hidden">
              <Image
                src={blogPosts[0].image}
                alt={blogPosts[0].title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute top-4 left-4">
                <span className="px-3 py-1 rounded-full bg-black/60 backdrop-blur-sm text-[9px] uppercase tracking-widest text-white/70 border border-white/10">
                  {blogPosts[0].category}
                </span>
              </div>
              <div className="absolute top-4 right-4">
                <span className="px-3 py-1.5 rounded-full bg-accent/20 backdrop-blur-sm text-[9px] uppercase tracking-widest text-accent/90 border border-accent/20">
                  Featured
                </span>
              </div>
            </div>
            <div className="p-8 md:p-12 flex flex-col justify-center">
              <div className="flex items-center gap-3 mb-6">
                <span className="text-white/30 text-[10px] uppercase tracking-widest">{blogPosts[0].date}</span>
                <div className="w-1 h-1 rounded-full bg-white/20" />
                <span className="text-white/30 text-[10px] uppercase tracking-widest">{blogPosts[0].readTime}</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-display mb-6 leading-snug group-hover:text-white transition-colors">
                {blogPosts[0].title}
              </h2>
              <p className="text-white/50 font-light leading-relaxed mb-8">
                {blogPosts[0].description}
              </p>
              <div className="flex items-center gap-2 text-white/40 group-hover:text-white transition-colors font-medium text-xs uppercase tracking-widest">
                <BookOpen size={14} />
                <span>Read Article</span>
                <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </div>
            </div>
          </motion.a>

          {/* Rest of articles — 3-column grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.slice(1).map((post, idx) => (
              <motion.a
                key={idx}
                href={post.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08 }}
                className="group glass p-2 rounded-[2.5rem] flex flex-col h-full hover:border-white/30 transition-all duration-500"
              >
                <div className="relative aspect-[4/3] rounded-[2rem] overflow-hidden mb-6">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute top-4 left-4 flex gap-2">
                    <span className="px-3 py-1 rounded-full bg-black/60 backdrop-blur-sm text-[9px] uppercase tracking-widest text-white/70 border border-white/10">
                      {post.category}
                    </span>
                    {post.pinned && (
                      <span className="px-3 py-1 rounded-full bg-accent/20 backdrop-blur-sm text-[9px] uppercase tracking-widest text-accent/90 border border-accent/20">
                        Featured
                      </span>
                    )}
                  </div>
                </div>
                <div className="px-5 pb-7 flex flex-col flex-grow">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-white/30 text-[10px] uppercase tracking-widest">{post.date}</span>
                    <div className="w-1 h-1 rounded-full bg-white/20" />
                    <span className="text-white/30 text-[10px] uppercase tracking-widest">{post.readTime}</span>
                  </div>
                  <h3 className="text-xl font-display mb-3 group-hover:text-white transition-colors leading-snug">
                    {post.title}
                  </h3>
                  <p className="text-white/50 font-light text-sm line-clamp-3 mb-6 flex-grow">
                    {post.description}
                  </p>
                  <div className="flex items-center gap-2 text-white/30 group-hover:text-white transition-colors font-medium text-xs uppercase tracking-widest mt-auto">
                    <BookOpen size={12} />
                    <span>Read Article</span>
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <div className="py-20 border-t border-white/5 text-center">
        <p className="text-white/20 text-xs uppercase tracking-widest mb-4">More on Medium</p>
        <a
          href="https://medium.com"
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center gap-3 text-3xl md:text-4xl font-display text-white/70 hover:text-white transition-colors"
        >
          medium.com/@amiru
          <ArrowUpRight size={32} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
        </a>
      </div>
    </div>
  );
}
