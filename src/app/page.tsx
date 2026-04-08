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
      <section className="bg-[var(--bg-secondary)]">
        <div className="mx-auto max-w-[1200px] px-4 py-16 sm:px-6 md:py-20 lg:px-8 lg:py-24">
          <div className="grid items-center gap-12 md:grid-cols-5">
            {/* Copy - 60 % */}
            <div className="md:col-span-3">
              <h1 className="text-3xl font-bold tracking-tight text-[var(--text-primary)] md:text-5xl">
                The co-parenting app built for Australian families.
              </h1>
              <p className="mt-6 text-lg text-[var(--text-secondary)] md:text-xl">
                The Australian co-parenting app with secure messaging, shared calendars with school terms,
                expense tracking, and court-ready records. One subscription. Both
                parents get full access.
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <Button variant="primary" size="lg" href={`${APP_URL}/register`}>
                  Get Started Free
                </Button>
                <Button variant="secondary" size="lg" href="#features">
                  See How It Works
                </Button>
              </div>
            </div>

            {/* Decorative - 40 % */}
            <div
              className="hidden items-center justify-center md:col-span-2 md:flex"
              aria-hidden="true"
            >
              <div className="relative h-64 w-64">
                {/* Teal circle */}
                <div className="absolute left-4 top-6 h-44 w-44 rounded-full bg-primary-300/40 dark:bg-primary-600/30" />
                {/* Indigo circle */}
                <div className="absolute bottom-6 right-4 h-44 w-44 rounded-full bg-secondary-300/40 dark:bg-secondary-600/30" />
                {/* Overlap glow */}
                <div className="absolute left-1/2 top-1/2 h-20 w-20 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary-400/30 blur-md dark:bg-[#2BC4C6]/20" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Trust Bar */}
      <section className="border-b border-[var(--border-default)] bg-[var(--bg-primary)]">
        <div className="mx-auto max-w-[1200px] px-4 py-8 sm:px-6 lg:px-8">
          <ul className="grid grid-cols-2 gap-6 text-center sm:grid-cols-3 md:grid-cols-5 md:gap-4">
            {[
              { icon: MapPin, text: 'Built and hosted in Sydney' },
              { icon: Shield, text: 'Evidence Act 1995 compliant' },
              { icon: Lock, text: 'SHA-256 tamper-proof records' },
              { icon: Heart, text: 'DV safety features' },
              { icon: DollarSign, text: 'One subscription, both parents' },
            ].map(({ icon: Icon, text }) => (
              <li
                key={text}
                className="flex flex-col items-center gap-2"
              >
                <Icon className="h-5 w-5 text-primary-500 dark:text-[#2BC4C6]" />
                <span className="text-xs text-[var(--text-secondary)]">
                  {text}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 3. Feature Highlights */}
      <section id="features" className="bg-[var(--bg-primary)]">
        <div className="mx-auto max-w-[1200px] px-4 py-16 sm:px-6 md:py-20 lg:px-8 lg:py-24">
          <p className="text-xs font-semibold uppercase tracking-widest text-primary-500 dark:text-[#2BC4C6]">
            Features
          </p>
          <h2 className="mt-2 text-2xl font-bold text-[var(--text-primary)] md:text-3xl">
            Everything in one place.
          </h2>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {[
              {
                icon: MessageCircle,
                title: 'Structured communication.',
                body: 'Messages are time-stamped and cannot be edited or deleted. A 10-second preview and 30-second cooldown help everyone communicate more carefully.',
              },
              {
                icon: Calendar,
                title: 'Shared schedules.',
                body: 'Australian school terms and state-specific public holidays pre-loaded. Propose, approve, or decline schedule changes with a clear record.',
              },
              {
                icon: Receipt,
                title: 'Financial transparency.',
                body: 'Log shared expenses, photograph receipts, and track who owes what with an automatic running balance.',
              },
            ].map(({ icon: Icon, title, body }) => (
              <Link key={title} href="/features" className="group">
                <Card className="h-full transition-shadow group-hover:shadow-md">
                  <Icon className="h-8 w-8 text-primary-500 dark:text-[#2BC4C6]" />
                  <h3 className="mt-4 text-lg font-semibold text-[var(--text-primary)]">
                    {title}
                  </h3>
                  <p className="mt-2 text-[var(--text-secondary)]">{body}</p>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Australian Differentiator */}
      <section className="bg-primary-50 dark:bg-[#0F2C2C]">
        <div className="mx-auto max-w-[1200px] px-4 py-16 sm:px-6 md:py-20 lg:px-8 lg:py-24">
          <h2 className="text-2xl font-bold text-[var(--text-primary)] md:text-3xl">
            Built here. Hosted here. For families here.
          </h2>

          <ul className="mt-8 space-y-4">
            {[
              'School terms for every Australian state and territory',
              'State-specific public holidays (Melbourne Cup, Royal Queensland Show, and more)',
              'All data stored in Sydney, Australia - never offshore',
              'Evidence Act 1995 compliant court exports',
            ].map((item) => (
              <li key={item} className="flex items-start gap-3">
                <Check className="mt-0.5 h-5 w-5 shrink-0 text-primary-500 dark:text-[#2BC4C6]" />
                <span className="text-[var(--text-secondary)]">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 5. Pricing Teaser */}
      <section className="bg-[var(--bg-primary)]">
        <div className="mx-auto max-w-[1200px] px-4 py-16 sm:px-6 md:py-20 lg:px-8 lg:py-24">
          <p className="text-xs font-semibold uppercase tracking-widest text-primary-500 dark:text-[#2BC4C6]">
            Pricing
          </p>
          <h2 className="mt-2 text-2xl font-bold text-[var(--text-primary)] md:text-3xl">
            One subscription. Both parents.
          </h2>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {/* Free */}
            <Card>
              <p className="text-sm font-medium text-[var(--text-secondary)]">
                {PRICING.free.name}
              </p>
              <p className="mt-2 text-3xl font-bold text-[var(--text-primary)]">
                $0
              </p>
              <p className="mt-1 text-sm text-[var(--text-secondary)]">
                Get started with basic features
              </p>
            </Card>

            {/* Family - highlighted */}
            <Card highlight>
              <p className="text-sm font-medium text-primary-500 dark:text-[#2BC4C6]">
                {PRICING.family.name}
              </p>
              <p className="mt-2 text-3xl font-bold text-[var(--text-primary)]">
                ${PRICING.family.price}
                <span className="text-base font-normal text-[var(--text-secondary)]">
                  /mo
                </span>
              </p>
              <p className="mt-1 text-sm text-[var(--text-secondary)]">
                Full features for your family
              </p>
            </Card>

            {/* Premium */}
            <Card>
              <p className="text-sm font-medium text-[var(--text-secondary)]">
                {PRICING.premium.name}
              </p>
              <p className="mt-2 text-3xl font-bold text-[var(--text-primary)]">
                ${PRICING.premium.price}
                <span className="text-base font-normal text-[var(--text-secondary)]">
                  /mo
                </span>
              </p>
              <p className="mt-1 text-sm text-[var(--text-secondary)]">
                Everything, unlimited
              </p>
            </Card>
          </div>

          <p className="mt-6 text-sm text-[var(--text-tertiary)]">
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
      </section>

      {/* 6. Social Proof / Stats */}
      <section className="bg-[var(--bg-secondary)]">
        <div className="mx-auto max-w-[1200px] px-4 py-16 sm:px-6 md:py-20 lg:px-8 lg:py-24">
          <h2 className="text-center text-2xl font-bold text-[var(--text-primary)] md:text-3xl">
            Built for Australian families.
          </h2>

          <div className="mt-10 grid grid-cols-2 gap-6 md:grid-cols-4">
            {[
              { stat: '650,000+', label: 'separated families in Australia' },
              { stat: '1.3M', label: 'children across two households' },
              { stat: '220,000', label: 'separations per year' },
              { stat: '101,000+', label: 'family law applications filed annually' },
            ].map(({ stat, label }) => (
              <Card key={stat} className="text-center">
                <p className="text-2xl font-bold text-primary-500 dark:text-[#2BC4C6] md:text-3xl">
                  {stat}
                </p>
                <p className="mt-2 text-sm text-[var(--text-secondary)]">
                  {label}
                </p>
              </Card>
            ))}
          </div>

          <p className="mt-6 text-center text-xs text-[var(--text-tertiary)]">
            Source: Australian Bureau of Statistics, FCFCOA
          </p>
        </div>
      </section>

      {/* 7. Competitor Migration */}
      <section className="bg-[var(--bg-primary)]">
        <div className="mx-auto max-w-[1200px] px-4 py-16 sm:px-6 md:py-20 lg:px-8 lg:py-24">
          <h2 className="text-2xl font-bold text-[var(--text-primary)] md:text-3xl">
            Switching from another app?
          </h2>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
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
                <Card className="h-full transition-shadow group-hover:shadow-md">
                  <div className="mb-3 inline-flex items-center gap-1.5 rounded-md bg-warning-light px-2.5 py-1 text-xs font-medium text-warning dark:bg-warning/10 dark:text-warning">
                    <AlertTriangle className="h-3.5 w-3.5" />
                    {badge}
                  </div>
                  <h3 className="text-lg font-semibold text-[var(--text-primary)]">
                    {name}
                  </h3>
                  <p className="mt-2 text-sm text-[var(--text-secondary)]">
                    {body}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary-500 group-hover:text-primary-600 dark:text-[#2BC4C6] dark:group-hover:text-[#24A8AA]">
                    Compare
                    <ArrowRight className="h-4 w-4" />
                  </span>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 8. FAQ */}
      <section className="bg-[var(--bg-secondary)]">
        <div className="mx-auto max-w-[1200px] px-4 py-16 sm:px-6 md:py-20 lg:px-8 lg:py-24">
          <h2 className="text-2xl font-bold text-[var(--text-primary)] md:text-3xl">
            Frequently asked questions
          </h2>

          <div className="mt-8 max-w-3xl">
            <Accordion items={FAQ_ITEMS} />
          </div>
        </div>
      </section>

      {/* 9. Final CTA */}
      <section className="bg-primary-500 dark:bg-primary-700">
        <div className="mx-auto max-w-[1200px] px-4 py-16 text-center sm:px-6 md:py-20 lg:px-8 lg:py-24">
          <h2 className="text-2xl font-bold text-white md:text-3xl">
            Get started in under 5 minutes.
          </h2>
          <p className="mt-4 text-lg text-white/80">
            Free to try. No credit card required.
          </p>
          <div className="mt-8">
            <Button
              variant="secondary"
              size="lg"
              href={`${APP_URL}/register`}
              className="border-white bg-white text-primary-700 hover:bg-white/90 dark:border-white dark:bg-white dark:text-primary-700 dark:hover:bg-white/90"
            >
              Get Started Free
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
