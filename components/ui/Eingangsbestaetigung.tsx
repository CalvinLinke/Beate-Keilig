'use client'

import { useEffect, useState } from 'react'

interface EingangsbeschaetigungProps {
  /** 'anfrage' für Kontaktformular, 'bewerbung' für Karriere */
  typ: 'anfrage' | 'bewerbung'
  telefon: string
}

function belegNummer() {
  const d = new Date()
  return `KEI-${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}${String(d.getDate()).padStart(2, '0')}`
}

function heuteDatum() {
  return new Date().toLocaleDateString('de-DE', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  })
}

export default function Eingangsbestaetigung({
  typ,
  telefon,
}: EingangsbeschaetigungProps) {
  const [stampKey, setStampKey] = useState(0)
  const [stampVisible, setStampVisible] = useState(false)

  // Stempel erscheint leicht verzögert nach dem Mounten
  useEffect(() => {
    const t = setTimeout(() => setStampVisible(true), 80)
    return () => clearTimeout(t)
  }, [])

  const betreff = typ === 'anfrage' ? 'Anfrage Transport' : 'Bewerbung Berufskraftfahrer'
  const stempelText = typ === 'anfrage' ? 'Anfrage\neingegangen' : 'Bewerbung\neingegangen'
  const dankText =
    typ === 'anfrage'
      ? `Vielen Dank. Ihre Anfrage ist bei uns eingegangen. Wir melden uns persönlich mit einem Angebot. Eilig? Rufen Sie uns an: ${telefon}.`
      : `Vielen Dank. Ihre Bewerbung ist bei uns eingegangen. Wir melden uns in Kürze persönlich bei Ihnen. Fragen? ${telefon}.`

  const heute = heuteDatum()
  const nr = belegNummer()

  // Stempel neu einblenden (für prefers-reduced-motion: direkt im Endzustand)
  function replayStamp() {
    setStampVisible(false)
    setTimeout(() => {
      setStampKey((k) => k + 1)
      setStampVisible(true)
    }, 60)
  }

  return (
    <div className="mt-[22px] flex flex-col items-start gap-[14px]">
      <div
        className="w-full max-w-[560px] border border-rahmen-input bg-white"
      >
        {/* Grüner Kopf */}
        <div className="bg-gruen text-white flex items-center justify-between gap-3 px-5 py-[13px]">
          <span className="font-condensed font-bold text-[18px] tracking-[0.04em] uppercase">
            Eingangsbestätigung
          </span>
          <span className="font-mono text-[12.5px] text-eyebrow-gruen">
            Nr. {nr}
          </span>
        </div>

        {/* Inhalt */}
        <div className="px-[22px] pt-6 pb-7 relative" style={{ minHeight: 188 }}>
          {/* Meta-Zeilen */}
          <div
            className="grid font-mono text-[13px] text-text-muted gap-y-[6px] gap-x-[18px] max-w-[330px]"
            style={{ gridTemplateColumns: 'auto 1fr' }}
          >
            <span className="text-[#8a9389]">Datum</span>
            <span>{heute}</span>
            <span className="text-[#8a9389]">Betreff</span>
            <span>{betreff}</span>
            <span className="text-[#8a9389]">Status</span>
            <span className="text-gruen font-bold">Eingegangen</span>
          </div>

          {/* Dankestext */}
          <p className="text-[16px] text-anthrazit leading-[1.6] mt-[18px] max-w-[330px]">
            {dankText}
          </p>
          <p className="text-[12.5px] text-[#8a9389] font-mono mt-[10px]">
            [Hinweis: Formular sendet noch nicht wirklich. Versand wird später angebunden.]
          </p>

          {/* Gummistempel */}
          {stampVisible && (
            <div
              key={stampKey}
              style={{
                position: 'absolute',
                right: 22,
                bottom: 20,
                transform: 'rotate(-8deg)',
                border: '3px solid #C8202A',
                padding: 5,
                opacity: 0.82,
                animation: 'stampin 0.5s cubic-bezier(0.2,0.8,0.2,1) both',
              }}
              aria-hidden="true"
            >
              <div
                style={{
                  border: '1.5px solid #C8202A',
                  padding: '8px 14px',
                  textAlign: 'center',
                }}
              >
                <div
                  style={{
                    fontFamily: "'Barlow Condensed', sans-serif",
                    fontWeight: 800,
                    fontSize: 21,
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                    color: '#C8202A',
                    lineHeight: 1,
                    whiteSpace: 'pre-line',
                  }}
                >
                  {stempelText}
                </div>
                <div
                  style={{
                    fontFamily: 'monospace',
                    fontSize: 10,
                    letterSpacing: '0.04em',
                    color: '#C8202A',
                    marginTop: 5,
                  }}
                >
                  {heute} · KEILIG
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
