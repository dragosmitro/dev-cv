"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TextReveal } from "@/components/ui/TextReveal";
import { GlassCard } from "@/components/ui/GlassCard";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { personalInfo, stats } from "@/lib/data";
import { staggerContainer, fadeInUp } from "@/lib/animations";

function CountUp({ value, suffix = "" }: { value: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref as React.RefObject<Element>, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    const duration = 1500;
    const startTime = performance.now();

    function animate(currentTime: number) {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(eased * value));

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    }

    requestAnimationFrame(animate);
  }, [isInView, value]);

  return (
    <span
      ref={ref}
      className="text-4xl font-bold tracking-tight text-foreground md:text-5xl"
    >
      {count}
      {suffix}
    </span>
  );
}

export function About() {
  return (
    <section id="about" className="px-6 py-20 md:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeading label="About" title="Who I Am" />

        <div className="grid gap-16 lg:grid-cols-[1fr,auto]">
          <div className="relative space-y-6">
            {personalInfo.summary.map((paragraph, i) => (
              <TextReveal
                key={i}
                text={paragraph}
                className={`leading-relaxed ${
                  i === 0
                    ? "text-lg text-foreground/90 md:text-xl"
                    : "text-base text-muted"
                }`}
              />
            ))}
          </div>

          <AnimatedSection delay={0.2}>
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1 lg:gap-6"
            >
              {stats.map((stat) => (
                <motion.div key={stat.label} variants={fadeInUp}>
                  <GlassCard className="p-6 text-center lg:min-w-[200px] lg:text-left">
                    <CountUp
                      value={stat.value}
                      suffix={"suffix" in stat ? stat.suffix : ""}
                    />
                    <p className="mt-2 font-mono text-xs uppercase tracking-[0.1em] text-muted-foreground">
                      {stat.label}
                    </p>
                  </GlassCard>
                </motion.div>
              ))}
            </motion.div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
