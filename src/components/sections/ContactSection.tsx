"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter } from "lucide-react";
import { useState } from "react";
import TextReveal from "@/components/ui/TextReveal";
import Magnetic from "@/components/ui/Magnetic";

export default function ContactSection() {
  const [formState, setFormState] = useState("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormState("submitting");
    setTimeout(() => {
      setFormState("success");
      // Open mailto as per request
      window.location.href = "mailto:amirunoel8@gmail.com?subject=Portfolio Contact";
    }, 1000);
  };

  return (
    <section className="py-32 bg-surface">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-24">
          {/* Info */}
          <div>
            <span className="text-white/30 uppercase tracking-widest text-xs mb-8 block">08 / Contact</span>
            <TextReveal>
              <h2 className="text-5xl md:text-8xl font-display font-medium mb-12 leading-tight">
                LET'S <br />
                <span className="text-white/20 italic">CONNECT</span>
              </h2>
            </TextReveal>
            
            <div className="space-y-12">
              <div className="flex items-start gap-6 group">
                <div className="w-12 h-12 rounded-full glass flex items-center justify-center text-white/40 group-hover:text-white group-hover:bg-white/10 transition-all">
                  <Mail size={20} />
                </div>
                <div>
                  <span className="text-white/30 text-[10px] uppercase tracking-widest mb-1 block">Email</span>
                  <a href="mailto:amirunoel8@gmail.com" className="text-xl font-light hover:text-white/60 transition-colors">
                    amirunoel8@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-6 group">
                <div className="w-12 h-12 rounded-full glass flex items-center justify-center text-white/40 group-hover:text-white group-hover:bg-white/10 transition-all">
                  <Phone size={20} />
                </div>
                <div>
                  <span className="text-white/30 text-[10px] uppercase tracking-widest mb-1 block">Phone</span>
                  <a href="tel:+94766379121" className="text-xl font-light hover:text-white/60 transition-colors">
                    +94 766 379 121
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-6 group">
                <div className="w-12 h-12 rounded-full glass flex items-center justify-center text-white/40 group-hover:text-white group-hover:bg-white/10 transition-all">
                  <MapPin size={20} />
                </div>
                <div>
                  <span className="text-white/30 text-[10px] uppercase tracking-widest mb-1 block">Location</span>
                  <p className="text-xl font-light">Kaldemulla, Moratuwa</p>
                </div>
              </div>
            </div>

            <div className="mt-24 pt-12 border-t border-white/5 flex gap-8">
              <Magnetic strength={0.5}><a href="https://github.com" className="text-white/30 hover:text-white transition-colors font-medium uppercase tracking-[0.2em] text-[10px]">GitHub</a></Magnetic>
              <Magnetic strength={0.5}><a href="https://linkedin.com" className="text-white/30 hover:text-white transition-colors font-medium uppercase tracking-[0.2em] text-[10px]">LinkedIn</a></Magnetic>
              <Magnetic strength={0.5}><a href="https://medium.com" className="text-white/30 hover:text-white transition-colors font-medium uppercase tracking-[0.2em] text-[10px]">Medium</a></Magnetic>
            </div>
          </div>

          {/* Form */}
          <div className="glass p-12 rounded-[3rem]">
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest text-white/30 font-bold ml-1">Your Name</label>
                <input 
                  type="text" 
                  required
                  placeholder="Amiru Arachchi"
                  className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-white/40 transition-colors text-white"
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest text-white/30 font-bold ml-1">Email Address</label>
                <input 
                  type="email" 
                  required
                  placeholder="hello@example.com"
                  className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-white/40 transition-colors text-white"
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest text-white/30 font-bold ml-1">Message</label>
                <textarea 
                  required
                  rows={4}
                  placeholder="How can I help you?"
                  className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-white/40 transition-colors text-white resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-white text-black py-4 rounded-2xl font-bold uppercase tracking-widest text-xs hover:bg-white/80 transition-all flex items-center justify-center gap-3 active:scale-95 disabled:opacity-50"
                disabled={formState === "submitting"}
              >
                {formState === "submitting" ? "Sending..." : "Send Message"}
                <Send size={16} />
              </button>
              {formState === "success" && (
                <p className="text-center text-xs text-white/60 mt-4 italic">
                  Opening mail client... Thanks for reaching out!
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
