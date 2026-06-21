import { HiEnvelope } from 'react-icons/hi2'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { siteConfig } from '@/data/site-config'

export function FigmaContact() {
  return (
    <section id="contact" className="relative mx-auto max-w-3xl px-6 pb-16 pt-8 text-center md:px-8 md:pb-24">
      <h2 className="text-2xl font-semibold text-white md:text-3xl">Contact</h2>
      <p className="mx-auto mt-6 max-w-lg text-sm leading-relaxed text-[var(--figma-muted)] md:text-base">
        I&apos;m currently open to Senior Full Stack and backend-heavy roles. If you have a system that needs to
        scale — or a team that values reliability — I&apos;d love to hear from you.
      </p>
      <p className="mt-8 text-lg font-medium text-white md:text-xl">
        My inbox is always open.{' '}
        <a href={`mailto:${siteConfig.email}`} className="figma-highlight underline-offset-4 hover:underline">
          {siteConfig.email}
        </a>
      </p>

      <div className="mt-12 flex items-center justify-center gap-5">
        <a
          href={siteConfig.links.linkedin}
          target="_blank"
          rel="noreferrer"
          className="text-[var(--figma-muted)] transition hover:text-white"
          aria-label="LinkedIn"
        >
          <FaLinkedin className="h-5 w-5" />
        </a>
        <a
          href={siteConfig.links.github}
          target="_blank"
          rel="noreferrer"
          className="text-[var(--figma-muted)] transition hover:text-white"
          aria-label="GitHub"
        >
          <FaGithub className="h-5 w-5" />
        </a>
        <a
          href={`mailto:${siteConfig.email}`}
          className="text-[var(--figma-muted)] transition hover:text-white"
          aria-label="Email"
        >
          <HiEnvelope className="h-5 w-5" />
        </a>
      </div>

      <p className="mt-16 text-xs text-[var(--figma-muted)]">
        Design inspired by{' '}
        <a
          href="https://www.figma.com/design/rkLhiwq6hBoLTN0ErhWyGZ/Portfolio-Design--Community-"
          target="_blank"
          rel="noreferrer"
          className="underline-offset-2 hover:underline"
        >
          Portfolio Design (Community)
        </a>
        {' · '}
        Made-with: React
      </p>
    </section>
  )
}
