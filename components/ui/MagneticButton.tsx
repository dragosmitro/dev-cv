"use client";

import { motion } from "framer-motion";
import { type ReactNode } from "react";
import { useMagnetic } from "@/lib/hooks/useMagnetic";

interface MagneticButtonProps {
  children: ReactNode;
  className?: string;
  href?: string;
}

export function MagneticButton({ children, className = "", href }: MagneticButtonProps) {
  const { ref, smoothX, smoothY, handleMouseMove, handleMouseLeave } = useMagnetic(0.12);

  const Component = href ? motion.a : motion.div;

  return (
    <Component
      ref={ref as React.Ref<HTMLAnchorElement & HTMLDivElement>}
      href={href}
      target={href ? "_blank" : undefined}
      rel={href ? "noopener noreferrer" : undefined}
      style={{ x: smoothX, y: smoothY }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`inline-block cursor-pointer ${className}`}
    >
      {children}
    </Component>
  );
}
