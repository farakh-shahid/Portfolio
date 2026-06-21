export type ProjectMetric = {
  label: string
  value: string
  context: string
}

export type ProjectData = {
  slug: string
  title: string
  summary: string
  role: string
  timeline: string
  problem: string
  solution: string
  architecture: string[]
  stack: string[]
  metrics: ProjectMetric[]
  tradeoffs: string[]
  security: string[]
  createdAt: string
}
