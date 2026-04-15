"use client";

import { motion, useInView, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";
import Image from "next/image";

function AnimatedNumber({ value, suffix = "" }: { value: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const motionVal = useMotionValue(0);
  const spring = useSpring(motionVal, { duration: 1600, bounce: 0 });
  const display = useTransform(spring, (v) => {
    const rounded = Math.round(v * 10) / 10;
    return Number.isInteger(rounded) ? rounded.toLocaleString() : rounded.toFixed(1);
  });

  useEffect(() => {
    if (inView) motionVal.set(value);
  }, [inView, value, motionVal]);

  return (
    <span ref={ref}>
      <motion.span>{display}</motion.span>
      {suffix}
    </span>
  );
}

const metrics = [
  { value: 14, suffix: " hrs", label: "saved per close cycle, on average" },
  { value: 99.1, suffix: "%", label: "recognition accuracy vs. manual processes" },
  { value: 3, suffix: "×", label: "faster audit readiness" },
];

const testimonials = [
  {
    quote:
      "We were spending 14 days each quarter just reconciling revenue. Strata got us to same-week closes within the first month. The board stopped asking 'are these numbers right?' — that alone was worth the cost.",
    name: "Sarah Okonkwo",
    title: "VP Finance",
    company: "Lume Analytics",
    tag: "$6.2M ARR",
    avatar: "https://i.pravatar.cc/80?img=47",
    highlight: "14 days → same-week",
  },
  {
    quote:
      "We have usage-based pricing, annual contracts, and monthly plans running simultaneously. Before Strata, our revenue schedule spreadsheet had 14 tabs and broke every time we did a contract modification. That's not a process — that's a liability.",
    name: "Marcus Delacroix",
    title: "CFO",
    company: "Vesper Technologies",
    tag: "$18M ARR",
    avatar: "https://i.pravatar.cc/80?img=57",
    highlight: "14 tabs → 1 source of truth",
  },
];

const moreVoices = [
  {
    text: "First board deck where I wasn't quietly terrified the ARR was wrong.",
    name: "Priya Nair",
    role: "CFO, Fieldwork",
    avatar: "https://i.pravatar.cc/40?img=33",
  },
  {
    text: "Our auditors commented on how clean the documentation was. Never happened before.",
    name: "Tom Ericson",
    role: "Controller, Beacon Software",
    avatar: "https://i.pravatar.cc/40?img=12",
  },
  {
    text: "Onboarding took 20 minutes. I expected a week of implementation pain.",
    name: "Aiko Tanaka",
    role: "Head of Finance, Echo Systems",
    avatar: "https://i.pravatar.cc/40?img=25",
  },
];

export default function Proof() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-8%" });

  return (
    <section ref={ref} className="py-[120px]" style={{ background: "#09101E" }}>
      <div className="max-w-layout mx-auto px-6 md:px-10">

        {/* Metrics */}
        <div
          className="grid grid-cols-3 mb-24"
          style={{
            borderTop: "1px solid rgba(255,255,255,0.07)",
            borderLeft: "1px solid rgba(255,255,255,0.07)",
          }}
        >
          {metrics.map((m, i) => (
            <motion.div
              key={m.label}
              initial={{ y: 8 }}
              animate={inView ? { y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="px-8 py-10"
              style={{
                borderRight: "1px solid rgba(255,255,255,0.07)",
                borderBottom: "1px solid rgba(255,255,255,0.07)",
              }}
            >
              <div
                className="font-display tabular-nums mb-2"
                style={{
                  fontSize: "clamp(2.25rem, 4vw, 3.5rem)",
                  color: "#B8935A",
                  lineHeight: 1,
                  letterSpacing: "-0.03em",
                }}
              >
                <AnimatedNumber value={m.value} suffix={m.suffix} />
              </div>
              <div className="font-body text-sm text-mist">{m.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Section label */}
        <motion.div
          initial={{ y: 16 }}
          animate={inView ? { y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex items-center gap-2 mb-12"
        >
          <span className="w-5 h-px" style={{ background: "#B8935A" }} />
          <span className="text-xs tracking-widest uppercase font-body" style={{ color: "#B8935A" }}>
            What our users say
          </span>
        </motion.div>

        {/* Main testimonials with photos */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ y: 28 }}
              animate={inView ? { y: 0 } : {}}
              transition={{ duration: 0.75, delay: 0.3 + i * 0.15, ease: [0.25, 0.1, 0.25, 1] }}
              className="flex flex-col"
              style={{
                background: "#0C1220",
                border: "1px solid rgba(255,255,255,0.08)",
                borderRadius: "12px",
                overflow: "hidden",
              }}
            >
              {/* Highlight banner */}
              <div
                className="px-6 py-3 flex items-center gap-2"
                style={{ background: "rgba(184,147,90,0.07)", borderBottom: "1px solid rgba(184,147,90,0.1)" }}
              >
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path d="M2 6l3 3 5-5" stroke="#B8935A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span className="text-[11px] font-mono" style={{ color: "#B8935A" }}>{t.highlight}</span>
              </div>

              {/* Body */}
              <div className="p-6 lg:p-8 flex flex-col flex-1">
                {/* Stars */}
                <div className="flex items-center gap-0.5 mb-5">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} width="14" height="14" viewBox="0 0 14 14" fill="#B8935A">
                      <path d="M7 1l1.5 4h4.2l-3.4 2.5 1.3 4L7 9l-3.6 2.5 1.3-4L1.3 5H5.5z" />
                    </svg>
                  ))}
                </div>

                <p
                  className="font-body text-cloud leading-relaxed flex-1 mb-6 text-balance"
                  style={{ fontSize: "0.9375rem" }}
                >
                  {t.quote}
                </p>

                {/* Author */}
                <div className="flex items-center justify-between pt-5" style={{ borderTop: "1px solid rgba(255,255,255,0.07)" }}>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full overflow-hidden relative flex-shrink-0" style={{ border: "2px solid rgba(184,147,90,0.2)" }}>
                      <Image src={t.avatar} alt={t.name} fill className="object-cover" unoptimized />
                    </div>
                    <div>
                      <p className="text-sm font-medium font-body text-cloud">{t.name}</p>
                      <p className="text-xs font-body text-mist mt-0.5">
                        {t.title}, {t.company}
                      </p>
                    </div>
                  </div>
                  <div
                    className="text-[11px] font-mono"
                    style={{
                      color: "#B8935A",
                      background: "rgba(184,147,90,0.1)",
                      padding: "4px 8px",
                      borderRadius: "3px",
                    }}
                  >
                    {t.tag}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Shorter voice snippets */}
        <div className="grid md:grid-cols-3 gap-4">
          {moreVoices.map((v, i) => (
            <motion.div
              key={v.name}
              initial={{ y: 20 }}
              animate={inView ? { y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.55 + i * 0.1, ease: [0.25, 0.1, 0.25, 1] }}
              className="p-5"
              style={{
                background: "#0C1220",
                border: "1px solid rgba(255,255,255,0.07)",
                borderRadius: "10px",
              }}
            >
              {/* Mini stars */}
              <div className="flex items-center gap-0.5 mb-3">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} width="10" height="10" viewBox="0 0 14 14" fill="rgba(184,147,90,0.7)">
                    <path d="M7 1l1.5 4h4.2l-3.4 2.5 1.3 4L7 9l-3.6 2.5 1.3-4L1.3 5H5.5z" />
                  </svg>
                ))}
              </div>
              <p className="font-body text-[13px] text-cloud leading-relaxed mb-4">
                &ldquo;{v.text}&rdquo;
              </p>
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-full overflow-hidden relative flex-shrink-0">
                  <Image src={v.avatar} alt={v.name} fill className="object-cover" unoptimized />
                </div>
                <div>
                  <p className="text-[11px] font-medium text-cloud font-body">{v.name}</p>
                  <p className="text-[10px] text-mist font-body">{v.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
