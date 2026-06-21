'use client'

import Link from 'next/link'
import { useRef } from 'react'
import { siteConfig } from '@/data/site-config'
import { ParticleScene } from '@/components/classic/particle-scene'
import { useClassicEffects } from '@/components/classic/use-classic-effects'

export function ClassicPortfolio() {
  const rootRef = useRef<HTMLDivElement>(null)
  useClassicEffects(rootRef)

  return (
    <div className="classic-root" id="top" ref={rootRef}>
      <div className="aurora" aria-hidden="true">
        <i />
        <i />
        <i />
      </div>
      <ParticleScene />
      <div className="progress" id="progress" />
      <div className="cur" id="cur" aria-hidden="true" />
      <div className="cur-dot" id="curDot" aria-hidden="true" />

      <nav className="nav" id="nav">
        <div className="wrap nav-inner">
          <a href="#top" className="monogram" data-cursor>
            M<span>F</span>
          </a>
          <div className="nav-links">
            <a href="#expertise" className="hide-sm" data-cursor>
              Expertise
            </a>
            <a href="#work" className="hide-sm" data-cursor>
              Experience
            </a>
            <a href="#projects" className="hide-sm" data-cursor>
              Projects
            </a>
            <a href="#contact" data-cursor>
              Contact
            </a>
            <Link href="/" className="hide-sm" data-cursor>
              Main site
            </Link>
            {siteConfig.links.resume ? (
              <a href={siteConfig.links.resume} className="nav-resume" data-cursor data-magnetic target="_blank" rel="noopener noreferrer">
                Résumé ↗
              </a>
            ) : (
              <span className="nav-resume" data-cursor data-magnetic>
                Résumé ↗
              </span>
            )}
          </div>
        </div>
      </nav>

      <header className="hero">
        <div className="wrap hero-inner">
          <p className="eyebrow rise">Senior Full Stack Engineer · 7 Years</p>
          <h1 id="heroName">
            <span className="ln">
              <span>Muhammad</span>
            </span>
            <span className="ln">
              <span>
                <em>Farrukh</em>
              </span>
            </span>
          </h1>
          <p className="hero-pitch rise delay1">
            I turn slow, fragile web systems into <b>fast, dependable</b> ones — owning the work from database schema to the pixels users touch, and proving every gain in numbers.
          </p>
          <div className="creds rise delay2">
            <span>
              <b>7</b> years
            </span>
            <span className="sep" />
            <span>
              <b>4</b> product teams
            </span>
            <span className="sep" />
            <span>
              Shipped for <b>US · Greece · Canada</b>
            </span>
            <span className="sep" />
            <span>React · Next · Node · Nest · AWS</span>
          </div>
        </div>
        <div className="scroll-hint" aria-hidden="true">
          <span className="bar" />
          Scroll
        </div>
      </header>

      <section className="ledger" aria-label="By the numbers">
        <div className="wrap">
          <div className="ledger-grid">
            <div className="ledger-cell rise">
              <div className="ledger-num">
                <span className="count" data-to="7" data-pad="2">
                  00
                </span>
              </div>
              <div className="ledger-lbl">Years engineering</div>
            </div>
            <div className="ledger-cell rise delay1">
              <div className="ledger-num">
                <span className="count" data-to="4" data-pad="2">
                  00
                </span>
              </div>
              <div className="ledger-lbl">Product teams</div>
            </div>
            <div className="ledger-cell rise delay2">
              <div className="ledger-num">
                <span className="count" data-to="20">
                  0
                </span>
                <small>%</small>
              </div>
              <div className="ledger-lbl">Typical perf lift</div>
            </div>
            <div className="ledger-cell rise delay3">
              <div className="ledger-num">
                <span className="count" data-to="30">
                  0
                </span>
                <small>%</small>
              </div>
              <div className="ledger-lbl">Faster page loads</div>
            </div>
          </div>
        </div>
      </section>

      <section className="section" id="about">
        <div className="wrap">
          <div className="about-grid">
            <p className="about-lead rise">
              A senior engineer who works the <em>full column</em> — <em>React and Next</em> on the surface, <em>Node and Nest</em> behind it, <em>AWS</em> underneath — and answers to the numbers.
            </p>
            <div className="about-body rise delay1">
              <p>
                Across seven years and four product teams in the US, Greece and Canada, I&apos;ve taken on the work most engineers hand off: rebuilding a booking platform off legacy PHP, wiring solar-site IoT fleets together over MQTT, and holding high-traffic commerce steady at scale.
              </p>
              <p>
                I like the hard middle of a system — the queries, the caches, the service boundaries — but I follow the problem all the way to the interface people actually use. Then I measure it, because a gain you can&apos;t show isn&apos;t one.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="strip" aria-label="Industries">
        <div className="wrap">
          <div className="strip-inner">
            <span className="k">Domains</span>
            <span className="v">
              <span>Clean Energy &amp; IoT</span>
              <span>Travel &amp; Booking</span>
              <span>E-commerce</span>
              <span>HR Tech</span>
              <span>SaaS &amp; Productivity</span>
            </span>
          </div>
        </div>
      </section>

      <section className="section" id="expertise">
        <div className="wrap">
          <div className="sec-head rise">
            <span className="sec-idx">01</span>
            <h2 className="sec-title">What I own</h2>
            <span className="sec-rule" />
            <span className="sec-sub">Where I add the most</span>
          </div>
          <div className="own-grid">
            <div className="own rise">
              <div className="own-k">Systems</div>
              <div className="own-t">Architecture &amp; scale</div>
              <p className="own-d">Microservices, multi-tenant platforms and API gateways designed to absorb concurrent load without buckling.</p>
              <div className="own-m">High-traffic e-commerce, scaled</div>
            </div>
            <div className="own rise delay1">
              <div className="own-k">Real-time</div>
              <div className="own-t">IoT &amp; live data</div>
              <p className="own-d">Device fleets that talk over MQTT and AWS IoT Core, with socket-driven updates that stay in sync.</p>
              <div className="own-m">Live solar-site telemetry</div>
            </div>
            <div className="own rise delay2">
              <div className="own-k">Speed</div>
              <div className="own-t">Performance engineering</div>
              <p className="own-d">Caching, query tuning and state optimization that turn sluggish apps into ones that feel instant.</p>
              <div className="own-m">+20–30% gains, repeatedly</div>
            </div>
            <div className="own rise">
              <div className="own-k">Trust</div>
              <div className="own-t">Security &amp; auth</div>
              <p className="own-d">Cognito, MFA, JWT and Secrets Manager wired in from the start — not bolted on after launch.</p>
              <div className="own-m">−30% vulnerabilities</div>
            </div>
            <div className="own rise delay1">
              <div className="own-k">Delivery</div>
              <div className="own-t">DevOps &amp; CI/CD</div>
              <p className="own-d">Dockerized services and pipelines on Jenkins and GitHub Actions that make deploys boring, the good kind.</p>
              <div className="own-m">Streamlined releases</div>
            </div>
            <div className="own rise delay2">
              <div className="own-k">Commerce</div>
              <div className="own-t">Payments &amp; integrations</div>
              <p className="own-d">Stripe, PayPal and third-party APIs integrated end to end and built to reconcile cleanly.</p>
              <div className="own-m">Secure checkout flows</div>
            </div>
          </div>
        </div>
      </section>

      <section className="section" id="approach">
        <div className="wrap">
          <div className="sec-head rise">
            <span className="sec-idx">02</span>
            <h2 className="sec-title">How I work</h2>
            <span className="sec-rule" />
            <span className="sec-sub">The judgment behind the code</span>
          </div>
          <div className="work-grid">
            <div className="principle rise">
              <div className="principle-no">01</div>
              <div>
                <h4>Measure, then move</h4>
                <p>Every change is judged by latency removed or failures dropped. If it can&apos;t be measured, it isn&apos;t finished.</p>
              </div>
            </div>
            <div className="principle rise delay1">
              <div className="principle-no">02</div>
              <div>
                <h4>Own the whole column</h4>
                <p>Schema to pixel. I don&apos;t hand the problem off at the API boundary — I follow it to the person using it.</p>
              </div>
            </div>
            <div className="principle rise">
              <div className="principle-no">03</div>
              <div>
                <h4>Design for the load you&apos;ll have</h4>
                <p>Queued, cached, multi-tenant. I build for the next order of magnitude before it shows up at the door.</p>
              </div>
            </div>
            <div className="principle rise delay1">
              <div className="principle-no">04</div>
              <div>
                <h4>Secure by default</h4>
                <p>Auth, secrets and validation are decided up front, so security is a property of the system, not a later patch.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section" id="skills">
        <div className="wrap">
          <div className="sec-head rise">
            <span className="sec-idx">03</span>
            <h2 className="sec-title">Stack</h2>
            <span className="sec-rule" />
            <span className="sec-sub">Tools I reach for</span>
          </div>
          <div className="cap-group rise">
            <div className="cap-row">
              <div className="cap-name">
                Frontend
                <span>Interfaces &amp; state</span>
              </div>
              <div className="tags">
                {['React', 'Next.js', 'Vue', 'Angular', 'TypeScript', 'Redux / RTK Query', 'Redux Saga', 'React Query', 'RxJS', 'Tailwind CSS', 'MUI', 'Styled Components', 'Gatsby', 'Jest', 'Cypress'].map((tag) => (
                  <span className="tag" key={tag}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
          <div className="cap-group rise delay1">
            <div className="cap-row">
              <div className="cap-name">
                Backend
                <span>Services &amp; messaging</span>
              </div>
              <div className="tags">
                {['Node.js', 'NestJS', 'Express', 'GraphQL', 'Apollo Server', 'Microservices', 'RabbitMQ', 'Kafka', 'Redis', 'Docker', 'JWT', 'CI/CD · Jenkins', 'GitHub Actions', 'Socket.IO'].map((tag) => (
                  <span className="tag" key={tag}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
          <div className="cap-group rise delay2">
            <div className="cap-row">
              <div className="cap-name">
                Data &amp; Cloud
                <span>Storage &amp; infra</span>
              </div>
              <div className="tags">
                {['AWS · EC2', 'Lambda', 'S3', 'RDS', 'SQS / SNS', 'Cognito', 'IoT Core', 'GCP', 'PostgreSQL', 'MySQL', 'MongoDB', 'DynamoDB', 'Prisma', 'TypeORM', 'Stripe / PayPal'].map((tag) => (
                  <span className="tag" key={tag}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section" id="work">
        <div className="wrap">
          <div className="sec-head rise">
            <span className="sec-idx">04</span>
            <h2 className="sec-title">Experience</h2>
            <span className="sec-rule" />
            <span className="sec-sub">Track record</span>
          </div>
          <div className="xp">
            <article className="xp-item rise">
              <div className="xp-no">01</div>
              <div>
                <div className="xp-top">
                  <h3 className="xp-role">Senior Software Engineer</h3>
                  <span className="xp-date">Jun 2024 — Present</span>
                </div>
                <p className="xp-org">
                  Terrasmart <span>{' // '}California, US</span>
                </p>
                <p className="xp-desc">
                  Built the platform connecting IoT devices across a live solar site — configuring AWS IoT Core and MQTT command flows so the controller and edge devices stay in sync, with secure access handled through Cognito and MFA.
                </p>
                <div className="deltas">
                  <div className="delta">
                    <span className="delta-val">+20%</span>
                    <span className="delta-txt">application performance via Redis caching and query optimization</span>
                  </div>
                  <div className="delta">
                    <span className="delta-val">−15%</span>
                    <span className="delta-txt">API request failures with RTK Query, React Query and Redux Saga</span>
                  </div>
                  <div className="delta">
                    <span className="delta-val">+22%</span>
                    <span className="delta-txt">state-change efficiency across the client</span>
                  </div>
                </div>
                <div className="xp-stack">
                  <span>AWS IoT Core</span>
                  <span>Cognito</span>
                  <span>Secrets Manager</span>
                  <span>MQTT</span>
                  <span>Redis</span>
                  <span>React</span>
                </div>
              </div>
            </article>
            <article className="xp-item rise">
              <div className="xp-no">02</div>
              <div>
                <div className="xp-top">
                  <h3 className="xp-role">Senior Software Engineer</h3>
                  <span className="xp-date">Jun 2024 — Dec 2024</span>
                </div>
                <p className="xp-org">
                  Greeka <span>{' // '}Greece · Remote</span>
                </p>
                <p className="xp-desc">
                  Revamped a ferry-booking system, migrating it off legacy PHP onto NestJS with TypeORM and PostgreSQL, and wiring services together with RabbitMQ. Designed the responsive front end in Next.js and Tailwind, with Stripe checkout end to end.
                </p>
                <div className="deltas">
                  <div className="delta">
                    <span className="delta-val">−30%</span>
                    <span className="delta-txt">security vulnerabilities via JWT auth and hardened protocols</span>
                  </div>
                  <div className="delta">
                    <span className="delta-val">PHP→Nest</span>
                    <span className="delta-txt">full backend migration with strict TypeScript typing</span>
                  </div>
                </div>
                <div className="xp-stack">
                  <span>NestJS</span>
                  <span>TypeORM</span>
                  <span>PostgreSQL</span>
                  <span>RabbitMQ</span>
                  <span>Next.js</span>
                  <span>Stripe</span>
                </div>
              </div>
            </article>
            <article className="xp-item rise">
              <div className="xp-no">03</div>
              <div>
                <div className="xp-top">
                  <h3 className="xp-role">Senior Software Engineer</h3>
                  <span className="xp-date">Jun 2022 — May 2024</span>
                </div>
                <p className="xp-org">
                  Devsinc <span>{' // '}San Francisco, US</span>
                </p>
                <p className="xp-desc">
                  Designed and deployed a microservices architecture for a high-traffic e-commerce platform — multi-tenant infrastructure behind an API gateway and load balancing, built to absorb concurrent users without flinching.
                </p>
                <div className="deltas">
                  <div className="delta">
                    <span className="delta-val">+30%</span>
                    <span className="delta-txt">user-interaction speed across Vue and React interfaces</span>
                  </div>
                  <div className="delta">
                    <span className="delta-val">−12%</span>
                    <span className="delta-txt">bounce rate from the faster, more responsive UI</span>
                  </div>
                  <div className="delta">
                    <span className="delta-val">+20%</span>
                    <span className="delta-txt">overall performance through Redis caching and query tuning</span>
                  </div>
                </div>
                <div className="xp-stack">
                  <span>Node.js</span>
                  <span>Microservices</span>
                  <span>Vue</span>
                  <span>React</span>
                  <span>MongoDB</span>
                  <span>AWS S3</span>
                </div>
              </div>
            </article>
            <article className="xp-item rise">
              <div className="xp-no">04</div>
              <div>
                <div className="xp-top">
                  <h3 className="xp-role">Software Engineer</h3>
                  <span className="xp-date">Feb 2020 — Jun 2022</span>
                </div>
                <p className="xp-org">
                  Bitnine Global <span>{' // '}Vancouver, CA</span>
                </p>
                <p className="xp-desc">
                  Led the build of Bitnine&apos;s official site in Next.js and shipped full-stack apps on React, Node and Express. Drove backend development of REST and GraphQL APIs, and a library of reusable React components for the team.
                </p>
                <div className="deltas">
                  <div className="delta">
                    <span className="delta-val">+30%</span>
                    <span className="delta-txt">page-load speed on the company site</span>
                  </div>
                  <div className="delta">
                    <span className="delta-val">+30%</span>
                    <span className="delta-txt">development velocity from a reusable component library</span>
                  </div>
                  <div className="delta">
                    <span className="delta-val">+20%</span>
                    <span className="delta-txt">system performance via optimized REST &amp; GraphQL APIs</span>
                  </div>
                </div>
                <div className="xp-stack">
                  <span>Next.js</span>
                  <span>React</span>
                  <span>Node.js</span>
                  <span>Express</span>
                  <span>GraphQL</span>
                  <span>Redux / Zustand</span>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="section" id="projects">
        <div className="wrap">
          <div className="sec-head rise">
            <span className="sec-idx">05</span>
            <h2 className="sec-title">Selected Projects</h2>
            <span className="sec-rule" />
            <span className="sec-sub">Live work</span>
          </div>
          <div className="proj-grid">
            <a className="proj rise tilt" href="https://www.terrasmart.com/" target="_blank" rel="noopener noreferrer" data-cursor>
              <span className="glare" />
              <div className="proj-inner">
                <div className="proj-name">
                  Terrasmart <span className="arr">↗</span>
                </div>
                <p className="proj-desc">
                  Real-time web platform for solar infrastructure — a React front end talking to edge devices through AWS IoT Core over MQTT, with serverless Lambda trimming infrastructure overhead.
                </p>
                <p className="proj-tech">Node · GraphQL · TypeScript · PostgreSQL · React · AWS</p>
              </div>
            </a>
            <a className="proj rise delay1 tilt" href="https://maplehr.io/" target="_blank" rel="noopener noreferrer" data-cursor>
              <span className="glare" />
              <div className="proj-inner">
                <div className="proj-name">
                  Maple HR <span className="arr">↗</span>
                </div>
                <p className="proj-desc">
                  REST APIs that streamlined team operations and cut administrative overhead by 25%, with state moved from Redux Thunk to RTK Query to shed boilerplate.
                </p>
                <p className="proj-tech">React · Node · PostgreSQL · MUI · Storybook · AWS S3</p>
              </div>
            </a>
            <a className="proj rise delay2 tilt" href="https://www.upmailsolutions.com/" target="_blank" rel="noopener noreferrer" data-cursor>
              <span className="glare" />
              <div className="proj-inner">
                <div className="proj-name">
                  Upmail <span className="arr">↗</span>
                </div>
                <p className="proj-desc">
                  Led a feature letting users build multiple dynamic tables inside the platform — flexible inputs and structures that gave reporting room to breathe and kept data organized.
                </p>
                <p className="proj-tech">TypeScript · React · Node · Express · AWS</p>
              </div>
            </a>
          </div>
        </div>
      </section>

      <footer className="foot" id="contact">
        <div className="wrap">
          <p className="foot-edu rise">B.S. Computer Science</p>
          <h2 className="foot-h rise delay1">
            Let&apos;s build something
            <br />
            that <em>stays fast.</em>
          </h2>
          <p className="foot-note rise delay1">Got a system that needs to scale, speed up, or get rebuilt the right way? I read every message and reply within a day.</p>
          <div className="contacts rise delay2">
            <a className="contact" href={`mailto:${siteConfig.email}`} data-cursor data-magnetic>
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <rect x="3" y="5" width="18" height="14" rx="2" />
                <path d="m3 7 9 6 9-6" />
              </svg>
              {siteConfig.email}
            </a>
            <a className="contact" href={`tel:${siteConfig.phone}`} data-cursor data-magnetic>
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M5 4h4l2 5-3 2a11 11 0 0 0 5 5l2-3 5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2" />
              </svg>
              {siteConfig.phoneDisplay}
            </a>
            <a className="contact" href={siteConfig.links.linkedin} target="_blank" rel="noopener noreferrer" data-cursor data-magnetic>
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <rect x="3" y="3" width="18" height="18" rx="2" />
                <path d="M8 10v7M8 7v.01M12 17v-4a2 2 0 0 1 4 0v4M12 17v-7" />
              </svg>
              LinkedIn
            </a>
            <a className="contact" href={siteConfig.links.github} target="_blank" rel="noopener noreferrer" data-cursor data-magnetic>
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M9 19c-4 1.5-4-2.5-6-3m12 5v-3.5c0-1 .1-1.4-.5-2 2.8-.3 5.5-1.4 5.5-6a4.6 4.6 0 0 0-1.3-3.2 4.2 4.2 0 0 0-.1-3.2s-1-.3-3.4 1.3a11.6 11.6 0 0 0-6 0C7.3 2.3 6.3 2.6 6.3 2.6a4.2 4.2 0 0 0-.1 3.2A4.6 4.6 0 0 0 5 9c0 4.6 2.7 5.7 5.5 6-.6.6-.6 1.2-.5 2V21" />
              </svg>
              GitHub
            </a>
          </div>
          <div className="foot-base">
            <span>© 2026 Muhammad Farrukh</span>
            <span>Senior Full Stack Engineer — Designed &amp; built end to end</span>
          </div>
        </div>
      </footer>
    </div>
  )
}
