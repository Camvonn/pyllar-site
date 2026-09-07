# Pyllar — Marketing Site

This is the public marketing/sales website for **Pyllar**, a management
system for group homes and residential youth facilities (youth profiles,
incidents, medications, scheduling, staff records, finance, and
CARF-oriented reporting).

This repo is **only the marketing site** — a lead-generation website used to
introduce Pyllar to prospective customers and collect "Request a Demo"
inquiries. It is intentionally separate from, and does not contain any code
from, the main Pyllar application (the actual product) or its
backend/demo-approval workflow, which live in a different, private repo.

## Tech stack

- [Next.js](https://nextjs.org/) (App Router) + TypeScript
- [Tailwind CSS](https://tailwindcss.com/) v4
- [lucide-react](https://lucide.dev/) for icons
- `next/og` (`ImageResponse`) for the generated social-preview image and
  favicon — no external design tool required

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

## Pages

- `/` — Home: hero, condensed feature highlights, testimonial, security/privacy
  note, and a call-to-action band.
- `/features` — Full feature list, grouped into Care & Safety, Day-to-Day
  Operations, and Insights & Reporting, plus the security/privacy note.
- `/pricing` — Per-facility pricing with illustrative example starting
  prices ($299/mo first facility, $199/mo each additional — clearly marked
  as example/starting prices, not a binding quote), what's included, add-ons,
  and an expanded FAQ. Final CTA is still "Contact us for a custom quote."
- `/demo` — The "Request a Demo" lead-capture form, plus what happens after
  someone submits it.
- `/privacy`, `/terms` — Placeholder legal pages, clearly labeled as
  placeholders (see below). Excluded from search indexing via `robots` meta.

## Project structure

```
src/
  app/
    layout.tsx            # root layout, fonts, site-wide SEO metadata
    page.tsx               # Home page
    features/page.tsx      # Features page
    pricing/page.tsx        # Pricing page
    demo/page.tsx           # Request a Demo page
    privacy/page.tsx        # Placeholder Privacy Policy
    terms/page.tsx          # Placeholder Terms of Service
    api/lead/route.ts       # POST endpoint for the "Request a Demo" form
    opengraph-image.tsx     # Generated social-preview image (next/og)
    icon.tsx                # Generated branded favicon (next/og)
    sitemap.ts / robots.ts  # SEO metadata routes
  components/
    header.tsx              # sticky nav with mobile menu
    footer.tsx               # product/legal links + contact
    logo.tsx                 # shared wordmark + icon mark
    scroll-pillar.tsx         # decorative scroll-progress "pillar" (see below)
    hero.tsx                   # homepage hero, includes the dashboard mockup
    feature-highlights.tsx      # condensed feature grid (Home)
    feature-detail.tsx           # full grouped feature list (Features page)
    feature-showcase.tsx          # "See Pyllar in action" mockup showcase (Features page)
    mockups/                        # illustrative, code-drawn UI mockups (see below)
    security-note.tsx          # "built with security & privacy in mind" section
    testimonial.tsx             # fabricated, clearly-labeled illustrative testimonial
    cta-band.tsx                 # reusable bottom-of-page CTA
    demo-section.tsx              # demo page content wrapper
    demo-form.tsx                  # client component, submits to /api/lead
    placeholder-banner.tsx          # "placeholder — replace before launch" banner
  lib/
    features.ts                     # shared feature copy/data used across pages
```

## Illustrative UI mockups

The real Pyllar product UI lives in a separate, still-in-progress repo, so
there are no real screenshots to use here yet. Instead, `src/components/
mockups/` contains small, code-drawn "mockups" (skeleton lines, chips, bar
charts, a calendar grid) built from plain divs/Tailwind — no external images
or design tool needed:

- `dashboard-mockup.tsx` — the homepage hero image (an "overview dashboard"
  with stat tiles, a bar chart, and a schedule list).
- `feature-mockups.tsx` — four flagship-feature mockups (youth profile,
  incidents list, scheduling calendar, analytics charts) used in the "See
  Pyllar in action" section on `/features`.
- `mockup-frame.tsx` — the shared "browser chrome" wrapper and a visible
  `<figcaption>` on every mockup reading "Illustrative concept — not an
  actual product screenshot" (the internals are `aria-hidden`, since they're
  decorative, not informational — the same pattern used for the homepage
  testimonial's "illustrative example" label).

Replace these with real product screenshots once the actual app UI is far
enough along to show publicly.

## Brand motif: the scroll "pillar"

A subtle, decorative vertical bar is fixed to the left edge of the viewport
(desktop/tablet only — hidden below the `md` breakpoint) and visually "grows"
from the bottom as the reader scrolls down the page, echoing the product name
("Pyllar" → pillar). It complements the same vertical-bars motif used in the
logo mark.

Implementation notes (`src/components/scroll-pillar.tsx`):

- Purely decorative: `aria-hidden` + `pointer-events-none`, so it never
  conveys unique information and can never intercept clicks or keyboard
  focus.
- Scroll position is read via a single passive `scroll` listener,
  rAF-throttled to at most one update per animation frame, writing only a CSS
  custom property that drives a compositor-only `transform: scaleY()` — no
  layout thrash, no heavy libraries.
- Hidden entirely on mobile widths, so there's zero scroll-handler cost on
  small/low-powered devices.
- Respects `prefers-reduced-motion: reduce` (see `globals.css`): the easing
  transition and glow are removed, leaving a direct, non-animated reflection
  of scroll position rather than a self-playing animation.

## The "Request a Demo" form

This is a **lead-capture form, not self-serve sign-up**. Submissions go to
`POST /api/lead`, which:

1. Validates the payload (name, email, organization required; phone and a
   free-text "anything we should know?" note are optional).
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

Messaging, feature descriptions, and SEO copy build on
`SALES_SITE_REFINEMENT_PROMPTS.md` from the main Pyllar app repo (elevator
pitch, hero copy, feature blurbs, and launch checklist), expanded with more
substantive per-feature copy for the dedicated `/features` and `/pricing`
pages.

## Deploying (Vercel or any Next.js host)

This app has no special server requirements beyond standard Next.js App
Router support, and includes a minimal `vercel.json` pinning the framework
preset. To deploy to Vercel:

1. Push this repo to GitHub (already done for `camvonn/pyllar-site`).
2. In the [Vercel dashboard](https://vercel.com/new), import the
   `camvonn/pyllar-site` repository. Vercel will auto-detect Next.js — no
   build command overrides are needed.
3. Set environment variables in the Vercel project settings if you want lead
   notifications forwarded somewhere:
   - `LEAD_NOTIFY_WEBHOOK_URL` (optional)
4. Add the real production domain in the Vercel project's Domains settings
   once one is registered, and update `metadataBase` in
   `src/app/layout.tsx` (and `BASE_URL` in `src/app/sitemap.ts` /
   `src/app/robots.ts`) to match.
5. Deploy. Every push to `main` will auto-deploy if you enable Vercel's Git
   integration.

For any other Next.js-compatible host (Netlify, Render, self-hosted Node,
etc.), the standard `npm run build` / `npm run start` scripts apply — no
Pyllar-specific configuration is required.

**Note:** this repo has not been deployed anywhere yet. No hosting account,
domain, or DNS has been set up as part of this work.

## Notes / things to revisit before a real public launch

- **Domain:** copy and metadata currently assume `https://www.pyllar.com` as
  a placeholder — confirm the real domain and update `metadataBase` in
  `src/app/layout.tsx`, plus `BASE_URL` in `src/app/sitemap.ts` and
  `src/app/robots.ts`.
- **Contact email:** `hello@pyllar.com` (footer, demo page, legal pages) is a
  placeholder — update once a real mailbox exists.
- **Lead notifications:** wire `LEAD_NOTIFY_WEBHOOK_URL` (or replace the stub
  entirely) with a real CRM/email integration.
- **Testimonial:** the testimonial on the homepage is fabricated and clearly
  labeled as an illustrative example. Replace with a real, permissioned
  quote once available.
- **Legal pages:** `/privacy` and `/terms` are clearly labeled placeholders,
  not reviewed by counsel, and are excluded from search indexing. Replace
  with real, legally reviewed content before public launch.
- **Compliance claims:** no HIPAA/CARF certification claims are made
  anywhere on the site (CARF-*oriented* reporting only, and the security note
  explicitly states no certifications are currently held) — keep it that way
  unless/until such claims are actually true and legally reviewed.
- **Social preview image:** `opengraph-image.tsx` generates a simple,
  code-drawn banner via `next/og`. Replace with real brand assets if/when a
  design system exists.
- **UI mockups:** the dashboard/feature mockups on the homepage and
  `/features` are illustrative, code-drawn approximations, clearly captioned
  as such — not real product screenshots. Replace with real screenshots once
  the actual app UI is ready to show publicly.
- **Example pricing:** the $299/$199 per-facility numbers on `/pricing` are
  illustrative example/starting prices to demonstrate the pricing model
  (per-facility, volume discount on additional facilities), not confirmed
  real pricing. Confirm actual numbers before launch.
- **Hosting/deployment:** not set up yet. This repo is ready to deploy to any
  Next.js-compatible host (e.g. Vercel) whenever that decision is made.
