import type { Metadata } from 'next'
import Link from 'next/link'
import firma from '@/content/firma.json'
import fuhrpark from '@/content/fuhrpark.json'
import seo from '@/content/seo.json'
import Pagehead from '@/components/sections/Pagehead'
import CtaSection from '@/components/sections/CtaSection'
import Placeholder from '@/components/ui/Placeholder'

export const metadata: Metadata = {
  title: seo.fuhrpark.title,
  description: seo.fuhrpark.description,
}

export default function Fuhrpark() {
  return (
    <>
      <Pagehead
        eyebrow="Fuhrpark"
        title="Acht moderne LKW. Gepflegt und einsatzbereit."
        lead="Unsere Flotte besteht aus acht modernen Lastzügen der Marken Mercedes-Benz und Volvo. Wir halten sie in Schuss, denn ein zuverlässiger Transport beginnt bei der Technik. Kran und Stapler haben wir bei Bedarf ebenfalls zur Hand."
      />

      <section style={{ padding: 'clamp(40px, 5vw, 72px) 0 clamp(48px, 6vw, 80px)' }}>
        <div className="max-w-container mx-auto px-6">

          {/* LKW-Galerie */}
          <div className="grid grid-cols-[repeat(auto-fit,minmax(260px,1fr))] gap-4">
            {fuhrpark.map((f) => (
              <div key={f.id} className="bg-white border border-rahmen overflow-hidden">
                <Placeholder label={f.bild} aspectRatio="4/3" className="text-[12.5px]" />
                <div className="px-[18px] py-4 flex items-center justify-between gap-3">
                  <span className="font-condensed font-bold text-[19px] uppercase text-anthrazit">
                    {f.name}
                  </span>
                  <span className="text-[12px] font-semibold tracking-[0.04em] uppercase text-gruen-hell bg-[#eaf2ec] px-[10px] py-[5px]">
                    {f.marke}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Kran & Stapler Hinweis */}
          <div
            className="mt-6 bg-gruen text-white grid grid-cols-[repeat(auto-fit,minmax(260px,1fr))] gap-6 items-center"
            style={{ padding: 'clamp(28px, 4vw, 40px)' }}
          >
            <div>
              <h3
                className="font-condensed font-bold uppercase"
                style={{ fontSize: 'clamp(24px, 3vw, 32px)' }}
              >
                Kran &amp; Stapler bei Bedarf
              </h3>
              <p className="text-[16.5px] text-[#cfe3d6] mt-3 leading-[1.65] max-w-[34em]">
                Wenn das Be- oder Entladen besondere Technik braucht, organisieren
                wir Kran und Stapler dazu. Sprechen Sie uns bei der Anfrage darauf
                an. Wir finden die passende Lösung.
              </p>
            </div>
            <div>
              <Link
                href="/kontakt"
                className="inline-flex items-center font-condensed font-bold text-[18px] tracking-[0.04em] text-white uppercase bg-rot hover:bg-rot-hover transition-colors px-6 py-[14px]"
                style={{ clipPath: 'polygon(0 0, 100% 0, calc(100% - 11px) 100%, 0 100%)' }}
              >
                Bedarf anfragen
              </Link>
            </div>
          </div>
        </div>
      </section>

      <CtaSection telefon={firma.telefon} />
    </>
  )
}
