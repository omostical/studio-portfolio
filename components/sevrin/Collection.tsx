"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

const looks = [
  {
    n: "01",
    name: "The Cambrai Overcoat",
    material: "Camel wool, silk-lined",
    price: "£1,840",
    tone: "linear-gradient(165deg, #8A6848 0%, #5A4028 55%, #3D2A1C 100%)",
  },
  {
    n: "02",
    name: "The Orsa Roll-neck",
    material: "Undyed cashmere",
    price: "£820",
    tone: "linear-gradient(165deg, #D4C7B0 0%, #A89C82 60%, #7C715E 100%)",
  },
  {
    n: "03",
    name: "The Marais Trouser",
    material: "Wool flannel",
    price: "£540",
    tone: "linear-gradient(165deg, #2E2A26 0%, #3D352D 55%, #1A1612 100%)",
  },
  {
    n: "04",
    name: "The Voile Card Holder",
    material: "Vegetable-tanned leather",
    price: "£280",
    tone: "linear-gradient(165deg, #6B3A28 0%, #4A2518 55%, #2A110A 100%)",
  },
  {
    n: "05",
    name: "The Arden Shirt",
    material: "Irish linen, mother-of-pearl",
    price: "£340",
    tone: "linear-gradient(165deg, #EFE6D3 0%, #D4C7B0 60%, #B8AB93 100%)",
  },
  {
    n: "06",
    name: "The Tanneguy Boot",
    material: "Crust calfskin, bench-lasted",
    price: "£960",
    tone: "linear-gradient(165deg, #3D2218 0%, #2A1410 60%, #140806 100%)",
  },
];

function LookCard({ look, i, inView }: { look: typeof looks[0]; i: number; inView: boolean }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.a
      href="#"
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.9, delay: 0.08 * i, ease: [0.22, 1, 0.36, 1] }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{ display: "block", textDecoration: "none", cursor: "pointer" }}
    >
      <div
        style={{
          aspectRatio: "3/4",
          background: look.tone,
          position: "relative",
          overflow: "hidden",
          marginBottom: 20,
        }}
      >
        {/* Texture */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "radial-gradient(circle at 30% 20%, rgba(255,240,215,0.12), transparent 50%), radial-gradient(circle at 75% 80%, rgba(0,0,0,0.28), transparent 55%)",
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
            color: "rgba(245,241,232,0.65)",
          }}
        >
          Look {look.n}
        </div>

        {/* Hover veil */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "rgba(26,22,18,0.35)",
            opacity: hovered ? 1 : 0,
            transition: "opacity 0.45s ease",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <span
            className="font-body"
            style={{
              fontSize: 11,
              letterSpacing: "0.24em",
              textTransform: "uppercase",
              color: "#F5F1E8",
              borderBottom: "1px solid #F5F1E8",
              paddingBottom: 6,
            }}
          >
            View piece →
          </span>
        </div>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "baseline",
          gap: 16,
        }}
      >
        <div>
          <div
            style={{
              fontFamily: "var(--font-cormorant), serif",
              fontSize: 22,
              letterSpacing: "-0.01em",
              color: "#1A1612",
              lineHeight: 1.1,
            }}
          >
            {look.name}
          </div>
          <div
            className="font-body"
            style={{ marginTop: 6, fontSize: 12, color: "#8A7F6F" }}
          >
            {look.material}
          </div>
        </div>
        <div
          className="font-body"
          style={{ fontSize: 13, color: "#1A1612", whiteSpace: "nowrap" }}
        >
          {look.price}
        </div>
      </div>
    </motion.a>
  );
}

export default function Collection() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10%" });

  return (
    <section
      ref={ref}
      id="collection"
      style={{ padding: "160px 32px", background: "#EFE6D3" }}
    >
      <div style={{ maxWidth: 1440, margin: "0 auto" }}>
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9 }}
          className="grid grid-cols-1 md:grid-cols-2"
          style={{ gap: 48, alignItems: "end", marginBottom: 80 }}
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
              The Winter Edit — Fifty-four pieces
            </div>
            <h2
              style={{
                fontFamily: "var(--font-cormorant), serif",
                fontSize: "clamp(2.4rem, 5vw, 4.25rem)",
                lineHeight: 1,
                fontWeight: 400,
                color: "#1A1612",
                letterSpacing: "-0.02em",
              }}
            >
              Garments{" "}
              <em style={{ color: "#7A3B28", fontStyle: "italic" }}>
                for staying.
              </em>
            </h2>
          </div>
          <p
            className="font-body"
            style={{
              fontSize: 14,
              lineHeight: 1.75,
              color: "#3D352D",
              maxWidth: 380,
              justifySelf: "end",
            }}
          >
            Each piece is cut in a run no larger than one hundred and eighty. Restocks are rare; revivals are rarer. If a piece finds you, keep it.
          </p>
        </motion.div>

        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
          style={{ gap: 32, rowGap: 72 }}
        >
          {looks.map((look, i) => (
            <LookCard key={look.n} look={look} i={i} inView={inView} />
          ))}
        </div>
      </div>
    </section>
  );
}
