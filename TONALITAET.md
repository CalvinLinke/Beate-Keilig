# Tonalität & Selfcheck — Spedition Keilig

## Ziel: Klingen wie der Inhaber

Alle Texte sollen klingen wie Beate oder Sascha Keilig selbst: bodenständig, stolz, erfahren, nahbar. Ein Familienunternehmen mit über 125 Jahren Erfahrung. Kein Konzern, keine Agentur.

---

## Harte Regeln

1. **Kein KI-Klang.** Keine Floskeln, keine generischen Aussagen.
   - Verboten: „In der heutigen schnelllebigen Zeit…", „Ihr zuverlässiger Partner für alle Fälle", „maßgeschneiderte Lösungen", „Wir bei Keilig…"
   - Erlaubt: Konkret, aus Erfahrung, mit Haltung. „Seit 1897 fahren wir für Betriebe in ganz Sachsen."

2. **Keine Gedankenstriche.** Weder „–" (Halbgeviertstrich) noch „-" als Einschub oder Pause.
   - Verboten: „Persönlich betreut – vom ersten Anruf an"
   - Erlaubt: Punkt, Komma, zwei Sätze. „Persönlich betreut. Vom ersten Anruf an."
   - Echte Bindestriche in Komposita sind erlaubt: „Mercedes-Benz", „LKW-Flotte", „Be- und Entladen", „Kran & Stapler"
   - Zeitspannen in Fließtext: „Mo bis Fr", „07:00 bis 17:00 Uhr"

3. **Texte überarbeiten, nicht kopieren.** Die Prototyp-Texte enthalten noch Gedankenstriche und teils glatte Formulierungen. Inhalt und Aussage bleiben, Ton und Zeichensetzung werden menschlicher.

4. **Keine erfundenen Fakten.** Nur bestätigte Angaben verwenden. Fehlende Angaben klar als Platzhalter kennzeichnen.

---

## Stil

- **Perspektive:** Durchgehend „Wir" aus Unternehmersicht, „Sie" für den Kunden.
- **Satzlänge:** Kurz und klar. Lieber zwei Sätze als ein Bandwurmsatz.
- **Ton:** Ruhig, sachlich, selbstbewusst. Kein Jubel, keine Übertreibung.
- **Konkret statt allgemein:** Zahlen, Orte, echte Details.
- **Verboten:** Buzzwords wie „innovativ", „nachhaltig", „Synergien", „proaktiv", „ganzheitlich".

---

## Selfcheck (vor Commit für JEDEN sichtbaren Text)

- [ ] Kein „–" und kein „-" als Gedankenstrich im Text.
      Suche im Repo: `grep -rn " – \| – " app/ components/ content/`
- [ ] Klingt der Satz, als hätte ihn ein erfahrener Spediteur aus Freital gesagt, nicht ein Textgenerator?
- [ ] Keine Buzzwords, keine Übertreibung, keine leeren Versprechen.
- [ ] Sie-Form für den Kunden, „Wir" für das Unternehmen. Kurze Sätze.
- [ ] Konkret und stolz statt allgemein.
      Beispiel gut: „Seit 1897 fahren wir für Betriebe in ganz Sachsen."
      Beispiel schlecht: „Wir bieten umfassende Transportlösungen."
- [ ] Stimmt jede Zahl und Angabe mit den bestätigten Fakten überein?
      Fakten: seit 1897, 8 LKW (Mercedes-Benz & Volvo), 1.000+ Aufträge, 100+ Kunden, Freital bei Dresden, Beate & Sascha Keilig.
