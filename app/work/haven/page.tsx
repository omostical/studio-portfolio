"use client";

import Nav from "@/components/haven/Nav";
import Hero from "@/components/haven/Hero";
import LogoStrip from "@/components/haven/LogoStrip";
import Stats from "@/components/haven/Stats";
import Features from "@/components/haven/Features";
import Dashboard from "@/components/haven/Dashboard";
import Testimonials from "@/components/haven/Testimonials";
import CTA from "@/components/haven/CTA";
import Footer from "@/components/haven/Footer";

export default function HavenPage() {
  return (
    <>
      <style>{`
        .haven-page ::selection {
          background: rgba(201,133,94,0.2);
          color: #1A1A2E;
        }
        .haven-page ::-moz-selection {
          background: rgba(201,133,94,0.2);
          color: #1A1A2E;
        }
        .haven-page body::before {
          display: none !important;
        }
      `}</style>
      <main
        className="haven-page relative overflow-x-hidden"
        style={{
          background: "#F5F1EB",
          color: "#1A1A2E",
          colorScheme: "light",
          fontFamily: "var(--font-jakarta), system-ui, sans-serif",
        }}
      >
        <Nav />
        <Hero />
        <LogoStrip />
        <Stats />
        <Features />
        <Dashboard />
        <Testimonials />
        <CTA />
        <Footer />
      </main>
    </>
  );
}
