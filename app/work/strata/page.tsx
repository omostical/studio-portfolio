import Nav from "@/components/strata/Nav";
import Hero from "@/components/strata/Hero";
import LogoStrip from "@/components/strata/LogoStrip";
import Problem from "@/components/strata/Problem";
import HowItWorks from "@/components/strata/HowItWorks";
import Features from "@/components/strata/Features";
import Proof from "@/components/strata/Proof";
import FounderNote from "@/components/strata/FounderNote";
import ProductPreview from "@/components/strata/ProductPreview";
import CTA from "@/components/strata/CTA";
import Footer from "@/components/strata/Footer";

export default function StrataPage() {
  return (
    <main className="relative overflow-x-hidden bg-void">
      <Nav />
      <Hero />
      <LogoStrip />
      <Problem />
      <HowItWorks />
      <Features />
      <Proof />
      <FounderNote />
      <ProductPreview />
      <CTA />
      <Footer />
    </main>
  );
}
