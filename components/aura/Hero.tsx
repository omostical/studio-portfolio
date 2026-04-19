"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

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
      <img
        src="https://images.unsplash.com/photo-1556745753-b2904692b3cd?w=1920&q=80&auto=format"
        alt="Customer service professional on a call"
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          objectPosition: "65% 25%",
        }}
      />

      {/* Warm overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(135deg, rgba(139,100,60,0.55) 0%, rgba(90,60,30,0.35) 40%, rgba(0,0,0,0.15) 100%)",
          zIndex: 1,
        }}
      />

      {/* Bottom fade */}
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
        {/* Headline */}
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

        {/* CTA */}
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

        {/* Floating conversation bubbles — Sierra style */}
        <div
          className="hidden md:block"
          style={{
            position: "absolute",
            bottom: "180px",
            right: "60px",
            maxWidth: "380px",
            zIndex: 4,
          }}
        >
          {/* Aura Agent greeting — subtle, above the conversation */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex items-center gap-2"
            style={{ marginBottom: "6px", justifyContent: "center" }}
          >
            <div
              style={{
                width: 20,
                height: 20,
                borderRadius: "6px",
                background: "rgba(255,255,255,0.15)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                <circle cx="5" cy="5" r="4" stroke="rgba(255,255,255,0.6)" strokeWidth="1.2" />
              </svg>
            </div>
            <span className="font-body" style={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.45)", fontWeight: 500 }}>
              Aura Agent
            </span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="font-body"
            style={{
              fontSize: "0.9rem",
              color: "rgba(255,255,255,0.55)",
              textAlign: "center",
              marginBottom: "24px",
              lineHeight: 1.4,
            }}
          >
            Hi, what can I do for you today?
          </motion.p>

          {/* Customer bubble — left aligned */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 1.0, ease: [0.16, 1, 0.3, 1] }}
            style={{ marginBottom: "14px", maxWidth: "300px" }}
          >
            <div
              style={{
                background: "rgba(255,255,255,0.13)",
                backdropFilter: "blur(20px)",
                WebkitBackdropFilter: "blur(20px)",
                borderRadius: "18px",
                padding: "14px 18px",
                border: "1px solid rgba(255,255,255,0.08)",
              }}
            >
              <div className="flex items-center gap-2" style={{ marginBottom: "8px" }}>
                <span style={{ fontSize: "1rem" }}>👤</span>
                <span className="font-body" style={{ fontSize: "0.78rem", color: "rgba(255,255,255,0.8)", fontWeight: 600 }}>
                  Yoshiro
                </span>
              </div>
              <p className="font-body" style={{ fontSize: "0.88rem", color: "rgba(255,255,255,0.9)", lineHeight: 1.5 }}>
                I don&apos;t recognize this $95 charge. Can you help?
              </p>
            </div>
          </motion.div>

          {/* Agent response — right aligned */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 1.6, ease: [0.16, 1, 0.3, 1] }}
            style={{ marginLeft: "40px" }}
          >
            <div
              style={{
                background: "rgba(255,255,255,0.18)",
                backdropFilter: "blur(20px)",
                WebkitBackdropFilter: "blur(20px)",
                borderRadius: "18px",
                padding: "14px 18px",
                border: "1px solid rgba(255,255,255,0.1)",
              }}
            >
              <div className="flex items-center gap-2" style={{ marginBottom: "8px" }}>
                <div
                  style={{
                    width: 20,
                    height: 20,
                    borderRadius: "6px",
                    background: "rgba(255,255,255,0.18)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                    <circle cx="5" cy="5" r="4" stroke="rgba(255,255,255,0.7)" strokeWidth="1.2" />
                  </svg>
                </div>
                <span className="font-body" style={{ fontSize: "0.78rem", color: "rgba(255,255,255,0.8)", fontWeight: 600 }}>
                  Aura Agent
                </span>
              </div>
              <p className="font-body" style={{ fontSize: "0.88rem", color: "rgba(255,255,255,0.9)", lineHeight: 1.5 }}>
                I understand your concern, Yoshiro. I&apos;ve opened a dispute on that charge and will update you as soon as it&apos;s resolved.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
