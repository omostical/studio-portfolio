"use client";

import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import TrustBadges from "./TrustBadges";

/* ---------- Claim card data ---------- */
interface Claim {
  id: string;
  type: string;
  amount: string;
  status: "Approved" | "Flagged" | "Processing" | "Paid";
  stage: number; // 0-3
}

const statusColors: Record<string, { bg: string; text: string }> = {
  Approved: { bg: "rgba(16,185,129,0.14)", text: "#10B981" },
  Flagged: { bg: "rgba(245,158,11,0.14)", text: "#F59E0B" },
  Processing: { bg: "rgba(59,130,246,0.14)", text: "#3B82F6" },
  Paid: { bg: "rgba(16,185,129,0.14)", text: "#10B981" },
};

const stages = ["Received", "Triaged", "Reviewed", "Paid"];

const claimsData: Claim[] = [
  { id: "CLM-4821", type: "Auto Collision", amount: "$12,400", status: "Approved", stage: 3 },
  { id: "CLM-4822", type: "Property Damage", amount: "$8,750", status: "Flagged", stage: 1 },
  { id: "CLM-4823", type: "Health — Surgical", amount: "$34,200", status: "Processing", stage: 2 },
  { id: "CLM-4824", type: "Liability", amount: "$5,600", status: "Approved", stage: 3 },
  { id: "CLM-4825", type: "Water Damage", amount: "$15,300", status: "Processing", stage: 1 },
];

function ClaimCard({ claim, index }: { claim: Claim; index: number }) {
  const sc = statusColors[claim.status];
  return (
    <motion.div
      initial={{ opacity: 0, x: 30 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -30 }}
      transition={{ duration: 0.5, delay: index * 0.12 }}
      style={{
        background: "#111A30",
        border: "1px solid rgba(59,130,246,0.12)",
        borderRadius: 10,
        padding: "12px 16px",
        marginBottom: 8,
      }}
    >
      <div className="flex items-center justify-between mb-2">
        <span
          style={{
            fontFamily: "var(--font-fira)",
            fontSize: 12,
            color: "#6B7FA0",
          }}
        >
          {claim.id}
        </span>
        <span
          style={{
            fontFamily: "var(--font-outfit)",
            fontSize: 11,
            fontWeight: 500,
            color: sc.text,
            background: sc.bg,
            padding: "2px 8px",
            borderRadius: 4,
          }}
        >
          {claim.status}
        </span>
      </div>
      <div
        style={{
          fontFamily: "var(--font-outfit)",
          fontSize: 14,
          fontWeight: 500,
          color: "#E4E8F0",
          marginBottom: 6,
        }}
      >
        {claim.type}
      </div>
      <div className="flex items-center justify-between">
        <span
          style={{
            fontFamily: "var(--font-fira)",
            fontSize: 13,
            fontWeight: 500,
            color: "#3B82F6",
          }}
        >
          {claim.amount}
        </span>
        {/* Progress dots */}
        <div className="flex gap-1">
          {stages.map((_, si) => (
            <div
              key={si}
              style={{
                width: 6,
                height: 6,
                borderRadius: 3,
                background:
                  si <= claim.stage
                    ? si === claim.stage
                      ? "#3B82F6"
                      : "rgba(59,130,246,0.4)"
                    : "rgba(107,127,160,0.2)",
                transition: "background 0.3s",
              }}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
}

function ClaimsPipeline() {
  const [visibleClaims, setVisibleClaims] = useState(claimsData.slice(0, 3));
  const [cycleKey, setCycleKey] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCycleKey((k) => k + 1);
      setVisibleClaims((prev) => {
        const nextIdx = (claimsData.indexOf(prev[prev.length - 1]) + 1) % claimsData.length;
        return [...prev.slice(1), claimsData[nextIdx]];
      });
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      style={{
        background: "rgba(11,15,30,0.8)",
        border: "1px solid rgba(59,130,246,0.12)",
        borderRadius: 16,
        padding: 20,
        width: "100%",
        maxWidth: 380,
      }}
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <div
            style={{
              width: 8,
              height: 8,
              borderRadius: 4,
              background: "#10B981",
              boxShadow: "0 0 8px rgba(16,185,129,0.4)",
            }}
          />
          <span
            style={{
              fontFamily: "var(--font-outfit)",
              fontSize: 13,
              fontWeight: 500,
              color: "#E4E8F0",
            }}
          >
            Live Claims Feed
          </span>
        </div>
        <span
          style={{
            fontFamily: "var(--font-fira)",
            fontSize: 11,
            color: "#6B7FA0",
          }}
        >
          3 active
        </span>
      </div>

      {/* Stage labels */}
      <div className="flex justify-between mb-3 px-1">
        {stages.map((s, i) => (
          <span
            key={s}
            style={{
              fontFamily: "var(--font-fira)",
              fontSize: 10,
              color: "#6B7FA0",
              textTransform: "uppercase",
              letterSpacing: "0.05em",
            }}
          >
            {s}
          </span>
        ))}
      </div>

      {/* Progress bar */}
      <div
        style={{
          height: 2,
          background: "rgba(59,130,246,0.1)",
          borderRadius: 1,
          marginBottom: 16,
          position: "relative",
          overflow: "hidden",
        }}
      >
        <motion.div
          animate={{ x: ["-100%", "100%"] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "linear" }}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "40%",
            height: "100%",
            background:
              "linear-gradient(90deg, transparent, #3B82F6, transparent)",
            borderRadius: 1,
          }}
        />
      </div>

      {/* Claims list */}
      <AnimatePresence mode="popLayout">
        {visibleClaims.map((claim, i) => (
          <ClaimCard key={claim.id + "-" + cycleKey + "-" + i} claim={claim} index={i} />
        ))}
      </AnimatePresence>
    </div>
  );
}

export default function Hero() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-8%" });

  return (
    <section
      ref={ref}
      className="relative overflow-hidden"
      style={{ paddingTop: 80, paddingBottom: 100 }}
    >
      <div className="max-w-[1280px] mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left — Copy */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                padding: "4px 12px 4px 6px",
                borderRadius: 20,
                background: "rgba(59,130,246,0.08)",
                border: "1px solid rgba(59,130,246,0.15)",
                marginBottom: 24,
              }}
            >
              <span
                style={{
                  width: 6,
                  height: 6,
                  borderRadius: 3,
                  background: "#3B82F6",
                  display: "block",
                }}
              />
              <span
                style={{
                  fontFamily: "var(--font-outfit)",
                  fontSize: 13,
                  fontWeight: 500,
                  color: "#3B82F6",
                }}
              >
                Claims Intelligence Platform
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.1 }}
              style={{
                fontFamily: "var(--font-space)",
                fontSize: "clamp(36px, 5vw, 56px)",
                fontWeight: 700,
                lineHeight: 1.08,
                letterSpacing: "-0.03em",
                color: "#E4E8F0",
                marginBottom: 20,
              }}
            >
              Process claims in minutes,{" "}
              <span style={{ color: "#3B82F6" }}>not months.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.25 }}
              style={{
                fontFamily: "var(--font-outfit)",
                fontSize: 17,
                lineHeight: 1.65,
                color: "#6B7FA0",
                maxWidth: 520,
                marginBottom: 32,
              }}
            >
              Canopy uses machine learning to triage incoming claims, flag fraud
              patterns, and automate payouts — so your team handles exceptions,
              not paperwork.{" "}
              <span style={{ color: "#E4E8F0", fontWeight: 500 }}>
                5× faster processing. 94% first-touch accuracy.
              </span>
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-wrap gap-3"
            >
              <a
                href="#cta"
                style={{
                  fontFamily: "var(--font-outfit)",
                  fontSize: 15,
                  fontWeight: 500,
                  color: "#fff",
                  background: "#3B82F6",
                  padding: "12px 28px",
                  borderRadius: 10,
                  textDecoration: "none",
                  transition: "background 0.2s, transform 0.2s",
                  display: "inline-block",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "#2563EB";
                  e.currentTarget.style.transform = "translateY(-1px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "#3B82F6";
                  e.currentTarget.style.transform = "translateY(0)";
                }}
              >
                Schedule a demo
              </a>
              <a
                href="#"
                style={{
                  fontFamily: "var(--font-outfit)",
                  fontSize: 15,
                  fontWeight: 500,
                  color: "#E4E8F0",
                  background: "transparent",
                  border: "1px solid rgba(59,130,246,0.25)",
                  padding: "12px 28px",
                  borderRadius: 10,
                  textDecoration: "none",
                  transition: "border-color 0.2s, background 0.2s",
                  display: "inline-block",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "rgba(59,130,246,0.5)";
                  e.currentTarget.style.background = "rgba(59,130,246,0.05)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "rgba(59,130,246,0.25)";
                  e.currentTarget.style.background = "transparent";
                }}
              >
                Read the whitepaper
              </a>
            </motion.div>

            <TrustBadges />
          </div>

          {/* Right — Claims pipeline visualization */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex justify-center lg:justify-end"
          >
            <ClaimsPipeline />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
