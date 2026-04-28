export const site = {
  name: "Farrukh",
  role: "Senior Full-Stack Engineer",
  yearsExperience: 5,
  headline:
    "I build event-driven AWS systems and NestJS backends that stay fast under load — with a frontend experience that feels premium and reliable.",
  tagline:
    "Engineering scalable systems with performance, reliability, and clean architecture in mind.",
  location: "Pakistan · Open to remote/global roles",
  email: "farrukh.dev00@gmail.com",
  availability:
    "Open to senior full-stack / platform engineering opportunities",
  links: {
    linkedin: "https://www.linkedin.com/in/farrukh-dev/",
    github: "https://github.com/farakh-shahid",
    resume: "/M.Farrukh-SSE.pdf",
  },
  bestAt: [
    "Event-driven systems (IoT → queues → workers)",
    "NestJS service architecture + clean boundaries",
    "Database performance: locks, indexes, query plans",
    "Production delivery: CI/CD, monitoring, reliability",
  ],
  leadershipSignals: [
    "Own architecture and rollouts end-to-end",
    "Write runbooks, improve observability, reduce incidents",
    "Drive clean patterns (SOLID, modules, error handling)",
    "Partner with product/design and mentor teammates",
  ],
  certifications: [
    // Add real certs here if you have them
    // "AWS Certified Developer – Associate",
    // "Microsoft Certified: Azure Developer Associate",
  ],
  techOrbit: [
    "React",
    "Next.js",
    "Node.js",
    "NestJS",
    "AWS",
    "Azure",
    "PostgreSQL",
    "Docker",
  ],
  deviceStats: {
    laptop: [
      { label: "Terrasmart API p95", value: "92ms", trend: "-38%" },
      { label: "Event queue lag", value: "1.3s", trend: "-64%" },
      { label: "Service error rate", value: "0.18%", trend: "-42%" },
    ],
    phone: [
      { label: "Platform uptime (owned services)", value: "99.97%" },
      { label: "Release cadence", value: "58/mo" },
      { label: "P1 incidents (sample window)", value: "0 / 90d" },
    ],
  },
  architectureFlows: [
    {
      title: "AWS IoT event pipeline",
      subtitle:
        "IoT devices publish events, messages are queued safely, and Lambda workers process large batches before downstream persistence and API success signals.",
      nodes: ["IoT Device", "AWS IoT Core", "Amazon SQS", "AWS Lambda", "S3 / API"],
      outcomes: [
        "Batch message handling",
        "Async processing under load",
        "Reliable event ingestion",
      ],
    },
    {
      title: "Azure app + data platform",
      subtitle:
        "App Services run APIs and backend workloads, Dockerized services stay portable, and PostgreSQL plus stored procedures support data-heavy operations.",
      nodes: [
        "Client App",
        "Azure App Service",
        "Docker Service",
        "API Layer",
        "PostgreSQL",
      ],
      outcomes: [
        "Containerized deployment",
        "Stored procedure workflows",
        "Production-grade API delivery",
      ],
    },
  ],
  capabilities: [
    {
      key: "cloud",
      title: "Cloud architecture",
      summary:
        "Designing and shipping cloud-connected systems on AWS with services that support real-time workloads, device communication, and reliable production delivery.",
      details: [
        "AWS Lambda",
        "IoT Core + MQTT",
        "EC2 workloads",
        "Event-driven services",
      ],
    },
    {
      key: "delivery",
      title: "Delivery pipelines",
      summary:
        "Building secure CI/CD workflows and Azure-based deployment pipelines that shorten release cycles while keeping quality gates, automation, and traceability in place.",
      details: [
        "Azure pipelines",
        "Release automation",
        "Environment workflows",
        "Secure delivery",
      ],
    },
    {
      key: "backend",
      title: "Backend engineering",
      summary:
        "Architecting scalable APIs and service layers with Node.js and NestJS, focused on maintainability, performance, and clean separation of responsibilities.",
      details: [
        "Node.js services",
        "NestJS modules",
        "API design",
        "Scalable architecture",
      ],
    },
    {
      key: "frontend",
      title: "Frontend systems",
      summary:
        "Building React and Next.js experiences with strong component architecture, production-ready UX, and design implementation that feels sharp and responsive.",
      details: ["React", "Next.js", "Component systems", "UX polish"],
    },
    {
      key: "database",
      title: "Database performance",
      summary:
        "Improving throughput and response time through indexing strategy, query-plan analysis, lock investigation, and practical fixes for high-contention systems.",
      details: [
        "Index tuning",
        "Query plans",
        "Lock contention",
        "Performance debugging",
      ],
    },
    {
      key: "security",
      title: "Reliability and security",
      summary:
        "Delivering production systems with security-first thinking, observability, and operational visibility so teams can diagnose issues quickly and scale with confidence.",
      details: [
        "Observability",
        "Operational visibility",
        "Production hardening",
        "Secure delivery",
      ],
    },
  ],
  caseStudy: {
    title: "How disabling triggers cut lock contention by ~80%",
    challenge:
      "Under high-frequency writes, synchronous database triggers amplified row-level contention and pushed latency, CPU usage, and transaction wait time sharply upward.",
    actions: [
      "Analyzed slow paths and lock wait patterns under concurrent load.",
      "Validated alternate paths (append-only writes, index/query optimizations) and measured impact.",
      "Isolated trigger execution inside critical write paths as the dominant bottleneck.",
      "Temporarily disabled triggers during controlled tests to verify lock behavior.",
      "Reframed trigger-owned logic into explicit application-layer flows.",
    ],
    outcome:
      "Observed approximately 80% reduction in locking, lower transaction wait time, and stronger throughput and platform stability under load.",
  },
  selectedWork: [
    {
      slug: "db-triggers-locking",
      title: "DB triggers caused massive locking — fixed with 80% reduction",
      context:
        "High-frequency write traffic with hot rows and synchronous triggers executing inside the critical write path.",
      problem:
        "Write latency spiked, millions of requests queued on row-level locks, CPU usage increased, and transactions held locks longer than expected.",
      approach: [
        "Profiled lock waits, slow query logs, and transaction duration under load.",
        "Validated alternatives (index/query tuning, append-only writes) and measured impact.",
        "Isolated triggers as the dominant amplification factor in the write path.",
        "Disabled triggers in controlled load tests to confirm causality.",
        "Moved the hidden work into explicit application flows for visibility and control.",
      ],
      result: [
        "~80% reduction in locking contention",
        "Lower transaction wait time and stabilized throughput",
        "Better observability over business logic execution",
        "Supported higher sustained write load without adding equivalent infrastructure",
      ],
      measuredBy:
        "Lock-wait monitoring, slow query logs, load testing, and comparing transaction wait time before/after.",
      stack: ["PostgreSQL", "Query plans", "Lock analysis", "Backend services"],
      links: {
        writeup: null as string | null,
        repo: null as string | null,
      },
    },
    {
      slug: "iot-sqs-lambda-batch",
      title: "IoT → SQS → Lambda batch workers for large messages",
      context:
        "Device telemetry and events arriving continuously with burst traffic and variable payload size.",
      problem:
        "Direct synchronous processing couldn’t scale reliably; needed safe buffering, retries, and batch handling.",
      approach: [
        "Used IoT Core for device ingestion and routed events into SQS for buffering/backpressure.",
        "Configured Lambda workers for batch processing and failure handling (partial batch retries).",
        "Separated hot-path ingestion from heavy processing to protect latency-sensitive endpoints.",
        "Added metrics and alarms to validate throughput, lag, and failure rates.",
      ],
      result: [
        "Reliable ingestion under burst traffic",
        "Batch processing with predictable throughput",
        "Clear operational visibility (lag/error/throughput)",
        "Protected latency-sensitive APIs by moving heavy work off the synchronous path",
      ],
      measuredBy:
        "Queue depth/age metrics, Lambda success/error rates, and end-to-end event processing latency tracking.",
      stack: ["AWS IoT Core", "Amazon SQS", "AWS Lambda", "CloudWatch"],
      links: {
        writeup: null as string | null,
        repo: null as string | null,
      },
    },
    {
      slug: "nestjs-platform-apis",
      title: "NestJS platform services: secure APIs + maintainable modules",
      context:
        "Multiple backend services with shared concerns: auth, error handling, migrations, and consistent API design.",
      problem:
        "Without strong boundaries and patterns, microservices drift and delivery slows; security and reliability regress.",
      approach: [
        "Designed NestJS modules with clear ownership boundaries and reusable primitives.",
        "Implemented auth/authorization consistently across services.",
        "Managed schema changes with migrations and safe rollouts.",
        "Standardized error handling, logging, and service contracts.",
      ],
      result: [
        "Cleaner services with predictable patterns",
        "Faster onboarding and safer changes",
        "More consistent security posture across APIs",
      ],
      measuredBy:
        "Delivery consistency (fewer regressions), standardized monitoring/logging, and reduced integration friction across services.",
      stack: ["NestJS", "TypeScript", "PostgreSQL", "TypeORM", "AuthN/AuthZ"],
      links: {
        writeup: null as string | null,
        repo: null as string | null,
      },
    },
  ],
  experience: [
    {
      key: "terrasmart",
      company: "Terrasmart",
      role: "Senior Full-Stack Engineer",
      period: "Dec 2024 — Present · Remote",
      summary:
        "Owned cloud-connected product delivery from discovery to production, with a focus on IoT workflows, backend performance, and platform reliability.",
      architecture: ["AWS Lambda", "IoT Core", "EC2", "MQTT", "API services"],
      impact: [
        "30% -> 90% app performance",
        "60%+ DB response gain",
        "Realtime device connectivity",
      ],
      highlights: [
        "Led requirements, architecture decisions, implementation, and production rollout for cloud-connected features.",
        "Removed blocking queries and reshaped high-latency API paths to materially improve end-user performance.",
        "Investigated live production bottlenecks, uncovered query contention patterns, and stabilized critical data flows.",
        "Connected edge devices and web applications through reliable MQTT-based real-time communication.",
      ],
    },
    {
      key: "greeka",
      company: "Greeka.com",
      role: "Senior Software Engineer",
      period: "Jul 2024 — Nov 2024 · Remote",
      summary:
        "Led backend platform work in NestJS and TypeScript, shaping service design, REST APIs, and microservice-oriented architecture with strong emphasis on maintainability and security.",
      architecture: [
        "NestJS",
        "TypeScript",
        "PostgreSQL",
        "TypeORM",
        "REST APIs",
      ],
      impact: [
        "Microservices design",
        "Auth + authorization",
        "Scalable backend services",
      ],
      highlights: [
        "Designed and implemented backend services in NestJS with type-safe TypeScript patterns and maintainable module boundaries.",
        "Integrated PostgreSQL with TypeORM for schema design, migrations, and reliable database interactions across services.",
        "Built RESTful APIs with performance, scalability, and security best practices as core engineering constraints.",
        "Drove microservices-oriented design and service communication patterns using event-driven and message-broker based approaches.",
      ],
    },

    {
      key: "devsinc",
      company: "Devsinc",
      role: "Software Engineer",
      period: "May 2022 — Jun 2024",
      summary:
        "Delivered product features across frontend and backend in a large engineering organization, with strong emphasis on design execution and team collaboration.",
      architecture: [
        "React",
        "Material UI",
        "Full-stack features",
        "Design systems",
        "Team delivery",
      ],
      impact: [
        "40+ engineer collaboration",
        "Design-to-code ownership",
        "Consistent UI delivery",
      ],
      highlights: [
        "Converted detailed Figma designs into production-grade React interfaces with attention to usability and consistency.",
        "Used Material UI patterns to accelerate delivery and keep visual systems aligned across features.",
        "Built and shipped full-stack workstreams in collaboration with engineers, designers, and stakeholders.",
        "Documented features clearly and supported delivery quality through communication and cross-team alignment.",
      ],
    },
    {
      key: "bitnine",
      company: "Bitnine Global Inc.",
      role: "Software Engineer",
      period: "Feb 2020 — May 2022 · Remote",
      summary:
        "Contributed across backend and frontend for graph-database tooling in the Apache AGE ecosystem, helping build data visualization products for exploring complex connected datasets.",
      architecture: [
        "Apache AGE",
        "NestJS",
        "PostgreSQL",
        "Graph tooling",
        "Realtime data flows",
      ],
      impact: [
        "Graph data visualization",
        "Full-stack ownership",
        "Scalable API delivery",
      ],
      highlights: [
        "Built server-side services and APIs with NestJS to support robust, scalable graph-database product workflows.",
        "Designed efficient PostgreSQL-backed schemas and optimized data access patterns for visualization-heavy use cases.",
        "Implemented APIs and data-fetching flows that supported dynamic updates and interactive graph exploration.",
        "Worked closely with frontend developers to connect backend logic to responsive interfaces and intuitive user experiences.",
      ],
    },
  ],
  skillMatrix: [
    {
      group: "Frontend",
      items: [
        "React",
        "Next.js",
        "TypeScript",
        "Material UI",
        "Design-to-code",
      ],
    },
    {
      group: "Backend",
      items: ["Node.js", "NestJS", "REST APIs", "Real-time systems", "MQTT"],
    },
    {
      group: "Cloud & DevOps",
      items: ["AWS", "Azure pipelines", "Docker", "CI/CD", "Monitoring"],
    },
    {
      group: "Data & Performance",
      items: [
        "PostgreSQL",
        "Index strategy",
        "Query optimization",
        "Lock analysis",
        "Scalability tuning",
      ],
    },
  ],
} as const
