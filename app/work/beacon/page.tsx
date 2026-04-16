"use client";

import Nav from "@/components/beacon/Nav";
import Hero from "@/components/beacon/Hero";
import LogoStrip from "@/components/beacon/LogoStrip";
import Features from "@/components/beacon/Features";
import ProductShowcase from "@/components/beacon/ProductShowcase";
import Proof from "@/components/beacon/Proof";
import Pricing from "@/components/beacon/Pricing";
import CTA from "@/components/beacon/CTA";
import Footer from "@/components/beacon/Footer";

export default function BeaconPage() {
  return (
    <>
      <style>{`
        .beacon-page ::selection {
          background: rgba(255,107,53,0.2);
          color: #18181B;
        }
        .beacon-page ::-moz-selection {
          background: rgba(255,107,53,0.2);
          color: #18181B;
        }
        .beacon-page body::before {
          display: none !important;
        }
      `}</style>
      <main
        className="beacon-page relative overflow-x-hidden"
        style={{
          background: "#FAFAF8",
          color: "#18181B",
          colorScheme: "light",
          fontFamily: "var(--font-jakarta), system-ui, sans-serif",
        }}
      >
        <Nav />
        <Hero />
        <LogoStrip />
        <Features />
        <ProductShowcase />
        <Proof />
        <Pricing />
        <CTA />
        <Footer />
      </main>
    </>
  );
}
