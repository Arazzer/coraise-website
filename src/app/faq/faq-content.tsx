'use client'

import { useState } from 'react'
import { Accordion } from '@/components/ui/accordion'
import { cn } from '@/lib/utils'

interface FaqCategory {
  question: string
  answer: string
}

interface FaqContentProps {
  categories: Record<string, readonly FaqCategory[]>
}

const CATEGORY_ORDER = [
  'General',
  'Pricing',
  'Features',
  'Safety',
  'Legal',
  'Professional',
] as const

export function FaqContent({ categories }: FaqContentProps) {
  const [activeCategory, setActiveCategory] = useState<string>('General')

  const items = categories[activeCategory] ?? []

  return (
    <div>
      <div
        className="flex flex-wrap gap-2 mb-8 justify-center"
        role="tablist"
        aria-label="FAQ categories"
      >
        {CATEGORY_ORDER.map((category) => (
          <button
            key={category}
            role="tab"
            aria-selected={activeCategory === category}
            aria-controls={`faq-panel-${category}`}
            onClick={() => setActiveCategory(category)}
            className={cn(
              'px-4 py-2 rounded-lg text-sm font-medium transition-colors min-h-[48px]',
              'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-500',
              activeCategory === category
                ? 'bg-primary-500 text-white dark:bg-[#2BC4C6] dark:text-[#0F1419]'
                : 'bg-[var(--bg-tertiary)] text-[var(--text-secondary)] hover:bg-[var(--border-default)] hover:text-[var(--text-primary)]',
            )}
          >
            {category}
          </button>
        ))}
      </div>

      <div
        id={`faq-panel-${activeCategory}`}
        role="tabpanel"
        aria-label={`${activeCategory} questions`}
      >
        <Accordion items={[...items]} />
      </div>
    </div>
  )
}
