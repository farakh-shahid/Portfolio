export type CommandCenterCard = {
  id: string
  title: string
  metric: string
  flow: string
  architecture: string[]
  technologies: string[]
  impact: string
  before: { label: string; value: string }
  after: { label: string; value: string }
  accent: 'emerald' | 'blue' | 'violet' | 'amber' | 'cyan' | 'rose'
}

export const commandCenterCards: CommandCenterCard[] = [
  {
    id: 'events',
    title: 'Event Processing',
    metric: '10M+ Events/Day',
    flow: 'Kafka → Queue → Workers',
    architecture: ['Producers', 'Kafka Cluster', 'Consumer Groups', 'Worker Pool', 'Dead Letter Queue'],
    technologies: ['Kafka', 'BullMQ', 'Node.js', 'Redis', 'AWS SQS'],
    impact: 'Processed high-volume IoT and commerce events with zero data-loss incidents across peak traffic windows.',
    before: { label: 'Throughput ceiling', value: '2.1M/day' },
    after: { label: 'Sustained throughput', value: '10M+/day' },
    accent: 'violet',
  },
  {
    id: 'api',
    title: 'API Performance',
    metric: '420ms p95',
    flow: 'Down from 1.9s',
    architecture: ['CDN Edge', 'API Gateway', 'Rate Limiter', 'NestJS Services', 'Connection Pool'],
    technologies: ['NestJS', 'Redis', 'PostgreSQL', 'Prisma', 'CloudWatch'],
    impact: 'Reduced p95 latency by 78% through query optimization, caching layers, and connection pool tuning.',
    before: { label: 'p95 latency', value: '1.9s' },
    after: { label: 'p95 latency', value: '420ms' },
    accent: 'emerald',
  },
  {
    id: 'database',
    title: 'Database Optimization',
    metric: '78% Lock Contention Reduction',
    flow: 'PostgreSQL + Prisma',
    architecture: ['Read Replicas', 'Write Path', 'Index Strategy', 'Advisory Locks', 'Query Planner'],
    technologies: ['PostgreSQL', 'Prisma', 'pgBouncer', 'EXPLAIN ANALYZE', 'RDS'],
    impact: 'Eliminated write-path bottlenecks on high-traffic tables through index redesign and lock scope reduction.',
    before: { label: 'Lock wait time', value: '340ms avg' },
    after: { label: 'Lock wait time', value: '75ms avg' },
    accent: 'blue',
  },
  {
    id: 'multitenant',
    title: 'Multi-Tenant Architecture',
    metric: '100+ Organizations',
    flow: 'Secure Tenant Isolation',
    architecture: ['Tenant Resolver', 'Row-Level Security', 'Schema Isolation', 'Auth Gateway', 'Audit Log'],
    technologies: ['NestJS', 'PostgreSQL RLS', 'Cognito', 'JWT', 'Prisma Middleware'],
    impact: 'Shipped a B2B platform serving 100+ orgs with strict data isolation and per-tenant rate limits.',
    before: { label: 'Tenant onboarding', value: '2 weeks' },
    after: { label: 'Tenant onboarding', value: 'Same day' },
    accent: 'cyan',
  },
  {
    id: 'cache',
    title: 'Redis Cache Layer',
    metric: '85% Cache Hit Ratio',
    flow: 'Sub-100ms Responses',
    architecture: ['Cache-Aside Pattern', 'Redis Cluster', 'TTL Strategy', 'Invalidation Bus', 'Warm Paths'],
    technologies: ['Redis', 'BullMQ', 'NestJS', 'RTK Query', 'CloudFront'],
    impact: 'Cut read-path latency to sub-100ms for hot endpoints through strategic cache warming and invalidation.',
    before: { label: 'Cache hit ratio', value: '42%' },
    after: { label: 'Cache hit ratio', value: '85%' },
    accent: 'amber',
  },
  {
    id: 'monitoring',
    title: 'Real-Time Monitoring',
    metric: '99.95% Uptime',
    flow: 'Production Reliability',
    architecture: ['Health Checks', 'Alert Pipeline', 'Metrics Store', 'Dashboard', 'Incident Runbooks'],
    technologies: ['CloudWatch', 'Grafana', 'WebSockets', 'PagerDuty', 'Docker'],
    impact: 'Maintained 99.95% uptime across distributed services with proactive alerting and auto-recovery.',
    before: { label: 'MTTR', value: '45 min' },
    after: { label: 'MTTR', value: '8 min' },
    accent: 'rose',
  },
]

export const heroTechStack = [
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
]

export const architecturePipeline = [
  'Client',
  'API Gateway',
  'Redis',
  'Queue',
  'Workers',
  'PostgreSQL',
]
