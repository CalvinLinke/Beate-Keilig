interface FirmaData {
  adresse: { strasse: string; plz: string; ort: string; region: string }
  telefon: string
  email: string
  oeffnungszeiten: string
}

export default function TopBar({ firma }: { firma: FirmaData }) {
  const telHref = `tel:+49${firma.telefon.replace(/[^0-9]/g, '').replace(/^0/, '')}`
  const mailHref = `mailto:${firma.email}`

  return (
    <div className="bg-anthrazit text-[#cfd8d0] text-[13.5px] tracking-[0.02em]">
      <div className="max-w-container mx-auto px-6 py-[9px] flex flex-wrap gap-x-[26px] gap-y-[10px] items-center justify-between">
        <div className="flex flex-wrap gap-x-[22px] gap-y-[6px] items-center">
          <span className="inline-flex items-center gap-2">
            <span
              className="w-2 h-2 rounded-full bg-gruen-hell inline-block"
              aria-hidden="true"
            />
            {firma.adresse.strasse}, {firma.adresse.plz} {firma.adresse.ort} ·{' '}
            {firma.adresse.region.split(',')[0]}
          </span>
          <span className="text-[#6f7d72]">{firma.oeffnungszeiten}</span>
        </div>
        <div className="flex gap-[22px] items-center">
          <a
            href={telHref}
            className="text-white font-semibold tracking-[0.03em] hover:text-[#b9e0c6] transition-colors"
          >
            ☎ {firma.telefon}
          </a>
          <a
            href={mailHref}
            className="hover:text-white transition-colors"
          >
            {firma.email}
          </a>
        </div>
      </div>
    </div>
  )
}
