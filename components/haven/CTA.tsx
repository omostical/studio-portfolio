"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function CTA() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-8%" });

  return (
    <section ref={ref} className="py-20 md:py-28" style={{ background: "#F5F1EB" }}>
      <div className="max-w-[1280px] mx-auto px-6 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
          className="relative rounded-3xl overflow-hidden px-8 py-16 md:px-16 md:py-24 text-center"
          style={{
            background: "#1A1A2E",
          }}
        >
          {/* Blueprint grid on dark */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              backgroundImage: `
                linear-gradient(rgba(245,241,235,0.03) 1px, transparent 1px),
                linear-gradient(90deg, rgba(245,241,235,0.03) 1px, transparent 1px)
              `,
              backgroundSize: "60px 60px",
            }}
          />
          {/* Warm glow */}
          <div
            className="absolute pointer-events-none"
            style={{
              top: "-30%",
              left: "50%",
              transform: "translateX(-50%)",
              width: "600px",
              height: "400px",
              background:
                "radial-gradient(ellipse at center, rgba(201,133,94,0.12) 0%, transparent 70%)",
            }}
          />

          <div className="relative z-10">
            <span
              className="text-xs uppercase tracking-widest mb-6 block"
              style={{
                color: "#C9855E",
                fontFamily: "var(--font-ibm-mono), monospace",
              }}
            >
              Get started today
            </span>
            <h2
              className="text-3xl md:text-4xl lg:text-5xl tracking-tight mb-5 max-w-[600px] mx-auto"
              style={{
                color: "#F5F1EB",
                fontFamily: "var(--font-dm-serif), Georgia, serif",
              }}
            >
              Stop managing properties in the dark
            </h2>
            <p
              className="text-base md:text-lg max-w-[440px] mx-auto mb-10"
              style={{ color: "rgba(245,241,235,0.6)" }}
            >
              14-day free trial. No credit card required. Connect your first
              property in under 10 minutes.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="#trial"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-sm font-semibold transition-all duration-200"
                style={{ background: "#C9855E", color: "#FFFFFF" }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.background = "#B5754E")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.background = "#C9855E")
                }
              >
                Start your free trial
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                >
                  <path
                    d="M1 7h12m0 0L8 2.5M13 7l-5 4.5"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
              <a
                href="#demo"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-sm font-medium transition-all duration-200"
                style={{
                  color: "#F5F1EB",
                  border: "1px solid rgba(245,241,235,0.15)",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.borderColor =
                    "rgba(245,241,235,0.3)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.borderColor =
                    "rgba(245,241,235,0.15)")
                }
              >
                See a demo
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
