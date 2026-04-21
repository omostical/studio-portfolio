"use client";

import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";

const industries = ["Software", "AI", "Fintech", "Marketing", "Health", "Real estate"] as const;
const projectTypes = ["Landing page", "SaaS Dashboard", "Pitch deck", "AI tools"] as const;

type Industry = (typeof industries)[number];
type ProjectType = (typeof projectTypes)[number];

const projects = [
  {
    slug: "lumen",
    name: "Lumen",
    industry: "Software" as Industry,
    type: "Landing page" as ProjectType,
    tagline: "Analytics for operators",
    image: "/showcase/lumen-hero.png",
  },
  {
    slug: "strata",
    name: "Strata",
    industry: "Fintech" as Industry,
    type: "Landing page" as ProjectType,
    tagline: "Revenue recognition automation",
    image: "/showcase/strata-hero.png",
  },
  {
    slug: "medly",
    name: "Medly",
    industry: "Health" as Industry,
    type: "Landing page" as ProjectType,
    tagline: "Patient engagement platform",
    image: "/showcase/medly-hero.png",
  },
  {
    slug: "haven",
    name: "Haven",
    industry: "Real estate" as Industry,
    type: "Landing page" as ProjectType,
    tagline: "Property intelligence platform",
    image: "/showcase/haven-hero.png",
  },
  {
    slug: "canopy",
    name: "Canopy",
    industry: "Software" as Industry,
    type: "Landing page" as ProjectType,
    tagline: "Claims intelligence platform",
    image: "/showcase/canopy-hero.png",
  },
  {
    slug: "beacon",
    name: "Beacon",
    industry: "Software" as Industry,
    type: "SaaS Dashboard" as ProjectType,
    tagline: "The OS for early-stage startups",
    image: "/showcase/beacon-hero.png",
  },
  {
    slug: "aura",
    name: "Aura",
    industry: "AI" as Industry,
    type: "AI tools" as ProjectType,
    tagline: "AI-powered customer experience",
    image: "/showcase/aura-hero.png",
  },
];

/* ── Filter Dropdown ── */

function FilterDropdown({
  label,
  options,
  selected,
  onToggle,
  counts,
}: {
  label: string;
  options: readonly string[];
  selected: Set<string>;
  onToggle: (value: string) => void;
  counts: Record<string, number>;
}) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  return (
    <div ref={ref} style={{ position: "relative" }}>
      <button
        onClick={() => setOpen((v) => !v)}
        className="font-body"
        style={{
          display: "flex",
          alignItems: "center",
          gap: "6px",
          fontSize: "0.8125rem",
          fontWeight: 500,
          color: selected.size > 0 ? "#FFFFFF" : "#999",
          background: selected.size > 0 ? "rgba(255,255,255,0.1)" : "transparent",
          border: "1px solid rgba(255,255,255,0.12)",
          borderRadius: "100px",
          padding: "8px 18px",
          cursor: "pointer",
          transition: "border-color 0.2s, background 0.2s",
          outline: "none",
          whiteSpace: "nowrap",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.borderColor = "rgba(255,255,255,0.25)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.borderColor = "rgba(255,255,255,0.12)";
        }}
      >
        {label}
        {selected.size > 0 && (
          <span
            style={{
              fontSize: "0.6875rem",
              background: "rgba(255,255,255,0.15)",
              borderRadius: "100px",
              padding: "1px 7px",
              color: "#FFFFFF",
            }}
          >
            {selected.size}
          </span>
        )}
        <svg
          width="12"
          height="12"
          viewBox="0 0 12 12"
          fill="none"
          style={{
            transition: "transform 0.2s",
            transform: open ? "rotate(180deg)" : "rotate(0)",
          }}
        >
          <path d="M3 4.5L6 7.5L9 4.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      <AnimatePresence>
        {open && (
          <>
            {/* Backdrop to close */}
            <div
              style={{ position: "fixed", inset: 0, zIndex: 40 }}
              onClick={() => setOpen(false)}
            />
            <motion.div
              initial={{ opacity: 0, y: -4, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -4, scale: 0.97 }}
              transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
              style={{
                position: "absolute",
                top: "calc(100% + 8px)",
                left: 0,
                minWidth: "220px",
                background: "#1A1A1A",
                border: "1px solid rgba(255,255,255,0.1)",
                borderRadius: "12px",
                padding: "6px",
                zIndex: 50,
                boxShadow: "0 16px 48px rgba(0,0,0,0.5)",
              }}
            >
              {options.map((option) => {
                const isChecked = selected.has(option);
                const count = counts[option] || 0;
                return (
                  <button
                    key={option}
                    onClick={() => onToggle(option)}
                    className="font-body"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "10px",
                      width: "100%",
                      padding: "10px 12px",
                      fontSize: "0.85rem",
                      color: isChecked ? "#FFFFFF" : "#999",
                      background: isChecked ? "rgba(255,255,255,0.06)" : "transparent",
                      border: "none",
                      borderRadius: "8px",
                      cursor: "pointer",
                      transition: "background 0.15s, color 0.15s",
                      outline: "none",
                      textAlign: "left",
                    }}
                    onMouseEnter={(e) => {
                      if (!isChecked) e.currentTarget.style.background = "rgba(255,255,255,0.04)";
                    }}
                    onMouseLeave={(e) => {
                      if (!isChecked) e.currentTarget.style.background = "transparent";
                    }}
                  >
                    {/* Checkbox */}
                    <div
                      style={{
                        width: 18,
                        height: 18,
                        borderRadius: "4px",
                        border: isChecked ? "none" : "1.5px solid rgba(255,255,255,0.2)",
                        background: isChecked ? "#FFFFFF" : "transparent",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                        transition: "background 0.15s, border-color 0.15s",
                      }}
                    >
                      {isChecked && (
                        <svg width="11" height="11" viewBox="0 0 11 11" fill="none">
                          <path d="M2.5 5.5L4.5 7.5L8.5 3.5" stroke="#1A1A1A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      )}
                    </div>
                    <span style={{ flex: 1 }}>{option}</span>
                    <span style={{ fontSize: "0.75rem", color: "#555" }}>({count})</span>
                  </button>
                );
              })}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}

/* ── Project Card ── */

function ProjectCard({
  project,
  index,
}: {
  project: (typeof projects)[0];
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-5%" });
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      ref={ref}
      initial={false}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0.6, y: 12 }}
      transition={{
        duration: 0.6,
        delay: 0.06 * index,
        ease: [0.25, 0.1, 0.25, 1],
      }}
      layout
      style={{ opacity: 1 }}
    >
      <Link
        href={`/work/${project.slug}`}
        className="block"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <div
          className="relative overflow-hidden"
          style={{
            borderRadius: "12px",
            border: "1px solid rgba(255,255,255,0.06)",
          }}
        >
          <div
            className="relative overflow-hidden"
            style={{ aspectRatio: "16/10" }}
          >
            <Image
              src={project.image}
              alt={`${project.name} — ${project.tagline}`}
              fill
              className="object-cover object-top"
              style={{
                transition: "transform 0.8s cubic-bezier(0.16, 1, 0.3, 1), filter 0.6s cubic-bezier(0.16, 1, 0.3, 1)",
                transform: hovered ? "scale(1.035)" : "scale(1)",
                filter: hovered ? "blur(12px) brightness(0.45)" : "blur(0px) brightness(1)",
              }}
              sizes="(max-width: 768px) 100vw, 50vw"
            />

            <AnimatePresence>
              {hovered && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                  className="absolute inset-0 flex flex-col items-center justify-center"
                  style={{ zIndex: 2 }}
                >
                  <motion.span
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -4 }}
                    transition={{ duration: 0.35, delay: 0.04, ease: [0.16, 1, 0.3, 1] }}
                    className="font-body"
                    style={{
                      fontSize: "0.6875rem",
                      fontWeight: 500,
                      letterSpacing: "0.12em",
                      textTransform: "uppercase",
                      color: "rgba(255,255,255,0.5)",
                      marginBottom: "8px",
                    }}
                  >
                    {project.industry}
                  </motion.span>
                  <motion.h3
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -6 }}
                    transition={{ duration: 0.4, delay: 0.06, ease: [0.16, 1, 0.3, 1] }}
                    className="font-display"
                    style={{
                      fontSize: "clamp(1.75rem, 3vw, 2.5rem)",
                      fontWeight: 500,
                      color: "#FFFFFF",
                      letterSpacing: "-0.03em",
                      lineHeight: 1,
                    }}
                  >
                    {project.name}
                  </motion.h3>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

/* ── Page ── */

export default function Playground() {
  const [selectedIndustries, setSelectedIndustries] = useState<Set<string>>(new Set());
  const [selectedTypes, setSelectedTypes] = useState<Set<string>>(new Set());

  function toggleIndustry(value: string) {
    setSelectedIndustries((prev) => {
      const next = new Set(prev);
      if (next.has(value)) next.delete(value);
      else next.add(value);
      return next;
    });
  }

  function toggleType(value: string) {
    setSelectedTypes((prev) => {
      const next = new Set(prev);
      if (next.has(value)) next.delete(value);
      else next.add(value);
      return next;
    });
  }

  const filtered = useMemo(() => {
    return projects.filter((p) => {
      if (selectedIndustries.size > 0 && !selectedIndustries.has(p.industry)) return false;
      if (selectedTypes.size > 0 && !selectedTypes.has(p.type)) return false;
      return true;
    });
  }, [selectedIndustries, selectedTypes]);

  const industryCounts = useMemo(() => {
    const counts: Record<string, number> = {};
    for (const ind of industries) {
      counts[ind] = projects.filter((p) => p.industry === ind).length;
    }
    return counts;
  }, []);

  const typeCounts = useMemo(() => {
    const counts: Record<string, number> = {};
    for (const t of projectTypes) {
      counts[t] = projects.filter((p) => p.type === t).length;
    }
    return counts;
  }, []);

  const hasFilters = selectedIndustries.size > 0 || selectedTypes.size > 0;

  return (
    <main
      className="relative overflow-x-hidden min-h-screen"
      style={{ background: "#020202" }}
    >
      {/* Header row — title left, filters right */}
      <section className="pt-24 pb-10 md:pt-32 md:pb-12 px-6 md:px-10 max-w-layout mx-auto">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          {/* Left — title with counter */}
          <div>
            <h1
              className="font-display text-cloud"
              style={{
                fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
                lineHeight: 1,
                letterSpacing: "-0.04em",
              }}
            >
              Works
              <span
                className="font-body"
                style={{
                  fontSize: "clamp(1rem, 2vw, 1.5rem)",
                  fontWeight: 400,
                  color: "#666",
                  marginLeft: "8px",
                  letterSpacing: "0",
                }}
              >
                ({filtered.length})
              </span>
            </h1>
            <p
              className="font-body"
              style={{
                fontSize: "0.9375rem",
                color: "#666",
                marginTop: "12px",
                lineHeight: 1.5,
              }}
            >
              A showcase of our recent projects that blend creativity and functionality
            </p>
          </div>

          {/* Right — filter pills */}
          <div className="flex items-center gap-2 flex-wrap">
            <FilterDropdown
              label="Industry"
              options={industries}
              selected={selectedIndustries}
              onToggle={toggleIndustry}
              counts={industryCounts}
            />
            <FilterDropdown
              label="Project type"
              options={projectTypes}
              selected={selectedTypes}
              onToggle={toggleType}
              counts={typeCounts}
            />

            {/* Clear filters */}
            <AnimatePresence>
              {hasFilters && (
                <motion.button
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.2 }}
                  onClick={() => {
                    setSelectedIndustries(new Set());
                    setSelectedTypes(new Set());
                  }}
                  className="font-body"
                  style={{
                    fontSize: "0.75rem",
                    color: "#666",
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    padding: "8px 12px",
                    outline: "none",
                    transition: "color 0.2s",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#FFFFFF")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "#666")}
                >
                  Clear all
                </motion.button>
              )}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="px-6 md:px-10 pb-20 max-w-layout mx-auto">
        <AnimatePresence mode="popLayout">
          {filtered.length > 0 ? (
            <motion.div layout className="grid md:grid-cols-2 gap-4">
              {filtered.map((project, i) => (
                <ProjectCard key={project.slug} project={project} index={i} />
              ))}
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="text-center"
              style={{ padding: "120px 0" }}
            >
              <p
                className="font-body"
                style={{ fontSize: "1rem", color: "#666", marginBottom: "16px" }}
              >
                No projects match your filters.
              </p>
              <button
                onClick={() => {
                  setSelectedIndustries(new Set());
                  setSelectedTypes(new Set());
                }}
                className="font-body"
                style={{
                  fontSize: "0.85rem",
                  color: "#999",
                  background: "rgba(255,255,255,0.06)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  borderRadius: "100px",
                  padding: "10px 24px",
                  cursor: "pointer",
                  outline: "none",
                  transition: "border-color 0.2s",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.25)")}
                onMouseLeave={(e) => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)")}
              >
                Clear filters
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </section>
    </main>
  );
}
