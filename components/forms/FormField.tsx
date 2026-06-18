import ChevronIcon from '@/components/ui/ChevronIcon'

interface FormFieldProps {
  label: string
  error?: string
  type?: string
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void
  placeholder?: string
  area?: boolean
  rows?: number
  required?: boolean
  id: string
}

export default function FormField({
  label,
  error,
  type = 'text',
  value,
  onChange,
  placeholder,
  area = false,
  rows = 4,
  required = false,
  id,
}: FormFieldProps) {
  const baseInputClass =
    'w-full px-[14px] py-[13px] border border-rahmen-input bg-input-bg text-[15.5px] outline-none transition-colors focus:border-gruen'

  return (
    <div className="w-full">
      <label
        htmlFor={id}
        className="block text-[13px] font-bold tracking-[0.04em] uppercase text-nav-text mb-2"
      >
        {label}
        {required && <span className="text-rot ml-0.5">*</span>}
      </label>

      {area ? (
        <textarea
          id={id}
          value={value}
          onChange={onChange}
          rows={rows}
          placeholder={placeholder}
          className={`${baseInputClass} resize-y leading-relaxed`}
          aria-describedby={error ? `${id}-error` : undefined}
          aria-invalid={!!error}
        />
      ) : (
        <input
          id={id}
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className={baseInputClass}
          aria-describedby={error ? `${id}-error` : undefined}
          aria-invalid={!!error}
        />
      )}

      {error && (
        <div
          id={`${id}-error`}
          role="alert"
          className="flex items-center gap-[6px] text-rot text-[13px] font-semibold mt-[6px]"
        >
          <ChevronIcon size={9} color="#C8202A" />
          {error}
        </div>
      )}
    </div>
  )
}
