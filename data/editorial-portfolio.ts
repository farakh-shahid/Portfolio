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
    impact: ['DB perf under telemetry spikes', '2 → 4 dedicated Lambdas', 'Realtime device connectivity'],
    bullets: [
      {
        lead: 'Defined the AWS IoT Core architecture',
        body: 'for solar-site devices — telemetry ingestion, MQTT command flows, and reliable field-to-cloud synchronization.',
      },
      {
        lead: 'Led a database performance initiative',
        body: 'during telemetry data spikes — PostgreSQL table partitioning, Redis caching, and query tuning while scaling from two to four dedicated Lambdas for ingestion.',
      },
      {
        lead: 'Introduced Cognito-based auth with MFA',
        body: 'password policies, and Secrets Manager — setting the security baseline for web and mobile access.',
      },
      {
        lead: 'Drove backend reliability improvements',
        body: 'that cut database response times by 60%+ while keeping latency-sensitive device paths off the critical sync route.',
      },
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
      {
        lead: 'Defined the backend architecture',
        body: 'for a multi-service booking platform handling high daily transaction volume — replacing legacy PHP with NestJS, TypeORM, and PostgreSQL.',
      },
      {
        lead: 'Introduced RabbitMQ',
        body: 'for inter-service communication, establishing reliable async workflows between booking, inventory, and payment services.',
      },
      {
        lead: 'Owned Stripe payments and JWT authorization',
        body: '— reducing auth risk and standardizing how services enforce access control.',
      },
      {
        lead: 'Drove API and validation standards',
        body: 'with TypeScript decorators for logging, authorization checks, and consistent service contracts.',
      },
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
      {
        lead: 'Designed and deployed the microservice architecture',
        body: 'for a high-traffic e-commerce platform — defining service boundaries, Node.js APIs, and multi-tenant data isolation.',
      },
      {
        lead: 'Led React and Vue delivery',
        body: 'for core product workflows, improving interaction speed and reducing bounce through performance-focused UI execution.',
      },
      {
        lead: 'Introduced Redis caching and query optimization',
        body: 'standards that improved response times across tenant-heavy read paths.',
      },
      {
        lead: 'Owned scalable media handling',
        body: 'with AWS S3 and Cloudinary — defining how large assets moved through the platform without blocking user flows.',
      },
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
      {
        lead: 'Led development of Bitnine’s official Next.js platform',
        body: '— owning performance, UX, and the technical direction of the public product surface.',
      },
      {
        lead: 'Defined REST and GraphQL API strategy',
        body: 'for graph-oriented tooling, improving data transfer efficiency and backend maintainability.',
      },
      {
        lead: 'Introduced reusable component and state-management standards',
        body: '(Redux, React Query, Zustand) that reduced inconsistency across multiple product lines.',
      },
      {
        lead: 'Drove full-stack feature ownership',
        body: 'across React, Node.js, and Express — from schema design through production-ready visualization experiences.',
      },
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
    name: 'Upmail',
    category: 'Data · Reporting',
    description:
      'Flexible multi-table builder for teams who need reporting structures that evolve without redeploys.',
    stack: 'TypeScript · React · Express',
    image: '/images/gallery/upmail.png',
    url: 'https://www.upmailsolutions.com/',
  },
  {
    num: '03',
    name: 'Galaxy EHR',
    category: 'Health · Clinical UX',
    description:
      'HIPAA-aligned behavioral-health platform — scheduling, billing and patient flows designed for clarity under pressure.',
    stack: 'Next.js · TypeScript · PostgreSQL',
    image: '/images/gallery/galaxy-ehr.png',
    url: 'https://galaxyehr.com/',
  },
  {
    num: '04',
    name: 'BusinessOS',
    category: 'SaaS · Tailor Operations',
    description:
      'Bilingual tailor shop platform — orders, measurements, receivables and customer history in English or Urdu.',
    stack: 'Next.js · TypeScript · PostgreSQL',
    image: '/images/gallery/businessos-login.png',
    url: 'https://getbusinessos.vercel.app/login',
  },
  {
    num: '05',
    name: 'BusinessOS',
    category: 'Dashboard · Shop Ops',
    description:
      'Daily command center — order priorities, workload pipeline, cash flow and pickup reminders at a glance.',
    stack: 'Next.js · React · Tailwind',
    image: '/images/gallery/businessos-dashboard.png',
    url: 'https://getbusinessos.vercel.app/login',
  },
  {
    num: '06',
    name: 'BusinessOS',
    category: 'Analytics · Revenue',
    description:
      'Income trends, outstanding balances and production pipeline — seasonal insights for tailor shop owners.',
    stack: 'Next.js · Charts · PostgreSQL',
    image: '/images/gallery/businessos-analytics.png',
    url: 'https://getbusinessos.vercel.app/login',
  },
  {
    num: '07',
    name: 'Futurenostics',
    category: 'AI · Multi-client Delivery',
    description:
      'Lead engineer across cloud and ML engagements — guiding teams from concept through production handoff.',
    stack: 'Next.js · AWS · Kubernetes',
    image: '/images/gallery/futurenostics.png',
    url: 'https://www.futurenostics.com/',
  },
  {
    num: '08',
    name: 'Bitnine',
    category: 'Graph · Data Platform',
    description:
      'Full-stack graph tooling — Next.js surfaces, GraphQL APIs and visualization for enterprise data teams.',
    stack: 'Next.js · GraphQL · Node',
    image: '/images/gallery/bitnine.png',
    url: 'https://bitnine.net/',
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
    name: 'Light VR',
    category: 'Immersive · Product Landing',
    description:
      'Three-dimensional product storytelling — cinematic hero, device gallery and scroll-driven narrative for a VR platform.',
    stack: 'Next.js · GSAP · Framer Motion',
    image: '/images/gallery/light-vr.png',
    url: null,
  },
  {
    num: '11',
    name: 'Crappto',
    category: 'Fintech · Crypto Platform',
    description:
      'Isometric 3D marketing site — profit calculator, market sentiment blocks and high-contrast conversion flows.',
    stack: 'React · Three.js · Tailwind',
    image: '/images/gallery/crappto.png',
    url: null,
  },
  {
    num: '12',
    name: 'Studio Portfolio',
    category: 'Creative · Personal Brand',
    description:
      'Editorial portfolio experience — asymmetric project grid, testimonial rhythm and contact funnel for a design-led practice.',
    stack: 'Next.js · TypeScript · Motion',
    image: '/images/gallery/studio-portfolio.png',
    url: null,
  },
  {
    num: '13',
    name: 'Neo VR',
    category: 'Immersive · Futuristic Landing',
    description:
      'Sci-fi VR product page — gradient hero, device highlights and testimonial blocks on a deep purple canvas.',
    stack: 'Next.js · GSAP · Three.js',
    image: '/images/gallery/neo-vr.png',
    url: null,
  },
  {
    num: '14',
    name: 'Prism XR',
    category: 'Hardware · Product Launch',
    description:
      'VR headset launch narrative — layered hero imagery, feature grid and social proof tuned for hardware brands.',
    stack: 'React · Framer Motion · Tailwind',
    image: '/images/gallery/prism-vr.png',
    url: null,
  },
  {
    num: '15',
    name: 'Pulse Event',
    category: 'Events · Immersive Experience',
    description:
      'Event-first VR landing — bold typography, schedule blocks and registration funnel for live experiences.',
    stack: 'Next.js · TypeScript · Motion',
    image: '/images/gallery/pulse-vr.png',
    url: null,
  },
  {
    num: '16',
    name: 'Nexus Crypto',
    category: 'Web3 · Trading Platform',
    description:
      'Crypto exchange concept — market charts, wallet flows and high-contrast fintech UI on a dark base.',
    stack: 'React · Web3 · Tailwind',
    image: '/images/gallery/nexus-crypto.png',
    url: null,
  },
  {
    num: '17',
    name: 'Orbit Tech',
    category: 'SaaS · Technology Landing',
    description:
      'Modern tech landing — feature columns, pricing rhythm and crisp CTA hierarchy for B2B products.',
    stack: 'Next.js · TypeScript · GSAP',
    image: '/images/gallery/orbit-tech.png',
    url: null,
  },
  {
    num: '18',
    name: 'Aurora SaaS',
    category: 'SaaS · Gradient Marketing',
    description:
      'Liquid-gradient marketing site — fluid backgrounds, product highlights and conversion-focused layout.',
    stack: 'React · Tailwind · Motion',
    image: '/images/gallery/aurora-saas.png',
    url: null,
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
  { value: 60, suffix: '%', label: 'DB response-time cut' },
  { value: 4, suffix: '', label: 'Companies shipped for' },
  { value: 12, suffix: '+', label: 'Systems in production' },
  { value: 4, suffix: '', label: 'Countries collaborated' },
  { value: 40, suffix: '+', label: 'Engineer orgs' },
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
