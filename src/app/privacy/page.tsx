import { createMetadata } from '@/lib/metadata'
import { JsonLd } from '@/components/seo/json-ld'
import { breadcrumbSchema } from '@/lib/structured-data'
import { COMPANY } from '@/lib/constants'

export const metadata = createMetadata({
  title: 'Privacy Policy',
  description:
    'CoRaise Privacy Policy - how we collect, use, and protect your personal information. All data stored in Australia under the Privacy Act 1988.',
  path: '/privacy',
})

export default function PrivacyPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: 'Home', href: '/' },
          { name: 'Privacy Policy', href: '/privacy' },
        ])}
      />

      <article className="py-16 sm:py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <header className="mb-12">
            <h1 className="text-3xl sm:text-4xl font-bold text-[var(--text-primary)] mb-4">
              Privacy Policy
            </h1>
            <p className="text-[var(--text-secondary)]">
              Last updated: 8 April 2026
            </p>
          </header>

          <div className="prose max-w-none">
            {/* 1. Who We Are */}
            <h2>1. Who we are</h2>
            <p>
              CoRaise is a co-parenting communication platform operated by{' '}
              {COMPANY.legalName} (ABN pending), based in Sydney, New South
              Wales, Australia. In this policy, &quot;we&quot;, &quot;us&quot;,
              and &quot;our&quot; refer to {COMPANY.legalName} and the CoRaise
              platform.
            </p>
            <p>
              We are committed to protecting your privacy and handling your
              personal information in accordance with the Privacy Act 1988 (Cth)
              and the Australian Privacy Principles (APPs).
            </p>

            {/* 2. What Data We Collect */}
            <h2>2. What data we collect</h2>
            <p>We collect the following categories of personal information:</p>
            <h3>Account information</h3>
            <p>
              When you register, we collect your name, email address, and
              password. If you sign up via Google or Apple, we receive your name
              and email from the identity provider. We do not store your Google
              or Apple password.
            </p>
            <h3>Family and child information</h3>
            <p>
              You may choose to enter information about your children, including
              names, dates of birth, medical details, school information, and
              other relevant details. This information is stored in an
              append-only format for court admissibility and is only accessible
              to authorised family members.
            </p>
            <h3>Messages and communication</h3>
            <p>
              All messages sent through CoRaise are stored permanently. Messages
              cannot be edited or deleted after sending. Each message is
              cryptographically hashed (SHA-256) at the time of creation to
              ensure tamper-proof records.
            </p>
            <h3>Financial information</h3>
            <p>
              If you track shared expenses, we store expense details, receipt
              images, and split calculations. Payment processing is handled by
              Stripe. We do not store your credit card number, bank account
              details, or other payment credentials on our servers.
            </p>
            <h3>Photos and documents</h3>
            <p>
              Photos and documents you upload are stored securely in our
              Australian-hosted storage infrastructure. File metadata (name,
              size, upload date) is recorded alongside the files.
            </p>
            <h3>Usage data</h3>
            <p>
              We collect basic usage analytics through Vercel Analytics,
              which processes data within our hosting infrastructure. We do not
              use Google Analytics or any analytics service that transmits your
              data outside Australia.
            </p>
            <h3>Device and push notification tokens</h3>
            <p>
              If you enable push notifications, we store your device push token
              to deliver notifications. Push notification content is minimised -
              we send &quot;New message in CoRaise&quot; rather than the actual
              message content to protect your privacy.
            </p>

            {/* 3. How We Use Your Data */}
            <h2>3. How we use your data</h2>
            <p>
              We use your personal information for the following purposes:
            </p>
            <ul>
              <li>
                <strong>Providing the service:</strong> operating the CoRaise
                platform, including messaging, calendar, expense tracking, and
                document storage
              </li>
              <li>
                <strong>Account management:</strong> creating and managing your
                account, processing subscriptions, and providing customer
                support
              </li>
              <li>
                <strong>Safety features:</strong> operating harassment
                detection, block/restrict modes, and safety monitoring to
                protect users
              </li>
              <li>
                <strong>Court-ready records:</strong> generating PDF exports
                with cryptographic integrity verification for use in Australian
                family courts
              </li>
              <li>
                <strong>Notifications:</strong> sending push notifications and
                emails about account activity, with privacy-preserving content
              </li>
              <li>
                <strong>Service improvement:</strong> analysing aggregated,
                de-identified usage patterns to improve the platform
              </li>
            </ul>
            <p>
              We do not use your personal information for advertising, profiling,
              or marketing by third parties. We never sell your data.
            </p>

            {/* 4. Australian Data Sovereignty */}
            <h2>4. Australian data sovereignty</h2>
            <p>
              All CoRaise data is stored exclusively in Sydney, Australia (AWS
              ap-southeast-2 region). This includes:
            </p>
            <ul>
              <li>
                All database records (messages, events, expenses, child
                information, audit logs)
              </li>
              <li>
                All uploaded files (photos, receipts, documents, court exports)
              </li>
              <li>All authentication and session data</li>
              <li>All backups and replicas</li>
            </ul>
            <p>
              Your data never leaves Australia. We do not use any offshore
              servers, cloud functions, or third-party services that would
              transfer your personal information outside Australian
              jurisdiction. This protects your data from foreign government
              access requests, including under the US CLOUD Act.
            </p>

            {/* 5. Privacy Act and APPs */}
            <h2>5. Privacy Act 1988 and Australian Privacy Principles</h2>
            <p>
              We comply with the Privacy Act 1988 (Cth) and the thirteen
              Australian Privacy Principles (APPs). Key compliance measures
              include:
            </p>
            <ul>
              <li>
                <strong>APP 1 - Open and transparent management:</strong> this
                privacy policy explains our data practices clearly
              </li>
              <li>
                <strong>APP 3 - Collection:</strong> we collect only the
                personal information reasonably necessary to provide the CoRaise
                service
              </li>
              <li>
                <strong>APP 5 - Notification:</strong> we notify you at or
                before collection about what data we collect and why
              </li>
              <li>
                <strong>APP 6 - Use and disclosure:</strong> we use your
                information only for the purposes described in this policy
              </li>
              <li>
                <strong>APP 8 - Cross-border disclosure:</strong> we do not
                disclose your personal information to overseas recipients
              </li>
              <li>
                <strong>APP 11 - Security:</strong> we take reasonable steps to
                protect your information from misuse, interference, loss, and
                unauthorised access through encryption, access controls, and
                row-level security
              </li>
              <li>
                <strong>APP 12 - Access:</strong> you have the right to access
                your personal information at any time through the platform or by
                contacting us
              </li>
              <li>
                <strong>APP 13 - Correction:</strong> you can request correction
                of any inaccurate personal information we hold about you
              </li>
            </ul>

            {/* 6. Children's Information */}
            <h2>6. Children&apos;s information</h2>
            <p>
              CoRaise stores information about children as entered by their
              parents or guardians. We treat children&apos;s information with
              the highest level of care and protection:
            </p>
            <ul>
              <li>
                Children&apos;s information is private by default and only shared
                between co-parents when explicitly requested and accepted
              </li>
              <li>
                Child information is stored in append-only format - existing
                records cannot be modified or deleted
              </li>
              <li>
                Access to children&apos;s information is strictly controlled
                through row-level security policies
              </li>
              <li>
                All access to child records is logged in a comprehensive audit
                trail
              </li>
              <li>
                Children do not have accounts and cannot access the platform
                directly
              </li>
            </ul>

            {/* 7. Data Sharing */}
            <h2>7. Data sharing and third parties</h2>
            <p>We share your personal information only in these limited circumstances:</p>
            <ul>
              <li>
                <strong>Your co-parent:</strong> information you enter into
                shared spaces (messages, calendar events, expenses) is visible
                to your co-parent as part of the platform&apos;s core function
              </li>
              <li>
                <strong>Professional access:</strong> if you grant permission,
                family law professionals (lawyers, mediators, social workers)
                can view your records through the Professional portal
              </li>
              <li>
                <strong>Payment processing:</strong> Stripe processes
                subscription payments. Stripe&apos;s privacy policy applies to
                payment data they handle
              </li>
              <li>
                <strong>Legal requirements:</strong> we may disclose information
                if required by Australian law, court order, or to protect the
                safety of a child or individual
              </li>
            </ul>
            <p>
              We do not sell, rent, or trade your personal information to any
              third party for marketing, advertising, or any other purpose.
            </p>

            {/* 8. Data Retention */}
            <h2>8. Data retention</h2>
            <p>
              Due to the court-admissible nature of CoRaise records, we retain
              data as follows:
            </p>
            <ul>
              <li>
                <strong>Messages, expenses, and records:</strong> retained
                indefinitely in tamper-proof, append-only storage. This ensures
                records remain available for court proceedings at any point in
                the future.
              </li>
              <li>
                <strong>Account information:</strong> retained while your
                account is active and for seven years after account closure,
                consistent with Australian record-keeping requirements.
              </li>
              <li>
                <strong>Uploaded files:</strong> retained while your account is
                active. Files may be removed upon account closure, but metadata
                and audit records are retained.
              </li>
              <li>
                <strong>Audit logs:</strong> retained indefinitely to maintain
                the integrity chain of all records.
              </li>
            </ul>
            <p>
              You can export all your data at any time using the court-ready
              export feature or by contacting our support team.
            </p>

            {/* 9. Your Rights */}
            <h2>9. Your rights</h2>
            <p>Under the Privacy Act 1988, you have the right to:</p>
            <ul>
              <li>
                <strong>Access</strong> your personal information - you can view
                and export your data at any time through the platform
              </li>
              <li>
                <strong>Correct</strong> inaccurate personal information - you
                can update your account details or contact us for corrections
              </li>
              <li>
                <strong>Complain</strong> about a breach of your privacy - you
                can contact us directly or lodge a complaint with the Office of
                the Australian Information Commissioner (OAIC)
              </li>
              <li>
                <strong>Export</strong> your data in a portable format using our
                PDF export feature
              </li>
            </ul>
            <p>
              Note: due to the append-only, court-admissible design of CoRaise,
              we cannot delete messages, expenses, or other communication
              records. This is a deliberate design decision to maintain record
              integrity for legal proceedings.
            </p>

            {/* 10. Security */}
            <h2>10. Security</h2>
            <p>
              We implement comprehensive security measures to protect your data:
            </p>
            <ul>
              <li>
                Encryption in transit (TLS/HTTPS) and at rest for all stored
                data
              </li>
              <li>
                Row-level security (RLS) on every database table, ensuring users
                can only access their own family&apos;s data
              </li>
              <li>
                SHA-256 cryptographic hashing of all messages and records for
                tamper detection
              </li>
              <li>
                Rate limiting and abuse prevention at the edge network layer
              </li>
              <li>
                Session timeouts (15 minutes foreground, 5 minutes background)
                to prevent unauthorised access on shared devices
              </li>
              <li>
                Comprehensive audit logging of all data access and
                modifications
              </li>
            </ul>

            {/* 11. Cookies */}
            <h2>11. Cookies and local storage</h2>
            <p>
              CoRaise uses essential cookies and local storage for
              authentication and session management. We do not use tracking
              cookies, advertising cookies, or third-party cookies for
              marketing purposes.
            </p>

            {/* 12. Changes */}
            <h2>12. Changes to this policy</h2>
            <p>
              We may update this privacy policy from time to time to reflect
              changes in our practices or legal requirements. We will notify
              registered users of material changes via email or in-app
              notification. The &quot;Last updated&quot; date at the top of this
              policy indicates when it was most recently revised.
            </p>

            {/* 13. Contact */}
            <h2>13. Contact us</h2>
            <p>
              If you have questions about this privacy policy, wish to access or
              correct your personal information, or want to make a privacy
              complaint, please contact us:
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
            <p>
              If you are not satisfied with our response to a privacy complaint,
              you can contact the Office of the Australian Information
              Commissioner (OAIC) at{' '}
              <a
                href="https://www.oaic.gov.au"
                target="_blank"
                rel="noopener noreferrer"
              >
                www.oaic.gov.au
              </a>{' '}
              or by calling 1300 363 992.
            </p>
          </div>
        </div>
      </article>
    </>
  )
}
