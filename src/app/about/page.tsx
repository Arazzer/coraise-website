import { createMetadata } from '@/lib/metadata'
import { JsonLd } from '@/components/seo/json-ld'
import { breadcrumbSchema } from '@/lib/structured-data'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { APP_URL, COMPANY } from '@/lib/constants'
import {
  Shield,
  Scale,
  Heart,
  MapPin,
  FileCheck,
  Users,
  Server,
  Lock,
  Globe,
} from 'lucide-react'

export const metadata = createMetadata({
  title: 'About CoRaise',
  description:
    'CoRaise is an Australian-built co-parenting platform designed for separated families. One subscription for both parents, data never leaves Australia, and built for Australian family law.',
  path: '/about',
})

const values = [
  {
    icon: Shield,
    name: 'Safety first',
    description:
      'Every feature is designed with safety in mind. From emergency exit to harassment detection, we protect vulnerable families at every step.',
  },
  {
    icon: Scale,
    name: 'Radical fairness',
    description:
      'One subscription covers both parents. No more paying $200-450 each per year. We believe co-parenting tools should not punish families financially.',
  },
  {
    icon: Heart,
    name: 'Calm over clever',
    description:
      'We design for de-escalation, not engagement. A 10-second cooling-off timer, no typing indicators, and no read receipts that create pressure.',
  },
  {
    icon: MapPin,
    name: 'Australian to the core',
    description:
      'Built in Sydney, hosted in Sydney, designed for Australian family law. School terms, public holidays, and Evidence Act compliance are built in.',
  },
  {
    icon: FileCheck,
    name: 'Evidence by design',
    description:
      'Every message is SHA-256 hashed the moment it is created. Records are tamper-proof and court-ready under the Evidence Act 1995 from day one.',
  },
  {
    icon: Users,
    name: 'Accessible to everyone',
    description:
      'Designed for people who only use Facebook and basic texting. Large text, simple navigation, and a reading level that works for everyone.',
  },
]

export default function AboutPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: 'Home', href: '/' },
          { name: 'About', href: '/about' },
        ])}
      />

      {/* Hero */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[var(--text-primary)] mb-6">
            Australian-built.
            <br />
            For Australian families.
          </h1>
          <p className="text-lg sm:text-xl text-[var(--text-secondary)] max-w-2xl mx-auto">
            CoRaise is a co-parenting communication platform built specifically
            for separated Australian families - by people who understand the
            system.
          </p>
        </div>
      </section>

      {/* The Problem */}
      <section className="py-12 sm:py-16 bg-[var(--bg-secondary)]">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-[var(--text-primary)] mb-6">
            The problem
          </h2>
          <div className="space-y-4 text-[var(--text-secondary)] text-base sm:text-lg leading-relaxed">
            <p>
              Over 650,000 separated families in Australia need a safe,
              structured way to communicate about their children. But the
              co-parenting apps available today were not built for them.
            </p>
            <p>
              US-based platforms like OurFamilyWizard and TalkingParents
              dominate the market. They charge each parent separately -
              $200 to $450 per year, per person. That is $400 to $900 per
              family, every year. They host data on American servers, subject to
              US law. And they lack the features Australian families actually
              need: school term dates, Evidence Act compliance, and an
              understanding of Australian family law.
            </p>
            <p>
              Separated families are already under financial and emotional
              stress. They deserve better than expensive, foreign tools that
              were not designed for them.
            </p>
          </div>
        </div>
      </section>

      {/* Why CoRaise */}
      <section className="py-12 sm:py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-[var(--text-primary)] mb-6">
            Why CoRaise
          </h2>
          <div className="grid sm:grid-cols-2 gap-6 sm:gap-8">
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-primary-100 dark:bg-[#0F2C2C]">
                  <MapPin className="h-4 w-4 text-primary-600 dark:text-[#2BC4C6]" />
                </div>
                <div>
                  <h3 className="font-semibold text-[var(--text-primary)] mb-1">
                    Built in Sydney
                  </h3>
                  <p className="text-[var(--text-secondary)]">
                    Designed and developed by {COMPANY.legalName} in Sydney,
                    Australia. We understand the system because we are part of
                    it.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-primary-100 dark:bg-[#0F2C2C]">
                  <Scale className="h-4 w-4 text-primary-600 dark:text-[#2BC4C6]" />
                </div>
                <div>
                  <h3 className="font-semibold text-[var(--text-primary)] mb-1">
                    One subscription, both parents
                  </h3>
                  <p className="text-[var(--text-secondary)]">
                    From $9.99/month for the whole family - not per parent. Split
                    billing available so each parent pays just $4.99/month.
                  </p>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-primary-100 dark:bg-[#0F2C2C]">
                  <FileCheck className="h-4 w-4 text-primary-600 dark:text-[#2BC4C6]" />
                </div>
                <div>
                  <h3 className="font-semibold text-[var(--text-primary)] mb-1">
                    Australian family law compliant
                  </h3>
                  <p className="text-[var(--text-secondary)]">
                    Designed specifically for the Evidence Act 1995. School
                    terms, public holidays, and court-ready exports built in
                    from the start.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-primary-100 dark:bg-[#0F2C2C]">
                  <Lock className="h-4 w-4 text-primary-600 dark:text-[#2BC4C6]" />
                </div>
                <div>
                  <h3 className="font-semibold text-[var(--text-primary)] mb-1">
                    Data never leaves Australia
                  </h3>
                  <p className="text-[var(--text-secondary)]">
                    All data is stored in Sydney (ap-southeast-2). No offshore
                    transfers, no US subpoenas, no foreign data access. Full
                    Privacy Act 1988 compliance.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-12 sm:py-16 bg-[var(--bg-secondary)]">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-[var(--text-primary)] mb-3 text-center">
            Our values
          </h2>
          <p className="text-[var(--text-secondary)] text-center mb-10 max-w-xl mx-auto">
            Every decision we make comes back to these six principles.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {values.map((value) => (
              <Card key={value.name}>
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary-100 dark:bg-[#0F2C2C] mb-4">
                  <value.icon className="h-5 w-5 text-primary-600 dark:text-[#2BC4C6]" />
                </div>
                <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-2">
                  {value.name}
                </h3>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                  {value.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Data Sovereignty */}
      <section className="py-12 sm:py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-xl border border-[var(--border-default)] bg-[var(--bg-primary)] p-8 sm:p-12">
            <div className="flex items-center gap-3 mb-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-100 dark:bg-[#0F2C2C]">
                <Server className="h-6 w-6 text-primary-600 dark:text-[#2BC4C6]" />
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-[var(--text-primary)]">
                Your data never leaves Australia
              </h2>
            </div>
            <div className="space-y-4 text-[var(--text-secondary)] leading-relaxed">
              <p>
                Every piece of data in CoRaise - messages, photos, documents,
                expenses, calendar events - is stored exclusively in Sydney,
                Australia. We use Australian-hosted infrastructure in the
                ap-southeast-2 region.
              </p>
              <p>
                This is not just a preference. It is a legal requirement for
                sensitive family data. Australian data stored on US servers can
                be accessed under the US CLOUD Act without your knowledge or
                consent. CoRaise eliminates this risk entirely.
              </p>
              <p>
                We comply fully with the Privacy Act 1988 and the Australian
                Privacy Principles. We do not use Google Analytics or any other
                service that transmits your personal information offshore. We
                never sell your data to third parties.
              </p>
            </div>
            <div className="mt-6 flex items-center gap-2 text-sm text-primary-600 dark:text-[#2BC4C6]">
              <Globe className="h-4 w-4" />
              <span className="font-medium">
                100% Australian data sovereignty
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 sm:py-24 bg-[var(--bg-secondary)]">
        <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-[var(--text-primary)] mb-4">
            Ready to make co-parenting simpler?
          </h2>
          <p className="text-[var(--text-secondary)] mb-8 max-w-md mx-auto">
            Join Australian families who are already using CoRaise to
            communicate, organise, and keep records - all in one place.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button href={APP_URL} variant="primary" size="lg">
              Get started free
            </Button>
            <Button href="/features" variant="secondary" size="lg">
              See all features
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
