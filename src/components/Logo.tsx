type MarkProps = {
  className?: string
}

/* Gold CCTV camera mark, drawn after the business card logo */
export function CameraMark({ className }: MarkProps) {
  return (
    <svg
      viewBox="0 0 124 84"
      className={className}
      role="img"
      aria-label="Eagle Eye camera logo"
    >
      {/* Hood */}
      <path
        d="M6 44 L12 26 Q16 13 30 11 L116 9 L108 21 L36 23 Q26 24 22 33 L14 50 Z"
        fill="var(--color-gold)"
      />
      {/* Body */}
      <rect x="22" y="26" width="76" height="30" rx="15" fill="var(--color-gold)" />
      {/* Vents */}
      <g stroke="var(--color-ink)" strokeWidth="3" strokeLinecap="round">
        <line x1="70" y1="31" x2="74" y2="45" />
        <line x1="77" y1="31" x2="81" y2="45" />
        <line x1="84" y1="31" x2="88" y2="45" />
      </g>
      {/* Lens */}
      <circle cx="38" cy="41" r="17" fill="var(--color-gold)" />
      <circle cx="38" cy="41" r="13" fill="var(--color-gold-deep)" />
      <circle cx="38" cy="41" r="9" fill="var(--color-gold-soft)" />
      <circle cx="38" cy="41" r="5.5" fill="var(--color-ink)" />
      <circle cx="40" cy="39" r="1.8" fill="#fff" />
      <circle cx="57" cy="43" r="1.6" fill="var(--color-gold-soft)" />
      {/* Mount */}
      <path
        d="M76 56 L90 68 L104 60"
        fill="none"
        stroke="var(--color-gold)"
        strokeWidth="6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="89" cy="68" r="5" fill="var(--color-gold)" />
      <rect x="104" y="40" width="7" height="38" rx="2" fill="var(--color-gold)" />
    </svg>
  )
}

/* Dial of tick marks that frames the camera on the card front */
export function Dial({ className }: MarkProps) {
  const ticks = Array.from({ length: 60 }, (_, i) => i)
  return (
    <svg viewBox="0 0 200 200" className={className} aria-hidden="true">
      {ticks.map((i) => {
        const major = i % 5 === 0
        const quarter = i % 15 === 0
        const inner = quarter ? 84 : major ? 87 : 92
        return (
          <line
            key={i}
            x1="100"
            y1={100 - inner}
            x2="100"
            y2={100 - 96}
            transform={`rotate(${i * 6} 100 100)`}
            stroke="var(--color-gold)"
            strokeOpacity={major ? 0.9 : 0.35}
            strokeWidth={quarter ? 1.6 : major ? 1.2 : 0.8}
          />
        )
      })}
    </svg>
  )
}

/* Diagonal hazard stripes from the card corner */
export function Stripes({ className }: MarkProps) {
  return <div className={`stripes ${className ?? ''}`} aria-hidden="true" />
}
