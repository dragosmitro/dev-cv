"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlassCard } from "@/components/ui/GlassCard";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import {
  publications,
  personalProjects,
  type PersonalProjectItem,
} from "@/lib/data";
import { staggerContainer, fadeInUp } from "@/lib/animations";

export function Publications() {
  return (
    <section id="publications" className="px-6 py-20 md:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          label="Research & Personal Work"
          title="Beyond the Job"
        />

        <AnimatedSection className="mb-16">
          <h3 className="mb-6 font-mono text-xs font-medium uppercase tracking-[0.15em] text-muted-foreground">
            Publications
          </h3>
          {publications.map((pub) => (
            <GlassCard key={pub.title} className="p-6 md:p-8">
              <div className="mb-3 flex flex-wrap items-start justify-between gap-3">
                <a
                  href={pub.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group text-base font-semibold leading-snug text-foreground transition-colors hover:text-accent"
                >
                  {pub.title}
                  <span className="ml-2 inline-block opacity-0 transition-opacity group-hover:opacity-100">
                    ↗
                  </span>
                </a>
                <span className="shrink-0 rounded-full border border-accent/15 bg-accent/[0.06] px-3 py-0.5 font-mono text-[10px] tracking-wide text-accent">
                  {pub.year}
                </span>
              </div>
              <p className="mb-2 font-mono text-xs text-muted-foreground">
                {pub.authors}
              </p>
              <p className="mb-1 font-mono text-xs text-muted-foreground/70">
                {pub.venue}
              </p>
              <p className="mt-4 text-sm leading-relaxed text-muted">
                {pub.description}
              </p>
              <div className="mt-5 flex flex-wrap gap-1.5">
                {pub.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-accent/15 bg-accent/[0.06] px-3 py-1 font-mono text-[10px] tracking-wide text-accent transition-colors hover:border-accent/30 hover:bg-accent/10"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </GlassCard>
          ))}
        </AnimatedSection>

        <div>
          <AnimatedSection className="mb-8">
            <h3 className="mb-6 font-mono text-xs font-medium uppercase tracking-[0.15em] text-muted-foreground">
              Personal Projects
            </h3>
          </AnimatedSection>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
          >
            {personalProjects.map((project) => (
              <PersonalProjectCard key={project.name} project={project} />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function PersonalProjectCard({ project }: { project: PersonalProjectItem }) {
  return (
    <motion.div variants={fadeInUp}>
      <GlassCard className="flex h-full flex-col p-6 md:p-8">
        <div className="mb-4 flex items-start justify-between gap-3">
          {project.url ? (
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group text-base font-semibold leading-snug text-foreground transition-colors hover:text-accent"
            >
              {project.name}
              <span className="ml-2 inline-block opacity-0 transition-opacity group-hover:opacity-100">
                ↗
              </span>
            </a>
          ) : (
            <h3 className="text-base font-semibold leading-snug text-foreground">
              {project.name}
            </h3>
          )}
        </div>

        <p className="mb-4 text-sm leading-relaxed text-muted">
          {project.description}
        </p>

        <ul className="mb-5 space-y-2">
          {project.highlights.map((highlight, i) => (
            <li
              key={i}
              className="flex gap-3 text-sm leading-relaxed text-muted"
            >
              <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-accent/50" />
              {highlight}
            </li>
          ))}
        </ul>

        <div className="mt-auto flex flex-wrap gap-1.5">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-accent/15 bg-accent/[0.06] px-3 py-1 font-mono text-[10px] tracking-wide text-accent transition-colors hover:border-accent/30 hover:bg-accent/10"
            >
              {tech}
            </span>
          ))}
        </div>
      </GlassCard>
    </motion.div>
  );
}
