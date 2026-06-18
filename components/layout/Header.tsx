'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState, useEffect, useRef } from 'react'
import ChevronIcon from '@/components/ui/ChevronIcon'

interface FirmaData {
  telefon: string
  name: string
}

const navItems = [
  { label: 'Start', href: '/' },
  { label: 'Leistungen', href: '/leistungen' },
  { label: 'Über uns', href: '/ueber-uns' },
  { label: 'Fuhrpark', href: '/fuhrpark' },
  { label: 'Karriere', href: '/karriere' },
  { label: 'Kontakt', href: '/kontakt' },
]

export default function Header({ firma }: { firma: FirmaData }) {
  const pathname = usePathname()
  const [menuOpen, setMenuOpen] = useState(false)
  const drawerRef = useRef<HTMLDivElement>(null)
  const burgerRef = useRef<HTMLButtonElement>(null)

  const telHref = `tel:+49${firma.telefon.replace(/[^0-9]/g, '').replace(/^0/, '')}`

  // ESC schließt das Menü
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape' && menuOpen) {
        setMenuOpen(false)
        burgerRef.current?.focus()
      }
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [menuOpen])

  // Scroll sperren wenn Menü offen
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  // Fokus-Trap im Drawer
  useEffect(() => {
    if (!menuOpen) return
    const drawer = drawerRef.current
    if (!drawer) return
    const focusable = drawer.querySelectorAll<HTMLElement>(
      'a, button, [tabindex]:not([tabindex="-1"])'
    )
    const first = focusable[0]
    const last = focusable[focusable.length - 1]
    first?.focus()

    function trapFocus(e: KeyboardEvent) {
      if (e.key !== 'Tab') return
      if (e.shiftKey) {
        if (document.activeElement === first) {
          e.preventDefault()
          last?.focus()
        }
      } else {
        if (document.activeElement === last) {
          e.preventDefault()
          first?.focus()
        }
      }
    }
    drawer.addEventListener('keydown', trapFocus)
    return () => drawer.removeEventListener('keydown', trapFocus)
  }, [menuOpen])

  function isActive(href: string) {
    if (href === '/') return pathname === '/'
    return pathname.startsWith(href)
  }

  return (
    <>
      <header className="sticky top-0 z-50 bg-white/[0.96] backdrop-blur-sm border-b border-rahmen shadow-[0_1px_0_rgba(0,0,0,0.02)]">
        <div className="max-w-container mx-auto px-6 py-[14px] flex items-center gap-6 justify-between">

          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-[13px] focus-visible:outline-gruen"
            aria-label="Spedition Keilig – Zur Startseite"
          >
            <ChevronIcon size={40} color="#14572F" />
            <span className="flex flex-col items-start leading-none">
              <span className="font-condensed font-extrabold text-[25px] tracking-[0.01em] text-gruen uppercase">
                Keilig
              </span>
              <span className="text-[10.5px] font-semibold tracking-[0.22em] text-[#788477] uppercase mt-0.5">
                Spedition · seit 1897
              </span>
            </span>
          </Link>

          {/* Desktop-Navigation */}
          <nav aria-label="Hauptnavigation" className="hidden md:flex flex-wrap items-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`relative px-[11px] py-[9px] font-condensed font-semibold text-[16.5px] tracking-[0.02em] text-nav-text uppercase whitespace-nowrap hover:text-gruen transition-colors ${
                  isActive(item.href) ? 'text-gruen' : ''
                }`}
              >
                {item.label}
                {isActive(item.href) && (
                  <span
                    className="absolute left-3 right-3 bottom-0 h-[3px] bg-rot"
                    aria-hidden="true"
                  />
                )}
              </Link>
            ))}
          </nav>

          {/* CTA + Hamburger */}
          <div className="flex items-center gap-3">
            <a
              href={telHref}
              className="hidden lg:inline-flex items-center gap-2 font-condensed font-bold text-[17px] tracking-[0.03em] text-gruen uppercase hover:text-gruen-hell transition-colors"
              aria-label={`Anrufen: ${firma.telefon}`}
            >
              ☎ {firma.telefon}
            </a>
            <Link
              href="/kontakt"
              className="hidden sm:inline-flex items-center font-condensed font-bold text-[17px] tracking-[0.04em] text-white uppercase bg-rot hover:bg-rot-hover transition-colors px-5 py-3"
              style={{ clipPath: 'polygon(0 0, 100% 0, calc(100% - 10px) 100%, 0 100%)' }}
            >
              Angebot anfragen
            </Link>

            {/* Hamburger-Button (mobil) */}
            <button
              ref={burgerRef}
              onClick={() => setMenuOpen((v) => !v)}
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              aria-label={menuOpen ? 'Menü schließen' : 'Menü öffnen'}
              className="md:hidden flex flex-col justify-center items-center w-10 h-10 gap-[5px] group"
            >
              <span
                className={`block w-6 h-0.5 bg-anthrazit transition-transform duration-200 ${
                  menuOpen ? 'translate-y-[6.5px] rotate-45' : ''
                }`}
              />
              <span
                className={`block w-6 h-0.5 bg-anthrazit transition-opacity duration-200 ${
                  menuOpen ? 'opacity-0' : ''
                }`}
              />
              <span
                className={`block w-6 h-0.5 bg-anthrazit transition-transform duration-200 ${
                  menuOpen ? '-translate-y-[6.5px] -rotate-45' : ''
                }`}
              />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile-Menü Overlay */}
      {menuOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/50 md:hidden"
          onClick={() => setMenuOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Mobile-Menü Drawer */}
      <div
        id="mobile-menu"
        ref={drawerRef}
        role="dialog"
        aria-modal="true"
        aria-label="Navigation"
        className={`fixed top-0 right-0 z-50 h-full w-72 max-w-full bg-white shadow-2xl transition-transform duration-300 md:hidden flex flex-col ${
          menuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex items-center justify-between px-6 py-5 border-b border-rahmen">
          <span className="font-condensed font-extrabold text-[22px] text-gruen uppercase tracking-[0.01em]">
            Keilig
          </span>
          <button
            onClick={() => setMenuOpen(false)}
            aria-label="Menü schließen"
            className="w-9 h-9 flex items-center justify-center text-2xl text-anthrazit hover:text-rot transition-colors"
          >
            ×
          </button>
        </div>

        <nav aria-label="Mobile Hauptnavigation" className="flex flex-col gap-1 p-4 flex-1">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className={`flex items-center gap-3 px-4 py-3 font-condensed font-semibold text-[18px] tracking-[0.02em] uppercase transition-colors ${
                isActive(item.href)
                  ? 'text-gruen bg-offwhite border-l-4 border-rot'
                  : 'text-nav-text hover:text-gruen hover:bg-offwhite border-l-4 border-transparent'
              }`}
            >
              <ChevronIcon size={14} color={isActive(item.href) ? '#C8202A' : '#14572F'} />
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="p-4 border-t border-rahmen flex flex-col gap-3">
          <Link
            href="/kontakt"
            onClick={() => setMenuOpen(false)}
            className="flex items-center justify-center font-condensed font-bold text-[18px] tracking-[0.04em] text-white uppercase bg-rot hover:bg-rot-hover transition-colors px-6 py-3"
            style={{ clipPath: 'polygon(0 0, 100% 0, calc(100% - 10px) 100%, 0 100%)' }}
          >
            Angebot anfragen
          </Link>
          <a
            href={`tel:+49${firma.telefon.replace(/[^0-9]/g, '').replace(/^0/, '')}`}
            className="flex items-center justify-center gap-2 font-condensed font-bold text-[17px] text-gruen hover:text-gruen-hell transition-colors py-2"
          >
            ☎ {firma.telefon}
          </a>
        </div>
      </div>
    </>
  )
}
