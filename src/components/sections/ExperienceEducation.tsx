"use client";

import { motion } from "framer-motion";

const experience = [
  {
    title: "Software Engineering Student | Gen AI Engineer",
    company: "Amiru Portfolio",
    period: "Present",
    description: "Focusing on building scalable applications and integrating AI models. Expert in prompt engineering and AI-assisted development.",
  },
];

const education = [
  {
    degree: "BSc (Hons) Software Engineering",
    institution: "Cardiff Metropolitan University (ICBT Campus)",
    period: "2024 – 2027",
    description: "Final Year Student focusing on modern software architectures and AI implementation.",
  },
  {
    degree: "GCE Advanced Level / Ordinary Level",
    institution: "St. Sebastian's College Moratuwa",
    period: "2008 – 2019",
    description: "Foundation of engineering and mathematical excellence.",
  },
];

export default function ExperienceEducation() {
  return (
    <section className="relative min-h-screen py-32 px-4 bg-background border-t border-white/5">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-24">
        {/* Experience Column */}
        <div>
          <span className="text-white/30 uppercase tracking-widest text-xs mb-12 block">03 / Experience</span>
          <div className="space-y-16">
            {experience.map((item, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="group"
              >
                <span className="text-white/20 text-sm font-mono mb-4 block">{item.period}</span>
                <h3 className="text-2xl font-display mb-2 group-hover:text-white transition-colors">{item.title}</h3>
                <p className="text-white/40 text-sm mb-6">{item.company}</p>
                <p className="text-white/60 font-light leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Education Column */}
        <div>
          <span className="text-white/30 uppercase tracking-widest text-xs mb-12 block">04 / Education</span>
          <div className="space-y-16">
            {education.map((item, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="group"
              >
                <span className="text-white/20 text-sm font-mono mb-4 block">{item.period}</span>
                <h3 className="text-2xl font-display mb-2 group-hover:text-white transition-colors">{item.degree}</h3>
                <p className="text-white/40 text-sm mb-6">{item.institution}</p>
                <p className="text-white/60 font-light leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
