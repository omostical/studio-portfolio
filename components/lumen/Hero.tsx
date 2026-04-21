"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import QueryAnimation from "./QueryAnimation";

const trustCompanies = [
  "Freightline",
  "Vector",
  "Northwind",
  "Arcline",
  "Basalt",
  "Terrace",
];

export default function Hero() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-8%" });

  return (
    <section
      ref={ref}
      style={{
        paddingTop: 80,
        paddingBottom: 100,
        borderBottom: "1px solid #1F1F22",
      }}
    >
      <div className="max-w-[1280px] mx-auto px-6 md:px-10">
        <div
          className="flex flex-col lg:flex-row"
          style={{ gap: 48, alignItems: "center" }}
        >
          {/* Left column */}
          <div style={{ flex: 1 }}>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
            >
              {/* Eyebrow */}
              <div
                style={{
                  fontFamily: "var(--font-jetbrains)",
                  fontSize: 12,
                  fontWeight: 400,
                  color: "#E8B931",
                  letterSpacing: "0.06em",
                  textTransform: "uppercase",
                  marginBottom: 20,
                }}
              >
                Analytics for operators
              </div>

              {/* H1 */}
              <h1
                style={{
                  fontFamily: "var(--font-manrope)",
                  fontSize: "clamp(32px, 5vw, 52px)",
                  fontWeight: 800,
                  lineHeight: 1.08,
                  letterSpacing: "-0.03em",
                  color: "#EDEDEF",
                  marginBottom: 20,
                }}
              >
                See what&apos;s breaking before your team does.
              </h1>

              {/* Sub */}
              <p
                style={{
                  fontFamily: "var(--font-dm-sans)",
                  fontSize: 17,
                  lineHeight: 1.6,
                  color: "#8B8B8D",
                  maxWidth: 480,
                  marginBottom: 32,
                }}
              >
                Lumen turns messy ops data — tickets, SLAs, pipeline, fulfillment
                — into live answers. Ask in plain English. Get alerted before
                problems show up in standup.
              </p>

              {/* CTAs */}
              <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
                <a
                  href="#"
                  style={{
                    fontFamily: "var(--font-dm-sans)",
                    fontSize: 15,
                    fontWeight: 500,
                    color: "#0C0C0E",
                    background: "#E8B931",
                    padding: "10px 28px",
                    borderRadius: 100,
                    textDecoration: "none",
                    transition: "opacity 0.2s",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.opacity = "0.9")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.opacity = "1")
                  }
                >
                  Start free
                </a>
                <a
                  href="#"
                  style={{
                    fontFamily: "var(--font-dm-sans)",
                    fontSize: 15,
                    fontWeight: 500,
                    color: "#EDEDEF",
                    border: "1px solid #2A2A2E",
                    padding: "10px 28px",
                    borderRadius: 100,
                    textDecoration: "none",
                    transition: "border-color 0.2s",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.borderColor = "#3A3A3E")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.borderColor = "#2A2A2E")
                  }
                >
                  See a live demo
                </a>
              </div>
            </motion.div>

            {/* Trust strip */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.3 }}
              style={{ marginTop: 48 }}
            >
              <p
                style={{
                  fontFamily: "var(--font-dm-sans)",
                  fontSize: 12,
                  color: "#5A5A5C",
                  marginBottom: 14,
                  textTransform: "uppercase",
                  letterSpacing: "0.06em",
                }}
              >
                Trusted by ops teams at
              </p>
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: 24,
                  alignItems: "center",
                }}
              >
                {trustCompanies.map((name) => (
                  <span
                    key={name}
                    style={{
                      fontFamily: "var(--font-manrope)",
                      fontSize: 14,
                      fontWeight: 600,
                      color: "#5A5A5C",
                      letterSpacing: "-0.01em",
                    }}
                  >
                    {name}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right column — product mockup */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{
              duration: 0.6,
              delay: 0.2,
              ease: [0.25, 0.1, 0.25, 1],
            }}
            className="w-full lg:w-auto"
            style={{ flex: 1, maxWidth: 520 }}
          >
            <QueryAnimation />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
