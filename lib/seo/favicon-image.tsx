type FaviconImageProps = {
  fontSize: number
}

export function FaviconImage({ fontSize }: FaviconImageProps) {
  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: '#0C0B09',
        border: '1px solid #332F27',
      }}
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'baseline',
          fontFamily: 'Georgia, "Times New Roman", serif',
          fontWeight: 400,
          letterSpacing: '-0.04em',
          lineHeight: 1,
        }}
      >
        <span style={{ fontSize, color: '#ECE7DE' }}>F</span>
        <span style={{ fontSize: fontSize * 0.92, color: '#C9A227', fontStyle: 'italic' }}>.</span>
      </div>
    </div>
  )
}
