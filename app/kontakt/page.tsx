import type { Metadata } from 'next'
import firma from '@/content/firma.json'
import seo from '@/content/seo.json'
import Pagehead from '@/components/sections/Pagehead'
import ContactForm from '@/components/forms/ContactForm'
import Placeholder from '@/components/ui/Placeholder'

export const metadata: Metadata = {
  title: seo.kontakt.title,
  description: seo.kontakt.description,
}

export default function Kontakt() {
  const telHref = `tel:+49${firma.telefon.replace(/[^0-9]/g, '').replace(/^0/, '')}`
  const mailHref = `mailto:${firma.email}`

  return (
    <>
      <Pagehead
        eyebrow="Kontakt"
        title="Sagen Sie uns, was zu fahren ist"
        lead="Ein kurzer Anruf oder ein paar Zeilen genügen. Wir schauen uns Ihre Anfrage persönlich an und melden uns mit einem klaren Angebot zurück. Ohne Umwege."
      />

      <section style={{ padding: 'clamp(32px, 4vw, 56px) 0 clamp(64px, 8vw, 104px)' }}>
        <div
          className="max-w-container mx-auto px-6 grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] items-start"
          style={{ gap: 'clamp(28px, 4vw, 44px)' }}
        >
          {/* Linke Spalte: Kontaktdaten */}
          <div className="flex flex-col gap-[18px]">
            <div
              className="bg-gruen text-white"
              style={{ padding: 'clamp(26px, 3.5vw, 36px)' }}
            >
              <h2
                className="font-condensed font-bold uppercase"
                style={{ fontSize: 'clamp(24px, 3vw, 32px)' }}
              >
                C&nbsp;&amp;&nbsp;B Keilig Transport GmbH
              </h2>
              <div className="flex flex-col gap-4 mt-[22px]">
                <div>
                  <div className="text-[12px] font-bold tracking-[0.14em] uppercase text-eyebrow-gruen-2">
                    Anschrift
                  </div>
                  <div className="text-[16.5px] mt-1 leading-relaxed">
                    {firma.adresse.strasse}
                    <br />
                    {firma.adresse.plz} {firma.adresse.ort}
                    <br />
                    {firma.adresse.region}
                  </div>
                </div>
                <div>
                  <div className="text-[12px] font-bold tracking-[0.14em] uppercase text-eyebrow-gruen-2">
                    Telefon
                  </div>
                  <a
                    href={telHref}
                    className="font-condensed font-bold text-[20px] mt-1 inline-block hover:text-[#ff8c92] transition-colors"
                  >
                    {firma.telefon}
                  </a>
                </div>
                <div>
                  <div className="text-[12px] font-bold tracking-[0.14em] uppercase text-eyebrow-gruen-2">
                    E-Mail
                  </div>
                  <a
                    href={mailHref}
                    className="text-[16.5px] mt-1 inline-block hover:text-[#ff8c92] transition-colors"
                  >
                    {firma.email}
                  </a>
                </div>
                <div>
                  <div className="text-[12px] font-bold tracking-[0.14em] uppercase text-eyebrow-gruen-2">
                    Erreichbarkeit
                  </div>
                  <div className="text-[16.5px] mt-1">
                    {firma.oeffnungszeiten}{' '}
                    <span className="text-eyebrow-gruen-2 text-[13px]">[Platzhalter]</span>
                  </div>
                </div>
              </div>
            </div>
            <Placeholder
              label="[Platzhalter: Karte – Standort Tulpenstr. 8, Freital]"
              aspectRatio="16/10"
            />
          </div>

          {/* Rechte Spalte: Anfrageformular */}
          <div
            className="bg-white border border-rahmen border-t-[5px] border-t-rot"
            style={{ padding: 'clamp(26px, 3.5vw, 40px)' }}
          >
            <h2
              className="font-condensed font-bold uppercase text-gruen"
              style={{ fontSize: 'clamp(26px, 3.4vw, 36px)' }}
            >
              Angebot anfragen
            </h2>
            <ContactForm telefon={firma.telefon} />
          </div>
        </div>
      </section>
    </>
  )
}
