import ChevronIcon from '@/components/ui/ChevronIcon'

interface PageheadProps {
  eyebrow: string
  title: string
  lead: string
}

export default function Pagehead({ eyebrow, title, lead }: PageheadProps) {
  return (
    <section className="bg-white border-b border-rahmen w-full relative overflow-hidden">
      <div className="max-w-container mx-auto px-6 py-[clamp(40px,6vw,72px)]">
        <div className="inline-flex items-center gap-[11px] mb-4">
          <ChevronIcon size={18} color="#14572F" />
          <span className="text-[13px] font-bold tracking-[0.16em] uppercase text-rot">
            {eyebrow}
          </span>
        </div>
        <h1
          className="font-condensed font-extrabold text-gruen uppercase max-w-[16em]"
          style={{
            fontSize: 'clamp(36px, 5.4vw, 62px)',
            textWrap: 'balance' as React.CSSProperties['textWrap'],
          }}
        >
          {title}
        </h1>
        <p
          className="text-[18px] text-[#414b44] mt-[18px] leading-[1.7] max-w-[44em]"
        >
          {lead}
        </p>
      </div>
      {/* Dekoratives Dreieck rechts oben (aus Prototyp) */}
      <span
        className="absolute right-[-40px] top-[-40px] w-[180px] h-[180px] bg-offwhite opacity-70"
        style={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%)' }}
        aria-hidden="true"
      />
    </section>
  )
}
