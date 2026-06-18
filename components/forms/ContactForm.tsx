'use client'

import { useState } from 'react'
import FormField from '@/components/forms/FormField'

interface ContactFormProps {
  telefon: string
}

interface FormData {
  name: string
  firma: string
  email: string
  telefon: string
  art: string
  abhol: string
  liefer: string
  termin: string
  nachricht: string
}

interface FormErrors {
  name?: string
  email?: string
  telefon?: string
  art?: string
  nachricht?: string
}

function isEmail(v: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v)
}

export default function ContactForm({ telefon }: ContactFormProps) {
  const [data, setData] = useState<FormData>({
    name: '', firma: '', email: '', telefon: '', art: '',
    abhol: '', liefer: '', termin: '', nachricht: '',
  })
  const [errors, setErrors] = useState<FormErrors>({})
  const [sent, setSent] = useState(false)

  function set(field: keyof FormData) {
    return (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setData((prev) => ({ ...prev, [field]: e.target.value }))
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    const err: FormErrors = {}
    if (!data.name.trim()) err.name = 'Bitte geben Sie Ihren Namen an.'
    if (!data.email.trim()) err.email = 'Bitte geben Sie Ihre E-Mail an.'
    else if (!isEmail(data.email)) err.email = 'Bitte eine gültige E-Mail-Adresse eingeben.'
    if (!data.telefon.trim()) err.telefon = 'Bitte geben Sie eine Telefonnummer an.'
    if (!data.art.trim()) err.art = 'Bitte beschreiben Sie kurz die Art des Transports.'
    if (!data.nachricht.trim()) err.nachricht = 'Bitte hinterlassen Sie uns eine kurze Nachricht.'

    if (Object.keys(err).length) {
      setErrors(err)
      return
    }
    setErrors({})
    // TODO: Hier später API-Route oder E-Mail-Dienst anbinden (z. B. Resend, SendGrid)
    setSent(true)
  }

  if (sent) {
    return (
      <div className="mt-[22px] bg-[#eaf2ec] border-l-4 border-gruen-hell px-6 py-[26px]">
        <h3 className="font-condensed font-bold text-[24px] uppercase text-gruen">
          Anfrage erhalten. Danke!
        </h3>
        <p className="text-[16px] text-[#2b352e] mt-2 leading-relaxed">
          Wir schauen uns Ihre Anfrage persönlich an und melden uns zeitnah mit
          einem Angebot. Eilig? Rufen Sie uns gern direkt an: {telefon}.
        </p>
        <p className="text-[12.5px] text-[#8a9389] font-mono mt-[14px]">
          [Hinweis: Formular sendet noch nicht wirklich. Versand wird später angebunden.]
        </p>
      </div>
    )
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="mt-[22px] grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-4"
    >
      <FormField id="c-name" label="Name" required value={data.name} onChange={set('name')} placeholder="Ihr Name" error={errors.name} />
      <FormField id="c-firma" label="Firma" value={data.firma} onChange={set('firma')} placeholder="Ihr Unternehmen" />
      <FormField id="c-email" label="E-Mail" required type="email" value={data.email} onChange={set('email')} placeholder="name@firma.de" error={errors.email} />
      <FormField id="c-telefon" label="Telefon" required type="tel" value={data.telefon} onChange={set('telefon')} placeholder="Für Rückfragen" error={errors.telefon} />

      <div className="col-span-full">
        <FormField id="c-art" label="Art des Transports / Guts" required value={data.art} onChange={set('art')} placeholder="Was soll transportiert werden?" error={errors.art} />
      </div>

      <FormField id="c-abhol" label="Abholort" value={data.abhol} onChange={set('abhol')} placeholder="PLZ / Ort" />
      <FormField id="c-liefer" label="Lieferort" value={data.liefer} onChange={set('liefer')} placeholder="PLZ / Ort" />

      <div className="col-span-full">
        <FormField id="c-termin" label="Wunschtermin" value={data.termin} onChange={set('termin')} placeholder="z. B. KW 26 oder konkretes Datum" />
      </div>

      <div className="col-span-full">
        <FormField id="c-nachricht" label="Nachricht" required area rows={4} value={data.nachricht} onChange={set('nachricht')} placeholder="Beschreiben Sie kurz, worum es geht." error={errors.nachricht} />
      </div>

      <div className="col-span-full flex flex-wrap gap-[14px] items-center mt-0.5">
        <button
          type="submit"
          className="font-condensed font-bold text-[19px] tracking-[0.04em] text-white uppercase bg-rot hover:bg-rot-hover transition-colors px-[30px] py-[15px]"
          style={{ clipPath: 'polygon(0 0, 100% 0, calc(100% - 12px) 100%, 0 100%)' }}
        >
          Anfrage absenden
        </button>
        <span className="text-[13px] text-[#8a9389]">* Pflichtfeld</span>
      </div>
    </form>
  )
}
