'use client'

import Lenis from 'lenis'
import { useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export function useEditorialMotion(enabled: boolean) {
  useEffect(() => {
    if (!enabled) return

    const lenis = new Lenis({
      duration: 1.1,
      easing: (t) => Math.min(1, 1.001 - 2 ** (-10 * t)),
      smoothWheel: true,
    })

    lenis.on('scroll', ScrollTrigger.update)

    const onScrollTop = () => {
      lenis.scrollTo(0, { duration: 1.1 })
    }
    window.addEventListener('editorial:scroll-top', onScrollTop)

    const tick = (time: number) => {
      lenis.raf(time * 1000)
    }
    gsap.ticker.add(tick)
    gsap.ticker.lagSmoothing(0)

    const nav = document.getElementById('editorial-nav')
    if (nav) {
      ScrollTrigger.create({
        start: 'top -80',
        onUpdate: (self) => nav.classList.toggle('solid', self.scroll() > 80),
      })
    }

    // gold progress bar above nav
    const scrollFill = document.getElementById('editorial-scroll-progress')
    ScrollTrigger.create({
      trigger: document.documentElement,
      start: 'top top',
      end: 'bottom bottom',
      onUpdate: (self) => {
        if (scrollFill) scrollFill.style.transform = `scaleX(${self.progress})`
      },
    })

    // floating gold orbs — parallax drift on scroll
    const orbMain = document.getElementById('editorial-gold-orb-main')
    const orbSoft = document.getElementById('editorial-gold-orb-soft')

    if (orbMain) {
      gsap.to(orbMain, {
        y: () => window.innerHeight * 2.2,
        x: 80,
        rotate: 45,
        ease: 'none',
        scrollTrigger: {
          trigger: document.documentElement,
          start: 'top top',
          end: 'bottom bottom',
          scrub: 1.4,
        },
      })
    }

    if (orbSoft) {
      gsap.to(orbSoft, {
        y: () => window.innerHeight * 1.6,
        x: -60,
        scale: 1.2,
        ease: 'none',
        scrollTrigger: {
          trigger: document.documentElement,
          start: 'top top',
          end: 'bottom bottom',
          scrub: 2,
        },
      })
    }

    // experience section — vertical gold line fills on scroll
    const expSection = document.getElementById('exp')
    const expFill = document.getElementById('editorial-exp-fill')
    if (expSection && expFill) {
      ScrollTrigger.create({
        trigger: expSection,
        start: 'top 55%',
        end: 'bottom 45%',
        scrub: 0.8,
        onUpdate: (self) => {
          expFill.style.transform = `scaleY(${self.progress})`
        },
      })
    }

    gsap.from('[data-hero-line] > span', {
      yPercent: 110,
      duration: 1.15,
      ease: 'power4.out',
      stagger: 0.12,
      delay: 0.1,
    })

    gsap.from('[data-hero-fade]', {
      y: 26,
      opacity: 0,
      duration: 1,
      ease: 'power3.out',
      stagger: 0.15,
      delay: 0.55,
    })

    const hero = document.querySelector('[data-hero-section]')
    if (hero) {
      gsap.to('[data-hero-parallax]', {
        y: -120,
        ease: 'none',
        scrollTrigger: {
          trigger: hero,
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
      })
    }

    const track = document.getElementById('editorial-marq')
    let mx = 0
    let marqueeTick: ((time: number) => void) | null = null

    if (track) {
      marqueeTick = () => {
        mx -= 0.4
        if (Math.abs(mx) > track.scrollWidth / 2) mx = 0
        track.style.transform = `translateX(${mx}px)`
      }
      gsap.ticker.add(marqueeTick)
    }

    gsap.utils.toArray<HTMLElement>('[data-reveal]').forEach((el) => {
      gsap.from(el, {
        y: 40,
        opacity: 0,
        duration: 0.95,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: el,
          start: 'top 87%',
        },
      })
    })

    gsap.utils.toArray<HTMLElement>('[data-parallax-section]').forEach((section) => {
      gsap.fromTo(
        section,
        { y: 40 },
        {
          y: -40,
          ease: 'none',
          scrollTrigger: {
            trigger: section,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 1.5,
          },
        },
      )
    })

    gsap.utils.toArray<HTMLElement>('[data-stat-to]').forEach((stat) => {
      const to = Number(stat.getAttribute('data-stat-to'))
      const valueEl = stat.querySelector('[data-stat-value]')
      if (!valueEl || Number.isNaN(to)) return

      ScrollTrigger.create({
        trigger: stat,
        start: 'top 90%',
        once: true,
        onEnter: () => {
          gsap.to(
            { v: 0 },
            {
              v: to,
              duration: 1.6,
              ease: 'power2.out',
              onUpdate() {
                valueEl.textContent = String(Math.round(this.targets()[0].v))
              },
            },
          )
        },
      })
    })

    return () => {
      window.removeEventListener('editorial:scroll-top', onScrollTop)
      gsap.ticker.remove(tick)
      if (marqueeTick) gsap.ticker.remove(marqueeTick)
      lenis.destroy()
      ScrollTrigger.getAll().forEach((t) => t.kill())
    }
  }, [enabled])
}
