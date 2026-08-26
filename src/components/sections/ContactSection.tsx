"use client";

import { Mail, Phone, MapPin, Send, Download } from "lucide-react";
import { useState } from "react";
import TextReveal from "@/components/ui/TextReveal";
import Magnetic from "@/components/ui/Magnetic";
import { profile } from "@/lib/content";

export default function ContactSection() {
  const [formState, setFormState] = useState("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormState("submitting");

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      message: formData.get("message"),
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setFormState("success");
      } else {
        setFormState("error");
      }
    } catch {
      setFormState("error");
    }
  };

  return (
    <section className="py-24 sm:py-32 bg-surface">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Info */}
          <div>
            <span className="font-mono text-accent/70 uppercase tracking-widest text-xs mb-8 block">{"// contact"}</span>
            <TextReveal>
              <h2 className="font-display font-medium mb-10 sm:mb-12 leading-[0.95] text-[clamp(2.5rem,9vw,6rem)]">
                LET&apos;S <br />
                <span className="text-white/20 italic">CONNECT</span>
              </h2>
            </TextReveal>
            
            <div className="space-y-10 sm:space-y-12">
              <div className="flex items-start gap-6 group">
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-background transition-all duration-500 shadow-[0_0_15px_rgba(255,159,28,0.2)]">
                  <Mail size={20} />
                </div>
                <div>
                  <span className="text-white/30 text-[10px] uppercase tracking-widest mb-1 block">Email</span>
                  <a href={`mailto:${profile.email}`} className="text-base sm:text-lg md:text-xl font-light hover:text-white/60 transition-colors break-all">
                    {profile.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-6 group">
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-background transition-all duration-500 shadow-[0_0_15px_rgba(255,159,28,0.2)]">
                  <Phone size={20} />
                </div>
                <div>
                  <span className="text-white/30 text-[10px] uppercase tracking-widest mb-1 block">Phone</span>
                  <a href={`tel:${profile.phone.replace(/\s/g, "")}`} className="text-base sm:text-lg md:text-xl font-light hover:text-white/60 transition-colors break-all">
                    {profile.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-6 group">
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-background transition-all duration-500 shadow-[0_0_15px_rgba(255,159,28,0.2)]">
                  <MapPin size={20} />
                </div>
                <div>
                  <span className="text-white/30 text-[10px] uppercase tracking-widest mb-1 block">Location</span>
                  <p className="text-base sm:text-lg md:text-xl font-light">{profile.location}</p>
                </div>
              </div>
            </div>

            <div className="mt-16 sm:mt-24 pt-10 sm:pt-12 border-t border-white/5 flex flex-wrap items-center gap-x-6 gap-y-4">
              <Magnetic strength={0.5}><a href={profile.github_url} target="_blank" rel="noopener noreferrer" className="text-white/30 hover:text-white transition-colors font-medium uppercase tracking-[0.2em] text-[10px]">GitHub</a></Magnetic>
              <Magnetic strength={0.5}><a href={profile.linkedin_url} target="_blank" rel="noopener noreferrer" className="text-white/30 hover:text-white transition-colors font-medium uppercase tracking-[0.2em] text-[10px]">LinkedIn</a></Magnetic>
              <Magnetic strength={0.5}><a href={profile.huggingface_url} target="_blank" rel="noopener noreferrer" className="text-white/30 hover:text-white transition-colors font-medium uppercase tracking-[0.2em] text-[10px]">Hugging Face</a></Magnetic>
              <Magnetic strength={0.5}>
                <a href={profile.cv_url} download className="flex items-center gap-1.5 text-white/30 hover:text-white transition-colors font-medium uppercase tracking-[0.2em] text-[10px]">
                  <Download size={12} /> Download CV
                </a>
              </Magnetic>
            </div>
          </div>

          {/* Form */}
          <div className="glass p-6 sm:p-9 md:p-12 rounded-3xl md:rounded-[3rem]">
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest text-white/30 font-bold ml-1">Your Name</label>
                <input 
                  name="name"
                  type="text" 
                  required
                  placeholder="Your name"
                  className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 sm:px-6 py-3.5 sm:py-4 text-base outline-none focus:border-white/40 transition-colors text-white"
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest text-white/30 font-bold ml-1">Email Address</label>
                <input 
                  name="email"
                  type="email" 
                  required
                  placeholder="you@company.com"
                  className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 sm:px-6 py-3.5 sm:py-4 text-base outline-none focus:border-white/40 transition-colors text-white"
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest text-white/30 font-bold ml-1">Message</label>
                <textarea 
                  name="message"
                  required
                  rows={4}
                  placeholder="How can I help you?"
                  className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 sm:px-6 py-3.5 sm:py-4 text-base outline-none focus:border-white/40 transition-colors text-white resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-accent text-background py-4 rounded-2xl font-bold uppercase tracking-widest text-xs hover:bg-accent/80 transition-all flex items-center justify-center gap-3 active:scale-95 disabled:opacity-50 shadow-[0_0_30px_rgba(255,159,28,0.3)]"
                disabled={formState === "submitting"}
              >
                {formState === "submitting" ? "Sending..." : "Send Message"}
                <Send size={16} />
              </button>
              {formState === "success" && (
                <p className="text-center text-xs text-green-400 mt-4 italic">
                  Message sent successfully! I&apos;ll get back to you soon.
                </p>
              )}
              {formState === "error" && (
                <p className="text-center text-xs text-red-400 mt-4 italic">
                  Something went wrong. Please try again or use direct email.
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
