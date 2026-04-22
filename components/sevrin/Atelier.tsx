"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const stats = [
  { n: "40", label: "Hours per overcoat" },
  { n: "3", label: "Hands per garment" },
  { n: "12", label: "Weeks, cut to finish" },
];

export default function Atelier() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10%" });

  return (
    <section
      id="atelier"
      ref={ref}
      style={{
        padding: "180px 32px",
        background: "#1A1612",
        color: "#F5F1E8",
      }}
    >
      <div
        className="grid grid-cols-1 md:grid-cols-2"
        style={{
          gap: 80,
          maxWidth: 1280,
          margin: "0 auto",
          alignItems: "center",
        }}
      >
        <motion.div
          initial={{ opacity: 0, scale: 1.04 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
          style={{
            aspectRatio: "4/5",
            position: "relative",
            overflow: "hidden",
            background:
              "linear-gradient(180deg, #2A1F16 0%, #4A3628 45%, #2E2118 100%)",
          }}
        >
          <div
            style={{
              position: "absolute",
              inset: 0,
              backgroundImage:
                "radial-gradient(circle at 40% 30%, rgba(255,220,170,0.14), transparent 55%), radial-gradient(circle at 70% 75%, rgba(0,0,0,0.4), transparent 50%)",
              mixBlendMode: "overlay",
            }}
          />
          <div
            className="font-body"
            style={{
              position: "absolute",
              top: 24,
              left: 24,
              fontSize: 10,
              letterSpacing: "0.3em",
              textTransform: "uppercase",
              color: "rgba(245,241,232,0.55)",
            }}
          >
            Atelier SEVRIN
          </div>
          <div
            className="font-body"
            style={{
              position: "absolute",
              bottom: 24,
              left: 24,
              fontSize: 10,
              letterSpacing: "0.3em",
              textTransform: "uppercase",
              color: "rgba(245,241,232,0.55)",
            }}
          >
            Via de&apos; Serragli, Oltrarno — est. 1987
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <div
            className="font-body"
            style={{
              fontSize: 11,
              letterSpacing: "0.3em",
              textTransform: "uppercase",
              color: "#8A7F6F",
              marginBottom: 28,
            }}
          >
            The Atelier
          </div>
          <h2
            style={{
              fontFamily: "var(--font-cormorant), serif",
              fontSize: "clamp(2.25rem, 4.5vw, 4rem)",
              lineHeight: 1,
              fontWeight: 400,
              letterSpacing: "-0.02em",
              marginBottom: 40,
            }}
          >
            <em style={{ color: "#B8935A", fontStyle: "italic" }}>
              Forty hours
            </em>
            <br />
            in an overcoat.
          </h2>

          <p
            className="font-body"
            style={{
              fontSize: 15,
              lineHeight: 1.8,
              color: "rgba(245,241,232,0.78)",
              marginBottom: 20,
              maxWidth: 460,
            }}
          >
            We work out of a workshop in the Oltrarno, a block off the river. Three benches. A cutter, a tailor, a finisher — the latter, Agnese, has been at her bench since 1984.
          </p>
          <p
            className="font-body"
            style={{
              fontSize: 15,
              lineHeight: 1.8,
              color: "rgba(245,241,232,0.78)",
              maxWidth: 460,
            }}
          >
            We do not scale with the season. Each overcoat passes through the same three pairs of hands, in roughly that order, over roughly twelve weeks. The cloth is milled in Biella and rests, folded, for forty days before it is cut.
          </p>

          <div
            style={{
              marginTop: 64,
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: 32,
              paddingTop: 44,
              borderTop: "1px solid rgba(245,241,232,0.14)",
            }}
          >
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 12 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.5 + 0.1 * i }}
              >
                <div
                  style={{
                    fontFamily: "var(--font-cormorant), serif",
                    fontSize: 48,
                    letterSpacing: "-0.02em",
                    color: "#B8935A",
                    fontStyle: "italic",
                    fontWeight: 400,
                    lineHeight: 1,
                  }}
                >
                  {s.n}
                </div>
                <div
                  className="font-body"
                  style={{
                    fontSize: 11,
                    letterSpacing: "0.2em",
                    textTransform: "uppercase",
                    color: "#8A7F6F",
                    marginTop: 10,
                  }}
                >
                  {s.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
