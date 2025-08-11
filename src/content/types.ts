export type Service = {
  id: string
  title: string
  description: string
  icon?: string
}

export type Project = {
  id: string
  title: string
  slug: string
  summary: string
  description?: string
  tech: string[]
  image?: string
  links?: { live?: string; repo?: string }
  date?: string
  role?: string
}

export type TeamMember = {
  id: string
  name: string
  role: string
  experience?: string
  description?: string
  image?: string
  technologies?: string[]
  bio?: string
  photo?: string
  socials?: { linkedin?: string; github?: string; x?: string }
}

export type Testimonial = {
  id: string
  quote: string
  person: string
  roleCompany?: string
  avatarOrLogo?: string
}

export type SocialLink = {
  platform: 'github' | 'linkedin' | 'x' | string
  url: string
  icon?: string
}


