"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const materials = [
  {
    name: "Biellese wool",
    from: "Vitale Barberis Canonico — Biella, Piedmont",
    note: "A 14-micron melton, milled in Piedmont and rested, folded, for forty days before it is cut.",
    tone: "linear-gradient(160deg, #8A6848 0%, #5A4028 60%, #3D2A1C 100%)",
  },
  {
    name: "Vegetable-tanned calf",
    from: "Conceria Walpier — Ponte a Egola, Tuscany",
    note: "Tanned in slow pits with chestnut bark. It will patina for a lifetime; we prefer it that way.",
    tone: "linear-gradient(160deg, #6B3A28 0%, #4A2518 60%, #2A110A 100%)",
  },
  {
    name: "Undyed cashmere",
    from: "Cariaggi — Cagli, Le Marche",
    note: "Combed from a single herd. The colour is what the animal arrives with — grey, oat, or the rarer bruno.",
    tone: "linear-gradient(160deg, #D4C7B0 0%, #A89C82 60%, #7C715E 100%)",
  },
  {
    name: "Irish linen",
    from: "Emblem Weavers — Enniscorthy, Wexford",
    note: "Slubbed, washed twice, finished with mother-of-pearl buttons cut from the Mississippi freshwater.",
    tone: "linear-gradient(160deg, #EFE6D3 0%, #C7BDA6 60%, #9E967F 100%)",
  },
];

export default function Materials() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10%" });

  return (
    <section ref={ref} style={{ padding: "160px 32px", background: "#F5F1E8" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9 }}
          style={{ marginBottom: 96, maxWidth: 720 }}
        >
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
            Materials, sourced slowly
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
            Four mills.{" "}
            <em style={{ color: "#7A3B28", fontStyle: "italic" }}>
              Same four,
            </em>{" "}
            every season.
          </h2>
        </motion.div>

        <div
          className="grid grid-cols-1 md:grid-cols-2"
          style={{ gap: 56, rowGap: 72 }}
        >
          {materials.map((m, i) => (
            <motion.div
              key={m.name}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.9,
                delay: 0.1 * i,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <div
                style={{
                  aspectRatio: "16/10",
                  background: m.tone,
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
                      "radial-gradient(circle at 30% 25%, rgba(255,240,215,0.12), transparent 55%), radial-gradient(circle at 75% 78%, rgba(0,0,0,0.22), transparent 50%)",
                    mixBlendMode: "overlay",
                  }}
                />
                <div
                  className="font-body"
                  style={{
                    position: "absolute",
                    bottom: 16,
                    right: 16,
                    fontSize: 10,
                    letterSpacing: "0.3em",
                    textTransform: "uppercase",
                    color: "rgba(245,241,232,0.55)",
                  }}
                >
                  № 0{i + 1}
                </div>
              </div>
              <div
                className="grid grid-cols-1 md:grid-cols-[1fr_2fr]"
                style={{ gap: 24, alignItems: "start" }}
              >
                <div
                  style={{
                    fontFamily: "var(--font-cormorant), serif",
                    fontSize: 26,
                    letterSpacing: "-0.01em",
                    color: "#1A1612",
                    lineHeight: 1.1,
                  }}
                >
                  {m.name}
                </div>
                <div>
                  <div
                    className="font-body"
                    style={{
                      fontSize: 11,
                      letterSpacing: "0.18em",
                      textTransform: "uppercase",
                      color: "#8A7F6F",
                      marginBottom: 10,
                    }}
                  >
                    {m.from}
                  </div>
                  <p
                    className="font-body"
                    style={{
                      fontSize: 14,
                      lineHeight: 1.7,
                      color: "#3D352D",
                    }}
                  >
                    {m.note}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
