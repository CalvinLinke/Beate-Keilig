interface PlaceholderProps {
  label: string
  aspectRatio?: string
  dark?: boolean
  clipPath?: string
  className?: string
}

// Wiederverwendbare Platzhalter-Komponente. Später leicht durch next/image ersetzt.
export default function Placeholder({
  label,
  aspectRatio = '4/3',
  dark = false,
  clipPath,
  className = '',
}: PlaceholderProps) {
  return (
    <div
      className={`w-full flex items-center justify-center text-center p-5 font-mono text-[13px] border ${
        dark
          ? 'border-white/25 text-[#bfe0cb] placeholder-bg-dark'
          : 'border-rahmen text-text-muted-2 placeholder-bg-light'
      } ${className}`}
      style={{
        aspectRatio,
        clipPath,
      }}
      aria-label={label}
      role="img"
    >
      {label}
    </div>
  )
}
