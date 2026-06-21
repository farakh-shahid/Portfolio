import type { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Senior Engineer Portfolio',
    short_name: 'Portfolio',
    description: 'Premium portfolio for a senior full stack engineer.',
    start_url: '/',
    display: 'standalone',
    background_color: '#0a0b10',
    theme_color: '#6d5ef8',
    icons: [
      {
        src: '/icons/icon-192.png',
        sizes: '192x192',
        type: 'image/png',
      },
    ],
  }
}
