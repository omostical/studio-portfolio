"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const steps = [
  {
    number: "01",
    title: "Connect your EHR",
    description:
      "Medly integrates with Epic, Cerner, Athenahealth, and 40+ other systems in under a day. No migration, no data duplication \u2014 just a secure connection to your existing setup.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path
          d="M8 14l4 4 8-8"
          stroke="#3D9B7F"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    number: "02",
    title: "Set your rules",
    description:
      "Define when reminders go out, which channels patients prefer (SMS, email, voice), and how escalation works. Medly adapts to your workflows \u2014 not the other way around.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path
          d="M7 10h14M7 14h10M7 18h14"
          stroke="#3D9B7F"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    number: "03",
    title: "Patients stay engaged",
    description:
      "Automated reminders go out on schedule. Patients confirm with one tap. Your staff sees real-time updates. No-shows drop. Outcomes improve. Everyone wins.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <circle cx="14" cy="10" r="4" stroke="#3D9B7F" strokeWidth="2" />
        <path
          d="M7 22c0-3.87 3.13-7 7-7s7 3.13 7 7"
          stroke="#3D9B7F"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
];

export default function Platform() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-8%" });

  return (
    <section
      id="platform"
      ref={ref}
      style={{
        background: "#EFF8F4",
        padding: "140px 0 120px",
      }}
    >
      <div className="max-w-[1280px] mx-auto px-6 md:px-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="text-center"
          style={{ marginBottom: "80px" }}
        >
          <span
            style={{
              fontFamily: "var(--font-source), system-ui, sans-serif",
              fontSize: "0.75rem",
              fontWeight: 500,
              color: "#7F8C8D",
              textTransform: "uppercase",
              letterSpacing: "0.1em",
              display: "block",
              marginBottom: "20px",
            }}
          >
            How Medly works
          </span>
          <h2
            style={{
              fontFamily: "var(--font-libre), Georgia, serif",
              fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)",
              lineHeight: 1.15,
              color: "#2D3436",
              letterSpacing: "-0.02em",
              maxWidth: "600px",
              margin: "0 auto",
            }}
          >
            Three steps to fewer no-shows and{" "}
            <em className="not-italic" style={{ color: "#3D9B7F" }}>
              better outcomes
            </em>
          </h2>
        </motion.div>

        {/* Steps with connecting dotted curve */}
        <div className="relative">
          {/* Curved dotted line connecting steps (desktop only) */}
          <div className="hidden md:block absolute top-[48px] left-0 right-0 pointer-events-none" style={{ zIndex: 0 }}>
            <svg
              width="100%"
              height="4"
              viewBox="0 0 1200 4"
              preserveAspectRatio="none"
              fill="none"
            >
              <path
                d="M100 2 C300 2 300 2 600 2 C900 2 900 2 1100 2"
                stroke="#3D9B7F"
                strokeWidth="2"
                strokeDasharray="6 8"
                strokeOpacity="0.25"
                strokeLinecap="round"
              />
            </svg>
          </div>

          <div className="grid md:grid-cols-3 gap-10" style={{ position: "relative", zIndex: 1 }}>
            {steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 28 }}
                animate={
                  inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 28 }
                }
                transition={{
                  duration: 0.8,
                  delay: 0.2 * i,
                  ease: "easeOut",
                }}
                className="flex flex-col items-center text-center"
              >
                {/* Circular step icon */}
                <div
                  style={{
                    width: "80px",
                    height: "80px",
                    borderRadius: "50%",
                    background: "#FFFFFF",
                    boxShadow: "0 4px 32px rgba(45,52,54,0.06)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: "32px",
                    position: "relative",
                  }}
                >
                  {/* Step number badge */}
                  <div
                    style={{
                      position: "absolute",
                      top: "-4px",
                      right: "-4px",
                      width: "24px",
                      height: "24px",
                      borderRadius: "50%",
                      background: "#E8A87C",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "var(--font-jetbrains), monospace",
                        fontSize: "0.6rem",
                        fontWeight: 600,
                        color: "#FFFFFF",
                      }}
                    >
                      {step.number}
                    </span>
                  </div>
                  {step.icon}
                </div>

                {/* Card below */}
                <div
                  style={{
                    background: "#FFFFFF",
                    borderRadius: "20px",
                    padding: "32px 24px",
                    boxShadow: "0 4px 32px rgba(45,52,54,0.06)",
                    width: "100%",
                  }}
                >
                  <h3
                    style={{
                      fontFamily: "var(--font-libre), Georgia, serif",
                      fontSize: "1.25rem",
                      color: "#2D3436",
                      letterSpacing: "-0.02em",
                      marginBottom: "12px",
                    }}
                  >
                    {step.title}
                  </h3>
                  <p
                    style={{
                      fontFamily: "var(--font-source), system-ui, sans-serif",
                      fontSize: "0.9375rem",
                      lineHeight: 1.7,
                      color: "#7F8C8D",
                    }}
                  >
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
