import { createMetadata } from '@/lib/metadata'
import { JsonLd } from '@/components/seo/json-ld'
import { breadcrumbSchema } from '@/lib/structured-data'
import { COMPANY } from '@/lib/constants'

export const metadata = createMetadata({
  title: 'Privacy Policy',
  description:
    'CoRaise Privacy Policy - how we collect, use, and protect your personal information. All app data stored exclusively in Australia under the Privacy Act 1988.',
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
            {/* Plain-language summary */}
            <div className="rounded-lg border border-[var(--border)] bg-[var(--surface)] p-6 mb-8 not-prose">
              <h2 className="text-lg font-semibold text-[var(--text-primary)] mb-3">
                Summary in plain language
              </h2>
              <ul className="space-y-2 text-[var(--text-secondary)] text-sm">
                <li>
                  CoRaise is run by {COMPANY.legalName} (ABN {COMPANY.abn}) in
                  New South Wales, Australia.
                </li>
                <li>
                  All your app data is stored in Sydney, Australia. It never
                  leaves the country.
                </li>
                <li>
                  We collect only what we need to run the service - your account
                  details, messages, expenses, and any information you choose to
                  enter about your children.
                </li>
                <li>
                  Messages and records cannot be deleted because they may be
                  needed for court proceedings. This is a feature, not a
                  limitation.
                </li>
                <li>
                  We never sell your data. We never use it for advertising.
                </li>
                <li>
                  Our website (coraise.com.au) uses standard analytics. Our app
                  (app.coraise.com.au) does not send your data offshore.
                </li>
                <li>
                  You can access, correct, and export your data at any time.
                </li>
              </ul>
            </div>

            {/* 1. Who We Are */}
            <h2>1. Who we are</h2>
            <p>
              CoRaise is a co-parenting communication platform operated by{' '}
              {COMPANY.legalName} (ABN {COMPANY.abn}), based in New South Wales,
              Australia.
            </p>
            <p>
              In this policy, &quot;we&quot;, &quot;us&quot;, and
              &quot;our&quot; refer to {COMPANY.legalName} and the CoRaise
              platform. &quot;You&quot; and &quot;your&quot; refer to you as a
              user of our services.
            </p>
            <p>
              We are committed to protecting your privacy and handling your
              personal information in line with the Privacy Act 1988 (Cth) and
              the Australian Privacy Principles (APPs).
            </p>
            <p>
              You can contact us about privacy matters at{' '}
              <a href={`mailto:${COMPANY.email}`}>{COMPANY.email}</a>.
            </p>

            {/* 2. Scope */}
            <h2>2. What this policy covers</h2>
            <p>
              This policy covers how we handle personal information across two
              separate services:
            </p>
            <ol>
              <li>
                <strong>The CoRaise app</strong> (app.coraise.com.au) - the
                co-parenting platform where you create an account, send
                messages, track expenses, manage calendars, and store records.
              </li>
              <li>
                <strong>The CoRaise website</strong> (coraise.com.au) - our
                public marketing website where you can learn about CoRaise,
                read our blog, and contact us.
              </li>
            </ol>
            <p>
              These two services collect different types of information and use
              different third-party tools. We explain the differences clearly
              throughout this policy.
            </p>

            {/* 3. Information We Collect */}
            <h2>3. Information we collect</h2>
            <p>
              We only collect personal information that is reasonably necessary
              to provide and improve our services (APP 3).
            </p>

            <h3>3.1 Information collected by the app (app.coraise.com.au)</h3>

            <h3>Account information</h3>
            <p>
              When you register, we collect your name, email address, and
              password (stored in hashed form - we cannot read your password).
              You may also provide a phone number. If you sign in via Google or
              Apple, we receive your name and email from the identity provider.
              We do not receive or store your Google or Apple password.
            </p>

            <h3>Children&apos;s information</h3>
            <p>
              You may choose to enter information about your children, including
              names, dates of birth, medical details, school information, and
              emergency contacts. This information is entered voluntarily by
              parents. Children do not have their own accounts and cannot access
              the platform.
            </p>

            <h3>Communications</h3>
            <p>
              All messages sent through CoRaise are stored permanently in
              tamper-proof, append-only format. Each message is
              cryptographically hashed (SHA-256) at the time of creation. This
              means messages cannot be edited or deleted after the 10-second
              preview period, which helps to keep records reliable for court
              proceedings.
            </p>

            <h3>Financial information</h3>
            <p>
              If you track shared expenses, we store expense details, receipt
              images, and split calculations. Subscription payments are handled
              by Stripe. We do not store your credit card number, bank account
              details, or other payment credentials on our servers. Stripe
              handles payment data under their own privacy policy and PCI-DSS
              compliance.
            </p>

            <h3>Calendar events</h3>
            <p>
              We store calendar events you create, including event details,
              dates, times, and any notes. We also store Australian school term
              dates and public holidays relevant to your state.
            </p>

            <h3>Photos and documents</h3>
            <p>
              Photos and documents you upload are stored securely in our
              Australian-hosted storage. File metadata (name, size, type, upload
              date) is recorded alongside the files.
            </p>

            <h3>Technical and usage data</h3>
            <p>
              We collect basic usage analytics through Vercel Analytics, which
              processes data within our Australian hosting region. This includes
              page views, feature usage, and general interaction patterns. We do
              not collect keystroke data, screen recordings, or detailed
              behavioural profiles.
            </p>

            <h3>Device and notification data</h3>
            <p>
              If you enable push notifications, we store your device push token
              and basic device information (operating system, browser type) to
              deliver notifications. Push notification content is minimised - we
              send &quot;New message from [first name]&quot; rather than the
              actual message content to protect your privacy.
            </p>

            <h3>Session data</h3>
            <p>
              We store authentication tokens and session information to keep you
              securely signed in. Sessions time out after 15 minutes of
              inactivity (or 5 minutes when the app is in the background) as a
              safety feature.
            </p>

            <h3>3.2 Information collected by the website (coraise.com.au)</h3>
            <p>
              Our public website does not require user accounts and collects
              significantly less information:
            </p>
            <ul>
              <li>
                <strong>Contact form submissions:</strong> if you use our
                contact form, we collect your name, email address, subject, and
                message.
              </li>
              <li>
                <strong>Website analytics:</strong> we use Meta Pixel (Facebook)
                and Google Analytics/Tags to understand how visitors find and
                use our website. These tools collect anonymised browsing data
                such as pages visited, referral source, and general location.
                This data is processed by Meta and Google on their servers,
                which may be located outside Australia.
              </li>
              <li>
                <strong>Hosting analytics:</strong> Vercel provides basic
                hosting analytics (page views, performance metrics).
              </li>
            </ul>
            <p>
              The website does not collect any app user data, account
              information, messages, or family records.
            </p>

            {/* 4. How We Collect Information */}
            <h2>4. How we collect information</h2>
            <p>
              We collect personal information in the following ways:
            </p>
            <ul>
              <li>
                <strong>Directly from you:</strong> when you register, send
                messages, create events, enter expenses, upload files, or fill
                out forms.
              </li>
              <li>
                <strong>Automatically:</strong> when you use the platform, we
                collect technical data such as your IP address, browser type,
                and usage patterns through Vercel Analytics.
              </li>
              <li>
                <strong>From your co-parent:</strong> when your co-parent
                invites you to the platform, we receive your email address from
                them. When they share children&apos;s information with you, that
                information becomes visible to you.
              </li>
              <li>
                <strong>From third-party sign-in providers:</strong> if you sign
                in via Google or Apple, we receive your name and email address
                from the identity provider.
              </li>
              <li>
                <strong>From Stripe:</strong> we receive confirmation of payment
                status, subscription details, and billing events from Stripe.
                We do not receive your full card number or bank details.
              </li>
            </ul>

            {/* 5. Why We Collect Information */}
            <h2>5. Why we collect information (purposes and legal basis)</h2>
            <p>
              Under APP 3, we only collect personal information that is
              reasonably necessary for our functions and activities. Here is why
              we collect each type of information:
            </p>

            <div className="overflow-x-auto">
              <table>
                <thead>
                  <tr>
                    <th>Purpose</th>
                    <th>Information used</th>
                    <th>Legal basis</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Providing the co-parenting platform</td>
                    <td>
                      Account details, messages, calendar events, expenses,
                      child information
                    </td>
                    <td>
                      Necessary to perform the service you signed up for
                    </td>
                  </tr>
                  <tr>
                    <td>Account management and authentication</td>
                    <td>Name, email, password, session tokens</td>
                    <td>
                      Necessary to create and secure your account
                    </td>
                  </tr>
                  <tr>
                    <td>Subscription billing</td>
                    <td>Payment status, subscription tier, billing events</td>
                    <td>Necessary to process your subscription</td>
                  </tr>
                  <tr>
                    <td>Court-ready record keeping</td>
                    <td>
                      Messages, expenses, audit logs, SHA-256 hashes
                    </td>
                    <td>
                      Core function of the service; compliance with Evidence
                      Act 1995
                    </td>
                  </tr>
                  <tr>
                    <td>Safety features (harassment detection, blocking)</td>
                    <td>Message content, usage patterns</td>
                    <td>
                      Protecting the safety and wellbeing of users and children
                    </td>
                  </tr>
                  <tr>
                    <td>Push notifications and email alerts</td>
                    <td>Device tokens, email address, first name</td>
                    <td>
                      Necessary to deliver notifications you have enabled
                    </td>
                  </tr>
                  <tr>
                    <td>Service improvement</td>
                    <td>Aggregated, de-identified usage analytics</td>
                    <td>
                      Legitimate interest in improving the platform
                    </td>
                  </tr>
                  <tr>
                    <td>Customer support</td>
                    <td>Account details, support correspondence</td>
                    <td>
                      Necessary to respond to your enquiries
                    </td>
                  </tr>
                  <tr>
                    <td>Legal compliance and safety</td>
                    <td>As required by law or court order</td>
                    <td>
                      Compliance with Australian law, including the Family Law
                      Act 1975
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p>
              We do not use your personal information for advertising,
              profiling, direct marketing by third parties, or any purpose
              unrelated to the co-parenting service. We never sell your data.
            </p>

            {/* 6. Australian Data Sovereignty */}
            <h2>6. Australian data sovereignty</h2>
            <p>
              We take data sovereignty seriously. Here is where your data is
              stored and processed:
            </p>

            <h3>6.1 App data - stored exclusively in Australia</h3>
            <p>
              All CoRaise app data is hosted exclusively in Sydney, Australia
              (AWS ap-southeast-2 region) through our database provider,
              Supabase. This includes:
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
              Our web application is hosted on Vercel&apos;s Sydney region
              (syd1), meaning your requests are served from Australian servers.
            </p>
            <p>
              Your app data never leaves Australia. This protects your
              information from foreign government access requests, including
              under the US CLOUD Act.
            </p>

            <h3>6.2 Website analytics - processed offshore</h3>
            <p>
              Our marketing website (coraise.com.au) uses Meta Pixel and Google
              Analytics, which process anonymised website visitor data on
              servers that may be located outside Australia. This is standard
              website analytics data (pages visited, referral source, general
              location) and does not include any app user data, messages, or
              family records.
            </p>

            <h3>6.3 Push notifications - minimised data offshore</h3>
            <p>
              Push notifications are delivered through Expo, whose servers are
              located in the United States. To protect your privacy, we minimise
              the data included in push notifications:
            </p>
            <ul>
              <li>
                We send only &quot;New message from [first name]&quot; - never
                the actual message content
              </li>
              <li>
                We never include children&apos;s information, financial data, or
                other sensitive details in push payloads
              </li>
              <li>
                Push tokens are stored in our Australian database, not on
                Expo&apos;s servers
              </li>
            </ul>

            {/* 7. How We Use Your Information */}
            <h2>7. How we use your information</h2>
            <p>
              In line with APP 6, we use your personal information only for the
              purposes described in this policy. Specifically, we use your
              information to:
            </p>
            <ul>
              <li>
                <strong>Operate the platform:</strong> deliver messaging,
                calendar, expense tracking, child information management, photo
                sharing, and document storage features
              </li>
              <li>
                <strong>Manage your account:</strong> create and secure your
                account, process subscriptions, and handle billing
              </li>
              <li>
                <strong>Provide safety features:</strong> operate harassment
                detection, block/restrict modes, emergency exit, and session
                timeouts to protect users
              </li>
              <li>
                <strong>Generate court-ready records:</strong> produce PDF
                exports with SHA-256 integrity verification and certificates of
                authenticity for use in Australian family courts
              </li>
              <li>
                <strong>Send notifications:</strong> deliver push notifications
                and transactional emails about account activity, with
                privacy-preserving content
              </li>
              <li>
                <strong>Provide professional access:</strong> allow authorised
                family law professionals (lawyers, mediators, social workers) to
                view records you have granted them access to
              </li>
              <li>
                <strong>Improve the service:</strong> analyse aggregated,
                de-identified usage patterns to identify issues and improve the
                platform
              </li>
              <li>
                <strong>Respond to support requests:</strong> answer your
                questions and resolve technical issues
              </li>
              <li>
                <strong>Comply with the law:</strong> respond to lawful
                requests, court orders, and legal obligations
              </li>
            </ul>
            <p>
              We do not use your information for purposes unrelated to the
              co-parenting service. We do not build advertising profiles, sell
              data, or share information with data brokers.
            </p>

            {/* 8. Who We Share Information With */}
            <h2>8. Who we share information with</h2>
            <p>
              We share your personal information only in the following limited
              circumstances:
            </p>

            <h3>8.1 Your co-parent</h3>
            <p>
              Information you enter into shared spaces (messages, calendar
              events, shared expenses) is visible to your co-parent. This is the
              core function of the platform. Children&apos;s information is
              private by default and only shared when you explicitly request it
              and your co-parent accepts.
            </p>

            <h3>8.2 Authorised professionals</h3>
            <p>
              If you grant permission, family law professionals (lawyers,
              mediators, social workers) can view your records through the
              Professional portal in read-only mode. You control which
              professionals have access and can revoke access at any time.
            </p>

            <h3>8.3 Service providers</h3>
            <p>
              We use a small number of trusted service providers to operate the
              platform:
            </p>
            <div className="overflow-x-auto">
              <table>
                <thead>
                  <tr>
                    <th>Provider</th>
                    <th>Purpose</th>
                    <th>Data shared</th>
                    <th>Location</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Supabase</td>
                    <td>Database and file storage</td>
                    <td>All app data (hosted, not shared)</td>
                    <td>Sydney, Australia</td>
                  </tr>
                  <tr>
                    <td>Vercel</td>
                    <td>Web hosting and analytics</td>
                    <td>Application code, request data</td>
                    <td>Sydney, Australia (syd1)</td>
                  </tr>
                  <tr>
                    <td>Stripe</td>
                    <td>Payment processing</td>
                    <td>
                      Payment details, subscription status, email address
                    </td>
                    <td>PCI-DSS compliant; data may be processed globally</td>
                  </tr>
                  <tr>
                    <td>Resend</td>
                    <td>Transactional email delivery</td>
                    <td>Email address, email content (notifications, invites)</td>
                    <td>United States</td>
                  </tr>
                  <tr>
                    <td>Expo</td>
                    <td>Push notification delivery</td>
                    <td>
                      Device token, first name only (never message content)
                    </td>
                    <td>United States</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h3>8.4 Website analytics providers (website only)</h3>
            <div className="overflow-x-auto">
              <table>
                <thead>
                  <tr>
                    <th>Provider</th>
                    <th>Purpose</th>
                    <th>Data shared</th>
                    <th>Location</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Meta (Facebook Pixel)</td>
                    <td>Website visitor analytics</td>
                    <td>Anonymised browsing data (pages visited, referrals)</td>
                    <td>Global (Meta servers)</td>
                  </tr>
                  <tr>
                    <td>Google (Analytics/Tags)</td>
                    <td>Website visitor analytics</td>
                    <td>Anonymised browsing data (pages visited, referrals)</td>
                    <td>Global (Google servers)</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p>
              These website analytics tools do not have access to any app user
              data, messages, or family records. They operate only on the public
              marketing website.
            </p>

            <h3>8.5 Legal requirements</h3>
            <p>
              We may disclose personal information if required by Australian
              law, court order, subpoena, or to protect the safety of a child or
              individual. We will notify you of any such disclosure unless
              prohibited by law from doing so.
            </p>

            <h3>8.6 What we never do</h3>
            <p>
              We do not sell, rent, or trade your personal information to any
              third party for marketing, advertising, or any other purpose. We
              do not share data with data brokers. We do not allow third parties
              to use your data for their own purposes.
            </p>

            {/* 9. Cross-Border Disclosure */}
            <h2>9. Cross-border disclosure (APP 8)</h2>
            <p>
              Under APP 8, we must tell you if your personal information may be
              disclosed to overseas recipients. Here is the full picture:
            </p>
            <ul>
              <li>
                <strong>App user data:</strong> all app data (messages,
                expenses, child information, documents, photos) is stored
                exclusively in Australia and is never sent overseas.
              </li>
              <li>
                <strong>Payment processing:</strong> Stripe processes payment
                data globally in line with PCI-DSS standards. Only payment and
                billing information is shared with Stripe - never your messages,
                family records, or children&apos;s information.
              </li>
              <li>
                <strong>Email delivery:</strong> Resend delivers transactional
                emails (notifications, invitations) from servers in the United
                States. Emails contain minimal personal information (your name,
                general notification text).
              </li>
              <li>
                <strong>Push notifications:</strong> Expo delivers push
                notifications from servers in the United States. We minimise
                the data sent - only your first name, never message content or
                sensitive information.
              </li>
              <li>
                <strong>Website analytics:</strong> Meta Pixel and Google
                Analytics on our marketing website process anonymised browsing
                data on servers that may be outside Australia. This is
                website-only and does not include any app user data.
              </li>
            </ul>
            <p>
              We take reasonable steps to ensure that any overseas recipients
              handle your information in a manner consistent with the APPs.
            </p>

            {/* 10. Data Security */}
            <h2>10. Data security (APP 11)</h2>
            <p>
              We take reasonable steps to protect your personal information from
              misuse, interference, loss, unauthorised access, modification,
              and disclosure. Our security measures include:
            </p>

            <h3>Encryption</h3>
            <ul>
              <li>
                All data is encrypted in transit using TLS/HTTPS
              </li>
              <li>
                All data is encrypted at rest in our Australian database
              </li>
              <li>
                Passwords are cryptographically hashed - we cannot read them
              </li>
            </ul>

            <h3>Access controls</h3>
            <ul>
              <li>
                Row-level security (RLS) is enabled on every database table,
                ensuring each user can only access their own family&apos;s data
              </li>
              <li>
                All API requests are authenticated and authorised before any
                data is returned
              </li>
              <li>
                Rate limiting prevents abuse (60 requests per minute per user)
              </li>
            </ul>

            <h3>Tamper-proof records</h3>
            <ul>
              <li>
                SHA-256 cryptographic hashing of all messages and records -
                any tampering would be immediately detectable
              </li>
              <li>
                Append-only storage means records cannot be modified or deleted
              </li>
              <li>
                Comprehensive audit logging records all data access and changes
              </li>
            </ul>

            <h3>Session security</h3>
            <ul>
              <li>
                Automatic session timeout after 15 minutes of foreground
                inactivity or 5 minutes in the background
              </li>
              <li>
                60-second warning before automatic sign-out
              </li>
              <li>
                Emergency exit feature for users in unsafe situations
              </li>
            </ul>

            <h3>Ongoing security</h3>
            <ul>
              <li>
                Regular security assessments and code reviews
              </li>
              <li>
                Independent security penetration testing
              </li>
              <li>
                Prompt patching of security vulnerabilities
              </li>
            </ul>

            {/* 11. Children's Information */}
            <h2>11. Children&apos;s information</h2>
            <p>
              CoRaise stores information about children as entered by their
              parents or legal guardians. We treat children&apos;s information
              with the highest level of care:
            </p>
            <ul>
              <li>
                <strong>No child accounts:</strong> children do not create
                accounts and cannot access the platform directly. All
                children&apos;s information is entered and managed by parents.
              </li>
              <li>
                <strong>Private by default:</strong> children&apos;s information
                is private to the parent who entered it. Sharing with a
                co-parent requires an explicit request that the co-parent must
                accept. There is a full audit trail of all sharing requests.
              </li>
              <li>
                <strong>Append-only storage:</strong> child information is
                stored in append-only format. Changes create new records rather
                than overwriting existing ones, preserving a complete history.
              </li>
              <li>
                <strong>Strict access controls:</strong> access to
                children&apos;s information is controlled through row-level
                security policies. Only authorised family members can view it.
              </li>
              <li>
                <strong>Audit trail:</strong> all access to child records is
                logged for accountability.
              </li>
              <li>
                <strong>Australian storage only:</strong> children&apos;s
                information is stored exclusively in our Sydney database and
                never transmitted overseas.
              </li>
            </ul>
            <p>
              We follow the Office of the Australian Information Commissioner
              (OAIC) guidance on handling children&apos;s personal information,
              including taking extra care given the sensitivity of this data in
              a family law context.
            </p>

            {/* 12. Age Requirements */}
            <h2>12. Age requirements</h2>
            <p>
              You must be at least 16 years old to create a CoRaise account.
            </p>
            <ul>
              <li>
                <strong>Users aged 18 and over:</strong> standard account
                registration.
              </li>
              <li>
                <strong>Users aged 16-17:</strong> must be a parent or legal
                guardian of a child. Enhanced consent is required during
                registration, in line with OAIC guidance on the capacity of
                young people to consent to the handling of their personal
                information.
              </li>
              <li>
                <strong>Users under 16:</strong> accounts are only available by
                court order, subject to manual review by our team. This reflects
                the Family Law Act 1975 (Cth), which does not set a minimum age
                for parents, while aligning with Australian norms on young
                people&apos;s capacity to consent.
              </li>
            </ul>
            <p>
              If we become aware that a user has created an account in breach of
              these age requirements, we will take steps to deactivate the
              account and handle any personal information in line with our
              obligations under the Privacy Act.
            </p>

            {/* 13. Data Retention */}
            <h2>13. Data retention</h2>
            <p>
              Due to the court-admissible nature of CoRaise records, our
              retention approach reflects the reality that families may need
              these records for legal proceedings at any point:
            </p>
            <ul>
              <li>
                <strong>While either parent&apos;s account is active:</strong>{' '}
                all data is retained. Shared records (messages, expenses,
                calendar events, child information) remain available to both
                parties because either parent may need them.
              </li>
              <li>
                <strong>When both parents have closed their accounts:</strong>{' '}
                a 90-day cooling-off period begins. During this period, either
                parent can reactivate their account and regain access to their
                records.
              </li>
              <li>
                <strong>After the 90-day cooling-off period:</strong> data is
                deleted in line with applicable Australian law.
              </li>
              <li>
                <strong>Audit logs:</strong> retained for the same period as the
                underlying records to maintain the integrity chain.
              </li>
              <li>
                <strong>Subscription and billing records:</strong> retained as
                required by Australian tax law (generally 5 years).
              </li>
            </ul>
            <p>
              The append-only, immutable design of the platform means that
              individual messages, expenses, or child information records cannot
              be selectively deleted while either party&apos;s account is
              active. This is intentional - it ensures that neither party can
              tamper with or destroy records that the other party may need for
              court proceedings.
            </p>

            {/* 14. Your Rights */}
            <h2>14. Your rights under the Australian Privacy Principles</h2>
            <p>
              Under the Privacy Act 1988, you have the following rights:
            </p>

            <h3>Right of access (APP 12)</h3>
            <p>
              You can access your personal information at any time through the
              platform. You can also request a formal copy of all personal
              information we hold about you by contacting us at{' '}
              <a href={`mailto:${COMPANY.email}`}>{COMPANY.email}</a>. We will
              respond within 30 days.
            </p>

            <h3>Right to correction (APP 13)</h3>
            <p>
              You can update your account details (name, email, phone) at any
              time through your account settings. If you believe other personal
              information we hold about you is inaccurate, incomplete, or
              out of date, contact us and we will take reasonable steps to
              correct it.
            </p>
            <p>
              Note: due to the append-only design of the platform, corrections
              to messages, expenses, and child information are recorded as new
              entries rather than changes to existing records. This preserves
              the integrity of the historical record.
            </p>

            <h3>Right to export your data</h3>
            <p>
              You can export your data at any time using the court-ready PDF
              export feature within the app. You may also request a full data
              export by contacting us. We will provide your data in a portable
              format within 30 days.
            </p>

            <h3>Right to complain</h3>
            <p>
              If you believe we have breached your privacy, you can:
            </p>
            <ol>
              <li>
                Contact us first at{' '}
                <a href={`mailto:${COMPANY.email}`}>{COMPANY.email}</a>. We
                will investigate and respond within 30 days.
              </li>
              <li>
                If you are not satisfied with our response, you can lodge a
                complaint with the Office of the Australian Information
                Commissioner (OAIC) at{' '}
                <a
                  href="https://www.oaic.gov.au"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  www.oaic.gov.au
                </a>{' '}
                or by calling 1300 363 992.
              </li>
            </ol>

            {/* 15. Immutability and Court Admissibility */}
            <h2>15. Immutability and court admissibility</h2>
            <p>
              A key feature of CoRaise is that communication records are
              tamper-proof and designed to meet the reliability requirements
              for electronic evidence under the Evidence Act 1995 (Cth/NSW).
            </p>
            <p>This means:</p>
            <ul>
              <li>
                Messages cannot be edited or deleted after the 10-second preview
                period
              </li>
              <li>
                Each record is cryptographically hashed (SHA-256) by a database
                trigger at the time of creation
              </li>
              <li>
                All changes to records (such as expense updates or calendar
                modifications) are stored as new versions, preserving the
                original
              </li>
              <li>
                A comprehensive audit trail logs all data access and changes
              </li>
              <li>
                Court-ready PDF exports include a certificate of authenticity
                with SHA-256 verification
              </li>
            </ul>
            <p>
              This design means we cannot comply with requests to delete
              individual messages or records while either party&apos;s account
              is active. This is not a limitation of your privacy rights - it
              is a core feature that protects both parties&apos; ability to
              rely on the record in legal proceedings.
            </p>

            {/* 16. Cookies and Tracking */}
            <h2>16. Cookies and tracking</h2>

            <h3>On the app (app.coraise.com.au)</h3>
            <p>
              The CoRaise app uses essential cookies and local storage for
              authentication and session management only. We do not use tracking
              cookies, advertising cookies, or third-party cookies for marketing
              purposes within the app.
            </p>

            <h3>On the website (coraise.com.au)</h3>
            <p>
              Our marketing website uses cookies from Meta Pixel and Google
              Analytics/Tags for website visitor analytics. These cookies help
              us understand how visitors find and interact with our website.
              They do not track your activity within the CoRaise app.
            </p>
            <p>
              You can manage cookie preferences through your browser settings.
              Most browsers allow you to refuse cookies or alert you when
              cookies are being sent. Disabling cookies on the marketing
              website will not affect your use of the CoRaise app.
            </p>

            {/* 17. Notifiable Data Breaches */}
            <h2>17. Notifiable data breaches</h2>
            <p>
              Under the Notifiable Data Breaches (NDB) scheme in Part IIIC of
              the Privacy Act 1988, we are required to notify you and the OAIC
              if there is an eligible data breach that is likely to result in
              serious harm.
            </p>
            <p>If a data breach occurs, we will:</p>
            <ol>
              <li>
                Contain the breach and assess the risk of serious harm as
                quickly as possible
              </li>
              <li>
                Notify the OAIC if the breach is likely to result in serious
                harm to any individual
              </li>
              <li>
                Notify affected individuals as soon as practicable, including
                details of the breach, the type of information involved, and
                steps they can take to protect themselves
              </li>
              <li>
                Take reasonable steps to remediate the breach and prevent future
                occurrences
              </li>
            </ol>
            <p>
              Given the sensitive nature of family law data, we treat all
              potential breaches with the highest priority. Our security
              measures (encryption, row-level security, audit logging) are
              designed to minimise both the likelihood and impact of any breach.
            </p>

            {/* 18. Changes to This Policy */}
            <h2>18. Changes to this policy</h2>
            <p>
              We may update this privacy policy from time to time to reflect
              changes in our practices, technology, or legal requirements.
            </p>
            <ul>
              <li>
                We will notify registered app users of material changes via
                email or in-app notification at least 14 days before the
                changes take effect.
              </li>
              <li>
                The &quot;Last updated&quot; date at the top of this policy
                shows when it was most recently revised.
              </li>
              <li>
                Previous versions of this policy will be available on request.
              </li>
            </ul>
            <p>
              We encourage you to review this policy periodically to stay
              informed about how we protect your information.
            </p>

            {/* 19. Contact Us and Complaints */}
            <h2>19. Contact us</h2>
            <p>
              If you have questions about this privacy policy, wish to access
              or correct your personal information, want to make a data export
              request, or want to raise a privacy concern, please contact us:
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
                <strong>ABN:</strong> {COMPANY.abn}
              </li>
              <li>
                <strong>Address:</strong> [Address]
              </li>
            </ul>
            <p>
              We aim to respond to all privacy enquiries within 30 days.
            </p>

            <h3>Complaints to the OAIC</h3>
            <p>
              If you are not satisfied with our response to a privacy complaint,
              you have the right to lodge a complaint with the Office of the
              Australian Information Commissioner (OAIC):
            </p>
            <ul>
              <li>
                <strong>Website:</strong>{' '}
                <a
                  href="https://www.oaic.gov.au"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  www.oaic.gov.au
                </a>
              </li>
              <li>
                <strong>Phone:</strong> 1300 363 992
              </li>
              <li>
                <strong>Post:</strong> GPO Box 5218, Sydney NSW 2001
              </li>
            </ul>
          </div>
        </div>
      </article>
    </>
  )
}
