---
tags:
  - changelog
  - versiehistorie
hide:
  - tags
---

# Changelog

Alle wijzigingen van dit project worden op deze pagina bijgehouden.
Het formaat is gebaseerd op [Keep a Changelog](https://keepachangelog.com/nl/1.0.0/).

---

## [0.3.0] — 2026-05-27

### Toegevoegd

- **`features.md`** — Nieuwe pagina met uitgebreide demonstratie van 14 MkDocs
  Material features (404-pagina, tags, admonitions, code blokken, content tabs,
  grids & cards, knoppen, afkortingen, Mermaid diagrammen, takenlijsten, tabellen,
  footnotes, iconen & emoji en meertaligheid)
- **`getting-started/deployment.md`** — Nieuwe pagina met configuratievoorbeelden
  voor 7 hostingplatformen (GitHub Pages, GitLab Pages, Netlify, Vercel,
  Cloudflare Pages, Azure Static Web Apps en Read the Docs)
- **`getting-started/alternatieven.md`** — Nieuwe vergelijkingspagina met
  9 documentatietools (MkDocs, Sphinx, Docusaurus, VitePress, Hugo, Jekyll,
  GitBook, Docsify en Starlight)
- **Meertaligheid (i18n)** — Engelse vertalingen toegevoegd via
  `mkdocs-static-i18n` plugin (index, about, getting-started en abbreviations)

### Gewijzigd

- **`mkdocs.yml`** — Configuratie bijgewerkt:
    - `site_url` toegevoegd — vereist voor correcte 404-styling op GitHub Pages
    - `tags` plugin vervangen door `material/tags`
    - `tags_file: tags.md` verwijderd — toekomstbestendig en zonder waarschuwingen
    - `deployment.md` en `alternatieven.md` toegevoegd aan de navigatiestructuur
    - `mkdocs-static-i18n` plugin toegevoegd met Nederlands als standaardtaal en Engels als tweede taal
- **`features.md`** — 404-sectie bijgewerkt met uitleg over `site_url` vereiste,
  gedragstabel per platform en admonitions voor met/zonder `site_url`
- **`features.md`** — Tags-sectie uitgebreid met `hide: tags` optie,
  overzichtstabel voor taggedrag en best practice tip
- **`features.md`** — Meertaligheid (i18n) sectie toegevoegd met configuratie,
  bestandsnaamconventie en taalschakelaar uitleg
- **`index.md`** — Welkomstpagina uitgebreid met vijfde navigatiekaart voor
  features, top 10 kenmerken tabel, deployment admonition en extra navigatieknop
- **`getting-started/index.md`** — Introductie bijgewerkt met `deployment.md`
  en `alternatieven.md` in projectstructuur en navigatieknoppen
- **`about/index.md`** — Over-pagina uitgebreid met pagina-overzicht, volledige
  feature lijst en ondersteunde deployment platforms
- **`includes/abbreviations.md`** — Uitgebreid van 6 naar 24 afkortingen met
  etymologische nuances voor Git, YAML, pip en MIT
- **`tags.md`** — Verouderde `tags_file` optie vervangen door
  `<!-- material/tags -->` marker
- Alle pagina's — `hide: tags` toegevoegd aan frontmatter

### Verwijderd

- **`404.md`** — Custom 404-pagina verwijderd; het Material-thema genereert
  automatisch een correcte 404-pagina wanneer `site_url` is ingesteld

---

## [0.2.0] — 2026-05-20

### Toegevoegd

- **`blog/`** — Blogfunctionaliteit via de ingebouwde Material blogplugin
  met auteursprofielen en eerste blogpost
- **`changelog.md`** — Versiehistorie pagina
- **`tags.md`** — Overzichtspagina van alle gebruikte tags
- **`404.md`** — Custom foutpagina zonder navigatie en inhoudsopgave
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