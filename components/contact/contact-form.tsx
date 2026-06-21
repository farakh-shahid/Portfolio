'use client'

import { useState } from 'react'

export function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent'>('idle')

  async function onSubmit(formData: FormData) {
    setStatus('sending')
    await fetch('/api/contact', { method: 'POST', body: formData })
    setStatus('sent')
  }

  return (
    <form action={onSubmit} className="grid gap-3 rounded-2xl border border-[var(--border)] p-5">
      <input name="name" required placeholder="Your name" className="rounded-lg border border-[var(--border)] bg-transparent px-3 py-2" />
      <input
        name="email"
        type="email"
        required
        placeholder="Work email"
        className="rounded-lg border border-[var(--border)] bg-transparent px-3 py-2"
      />
      <input
        name="company"
        placeholder="Company (optional)"
        className="rounded-lg border border-[var(--border)] bg-transparent px-3 py-2"
      />
      <textarea
        name="challenge"
        required
        rows={5}
        placeholder="What scaling or product challenge are you solving?"
        className="rounded-lg border border-[var(--border)] bg-transparent px-3 py-2"
      />
      <button
        type="submit"
        className="rounded-full bg-[var(--primary)] px-4 py-2 text-sm font-semibold text-white"
        disabled={status === 'sending'}
      >
        {status === 'sending' ? 'Sending...' : status === 'sent' ? 'Sent' : 'Send message'}
      </button>
    </form>
  )
}
