"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";

const mainQuote = {
  text: "We killed four dashboards the week we installed Lumen. Nobody misses them.",
  name: "Maya Okafor",
  role: "Head of Ops, Freightline",
  avatar:
    "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=80&h=80&fit=crop&crop=face",
};

const smallQuotes = [
  {
    text: "The first analytics tool my team actually opens on Monday morning.",
    name: "Dan Reyes",
    role: "RevOps Lead, Vector",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face",
  },
  {
    text: "Replaced a $60k/yr BI consultant. Not kidding.",
    name: "Priya Shah",
    role: "COO, Northwind",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&fit=crop&crop=face",
  },
];

export default function Proof() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-8%" });

  return (
    <section
      ref={ref}
      style={{
        paddingTop: 100,
        paddingBottom: 100,
        borderBottom: "1px solid #1F1F22",
      }}
    >
      <div className="max-w-[1280px] mx-auto px-6 md:px-10">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          style={{
            fontFamily: "var(--font-manrope)",
            fontSize: "clamp(26px, 3.5vw, 38px)",
            fontWeight: 700,
            lineHeight: 1.15,
            letterSpacing: "-0.025em",
            color: "#EDEDEF",
            marginBottom: 56,
          }}
        >
          Built with ops teams, not for data teams.
        </motion.h2>

        {/* Main quote */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          style={{
            background: "#141416",
            border: "1px solid #1F1F22",
            borderRadius: 6,
            padding: "40px 36px",
            marginBottom: 16,
          }}
        >
          <blockquote
            style={{
              fontFamily: "var(--font-manrope)",
              fontSize: "clamp(20px, 2.5vw, 26px)",
              fontWeight: 500,
              lineHeight: 1.4,
              letterSpacing: "-0.015em",
              color: "#EDEDEF",
              marginBottom: 24,
            }}
          >
            &ldquo;{mainQuote.text}&rdquo;
          </blockquote>
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <Image
              src={mainQuote.avatar}
              alt={mainQuote.name}
              width={40}
              height={40}
              unoptimized
              style={{ borderRadius: "50%", objectFit: "cover" }}
            />
            <div>
              <div
                style={{
                  fontFamily: "var(--font-dm-sans)",
                  fontSize: 14,
                  fontWeight: 500,
                  color: "#EDEDEF",
                }}
              >
                {mainQuote.name}
              </div>
              <div
                style={{
                  fontFamily: "var(--font-dm-sans)",
                  fontSize: 13,
                  color: "#5A5A5C",
                }}
              >
                {mainQuote.role}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Small quotes */}
        <div
          className="grid grid-cols-1 md:grid-cols-2"
          style={{ gap: 16 }}
        >
          {smallQuotes.map((quote, i) => (
            <motion.div
              key={quote.name}
              initial={{ opacity: 0, y: 16 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.08 }}
              style={{
                background: "#141416",
                border: "1px solid #1F1F22",
                borderRadius: 6,
                padding: "28px 28px",
              }}
            >
              <blockquote
                style={{
                  fontFamily: "var(--font-dm-sans)",
                  fontSize: 15,
                  lineHeight: 1.5,
                  color: "#EDEDEF",
                  marginBottom: 20,
                }}
              >
                &ldquo;{quote.text}&rdquo;
              </blockquote>
              <div
                style={{ display: "flex", alignItems: "center", gap: 10 }}
              >
                <Image
                  src={quote.avatar}
                  alt={quote.name}
                  width={32}
                  height={32}
                  unoptimized
                  style={{ borderRadius: "50%", objectFit: "cover" }}
                />
                <div>
                  <div
                    style={{
                      fontFamily: "var(--font-dm-sans)",
                      fontSize: 13,
                      fontWeight: 500,
                      color: "#EDEDEF",
                    }}
                  >
                    {quote.name}
                  </div>
                  <div
                    style={{
                      fontFamily: "var(--font-dm-sans)",
                      fontSize: 12,
                      color: "#5A5A5C",
                    }}
                  >
                    {quote.role}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
