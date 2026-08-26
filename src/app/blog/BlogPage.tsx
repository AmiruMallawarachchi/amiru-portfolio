"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, ArrowLeft, BookOpen } from "lucide-react";
import TextReveal from "@/components/ui/TextReveal";
import { MEDIUM_URL, type Article } from "@/lib/content";

interface BlogProps {
  posts: Article[];
}

export default function BlogPage({ posts }: BlogProps) {
  const categories = Array.from(new Set(posts.map((p) => p.category)));

  return (
    <div className="relative min-h-screen bg-background">
      {/* Hero */}
      <section className="relative pt-32 sm:pt-40 md:pt-48 pb-16 sm:pb-24 overflow-hidden px-5 sm:px-8">
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

          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8">
            <div>
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.1 }}
                className="font-mono text-accent/70 uppercase tracking-widest text-xs mb-4 block"
              >
                {"// writing"}
              </motion.span>
              <TextReveal>
                <h1 className="font-display font-medium leading-[0.95] text-[clamp(2.5rem,9vw,6rem)]">
                  THE <br />
                  <span className="text-white/20 italic">JOURNAL</span>
                </h1>
              </TextReveal>
            </div>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="md:text-right"
            >
              <p className="text-white/50 font-light mb-4">
                Explainers on transformers, sequence modelling and the maths under modern AI.
              </p>
              <a
                href={MEDIUM_URL}
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
      <section className="pb-16 px-5 sm:px-8">
        <div className="max-w-7xl mx-auto">
          {posts.length > 0 && (
            <motion.a
              href={posts[0].link}
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
                  src={posts[0].image}
                  alt={posts[0].title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full bg-black/60 backdrop-blur-sm text-[9px] uppercase tracking-widest text-white/70 border border-white/10">
                    {posts[0].category}
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
                  <span className="text-white/30 text-[10px] uppercase tracking-widest">{posts[0].published_date}</span>
                  <div className="w-1 h-1 rounded-full bg-white/20" />
                  <span className="text-white/30 text-[10px] uppercase tracking-widest">{posts[0].read_time}</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-display mb-6 leading-snug group-hover:text-white transition-colors">
                  {posts[0].title}
                </h2>
                <p className="text-white/50 font-light leading-relaxed mb-8">
                  {posts[0].description}
                </p>
                <div className="flex items-center gap-2 text-white/40 group-hover:text-white transition-colors font-medium text-xs uppercase tracking-widest">
                  <BookOpen size={14} />
                  <span>Read Article</span>
                  <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </div>
            </motion.a>
          )}

          {/* Rest of articles — 3-column grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.slice(1).map((post, idx) => (
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
                  </div>
                </div>
                <div className="px-5 pb-7 flex flex-col flex-grow">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-white/30 text-[10px] uppercase tracking-widest">{post.published_date}</span>
                    <div className="w-1 h-1 rounded-full bg-white/20" />
                    <span className="text-white/30 text-[10px] uppercase tracking-widest">{post.read_time}</span>
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
      <div className="py-16 sm:py-20 px-5 border-t border-white/5 text-center">
        <p className="font-mono text-white/20 text-xs uppercase tracking-widest mb-4">More on Medium</p>
        <a
          href={MEDIUM_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center gap-2 sm:gap-3 font-display text-white/70 hover:text-white transition-colors text-[clamp(1.25rem,5.5vw,2.25rem)] break-all"
        >
          medium.com/@amirunoel8
          <ArrowUpRight className="shrink-0 w-5 h-5 sm:w-8 sm:h-8 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
        </a>
      </div>
    </div>
  );
}
