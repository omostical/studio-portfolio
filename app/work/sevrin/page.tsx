"use client";

import Nav from "@/components/sevrin/Nav";
import Hero from "@/components/sevrin/Hero";
import Collection from "@/components/sevrin/Collection";
import Atelier from "@/components/sevrin/Atelier";
import Materials from "@/components/sevrin/Materials";
import Journal from "@/components/sevrin/Journal";
import Footer from "@/components/sevrin/Footer";

export default function SevrinPage() {
  return (
    <main style={{ background: "#F5F1E8", color: "#1A1612", minHeight: "100vh" }}>
      <style jsx global>{`
        ::selection {
          background: #7A3B28;
          color: #F5F1E8;
        }
        ::-moz-selection {
          background: #7A3B28;
          color: #F5F1E8;
        }
        html {
          scroll-behavior: smooth;
        }
      `}</style>
      <Nav />
      <Hero />
      <Collection />
      <Atelier />
      <Materials />
      <Journal />
      <Footer />
    </main>
  );
}
