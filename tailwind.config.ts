import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        gruen: '#14572F',
        'gruen-hell': '#2C7A4B',
        rot: '#C8202A',
        'rot-hover': '#a91923',
        anthrazit: '#1C201E',
        offwhite: '#F4F6F3',
        weiss: '#FFFFFF',
        rahmen: '#e3e8e3',
        'rahmen-input': '#cdd6cd',
        'text-muted': '#4d574f',
        'text-muted-2': '#5a6b5f',
        'eyebrow-gruen': '#b9e0c6',
        'eyebrow-gruen-2': '#9ecbac',
        'input-bg': '#fbfcfb',
        'nav-text': '#2b352e',
        'footer-text': '#cfd8d0',
        'footer-muted': '#7f8b81',
        'footer-link': '#9aa79e',
      },
      fontFamily: {
        sans: ['var(--font-barlow)', 'system-ui', 'sans-serif'],
        condensed: ['var(--font-barlow-condensed)', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        container: '1180px',
      },
      borderRadius: {
        // Bewusst: keine Abrundung (robust, industriell)
        DEFAULT: '0',
        none: '0',
      },
    },
  },
  plugins: [],
}
export default config
