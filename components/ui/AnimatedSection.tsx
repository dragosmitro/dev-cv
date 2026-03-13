"use client";

import { motion, useInView, useReducedMotion } from "framer-motion";
import { useRef, type ReactNode } from "react";
import { fadeInUp, fadeInLeft, fadeInRight, fadeIn } from "@/lib/animations";

type Direction = "up" | "left" | "right" | "fade";

const variantMap: Record<Direction, typeof fadeInUp> = {
  up: fadeInUp,
  left: fadeInLeft,
  right: fadeInRight,
  fade: fadeIn,
};

interface AnimatedSectionProps {
  children: ReactNode;
  direction?: Direction;
  delay?: number;
  className?: string;
}

export function AnimatedSection({
  children,
  direction = "up",
  delay = 0,
  className,
}: AnimatedSectionProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const prefersReducedMotion = useReducedMotion();

  const variants = prefersReducedMotion ? fadeIn : variantMap[direction];

  return (
    <motion.div
      ref={ref}
      variants={variants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      transition={{ delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
