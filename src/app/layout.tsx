import type { Metadata } from 'next'
import { Analytics } from '@vercel/analytics/next'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'
import { ThemeScript } from '@/components/theme/theme-script'
import { JsonLd } from '@/components/seo/json-ld'
import { organizationSchema } from '@/lib/structured-data'
import { SITE_URL, COMPANY } from '@/lib/constants'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${COMPANY.name} - ${COMPANY.tagline}`,
    template: `%s | ${COMPANY.name}`,
  },
  description: COMPANY.description,
  alternates: {
    canonical: SITE_URL,
    languages: { 'en-AU': SITE_URL },
  },
  openGraph: {
    type: 'website',
    locale: 'en_AU',
    url: SITE_URL,
    siteName: COMPANY.name,
    title: `${COMPANY.name} - ${COMPANY.tagline}`,
    description: COMPANY.description,
  },
  twitter: {
    card: 'summary_large_image',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en-AU" suppressHydrationWarning>
      <head>
        <ThemeScript />
      </head>
      <body className="antialiased min-h-screen flex flex-col">
        <JsonLd data={organizationSchema()} />
        <Header />
        <main className="flex-1 pt-16">{children}</main>
        <Footer />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
