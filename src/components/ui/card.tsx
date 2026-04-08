import { cn } from '@/lib/utils'

interface CardProps {
  className?: string
  children: React.ReactNode
  highlight?: boolean
  elevated?: boolean
}

export function Card({ className, children, highlight, elevated }: CardProps) {
  return (
    <div
      className={cn(
        'rounded-xl p-6 transition-all duration-200',
        'bg-[var(--bg-primary)] border border-[var(--border-default)]',
        'shadow-[0_1px_3px_rgba(0,0,0,0.06),0_1px_2px_rgba(0,0,0,0.03)]',
        'hover:shadow-[0_8px_24px_rgba(0,0,0,0.06),0_4px_8px_rgba(0,0,0,0.03)]',
        'hover:-translate-y-0.5',
        highlight && [
          'border-primary-400 dark:border-[#2BC4C6]',
          'ring-1 ring-primary-500/20 dark:ring-[#2BC4C6]/20',
          'shadow-[0_4px_16px_rgba(61,138,131,0.1),0_1px_3px_rgba(0,0,0,0.06)]',
        ],
        elevated && [
          'shadow-[0_4px_16px_rgba(0,0,0,0.08),0_2px_6px_rgba(0,0,0,0.04)]',
          'hover:shadow-[0_12px_32px_rgba(0,0,0,0.08),0_4px_12px_rgba(0,0,0,0.04)]',
        ],
        className,
      )}
    >
      {children}
    </div>
  )
}
