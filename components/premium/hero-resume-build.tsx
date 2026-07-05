'use client'

import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { gsap } from 'gsap'
import { useCallback, useEffect, useRef, useState, useSyncExternalStore } from 'react'
import { createPortal } from 'react-dom'
import { BashLine, Terminal } from '@/components/ui/terminal'
import { editorialExperience, editorialProfile } from '@/data/editorial-portfolio'

const TYPING_MS = 42
const OUTPUT_MS = 28
const LINE_PAUSE_MS = 140
const OUTPUT_PAUSE_MS = 90

type ScriptStep =
  | { kind: 'command'; text: string }
  | { kind: 'output'; text: string }
  | { kind: 'pause' }

function buildScript(): ScriptStep[] {
  const roles = editorialExperience.slice(0, 4).map((item) => `  ✔ ${item.company} — ${item.role}`)
  return [
    { kind: 'command', text: `export NAME="${editorialProfile.name}"` },
    { kind: 'command', text: `export ROLE="${editorialProfile.title}"` },
    { kind: 'command', text: 'cat experience.log' },
    ...roles.map((line) => ({ kind: 'output' as const, text: line })),
    { kind: 'pause' },
    { kind: 'command', text: `curl -L -o ${editorialProfile.resumeFilename} ${editorialProfile.resumeUrl}` },
    { kind: 'output', text: '✔ 200 OK · application/pdf' },
    { kind: 'output', text: `✔ Verified · ${editorialProfile.resumeFilename}` },
    { kind: 'pause' },
    { kind: 'command', text: `open ${editorialProfile.resumeFilename}` },
    { kind: 'output', text: '✔ Download started — saving to ~/Downloads/' },
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

function useTerminalSound(enabled: boolean) {
  const ctxRef = useRef<AudioContext | null>(null)
  const lastTickRef = useRef(0)

  const getNoise = useCallback((ctx: AudioContext, durationMs: number) => {
    const length = Math.floor(ctx.sampleRate * (durationMs / 1000))
    const buffer = ctx.createBuffer(1, length, ctx.sampleRate)
    const data = buffer.getChannelData(0)
    for (let i = 0; i < length; i++) {
      data[i] = (Math.random() * 2 - 1) * Math.exp(-i / (length * 0.12))
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
      if (now - lastTickRef.current < 22) return
      lastTickRef.current = now

      const ctx = getContext()
      if (!ctx) return

      const t = ctx.currentTime
      const accent = char === '>' || char === '✔' || char === '✓' || char === '-'

      const click = ctx.createBufferSource()
      click.buffer = getNoise(ctx, accent ? 22 : 18)

      const band = ctx.createBiquadFilter()
      band.type = 'bandpass'
      band.frequency.value = accent ? 2100 + Math.random() * 400 : 2800 + Math.random() * 600
      band.Q.value = 1.8

      const clickGain = ctx.createGain()
      clickGain.gain.setValueAtTime(0.0001, t)
      clickGain.gain.exponentialRampToValueAtTime(accent ? 0.055 : 0.042, t + 0.001)
      clickGain.gain.exponentialRampToValueAtTime(0.0001, t + 0.025)

      const body = ctx.createOscillator()
      const bodyGain = ctx.createGain()
      body.type = 'square'
      body.frequency.setValueAtTime(accent ? 180 : 220 + Math.random() * 40, t)
      bodyGain.gain.setValueAtTime(0.0001, t)
      bodyGain.gain.exponentialRampToValueAtTime(accent ? 0.012 : 0.009, t + 0.002)
      bodyGain.gain.exponentialRampToValueAtTime(0.0001, t + 0.022)

      click.connect(band)
      band.connect(clickGain)
      clickGain.connect(ctx.destination)
      body.connect(bodyGain)
      bodyGain.connect(ctx.destination)

      click.start(t)
      click.stop(t + 0.03)
      body.start(t)
      body.stop(t + 0.03)
    },
    [enabled, getContext, getNoise],
  )

  const playReturn = useCallback(() => {
    if (!enabled) return
    const ctx = getContext()
    if (!ctx) return

    const t = ctx.currentTime
    const thud = ctx.createBufferSource()
    thud.buffer = getNoise(ctx, 55)

    const low = ctx.createBiquadFilter()
    low.type = 'lowpass'
    low.frequency.setValueAtTime(900, t)
    low.frequency.exponentialRampToValueAtTime(320, t + 0.05)

    const gain = ctx.createGain()
    gain.gain.setValueAtTime(0.0001, t)
    gain.gain.exponentialRampToValueAtTime(0.038, t + 0.003)
    gain.gain.exponentialRampToValueAtTime(0.0001, t + 0.06)

    thud.connect(low)
    low.connect(gain)
    gain.connect(ctx.destination)
    thud.start(t)
    thud.stop(t + 0.07)
  }, [enabled, getContext, getNoise])

  const playComplete = useCallback(() => {
    const ctx = getContext()
    if (!ctx) return

    const t = ctx.currentTime
    ;[880, 1174].forEach((freq, i) => {
      const tone = ctx.createOscillator()
      const toneGain = ctx.createGain()
      tone.type = 'sine'
      tone.frequency.value = freq
      toneGain.gain.setValueAtTime(0.0001, t + i * 0.06)
      toneGain.gain.exponentialRampToValueAtTime(0.014, t + i * 0.06 + 0.01)
      toneGain.gain.exponentialRampToValueAtTime(0.0001, t + i * 0.06 + 0.28)
      tone.connect(toneGain)
      toneGain.connect(ctx.destination)
      tone.start(t + i * 0.06)
      tone.stop(t + i * 0.06 + 0.3)
    })
  }, [getContext])

  return { playKey, playReturn, playComplete }
}

type RenderRow = {
  id: string
  kind: 'command' | 'output'
  text: string
  cursor?: boolean
}

export function HeroResumeBuild() {
  const reduceMotion = useReducedMotion()
  const [building, setBuilding] = useState(false)
  const [rows, setRows] = useState<RenderRow[]>([])
  const [progress, setProgress] = useState(0)
  const mounted = useSyncExternalStore(
    () => () => {},
    () => true,
    () => false,
  )
  const { playKey, playReturn, playComplete } = useTerminalSound(!reduceMotion)
  const docsRef = useRef<HTMLDivElement>(null)
  const bodyRef = useRef<HTMLDivElement>(null)
  const runningRef = useRef(false)

  useEffect(() => {
    bodyRef.current?.scrollTo({ top: bodyRef.current.scrollHeight, behavior: 'smooth' })
  }, [rows])

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
    setRows([])
    setProgress(0)
    document.body.style.overflow = 'hidden'
    await wait(80)

    const cleanupParallax = runParallax()
    const script = buildScript()
    const finished: RenderRow[] = []
    let typed = 0
    const charTotal = script.reduce((sum, step) => {
      if (step.kind === 'pause') return sum
      return sum + step.text.length + 1
    }, 0)

    for (let si = 0; si < script.length; si++) {
      const step = script[si]
      if (step.kind === 'pause') {
        await wait(LINE_PAUSE_MS)
        continue
      }

      const rowId = `${si}-${step.kind}`
      const speed = step.kind === 'command' ? TYPING_MS : OUTPUT_MS
      let current = ''

      for (const char of step.text) {
        current += char
        typed += 1
        playKey(char)
        setProgress(Math.min((typed / charTotal) * 100, 100))
        setRows([
          ...finished,
          { id: rowId, kind: step.kind, text: current, cursor: true },
        ])
        await wait(speed)
      }

      finished.push({ id: rowId, kind: step.kind, text: step.text })
      setRows([...finished])
      playReturn()
      await wait(step.kind === 'command' ? LINE_PAUSE_MS : OUTPUT_PAUSE_MS)
    }

    setProgress(100)
    playComplete()
    await wait(280)
    triggerDownload()
    window.open(editorialProfile.resumeUrl, '_blank', 'noopener,noreferrer')
    await wait(520)
    cleanupParallax?.()
    document.body.style.overflow = ''
    setBuilding(false)
    setRows([])
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
        initial={{ y: 36, opacity: 0, scale: 0.97 }}
        animate={{ y: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 0.38, ease: [0.22, 1, 0.36, 1] }}
      >
        <Terminal
          title={`${editorialProfile.brand}-MacBook`}
          hostname="bash"
          bodyRef={bodyRef}
          footer={
            <div className="editorial-resume-progress" aria-hidden>
              <span style={{ transform: `scaleX(${progress / 100})` }} />
            </div>
          }
        >
          {rows.map((row, index) => (
            <BashLine
              key={row.id}
              text={row.text}
              variant={row.kind}
              showPrompt={row.kind === 'command'}
              showCursor={Boolean(row.cursor) && index === rows.length - 1}
            />
          ))}
          {rows.length === 0 ? (
            <BashLine text="" variant="command" showPrompt showCursor />
          ) : null}
        </Terminal>
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
