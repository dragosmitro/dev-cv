"use client";

import { motion, useReducedMotion } from "framer-motion";
import { heroCharacter, staggerContainer, fadeInUp } from "@/lib/animations";
import { personalInfo } from "@/lib/data";
import { Spotlight } from "@/components/ui/Spotlight";

export function Hero() {
  const prefersReducedMotion = useReducedMotion();

  const firstLine = personalInfo.lastName.toUpperCase();
  const secondLine = personalInfo.firstName.toUpperCase();
  const firstLineChars = firstLine.split("");
  const secondLineChars = secondLine.split("");

  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center justify-center overflow-hidden px-6"
    >
      <Spotlight />

      <div className="relative z-10 text-center">
        <motion.p
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          className="mb-6 font-mono text-xs font-medium uppercase tracking-[0.3em] text-muted-foreground"
        >
          {personalInfo.title}
        </motion.p>

        <motion.h1
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="mb-8 font-sans text-[clamp(2.5rem,8vw,6rem)] font-bold leading-[0.95] tracking-[-0.04em] text-foreground"
        >
          {prefersReducedMotion ? (
            <>
              <span className="block">{firstLine}</span>
              <span className="block">{secondLine}</span>
            </>
          ) : (
            <>
              <span className="block">
                {firstLineChars.map((char, i) => (
                  <motion.span
                    key={`first-${i}`}
                    variants={heroCharacter}
                    className="inline-block"
                  >
                    {char}
                  </motion.span>
                ))}
              </span>
              <span className="block">
                {secondLineChars.map((char, i) => (
                  <motion.span
                    key={`last-${i}`}
                    variants={heroCharacter}
                    className="inline-block"
                  >
                    {char}
                  </motion.span>
                ))}
              </span>
            </>
          )}
        </motion.h1>

        <motion.p
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.8 }}
          className="mx-auto max-w-xl text-lg text-muted md:text-xl"
        >
          {personalInfo.tagline}
        </motion.p>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2"
        >
          <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
            Scroll
          </span>
          <svg
            width="16"
            height="24"
            viewBox="0 0 16 24"
            fill="none"
            className="text-muted-foreground"
          >
            <rect
              x="1"
              y="1"
              width="14"
              height="22"
              rx="7"
              stroke="currentColor"
              strokeWidth="1.5"
            />
            <motion.circle
              cx="8"
              cy="8"
              r="2"
              fill="currentColor"
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  );
}
