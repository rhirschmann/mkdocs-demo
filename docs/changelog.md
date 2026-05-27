---
tags:
  - changelog
  - versiehistorie
---

# Changelog

Alle wijzigingen van dit project worden op deze pagina bijgehouden.
Het formaat is gebaseerd op [Keep a Changelog](https://keepachangelog.com/nl/1.0.0/).

---

## [0.3.0] — 2026-05-27

### Toegevoegd

- **`features.md`** — Nieuwe pagina met uitgebreide demonstratie van 13 MkDocs Material features:
    - 404-pagina (link via knop)
    - Tags via frontmatter
    - Admonitions (note, tip, warning, danger, success, info, collapsible)
    - Code blokken met syntaxkleuring, regelnummers en kopieerknop
    - Content Tabs voor meerdere talen/opties naast elkaar
    - Grids & Cards voor visuele overzichten
    - Knoppen (primair en secundair)
    - Afkortingen met automatische tooltips
    - Mermaid diagrammen (flowchart, sequentie, statusdiagram)
    - Takenlijsten met visuele checkboxen
    - Tabellen
    - Footnotes
    - Iconen & Emoji (Material Design, FontAwesome, Octicons)
- **`getting-started/deployment.md`** — Nieuwe pagina met configuratievoorbeelden voor 7 hostingplatformen:
    - GitHub Pages (huidig platform)
    - GitLab Pages
    - Netlify
    - Vercel
    - Cloudflare Pages
    - Azure Static Web Apps
    - Read the Docs

### Gewijzigd

- **`index.md`** — Welkomstpagina uitgebreid:
    - Vijfde navigatiekaart toegevoegd voor `features.md`
    - Kenmerken tabel ingekort naar top 10 met verwijzing naar `features.md`
    - Info admonition toegevoegd over ondersteunde deployment platforms
    - Derde navigatieknop toegevoegd naar `features.md`
- **`getting-started/index.md`** — Introductie pagina bijgewerkt:
    - `deployment.md` toegevoegd aan de projectstructuur
    - Verwijzing en navigatieknoppen naar `install.md` en `deployment.md` toegevoegd
- **`about/index.md`** — Over-pagina uitgebreid:
    - Tags frontmatter toegevoegd
    - Pagina-overzicht tabel toegevoegd met alle huidige pagina's
    - Volledige feature lijst toegevoegd
    - Overzicht van ondersteunde deployment platforms toegevoegd
- **`includes/abbreviations.md`** — Afkortingenlijst uitgebreid van 6 naar 20 afkortingen:
    - Nieuw toegevoegd: CSS, Git, pip, CLI, MIT, CDN, JSON, HTTP, HTTPS, AWS, API, VS Code, PR, MD
    - Etymologische nuances verwerkt voor Git, YAML, pip en MIT
- **`tags.md`** — Tagpagina gemoderniseerd:
    - Verouderde `tags_file` optie vervangen door `<!-- material/tags -->` marker
    - Uitleg toegevoegd over het gebruik van tags via frontmatter
    - Deprecation warning in `mkdocs.yml` opgelost
- **`mkdocs.yml`** — Configuratie bijgewerkt:
    - `tags` plugin vervangen door `material/tags`
    - `tags_file: tags.md` verwijderd — toekomstbestendig en zonder waarschuwingen
    - `deployment.md` toegevoegd aan de navigatiestructuur

---

## [0.2.0] — 2026-05-20

### Toegevoegd

- **`blog/`** — Blogfunctionaliteit via de ingebouwde Material blogplugin
    - `.authors.yml` met auteursprofielen
    - Eerste blogpost: `2026-05-07-welkom.md`
- **`changelog.md`** — Versiehistorie pagina
- **`tags.md`** — Overzichtspagina van alle gebruikte tags
- **`404.md`** — Aangepaste foutpagina voor niet-bestaande URL's
- **`includes/abbreviations.md`** — Eerste versie met 6 afkortingen
- **`.github/workflows/deploy.yml`** — Automatische deployment via GitHub Actions

### Gewijzigd

- **`mkdocs.yml`** — Uitgebreid met plugins en markdown-extensies

---

## [0.1.0] — 2026-05-20

### Toegevoegd

- Initiële projectstructuur aangemaakt
- **`index.md`** — Welkomstpagina
- **`getting-started/index.md`** — Introductie en projectstructuur
- **`getting-started/install.md`** — Installatie-instructies
- **`about/index.md`** — Projectinformatie
- **`mkdocs.yml`** — Basisconfiguratie met Material-thema
- **`README.md`** — Projectbeschrijving voor GitHub

---

!!! tip "Conventie"
    Dit project volgt [Semantic Versioning](https://semver.org/lang/nl/):
    **MAJOR.MINOR.PATCH** — waarbij MINOR nieuwe features zijn en PATCH kleine fixes.