import type { Metadata } from 'next'
import { Barlow, Barlow_Condensed } from 'next/font/google'
import './globals.css'
import TopBar from '@/components/layout/TopBar'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import firma from '@/content/firma.json'

const barlow = Barlow({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-barlow',
  display: 'swap',
})

const barlowCondensed = Barlow_Condensed({
  subsets: ['latin'],
  weight: ['500', '600', '700', '800'],
  variable: '--font-barlow-condensed',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Spedition Keilig seit 1897 | Gütertransport Freital Dresden',
  description:
    'Familiengeführte Spedition aus Freital bei Dresden. Gütertransport deutschlandweit sowie nach Polen und Tschechien. Persönlich betreut seit 1897.',
  metadataBase: new URL('https://www.spedition-keilig.de'),
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="de"
      className={`${barlow.variable} ${barlowCondensed.variable}`}
    >
      <body className="font-sans bg-offwhite text-anthrazit min-h-screen">
        <TopBar firma={firma} />
        <Header firma={firma} />
        <main>{children}</main>
        <Footer firma={firma} />
      </body>
    </html>
  )
}
