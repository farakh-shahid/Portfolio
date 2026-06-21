import { Inter, JetBrains_Mono, Fraunces } from 'next/font/google'
import { GeistMono } from 'geist/font/mono'
import { GeistSans } from 'geist/font/sans'
import { ConditionalChrome } from '@/components/layout/conditional-chrome'
import { PageTransition } from '@/components/layout/page-transition'
import { PublicChrome } from '@/components/layout/public-chrome'
import { ThemeProvider } from '@/components/layout/theme-provider'
import { personSchema } from '@/lib/seo/schema'

const fraunces = Fraunces({
  subsets: ['latin'],
  variable: '--font-fraunces',
  display: 'swap',
  axes: ['opsz'],
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

export default function PublicLayout({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider>
      <div
        className={`${GeistSans.variable} ${GeistMono.variable} ${fraunces.variable} ${inter.variable} ${jetbrains.variable} relative min-h-screen bg-[var(--bg-0)] font-sans text-[var(--text)] antialiased`}
      >
        <ConditionalChrome />
        <div className="relative z-10 flex min-h-screen flex-col">
          <div className="flex-1">
            <PageTransition>
              <PublicChrome>{children}</PublicChrome>
            </PageTransition>
          </div>
        </div>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema()) }}
        />
      </div>
    </ThemeProvider>
  )
}
