"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import DashboardMini from "./DashboardMini";

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
};

const line = {
  hidden: { y: 22 },
  show: { y: 0, transition: { duration: 0.65, ease: [0.25, 0.1, 0.25, 1] } },
};

const fade = {
  hidden: { y: 14 },
  show: { y: 0, transition: { duration: 0.55, ease: [0.25, 0.1, 0.25, 1] } },
};

// Five real-looking professional avatars
const faceStack = [
  { src: "https://i.pravatar.cc/40?img=47", alt: "Finance team member" },
  { src: "https://i.pravatar.cc/40?img=12", alt: "Finance team member" },
  { src: "https://i.pravatar.cc/40?img=33", alt: "Finance team member" },
  { src: "https://i.pravatar.cc/40?img=57", alt: "Finance team member" },
  { src: "https://i.pravatar.cc/40?img=25", alt: "Finance team member" },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-16">
      {/* Warm ambient glow */}
      <div
        className="absolute pointer-events-none"
        style={{
          top: "-10%",
          right: "-5%",
          width: "900px",
          height: "750px",
          background: "radial-gradient(ellipse at center, rgba(184,147,90,0.1) 0%, transparent 65%)",
        }}
      />
      <div
        className="absolute pointer-events-none"
        style={{
          bottom: "5%",
          left: "-8%",
          width: "500px",
          height: "400px",
          background: "radial-gradient(ellipse at center, rgba(40,150,110,0.04) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-layout mx-auto px-6 md:px-10 w-full grid lg:grid-cols-[1fr_1fr] gap-12 lg:gap-8 items-center py-24 lg:py-32">
        {/* Left: Copy */}
        <motion.div variants={stagger} initial="hidden" animate="show" className="max-w-[560px]">
          <motion.div variants={fade} className="flex items-center gap-2 mb-8">
            <span className="inline-flex h-1.5 w-1.5 rounded-full" style={{ background: "#28966E" }} />
            <span className="text-xs tracking-widest uppercase text-mist font-body">
              Private beta · Limited access
            </span>
          </motion.div>

          <motion.h1
            variants={stagger}
            className="font-display text-cloud mb-6"
            style={{ fontSize: "clamp(2.75rem, 5.5vw, 4.75rem)", lineHeight: 1.07, letterSpacing: "-0.03em" }}
          >
            <motion.span variants={line} className="block">Revenue recognition</motion.span>
            <motion.span variants={line} className="block">that keeps pace</motion.span>
            <motion.span variants={line} className="block">
              with how you{" "}
              <em className="not-italic" style={{ color: "#B8935A" }}>actually sell.</em>
            </motion.span>
          </motion.h1>

          <motion.p
            variants={fade}
            className="font-body text-mist leading-relaxed mb-10 max-w-[440px]"
            style={{ fontSize: "1.0625rem" }}
          >
            Strata automates ASC 606-compliant revenue schedules for SaaS companies
            running usage-based, tiered, and multi-year contracts. Stop estimating
            your recognized revenue. Start knowing it.
          </motion.p>

          <motion.div variants={fade} className="flex items-center gap-4 flex-wrap mb-10">
            <a
              href="#cta"
              className="inline-flex items-center gap-2 text-void text-sm font-medium font-body cursor-pointer"
              style={{
                background: "#B8935A",
                borderRadius: "3px",
                padding: "12px 24px",
                transition: "background 0.15s, transform 0.15s, box-shadow 0.15s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "#CBA96A";
                e.currentTarget.style.transform = "translateY(-1px)";
                e.currentTarget.style.boxShadow = "0 8px 24px rgba(184,147,90,0.3)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "#B8935A";
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              Request early access
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M3 7h8M8 4l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
            <a
              href="#how"
              className="inline-flex items-center gap-2 text-sm font-body text-mist cursor-pointer"
              style={{ transition: "color 0.15s" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#EDE8DC")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#6B7A8F")}
            >
              See how it works
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M7 3l4 4-4 4M3 7h8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </motion.div>

          {/* Face stack social proof */}
          <motion.div variants={fade} className="flex items-center gap-3">
            <div className="flex items-center">
              {faceStack.map((face, i) => (
                <div
                  key={i}
                  className="relative rounded-full overflow-hidden flex-shrink-0"
                  style={{
                    width: "32px",
                    height: "32px",
                    marginLeft: i === 0 ? 0 : "-8px",
                    border: "2px solid #060A14",
                    zIndex: faceStack.length - i,
                  }}
                >
                  <Image src={face.src} alt={face.alt} fill className="object-cover" unoptimized />
                </div>
              ))}
            </div>
            <div>
              <p className="text-xs font-body text-cloud font-medium">180+ finance teams</p>
              <p className="text-[10px] font-body text-mist">across Series A–C companies</p>
            </div>
          </motion.div>
        </motion.div>

        {/* Right: Dashboard + floating testimonial card */}
        <motion.div
          initial={{ x: 28, y: 6 }}
          animate={{ x: 0, y: 0 }}
          transition={{ duration: 0.9, delay: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
          className="relative hidden lg:block"
        >
          {/* Glow behind dashboard */}
          <div
            className="absolute inset-0 -z-10"
            style={{
              filter: "blur(48px)",
              background: "radial-gradient(ellipse at center, rgba(184,147,90,0.16), transparent 65%)",
            }}
          />

          {/* Floating testimonial card — top-left of dashboard */}
          <motion.div
            initial={{ y: 12, x: -12 }}
            animate={{ y: 0, x: 0 }}
            transition={{ duration: 0.7, delay: 1.1, ease: [0.25, 0.1, 0.25, 1] }}
            className="absolute -top-6 -left-8 z-10 max-w-[220px]"
            style={{
              background: "#0C1220",
              border: "1px solid rgba(255,255,255,0.1)",
              borderRadius: "10px",
              padding: "12px 14px",
              boxShadow: "0 12px 40px rgba(0,0,0,0.5)",
            }}
          >
            <p className="font-body text-[11px] text-cloud leading-relaxed mb-2.5">
              &ldquo;First time I&rsquo;ve trusted our ARR number going into a board meeting.&rdquo;
            </p>
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-full overflow-hidden flex-shrink-0 relative">
                <Image src="https://i.pravatar.cc/40?img=33" alt="Testimonial" fill className="object-cover" unoptimized />
              </div>
              <div>
                <p className="text-[10px] font-body font-medium text-cloud">Priya Nair</p>
                <p className="text-[9px] font-body text-mist">CFO, Fieldwork</p>
              </div>
            </div>
          </motion.div>

          {/* Floating metric card — bottom-right */}
          <motion.div
            initial={{ y: 12, x: 12 }}
            animate={{ y: 0, x: 0 }}
            transition={{ duration: 0.7, delay: 1.3, ease: [0.25, 0.1, 0.25, 1] }}
            className="absolute -bottom-4 -right-6 z-10"
            style={{
              background: "#0C1220",
              border: "1px solid rgba(40,150,110,0.25)",
              borderRadius: "10px",
              padding: "10px 14px",
              boxShadow: "0 12px 40px rgba(0,0,0,0.5)",
            }}
          >
            <div className="flex items-center gap-2">
              <div
                className="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0"
                style={{ background: "rgba(40,150,110,0.15)" }}
              >
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M2 10l3.5-3.5L8 9l4-5" stroke="#28966E" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <div>
                <p className="text-[11px] font-semibold text-cloud tabular-nums">Close in 4 hrs</p>
                <p className="text-[9px] text-mist font-body">was 14 days</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          >
            <DashboardMini />
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 1 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 0.8 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] uppercase tracking-widest text-mist font-body">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M8 3v10M4 9l4 4 4-4" stroke="#6B7A8F" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  );
}
