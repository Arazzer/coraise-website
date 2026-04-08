import {
  LogOut,
  EyeOff,
  BellOff,
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
        className="bg-[#FEF3E2] dark:bg-warning/10"
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
      <section className="bg-[var(--bg-primary)]">
        <div className="mx-auto max-w-3xl px-4 py-16 text-center sm:px-6 md:py-24">
          <h1 className="text-4xl font-bold tracking-tight text-[var(--text-primary)] sm:text-5xl">
            Safety is built in, not bolted on.
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-[var(--text-secondary)]">
            80% of Family Court parenting applications involve allegations of
            family violence. CoRaise was designed with this reality from the
            beginning.
          </p>
        </div>
      </section>

      {/* 3. Safety features - 7 detailed subsections */}
      <section className="bg-[var(--bg-secondary)]">
        <div className="mx-auto max-w-[1200px] px-4 py-16 sm:px-6 md:py-24 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-widest text-primary-500 dark:text-[#2BC4C6]">
            Safety features
          </p>
          <h2 className="mt-2 text-2xl font-bold text-[var(--text-primary)] md:text-3xl">
            How CoRaise protects you.
          </h2>

          <div className="mt-12 space-y-8">
            {SAFETY_FEATURES.map((feature) => {
              const Icon = feature.icon
              return (
                <div
                  key={feature.title}
                  className="grid gap-4 md:grid-cols-[56px_1fr] md:items-start"
                >
                  <div
                    className="flex h-14 w-14 shrink-0 items-center justify-center rounded-lg bg-primary-50 dark:bg-primary-900/40"
                    aria-hidden="true"
                  >
                    <Icon className="h-6 w-6 text-primary-500 dark:text-[#2BC4C6]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-[var(--text-primary)]">
                      {feature.title}
                    </h3>
                    <p className="mt-2 max-w-2xl text-[var(--text-secondary)] leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* 4. What we deliberately excluded */}
      <section className="bg-[var(--bg-primary)]">
        <div className="mx-auto max-w-[1200px] px-4 py-16 sm:px-6 md:py-24 lg:px-8">
          <h2 className="text-2xl font-bold text-[var(--text-primary)] md:text-3xl">
            What we chose not to build.
          </h2>
          <p className="mt-4 max-w-2xl text-lg text-[var(--text-secondary)] leading-relaxed">
            Some features that other apps include can be weaponised in
            high-conflict or DV situations. We left them out on purpose.
          </p>

          <ul className="mt-8 space-y-4" role="list">
            {EXCLUDED_FEATURES.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <X
                  className="mt-0.5 h-5 w-5 shrink-0 text-neutral-400 dark:text-neutral-500"
                  aria-hidden="true"
                />
                <span className="text-[var(--text-secondary)]">{item}</span>
              </li>
            ))}
          </ul>

          <p className="mt-8 max-w-2xl text-sm text-[var(--text-tertiary)] leading-relaxed">
            Research from La Trobe University (2026) found that AI tone filtering
            in co-parenting apps can inadvertently suppress legitimate reports of
            abuse. CoRaise does not analyse, filter, or modify your messages in
            any way.
          </p>
        </div>
      </section>

      {/* 5. Safety resources */}
      <section className="bg-[var(--bg-secondary)]">
        <div className="mx-auto max-w-[1200px] px-4 py-16 sm:px-6 md:py-24 lg:px-8">
          <h2 className="text-2xl font-bold text-[var(--text-primary)] md:text-3xl">
            If you need help right now.
          </h2>
          <p className="mt-4 text-lg text-[var(--text-secondary)]">
            These services are free, confidential, and available 24 hours a day.
          </p>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {/* 1800RESPECT */}
            <Card className="flex flex-col justify-between">
              <div>
                <p className="text-sm font-semibold uppercase tracking-wider text-primary-500 dark:text-[#2BC4C6]">
                  {SAFETY_NUMBERS.respect.name}
                </p>
                <p className="mt-1 text-sm text-[var(--text-secondary)]">
                  {SAFETY_NUMBERS.respect.description}
                </p>
                <p className="mt-3">
                  <a
                    href="tel:1800737732"
                    className="text-2xl font-bold text-[var(--text-primary)] underline underline-offset-4 hover:text-primary-500 dark:hover:text-[#2BC4C6]"
                  >
                    {SAFETY_NUMBERS.respect.number}
                  </a>
                </p>
              </div>
              <a
                href="tel:1800737732"
                className="mt-6 inline-flex min-h-[48px] items-center justify-center rounded-lg bg-primary-500 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-primary-600 dark:bg-[#2BC4C6] dark:text-[#0F1419] dark:hover:bg-[#24A8AA]"
              >
                <Phone className="mr-2 h-4 w-4" aria-hidden="true" />
                Call now
              </a>
            </Card>

            {/* Lifeline */}
            <Card className="flex flex-col justify-between">
              <div>
                <p className="text-sm font-semibold uppercase tracking-wider text-primary-500 dark:text-[#2BC4C6]">
                  {SAFETY_NUMBERS.lifeline.name}
                </p>
                <p className="mt-1 text-sm text-[var(--text-secondary)]">
                  {SAFETY_NUMBERS.lifeline.description}
                </p>
                <p className="mt-3">
                  <a
                    href="tel:131114"
                    className="text-2xl font-bold text-[var(--text-primary)] underline underline-offset-4 hover:text-primary-500 dark:hover:text-[#2BC4C6]"
                  >
                    {SAFETY_NUMBERS.lifeline.number}
                  </a>
                </p>
              </div>
              <a
                href="tel:131114"
                className="mt-6 inline-flex min-h-[48px] items-center justify-center rounded-lg bg-primary-500 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-primary-600 dark:bg-[#2BC4C6] dark:text-[#0F1419] dark:hover:bg-[#24A8AA]"
              >
                <Phone className="mr-2 h-4 w-4" aria-hidden="true" />
                Call now
              </a>
            </Card>

            {/* Emergency */}
            <Card className="flex flex-col justify-between">
              <div>
                <p className="text-sm font-semibold uppercase tracking-wider text-primary-500 dark:text-[#2BC4C6]">
                  Emergency Services
                </p>
                <p className="mt-1 text-sm text-[var(--text-secondary)]">
                  Police, fire, ambulance
                </p>
                <p className="mt-3">
                  <a
                    href="tel:000"
                    className="text-2xl font-bold text-[var(--text-primary)] underline underline-offset-4 hover:text-primary-500 dark:hover:text-[#2BC4C6]"
                  >
                    000
                  </a>
                </p>
              </div>
              <a
                href="tel:000"
                className="mt-6 inline-flex min-h-[48px] items-center justify-center rounded-lg bg-primary-500 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-primary-600 dark:bg-[#2BC4C6] dark:text-[#0F1419] dark:hover:bg-[#24A8AA]"
              >
                <Phone className="mr-2 h-4 w-4" aria-hidden="true" />
                Call now
              </a>
            </Card>
          </div>

          <div className="mt-8">
            <a
              href="https://techsafety.org.au"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-[48px] items-center gap-1.5 text-sm font-medium text-primary-500 hover:text-primary-600 dark:text-[#2BC4C6] dark:hover:text-[#24A8AA]"
            >
              WESNET Technology Safety Australia
              <ExternalLink className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>
        </div>
      </section>

      {/* 6. FAQ */}
      <section className="bg-[var(--bg-primary)]">
        <div className="mx-auto max-w-[1200px] px-4 py-16 sm:px-6 md:py-24 lg:px-8">
          <h2 className="text-2xl font-bold text-[var(--text-primary)] md:text-3xl">
            Frequently asked questions
          </h2>

          <div className="mt-8 max-w-3xl">
            <Accordion items={FAQ_ITEMS} />
          </div>
        </div>
      </section>
    </>
  )
}
