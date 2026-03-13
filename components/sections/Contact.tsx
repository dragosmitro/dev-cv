"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Github, Linkedin } from "lucide-react";
import { GradientText } from "@/components/ui/GradientText";
import { GlassCard } from "@/components/ui/GlassCard";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { contact } from "@/lib/data";
import { staggerContainer, fadeInUp } from "@/lib/animations";

const contactItems = [
  {
    label: "Email",
    value: contact.email,
    href: `mailto:${contact.email}`,
    icon: <Mail size={20} strokeWidth={1.5} />,
  },
  {
    label: "Phone",
    value: contact.phone,
    href: `tel:${contact.phone.replace(/\s/g, "")}`,
    icon: <Phone size={20} strokeWidth={1.5} />,
  },
  {
    label: "Location",
    value: contact.location,
    href: undefined,
    icon: <MapPin size={20} strokeWidth={1.5} />,
  },
  {
    label: "GitHub",
    value: "dragosmitro",
    href: contact.github,
    icon: <Github size={20} />,
  },
  {
    label: "LinkedIn",
    value: "dragosmitroescu",
    href: contact.linkedin,
    icon: <Linkedin size={20} />,
  },
];

export function Contact() {
  return (
    <section id="contact" className="px-6 py-20 md:py-32">
      <div className="mx-auto max-w-6xl">
        <AnimatedSection>
          <p className="mb-3 font-mono text-xs font-medium uppercase tracking-[0.2em] text-accent">
            Contact
          </p>
          <h2 className="mb-16 text-3xl font-semibold tracking-tight md:text-5xl">
            <GradientText>Let&apos;s Connect</GradientText>
          </h2>
        </AnimatedSection>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
        >
          {contactItems.map((item) => (
            <motion.div key={item.label} variants={fadeInUp}>
              {item.href ? (
                <MagneticButton href={item.href} className="block w-full">
                  <ContactCard item={item} />
                </MagneticButton>
              ) : (
                <ContactCard item={item} />
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function ContactCard({ item }: { item: (typeof contactItems)[number] }) {
  return (
    <GlassCard className="p-6">
      <div className="mb-3 text-muted">{item.icon}</div>
      <p className="mb-1 font-mono text-xs uppercase tracking-[0.1em] text-muted-foreground">
        {item.label}
      </p>
      <p className="text-sm text-foreground/80">{item.value}</p>
    </GlassCard>
  );
}
