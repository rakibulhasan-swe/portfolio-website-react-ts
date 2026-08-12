export type IconName =
  | 'code'
  | 'terminal'
  | 'sparkles'
  | 'layers'
  | 'briefcase'
  | 'github'
  | 'linkedin'
  | 'database'
  | 'arrow-right'

export interface IdentityChipData {
  id: string
  icon: IconName
  title: string
  subtitle: string
}

export interface FocusItemData {
  id: string
  icon: IconName
  title: string
  description: string
}

export interface ExperienceItemData {
  id: string
  role: string
  company: string
  employmentType: string
  period: string
  location: string
  bullets: string[]
  skillsHighlight: string
  skillsRest: string
  logoInitial: string
  logoBg: string
  logoColor: string
}

export interface SkillCategoryData {
  id: string
  title: string
  items: string[]
}

export interface ProjectCaseField {
  label: string
  value: string
}

export interface ProjectData {
  id: string
  category: string
  name: string
  tagline: string
  fields: ProjectCaseField[]
  stack: string[]
  codeUrl?: string
  demoUrl?: string
  isPlaceholder: boolean
}

export interface FoundationItemData {
  id: string
  title: string
  description: string
}

export interface AiNodeData {
  id: string
  label: string
  status: 'active' | 'future'
}

export interface SocialLinkData {
  id: string
  label: string
  url: string
  icon: IconName
}

export interface NavLinkData {
  id: string
  label: string
  href: string
}

/** Response shape (subset) from the public Codeforces API: user.info */
export interface CodeforcesUserInfo {
  handle: string
  rating?: number
  maxRating?: number
  rank?: string
  maxRank?: string
}

/** Response shape (subset) from the public Codeforces API: user.status */
export interface CodeforcesSubmission {
  problem: {
    contestId?: number
    index: string
    name: string
  }
  verdict?: string
}

export interface CodeforcesStats {
  rating: number | null
  maxRating: number | null
  rank: string | null
  solvedCount: number | null
}

export type FetchStatus = 'idle' | 'loading' | 'success' | 'error'
