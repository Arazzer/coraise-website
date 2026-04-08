import fs from 'fs'
import path from 'path'

const COMPARISONS_DIR = path.join(process.cwd(), 'src/content/comparisons')

export interface CompetitorData {
  slug: string
  name: string
  origin: string
  pricing: string
  annualFamily: string
  billingModel: string
  dataHosting: string
  freeTier: boolean
  auSchoolTerms: boolean
  auHolidays: boolean
  evidenceAct: boolean
  sha256: boolean
  emergencyExit: boolean
  harassmentDetection: boolean
  photoSharing: boolean
  documentVault: boolean
  ocrReceipts: boolean
  professionalPortal: boolean
  splitBilling: boolean
  trustpilot: string
  keyWeaknesses: string[]
  headline: string
  description: string
  whySwitchTitle: string
  whySwitchPoints: string[]
  faq: { question: string; answer: string }[]
}

export function getAllCompetitors(): CompetitorData[] {
  if (!fs.existsSync(COMPARISONS_DIR)) return []
  const files = fs.readdirSync(COMPARISONS_DIR).filter((f) => f.endsWith('.json'))
  return files.map((file) => {
    const raw = fs.readFileSync(path.join(COMPARISONS_DIR, file), 'utf-8')
    return JSON.parse(raw) as CompetitorData
  })
}

export function getCompetitorBySlug(slug: string): CompetitorData | null {
  const filePath = path.join(COMPARISONS_DIR, `${slug}.json`)
  if (!fs.existsSync(filePath)) return null
  const raw = fs.readFileSync(filePath, 'utf-8')
  return JSON.parse(raw) as CompetitorData
}

export function getAllCompetitorSlugs(): string[] {
  if (!fs.existsSync(COMPARISONS_DIR)) return []
  return fs
    .readdirSync(COMPARISONS_DIR)
    .filter((f) => f.endsWith('.json'))
    .map((f) => f.replace('.json', ''))
}

/** CoRaise feature values for comparison tables */
export const CORAISE_FEATURES = {
  dataHosting: 'Sydney, Australia',
  annualFamily: '$120 - $180',
  billingModel: 'Per-family (split billing)',
  freeTier: true,
  auSchoolTerms: true,
  auHolidays: true,
  evidenceAct: true,
  sha256: true,
  emergencyExit: true,
  harassmentDetection: true,
  photoSharing: true,
  documentVault: true,
  ocrReceipts: true,
  professionalPortal: true,
  splitBilling: true,
} as const
