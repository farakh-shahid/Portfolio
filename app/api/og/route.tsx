import { ImageResponse } from 'next/og'
import { editorialProfile } from '@/data/editorial-portfolio'

export const runtime = 'edge'

export async function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '64px 72px',
          background: '#0C0B09',
          color: '#ECE7DE',
        }}
      >
        <div style={{ fontSize: 18, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#8C8579' }}>
          Portfolio
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          <div style={{ fontSize: 64, fontWeight: 400, lineHeight: 1.05 }}>{editorialProfile.name}</div>
          <div style={{ fontSize: 28, color: '#C9A227', fontStyle: 'italic' }}>Senior Full-Stack Engineer</div>
        </div>
        <div style={{ fontSize: 18, color: '#8C8579' }}>{editorialProfile.email}</div>
      </div>
    ),
    { width: 1200, height: 630 },
  )
}
