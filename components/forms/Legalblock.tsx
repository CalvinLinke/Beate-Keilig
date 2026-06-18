interface LegalblockProps {
  titel: string
  body: string
}

export default function Legalblock({ titel, body }: LegalblockProps) {
  return (
    <div className="mt-6">
      <h3 className="font-condensed text-[20px] font-bold uppercase text-gruen tracking-[0.01em]">
        {titel}
      </h3>
      <p className="whitespace-pre-line text-[16.5px] text-[#2b352e] leading-[1.7] mt-[6px]">
        {body}
      </p>
    </div>
  )
}
