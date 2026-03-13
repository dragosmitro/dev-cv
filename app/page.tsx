import { Navigation } from "@/components/sections/Navigation";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Experience } from "@/components/sections/Experience";
import { Skills } from "@/components/sections/Skills";
import { AIApproach } from "@/components/sections/AIApproach";
import { Education } from "@/components/sections/Education";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <main>
      <Navigation />
      <Hero />
      <About />
      <Experience />
      <Skills />
      <AIApproach />
      <Education />
      <Contact />
    </main>
  );
}
