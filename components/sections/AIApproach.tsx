"use client";

import { motion } from "framer-motion";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { aiApproach } from "@/lib/data";
import { staggerContainer, fadeInUp } from "@/lib/animations";

export function AIApproach() {
  return (
    <section className="px-6 py-16 md:py-24">
      <div className="mx-auto max-w-6xl">
        <AnimatedSection>
          <div className="relative overflow-hidden rounded-2xl border border-white/[0.06] bg-white/[0.02] p-8 backdrop-blur-md md:p-12">
            <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-accent/[0.03] blur-3xl" />
            <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-accent/[0.02] blur-3xl" />

            <div className="relative">
              <span className="mb-4 inline-block font-mono text-xs uppercase tracking-[0.15em] text-accent">
                Methodology
              </span>
              <h3 className="mb-4 text-xl font-semibold tracking-tight text-foreground md:text-2xl">
                {aiApproach.headline}
              </h3>
              <p className="mb-8 max-w-3xl text-sm leading-relaxed text-muted md:text-base">
                {aiApproach.statement}
              </p>

              <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="grid gap-3 sm:grid-cols-2"
              >
                {aiApproach.principles.map((principle) => (
                  <motion.div
                    key={principle}
                    variants={fadeInUp}
                    className="flex items-start gap-3 text-sm text-foreground/70"
                  >
                    <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-accent/50" />
                    {principle}
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
