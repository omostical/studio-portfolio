"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

// ─── Project data ────────────────────────────────────────────────────────────

const projects = [
  {
    slug: "strata",
    name: "Strata",
    industry: "Fintech SaaS",
    tagline: "Revenue recognition automation",
    description:
      "ASC 606-compliant revenue schedules for SaaS companies with usage-based, tiered, and multi-year contracts. Real-time ARR, automated journal entries, and audit trails that make month-end close a morning, not a marathon.",
    image: "/showcase/strata-hero.png",
    accent: "#B8935A",
    tags: ["Product design", "Dashboard", "B2B SaaS"],
    featured: true,
  },
  {
    slug: "medly",
    name: "Medly",
    industry: "Healthtech",
    tagline: "Patient engagement platform",
    description:
      "Smart scheduling, automated reminders, and real-time patient communication for healthcare providers. 40% fewer no-shows. 200+ clinics trust it.",
    image: "/showcase/medly-hero.png",
    accent: "#4ECBA0",
    tags: ["Product design", "Healthcare", "SaaS"],
  },
  {
    slug: "haven",
    name: "Haven",
    industry: "Proptech",
    tagline: "Property intelligence platform",
    description:
      "Real-time visibility into occupancy, maintenance, and NOI across entire property portfolios. Built for managers who need more than spreadsheets.",
    image: "/showcase/haven-hero.png",
    accent: "#C9855E",
    tags: ["Product design", "Real estate", "Analytics"],
  },
  {
    slug: "canopy",
    name: "Canopy",
    industry: "Insurtech",
    tagline: "Claims intelligence platform",
    description:
      "AI-driven claims triage, fraud detection, and automated payouts. 5× faster processing with 94% first-touch accuracy for insurance carriers.",
    image: "/showcase/canopy-hero.png",
    accent: "#3B82F6",
    tags: ["Product design", "Insurance", "AI/ML"],
  },
  {
    slug: "beacon",
    name: "Beacon",
    industry: "Early-stage Startup",
    tagline: "The operating system for startups",
    description:
      "Runway tracking, cap table, hiring pipeline, and investor updates in one place. Built by founders, for the pre-seed to Series A stage.",
    image: "/showcase/beacon-hero.png",
    accent: "#FF6B35",
    tags: ["Product design", "Startup tools", "SaaS"],
  },
];

// ─── Header ──────────────────────────────────────────────────────────────────

function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50"
      style={{
        opacity: mounted ? 1 : 0,
        transform: mounted ? "translateY(0)" : "translateY(-8px)",
        transition:
          "opacity 0.4s ease, transform 0.4s ease, background 0.3s ease, border-color 0.3s ease",
        background: scrolled ? "rgba(6,10,20,0.92)" : "transparent",
        borderBottom: scrolled
          ? "1px solid rgba(255,255,255,0.06)"
          : "1px solid transparent",
        backdropFilter: scrolled ? "blur(14px)" : "none",
      }}
    >
      <div className="max-w-layout mx-auto px-6 md:px-10 h-16 flex items-center justify-between">
        <span
          className="font-display text-cloud text-sm tracking-tight select-none"
          style={{ letterSpacing: "-0.01em" }}
        >
          Studio Ted
        </span>
        <nav className="hidden md:flex items-center gap-8 text-xs font-body text-mist">
          <a href="#work" className="hover:text-cloud transition-colors duration-150">
            Work
          </a>
          <a href="#about" className="hover:text-cloud transition-colors duration-150">
            About
          </a>
        </nav>
        <a
          href="mailto:omostical@gmail.com"
          className="text-xs font-body text-mist hover:text-cloud transition-colors duration-150"
        >
          Get in touch →
        </a>
      </div>
    </header>
  );
}

// ─── Project card ────────────────────────────────────────────────────────────

function ProjectCard({
  project,
  index,
  large,
}: {
  project: (typeof projects)[0];
  index: number;
  large?: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-6%" });
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 32 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.75,
        delay: 0.08 * index,
        ease: [0.25, 0.1, 0.25, 1],
      }}
    >
      <Link
        href={`/work/${project.slug}`}
        className="group block"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <div
          className="relative overflow-hidden"
          style={{
            borderRadius: "14px",
            border: "1px solid rgba(255,255,255,0.08)",
            transition: "border-color 0.3s, box-shadow 0.3s",
            borderColor: hovered
              ? `${project.accent}33`
              : "rgba(255,255,255,0.08)",
            boxShadow: hovered
              ? `0 24px 64px rgba(0,0,0,0.4), 0 0 0 1px ${project.accent}22`
              : "0 8px 32px rgba(0,0,0,0.2)",
          }}
        >
          {/* Screenshot */}
          <div
            className="relative overflow-hidden"
            style={{ aspectRatio: large ? "16/8.5" : "16/9.5" }}
          >
            <Image
              src={project.image}
              alt={`${project.name} — ${project.tagline}`}
              fill
              className="object-cover object-top transition-transform duration-700 ease-out"
              style={{
                transform: hovered ? "scale(1.03)" : "scale(1)",
              }}
              sizes={large ? "1280px" : "640px"}
            />
            {/* Bottom gradient */}
            <div
              className="absolute inset-x-0 bottom-0 pointer-events-none"
              style={{
                height: "50%",
                background:
                  "linear-gradient(to bottom, transparent, rgba(6,10,20,0.95))",
              }}
            />

            {/* Industry tag */}
            <div
              className="absolute top-4 left-4 flex items-center gap-2"
            >
              <span
                className="text-[10px] uppercase tracking-widest font-body font-medium px-2.5 py-1"
                style={{
                  background: "rgba(6,10,20,0.7)",
                  backdropFilter: "blur(8px)",
                  color: project.accent,
                  borderRadius: "4px",
                  border: `1px solid ${project.accent}25`,
                }}
              >
                {project.industry}
              </span>
            </div>

            {/* Bottom overlay info */}
            <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-8">
              <div className="flex items-end justify-between gap-4">
                <div>
                  <h3
                    className="font-display text-cloud mb-1.5"
                    style={{
                      fontSize: large
                        ? "clamp(1.75rem, 3vw, 2.5rem)"
                        : "clamp(1.4rem, 2vw, 1.75rem)",
                      lineHeight: 1.15,
                      letterSpacing: "-0.025em",
                    }}
                  >
                    {project.name}
                  </h3>
                  <p
                    className="font-body text-mist"
                    style={{ fontSize: large ? "0.9375rem" : "0.8125rem" }}
                  >
                    {project.tagline}
                  </p>
                </div>

                {/* Arrow */}
                <div
                  className="flex-shrink-0 w-9 h-9 flex items-center justify-center transition-all duration-300"
                  style={{
                    background: hovered
                      ? project.accent
                      : "rgba(255,255,255,0.08)",
                    borderRadius: "50%",
                    transform: hovered ? "translateX(0)" : "translateX(-4px)",
                  }}
                >
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                  >
                    <path
                      d="M3 7h8M8 4l3 3-3 3"
                      stroke={hovered ? "#060A14" : "#EDE8DC"}
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Tags below card */}
        <div className="flex flex-wrap items-center gap-1.5 mt-3 px-1">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-[10px] font-body px-2 py-0.5"
              style={{
                background: "rgba(255,255,255,0.04)",
                color: "#6B7A8F",
                border: "1px solid rgba(255,255,255,0.07)",
                borderRadius: "3px",
              }}
            >
              {tag}
            </span>
          ))}
        </div>
      </Link>
    </motion.div>
  );
}

// ─── Page ────────────────────────────────────────────────────────────────────

export default function Portfolio() {
  const heroRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const aboutInView = useInView(aboutRef, { once: true, margin: "-8%" });

  return (
    <main
      className="relative overflow-x-hidden"
      style={{ background: "#060A14" }}
    >
      <Header />

      {/* Ambient glow */}
      <div
        className="fixed pointer-events-none"
        style={{
          top: "-20%",
          left: "50%",
          transform: "translateX(-50%)",
          width: "800px",
          height: "600px",
          background:
            "radial-gradient(ellipse at center, rgba(184,147,90,0.06) 0%, transparent 70%)",
          zIndex: 0,
        }}
      />

      {/* Hero */}
      <section
        ref={heroRef}
        className="relative pt-28 pb-14 px-6 md:px-10 max-w-layout mx-auto"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <p
            className="text-xs uppercase tracking-widest font-body mb-6"
            style={{ color: "#B8935A" }}
          >
            Design · Product · Strategy
          </p>
          <h1
            className="font-display text-cloud text-balance"
            style={{
              fontSize: "clamp(2.5rem, 6vw, 5.5rem)",
              lineHeight: 1.05,
              letterSpacing: "-0.03em",
              maxWidth: "820px",
            }}
          >
            Interfaces that earn trust{" "}
            <span className="text-mist">before users read a word.</span>
          </h1>
          <p
            className="font-body text-mist mt-6 max-w-lg leading-relaxed"
            style={{ fontSize: "1.0625rem" }}
          >
            Product design for SaaS companies that need to move fast and look
            like they have everything under control. Ex-Stripe, Intercom,
            Facebook, Apollo.io.
          </p>
        </motion.div>
      </section>

      {/* Work grid */}
      <section
        id="work"
        className="px-6 md:px-10 pb-24 max-w-layout mx-auto"
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex items-center gap-2 mb-10"
        >
          <span className="w-5 h-px" style={{ background: "#B8935A" }} />
          <span
            className="text-xs uppercase tracking-widest font-body"
            style={{ color: "#B8935A" }}
          >
            Selected work · {projects.length} projects
          </span>
        </motion.div>

        {/* Featured project (full width) */}
        <div className="mb-5">
          <ProjectCard
            project={projects[0]}
            index={0}
            large
          />
        </div>

        {/* 2×2 grid */}
        <div className="grid md:grid-cols-2 gap-5">
          {projects.slice(1).map((project, i) => (
            <ProjectCard
              key={project.slug}
              project={project}
              index={i + 1}
            />
          ))}
        </div>
      </section>

      {/* About / Studio note */}
      <section
        ref={aboutRef}
        id="about"
        className="px-6 md:px-10 pb-32 max-w-layout mx-auto"
      >
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={aboutInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.75, ease: [0.25, 0.1, 0.25, 1] }}
          className="p-10 md:p-14 grid md:grid-cols-[1fr_360px] gap-12 items-center"
          style={{
            background: "rgba(255,255,255,0.02)",
            border: "1px solid rgba(255,255,255,0.06)",
            borderRadius: "12px",
          }}
        >
          <div>
            <p
              className="text-xs uppercase tracking-widest font-body mb-5"
              style={{ color: "#B8935A" }}
            >
              The approach
            </p>
            <h2
              className="font-display text-cloud mb-4 text-balance"
              style={{
                fontSize: "clamp(1.75rem, 2.5vw, 2.5rem)",
                lineHeight: 1.15,
                letterSpacing: "-0.025em",
              }}
            >
              Deep domain research. Staff-level execution.
            </h2>
            <p
              className="font-body text-mist leading-relaxed"
              style={{ fontSize: "1rem", maxWidth: "540px" }}
            >
              Every project starts with understanding the industry before opening
              a design tool. Each landing page represents weeks of research into
              real user pain points, competitor gaps, and domain-specific
              workflows. The depth shows in the copy, the data, and the product
              visualizations.
            </p>
          </div>
          <div className="space-y-3">
            {[
              { co: "Stripe", role: "Finance Ops tooling, 3 years" },
              { co: "Intercom", role: "Product surface design, 2 years" },
              { co: "Facebook", role: "Internal tools, Ads platform" },
              { co: "Apollo.io", role: "Revenue platform, GTM design" },
            ].map((item) => (
              <div
                key={item.co}
                className="flex items-center justify-between p-3.5"
                style={{
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(255,255,255,0.07)",
                  borderRadius: "8px",
                }}
              >
                <span className="text-sm font-medium text-cloud font-body">
                  {item.co}
                </span>
                <span className="text-xs text-mist font-body">
                  {item.role}
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* CTA */}
      <section className="px-6 md:px-10 pb-20 max-w-layout mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2
            className="font-display text-cloud mb-4"
            style={{
              fontSize: "clamp(1.5rem, 2.5vw, 2.25rem)",
              lineHeight: 1.15,
              letterSpacing: "-0.025em",
            }}
          >
            Have a project in mind?
          </h2>
          <p className="font-body text-mist mb-8 text-sm">
            I take on 2–3 projects per quarter. Let&rsquo;s talk.
          </p>
          <a
            href="mailto:omostical@gmail.com"
            className="inline-flex items-center gap-2 text-sm font-medium font-body text-void px-6 py-3"
            style={{
              background: "#B8935A",
              borderRadius: "6px",
              transition:
                "background 0.15s, transform 0.15s, box-shadow 0.15s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "#CBA96A";
              e.currentTarget.style.transform = "translateY(-1px)";
              e.currentTarget.style.boxShadow =
                "0 8px 24px rgba(184,147,90,0.3)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "#B8935A";
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "none";
            }}
          >
            Start a conversation
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
        </motion.div>
      </section>

      {/* Footer */}
      <footer
        className="px-6 md:px-10 py-10 max-w-layout mx-auto flex flex-col md:flex-row items-center justify-between gap-4"
        style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
      >
        <span
          className="font-display text-cloud text-sm"
          style={{ letterSpacing: "-0.01em" }}
        >
          Studio Ted
        </span>
        <div className="flex items-center gap-6 text-xs font-body text-mist">
          <a
            href="#work"
            className="hover:text-cloud transition-colors duration-150"
          >
            Work
          </a>
          <a
            href="#about"
            className="hover:text-cloud transition-colors duration-150"
          >
            About
          </a>
          <a
            href="mailto:omostical@gmail.com"
            className="hover:text-cloud transition-colors duration-150"
          >
            omostical@gmail.com
          </a>
        </div>
        <span className="text-xs font-body text-mist">© 2025</span>
      </footer>
    </main>
  );
}
