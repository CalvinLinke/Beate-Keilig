import type { Metadata } from 'next'
import firma from '@/content/firma.json'
import seo from '@/content/seo.json'
import Pagehead from '@/components/sections/Pagehead'
import Legalblock from '@/components/forms/Legalblock'

export const metadata: Metadata = {
  title: seo.datenschutz.title,
  description: seo.datenschutz.description,
}

export default function Datenschutz() {
  return (
    <>
      <Pagehead
        eyebrow="Rechtliches"
        title="Datenschutzerklärung"
        lead="Wir nehmen den Schutz Ihrer persönlichen Daten ernst. Nachfolgend informieren wir Sie über die Verarbeitung Ihrer Daten auf dieser Website."
      />

      <section style={{ padding: 'clamp(24px, 3vw, 40px) 0 clamp(64px, 8vw, 104px)' }}>
        <div className="max-w-[780px] mx-auto px-6 text-[16.5px] text-[#2b352e] leading-[1.7]">
          <Legalblock
            titel="Verantwortliche Stelle"
            body={`${firma.name}, ${firma.adresse.strasse}, ${firma.adresse.plz} ${firma.adresse.ort}. Telefon ${firma.telefon}, E-Mail ${firma.email}.`}
          />
          <Legalblock
            titel="Erhebung von Daten über Formulare"
            body="Wenn Sie uns über das Anfrage- oder Bewerbungsformular kontaktieren, verarbeiten wir die von Ihnen angegebenen Daten ausschließlich zur Bearbeitung Ihrer Anfrage. [Platzhalter: Details zu Speicherdauer und Rechtsgrundlage ergänzen.]"
          />
          <Legalblock
            titel="Ihre Rechte"
            body="Sie haben das Recht auf Auskunft, Berichtigung, Löschung und Einschränkung der Verarbeitung Ihrer Daten sowie ein Widerspruchsrecht und das Recht auf Datenübertragbarkeit. [Platzhalter: vollständige Belehrung ergänzen.]"
          />
          <Legalblock
            titel="Hosting & Server-Logs"
            body="[Platzhalter: Angaben zum Hosting-Anbieter und zu automatisch erfassten Server-Logfiles ergänzen.]"
          />

          <div className="mt-6 bg-white border border-dashed border-[#b4c0b6] px-5 py-[18px] font-mono text-[13px] text-[#7a847b]">
            [Platzhalter: Diese Datenschutzerklärung ist ein Entwurf und durch einen rechtssicheren, DSGVO-konformen Text zu ersetzen.]
          </div>
        </div>
      </section>
    </>
  )
}
