"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function CTA() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-8%" });

  return (
    <section
      ref={ref}
      style={{
        background: "#FAF8F5",
        padding: "120px 24px",
      }}
    >
      <div
        style={{ maxWidth: "720px", margin: "0 auto", textAlign: "center" }}
      >
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2
            className="font-display"
            style={{
              fontSize: "clamp(2rem, 4vw, 3.25rem)",
              lineHeight: 1.12,
              fontWeight: 500,
              color: "#1A1A1A",
              letterSpacing: "-0.025em",
              marginBottom: "20px",
            }}
          >
            Discover what Aura
            <br />
            can do for you
          </h2>

          <p
            className="font-body"
            style={{
              fontSize: "1.05rem",
              color: "#6B6B6B",
              lineHeight: 1.7,
              maxWidth: "480px",
              margin: "0 auto 36px",
            }}
          >
            Join the world&apos;s best companies in delivering customer
            experiences that build loyalty and drive growth.
          </p>

          <a
            href="#"
            className="font-body"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              fontSize: "0.95rem",
              fontWeight: 500,
              color: "#FFFFFF",
              background: "#1A1A1A",
              padding: "14px 32px",
              borderRadius: "100px",
              textDecoration: "none",
              transition: "opacity 0.2s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.85")}
            onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
          >
            Get started
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
            >
              <path
                d="M3 8h10M9 4l4 4-4 4"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
