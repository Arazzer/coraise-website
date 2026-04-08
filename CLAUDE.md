# CLAUDE.md - CoRaise Marketing Website

## Project Overview

Marketing website for CoRaise (www.coraise.com.au) - an Australian co-parenting communication platform. This is a standalone Next.js 15 site, separate from the app at app.coraise.com.au.

**GitHub:** Arazzer/coraise-website
**Live:** www.coraise.com.au
**Vercel:** coraise-website project, syd1 region

## Tech Stack

- Next.js 15 (App Router, SSG + ISR)
- Tailwind v4 with CoRaise design tokens
- MDX blog via next-mdx-remote
- Vercel Analytics + Speed Insights (no Google Analytics)
- Deployed to Vercel syd1 region
- Resend for contact form emails (when API key is configured)
- Cloudflare Turnstile for spam protection (when keys are configured)

## Commands

- `pnpm dev` - Start dev server
- `pnpm build` - Production build
- `pnpm lint` - ESLint
- `npx vercel --yes --prod` - Deploy to production (run from this repo root)

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
- Logo uses teal (#3d8a83) + coral (#E8896A). The coral is intentionally different from the UI indigo (#6560a8). Both are correct for their contexts.

### UX
- 16px minimum body text. 48x48dp minimum touch targets.
- Flesch-Kincaid Grade 8 reading level for all copy.
- No red for primary actions. Red reserved for genuine errors only.
- Desaturated teal palette. "Calm Over Clever" design philosophy.

### SEO/AEO/GEO
- Every page needs: unique title, meta description, canonical URL, OG image, JSON-LD structured data.
- Use `createMetadata()` helper from `src/lib/metadata.ts`. Do NOT append `| CoRaise` to titles - the root layout template handles the brand suffix automatically.
- FAQPage schema on every page with FAQ sections.
- Australian English signals: hreflang="en-AU", .com.au domain.
- Primary domain is `www.coraise.com.au` (non-www redirects to www via vercel.json).
- SITE_URL constant must always use `https://www.coraise.com.au`.
- H1 tags must contain target keywords, not just brand taglines.
- AI crawlers (GPTBot, ClaudeBot, PerplexityBot, Google-Extended) are explicitly allowed in robots.ts.
- Blog post frontmatter should include `updated` field whenever content is revised.

## Architecture

- `src/app/` - Next.js pages (all SSG/ISR, no SSR)
- `src/components/` - UI components (layout/, ui/, seo/, blog/, theme/)
- `src/content/blog/` - MDX blog posts with YAML frontmatter
- `src/content/comparisons/` - Competitor data JSON files
- `src/lib/` - Utilities (metadata, structured-data, mdx, constants, utils, competitors, contact)
- `public/images/` - Logo assets (logo-text.png, logo-icon.png, logo-full.png), OG image, blog images

## Pages (26 total)

Home, Features, Pricing, About, FAQ, Contact, Privacy, Terms, Safety, Court Readiness, Professionals, Compare (hub), Compare/OurFamilyWizard, Compare/TalkingParents, Compare/AppClose, Compare/2Houses, Blog (index), Blog posts (3), 404, Error, robots.txt, sitemap.xml.

## Structured Data

- Organization schema (global, in layout.tsx)
- WebSite schema (homepage)
- SoftwareApplication schema (homepage, features, pricing, compare)
- FAQPage schema (homepage, pricing, features, compare pages, safety, court-readiness, faq)
- Article schema (blog posts)
- BreadcrumbList schema (all subpages)
- Blog schema (/blog index)

## Logo Assets

Three PNG variants in `public/images/`:
- `logo-text.png` (1440x279) - Horizontal wordmark. "Co" teal, "Raise" coral. Used in header via next/image at 165x32px.
- `logo-icon.png` (1440x914) - Arch icon with three circles. Used for favicons.
- `logo-full.png` (1440x1313) - Icon + wordmark stacked. Has dark background baked in - only use on dark backgrounds.

Favicon set generated from icon: `favicon.ico`, `favicon-32x32.png`, `apple-touch-icon.png`, `icon-192.png`, `icon-512.png`.

Footer uses white styled text (not logo image) - this is intentional for consistency in the utility/navigation zone.

## Design Tokens

Colours defined in `globals.css` @theme inline block. Source of truth: `packages/ui/src/tokens/colours.ts` in the app monorepo.

- Primary teal: #3d8a83 (light), #2BC4C6 (dark)
- Secondary indigo: #6560a8 (light), #8B8FD4 (dark)
- System fonts only (no custom fonts)
- Dark mode via CSS custom properties + inline head script (no next-themes)

## Gotchas

- `createMetadata()` returns just the title string for non-homepage pages. The root layout template `%s | CoRaise` appends the brand suffix. Do NOT add `| CoRaise` in `createMetadata()` or you get double branding.
- `logo-full.png` has a black background baked in (not transparent). Do not use on light backgrounds.
- The `SITE_URL` constant includes `www.` prefix. Non-www redirects to www via vercel.json.
- Blog images referenced in MDX frontmatter must exist in `public/images/blog/` or the OG image will 404. If no image exists, omit the `image` field and the fallback `og-default.jpg` will be used.
- `pnpm approve-builds` is required after install for `sharp` and `unrs-resolver`.

## Conventions

- Git identity: dev@mydigitalgroup.com.au / MyDigital Group
- No semicolons, single quotes, trailing commas (see .prettierrc)
- Australian date format: DD MMM YYYY. 12-hour time. AUD currency.

## Reference Documents (in the app monorepo at c:\Users\matth\Jointly)

- Docs/BRAND-BLUEPRINT.md - Brand voice, messaging, visual identity
- Docs/COMPETITIVE-INTELLIGENCE.md - Competitor data for comparison pages
- Docs/UX-ARCHITECTURE.md - Design tokens, dark mode spec
- Docs/PRODUCT REQUIREMENTS DOCUMENT.md - Pricing, features, market data
