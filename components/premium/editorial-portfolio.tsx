'use client'

import { useReducedMotion } from 'framer-motion'
import {
  editorialProfile,
} from '@/data/editorial-portfolio'
import { EditorialBuild } from '@/components/premium/editorial-build'
import { EditorialOutcomes } from '@/components/premium/editorial-outcomes'
import { EditorialMarquee } from '@/components/premium/editorial-marquee'
import { EditorialStory } from '@/components/premium/editorial-story'
import { EditorialNumbers } from '@/components/premium/editorial-numbers'
import { EditorialExperience } from '@/components/premium/editorial-experience'
import { EditorialProcess } from '@/components/premium/editorial-process'
import { EditorialStack } from '@/components/premium/editorial-stack'
import { EditorialProjectsFlow } from '@/components/premium/editorial-projects-flow'
import { useEditorialMotion } from '@/components/premium/use-editorial-motion'
import { EditorialCursor } from '@/components/premium/editorial-cursor'
import { EditorialHeroNeural } from '@/components/premium/editorial-hero-neural'
import { EditorialHeroMesh } from '@/components/premium/editorial-hero-mesh'
import { EditorialStarfield } from '@/components/premium/editorial-starfield'
import { EditorialIntro } from '@/components/premium/editorial-intro'
import { HeroRotatingBody } from '@/components/premium/hero-rotating-body'
import { HeroScrollIndicator } from '@/components/premium/hero-scroll-indicator'
import { HeroResumeBuild } from '@/components/premium/hero-resume-build'
import { EditorialContact } from '@/components/premium/editorial-contact'
import { EditorialBackToTop } from '@/components/premium/editorial-back-to-top'
import { HiEye } from 'react-icons/hi2'

const HERO_SUBLINE =
  'Turning complex business problems into production-ready platforms.'

export function EditorialPortfolio() {
  const reduceMotion = useReducedMotion()
  useEditorialMotion(!reduceMotion)

  const year = new Date().getFullYear()

  return (
    <div className="editorial relative min-h-screen">
      <EditorialIntro />

      <div className="editorial-scroll-track" aria-hidden>
        <div id="editorial-scroll-progress" className="editorial-scroll-fill" />
      </div>

      <div id="editorial-gold-orb-main" className="editorial-gold-orb editorial-gold-orb--main" aria-hidden />
      <div id="editorial-gold-orb-soft" className="editorial-gold-orb editorial-gold-orb--soft" aria-hidden />

      <EditorialCursor />

      <div className="editorial-bg" aria-hidden />

      <EditorialStarfield />

      <nav id="editorial-nav" className="editorial-nav">
        <div className="editorial-wrap editorial-nav-inner">
          <a href="#" className="editorial-brand">
            {editorialProfile.brand}<em>.</em>
          </a>
          <div className="editorial-navlinks">
            <a href="#projects">Projects</a>
            <a href="#work">Outcomes</a>
            <a href="#story">About</a>
            <a href="#exp">Experience</a>
            <HeroResumeBuild />
            <a href="#contact" className="av" aria-label="Available for work">
              <span className="av-pulse" aria-hidden />
              <span className="av-label">Available</span>
            </a>
          </div>
        </div>
      </nav>

      <header data-hero-section className="editorial-hero">
        <EditorialHeroNeural />
        <EditorialHeroMesh />
        <div className="editorial-wrap editorial-hero-inner" data-hero-parallax>
          <div data-hero-kicker className="editorial-kicker">
            Senior Full-Stack Engineer — Est. 2020
          </div>
          <h1 className="editorial-hero-title">
            <span className="editorial-hero-row" data-hero-line>
              <span className="editorial-hero-name-word" data-hero-name-word>
                Muhammad
              </span>
            </span>
            <span className="editorial-hero-row" data-hero-line>
              <span className="editorial-hero-name-word" data-hero-name-word>
                Farrukh<em>.</em>
              </span>
            </span>
          </h1>
          <div className="editorial-hsub">
            <div className="editorial-hsub-content">
              <p className="editorial-hero-tagline" data-hero-tagline>
                Ships fast. Owns outcomes. Built to last.
              </p>
              <p className="editorial-hero-tagline-sub" aria-label={HERO_SUBLINE}>
                {HERO_SUBLINE.split(' ').map((word, i) => (
                  <span
                    key={`${word}-${i}`}
                    className="editorial-hero-tagline-sub-word"
                    data-hero-sub-word
                  >
                    {word}
                  </span>
                ))}
              </p>
              <div data-hero-fade>
                <HeroRotatingBody />
              </div>
              <ul className="editorial-hero-badges" data-hero-fade aria-label="Core strengths">
                <li className="editorial-hero-badges-featured">
                  <span className="editorial-hero-badge-star" aria-hidden>
                    *
                  </span>
                  <span className="editorial-hero-badge-grad">End-to-end ownership</span>
                </li>
                <li>On-time delivery</li>
                <li className="editorial-hero-badges-resume">
                  <a
                    href={editorialProfile.resumeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="editorial-hero-resume"
                  >
                    <HiEye aria-hidden />
                    View Resume
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <HeroScrollIndicator />
      </header>

      <EditorialMarquee />

      <EditorialStory />

      <EditorialNumbers />

      <EditorialBuild />

      <EditorialProcess />

      <EditorialExperience />

      <EditorialOutcomes />

      <EditorialProjectsFlow />

      <EditorialStack />

      <EditorialContact />

      <footer className="editorial-footer relative z-[1]">
        <div className="editorial-footin">
          <span>
            © {year} {editorialProfile.name} — {editorialProfile.title}
          </span>
        </div>
      </footer>

      <EditorialBackToTop />
    </div>
  )
}
