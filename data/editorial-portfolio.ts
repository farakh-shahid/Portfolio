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
    desc: 'Owned end-to-end delivery for a cloud-connected solar platform — IoT telemetry, backend performance, and production reliability across web and field devices.',
    leadership:
      'Technical direction · architecture reviews · mentored engineers on IoT and frontend patterns · owned platform reliability standards.',
    tags: ['React', 'GraphQL', 'TypeScript', 'AWS IoT Core', 'MQTT', 'AWS Lambda', 'SQS/SNS', 'PostgreSQL', 'Redis'],
    impact: ['30% → 90% app performance', '60%+ DB response gain', 'Realtime device connectivity'],
    bullets: [
      'Defined the AWS IoT Core architecture for solar-site devices — telemetry ingestion, MQTT command flows, and reliable field-to-cloud synchronization.',
      'Led a performance initiative that took application responsiveness from ~30% to ~90% through Redis caching, query tuning, and RTK Query / Redux Saga state design.',
      'Introduced Cognito-based auth with MFA, password policies, and Secrets Manager — setting the security baseline for web and mobile access.',
      'Drove backend reliability improvements that cut database response times by 60%+ while keeping latency-sensitive device paths off the critical sync route.',
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
    desc: 'Led backend platform work for a high-volume ferry booking product — service boundaries, event-driven messaging, and secure payments at production scale.',
    leadership:
      'Owned service architecture · led migration strategy · code reviews · standardized NestJS patterns across booking and payment domains.',
    tags: ['NestJS', 'TypeScript', 'PostgreSQL', 'TypeORM', 'RabbitMQ', 'Stripe', 'JWT', 'Tailwind CSS'],
    impact: ['Microservices design', 'Auth + authorization', 'Scalable backend services'],
    bullets: [
      'Defined the backend architecture for a multi-service booking platform supporting high daily transaction volume — replacing legacy PHP with NestJS, TypeORM, and PostgreSQL.',
      'Introduced RabbitMQ for inter-service communication, establishing reliable async workflows between booking, inventory, and payment services.',
      'Owned Stripe payment integration and JWT-based authorization — reducing auth risk and standardizing how services enforce access control.',
      'Drove API and validation standards with TypeScript decorators for logging, authorization checks, and consistent service contracts.',
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
    desc: 'Owned feature delivery across frontend and backend in a 40+ engineer org — from service design to polished UI in a high-traffic e-commerce environment.',
    leadership:
      'Cross-team collaboration · architecture discussions · code reviews · mentored juniors on React patterns and API design.',
    tags: ['React', 'Vue.js', 'Node.js', 'MongoDB', 'Redis', 'AWS S3', 'Cloudinary', 'API Gateway', 'Material UI'],
    impact: ['40+ engineer collaboration', 'Design-to-code ownership', 'Consistent UI delivery'],
    bullets: [
      'Designed and deployed the microservice architecture for a high-traffic e-commerce platform — defining service boundaries, Node.js APIs, and multi-tenant data isolation.',
      'Led React and Vue delivery for core product workflows, improving interaction speed and reducing bounce through performance-focused UI execution.',
      'Introduced Redis caching and query optimization standards that improved response times across tenant-heavy read paths.',
      'Owned scalable media handling with AWS S3 and Cloudinary — defining how large assets moved through the platform without blocking user flows.',
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
    desc: 'Owned full-stack delivery for graph-database products in the Apache AGE ecosystem — APIs, visualization UX, and the public platform surface.',
    leadership:
      'End-to-end ownership · defined API conventions · led frontend architecture for graph tooling · mentored on state-management patterns.',
    tags: ['Next.js', 'React', 'Node.js', 'Express.js', 'GraphQL', 'REST APIs', 'Redux', 'React Query', 'Zustand'],
    impact: ['Graph data visualization', 'Full-stack ownership', 'Scalable API delivery'],
    bullets: [
      'Led development of Bitnine’s official Next.js platform — owning performance, UX, and the technical direction of the public product surface.',
      'Defined REST and GraphQL API strategy for graph-oriented tooling, improving data transfer efficiency and backend maintainability.',
      'Introduced reusable component and state-management standards (Redux, React Query, Zustand) that reduced inconsistency across multiple product lines.',
      'Drove full-stack feature ownership across React, Node.js, and Express — from schema design through production-ready visualization experiences.',
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

/** Curated work gallery — sample dashboard / product UI imagery */
export const editorialWorkGallery = [
  {
    num: '01',
    name: 'Terrasmart',
    category: 'IoT · Cloud Platform',
    description:
      'Realtime solar operations — device telemetry, MQTT command flows and serverless processing at scale.',
    stack: 'React · GraphQL · AWS IoT',
    image: '/images/gallery/terrasmart.png',
    url: 'https://www.terrasmart.com/',
  },
  {
    num: '02',
    name: 'Maple HR',
    category: 'HR · Internal Tools',
    description:
      'Operations hub with clean data layers — admin workflows trimmed and APIs built for long-term maintainability.',
    stack: 'React · RTK Query · Node',
    image: '/images/gallery/maple-hr.png',
    url: 'https://maplehr.io/',
  },
  {
    num: '03',
    name: 'Upmail',
    category: 'Data · Reporting',
    description:
      'Flexible multi-table builder for teams who need reporting structures that evolve without redeploys.',
    stack: 'TypeScript · React · Express',
    image: '/images/gallery/upmail.png',
    url: 'https://www.upmailsolutions.com/',
  },
  {
    num: '04',
    name: 'Galaxy EHR',
    category: 'Health · Clinical UX',
    description:
      'HIPAA-aligned behavioral-health platform — scheduling, billing and patient flows designed for clarity under pressure.',
    stack: 'Next.js · TypeScript · PostgreSQL',
    image: '/images/gallery/galaxy-ehr.png',
    url: 'https://galaxyehr.com/',
  },
  {
    num: '05',
    name: 'Futurenostics',
    category: 'AI · Multi-client Delivery',
    description:
      'Lead engineer across cloud and ML engagements — guiding teams from concept through production handoff.',
    stack: 'Next.js · AWS · Kubernetes',
    image: '/images/gallery/futurenostics.png',
    url: 'https://www.futurenostics.com/',
  },
  {
    num: '06',
    name: 'Greeka',
    category: 'Travel · Ferry Booking',
    description:
      'NestJS microservices migration — booking flows, RabbitMQ messaging and Stripe payments at ferry scale.',
    stack: 'NestJS · PostgreSQL · RabbitMQ',
    image: '/images/gallery/greeka.png',
    url: 'https://www.greeka.com/',
  },
  {
    num: '07',
    name: 'Bitnine',
    category: 'Graph · Data Platform',
    description:
      'Full-stack graph tooling — Next.js surfaces, GraphQL APIs and visualization for enterprise data teams.',
    stack: 'Next.js · GraphQL · Node',
    image: '/images/gallery/bitnine.png',
    url: 'https://bitnine.net/',
  },
  {
    num: '08',
    name: 'Devsinc',
    category: 'E-commerce · Scale',
    description:
      'High-traffic storefront architecture — microservices, Redis caching and multi-tenant infra across a 40+ engineer org.',
    stack: 'React · Node · Redis · AWS',
    image: '/images/gallery/devsinc.png',
    url: 'https://www.devsinc.com/',
  },
  {
    num: '09',
    name: 'PeakYield',
    category: 'Solar · Device Ops',
    description:
      'AWS IoT Core telemetry and MQTT command layers — realtime device sync for field solar operations.',
    stack: 'AWS IoT · Lambda · MQTT',
    image: '/images/gallery/peakyield.png',
    url: 'https://www.terrasmart.com/',
  },
  {
    num: '10',
    name: 'Cloud Delivery',
    category: 'AWS · Serverless',
    description:
      'Lambda, Cognito, SQS/SNS pipelines — secure auth, event-driven workflows and boringly reliable deploys.',
    stack: 'AWS · Docker · CI/CD',
    image: '/images/gallery/cloud-platform.png',
    url: 'https://www.futurenostics.com/',
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
  { value: 90, suffix: '%', label: 'Peak perf · prod scale' },
  { value: 40, suffix: '+', label: 'Engineers · cross-squad' },
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
