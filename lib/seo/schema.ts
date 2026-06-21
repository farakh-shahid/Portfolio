import { editorialProfile } from '@/data/editorial-portfolio'
import { seoDescription } from '@/lib/seo/metadata'
import { getSiteUrl } from '@/lib/seo/site-url'

const knowsAbout = [
  'React',
  'Next.js',
  'TypeScript',
  'NestJS',
  'Node.js',
  'AWS',
  'PostgreSQL',
  'Event-driven architecture',
  'System performance',
  'Full-stack engineering',
]

export function personSchema() {
  const siteUrl = getSiteUrl()

  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    '@id': `${siteUrl}/#person`,
    name: editorialProfile.name,
    givenName: 'Muhammad',
    familyName: 'Farrukh',
    alternateName: ['M. Farrukh', 'Muhammad Farrukh developer'],
    jobTitle: editorialProfile.title,
    description: seoDescription,
    email: editorialProfile.email,
    telephone: editorialProfile.phone,
    url: siteUrl,
    image: `${siteUrl}/api/og`,
    sameAs: [editorialProfile.github, editorialProfile.linkedin],
    knowsAbout,
    nationality: {
      '@type': 'Country',
      name: 'Pakistan',
    },
    workLocation: {
      '@type': 'Place',
      name: 'Remote',
    },
  }
}

export function websiteSchema() {
  const siteUrl = getSiteUrl()

  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${siteUrl}/#website`,
    name: `${editorialProfile.name} — Portfolio`,
    url: siteUrl,
    description: seoDescription,
    inLanguage: 'en',
    author: { '@id': `${siteUrl}/#person` },
  }
}

export function profilePageSchema() {
  const siteUrl = getSiteUrl()

  return {
    '@context': 'https://schema.org',
    '@type': 'ProfilePage',
    '@id': `${siteUrl}/#profile`,
    url: siteUrl,
    name: `${editorialProfile.name} — ${editorialProfile.title}`,
    description: seoDescription,
    mainEntity: { '@id': `${siteUrl}/#person` },
    isPartOf: { '@id': `${siteUrl}/#website` },
  }
}

export function structuredDataGraph() {
  return [personSchema(), websiteSchema(), profilePageSchema()]
}
