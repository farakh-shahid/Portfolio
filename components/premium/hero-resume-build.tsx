'use client'

import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { gsap } from 'gsap'
import { useCallback, useRef, useState, useSyncExternalStore } from 'react'
import { createPortal } from 'react-dom'
import { editorialExperience, editorialProfile } from '@/data/editorial-portfolio'

const CHAR_MS = 11
const LINE_PAUSE_MS = 120

function buildScriptLines() {
  const roles = editorialExperience.slice(0, 4).map((item) => `  ✓ ${item.company} — ${item.role}`)
  return [
    '> preparing resume download…',
    `> name: ${editorialProfile.name}`,
    `> role: ${editorialProfile.title}`,
    '> loading experience…',
    ...roles,
    '> packaging skills & impact…',
    '> rendering PDF…',
    `> file: ${editorialProfile.resumeFilename}`,
    '> verified · ready to save',
    '> starting download…',
  ]
}

function wait(ms: number) {
  return new Promise<void>((resolve) => window.setTimeout(resolve, ms))
}

function triggerDownload() {
  const link = document.createElement('a')
  link.href = editorialProfile.resumeUrl
  link.download = editorialProfile.resumeFilename
  link.rel = 'noopener'
  document.body.appendChild(link)
  link.click()
  link.remove()
}

function useResumeBuildSound(enabled: boolean) {
  const ctxRef = useRef<AudioContext | null>(null)
  const lastTickRef = useRef(0)

  const getNoise = useCallback((ctx: AudioContext, durationMs: number) => {
    const length = Math.floor(ctx.sampleRate * (durationMs / 1000))
    const buffer = ctx.createBuffer(1, length, ctx.sampleRate)
    const data = buffer.getChannelData(0)
    for (let i = 0; i < length; i++) {
      data[i] = (Math.random() * 2 - 1) * Math.exp(-i / (length * 0.14))
    }
    return buffer
  }, [])

  const getContext = useCallback(() => {
    if (!enabled) return null
    try {
      if (!ctxRef.current) ctxRef.current = new AudioContext()
      const ctx = ctxRef.current
      if (ctx.state === 'suspended') void ctx.resume()
      return ctx
    } catch {
      return null
    }
  }, [enabled])

  const playKey = useCallback(
    (char: string) => {
      if (!enabled || char === ' ') return
      const now = performance.now()
      if (now - lastTickRef.current < 26) return
      lastTickRef.current = now

      const ctx = getContext()
      if (!ctx) return

      const t = ctx.currentTime
      const accent = char === '>' || char === '✓' || char === '·'

      const strike = ctx.createBufferSource()
      strike.buffer = getNoise(ctx, accent ? 34 : 26)

      const band = ctx.createBiquadFilter()
      band.type = 'bandpass'
      band.frequency.value = accent ? 920 + Math.random() * 280 : 1280 + Math.random() * 520
      band.Q.value = accent ? 1.35 : 1.05

      const strikeGain = ctx.createGain()
      strikeGain.gain.setValueAtTime(0.0001, t)
      strikeGain.gain.exponentialRampToValueAtTime(accent ? 0.034 : 0.026, t + 0.002)
      strikeGain.gain.exponentialRampToValueAtTime(0.0001, t + (accent ? 0.038 : 0.03))

      const thump = ctx.createOscillator()
      const thumpGain = ctx.createGain()
      thump.type = 'triangle'
      thump.frequency.setValueAtTime(accent ? 248 : 210 + Math.random() * 28, t)
      thumpGain.gain.setValueAtTime(0.0001, t)
      thumpGain.gain.exponentialRampToValueAtTime(accent ? 0.018 : 0.013, t + 0.003)
      thumpGain.gain.exponentialRampToValueAtTime(0.0001, t + 0.028)

      strike.connect(band)
      band.connect(strikeGain)
      strikeGain.connect(ctx.destination)
      thump.connect(thumpGain)
      thumpGain.connect(ctx.destination)

      strike.start(t)
      strike.stop(t + 0.05)
      thump.start(t)
      thump.stop(t + 0.05)

      if (accent) {
        const gold = ctx.createOscillator()
        const goldGain = ctx.createGain()
        gold.type = 'sine'
        gold.frequency.setValueAtTime(740 + Math.random() * 20, t)
        goldGain.gain.setValueAtTime(0.0001, t)
        goldGain.gain.exponentialRampToValueAtTime(0.006, t + 0.004)
        goldGain.gain.exponentialRampToValueAtTime(0.0001, t + 0.05)
        gold.connect(goldGain)
        goldGain.connect(ctx.destination)
        gold.start(t)
        gold.stop(t + 0.055)
      }
    },
    [enabled, getContext, getNoise],
  )

  const playReturn = useCallback(() => {
    if (!enabled) return
    const ctx = getContext()
    if (!ctx) return

    const t = ctx.currentTime
    const carriage = ctx.createBufferSource()
    carriage.buffer = getNoise(ctx, 48)

    const band = ctx.createBiquadFilter()
    band.type = 'bandpass'
    band.frequency.setValueAtTime(680, t)
    band.frequency.exponentialRampToValueAtTime(420, t + 0.06)
    band.Q.value = 0.85

    const gain = ctx.createGain()
    gain.gain.setValueAtTime(0.0001, t)
    gain.gain.exponentialRampToValueAtTime(0.022, t + 0.004)
    gain.gain.exponentialRampToValueAtTime(0.0001, t + 0.07)

    carriage.connect(band)
    band.connect(gain)
    gain.connect(ctx.destination)
    carriage.start(t)
    carriage.stop(t + 0.08)
  }, [enabled, getContext, getNoise])

  const playComplete = useCallback(() => {
    const ctx = getContext()
    if (!ctx) return

    const t = ctx.currentTime
    const bell = ctx.createOscillator()
    const bellGain = ctx.createGain()
    const bellFilter = ctx.createBiquadFilter()

    bell.type = 'sine'
    bell.frequency.setValueAtTime(988, t)
    bellFilter.type = 'lowpass'
    bellFilter.frequency.value = 2600

    bellGain.gain.setValueAtTime(0.0001, t)
    bellGain.gain.exponentialRampToValueAtTime(0.016, t + 0.008)
    bellGain.gain.exponentialRampToValueAtTime(0.0001, t + 0.32)

    bell.connect(bellFilter)
    bellFilter.connect(bellGain)
    bellGain.connect(ctx.destination)
    bell.start(t)
    bell.stop(t + 0.34)
  }, [getContext])

  return { playKey, playReturn, playComplete }
}

export function HeroResumeBuild() {
  const reduceMotion = useReducedMotion()
  const [building, setBuilding] = useState(false)
  const [lines, setLines] = useState<string[]>([])
  const [progress, setProgress] = useState(0)
  const mounted = useSyncExternalStore(
    () => () => {},
    () => true,
    () => false,
  )
  const { playKey, playReturn, playComplete } = useResumeBuildSound(!reduceMotion)
  const docsRef = useRef<HTMLDivElement>(null)
  const runningRef = useRef(false)

  const runParallax = useCallback(() => {
    const docs = docsRef.current
    if (!docs || reduceMotion) return undefined

    const sheets = docs.querySelectorAll('[data-resume-sheet]')
    gsap.fromTo(
      sheets,
      { y: 80, x: (i) => (i - 1) * 40, rotate: (i) => (i - 1) * 6, opacity: 0 },
      {
        y: 0,
        x: (i) => (i - 1) * 18,
        rotate: (i) => (i - 1) * 3,
        opacity: 1,
        duration: 0.72,
        stagger: 0.09,
        ease: 'power3.out',
      },
    )

    const onMove = (event: MouseEvent) => {
      const nx = (event.clientX / window.innerWidth - 0.5) * 2
      const ny = (event.clientY / window.innerHeight - 0.5) * 2
      sheets.forEach((sheet, i) => {
        gsap.to(sheet, {
          x: (i - 1) * 18 + nx * (12 + i * 4),
          y: ny * (10 + i * 3),
          rotate: (i - 1) * 3 + nx * 2,
          duration: 0.6,
          ease: 'power2.out',
        })
      })
    }

    window.addEventListener('mousemove', onMove)
    return () => window.removeEventListener('mousemove', onMove)
  }, [reduceMotion])

  const startBuild = useCallback(async () => {
    if (runningRef.current) return
    runningRef.current = true

    if (reduceMotion) {
      triggerDownload()
      window.open(editorialProfile.resumeUrl, '_blank', 'noopener,noreferrer')
      runningRef.current = false
      return
    }

    setBuilding(true)
    setLines([])
    setProgress(0)
    document.body.style.overflow = 'hidden'
    await wait(50)

    const cleanupParallax = runParallax()
    const script = buildScriptLines()
    const collected: string[] = []
    let typed = 0
    const totalChars = script.reduce((sum, line) => sum + line.length + 1, 0)

    for (const line of script) {
      let current = ''
      for (const char of line) {
        current += char
        typed += 1
        playKey(char)
        setProgress(Math.min((typed / totalChars) * 100, 100))
        setLines([...collected, current])
        await wait(CHAR_MS)
      }
      collected.push(line)
      setLines([...collected])
      playReturn()
      await wait(LINE_PAUSE_MS)
    }

    setProgress(100)
    playComplete()
    await wait(260)
    triggerDownload()
    window.open(editorialProfile.resumeUrl, '_blank', 'noopener,noreferrer')
    await wait(480)
    cleanupParallax?.()
    document.body.style.overflow = ''
    setBuilding(false)
    setLines([])
    setProgress(0)
    runningRef.current = false
  }, [playComplete, playKey, playReturn, reduceMotion, runParallax])

  const overlay = building ? (
    <motion.div
      className="editorial-resume-overlay"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.28 }}
      aria-live="polite"
      aria-label="Downloading resume"
    >
      <div className="editorial-resume-overlay-bg" aria-hidden />

      <div ref={docsRef} className="editorial-resume-docs" aria-hidden>
        {[0, 1, 2].map((i) => (
          <div key={i} data-resume-sheet className="editorial-resume-sheet">
            <div className="editorial-resume-sheet-head" />
            <div className="editorial-resume-sheet-line editorial-resume-sheet-line--lg" />
            <div className="editorial-resume-sheet-line" />
            <div className="editorial-resume-sheet-line" />
            <div className="editorial-resume-sheet-line editorial-resume-sheet-line--sm" />
          </div>
        ))}
      </div>

      <motion.div
        className="editorial-resume-terminal"
        initial={{ y: 40, opacity: 0, scale: 0.96 }}
        animate={{ y: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 0.38, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="editorial-resume-terminal-bar">
          <span />
          <span />
          <span />
          <p>resume.download</p>
        </div>
        <div className="editorial-resume-terminal-body">
          {lines.map((line, index) => (
            <p key={`${index}-${line}`} className="editorial-resume-line">
              {line}
              {index === lines.length - 1 ? <span className="editorial-resume-cursor" aria-hidden /> : null}
            </p>
          ))}
        </div>
        <div className="editorial-resume-progress" aria-hidden>
          <span style={{ transform: `scaleX(${progress / 100})` }} />
        </div>
      </motion.div>
    </motion.div>
  ) : null

  return (
    <>
      <motion.button
        type="button"
        className="editorial-resume-btn editorial-resume-btn--nav"
        onClick={startBuild}
        disabled={building}
        whileHover={reduceMotion ? undefined : { scale: 1.02 }}
        whileTap={reduceMotion ? undefined : { scale: 0.98 }}
        aria-label="Download resume PDF"
      >
        <span className="editorial-resume-btn-icon" aria-hidden>
          ◈
        </span>
        <span className="editorial-resume-btn-text editorial-resume-btn-text--full">
          {building ? 'Downloading…' : 'Download Resume'}
        </span>
        <span className="editorial-resume-btn-text editorial-resume-btn-text--short">
          {building ? '…' : 'Resume'}
        </span>
      </motion.button>

      {mounted ? createPortal(<AnimatePresence>{overlay}</AnimatePresence>, document.body) : null}
    </>
  )
}
