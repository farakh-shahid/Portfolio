'use client'

import { useEffect } from 'react'

// Keeps the nav underline in sync with the section currently in view.
// The matching link gets `.is-active`, which the CSS animates in from the
// left; removing it retracts the underline to the right.
export function EditorialNavSpy() {
  useEffect(() => {
    const nav = document.getElementById('editorial-nav')
    if (!nav) return

    const links = Array.from(
      nav.querySelectorAll<HTMLAnchorElement>('.editorial-navlinks a[href^="#"]'),
    ).filter((a) => a.getAttribute('href') !== '#')

    const linkById = new Map<string, HTMLAnchorElement>()
    const sections: HTMLElement[] = []

    for (const link of links) {
      const id = link.getAttribute('href')?.slice(1)
      if (!id) continue
      const section = document.getElementById(id)
      if (!section) continue
      linkById.set(id, link)
      sections.push(section)
    }

    if (!sections.length) return

    const visible = new Map<string, number>()

    const setActive = (id: string | null) => {
      for (const [sid, link] of linkById) {
        link.classList.toggle('is-active', sid === id)
      }
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          const id = entry.target.id
          if (entry.isIntersecting) visible.set(id, entry.intersectionRatio)
          else visible.delete(id)
        }

        let bestId: string | null = null
        let bestRatio = 0
        for (const [id, ratio] of visible) {
          if (ratio > bestRatio) {
            bestRatio = ratio
            bestId = id
          }
        }
        setActive(bestId)
      },
      { threshold: [0, 0.15, 0.35, 0.6, 0.85], rootMargin: '-45% 0px -45% 0px' },
    )

    for (const section of sections) observer.observe(section)

    return () => observer.disconnect()
  }, [])

  return null
}
