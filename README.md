# Handoff: Website „Spedition Keilig seit 1897"

## Overview
Mehrseitige, deutschsprachige Unternehmenswebsite für eine traditionsreiche Familien-Spedition aus Freital bei Dresden. Ziele: Vertrauen schaffen (erster Webauftritt überhaupt), Transport-Anfragen generieren und Fahrer-Bewerbungen gewinnen. Seriös, warm, kompetent, bodenständig.

## Über die Design-Dateien
Die Dateien in diesem Paket sind **Design-Referenzen**, erstellt in HTML als Prototyp — sie zeigen Aussehen und Verhalten, sind **kein** produktionsfertiger Code zum direkten Kopieren. Aufgabe: diese Designs in einem **neuen Next.js-Projekt** (App Router, TypeScript, Tailwind CSS) sauber nachbauen.

- `PROMPT.md` — der fertige Auftrag/Prompt für Claude Code (zuerst lesen).
- `referenz-pdf/` — jede der 8 Seiten als PDF, exakt wie sie aussehen soll (visuelle Wahrheit, volle Seitenhöhe).
- `referenz-quellcode/` — der Prototyp-Quellcode (`.dc.html`). Dort stehen exakte Hex-Werte, `clip-path`-Formen, Abstände und alle Texte. Als Nachschlagewerk für Details, nicht zum 1:1-Übernehmen.

## Fidelity
**High-Fidelity.** Finale Farben, Typografie, Abstände, Komponenten und Interaktionen stehen fest und sollen pixelnah umgesetzt werden (mit der Codebasis-üblichen Tailwind-Struktur). Einzige bewusste Abweichung: Texte werden gemäß den Tonalitätsregeln (siehe unten) menschlicher überarbeitet und von Gedankenstrichen befreit.

---

## Design-Tokens

### Farben (Tailwind `theme.extend.colors`)
| Token | Hex | Verwendung |
|---|---|---|
| `gruen` (Primär, Tannengrün) | `#14572F` | Header-Akzente, dunkle Flächen, Überschriften-Highlight, Logo |
| `gruen-hell` | `#2C7A4B` | Hover, sekundäre Akzente, Akzentlinien |
| `rot` (Signal) | `#C8202A` | **Nur** CTAs/Buttons, Zahlen-Highlights, Eyebrow, Fehlertext |
| `rot-hover` | `#a91923` | Button-Hover |
| `anthrazit` | `#1C201E` | Fließtext, dunkle Sektionen (Zahlenband, Footer), obere Leiste |
| `offwhite` | `#F4F6F3` | Standard-Seitenhintergrund |
| `weiss` | `#FFFFFF` | Karten, Inhaltsflächen |
| Rahmen hell | `#e3e8e3` | Kartenrahmen |
| Rahmen Input | `#cdd6cd` | Formularfelder |
| Text muted | `#4d574f` / `#5a6b5f` | sekundärer Text, Platzhalter-Captions |
| Eyebrow auf Grün | `#b9e0c6` / `#9ecbac` | helle Akzentschrift auf dunkelgrün |
| Input-Hintergrund | `#fbfcfb` | Felder |

**Farbverteilung ca. 60 % Neutral / 30 % Grün / 10 % Rot.** Rot ist Signalfarbe, nie Fläche. Weihnachts-/Rot-Grün-Optik strikt vermeiden (viel Neutral dazwischen).

### Typografie
- **Headlines:** `Barlow Condensed` (über `next/font/google`), Gewichte 500/600/700/800. Überschriften durchgehend **GROSSBUCHSTABEN (uppercase)**, `letter-spacing` leicht negativ (`-0.01em`), `line-height` eng (~1.02).
- **Fließtext:** `Barlow`, Gewichte 400/500/600/700.
- Als Tailwind-Familien: `font-condensed` (Barlow Condensed) und `font-sans` (Barlow).

Typo-Skala (Richtwerte, `clamp()` für Responsivität):
| Element | Font | Größe | Weight | Stil |
|---|---|---|---|---|
| Hero-H1 | Condensed | `clamp(42px,6vw,72px)` | 800 | uppercase, `text-wrap:balance` |
| Seiten-H1 (Pagehead) | Condensed | `clamp(36px,5.4vw,62px)` | 800 | uppercase, grün |
| Sektions-H2 | Condensed | `clamp(30px,4.5vw,52px)` | 700 | uppercase |
| Karten-H3 | Condensed | 22–27px | 700 | uppercase |
| Eyebrow/Label | Sans | 13px | 700 | uppercase, `letter-spacing:.16em`, rot (oder hellgrün auf dunkel) |
| Fließtext | Sans | 16–18px | 400 | `line-height:1.6–1.7` |
| Slogan | Condensed | ~24px | 500 | *kursiv* |

### Abstände & Layout
- **Container:** `max-width:1180px; margin-inline:auto; padding-inline:24px`.
- **Sektions-Padding (vertikal):** `clamp(64px,8vw,104px)`; ruhigere Sektionen `clamp(48px,6vw,88px)`.
- **Karten-Padding:** ~30px 26px.
- **Gaps:** Karten-Grids 16–18px; Spalten 32–60px.
- **Ecken: scharf, `border-radius: 0`.** Das ist bewusst (robust, industriell). Kein Abrunden von Karten/Buttons/Feldern.
- **Schatten:** sparsam. Karten-Hover `0 14px 30px rgba(20,87,47,.1)`; Badge `0 10px 24px rgba(0,0,0,.22)`.

### Das Keil-Leitmotiv (zentral)
Der Name „Keilig" wird zum **Keil/Pfeil nach vorn**. Wiederkehrend einsetzen:
- **Chevron-Marke** (Logo, Aufzählungspunkte, Footer) als CSS-`clip-path`:
  `polygon(0 0, 58% 0, 100% 50%, 58% 100%, 0 100%, 42% 50%)` — ein nach rechts zeigender, gefüllter Keil. Im Logo 40px grün, als Bullet 14px, im Footer 36px.
- **Buttons** mit angeschnittener rechter Kante:
  `clip-path: polygon(0 0, 100% 0, calc(100% - 12px) 100%, 0 100%)`.
- **Diagonale Sektionsübergänge** per `clip-path` auf vollflächigen Farbsektionen, u. a.:
  - Hero (grün), unten schräg: `polygon(0 0,100% 0,100% 100%,0 calc(100% - 64px))`
  - Zahlenband (anthrazit), oben+unten schräg.
  - CTA-Sektion (grün), oben schräg: `polygon(0 56px,100% 0,100% 100%,0 100%)`.
  - Footer (anthrazit), oben schräg.
  Sektionen mit Schrägschnitt bekommen großzügiges Innen-Padding, damit nichts abgeschnitten wird.
- **„Seit 1897"-Siegel:** runder Badge (off-white, roter Rand) mit „SEIT / 1897 / FAMILIENBETRIEB", über der Hero-Bildkante; Wiedererkennung als Vertrauenselement.

---

## Globale Bausteine

### Obere Kontaktleiste (oberhalb Header)
Anthrazit (`#1C201E`), kleine Schrift. Links: Adresse „Tulpenstr. 8, 01705 Freital · Raum Dresden" + Öffnungszeiten „Mo–Fr 07:00–17:00 Uhr" (Zeit ist Platzhalter). Rechts: Telefon (weiß, fett, klickbar `tel:`) und E-Mail (klickbar `mailto:`). *(Zeitangabe-Bindestrich in „Mo–Fr/07:00–17:00" ist Zeitspanne, kein Gedankenstrich — Schreibweise mit dem Texter klären; alternativ „bis".)*

### Sticky Header
Weiß, leicht transluzent, untere 1px-Linie. Links das **Logo** (grüner Keil + Wortmarke „KEILIG", darunter klein „SPEDITION · SEIT 1897"). Mitte/rechts die **Navigation** (Start, Leistungen, Über uns, Fuhrpark, Karriere, Kontakt) in Barlow Condensed, uppercase; aktiver Punkt mit rotem Unterstrich. Rechts der rote Button **„Angebot anfragen"** (führt zu `/kontakt`).
**Mobil:** Navigation in ein **Hamburger-Menü** auslagern (Drawer/Overlay; öffnen/schließen, schließt bei Klick auf einen Punkt; Fokus-Trap; ESC schließt).

### Footer
Anthrazit, oben diagonal. Vier Spalten: (1) Logo + Kurzbeschreibung + Slogan, (2) Navigation, (3) Kontakt (Adresse, Telefon, E-Mail), (4) Rechtliches (Impressum, Datenschutz) + „C & B Keilig Transport GmbH · Amtsgericht Dresden · HRB 19925". Untere Zeile: Copyright mit aktuellem Jahr.

### Button-Stile
- **Primär (rot):** Hintergrund `#C8202A`, weiße Schrift, Barlow Condensed 700 uppercase, angeschnittene rechte Kante, Hover `#a91923`.
- **Sekundär (Outline):** transparenter Hintergrund, Rahmen, auf Grün weiß / auf Hell grün; Hover füllt leicht. „Anrufen ☎ {telefon}" als klickbares `tel:`.

---

## Seiten (Screens)

> Exakte Reihenfolge, Texte und Bildflächen: siehe `referenz-pdf/` und `referenz-quellcode/Spedition Keilig.dc.html`. Alle Texte unten sind **Inhaltsbasis** und müssen nach den Tonalitätsregeln (Gedankenstriche raus, menschlicher) überarbeitet werden.

### 1. Startseite (`/`)
- **Hero (grün, Vollbild):** Eyebrow „C & B Keilig Transport GmbH · Freital"; H1 „Seit 1897 bringen wir, was Ihnen wichtig ist, sicher ans Ziel."; Slogan kursiv „Haben Sie es eilig? Dann fahren Sie es mit Keilig."; kurzer Absatz; zwei CTAs („Angebot anfragen" rot, „Anrufen {telefon}" outline). Rechts Bildplatzhalter „[Platzhalter: LKW-Flotte vor der Halle]" mit „Seit 1897"-Badge.
- **Zahlenband (anthrazit, schräg):** vier Kennzahlen, Zahlen in Rot, Condensed: „seit 1897 / Über 125 Jahre Erfahrung", „8 / Moderne LKW · Mercedes-Benz & Volvo", „1.000+ / Ausgeführte Aufträge", „100+ / Zufriedene Kunden".
- **Leistungen im Überblick:** 4 Karten (weiß, Keil-Icon, Titel, Kurztext, Link „Mehr erfahren"): Gütertransport · Polen & Tschechien · Wareneinlagerung · Kran & Stapler. Darunter Hinweis: kein Schwerlast/Spezialtransport, kein Gefahrgut.
- **Warum Keilig? (grün):** vier USP mit roter Oberkante: Schnell · Zuverlässig · Ordentlich · Persönlich.
- **Tradition-Teaser:** Bildplatzhalter + Text „Ein Familienbetrieb. Vier Generationen Erfahrung. Ein Versprechen." + Button „Unsere Geschichte" → `/ueber-uns`.
- **Einsatzgebiet (weiß):** Text + Liste (Deutschland flächendeckend, Polen, Tschechien) + Karten-Platzhalter.
- **Abschluss-CTA (grün, schräg):** „Sagen Sie uns, was zu fahren ist" + Buttons → `/kontakt` und `tel:`.

### 2. Leistungen (`/leistungen`)
- **Pagehead** (Eyebrow „Leistungen", H1, Einleitung im Inhaber-Ton).
- **Vier Detailblöcke** (abwechselnd Text/Bild, weiße Karten mit Keil-Icon, Titel, Text, Tags): Gütertransport deutschlandweit · Transporte nach Polen & Tschechien · Wareneinlagerung & Lager · Kran & Stapler bei Bedarf.
- **Abschluss-CTA.**

### 3. Über uns / Geschichte (`/ueber-uns`)
- **Pagehead** (Eyebrow „Über uns · seit 1897").
- **Zeitleiste „Meilensteine":** vertikal, Jahr links (rot, Condensed), Knoten + Text rechts. Fix: „1897 — Gründung" und „Heute — In Familienhand, geführt von Beate & Sascha Keilig". Dazwischen **Platzhalter-Meilensteine** (Jahre/Texte als editierbare Platzhalter belassen).
- **Inhaber:** Foto-Platzhalter + Vorstellung „Beate & Sascha Keilig" (persönlicher Text, als Platzhalter markiert).
- **Werte:** drei Karten — Verlässlichkeit, Ordentlichkeit, Bodenständigkeit.
- **Abschluss-CTA.**

### 4. Fuhrpark (`/fuhrpark`)
- **Pagehead.**
- **Galerie:** 8 LKW-Karten (Bildplatzhalter + Bezeichnung + Marken-Badge „Mercedes-Benz"/„Volvo"). Datenquelle `content/fuhrpark.json`.
- **Hinweisblock (grün):** „Kran & Stapler bei Bedarf" + Button → `/kontakt`.
- **Abschluss-CTA.**

### 5. Karriere (`/karriere`)
- **Pagehead** (Ansprache an Fahrer, Ton „Bei uns sind Sie keine Nummer").
- **Vorteile:** 4 Karten — Geregelte Touren, Moderne Fahrzeuge, Regionales Team, Familienbetrieb.
- **Bewerbungsformular** (siehe Formularregeln).

### 6. Kontakt (`/kontakt`)
- **Pagehead.**
- **Zwei Spalten:** links Kontaktkarte (grün) mit Anschrift, Telefon (klickbar), E-Mail, Erreichbarkeit (Platzhalter) + Karten-Platzhalter „Standort Tulpenstr. 8, Freital"; rechts das **Anfrageformular**.

### 7. Impressum (`/impressum`)
- **Pagehead** „Impressum" (Eyebrow „Rechtliches").
- Rechtsblöcke (Anbieter, Vertretung, Kontakt, Registereintrag Amtsgericht Dresden HRB 19925, USt-IdNr. Platzhalter, Verantwortlich Platzhalter) + deutlicher Hinweis „Entwurf, durch rechtssicheren Text ersetzen".

### 8. Datenschutz (`/datenschutz`)
- **Pagehead** „Datenschutzerklärung".
- Rechtsblöcke (Verantwortliche Stelle, Formular-Daten, Rechte, Hosting/Logs — Platzhalter) + deutlicher Hinweis „Entwurf, DSGVO-konform ersetzen".

---

## Formulare — Interaktion & Validierung

Gemeinsames Verhalten: kontrollierte Felder; bei Absenden validieren; ungültige Felder zeigen **Inline-Fehlermeldung** unter dem Feld (roter Keil-Punkt + Text). Bei gültigem Absenden Formular durch **Erfolgs-Karte** ersetzen (hellgrün, grüne Linkskante). **Kein echter Versand** — an der Submit-Stelle TODO-Kommentar für späteren E-Mail-/API-Anschluss. Hinweistext „Formular sendet noch nicht, später anbinden" als Kommentar/dezenter Vermerk.

### Anfrageformular (Kontakt)
Felder: Name*, Firma, E-Mail*, Telefon*, Art des Transports/Guts*, Abholort, Lieferort, Wunschtermin, Nachricht*.
Regeln: Pflichtfelder nicht leer; E-Mail muss gültiges Format haben (`/^[^\s@]+@[^\s@]+\.[^\s@]+$/`). Erfolg: Karte „Anfrage erhalten, danke!" + Hinweis auf direkte Telefonnummer.

### Bewerbungsformular (Karriere)
Felder: Name*, Telefon*, E-Mail*, Führerscheinklassen*, Nachricht, Datei-Upload Lebenslauf (optional).
Regeln: Pflichtfelder nicht leer; E-Mail-Format wie oben. Datei optional, Dateiname anzeigen. Erfolg: Karte „Vielen Dank!".

`*` = Pflichtfeld; im UI mit „* Pflichtfeld" auszeichnen.

---

## State Management
Pro Seite lokaler Komponenten-State (`useState`), kein globaler Store nötig:
- Formular-Werte (je ein Objekt für Anfrage und Bewerbung), Fehler-Objekt, `submitted`-Flag.
- Mobile-Menü: `open`-Flag (Drawer auf/zu).
- Aktive Route für die Nav-Markierung via `usePathname()`.
Kein Datenfetching nötig; Inhalte kommen statisch aus `content/`.

## Interaktionen & Verhalten
- Navigation: echte Routen (`next/link`). Aktiver Link mit rotem Unterstrich.
- Hover ruhig/dezent (kaum Bewegung): Karten leicht anheben + sanfter Schatten; Buttons Farbwechsel; Links Farbwechsel. Transitions kurz (~.15s).
- Keine Scroll-Animationen, keine Parallax (bewusst ruhig/seriös).
- Hamburger-Menü: öffnen/schließen, schließt bei Auswahl, ESC schließt, Fokusführung.
- Sichtbare Fokuszustände auf allen interaktiven Elementen.

## Responsive-Verhalten
Mobile-First. Grids über `grid-template-columns: repeat(auto-fit, minmax(...,1fr))` bzw. Tailwind-Breakpoints. Header: ab schmaler Breite Hamburger-Menü statt Inline-Nav. Typo über `clamp()`. Großzügige Bildflächen behalten ihr Seitenverhältnis (`aspect-ratio`).

## Assets
Keine echten Bilder/Logos vorhanden. **Alle Bildflächen sind beschriftete Platzhalter** (diagonale Streifen + Monospace-Hinweis). Eine `Placeholder`-Komponente bauen, die später durch `next/image` ersetzt wird. Icons werden **nicht** als komplexe SVGs gezeichnet, sondern als einfache geometrische Keil-/Chevron-Formen via `clip-path` (siehe Keil-Motiv). Schriften: Barlow + Barlow Condensed (Google Fonts via `next/font`).

---

## Fakten (verbindlich — nichts dazuerfinden)
- Marke: **Spedition Keilig – seit 1897**; Firma: **C & B Keilig Transport GmbH**.
- Inhaber/Geschäftsführung: **Beate Keilig & Sascha Keilig** (Familienunternehmen).
- Adresse: **Tulpenstr. 8, 01705 Freital** (Raum Dresden, Sachsen).
- Telefon: **0351 4602077** *(Platzhalter, falls nicht bestätigt)*.
- E-Mail: **info@spedition-keilig.de** *(Platzhalter, ersetzen)*.
- Register: **Amtsgericht Dresden, HRB 19925**.
- Slogan: **„Haben Sie es eilig? Dann fahren Sie es mit Keilig."**
- Leistungen: Transport gängiger Güter deutschlandweit; internationale Fahrten **Polen & Tschechien**; Wareneinlagerung/Lager; **Kran & Stapler bei Bedarf**.
- **NICHT anbieten / nie erwähnen:** Schwerlast-/Spezialtransporte, Gefahrgut.
- Kennzahlen: seit 1897 (über 125 Jahre) · 8 moderne LKW (Mercedes-Benz & Volvo) · 1.000+ Aufträge · 100+ Kunden · familiengeführt *(Generationszahl als Platzhalter behandeln, falls unbestätigt)*.

---

## Tonalität & Selfcheck
Siehe `PROMPT.md`, Abschnitt „SPRACHE & TONALITÄT". Kurz: Inhaber-Ton (regionales Familienunternehmen, mehrere Generationen, stolz, bodenständig, nahbar, Experte), Sie-Form, „Wir", kurze Sätze. **Kein KI-Klang. Keine Gedankenstriche** („–" / „-" als Einschub). Jeden Text mit dem Selfcheck prüfen und als `TONALITAET.md` ins Projekt legen. Die Beispieltexte im Prototyp enthalten noch Gedankenstriche und müssen überarbeitet werden.

## Dateien in diesem Paket
- `PROMPT.md` — Auftrag/Prompt für Claude Code.
- `README.md` — diese Spezifikation.
- `referenz-pdf/Keilig - 1 Startseite.pdf` … `8 Datenschutz.pdf` — visuelle Vorlage je Seite.
- `referenz-quellcode/Spedition Keilig.dc.html` — Haupt-Prototyp (alle Seiten, Stile, Texte).
- `referenz-quellcode/Pagehead.dc.html`, `Cta.dc.html`, `Field.dc.html`, `Legalblock.dc.html` — wiederverwendbare Bausteine des Prototyps (Seitenkopf, Abschluss-CTA, Formularfeld, Rechtsblock).
