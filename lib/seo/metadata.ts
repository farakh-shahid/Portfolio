import type { Metadata } from 'next'
import { editorialProfile } from '@/data/editorial-portfolio'

const description =
  'Muhammad Farrukh, Senior Full-Stack Engineer. Event-driven AWS systems, NestJS backends, high-performance React/Next.js.'

export const baseMetadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? 'https://example.com'),
  title: {
    default: `${editorialProfile.name} — Full-Stack Engineer`,
    template: `%s · ${editorialProfile.name}`,
  },
  description,
  openGraph: {
    title: `${editorialProfile.name} — Full-Stack Engineer`,
    description,
    type: 'website',
    url: '/',
    images: [{ url: '/api/og', width: 1200, height: 630, alt: `${editorialProfile.name} — Full-Stack Engineer` }],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${editorialProfile.name} — Full-Stack Engineer`,
    description,
    images: ['/api/og'],
  },
}
