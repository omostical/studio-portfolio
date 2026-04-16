import Nav from "@/components/medly/Nav";
import Hero from "@/components/medly/Hero";
import TrustBar from "@/components/medly/TrustBar";
import Problem from "@/components/medly/Problem";
import Platform from "@/components/medly/Platform";
import Features from "@/components/medly/Features";
import Outcomes from "@/components/medly/Outcomes";
import CTA from "@/components/medly/CTA";
import Footer from "@/components/medly/Footer";

export default function MedlyPage() {
  return (
    <main
      className="relative overflow-x-hidden"
      style={{ background: "#0F1A14", color: "#F0EDE5", colorScheme: "dark" }}
    >
      <Nav />
      <Hero />
      <TrustBar />
      <Problem />
      <Platform />
      <Features />
      <Outcomes />
      <CTA />
      <Footer />
    </main>
  );
}
