import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion'
import { useEffect, useMemo, useState } from 'react'
import {
  FaCloud,
  FaCode,
  FaDatabase,
  FaGaugeHigh,
  FaLayerGroup,
  FaMicrochip,
  FaNetworkWired,
  FaReact,
  FaServer,
  FaShieldHalved,
} from 'react-icons/fa6'
import {
  FaBoltLightning,
  FaCheck,
  FaInbox,
  FaMobileScreenButton,
  FaWifi,
} from 'react-icons/fa6'
import {
  SiApachekafka,
  SiDocker,
  SiKubernetes,
  SiMongodb,
  SiNestjs,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiRabbitmq,
  SiRedis,
  SiReact,
  SiTerraform,
  SiTypescript,
} from 'react-icons/si'
import { FaAws, FaMicrosoft } from 'react-icons/fa6'
import { site } from './siteContent'

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 },
}

const iconMap = {
  React: SiReact,
  'Next.js': SiNextdotjs,
  'Node.js': SiNodedotjs,
  NestJS: SiNestjs,
  AWS: FaAws,
  Azure: FaMicrosoft,
  PostgreSQL: SiPostgresql,
  Docker: SiDocker,
} as const

const techStrip = [
  { label: 'TypeScript', Icon: SiTypescript, color: '#3178C6' },
  { label: 'React', Icon: SiReact, color: '#61DAFB' },
  { label: 'Next.js', Icon: SiNextdotjs, color: '#FFFFFF' },
  { label: 'Node.js', Icon: SiNodedotjs, color: '#339933' },
  { label: 'NestJS', Icon: SiNestjs, color: '#E0234E' },
  { label: 'AWS', Icon: FaAws, color: '#FF9900' },
  { label: 'Microsoft Azure', Icon: FaMicrosoft, color: '#0078D4' },
  { label: 'Docker', Icon: SiDocker, color: '#2496ED' },
  { label: 'Kubernetes', Icon: SiKubernetes, color: '#326CE5' },
  { label: 'Terraform', Icon: SiTerraform, color: '#7B42BC' },
  { label: 'Redis', Icon: SiRedis, color: '#DC382D' },
  { label: 'Kafka', Icon: SiApachekafka, color: '#FFFFFF' },
  { label: 'RabbitMQ', Icon: SiRabbitmq, color: '#FF6600' },
  { label: 'MongoDB', Icon: SiMongodb, color: '#47A248' },
  { label: 'PostgreSQL', Icon: SiPostgresql, color: '#4169E1' },
] as const

const techColorByLabel: Record<string, string> = {
  React: '#61DAFB',
  'Next.js': '#FFFFFF',
  'Node.js': '#339933',
  NestJS: '#E0234E',
  AWS: '#FF9900',
  Azure: '#0078D4',
  PostgreSQL: '#4169E1',
  Docker: '#2496ED',
}

const capabilityIconMap = {
  cloud: FaAws,
  delivery: FaMicrosoft,
  backend: FaLayerGroup,
  frontend: FaReact,
  database: FaDatabase,
  security: FaShieldHalved,
} as const

const capabilityColorMap = {
  cloud: '#FF9900',
  delivery: '#0078D4',
  backend: '#339933',
  frontend: '#61DAFB',
  database: '#4169E1',
  security: '#FF004F',
} as const

const skillIconMap = {
  Frontend: FaCode,
  Backend: FaServer,
  'Cloud & DevOps': FaCloud,
  'Data & Performance': FaGaugeHigh,
} as const

const skillColorMap = {
  Frontend: '#61DAFB',
  Backend: '#22C55E',
  'Cloud & DevOps': '#FF9900',
  'Data & Performance': '#6366F1',
} as const

const experienceIconMap = {
  greeka: FaServer,
  terrasmart: FaNetworkWired,
  bitnine: FaDatabase,
  devsinc: FaMicrochip,
} as const

const experienceColorMap = {
  greeka: '#22C55E',
  terrasmart: '#FF9900',
  bitnine: '#4169E1',
  devsinc: '#61DAFB',
} as const

const networkNodes = [
  { x: 12, y: 18, label: 'React' },
  { x: 28, y: 36, label: 'Next.js' },
  { x: 48, y: 22, label: 'Node.js' },
  { x: 64, y: 42, label: 'NestJS' },
  { x: 78, y: 24, label: 'AWS' },
  { x: 88, y: 48, label: 'PostgreSQL' },
  { x: 58, y: 66, label: 'Docker' },
  { x: 24, y: 72, label: 'Azure' },
] as const

const networkLinks = [
  [0, 1],
  [1, 2],
  [2, 3],
  [2, 4],
  [4, 5],
  [3, 6],
  [1, 7],
  [7, 6],
] as const

const caseBlueprints = {
  'db-triggers-locking': {
    path: 'M10 18 H40 V32 H64 V32 H90 V54 H48 V58 H10 Z',
    blocks: [
      { x: 8, y: 12, w: 28, h: 13, label: 'Hot rows' },
      { x: 36, y: 26, w: 24, h: 13, label: 'Trigger path' },
      { x: 62, y: 26, w: 28, h: 13, label: 'Lock waits' },
      { x: 40, y: 48, w: 50, h: 13, label: 'Stabilized write path' },
    ],
  },
  'iot-sqs-lambda-batch': {
    path: 'M10 18 H30 V18 H50 V30 H70 V30 H90 V52 H66 V58 H10 Z',
    blocks: [
      { x: 8, y: 12, w: 20, h: 13, label: 'IoT' },
      { x: 30, y: 12, w: 20, h: 13, label: 'SQS' },
      { x: 52, y: 24, w: 18, h: 13, label: 'Lambda' },
      { x: 72, y: 24, w: 18, h: 13, label: 'API/S3' },
      { x: 44, y: 48, w: 46, h: 13, label: 'Batch success' },
    ],
  },
  'nestjs-platform-apis': {
    path: 'M10 18 H36 V18 H36 V34 H62 V34 H88 V18 H88 V54 H44 V58 H10 Z',
    blocks: [
      { x: 8, y: 12, w: 24, h: 13, label: 'Clients' },
      { x: 34, y: 12, w: 24, h: 13, label: 'Auth' },
      { x: 60, y: 28, w: 24, h: 13, label: 'Modules' },
      { x: 60, y: 12, w: 24, h: 13, label: 'Contracts' },
      { x: 38, y: 48, w: 46, h: 13, label: 'Safe rollout' },
    ],
  },
} as const

const sectionNav = [
  { id: 'hero', label: 'Home' },
  { id: 'stack', label: 'Stack' },
  { id: 'flows', label: 'Flows' },
  { id: 'work', label: 'Work' },
  { id: 'experience', label: 'Experience' },
  { id: 'contact', label: 'Contact' },
] as const

function App() {
  const reduceMotion = useReducedMotion()
  const { scrollYProgress } = useScroll()
  const heroScale = useTransform(scrollYProgress, [0, 0.2], [1, 0.86])
  const heroOpacity = useTransform(scrollYProgress, [0, 0.18], [1, 0.35])
  const deviceY = useTransform(scrollYProgress, [0.15, 0.5], [90, -10])
  const deviceRotate = useTransform(scrollYProgress, [0.15, 0.5], [8, 0])

  const lockingReduction = 80
  const perfFrom = 30
  const perfTo = 90
  const dbImprovement = 60
  const [activeCaseSlug, setActiveCaseSlug] = useState<string>(site.selectedWork[0]?.slug ?? '')
  const [activeSection, setActiveSection] = useState<string>('hero')
  const activeCase = useMemo(
    () => site.selectedWork.find((cs) => cs.slug === activeCaseSlug) ?? site.selectedWork[0],
    [activeCaseSlug],
  )

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)
        if (visible[0]?.target.id) {
          setActiveSection(visible[0].target.id)
        }
      },
      {
        threshold: [0.35, 0.6],
        rootMargin: '-20% 0px -55% 0px',
      },
    )

    sectionNav.forEach((item) => {
      const node = document.getElementById(item.id)
      if (node) observer.observe(node)
    })

    return () => observer.disconnect()
  }, [])

  const flowIconFor = (label: string) => {
    switch (label) {
      case 'IoT Device':
        return FaMobileScreenButton
      case 'AWS IoT Core':
        return FaWifi
      case 'Amazon SQS':
        return FaInbox
      case 'AWS Lambda':
        return FaBoltLightning
      case 'S3 / API':
        return FaServer
      case 'Client App':
        return FaMobileScreenButton
      case 'Azure App Service':
        return FaMicrosoft
      case 'Docker Service':
        return SiDocker
      case 'API Layer':
        return FaServer
      case 'PostgreSQL':
        return SiPostgresql
      default:
        return FaServer
    }
  }

  return (
    <>
      <a href="#story" className="skip-link">
        Skip to content
      </a>
      <div className="page-bg" aria-hidden />
      <div className="redlines-bg" aria-hidden />
      <div className="network-bg" aria-hidden>
        <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="network-svg">
          {networkLinks.map(([from, to], index) => (
            <motion.line
              key={`${from}-${to}`}
              x1={networkNodes[from].x}
              y1={networkNodes[from].y}
              x2={networkNodes[to].x}
              y2={networkNodes[to].y}
              className="network-line"
              initial={{ pathLength: 0, opacity: 0.2 }}
              animate={
                reduceMotion
                  ? { pathLength: 1, opacity: 0.22 }
                  : { pathLength: [0.2, 1, 0.2], opacity: [0.18, 0.45, 0.18] }
              }
              transition={{
                duration: 4.6,
                delay: index * 0.18,
                repeat: reduceMotion ? 0 : Number.POSITIVE_INFINITY,
                ease: 'easeInOut',
              }}
            />
          ))}
          {networkNodes.map((node, index) => (
            <motion.g
              key={node.label}
              animate={reduceMotion ? { opacity: 0.7 } : { opacity: [0.55, 1, 0.55] }}
              transition={{
                duration: 3.2,
                delay: index * 0.14,
                repeat: reduceMotion ? 0 : Number.POSITIVE_INFINITY,
                ease: 'easeInOut',
              }}
            >
              <circle cx={node.x} cy={node.y} r="0.9" className="network-node-glow" />
              <circle cx={node.x} cy={node.y} r="0.36" className="network-node" />
            </motion.g>
          ))}
        </svg>
      </div>
      <main id="top" className="layout dashboard">
        <motion.section
          id="hero"
          className="apple-hero"
          style={{ scale: heroScale, opacity: heroOpacity }}
        >
          <div className="hero-copy">
            <p className="eyebrow">FULL-STACK ENGINEER · {site.yearsExperience}+ YEARS</p>
            <h1>Build faster. Scale smarter.</h1>
            <p className="hero-role">{site.name} · {site.role}</p>
            <p className="hero-lead">{site.headline}</p>
            <p className="tagline">"{site.tagline}"</p>
            <div className="hero-actions">
              <a className="btn btn-primary" href={`mailto:${site.email}`}>
                Available for senior roles
              </a>
              {site.links.resume ? (
                <a className="btn btn-ghost" href={site.links.resume}>
                  Resume
                </a>
              ) : null}
              <a className="btn btn-outline" href={site.links.linkedin} target="_blank" rel="noreferrer">
                LinkedIn
              </a>
            </div>
          </div>
          <motion.div
            className="hero-device-shell"
            style={{ y: deviceY, rotateX: deviceRotate }}
          >
            <div className="hero-device-notch" />
            <div className="hero-device-screen">
              <p>Realtime Platform Health</p>
              <h3>99.97%</h3>
              <div className="hero-device-bars">
                <span />
                <span />
                <span />
                <span />
              </div>
            </div>
          </motion.div>
        </motion.section>

        <motion.section
          id="best-at"
          className="card section-surface section-tilt"
          variants={fadeInUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
        >
          <div className="visual-header">
            <h2>What I’m best at</h2>
            <p>Fast shipping, clean architecture, and performance under real production constraints.</p>
          </div>
          <ul className="bestat-grid" aria-label="Best at">
            {site.bestAt.map((item) => (
              <li key={item} className="bestat-chip">
                {item}
              </li>
            ))}
          </ul>
          <div className="bestat-subgrid" aria-label="Leadership signals">
            {site.leadershipSignals.map((item) => (
              <div key={item} className="bestat-signal">
                {item}
              </div>
            ))}
          </div>
          {site.certifications.length ? (
            <div className="cert-row" aria-label="Certifications">
              <p className="impact-label">Certifications</p>
              <div className="cert-pills">
                {site.certifications.map((c) => (
                  <span key={c}>{c}</span>
                ))}
              </div>
            </div>
          ) : null}
        </motion.section>

        <motion.section
          id="stack"
          className="card visual-stack section-surface section-tilt"
          variants={fadeInUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
        >
          <div className="visual-header">
            <h2>Tools I work with</h2>
            <p>Core technologies I use to ship reliable, scalable systems.</p>
          </div>
          <div className="tech-strip" aria-label="Tech stack">
            {techStrip.map(({ label, Icon, color }) => (
              <div key={label} className="tech-item">
                <Icon style={{ color }} aria-hidden />
                <span>{label}</span>
              </div>
            ))}
          </div>
          <div className="ts-why" aria-label="Why TypeScript">
            <div className="ts-why-head">
              <h3>Why TypeScript over JavaScript</h3>
              <p>Prevent runtime classes of bugs with explicit contracts, safer refactors, and reliable service boundaries.</p>
            </div>
            <div className="ts-why-grid">
              <div className="codebox">
                <p className="codebox-title">JavaScript (implicit shape risk)</p>
                <pre>
{`function handleEvent(event) {
  if (event.type === 'BATCH') return event.records.length;
  return event.url.toLowerCase();
}

handleEvent({ type: 'HTTP', records: [] }) // 🚨 crash`}
                </pre>
                <div className="codebox-error">TypeError: Cannot read properties of undefined (reading 'toLowerCase')</div>
              </div>
              <div className="codebox">
                <p className="codebox-title">TypeScript (discriminated union safety)</p>
                <pre>
{`type Event =
  | { type: 'BATCH'; records: { id: string }[] }
  | { type: 'HTTP'; url: string };

function handleEvent(event: Event) {
  if (event.type === 'BATCH') return event.records.length;
  return event.url.toLowerCase();
}

handleEvent({ type: 'HTTP', records: [] }) // ❌ compile error`}
                </pre>
                <div className="codebox-error">TS2353: Object literal may only specify known properties.</div>
              </div>
            </div>
          </div>
          <div className="visual-grid">
            <div className="tech-orbit">
              <motion.div
                className="tech-core"
                animate={reduceMotion ? {} : { scale: [1, 1.05, 1] }}
                transition={
                  reduceMotion ? {} : { duration: 2.8, repeat: Number.POSITIVE_INFINITY }
                }
              >
                Performance
              </motion.div>
              {site.techOrbit.map((label, idx) => {
                const Icon = iconMap[label]
                const iconColor = techColorByLabel[label] ?? 'var(--accent)'
                const angle = (idx / site.techOrbit.length) * Math.PI * 2
                const x = Math.cos(angle) * 122
                const y = Math.sin(angle) * 122
                return (
                  <motion.div
                    key={label}
                    className="orbit-icon"
                    initial={{ opacity: 0, scale: 0.4, x: 0, y: 0 }}
                    whileInView={{ opacity: 1, scale: 1, x, y }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.07, type: 'spring', stiffness: 130 }}
                  >
                    <Icon style={{ color: iconColor }} />
                    <span>{label}</span>
                  </motion.div>
                )
              })}
            </div>

            <div className="devices">
              <motion.article
                className="device laptop"
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <header>
                  <span />
                  <span />
                  <span />
                </header>
                <h3>Platform Dashboard</h3>
                <ul>
                  {site.deviceStats.laptop.map((metric) => (
                    <li key={metric.label}>
                      <p>{metric.label}</p>
                      <strong>{metric.value}</strong>
                      <em>{metric.trend}</em>
                    </li>
                  ))}
                </ul>
              </motion.article>
              <motion.article
                className="device phone"
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <h3>Mobile Ops</h3>
                <ul>
                  {site.deviceStats.phone.map((metric) => (
                    <li key={metric.label}>
                      <p>{metric.label}</p>
                      <strong>{metric.value}</strong>
                    </li>
                  ))}
                </ul>
              </motion.article>
            </div>
          </div>
        </motion.section>

        <motion.section
          id="flows"
          className="card section-surface section-tilt architecture-flow"
          variants={fadeInUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
        >
          <div className="visual-header">
            <h2>Service communication flows</h2>
            <p>
              Real platform patterns I have worked on, visualized as cloud workflows with
              success pulses and service-to-service communication.
            </p>
          </div>

          <div className="flow-grid">
            {site.architectureFlows.map((flow, flowIndex) => (
              <motion.article
                key={flow.title}
                className="flow-card"
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ delay: flowIndex * 0.08 }}
              >
                <div className="flow-copy">
                  <h3>{flow.title}</h3>
                  <p>{flow.subtitle}</p>
                </div>

                <div className="flow-diagram" aria-label={flow.title}>
                  <svg viewBox="0 0 100 34" className="flow-svg">
                    {flow.nodes.slice(0, -1).map((_, index) => {
                      const x1 = 10 + index * 20
                      const x2 = 30 + index * 20
                      return (
                        <g key={index}>
                          <line
                            x1={x1}
                            y1="17"
                            x2={x2}
                            y2="17"
                            className="flow-line"
                          />
                          <motion.circle
                            r="1.25"
                            cy="17"
                            className="flow-pulse"
                            initial={{ cx: x1 }}
                            animate={reduceMotion ? {} : { cx: [x1, x2] }}
                            transition={{
                              duration: 1.8,
                              ease: "linear",
                              repeat: reduceMotion ? 0 : Number.POSITIVE_INFINITY,
                              delay: index * 0.35 + flowIndex * 0.25,
                            }}
                          />
                        </g>
                      )
                    })}
                  </svg>

                  <div className="flow-node-row">
                    {flow.nodes.map((node, index) => {
                      const Icon = flowIconFor(node)
                      const isLast = index === flow.nodes.length - 1
                      return (
                      <motion.div
                        key={node}
                        className="flow-node"
                        animate={
                          reduceMotion ? {} : { y: [0, -2, 0], opacity: [0.88, 1, 0.88] }
                        }
                        transition={
                          reduceMotion
                            ? {}
                            : {
                                duration: 2.6,
                                repeat: Number.POSITIVE_INFINITY,
                                delay: index * 0.18 + flowIndex * 0.22,
                              }
                        }
                      >
                        <span className="flow-node-dot" />
                        <span className="flow-node-icon" aria-hidden>
                          <Icon />
                        </span>
                        <span>{node}</span>
                        {isLast && !reduceMotion ? (
                          <motion.span
                            className="flow-success"
                            aria-hidden
                            animate={{ opacity: [0, 1, 0], scale: [0.9, 1, 0.9] }}
                            transition={{
                              duration: 1.2,
                              repeat: Number.POSITIVE_INFINITY,
                              repeatDelay: 1.1,
                              delay: 0.6 + flowIndex * 0.2,
                            }}
                          >
                            <FaCheck />
                          </motion.span>
                        ) : null}
                      </motion.div>
                      )
                    })}
                  </div>
                </div>

                <ul className="flow-outcomes">
                  {flow.outcomes.map((outcome) => (
                    <li key={outcome}>{outcome}</li>
                  ))}
                </ul>
              </motion.article>
            ))}
          </div>
        </motion.section>

        <motion.section
          className="apple-banner card"
          variants={fadeInUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
        >
          <p>Performance engineering for products that cannot fail at scale.</p>
        </motion.section>

        <motion.section
          id="impact"
          className="impact"
          variants={fadeInUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
        >
          <div className="impact-head">
            <h2>Impact, visualized</h2>
            <p>Measured engineering outcomes from production-focused work.</p>
          </div>

          <div className="impact-grid">
            <motion.article
              className="impact-card impact-ring"
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <p className="impact-label">DB locking reduction</p>
              <div className="ring-wrap" aria-label="DB locking reduction gauge">
                {(() => {
                  const r = 46
                  const c = 2 * Math.PI * r
                  const target = c * (1 - lockingReduction / 100)
                  return (
                    <svg viewBox="0 0 120 120" className="ring">
                      <circle className="ring-bg" cx="60" cy="60" r={r} />
                      <motion.circle
                        className="ring-fg"
                        cx="60"
                        cy="60"
                        r={r}
                        strokeDasharray={c}
                        initial={{ strokeDashoffset: c }}
                        whileInView={{ strokeDashoffset: [c, target, c] }}
                        viewport={{ once: false, amount: 0.4 }}
                        transition={{
                          duration: 3.6,
                          ease: 'easeInOut',
                          repeat: Number.POSITIVE_INFINITY,
                          repeatDelay: 0.25,
                        }}
                      />
                    </svg>
                  )
                })()}
                <div className="ring-center">
                  <div className="ring-number">{lockingReduction}%</div>
                </div>
              </div>
              <div className="impact-foot">
                <span>Lock amplification eliminated</span>
                <span>Write throughput stabilized</span>
              </div>
            </motion.article>

            <motion.article
              className="impact-card impact-bars"
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.06 }}
            >
              <p className="impact-label">App performance lift</p>
              <div className="lift">
                <div className="lift-row">
                  <span>Before</span>
                  <strong>{perfFrom}%</strong>
                </div>
                <div className="lift-row">
                  <span>After</span>
                  <strong>{perfTo}%</strong>
                </div>
                <div className="lift-track" aria-label="Performance lift bar">
                  <motion.div
                    className="lift-fill"
                    initial={{ width: `${perfFrom}%` }}
                    whileInView={{ width: `${perfTo}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.1, ease: 'easeOut' }}
                  />
                  <div className="lift-ticks">
                    <span />
                    <span />
                    <span />
                    <span />
                  </div>
                </div>
              </div>
              <div className="impact-foot">
                <span>Blocked queries removed</span>
                <span>Hot paths refactored</span>
              </div>
            </motion.article>

            <motion.article
              className="impact-card impact-timeline"
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.12 }}
            >
              <p className="impact-label">Industry experience</p>
              <div className="timeline-strip" aria-label="Experience timeline">
                <motion.div
                  className="timeline-glow"
                  animate={{ x: ['-20%', '120%'] }}
                  transition={{
                    duration: 3.8,
                    repeat: reduceMotion ? 0 : Number.POSITIVE_INFINITY,
                    ease: 'linear',
                  }}
                />
                <div className="timeline-track" />
                <div className="timeline-marks">
                  {Array.from({ length: 8 }).map((_, i) => (
                    <span
                      key={i}
                      className={i < site.yearsExperience ? 'timeline-mark-active' : undefined}
                    />
                  ))}
                </div>
              </div>
              <div className="timeline-number">
                <strong>{site.yearsExperience}+</strong>
                <span>years shipping production systems</span>
              </div>
              <div className="impact-foot">
                <span>Full-stack delivery</span>
                <span>Cloud + data performance</span>
              </div>
            </motion.article>

            <motion.article
              className="impact-card impact-signal"
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.18 }}
            >
              <p className="impact-label">DB response improvement</p>
              <div className="signal-top">
                <div>
                  <div className="signal-number">{dbImprovement}%+</div>
                  <div className="signal-sub">faster average DB response</div>
                </div>
                <div className="signal-bars" aria-label="DB response animated bars">
                  {[32, 48, 40, 58, 46, 68, 56, 74].map((h, i) => (
                    <motion.span
                      key={i}
                      className="signal-bar"
                      initial={{ height: '18%' }}
                      animate={
                        reduceMotion
                          ? { height: `${h}%` }
                          : { height: [`${Math.max(18, h - 22)}%`, `${h}%`, `${Math.max(24, h - 10)}%`] }
                      }
                      transition={{
                        duration: 2.4,
                        delay: i * 0.12,
                        repeat: reduceMotion ? 0 : Number.POSITIVE_INFINITY,
                        repeatType: 'reverse',
                        ease: 'easeInOut',
                      }}
                    />
                  ))}
                </div>
              </div>
              <div className="impact-foot">
                <span>N+1 removed</span>
                <span>Indexes added strategically</span>
                <span>Trigger analysis</span>
                <span>Stored procedure tuning</span>
                <span>Join optimization</span>
              </div>
            </motion.article>
          </div>
        </motion.section>

        <motion.section
          id="work"
          className="card section-surface section-tilt"
          variants={fadeInUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
        >
          <div className="visual-header">
            <h2>Selected work</h2>
            <p>Case studies with context, approach, and how the result was measured.</p>
          </div>

          <div className="case-layout">
            {site.selectedWork.map((cs) => {
              const blueprint =
                caseBlueprints[cs.slug as keyof typeof caseBlueprints] ??
                caseBlueprints['db-triggers-locking']

              return (
                <div key={cs.slug} className="case-row">
                  <div className="case-blueprint-col" aria-hidden>
                    <div className="case-blueprint">
                      <div className="case-blueprint-title">{cs.title}</div>
                      <div className="case-blueprint-subtitle">{cs.measuredBy}</div>
                      <svg
                        className="blueprint-svg"
                        viewBox="0 0 100 70"
                        role="img"
                        aria-label="Case study blueprint diagram"
                      >
                        <path className="blueprint-path" d={blueprint.path} />
                        {reduceMotion ? null : (
                          <motion.circle
                            key={cs.slug}
                            r="1.8"
                            className="blueprint-dot"
                            initial={{ cx: 10, cy: 18 }}
                            animate={{ offsetDistance: ['0%', '100%'] }}
                            transition={{
                              duration: 5.2,
                              repeat: Number.POSITIVE_INFINITY,
                              ease: 'linear',
                            }}
                            style={{ offsetPath: `path("${blueprint.path}")` }}
                          />
                        )}
                        <g className="blueprint-nodes">
                          {blueprint.blocks.map((block) => (
                            <rect
                              key={block.label}
                              x={block.x}
                              y={block.y}
                              width={block.w}
                              height={block.h}
                              rx="4"
                            />
                          ))}
                        </g>
                        <g className="blueprint-labels">
                          {blueprint.blocks.map((block) => (
                            <text key={block.label} x={block.x + 2} y={block.y + block.h / 2 + 1}>
                              {block.label}
                            </text>
                          ))}
                        </g>
                      </svg>
                    </div>
                  </div>
                  <article
                    className={`case-card${activeCase.slug === cs.slug ? ' case-card-active' : ''}`}
                    onMouseEnter={() => setActiveCaseSlug(cs.slug)}
                    onFocus={() => setActiveCaseSlug(cs.slug)}
                    tabIndex={0}
                  >
                  <h3>{cs.title}</h3>
                  <p className="case-context">{cs.context}</p>
                  <div className="case-inline-blueprint" aria-hidden>
                    <svg className="case-inline-svg" viewBox="0 0 100 28">
                      <path
                        className="case-inline-path"
                        d={
                          (
                            caseBlueprints[cs.slug as keyof typeof caseBlueprints] ??
                            caseBlueprints['db-triggers-locking']
                          ).path
                        }
                      />
                      {!reduceMotion ? (
                        <motion.circle
                          key={cs.slug}
                          r="1.3"
                          className="case-inline-dot"
                          animate={{ offsetDistance: ['0%', '100%'] }}
                          transition={{ duration: 4.4, repeat: Number.POSITIVE_INFINITY, ease: 'linear' }}
                          style={{
                            offsetPath: `path("${
                              (
                                caseBlueprints[cs.slug as keyof typeof caseBlueprints] ??
                                caseBlueprints['db-triggers-locking']
                              ).path
                            }")`,
                          }}
                        />
                      ) : null}
                    </svg>
                  </div>
                  <div className="case-split">
                    <div>
                      <p className="experience-label">Problem</p>
                      <p className="case-text">{cs.problem}</p>
                    </div>
                    <div>
                      <p className="experience-label">Measured by</p>
                      <p className="case-text">{cs.measuredBy}</p>
                    </div>
                  </div>
                  <div className="case-split">
                    <div>
                      <p className="experience-label">Approach</p>
                      <ul className="case-bullets">
                        {cs.approach.map((b) => (
                          <li key={b}>{b}</li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <p className="experience-label">Result</p>
                      <ul className="case-bullets">
                        {cs.result.map((b) => (
                          <li key={b}>{b}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <ul className="case-stack" aria-label="Stack">
                    {cs.stack.map((s) => (
                      <li key={s}>{s}</li>
                    ))}
                  </ul>
                  <div className="case-links" aria-label="Proof links">
                    {cs.links.writeup ? (
                      <a href={cs.links.writeup} target="_blank" rel="noreferrer">
                        Write-up
                      </a>
                    ) : null}
                    {cs.links.repo ? (
                      <a href={cs.links.repo} target="_blank" rel="noreferrer">
                        Code
                      </a>
                    ) : null}
                    {!cs.links.writeup && !cs.links.repo ? (
                      <span className="case-links-muted">
                        Proof links available on request
                      </span>
                    ) : null}
                  </div>
                  </article>
                </div>
              )
            })}
          </div>
        </motion.section>

        <motion.section
          id="story"
          className="card spotlight apple-story"
          variants={fadeInUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.5 }}
        >
          <p className="eyebrow">SIGNATURE ENGINEERING WIN</p>
          <h2>{site.caseStudy.title}</h2>
          <p>{site.caseStudy.challenge}</p>
          <ul>
            {site.caseStudy.actions.map((action) => (
              <li key={action}>{action}</li>
            ))}
          </ul>
          <p className="outcome">{site.caseStudy.outcome}</p>
        </motion.section>

        <motion.section
          id="capabilities"
          className="card section-surface section-tilt"
          variants={fadeInUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
        >
          <h2>Core capabilities</h2>
          <div className="capability-grid">
            {site.capabilities.map((capability, index) => {
              const Icon = capabilityIconMap[capability.key]
              const iconColor = capabilityColorMap[capability.key]
              return (
                <motion.article
                  key={capability.key}
                  className="capability-card"
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{ delay: index * 0.06 }}
                >
                  <div className="capability-top">
                    <motion.div
                      className="capability-icon-wrap"
                      animate={{ rotate: [0, 360] }}
                      transition={{
                        duration: 18,
                        repeat: reduceMotion ? 0 : Number.POSITIVE_INFINITY,
                        ease: 'linear',
                      }}
                    >
                      <div className="capability-icon-ring" />
                      <div className="capability-icon" style={{ color: iconColor }}>
                        <Icon />
                      </div>
                    </motion.div>
                    <div>
                      <h3>{capability.title}</h3>
                      <p className="capability-summary">{capability.summary}</p>
                    </div>
                  </div>
                  <ul className="capability-pills">
                    {capability.details.map((detail) => (
                      <li key={detail}>{detail}</li>
                    ))}
                  </ul>
                </motion.article>
              )
            })}
          </div>
        </motion.section>

        <motion.section
          id="experience"
          className="card section-surface section-tilt"
          variants={fadeInUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
        >
          <h2>Experience</h2>
          <p className="experience-intro">
            Engineering roles presented as systems blueprints: architecture ownership, delivery scope,
            and measurable product impact.
          </p>
          <div className="experience-blueprint">
            {site.experience.map((job, index) => {
              const Icon = experienceIconMap[job.key]
              const iconColor = experienceColorMap[job.key]
              return (
                <motion.article
                  key={job.company + job.period}
                  className="experience-node"
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{ delay: index * 0.08 }}
                >
                  <div className="experience-node-top">
                    <motion.div
                      className="experience-emblem"
                      animate={{ rotate: [0, 360] }}
                      transition={{
                        duration: 24,
                        repeat: reduceMotion ? 0 : Number.POSITIVE_INFINITY,
                        ease: 'linear',
                      }}
                    >
                      <span className="experience-emblem-ring" />
                      <span className="experience-emblem-core" style={{ color: iconColor }}>
                        <Icon />
                      </span>
                    </motion.div>
                    <div className="experience-heading">
                      <p className="period">{job.period}</p>
                      <h3>{job.role}</h3>
                      <p className="company">{job.company}</p>
                      <p className="experience-summary">{job.summary}</p>
                    </div>
                  </div>

                  <div className="experience-rail" aria-hidden>
                    <span />
                    <span />
                    <span />
                  </div>

                  <div className="experience-columns">
                    <div>
                      <p className="experience-label">System blueprint</p>
                      <ul className="experience-architecture">
                        {job.architecture.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <p className="experience-label">Impact signals</p>
                      <ul className="experience-impact">
                        {job.impact.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <ul className="experience-highlights">
                    {job.highlights.map((bullet) => (
                      <li key={bullet}>{bullet}</li>
                    ))}
                  </ul>
                </motion.article>
              )
            })}
          </div>
        </motion.section>

        <motion.section
          id="skills"
          className="card section-surface section-tilt"
          variants={fadeInUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
        >
          <h2>Skill matrix</h2>
          <p className="matrix-intro">A product-grade stack tuned for speed, reliability, and scale.</p>
          <div className="matrix-showcase">
            {site.skillMatrix.map((block, index) => {
              const Icon = skillIconMap[block.group]
              const iconColor = skillColorMap[block.group]
              return (
                <motion.article
                  key={block.group}
                  className="matrix-panel"
                  initial={{ opacity: 0, y: 26 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{ delay: index * 0.08 }}
                >
                  <div className="matrix-panel-top">
                    <motion.div
                      className="matrix-icon-wrap"
                      animate={{ rotate: [0, 360] }}
                      transition={{
                        duration: 22,
                        repeat: reduceMotion ? 0 : Number.POSITIVE_INFINITY,
                        ease: 'linear',
                      }}
                    >
                      <span className="matrix-icon-ring" />
                      <span className="matrix-icon-core" style={{ color: iconColor }}>
                        <Icon />
                      </span>
                    </motion.div>
                    <div>
                      <h3>{block.group}</h3>
                      <p>Production-focused toolkit with measurable delivery impact.</p>
                    </div>
                  </div>
                  <ul className="matrix-chip-grid">
                    {block.items.map((item) => (
                      <motion.li key={item} whileHover={{ y: -3, scale: 1.03 }}>
                        {item}
                      </motion.li>
                    ))}
                  </ul>
                </motion.article>
              )
            })}
          </div>
        </motion.section>

        <motion.section
          id="contact"
          className="card contact-card section-surface section-tilt"
          variants={fadeInUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
        >
          <h2>Let’s build something at scale.</h2>
          <p>
            Based in {site.location}. I build secure, scalable systems and polished products
            that perform under pressure.
          </p>
          <div className="hero-actions">
            <a className="btn btn-primary" href={`mailto:${site.email}`}>
              {site.email}
            </a>
            <a className="btn btn-ghost" href={site.links.github} target="_blank" rel="noreferrer">
              GitHub
            </a>
          </div>
        </motion.section>
      </main>
      <motion.nav
        className="bottom-progress-nav"
        aria-label="Section navigation"
        initial={{ y: 24, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.45, ease: 'easeOut' }}
      >
        <div className="bottom-progress-track" aria-hidden>
          <motion.span className="bottom-progress-fill" style={{ scaleX: scrollYProgress }} />
        </div>
        <div className="bottom-progress-links">
          {sectionNav.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={activeSection === item.id ? 'bottom-progress-link active' : 'bottom-progress-link'}
            >
              {item.label}
            </a>
          ))}
        </div>
      </motion.nav>
    </>
  )
}

export default App
