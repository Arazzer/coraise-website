import { createMetadata } from '@/lib/metadata'
import { JsonLd } from '@/components/seo/json-ld'
import { breadcrumbSchema } from '@/lib/structured-data'
import { Card } from '@/components/ui/card'
import { ContactForm } from '@/components/ui/contact-form'
import { COMPANY, SAFETY_NUMBERS } from '@/lib/constants'
import { Mail, Clock, Phone } from 'lucide-react'

export const metadata = createMetadata({
  title: 'Contact CoRaise',
  description:
    'Get in touch with the CoRaise team. Contact us for support, pricing questions, professional enquiries, or partnership opportunities. Based in Australia, here to help.',
  path: '/contact',
})

export default function ContactPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: 'Home', href: '/' },
          { name: 'Contact', href: '/contact' },
        ])}
      />

      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-3xl sm:text-4xl font-bold text-[var(--text-primary)] mb-4">
              Get in touch
            </h1>
            <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
              Have a question about CoRaise? We are here to help. Send us a
              message and we will get back to you within one business day.
            </p>
          </div>

          <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">
            {/* Contact form - left column */}
            <div className="lg:col-span-3">
              <Card>
                <ContactForm />
              </Card>
            </div>

            {/* Contact info - right column */}
            <div className="lg:col-span-2 space-y-6">
              <Card>
                <div className="flex items-start gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary-100 dark:bg-[#0F2C2C]">
                    <Mail className="h-5 w-5 text-primary-600 dark:text-[#2BC4C6]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[var(--text-primary)] mb-1">
                      Email us
                    </h3>
                    <p className="text-[var(--text-secondary)] mb-2">
                      General support and enquiries
                    </p>
                    <a
                      href={`mailto:${COMPANY.email}`}
                      className="text-primary-600 dark:text-[#2BC4C6] hover:underline text-sm font-medium"
                    >
                      {COMPANY.email}
                    </a>
                  </div>
                </div>
              </Card>

              <Card>
                <div className="flex items-start gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary-100 dark:bg-[#0F2C2C]">
                    <Mail className="h-5 w-5 text-primary-600 dark:text-[#2BC4C6]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[var(--text-primary)] mb-1">
                      For professionals
                    </h3>
                    <p className="text-[var(--text-secondary)] mb-2">
                      Family lawyers, mediators, and social workers
                    </p>
                    <a
                      href={`mailto:${COMPANY.professionalEmail}`}
                      className="text-primary-600 dark:text-[#2BC4C6] hover:underline text-sm font-medium"
                    >
                      {COMPANY.professionalEmail}
                    </a>
                  </div>
                </div>
              </Card>

              <Card>
                <div className="flex items-start gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary-100 dark:bg-[#0F2C2C]">
                    <Clock className="h-5 w-5 text-primary-600 dark:text-[#2BC4C6]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[var(--text-primary)] mb-1">
                      Business hours
                    </h3>
                    <p className="text-[var(--text-secondary)]">
                      Monday to Friday
                      <br />
                      9 am - 5 pm AEST
                    </p>
                  </div>
                </div>
              </Card>

              <div className="rounded-xl border border-[var(--border-default)] bg-[var(--bg-secondary)] p-5">
                <p className="text-sm text-[var(--text-secondary)]">
                  CoRaise is a product of {COMPANY.legalName}.
                </p>
              </div>

              <Card>
                <div className="flex items-start gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-warning-light">
                    <Phone className="h-5 w-5 text-warning" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[var(--text-primary)] mb-1">
                      Need immediate support?
                    </h3>
                    <p className="text-sm text-[var(--text-secondary)] mb-3">
                      If you or someone you know needs help, please contact:
                    </p>
                    <a
                      href={`tel:${SAFETY_NUMBERS.respect.number.replace(/\s/g, '')}`}
                      className="inline-flex items-center gap-2 text-primary-600 dark:text-[#2BC4C6] hover:underline font-medium min-h-[48px]"
                    >
                      {SAFETY_NUMBERS.respect.name} - {SAFETY_NUMBERS.respect.number}
                    </a>
                    <p className="text-xs text-[var(--text-tertiary)] mt-1">
                      {SAFETY_NUMBERS.respect.description}
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
