"use client";

import Nav from "@/components/lumen/Nav";
import Hero from "@/components/lumen/Hero";
import Problem from "@/components/lumen/Problem";
import Product from "@/components/lumen/Product";
import HowItWorks from "@/components/lumen/HowItWorks";
import Proof from "@/components/lumen/Proof";
import Compare from "@/components/lumen/Compare";
import CTA from "@/components/lumen/CTA";
import Footer from "@/components/lumen/Footer";

export default function LumenPage() {
  return (
    <div
      style={{
        background: "#0C0C0E",
        color: "#EDEDEF",
        minHeight: "100vh",
      }}
    >
      <style jsx global>{`
        ::selection {
          background: rgba(232, 185, 49, 0.3);
          color: #ededef;
        }
        ::-moz-selection {
          background: rgba(232, 185, 49, 0.3);
          color: #ededef;
        }
      `}</style>
      <Nav />
      <Hero />
      <Problem />
      <Product />
      <HowItWorks />
      <Proof />
      <Compare />
      <CTA />
      <Footer />
    </div>
  );
}
