import type { NextConfig } from 'next'

const traceExcludes = [
  '.next/cache/**',
  '.git/**',
  'node_modules/@swc/**',
  'node_modules/webpack/**',
  'node_modules/esbuild/**',
]

const nextConfig: NextConfig = {
  pageExtensions: ['ts', 'tsx'],
  images: {
    formats: ['image/avif', 'image/webp'],
  },
  outputFileTracingExcludes: {
    '*': traceExcludes,
    '/classic': traceExcludes,
    '/api/contact': traceExcludes,
  },
  experimental: {
    optimizePackageImports: ['framer-motion', 'react-icons', 'gsap', 'three'],
  },
}

export default nextConfig
