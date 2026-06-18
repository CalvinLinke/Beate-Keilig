import Link from 'next/link'

interface CtaSectionProps {
  telefon: string
}

export default function CtaSection({ telefon }: CtaSectionProps) {
  const telHref = `tel:+49${telefon.replace(/[^0-9]/g, '').replace(/^0/, '')}`

  return (
    <section
      className="bg-gruen text-white w-full"
      style={{
        clipPath: 'polygon(0 56px, 100% 0, 100% 100%, 0 100%)',
        paddingTop: 'calc(clamp(48px, 6vw, 80px) + 56px)',
        paddingBottom: 'clamp(48px, 6vw, 80px)',
      }}
    >
      <div className="max-w-container mx-auto px-6 grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-[clamp(24px,4vw,48px)] items-center">
        <div>
          <div className="text-[13px] font-bold tracking-[0.16em] uppercase text-eyebrow-gruen mb-3">
            Bereit für Ihre Anfrage?
          </div>
          <h2
            className="font-condensed font-extrabold uppercase max-w-[14em]"
            style={{
              fontSize: 'clamp(30px, 4.2vw, 48px)',
              textWrap: 'balance' as React.CSSProperties['textWrap'],
            }}
          >
            Sagen Sie uns, was zu fahren ist
          </h2>
          <p className="text-[17px] text-[#cfe3d6] mt-[14px] leading-[1.65] max-w-[32em]">
            Ein kurzer Anruf oder ein paar Zeilen genügen. Wir melden uns
            persönlich mit einem klaren Angebot zurück.
          </p>
        </div>
        <div className="flex flex-wrap gap-[14px] justify-start">
          <Link
            href="/kontakt"
            className="inline-flex items-center font-condensed font-bold text-[20px] tracking-[0.04em] text-white uppercase bg-rot hover:bg-rot-hover transition-colors px-[30px] py-[16px]"
            style={{ clipPath: 'polygon(0 0, 100% 0, calc(100% - 12px) 100%, 0 100%)' }}
          >
            Angebot anfragen
          </Link>
          <a
            href={telHref}
            className="inline-flex items-center gap-[10px] border-2 border-white/55 hover:border-white hover:bg-white/[0.08] text-white font-condensed font-bold text-[20px] tracking-[0.03em] uppercase px-[26px] py-[14px] transition-colors"
          >
            ☎ {telefon}
          </a>
        </div>
      </div>
    </section>
  )
}
