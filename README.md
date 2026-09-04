# Pyllar — Marketing Site

This is the public marketing/sales website for **Pyllar**, a management
system for group homes and residential youth facilities (youth profiles,
incidents, medications, scheduling, staff records, finance, and
CARF-oriented reporting).

This repo is **only the marketing site** — a lead-generation landing page
used to introduce Pyllar to prospective customers and collect "Request a
Demo" inquiries. It is intentionally separate from, and does not contain any
code from, the main Pyllar application (the actual product) or its
backend/demo-approval workflow, which live in a different, private repo.

## Tech stack

- [Next.js](https://nextjs.org/) (App Router) + TypeScript
- [Tailwind CSS](https://tailwindcss.com/) v4
- [lucide-react](https://lucide.dev/) for icons

## Getting started

```bash
npm install
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000).

Other useful scripts:

```bash
npm run build   # production build
npm run start   # run the production build locally
npm run lint    # eslint
```

## Project structure

```
src/
  app/
    layout.tsx        # root layout, fonts, SEO metadata
    page.tsx           # assembles the single-page site from sections
    api/lead/route.ts  # POST endpoint for the "Request a Demo" form
  components/
    header.tsx
    footer.tsx
    hero.tsx
    features.tsx
    testimonial.tsx     # fabricated, clearly-labeled illustrative testimonial
    pricing-note.tsx     # simple "contact us for pricing" section
    demo-section.tsx
    demo-form.tsx         # client component, submits to /api/lead
```

## The "Request a Demo" form

This is a **lead-capture form, not self-serve sign-up**. Submissions go to
`POST /api/lead`, which:

1. Validates the payload (name, email, organization required; phone
   optional).
2. Always logs the lead server-side (so nothing is silently lost).
3. If the `LEAD_NOTIFY_WEBHOOK_URL` environment variable is set, best-effort
   forwards the lead to that URL (e.g. a Slack incoming webhook, a Zapier
   catch hook, or an internal endpoint).

**This is intentionally a stub.** There is no real CRM/email integration
wired up yet — see the `TODO(sales-ops)` comments in
`src/app/api/lead/route.ts` for the obvious extension points. The actual
demo-approval workflow and shared demo environment are being built
separately in the main Pyllar application repo and are out of scope here.

Copy `.env.example` to `.env.local` to configure `LEAD_NOTIFY_WEBHOOK_URL`
locally.

## Content source

Messaging, feature descriptions, and SEO copy are based on
`SALES_SITE_REFINEMENT_PROMPTS.md` from the main Pyllar app repo (elevator
pitch, hero copy, feature blurbs, and launch checklist).

## Notes / things to revisit before launch

- **Domain:** copy and metadata currently assume `https://www.pyllar.com` as
  a placeholder — confirm the real domain and update `metadataBase` in
  `src/app/layout.tsx`.
- **Contact email:** `hello@pyllar.com` in the footer is a placeholder —
  update once a real mailbox exists.
- **Lead notifications:** wire `LEAD_NOTIFY_WEBHOOK_URL` (or replace the
  stub entirely) with a real CRM/email integration.
- **Testimonial:** the testimonial on the homepage is fabricated and clearly
  labeled as an illustrative example. Replace with a real, permissioned
  quote once available.
- **Compliance claims:** no HIPAA/CARF certification claims are made
  anywhere on the site (CARF-*oriented* reporting only) — keep it that way
  unless/until such claims are actually true and legally reviewed.
- **Hosting/deployment:** not set up yet. This repo is ready to deploy to
  any Next.js-compatible host (e.g. Vercel) whenever that decision is made.
