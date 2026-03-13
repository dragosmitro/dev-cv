"use client";

import { useEffect } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export function Spotlight() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const smoothX = useSpring(mouseX, { stiffness: 50, damping: 20 });
  const smoothY = useSpring(mouseY, { stiffness: 50, damping: 20 });

  useEffect(() => {
    function handleMouseMove(e: MouseEvent) {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    }

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <motion.div
      className="pointer-events-none fixed inset-0 z-30"
    >
      <motion.div
        className="h-full w-full"
        style={
          {
            "--x": smoothX,
            "--y": smoothY,
            background:
              "radial-gradient(600px circle at calc(var(--x) * 1px) calc(var(--y) * 1px), rgba(var(--accent-rgb), 0.04), transparent 80%)",
          } as React.CSSProperties
        }
      />
    </motion.div>
  );
}
