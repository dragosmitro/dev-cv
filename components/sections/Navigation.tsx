"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useActiveSection } from "@/lib/hooks/useActiveSection";
import { navLinks, personalInfo } from "@/lib/data";

export function Navigation() {
  const activeSection = useActiveSection();
  const [hidden, setHidden] = useState(false);
  const lastScrollYRef = useRef(0);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    function handleScroll() {
      const currentY = window.scrollY;
      setHidden(currentY > lastScrollYRef.current && currentY > 100);
      lastScrollYRef.current = currentY;
    }

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  function scrollTo(href: string) {
    setMobileOpen(false);
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: hidden ? -100 : 0 }}
        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
        className="fixed top-0 left-0 right-0 z-40 border-b border-white/[0.06] bg-background/60 backdrop-blur-xl"
      >
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <button
            onClick={() => scrollTo("#hero")}
            className="cursor-pointer font-sans text-sm font-semibold tracking-tight text-foreground transition-colors hover:text-accent"
          >
            {personalInfo.firstName[0]}{personalInfo.lastName[0]}
          </button>

          <div className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => {
              const sectionId = link.href.replace("#", "");
              const isActive = activeSection === sectionId;
              return (
                <button
                  key={link.href}
                  onClick={() => scrollTo(link.href)}
                  className="relative cursor-pointer py-1 font-mono text-xs uppercase tracking-[0.1em] text-muted transition-colors hover:text-foreground"
                >
                  {link.label}
                  {isActive && (
                    <motion.div
                      layoutId="nav-indicator"
                      className="absolute -bottom-1 left-0 right-0 h-px bg-accent"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                </button>
              );
            })}
          </div>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="flex flex-col gap-1.5 md:hidden"
            aria-label="Toggle menu"
          >
            <motion.span
              animate={mobileOpen ? { rotate: 45, y: 5 } : { rotate: 0, y: 0 }}
              className="block h-px w-5 bg-foreground"
            />
            <motion.span
              animate={mobileOpen ? { opacity: 0 } : { opacity: 1 }}
              className="block h-px w-5 bg-foreground"
            />
            <motion.span
              animate={mobileOpen ? { rotate: -45, y: -5 } : { rotate: 0, y: 0 }}
              className="block h-px w-5 bg-foreground"
            />
          </button>
        </nav>
      </motion.header>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-30 flex items-center justify-center bg-background/95 backdrop-blur-xl md:hidden"
          >
            <nav className="flex flex-col items-center gap-8">
              {navLinks.map((link, i) => (
                <motion.button
                  key={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ delay: i * 0.05 }}
                  onClick={() => scrollTo(link.href)}
                  className="font-mono text-lg uppercase tracking-[0.15em] text-foreground transition-colors hover:text-accent"
                >
                  {link.label}
                </motion.button>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
