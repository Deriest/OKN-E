# PRD — PT Octopus Karya Nusantara (OKN) Marketing Website

## Original Problem Statement
Premium, cinematic, public-facing 6-page marketing site for an Indonesian biochar carbon-removal
company. "Apple-meets-National-Geographic": dark forest-green canvas, terracotta accents, Cormorant
Garamond + DM Sans. Signature cinematic opening "The Pressing" (sea→octopus→soil) on Home.
One repeating primary CTA "Lock It With Us"; Partner page splits into audience paths. Working contact form.

## Architecture
- Frontend: React 19 + React Router 7, Framer Motion, Tailwind (custom OKN palette/fonts), shadcn/sonner.
- Backend: FastAPI + MongoDB (motor). Endpoints: POST/GET `/api/contact`.
- Assets: client logo (PDF→PNG, node-graph octopus) in nav/footer; AI-generated biochar octopus + emerald
  octopus for the cinematic sequence; client product (BIOTRON bags) + farmer photos; stock imagery.

## User Personas
1. CDR / carbon-credit buyers — permanence, verification, registries.
2. Investors — scale economics, opportunity.
3. Government & agricultural partners — yields, food sovereignty, deployment.

## Core Requirements (static)
- 6 pages: Home, The Solution, The Proof, The Opportunity, Our Story, Partner With Us.
- Fixed palette & typography (Cormorant Garamond + DM Sans). Honour reduced-motion.
- Compliance: never name buyers/marketplaces, registries "in progress", no signed-offtake claims,
  "2.0" is net CDR per tonne (never a permanence factor / "Fp").

## Implemented (2026-06-25)
- All 6 pages with full brief copy, EN headlines + Bahasa eyebrow subtitles.
- "The Pressing" opening sequence (Treatment B layered + canvas particles; Treatment C reduced-motion/mobile;
  skip button; once-per-session via sessionStorage).
- Sticky nav (transparent→blur on scroll), footer + closing-CTA band on every page (Partner uses the form as CTA).
- Data viz: animated counters, fixed-carbon comparison bars, scale-chain reveal, Indonesia 17% donut,
  breathing Indonesia "lungs" map, five-values section.
- Working contact form → `/api/contact` (MongoDB) with toast feedback; audience-path mailto buttons.
- SEO meta/OG, favicon, recurring biochar-octopus imprint motif. Tested 100% backend + frontend.

## Backlog
- P1: Full EN/ID language toggle; swap remaining stock imagery for real OKN field/facility photos.
- P2: Scroll-driven (not time-based) Pressing sequence; certificate/award image gallery; admin view for contacts.
- P2: Optional custom-domain email / richer form (file attach), Open Graph per-page images.

## Next Action Items
- Gather real TERRA KAYA™ facility photos and certification logo images to replace placeholders.
- Decide on EN/ID toggle scope.
