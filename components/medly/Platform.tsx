"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { PulseLine } from "./Hero";

const steps = [
  {
    number: "01",
    title: "Connect your EHR",
    description:
      "Medly integrates with Epic, Cerner, Athenahealth, and 40+ other systems in under a day. No migration, no data duplication \u2014 just a secure connection to your existing setup.",
    visual: (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "8px",
          padding: "16px",
        }}
      >
        {["Epic", "Cerner", "Athenahealth", "DrChrono"].map((ehr, i) => (
          <div
            key={ehr}
            className="flex items-center justify-between"
            style={{
              background: i < 2 ? "rgba(78,203,160,0.06)" : "rgba(255,255,255,0.02)",
              borderRadius: "8px",
              padding: "10px 14px",
              border:
                i < 2
                  ? "1px solid rgba(78,203,160,0.12)"
                  : "1px solid rgba(255,255,255,0.04)",
            }}
          >
            <div className="flex items-center gap-3">
              <div
                style={{
                  width: "28px",
                  height: "28px",
                  borderRadius: "6px",
                  background:
                    i < 2
                      ? "rgba(78,203,160,0.12)"
                      : "rgba(255,255,255,0.06)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <span
                  style={{
                    fontFamily:
                      "var(--font-jetbrains), monospace",
                    fontSize: "0.55rem",
                    fontWeight: 500,
                    color: i < 2 ? "#4ECBA0" : "#7A8F85",
                  }}
                >
                  {ehr[0]}
                </span>
              </div>
              <span
                style={{
                  fontFamily:
                    "var(--font-source), system-ui, sans-serif",
                  fontSize: "0.8rem",
                  fontWeight: 500,
                  color: "#F0EDE5",
                }}
              >
                {ehr}
              </span>
            </div>
            <span
              style={{
                fontFamily:
                  "var(--font-source), system-ui, sans-serif",
                fontSize: "0.65rem",
                fontWeight: 500,
                color: i < 2 ? "#4ECBA0" : "#7A8F85",
              }}
            >
              {i < 2 ? "Connected" : "Available"}
            </span>
          </div>
        ))}
      </div>
    ),
  },
  {
    number: "02",
    title: "Set your rules",
    description:
      "Define when reminders go out, which channels patients prefer (SMS, email, voice), and how escalation works. Medly adapts to your workflows \u2014 not the other way around.",
    visual: (
      <div style={{ padding: "16px" }}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "10px",
          }}
        >
          {[
            {
              label: "48hr before appointment",
              channel: "SMS",
              active: true,
            },
            {
              label: "24hr before appointment",
              channel: "Email + SMS",
              active: true,
            },
            {
              label: "2hr before appointment",
              channel: "SMS",
              active: true,
            },
            {
              label: "No response after 2hr",
              channel: "Voice call",
              active: false,
            },
          ].map((rule, i) => (
            <div
              key={i}
              className="flex items-center justify-between"
              style={{
                borderRadius: "8px",
                padding: "10px 14px",
                background: "rgba(255,255,255,0.02)",
                border: "1px solid rgba(255,255,255,0.04)",
              }}
            >
              <div>
                <p
                  style={{
                    fontFamily:
                      "var(--font-source), system-ui, sans-serif",
                    fontSize: "0.78rem",
                    fontWeight: 500,
                    color: "#F0EDE5",
                    lineHeight: 1.3,
                  }}
                >
                  {rule.label}
                </p>
                <p
                  style={{
                    fontFamily:
                      "var(--font-source), system-ui, sans-serif",
                    fontSize: "0.65rem",
                    color: "#7A8F85",
                  }}
                >
                  {rule.channel}
                </p>
              </div>
              {/* Toggle */}
              <div
                style={{
                  width: "32px",
                  height: "18px",
                  borderRadius: "9px",
                  background: rule.active
                    ? "#4ECBA0"
                    : "rgba(255,255,255,0.1)",
                  position: "relative",
                  transition: "background 0.2s",
                  flexShrink: 0,
                }}
              >
                <div
                  style={{
                    width: "14px",
                    height: "14px",
                    borderRadius: "7px",
                    background: "#F0EDE5",
                    position: "absolute",
                    top: "2px",
                    left: rule.active ? "16px" : "2px",
                    transition: "left 0.2s",
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    ),
  },
  {
    number: "03",
    title: "Patients stay engaged",
    description:
      "Automated reminders go out on schedule. Patients confirm with one tap. Your staff sees real-time updates. No-shows drop. Outcomes improve. Everyone wins.",
    visual: (
      <div style={{ padding: "16px" }}>
        {/* Mini engagement timeline */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "0",
            position: "relative",
          }}
        >
          {/* Vertical line */}
          <div
            style={{
              position: "absolute",
              left: "15px",
              top: "16px",
              bottom: "16px",
              width: "1px",
              background:
                "linear-gradient(to bottom, #4ECBA0 0%, rgba(78,203,160,0.2) 100%)",
            }}
          />
          {[
            {
              time: "48h",
              action: "SMS reminder sent",
              status: "Delivered",
              statusColor: "#4ECBA0",
            },
            {
              time: "47h",
              action: "Patient opened link",
              status: "Viewed",
              statusColor: "#4ECBA0",
            },
            {
              time: "47h",
              action: "Appointment confirmed",
              status: "Confirmed",
              statusColor: "#4ECBA0",
            },
            {
              time: "2h",
              action: "Day-of reminder sent",
              status: "Delivered",
              statusColor: "#7A8F85",
            },
          ].map((event, i) => (
            <div
              key={i}
              className="flex items-start gap-3"
              style={{ padding: "10px 0", position: "relative" }}
            >
              <div
                style={{
                  width: "30px",
                  height: "30px",
                  borderRadius: "50%",
                  background:
                    i < 3
                      ? "rgba(78,203,160,0.12)"
                      : "rgba(255,255,255,0.04)",
                  border:
                    i < 3
                      ? "2px solid rgba(78,203,160,0.3)"
                      : "2px solid rgba(255,255,255,0.08)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                  zIndex: 1,
                }}
              >
                <span
                  style={{
                    fontFamily:
                      "var(--font-jetbrains), monospace",
                    fontSize: "0.55rem",
                    color: i < 3 ? "#4ECBA0" : "#7A8F85",
                  }}
                >
                  {event.time}
                </span>
              </div>
              <div style={{ paddingTop: "3px" }}>
                <p
                  style={{
                    fontFamily:
                      "var(--font-source), system-ui, sans-serif",
                    fontSize: "0.78rem",
                    fontWeight: 500,
                    color: "#F0EDE5",
                    lineHeight: 1.3,
                  }}
                >
                  {event.action}
                </p>
                <p
                  style={{
                    fontFamily:
                      "var(--font-source), system-ui, sans-serif",
                    fontSize: "0.65rem",
                    color: event.statusColor,
                  }}
                >
                  {event.status}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    ),
  },
];

export default function Platform() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-8%" });

  return (
    <>
      <PulseLine />
      <section
        id="platform"
        ref={ref}
        style={{
          background: "#0F1A14",
          padding: "96px 0 80px",
        }}
      >
        <div className="max-w-[1280px] mx-auto px-6 md:px-10">
          {/* Section header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.7 }}
            className="text-center"
            style={{ marginBottom: "64px" }}
          >
            <span
              style={{
                fontFamily: "var(--font-source), system-ui, sans-serif",
                fontSize: "0.7rem",
                fontWeight: 500,
                color: "#7A8F85",
                textTransform: "uppercase",
                letterSpacing: "0.1em",
                display: "block",
                marginBottom: "16px",
              }}
            >
              How Medly works
            </span>
            <h2
              style={{
                fontFamily: "var(--font-libre), Georgia, serif",
                fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)",
                lineHeight: 1.15,
                color: "#F0EDE5",
                letterSpacing: "-0.02em",
                maxWidth: "600px",
                margin: "0 auto",
              }}
            >
              Three steps to fewer no-shows and{" "}
              <em className="not-italic" style={{ color: "#4ECBA0" }}>
                better outcomes
              </em>
            </h2>
          </motion.div>

          {/* Steps */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "32px",
            }}
          >
            {steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                animate={
                  inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }
                }
                transition={{
                  duration: 0.6,
                  delay: 0.15 * i,
                  ease: [0.25, 0.1, 0.25, 1],
                }}
                className="grid md:grid-cols-2 gap-8 items-center"
                style={{
                  background: "#162420",
                  border: "1px solid rgba(78,203,160,0.08)",
                  borderRadius: "14px",
                  padding: "0",
                  overflow: "hidden",
                }}
              >
                {/* Copy side */}
                <div
                  style={{
                    padding: "32px 28px",
                    order: i % 2 === 1 ? 1 : 0,
                  }}
                >
                  <span
                    style={{
                      fontFamily:
                        "var(--font-jetbrains), monospace",
                      fontSize: "0.7rem",
                      fontWeight: 500,
                      color: "#4ECBA0",
                      display: "block",
                      marginBottom: "12px",
                    }}
                  >
                    Step {step.number}
                  </span>
                  <h3
                    style={{
                      fontFamily: "var(--font-libre), Georgia, serif",
                      fontSize: "1.5rem",
                      color: "#F0EDE5",
                      letterSpacing: "-0.02em",
                      marginBottom: "12px",
                    }}
                  >
                    {step.title}
                  </h3>
                  <p
                    style={{
                      fontFamily:
                        "var(--font-source), system-ui, sans-serif",
                      fontSize: "0.9375rem",
                      lineHeight: 1.65,
                      color: "#7A8F85",
                    }}
                  >
                    {step.description}
                  </p>
                </div>

                {/* Visual side */}
                <div
                  style={{
                    background: "rgba(15,26,20,0.5)",
                    borderLeft:
                      i % 2 === 0
                        ? "1px solid rgba(78,203,160,0.06)"
                        : "none",
                    borderRight:
                      i % 2 === 1
                        ? "1px solid rgba(78,203,160,0.06)"
                        : "none",
                    minHeight: "240px",
                    display: "flex",
                    alignItems: "center",
                    order: i % 2 === 1 ? 0 : 1,
                  }}
                >
                  {step.visual}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
