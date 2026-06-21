'use client'

import { useEffect } from 'react'

export function useClassicEffects(rootRef: React.RefObject<HTMLElement | null>) {
  useEffect(() => {
    const root = rootRef.current
    if (!root) return

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const fine = window.matchMedia('(hover: hover) and (pointer: fine)').matches

    const nav = root.querySelector<HTMLElement>('#nav')
    const progress = root.querySelector<HTMLElement>('#progress')
    const heroInner = root.querySelector<HTMLElement>('.hero-inner')
    const heroEl = root.querySelector<HTMLElement>('.hero')
    const heroName = root.querySelector<HTMLElement>('#heroName')

    const onScroll = () => {
      const doc = document.documentElement
      const max = doc.scrollHeight - doc.clientHeight
      if (progress) {
        progress.style.width = `${max > 0 ? (doc.scrollTop / max) * 100 : 0}%`
      }
      nav?.classList.toggle('scrolled', window.scrollY > 12)

      if (heroInner && heroEl && !reduced) {
        const progressRatio = Math.min(window.scrollY / (heroEl.offsetHeight || window.innerHeight), 1)
        heroInner.style.transform = `translateY(${window.scrollY * 0.18}px)`
        heroInner.style.opacity = String(Math.max(1 - progressRatio * 1.25, 0))
      }
    }

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })

    const anchorLinks = root.querySelectorAll<HTMLAnchorElement>('a[href^="#"]')
    const onAnchorClick = (event: Event) => {
      const anchor = event.currentTarget as HTMLAnchorElement
      const href = anchor.getAttribute('href')
      if (!href || href === '#') {
        event.preventDefault()
        return
      }
      const target = root.querySelector(href)
      if (!target) return
      event.preventDefault()
      target.scrollIntoView({ behavior: reduced ? 'auto' : 'smooth', block: 'start' })
      history.replaceState(null, '', href)
    }

    anchorLinks.forEach((link) => link.addEventListener('click', onAnchorClick))

    const heroRise = root.querySelectorAll<HTMLElement>('.hero .rise')
    const revealHero = () => {
      heroName?.classList.add('in')
      heroRise.forEach((el) => el.classList.add('in'))
    }

    if (document.readyState === 'complete') {
      revealHero()
    } else {
      window.addEventListener('load', revealHero)
    }

    const riseObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in')
            riseObserver.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' },
    )

    root.querySelectorAll<HTMLElement>('.rise').forEach((el) => {
      if (!el.closest('.hero')) riseObserver.observe(el)
    })

    const countObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return
          const el = entry.target as HTMLElement
          countObserver.unobserve(el)
          const to = Number(el.dataset.to)
          const pad = Number(el.dataset.pad || 0)
          if (reduced) {
            el.textContent = pad ? String(to).padStart(pad, '0') : String(to)
            return
          }
          const duration = 1300
          const start = performance.now()
          const tick = (time: number) => {
            const progressRatio = Math.min((time - start) / duration, 1)
            const value = Math.round((1 - Math.pow(1 - progressRatio, 3)) * to)
            el.textContent = pad ? String(value).padStart(pad, '0') : String(value)
            if (progressRatio < 1) requestAnimationFrame(tick)
          }
          requestAnimationFrame(tick)
        })
      },
      { threshold: 0.6 },
    )

    root.querySelectorAll<HTMLElement>('.count').forEach((counter) => countObserver.observe(counter))

    let frameId = 0
    let cursorX = window.innerWidth / 2
    let cursorY = window.innerHeight / 2
    let ringX = cursorX
    let ringY = cursorY
    const cur = root.querySelector<HTMLElement>('#cur')
    const dot = root.querySelector<HTMLElement>('#curDot')
    const cursorTargets = root.querySelectorAll('[data-cursor]')

    const onMouseMove = (event: MouseEvent) => {
      cursorX = event.clientX
      cursorY = event.clientY
      if (dot) {
        dot.style.transform = `translate(${cursorX}px,${cursorY}px) translate(-50%,-50%)`
      }
    }

    const cursorLoop = () => {
      ringX += (cursorX - ringX) * 0.18
      ringY += (cursorY - ringY) * 0.18
      if (cur) {
        cur.style.transform = `translate(${ringX}px,${ringY}px) translate(-50%,-50%)`
      }
      frameId = requestAnimationFrame(cursorLoop)
    }

    const onCursorEnter = () => cur?.classList.add('grow')
    const onCursorLeave = () => cur?.classList.remove('grow')

    if (fine) {
      root.classList.add('has-cursor')
      window.addEventListener('mousemove', onMouseMove)
      cursorLoop()
      cursorTargets.forEach((el) => {
        el.addEventListener('mouseenter', onCursorEnter)
        el.addEventListener('mouseleave', onCursorLeave)
      })
    }

    const magneticElements = root.querySelectorAll<HTMLElement>('[data-magnetic]')
    const onMagneticMove = (event: Event) => {
      const mouseEvent = event as MouseEvent
      const el = event.currentTarget as HTMLElement
      const rect = el.getBoundingClientRect()
      const mx = mouseEvent.clientX - (rect.left + rect.width / 2)
      const my = mouseEvent.clientY - (rect.top + rect.height / 2)
      el.style.transform = `translate(${mx * 0.25}px, ${my * 0.35}px)`
    }
    const onMagneticLeave = (event: Event) => {
      ;(event.currentTarget as HTMLElement).style.transform = ''
    }

    const tiltCards = root.querySelectorAll<HTMLElement>('.tilt')
    const onTiltMove = (event: Event) => {
      const mouseEvent = event as MouseEvent
      const card = event.currentTarget as HTMLElement
      const rect = card.getBoundingClientRect()
      const px = (mouseEvent.clientX - rect.left) / rect.width
      const py = (mouseEvent.clientY - rect.top) / rect.height
      card.style.transform = `rotateY(${(px - 0.5) * 9}deg) rotateX(${(0.5 - py) * 9}deg) translateY(-4px)`
      const glare = card.querySelector<HTMLElement>('.glare')
      if (glare) {
        glare.style.setProperty('--mx', `${px * 100}%`)
        glare.style.setProperty('--my', `${py * 100}%`)
      }
    }
    const onTiltLeave = (event: Event) => {
      ;(event.currentTarget as HTMLElement).style.transform = ''
    }

    if (fine && !reduced) {
      magneticElements.forEach((el) => {
        el.addEventListener('mousemove', onMagneticMove)
        el.addEventListener('mouseleave', onMagneticLeave)
      })
      tiltCards.forEach((card) => {
        card.addEventListener('mousemove', onTiltMove)
        card.addEventListener('mouseleave', onTiltLeave)
      })
    }

    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('load', revealHero)
      anchorLinks.forEach((link) => link.removeEventListener('click', onAnchorClick))
      riseObserver.disconnect()
      countObserver.disconnect()
      window.removeEventListener('mousemove', onMouseMove)
      cancelAnimationFrame(frameId)
      cursorTargets.forEach((el) => {
        el.removeEventListener('mouseenter', onCursorEnter)
        el.removeEventListener('mouseleave', onCursorLeave)
      })
      magneticElements.forEach((el) => {
        el.removeEventListener('mousemove', onMagneticMove)
        el.removeEventListener('mouseleave', onMagneticLeave)
      })
      tiltCards.forEach((card) => {
        card.removeEventListener('mousemove', onTiltMove)
        card.removeEventListener('mouseleave', onTiltLeave)
      })
    }
  }, [rootRef])
}
