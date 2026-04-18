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
          background: rgba(74, 222, 128, 0.2);
          color: #FAFAFA;
        }
        .beacon-page ::-moz-selection {
          background: rgba(74, 222, 128, 0.2);
          color: #FAFAFA;
        }
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
      `}</style>
      <main
        className="beacon-page relative overflow-x-hidden"
        style={{
          background: "#09090B",
          color: "#FAFAFA",
          colorScheme: "dark",
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
