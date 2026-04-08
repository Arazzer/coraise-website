import {
  MessageCircle,
  Calendar,
  Receipt,
  MapPin,
  Shield,
  Lock,
  Heart,
  DollarSign,
  Check,
  AlertTriangle,
  ArrowRight,
} from 'lucide-react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Accordion } from '@/components/ui/accordion'
import { JsonLd } from '@/components/seo/json-ld'
import { createMetadata } from '@/lib/metadata'
import { softwareApplicationSchema, faqSchema, websiteSchema } from '@/lib/structured-data'
import { APP_URL, COMPANY, PRICING } from '@/lib/constants'

/* ------------------------------------------------------------------ */
/*  Metadata                                                          */
/* ------------------------------------------------------------------ */

export const metadata = createMetadata({
  title: COMPANY.tagline,
  description: COMPANY.description,
  path: '/',
})

/* ------------------------------------------------------------------ */
/*  Data                                                              */
/* ------------------------------------------------------------------ */

const FAQ_ITEMS = [
  {
    question: 'What is CoRaise?',
    answer:
      'CoRaise is an Australian co-parenting communication platform that helps separated families communicate clearly, share schedules, track expenses, and maintain court-ready records. Everything is built and hosted in Sydney for Australian families.',
  },
  {
    question: 'How much does CoRaise cost?',
    answer:
      'CoRaise offers a Free plan to get started, a Family plan at $9.99 per month, and a Premium plan at $14.99 per month. One subscription covers both parents - you can even split the cost so each parent pays half automatically.',
  },
  {
    question: 'Is CoRaise available in Australia?',
    answer:
      'Yes. CoRaise is built in Australia, for Australian families. All data is stored in Sydney (AWS ap-southeast-2) and never leaves the country. School terms and public holidays for every state and territory are pre-loaded.',
  },
  {
    question: 'Where is my data stored?',
    answer:
      'All your data is stored exclusively in Sydney, Australia. It never goes offshore. This is important for legal compliance and privacy under Australian law.',
  },
  {
    question: 'Can both parents use CoRaise with one subscription?',
    answer:
      'Yes. When one parent subscribes, their co-parent gets full access at no extra cost. You can also choose split billing, where each parent pays half the subscription fee directly.',
  },
  {
    question: 'Are CoRaise records court-admissible?',
    answer:
      'CoRaise is designed with Evidence Act 1995 compliance in mind. Every message is time-stamped, given a SHA-256 content hash, and stored in append-only records that cannot be edited or deleted. Court-ready PDF exports include integrity verification.',
  },
  {
    question: 'Does CoRaise have safety features for domestic violence?',
    answer:
      'Yes. CoRaise includes an emergency exit button that instantly navigates away from the app, harassment detection that flags concerning message patterns, the ability to block or restrict a co-parent, and message batching to reduce notification pressure.',
  },
  {
    question: 'How is CoRaise different from OurFamilyWizard?',
    answer:
      'CoRaise is built specifically for Australian families, with local school terms, public holidays, and data stored in Sydney. It costs significantly less - from $9.99 per month compared to $330-$900 per year - and one subscription covers both parents with optional split billing.',
  },
]

/* ------------------------------------------------------------------ */
/*  Page                                                              */
/* ------------------------------------------------------------------ */

export default function HomePage() {
  return (
    <>
      {/* Structured data */}
      <JsonLd data={websiteSchema()} />
      <JsonLd data={softwareApplicationSchema()} />
      <JsonLd data={faqSchema(FAQ_ITEMS)} />

      {/* 1. Hero */}
      <section className="relative overflow-hidden bg-[var(--bg-secondary)]">
        {/* Background glow elements */}
        <div
          className="hero-glow absolute -top-48 -right-48 bg-primary-300"
          aria-hidden="true"
        />
        <div
          className="hero-glow absolute -bottom-32 -left-32 bg-secondary-300"
          aria-hidden="true"
        />

        <div className="relative mx-auto max-w-[1200px] px-4 py-20 sm:px-6 md:py-28 lg:px-8 lg:py-32">
          <div className="grid items-center gap-12 md:grid-cols-5">
            {/* Copy - 60 % */}
            <div className="md:col-span-3">
              <p className="text-sm font-semibold uppercase tracking-widest text-primary-500 dark:text-[#2BC4C6]">
                Co-parenting made calmer
              </p>
              <h1 className="mt-3 text-4xl font-bold tracking-tight text-[var(--text-primary)] sm:text-5xl md:text-[3.5rem] md:leading-[1.1]">
                The co-parenting app built for Australian families.
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-[var(--text-secondary)] md:text-xl md:leading-relaxed">
                Secure messaging, shared calendars with school terms,
                expense tracking, and court-ready records. One subscription. Both
                parents get full access.
              </p>
              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <Button variant="primary" size="lg" href={`${APP_URL}/register`}>
                  Get Started Free
                </Button>
                <Button variant="secondary" size="lg" href="#features">
                  See How It Works
                </Button>
              </div>
              <p className="mt-4 text-sm text-[var(--text-tertiary)]">
                Free plan available. No credit card required.
              </p>
            </div>

            {/* Decorative - 40 % */}
            <div
              className="hidden items-center justify-center md:col-span-2 md:flex"
              aria-hidden="true"
            >
              <div className="relative h-80 w-80">
                {/* Teal circle - larger, softer */}
                <div className="absolute left-2 top-4 h-52 w-52 rounded-full bg-primary-200/50 dark:bg-primary-600/20" />
                {/* Indigo circle */}
                <div className="absolute bottom-4 right-2 h-52 w-52 rounded-full bg-secondary-200/50 dark:bg-secondary-600/20" />
                {/* Centre overlap glow */}
                <div className="absolute left-1/2 top-1/2 h-28 w-28 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary-300/40 blur-xl dark:bg-[#2BC4C6]/15" />
                {/* Small accent dot */}
                <div className="absolute right-12 top-8 h-6 w-6 rounded-full bg-primary-400/30 dark:bg-[#2BC4C6]/20" />
                <div className="absolute left-12 bottom-8 h-4 w-4 rounded-full bg-secondary-400/30 dark:bg-secondary-400/15" />
              </div>
            </div>
          </div>
        </div>

        {/* Wave divider to next section */}
        <div className="section-wave-bottom" aria-hidden="true">
          <svg
            viewBox="0 0 1440 64"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            className="h-full w-full"
          >
            <path
              d="M0 32C240 56 480 64 720 48C960 32 1200 8 1440 16V64H0V32Z"
              fill="var(--bg-primary)"
            />
          </svg>
        </div>
      </section>

      {/* 2. Trust Bar */}
      <section className="border-b border-[var(--border-default)] bg-[var(--bg-primary)]">
        <div className="mx-auto max-w-[1200px] px-4 py-10 sm:px-6 lg:px-8">
          <ul className="grid grid-cols-2 gap-4 text-center sm:grid-cols-3 md:grid-cols-5 md:gap-6">
            {[
              { icon: MapPin, text: 'Built and hosted in Sydney' },
              { icon: Shield, text: 'Evidence Act 1995 compliant' },
              { icon: Lock, text: 'SHA-256 tamper-proof records' },
              { icon: Heart, text: 'DV safety features' },
              { icon: DollarSign, text: 'One subscription, both parents' },
            ].map(({ icon: Icon, text }) => (
              <li
                key={text}
                className="trust-badge"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-50 dark:bg-primary-900/30">
                  <Icon className="h-5 w-5 text-primary-500 dark:text-[#2BC4C6]" />
                </div>
                <span className="text-xs font-medium text-[var(--text-secondary)]">
                  {text}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 3. Feature Highlights */}
      <section id="features" className="relative bg-[var(--bg-primary)]">
        <div className="mx-auto max-w-[1200px] px-4 py-20 sm:px-6 md:py-24 lg:px-8 lg:py-28">
          <div className="text-center max-w-2xl mx-auto">
            <p className="text-xs font-semibold uppercase tracking-widest text-primary-500 dark:text-[#2BC4C6]">
              Features
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-[var(--text-primary)] md:text-4xl">
              Everything in one place.
            </h2>
            <p className="mt-4 text-lg text-[var(--text-secondary)]">
              Communication, schedules, and finances - all designed to reduce conflict.
            </p>
          </div>

          <div className="mt-14 grid gap-8 md:grid-cols-3">
            {[
              {
                icon: MessageCircle,
                title: 'Structured communication.',
                body: 'Messages are time-stamped and cannot be edited or deleted. A 10-second preview and 30-second cooldown help everyone communicate more carefully.',
                gradient: 'from-primary-50 to-primary-100/50 dark:from-primary-900/20 dark:to-primary-900/5',
              },
              {
                icon: Calendar,
                title: 'Shared schedules.',
                body: 'Australian school terms and state-specific public holidays pre-loaded. Propose, approve, or decline schedule changes with a clear record.',
                gradient: 'from-secondary-50 to-secondary-100/50 dark:from-secondary-900/20 dark:to-secondary-900/5',
              },
              {
                icon: Receipt,
                title: 'Financial transparency.',
                body: 'Log shared expenses, photograph receipts, and track who owes what with an automatic running balance.',
                gradient: 'from-primary-50 to-secondary-50/50 dark:from-primary-900/15 dark:to-secondary-900/10',
              },
            ].map(({ icon: Icon, title, body, gradient }) => (
              <Link key={title} href="/features" className="group">
                <Card className="h-full">
                  <div className={`inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${gradient}`}>
                    <Icon className="h-6 w-6 text-primary-500 dark:text-[#2BC4C6]" />
                  </div>
                  <h3 className="mt-5 text-lg font-semibold text-[var(--text-primary)] group-hover:text-primary-600 dark:group-hover:text-[#2BC4C6] transition-colors">
                    {title}
                  </h3>
                  <p className="mt-2 leading-relaxed text-[var(--text-secondary)]">{body}</p>
                  <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary-500 dark:text-[#2BC4C6] opacity-0 group-hover:opacity-100 transition-opacity">
                    Learn more
                    <ArrowRight className="h-4 w-4" />
                  </span>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Australian Differentiator */}
      <section className="relative bg-teal-soft section-wave">
        {/* Wave top */}
        <div className="section-wave-top" aria-hidden="true">
          <svg
            viewBox="0 0 1440 64"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            className="h-full w-full"
          >
            <path
              d="M0 48C360 16 720 0 1080 24C1260 36 1380 52 1440 48V0H0V48Z"
              fill="var(--bg-primary)"
            />
          </svg>
        </div>

        <div className="mx-auto max-w-[1200px] px-4 py-20 sm:px-6 md:py-28 lg:px-8 lg:py-32">
          <div className="grid gap-12 md:grid-cols-2 md:items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-primary-500 dark:text-[#2BC4C6]">
                100% Australian
              </p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-[var(--text-primary)] md:text-4xl">
                Built here. Hosted here. For families here.
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-[var(--text-secondary)]">
                Your family&apos;s data stays in Australia. Always.
              </p>
            </div>

            <ul className="space-y-5">
              {[
                'School terms for every Australian state and territory',
                'State-specific public holidays (Melbourne Cup, Royal Queensland Show, and more)',
                'All data stored in Sydney, Australia - never offshore',
                'Evidence Act 1995 compliant court exports',
              ].map((item) => (
                <li key={item} className="flex items-start gap-4">
                  <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary-500/10 dark:bg-[#2BC4C6]/10">
                    <Check className="h-4 w-4 text-primary-500 dark:text-[#2BC4C6]" />
                  </div>
                  <span className="text-[var(--text-secondary)] leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Wave bottom */}
        <div className="section-wave-bottom" aria-hidden="true">
          <svg
            viewBox="0 0 1440 64"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            className="h-full w-full"
          >
            <path
              d="M0 16C240 40 480 56 720 40C960 24 1200 0 1440 8V64H0V16Z"
              fill="var(--bg-primary)"
            />
          </svg>
        </div>
      </section>

      {/* 5. Pricing Teaser */}
      <section className="bg-[var(--bg-primary)]">
        <div className="mx-auto max-w-[1200px] px-4 py-20 sm:px-6 md:py-24 lg:px-8 lg:py-28">
          <div className="text-center max-w-2xl mx-auto">
            <p className="text-xs font-semibold uppercase tracking-widest text-primary-500 dark:text-[#2BC4C6]">
              Pricing
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-[var(--text-primary)] md:text-4xl">
              One subscription. Both parents.
            </h2>
            <p className="mt-4 text-[var(--text-secondary)]">
              No per-parent pricing. No hidden fees.
            </p>
          </div>

          <div className="mt-14 grid gap-8 md:grid-cols-3">
            {/* Free */}
            <Card className="text-center">
              <p className="text-sm font-semibold uppercase tracking-wider text-[var(--text-secondary)]">
                {PRICING.free.name}
              </p>
              <p className="mt-4 text-4xl font-bold text-[var(--text-primary)]">
                $0
              </p>
              <p className="mt-2 text-sm text-[var(--text-secondary)]">
                Get started with basic features
              </p>
            </Card>

            {/* Family - highlighted */}
            <Card highlight elevated className="text-center md:-translate-y-2">
              <div className="mb-4 inline-flex rounded-full bg-primary-500/10 px-3 py-1 text-xs font-semibold text-primary-600 dark:bg-[#2BC4C6]/10 dark:text-[#2BC4C6]">
                Most popular
              </div>
              <p className="text-sm font-semibold uppercase tracking-wider text-primary-500 dark:text-[#2BC4C6]">
                {PRICING.family.name}
              </p>
              <p className="mt-4 text-4xl font-bold text-[var(--text-primary)]">
                ${PRICING.family.price}
                <span className="text-base font-normal text-[var(--text-secondary)]">
                  /mo
                </span>
              </p>
              <p className="mt-2 text-sm text-[var(--text-secondary)]">
                Full features for your family
              </p>
            </Card>

            {/* Premium */}
            <Card className="text-center">
              <p className="text-sm font-semibold uppercase tracking-wider text-[var(--text-secondary)]">
                {PRICING.premium.name}
              </p>
              <p className="mt-4 text-4xl font-bold text-[var(--text-primary)]">
                ${PRICING.premium.price}
                <span className="text-base font-normal text-[var(--text-secondary)]">
                  /mo
                </span>
              </p>
              <p className="mt-2 text-sm text-[var(--text-secondary)]">
                Everything, unlimited
              </p>
            </Card>
          </div>

          <div className="mt-8 text-center">
            <p className="text-sm text-[var(--text-tertiary)]">
              Compare: OurFamilyWizard charges $330-$900/year. TalkingParents
              charges $210-$960/year.
            </p>

            <div className="mt-4">
              <Link
                href="/pricing"
                className="inline-flex items-center gap-1 text-sm font-medium text-primary-500 hover:text-primary-600 dark:text-[#2BC4C6] dark:hover:text-[#24A8AA]"
              >
                View full pricing
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Social Proof / Stats */}
      <section className="relative bg-[var(--bg-secondary)] section-wave">
        {/* Wave top */}
        <div className="section-wave-top" aria-hidden="true">
          <svg
            viewBox="0 0 1440 64"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            className="h-full w-full"
          >
            <path
              d="M0 48C360 20 720 8 1080 32C1260 44 1380 56 1440 48V0H0V48Z"
              fill="var(--bg-primary)"
            />
          </svg>
        </div>

        <div className="mx-auto max-w-[1200px] px-4 py-20 sm:px-6 md:py-28 lg:px-8 lg:py-32">
          <h2 className="text-center text-3xl font-bold tracking-tight text-[var(--text-primary)] md:text-4xl">
            Built for Australian families.
          </h2>
          <p className="mt-4 text-center text-lg text-[var(--text-secondary)]">
            The families who need a better way to co-parent.
          </p>

          <div className="mt-14 grid grid-cols-2 gap-6 md:grid-cols-4 md:gap-8">
            {[
              { stat: '650,000+', label: 'separated families in Australia' },
              { stat: '1.3M', label: 'children across two households' },
              { stat: '220,000', label: 'separations per year' },
              { stat: '101,000+', label: 'family law applications filed annually' },
            ].map(({ stat, label }) => (
              <div key={stat} className="text-center">
                <p className="stat-number text-3xl font-bold md:text-4xl">
                  {stat}
                </p>
                <p className="mt-3 text-sm text-[var(--text-secondary)] leading-relaxed">
                  {label}
                </p>
              </div>
            ))}
          </div>

          <p className="mt-10 text-center text-xs text-[var(--text-tertiary)]">
            Source: Australian Bureau of Statistics, FCFCOA
          </p>
        </div>
      </section>

      {/* 7. Competitor Migration */}
      <section className="bg-[var(--bg-primary)]">
        <div className="mx-auto max-w-[1200px] px-4 py-20 sm:px-6 md:py-24 lg:px-8 lg:py-28">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-widest text-primary-500 dark:text-[#2BC4C6]">
              Switching
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-[var(--text-primary)] md:text-4xl">
              Switching from another app?
            </h2>
            <p className="mt-4 text-lg text-[var(--text-secondary)]">
              Other co-parenting apps are raising prices. CoRaise offers more for less.
            </p>
          </div>

          <div className="mt-14 grid gap-8 md:grid-cols-3">
            {[
              {
                name: 'TalkingParents',
                badge: 'Going paid June 2026',
                body: 'Free tier ending. Switch to CoRaise - one subscription, both parents get full access.',
                href: '/compare/talkingparents',
              },
              {
                name: 'AppClose',
                badge: 'Already paid since January 2026',
                body: 'Now requires a subscription. CoRaise costs less and includes Australian school terms and court-ready exports.',
                href: '/compare/appclose',
              },
              {
                name: 'OurFamilyWizard',
                badge: 'Costs $330-$900/year',
                body: 'CoRaise delivers comparable features from $9.99 per month, built and hosted in Australia with split billing.',
                href: '/compare/ourfamilywizard',
              },
            ].map(({ name, badge, body, href }) => (
              <Link key={name} href={href} className="group">
                <Card className="h-full">
                  <div className="mb-4 inline-flex items-center gap-1.5 rounded-full bg-warning-light px-3 py-1 text-xs font-medium text-warning dark:bg-warning/10 dark:text-warning">
                    <AlertTriangle className="h-3.5 w-3.5" />
                    {badge}
                  </div>
                  <h3 className="text-xl font-semibold text-[var(--text-primary)] group-hover:text-primary-600 dark:group-hover:text-[#2BC4C6] transition-colors">
                    {name}
                  </h3>
                  <p className="mt-3 text-[var(--text-secondary)] leading-relaxed">
                    {body}
                  </p>
                  <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-primary-500 group-hover:text-primary-600 dark:text-[#2BC4C6] dark:group-hover:text-[#24A8AA] transition-colors">
                    Compare
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                  </span>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 8. FAQ */}
      <section className="bg-[var(--bg-secondary)]">
        <div className="mx-auto max-w-[1200px] px-4 py-20 sm:px-6 md:py-24 lg:px-8 lg:py-28">
          <div className="grid gap-12 md:grid-cols-[1fr_2fr] md:items-start">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-primary-500 dark:text-[#2BC4C6]">
                FAQ
              </p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-[var(--text-primary)] md:text-4xl">
                Questions &amp; answers
              </h2>
              <p className="mt-4 text-[var(--text-secondary)] leading-relaxed">
                Everything you need to know about CoRaise. Can&apos;t find what you&apos;re looking for?{' '}
                <Link
                  href="/contact"
                  className="text-primary-500 hover:text-primary-600 dark:text-[#2BC4C6] dark:hover:text-[#24A8AA] underline underline-offset-2"
                >
                  Get in touch
                </Link>
                .
              </p>
            </div>
            <Accordion items={FAQ_ITEMS} />
          </div>
        </div>
      </section>

      {/* 9. Final CTA */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary-600 via-primary-500 to-primary-700 dark:from-primary-800 dark:via-primary-700 dark:to-primary-900">
        {/* Subtle decorative circles */}
        <div
          className="absolute -top-24 -right-24 h-96 w-96 rounded-full bg-white/5"
          aria-hidden="true"
        />
        <div
          className="absolute -bottom-16 -left-16 h-64 w-64 rounded-full bg-white/5"
          aria-hidden="true"
        />

        <div className="relative mx-auto max-w-[1200px] px-4 py-20 text-center sm:px-6 md:py-28 lg:px-8 lg:py-32">
          <h2 className="text-3xl font-bold tracking-tight text-white md:text-4xl">
            Get started in under 5 minutes.
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-white/80">
            Free to try. No credit card required. One subscription covers both parents.
          </p>
          <div className="mt-10">
            <Button
              variant="secondary"
              size="lg"
              href={`${APP_URL}/register`}
              className="border-white bg-white text-primary-700 shadow-[0_4px_16px_rgba(0,0,0,0.15)] hover:bg-white/90 hover:shadow-[0_8px_24px_rgba(0,0,0,0.2)] dark:border-white dark:bg-white dark:text-primary-700 dark:hover:bg-white/90"
            >
              Get Started Free
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
