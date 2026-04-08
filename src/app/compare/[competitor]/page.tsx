import { notFound } from 'next/navigation'
import Link from 'next/link'
import { Check, X, ArrowLeft, ChevronRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Accordion } from '@/components/ui/accordion'
import { JsonLd } from '@/components/seo/json-ld'
import { createMetadata } from '@/lib/metadata'
import { faqSchema, breadcrumbSchema } from '@/lib/structured-data'
import { APP_URL } from '@/lib/constants'
import {
  getAllCompetitorSlugs,
  getCompetitorBySlug,
  CORAISE_FEATURES,
  type CompetitorData,
} from '@/lib/competitors'
import type { Metadata } from 'next'

interface PageProps {
  params: Promise<{ competitor: string }>
}

export async function generateStaticParams() {
  const slugs = getAllCompetitorSlugs()
  return slugs.map((competitor) => ({ competitor }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { competitor: slug } = await params
  const data = getCompetitorBySlug(slug)
  if (!data) return {}

  return createMetadata({
    title: data.headline,
    description: data.description,
    path: `/compare/${slug}`,
  })
}

interface FeatureComparisonRow {
  label: string
  coraiseValue: boolean | string
  competitorValue: boolean | string
}

function getFeatureRows(competitor: CompetitorData): FeatureComparisonRow[] {
  return [
    {
      label: 'Data hosted in Australia',
      coraiseValue: true,
      competitorValue: competitor.dataHosting === 'Sydney, Australia',
    },
    {
      label: 'Annual cost (both parents)',
      coraiseValue: CORAISE_FEATURES.annualFamily,
      competitorValue: competitor.annualFamily,
    },
    {
      label: 'Billing model',
      coraiseValue: CORAISE_FEATURES.billingModel,
      competitorValue: competitor.billingModel,
    },
    {
      label: 'Free tier',
      coraiseValue: CORAISE_FEATURES.freeTier,
      competitorValue: competitor.freeTier,
    },
    {
      label: 'AU school terms',
      coraiseValue: CORAISE_FEATURES.auSchoolTerms,
      competitorValue: competitor.auSchoolTerms,
    },
    {
      label: 'State holidays',
      coraiseValue: CORAISE_FEATURES.auHolidays,
      competitorValue: competitor.auHolidays,
    },
    {
      label: 'Evidence Act exports',
      coraiseValue: CORAISE_FEATURES.evidenceAct,
      competitorValue: competitor.evidenceAct,
    },
    {
      label: 'SHA-256 hashing',
      coraiseValue: CORAISE_FEATURES.sha256,
      competitorValue: competitor.sha256,
    },
    {
      label: 'Emergency exit',
      coraiseValue: CORAISE_FEATURES.emergencyExit,
      competitorValue: competitor.emergencyExit,
    },
    {
      label: 'Harassment detection',
      coraiseValue: CORAISE_FEATURES.harassmentDetection,
      competitorValue: competitor.harassmentDetection,
    },
    {
      label: 'Photo sharing',
      coraiseValue: CORAISE_FEATURES.photoSharing,
      competitorValue: competitor.photoSharing,
    },
    {
      label: 'Document vault',
      coraiseValue: CORAISE_FEATURES.documentVault,
      competitorValue: competitor.documentVault,
    },
    {
      label: 'OCR receipts',
      coraiseValue: CORAISE_FEATURES.ocrReceipts,
      competitorValue: competitor.ocrReceipts,
    },
    {
      label: 'Professional portal',
      coraiseValue: CORAISE_FEATURES.professionalPortal,
      competitorValue: competitor.professionalPortal,
    },
    {
      label: 'Split billing',
      coraiseValue: CORAISE_FEATURES.splitBilling,
      competitorValue: competitor.splitBilling,
    },
  ]
}

function FeatureIcon({ value }: { value: boolean | string }) {
  if (typeof value === 'string') {
    return <span className="text-sm text-[var(--text-primary)]">{value}</span>
  }
  if (value) {
    return <Check className="h-5 w-5 text-success" aria-label="Yes" />
  }
  return (
    <X className="h-5 w-5 text-neutral-300 dark:text-neutral-600" aria-label="No" />
  )
}

export default async function CompetitorPage({ params }: PageProps) {
  const { competitor: slug } = await params
  const data = getCompetitorBySlug(slug)

  if (!data) notFound()

  const featureRows = getFeatureRows(data)

  return (
    <>
      <JsonLd data={faqSchema(data.faq)} />
      <JsonLd
        data={breadcrumbSchema([
          { name: 'Home', href: '/' },
          { name: 'Compare', href: '/compare' },
          { name: `vs ${data.name}`, href: `/compare/${slug}` },
        ])}
      />

      {/* Hero */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          {/* Back link */}
          <Link
            href="/compare"
            className="inline-flex items-center gap-1 text-sm text-[var(--text-tertiary)] hover:text-[var(--text-secondary)] transition-colors min-h-[48px]"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            All comparisons
          </Link>

          <h1 className="mt-6 text-3xl font-bold tracking-tight text-[var(--text-primary)] sm:text-4xl lg:text-5xl">
            {data.headline}
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-[var(--text-secondary)]">
            {data.description}
          </p>

          {/* Quick stats */}
          <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
            <div className="rounded-xl bg-[var(--bg-secondary)] border border-[var(--border-default)] p-4 text-center">
              <p className="text-xs text-[var(--text-tertiary)] uppercase tracking-wider">
                Origin
              </p>
              <p className="mt-1 text-sm font-semibold text-[var(--text-primary)]">
                {data.origin}
              </p>
            </div>
            <div className="rounded-xl bg-[var(--bg-secondary)] border border-[var(--border-default)] p-4 text-center">
              <p className="text-xs text-[var(--text-tertiary)] uppercase tracking-wider">
                Data hosting
              </p>
              <p className="mt-1 text-sm font-semibold text-[var(--text-primary)]">
                {data.dataHosting}
              </p>
            </div>
            <div className="rounded-xl bg-[var(--bg-secondary)] border border-[var(--border-default)] p-4 text-center">
              <p className="text-xs text-[var(--text-tertiary)] uppercase tracking-wider">
                Annual cost
              </p>
              <p className="mt-1 text-sm font-semibold text-[var(--text-primary)]">
                {data.annualFamily}
              </p>
            </div>
            <div className="rounded-xl bg-[var(--bg-secondary)] border border-[var(--border-default)] p-4 text-center">
              <p className="text-xs text-[var(--text-tertiary)] uppercase tracking-wider">
                Billing
              </p>
              <p className="mt-1 text-sm font-semibold text-[var(--text-primary)]">
                {data.billingModel}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Comparison Table */}
      <section className="bg-[var(--bg-secondary)] py-16 md:py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <h2 className="text-2xl font-bold text-[var(--text-primary)] text-center">
            Feature comparison
          </h2>
          <p className="mt-2 text-center text-sm text-[var(--text-secondary)]">
            CoRaise vs {data.name} - feature by feature.
          </p>

          {/* Desktop table */}
          <div className="mt-8 hidden sm:block overflow-x-auto">
            <table className="w-full text-left" role="table">
              <thead>
                <tr className="border-b-2 border-[var(--border-strong)]">
                  <th className="py-4 pr-4 text-sm font-semibold text-[var(--text-primary)]">
                    Feature
                  </th>
                  <th className="py-4 px-4 text-sm font-semibold text-primary-500 dark:text-[#2BC4C6] text-center">
                    CoRaise
                  </th>
                  <th className="py-4 pl-4 text-sm font-semibold text-[var(--text-primary)] text-center">
                    {data.name}
                  </th>
                </tr>
              </thead>
              <tbody>
                {featureRows.map((row) => (
                  <tr
                    key={row.label}
                    className="border-b border-[var(--border-default)]"
                  >
                    <td className="py-3.5 pr-4 text-sm text-[var(--text-primary)]">
                      {row.label}
                    </td>
                    <td className="py-3.5 px-4 text-center bg-primary-50/50 dark:bg-[#0F2C2C]/30">
                      <div className="flex justify-center">
                        <FeatureIcon value={row.coraiseValue} />
                      </div>
                    </td>
                    <td className="py-3.5 pl-4 text-center">
                      <div className="flex justify-center">
                        <FeatureIcon value={row.competitorValue} />
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile cards */}
          <div className="mt-8 sm:hidden space-y-3">
            {featureRows.map((row) => (
              <div
                key={row.label}
                className="rounded-xl border border-[var(--border-default)] bg-[var(--bg-primary)] p-4"
              >
                <p className="text-sm font-semibold text-[var(--text-primary)] mb-3">
                  {row.label}
                </p>
                <div className="grid grid-cols-2 gap-2">
                  <div className="flex items-center gap-2 bg-primary-50/50 dark:bg-[#0F2C2C]/30 rounded-lg px-3 py-2">
                    <FeatureIcon value={row.coraiseValue} />
                    <span className="text-xs font-medium text-primary-500 dark:text-[#2BC4C6]">
                      CoRaise
                    </span>
                  </div>
                  <div className="flex items-center gap-2 rounded-lg px-3 py-2">
                    <FeatureIcon value={row.competitorValue} />
                    <span className="text-xs text-[var(--text-tertiary)]">{data.name}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Switch */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <h2 className="text-2xl font-bold text-[var(--text-primary)]">
            {data.whySwitchTitle}
          </h2>
          <ul className="mt-6 space-y-4" role="list">
            {data.whySwitchPoints.map((point) => (
              <li key={point} className="flex items-start gap-3">
                <Check
                  className="mt-0.5 h-5 w-5 shrink-0 text-primary-500 dark:text-[#2BC4C6]"
                  aria-hidden="true"
                />
                <span className="text-[var(--text-secondary)]">{point}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Key Weaknesses */}
      <section className="bg-[var(--bg-secondary)] py-16 md:py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <h2 className="text-2xl font-bold text-[var(--text-primary)]">
            Where {data.name} falls short for Australian families
          </h2>
          <ul className="mt-6 space-y-4" role="list">
            {data.keyWeaknesses.map((weakness) => (
              <li key={weakness} className="flex items-start gap-3">
                <X
                  className="mt-0.5 h-5 w-5 shrink-0 text-neutral-400 dark:text-neutral-500"
                  aria-hidden="true"
                />
                <span className="text-[var(--text-secondary)]">{weakness}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Pricing Comparison */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <h2 className="text-2xl font-bold text-[var(--text-primary)] text-center">
            Pricing comparison
          </h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            {/* CoRaise pricing */}
            <div className="rounded-xl border-2 border-primary-500 dark:border-[#2BC4C6] bg-[var(--bg-primary)] p-6">
              <p className="text-xs font-semibold uppercase tracking-wider text-primary-500 dark:text-[#2BC4C6]">
                CoRaise
              </p>
              <p className="mt-3 text-3xl font-bold text-[var(--text-primary)]">
                $120 - $180
              </p>
              <p className="text-sm text-[var(--text-secondary)]">per year, both parents</p>
              <ul className="mt-4 space-y-2" role="list">
                <li className="flex items-center gap-2 text-sm text-[var(--text-secondary)]">
                  <Check
                    className="h-4 w-4 text-primary-500 dark:text-[#2BC4C6]"
                    aria-hidden="true"
                  />
                  Free tier available permanently
                </li>
                <li className="flex items-center gap-2 text-sm text-[var(--text-secondary)]">
                  <Check
                    className="h-4 w-4 text-primary-500 dark:text-[#2BC4C6]"
                    aria-hidden="true"
                  />
                  Split billing ($4.99-$7.49 each)
                </li>
                <li className="flex items-center gap-2 text-sm text-[var(--text-secondary)]">
                  <Check
                    className="h-4 w-4 text-primary-500 dark:text-[#2BC4C6]"
                    aria-hidden="true"
                  />
                  One subscription, both parents
                </li>
              </ul>
            </div>

            {/* Competitor pricing */}
            <div className="rounded-xl border border-[var(--border-default)] bg-[var(--bg-primary)] p-6">
              <p className="text-xs font-semibold uppercase tracking-wider text-[var(--text-tertiary)]">
                {data.name}
              </p>
              <p className="mt-3 text-3xl font-bold text-[var(--text-primary)]">
                {data.annualFamily}
              </p>
              <p className="text-sm text-[var(--text-secondary)]">per year, both parents</p>
              <ul className="mt-4 space-y-2" role="list">
                <li className="flex items-center gap-2 text-sm text-[var(--text-secondary)]">
                  {data.freeTier ? (
                    <Check className="h-4 w-4 text-success" aria-hidden="true" />
                  ) : (
                    <X
                      className="h-4 w-4 text-neutral-300 dark:text-neutral-600"
                      aria-hidden="true"
                    />
                  )}
                  {data.freeTier ? 'Free tier available' : 'No free tier'}
                </li>
                <li className="flex items-center gap-2 text-sm text-[var(--text-secondary)]">
                  {data.splitBilling ? (
                    <Check className="h-4 w-4 text-success" aria-hidden="true" />
                  ) : (
                    <X
                      className="h-4 w-4 text-neutral-300 dark:text-neutral-600"
                      aria-hidden="true"
                    />
                  )}
                  {data.billingModel}
                </li>
                <li className="flex items-center gap-2 text-sm text-[var(--text-secondary)]">
                  <X
                    className="h-4 w-4 text-neutral-300 dark:text-neutral-600"
                    aria-hidden="true"
                  />
                  Data hosted in {data.dataHosting}
                </li>
              </ul>
            </div>
          </div>
          <p className="mt-4 text-xs text-[var(--text-tertiary)]">
            Prices are approximate and based on publicly available information as of April 2026.
            Converted to AUD where applicable.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-[var(--bg-secondary)] py-16 md:py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <h2 className="text-2xl font-bold text-[var(--text-primary)] text-center">
            Frequently asked questions
          </h2>
          <div className="mt-10">
            <Accordion items={data.faq} />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 text-center">
        <div className="mx-auto max-w-2xl px-4 sm:px-6">
          <h2 className="text-3xl font-bold text-[var(--text-primary)]">Try CoRaise free</h2>
          <p className="mt-4 text-lg text-[var(--text-secondary)]">
            No credit card needed. Start with the free plan and upgrade when you are ready.
            One subscription covers both parents.
          </p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Button href={`${APP_URL}/register`} variant="primary" size="lg">
              Get Started Free
            </Button>
            <Button href="/compare" variant="secondary" size="lg">
              See All Comparisons
              <ChevronRight className="ml-1 h-4 w-4" aria-hidden="true" />
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
