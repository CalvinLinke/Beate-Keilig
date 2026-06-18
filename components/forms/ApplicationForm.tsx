'use client'

import { useState } from 'react'
import FormField from '@/components/forms/FormField'

interface ApplicationFormProps {
  telefon: string
}

interface FormData {
  name: string
  telefon: string
  email: string
  klassen: string
  nachricht: string
  datei: string
}

interface FormErrors {
  name?: string
  telefon?: string
  email?: string
  klassen?: string
}

function isEmail(v: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v)
}

export default function ApplicationForm({ telefon }: ApplicationFormProps) {
  const [data, setData] = useState<FormData>({
    name: '', telefon: '', email: '', klassen: '', nachricht: '', datei: '',
  })
  const [errors, setErrors] = useState<FormErrors>({})
  const [sent, setSent] = useState(false)

  function set(field: keyof FormData) {
    return (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setData((prev) => ({ ...prev, [field]: e.target.value }))
  }

  function handleFile(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0]
    setData((prev) => ({ ...prev, datei: file ? file.name : '' }))
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    const err: FormErrors = {}
    if (!data.name.trim()) err.name = 'Bitte geben Sie Ihren Namen an.'
    if (!data.telefon.trim()) err.telefon = 'Bitte geben Sie eine Telefonnummer an.'
    if (!data.email.trim()) err.email = 'Bitte geben Sie Ihre E-Mail an.'
    else if (!isEmail(data.email)) err.email = 'Bitte eine gültige E-Mail-Adresse eingeben.'
    if (!data.klassen.trim()) err.klassen = 'Bitte geben Sie Ihre Führerscheinklassen an.'

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
      <div className="mt-[26px] bg-[#eaf2ec] border-l-4 border-gruen-hell px-6 py-[26px]">
        <h3 className="font-condensed font-bold text-[24px] uppercase text-gruen">
          Vielen Dank!
        </h3>
        <p className="text-[16px] text-[#2b352e] mt-2 leading-relaxed">
          Ihre Bewerbung ist bei uns eingegangen. Wir melden uns in Kürze bei
          Ihnen. Bei Fragen erreichen Sie uns direkt unter {telefon}.
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
      className="mt-[26px] grid grid-cols-[repeat(auto-fit,minmax(220px,1fr))] gap-[18px]"
    >
      <FormField id="d-name" label="Name" required value={data.name} onChange={set('name')} placeholder="Ihr Name" error={errors.name} />
      <FormField id="d-telefon" label="Telefon" required type="tel" value={data.telefon} onChange={set('telefon')} placeholder="Für den Rückruf" error={errors.telefon} />
      <FormField id="d-email" label="E-Mail" required type="email" value={data.email} onChange={set('email')} placeholder="name@beispiel.de" error={errors.email} />
      <FormField id="d-klassen" label="Führerscheinklassen" required value={data.klassen} onChange={set('klassen')} placeholder="z. B. C, CE, C1" error={errors.klassen} />

      <div className="col-span-full">
        <FormField
          id="d-nachricht"
          label="Nachricht"
          area
          rows={4}
          value={data.nachricht}
          onChange={set('nachricht')}
          placeholder="Erzählen Sie uns kurz von sich. Erfahrung, Wunschtouren, Verfügbarkeit."
        />
      </div>

      {/* Datei-Upload */}
      <div className="col-span-full">
        <label className="block text-[13px] font-bold tracking-[0.04em] uppercase text-nav-text mb-2">
          Lebenslauf (optional)
        </label>
        <label className="flex items-center gap-[14px] border border-dashed border-[#b4c0b6] bg-input-bg px-[18px] py-[16px] cursor-pointer hover:border-gruen transition-colors">
          <span className="bg-gruen text-white px-4 py-[9px] font-condensed font-bold text-[15px] tracking-[0.03em] uppercase flex-none">
            Datei wählen
          </span>
          <span className="text-[14.5px] text-text-muted-2">
            {data.datei || 'Keine Datei gewählt (PDF, optional)'}
          </span>
          <input
            type="file"
            accept=".pdf,.doc,.docx"
            onChange={handleFile}
            className="sr-only"
            aria-label="Lebenslauf hochladen"
          />
        </label>
      </div>

      <div className="col-span-full flex flex-wrap gap-[14px] items-center mt-1">
        <button
          type="submit"
          className="font-condensed font-bold text-[19px] tracking-[0.04em] text-white uppercase bg-rot hover:bg-rot-hover transition-colors px-[30px] py-[15px]"
          style={{ clipPath: 'polygon(0 0, 100% 0, calc(100% - 12px) 100%, 0 100%)' }}
        >
          Bewerbung absenden
        </button>
        <span className="text-[13px] text-[#8a9389]">* Pflichtfeld</span>
      </div>
    </form>
  )
}
