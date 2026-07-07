# Tobias Schmidt — Beratungswebsite

Statische Website (kein Framework, kein Build-Schritt) für die Beratung
**Test Strategy · V&V Governance · Quality Steering**. Alle Seiten sind reines
HTML/CSS/JS; die Schriften sind lokal eingebunden (DSGVO-konform, keine externen
Requests).

## Struktur

```
index.html            Startseite
projekterfolge.html   Projekterfolge
werdegang.html        Werdegang & Profil
faq.html              FAQ (inkl. FAQPage-Schema)
kontakt.html          Kontakt (E-Mail, LinkedIn)
impressum.html        Impressum
datenschutz.html      Datenschutzerklärung
leistungen/           Fünf Leistungs-Unterseiten
assets/
  styles.css          Designsystem
  site.js             Navigation, Einblendungen
  fonts/              Barlow Semi Condensed, IBM Plex Sans/Mono (woff2)
```

## Lokale Vorschau

Kein Build nötig — einfach einen statischen Server im Projektordner starten:

```bash
python -m http.server 8123
# dann http://localhost:8123 öffnen
```

## Hosting

Als statische Seite überall lauffähig — z. B. Netlify, GitHub Pages, IONOS
Webspace. Ordnerinhalt 1:1 hochladen; `index.html` ist die Startseite. HTTPS
aktivieren.
