"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlassCard } from "@/components/ui/GlassCard";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { projects, type ProjectItem } from "@/lib/data";
import { staggerContainer, fadeInUp } from "@/lib/animations";

const companies = [...new Set(projects.map((p) => p.company))];

export function Projects() {
  const [activeCompany, setActiveCompany] = useState<string | null>(null);

  const filtered = activeCompany
    ? projects.filter((p) => p.company === activeCompany)
    : projects;

  return (
    <section id="projects" className="px-6 py-20 md:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeading label="Projects" title="What I've Built" />

        <AnimatedSection className="mb-12">
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setActiveCompany(null)}
              className={`cursor-pointer rounded-full border px-4 py-1.5 font-mono text-xs tracking-wide transition-all ${
                activeCompany === null
                  ? "border-accent/30 bg-accent/10 text-accent"
                  : "border-white/[0.06] bg-white/[0.03] text-muted hover:border-white/[0.12] hover:text-foreground"
              }`}
            >
              All
            </button>
            {companies.map((company) => (
              <button
                key={company}
                onClick={() => setActiveCompany(company)}
                className={`cursor-pointer rounded-full border px-4 py-1.5 font-mono text-xs tracking-wide transition-all ${
                  activeCompany === company
                    ? "border-accent/30 bg-accent/10 text-accent"
                    : "border-white/[0.06] bg-white/[0.03] text-muted hover:border-white/[0.12] hover:text-foreground"
                }`}
              >
                {company}
              </button>
            ))}
          </div>
        </AnimatedSection>

        <motion.div
          layout
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid gap-6 md:grid-cols-2"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((project) => (
              <ProjectCard key={project.name} project={project} />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}

function ProjectCard({ project }: { project: ProjectItem }) {
  return (
    <motion.div
      layout
      variants={fadeInUp}
      initial="hidden"
      animate="visible"
      exit={{ opacity: 0, scale: 0.95, transition: { duration: 0.2 } }}
    >
      <GlassCard className="flex h-full flex-col p-6 md:p-8">
        <div className="mb-4 flex items-start justify-between gap-3">
          <h3 className="text-base font-semibold leading-snug text-foreground">
            {project.name}
          </h3>
          <span className="shrink-0 rounded-full border border-white/[0.06] bg-white/[0.03] px-3 py-0.5 font-mono text-[10px] tracking-wide text-muted-foreground">
            {project.company}
          </span>
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
