import createMDX from '@next/mdx'
import type { NextConfig } from 'next'

const withMDX = createMDX({
  extension: /\.mdx?$/,
})

const nextConfig: NextConfig = {
  pageExtensions: ['ts', 'tsx', 'mdx'],
  images: {
    formats: ['image/avif', 'image/webp'],
  },
  experimental: {
    optimizePackageImports: ['framer-motion', 'react-icons'],
  },
}

export default withMDX(nextConfig)
