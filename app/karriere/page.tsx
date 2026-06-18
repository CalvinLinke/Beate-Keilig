import type { Metadata } from 'next'
import firma from '@/content/firma.json'
import seo from '@/content/seo.json'
import Pagehead from '@/components/sections/Pagehead'
import ApplicationForm from '@/components/forms/ApplicationForm'

export const metadata: Metadata = {
  title: seo.karriere.title,
  description: seo.karriere.description,
}

const benefits = [
  {
    title: 'Geregelte Touren',
    text: 'Planbare Einsätze und ehrliche Absprachen. Sie wissen, woran Sie sind.',
  },
  {
    title: 'Moderne Fahrzeuge',
    text: 'Gepflegte LKW von Mercedes-Benz und Volvo, die wir in Schuss halten.',
  },
  {
    title: 'Regionales Team',
    text: 'Ein eingespieltes Team aus dem Raum Dresden, in dem man sich kennt.',
  },
  {
    title: 'Familienbetrieb',
    text: 'Kurze Wege, persönliche Wertschätzung. Bei uns sind Sie keine Nummer.',
  },
]

export default function Karriere() {
  return (
    <>
      <Pagehead
        eyebrow="Karriere"
        title="Bei uns sind Sie keine Nummer"
        lead="Wir suchen Berufskraftfahrer, die ihr Handwerk verstehen und ordentlich arbeiten. Bei uns fahren Sie in einem ehrlichen Familienbetrieb mit geregelten Touren, modernen Fahrzeugen und einem Team, das zusammenhält. Hier kennt man sich noch beim Namen."
      />

      {/* ===================== VORTEILE ===================== */}
      <section style={{ padding: 'clamp(40px, 5vw, 64px) 0' }}>
        <div className="max-w-container mx-auto px-6">
          <div className="grid grid-cols-[repeat(auto-fit,minmax(220px,1fr))] gap-4">
            {benefits.map((b) => (
              <div
                key={b.title}
                className="bg-white border border-rahmen border-l-4 border-l-gruen-hell px-6 py-[26px]"
              >
                <h3 className="font-condensed font-bold text-[22px] uppercase text-gruen">
                  {b.title}
                </h3>
                <p className="text-[15.5px] text-text-muted mt-[10px] leading-[1.6]">
                  {b.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== BEWERBUNGSFORMULAR ===================== */}
      <section style={{ padding: 'clamp(24px, 3vw, 40px) 0 clamp(64px, 8vw, 104px)' }}>
        <div className="max-w-[840px] mx-auto px-6">
          <div
            className="bg-white border border-rahmen border-t-[5px] border-t-rot"
            style={{ padding: 'clamp(28px, 4vw, 48px)' }}
          >
            <h2
              className="font-condensed font-bold uppercase text-gruen"
              style={{ fontSize: 'clamp(28px, 3.6vw, 40px)' }}
            >
              Jetzt bewerben
            </h2>
            <p className="text-[16px] text-text-muted mt-[10px] leading-[1.6]">
              Schicken Sie uns Ihre Eckdaten. Wir melden uns persönlich bei Ihnen zurück.
            </p>
            <ApplicationForm telefon={firma.telefon} />
          </div>
        </div>
      </section>
    </>
  )
}
