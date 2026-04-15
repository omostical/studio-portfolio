# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

---

## Project Overview

This is a **creative studio portfolio** built by a fictional founder with staff-level product design experience at Stripe, Intercom, Facebook, and Apollo.io. The portfolio is a conversion tool targeting high-value clients (£20k+ engagements) across multiple industries.

Every output must feel like it could ship at a top-tier company. If anything feels generic, safe, templated, or underwhelming — rethink it.

---

## Tech Stack

- **Framework:** Next.js (App Router)
- **Animations:** Framer Motion — intentional, meaningful, never decorative
- **Language:** TypeScript
- **Styling:** Tailwind CSS (or CSS Modules where fine-grained control is needed)
- **Package manager:** npm or pnpm

### Common Commands

```bash
# Development
npm run dev       # Start dev server (localhost:3000 or next available port)
npm run build     # Production build — run this to catch type/compile errors
npm run lint      # ESLint
npm run typecheck # tsc --noEmit
```

---

## Architecture

### Project Scope

Three layers of work:

1. **Industry Landing Pages** — client acquisition surfaces, one per vertical:
   - B2B SaaS, Early-stage startup, Insurtech, Proptech, Fashion/luxury, Ecommerce, Fintech
2. **Product Dashboards** — proof-of-depth experiences:
   - SalesOps / RevOps platform (Apollo/Traction-inspired)
   - Property management dashboard
3. **Portfolio Landing Page** — the aggregation layer; showcases all work, drives client inquiry

### Routing Convention

```
/                          → Portfolio landing page (placeholder)
/work/strata               → Fintech — Strata, revenue recognition SaaS (BUILT)
/work/[slug]               → Future project landing pages
/work/salesops-dashboard   → SalesOps / RevOps dashboard (planned)
/work/proptech-dashboard   → Property management dashboard (planned)
```

### Component Architecture

- Each project lives in its own directory: `app/work/[slug]/page.tsx` + `components/[slug]/`
- `app/work/[slug]/layout.tsx` holds route-specific metadata (title, description, OG)
- Shared design system tokens live in `tailwind.config.ts` — the custom color palette (`void`, `ink`, `cloud`, `mist`, `ember`, `jade`) and font variables (`--font-playfair`, `--font-dm-sans`, `--font-jetbrains`) are the baseline
- Motion patterns: `useInView` with `{ once: true, margin: "-8%" }` for scroll reveals; stagger via Framer Motion `variants`; `useSpring` with `{ duration: 1600, bounce: 0 }` for counter animations
- Each project has its **own visual system** — do not import components across project directories

### Strata Design Tokens (reference for consistency within the project)

| Token | Value | Usage |
|-------|-------|-------|
| `void` | `#060A14` | Primary background |
| `ink` | `#0C1220` | Cards, surfaces |
| `cloud` | `#EDE8DC` | Primary text (warm white) |
| `mist` | `#6B7A8F` | Secondary text |
| `ember` | `#B8935A` | Primary accent (amber) |
| `jade` | `#28966E` | Success / positive states |

Typography: `font-display` (Playfair Display, serif) for headings; `font-body` (DM Sans) for all body/UI text; `font-mono` (JetBrains Mono) for data labels and metrics.

---

## Quality Bar (Non-Negotiable)

### Design

- Every visual decision must be deliberate and grounded in product/business logic
- Distinct visual direction per industry — no reused styles, palettes, or typographic systems
- No Dribbble-style decoration without purpose
- No generic SaaS layouts that feel templated

### Copy

- Research-driven: understand the target audience, their pain points, their language
- Industry-specific tone (fintech ≠ fashion ≠ early-stage startup)
- No vague claims ("we help you scale faster", "built for modern teams")
- SEO must be intentional: primary + secondary keywords integrated naturally, never at the expense of clarity
- Structure content for semantic hierarchy and scannability

### Engineering

- Performance-conscious: fast load, fluid at 60fps, responsive across breakpoints
- Pixel-level polish — test on mobile, tablet, and desktop
- Meaningful micro-interactions that reinforce usability
- Realistic data states in dashboards: empty, loading, error, success

---

## Per-Project Output Contract

When building any project (landing page or dashboard), ensure the following are defined before writing code:

1. **Concept & positioning** — what the company does and why it exists
2. **Target user & core problem** — specific, not generic
3. **Key flows or page structure**
4. **UX writing samples** — hero, section headers, CTAs
5. **Visual direction** — style, tone, references
6. **Key interactions** — what makes it feel premium

---

## Anti-Patterns (Fail Conditions)

The following patterns are explicitly forbidden:

- Generic layouts that look like they were assembled from a component library
- Copy with buzzwords and no specificity
- Animations added on top of a template rather than designed as part of the experience
- Shallow dashboards with fake complexity (no business logic underpinning the data)
- Reusing the same type scale, color palette, or spacing system across different industry pages
- SEO-keyword stuffing that degrades readability

---

## Studio Positioning

The portfolio page itself is a conversion tool, not a gallery. It must:

- Present all projects with strong visual identity per preview card
- Communicate the studio's philosophy and point of view
- Guide visitors toward inquiry/contact with a clear CTA
- Feel editorial, intentional, and differentiated — comparable to top creative studio sites (e.g., Superflux, Fantasy, Work & Co)
