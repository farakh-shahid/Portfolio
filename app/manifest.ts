import type { MetadataRoute } from 'next'
import { editorialProfile } from '@/data/editorial-portfolio'
import { seoDescription } from '@/lib/seo/metadata'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${editorialProfile.name} — ${editorialProfile.title}`,
    short_name: editorialProfile.brand,
    description: seoDescription,
    start_url: '/',
    display: 'standalone',
    background_color: '#0C0B09',
    theme_color: '#C9A227',
    lang: 'en',
    icons: [
      {
        src: '/icon',
        sizes: '32x32',
        type: 'image/png',
      },
      {
        src: '/apple-icon',
        sizes: '180x180',
        type: 'image/png',
        purpose: 'any',
      },
    ],
  }
}
