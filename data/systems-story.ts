export type SystemsStoryChapter = {
  id: string
  phase: string
  title: string
  body: string
  metric: string
  metricLabel: string
  metricNumeric?: number
  metricSuffix?: string
  architecture: string[]
  impact: string
}

export const systemsStoryChapters: SystemsStoryChapter[] = [
  {
    id: 'distributed',
    phase: '01',
    title: 'Distributed by design',
    body: 'Event-driven pipelines, queue-backed workers, and idempotent handlers — built to absorb spikes without dropping data.',
    metric: '10M+',
    metricLabel: 'events / day',
    metricNumeric: 10,
    metricSuffix: 'M+',
    architecture: ['Producers', 'Kafka', 'Workers', 'DLQ'],
    impact: 'Zero data-loss incidents across peak traffic windows.',
  },
  {
    id: 'performance',
    phase: '02',
    title: 'Performance at scale',
    body: 'Query tuning, connection pooling, and strategic caching that turn slow endpoints into sub-second responses under load.',
    metric: '78%',
    metricLabel: 'latency reduction',
    metricNumeric: 78,
    metricSuffix: '%',
    architecture: ['CDN', 'API Gateway', 'Redis', 'PostgreSQL'],
    impact: 'p95 dropped from 1.9s to 420ms on high-traffic APIs.',
  },
  {
    id: 'reliability',
    phase: '03',
    title: 'Production reliability',
    body: 'Health checks, observability, and incident runbooks that keep distributed services running when it matters most.',
    metric: '99.95%',
    metricLabel: 'uptime',
    metricNumeric: 99.95,
    metricSuffix: '%',
    architecture: ['Health Checks', 'Metrics', 'Alerts', 'Runbooks'],
    impact: 'MTTR reduced from 45 min to 8 min with proactive alerting.',
  },
]

export const heroPanelMetrics = [
  { label: 'p95 latency', value: '420ms' },
  { label: 'Events / day', value: '10M+' },
  { label: 'Uptime', value: '99.95%' },
]

export const heroFocusCardIds = ['events', 'api', 'database', 'cache'] as const

export const heroTechLine = ['Next.js', 'TypeScript', 'NestJS', 'PostgreSQL', 'Redis', 'AWS']

export const fullTechStack = [
  'Next.js',
  'React',
  'TypeScript',
  'NestJS',
  'Node.js',
  'PostgreSQL',
  'Redis',
  'Prisma',
  'Docker',
  'AWS',
  'Kafka',
  'BullMQ',
  'WebSockets',
  'GraphQL',
  'Tailwind CSS',
]
