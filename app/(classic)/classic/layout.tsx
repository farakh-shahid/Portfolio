import type { Metadata } from 'next'
import { Fraunces, Inter, JetBrains_Mono } from 'next/font/google'
import '@/styles/classic.css'

const fraunces = Fraunces({
  subsets: ['latin'],
  variable: '--font-fraunces',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const jetbrains = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Muhammad Farrukh — Senior Full Stack Engineer',
  description:
    'Muhammad Farrukh — senior full stack engineer, 7 years building fast, dependable web systems. React, Next, Node, Nest, AWS. Impact measured in latency removed and failures dropped.',
}

export default function ClassicLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className={`${fraunces.variable} ${inter.variable} ${jetbrains.variable}`}>{children}</div>
  )
}
