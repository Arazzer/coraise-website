# CLAUDE.md

This file provides guidance to Claude Code when working with this project.

## Project Overview

Marketing website for CoRaise (www.coraise.com.au) - an Australian co-parenting communication platform for separated families. Standalone Next.js 15 site, separate from the app at app.coraise.com.au. Targets "co-parenting app Australia" as primary keyword.

**GitHub:** Arazzer/coraise-website
**Live:** www.coraise.com.au
**App:** app.coraise.com.au (separate repo at `c:\Users\matth\Jointly`)

## Commands

- `pnpm dev` - Start dev server (Turbopack)
- `pnpm build` - Production build
- `pnpm lint` - ESLint
- `npx vercel --yes --prod` - Deploy to production (run from this repo root, NOT from apps/web)
- `pnpm approve-builds` - Required after fresh install for `sharp` and `unrs-resolver`

## Critical Rules

### Data Sovereignty
- ALL hosting in Australia (Vercel syd1). No exceptions.
- NO Google Analytics or services that transmit user data outside Australia. Vercel Analytics is permitted.

### Branding
- NEVER mention GoHighLevel, GHL, Vercel, or internal tooling in client-facing content.
- Use Australian English: colour, organised, realising, defence. Hyphens not em dashes.
- Terminology: "co-parent" not "ex", "time with children" not "custody/access", "parenting time" not "custody".
- Logo uses teal (#3d8a83) + coral (#E8896A). The coral is intentionally different from the UI indigo (#6560a8). Both are correct for their contexts - do not "fix" the mismatch.

### UX ("Calm Over Clever")
- 16px minimum body text. 48x48dp minimum touch targets.
- Flesch-Kincaid Grade 8 reading level for all copy.
- No red for primary actions. Red reserved for genuine errors only.
- No bouncing, parallax, spring physics, or attention-grabbing pulse animations.
- All motion MUST respect `prefers-reduced-motion` (wave SVGs and glow blobs hidden).
- Safety page: no photographs of people, no red anywhere, matter-of-fact empowering tone.

### SEO/AEO/GEO
- Every page needs: unique title, meta description, canonical URL, OG image, JSON-LD structured data.
- Use `createMetadata()` from `src/lib/metadata.ts`. Do NOT append `| CoRaise` to titles - the root layout template `%s | CoRaise` handles the suffix. Adding it in createMetadata() causes double branding.
- H1 tags MUST contain target keywords, not just brand taglines.
- FAQPage schema on every page that has FAQ sections.
- Primary domain is `www.coraise.com.au`. Non-www 301-redirects to www via vercel.json.
- `SITE_URL` constant MUST use `https://www.coraise.com.au` (with www).
- AI crawlers (GPTBot, ClaudeBot, PerplexityBot, Google-Extended) explicitly allowed in robots.ts.
- Blog post frontmatter: include `updated` field whenever content is revised.

## Architecture

```
src/
  app/             # Next.js pages (all SSG/ISR, no SSR)
  components/
    layout/        # Header, Footer (header uses next/image for logo)
    ui/            # Button, Card (with elevated prop), Accordion, ContactForm
    seo/           # JsonLd component
    theme/         # ThemeToggle, ThemeScript (inline head script, no next-themes)
  content/
    blog/          # MDX posts with YAML frontmatter
    comparisons/   # Competitor data JSON files
  lib/
    metadata.ts    # createMetadata() helper
    structured-data.ts  # JSON-LD schema builders (Organization, SoftwareApplication, FAQ, Article, Breadcrumb, WebSite)
    mdx.ts         # getAllPosts(), getPostBySlug()
    competitors.ts # getCompetitorBySlug(), getAllCompetitors()
    constants.ts   # SITE_URL, APP_URL, COMPANY, PRICING, SAFETY_NUMBERS, NAV_LINKS, FOOTER_LINKS
    contact.ts     # Server Action for contact form
    utils.ts       # cn(), formatDate()
public/images/     # Logo PNGs, OG image (og-default.jpg), blog images
```

## Design System (globals.css)

### Colours (@theme inline)
- Primary teal: primary-50 through primary-900 (#3d8a83 is 500)
- Secondary indigo: secondary-50 through secondary-900 (#6560a8 is 500)
- Neutral warm grey: neutral-50 through neutral-900
- Semantic: success (#2d8659), warning (#c27a1a), error (#c4532d), info (#2b6cb0)
- Dark mode: CSS custom properties (--bg-primary, --text-primary, etc.) toggled via `.dark` class

### Visual Utilities (added in polish pass)
- `.hero-glow` - 600px blurred radial circle for depth behind hero sections
- `.section-wave-top` / `.section-wave-bottom` - organic SVG curve dividers between sections
- `.bg-dot-pattern` - subtle dot texture background
- `.featured-card-border` - teal-to-indigo gradient border using mask-composite
- `.stat-number` - gradient text fill for stat counters
- `.safety-feature-card` - hover border + shadow for safety feature cards
- `.trust-badge` - hover background transition for trust indicators
- `.bg-warm-gradient` / `.bg-teal-soft` - multi-colour gradient section backgrounds
- `.card-hover-shine` - subtle light sweep on card hover

### Component Patterns
- **Button**: has inner light highlight (inset shadow), teal hover shadow, `active:translate-y-[0.5px]` press feedback. Uses `transition-all duration-150`.
- **Card**: `elevated` prop for extra shadow depth. All cards have `hover:-translate-y-0.5` lift effect.
- **Accordion**: grid-rows trick for smooth height animation.
- **Section pattern**: eyebrow label (uppercase, tracking-widest, primary colour) + H2 + subtitle + content. Alternating bg colours with wave dividers.

## Logo Assets

Three PNG variants in `public/images/`:
- `logo-text.png` (1440x279) - Horizontal wordmark. Used in header via next/image at 165x32px with `priority`.
- `logo-icon.png` (1440x914) - Arch icon. Used for favicons.
- `logo-full.png` (1440x1313) - Icon + wordmark stacked. Has dark background baked in - ONLY use on dark backgrounds.

Favicon set: `favicon.ico`, `favicon-32x32.png`, `apple-touch-icon.png`, `icon-192.png`, `icon-512.png`.
Footer uses white styled text (not logo image) - intentional.

## Structured Data

Every page should have relevant JSON-LD. Current schema types:
- Organization (global, layout.tsx)
- WebSite (homepage)
- SoftwareApplication (homepage, features, pricing, compare)
- FAQPage (homepage, pricing, features, compare pages, safety, court-readiness, faq)
- Article (blog posts)
- BreadcrumbList (all subpages)
- Blog (blog index)

## Gotchas

- `createMetadata()` returns just the page title (not `Title | CoRaise`). The layout template appends the brand. Adding `| CoRaise` in createMetadata() produces `Title | CoRaise | CoRaise`.
- `logo-full.png` has a black background baked in (not transparent). Do not use on light backgrounds.
- Blog images in MDX frontmatter must exist in `public/images/blog/` or OG image will 404. Omit the `image` field to use the fallback `og-default.jpg`.
- `structured-data.ts` references `logo-full.png` (not `.webp`). If you add WebP logos, update the schema references.
- The safety page is DV-sensitive. No photographs, no red, no aggressive animations. Emergency numbers (000, 1800RESPECT) must be above the fold with `tel:` links.
- Wave dividers use `position: absolute` with `bottom: -1px` / `top: -1px` to prevent 1px gap. The parent section needs `position: relative` and `overflow: hidden`.
- Dark mode is via inline `<script>` in `<head>` (ThemeScript component), NOT next-themes. This prevents flash of wrong theme on SSG pages.

## Conventions

- Git identity: `dev@mydigitalgroup.com.au` / `MyDigital Group`
- No semicolons, single quotes, trailing commas (see .prettierrc)
- Australian date format: DD MMM YYYY. 12-hour time. AUD currency.
- Phone format: 0412 345 678 or (02) 1234 5678

## Reference Documents (in the app monorepo at c:\Users\matth\Jointly)

- `Docs/BRAND-BLUEPRINT.md` - Brand voice, messaging, visual identity, photography direction
- `Docs/COMPETITIVE-INTELLIGENCE.md` - Competitor data for comparison pages
- `Docs/UX-ARCHITECTURE.md` - Design tokens, dark mode spec, typography scale
- `Docs/PRODUCT REQUIREMENTS DOCUMENT.md` - Pricing, features, market data
