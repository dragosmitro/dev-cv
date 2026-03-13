"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { skillCategories } from "@/lib/data";
import { staggerContainer, fadeInUp } from "@/lib/animations";

export function Skills() {
  const categories = Object.entries(skillCategories);

  return (
    <section id="skills" className="px-6 py-20 md:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeading label="Skills" title="What I Work With" />

        <div className="space-y-12">
          {categories.map(([category, skills], catIndex) => (
            <AnimatedSection key={category} delay={catIndex * 0.15}>
              <h3 className="mb-6 font-mono text-xs font-medium uppercase tracking-[0.15em] text-muted-foreground">
                {category}
              </h3>
              <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="flex flex-wrap gap-2 md:gap-3"
              >
                {skills.map((skill) => (
                  <motion.span
                    key={skill}
                    variants={fadeInUp}
                    whileHover={{
                      borderColor: "rgba(var(--accent-rgb), 0.3)",
                      boxShadow: "0 0 20px rgba(var(--accent-rgb), 0.1)",
                      transition: { duration: 0.2 },
                    }}
                    className="rounded-xl border border-white/[0.06] bg-white/[0.03] px-4 py-2 font-mono text-sm text-foreground/80 backdrop-blur-md transition-colors"
                  >
                    {skill}
                  </motion.span>
                ))}
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
