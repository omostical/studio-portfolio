"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

export default function Hero() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-8%" });

  return (
    <section
      ref={ref}
      style={{
        position: "relative",
        minHeight: "100vh",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* Full background image */}
      <Image
        src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=1600&h=1000&fit=crop&crop=face"
        alt="Customer experience professional"
        fill
        unoptimized
        priority
        style={{ objectFit: "cover", objectPosition: "center top" }}
      />

      {/* Warm overlay tint */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(135deg, rgba(139,100,60,0.55) 0%, rgba(90,60,30,0.35) 40%, rgba(0,0,0,0.15) 100%)",
          zIndex: 1,
        }}
      />

      {/* Bottom fade for clean transition to next section */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: "120px",
          background: "linear-gradient(to bottom, transparent, #FAF8F5)",
          zIndex: 2,
        }}
      />

      {/* Content */}
      <div
        className="max-w-[1280px] mx-auto px-6 md:px-10 w-full"
        style={{
          position: "relative",
          zIndex: 3,
          flex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          paddingBottom: "140px",
          paddingTop: "160px",
        }}
      >
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="font-display"
          style={{
            fontSize: "clamp(2.75rem, 5.5vw, 4.75rem)",
            lineHeight: 1.06,
            fontWeight: 500,
            color: "#FFFFFF",
            letterSpacing: "-0.025em",
            marginBottom: "32px",
            maxWidth: "620px",
          }}
        >
          Better customer
          <br />
          experiences.
          <br />
          Built on Aura.
        </motion.h1>

        <motion.a
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
          href="#cta"
          className="font-body"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
            fontSize: "0.95rem",
            fontWeight: 500,
            color: "#1A1A1A",
            background: "#FFFFFF",
            padding: "14px 28px",
            borderRadius: "100px",
            textDecoration: "none",
            transition: "opacity 0.2s, transform 0.2s",
            alignSelf: "flex-start",
            marginBottom: "32px",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "translateY(-1px)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "translateY(0)";
          }}
        >
          Learn more
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path
              d="M3 8h10M9 4l4 4-4 4"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </motion.a>

        {/* Floating chat widget — bottom right */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
          style={{
            position: "absolute",
            bottom: "160px",
            right: "40px",
            maxWidth: "300px",
            zIndex: 4,
          }}
          className="hidden md:block"
        >
          {/* Customer bubble */}
          <div
            className="font-body"
            style={{
              fontSize: "0.85rem",
              color: "rgba(255,255,255,0.9)",
              marginBottom: "16px",
              lineHeight: 1.5,
            }}
          >
            Can we see our doctor first thing this morning?
          </div>

          {/* AI response card */}
          <div
            style={{
              background: "rgba(255,255,255,0.18)",
              backdropFilter: "blur(16px)",
              WebkitBackdropFilter: "blur(16px)",
              borderRadius: "16px",
              padding: "16px 18px",
              border: "1px solid rgba(255,255,255,0.12)",
              marginBottom: "12px",
            }}
          >
            <div className="flex items-center gap-2" style={{ marginBottom: "8px" }}>
              <div
                style={{
                  width: "20px",
                  height: "20px",
                  borderRadius: "6px",
                  background: "rgba(255,255,255,0.2)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                  <circle cx="5" cy="5" r="4" stroke="white" strokeWidth="1.2" />
                </svg>
              </div>
              <span className="font-body" style={{ fontSize: "0.8rem", color: "#FFFFFF", fontWeight: 600 }}>
                Aura Agent
              </span>
            </div>
            <p className="font-body" style={{ fontSize: "0.85rem", color: "rgba(255,255,255,0.9)", lineHeight: 1.5 }}>
              Yes, we have a few openings this morning.
            </p>
          </div>

          {/* Calendar picker hint */}
          <div
            style={{
              background: "rgba(255,255,255,0.22)",
              backdropFilter: "blur(16px)",
              WebkitBackdropFilter: "blur(16px)",
              borderRadius: "12px",
              padding: "10px 16px",
              border: "1px solid rgba(255,255,255,0.12)",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M9 7L5 4v6l4-3z" fill="rgba(255,255,255,0.6)" />
            </svg>
            <span className="font-body" style={{ fontSize: "0.8rem", color: "#FFFFFF", fontWeight: 500 }}>
              May 13
            </span>
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M5 7l4-3v6L5 7z" fill="rgba(255,255,255,0.6)" />
            </svg>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
