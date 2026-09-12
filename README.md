# Dr. Maya Reynolds — Therapy Practice Website

A homepage clone-and-redesign project built for a front-end development assignment. The original homepage ([Conejo Valley Family Counseling](https://www.conejovalleycounseling.com/home)) was recreated for layout accuracy, then fully redesigned — new theme, new copy, new images — for a fictional solo therapist, **Dr. Maya Reynolds, PsyD**, based in Santa Monica, CA.

**Live site:** https://webpage-pi-jade.vercel.app/

---

## Project Overview

The project was completed in two phases:

1. **Clone** — recreated the original homepage's layout, spacing, structure, and responsiveness as closely as possible.
2. **Redesign** — replaced the theme, copy, and images using Dr. Reynolds' profile as the single source of truth, and added a new "Our Office" section not present in the original.

All copy is written in first-person, reflecting a solo practice (rather than the original's multi-therapist team structure), and is grounded in specifics from Dr. Reynolds' profile — her specialties (anxiety, panic, trauma, burnout, perfectionism), modalities (CBT, EMDR, mindfulness-based, body-oriented therapy), and client focus (high-achieving, self-aware adults, including entrepreneurs and creatives).

---

## Tech Stack

- **Next.js** (App Router)
- **Tailwind CSS v4** — theme colors and fonts defined via CSS custom properties in an `@theme` block (`app/globals.css`), rather than a `tailwind.config.js`
- **next/font/google** — for loading and exposing custom fonts as CSS variables

---

## Design System

**Color palette** (defined as `--color-*` variables in `app/globals.css`):
- Primary — deep sage
- Secondary — pale sage-cream
- Accent — muted teal-sage
- Text — dark, high-contrast neutral tones for readability

**Typography:**
- Display font: Lora (serif, warm/editorial feel for headings)
- Body font: [add body font here]

---

## Sections

- Hero
- "You keep functioning, but underneath, you're exhausted" (intro)
- Who I Help (High-Achieving Professionals / Entrepreneurs & Creatives / Trauma Survivors)
- Areas of Expertise
- How I Work
- Specialties (Anxiety & Panic / Trauma & EMDR / Burnout & Perfectionism / In-Person & Telehealth)
- The Office (new section, not in original)
- Schedule an Appointment (CTA)
- Footer

---

## Running Locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---