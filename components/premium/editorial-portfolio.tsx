'use client'

import { useReducedMotion } from 'framer-motion'
import {
  editorialCapabilities,
  editorialExperience,
  editorialProcess,
  editorialProfile,
  editorialStats,
} from '@/data/editorial-portfolio'
import { EditorialCaseStudies } from '@/components/premium/editorial-case-studies'
import { EditorialMarquee } from '@/components/premium/editorial-marquee'
import { EditorialStack } from '@/components/premium/editorial-stack'
import { useEditorialMotion } from '@/components/premium/use-editorial-motion'
import { EditorialCursor } from '@/components/premium/editorial-cursor'
import { EditorialHeroMesh } from '@/components/premium/editorial-hero-mesh'
import { EditorialIntro } from '@/components/premium/editorial-intro'
import { HeroRotatingBody } from '@/components/premium/hero-rotating-body'
import { HeroScrollIndicator } from '@/components/premium/hero-scroll-indicator'
import { HeroResumeBuild } from '@/components/premium/hero-resume-build'
import { EditorialBackToTop } from '@/components/premium/editorial-back-to-top'
import { HiEye } from 'react-icons/hi2'

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

      <nav id="editorial-nav" className="editorial-nav">
        <div className="editorial-wrap editorial-nav-inner">
          <a href="#" className="editorial-brand">
            {editorialProfile.brand}<em>.</em>
          </a>
          <div className="editorial-navlinks">
            <a href="#work">Work</a>
            <a href="#story">About</a>
            <a href="#exp">Experience</a>
            <HeroResumeBuild />
            <a href="#contact" className="av">
              Available
            </a>
          </div>
        </div>
      </nav>

      <header data-hero-section className="editorial-hero">
        <EditorialHeroMesh />
        <div className="editorial-wrap editorial-hero-inner" data-hero-parallax>
          <div data-hero-fade className="editorial-kicker">
            Senior Full-Stack Engineer — Est. 2020
          </div>
          <h1 className="editorial-hero-title">
            <span className="editorial-hero-row" data-hero-line>
              <span>Muhammad</span>
            </span>
            <span className="editorial-hero-row" data-hero-line>
              <span>
                Farrukh<em>.</em>
              </span>
            </span>
          </h1>
          <div data-hero-fade className="editorial-hsub">
            <div className="editorial-hsub-content">
              <p className="editorial-hero-tagline">Ships fast. Owns outcomes. Built to last.</p>
              <HeroRotatingBody />
              <ul className="editorial-hero-badges" aria-label="Core strengths">
                <li>End-to-end ownership</li>
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

      <section id="story" className="editorial-section editorial-section--story" data-parallax-section>
        <div className="editorial-wrap">
          <span className="editorial-eyebrow" data-reveal>
            The work
          </span>
          <p className="editorial-lead" data-reveal>
            Six years turning <em>tangled requirements</em> into systems that stay quick under pressure — across IoT,
            fintech, travel and e-commerce.{' '}
            <span className="muted">
              From the React on the screen to the queues, caches and Lambdas underneath it.
            </span>
          </p>
        </div>
      </section>

      <section id="numbers" className="editorial-section" data-parallax-section>
        <div className="editorial-wrap">
          <div className="editorial-xhead" data-reveal>
            <h2>
              By the <em>numbers</em>
            </h2>
            <span className="count">Across four teams</span>
          </div>
          <div className="editorial-nband">
            {editorialStats.map((stat) => (
              <div key={stat.label} className="editorial-nstat" data-reveal>
                <div className="editorial-stat-n" data-stat-to={stat.value}>
                  <span data-stat-value>{reduceMotion ? stat.value : 0}</span>
                  {stat.suffix ? <span className="u">{stat.suffix}</span> : null}
                </div>
                <div className="l">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="build" className="editorial-section" data-parallax-section>
        <div className="editorial-wrap">
          <div className="editorial-xhead" data-reveal>
            <h2>
              What I <em>build</em>
            </h2>
            <span className="count">End to end, or wherever you need depth</span>
          </div>
          <div className="editorial-caps">
            {editorialCapabilities.map((cap) => (
              <div key={cap.id} className="editorial-caprow" data-reveal>
                <div className="ci">{cap.id}</div>
                <h3>{cap.title}</h3>
                <div className="cd">
                  {cap.description}
                  <span className="tags">{cap.tags}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="process" className="editorial-section" data-parallax-section>
        <div className="editorial-wrap">
          <div className="editorial-xhead" data-reveal>
            <h2>
              How I <em>work</em>
            </h2>
            <span className="count">A typed timeline, every time</span>
          </div>
          <div className="editorial-proc">
            {editorialProcess.map((step) => (
              <div key={step.step} className="editorial-pstep" data-reveal>
                <div className="pi">{step.step}</div>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="exp" className="editorial-section editorial-section--exp relative">
        <div className="editorial-exp-track" aria-hidden>
          <div id="editorial-exp-fill" className="editorial-exp-track-fill" />
        </div>
        <div className="editorial-wrap relative">
          <div className="editorial-xhead" data-reveal>
            <h2>
              <em>Experience</em>
            </h2>
            <span className="count">Architecture ownership · delivery scope · impact</span>
          </div>
          {editorialExperience.map((job) => (
            <div key={job.index} className="editorial-xrow">
              <aside className="editorial-xcompany">
                <div className="editorial-xbrand">
                  <span className="editorial-xlogo">{job.company.slice(0, 1)}</span>
                  <div>
                    <a href={job.website} target="_blank" rel="noreferrer" className="company">
                      {job.company}
                    </a>
                    <span className="visit">Visit website ↗</span>
                  </div>
                </div>
                <div className="role">{job.role}</div>
                <div className="editorial-xmeta-block">
                  <span>{job.when}</span>
                  <small>{job.isCurrent ? 'Current' : 'Past role'}</small>
                </div>
                {job.location ? <div className="editorial-xloc">◆ {job.location}</div> : null}
              </aside>

              <div className="editorial-xcontent" data-reveal>
                <p className="desc">{job.desc}</p>
                <div className="editorial-xtags">
                  {job.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>

                <ul className="editorial-xbullets">
                  {job.bullets.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>

                <div className="editorial-xprojects">
                  <span>Notable projects built here</span>
                  <div>
                    {job.projects.map((project) => (
                      <b key={project}>{project}</b>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="work" className="editorial-section" data-parallax-section>
        <div className="editorial-wrap">
          <div className="editorial-xhead" data-reveal>
            <h2>
              Engineering <em>outcomes</em>
            </h2>
            <span className="count">Context · approach · how it&apos;s measured</span>
          </div>
          <EditorialCaseStudies />
        </div>
      </section>

      <EditorialStack />

      <section id="contact" className="editorial-section">
        <div className="editorial-wrap">
          <div className="editorial-cwrap" data-reveal>
            <span className="editorial-eyebrow editorial-eyebrow-center">Let&apos;s talk</span>
            <div className="big">
              Let&apos;s build something
              <br />
              <em>at scale.</em>
            </div>
            <p className="sub">{editorialProfile.contactSub}</p>
            <a href={`mailto:${editorialProfile.email}`} className="mail">
              {editorialProfile.email}
            </a>
            <div className="editorial-cmeta">
              <a href={`tel:${editorialProfile.phone}`}>{editorialProfile.phoneDisplay}</a>
              <a href={editorialProfile.github} target="_blank" rel="noopener noreferrer">
                GitHub ↗
              </a>
              <a href={editorialProfile.linkedin} target="_blank" rel="noopener noreferrer">
                LinkedIn ↗
              </a>
              <span>{editorialProfile.timezone}</span>
            </div>
          </div>
        </div>
      </section>

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
