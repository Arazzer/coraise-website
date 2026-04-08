'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X } from 'lucide-react'
import { NAV_LINKS, APP_URL } from '@/lib/constants'
import { cn } from '@/lib/utils'
import { ThemeToggle } from '@/components/theme/theme-toggle'

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileOpen])

  return (
    <>
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-200',
          scrolled
            ? 'bg-[var(--bg-primary)] border-b border-[var(--border-default)] shadow-sm'
            : 'bg-transparent',
        )}
      >
        <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <Link href="/" className="flex items-center min-h-[48px]">
              <Image
                src="/images/logo-text.png"
                alt="CoRaise"
                width={165}
                height={32}
                priority
                sizes="165px"
              />
            </Link>

            <nav className="hidden lg:flex items-center gap-6">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm font-medium text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            <div className="hidden lg:flex items-center gap-3">
              <ThemeToggle />
              <Link
                href={`${APP_URL}/register`}
                className="inline-flex items-center justify-center rounded-lg bg-primary-500 px-5 py-2.5 text-sm font-medium text-white hover:bg-primary-600 transition-colors min-h-[48px]"
              >
                Get Started Free
              </Link>
            </div>

            <button
              onClick={() => setMobileOpen(true)}
              className="lg:hidden p-2 min-w-[48px] min-h-[48px] flex items-center justify-center"
              aria-label="Open menu"
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu overlay */}
      {mobileOpen && (
        <div className="fixed inset-0 z-[60] bg-[var(--bg-primary)]">
          <div className="flex h-16 items-center justify-between px-4">
            <Link href="/" onClick={() => setMobileOpen(false)} className="flex items-center min-h-[48px]">
              <Image
                src="/images/logo-text.png"
                alt="CoRaise"
                width={165}
                height={32}
                sizes="165px"
              />
            </Link>
            <button
              onClick={() => setMobileOpen(false)}
              className="p-2 min-w-[48px] min-h-[48px] flex items-center justify-center"
              aria-label="Close menu"
            >
              <X className="h-6 w-6" />
            </button>
          </div>
          <nav className="px-4 pt-4">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="block py-3.5 text-lg font-medium text-[var(--text-primary)] border-b border-[var(--border-default)]"
              >
                {link.label}
              </Link>
            ))}
            <div className="mt-6 flex flex-col gap-3">
              <ThemeToggle />
              <Link
                href={`${APP_URL}/register`}
                className="inline-flex items-center justify-center rounded-lg bg-primary-500 px-5 py-3 text-base font-medium text-white hover:bg-primary-600 transition-colors min-h-[48px]"
              >
                Get Started Free
              </Link>
            </div>
          </nav>
        </div>
      )}
    </>
  )
}
