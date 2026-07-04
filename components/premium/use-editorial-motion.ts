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
      duration: 1.25,
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

    // experience progress line — handled in EditorialExperience

    const nameWords = gsap.utils.toArray<HTMLElement>('[data-hero-name-word]')
    const subWords = gsap.utils.toArray<HTMLElement>('[data-hero-sub-word]')
    const heroFade = gsap.utils.toArray<HTMLElement>('[data-hero-fade]')

    gsap.set(nameWords, { y: -180, opacity: 0, rotate: (i) => (i % 2 === 0 ? -7 : 6) })
    gsap.set(subWords, { x: 64, y: -32, opacity: 0 })
    gsap.set('[data-hero-kicker], [data-hero-tagline]', { y: 22, opacity: 0 })
    gsap.set(heroFade, { y: 26, opacity: 0 })

    const runHeroEntrance = () => {
      const tl = gsap.timeline({ defaults: { ease: 'power4.out' } })

      tl.to('[data-hero-kicker]', { y: 0, opacity: 1, duration: 0.75 }, 0)
        .to(
          nameWords,
          {
            y: 0,
            opacity: 1,
            rotate: 0,
            duration: 1.25,
            stagger: 0.2,
            ease: 'power4.out',
          },
          0.06,
        )
        .to('[data-hero-tagline]', { y: 0, opacity: 1, duration: 0.95 }, '-=0.55')
        .to(
          subWords,
          {
            x: 0,
            y: 0,
            opacity: 1,
            duration: 1.05,
            stagger: 0.042,
            ease: 'power3.out',
          },
          '-=0.42',
        )
        .to(heroFade, { y: 0, opacity: 1, duration: 0.95, stagger: 0.12 }, '-=0.5')
    }

    window.addEventListener('editorial:intro-complete', runHeroEntrance, { once: true })

    const hero = document.querySelector('[data-hero-section]')
    if (hero) {
      gsap.to('[data-hero-parallax]', {
        y: -90,
        scale: 0.93,
        opacity: 0.35,
        ease: 'none',
        scrollTrigger: {
          trigger: hero,
          start: 'top top',
          end: 'bottom top',
          scrub: 1.1,
        },
      })

      gsap.to(hero, {
        opacity: 0.55,
        ease: 'none',
        scrollTrigger: {
          trigger: hero,
          start: 'top top',
          end: 'bottom top',
          scrub: 1.5,
        },
      })
    }

    gsap.utils.toArray<HTMLElement>('[data-section-entry]').forEach((section) => {
      gsap.from(section, {
        y: 56,
        opacity: 0,
        duration: 1.1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: section,
          start: 'top 91%',
        },
      })
    })

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
        y: 32,
        opacity: 0,
        duration: 0.9,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: el,
          start: 'top 88%',
        },
      })
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
      window.removeEventListener('editorial:intro-complete', runHeroEntrance)
      gsap.ticker.remove(tick)
      if (marqueeTick) gsap.ticker.remove(marqueeTick)
      lenis.destroy()
      ScrollTrigger.getAll().forEach((t) => t.kill())
    }
  }, [enabled])
}
