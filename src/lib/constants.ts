export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://coraise.com.au'
export const APP_URL = process.env.NEXT_PUBLIC_APP_URL || 'https://app.coraise.com.au'

export const COMPANY = {
  name: 'CoRaise',
  legalName: 'MyDigital Group',
  tagline: 'Co-parenting made simpler.',
  description:
    'Australian co-parenting communication platform with tamper-proof messaging, shared calendars, expense tracking, and court-ready records for separated families.',
  email: 'support@coraise.com.au',
  professionalEmail: 'professionals@coraise.com.au',
  country: 'AU',
  region: 'NSW',
} as const

export const PRICING = {
  free: { name: 'Free', price: 0, period: 'forever' },
  family: { name: 'Family', price: 9.99, period: 'month', splitPrice: 4.99 },
  premium: { name: 'Premium', price: 14.99, period: 'month', splitPrice: 7.49 },
  professional: { name: 'Professional', price: 29.99, period: 'month' },
} as const

export const SAFETY_NUMBERS = {
  emergency: { name: '000', description: 'Emergency Services' },
  respect: { name: '1800RESPECT', number: '1800 737 732', description: '24/7 DV support' },
  lifeline: { name: 'Lifeline', number: '13 11 14', description: 'Crisis support' },
} as const

export const NAV_LINKS = [
  { label: 'Features', href: '/features' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'For Professionals', href: '/professionals' },
  { label: 'Safety', href: '/safety' },
  { label: 'Compare', href: '/compare' },
  { label: 'Blog', href: '/blog' },
] as const

export const FOOTER_LINKS = {
  product: [
    { label: 'Features', href: '/features' },
    { label: 'Pricing', href: '/pricing' },
    { label: 'Court Readiness', href: '/court-readiness' },
    { label: 'Safety', href: '/safety' },
    { label: 'For Professionals', href: '/professionals' },
  ],
  compare: [
    { label: 'vs OurFamilyWizard', href: '/compare/ourfamilywizard' },
    { label: 'vs TalkingParents', href: '/compare/talkingparents' },
    { label: 'vs AppClose', href: '/compare/appclose' },
    { label: 'vs 2Houses', href: '/compare/2houses' },
    { label: 'All Comparisons', href: '/compare' },
  ],
  resources: [
    { label: 'Blog', href: '/blog' },
    { label: 'FAQ', href: '/faq' },
    { label: 'Contact', href: '/contact' },
  ],
  company: [
    { label: 'About', href: '/about' },
    { label: 'Privacy Policy', href: '/privacy' },
    { label: 'Terms of Service', href: '/terms' },
  ],
} as const
