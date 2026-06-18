# Claude-Code-Prompt: Drei Design-Elemente für die Keilig-Website

> Kopiere alles ab „=== PROMPT START ===" in Claude Code. Lege dieses Paket ins Projekt, damit `referenz-quellcode/` und die Vorschau-HTMLs verfügbar sind. Setzt das bestehende Setup (Next.js App Router, TypeScript, Tailwind) und die Designtokens aus dem Haupt-Handoff voraus.

## === PROMPT START ===

Baue drei wiederverwendbare, markengerechte Elemente für die Website der **Spedition Keilig** als React-Komponenten (Next.js App Router, TypeScript, Tailwind). Stil: robust, sachlich, scharfkantig (kein `border-radius`), Farben Grün `#14572F` / Signal-Rot `#C8202A` / Anthrazit `#1C201E` / Off-White `#F4F6F3`. Schriften Barlow Condensed (Headlines, uppercase) und Barlow. **Moderate, dezente Bewegung** — die Branche ist hart und professionell, nichts Verspieltes. Alle Animationen müssen `prefers-reduced-motion: reduce` respektieren (dann statischer Endzustand).

Referenz für exakte Maße, Formen (`clip-path`), Farben und Animations-Parameter: die Dateien in `referenz-quellcode/`. Die Vorschau-HTMLs in `vorschau/` zeigen das fertige Verhalten. **Nicht 1:1 kopieren**, sondern sauber in React/Tailwind übersetzen.

### 1. `TruckBand` — fahrendes LKW-Lauf-Band
Ein schmales, volle Breite einnehmendes Band (Höhe ~150px), in dem ein flach-geometrischer, kompakter LKW im Loop von links nach rechts fährt. Einbauort: zwischen Hero und Zahlenband der Startseite.
- Der LKW besteht nur aus einfachen Formen (Rechtecke, Kreise für Räder, ein Keil-Chevron per `clip-path`). Grüner Kofferaufbau, rote Akzentstreifen, „KEILIG" (Barlow Condensed 800) plus Slogan „Haben Sie es eilig? Dann fahren Sie es mit Keilig." auf der Seite, Fahrerhaus mit angeschrägter Frontscheibe, zwei dunkle Räder mit sichtbaren, sich drehenden Speichen (rote Nabe), kleine Auspuff-Wölkchen.
- Bewegung: Fahrt per CSS-Keyframe (`left` von `-280px` auf `100%`, linear, ~7s, endlos), leichtes vertikales Wippen, drehende Räder (`rotate` 0→360, ~0.7s linear). Straßenstrich (gestrichelt) als statischer Boden. Geschwindigkeit als Prop. `prefers-reduced-motion`: LKW steht ruhig (keine Fahrt).
- Quelle: `referenz-quellcode/Element LKW-Laufband.dc.html` (LKW-Markup zwischen `<!-- TRUCK -->`). Die Grundform liegt auch als `Truck.dc.html` vor.

### 2. `Eingangsbestaetigung` — Formular-Erfolg in Frachtbrief-Optik
Ersetzt den Erfolgszustand von Anfrage- und Bewerbungsformular. Eine Karte in Beleg-/Frachtbrief-Anmutung: grüner Kopf mit „Eingangsbestätigung" und monospace-Belegnummer; darunter Meta-Zeilen (Datum, Betreff, Status: Eingegangen) in Monospace; ein kurzer Dank-Text. Über der Karte unten rechts ein **roter Gummistempel** „ANFRAGE EINGEGANGEN" mit Datum, leicht gedreht (`rotate(-8deg)`), Doppelrahmen, ~0.82 Deckkraft, der beim Erscheinen kurz „einstempelt" (Scale von groß auf 1, ~0.5s). Belegnummer/Datum dynamisch.
- `prefers-reduced-motion`: Stempel direkt im Endzustand, ohne Einstempel-Animation.
- Quelle: `referenz-quellcode/Element Eingangsbestaetigung.dc.html`.

### 3. `Kennzahlen` — hochzählende Zahlen
Das dunkle Zahlenband (Anthrazit) mit vier Kennzahlen in Signal-Rot (Barlow Condensed): **125** Jahre Erfahrung · seit 1897, **8** Moderne LKW, **1.000+** Ausgeführte Aufträge, **100+** Zufriedene Kunden. Die Zahlen zählen **einmal** hoch, sobald das Band in den Viewport scrollt (IntersectionObserver, Schwelle ~0.4), Dauer ~1.4s mit ease-out. Tausenderpunkt im de-Format, „+"-Suffix wo nötig.
- Kein Dauerlauf, kein erneutes Triggern beim erneuten Scrollen. `prefers-reduced-motion`: Endzahlen sofort anzeigen.
- Quelle: `referenz-quellcode/Element Kennzahlen.dc.html` (Logik: IntersectionObserver + requestAnimationFrame-Zähler).

### Allgemein
- Komponenten generisch und konfigurierbar halten (Props für Texte/Zahlen/Tempo), Inhalte aus `content/` ziehen, wo sinnvoll.
- Designtokens aus der Tailwind-Config nutzen, keine willkürlichen Hex-Werte.
- Sprache/Ton (falls Copy berührt): Inhaber-Ton, Sie-Form, **keine Gedankenstriche** („–"/„-" als Einschub), kein KI-Klang. Siehe Haupt-Handoff `TONALITAET.md`.

## === PROMPT ENDE ===
