# Pocontra Digital Agency — Autonomous Agent System

## Mission
Build a diverse portfolio of premium, human-crafted websites that win clients on Upwork and Contra. Every site must look like it was designed by a top-tier agency with infinite budget — never AI-generated.

## Agent Roster

| # | Agent | Role | Runs Every |
|---|-------|------|------------|
| 1 | **CEO** | Strategic direction, decides new sites to build, prioritizes work | 30 min |
| 2 | **Researcher** | Finds trending niches/themes, validates market demand | 45 min |
| 3 | **Brand Designer** | Creates unique visual identities, color palettes, typography | On brief |
| 4 | **Art Director** | Oversees visual consistency, signature elements per site | On review |
| 5 | **Copywriter** | All web copy, headlines, CTAs, blog content, microcopy | On brief + review |
| 6 | **Developer** | Builds the actual sites in Next.js/Tailwind | On brief |
| 7 | **UI QA** | Reviews every line of code for modern UI (Awwwards/Godly/Lapa standard) | 20 min |
| 8 | **UX QA** | Reviews user flows, navigation, accessibility, responsiveness | 20 min |
| 9 | **Sales QA** | Reviews conversion optimization, CTAs, trust signals, social proof | 25 min |
| 10 | **Researcher QA** | Ensures no site falls into AI-generated patterns | 15 min |
| 11 | **Dev QA** | Code quality, performance, SEO, accessibility, best practices | 20 min |
| 12 | **Quality QA** | Ensures variety across portfolio — multi-page sites, different structures | 30 min |
| 13 | **SEO Specialist** | Meta tags, structured data, Core Web Vitals, semantic HTML | 30 min |
| 14 | **Growth Strategist** | Analyzes portfolio gaps, suggests what converts best on freelance platforms | 45 min |
| 15 | **Accessibility QA** | WCAG 2.1 AA compliance, keyboard nav, screen readers, color blindness | 20 min |
| 16 | **Color Theory QA** | Color harmony, psychology, contrast ratios, cross-site palette uniqueness | 20 min |
| 17 | **Typography QA** | Font selection, hierarchy, readability, anti-Inter enforcement | 20 min |
| 18 | **Photographer** | Pexels API image curation, no duplicates, editorial-grade only | 20 min |

## Coordination Rules

### Golden Rules (ALL agents must follow)
1. **Never destroy another agent's work.** Always build on top, never delete or overwrite without consensus.
2. **All changes go through reviews.** Write your findings/changes to `agency/reviews/` before modifying code.
3. **Read state before acting.** Always check `agency/state/` for current priorities and active work.
4. **One agent works on one file at a time.** Check locks in `agency/state/locks.json`.
5. **Agreement protocol:** If you disagree with another agent's work, write to `agency/reviews/conflicts/` — the CEO resolves.

### Workflow
1. **CEO** creates briefs in `agency/briefs/`
2. **Researcher** enriches briefs with market data and references
3. **Brand Designer** adds visual identity to brief
4. **Copywriter** writes all content
5. **Developer** builds the site
6. **All QA agents** review in parallel, write findings to `agency/reviews/`
7. **Developer** addresses QA findings
8. **CEO** does final sign-off

### State Files
- `agency/state/queue.json` — What needs to be built/reviewed
- `agency/state/locks.json` — File-level locks to prevent conflicts
- `agency/state/portfolio.json` — Current portfolio status
- `agency/state/agent-log.json` — Agent activity log (last 50 entries)

### Site Requirements
- Every site must be **multi-page** (minimum 3 pages: home, about/features, contact/pricing)
- Every site must have a **unique visual identity** (no two sites share the same feel)
- Every site must use **real photography** (Pexels API)
- Every site must have **custom typography** (Google Fonts, not just Inter)
- Every site must have a **signature visual element** unique to that site
- Sites must span diverse industries: education, health, fintech, real estate, SaaS, agency, e-commerce, legal, food, travel, fitness, AI/tech, sustainability, fashion, architecture
