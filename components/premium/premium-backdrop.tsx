'use client'

import { useEffect, useRef } from 'react'
import { useReducedMotion } from 'framer-motion'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export function PremiumBackdrop() {
  const layer1 = useRef<HTMLDivElement>(null)
  const layer2 = useRef<HTMLDivElement>(null)
  const layer3 = useRef<HTMLDivElement>(null)
  const reduceMotion = useReducedMotion()

  useEffect(() => {
    if (reduceMotion) return
    const layers = [layer1.current, layer2.current, layer3.current].filter(Boolean) as HTMLDivElement[]
    const triggers: ScrollTrigger[] = []

    layers.forEach((layer, i) => {
      triggers.push(
        ScrollTrigger.create({
          trigger: document.body,
          start: 'top top',
          end: 'bottom bottom',
          scrub: true,
          onUpdate: (self) => {
            const y = self.progress * (40 + i * 30)
            gsap.set(layer, { y: -y })
          },
        }),
      )
    })

    const onMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * (8 + layers.length)
      layers.forEach((layer, i) => {
        gsap.to(layer, { x: x * (i + 1) * 0.6, duration: 0.8, ease: 'power2.out' })
      })
    }

    window.addEventListener('mousemove', onMove, { passive: true })

    return () => {
      triggers.forEach((t) => t.kill())
      window.removeEventListener('mousemove', onMove)
    }
  }, [reduceMotion])

  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 overflow-hidden">
      <div ref={layer1} className="absolute -left-[20%] top-[8%] h-[55vh] w-[55vh] rounded-full bg-[radial-gradient(circle,var(--gold-soft),transparent_68%)] opacity-50" />
      <div ref={layer2} className="absolute -right-[15%] top-[35%] h-[45vh] w-[45vh] rounded-full bg-[radial-gradient(circle,rgba(236,235,230,0.04),transparent_70%)]" />
      <div ref={layer3} className="absolute bottom-[5%] left-[25%] h-[35vh] w-[70vw] rounded-full bg-[radial-gradient(ellipse,rgba(201,162,39,0.06),transparent_65%)]" />
      <div className="premium-grain absolute inset-0" />
    </div>
  )
}
