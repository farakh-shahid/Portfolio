export const premiumProfile = {
  name: 'Muhammad Farrukh',
  title: 'Senior Full-Stack Engineer',
  headline: 'Muhammad Farrukh — Senior Full-Stack Engineer.',
  subline:
    'Builds event-driven AWS systems, high-performance NestJS/Node backends, and refined React/Next.js interfaces.',
  email: 'farrukh.dev00@gmail.com',
  phone: '+92-316-8843648',
  phoneDisplay: '+92 316 8843648',
  linkedin: 'https://linkedin.com/in/farakh-shahid',
  yearsExperience: '6+',
}

export const premiumAbout =
  'Full-stack engineer focused on scalable, high-performance web apps — optimizing performance, cutting latency, and improving UX. Strong across the full cycle: JS/TS, React, Next.js, Node, NestJS, AWS, plus DevOps, Docker, and CI/CD.'

export const premiumSkills = [
  {
    group: 'Frontend',
    items: [
      'React',
      'Next.js',
      'Angular',
      'Vue',
      'Redux',
      'RTK Query',
      'React Query',
      'Redux Saga',
      'TypeScript',
      'Tailwind',
      'MUI',
      'Ant Design',
      'Styled Components',
      'RxJS',
      'Jest',
      'Cypress',
      'Gatsby',
    ],
  },
  {
    group: 'Backend',
    items: [
      'Node.js',
      'NestJS',
      'Express',
      'GraphQL (Apollo)',
      'REST',
      'Redis',
      'RabbitMQ',
      'Kafka',
      'JWT',
      'Microservices',
      'Docker',
      'CI/CD (Jenkins, GitHub Actions)',
    ],
  },
  {
    group: 'Cloud & Data',
    items: [
      'AWS (EC2, Lambda, S3, RDS, SQS, SNS, Cognito, IoT Core, Secrets Manager)',
      'GCP',
      'PostgreSQL',
      'MySQL',
      'MongoDB',
      'DynamoDB',
      'Prisma',
      'TypeORM',
      'Sequelize',
      'Stripe/PayPal',
    ],
  },
] as const

export type PremiumExperience = {
  role: string
  company: string
  location: string
  period: string
  outcome: string
  metrics: { value: string; label: string }[]
  stack: string[]
}

export const premiumExperience: PremiumExperience[] = [
  {
    role: 'Senior Software Engineer',
    company: 'Terrasmart',
    location: 'California (US)',
    period: '2024–Present',
    outcome:
      'AWS IoT Core + MQTT for real-time solar-site device comms; Redis caching & query optimization; AWS Cognito auth with MFA; RTK Query/React Query/Redux Saga reliability; CI/CD pipelines; AWS Secrets Manager.',
    metrics: [
      { value: '+20%', label: 'performance' },
      { value: '-15%', label: 'API failures' },
    ],
    stack: ['AWS IoT Core', 'MQTT', 'Redis', 'Cognito', 'RTK Query', 'CI/CD'],
  },
  {
    role: 'Senior Software Engineer',
    company: 'Greeka',
    location: 'Greece (Remote)',
    period: '2024',
    outcome:
      'Re-architected a ferry-booking platform from PHP to NestJS + TypeORM + PostgreSQL; RabbitMQ inter-service messaging; Stripe payments; JWT auth; responsive Next.js + Tailwind UI.',
    metrics: [{ value: '-30%', label: 'vulnerabilities' }],
    stack: ['NestJS', 'TypeORM', 'PostgreSQL', 'RabbitMQ', 'Stripe', 'Next.js'],
  },
  {
    role: 'Senior Software Engineer',
    company: 'Devsinc',
    location: 'San Francisco (US)',
    period: '2022–2024',
    outcome:
      'Microservices for a high-traffic e-commerce platform (Node.js); multi-tenant infra with load balancing + API gateway; AWS S3 + Cloudinary; Redis; MongoDB.',
    metrics: [
      { value: '+30%', label: 'interaction speed' },
      { value: '-12%', label: 'bounce rate' },
    ],
    stack: ['Node.js', 'Microservices', 'AWS S3', 'Redis', 'MongoDB', 'API Gateway'],
  },
  {
    role: 'Software Engineer',
    company: 'Bitnine Global',
    location: 'Vancouver (CA)',
    period: '2020–2022',
    outcome:
      "Built Bitnine's site in Next.js; full-stack React/Node/Express; REST + GraphQL APIs; reusable component library.",
    metrics: [
      { value: '+30%', label: 'load speed' },
      { value: '+30%', label: 'dev speed' },
    ],
    stack: ['Next.js', 'React', 'Node.js', 'Express', 'GraphQL', 'REST'],
  },
]

export const premiumProjects = [
  {
    name: 'Terrasmart',
    url: 'https://terrasmart.com',
    description:
      'React front-end + AWS IoT Core (MQTT) real-time comms; serverless AWS Lambda for device orchestration.',
    stack: ['Node', 'GraphQL', 'TypeScript', 'PostgreSQL', 'React', 'AWS'],
  },
  {
    name: 'Maple HR',
    url: 'https://maplehr.io',
    description:
      'REST APIs cutting admin overhead 25%; migrated Redux Thunk → RTK Query for predictable data flows.',
    stack: ['React', 'Node', 'PostgreSQL', 'MUI', 'Storybook', 'TypeScript', 'AWS S3'],
  },
  {
    name: 'Upmail',
    url: 'https://upmailsolutions.com',
    description: 'Dynamic multi-table builder for flexible reporting across complex datasets.',
    stack: ['TypeScript', 'React', 'Node', 'Express', 'AWS'],
  },
] as const

export const premiumNav = [
  { href: '#work', label: 'Work' },
  { href: '#experience', label: 'Experience' },
  { href: '#skills', label: 'Skills' },
  { href: '#contact', label: 'Contact' },
] as const
