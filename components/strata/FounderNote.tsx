"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

const team = [
  {
    name: "Amara Chen",
    role: "Co-founder & CEO",
    background: "ex-Stripe Finance Ops, 6 years",
    avatar: "https://i.pravatar.cc/80?img=47",
  },
  {
    name: "Daniel Ruiz",
    role: "Co-founder & CTO",
    background: "ex-Rippling Engineering",
    avatar: "https://i.pravatar.cc/80?img=12",
  },
];

export default function FounderNote() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-8%" });

  return (
    <section ref={ref} className="py-[120px]" style={{ background: "#070C18" }}>
      <div className="max-w-layout mx-auto px-6 md:px-10">
        <div className="grid lg:grid-cols-[1fr_420px] gap-16 lg:gap-24 items-center">
          {/* Left: Note */}
          <motion.div
            initial={{ y: 24 }}
            animate={inView ? { y: 0 } : {}}
            transition={{ duration: 0.75, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <div className="flex items-center gap-2 mb-7">
              <span className="w-5 h-px" style={{ background: "#B8935A" }} />
              <span className="text-xs tracking-widest uppercase font-body" style={{ color: "#B8935A" }}>
                Why we built this
              </span>
            </div>

            <h2
              className="font-display text-cloud mb-7 text-balance"
              style={{ fontSize: "clamp(1.8rem, 3vw, 2.75rem)", lineHeight: 1.15, letterSpacing: "-0.025em" }}
            >
              We&rsquo;ve been the person running that spreadsheet at 11pm.
            </h2>

            <div className="space-y-4 font-body text-mist leading-relaxed" style={{ fontSize: "1rem" }}>
              <p>
                Before starting Strata, our team spent years inside finance operations at
                high-growth SaaS companies. We&rsquo;ve been the person Slacking
                &ldquo;almost done&rdquo; at midnight before a board meeting. We&rsquo;ve
                argued with auditors over revenue schedules that were technically correct
                but practically impossible to maintain.
              </p>
              <p>
                We built Strata because the problem isn&rsquo;t laziness or lack of skill —
                it&rsquo;s that the tools were designed for a different era of selling.
                When your pricing model is more complex than &ldquo;charge per seat,&rdquo;
                the entire accounting stack starts to crack.
              </p>
              <p className="text-cloud">
                We wanted software that understood modern SaaS contracts the way we do,
                so the people running finance could finally go home on time.
              </p>
            </div>
          </motion.div>

          {/* Right: Team cards */}
          <motion.div
            initial={{ x: 20 }}
            animate={inView ? { x: 0 } : {}}
            transition={{ duration: 0.75, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
            className="space-y-4"
          >
            {team.map((person, i) => (
              <motion.div
                key={person.name}
                initial={{ y: 16 }}
                animate={inView ? { y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.35 + i * 0.12 }}
                className="flex items-center gap-4 p-5"
                style={{
                  background: "#0C1220",
                  border: "1px solid rgba(255,255,255,0.08)",
                  borderRadius: "12px",
                }}
              >
                <div
                  className="w-14 h-14 rounded-xl overflow-hidden relative flex-shrink-0"
                  style={{ border: "2px solid rgba(184,147,90,0.2)" }}
                >
                  <Image src={person.avatar} alt={person.name} fill className="object-cover" unoptimized />
                </div>
                <div>
                  <p className="text-sm font-semibold text-cloud font-body">{person.name}</p>
                  <p className="text-xs text-mist font-body mt-0.5">{person.role}</p>
                  <div
                    className="inline-flex items-center gap-1 text-[10px] font-body mt-2 px-2 py-0.5"
                    style={{
                      background: "rgba(184,147,90,0.1)",
                      color: "#B8935A",
                      borderRadius: "20px",
                    }}
                  >
                    <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
                      <circle cx="4" cy="4" r="3" stroke="#B8935A" strokeWidth="1.2" />
                    </svg>
                    {person.background}
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Warm footer note */}
            <div
              className="p-5 text-center"
              style={{
                background: "rgba(184,147,90,0.05)",
                border: "1px solid rgba(184,147,90,0.12)",
                borderRadius: "12px",
              }}
            >
              <p className="font-body text-xs text-mist leading-relaxed">
                We personally onboard every new customer.<br />
                <span className="text-cloud">You&rsquo;ll talk to us, not a sales team.</span>
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
