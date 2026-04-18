"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";

const projects = [
  {
    slug: "strata",
    name: "Strata",
    industry: "Fintech",
    tagline: "Revenue recognition automation",
    image: "/showcase/strata-hero.png",
    accent: "#B8935A",
  },
  {
    slug: "medly",
    name: "Medly",
    industry: "Healthtech",
    tagline: "Patient engagement platform",
    image: "/showcase/medly-hero.png",
    accent: "#4ECBA0",
  },
  {
    slug: "haven",
    name: "Haven",
    industry: "Proptech",
    tagline: "Property intelligence platform",
    image: "/showcase/haven-hero.png",
    accent: "#C9855E",
  },
  {
    slug: "canopy",
    name: "Canopy",
    industry: "Insurtech",
    tagline: "Claims intelligence platform",
    image: "/showcase/canopy-hero.png",
    accent: "#3B82F6",
  },
  {
    slug: "beacon",
    name: "Beacon",
    industry: "Startup",
    tagline: "The OS for early-stage startups",
    image: "/showcase/beacon-hero.png",
    accent: "#FF6B35",
  },
];

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
            border: `1px solid ${hovered ? `${project.accent}40` : "rgba(255,255,255,0.07)"}`,
            transition: "border-color 0.3s, box-shadow 0.3s",
            boxShadow: hovered
              ? `0 20px 60px rgba(0,0,0,0.5), 0 0 0 1px ${project.accent}18`
              : "none",
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
              className="object-cover object-top transition-transform duration-700 ease-out"
              style={{ transform: hovered ? "scale(1.04)" : "scale(1)" }}
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div
              className="absolute inset-0 pointer-events-none transition-opacity duration-300"
              style={{
                background: "linear-gradient(to bottom, transparent 40%, rgba(2,2,2,0.9))",
                opacity: hovered ? 1 : 0.7,
              }}
            />

            {/* Name + tag */}
            <div className="absolute bottom-0 left-0 right-0 p-5 flex items-end justify-between">
              <div>
                <span
                  className="text-[10px] uppercase tracking-widest font-body block mb-2"
                  style={{ color: project.accent }}
                >
                  {project.industry}
                </span>
                <h3
                  className="font-display text-cloud"
                  style={{
                    fontSize: "clamp(1.25rem, 2vw, 1.625rem)",
                    lineHeight: 1.15,
                    letterSpacing: "-0.025em",
                  }}
                >
                  {project.name}
                </h3>
              </div>
              <div
                className="w-8 h-8 flex items-center justify-center flex-shrink-0 transition-all duration-300"
                style={{
                  background: hovered ? project.accent : "rgba(255,255,255,0.1)",
                  borderRadius: "50%",
                  transform: hovered ? "scale(1)" : "scale(0.9)",
                }}
              >
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
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
      </Link>
    </motion.div>
  );
}

export default function Playground() {
  return (
    <main
      className="relative overflow-x-hidden min-h-screen"
      style={{ background: "#020202" }}
    >
      {/* Hero — just a big bold headline */}
      <section className="pt-24 pb-16 md:pt-32 md:pb-20 px-6 md:px-10 max-w-layout mx-auto text-center">
        <h1
          className="font-display text-cloud"
          style={{
            fontSize: "clamp(3rem, 8vw, 7rem)",
            lineHeight: 1,
            letterSpacing: "-0.04em",
          }}
        >
          Playground
        </h1>
        <p className="font-body text-mist mt-4 text-sm">
          {projects.length} websites
        </p>
      </section>

      {/* Grid */}
      <section className="px-6 md:px-10 pb-20 max-w-layout mx-auto">
        <div className="grid md:grid-cols-2 gap-4">
          {projects.map((project, i) => (
            <ProjectCard key={project.slug} project={project} index={i} />
          ))}
        </div>
      </section>
    </main>
  );
}
