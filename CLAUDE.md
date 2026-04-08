# CLAUDE.md - CoRaise Marketing Website

## Project Overview

Marketing website for CoRaise (coraise.com.au) - an Australian co-parenting communication platform. This is a standalone Next.js 15 site, separate from the app at app.coraise.com.au.

## Tech Stack

- Next.js 15 (App Router, SSG + ISR)
- Tailwind v4 with CoRaise design tokens
- MDX blog via next-mdx-remote
- Vercel Analytics + Speed Insights (no Google Analytics)
- Deployed to Vercel syd1 region

## Commands

- `pnpm dev` - Start dev server
- `pnpm build` - Production build
- `pnpm lint` - ESLint
- `npx vercel --yes --prod` - Deploy to production

## Critical Rules

### Data Sovereignty
- ALL hosting in Australia (Vercel syd1). No exceptions.
- NO Google Analytics or services that transmit user data outside Australia.
- Vercel Analytics is permitted.

### Branding
- NEVER mention GoHighLevel, GHL, Vercel, or internal tooling in client-facing content.
- Brand everything as MyDigital Group in legal contexts only.
- Use Australian English: colour, organised, realising, defence. Use hyphens not em dashes.
- Terminology: "co-parent" not "ex", "time with children" not "custody/access".

### UX
- 16px minimum body text. 48x48dp minimum touch targets.
- Flesch-Kincaid Grade 8 reading level for all copy.
- No red for primary actions. Red reserved for genuine errors only.
- Desaturated teal palette. "Calm Over Clever" design philosophy.

### SEO
- Every page needs: unique title, meta description, canonical URL, OG image, JSON-LD structured data.
- Use createMetadata() helper from src/lib/metadata.ts.
- FAQPage schema on every page with FAQ sections.
- Australian English signals: hreflang="en-AU", .com.au domain.

## Architecture

- `src/app/` - Next.js pages (all SSG/ISR, no SSR)
- `src/components/` - UI components (layout/, ui/, seo/, blog/, theme/)
- `src/content/blog/` - MDX blog posts
- `src/content/comparisons/` - Competitor data JSON files
- `src/lib/` - Utilities (metadata, structured-data, mdx, constants, utils, competitors, contact)

## Design Tokens

Colours defined in globals.css @theme inline block. Source of truth: packages/ui/src/tokens/colours.ts in the app monorepo.

- Primary teal: #3d8a83 (light), #2BC4C6 (dark)
- Secondary indigo: #6560a8 (light), #8B8FD4 (dark)
- System fonts only (no custom fonts)

## Conventions

- Git identity: dev@mydigitalgroup.com.au / MyDigital Group
- No semicolons, single quotes, trailing commas (see .prettierrc)
- Australian date format: DD MMM YYYY. 12-hour time. AUD currency.

## Reference Documents (in the app monorepo at c:\Users\matth\Jointly)

- Docs/BRAND-BLUEPRINT.md - Brand voice, messaging, visual identity
- Docs/COMPETITIVE-INTELLIGENCE.md - Competitor data for comparison pages
- Docs/UX-ARCHITECTURE.md - Design tokens, dark mode spec
- Docs/PRODUCT REQUIREMENTS DOCUMENT.md - Pricing, features, market data
