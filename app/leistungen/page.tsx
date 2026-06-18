import type { Metadata } from 'next'
import firma from '@/content/firma.json'
import leistungen from '@/content/leistungen.json'
import seo from '@/content/seo.json'
import Pagehead from '@/components/sections/Pagehead'
import CtaSection from '@/components/sections/CtaSection'
import ChevronIcon from '@/components/ui/ChevronIcon'
import Placeholder from '@/components/ui/Placeholder'

export const metadata: Metadata = {
  title: seo.leistungen.title,
  description: seo.leistungen.description,
}

export default function Leistungen() {
  return (
    <>
      <Pagehead
        eyebrow="Leistungen"
        title="Alles, was rollt. Ordentlich erledigt."
        lead="Wir sind keine Schwerlast-Spezialisten und kein Gefahrgut-Betrieb. Wir machen das, was die meisten Betriebe wirklich brauchen: zuverlässigen Transport gängiger Güter, deutschlandweit und über die Grenze. Dazu Lager, Kran und Stapler, wenn es nötig ist. Persönlich betreut, vom ersten Anruf an."
      />

      <section style={{ padding: 'clamp(48px, 6vw, 80px) 0 clamp(64px, 8vw, 104px)' }}>
        <div className="max-w-container mx-auto px-6 flex flex-col gap-[18px]">
          {leistungen.map((d) => (
            <div
              key={d.id}
              className="bg-white border border-rahmen grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] overflow-hidden"
            >
              {/* Text-Block */}
              <div
                className="flex flex-col justify-center"
                style={{ padding: 'clamp(28px, 4vw, 44px)' }}
              >
                <div className="flex items-center gap-[14px] mb-[14px]">
                  <span className="w-[44px] h-[44px] bg-gruen inline-flex items-center justify-center flex-none">
                    <ChevronIcon size={18} color="#fff" />
                  </span>
                  <h2
                    className="font-condensed font-bold uppercase text-gruen"
                    style={{ fontSize: 'clamp(26px, 3vw, 34px)' }}
                  >
                    {d.titel}
                  </h2>
                </div>
                <p className="text-[16.5px] text-[#414b44] leading-[1.7]">{d.text}</p>
                <div className="flex flex-wrap gap-2 mt-[18px]">
                  {d.tags.map((t) => (
                    <span
                      key={t}
                      className="text-[13px] font-semibold tracking-[0.03em] uppercase text-gruen-hell bg-[#eaf2ec] px-3 py-[6px]"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bild-Platzhalter */}
              <Placeholder
                label={d.bild}
                aspectRatio="auto"
                className="min-h-[200px]"
              />
            </div>
          ))}
        </div>
      </section>

      <CtaSection telefon={firma.telefon} />
    </>
  )
}
