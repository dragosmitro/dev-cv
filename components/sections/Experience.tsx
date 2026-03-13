"use client";

import { useRef, useEffect } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlassCard } from "@/components/ui/GlassCard";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { experiences, type ExperienceItem } from "@/lib/data";

export function Experience() {
  const containerRef = useRef<HTMLDivElement>(null);
  const progress = useMotionValue(0);
  const smoothProgress = useSpring(progress, { stiffness: 60, damping: 20 });

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    function handleScroll() {
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const start = window.innerHeight * 0.8;
      const end = window.innerHeight * 0.4;
      const total = rect.height + start - end;
      const scrolled = start - rect.top;
      progress.set(Math.min(1, Math.max(0, scrolled / total)));
    }

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [progress]);

  return (
    <section id="experience" className="px-6 py-20 md:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeading label="Experience" title="Where I've Worked" />

        <div ref={containerRef} className="relative">
          <div className="absolute left-4 top-0 bottom-0 w-px bg-white/[0.06] md:left-1/2 md:-translate-x-px">
            <motion.div
              className="h-full w-full origin-top"
              style={{
                background: "linear-gradient(to bottom, var(--gradient-start), var(--gradient-end))",
                scaleY: smoothProgress,
              }}
            />
          </div>

          <div className="space-y-12 md:space-y-16">
            {experiences.map((exp, i) => (
              <TimelineEntry key={exp.company} experience={exp} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function TimelineEntry({
  experience,
  index,
}: {
  experience: ExperienceItem;
  index: number;
}) {
  const isLeft = index % 2 === 0;

  return (
    <div
      className={`relative flex items-start gap-8 pl-12 md:pl-0 ${
        isLeft ? "md:flex-row" : "md:flex-row-reverse"
      }`}
    >
      <div className="absolute left-4 top-6 z-10 -translate-x-1/2 md:left-1/2">
        <div className="relative">
          <div className="h-3 w-3 rounded-full border-2 border-accent bg-background" />
          {experience.current && (
            <motion.div
              className="absolute inset-0 rounded-full bg-accent"
              animate={{ scale: [1, 1.8, 1], opacity: [0.5, 0, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          )}
        </div>
      </div>

      <div className={`w-full md:w-[calc(50%-2rem)]`}>
        <AnimatedSection direction={isLeft ? "left" : "right"} delay={index * 0.1}>
          <GlassCard className="p-6 md:p-8">
            <div className="mb-4 flex flex-wrap items-center gap-3">
              <h3 className="text-lg font-semibold text-foreground">
                {experience.company}
              </h3>
              {experience.current && (
                <span className="inline-flex items-center gap-1.5 rounded-full bg-accent/10 px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-wider text-accent">
                  <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-accent" />
                  Current
                </span>
              )}
            </div>
            <p className="mb-1 text-sm font-medium text-foreground/80">
              {experience.role}
            </p>
            <p className="mb-4 font-mono text-xs text-muted-foreground">
              {experience.period} &middot; {experience.type}
            </p>
            <ul className="space-y-2">
              {experience.description.map((desc, i) => (
                <li key={i} className="flex gap-3 text-sm leading-relaxed text-muted">
                  <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-accent/50" />
                  {desc}
                </li>
              ))}
            </ul>
            <div className="mt-5 flex flex-wrap gap-1.5">
              {experience.technologies.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-accent/15 bg-accent/[0.06] px-3 py-1 font-mono text-[10px] tracking-wide text-accent transition-colors hover:border-accent/30 hover:bg-accent/10"
                >
                  {tech}
                </span>
              ))}
            </div>
          </GlassCard>
        </AnimatedSection>
      </div>

      <div className="hidden w-[calc(50%-2rem)] md:block" />
    </div>
  );
}
