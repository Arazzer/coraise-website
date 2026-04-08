import { Button } from '@/components/ui/button'

export default function NotFound() {
  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto max-w-lg px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-sm font-medium text-primary-500 dark:text-[#2BC4C6] mb-4">
          404
        </p>
        <h1 className="text-3xl sm:text-4xl font-bold text-[var(--text-primary)] mb-4">
          Page not found
        </h1>
        <p className="text-lg text-[var(--text-secondary)] mb-8">
          The page you are looking for does not exist or has been moved.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Button href="/" variant="primary" size="lg">
            Go home
          </Button>
          <Button href="/contact" variant="secondary" size="lg">
            Contact us
          </Button>
        </div>
      </div>
    </section>
  )
}
