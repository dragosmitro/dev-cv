"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlassCard } from "@/components/ui/GlassCard";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { education, certificates, languages } from "@/lib/data";
import { staggerContainer, fadeInUp } from "@/lib/animations";

export function Education() {
  return (
    <section id="education" className="px-6 py-20 md:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeading label="Education" title="Academic Background" />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
        >
          {education.map((edu) => (
            <motion.div key={edu.degree} variants={fadeInUp}>
              <GlassCard className="h-full p-6">
                <div className="mb-3 flex items-start justify-between gap-3">
                  <h3 className="text-base font-semibold leading-snug text-foreground">
                    {edu.degree}
                  </h3>
                  {edu.status === "In Progress" && (
                    <span className="inline-flex shrink-0 items-center gap-1.5 rounded-full bg-accent/10 px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-wider text-accent">
                      <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-accent" />
                      In Progress
                    </span>
                  )}
                </div>
                <p className="text-sm leading-relaxed text-muted">
                  {edu.institution}
                </p>
              </GlassCard>
            </motion.div>
          ))}
        </motion.div>

        <div className="grid gap-12 md:grid-cols-2">
          <AnimatedSection delay={0.2}>
            <h3 className="mb-6 font-mono text-xs font-medium uppercase tracking-[0.15em] text-muted-foreground">
              Certificates
            </h3>
            <ul className="space-y-3">
              {certificates.map((cert) => (
                <li key={cert} className="flex items-start gap-3 text-sm text-muted">
                  <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-accent/50" />
                  {cert}
                </li>
              ))}
            </ul>
          </AnimatedSection>

          <AnimatedSection delay={0.3}>
            <h3 className="mb-6 font-mono text-xs font-medium uppercase tracking-[0.15em] text-muted-foreground">
              Languages
            </h3>
            <ul className="space-y-3">
              {languages.map((lang) => (
                <li key={lang.name} className="flex items-center justify-between text-sm">
                  <span className="text-foreground/80">{lang.name}</span>
                  <span className="font-mono text-xs text-muted-foreground">
                    {lang.level}
                  </span>
                </li>
              ))}
            </ul>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
