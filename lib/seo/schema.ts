import { siteConfig } from '@/data/site-config'

export function personSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: siteConfig.name,
    jobTitle: siteConfig.role,
    description: siteConfig.description,
    email: siteConfig.email,
    sameAs: [siteConfig.links.github, siteConfig.links.linkedin],
  }
}
