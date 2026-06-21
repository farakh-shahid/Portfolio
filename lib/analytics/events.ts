export function trackEvent(event: string, payload?: Record<string, string | number>) {
  if (process.env.NODE_ENV === 'development') {
    console.log('[analytics]', event, payload ?? {})
  }
}
