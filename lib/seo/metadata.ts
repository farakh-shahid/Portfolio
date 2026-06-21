import type { Metadata } from 'next'
import { editorialProfile } from '@/data/editorial-portfolio'
import { getSiteUrl } from '@/lib/seo/site-url'

export const seoTitle = `${editorialProfile.name} — ${editorialProfile.title}`

export const seoDescription =
  'Muhammad Farrukh is a Senior Full-Stack Engineer with 5+ years building event-driven AWS systems, NestJS backends, PostgreSQL performance tuning, and React/Next.js products. Available for remote senior roles · GMT+5.'

export const seoKeywords = [
  'Muhammad Farrukh',
  'Muhammad Farrukh developer',
  'Muhammad Farrukh full stack engineer',
  'Muhammad Farrukh portfolio',
  'Farrukh developer',
  'Senior Full Stack Engineer',
  'NestJS developer',
  'AWS developer',
  'React developer',
  'Next.js developer',
  'TypeScript engineer',
  'PostgreSQL performance engineer',
  'remote full stack developer',
  'full stack engineer Pakistan',
]

export const baseMetadata: Metadata = {
  metadataBase: new URL(getSiteUrl()),
  title: {
    default: seoTitle,
    template: `%s · ${editorialProfile.name}`,
  },
  description: seoDescription,
  applicationName: editorialProfile.name,
  authors: [{ name: editorialProfile.name, url: getSiteUrl() }],
  creator: editorialProfile.name,
  publisher: editorialProfile.name,
  keywords: seoKeywords,
  category: 'technology',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: '/',
    siteName: editorialProfile.name,
    title: seoTitle,
    description: seoDescription,
    images: [
      {
        url: '/api/og',
        width: 1200,
        height: 630,
        alt: seoTitle,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: seoTitle,
    description: seoDescription,
    images: ['/api/og'],
  },
  icons: {
    icon: [{ url: '/icon', type: 'image/png', sizes: '32x32' }],
    apple: [{ url: '/apple-icon', type: 'image/png', sizes: '180x180' }],
  },
  manifest: '/manifest.webmanifest',
}

export const homeMetadata: Metadata = {
  title: seoTitle,
  description: seoDescription,
  alternates: { canonical: '/' },
  openGraph: {
    title: seoTitle,
    description: seoDescription,
    url: '/',
  },
}
