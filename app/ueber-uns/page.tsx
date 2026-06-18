import type { Metadata } from 'next'
import firma from '@/content/firma.json'
import timeline from '@/content/timeline.json'
import seo from '@/content/seo.json'
import Pagehead from '@/components/sections/Pagehead'
import CtaSection from '@/components/sections/CtaSection'
import Placeholder from '@/components/ui/Placeholder'

export const metadata: Metadata = {
  title: seo['ueber-uns'].title,
  description: seo['ueber-uns'].description,
}

const werte = [
  {
    title: 'Verlässlichkeit',
    text: 'Ein gegebenes Wort hält. Termine, Absprachen, Qualität. Worauf wir uns einigen, darauf können Sie bauen.',
  },
  {
    title: 'Ordentlichkeit',
    text: 'Saubere Arbeit von der ersten Minute an. Richtig verladen, sicher gesichert, gewissenhaft dokumentiert.',
  },
  {
    title: 'Bodenständigkeit',
    text: 'Kein großes Gerede, keine leeren Versprechen. Wir packen an und liefern. So, wie man es von uns kennt.',
  },
]

export default function UeberUns() {
  return (
    <>
      <Pagehead
        eyebrow="Über uns · seit 1897"
        title="Über 125 Jahre dasselbe Versprechen"
        lead="Wir sind ein Familienunternehmen aus Freital bei Dresden, geführt von Beate und Sascha Keilig. Über Generationen hinweg haben wir gelernt, dass im Transportgeschäft am Ende eines zählt: dass man sich auf das gegebene Wort verlassen kann. Daran halten wir uns. Seit 1897."
      />

      {/* ===================== ZEITLEISTE ===================== */}
      <section style={{ padding: 'clamp(48px, 6vw, 80px) 0' }}>
        <div className="max-w-container mx-auto px-6">
          <h2
            className="font-condensed font-bold uppercase text-gruen mb-9"
            style={{ fontSize: 'clamp(28px, 3.6vw, 42px)' }}
          >
            Meilensteine
          </h2>
          <div className="flex flex-col">
            {timeline.map((t, i) => (
              <div
                key={i}
                className="grid gap-x-[clamp(16px,3vw,32px)] items-start"
                style={{ gridTemplateColumns: '120px 1fr' }}
              >
                <div
                  className="font-condensed font-extrabold text-rot text-right leading-none pt-0.5"
                  style={{ fontSize: 'clamp(28px, 3.4vw, 40px)' }}
                >
                  {t.jahr}
                </div>
                <div className="border-l-2 border-rahmen-input pl-[26px] pb-8 relative">
                  <span
                    className="absolute -left-[9px] top-1 w-4 h-4 bg-gruen border-[3px] border-offwhite rounded-full"
                    aria-hidden="true"
                  />
                  <h3 className="font-condensed font-bold text-[21px] uppercase text-anthrazit">
                    {t.titel}
                  </h3>
                  <p className="text-[16px] text-text-muted mt-[7px] leading-[1.65] max-w-[46em]">
                    {t.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <p className="text-[13.5px] text-[#8a9389] font-mono mt-[6px]">
            [Platzhalter: Meilenstein-Texte und Jahreszahlen zwischen 1897 und heute durch verbürgte Angaben ersetzen]
          </p>
        </div>
      </section>

      {/* ===================== INHABER ===================== */}
      <section className="bg-white border-t border-rahmen" style={{ padding: 'clamp(56px, 7vw, 88px) 0' }}>
        <div
          className="max-w-container mx-auto px-6 grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] items-center"
          style={{ gap: 'clamp(32px, 5vw, 56px)' }}
        >
          <Placeholder
            label="[Platzhalter: Beate & Sascha Keilig]"
            aspectRatio="1/1"
            clipPath="polygon(0 0, 100% 0, 100% 100%, 40px 100%)"
          />
          <div>
            <div className="text-[13px] font-bold tracking-[0.16em] uppercase text-rot mb-3">
              Die Inhaber
            </div>
            <h2
              className="font-condensed font-bold uppercase text-gruen"
              style={{ fontSize: 'clamp(30px, 4vw, 46px)' }}
            >
              Beate &amp; Sascha Keilig
            </h2>
            <p className="text-[17.5px] text-[#414b44] mt-[18px] leading-[1.7]">
              Wir führen den Betrieb gemeinsam. Und wir sind diejenigen, die ans
              Telefon gehen, wenn Sie anrufen. Für uns ist jeder Auftrag eine
              Sache des guten Rufs, den unsere Familie sich über Generationen
              erarbeitet hat. Das spüren Sie an jeder Lieferung.
            </p>
            <p className="text-[13.5px] text-[#8a9389] font-mono mt-4">
              [Platzhalter: persönlicher Text der Inhaber]
            </p>
          </div>
        </div>
      </section>

      {/* ===================== WERTE ===================== */}
      <section style={{ padding: 'clamp(56px, 7vw, 88px) 0' }}>
        <div className="max-w-container mx-auto px-6">
          <h2
            className="font-condensed font-bold uppercase text-gruen mb-8"
            style={{ fontSize: 'clamp(28px, 3.6vw, 42px)' }}
          >
            Worauf Sie sich verlassen können
          </h2>
          <div className="grid grid-cols-[repeat(auto-fit,minmax(220px,1fr))] gap-4">
            {werte.map((w) => (
              <div
                key={w.title}
                className="bg-white border border-rahmen border-t-4 border-t-gruen px-6 py-7"
              >
                <h3 className="font-condensed font-bold text-[24px] uppercase text-anthrazit">
                  {w.title}
                </h3>
                <p className="text-[15.5px] text-text-muted mt-[10px] leading-[1.6]">
                  {w.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaSection telefon={firma.telefon} />
    </>
  )
}
