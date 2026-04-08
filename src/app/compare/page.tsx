import Link from 'next/link'
import { Check, X, AlertTriangle, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Accordion } from '@/components/ui/accordion'
import { JsonLd } from '@/components/seo/json-ld'
import { createMetadata } from '@/lib/metadata'
import { faqSchema, breadcrumbSchema, softwareApplicationSchema } from '@/lib/structured-data'
import { APP_URL } from '@/lib/constants'

export const metadata = createMetadata({
  title: 'Compare Co-Parenting Apps Australia 2026',
  description:
    'Compare CoRaise with OurFamilyWizard, TalkingParents, AppClose, and 2Houses. See which co-parenting app offers the best value for Australian families in 2026.',
  path: '/compare',
})

interface FeatureRow {
  label: string
  coraise: boolean | string
  ofw: boolean | string
  tp: boolean | string
  appclose: boolean | string
}

const featureRows: FeatureRow[] = [
  {
    label: 'Data hosted in Australia',
    coraise: true,
    ofw: false,
    tp: false,
    appclose: false,
  },
  {
    label: 'Annual cost (both parents)',
    coraise: '$120 - $180',
    ofw: '$330 - $900',
    tp: '$210 - $960',
    appclose: '~$336',
  },
  {
    label: 'One subscription, both parents',
    coraise: true,
    ofw: false,
    tp: false,
    appclose: false,
  },
  { label: 'Free tier', coraise: true, ofw: false, tp: false, appclose: false },
  { label: 'AU school terms', coraise: true, ofw: false, tp: false, appclose: false },
  { label: 'State holidays', coraise: true, ofw: false, tp: false, appclose: false },
  { label: 'Evidence Act exports', coraise: true, ofw: false, tp: false, appclose: false },
  { label: 'SHA-256 hashing', coraise: true, ofw: false, tp: false, appclose: false },
  { label: 'Emergency exit', coraise: true, ofw: false, tp: false, appclose: false },
  {
    label: 'Harassment detection',
    coraise: true,
    ofw: false,
    tp: false,
    appclose: false,
  },
  { label: 'Photo sharing', coraise: true, ofw: true, tp: false, appclose: false },
  { label: 'Document vault', coraise: true, ofw: false, tp: false, appclose: false },
  { label: 'OCR receipts', coraise: true, ofw: false, tp: false, appclose: false },
  {
    label: 'Professional portal',
    coraise: true,
    ofw: true,
    tp: false,
    appclose: false,
  },
  { label: 'Split billing', coraise: true, ofw: false, tp: false, appclose: false },
]

const competitorNarratives = [
  {
    slug: 'ourfamilywizard',
    name: 'OurFamilyWizard',
    summary:
      'The longest-established co-parenting app, founded in the US in 2001. Recognised in some Australian courts but hampered by per-parent billing ($330-$900/year for a family), US-only data hosting, and no Australian localisation. Trustpilot AU rating: 2.9/5.',
  },
  {
    slug: 'talkingparents',
    name: 'TalkingParents',
    summary:
      'Known for "unalterable records" messaging. Built a large user base on its free tier, which is ending in June 2026. Paid plans cost up to $960/year for both parents. No Australian school terms, no DV safety features, and data stored in the US.',
  },
  {
    slug: 'appclose',
    name: 'AppClose',
    summary:
      'A budget US competitor that removed its free tier in January 2026, frustrating longtime users. Costs approximately $336/year for both parents. Lacks court export optimisation, DV safety features, and any Australian localisation.',
  },
  {
    slug: '2houses',
    name: '2Houses',
    summary:
      'A French-origin platform with the fairest competitor pricing model (per-family, ~$170/year). However, data is hosted in the EU/US, there are no Australian school terms or holidays, no tamper-proof messaging, and no DV safety features.',
  },
]

const faqItems = [
  {
    question: 'Which co-parenting app is best for Australian families?',
    answer:
      'CoRaise is the only co-parenting platform built specifically for Australian families. It is the only app that combines Australian data hosting (Sydney), school term and state holiday calendars, Evidence Act 1995 compliant exports, DV safety features, and per-family split billing.',
  },
  {
    question: 'Why does Australian data hosting matter for a co-parenting app?',
    answer:
      'Family law records contain sensitive information about children, finances, and domestic situations. Australian privacy legislation (Privacy Act 1988) governs how this data is handled. Data stored overseas may not be subject to the same protections. CoRaise stores all data exclusively in Sydney, Australia.',
  },
  {
    question: 'Can I use US co-parenting app records in Australian family courts?',
    answer:
      'While Australian courts can accept digital evidence from any source, records from US apps do not specifically comply with the Evidence Act 1995 (Cth). CoRaise exports include SHA-256 integrity verification and a certificate of authenticity designed for Australian court requirements.',
  },
  {
    question: 'What is split billing and why does it matter?',
    answer:
      'Split billing means one subscription covers both parents. On CoRaise, the Family plan costs $9.99/month total, and both parents can split the cost ($4.99 each). Most competitors charge each parent separately, effectively doubling the family cost.',
  },
  {
    question: 'Is there a free co-parenting app in Australia?',
    answer:
      'CoRaise offers a permanent free tier that includes 50 messages per month, a shared calendar, basic expense logging, and the emergency exit safety feature. TalkingParents and AppClose have both removed their free tiers in 2026.',
  },
  {
    question: 'What DV safety features should a co-parenting app have?',
    answer:
      'At minimum: an emergency exit button, no typing indicators, hidden notification previews, block/restrict mode, and session timeouts. CoRaise also includes harassment detection and a cooling-off timer between messages. Most competitors offer none of these features.',
  },
]

function FeatureIcon({ value }: { value: boolean | string }) {
  if (typeof value === 'string') {
    return <span className="text-sm text-[var(--text-primary)]">{value}</span>
  }
  if (value) {
    return (
      <Check
        className="h-5 w-5 text-success"
        aria-label="Yes"
      />
    )
  }
  return (
    <X
      className="h-5 w-5 text-neutral-300 dark:text-neutral-600"
      aria-label="No"
    />
  )
}

export default function ComparePage() {
  return (
    <>
      <JsonLd data={faqSchema(faqItems)} />
      <JsonLd data={softwareApplicationSchema()} />
      <JsonLd
        data={breadcrumbSchema([
          { name: 'Home', href: '/' },
          { name: 'Compare', href: '/compare' },
        ])}
      />

      {/* Hero */}
      <section className="py-16 md:py-24 text-center">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <h1 className="text-4xl font-bold tracking-tight text-[var(--text-primary)] sm:text-5xl">
            Compare CoRaise with other co-parenting apps.
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-[var(--text-secondary)]">
            See how CoRaise stacks up against OurFamilyWizard, TalkingParents, AppClose, and
            2Houses on features, pricing, and Australian suitability.
          </p>
        </div>
      </section>

      {/* Warning Banner */}
      <section className="pb-12 md:pb-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <div className="rounded-xl bg-warning-light border border-warning/20 p-6 dark:bg-[#2d2410] dark:border-[#f6ad55]/20">
            <div className="flex gap-3">
              <AlertTriangle
                className="h-6 w-6 shrink-0 text-warning mt-0.5"
                aria-hidden="true"
              />
              <div>
                <p className="font-semibold text-[var(--text-primary)]">
                  Major pricing changes in 2026
                </p>
                <p className="mt-1 text-sm text-[var(--text-secondary)]">
                  TalkingParents is ending its free tier in June 2026. AppClose already removed its
                  free plan in January 2026. If you are using either platform for free, you will need
                  to switch to a paid plan or find an alternative. CoRaise offers a permanent free tier.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Table - Desktop */}
      <section className="pb-16 md:pb-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          {/* Desktop table */}
          <div className="hidden md:block overflow-x-auto">
            <table className="w-full text-left" role="table">
              <thead>
                <tr className="border-b-2 border-[var(--border-strong)]">
                  <th className="py-4 pr-4 text-sm font-semibold text-[var(--text-primary)] w-[200px]">
                    Feature
                  </th>
                  <th className="py-4 px-4 text-sm font-semibold text-primary-500 dark:text-[#2BC4C6] text-center w-[150px]">
                    CoRaise
                  </th>
                  <th className="py-4 px-4 text-sm font-semibold text-[var(--text-primary)] text-center w-[150px]">
                    OurFamilyWizard
                  </th>
                  <th className="py-4 px-4 text-sm font-semibold text-[var(--text-primary)] text-center w-[150px]">
                    TalkingParents
                  </th>
                  <th className="py-4 pl-4 text-sm font-semibold text-[var(--text-primary)] text-center w-[150px]">
                    AppClose
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
                        <FeatureIcon value={row.coraise} />
                      </div>
                    </td>
                    <td className="py-3.5 px-4 text-center">
                      <div className="flex justify-center">
                        <FeatureIcon value={row.ofw} />
                      </div>
                    </td>
                    <td className="py-3.5 px-4 text-center">
                      <div className="flex justify-center">
                        <FeatureIcon value={row.tp} />
                      </div>
                    </td>
                    <td className="py-3.5 pl-4 text-center">
                      <div className="flex justify-center">
                        <FeatureIcon value={row.appclose} />
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile cards */}
          <div className="md:hidden space-y-4">
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
                    <FeatureIcon value={row.coraise} />
                    <span className="text-xs font-medium text-primary-500 dark:text-[#2BC4C6]">
                      CoRaise
                    </span>
                  </div>
                  <div className="flex items-center gap-2 rounded-lg px-3 py-2">
                    <FeatureIcon value={row.ofw} />
                    <span className="text-xs text-[var(--text-tertiary)]">OFW</span>
                  </div>
                  <div className="flex items-center gap-2 rounded-lg px-3 py-2">
                    <FeatureIcon value={row.tp} />
                    <span className="text-xs text-[var(--text-tertiary)]">TalkingParents</span>
                  </div>
                  <div className="flex items-center gap-2 rounded-lg px-3 py-2">
                    <FeatureIcon value={row.appclose} />
                    <span className="text-xs text-[var(--text-tertiary)]">AppClose</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <p className="mt-4 text-xs text-[var(--text-tertiary)]">
            Feature data based on publicly available information as of April 2026. Contact us if
            you believe any information is inaccurate.
          </p>
        </div>
      </section>

      {/* Individual Competitor Narratives */}
      <section className="bg-[var(--bg-secondary)] py-16 md:py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <h2 className="text-3xl font-bold text-[var(--text-primary)] text-center">
            Detailed comparisons
          </h2>
          <p className="mt-4 text-center text-[var(--text-secondary)]">
            Read a detailed side-by-side comparison with each competitor.
          </p>
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {competitorNarratives.map((competitor) => (
              <Link
                key={competitor.slug}
                href={`/compare/${competitor.slug}`}
                className="group rounded-xl border border-[var(--border-default)] bg-[var(--bg-primary)] p-6 shadow-[0_1px_3px_rgba(0,0,0,0.08),0_1px_2px_rgba(0,0,0,0.04)] transition-all duration-200 hover:shadow-[0_4px_6px_rgba(0,0,0,0.07),0_2px_4px_rgba(0,0,0,0.04)] hover:border-primary-300 dark:hover:border-[#2BC4C6]/40"
              >
                <h3 className="text-lg font-semibold text-[var(--text-primary)] group-hover:text-primary-500 dark:group-hover:text-[#2BC4C6] transition-colors">
                  CoRaise vs {competitor.name}
                </h3>
                <p className="mt-2 text-sm text-[var(--text-secondary)] line-clamp-3">
                  {competitor.summary}
                </p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary-500 dark:text-[#2BC4C6]">
                  Read full comparison
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <h2 className="text-3xl font-bold text-[var(--text-primary)] text-center">
            Frequently asked questions
          </h2>
          <div className="mt-10">
            <Accordion items={faqItems} />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[var(--bg-secondary)] py-16 md:py-24 text-center">
        <div className="mx-auto max-w-2xl px-4 sm:px-6">
          <h2 className="text-3xl font-bold text-[var(--text-primary)]">
            Start your free CoRaise account.
          </h2>
          <p className="mt-4 text-lg text-[var(--text-secondary)]">
            No credit card needed. A permanent free tier with core co-parenting features, plus
            affordable paid plans with split billing.
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
