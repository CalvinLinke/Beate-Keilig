import Link from 'next/link'
import ChevronIcon from '@/components/ui/ChevronIcon'

interface FirmaData {
  name: string
  slogan: string
  adresse: { strasse: string; plz: string; ort: string }
  telefon: string
  email: string
  register: { gericht: string; nummer: string }
}

const navItems = [
  { label: 'Start', href: '/' },
  { label: 'Leistungen', href: '/leistungen' },
  { label: 'Über uns', href: '/ueber-uns' },
  { label: 'Fuhrpark', href: '/fuhrpark' },
  { label: 'Karriere', href: '/karriere' },
  { label: 'Kontakt', href: '/kontakt' },
]

export default function Footer({ firma }: { firma: FirmaData }) {
  const telHref = `tel:+49${firma.telefon.replace(/[^0-9]/g, '').replace(/^0/, '')}`
  const mailHref = `mailto:${firma.email}`
  const year = new Date().getFullYear()

  return (
    <footer
      className="bg-anthrazit text-footer-text"
      style={{
        clipPath: 'polygon(0 48px, 100% 0, 100% 100%, 0 100%)',
        paddingTop: 'calc(48px + clamp(48px, 6vw, 72px))',
        paddingBottom: '36px',
      }}
    >
      <div className="max-w-container mx-auto px-6">
        <div className="grid grid-cols-[repeat(auto-fit,minmax(220px,1fr))] gap-9">

          {/* Spalte 1: Logo + Kurzbeschreibung + Slogan */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <ChevronIcon size={36} color="#2C7A4B" />
              <span className="flex flex-col leading-none">
                <span className="font-condensed font-extrabold text-[23px] text-white uppercase">
                  Keilig
                </span>
                <span className="text-[10px] font-semibold tracking-[0.2em] text-footer-muted uppercase mt-0.5">
                  Spedition · seit 1897
                </span>
              </span>
            </div>
            <p className="text-[14.5px] leading-relaxed text-footer-link max-w-[24em]">
              Familiengeführte Spedition aus Freital bei Dresden. Schnell,
              zuverlässig, ordentlich. Seit über 125 Jahren.
            </p>
            <p className="font-condensed text-[18px] text-gruen-hell italic mt-[14px]">
              &bdquo;{firma.slogan}&ldquo;
            </p>
          </div>

          {/* Spalte 2: Navigation */}
          <div>
            <div className="text-[12px] font-bold tracking-[0.14em] uppercase text-footer-muted mb-[14px]">
              Navigation
            </div>
            <div className="flex flex-col gap-[9px]">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-[15px] text-footer-text hover:text-white transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Spalte 3: Kontakt */}
          <div>
            <div className="text-[12px] font-bold tracking-[0.14em] uppercase text-footer-muted mb-[14px]">
              Kontakt
            </div>
            <div className="flex flex-col gap-[9px] text-[15px]">
              <span className="leading-relaxed">
                {firma.adresse.strasse}
                <br />
                {firma.adresse.plz} {firma.adresse.ort}
              </span>
              <a
                href={telHref}
                className="text-white font-semibold hover:text-gruen-hell transition-colors"
              >
                {firma.telefon}
              </a>
              <a
                href={mailHref}
                className="hover:text-white transition-colors"
              >
                {firma.email}
              </a>
            </div>
          </div>

          {/* Spalte 4: Rechtliches */}
          <div>
            <div className="text-[12px] font-bold tracking-[0.14em] uppercase text-footer-muted mb-[14px]">
              Rechtliches
            </div>
            <div className="flex flex-col gap-[9px]">
              <Link
                href="/impressum"
                className="text-[15px] text-footer-text hover:text-white transition-colors"
              >
                Impressum
              </Link>
              <Link
                href="/datenschutz"
                className="text-[15px] text-footer-text hover:text-white transition-colors"
              >
                Datenschutz
              </Link>
            </div>
            <div className="mt-[18px] text-[13px] text-footer-muted leading-relaxed">
              {firma.name}
              <br />
              {firma.register.gericht} · {firma.register.nummer}
            </div>
          </div>
        </div>

        {/* Untere Zeile */}
        <div className="mt-7 pt-[18px] border-t border-[#2c332e] flex flex-wrap gap-x-5 gap-y-2 justify-between text-[13px] text-footer-muted">
          <span>
            © {year} {firma.name}. Alle Rechte vorbehalten.
          </span>
          <span className="font-mono text-[#5f6962]">
            Website-Entwurf · Platzhalterbilder bitte durch echte Fotos ersetzen
          </span>
        </div>
      </div>
    </footer>
  )
}
