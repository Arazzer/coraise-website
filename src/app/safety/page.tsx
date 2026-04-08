import {
  LogOut,
  EyeOff,
  BellOff,
  Shield,
  ShieldOff,
  AlertTriangle,
  Timer,
  Phone,
  X,
  ExternalLink,
} from 'lucide-react'
import { Card } from '@/components/ui/card'
import { Accordion } from '@/components/ui/accordion'
import { JsonLd } from '@/components/seo/json-ld'
import { createMetadata } from '@/lib/metadata'
import { faqSchema, breadcrumbSchema } from '@/lib/structured-data'
import { SAFETY_NUMBERS } from '@/lib/constants'
import type { LucideIcon } from 'lucide-react'

/* ------------------------------------------------------------------ */
/*  Metadata                                                          */
/* ------------------------------------------------------------------ */

export const metadata = createMetadata({
  title: 'Safety',
  description:
    'CoRaise is a safe co-parenting app designed with domestic violence safety from the ground up. Emergency exit, no typing indicators, notification privacy, block and restrict, harassment detection, and crisis resources.',
  path: '/safety',
})

/* ------------------------------------------------------------------ */
/*  Data                                                              */
/* ------------------------------------------------------------------ */

interface SafetyFeature {
  icon: LucideIcon
  title: string
  description: string
}

const SAFETY_FEATURES: SafetyFeature[] = [
  {
    icon: LogOut,
    title: 'Emergency exit',
    description:
      'One tap leaves the app instantly. On web, it replaces the page with the Bureau of Meteorology weather site. Under one second. No confirmation dialog.',
  },
  {
    icon: EyeOff,
    title: 'No typing indicators',
    description:
      'Typing indicators create pressure and enable monitoring. CoRaise deliberately excludes them. Your co-parent cannot tell when you are reading or composing a message.',
  },
  {
    icon: BellOff,
    title: 'Notification privacy',
    description:
      'Notification previews are off by default. Push notifications say "New message in CoRaise", never the actual message content. Someone glancing at your phone screen will not see what was said.',
  },
  {
    icon: ShieldOff,
    title: 'Block and restrict',
    description:
      'Block your co-parent\u2019s real-time messages while preserving the evidentiary record. Messages are still stored and available for court exports. You receive a daily summary instead of live notifications.',
  },
  {
    icon: AlertTriangle,
    title: 'Harassment detection',
    description:
      'When patterns of excessive messaging are detected, CoRaise offers options: switch to a daily digest, or view safety resources. The system monitors frequency, not content - your messages are never read by AI.',
  },
  {
    icon: Timer,
    title: 'Session timeout',
    description:
      'Automatic logout after 15 minutes of inactivity (5 minutes if the tab is hidden), with a 60-second warning before it happens. If someone picks up your device, the session will already be closed.',
  },
  {
    icon: Phone,
    title: 'Safety resources without login',
    description:
      '1800RESPECT, Lifeline, and state-specific DV services are accessible from the login screen. No account required. No sign-up. Just the numbers you might need.',
  },
]

const EXCLUDED_FEATURES = [
  'Tone analysis or AI sentiment filtering',
  'Read receipt timestamps',
  'Message editing or deletion',
  'Location sharing',
  'Real-time online status indicators',
]

const FAQ_ITEMS = [
  {
    question: 'Can my co-parent see when I am online?',
    answer:
      'No. CoRaise does not show online status, last-seen timestamps, or typing indicators. Your co-parent has no way to know when you are using the app.',
  },
  {
    question: 'What happens when I tap the emergency exit button?',
    answer:
      'On web, the current page is immediately replaced with the Bureau of Meteorology weather site (weather.bom.gov.au). This happens in under one second with no confirmation dialog. Your session stays active so you can return later, but nothing on screen shows CoRaise.',
  },
  {
    question: 'Can I block my co-parent and still keep records for court?',
    answer:
      'Yes. Block and restrict mode stops real-time message delivery while preserving all messages in the system. You receive a daily summary email instead. The complete conversation record is still available for court exports.',
  },
  {
    question: 'Does CoRaise use AI to read my messages?',
    answer:
      'No. CoRaise does not use AI, machine learning, or any form of content analysis on your messages. Harassment detection works by monitoring message frequency patterns only - how often messages are sent, not what they say.',
  },
  {
    question: 'Can I access safety resources without creating an account?',
    answer:
      'Yes. Links to 1800RESPECT, Lifeline, and emergency services are available on the login page. You do not need to create an account or provide any personal information to access these resources.',
  },
]

/* ------------------------------------------------------------------ */
/*  Page                                                              */
/* ------------------------------------------------------------------ */

export default function SafetyPage() {
  return (
    <>
      {/* Structured data */}
      <JsonLd data={faqSchema(FAQ_ITEMS)} />
      <JsonLd
        data={breadcrumbSchema([
          { name: 'Home', href: '/' },
          { name: 'Safety', href: '/safety' },
        ])}
      />

      {/* 1. Emergency banner - above the fold */}
      <section
        className="bg-gradient-to-r from-[#FEF3E2] to-[#FFF8EE] dark:from-warning/10 dark:to-warning/5 border-b border-[#F0DFC0] dark:border-warning/20"
        role="region"
        aria-label="Emergency contact information"
      >
        <div className="mx-auto max-w-[1200px] px-4 py-6 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-base font-semibold text-[#7C5A1A] dark:text-warning">
                If you are in immediate danger, call{' '}
                <a
                  href="tel:000"
                  className="text-2xl font-bold underline underline-offset-2"
                >
                  000
                </a>
              </p>
              <p className="mt-2 text-base text-[#7C5A1A] dark:text-warning/90">
                For family or domestic violence support, call 1800RESPECT on{' '}
                <a
                  href="tel:1800737732"
                  className="text-2xl font-bold underline underline-offset-2"
                >
                  1800 737 732
                </a>{' '}
                <span className="text-sm font-normal">(24/7, free call)</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Hero */}
      <section className="relative overflow-hidden bg-[var(--bg-primary)]">
        <div className="hero-glow absolute -top-32 left-1/2 -translate-x-1/2 bg-primary-200" aria-hidden="true" />
        <div className="relative mx-auto max-w-3xl px-4 py-20 text-center sm:px-6 md:py-28">
          <div className="mx-auto mb-8 flex h-16 w-16 items-center justify-center rounded-full bg-primary-50 dark:bg-primary-900/30">
            <Shield className="h-8 w-8 text-primary-500 dark:text-[#2BC4C6]" />
          </div>
          <h1 className="text-4xl font-bold tracking-tight text-[var(--text-primary)] sm:text-5xl md:text-[3.25rem] leading-[1.1]">
            Safety is built in, not bolted on.
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-[var(--text-secondary)]">
            80% of Family Court parenting applications involve allegations of
            family violence. CoRaise was designed with this reality from the
            beginning.
          </p>
        </div>
      </section>

      {/* 3. Safety features - 7 detailed subsections */}
      <section className="relative bg-[var(--bg-secondary)] section-wave">
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

        <div className="mx-auto max-w-[1200px] px-4 py-20 sm:px-6 md:py-28 lg:px-8">
          <div className="text-center max-w-2xl mx-auto">
            <p className="text-xs font-semibold uppercase tracking-widest text-primary-500 dark:text-[#2BC4C6]">
              Safety features
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-[var(--text-primary)] md:text-4xl">
              How CoRaise protects you.
            </h2>
            <p className="mt-4 text-lg text-[var(--text-secondary)]">
              Every safety feature was designed with input from DV support services.
            </p>
          </div>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {SAFETY_FEATURES.map((feature, index) => {
              const Icon = feature.icon
              return (
                <div
                  key={feature.title}
                  className={`safety-feature-card ${index === 0 ? 'sm:col-span-2 lg:col-span-1' : ''}`}
                >
                  <div
                    className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-50 dark:bg-primary-900/30"
                    aria-hidden="true"
                  >
                    <Icon className="h-6 w-6 text-primary-500 dark:text-[#2BC4C6]" />
                  </div>
                  <h3 className="mt-4 text-lg font-semibold text-[var(--text-primary)]">
                    {feature.title}
                  </h3>
                  <p className="mt-2 text-[var(--text-secondary)] leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* 4. What we deliberately excluded */}
      <section className="bg-[var(--bg-primary)]">
        <div className="mx-auto max-w-[1200px] px-4 py-20 sm:px-6 md:py-28 lg:px-8">
          <div className="grid gap-12 md:grid-cols-2 md:items-start">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-primary-500 dark:text-[#2BC4C6]">
                By design
              </p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-[var(--text-primary)] md:text-4xl">
                What we chose not to build.
              </h2>
              <p className="mt-4 text-lg text-[var(--text-secondary)] leading-relaxed">
                Some features that other apps include can be weaponised in
                high-conflict or DV situations. We left them out on purpose.
              </p>
              <p className="mt-6 text-sm text-[var(--text-tertiary)] leading-relaxed border-l-2 border-primary-200 dark:border-primary-700 pl-4">
                Research from La Trobe University (2026) found that AI tone filtering
                in co-parenting apps can inadvertently suppress legitimate reports of
                abuse. CoRaise does not analyse, filter, or modify your messages in
                any way.
              </p>
            </div>

            <div className="rounded-xl border border-[var(--border-default)] bg-[var(--bg-secondary)] p-8">
              <ul className="space-y-5" role="list">
                {EXCLUDED_FEATURES.map((item) => (
                  <li key={item} className="flex items-start gap-4">
                    <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-neutral-100 dark:bg-neutral-800">
                      <X
                        className="h-3.5 w-3.5 text-neutral-400 dark:text-neutral-500"
                        aria-hidden="true"
                      />
                    </div>
                    <span className="text-[var(--text-secondary)] leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Safety resources */}
      <section className="relative bg-[var(--bg-secondary)] section-wave">
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

        <div className="mx-auto max-w-[1200px] px-4 py-20 sm:px-6 md:py-28 lg:px-8">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold tracking-tight text-[var(--text-primary)] md:text-4xl">
              If you need help right now.
            </h2>
            <p className="mt-4 text-lg text-[var(--text-secondary)]">
              These services are free, confidential, and available 24 hours a day.
            </p>
          </div>

          <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {/* 1800RESPECT */}
            <Card elevated className="flex flex-col justify-between">
              <div>
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-50 dark:bg-primary-900/30 mb-4">
                  <Phone className="h-5 w-5 text-primary-500 dark:text-[#2BC4C6]" aria-hidden="true" />
                </div>
                <p className="text-sm font-semibold uppercase tracking-wider text-primary-500 dark:text-[#2BC4C6]">
                  {SAFETY_NUMBERS.respect.name}
                </p>
                <p className="mt-2 text-sm text-[var(--text-secondary)] leading-relaxed">
                  {SAFETY_NUMBERS.respect.description}
                </p>
                <p className="mt-4">
                  <a
                    href="tel:1800737732"
                    className="text-2xl font-bold text-[var(--text-primary)] underline underline-offset-4 decoration-primary-300 hover:decoration-primary-500 dark:decoration-[#2BC4C6]/40 dark:hover:decoration-[#2BC4C6] transition-colors"
                  >
                    {SAFETY_NUMBERS.respect.number}
                  </a>
                </p>
              </div>
              <a
                href="tel:1800737732"
                className="mt-8 inline-flex min-h-[48px] items-center justify-center rounded-lg bg-primary-500 px-5 py-2.5 text-sm font-medium text-white shadow-[0_1px_2px_rgba(0,0,0,0.1),inset_0_1px_0_rgba(255,255,255,0.1)] transition-all hover:bg-primary-600 hover:shadow-[0_4px_12px_rgba(61,138,131,0.25)] dark:bg-[#2BC4C6] dark:text-[#0F1419] dark:hover:bg-[#24A8AA]"
              >
                <Phone className="mr-2 h-4 w-4" aria-hidden="true" />
                Call now
              </a>
            </Card>

            {/* Lifeline */}
            <Card elevated className="flex flex-col justify-between">
              <div>
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-50 dark:bg-primary-900/30 mb-4">
                  <Phone className="h-5 w-5 text-primary-500 dark:text-[#2BC4C6]" aria-hidden="true" />
                </div>
                <p className="text-sm font-semibold uppercase tracking-wider text-primary-500 dark:text-[#2BC4C6]">
                  {SAFETY_NUMBERS.lifeline.name}
                </p>
                <p className="mt-2 text-sm text-[var(--text-secondary)] leading-relaxed">
                  {SAFETY_NUMBERS.lifeline.description}
                </p>
                <p className="mt-4">
                  <a
                    href="tel:131114"
                    className="text-2xl font-bold text-[var(--text-primary)] underline underline-offset-4 decoration-primary-300 hover:decoration-primary-500 dark:decoration-[#2BC4C6]/40 dark:hover:decoration-[#2BC4C6] transition-colors"
                  >
                    {SAFETY_NUMBERS.lifeline.number}
                  </a>
                </p>
              </div>
              <a
                href="tel:131114"
                className="mt-8 inline-flex min-h-[48px] items-center justify-center rounded-lg bg-primary-500 px-5 py-2.5 text-sm font-medium text-white shadow-[0_1px_2px_rgba(0,0,0,0.1),inset_0_1px_0_rgba(255,255,255,0.1)] transition-all hover:bg-primary-600 hover:shadow-[0_4px_12px_rgba(61,138,131,0.25)] dark:bg-[#2BC4C6] dark:text-[#0F1419] dark:hover:bg-[#24A8AA]"
              >
                <Phone className="mr-2 h-4 w-4" aria-hidden="true" />
                Call now
              </a>
            </Card>

            {/* Emergency */}
            <Card elevated className="flex flex-col justify-between">
              <div>
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-50 dark:bg-primary-900/30 mb-4">
                  <Phone className="h-5 w-5 text-primary-500 dark:text-[#2BC4C6]" aria-hidden="true" />
                </div>
                <p className="text-sm font-semibold uppercase tracking-wider text-primary-500 dark:text-[#2BC4C6]">
                  Emergency Services
                </p>
                <p className="mt-2 text-sm text-[var(--text-secondary)] leading-relaxed">
                  Police, fire, ambulance
                </p>
                <p className="mt-4">
                  <a
                    href="tel:000"
                    className="text-2xl font-bold text-[var(--text-primary)] underline underline-offset-4 decoration-primary-300 hover:decoration-primary-500 dark:decoration-[#2BC4C6]/40 dark:hover:decoration-[#2BC4C6] transition-colors"
                  >
                    000
                  </a>
                </p>
              </div>
              <a
                href="tel:000"
                className="mt-8 inline-flex min-h-[48px] items-center justify-center rounded-lg bg-primary-500 px-5 py-2.5 text-sm font-medium text-white shadow-[0_1px_2px_rgba(0,0,0,0.1),inset_0_1px_0_rgba(255,255,255,0.1)] transition-all hover:bg-primary-600 hover:shadow-[0_4px_12px_rgba(61,138,131,0.25)] dark:bg-[#2BC4C6] dark:text-[#0F1419] dark:hover:bg-[#24A8AA]"
              >
                <Phone className="mr-2 h-4 w-4" aria-hidden="true" />
                Call now
              </a>
            </Card>
          </div>

          <div className="mt-10 text-center">
            <a
              href="https://techsafety.org.au"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-[48px] items-center gap-1.5 text-sm font-medium text-primary-500 hover:text-primary-600 dark:text-[#2BC4C6] dark:hover:text-[#24A8AA] transition-colors"
            >
              WESNET Technology Safety Australia
              <ExternalLink className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>
        </div>
      </section>

      {/* 6. FAQ */}
      <section className="bg-[var(--bg-primary)]">
        <div className="mx-auto max-w-[1200px] px-4 py-20 sm:px-6 md:py-28 lg:px-8">
          <div className="grid gap-12 md:grid-cols-[1fr_2fr] md:items-start">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-primary-500 dark:text-[#2BC4C6]">
                FAQ
              </p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-[var(--text-primary)] md:text-4xl">
                Safety questions
              </h2>
              <p className="mt-4 text-[var(--text-secondary)] leading-relaxed">
                Common questions about how CoRaise keeps you safe.
              </p>
            </div>
            <Accordion items={FAQ_ITEMS} />
          </div>
        </div>
      </section>
    </>
  )
}
