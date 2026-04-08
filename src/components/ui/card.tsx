import { cn } from '@/lib/utils'

interface CardProps {
  className?: string
  children: React.ReactNode
  highlight?: boolean
}

export function Card({ className, children, highlight }: CardProps) {
  return (
    <div
      className={cn(
        'rounded-xl p-6 transition-shadow duration-200',
        'bg-[var(--bg-primary)] border border-[var(--border-default)]',
        'shadow-[0_1px_3px_rgba(0,0,0,0.08),0_1px_2px_rgba(0,0,0,0.04)]',
        'hover:shadow-[0_4px_6px_rgba(0,0,0,0.07),0_2px_4px_rgba(0,0,0,0.04)]',
        highlight && 'border-primary-500 dark:border-[#2BC4C6] ring-1 ring-primary-500/20',
        className,
      )}
    >
      {children}
    </div>
  )
}
