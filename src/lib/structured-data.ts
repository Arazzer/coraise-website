import { SITE_URL, COMPANY } from './constants'

export function organizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: COMPANY.name,
    url: SITE_URL,
    logo: `${SITE_URL}/images/logo-full.png`,
    description: COMPANY.description,
    address: {
      '@type': 'PostalAddress',
      addressCountry: COMPANY.country,
      addressRegion: COMPANY.region,
    },
    areaServed: {
      '@type': 'Country',
      name: 'Australia',
    },
  }
}

export function websiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: COMPANY.name,
    url: SITE_URL,
    description: COMPANY.description,
    inLanguage: 'en-AU',
    publisher: {
      '@type': 'Organization',
      name: COMPANY.name,
    },
  }
}

export function softwareApplicationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: COMPANY.name,
    applicationCategory: 'LifestyleApplication',
    operatingSystem: 'Web, iOS, Android',
    description: COMPANY.description,
    offers: {
      '@type': 'AggregateOffer',
      priceCurrency: 'AUD',
      lowPrice: '0',
      highPrice: '14.99',
      offerCount: '3',
    },
    featureList: [
      'Secure tamper-proof messaging',
      'Shared calendar with Australian school terms',
      'Expense tracking with receipt OCR',
      'Court-ready PDF exports with SHA-256 integrity verification',
      'DV safety features including emergency exit',
    ],
    availableOnDevice: ['Desktop', 'Mobile'],
    countriesSupported: 'AU',
  }
}

export function faqSchema(items: { question: string; answer: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  }
}

export function articleSchema({
  title,
  description,
  url,
  image,
  datePublished,
  dateModified,
}: {
  title: string
  description: string
  url: string
  image: string
  datePublished: string
  dateModified?: string
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description,
    url,
    image,
    datePublished,
    dateModified: dateModified || datePublished,
    author: { '@type': 'Organization', name: COMPANY.name },
    publisher: {
      '@type': 'Organization',
      name: COMPANY.name,
      logo: { '@type': 'ImageObject', url: `${SITE_URL}/images/logo-full.png` },
    },
    inLanguage: 'en-AU',
    isAccessibleForFree: true,
  }
}

export function breadcrumbSchema(items: { name: string; href: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `${SITE_URL}${item.href}`,
    })),
  }
}
