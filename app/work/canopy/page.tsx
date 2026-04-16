"use client";

import Nav from "@/components/canopy/Nav";
import Hero from "@/components/canopy/Hero";
import Problem from "@/components/canopy/Problem";
import HowItWorks from "@/components/canopy/HowItWorks";
import Features from "@/components/canopy/Features";
import Metrics from "@/components/canopy/Metrics";
import CTA from "@/components/canopy/CTA";
import Footer from "@/components/canopy/Footer";

const hexPattern = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='28' height='49' viewBox='0 0 28 49'%3E%3Cg fill-rule='evenodd'%3E%3Cg fill='%233B82F6' fill-opacity='0.04'%3E%3Cpath d='M13.99 9.25l13 7.5v15l-13 7.5L1 31.75v-15l12.99-7.5zM3 17.9v12.7l10.99 6.34 11-6.35V17.9l-11-6.34L3 17.9zM0 15l12.98-7.5V0h-2v6.35L0 12.69v2.3zm0 18.5L12.98 41v8h-2v-6.85L0 35.81v-2.3zM15 0v7.5L27.99 15H28v-2.31h-.01L17 6.35V0h-2zm0 49v-8l12.99-7.5H28v2.31h-.01L17 42.15V49h-2z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`;

export default function CanopyPage() {
  return (
    <div
      style={{
        background: "#0B0F1E",
        color: "#E4E8F0",
        fontFamily: "var(--font-outfit), system-ui, sans-serif",
        minHeight: "100vh",
      }}
    >
      <style>{`
        .canopy-selection::selection {
          background-color: rgba(59,130,246,0.25);
          color: #E4E8F0;
        }
        .canopy-selection *::selection {
          background-color: rgba(59,130,246,0.25);
          color: #E4E8F0;
        }
      `}</style>

      <div className="canopy-selection">
        <Nav />
        <div style={{ backgroundImage: hexPattern }}>
          <Hero />
        </div>
        <Problem />
        <HowItWorks />
        <Features />
        <Metrics />
        <div style={{ backgroundImage: hexPattern }}>
          <CTA />
        </div>
        <Footer />
      </div>
    </div>
  );
}
