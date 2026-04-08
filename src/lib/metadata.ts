import type { Metadata } from 'next'
import { SITE_URL, COMPANY } from './constants'

interface MetadataInput {
  title: string
  description: string
  path: string
  image?: string
  type?: 'website' | 'article'
  publishedTime?: string
  modifiedTime?: string
}

export function createMetadata({
  title,
  description,
  path,
  image,
  type = 'website',
  publishedTime,
  modifiedTime,
}: MetadataInput): Metadata {
  const url = `${SITE_URL}${path}`
  const ogImage = image || `${SITE_URL}/images/og-default.jpg`
  const fullTitle = path === '/' ? `${COMPANY.name} - ${COMPANY.tagline}` : `${title} | ${COMPANY.name}`

  return {
    title: fullTitle,
    description,
    alternates: {
      canonical: url,
      languages: { 'en-AU': url },
    },
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: COMPANY.name,
      locale: 'en_AU',
      type,
      images: [{ url: ogImage, width: 1200, height: 630, alt: `${COMPANY.name} - ${title}` }],
      ...(publishedTime && { publishedTime }),
      ...(modifiedTime && { modifiedTime }),
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
      images: [ogImage],
    },
  }
}
