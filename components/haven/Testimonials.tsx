"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const testimonials = [
  {
    quote:
      "We managed 1,200 units across three states with spreadsheets for years. Haven replaced all of it in a weekend. Our NOI improved 11% in the first quarter because we finally saw where we were hemorrhaging on maintenance.",
    name: "Rachel Kim",
    role: "VP of Operations, Peakstone Properties",
    units: "1,200 units",
    initials: "RK",
  },
  {
    quote:
      "The predictive maintenance feature alone paid for the annual subscription in two months. We caught an HVAC failure pattern across three buildings that would have cost us $180K in emergency repairs.",
    name: "David Okonkwo",
    role: "Director of Facilities, Lakeview REIT",
    units: "3,400 units",
    initials: "DO",
  },
  {
    quote:
      "I present to our board every quarter. Haven's financial intelligence module generates the exact reports they want, with the drill-down they always ask for. It used to take my team two weeks to prep. Now it takes twenty minutes.",
    name: "Sarah Lindquist",
    role: "CFO, Commonwealth Residential",
    units: "860 units",
    initials: "SL",
  },
];

export default function Testimonials() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-8%" });

  return (
    <section
      ref={ref}
      className="py-20 md:py-28"
      style={{ background: "#FFFFFF" }}
    >
      <div className="max-w-[1280px] mx-auto px-6 md:px-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          className="text-center mb-14 md:mb-20"
        >
          <span
            className="text-xs uppercase tracking-widest mb-4 block"
            style={{
              color: "#C9855E",
              fontFamily: "var(--font-ibm-mono), monospace",
            }}
          >
            From Our Customers
          </span>
          <h2
            className="text-3xl md:text-4xl lg:text-[44px] tracking-tight mb-4"
            style={{
              color: "#1A1A2E",
              fontFamily: "var(--font-dm-serif), Georgia, serif",
            }}
          >
            The operators who switched
          </h2>
          <p
            className="text-base md:text-lg max-w-[480px] mx-auto"
            style={{ color: "#6B6B7A" }}
          >
            Property managers running thousands of units trust Haven to protect
            their margins.
          </p>
        </motion.div>

        {/* Testimonial cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.6,
                delay: 0.1 * i,
                ease: [0.25, 0.1, 0.25, 1],
              }}
              className="rounded-2xl p-6 md:p-8 flex flex-col"
              style={{
                background: "#F5F1EB",
                border: "1px solid rgba(26,26,46,0.04)",
              }}
            >
              {/* Stars */}
              <div className="flex gap-0.5 mb-5">
                {[...Array(5)].map((_, j) => (
                  <svg
                    key={j}
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="#C9855E"
                  >
                    <path d="M7 0.5L8.76 5.13L13.72 5.6L9.96 8.87L11.08 13.7L7 11.25L2.92 13.7L4.04 8.87L0.28 5.6L5.24 5.13L7 0.5Z" />
                  </svg>
                ))}
              </div>

              {/* Quote */}
              <p
                className="text-sm leading-relaxed flex-1 mb-6"
                style={{ color: "#1A1A2E" }}
              >
                &ldquo;{t.quote}&rdquo;
              </p>

              {/* Author */}
              <div
                className="pt-5 flex items-center gap-3"
                style={{ borderTop: "1px solid rgba(26,26,46,0.06)" }}
              >
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-semibold"
                  style={{
                    background: "rgba(201,133,94,0.1)",
                    color: "#C9855E",
                    fontFamily: "var(--font-ibm-mono), monospace",
                  }}
                >
                  {t.initials}
                </div>
                <div>
                  <div
                    className="text-sm font-semibold"
                    style={{ color: "#1A1A2E" }}
                  >
                    {t.name}
                  </div>
                  <div
                    className="text-[11px]"
                    style={{
                      color: "#6B6B7A",
                      fontFamily: "var(--font-ibm-mono), monospace",
                    }}
                  >
                    {t.role} &middot; {t.units}
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
