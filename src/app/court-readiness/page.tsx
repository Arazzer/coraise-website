import {
  MessageCircle,
  Lock,
  Database,
  FileText,
  Award,
  ArrowRight,
  Check,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Accordion } from '@/components/ui/accordion'
import { JsonLd } from '@/components/seo/json-ld'
import { createMetadata } from '@/lib/metadata'
import { faqSchema, breadcrumbSchema } from '@/lib/structured-data'
import { APP_URL } from '@/lib/constants'
import type { LucideIcon } from 'lucide-react'

/* ------------------------------------------------------------------ */
/*  Metadata                                                          */
/* ------------------------------------------------------------------ */

export const metadata = createMetadata({
  title: 'Court Readiness',
  description:
    'CoRaise provides court-admissible communication records with SHA-256 integrity verification, append-only storage, and Evidence Act 1995 (Cth) compliance for Australian family law.',
  path: '/court-readiness',
})

/* ------------------------------------------------------------------ */
/*  Data                                                              */
/* ------------------------------------------------------------------ */

interface PipelineStep {
  icon: LucideIcon
  number: number
  title: string
  description: string
}

const PIPELINE_STEPS: PipelineStep[] = [
  {
    icon: MessageCircle,
    number: 1,
    title: 'Parent sends message',
    description: 'Message content is finalised after preview and cooldown.',
  },
  {
    icon: Lock,
    number: 2,
    title: 'SHA-256 hash generated',
    description: 'A unique digital fingerprint is created from the content.',
  },
  {
    icon: Database,
    number: 3,
    title: 'Stored in append-only database',
    description: 'The record cannot be edited, deleted, or overwritten.',
  },
  {
    icon: FileText,
    number: 4,
    title: 'Audit log entry created',
    description: 'Every action is logged with timestamp and user identity.',
  },
  {
    icon: Award,
    number: 5,
    title: 'Court export with certificate',
    description: 'PDF includes integrity verification and certificate of authenticity.',
  },
]

interface EvidenceSection {
  section: string
  title: string
  description: string
}

const EVIDENCE_SECTIONS: EvidenceSection[] = [
  {
    section: 'Section 146',
    title: 'Documents produced by processes or devices',
    description:
      'SHA-256 hashes are generated automatically by a database trigger at the moment of insertion - not by user action. This satisfies the requirement that the document was produced by a process that is reliable and operating correctly.',
  },
  {
    section: 'Section 147',
    title: 'Documents in possession of a party',
    description:
      'Court exports include the complete, unaltered record of all communications, calendar events, and expenses. Both parents have equal access to export the full record at any time.',
  },
  {
    section: 'Section 161',
    title: 'Electronic communications',
    description:
      'Every message includes server-side timestamps, delivery confirmation, and the identity of the sender. The append-only architecture means the record reflects exactly what was sent and when.',
  },
]

const EXPORT_CONTENTS = [
  'Cover page with family details and export date',
  'Table of contents for easy navigation',
  'Chronological message history with timestamps',
  'Calendar events and schedule changes',
  'Expenses with receipt images',
  'Child information records',
  'Complete audit log of all actions',
  'Certificate of authenticity with SHA-256 verification',
]

const FAQ_ITEMS = [
  {
    question: 'Are CoRaise records accepted in Australian courts?',
    answer:
      'CoRaise records are designed to meet the requirements of the Evidence Act 1995 (Cth). Every message is time-stamped, cryptographically hashed, and stored in append-only records. While no software can guarantee admissibility (that is a decision for the court), CoRaise provides the technical foundation that legal professionals require.',
  },
  {
    question: 'Can messages be edited or deleted after sending?',
    answer:
      'No. Messages in CoRaise cannot be edited, deleted, or modified after they are sent. This is enforced at the database level by PostgreSQL triggers, not by application code. Even database administrators cannot alter a sent message without the change being detected by the SHA-256 hash.',
  },
  {
    question: 'What is included in a court export?',
    answer:
      'A court export is a PDF document containing your complete communication history, calendar events, expenses with receipts, child information, and a full audit log. It includes a cover page, table of contents, and a certificate of authenticity with SHA-256 integrity verification for every message.',
  },
  {
    question: 'Can my co-parent generate a different version of the record?',
    answer:
      'No. Both parents export from the same database. The records are identical because neither parent can edit, delete, or modify any entry. If both parents export the same date range, the exports will be byte-for-byte identical.',
  },
  {
    question: 'How does CoRaise compare to screenshots for court evidence?',
    answer:
      'Screenshots can be edited, cropped, or taken out of context. They lack verifiable timestamps and have no chain of custody. CoRaise exports include cryptographic verification, complete context, and are generated directly from the database - not from a screen capture.',
  },
]

/* ------------------------------------------------------------------ */
/*  Page                                                              */
/* ------------------------------------------------------------------ */

export default function CourtReadinessPage() {
  return (
    <>
      {/* Structured data */}
      <JsonLd data={faqSchema(FAQ_ITEMS)} />
      <JsonLd
        data={breadcrumbSchema([
          { name: 'Home', href: '/' },
          { name: 'Court Readiness', href: '/court-readiness' },
        ])}
      />

      {/* 1. Hero */}
      <section className="bg-[var(--bg-primary)]">
        <div className="mx-auto max-w-3xl px-4 py-16 text-center sm:px-6 md:py-24">
          <h1 className="text-4xl font-bold tracking-tight text-[var(--text-primary)] sm:text-5xl">
            The record that speaks for itself.
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-[var(--text-secondary)]">
            Every message in CoRaise is cryptographically hashed the moment it is
            sent. Records cannot be edited, deleted, or disputed.
          </p>
        </div>
      </section>

      {/* 2. Pipeline visual */}
      <section className="bg-[var(--bg-secondary)]">
        <div className="mx-auto max-w-[1200px] px-4 py-16 sm:px-6 md:py-24 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-widest text-primary-500 dark:text-[#2BC4C6]">
            How it works
          </p>
          <h2 className="mt-2 text-2xl font-bold text-[var(--text-primary)] md:text-3xl">
            From message to court record.
          </h2>

          {/* Desktop: horizontal pipeline */}
          <div className="mt-12 hidden md:block">
            <div className="grid grid-cols-5 gap-0">
              {PIPELINE_STEPS.map((step, index) => {
                const Icon = step.icon
                return (
                  <div key={step.number} className="relative flex flex-col items-center text-center">
                    {/* Connector line */}
                    {index < PIPELINE_STEPS.length - 1 && (
                      <div
                        className="absolute left-[calc(50%+28px)] top-7 h-0.5 bg-primary-200 dark:bg-primary-800"
                        style={{ width: 'calc(100% - 56px)' }}
                        aria-hidden="true"
                      />
                    )}
                    {/* Icon circle */}
                    <div className="relative z-10 flex h-14 w-14 items-center justify-center rounded-full bg-primary-50 ring-4 ring-[var(--bg-secondary)] dark:bg-primary-900/40 dark:ring-[var(--bg-secondary)]">
                      <Icon className="h-6 w-6 text-primary-500 dark:text-[#2BC4C6]" />
                    </div>
                    {/* Number */}
                    <span className="mt-4 flex h-6 w-6 items-center justify-center rounded-full bg-primary-500 text-xs font-bold text-white dark:bg-[#2BC4C6] dark:text-[#0F1419]">
                      {step.number}
                    </span>
                    {/* Title */}
                    <h3 className="mt-2 text-sm font-semibold text-[var(--text-primary)]">
                      {step.title}
                    </h3>
                    {/* Description */}
                    <p className="mt-1 text-xs text-[var(--text-secondary)] leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Mobile: vertical pipeline */}
          <div className="mt-12 space-y-0 md:hidden">
            {PIPELINE_STEPS.map((step, index) => {
              const Icon = step.icon
              return (
                <div key={step.number} className="relative flex gap-4">
                  {/* Vertical line */}
                  <div className="flex flex-col items-center">
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-primary-50 dark:bg-primary-900/40">
                      <Icon className="h-6 w-6 text-primary-500 dark:text-[#2BC4C6]" />
                    </div>
                    {index < PIPELINE_STEPS.length - 1 && (
                      <div
                        className="w-0.5 grow bg-primary-200 dark:bg-primary-800"
                        aria-hidden="true"
                      />
                    )}
                  </div>
                  {/* Content */}
                  <div className="pb-8">
                    <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-primary-500 text-xs font-bold text-white dark:bg-[#2BC4C6] dark:text-[#0F1419]">
                      {step.number}
                    </span>
                    <h3 className="mt-1 text-base font-semibold text-[var(--text-primary)]">
                      {step.title}
                    </h3>
                    <p className="mt-1 text-sm text-[var(--text-secondary)] leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* 3. SHA-256 explained */}
      <section className="bg-[var(--bg-primary)]">
        <div className="mx-auto max-w-[1200px] px-4 py-16 sm:px-6 md:py-24 lg:px-8">
          <h2 className="text-2xl font-bold text-[var(--text-primary)] md:text-3xl">
            What is a SHA-256 hash?
          </h2>
          <p className="mt-4 max-w-2xl text-lg text-[var(--text-secondary)] leading-relaxed">
            Think of it as a digital fingerprint. Every message gets a unique
            code generated from its content. If even one character were changed,
            the fingerprint would be completely different.
          </p>

          <div className="mt-10 max-w-2xl space-y-6">
            {/* Original message */}
            <div className="rounded-xl border border-[var(--border-default)] bg-[var(--bg-secondary)] p-5">
              <p className="text-xs font-semibold uppercase tracking-wider text-primary-500 dark:text-[#2BC4C6]">
                Original message
              </p>
              <p className="mt-2 text-[var(--text-primary)]">
                &quot;Can you pick up the kids at 3:30 on Friday?&quot;
              </p>
              <p className="mt-3 text-xs text-[var(--text-tertiary)]">
                SHA-256 hash:
              </p>
              <p className="mt-1 break-all font-mono text-sm text-primary-500 dark:text-[#2BC4C6]">
                a7f3d2e1b9c8f4a6e5d3c2b1a0f9e8d7c6b5a4f3e2d1c0b9a8f7e6d5c4b3a2f1
              </p>
            </div>

            {/* Changed message */}
            <div className="rounded-xl border border-[var(--border-default)] bg-[var(--bg-secondary)] p-5">
              <p className="text-xs font-semibold uppercase tracking-wider text-neutral-500 dark:text-neutral-400">
                Changed message (one word different)
              </p>
              <p className="mt-2 text-[var(--text-primary)]">
                &quot;Can you pick up the kids at{' '}
                <span className="font-semibold underline decoration-warning decoration-2 underline-offset-2">
                  4:00
                </span>{' '}
                on Friday?&quot;
              </p>
              <p className="mt-3 text-xs text-[var(--text-tertiary)]">
                SHA-256 hash:
              </p>
              <p className="mt-1 break-all font-mono text-sm text-neutral-500 dark:text-neutral-400">
                9e8d7c6b5a4f3e2d1c0b9a8f7e6d5c4b3a2f1e0d9c8b7a6f5e4d3c2b1a0f9e8
              </p>
            </div>

            <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
              The two hashes are completely different. Even changing
              &quot;3:30&quot; to &quot;4:00&quot; produces an entirely new
              fingerprint. This means any tampering is immediately detectable.
            </p>
          </div>
        </div>
      </section>

      {/* 4. Evidence Act compliance */}
      <section className="bg-[var(--bg-secondary)]">
        <div className="mx-auto max-w-[1200px] px-4 py-16 sm:px-6 md:py-24 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-widest text-primary-500 dark:text-[#2BC4C6]">
            Legal compliance
          </p>
          <h2 className="mt-2 text-2xl font-bold text-[var(--text-primary)] md:text-3xl">
            Evidence Act 1995 (Cth) compliance
          </h2>

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {EVIDENCE_SECTIONS.map((item) => (
              <Card key={item.section}>
                <p className="text-sm font-bold text-primary-500 dark:text-[#2BC4C6]">
                  {item.section}
                </p>
                <h3 className="mt-2 text-lg font-semibold text-[var(--text-primary)]">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm text-[var(--text-secondary)] leading-relaxed">
                  {item.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Certified Records Export */}
      <section className="bg-[var(--bg-primary)]">
        <div className="mx-auto max-w-[1200px] px-4 py-16 sm:px-6 md:py-24 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-widest text-primary-500 dark:text-[#2BC4C6]">
            Court exports
          </p>
          <h2 className="mt-2 text-2xl font-bold text-[var(--text-primary)] md:text-3xl">
            What your lawyer receives.
          </h2>
          <p className="mt-4 max-w-2xl text-lg text-[var(--text-secondary)] leading-relaxed">
            A single, structured PDF document containing your complete
            co-parenting record. No screenshots. No sorting. No missing context.
          </p>

          <ul className="mt-8 grid gap-3 sm:grid-cols-2" role="list">
            {EXPORT_CONTENTS.map((item) => (
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
      </section>

      {/* 6. Technical details (collapsible) */}
      <section className="bg-[var(--bg-secondary)]">
        <div className="mx-auto max-w-[1200px] px-4 py-16 sm:px-6 md:py-24 lg:px-8">
          <details className="group rounded-xl border border-[var(--border-default)] bg-[var(--bg-primary)]">
            <summary className="flex min-h-[56px] cursor-pointer list-none items-center justify-between px-6 py-4 text-base font-semibold text-[var(--text-primary)] [&::-webkit-details-marker]:hidden">
              Technical details for IT professionals and legal technologists
              <ArrowRight
                className="h-5 w-5 shrink-0 text-[var(--text-tertiary)] transition-transform duration-200 group-open:rotate-90"
                aria-hidden="true"
              />
            </summary>
            <div className="border-t border-[var(--border-default)] px-6 py-6">
              <div className="space-y-6 text-sm text-[var(--text-secondary)] leading-relaxed">
                <div>
                  <h4 className="font-semibold text-[var(--text-primary)]">
                    Hash generation
                  </h4>
                  <p className="mt-1">
                    SHA-256 content hashes are generated by a PostgreSQL{' '}
                    <code className="rounded bg-[var(--bg-tertiary)] px-1.5 py-0.5 font-mono text-xs">
                      BEFORE INSERT
                    </code>{' '}
                    trigger on the{' '}
                    <code className="rounded bg-[var(--bg-tertiary)] px-1.5 py-0.5 font-mono text-xs">
                      messages
                    </code>{' '}
                    table. The hash is computed from the message body, sender ID,
                    and timestamp. Application code cannot override the generated
                    hash.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-[var(--text-primary)]">
                    Append-only enforcement
                  </h4>
                  <p className="mt-1">
                    PostgreSQL triggers block{' '}
                    <code className="rounded bg-[var(--bg-tertiary)] px-1.5 py-0.5 font-mono text-xs">
                      UPDATE
                    </code>{' '}
                    and{' '}
                    <code className="rounded bg-[var(--bg-tertiary)] px-1.5 py-0.5 font-mono text-xs">
                      DELETE
                    </code>{' '}
                    operations on content columns of the messages, expenses, and
                    receipts tables. This is enforced at the database level, not
                    by application code.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-[var(--text-primary)]">
                    Audit log
                  </h4>
                  <p className="mt-1">
                    All data mutations generate entries in the{' '}
                    <code className="rounded bg-[var(--bg-tertiary)] px-1.5 py-0.5 font-mono text-xs">
                      audit_log
                    </code>{' '}
                    table via database triggers. Each entry records the action
                    type, table, row ID, user ID, timestamp, and both old and new
                    values. The audit log itself is append-only.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-[var(--text-primary)]">
                    Row-Level Security
                  </h4>
                  <p className="mt-1">
                    PostgreSQL Row-Level Security (RLS) is enabled on every
                    table. Access is restricted to authenticated users belonging
                    to the same family. Even the API server cannot access data
                    outside the requesting user&apos;s family context.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-[var(--text-primary)]">
                    Data sovereignty
                  </h4>
                  <p className="mt-1">
                    All data is stored in Sydney, Australia (AWS ap-southeast-2).
                    The database, file storage, and application servers are all
                    located in the same region. Data never leaves Australian
                    jurisdiction.
                  </p>
                </div>
              </div>
            </div>
          </details>
        </div>
      </section>

      {/* 7. FAQ */}
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

      {/* 8. CTA */}
      <section className="bg-primary-500 dark:bg-primary-700">
        <div className="mx-auto max-w-[1200px] px-4 py-16 text-center sm:px-6 md:py-20 lg:px-8 lg:py-24">
          <h2 className="text-2xl font-bold text-white md:text-3xl">
            Start building your record today.
          </h2>
          <p className="mt-4 text-lg text-white/80">
            Every message is hashed and stored from day one. The sooner you
            start, the more complete your record.
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
