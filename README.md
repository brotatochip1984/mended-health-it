# Mended Health IT — Independent Healthcare AI Advisory & Brokerage

A Next.js 16 (App Router) marketing site and product for an independent,
vendor-neutral Healthcare AI Advisory practice. It includes a scored AI Readiness
Assessment, a vendor landscape, a department-level opportunity matrix, advisory
packages and pricing, a trusted-source research library, and a readiness-call
contact flow.

## Tech stack

- Next.js 16 (App Router) + React 19
- TypeScript
- Tailwind CSS v4
- JSON data files in `data/` drive the assessment, vendors, matrix, pricing, and research
- Supabase (contact submissions storage) and Resend (email notifications) for the contact form

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

```bash
npm run build   # production build
npm run lint    # eslint
```

## Environment variables

The marketing pages and the assessment work with no environment variables. The
contact form's backend (storage + email) needs the values in `.env.example`:

- `NEXT_PUBLIC_SUPABASE_URL`, `SUPABASE_SERVICE_ROLE_KEY` — store submissions
- `RESEND_API_KEY` — send the notification email

Copy `.env.example` to `.env.local` and fill in values to enable the contact API.

## Project structure

```
app/
  page.tsx           Home: positioning, what we solve, why now, services, differentiators
  assessment/        AI Readiness Assessment (interactive, scored, exportable)
  vendors/           Healthcare AI vendor landscape (category map)
  opportunities/     Department-by-department AI Opportunity Matrix
  pricing/           Advisory packages, pricing, and vendor partnership model
  research/          Trusted-source research library
  about/             About the practice and founder
  contact/           Schedule a Healthcare AI Readiness Call
  api/contact/       Contact submission endpoint (Supabase + Resend)
components/          Reusable UI (Navbar, Footer, Hero, AssessmentClient, ContactForm, ...)
data/               JSON content (assessment schema, vendors, matrix, pricing, research, content calendar)
lib/
  assessment.ts      Assessment schema typing + helpers
  scoring.ts         Pure scoring engine: score, tier, top risks, next steps, suggested package
docs/
  research_sources.md  Source notes and citation discipline behind public claims
```

## The AI Readiness Assessment

- Ten weighted categories, each scored 1–5 per question.
- `lib/scoring.ts` normalizes responses to a 0–100 readiness score, resolves a
  tier, surfaces the highest-risk categories, and recommends next steps and an
  advisory package.
- Responses persist to `localStorage` and can be exported as JSON or CSV.
- It is a directional self-assessment, not legal, clinical, or compliance advice.

## Content and trust rules

- Vendor names are representative category examples, not endorsements, and
  require independent due diligence.
- Every public statistic traces to a source in `docs/research_sources.md`.
- No fabricated logos, testimonials, partnerships, or statistics.
