import Nav from "@/components/medly/Nav";
import Hero from "@/components/medly/Hero";
import TrustBar from "@/components/medly/TrustBar";
import Problem from "@/components/medly/Problem";
import Platform from "@/components/medly/Platform";
import Features from "@/components/medly/Features";
import Outcomes from "@/components/medly/Outcomes";
import CTA from "@/components/medly/CTA";
import Footer from "@/components/medly/Footer";

function WaveDivider({
  fill = "#FAFAF5",
  flip = false,
}: {
  fill?: string;
  flip?: boolean;
}) {
  return (
    <div
      aria-hidden="true"
      style={{
        transform: flip ? "rotate(180deg)" : "none",
        marginTop: "-1px",
        marginBottom: "-1px",
        lineHeight: 0,
      }}
    >
      <svg
        viewBox="0 0 1440 60"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ display: "block", width: "100%" }}
        preserveAspectRatio="none"
      >
        <path
          d="M0 60V20C240 50 480 0 720 30C960 60 1200 10 1440 40V60H0Z"
          fill={fill}
        />
      </svg>
    </div>
  );
}

export default function MedlyPage() {
  return (
    <main
      className="relative overflow-x-hidden"
      style={{
        background: "#FAFAF5",
        color: "#2D3436",
        colorScheme: "light",
      }}
    >
      <style>{`
        ::selection {
          background: rgba(61,155,127,0.15);
        }
        ::-moz-selection {
          background: rgba(61,155,127,0.15);
        }
      `}</style>
      <Nav />

      {/* Hero: #FAFAF5 */}
      <Hero />

      {/* TrustBar: #FAFAF5 */}
      <TrustBar />

      {/* Wave: FAFAF5 -> FFFFFF */}
      <WaveDivider fill="#FFFFFF" />

      {/* Problem: #FFFFFF */}
      <Problem />

      {/* Wave: FFFFFF -> EFF8F4 */}
      <WaveDivider fill="#EFF8F4" />

      {/* Platform: #EFF8F4 */}
      <Platform />

      {/* Wave: EFF8F4 -> FFFFFF */}
      <WaveDivider fill="#FFFFFF" />

      {/* Features: #FFFFFF */}
      <Features />

      {/* Wave: FFFFFF -> FFF5EE */}
      <WaveDivider fill="#FFF5EE" />

      {/* Outcomes: #FFF5EE */}
      <Outcomes />

      {/* Wave: FFF5EE -> EFF8F4 */}
      <WaveDivider fill="#EFF8F4" />

      {/* CTA: #EFF8F4 */}
      <CTA />

      {/* Wave: EFF8F4 -> FAFAF5 */}
      <WaveDivider fill="#FAFAF5" />

      {/* Footer: #FAFAF5 */}
      <Footer />
    </main>
  );
}
