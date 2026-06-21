'use client'

import { motion } from 'framer-motion'

export function SystemGraph() {
  const nodes = [
    { x: 10, y: 30, label: 'Client' },
    { x: 30, y: 20, label: 'Next.js' },
    { x: 52, y: 28, label: 'NestJS' },
    { x: 72, y: 18, label: 'Prisma' },
    { x: 88, y: 34, label: 'PostgreSQL' },
  ]

  return (
    <svg viewBox="0 0 100 50" className="h-44 w-full">
      {nodes.slice(0, -1).map((node, idx) => (
        <line
          key={node.label}
          x1={node.x}
          y1={node.y}
          x2={nodes[idx + 1].x}
          y2={nodes[idx + 1].y}
          stroke="var(--border)"
          strokeWidth="0.7"
        />
      ))}
      {nodes.map((node, idx) => (
        <motion.g key={node.label} animate={{ opacity: [0.5, 1, 0.5] }} transition={{ repeat: Infinity, delay: idx * 0.2 }}>
          <circle cx={node.x} cy={node.y} r="2.8" fill="var(--primary)" />
          <text x={node.x} y={node.y + 6} textAnchor="middle" fill="var(--text-muted)" fontSize="2.6">
            {node.label}
          </text>
        </motion.g>
      ))}
    </svg>
  )
}
