'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { cn } from '@/lib/utils'

interface AccordionItem {
  question: string
  answer: string
}

interface AccordionProps {
  items: AccordionItem[]
  className?: string
}

export function Accordion({ items, className }: AccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <div className={cn('divide-y divide-[var(--border-default)]', className)}>
      {items.map((item, index) => (
        <div key={index}>
          <button
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
            className="flex w-full items-center justify-between py-4 text-left min-h-[56px] group"
            aria-expanded={openIndex === index}
          >
            <span className="text-base font-medium text-[var(--text-primary)] pr-4">
              {item.question}
            </span>
            <ChevronDown
              className={cn(
                'h-5 w-5 shrink-0 text-[var(--text-tertiary)] transition-transform duration-250',
                openIndex === index && 'rotate-180',
              )}
            />
          </button>
          <div
            className={cn(
              'grid transition-all duration-250 ease-in-out',
              openIndex === index ? 'grid-rows-[1fr] pb-4' : 'grid-rows-[0fr]',
            )}
          >
            <div className="overflow-hidden">
              <p className="text-[var(--text-secondary)] leading-relaxed">{item.answer}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
