export const editorialProfile = {
  name: 'Muhammad Farrukh',
  brand: 'M. Farrukh',
  title: 'Senior Full-Stack Engineer',
  email: 'farrukh.dev00@gmail.com',
  phone: '+923168843648',
  phoneDisplay: '+92 316 8843648',
  linkedin: 'https://linkedin.com/in/farakh-shahid',
  github: 'https://github.com/farakh-shahid',
  timezone: 'Remote · GMT+5',
  resumeUrl: '/resume/M.Farrukh-SSE.pdf',
  resumeFilename: 'M.Farrukh-SSE.pdf',
  contactSub:
    'Based in Pakistan · open to remote/global roles. I build secure, scalable systems and polished products that perform under pressure.',
}

export const editorialExperience = [
  {
    index: '01',
    role: 'Senior Full-Stack Engineer',
    company: 'TERRASMART',
    website: 'https://www.terrasmart.com/',
    when: 'Dec 2024 — Present',
    location: 'California, US · Remote',
    isCurrent: true,
    desc: 'Owned cloud-connected product delivery from discovery to production — IoT workflows, backend performance, and platform reliability.',
    tags: ['React', 'GraphQL', 'TypeScript', 'AWS IoT Core', 'MQTT', 'AWS Lambda', 'SQS/SNS', 'PostgreSQL', 'Redis'],
    impact: ['30% → 90% app performance', '60%+ DB response gain', 'Realtime device connectivity'],
    bullets: [
      'Configured AWS IoT Core communication for solar-site devices, improving device interaction, telemetry flow and data collection reliability.',
      'Improved application performance through Redis caching, query optimization, RTK Query, React Query and Redux Saga state workflows.',
      'Implemented AWS Cognito authentication, MFA, password policies and Secrets Manager handling for secure web and mobile access.',
      'Worked with MQTT commands for network-controller site management, improving synchronization between devices and platform services.',
    ],
    projects: ['TerraSmart PeakYield', 'AWS IoT workflows', 'Device management platform'],
  },
  {
    index: '02',
    role: 'Senior Software Engineer',
    company: 'GREEKA.COM',
    website: 'https://www.greeka.com/',
    when: 'Jul 2024 — Nov 2024',
    location: 'Greece · Remote',
    isCurrent: false,
    desc: 'Led backend platform work in NestJS and TypeScript — service design, REST APIs, and microservice-oriented architecture with maintainability and security as core constraints.',
    tags: ['NestJS', 'TypeScript', 'PostgreSQL', 'TypeORM', 'RabbitMQ', 'Stripe', 'JWT', 'Tailwind CSS'],
    impact: ['Microservices design', 'Auth + authorization', 'Scalable backend services'],
    bullets: [
      'Revamped ferry-booking workflows by migrating legacy PHP services into NestJS, TypeORM and PostgreSQL.',
      'Implemented RabbitMQ for inter-service communication, enabling reliable message handling across booking and payment services.',
      'Integrated Stripe payment flows and JWT-based security protocols, reducing authentication and authorization risk.',
      'Built responsive Next.js and Tailwind interfaces while using TypeScript decorators for validation, logging and authorization checks.',
    ],
    projects: ['Ferry booking system', 'Payment gateway integration', 'Booking microservices'],
  },
  {
    index: '03',
    role: 'Software Engineer',
    company: 'DEVSINC',
    website: 'https://www.devsinc.com/',
    when: 'May 2022 — Jun 2024',
    location: 'San Francisco, US',
    isCurrent: false,
    desc: 'Delivered frontend and backend features in a large engineering org, with strong emphasis on design execution and cross-team collaboration.',
    tags: ['React', 'Vue.js', 'Node.js', 'MongoDB', 'Redis', 'AWS S3', 'Cloudinary', 'API Gateway', 'Material UI'],
    impact: ['40+ engineer collaboration', 'Design-to-code ownership', 'Consistent UI delivery'],
    bullets: [
      'Designed and deployed microservice architecture for a high-traffic e-commerce platform using Node.js.',
      'Built dynamic React and Vue interfaces, improving interaction speed and reducing bounce across product workflows.',
      'Integrated AWS S3 and Cloudinary for scalable file handling and large media-processing use cases.',
      'Improved system performance with Redis caching, query optimization, TypeScript practices and multi-tenant infrastructure.',
    ],
    projects: ['E-commerce platform', 'Multi-tenant infrastructure', 'Design system delivery'],
  },
  {
    index: '04',
    role: 'Software Engineer',
    company: 'BITNINE GLOBAL INC.',
    website: 'https://bitnine.net/',
    when: 'Feb 2020 — May 2022',
    location: 'Vancouver, CA · Remote',
    isCurrent: false,
    desc: 'Built backend and frontend for graph-database tooling in the Apache AGE ecosystem — data-visualization products for exploring complex connected datasets.',
    tags: ['Next.js', 'React', 'Node.js', 'Express.js', 'GraphQL', 'REST APIs', 'Redux', 'React Query', 'Zustand'],
    impact: ['Graph data visualization', 'Full-stack ownership', 'Scalable API delivery'],
    bullets: [
      'Led development of Bitnine’s official website with Next.js, improving page-load performance and overall UX.',
      'Developed full-stack React, Node.js and Express applications with optimized APIs and reusable component systems.',
      'Spearheaded REST and GraphQL API work, improving data transfer and backend performance for graph-oriented tooling.',
      'Implemented state-management patterns with Redux, React Query and Zustand to improve maintainability across products.',
    ],
    projects: ['Bitnine website', 'Apache AGE tooling', 'Graph data applications'],
  },
] as const

export const editorialProjects = [
  {
    num: '001',
    title: ['Terra', 'smart'],
    italicPart: 1,
    url: 'https://www.terrasmart.com/',
    description: 'A real-time web platform speaking MQTT to solar hardware, backed by serverless Lambda processing.',
    stack: 'React · Node · GraphQL · TypeScript\nPostgreSQL · AWS S3 / Lambda / SQS',
  },
  {
    num: '002',
    title: ['Maple ', 'HR'],
    italicPart: 1,
    url: 'https://maplehr.io/',
    description: 'HR operations tooling — REST APIs that trimmed admin overhead by 25%, with a clean RTK Query data layer.',
    stack: 'React · Node · PostgreSQL\nMaterial UI · Storybook · AWS S3',
  },
  {
    num: '003',
    title: ['Up', 'mail'],
    italicPart: 1,
    url: 'https://www.upmailsolutions.com/',
    description: 'A dynamic multi-table builder letting teams model flexible reporting structures on the fly.',
    stack: 'TypeScript · React\nNode · Express · AWS',
  },
  {
    num: '004',
    title: ['Galaxy ', 'EHR'],
    italicPart: 1,
    url: 'https://galaxyehr.com/',
    description:
      'Behavioral-health EHR platform — scheduling, billing, patient portal and clinical workflows built for HIPAA-compliant, ONC-certified care delivery.',
    stack: 'React · Next.js · TypeScript\nNode · PostgreSQL · AWS',
  },
  {
    num: '005',
    title: ['Future', 'nostics'],
    italicPart: 1,
    url: 'https://www.futurenostics.com/',
    description:
      'Lead engineer across multiple client service projects — cloud, custom web and AI/ML builds — guiding delivery teams from concept through production.',
    stack: 'React · Next.js · Node\nAWS · Docker · Kubernetes',
  },
] as const

export const marqueeSkills = [
  { text: 'React' },
  { text: 'Next.js' },
  { text: 'TypeScript' },
  { text: 'Node.js' },
  { text: 'Python' },
  { text: 'GraphQL' },
  { text: 'PostgreSQL' },
  { text: 'AWS' },
  { text: 'Docker' },
  { text: 'Tailwind CSS' },
  { text: 'Framer Motion' },
  { text: 'WebGL' },
  { text: 'Three.js' },
  { text: 'GSAP' },
] as const

export const editorialStats = [
  { value: 6, suffix: '+', label: 'Years shipping' },
  { value: 30, suffix: '%', label: 'Avg performance lift' },
  { value: 4, suffix: '', label: 'Countries · teams' },
  { value: 12, suffix: '+', label: 'Systems in production' },
] as const

export const editorialCapabilities = [
  {
    id: 'A',
    title: 'Product engineering',
    description:
      'Whole features owned from schema to pixel — React / Next.js front ends with state, accessibility and motion that hold up in the real world.',
    tags: 'React · Next.js · TypeScript · RTK Query · Tailwind',
  },
  {
    id: 'B',
    title: 'Backend & APIs',
    description:
      "Resilient services with clean domain boundaries — REST and GraphQL APIs, queues and event-driven messaging that don't fall over under load.",
    tags: 'NestJS · Node · GraphQL · RabbitMQ · Kafka · Redis',
  },
  {
    id: 'C',
    title: 'Cloud architecture',
    description:
      'Serverless-first AWS — Lambda, Cognito, IoT Core, S3 and SQS/SNS — with CI/CD pipelines that make deploys boring (the good kind).',
    tags: 'AWS Lambda · Cognito · IoT Core · S3 · Docker',
  },
  {
    id: 'D',
    title: 'Performance & reliability',
    description:
      'Finding the slow path and fixing it — caching, query optimization and profiling that have repeatedly cut latency and failure rates by 20–30%.',
    tags: 'Caching · Query tuning · Observability · Profiling',
  },
] as const

export const editorialProcess = [
  {
    step: '01',
    title: 'Understand',
    description:
      'Get the real constraints and the actual goal before a line of code. Most problems are blurry requirements wearing a technical costume.',
  },
  {
    step: '02',
    title: 'Architect',
    description:
      'Choose boring, durable technology and design for the failure modes first. The interesting decisions happen before the build.',
  },
  {
    step: '03',
    title: 'Build',
    description:
      'Ship in thin vertical slices — typed, tested, reviewed. Working software early beats a perfect plan late.',
  },
  {
    step: '04',
    title: 'Iterate',
    description:
      'Measure, tune the slow paths, and hand off something the next engineer can actually read. Done means maintainable.',
  },
] as const

export const editorialCaseStudies = [
  {
    id: '01',
    title: 'Database performance engineering',
    result: 'PostgreSQL · ~80% less locking · 60%+ faster responses',
    problem:
      'As tables grow and traffic spikes, the database is where it hurts first: slow queries, lock contention, race conditions, and single-table bottlenecks that no amount of extra hardware fixes cleanly. I find the real cause, prove it with data, and fix it.',
    approach: [
      'Slow-query analysis and query-plan tuning (EXPLAIN ANALYZE) with strategic, composite indexing',
      'Lock-contention and race-condition debugging — acquisition order, isolation levels, hot rows',
      'Read replicas to offload read-heavy traffic from the primary',
      'Partitioning and sharding of large tables to remove single-table bottlenecks',
      'Stored procedures and materialized views for heavy aggregation and read paths',
    ],
    outcomes: [
      '<b>~80% reduction</b> in lock contention on a high-traffic write path — isolated synchronous triggers as the cause, verified with load tests, moved logic into explicit flows',
      '<b>60%+ faster</b> average DB response after removing N+1s and indexing strategically',
      'Higher sustained write load with no equivalent new infrastructure',
    ],
    chips: [
      'PostgreSQL',
      'Query plans',
      'Indexing',
      'Partitioning / Sharding',
      'Replication',
      'Materialized views',
    ],
  },
  {
    id: '02',
    title: 'Cloud architecture for telemetry & scale',
    result: 'Event-driven pipelines · reliable ingestion under burst load',
    problem:
      "High-volume telemetry and event data arrives continuously and in bursts, with variable payload size. Processing it synchronously doesn't scale — you need safe buffering, retries, and elastic processing that never blocks latency-sensitive paths.",
    approach: [
      'Event-driven architecture: ingest → queue → workers, with backpressure and retries',
      'Separate hot-path ingestion from heavy async processing to protect API latency',
      'Elastic serverless workers (Lambda) for batch processing and partial-batch failure handling',
      'Observability built in: queue depth/age, throughput, and error-rate alarms',
      'Portable across clouds — AWS and Azure, containerized with Docker / Kubernetes',
    ],
    outcomes: [
      'Reliable ingestion under burst traffic with <b>predictable, measurable throughput</b>',
      'Latency-sensitive endpoints <b>protected</b> by moving heavy work off the sync path',
      'Clear operational visibility into lag, errors, and throughput',
    ],
    chips: [
      'AWS IoT Core',
      'SQS',
      'Lambda',
      'EventBridge / Kafka',
      'CloudWatch',
      'Azure',
      'Docker · K8s',
    ],
  },
  {
    id: '03',
    title: 'Backend & API platform architecture',
    result: 'NestJS · secure, maintainable services · SOC 2 / ISO 27001-aligned',
    problem:
      'As a system grows into multiple services, shared concerns — auth, error handling, migrations, API consistency — drift. Without strong patterns, delivery slows and security and reliability regress. I bring the structure that keeps a platform fast to build on and safe to ship.',
    approach: [
      'Modular service design with clear ownership boundaries and reusable primitives',
      'Consistent authentication and authorization across services, with audit trails',
      'Safe schema evolution via migrations and controlled rollouts',
      'Standardized error handling, logging, and service contracts',
      'Security-first delivery aligned with SOC 2 / ISO 27001 controls',
    ],
    outcomes: [
      'Cleaner services with predictable patterns and <b>faster onboarding</b>',
      '<b>Fewer regressions</b> and safer changes across the platform',
      'Consistent, compliant security posture across all APIs',
    ],
    chips: ['NestJS', 'Node.js', 'TypeScript', 'REST / GraphQL', 'PostgreSQL', 'TypeORM', 'AuthN / AuthZ'],
  },
] as const

export const editorialStack = [
  {
    title: 'Frontend',
    skills: [
      { name: 'React', highlight: true },
      { name: 'Next.js', highlight: true },
      { name: 'Angular' },
      { name: 'Vue.js' },
      { name: 'Gatsby' },
      { name: 'TypeScript', highlight: true },
      { name: 'JavaScript' },
      { name: 'Redux' },
      { name: 'React Query', highlight: true },
      { name: 'Redux Saga' },
      { name: 'RxJS' },
      { name: 'Tailwind CSS' },
      { name: 'Material UI' },
      { name: 'Styled Components' },
      { name: 'Ant Design' },
      { name: 'HTML5 / CSS3' },
      { name: 'Jest' },
      { name: 'Cypress' },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node.js', highlight: true },
      { name: 'NestJS', highlight: true },
      { name: 'Express' },
      { name: 'GraphQL' },
      { name: 'Microservices' },
      { name: 'Redis' },
      { name: 'Docker' },
      { name: 'RabbitMQ' },
      { name: 'Kafka' },
      { name: 'JWT' },
      { name: 'Socket.IO' },
      { name: 'CI/CD · Jenkins' },
      { name: 'GitHub Actions' },
      { name: 'Mocha' },
    ],
  },
  {
    title: 'Databases & Cloud',
    skills: [
      { name: 'AWS', highlight: true },
      { name: 'EC2' },
      { name: 'Lambda' },
      { name: 'S3' },
      { name: 'RDS' },
      { name: 'SQS / SNS' },
      { name: 'PostgreSQL', highlight: true },
      { name: 'MySQL' },
      { name: 'MongoDB' },
      { name: 'DynamoDB' },
      { name: 'Prisma' },
      { name: 'TypeORM' },
      { name: 'Sequelize' },
      { name: 'GCP' },
      { name: 'Firebase' },
      { name: 'Vercel' },
      { name: 'Stripe / PayPal' },
      { name: 'Apollo GraphQL' },
      { name: 'WebRTC' },
      { name: 'Git / GitLab' },
    ],
  },
] as const
