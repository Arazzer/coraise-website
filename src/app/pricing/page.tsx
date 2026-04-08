import { Check } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Accordion } from '@/components/ui/accordion'
import { JsonLd } from '@/components/seo/json-ld'
import { createMetadata } from '@/lib/metadata'
import { softwareApplicationSchema, faqSchema, breadcrumbSchema } from '@/lib/structured-data'
import { APP_URL, PRICING } from '@/lib/constants'
import { cn } from '@/lib/utils'

export const metadata = createMetadata({
  title: 'Pricing',
  description:
    'Affordable co-parenting tools for Australian families. Plans from free to $14.99/month with unique split billing - both parents share the cost fairly.',
  path: '/pricing',
})

const plans = [
  {
    name: PRICING.free.name,
    price: '$0',
    period: 'forever',
    description: 'Get started with the basics.',
    highlight: false,
    cta: 'Get Started Free',
    features: [
      '50 messages per month',
      'Shared calendar',
      'View-only child information',
      'Basic expense logging',
      'Emergency exit button',
    ],
  },
  {
    name: PRICING.family.name,
    price: `$${PRICING.family.price}`,
    period: '/month total',
    description: `Split 50/50 ($${PRICING.family.splitPrice} each) or one parent pays.`,
    highlight: true,
    cta: 'Start Free Trial',
    features: [
      'Unlimited messaging',
      'AU school terms and holiday sync',
      'Google and Apple Calendar sync',
      'Photo sharing (10 GB storage)',
      'Expense tracking with receipts',
      'Document vault',
      '1 court export per quarter',
    ],
  },
  {
    name: PRICING.premium.name,
    price: `$${PRICING.premium.price}`,
    period: '/month total',
    description: `Split 50/50 ($${PRICING.premium.splitPrice} each) or one parent pays.`,
    highlight: false,
    cta: 'Start Free Trial',
    features: [
      'Everything in Family, plus:',
      '50 GB photo storage',
      'Unlimited court exports',
      'Priority push notifications',
      'Professional access portal',
      'Harassment detection',
    ],
  },
  {
    name: PRICING.professional.name,
    price: `$${PRICING.professional.price}`,
    period: '/month per seat',
    description: 'For family lawyers, mediators, and case workers.',
    highlight: false,
    cta: 'Contact Us',
    features: [
      'Multi-family dashboard',
      'Read-only access to family records',
      'Court-formatted PDF exports',
      'Case management tools',
      'Priority support',
    ],
  },
]

const competitors = [
  { name: 'CoRaise', annual: '$120 - $180', highlight: true },
  { name: '2Houses', annual: '~$170', highlight: false },
  { name: 'TalkingParents', annual: '$210 - $960', highlight: false },
  { name: 'OurFamilyWizard', annual: '$330 - $900', highlight: false },
  { name: 'AppClose', annual: '~$336', highlight: false },
]

const faqItems = [
  {
    question: 'How does split billing work?',
    answer:
      'On the Family and Premium plans, the total cost is split evenly between both co-parents. Each parent pays their half directly - for example, on the Family plan, each parent pays just $4.99 per month. If one parent prefers to cover the full amount, they can do that too.',
  },
  {
    question: 'What happens if my co-parent does not pay their half?',
    answer:
      'Both parents maintain full access as long as at least one parent is paying. If one parent stops paying their share, the other parent can choose to cover the full amount or the account will move to the Free plan after the billing period ends. No data is ever deleted.',
  },
  {
    question: 'Can I change plans at any time?',
    answer:
      'Yes. You can upgrade or downgrade your plan at any time. When you upgrade, the change takes effect immediately and you are charged a prorated amount. When you downgrade, you keep your current plan until the end of the billing period.',
  },
  {
    question: 'Is there a free trial?',
    answer:
      'Yes. The Family and Premium plans come with a 14-day free trial. No credit card is required to start. You can explore all features before deciding which plan suits your family.',
  },
  {
    question: 'What payment methods do you accept?',
    answer:
      'We accept all major credit and debit cards (Visa, Mastercard, American Express) through our secure payment processor, Stripe. All payments are processed in Australian dollars (AUD).',
  },
]

export default function PricingPage() {
  return (
    <>
      <JsonLd data={softwareApplicationSchema()} />
      <JsonLd data={faqSchema(faqItems)} />
      <JsonLd
        data={breadcrumbSchema([
          { name: 'Home', href: '/' },
          { name: 'Pricing', href: '/pricing' },
        ])}
      />

      {/* Hero */}
      <section className="py-16 md:py-24 text-center">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <h1 className="text-4xl font-bold tracking-tight text-[var(--text-primary)] sm:text-5xl">
            Fair pricing for separated families.
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-[var(--text-secondary)]">
            CoRaise is the only co-parenting platform with split billing. Both parents share the
            cost equally - or one parent can choose to pay for both. No hidden fees, no lock-in
            contracts.
          </p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="pb-16 md:pb-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {plans.map((plan) => (
              <Card
                key={plan.name}
                highlight={plan.highlight}
                className={cn('flex flex-col', plan.highlight && 'relative')}
              >
                {plan.highlight && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-primary-500 px-4 py-1 text-xs font-semibold text-white dark:bg-[#2BC4C6] dark:text-[#0F1419]">
                    Most Popular
                  </span>
                )}
                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-[var(--text-primary)]">{plan.name}</h3>
                  <div className="mt-2 flex items-baseline gap-1">
                    <span className="text-3xl font-bold text-[var(--text-primary)]">
                      {plan.price}
                    </span>
                    <span className="text-sm text-[var(--text-secondary)]">{plan.period}</span>
                  </div>
                  <p className="mt-2 text-sm text-[var(--text-secondary)]">{plan.description}</p>
                </div>
                <ul className="mb-8 flex-1 space-y-3" role="list">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2">
                      <Check
                        className="mt-0.5 h-5 w-5 shrink-0 text-primary-500 dark:text-[#2BC4C6]"
                        aria-hidden="true"
                      />
                      <span className="text-sm text-[var(--text-secondary)]">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  href={plan.name === 'Professional' ? '/professionals' : `${APP_URL}/register`}
                  variant={plan.highlight ? 'primary' : 'secondary'}
                  size="lg"
                  className="w-full"
                >
                  {plan.cta}
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Split Billing Explainer */}
      <section className="bg-[var(--bg-secondary)] py-16 md:py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 text-center">
          <h2 className="text-3xl font-bold text-[var(--text-primary)]">
            One parent pays. Both parents get full access.
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-[var(--text-secondary)]">
            CoRaise is the only co-parenting platform that splits the subscription cost between both
            parents. On the Family plan, each parent pays just $4.99 per month instead of one parent
            bearing the full cost alone.
          </p>
          <p className="mt-4 text-lg leading-relaxed text-[var(--text-secondary)]">
            If your co-parent prefers not to contribute, you can cover the full amount yourself.
            Either way, both parents always have equal access to every feature on your plan.
          </p>
          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            {[
              {
                label: 'Family plan per parent',
                value: '$4.99/mo',
              },
              {
                label: 'Premium plan per parent',
                value: '$7.49/mo',
              },
              {
                label: 'Free plan',
                value: '$0 forever',
              },
            ].map((item) => (
              <div
                key={item.label}
                className="rounded-xl bg-[var(--bg-primary)] border border-[var(--border-default)] p-6"
              >
                <p className="text-2xl font-bold text-primary-500 dark:text-[#2BC4C6]">
                  {item.value}
                </p>
                <p className="mt-1 text-sm text-[var(--text-secondary)]">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Competitor Pricing Comparison */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <h2 className="text-3xl font-bold text-[var(--text-primary)] text-center">
            How CoRaise compares on price
          </h2>
          <p className="mt-4 text-center text-[var(--text-secondary)]">
            Annual family cost for a paid plan across leading co-parenting platforms.
          </p>
          <div className="mt-10 overflow-x-auto">
            <table className="w-full text-left" role="table">
              <thead>
                <tr className="border-b border-[var(--border-default)]">
                  <th className="py-3 pr-4 text-sm font-semibold text-[var(--text-primary)]">
                    Platform
                  </th>
                  <th className="py-3 text-sm font-semibold text-[var(--text-primary)] text-right">
                    Annual Family Cost (AUD)
                  </th>
                </tr>
              </thead>
              <tbody>
                {competitors.map((competitor) => (
                  <tr
                    key={competitor.name}
                    className={cn(
                      'border-b border-[var(--border-default)]',
                      competitor.highlight &&
                        'bg-primary-50 dark:bg-[#0F2C2C] font-semibold',
                    )}
                  >
                    <td
                      className={cn(
                        'py-3 pr-4 text-sm',
                        competitor.highlight
                          ? 'text-primary-500 dark:text-[#2BC4C6]'
                          : 'text-[var(--text-primary)]',
                      )}
                    >
                      {competitor.name}
                    </td>
                    <td
                      className={cn(
                        'py-3 text-sm text-right',
                        competitor.highlight
                          ? 'text-primary-500 dark:text-[#2BC4C6]'
                          : 'text-[var(--text-secondary)]',
                      )}
                    >
                      {competitor.annual}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
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
          <h2 className="text-3xl font-bold text-[var(--text-primary)] text-center">
            Frequently asked questions
          </h2>
          <div className="mt-10">
            <Accordion items={faqItems} />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 text-center">
        <div className="mx-auto max-w-2xl px-4 sm:px-6">
          <h2 className="text-3xl font-bold text-[var(--text-primary)]">
            Ready to make co-parenting simpler?
          </h2>
          <p className="mt-4 text-lg text-[var(--text-secondary)]">
            Start with the Free plan - no credit card needed. Upgrade when you are ready.
          </p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Button href={`${APP_URL}/register`} variant="primary" size="lg">
              Get Started Free
            </Button>
            <Button href="/features" variant="secondary" size="lg">
              Explore Features
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
