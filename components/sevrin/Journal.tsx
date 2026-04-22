"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const articles = [
  {
    n: "01",
    title: "On cutting the collar",
    kicker: "Field note",
    date: "October 2026",
    excerpt: "Why we spend two hours on the roll of a lapel that nobody will see from more than a metre away.",
    tone: "linear-gradient(165deg, #5A4028 0%, #3D352D 60%, #2A1F16 100%)",
  },
  {
    n: "02",
    title: "A conversation with Agnese",
    kicker: "Portrait",
    date: "September 2026",
    excerpt: "Forty-two years at the finishing bench. Two pairs of scissors, one of them from her mother.",
    tone: "linear-gradient(165deg, #D4C7B0 0%, #A89C82 60%, #7C715E 100%)",
  },
  {
    n: "03",
    title: "Why we moved slow",
    kicker: "Dispatch",
    date: "August 2026",
    excerpt: "A note on scale, restraint, and the decision not to open a second atelier this year.",
    tone: "linear-gradient(165deg, #7A3B28 0%, #4A2518 60%, #2A110A 100%)",
  },
];

export default function Journal() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10%" });

  return (
    <section
      id="journal"
      ref={ref}
      style={{ padding: "160px 32px", background: "#EFE6D3" }}
    >
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9 }}
          className="flex flex-col md:flex-row md:items-end md:justify-between"
          style={{ gap: 24, marginBottom: 80 }}
        >
          <div>
            <div
              className="font-body"
              style={{
                fontSize: 11,
                letterSpacing: "0.3em",
                textTransform: "uppercase",
                color: "#8A7F6F",
                marginBottom: 20,
              }}
            >
              Dispatches
            </div>
            <h2
              style={{
                fontFamily: "var(--font-cormorant), serif",
                fontSize: "clamp(2.25rem, 4.5vw, 3.75rem)",
                lineHeight: 1,
                fontWeight: 400,
                letterSpacing: "-0.02em",
              }}
            >
              The Journal
            </h2>
          </div>
          <a
            href="#"
            className="font-body"
            style={{
              fontSize: 11,
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              color: "#1A1612",
              borderBottom: "1px solid #1A1612",
              paddingBottom: 4,
              textDecoration: "none",
            }}
          >
            All dispatches →
          </a>
        </motion.div>

        <div
          className="grid grid-cols-1 md:grid-cols-3"
          style={{ gap: 32 }}
        >
          {articles.map((a, i) => (
            <motion.a
              key={a.n}
              href="#"
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.9,
                delay: 0.1 * i,
                ease: [0.22, 1, 0.36, 1],
              }}
              style={{ textDecoration: "none" }}
            >
              <div
                style={{
                  aspectRatio: "4/5",
                  background: a.tone,
                  position: "relative",
                  overflow: "hidden",
                  marginBottom: 24,
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    backgroundImage:
                      "radial-gradient(circle at 30% 25%, rgba(255,240,215,0.1), transparent 55%), radial-gradient(circle at 70% 75%, rgba(0,0,0,0.3), transparent 50%)",
                    mixBlendMode: "overlay",
                  }}
                />
                <div
                  className="font-body"
                  style={{
                    position: "absolute",
                    top: 16,
                    left: 16,
                    fontSize: 10,
                    letterSpacing: "0.3em",
                    textTransform: "uppercase",
                    color: "rgba(245,241,232,0.6)",
                  }}
                >
                  № {a.n}
                </div>
              </div>
              <div
                className="font-body"
                style={{
                  fontSize: 11,
                  letterSpacing: "0.22em",
                  textTransform: "uppercase",
                  color: "#8A7F6F",
                  marginBottom: 14,
                }}
              >
                {a.kicker} · {a.date}
              </div>
              <div
                style={{
                  fontFamily: "var(--font-cormorant), serif",
                  fontSize: 28,
                  letterSpacing: "-0.01em",
                  lineHeight: 1.12,
                  color: "#1A1612",
                  marginBottom: 12,
                }}
              >
                {a.title}
              </div>
              <p
                className="font-body"
                style={{
                  fontSize: 14,
                  lineHeight: 1.65,
                  color: "#3D352D",
                }}
              >
                {a.excerpt}
              </p>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
