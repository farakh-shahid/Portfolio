'use client'

import { type ReactNode, type RefObject } from 'react'

type BashLineProps = {
  text: string
  variant: 'command' | 'output'
  showPrompt?: boolean
  showCursor?: boolean
}

const TOKEN =
  /("[^"]*"|'[^']*'|\S+)/g

function highlightToken(token: string, variant: 'command' | 'output', isFirst: boolean) {
  if (variant === 'output') {
    if (/^✔|^✓/.test(token)) {
      return <span className="terminal-token terminal-token--success">{token}</span>
    }
    if (/^\d/.test(token) || token.endsWith('OK')) {
      return <span className="terminal-token terminal-token--muted">{token}</span>
    }
    return <span className="terminal-token terminal-token--output">{token}</span>
  }

  if (isFirst && !token.startsWith('-')) {
    return <span className="terminal-token terminal-token--cmd">{token}</span>
  }
  if (token.startsWith('-')) {
    return <span className="terminal-token terminal-token--flag">{token}</span>
  }
  if (/^['"]/.test(token) || token.includes('/') || token.includes('.pdf')) {
    return <span className="terminal-token terminal-token--path">{token}</span>
  }
  if (token === 'export' || token === 'cat' || token === 'curl' || token === 'open') {
    return <span className="terminal-token terminal-token--keyword">{token}</span>
  }
  if (token.includes('=')) {
    const [key, ...rest] = token.split('=')
    return (
      <>
        <span className="terminal-token terminal-token--keyword">{key}</span>
        <span className="terminal-token terminal-token--muted">=</span>
        <span className="terminal-token terminal-token--path">{rest.join('=')}</span>
      </>
    )
  }
  return <span className="terminal-token terminal-token--text">{token}</span>
}

export function BashLine({ text, variant, showPrompt, showCursor }: BashLineProps) {
  const tokens = text.match(TOKEN) ?? [text]

  return (
    <p className="terminal-line">
      {showPrompt ? <span className="terminal-prompt">$ </span> : null}
      {tokens.map((token, i) => (
        <span key={`${i}-${token}`}>{highlightToken(token, variant, i === 0)}</span>
      ))}
      {showCursor ? <span className="terminal-cursor" aria-hidden /> : null}
    </p>
  )
}

type TerminalProps = {
  title: string
  hostname?: string
  bodyRef?: RefObject<HTMLDivElement | null>
  children: ReactNode
  footer?: ReactNode
  className?: string
}

export function Terminal({
  title,
  hostname = 'bash',
  bodyRef,
  children,
  footer,
  className = '',
}: TerminalProps) {
  return (
    <div className={`terminal-shell ${className}`.trim()}>
      <div className="terminal-bar">
        <span className="terminal-dot terminal-dot--close" />
        <span className="terminal-dot terminal-dot--min" />
        <span className="terminal-dot terminal-dot--max" />
        <p className="terminal-bar-title">
          {title} — <span>{hostname}</span>
        </p>
      </div>
      <div ref={bodyRef} className="terminal-body">
        {children}
      </div>
      {footer ? <div className="terminal-footer">{footer}</div> : null}
    </div>
  )
}
