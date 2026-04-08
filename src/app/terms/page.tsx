import { createMetadata } from '@/lib/metadata'
import { JsonLd } from '@/components/seo/json-ld'
import { breadcrumbSchema } from '@/lib/structured-data'
import { COMPANY, PRICING } from '@/lib/constants'

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
            {/* Plain-language summary */}
            <div className="rounded-lg border border-[var(--border)] bg-[var(--surface)] p-6 mb-8 not-prose">
              <h2 className="text-lg font-semibold text-[var(--text-primary)] mb-3">
                Summary in plain language
              </h2>
              <ul className="space-y-2 text-[var(--text-secondary)] text-sm">
                <li>
                  CoRaise is a co-parenting communication tool run by{' '}
                  {COMPANY.legalName} (ABN {COMPANY.abn}) in New South Wales,
                  Australia.
                </li>
                <li>
                  You must be at least 16 to use CoRaise, and you must be a
                  parent or legal guardian.
                </li>
                <li>
                  Messages and records cannot be deleted - this is a feature
                  that makes them reliable for court.
                </li>
                <li>
                  You own your data. You can export it any time. But shared
                  records (like messages) belong to both parties.
                </li>
                <li>
                  We offer Free, Family ($9.99/month), Premium ($14.99/month),
                  and Professional ($29.99/month) plans.
                </li>
                <li>
                  CoRaise is not legal advice. Always talk to a lawyer about
                  your family law matters.
                </li>
                <li>
                  Your rights under Australian Consumer Law are not affected by
                  these terms.
                </li>
              </ul>
            </div>

            {/* 1. Acceptance of Terms */}
            <h2>1. Acceptance of terms</h2>
            <p>
              By accessing or using the CoRaise platform at app.coraise.com.au
              (&quot;Service&quot;), operated by {COMPANY.legalName} (ABN{' '}
              {COMPANY.abn}) (&quot;we&quot;, &quot;us&quot;, &quot;our&quot;),
              you agree to be bound by these Terms of Service (&quot;Terms&quot;).
            </p>
            <p>
              If you do not agree to these Terms, you must not use the Service.
            </p>
            <p>
              These Terms apply to all users of the Service, including
              co-parents, family members, and professionals who access the
              platform. These Terms should be read together with our{' '}
              <a href="/privacy">Privacy Policy</a>, which explains how we
              handle your personal information.
            </p>

            {/* 2. About CoRaise */}
            <h2>2. About CoRaise</h2>
            <p>
              CoRaise is operated by {COMPANY.legalName} (ABN {COMPANY.abn}),
              a company registered in New South Wales, Australia.
            </p>
            <ul>
              <li>
                <strong>Business name:</strong> CoRaise
              </li>
              <li>
                <strong>Company:</strong> {COMPANY.legalName}
              </li>
              <li>
                <strong>ABN:</strong> {COMPANY.abn}
              </li>
              <li>
                <strong>Address:</strong> [Address]
              </li>
              <li>
                <strong>Email:</strong>{' '}
                <a href={`mailto:${COMPANY.email}`}>{COMPANY.email}</a>
              </li>
            </ul>

            {/* 3. Eligibility */}
            <h2>3. Eligibility</h2>
            <p>
              To use CoRaise, you must meet the following requirements:
            </p>

            <h3>3.1 Age requirements</h3>
            <ul>
              <li>
                <strong>18 years and over:</strong> standard registration is
                available.
              </li>
              <li>
                <strong>16-17 years:</strong> you may register if you are a
                parent or legal guardian of a child. Enhanced consent is
                required during registration. This reflects OAIC guidance on
                the capacity of young people to consent, and the Family Law Act
                1975 (Cth) which does not set a minimum age for parents.
              </li>
              <li>
                <strong>Under 16 years:</strong> accounts are only available by
                court order, subject to manual review by our team.
              </li>
            </ul>

            <h3>3.2 Status requirements</h3>
            <p>You must be one of the following to use CoRaise:</p>
            <ul>
              <li>
                A parent or legal guardian of a child, using the platform for
                co-parenting communication
              </li>
              <li>
                A family law professional (lawyer, mediator, social worker)
                using the Professional portal
              </li>
            </ul>
            <p>
              By creating an account, you confirm that you meet these
              eligibility requirements. We reserve the right to request
              verification and to suspend accounts that do not meet these
              criteria.
            </p>

            {/* 4. Account Registration and Security */}
            <h2>4. Account registration and security</h2>
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
                anyone
              </li>
              <li>
                Notify us immediately at{' '}
                <a href={`mailto:${COMPANY.email}`}>{COMPANY.email}</a> if you
                become aware of any unauthorised use of your account
              </li>
              <li>Use only one account per person</li>
            </ul>
            <p>
              You are responsible for all activity that occurs under your
              account. If someone else uses your account without your
              permission, you should contact us immediately and change your
              password.
            </p>
            <p>
              We reserve the right to suspend or terminate accounts that violate
              these Terms.
            </p>

            {/* 5. Description of Service */}
            <h2>5. Description of service</h2>
            <p>
              CoRaise is a co-parenting communication platform designed for
              separated Australian families. The Service provides:
            </p>
            <ul>
              <li>
                <strong>Tamper-proof messaging:</strong> secure communication
                between co-parents with SHA-256 cryptographic integrity
                verification, a 10-second preview period before sending, and
                append-only storage
              </li>
              <li>
                <strong>Shared calendar:</strong> a co-parenting calendar with
                Australian school term dates, state-specific public holidays,
                event requests, and optional Google/Apple Calendar sync
              </li>
              <li>
                <strong>Expense tracking:</strong> shared expense recording with
                receipt storage, OCR scanning, running balance, and configurable
                split ratios
              </li>
              <li>
                <strong>Child information bank:</strong> an append-only record
                of children&apos;s details including medical, school, and
                contact information
              </li>
              <li>
                <strong>Photo sharing:</strong> family photo albums with storage
                limits based on your subscription tier
              </li>
              <li>
                <strong>Document vault:</strong> secure document storage with
                categories and version history
              </li>
              <li>
                <strong>Court-ready PDF exports:</strong> downloadable reports
                with SHA-256 verification and a certificate of authenticity,
                designed for use in Australian family courts
              </li>
              <li>
                <strong>Professional portal:</strong> read-only access for
                authorised family law professionals (lawyers, mediators, social
                workers)
              </li>
              <li>
                <strong>Safety features:</strong> emergency exit button,
                block/restrict modes, automated harassment detection, message
                batching, and session timeouts
              </li>
              <li>
                <strong>Push notifications:</strong> privacy-preserving
                notifications with email fallback and quiet hours
              </li>
            </ul>
            <p>
              We may modify, update, or improve the Service from time to time.
              We will provide at least 30 days&apos; notice before any material
              changes that reduce the functionality available under your current
              subscription tier.
            </p>
            <p>
              <strong>Important:</strong> CoRaise is a communication and
              record-keeping tool. It does not provide legal advice, mediation,
              or counselling. You should always seek independent legal advice
              regarding your family law matters.
            </p>

            {/* 6. Subscription and Billing */}
            <h2>6. Subscription and billing</h2>

            <h3>6.1 Subscription tiers</h3>
            <p>CoRaise offers the following plans:</p>
            <div className="overflow-x-auto">
              <table>
                <thead>
                  <tr>
                    <th>Plan</th>
                    <th>Price</th>
                    <th>Key features</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>{PRICING.free.name}</td>
                    <td>$0</td>
                    <td>50 messages/month, basic calendar</td>
                  </tr>
                  <tr>
                    <td>{PRICING.family.name}</td>
                    <td>${PRICING.family.price}/month</td>
                    <td>Unlimited messages, full calendar, expense tracking</td>
                  </tr>
                  <tr>
                    <td>{PRICING.premium.name}</td>
                    <td>${PRICING.premium.price}/month</td>
                    <td>
                      All features, 50 GB photo storage, unlimited court exports
                    </td>
                  </tr>
                  <tr>
                    <td>{PRICING.professional.name}</td>
                    <td>${PRICING.professional.price}/month per seat</td>
                    <td>Professional portal, multi-family dashboard</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p>
              All prices are in Australian dollars (AUD) and include GST where
              applicable. We may change our pricing with at least 30
              days&apos; notice to existing subscribers.
            </p>

            <h3>6.2 Split billing</h3>
            <p>
              CoRaise uses a single-subscription model where one subscription
              covers both co-parents. Either parent can pay the full amount.
              The split billing feature allows one parent to pay and both
              parents to access the paid features. CoRaise does not enforce any
              cost-sharing arrangement between co-parents - that is a matter
              between you.
            </p>

            <h3>6.3 Payment processing</h3>
            <p>
              All payments are processed securely by Stripe, a PCI-DSS
              compliant payment processor. We do not store your credit card
              number, bank account details, or other payment credentials on our
              servers. Stripe&apos;s{' '}
              <a
                href="https://stripe.com/au/privacy"
                target="_blank"
                rel="noopener noreferrer"
              >
                privacy policy
              </a>{' '}
              and{' '}
              <a
                href="https://stripe.com/au/legal/consumer"
                target="_blank"
                rel="noopener noreferrer"
              >
                terms of service
              </a>{' '}
              apply to payment processing.
            </p>

            <h3>6.4 Cancellation</h3>
            <p>
              You may cancel your subscription at any time from your account
              settings. After cancellation:
            </p>
            <ul>
              <li>
                Your paid features remain active until the end of your current
                billing period
              </li>
              <li>Your account reverts to the Free plan</li>
              <li>
                All your existing data remains accessible - you never lose your
                records
              </li>
              <li>There are no cancellation fees or penalties</li>
            </ul>

            <h3>6.5 Refunds</h3>
            <p>
              Subscription fees are generally non-refundable for periods already
              used. However:
            </p>
            <ul>
              <li>
                If you experience a major technical issue that prevents you from
                using the Service for a significant period, we will consider a
                proportional refund or credit
              </li>
              <li>
                Refund requests are assessed on a case-by-case basis - contact
                us at{' '}
                <a href={`mailto:${COMPANY.email}`}>{COMPANY.email}</a>
              </li>
              <li>
                Nothing in this section limits your rights under the Australian
                Consumer Law, including your right to a refund if the Service
                fails to meet consumer guarantees
              </li>
            </ul>

            <h3>6.6 Australian Consumer Law guarantees</h3>
            <p>
              Our services come with guarantees that cannot be excluded under the
              Australian Consumer Law (Schedule 2 of the Competition and
              Consumer Act 2010). You are entitled to a replacement or refund
              for a major failure and compensation for any other reasonably
              foreseeable loss or damage. You are also entitled to have the
              services remedied if they fail to be of acceptable quality and
              the failure does not amount to a major failure.
            </p>

            {/* 7. Free Tier Limitations */}
            <h2>7. Free tier limitations</h2>
            <p>
              The Free plan provides access to core co-parenting features with
              the following limitations:
            </p>
            <ul>
              <li>50 messages per month between co-parents</li>
              <li>Basic calendar without school terms or holiday data</li>
              <li>
                Limited access to certain features available on paid plans
              </li>
            </ul>
            <p>
              Free plan users retain full access to all records they have
              created. Upgrading to a paid plan unlocks additional features but
              does not affect existing data. Downgrading from a paid plan to
              Free retains all data - you do not lose records when your plan
              changes.
            </p>

            {/* 8. Record Immutability */}
            <h2>8. Record immutability</h2>
            <p>
              A core feature of CoRaise is that communication and financial
              records are immutable (cannot be changed or deleted). This is
              designed to create reliable, court-ready records for both parties.
              By using the Service, you acknowledge and agree to the following:
            </p>
            <ul>
              <li>
                <strong>Messages cannot be edited or deleted</strong> after the
                10-second preview period. During the preview, you can review
                your message before it is sent. Once sent, the message is
                permanently recorded.
              </li>
              <li>
                <strong>SHA-256 cryptographic hashing:</strong> every message is
                automatically hashed by a database trigger at the moment of
                creation. This creates a verifiable fingerprint that proves the
                record has not been tampered with.
              </li>
              <li>
                <strong>Append-only storage:</strong> updates to expenses,
                calendar events, and child information create new version
                records rather than overwriting the originals. The full history
                is preserved.
              </li>
              <li>
                <strong>Audit trail:</strong> all data access and changes are
                logged in a comprehensive audit trail.
              </li>
            </ul>
            <p>
              This design is intentional and is a key reason families and
              professionals choose CoRaise. It means neither party can alter or
              destroy records that the other party may need for legal
              proceedings.
            </p>

            {/* 9. Acceptable Use */}
            <h2>9. Acceptable use</h2>
            <p>
              CoRaise is designed for respectful co-parenting communication.
              When using the Service, you agree not to:
            </p>
            <ul>
              <li>
                Send messages that contain threats, harassment, abuse, or
                intimidation directed at your co-parent, children, or any other
                person
              </li>
              <li>
                Use the messaging feature to stalk, monitor, or control your
                co-parent beyond the intended co-parenting communication
                functions
              </li>
              <li>
                Upload content that is illegal, obscene, defamatory, or
                infringes on the rights of others
              </li>
              <li>
                Upload content that exploits or endangers children
              </li>
              <li>
                Impersonate another person or create an account on behalf of
                someone else without their consent
              </li>
              <li>
                Attempt to access another user&apos;s account, data, or family
                records without authorisation
              </li>
              <li>
                Use automated tools, bots, or scripts to access the Service
              </li>
              <li>
                Circumvent or attempt to circumvent any security features, rate
                limits, or access controls
              </li>
              <li>
                Interfere with or disrupt the Service or its underlying
                infrastructure
              </li>
              <li>
                Use the Service for any purpose other than genuine co-parenting
                communication and record-keeping (or, for Professional accounts,
                professional family law services)
              </li>
            </ul>
            <p>
              CoRaise includes automated harassment detection and message
              frequency monitoring to help maintain a safe environment. If our
              systems detect potentially harmful behaviour, you may receive
              warnings or have your messaging rate temporarily limited.
            </p>
            <p>
              We reserve the right to suspend or terminate accounts that
              seriously or repeatedly violate these acceptable use rules. In
              cases involving threats to safety, we may take immediate action
              without prior notice.
            </p>
            <p>
              Remember: all messages are permanently recorded and may be used
              as evidence in court proceedings. Think before you send.
            </p>

            {/* 10. Co-Parent Obligations */}
            <h2>10. Co-parent obligations</h2>
            <p>
              Both co-parents share responsibility for using CoRaise in a way
              that serves the best interests of their children. By using the
              Service, both parties agree to:
            </p>
            <ul>
              <li>
                Communicate respectfully and focus on matters relating to the
                children
              </li>
              <li>
                Provide accurate information about shared expenses, calendar
                events, and children&apos;s details
              </li>
              <li>
                Respond to reasonable requests (such as event approvals or
                child information sharing requests) in a timely manner
              </li>
              <li>
                Not use the platform to harass, intimidate, or exert coercive
                control over the other party
              </li>
              <li>
                Respect the privacy of children&apos;s information and not share
                platform records with third parties without appropriate reason
              </li>
            </ul>
            <p>
              CoRaise is a tool for co-parenting communication. We do not
              mediate disputes, take sides, or make judgments about parenting
              arrangements. If you are unable to communicate safely with your
              co-parent, please use the safety features (block, restrict, or
              emergency exit) or contact support services such as 1800RESPECT
              (1800 737 732).
            </p>

            {/* 11. Professional Accounts */}
            <h2>11. Professional accounts</h2>
            <p>
              CoRaise offers a Professional portal for family law practitioners.
              The following additional terms apply to Professional account
              holders:
            </p>

            <h3>11.1 Eligibility</h3>
            <p>
              Professional accounts are available to lawyers, mediators, social
              workers, and other family law professionals. You may be required to
              provide evidence of your professional qualifications or
              registration.
            </p>

            <h3>11.2 Read-only access</h3>
            <p>
              Professional access to family records is read-only. Professionals
              cannot send messages, create events, or modify records on behalf
              of families. Access is granted only when a parent explicitly
              authorises it.
            </p>

            <h3>11.3 Confidentiality</h3>
            <p>
              Professionals must treat all family records accessed through the
              platform as confidential and handle them in line with their
              professional obligations, including any applicable legal
              professional privilege or ethical duties.
            </p>

            <h3>11.4 Multi-family management</h3>
            <p>
              Professional accounts support access to multiple families. Each
              family&apos;s data is strictly separated. Access to one
              family&apos;s records does not grant access to any other.
            </p>

            <h3>11.5 Billing</h3>
            <p>
              Professional accounts are billed at $
              {PRICING.professional.price}/month per seat. Each seat represents
              one professional user. Volume pricing may be available for larger
              practices - contact{' '}
              <a href={`mailto:${COMPANY.professionalEmail}`}>
                {COMPANY.professionalEmail}
              </a>{' '}
              for details.
            </p>

            {/* 12. DV Safety Features */}
            <h2>12. Safety features</h2>
            <p>
              CoRaise includes features designed to support the safety of users
              who may be experiencing family violence or high-conflict
              situations:
            </p>
            <ul>
              <li>
                <strong>Emergency exit:</strong> a button that immediately
                redirects to a neutral website (Bureau of Meteorology) to help
                protect your privacy if someone is watching your screen
              </li>
              <li>
                <strong>Block/restrict modes:</strong> tools to limit or prevent
                communication from your co-parent when needed for safety
              </li>
              <li>
                <strong>Harassment detection:</strong> automated monitoring that
                identifies potentially harmful messaging patterns and provides
                warnings
              </li>
              <li>
                <strong>Message batching:</strong> an option to receive messages
                in batches rather than immediately, to reduce stress and anxiety
              </li>
              <li>
                <strong>Session timeouts:</strong> automatic sign-out after
                periods of inactivity to prevent unauthorised access on shared
                devices
              </li>
              <li>
                <strong>Privacy-preserving notifications:</strong> push
                notifications show only &quot;New message in CoRaise&quot; by
                default, not the actual message content
              </li>
            </ul>
            <p>
              <strong>Important limitations:</strong> while these safety
              features are designed to help, CoRaise is a communication tool and
              not a safety service. We cannot guarantee your physical safety. If
              you are in immediate danger, call 000 (Emergency Services). For
              family violence support, contact 1800RESPECT (1800 737 732) or
              Lifeline (13 11 14).
            </p>
            <p>
              We are not liable for any harm or safety outcomes resulting from
              the use or non-use of these safety features. Nothing in this
              section limits our liability for losses that cannot be excluded
              under Australian Consumer Law.
            </p>

            {/* 13. Intellectual Property */}
            <h2>13. Intellectual property</h2>

            <h3>13.1 Our intellectual property</h3>
            <p>
              The CoRaise platform, including its design, code, features,
              branding, and documentation, is owned by {COMPANY.legalName} and
              protected by Australian and international intellectual property
              laws. You may not:
            </p>
            <ul>
              <li>Copy, modify, or distribute any part of the platform</li>
              <li>Reverse-engineer, decompile, or disassemble the software</li>
              <li>
                Use the CoRaise name, logo, or associated marks without our
                prior written consent
              </li>
              <li>
                Create derivative works based on the Service
              </li>
            </ul>

            <h3>13.2 Your content</h3>
            <p>
              You retain ownership of all content you create and upload to
              CoRaise, including messages, photos, documents, and expense
              records. By using the Service, you grant us a limited, non-exclusive,
              royalty-free licence to store, process, display, and transmit
              your content as necessary to operate the platform and provide the
              Service to you and your co-parent.
            </p>
            <p>
              This licence continues for as long as your content is stored on
              the platform (including during retention periods after account
              closure) and does not grant us the right to use your content for
              any purpose other than providing the Service.
            </p>

            {/* 14. Data Ownership and Portability */}
            <h2>14. Data ownership and portability</h2>

            <h3>14.1 Your data</h3>
            <p>
              You own your personal data and the content you create on CoRaise.
              You can access and export your data at any time using:
            </p>
            <ul>
              <li>
                The court-ready PDF export feature within the app
              </li>
              <li>
                A full data export request by contacting us at{' '}
                <a href={`mailto:${COMPANY.email}`}>{COMPANY.email}</a> (we
                will provide your data in a portable format within 30 days)
              </li>
            </ul>

            <h3>14.2 Shared records</h3>
            <p>
              Records that involve both co-parents (messages, shared expenses,
              calendar events) are shared records. Both parties have equal right
              to access and export these records. Neither party can unilaterally
              delete, modify, or restrict the other party&apos;s access to
              shared records (except through safety features such as blocking,
              which limits future communication but does not delete existing
              records).
            </p>

            <h3>14.3 Children&apos;s information</h3>
            <p>
              Children&apos;s information is entered and managed by parents.
              Once shared between co-parents, both parents have access to the
              shared information. Sharing is permanent to preserve record
              integrity - it cannot be revoked once accepted. Historical sharing
              request records are maintained for court records.
            </p>

            {/* 15. Court Exports */}
            <h2>15. Court exports</h2>
            <p>
              CoRaise provides court-ready PDF exports designed for use in
              Australian family courts. These exports include:
            </p>
            <ul>
              <li>A certificate of authenticity with the export date</li>
              <li>
                SHA-256 hash verification for each record, allowing courts to
                verify that records have not been tampered with
              </li>
              <li>
                Comprehensive records of messages, expenses, calendar events, or
                other data as selected by the user
              </li>
            </ul>
            <p>
              <strong>Important disclaimers:</strong>
            </p>
            <ul>
              <li>
                Court exports are designed to meet the reliability requirements
                for electronic evidence under the Evidence Act 1995 (Cth/NSW),
                but we do not guarantee that any particular court will accept
                them as evidence. Admissibility of evidence is ultimately a
                matter for the court.
              </li>
              <li>
                Court exports are records of what was communicated through the
                platform. They are not legal advice, legal opinions, or
                assessments of any party&apos;s position.
              </li>
              <li>
                You should always seek independent legal advice before relying
                on CoRaise exports in legal proceedings.
              </li>
            </ul>

            {/* 16. Account Termination and Data Retention */}
            <h2>16. Account closure and data retention</h2>

            <h3>16.1 Closing your account</h3>
            <p>
              You may close your account at any time by contacting us at{' '}
              <a href={`mailto:${COMPANY.email}`}>{COMPANY.email}</a>. We
              recommend exporting your data before closing your account.
            </p>
            <p>Upon account closure:</p>
            <ul>
              <li>Your access to the Service will be discontinued</li>
              <li>
                Any active subscription will be cancelled (no further charges)
              </li>
              <li>
                Your co-parent retains access to shared records (messages,
                expenses, calendar events) for as long as their account is
                active
              </li>
            </ul>

            <h3>16.2 Data retention after closure</h3>
            <ul>
              <li>
                <strong>If your co-parent&apos;s account is still active:</strong>{' '}
                all shared data is retained for their continued use and
                potential court proceedings
              </li>
              <li>
                <strong>
                  When both parents have closed their accounts:
                </strong>{' '}
                a 90-day cooling-off period begins. During this time, either
                parent can reactivate their account and regain full access.
              </li>
              <li>
                <strong>After the 90-day cooling-off period:</strong> data is
                deleted in line with applicable Australian law
              </li>
              <li>
                <strong>Billing records:</strong> retained as required by
                Australian tax law
              </li>
            </ul>

            <h3>16.3 Termination by us</h3>
            <p>
              We may suspend or terminate your account if you:
            </p>
            <ul>
              <li>Materially breach these Terms</li>
              <li>
                Engage in abusive, threatening, or harmful behaviour on the
                platform
              </li>
              <li>Use the Service in a way that endangers children</li>
              <li>
                Fail to meet the eligibility requirements in Section 3
              </li>
            </ul>
            <p>
              We will provide reasonable notice before termination except where
              immediate action is required to protect the safety of users,
              children, or the integrity of the Service. You may appeal a
              termination decision by contacting us at{' '}
              <a href={`mailto:${COMPANY.email}`}>{COMPANY.email}</a>.
            </p>
            <p>
              If your account is terminated by us, shared records remain
              available to your co-parent.
            </p>

            {/* 17. Limitation of Liability */}
            <h2>17. Limitation of liability</h2>

            <h3>17.1 Consumer guarantees</h3>
            <p>
              Our services come with guarantees that cannot be excluded under
              the Australian Consumer Law (Schedule 2 of the Competition and
              Consumer Act 2010). Nothing in these Terms limits or excludes
              these consumer guarantees, including guarantees that services will
              be provided with due care and skill and will be reasonably fit
              for their purpose.
            </p>

            <h3>17.2 Limitations</h3>
            <p>
              Subject to Section 17.1, and to the maximum extent permitted by
              Australian law:
            </p>
            <ul>
              <li>
                The Service is provided &quot;as is&quot; without warranties
                beyond those required by law
              </li>
              <li>
                We do not guarantee that the Service will be uninterrupted,
                error-free, or completely secure at all times
              </li>
              <li>
                We are not liable for any indirect, incidental, special, or
                consequential damages arising from your use of the Service
              </li>
              <li>
                Our total liability for any claim arising from the Service is
                limited to the greater of: (a) the amount you paid us in the 12
                months preceding the claim, or (b) AUD $100
              </li>
            </ul>

            <h3>17.3 No legal advice</h3>
            <p>
              CoRaise is a communication and record-keeping tool. It does not
              provide legal advice, mediation, counselling, or any professional
              family law service. We are not responsible for decisions you make
              based on records stored in the platform. You should always seek
              independent legal advice about your family law matters.
            </p>

            <h3>17.4 Safety features</h3>
            <p>
              While we provide safety features (emergency exit, block/restrict,
              harassment detection), we cannot guarantee your physical safety.
              These features are tools to help, not guarantees of protection.
              If you are in danger, contact Emergency Services (000).
            </p>

            {/* 18. Indemnification */}
            <h2>18. Indemnification</h2>
            <p>
              To the extent permitted by law, you agree to indemnify and hold
              harmless {COMPANY.legalName}, its directors, employees, and agents
              from any claims, damages, losses, or expenses (including
              reasonable legal fees) arising from:
            </p>
            <ul>
              <li>Your use of the Service in breach of these Terms</li>
              <li>Your violation of any applicable law</li>
              <li>
                Your violation of any rights of another person
              </li>
              <li>
                Content you submit, upload, or transmit through the Service that
                is illegal, defamatory, or infringes on the rights of others
              </li>
            </ul>
            <p>
              This indemnity does not apply to the extent that the claim arises
              from our own negligence, breach of these Terms, or breach of
              Australian Consumer Law guarantees.
            </p>

            {/* 19. Dispute Resolution */}
            <h2>19. Dispute resolution</h2>

            <h3>19.1 Informal resolution</h3>
            <p>
              If you have a dispute with us about the Service, we encourage you
              to contact us first at{' '}
              <a href={`mailto:${COMPANY.email}`}>{COMPANY.email}</a>. We will
              work with you in good faith to resolve the matter informally
              within 30 days.
            </p>

            <h3>19.2 Mediation</h3>
            <p>
              If informal resolution is not possible, either party may refer the
              dispute to mediation administered by the Australian Disputes
              Centre (ADC) in Sydney, New South Wales. The mediation will be
              conducted in accordance with ADC&apos;s mediation guidelines.
              Each party will bear its own costs of mediation.
            </p>

            <h3>19.3 Court proceedings</h3>
            <p>
              If mediation does not resolve the dispute, either party may
              commence court proceedings in the courts of New South Wales.
            </p>

            <h3>19.4 Urgent relief</h3>
            <p>
              Nothing in this section prevents either party from seeking urgent
              injunctive or interlocutory relief from a court of competent
              jurisdiction where necessary to prevent irreparable harm.
            </p>

            {/* 20. Governing Law */}
            <h2>20. Governing law</h2>
            <p>
              These Terms are governed by and construed in accordance with the
              laws of New South Wales, Australia. You agree to submit to the
              non-exclusive jurisdiction of the courts of New South Wales for
              any disputes arising from or relating to these Terms or the
              Service.
            </p>
            <p>
              To the extent that the Service is subject to the Australian
              Consumer Law, the governing law is the Commonwealth of Australia
              Competition and Consumer Act 2010.
            </p>

            {/* 21. General Provisions */}
            <h2>21. General provisions</h2>
            <ul>
              <li>
                <strong>Severability:</strong> if any provision of these Terms
                is found to be unenforceable or invalid by a court of competent
                jurisdiction, that provision will be modified to the minimum
                extent necessary to make it enforceable, or severed if
                modification is not possible. The remaining provisions will
                continue in full force and effect.
              </li>
              <li>
                <strong>Waiver:</strong> our failure to enforce any right or
                provision of these Terms at any time does not constitute a
                waiver of that right or provision. Any waiver must be in writing
                and signed by us.
              </li>
              <li>
                <strong>Entire agreement:</strong> these Terms, together with
                our{' '}
                <a href="/privacy">Privacy Policy</a>, constitute the entire
                agreement between you and us regarding the Service. They replace
                all prior agreements, representations, and understandings.
              </li>
              <li>
                <strong>Assignment:</strong> you may not assign or transfer your
                rights or obligations under these Terms without our prior
                written consent. We may assign our rights and obligations in
                connection with a merger, acquisition, or sale of all or
                substantially all of our assets, provided the assignee agrees
                to honour these Terms.
              </li>
              <li>
                <strong>Force majeure:</strong> we are not liable for any
                failure or delay in performing our obligations where the failure
                or delay results from circumstances beyond our reasonable
                control, including natural disasters, government actions,
                internet outages, or third-party service failures.
              </li>
              <li>
                <strong>Notices:</strong> we will send notices to you via the
                email address associated with your account or through in-app
                notifications. You may send notices to us at{' '}
                <a href={`mailto:${COMPANY.email}`}>{COMPANY.email}</a>.
              </li>
              <li>
                <strong>Relationship:</strong> nothing in these Terms creates a
                partnership, joint venture, employment, or agency relationship
                between you and us.
              </li>
            </ul>

            {/* 22. Changes to Terms */}
            <h2>22. Changes to these terms</h2>
            <p>
              We may update these Terms from time to time to reflect changes in
              our practices, the Service, or legal requirements. When we make
              changes:
            </p>
            <ul>
              <li>
                We will notify registered users via email or in-app notification
                at least 30 days before the changes take effect
              </li>
              <li>
                The &quot;Last updated&quot; date at the top of these Terms will
                be revised
              </li>
              <li>
                Your continued use of the Service after the effective date
                constitutes acceptance of the updated Terms
              </li>
              <li>
                If you do not agree to the updated Terms, you may close your
                account before the changes take effect
              </li>
            </ul>
            <p>
              For material changes that significantly affect your rights or
              obligations, we will make reasonable efforts to provide a clear
              summary of what has changed.
            </p>

            {/* 23. Contact Information */}
            <h2>23. Contact us</h2>
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
                <strong>Professional enquiries:</strong>{' '}
                <a href={`mailto:${COMPANY.professionalEmail}`}>
                  {COMPANY.professionalEmail}
                </a>
              </li>
              <li>
                <strong>Organisation:</strong> {COMPANY.legalName}
              </li>
              <li>
                <strong>ABN:</strong> {COMPANY.abn}
              </li>
              <li>
                <strong>Address:</strong> [Address]
              </li>
            </ul>

            <div className="mt-8 rounded-lg border border-[var(--border)] bg-[var(--surface)] p-6 not-prose">
              <h3 className="text-base font-semibold text-[var(--text-primary)] mb-2">
                Safety contacts
              </h3>
              <ul className="space-y-1 text-[var(--text-secondary)] text-sm">
                <li>
                  <strong>Emergency Services:</strong> 000
                </li>
                <li>
                  <strong>1800RESPECT:</strong> 1800 737 732 (24/7 family
                  violence support)
                </li>
                <li>
                  <strong>Lifeline:</strong> 13 11 14 (crisis support)
                </li>
              </ul>
            </div>
          </div>
        </div>
      </article>
    </>
  )
}
