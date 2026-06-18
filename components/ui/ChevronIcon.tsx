interface ChevronIconProps {
  size?: number
  color?: string
  className?: string
}

// Das Keil-Leitmotiv der Marke Keilig: ein nach rechts zeigender Keil
export default function ChevronIcon({
  size = 20,
  color = '#14572F',
  className = '',
}: ChevronIconProps) {
  return (
    <span
      className={className}
      style={{
        display: 'inline-block',
        width: size,
        height: size,
        background: color,
        clipPath: 'polygon(0 0, 58% 0, 100% 50%, 58% 100%, 0 100%, 42% 50%)',
        flexShrink: 0,
      }}
      aria-hidden="true"
    />
  )
}
