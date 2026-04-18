"use client";

import Nav from "@/components/aura/Nav";
import Hero from "@/components/aura/Hero";
import LogoStrip from "@/components/aura/LogoStrip";
import Transform from "@/components/aura/Transform";
import Results from "@/components/aura/Results";
import AgentOS from "@/components/aura/AgentOS";
import CTA from "@/components/aura/CTA";
import Footer from "@/components/aura/Footer";

export default function AuraPage() {
  return (
    <div
      style={{
        background: "#FAF8F5",
        color: "#1A1A1A",
        colorScheme: "light",
      }}
    >
      <style jsx global>{`
        ::selection {
          background: rgba(45, 122, 79, 0.15);
        }
      `}</style>
      <Nav />
      <Hero />
      <LogoStrip />
      <Transform />
      <Results />
      <AgentOS />
      <CTA />
      <Footer />
    </div>
  );
}
