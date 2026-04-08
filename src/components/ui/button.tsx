import { cn } from '@/lib/utils'
import Link from 'next/link'
import type { ComponentPropsWithoutRef } from 'react'

type ButtonVariant = 'primary' | 'secondary' | 'ghost'
type ButtonSize = 'sm' | 'md' | 'lg'

interface ButtonProps {
  variant?: ButtonVariant
  size?: ButtonSize
  href?: string
  className?: string
  children: React.ReactNode
}

const variants: Record<ButtonVariant, string> = {
  primary:
    'bg-primary-500 text-white hover:bg-primary-600 dark:bg-[#2BC4C6] dark:text-[#0F1419] dark:hover:bg-[#24A8AA]',
  secondary:
    'bg-transparent border-2 border-primary-500 text-primary-500 hover:bg-primary-50 dark:border-[#2BC4C6] dark:text-[#2BC4C6] dark:hover:bg-[#0F2C2C]',
  ghost:
    'bg-transparent text-primary-500 hover:bg-primary-50 dark:text-[#2BC4C6] dark:hover:bg-[#0F2C2C]',
}

const sizes: Record<ButtonSize, string> = {
  sm: 'px-4 py-2 text-sm min-h-[40px]',
  md: 'px-5 py-2.5 text-sm min-h-[48px]',
  lg: 'px-6 py-3 text-base min-h-[48px]',
}

export function Button({
  variant = 'primary',
  size = 'md',
  href,
  className,
  children,
  ...props
}: ButtonProps & Omit<ComponentPropsWithoutRef<'button'>, keyof ButtonProps>) {
  const classes = cn(
    'inline-flex items-center justify-center rounded-lg font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-500',
    variants[variant],
    sizes[size],
    className,
  )

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    )
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  )
}
