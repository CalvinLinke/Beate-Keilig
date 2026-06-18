import type { Metadata } from 'next'
import Link from 'next/link'
import firma from '@/content/firma.json'
import leistungen from '@/content/leistungen.json'
import seo from '@/content/seo.json'
import ChevronIcon from '@/components/ui/ChevronIcon'
import Placeholder from '@/components/ui/Placeholder'
import CtaSection from '@/components/sections/CtaSection'

export const metadata: Metadata = {
  title: seo.startseite.title,
  description: seo.startseite.description,
}

const stats = [
  { num: 'seit 1897', label: 'Über 125 Jahre Erfahrung' },
  { num: '8', label: 'Moderne LKW · Mercedes-Benz & Volvo' },
  { num: '1.000+', label: 'Ausgeführte Aufträge' },
  { num: '100+', label: 'Zufriedene Kunden' },
]

const usps = [
  {
    title: 'Schnell',
    text: 'Wenn es eilig ist, sind wir zur Stelle. Kurze Entscheidungswege statt langer Warteschleifen.',
  },
  {
    title: 'Zuverlässig',
    text: 'Zugesagt ist zugesagt. Termine halten wir. Darauf können Sie sich verlassen.',
  },
  {
    title: 'Ordentlich',
    text: 'Ihre Fracht behandeln wir, als wäre sie unsere eigene. Sauber verladen, sicher gesichert.',
  },
  {
    title: 'Persönlich',
    text: 'Sie reden mit der Familie und mit den Leuten, die auch tatsächlich fahren. Keine Hotline.',
  },
]

const regions = [
  'Deutschland – flächendeckend',
  'Polen',
  'Tschechien',
]

const telHref = `tel:+49${firma.telefon.replace(/[^0-9]/g, '').replace(/^0/, '')}`

export default function Startseite() {
  return (
    <>
      {/* ===================== HERO ===================== */}
      <section
        className="bg-gruen text-white relative overflow-hidden"
        style={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 calc(100% - 64px))' }}
      >
        <div
          className="max-w-container mx-auto px-6 grid grid-cols-[repeat(auto-fit,minmax(320px,1fr))] items-center"
          style={{
            paddingTop: 'clamp(56px, 7vw, 92px)',
            paddingBottom: 'calc(clamp(56px, 7vw, 92px) + 56px)',
            gap: 'clamp(36px, 5vw, 64px)',
          }}
        >
          {/* Linke Spalte: Text */}
          <div>
            <div className="inline-flex items-center gap-[10px] text-[13px] font-bold tracking-[0.14em] uppercase text-eyebrow-gruen mb-[22px]">
              <span className="w-[26px] h-[2px] bg-rot inline-block" aria-hidden="true" />
              C&nbsp;&amp;&nbsp;B Keilig Transport GmbH · Freital
            </div>
            <h1
              className="font-condensed font-extrabold uppercase"
              style={{
                fontSize: 'clamp(42px, 6vw, 72px)',
                textWrap: 'balance' as React.CSSProperties['textWrap'],
              }}
            >
              Seit 1897 bringen wir, was Ihnen wichtig ist, sicher ans Ziel.
            </h1>
            <p
              className="font-condensed font-medium text-[#c8e6d2] mt-5 italic"
              style={{ fontSize: 'clamp(20px, 2.4vw, 26px)' }}
            >
              &bdquo;{firma.slogan}&ldquo;
            </p>
            <p className="text-[18px] text-[#dcebe1] mt-[18px] max-w-[30em] leading-[1.6]">
              Familiengeführte Spedition aus dem Raum Dresden. Deutschlandweit,
              dazu Polen und Tschechien. Persönlich betreut. Vom ersten Anruf
              bis zur Übergabe.
            </p>
            <div className="flex flex-wrap gap-[14px] mt-8">
              <Link
                href="/kontakt"
                className="inline-flex items-center font-condensed font-bold text-[19px] tracking-[0.04em] text-white uppercase bg-rot hover:bg-rot-hover transition-colors px-[26px] py-[15px]"
                style={{ clipPath: 'polygon(0 0, 100% 0, calc(100% - 12px) 100%, 0 100%)' }}
              >
                Angebot anfragen
              </Link>
              <a
                href={telHref}
                className="inline-flex items-center gap-[10px] border-2 border-white/50 hover:border-white hover:bg-white/[0.08] text-white font-condensed font-bold text-[19px] tracking-[0.03em] uppercase px-6 py-[13px] transition-colors"
              >
                ☎ {firma.telefon}
              </a>
            </div>
          </div>

          {/* Rechte Spalte: Hero-Bild + Siegel */}
          <div className="relative">
            <Placeholder
              label="[Platzhalter: LKW-Flotte vor der Halle]"
              aspectRatio="4/3"
              dark
              clipPath="polygon(0 0, 100% 0, 100% 100%, 40px 100%)"
            />
            {/* „Seit 1897" Siegel */}
            <div
              className="absolute -left-[18px] -bottom-[18px] w-[104px] h-[104px] rounded-full bg-offwhite text-gruen border-[3px] border-rot flex flex-col items-center justify-center text-center"
              style={{ boxShadow: '0 10px 24px rgba(0,0,0,.22)' }}
              aria-label="Seit 1897 Familienbetrieb"
            >
              <span className="text-[9px] font-bold tracking-[0.18em] uppercase text-[#788477]">seit</span>
              <span className="font-condensed font-extrabold text-[32px] leading-[0.9]">1897</span>
              <span className="text-[8.5px] font-bold tracking-[0.12em] uppercase text-[#788477]">Familienbetrieb</span>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== ZAHLENBAND ===================== */}
      <section
        className="bg-anthrazit text-white -mt-px"
        style={{
          clipPath: 'polygon(0 0, 100% 0, 100% calc(100% - 40px), 0 100%)',
          paddingTop: 'clamp(48px, 6vw, 72px)',
          paddingBottom: 'calc(clamp(48px, 6vw, 72px) + 40px)',
        }}
      >
        <div className="max-w-container mx-auto px-6 grid grid-cols-[repeat(auto-fit,minmax(160px,1fr))] gap-6">
          {stats.map((s) => (
            <div key={s.num} className="text-center py-2 px-1">
              <div
                className="font-condensed font-extrabold text-white leading-none"
                style={{ fontSize: 'clamp(38px, 5vw, 54px)' }}
              >
                <span className="text-[#ff5b63]">{s.num}</span>
              </div>
              <div className="mt-2 text-[14.5px] text-[#aeb9b0] tracking-[0.02em] leading-[1.35]">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ===================== LEISTUNGEN ÜBERBLICK ===================== */}
      <section style={{ padding: 'clamp(64px, 8vw, 104px) 0' }}>
        <div className="max-w-container mx-auto px-6">
          <div className="max-w-[46em] mb-11">
            <div className="text-[13px] font-bold tracking-[0.16em] uppercase text-rot mb-3">
              Unsere Leistungen
            </div>
            <h2
              className="font-condensed font-bold uppercase text-gruen"
              style={{ fontSize: 'clamp(34px, 4.5vw, 52px)' }}
            >
              Was wir für Sie auf die Straße bringen
            </h2>
            <p className="text-[18px] text-[#414b44] mt-4 leading-[1.65]">
              Vom Stückgut bis zur kompletten Ladung, deutschlandweit und über
              die Grenze. Wir kümmern uns persönlich um Ihre Fracht. Ordentlich,
              pünktlich, ohne Ausreden.
            </p>
          </div>
          <div className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-[18px]">
            {leistungen.map((srv) => (
              <div
                key={srv.id}
                className="bg-white border border-rahmen px-[26px] pt-[30px] pb-[26px] relative flex flex-col gap-[14px] transition-hover hover:-translate-y-0.5 hover:shadow-[0_14px_30px_rgba(20,87,47,.1)]"
              >
                <span className="w-[46px] h-[46px] bg-[#eaf2ec] inline-flex items-center justify-center">
                  <ChevronIcon size={20} color="#14572F" />
                </span>
                <h3 className="font-condensed font-bold text-[24px] uppercase text-anthrazit">
                  {srv.titel}
                </h3>
                <p className="text-[15.5px] text-text-muted leading-[1.6] flex-1">
                  {srv.kurztext}
                </p>
                <Link
                  href="/leistungen"
                  className="self-start text-rot font-bold text-[14px] tracking-[0.04em] uppercase inline-flex items-center gap-2 hover:gap-3 transition-all"
                >
                  Mehr erfahren →
                </Link>
              </div>
            ))}
          </div>
          <p className="mt-6 text-[14.5px] text-[#6b756d]">
            Kein Schwerlast- oder Spezialtransport, kein Gefahrgut. Dafür alles andere mit voller Aufmerksamkeit.
          </p>
        </div>
      </section>

      {/* ===================== WARUM KEILIG ===================== */}
      <section
        className="bg-gruen text-white"
        style={{
          clipPath: 'polygon(0 56px, 100% 0, 100% 100%, 0 100%)',
          paddingTop: 'calc(clamp(56px, 7vw, 92px) + 56px)',
          paddingBottom: 'clamp(56px, 7vw, 92px)',
        }}
      >
        <div className="max-w-container mx-auto px-6">
          <div className="text-[13px] font-bold tracking-[0.16em] uppercase text-eyebrow-gruen mb-3">
            Warum Keilig?
          </div>
          <h2
            className="font-condensed font-bold uppercase max-w-[18em]"
            style={{ fontSize: 'clamp(32px, 4.5vw, 50px)' }}
          >
            Vom ersten Kontakt bis zur Auslieferung
          </h2>
          <div className="grid grid-cols-[repeat(auto-fit,minmax(220px,1fr))] gap-[14px] mt-10">
            {usps.map((u) => (
              <div key={u.title} className="border-t-[3px] border-rot pt-[18px]">
                <h3 className="font-condensed font-bold text-[27px] uppercase text-white">
                  {u.title}
                </h3>
                <p className="text-[15.5px] text-[#cfe3d6] mt-[10px] leading-[1.6]">
                  {u.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== TRADITION TEASER ===================== */}
      <section style={{ padding: 'clamp(64px, 8vw, 104px) 0' }}>
        <div
          className="max-w-container mx-auto px-6 grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] items-center"
          style={{ gap: 'clamp(32px, 5vw, 60px)' }}
        >
          <Placeholder
            label="[Platzhalter: historisches Foto / Gründerfamilie Keilig]"
            aspectRatio="5/4"
            clipPath="polygon(0 0, 100% 0, 100% calc(100% - 40px), 0 100%)"
          />
          <div>
            <div className="text-[13px] font-bold tracking-[0.16em] uppercase text-rot mb-3">
              Seit 1897
            </div>
            <h2
              className="font-condensed font-bold uppercase text-gruen"
              style={{ fontSize: 'clamp(30px, 4vw, 46px)' }}
            >
              Ein Familienbetrieb. Vier Generationen Erfahrung. Ein Versprechen.
            </h2>
            <p className="text-[17.5px] text-[#414b44] mt-[18px] leading-[1.7]">
              Was 1897 begann, führen wir bis heute mit denselben Werten weiter.
              Verlässlichkeit, Ordentlichkeit und ein gegebenes Wort, das hält.
              Bei uns reden Sie mit den Leuten, die auch tatsächlich fahren.
              Keine Konzern-Hotline.
            </p>
            <Link
              href="/ueber-uns"
              className="inline-flex items-center mt-[26px] border-2 border-gruen text-gruen hover:bg-gruen hover:text-white font-condensed font-bold text-[18px] tracking-[0.03em] uppercase px-6 py-[13px] transition-colors"
            >
              Unsere Geschichte
            </Link>
          </div>
        </div>
      </section>

      {/* ===================== EINSATZGEBIET ===================== */}
      <section className="bg-white border-t border-rahmen border-b" style={{ padding: 'clamp(56px, 7vw, 88px) 0' }}>
        <div
          className="max-w-container mx-auto px-6 grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] items-center"
          style={{ gap: 'clamp(32px, 5vw, 56px)' }}
        >
          <div>
            <div className="text-[13px] font-bold tracking-[0.16em] uppercase text-rot mb-3">
              Einsatzgebiet
            </div>
            <h2
              className="font-condensed font-bold uppercase text-gruen"
              style={{ fontSize: 'clamp(30px, 4vw, 46px)' }}
            >
              Zu Hause in Sachsen. Unterwegs in Europa.
            </h2>
            <p className="text-[17.5px] text-[#414b44] mt-4 leading-[1.7] max-w-[30em]">
              Unser fester Standort ist Freital bei Dresden. Von hier aus fahren
              wir deutschlandweit. Und regelmäßig über die Grenze nach Polen und
              Tschechien.
            </p>
            <div className="flex flex-col gap-[10px] mt-6">
              {regions.map((r) => (
                <div
                  key={r}
                  className="flex items-center gap-[14px] px-[18px] py-[14px] bg-offwhite border-l-4 border-gruen-hell"
                >
                  <ChevronIcon size={14} color="#14572F" />
                  <span className="font-condensed font-bold text-[20px] uppercase text-anthrazit">
                    {r}
                  </span>
                </div>
              ))}
            </div>
          </div>
          <Placeholder
            label="[Platzhalter: Karte Deutschland · Polen · Tschechien]"
            aspectRatio="4/3"
          />
        </div>
      </section>

      {/* ===================== ABSCHLUSS CTA ===================== */}
      <CtaSection telefon={firma.telefon} />
    </>
  )
}
