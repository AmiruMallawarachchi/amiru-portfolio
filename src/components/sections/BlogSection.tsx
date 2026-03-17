"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowUpRight, BookOpen } from "lucide-react";
import TextReveal from "@/components/ui/TextReveal";

const blogPosts = [
  {
    title: "The Future of Generative AI in Software Engineering",
    description: "Exploring how LLMs are reshaping the development lifecycle and what it means for the next generation of engineers.",
    link: "https://medium.com",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800",
    date: "Mar 15, 2024"
  },
  {
    title: "Building Scalable APIs with ASP.NET Core",
    description: "A deep dive into RESTful architecture and security best practices for modern web applications.",
    link: "https://medium.com",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc48?auto=format&fit=crop&q=80&w=800",
    date: "Feb 28, 2024"
  },
  {
    title: "Prompt Engineering: Beyond the Basics",
    description: "Advanced techniques for getting the most out of Claude, GPT-4, and other leading language models.",
    link: "https://medium.com",
    image: "https://images.unsplash.com/photo-1620712943543-bcc382821859?auto=format&fit=crop&q=80&w=800",
    date: "Jan 12, 2024"
  }
];

export default function BlogSection() {
  return (
    <section className="py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
          <div>
            <span className="text-white/30 uppercase tracking-widest text-xs mb-4 block">07 / Insights</span>
            <TextReveal>
              <h2 className="text-5xl md:text-7xl font-display font-medium leading-tight">
                FROM THE <br />
                <span className="text-white/20 italic">JOURNAL</span>
              </h2>
            </TextReveal>
          </div>
          <a 
            href="https://medium.com" 
            target="_blank"
            className="group flex items-center gap-3 text-white/40 hover:text-white transition-colors border-b border-white/10 pb-2"
          >
            <span>Read all on Medium</span>
            <ArrowUpRight size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, idx) => (
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
              </div>
              <div className="px-6 pb-8 flex flex-col flex-grow">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-white/30 text-[10px] uppercase tracking-widest">{post.date}</span>
                  <div className="w-1 h-1 rounded-full bg-white/20" />
                  <span className="text-white/30 text-[10px] uppercase tracking-widest">5 min read</span>
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
      </div>
    </section>
  );
}
