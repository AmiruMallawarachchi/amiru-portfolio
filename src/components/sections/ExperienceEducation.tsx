"use client";

import { motion } from "framer-motion";

interface ExperienceItem {
  title: string;
  company: string;
  period: string;
  description: string;
}

interface EducationItem {
  degree: string;
  institution: string;
  period: string;
  description: string;
}

interface ExperienceEducationProps {
  experience: ExperienceItem[];
  education: EducationItem[];
}

export default function ExperienceEducation({ experience, education }: ExperienceEducationProps) {
  return (
    <section className="relative py-24 sm:py-32 px-5 sm:px-8 bg-background border-t border-white/5">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 md:gap-24">
        {/* Experience Column */}
        <div>
          <span className="font-mono text-accent/70 uppercase tracking-widest text-xs mb-12 block">01 / Experience</span>
          <div className="space-y-12 sm:space-y-16">
            {experience.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="group"
              >
                <span className="font-mono text-foreground/30 text-sm mb-4 block">{item.period}</span>
                <h3 className="text-2xl font-display mb-2 group-hover:text-foreground transition-colors">{item.title}</h3>
                <p className="text-foreground/40 text-sm mb-6">{item.company}</p>
                <p className="text-foreground/60 font-light leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Education Column */}
        <div>
          <span className="font-mono text-accent/70 uppercase tracking-widest text-xs mb-12 block">02 / Education</span>
          <div className="space-y-12 sm:space-y-16">
            {education.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="group"
              >
                <span className="font-mono text-foreground/30 text-sm mb-4 block">{item.period}</span>
                <h3 className="text-2xl font-display mb-2 group-hover:text-foreground transition-colors">{item.degree}</h3>
                <p className="text-foreground/40 text-sm mb-6">{item.institution}</p>
                <p className="text-foreground/60 font-light leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
