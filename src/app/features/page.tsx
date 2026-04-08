import {
  MessageCircle,
  Calendar,
  Receipt,
  FileText,
  ShieldCheck,
  Image,
  Check,
  ArrowRight,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { JsonLd } from '@/components/seo/json-ld'
import { createMetadata } from '@/lib/metadata'
import { softwareApplicationSchema, breadcrumbSchema } from '@/lib/structured-data'
import { APP_URL } from '@/lib/constants'
import { cn } from '@/lib/utils'
import Link from 'next/link'
import type { LucideIcon } from 'lucide-react'

export const metadata = createMetadata({
  title: 'Features',
  description:
    'Tamper-proof messaging, shared calendars with Australian school terms, expense tracking, court-ready PDF exports, and built-in safety features for separated families.',
  path: '/features',
})

interface FeatureSection {
  icon: LucideIcon
  overline: string
  heading: string
  description: string
  bullets: string[]
  link?: { label: string; href: string }
}

const features: FeatureSection[] = [
  {
    icon: MessageCircle,
    overline: 'Messaging',
    heading: 'Structured communication that holds up in court.',
    description:
      'Every message is tamper-proof and time-stamped. A 10-second preview lets you review before sending, and a 30-second cooling-off timer between messages helps keep conversations calm and considered.',
    bullets: [
      'Tamper-proof - messages cannot be edited or deleted after sending',
      '10-second preview before sending',
      '30-second cooling-off timer between messages',
      'SHA-256 content hash on every message',
      'Push notifications with content hidden by default',
    ],
  },
  {
    icon: Calendar,
    overline: 'Calendar',
    heading: 'Shared schedules with Australian school terms.',
    description:
      'A shared calendar pre-loaded with school terms and public holidays for every state and territory. Propose, approve, or decline schedule changes with a clear record of every decision.',
    bullets: [
      'Pre-loaded school terms for all states and territories',
      'State-specific public holidays',
      'Propose, approve, or decline schedule changes',
      'Sync with Google Calendar and Apple Calendar',
      'Clear record of all changes',
    ],
  },
  {
    icon: Receipt,
    overline: 'Expenses',
    heading: 'Financial transparency without the arguments.',
    description:
      'Log shared child-related expenses, photograph receipts, and keep a running balance that shows who owes what. Adjustable split ratios mean both parents agree on what is fair.',
    bullets: [
      'Log shared child-related expenses',
      'Photograph and store receipts',
      'OCR scanning for automatic expense creation',
      'Adjustable split ratio with proposal workflow',
      'Running balance showing who owes what',
    ],
  },
  {
    icon: FileText,
    overline: 'Court Exports',
    heading: 'Records that speak for themselves.',
    description:
      'Generate court-formatted PDF exports of your complete communication history, calendar, expenses, and receipts. Every export includes SHA-256 integrity verification and a certificate of authenticity.',
    bullets: [
      'Court-formatted PDF exports',
      'SHA-256 integrity verification',
      'Certificate of authenticity',
      'Complete message history, calendar, expenses, and receipts',
      'Evidence Act 1995 (Cth) compliant',
    ],
    link: { label: 'Learn about court readiness', href: '/court-readiness' },
  },
  {
    icon: ShieldCheck,
    overline: 'Safety',
    heading: 'Safety is built in, not bolted on.',
    description:
      'CoRaise is designed with domestic violence safety at its core. From a one-tap emergency exit to hidden notification content, every feature considers the safety of vulnerable users.',
    bullets: [
      'Emergency exit button - under one second',
      'No typing indicators',
      'Notification previews off by default',
      'Block and restrict mode',
      'Harassment detection',
      'Session timeout with warning',
    ],
    link: { label: 'Learn about our safety features', href: '/safety' },
  },
  {
    icon: Image,
    overline: 'Photos and Documents',
    heading: 'Share moments. Store what matters.',
    description:
      'Create photo albums to share milestones with your co-parent. Store important documents - medical records, school reports, legal documents, and identification - in a secure vault with full version history.',
    bullets: [
      'Photo albums with family sharing',
      'Document vault with version history',
      'Categories: medical, education, legal, identification',
      '10 GB storage (Family) or 50 GB (Premium)',
    ],
  },
]

export default function FeaturesPage() {
  return (
    <>
      <JsonLd data={softwareApplicationSchema()} />
      <JsonLd
        data={breadcrumbSchema([
          { name: 'Home', href: '/' },
          { name: 'Features', href: '/features' },
        ])}
      />

      {/* Hero */}
      <section className="py-16 md:py-24 text-center">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <h1 className="text-4xl font-bold tracking-tight text-[var(--text-primary)] sm:text-5xl">
            Everything your family needs. Nothing it doesn&apos;t.
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-[var(--text-secondary)]">
            CoRaise brings messaging, calendars, expenses, documents, and court-ready exports into
            one secure platform - built specifically for separated Australian families.
          </p>
        </div>
      </section>

      {/* Feature Sections */}
      {features.map((feature, index) => {
        const isEven = index % 2 === 0
        const Icon = feature.icon

        return (
          <section
            key={feature.overline}
            className={cn(
              'py-16 md:py-24',
              !isEven && 'bg-[var(--bg-secondary)]',
            )}
          >
            <div
              className={cn(
                'mx-auto max-w-6xl px-4 sm:px-6',
                'grid gap-10 md:grid-cols-2 md:items-center',
                !isEven && 'md:[direction:rtl]',
              )}
            >
              {/* Text content */}
              <div className={cn(!isEven && 'md:[direction:ltr]')}>
                <div className="flex items-center gap-2">
                  <Icon
                    className="h-5 w-5 text-primary-500 dark:text-[#2BC4C6]"
                    aria-hidden="true"
                  />
                  <span className="text-xs font-semibold uppercase tracking-widest text-primary-500 dark:text-[#2BC4C6]">
                    {feature.overline}
                  </span>
                </div>
                <h2 className="mt-3 text-3xl font-bold text-[var(--text-primary)]">
                  {feature.heading}
                </h2>
                <p className="mt-4 text-lg leading-relaxed text-[var(--text-secondary)]">
                  {feature.description}
                </p>
                <ul className="mt-6 space-y-3" role="list">
                  {feature.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-start gap-2">
                      <Check
                        className="mt-0.5 h-5 w-5 shrink-0 text-primary-500 dark:text-[#2BC4C6]"
                        aria-hidden="true"
                      />
                      <span className="text-[var(--text-secondary)]">{bullet}</span>
                    </li>
                  ))}
                </ul>
                {feature.link && (
                  <Link
                    href={feature.link.href}
                    className="mt-6 inline-flex items-center gap-1 text-sm font-medium text-primary-500 hover:text-primary-600 dark:text-[#2BC4C6] dark:hover:text-[#24A8AA] min-h-[48px]"
                  >
                    {feature.link.label}
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </Link>
                )}
              </div>

              {/* Visual placeholder */}
              <div
                className={cn(
                  'flex items-center justify-center rounded-xl border border-[var(--border-default)] bg-[var(--bg-tertiary)] p-12',
                  !isEven && 'md:[direction:ltr]',
                )}
                aria-hidden="true"
              >
                <Icon className="h-24 w-24 text-primary-200 dark:text-primary-800" />
              </div>
            </div>
          </section>
        )
      })}

      {/* CTA */}
      <section className="py-16 md:py-24 text-center">
        <div className="mx-auto max-w-2xl px-4 sm:px-6">
          <h2 className="text-3xl font-bold text-[var(--text-primary)]">
            Ready to make co-parenting simpler?
          </h2>
          <p className="mt-4 text-lg text-[var(--text-secondary)]">
            Start with the Free plan - no credit card needed. All the tools your family needs in one
            secure platform.
          </p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Button href={`${APP_URL}/register`} variant="primary" size="lg">
              Get Started Free
            </Button>
            <Button href="/pricing" variant="secondary" size="lg">
              View Pricing
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
