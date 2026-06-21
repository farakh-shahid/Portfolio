const FALLBACK_SITE_URL = 'https://muhammadfarrukh.dev'

export function getSiteUrl() {
  const url = process.env.NEXT_PUBLIC_SITE_URL ?? process.env.VERCEL_URL

  if (!url) return FALLBACK_SITE_URL
  if (url.startsWith('http')) return url.replace(/\/$/, '')
  return `https://${url.replace(/\/$/, '')}`
}
