'use client'

import { useEffect, useRef, useState } from 'react'

interface Kennzahl {
  ziel: number
  suffix?: string
  label: string
}

const KENNZAHLEN: Kennzahl[] = [
  { ziel: 125,  label: 'Jahre Erfahrung · seit 1897' },
  { ziel: 8,    label: 'Moderne LKW · Mercedes-Benz & Volvo' },
  { ziel: 1000, suffix: '+', label: 'Ausgeführte Aufträge' },
  { ziel: 100,  suffix: '+', label: 'Zufriedene Kunden' },
]

function easeOut(t: number) {
  return 1 - Math.pow(1 - t, 3)
}

function fmt(n: number) {
  return n.toLocaleString('de-DE')
}

export default function Kennzahlen() {
  const [values, setValues] = useState(KENNZAHLEN.map(() => 0))
  const [done, setDone] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  function run() {
    // prefers-reduced-motion: Endzahlen sofort
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setValues(KENNZAHLEN.map((k) => k.ziel))
      setDone(true)
      return
    }
    setDone(true)
    const dur = 1400
    const t0 = performance.now()
    const tick = (now: number) => {
      const p = Math.min(1, (now - t0) / dur)
      const e = easeOut(p)
      setValues(KENNZAHLEN.map((k) => Math.round(k.ziel * e)))
      if (p < 1) requestAnimationFrame(tick)
    }
    requestAnimationFrame(tick)
  }

  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (!('IntersectionObserver' in window)) { run(); return }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !done) run()
        })
      },
      { threshold: 0.4 }
    )
    io.observe(el)
    return () => io.disconnect()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <section
      ref={ref}
      className="bg-anthrazit text-white -mt-px"
      style={{
        clipPath: 'polygon(0 0, 100% 0, 100% calc(100% - 40px), 0 100%)',
        paddingTop: 'clamp(48px, 6vw, 72px)',
        paddingBottom: 'calc(clamp(48px, 6vw, 72px) + 40px)',
      }}
    >
      <div className="max-w-container mx-auto px-6 grid grid-cols-[repeat(auto-fit,minmax(160px,1fr))] gap-6">
        {KENNZAHLEN.map((k, i) => (
          <div key={k.label} className="text-center py-2 px-1">
            <div
              className="font-condensed font-extrabold text-white leading-none tabular-nums"
              style={{ fontSize: 'clamp(38px, 5vw, 54px)' }}
            >
              <span style={{ color: '#ff5b63' }}>
                {fmt(values[i])}{k.suffix ?? ''}
              </span>
            </div>
            <div className="mt-2 text-[14.5px] text-[#aeb9b0] tracking-[0.02em] leading-[1.35]">
              {k.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
