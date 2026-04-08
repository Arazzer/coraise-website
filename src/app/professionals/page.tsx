import {
  LayoutDashboard,
  FileText,
  Eye,
  Scale,
  UserPlus,
  Link2,
  Download,
  Check,
  X,
  ArrowRight,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Accordion } from '@/components/ui/accordion'
import { JsonLd } from '@/components/seo/json-ld'
import { createMetadata } from '@/lib/metadata'
import { faqSchema, breadcrumbSchema } from '@/lib/structured-data'
import { APP_URL, PRICING } from '@/lib/constants'
import type { LucideIcon } from 'lucide-react'

/* ------------------------------------------------------------------ */
/*  Metadata                                                          */
/* ------------------------------------------------------------------ */

export const metadata = createMetadata({
  title: 'For Professionals',
  description:
    'CoRaise for family law professionals. Court-ready PDF exports, multi-family dashboard, SHA-256 verified records, and Evidence Act 1995 compliance. Replace screenshot chaos with structured evidence.',
  path: '/professionals',
})

/* ------------------------------------------------------------------ */
/*  Data                                                              */
/* ------------------------------------------------------------------ */

const PAIN_POINTS = [
  'Screenshots in random order with no dates or context',
  'WhatsApp exports without metadata or verification',
  'No way to verify message authenticity or detect edits',
  'Hours spent sorting and organising client evidence',
]

const SOLUTIONS = [
  'Structured PDF exports with chronological messages and timestamps',
  'SHA-256 verification on every message - tamper-proof from the start',
  'Evidence Act 1995 (Cth) compliant records',
  'Multi-family dashboard for managing multiple client families',
]

interface ProfessionalFeature {
  icon: LucideIcon
  title: string
  description: string
}

const FEATURES: ProfessionalFeature[] = [
  {
    icon: LayoutDashboard,
    title: 'Multi-family dashboard',
    description:
      'Manage multiple client families from one portal. See communication activity, upcoming events, and outstanding expenses across all your clients at a glance.',
  },
  {
    icon: FileText,
    title: 'Court-ready exports',
    description:
      'Generate PDF records with a cover page, table of contents, chronological messages, calendar events, expenses, receipts, and a certificate of authenticity.',
  },
  {
    icon: Eye,
    title: 'Read-only access',
    description:
      'View client communications without interfering. Your access is logged in the audit trail, but you cannot send messages, modify records, or alter the evidentiary chain.',
  },
  {
    icon: Scale,
    title: 'Evidence Act compliance',
    description:
      'Records are designed for Australian family law. SHA-256 hashing, append-only storage, and automated audit logging satisfy the technical requirements of the Evidence Act 1995 (Cth).',
  },
]

interface Step {
  number: number
  icon: LucideIcon
  title: string
  description: string
}

const STEPS: Step[] = [
  {
    number: 1,
    icon: UserPlus,
    title: 'Register as a professional',
    description:
      'Create your practitioner account with your professional details. No minimum commitment required.',
  },
  {
    number: 2,
    icon: Link2,
    title: 'Your client adds you',
    description:
      'Your client grants read-only access to their family from within their CoRaise account. You receive an email notification.',
  },
  {
    number: 3,
    icon: Download,
    title: 'Access records',
    description:
      'View communications and generate court-ready PDF exports directly from your professional dashboard.',
  },
]

const FAQ_ITEMS = [
  {
    question: 'What type of professionals can use CoRaise?',
    answer:
      'CoRaise is designed for family lawyers, mediators, family dispute resolution practitioners, family consultants, and social workers involved in Australian family law matters. Any professional who needs access to structured co-parenting communication records can use the platform.',
  },
  {
    question: 'Can I access my client\'s messages?',
    answer:
      'Yes, with your client\'s explicit permission. When a client grants you access, you receive read-only visibility into their communication history, calendar, expenses, and documents. You cannot send messages or modify any records.',
  },
  {
    question: 'How many client families can I manage?',
    answer:
      'There is no limit on the number of client families you can manage. Each professional seat includes access to all families where the client has granted you permission.',
  },
  {
    question: 'Is my access to client records logged?',
    answer:
      'Yes. Every time you view a client\'s records or generate an export, the action is recorded in the audit log. This maintains the integrity of the evidentiary chain and provides a transparent record of who accessed what and when.',
  },
  {
    question: 'Can I try CoRaise before committing to a subscription?',
    answer:
      'Yes. CoRaise offers a free trial for professional accounts. You can explore the dashboard, review the export format, and assess the platform before subscribing.',
  },
]

/* ------------------------------------------------------------------ */
/*  Page                                                              */
/* ------------------------------------------------------------------ */

export default function ProfessionalsPage() {
  return (
    <>
      {/* Structured data */}
      <JsonLd data={faqSchema(FAQ_ITEMS)} />
      <JsonLd
        data={breadcrumbSchema([
          { name: 'Home', href: '/' },
          { name: 'For Professionals', href: '/professionals' },
        ])}
      />

      {/* 1. Hero */}
      <section className="bg-[var(--bg-primary)]">
        <div className="mx-auto max-w-3xl px-4 py-16 text-center sm:px-6 md:py-24">
          <p className="text-xs font-semibold uppercase tracking-widest text-primary-500 dark:text-[#2BC4C6]">
            For family law professionals
          </p>
          <h1 className="mt-4 text-4xl font-bold tracking-tight text-[var(--text-primary)] sm:text-5xl">
            Court-ready evidence without the screenshot chaos.
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-[var(--text-secondary)]">
            Your clients bring 200 screenshots. You spend hours organising them.
            CoRaise gives you structured, court-formatted records in minutes.
          </p>
        </div>
      </section>

      {/* 2. Problem / Solution */}
      <section className="bg-[var(--bg-secondary)]">
        <div className="mx-auto max-w-[1200px] px-4 py-16 sm:px-6 md:py-24 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2">
            {/* Problem */}
            <div>
              <h2 className="text-2xl font-bold text-[var(--text-primary)] md:text-3xl">
                What you deal with today
              </h2>
              <ul className="mt-8 space-y-4" role="list">
                {PAIN_POINTS.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <X
                      className="mt-0.5 h-5 w-5 shrink-0 text-neutral-400 dark:text-neutral-500"
                      aria-hidden="true"
                    />
                    <span className="text-[var(--text-secondary)]">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Solution */}
            <div>
              <h2 className="text-2xl font-bold text-[var(--text-primary)] md:text-3xl">
                What CoRaise provides
              </h2>
              <ul className="mt-8 space-y-4" role="list">
                {SOLUTIONS.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <Check
                      className="mt-0.5 h-5 w-5 shrink-0 text-primary-500 dark:text-[#2BC4C6]"
                      aria-hidden="true"
                    />
                    <span className="text-[var(--text-secondary)]">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Features for professionals */}
      <section className="bg-[var(--bg-primary)]">
        <div className="mx-auto max-w-[1200px] px-4 py-16 sm:px-6 md:py-24 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-widest text-primary-500 dark:text-[#2BC4C6]">
            Professional features
          </p>
          <h2 className="mt-2 text-2xl font-bold text-[var(--text-primary)] md:text-3xl">
            Built for how you work.
          </h2>

          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {FEATURES.map((feature) => {
              const Icon = feature.icon
              return (
                <Card key={feature.title}>
                  <div
                    className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary-50 dark:bg-primary-900/40"
                    aria-hidden="true"
                  >
                    <Icon className="h-6 w-6 text-primary-500 dark:text-[#2BC4C6]" />
                  </div>
                  <h3 className="mt-4 text-lg font-semibold text-[var(--text-primary)]">
                    {feature.title}
                  </h3>
                  <p className="mt-2 text-sm text-[var(--text-secondary)] leading-relaxed">
                    {feature.description}
                  </p>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* 4. Pricing */}
      <section className="bg-[var(--bg-secondary)]">
        <div className="mx-auto max-w-[1200px] px-4 py-16 sm:px-6 md:py-24 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-widest text-primary-500 dark:text-[#2BC4C6]">
            Pricing
          </p>
          <h2 className="mt-2 text-2xl font-bold text-[var(--text-primary)] md:text-3xl">
            Professional access
          </h2>

          <div className="mt-10 max-w-lg">
            <Card highlight>
              <p className="text-sm font-medium text-primary-500 dark:text-[#2BC4C6]">
                {PRICING.professional.name}
              </p>
              <p className="mt-2 text-3xl font-bold text-[var(--text-primary)]">
                ${PRICING.professional.price}
                <span className="text-base font-normal text-[var(--text-secondary)]">
                  /month per seat
                </span>
              </p>
              <ul className="mt-6 space-y-3" role="list">
                {[
                  'Multi-family dashboard',
                  'Unlimited court-ready PDF exports',
                  'Read-only client access',
                  'Evidence Act 1995 compliance',
                  'Full audit trail',
                  'No minimum commitment',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <Check
                      className="mt-0.5 h-5 w-5 shrink-0 text-primary-500 dark:text-[#2BC4C6]"
                      aria-hidden="true"
                    />
                    <span className="text-sm text-[var(--text-secondary)]">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <Button
                  variant="primary"
                  size="lg"
                  href={`${APP_URL}/signup`}
                  className="w-full sm:w-auto"
                >
                  Start your free trial
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* 5. How it works */}
      <section className="bg-[var(--bg-primary)]">
        <div className="mx-auto max-w-[1200px] px-4 py-16 sm:px-6 md:py-24 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-widest text-primary-500 dark:text-[#2BC4C6]">
            Getting started
          </p>
          <h2 className="mt-2 text-2xl font-bold text-[var(--text-primary)] md:text-3xl">
            Three steps to court-ready records.
          </h2>

          <div className="mt-10 grid gap-8 md:grid-cols-3">
            {STEPS.map((step) => {
              const Icon = step.icon
              return (
                <div key={step.number} className="relative">
                  {/* Step number */}
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-500 text-lg font-bold text-white dark:bg-[#2BC4C6] dark:text-[#0F1419]">
                    {step.number}
                  </span>
                  <div className="mt-4 flex items-center gap-2">
                    <Icon
                      className="h-5 w-5 text-primary-500 dark:text-[#2BC4C6]"
                      aria-hidden="true"
                    />
                    <h3 className="text-lg font-semibold text-[var(--text-primary)]">
                      {step.title}
                    </h3>
                  </div>
                  <p className="mt-2 text-[var(--text-secondary)] leading-relaxed">
                    {step.description}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* 6. FAQ */}
      <section className="bg-[var(--bg-secondary)]">
        <div className="mx-auto max-w-[1200px] px-4 py-16 sm:px-6 md:py-24 lg:px-8">
          <h2 className="text-2xl font-bold text-[var(--text-primary)] md:text-3xl">
            Frequently asked questions
          </h2>

          <div className="mt-8 max-w-3xl">
            <Accordion items={FAQ_ITEMS} />
          </div>
        </div>
      </section>

      {/* 7. Final CTA */}
      <section className="bg-primary-500 dark:bg-primary-700">
        <div className="mx-auto max-w-[1200px] px-4 py-16 text-center sm:px-6 md:py-20 lg:px-8 lg:py-24">
          <h2 className="text-2xl font-bold text-white md:text-3xl">
            Join family law professionals using CoRaise.
          </h2>
          <p className="mt-4 text-lg text-white/80">
            Replace screenshot chaos with structured, court-ready evidence.
          </p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Button
              variant="secondary"
              size="lg"
              href={`${APP_URL}/signup`}
              className="border-white bg-white text-primary-700 hover:bg-white/90 dark:border-white dark:bg-white dark:text-primary-700 dark:hover:bg-white/90"
            >
              Start Your Free Trial
            </Button>
            <Button
              variant="ghost"
              size="lg"
              href="/court-readiness"
              className="text-white hover:bg-white/10 dark:text-white dark:hover:bg-white/10"
            >
              Learn About Court Readiness
              <ArrowRight className="ml-1 h-4 w-4" aria-hidden="true" />
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
