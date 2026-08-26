"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, BookOpen } from "lucide-react";
import TextReveal from "@/components/ui/TextReveal";
import { MEDIUM_URL, type Article } from "@/lib/content";

interface BlogProps {
  posts: Article[];
}

export default function BlogSection({ posts }: BlogProps) {
  return (
    <section className="py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
          <div>
            <span className="font-mono text-accent/70 uppercase tracking-widest text-xs mb-4 block">{"// insights"}</span>
            <TextReveal>
              <h2 className="text-5xl md:text-7xl font-display font-medium leading-tight">
                FROM THE <br />
                <span className="text-white/20 italic">JOURNAL</span>
              </h2>
            </TextReveal>
          </div>
          <a
            href={MEDIUM_URL}
            target="_blank"
            className="group flex items-center gap-3 text-white/40 hover:text-white transition-colors border-b border-white/10 pb-2"
          >
            <span>Read all on Medium</span>
            <ArrowUpRight size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, idx) => (
            <motion.a
              key={idx}
              href={post.link}
              target="_blank"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group glass p-2 rounded-[2.5rem] flex flex-col h-full hover:border-white/30 transition-all duration-500"
            >
              <div className="relative aspect-[4/3] rounded-[2rem] overflow-hidden mb-8">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Category badge */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full bg-black/60 backdrop-blur-sm text-[9px] uppercase tracking-widest text-white/70 border border-white/10">
                    {post.category}
                  </span>
                </div>
              </div>
              <div className="px-6 pb-8 flex flex-col flex-grow">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-white/30 text-[10px] uppercase tracking-widest">{post.published_date}</span>
                  <div className="w-1 h-1 rounded-full bg-white/20" />
                  <span className="text-white/30 text-[10px] uppercase tracking-widest">{post.read_time}</span>
                </div>
                <h3 className="text-2xl font-display mb-4 group-hover:text-white transition-colors leading-snug">
                  {post.title}
                </h3>
                <p className="text-white/50 font-light text-sm line-clamp-3 mb-8 flex-grow">
                  {post.description}
                </p>
                <div className="flex items-center gap-2 text-white/30 group-hover:text-white transition-colors font-medium text-xs uppercase tracking-widest mt-auto">
                  <BookOpen size={14} />
                  <span>Full Article</span>
                </div>
              </div>
            </motion.a>
          ))}
        </div>

        {/* View All Articles Link */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex justify-center mt-16"
        >
          <Link
            href="/blog"
            className="group flex items-center gap-4 glass px-10 py-5 rounded-full hover:bg-white hover:text-black transition-all duration-500"
          >
            <span className="text-xs uppercase tracking-[0.3em] font-bold">View All Articles</span>
            <ArrowUpRight
              size={16}
              className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300"
            />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
