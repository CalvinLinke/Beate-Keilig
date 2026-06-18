# Claude-Code-Prompt: Website „Spedition Keilig seit 1897"

> Kopiere alles ab „=== PROMPT START ===" in Claude Code. Lege vorher dieses ganze Handoff-Paket (`design_handoff_spedition_keilig/`) ins Projekt, damit Claude Code `README.md`, die PDFs unter `referenz-pdf/` und den Quellcode unter `referenz-quellcode/` lesen kann.

## === PROMPT START ===

Du baust die vollständige, mehrseitige, deutschsprachige Unternehmenswebsite für die **Spedition Keilig (C & B Keilig Transport GmbH)** als produktionsreifes Next.js-Projekt. Es gibt eine fertige Designvorlage: nutze sie als verbindliche visuelle und inhaltliche Referenz.

### Vorlagen im Repo (zuerst lesen)
- `design_handoff_spedition_keilig/README.md` — die vollständige Design-Spezifikation: Farben, Typografie, Abstände, jedes Bauteil, jede Seite, alle Texte, Formularregeln, das Keil-Leitmotiv. **Maßgeblich.**
- `design_handoff_spedition_keilig/referenz-pdf/*.pdf` — jede Seite als PDF, exakt so wie sie aussehen soll. Visuelle Wahrheit.
- `design_handoff_spedition_keilig/referenz-quellcode/*.dc.html` — der HTML/CSS-Quellcode des Prototyps. Hier stehen die exakten Hex-Werte, `clip-path`-Formen, Abstände und Texte. **Nicht 1:1 kopieren** (es ist Prototyp-Code mit eigenem Runtime), sondern in sauberes Next.js/React/Tailwind übersetzen.

### Technik (verbindlich)
- **Next.js** mit **App Router** und **TypeScript**.
- **Tailwind CSS**. Lege die Designtokens (Farben, Fonts) in `tailwind.config.ts` unter `theme.extend` an. Keine willkürlichen Inline-Hex-Werte im Markup.
- Schriften über **`next/font/google`**: `Barlow` (400, 500, 600, 700) und `Barlow_Condensed` (500, 600, 700, 800). Als CSS-Variablen einbinden und in Tailwind als `font-sans` (Barlow) und `font-condensed` (Barlow Condensed) verfügbar machen.
- Deployment-Ziel **Vercel** (Standard-Setup, keine Sonderkonfiguration nötig).
- Voll **responsive, Mobile-First**. Auf Mobil ein **echtes Hamburger-Menü** (Button öffnet ein Overlay/Drawer mit der Navigation, schließt bei Auswahl, Fokusführung, per Tastatur bedienbar).

### Seitenstruktur (App Router, eigene Routes)
1. `/` Startseite
2. `/leistungen`
3. `/ueber-uns`
4. `/fuhrpark`
5. `/karriere`
6. `/kontakt`
7. `/impressum`
8. `/datenschutz`

Gemeinsames Layout (`app/layout.tsx`): obere Kontaktleiste, sticky Header mit Logo + Navigation + klickbarer Telefonnummer + rotem Button „Angebot anfragen", sowie der Footer mit Adresse, Kontakt, Registerdaten und Links zu Impressum und Datenschutz. Pro Seite eigene `metadata` (Title + Description) für SEO.

### Inhalte pflegbar halten (CMS-light)
Lege alle Texte und Datensätze in `content/` als **JSON oder MDX** ab (z. B. `content/firma.json`, `content/leistungen.json`, `content/fuhrpark.json`, `content/timeline.json`, `content/seo.json`). Die Seiten lesen daraus. Ziel: Der Inhaber kann Texte, Telefonnummer, E-Mail, Öffnungszeiten, Kennzahlen und Meilensteine ändern, ohne Komponenten anzufassen. Telefonnummer und E-Mail kommen aus **einer** zentralen Quelle (`content/firma.json`) und werden überall daraus gezogen.

### Formulare
Zwei Formulare: **Anfrageformular** (auf `/kontakt`) und **Bewerbungsformular** (auf `/karriere`). Vorerst **kein Backend**: nur saubere **Client-seitige Validierung** mit Inline-Fehlermeldungen und einer Erfolgs-Bestätigung nach gültigem Absenden (kein echter Versand). Validierungsregeln stehen im README. Baue die Felder und den Submit-Handler so, dass später leicht eine API-Route oder ein E-Mail-Dienst angeschlossen werden kann (TODO-Kommentar an der Versandstelle). Datei-Upload (Lebenslauf) im Bewerbungsformular ist optional.

### Bilder
Es gibt noch keine echten Fotos. Baue eine wiederverwendbare **Platzhalter-Komponente** (diagonal gestreifter Hintergrund, mittig ein Monospace-Hinweis wie `[Platzhalter: LKW-Flotte vor der Halle]`), die später leicht durch `next/image` mit echtem Foto ersetzt werden kann. Reserviere die im README genannten Bildflächen (Hero, Flotten-Galerie, Team, Karte usw.). Alt-Texte vorbereiten.

### Barrierefreiheit & Qualität
Gute Kontraste, sinnvolle Alt-Texte, sichtbare Fokuszustände, Tastaturbedienbarkeit (besonders Hamburger-Menü und Formulare), semantisches HTML (`header`, `nav`, `main`, `section`, `footer`, korrekte Überschriftenhierarchie). Saubere, kommentierte Komponenten.

---

## SPRACHE & TONALITÄT (sehr wichtig — eigener Prüfschritt)

Die Texte sollen klingen wie der Inhaber eines **regionalen Familienunternehmens in mehrter Generation**: bodenständig, stolz, überzeugt, nahbar, Experte auf seinem Gebiet, jahrelange Kompetenz. Durchgängig **Sie-Form** und **„Wir"**. Kurze, klare, gesprochene Sätze. Kein Marketing-Sprech, keine Buzzwords, keine Übertreibung.

**Harte Regeln:**
1. **Es darf nicht nach KI klingen.** Keine generischen Floskeln („In der heutigen schnelllebigen Zeit…", „Ihr zuverlässiger Partner für alle Fälle", „maßgeschneiderte Lösungen", „Wir bei Keilig…"). Schreib konkret, aus Erfahrung, mit Haltung.
2. **Keine Gedankenstriche.** Verwende **kein** „–" (Halbgeviertstrich) und **kein** „-" als Gedankenstrich/Einschub. Formuliere stattdessen mit Punkt, Komma oder zwei Sätzen. Echte Bindestriche in Eigennamen/Komposita sind erlaubt (z. B. „Mercedes-Benz", „C & B", „LKW-Flotte", „Be- und Entladen").
3. Die Beispieltexte im README/Prototyp enthalten noch Gedankenstriche und teils glatte Formulierungen. **Überarbeite jeden Text** nach diesen Regeln, statt ihn unverändert zu übernehmen. Inhalt und Aussage bleiben, nur Ton und Zeichensetzung werden menschlicher.
4. Erfinde **keine Fakten** über die bestätigten Angaben hinaus (siehe README, Abschnitt „Fakten"). Wo Angaben fehlen, klar erkennbare Platzhalter setzen.

**Selfcheck (vor dem Commit für JEDEN sichtbaren Text durchgehen):**
- [ ] Kein „–" und kein „-" als Gedankenstrich im Text (Suche im Repo nach „ – " bzw. „ - "; nur echte Komposita dürfen Bindestriche haben).
- [ ] Klingt der Satz, als hätte ihn ein erfahrener Spediteur aus Freital gesagt, nicht ein Textgenerator?
- [ ] Keine Buzzwords, keine Übertreibung, keine leeren Versprechen.
- [ ] Sie-Form, „Wir"-Perspektive, kurze Sätze.
- [ ] Konkret und stolz statt allgemein (z. B. „Seit 1897 fahren wir für Betriebe in ganz Sachsen" statt „Wir bieten umfassende Transportlösungen").
- [ ] Stimmt jede Zahl/Angabe mit den bestätigten Fakten überein?

Baue diesen Selfcheck als `TONALITAET.md` ins Projekt und halte dich beim Schreiben aller Inhalte daran.

## === PROMPT ENDE ===
