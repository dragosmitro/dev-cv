"use client";

import { AnimatedSection } from "./AnimatedSection";

interface SectionHeadingProps {
  label: string;
  title: string;
}

export function SectionHeading({ label, title }: SectionHeadingProps) {
  return (
    <AnimatedSection className="mb-16 md:mb-20">
      <p className="mb-3 font-mono text-xs font-medium uppercase tracking-[0.2em] text-accent">
        {label}
      </p>
      <h2 className="text-3xl font-semibold tracking-tight text-foreground md:text-5xl">
        {title}
      </h2>
    </AnimatedSection>
  );
}
