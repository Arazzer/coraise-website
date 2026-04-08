'use client'

import { useActionState } from 'react'
import { submitContactForm } from '@/lib/contact'
import { Button } from '@/components/ui/button'
import { CheckCircle, AlertCircle } from 'lucide-react'

const subjects = [
  'General',
  'Pricing',
  'Professional enquiry',
  'Support',
  'Partnership',
  'Media',
] as const

export function ContactForm() {
  const [state, formAction, isPending] = useActionState(
    async (_prevState: { success?: boolean; error?: string } | null, formData: FormData) => {
      return await submitContactForm(formData)
    },
    null,
  )

  if (state?.success) {
    return (
      <div className="rounded-xl border border-[var(--border-default)] bg-[var(--bg-secondary)] p-8 text-center">
        <div className="flex justify-center mb-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-success-light">
            <CheckCircle className="h-6 w-6 text-success" />
          </div>
        </div>
        <h3 className="text-xl font-semibold text-[var(--text-primary)] mb-2">
          Message sent
        </h3>
        <p className="text-[var(--text-secondary)]">
          Thank you for getting in touch. We will get back to you within one
          business day.
        </p>
      </div>
    )
  }

  return (
    <form action={formAction} className="space-y-5">
      {state?.error && (
        <div className="flex items-start gap-3 rounded-lg border border-error/20 bg-error-light p-4">
          <AlertCircle className="h-5 w-5 text-error shrink-0 mt-0.5" />
          <p className="text-sm text-error">{state.error}</p>
        </div>
      )}

      <div>
        <label
          htmlFor="contact-name"
          className="block text-sm font-medium text-[var(--text-primary)] mb-1.5"
        >
          Name
        </label>
        <input
          id="contact-name"
          name="name"
          type="text"
          required
          autoComplete="name"
          className="w-full min-h-[48px] rounded-lg border border-[var(--border-default)] bg-[var(--bg-primary)] px-4 py-3 text-base text-[var(--text-primary)] placeholder:text-[var(--text-tertiary)] transition-colors focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/20"
          placeholder="Your full name"
        />
      </div>

      <div>
        <label
          htmlFor="contact-email"
          className="block text-sm font-medium text-[var(--text-primary)] mb-1.5"
        >
          Email
        </label>
        <input
          id="contact-email"
          name="email"
          type="email"
          required
          autoComplete="email"
          className="w-full min-h-[48px] rounded-lg border border-[var(--border-default)] bg-[var(--bg-primary)] px-4 py-3 text-base text-[var(--text-primary)] placeholder:text-[var(--text-tertiary)] transition-colors focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/20"
          placeholder="you@example.com"
        />
      </div>

      <div>
        <label
          htmlFor="contact-subject"
          className="block text-sm font-medium text-[var(--text-primary)] mb-1.5"
        >
          Subject
        </label>
        <select
          id="contact-subject"
          name="subject"
          required
          className="w-full min-h-[48px] rounded-lg border border-[var(--border-default)] bg-[var(--bg-primary)] px-4 py-3 text-base text-[var(--text-primary)] transition-colors focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/20 appearance-none bg-[url('data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22%235a6b7c%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3Cpolyline%20points%3D%226%209%2012%2015%2018%209%22%3E%3C%2Fpolyline%3E%3C%2Fsvg%3E')] bg-[length:20px] bg-[right_12px_center] bg-no-repeat"
        >
          <option value="">Select a subject</option>
          {subjects.map((subject) => (
            <option key={subject} value={subject}>
              {subject}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label
          htmlFor="contact-message"
          className="block text-sm font-medium text-[var(--text-primary)] mb-1.5"
        >
          Message
        </label>
        <textarea
          id="contact-message"
          name="message"
          required
          rows={4}
          className="w-full min-h-[120px] rounded-lg border border-[var(--border-default)] bg-[var(--bg-primary)] px-4 py-3 text-base text-[var(--text-primary)] placeholder:text-[var(--text-tertiary)] transition-colors focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/20 resize-y"
          placeholder="How can we help?"
        />
      </div>

      <Button type="submit" variant="primary" size="lg" className="w-full" disabled={isPending}>
        {isPending ? 'Sending...' : 'Send message'}
      </Button>
    </form>
  )
}
