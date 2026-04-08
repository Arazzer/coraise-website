import { createMetadata } from '@/lib/metadata'
import { JsonLd } from '@/components/seo/json-ld'
import { breadcrumbSchema } from '@/lib/structured-data'
import { COMPANY } from '@/lib/constants'

export const metadata = createMetadata({
  title: 'Terms of Service',
  description:
    'CoRaise Terms of Service - the rules and conditions for using the CoRaise co-parenting platform. Governed by the laws of New South Wales, Australia.',
  path: '/terms',
})

export default function TermsPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: 'Home', href: '/' },
          { name: 'Terms of Service', href: '/terms' },
        ])}
      />

      <article className="py-16 sm:py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <header className="mb-12">
            <h1 className="text-3xl sm:text-4xl font-bold text-[var(--text-primary)] mb-4">
              Terms of Service
            </h1>
            <p className="text-[var(--text-secondary)]">
              Last updated: 8 April 2026
            </p>
          </header>

          <div className="prose max-w-none">
            {/* 1. Acceptance */}
            <h2>1. Acceptance of terms</h2>
            <p>
              By accessing or using the CoRaise platform (&quot;Service&quot;),
              operated by {COMPANY.legalName} (&quot;we&quot;, &quot;us&quot;,
              &quot;our&quot;), you agree to be bound by these Terms of Service
              (&quot;Terms&quot;). If you do not agree to these Terms, you must
              not use the Service.
            </p>
            <p>
              These Terms apply to all users of the Service, including
              co-parents, family members, and professionals who access the
              platform. By creating an account, you confirm that you are at
              least 18 years of age and have the legal capacity to enter into
              this agreement.
            </p>

            {/* 2. Description of Service */}
            <h2>2. Description of service</h2>
            <p>
              CoRaise is a co-parenting communication platform designed for
              separated Australian families. The Service includes:
            </p>
            <ul>
              <li>
                Tamper-proof messaging between co-parents with SHA-256
                cryptographic integrity verification
              </li>
              <li>
                Shared calendar with Australian school terms and public holidays
              </li>
              <li>
                Expense tracking with receipt storage and optical character
                recognition (OCR)
              </li>
              <li>Child information management with append-only records</li>
              <li>
                Photo sharing and document storage for family records
              </li>
              <li>
                Court-ready PDF exports meeting the requirements of the Evidence
                Act 1995 (Cth)
              </li>
              <li>
                Safety features including emergency exit, block/restrict modes,
                and harassment detection
              </li>
              <li>
                Professional portal for family law practitioners (with user
                consent)
              </li>
            </ul>
            <p>
              We reserve the right to modify, suspend, or discontinue any aspect
              of the Service at any time with reasonable notice. We will provide
              at least 30 days&apos; notice before any material changes that
              affect your use of the Service.
            </p>

            {/* 3. Account Registration */}
            <h2>3. Account registration</h2>
            <p>
              To use CoRaise, you must create an account by providing your name,
              email address, and a password, or by signing in through Google or
              Apple. You agree to:
            </p>
            <ul>
              <li>
                Provide accurate and complete registration information
              </li>
              <li>
                Keep your account credentials secure and not share them with
                others
              </li>
              <li>
                Notify us immediately if you become aware of any unauthorised
                use of your account
              </li>
              <li>
                Use only one account per person - creating multiple accounts is
                not permitted
              </li>
            </ul>
            <p>
              You are responsible for all activity that occurs under your
              account. We reserve the right to suspend or terminate accounts
              that violate these Terms.
            </p>

            {/* 4. Subscription and Billing */}
            <h2>4. Subscription and billing</h2>
            <p>
              CoRaise offers a Free plan and paid subscription plans (Family,
              Premium, and Professional). Paid plans are billed monthly in
              Australian dollars (AUD).
            </p>
            <h3>Split billing</h3>
            <p>
              CoRaise uses a single-subscription model where one subscription
              covers both co-parents. Either parent can pay the full amount, or
              you can arrange to split the cost between you. CoRaise does not
              enforce the split - it is an optional arrangement between
              co-parents.
            </p>
            <h3>Payment processing</h3>
            <p>
              All payments are processed securely by Stripe. We do not store
              your credit card or bank account details on our servers.
              Stripe&apos;s terms of service and privacy policy apply to payment
              processing.
            </p>
            <h3>Cancellation</h3>
            <p>
              You may cancel your subscription at any time from your account
              settings. After cancellation:
            </p>
            <ul>
              <li>
                Your paid features will remain active until the end of your
                current billing period
              </li>
              <li>
                Your account will revert to the Free plan
              </li>
              <li>
                All your existing data remains accessible - you never lose your
                records
              </li>
              <li>There are no cancellation fees or penalties</li>
            </ul>
            <h3>Refunds</h3>
            <p>
              Subscription fees are generally non-refundable. However, we will
              consider refund requests on a case-by-case basis. If you
              experience a technical issue that prevents you from using the
              Service, please contact us at{' '}
              <a href={`mailto:${COMPANY.email}`}>{COMPANY.email}</a>.
            </p>

            {/* 5. Acceptable Use */}
            <h2>5. Acceptable use</h2>
            <p>
              When using CoRaise, you agree not to:
            </p>
            <ul>
              <li>
                Send messages that contain threats, harassment, abuse, or
                intimidation directed at your co-parent, children, or any other
                person
              </li>
              <li>
                Upload content that is illegal, obscene, defamatory, or
                infringes on the rights of others
              </li>
              <li>
                Use the Service to stalk, monitor, or control your co-parent
                beyond the intended co-parenting communication functions
              </li>
              <li>
                Attempt to access another user&apos;s account or data without
                authorisation
              </li>
              <li>
                Use automated tools, bots, or scripts to access the Service
              </li>
              <li>
                Circumvent or attempt to circumvent any security features,
                rate limits, or access controls
              </li>
              <li>
                Use the Service for any purpose other than genuine co-parenting
                communication and record-keeping
              </li>
            </ul>
            <p>
              We reserve the right to suspend or terminate accounts that violate
              these acceptable use rules. CoRaise includes automated harassment
              detection to help maintain a safe environment for all users.
            </p>

            {/* 6. Intellectual Property */}
            <h2>6. Intellectual property</h2>
            <p>
              The CoRaise platform, including its design, code, features, and
              branding, is owned by {COMPANY.legalName} and protected by
              Australian and international intellectual property laws. You may
              not copy, modify, distribute, or reverse-engineer any part of the
              Service.
            </p>
            <p>
              The CoRaise name, logo, and associated marks are trademarks of{' '}
              {COMPANY.legalName}. You may not use these marks without our prior
              written consent.
            </p>

            {/* 7. Data Ownership and Portability */}
            <h2>7. Data ownership and portability</h2>
            <p>
              You retain ownership of all content you create and upload to
              CoRaise, including messages, photos, documents, and expense
              records. By using the Service, you grant us a limited licence to
              store, process, and display your content as necessary to operate
              the platform.
            </p>
            <p>
              You have the right to export your data at any time using the
              court-ready PDF export feature. You may also request a full data
              export by contacting us at{' '}
              <a href={`mailto:${COMPANY.email}`}>{COMPANY.email}</a>. We will
              provide your data in a portable format within 30 days of your
              request.
            </p>
            <p>
              Note: due to the court-admissible design of the platform,
              messages and records stored in CoRaise cannot be deleted. This is
              a core feature that ensures record integrity for legal
              proceedings, not a limitation on your rights.
            </p>

            {/* 8. Record Integrity */}
            <h2>8. Record integrity and immutability</h2>
            <p>
              All messages, expenses, and communication records in CoRaise are
              stored in an append-only format. This means:
            </p>
            <ul>
              <li>
                Messages cannot be edited or deleted after the 10-second
                cooling-off period
              </li>
              <li>
                Each record is cryptographically hashed (SHA-256) by a database
                trigger at the time of creation
              </li>
              <li>
                All modifications are stored as new versions in history tables,
                preserving the original record
              </li>
              <li>
                A comprehensive audit trail logs all access and changes
              </li>
            </ul>
            <p>
              These measures ensure that CoRaise records meet the reliability
              requirements for electronic evidence under the Evidence Act 1995
              (Cth).
            </p>

            {/* 9. Limitation of Liability */}
            <h2>9. Limitation of liability</h2>
            <p>
              To the maximum extent permitted by Australian law, including the
              Australian Consumer Law:
            </p>
            <ul>
              <li>
                CoRaise is provided &quot;as is&quot; without warranties of any
                kind, except those that cannot be excluded under Australian
                Consumer Law
              </li>
              <li>
                We do not guarantee that the Service will be uninterrupted,
                error-free, or completely secure
              </li>
              <li>
                We are not liable for any indirect, incidental, special, or
                consequential damages arising from your use of the Service
              </li>
              <li>
                Our total liability for any claim arising from the Service is
                limited to the amount you paid us in the 12 months preceding the
                claim
              </li>
            </ul>
            <p>
              Nothing in these Terms limits or excludes liability that cannot be
              limited or excluded under applicable Australian law, including
              liability for death or personal injury caused by negligence, or
              guarantees under the Australian Consumer Law.
            </p>
            <p>
              CoRaise is a communication and record-keeping tool. It does not
              provide legal advice. You should seek independent legal advice
              regarding your family law matters.
            </p>

            {/* 10. Indemnification */}
            <h2>10. Indemnification</h2>
            <p>
              You agree to indemnify and hold harmless {COMPANY.legalName}, its
              directors, employees, and agents from any claims, damages, losses,
              or expenses (including reasonable legal fees) arising from:
            </p>
            <ul>
              <li>Your use of the Service</li>
              <li>Your violation of these Terms</li>
              <li>
                Your violation of any rights of another person or entity
              </li>
              <li>
                Content you submit, upload, or transmit through the Service
              </li>
            </ul>

            {/* 11. Governing Law */}
            <h2>11. Governing law</h2>
            <p>
              These Terms are governed by and construed in accordance with the
              laws of New South Wales, Australia. You agree to submit to the
              exclusive jurisdiction of the courts of New South Wales for any
              disputes arising from or relating to these Terms or the Service.
            </p>

            {/* 12. Dispute Resolution */}
            <h2>12. Dispute resolution</h2>
            <p>
              If you have a dispute with us regarding the Service, we encourage
              you to contact us first at{' '}
              <a href={`mailto:${COMPANY.email}`}>{COMPANY.email}</a> so we can
              attempt to resolve the matter informally.
            </p>
            <p>
              If informal resolution is not possible, disputes will be resolved
              through mediation administered by the Australian Disputes Centre
              (ADC) in Sydney before either party may commence court
              proceedings. Each party will bear its own costs of mediation.
            </p>
            <p>
              Nothing in this clause prevents either party from seeking urgent
              injunctive relief from a court of competent jurisdiction where
              necessary.
            </p>

            {/* 13. Termination */}
            <h2>13. Termination</h2>
            <p>
              You may close your account at any time by contacting us at{' '}
              <a href={`mailto:${COMPANY.email}`}>{COMPANY.email}</a>. Upon
              account closure:
            </p>
            <ul>
              <li>
                Your access to the Service will be discontinued
              </li>
              <li>
                Your data will be retained in accordance with our data retention
                policy and legal obligations
              </li>
              <li>
                Records shared with your co-parent will remain accessible to
                them for court-admissibility purposes
              </li>
            </ul>
            <p>
              We may suspend or terminate your account if you materially breach
              these Terms, engage in abusive behaviour, or if required by law.
              We will provide reasonable notice before termination except in
              cases of serious or repeated violations.
            </p>

            {/* 14. Changes to Terms */}
            <h2>14. Changes to these terms</h2>
            <p>
              We may update these Terms from time to time. We will notify
              registered users of material changes via email or in-app
              notification at least 14 days before the changes take effect. Your
              continued use of the Service after the effective date constitutes
              acceptance of the updated Terms.
            </p>
            <p>
              If you do not agree to the updated Terms, you may close your
              account before the changes take effect.
            </p>

            {/* 15. General */}
            <h2>15. General provisions</h2>
            <ul>
              <li>
                <strong>Severability:</strong> if any provision of these Terms
                is found to be unenforceable, the remaining provisions will
                continue in full force and effect
              </li>
              <li>
                <strong>Waiver:</strong> our failure to enforce any right or
                provision of these Terms does not constitute a waiver of that
                right or provision
              </li>
              <li>
                <strong>Entire agreement:</strong> these Terms, together with
                our Privacy Policy, constitute the entire agreement between you
                and us regarding the Service
              </li>
              <li>
                <strong>Assignment:</strong> you may not assign or transfer
                these Terms or your account without our consent. We may assign
                our rights and obligations under these Terms in connection with
                a merger, acquisition, or sale of assets
              </li>
            </ul>

            {/* 16. Contact */}
            <h2>16. Contact us</h2>
            <p>
              If you have questions about these Terms of Service, please contact
              us:
            </p>
            <ul>
              <li>
                <strong>Email:</strong>{' '}
                <a href={`mailto:${COMPANY.email}`}>{COMPANY.email}</a>
              </li>
              <li>
                <strong>Organisation:</strong> {COMPANY.legalName}
              </li>
              <li>
                <strong>Location:</strong> Sydney, New South Wales, Australia
              </li>
            </ul>
          </div>
        </div>
      </article>
    </>
  )
}
