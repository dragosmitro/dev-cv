"use client";

import { motion } from "framer-motion";
import { type ReactNode } from "react";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

export function GlassCard({ children, className = "", hover = true }: GlassCardProps) {
  return (
    <motion.div
      className={`rounded-2xl border border-white/[0.06] bg-white/[0.03] backdrop-blur-md ${className}`}
      whileHover={
        hover
          ? {
              borderColor: "rgba(255, 255, 255, 0.12)",
              y: -2,
              transition: { duration: 0.2 },
            }
          : undefined
      }
    >
      {children}
    </motion.div>
  );
}
