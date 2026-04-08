import { createMetadata } from '@/lib/metadata'
import { JsonLd } from '@/components/seo/json-ld'
import { faqSchema, breadcrumbSchema } from '@/lib/structured-data'
import { Button } from '@/components/ui/button'
import { APP_URL } from '@/lib/constants'
import { FaqContent } from './faq-content'

export const metadata = createMetadata({
  title: 'Frequently Asked Questions',
  description:
    'Find answers to common questions about CoRaise - Australia\'s co-parenting communication platform. Learn about pricing, features, safety, legal compliance, and more.',
  path: '/faq',
})

const faqCategories = {
  General: [
    {
      question: 'What is CoRaise?',
      answer:
        'CoRaise is an Australian co-parenting communication platform built for separated families. It provides tamper-proof messaging, shared calendars with Australian school terms and holidays, expense tracking with receipt storage, and court-ready PDF exports. All data is hosted exclusively in Australia.',
    },
    {
      question: 'Who is CoRaise designed for?',
      answer:
        'CoRaise is designed for separated Australian families who need a structured, safe way to communicate about their children. It is used by co-parents, family lawyers, mediators, social workers, and other family law professionals. The platform is built to reduce conflict and keep the focus on your children.',
    },
    {
      question: 'How do I invite my co-parent to CoRaise?',
      answer:
        'After you create your account, you can send an invitation to your co-parent via email directly from the app. They will receive a link to register and join your shared family space. You can also share child information with them once they have accepted the invitation.',
    },
    {
      question: 'What if my co-parent refuses to join?',
      answer:
        'You can still use CoRaise on your own to keep records of expenses, store important documents, and manage your calendar. If your co-parent later decides to join, you can send them an invitation at any time. Some family law professionals also recommend the platform, which can help encourage participation.',
    },
    {
      question: 'Is CoRaise available on mobile?',
      answer:
        'Yes. CoRaise works on any device with a web browser - phones, tablets, and computers. We also have a dedicated mobile app available for iOS and Android through the App Store and Google Play. Your data syncs across all your devices automatically.',
    },
    {
      question: 'How is CoRaise different from texting or email?',
      answer:
        'Unlike regular texting or email, CoRaise creates a tamper-proof record of all communication. Messages cannot be edited or deleted after sending, and every message is cryptographically hashed for integrity. This makes your records admissible as evidence in Australian family courts under the Evidence Act 1995.',
    },
  ],
  Pricing: [
    {
      question: 'How much does CoRaise cost?',
      answer:
        'CoRaise offers three plans: a Free plan with basic messaging and calendar features, a Family plan at $9.99/month with full features including expense tracking and court exports, and a Premium plan at $14.99/month with additional storage and priority support. We also offer a Professional plan at $29.99/month for family law practitioners.',
    },
    {
      question: 'What is split billing and how does it work?',
      answer:
        'Split billing means one subscription covers both co-parents. Instead of each parent paying separately (like US competitors that charge $200-450 per parent per year), CoRaise charges a single subscription that can be split between both parents. On the Family plan, that is just $4.99 each per month.',
    },
    {
      question: 'What can I do on the Free plan?',
      answer:
        'The Free plan includes secure messaging with tamper-proof records, a shared calendar with Australian school terms and public holidays, and basic child information storage. To access expense tracking, receipt OCR, court-ready PDF exports, and advanced features, you will need the Family or Premium plan.',
    },
    {
      question: 'Is there a free trial?',
      answer:
        'Yes. You can try all Family plan features free for 14 days when you first sign up. No credit card is required to start. After the trial, you can choose to continue on a paid plan or switch to the Free plan to keep using basic features.',
    },
    {
      question: 'What happens if my co-parent does not pay their share?',
      answer:
        'The subscription works regardless of whether your co-parent contributes to the cost. One parent can pay the full amount, or you can arrange to split it between you. CoRaise does not enforce the split - it is simply a way to share the cost fairly if both parents agree.',
    },
    {
      question: 'Can I cancel at any time?',
      answer:
        'Yes. You can cancel your subscription at any time from your account settings. Your data remains accessible on the Free plan after cancellation, so you never lose your records. There are no cancellation fees or lock-in contracts.',
    },
  ],
  Features: [
    {
      question: 'Can I edit or delete messages after sending?',
      answer:
        'No. Messages in CoRaise are permanent and tamper-proof by design. Once a message is sent, it cannot be edited or deleted by either parent. This is a deliberate feature that ensures the integrity of your communication records for court purposes. A 10-second preview and cooling-off period is provided before each message is sent.',
    },
    {
      question: 'Does CoRaise sync with Google Calendar or Apple Calendar?',
      answer:
        'Yes. CoRaise supports syncing your shared parenting calendar with Google Calendar and Apple Calendar. Events created in CoRaise will appear in your personal calendar app, and you can manage your schedule from whichever calendar you prefer.',
    },
    {
      question: 'How does the receipt OCR feature work?',
      answer:
        'When you upload a photo of a receipt, CoRaise uses optical character recognition (OCR) to automatically extract the merchant name, date, and amount. You can review and adjust the extracted details before saving the expense. This makes logging shared expenses quick and accurate.',
    },
    {
      question: 'What are the photo storage limits?',
      answer:
        'Photo storage limits depend on your plan. The Free plan includes basic storage for essential documents. The Family plan provides generous storage for photos, receipts, and documents. The Premium plan offers expanded storage for families who need to share more photos and files. Exact limits are shown on the pricing page.',
    },
    {
      question: 'How do court-ready PDF exports work?',
      answer:
        'CoRaise generates comprehensive PDF reports of your messages, expenses, calendar events, and other records. Each export includes SHA-256 cryptographic hashes that verify the data has not been tampered with. These exports are designed to meet the requirements of the Evidence Act 1995 for Australian family courts.',
    },
    {
      question: 'Does CoRaise include Australian school term dates?',
      answer:
        'Yes. The shared calendar automatically includes school term dates and public holidays for all Australian states and territories. You can select your state to see the relevant dates, making it easy to plan school holiday arrangements and avoid scheduling conflicts.',
    },
  ],
  Safety: [
    {
      question: 'What is the emergency exit feature?',
      answer:
        'The emergency exit button is always visible on screen. When pressed, it instantly redirects your browser to the Bureau of Meteorology weather website (bom.gov.au). This allows you to quickly leave the app if someone is watching your screen. It does not log you out, so your session is preserved for when you return safely.',
    },
    {
      question: 'How does block and restrict mode work?',
      answer:
        'If you are experiencing harassment or abuse, you can block or restrict your co-parent. Block mode prevents them from sending you messages. Restrict mode limits communication to pre-approved topics only. These protections can be activated from your safety settings at any time.',
    },
    {
      question: 'Does CoRaise detect harassment in messages?',
      answer:
        'Yes. CoRaise includes automated harassment detection that flags potentially abusive language in messages. When detected, the system logs the incident and can alert you or your support professional. This feature runs entirely on our Australian servers and no message content is sent offshore.',
    },
    {
      question: 'Are my notification previews private?',
      answer:
        'Yes. By default, push notification previews are turned off. You will see "New message in CoRaise" rather than the actual message content. This protects your privacy if someone else can see your phone screen. You can change this setting if you prefer to see message previews.',
    },
    {
      question: 'Can I access safety resources without a CoRaise account?',
      answer:
        'Yes. Our safety page at coraise.com.au/safety lists Australian crisis support numbers including 1800RESPECT (1800 737 732) for 24/7 domestic violence support, Lifeline (13 11 14) for crisis support, and 000 for emergencies. These resources are freely accessible to everyone.',
    },
    {
      question: 'Is CoRaise safe to use in domestic violence situations?',
      answer:
        'CoRaise includes several safety features designed for high-conflict and domestic violence situations: emergency exit, notification privacy, block/restrict modes, harassment detection, and session timeouts. However, if you are in immediate danger, always call 000 first. For ongoing support, contact 1800RESPECT on 1800 737 732.',
    },
  ],
  Legal: [
    {
      question: 'Are CoRaise records admissible in Australian courts?',
      answer:
        'CoRaise records are designed to meet the requirements of the Evidence Act 1995 (Cth) for electronic records. Every message and record is cryptographically hashed using SHA-256 at the time of creation, creating a verifiable chain of integrity. Court-ready PDF exports include these hashes for verification by legal professionals.',
    },
    {
      question: 'What is SHA-256 hashing and why does it matter?',
      answer:
        'SHA-256 is a cryptographic algorithm that creates a unique digital fingerprint of each message or record. If even a single character is changed, the hash will be completely different. This means anyone - including a court - can verify that a record has not been tampered with since it was created.',
    },
    {
      question: 'How does CoRaise comply with the Evidence Act?',
      answer:
        'CoRaise maintains an append-only database where records cannot be modified or deleted. Each record receives a SHA-256 hash generated by a database trigger at the time of creation. The system logs all access and actions in a comprehensive audit trail. These measures satisfy the reliability requirements for electronic evidence under the Evidence Act 1995.',
    },
    {
      question: 'Where is my data stored?',
      answer:
        'All CoRaise data is stored exclusively in Sydney, Australia (AWS ap-southeast-2 region). Your data never leaves Australia. This includes messages, files, photos, documents, and all personal information. We do not use any offshore servers, analytics services, or data processors that would transfer your data outside Australia.',
    },
    {
      question: 'How does CoRaise comply with the Privacy Act 1988?',
      answer:
        'CoRaise complies with the Privacy Act 1988 (Cth) and the Australian Privacy Principles (APPs). We collect only the minimum data necessary to provide the service, store all data in Australia, provide transparent privacy policies, and give you the right to access and export your data at any time. We never sell your personal information to third parties.',
    },
    {
      question: 'Can my lawyer access my CoRaise records?',
      answer:
        'Yes. You can generate court-ready PDF exports of your records and share them with your lawyer. Family law professionals can also register for a Professional account to access records directly through a read-only portal, with your explicit permission. This streamlines the process of preparing evidence for court.',
    },
  ],
  Professional: [
    {
      question: 'What features does the Professional portal offer?',
      answer:
        'The Professional portal provides a multi-family dashboard where practitioners can view records across multiple client families. Features include read-only access to messages, calendars, and expenses, the ability to generate court-ready exports, and tools for monitoring communication patterns. All access is logged for transparency.',
    },
    {
      question: 'How much does the Professional plan cost?',
      answer:
        'The Professional plan costs $29.99 per month. This includes access to the multi-family dashboard, unlimited court-ready exports, and the ability to manage multiple client families from a single account. Volume pricing is available for larger practices - contact us at professionals@coraise.com.au.',
    },
    {
      question: 'Can I manage multiple families from one account?',
      answer:
        'Yes. The Professional portal includes a multi-family dashboard designed for family lawyers, mediators, and social workers. You can view and manage records for all your client families from a single login, making it easy to stay across multiple cases.',
    },
    {
      question: 'Is Professional access read-only?',
      answer:
        'Yes. Professional accounts have read-only access to family records. Professionals cannot send messages, create events, or modify any data on behalf of families. This ensures the integrity of all records while still allowing professionals to review and export evidence.',
    },
    {
      question: 'How do I register as a professional?',
      answer:
        'Visit coraise.com.au/professionals and click "Register as a Professional". You will need to provide your professional credentials and practice details. Once verified, you can invite your client families to connect their CoRaise accounts with your professional dashboard.',
    },
  ],
} as const

const allQuestions = Object.values(faqCategories).flat()

export default function FaqPage() {
  return (
    <>
      <JsonLd data={faqSchema(allQuestions)} />
      <JsonLd
        data={breadcrumbSchema([
          { name: 'Home', href: '/' },
          { name: 'FAQ', href: '/faq' },
        ])}
      />

      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-3xl sm:text-4xl font-bold text-[var(--text-primary)] mb-4">
              Frequently asked questions
            </h1>
            <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
              Find answers to common questions about CoRaise. If you cannot find
              what you are looking for, get in touch with our support team.
            </p>
          </div>

          <FaqContent categories={faqCategories} />

          <div className="mt-16 text-center rounded-xl bg-[var(--bg-secondary)] border border-[var(--border-default)] p-8 sm:p-12">
            <h2 className="text-2xl font-semibold text-[var(--text-primary)] mb-3">
              Still have questions?
            </h2>
            <p className="text-[var(--text-secondary)] mb-6 max-w-md mx-auto">
              Our support team is here to help. Reach out and we will get back
              to you within one business day.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button href="/contact" variant="primary">
                Contact support
              </Button>
              <Button href={APP_URL} variant="secondary">
                Try CoRaise free
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
