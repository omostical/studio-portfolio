"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.15 } },
};

const line = {
  hidden: { opacity: 0, y: 22 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: [0.25, 0.1, 0.25, 1] },
  },
};

const fade = {
  hidden: { opacity: 0, y: 14 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] },
  },
};

/* ── Mini Scheduling UI inside circular frame ── */
const appointments = [
  { time: "9:00", patient: "Maria G.", type: "Follow-up", status: "confirmed" },
  { time: "9:30", patient: "James T.", type: "Annual Physical", status: "confirmed" },
  { time: "10:15", patient: "Sarah K.", type: "Lab Review", status: "pending" },
  { time: "11:00", patient: "David R.", type: "Consultation", status: "confirmed" },
];

function ScheduleUI() {
  return (
    <div
      style={{
        background: "#FFFFFF",
        borderRadius: "20px",
        padding: "20px",
        boxShadow: "0 4px 32px rgba(45,52,54,0.06)",
        width: "100%",
        maxWidth: "300px",
      }}
    >
      <div
        className="flex items-center justify-between"
        style={{ marginBottom: "14px" }}
      >
        <div>
          <p
            style={{
              fontFamily: "var(--font-source), system-ui, sans-serif",
              fontSize: "0.65rem",
              fontWeight: 500,
              color: "#7F8C8D",
              textTransform: "uppercase",
              letterSpacing: "0.08em",
              marginBottom: "2px",
            }}
          >
            Today&apos;s Schedule
          </p>
          <p
            style={{
              fontFamily: "var(--font-source), system-ui, sans-serif",
              fontSize: "0.85rem",
              fontWeight: 600,
              color: "#2D3436",
            }}
          >
            Tuesday, Mar 18
          </p>
        </div>
        <div
          style={{
            background: "#EFF8F4",
            borderRadius: "100px",
            padding: "4px 10px",
          }}
        >
          <span
            style={{
              fontFamily: "var(--font-jetbrains), monospace",
              fontSize: "0.62rem",
              color: "#3D9B7F",
              fontWeight: 500,
            }}
          >
            12 / 14 filled
          </span>
        </div>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
        {appointments.map((apt, i) => (
          <div
            key={i}
            className="flex items-center justify-between"
            style={{
              background:
                apt.status === "confirmed" ? "#EFF8F4" : "#FAFAF5",
              borderRadius: "12px",
              padding: "8px 10px",
            }}
          >
            <div className="flex items-center gap-2.5">
              <span
                style={{
                  fontFamily: "var(--font-jetbrains), monospace",
                  fontSize: "0.62rem",
                  color: "#7F8C8D",
                  width: "36px",
                  flexShrink: 0,
                }}
              >
                {apt.time}
              </span>
              <div>
                <p
                  style={{
                    fontFamily: "var(--font-source), system-ui, sans-serif",
                    fontSize: "0.72rem",
                    fontWeight: 500,
                    color: "#2D3436",
                    lineHeight: 1.3,
                  }}
                >
                  {apt.patient}
                </p>
                <p
                  style={{
                    fontFamily: "var(--font-source), system-ui, sans-serif",
                    fontSize: "0.6rem",
                    color: "#7F8C8D",
                    lineHeight: 1.3,
                  }}
                >
                  {apt.type}
                </p>
              </div>
            </div>
            <span
              style={{
                fontFamily: "var(--font-source), system-ui, sans-serif",
                fontSize: "0.58rem",
                fontWeight: 500,
                color:
                  apt.status === "confirmed" ? "#3D9B7F" : "#E8A87C",
                background:
                  apt.status === "confirmed"
                    ? "rgba(61,155,127,0.1)"
                    : "rgba(232,168,124,0.12)",
                borderRadius: "100px",
                padding: "2px 8px",
              }}
            >
              {apt.status === "confirmed" ? "Confirmed" : "Pending"}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ background: "#FAFAF5", paddingTop: "72px" }}
    >
      {/* Large organic blob background shape */}
      <div
        className="absolute pointer-events-none"
        style={{
          top: "-15%",
          right: "-10%",
          width: "900px",
          height: "900px",
          borderRadius: "50%",
          background:
            "radial-gradient(ellipse at center, rgba(239,248,244,0.8) 0%, transparent 70%)",
        }}
      />
      <div
        className="absolute pointer-events-none"
        style={{
          bottom: "5%",
          left: "-15%",
          width: "600px",
          height: "600px",
          borderRadius: "50%",
          background:
            "radial-gradient(ellipse at center, rgba(255,245,238,0.6) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-[1280px] mx-auto px-6 md:px-10 w-full grid lg:grid-cols-[1fr_1fr] gap-16 lg:gap-12 items-center py-24 lg:py-0">
        {/* Left: Copy */}
        <motion.div
          variants={stagger}
          initial="hidden"
          animate="show"
          style={{ maxWidth: "560px" }}
        >
          <motion.div
            variants={fade}
            className="flex items-center gap-2.5"
            style={{ marginBottom: "2.5rem" }}
          >
            <span
              className="inline-flex"
              style={{
                width: "7px",
                height: "7px",
                borderRadius: "50%",
                background: "#3D9B7F",
              }}
            />
            <span
              style={{
                fontFamily: "var(--font-source), system-ui, sans-serif",
                fontSize: "0.75rem",
                fontWeight: 500,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                color: "#7F8C8D",
              }}
            >
              Patient engagement platform
            </span>
          </motion.div>

          <motion.h1
            variants={stagger}
            style={{
              fontFamily: "var(--font-libre), Georgia, serif",
              color: "#2D3436",
              fontSize: "clamp(2.5rem, 5vw, 4.25rem)",
              lineHeight: 1.1,
              letterSpacing: "-0.025em",
              marginBottom: "1.75rem",
            }}
          >
            <motion.span className="block" variants={line}>
              Your patients want
            </motion.span>
            <motion.span className="block" variants={line}>
              to show up.{" "}
              <em className="not-italic" style={{ color: "#3D9B7F" }}>
                Make it easy.
              </em>
            </motion.span>
          </motion.h1>

          <motion.p
            variants={fade}
            style={{
              fontFamily: "var(--font-source), system-ui, sans-serif",
              fontSize: "1.125rem",
              lineHeight: 1.7,
              color: "#7F8C8D",
              marginBottom: "2.5rem",
              maxWidth: "480px",
            }}
          >
            Medly helps healthcare providers reduce no-shows by 40% through
            smart scheduling, automated reminders, and real-time communication
            that patients actually respond to.
          </motion.p>

          <motion.div
            variants={fade}
            className="flex items-center gap-4 flex-wrap"
            style={{ marginBottom: "3rem" }}
          >
            <a
              href="#cta"
              className="inline-flex items-center gap-2"
              style={{
                fontFamily: "var(--font-source), system-ui, sans-serif",
                fontSize: "0.9375rem",
                fontWeight: 500,
                color: "#FFFFFF",
                background: "#E8A87C",
                borderRadius: "100px",
                padding: "14px 32px",
                textDecoration: "none",
                transition:
                  "background 0.3s ease, transform 0.3s ease, box-shadow 0.3s ease",
                boxShadow: "0 4px 20px rgba(232,168,124,0.25)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "#E09A6A";
                e.currentTarget.style.transform = "translateY(-2px)";
                e.currentTarget.style.boxShadow =
                  "0 8px 32px rgba(232,168,124,0.3)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "#E8A87C";
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow =
                  "0 4px 20px rgba(232,168,124,0.25)";
              }}
            >
              See it in action
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path
                  d="M3 7h8M8 4l3 3-3 3"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
            <a
              href="#cta"
              className="inline-flex items-center gap-2"
              style={{
                fontFamily: "var(--font-source), system-ui, sans-serif",
                fontSize: "0.9375rem",
                fontWeight: 500,
                color: "#2D3436",
                border: "1px solid rgba(45,52,54,0.15)",
                borderRadius: "100px",
                padding: "13px 28px",
                textDecoration: "none",
                transition:
                  "border-color 0.3s ease, background 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "rgba(45,52,54,0.3)";
                e.currentTarget.style.background = "rgba(45,52,54,0.03)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "rgba(45,52,54,0.15)";
                e.currentTarget.style.background = "transparent";
              }}
            >
              Talk to our team
            </a>
          </motion.div>

          {/* Trust signal */}
          <motion.div
            variants={fade}
            className="flex items-center gap-3"
          >
            <div className="flex items-center">
              {[
                "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=80&h=80&fit=crop&crop=face",
                "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=80&h=80&fit=crop&crop=face",
                "https://images.unsplash.com/photo-1594824476967-48c8b964ac31?w=80&h=80&fit=crop&crop=face",
                "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=80&h=80&fit=crop&crop=face",
              ].map((src, i) => (
                <div
                  key={i}
                  style={{
                    width: "36px",
                    height: "36px",
                    borderRadius: "50%",
                    border: "2.5px solid #FAFAF5",
                    marginLeft: i === 0 ? 0 : "-10px",
                    zIndex: 4 - i,
                    position: "relative",
                    overflow: "hidden",
                    flexShrink: 0,
                  }}
                >
                  <Image src={src} alt="Healthcare professional" fill className="object-cover" unoptimized />
                </div>
              ))}
            </div>
            <div>
              <p
                style={{
                  fontFamily: "var(--font-source), system-ui, sans-serif",
                  fontSize: "0.85rem",
                  fontWeight: 500,
                  color: "#2D3436",
                }}
              >
                200+ clinics, 2.3M patients engaged
              </p>
              <p
                style={{
                  fontFamily: "var(--font-source), system-ui, sans-serif",
                  fontSize: "0.7rem",
                  color: "#7F8C8D",
                }}
              >
                across primary care, urgent care &amp; specialty
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* Right: Circular frame with schedule UI */}
        <motion.div
          initial={{ opacity: 0, x: 30, scale: 0.97 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{
            duration: 1,
            delay: 0.5,
            ease: [0.25, 0.1, 0.25, 1],
          }}
          className="relative hidden lg:flex justify-center items-center"
        >
          {/* Large organic blob shape behind */}
          <div
            className="absolute"
            style={{
              width: "420px",
              height: "420px",
              borderRadius: "50%",
              background: "#EFF8F4",
              filter: "blur(2px)",
              zIndex: 0,
            }}
          />

          {/* Circular frame with human photo */}
          <div
            className="relative z-10"
            style={{
              width: "380px",
              height: "380px",
              borderRadius: "50%",
              border: "2px solid rgba(61,155,127,0.15)",
              overflow: "hidden",
            }}
          >
            <Image
              src="https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=800&h=800&fit=crop&crop=face"
              alt="Doctor smiling at patient during consultation"
              fill
              className="object-cover"
              unoptimized
            />
            <div
              className="absolute inset-0"
              style={{
                background: "linear-gradient(to bottom, transparent 30%, rgba(250,250,245,0.4))",
              }}
            />
          </div>

          {/* Schedule UI floating over the photo */}
          <motion.div
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute z-20"
            style={{ bottom: "20px", right: "-20px" }}
          >
            <ScheduleUI />
          </motion.div>

          {/* Floating notification card */}
          <motion.div
            initial={{ opacity: 0, y: 12, x: -12 }}
            animate={{ opacity: 1, y: 0, x: 0 }}
            transition={{
              duration: 0.9,
              delay: 1.2,
              ease: [0.25, 0.1, 0.25, 1],
            }}
            className="absolute -top-2 -left-2 z-20"
            style={{
              background: "#FFFFFF",
              borderRadius: "16px",
              padding: "12px 16px",
              boxShadow: "0 4px 32px rgba(45,52,54,0.08)",
              maxWidth: "200px",
            }}
          >
            <div className="flex items-center gap-2.5">
              <div
                style={{
                  width: "30px",
                  height: "30px",
                  borderRadius: "50%",
                  background: "#EFF8F4",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path
                    d="M3.5 7l2.5 2.5L10.5 5"
                    stroke="#3D9B7F"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div>
                <p
                  style={{
                    fontFamily: "var(--font-source), system-ui, sans-serif",
                    fontSize: "0.75rem",
                    fontWeight: 500,
                    color: "#2D3436",
                  }}
                >
                  Maria confirmed
                </p>
                <p
                  style={{
                    fontFamily: "var(--font-source), system-ui, sans-serif",
                    fontSize: "0.62rem",
                    color: "#7F8C8D",
                  }}
                >
                  via SMS &middot; 2 min ago
                </p>
              </div>
            </div>
          </motion.div>

          {/* Floating metric */}
          <motion.div
            initial={{ opacity: 0, y: 12, x: 12 }}
            animate={{ opacity: 1, y: 0, x: 0 }}
            transition={{
              duration: 0.9,
              delay: 1.4,
              ease: [0.25, 0.1, 0.25, 1],
            }}
            className="absolute -bottom-2 -right-2 z-20"
            style={{
              background: "#FFFFFF",
              borderRadius: "16px",
              padding: "12px 16px",
              boxShadow: "0 4px 32px rgba(45,52,54,0.08)",
            }}
          >
            <div className="flex items-center gap-2.5">
              <div
                style={{
                  width: "30px",
                  height: "30px",
                  borderRadius: "50%",
                  background: "#EFF8F4",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path
                    d="M2 10l3.5-3.5L8 9l4-5"
                    stroke="#3D9B7F"
                    strokeWidth="1.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div>
                <p
                  style={{
                    fontFamily: "var(--font-jetbrains), monospace",
                    fontSize: "0.75rem",
                    fontWeight: 500,
                    color: "#3D9B7F",
                  }}
                >
                  No-shows &darr; 41%
                </p>
                <p
                  style={{
                    fontFamily: "var(--font-source), system-ui, sans-serif",
                    fontSize: "0.62rem",
                    color: "#7F8C8D",
                  }}
                >
                  this month vs. last
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 0.8 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span
          style={{
            fontFamily: "var(--font-source), system-ui, sans-serif",
            fontSize: "0.625rem",
            textTransform: "uppercase",
            letterSpacing: "0.15em",
            color: "#7F8C8D",
          }}
        >
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path
              d="M8 3v10M4 9l4 4 4-4"
              stroke="#7F8C8D"
              strokeWidth="1.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  );
}
