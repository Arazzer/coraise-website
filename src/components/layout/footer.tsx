import Link from 'next/link'
import { FOOTER_LINKS, COMPANY, SAFETY_NUMBERS } from '@/lib/constants'

export function Footer() {
  return (
    <footer className="bg-[#1A2B3C] text-[#CBD5E0]">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Brand column */}
          <div className="sm:col-span-2 lg:col-span-1">
            <span className="text-xl font-bold text-white">CoRaise</span>
            <p className="mt-3 text-sm leading-relaxed text-[#A0AEC0]">
              {COMPANY.tagline}
            </p>
            <p className="mt-2 text-sm text-[#A0AEC0]">
              Built in Australia for Australian families.
            </p>
          </div>

          {/* Product */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Product
            </h3>
            <ul className="space-y-2.5">
              {FOOTER_LINKS.product.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Compare */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Compare
            </h3>
            <ul className="space-y-2.5">
              {FOOTER_LINKS.compare.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Resources
            </h3>
            <ul className="space-y-2.5">
              {FOOTER_LINKS.resources.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Company
            </h3>
            <ul className="space-y-2.5">
              {FOOTER_LINKS.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-[#2D3748]">
        <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#718096]">
          <p>&copy; {new Date().getFullYear()} {COMPANY.name}. A product of {COMPANY.legalName}.</p>
          <a
            href={`tel:${SAFETY_NUMBERS.respect.number.replace(/\s/g, '')}`}
            className="hover:text-white transition-colors"
          >
            {SAFETY_NUMBERS.respect.name}: {SAFETY_NUMBERS.respect.number}
          </a>
        </div>
      </div>
    </footer>
  )
}
