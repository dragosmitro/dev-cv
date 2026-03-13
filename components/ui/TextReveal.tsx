"use client";

import { useRef, useEffect } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

interface TextRevealProps {
  text: string;
  className?: string;
}

export function TextReveal({ text, className = "" }: TextRevealProps) {
  const ref = useRef<HTMLParagraphElement>(null);
  const progress = useMotionValue(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    function handleScroll() {
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const start = window.innerHeight * 0.9;
      const end = window.innerHeight * 0.4;
      const p = Math.min(1, Math.max(0, (start - rect.top) / (start - end)));
      progress.set(p);
    }

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [progress]);

  const words = text.split(" ");

  return (
    <p ref={ref} className={`flex flex-wrap ${className}`}>
      {words.map((word, i) => {
        const start = i / words.length;
        const end = start + 1 / words.length;
        return (
          <Word key={`${word}-${i}`} progress={progress} range={[start, end]}>
            {word}
          </Word>
        );
      })}
    </p>
  );
}

function Word({
  children,
  progress,
  range,
}: {
  children: string;
  progress: ReturnType<typeof useMotionValue<number>>;
  range: [number, number];
}) {
  const rawOpacity = useMotionValue(0.15);
  const opacity = useSpring(rawOpacity, { stiffness: 300, damping: 30 });

  useEffect(() => {
    return progress.on("change", (v) => {
      const [start, end] = range;
      const t = Math.min(1, Math.max(0, (v - start) / (end - start)));
      rawOpacity.set(0.15 + t * 0.85);
    });
  }, [progress, range, rawOpacity]);

  return (
    <motion.span style={{ opacity }} className="mr-[0.3em] mt-1">
      {children}
    </motion.span>
  );
}
