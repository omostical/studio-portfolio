"use client";

import { motion, useInView, AnimatePresence } from "framer-motion";
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
  },
  {
    slug: "medly",
    name: "Medly",
    industry: "Healthtech",
    tagline: "Patient engagement platform",
    image: "/showcase/medly-hero.png",
  },
  {
    slug: "haven",
    name: "Haven",
    industry: "Proptech",
    tagline: "Property intelligence platform",
    image: "/showcase/haven-hero.png",
  },
  {
    slug: "canopy",
    name: "Canopy",
    industry: "Insurtech",
    tagline: "Claims intelligence platform",
    image: "/showcase/canopy-hero.png",
  },
  {
    slug: "beacon",
    name: "Beacon",
    industry: "Startup",
    tagline: "The OS for early-stage startups",
    image: "/showcase/beacon-hero.png",
  },
  {
    slug: "aura",
    name: "Aura",
    industry: "AI / Enterprise",
    tagline: "AI-powered customer experience",
    image: "/showcase/aura-hero.png",
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
            border: "1px solid rgba(255,255,255,0.06)",
          }}
        >
          <div
            className="relative overflow-hidden"
            style={{ aspectRatio: "16/10" }}
          >
            {/* Screenshot image */}
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

            {/* Name + industry — centered, appears on hover */}
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

export default function Playground() {
  return (
    <main
      className="relative overflow-x-hidden min-h-screen"
      style={{ background: "#020202" }}
    >
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
