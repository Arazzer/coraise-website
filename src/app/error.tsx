'use client'

import { Button } from '@/components/ui/button'
import { AlertTriangle } from 'lucide-react'

export default function Error({
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto max-w-lg px-4 sm:px-6 lg:px-8 text-center">
        <div className="flex justify-center mb-6">
          <div className="flex h-14 w-14 items-center justify-center rounded-full bg-warning-light">
            <AlertTriangle className="h-7 w-7 text-warning" />
          </div>
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold text-[var(--text-primary)] mb-4">
          Something went wrong
        </h1>
        <p className="text-lg text-[var(--text-secondary)] mb-8">
          We are sorry, something unexpected happened. Please try again.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Button variant="primary" size="lg" onClick={reset}>
            Try again
          </Button>
          <Button href="/" variant="secondary" size="lg">
            Go home
          </Button>
        </div>
      </div>
    </section>
  )
}
