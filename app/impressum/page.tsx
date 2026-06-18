import type { Metadata } from 'next'
import firma from '@/content/firma.json'
import seo from '@/content/seo.json'
import Pagehead from '@/components/sections/Pagehead'
import Legalblock from '@/components/forms/Legalblock'

export const metadata: Metadata = {
  title: seo.impressum.title,
  description: seo.impressum.description,
}

export default function Impressum() {
  return (
    <>
      <Pagehead
        eyebrow="Rechtliches"
        title="Impressum"
        lead="Angaben gemäß § 5 TMG."
      />

      <section style={{ padding: 'clamp(24px, 3vw, 40px) 0 clamp(64px, 8vw, 104px)' }}>
        <div className="max-w-[780px] mx-auto px-6 text-[16.5px] text-[#2b352e] leading-[1.7]">
          <Legalblock
            titel="Anbieter"
            body={`${firma.name}\n${firma.adresse.strasse}\n${firma.adresse.plz} ${firma.adresse.ort}`}
          />
          <Legalblock
            titel="Vertreten durch"
            body={`${firma.inhaber.join(', ')} (Geschäftsführung)`}
          />
          <Legalblock
            titel="Kontakt"
            body={`Telefon: ${firma.telefon}\nE-Mail: ${firma.email}`}
          />
          <Legalblock
            titel="Registereintrag"
            body={`Eintragung im Handelsregister.\nRegistergericht: ${firma.register.gericht}\nRegisternummer: ${firma.register.nummer}`}
          />
          <Legalblock
            titel="Umsatzsteuer-ID"
            body="[Platzhalter: USt-IdNr. gemäß § 27a UStG ergänzen]"
          />
          <Legalblock
            titel="Verantwortlich für den Inhalt"
            body="[Platzhalter: Name & Anschrift gemäß § 18 Abs. 2 MStV]"
          />

          <div className="mt-6 bg-white border border-dashed border-[#b4c0b6] px-5 py-[18px] font-mono text-[13px] text-[#7a847b]">
            [Platzhalter: Dieser Impressumstext ist ein Entwurf und durch einen rechtssicheren, geprüften Text zu ersetzen.]
          </div>
        </div>
      </section>
    </>
  )
}
