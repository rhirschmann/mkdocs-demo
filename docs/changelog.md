---
title: Changelog
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

## [0.4.0] — 2026-05-28

### Toegevoegd

- **`assets/logo.svg`** — Custom SVG logo met transparante achtergrond
  (open boek met code brackets in indigo/paars kleurenschema)
- **`stylesheets/extra.css`** — Custom CSS met afgeronde hoeken voor code
  blokken, admonitions, tabellen en content tabs, hover-effecten op cards,
  subtiele schaduwen op header en footer
- **`.gitignore`** — `site/` directory uitgesloten van Git tracking

### Gewijzigd

- **`mkdocs.yml`** — Custom logo, favicon en extra CSS toegevoegd
- **`features/opmaak.md`** — Logo & favicon en custom CSS secties toegevoegd
- **`features/index.md`** — Opmaak & styling card bijgewerkt met logo en CSS
---

## [0.3.0] — 2026-05-27

### Toegevoegd

- **`features/`** — Features pagina opgesplitst in 8 overzichtelijke subpagina's
  (index, opmaak, code, diagrammen, navigatie, blog, meertaligheid en 404)
- **`getting-started/deployment.md`** — Nieuwe pagina met configuratievoorbeelden
  voor 7 hostingplatformen (GitHub Pages, GitLab Pages, Netlify, Vercel,
  Cloudflare Pages, Azure Static Web Apps en Read the Docs)
- **`getting-started/alternatieven.md`** — Nieuwe vergelijkingspagina met
  9 documentatietools (MkDocs, Sphinx, Docusaurus, VitePress, Hugo, Jekyll,
  GitBook, Docsify en Starlight)

### Gewijzigd

- **`mkdocs.yml`** — Configuratie bijgewerkt:
    - `site_url` toegevoegd — vereist voor correcte 404-styling op GitHub Pages
    - `tags` plugin vervangen door `material/tags`
    - `tags_file: tags.md` verwijderd — toekomstbestendig en zonder waarschuwingen
    - `navigation.indexes` toegevoegd — voorkomt dubbele sectie-headers
    - `deployment.md` en `alternatieven.md` toegevoegd aan de navigatiestructuur
    - Features navigatie omgezet van enkele pagina naar subsecties
    - Blog plugin uitgebreid met archief, categorieën, leestijd en paginatie
    - Blog navigatie aangepast naar subsectie-stijl voor correcte zijbalk
- **`index.md`** — Welkomstpagina uitgebreid van 5 naar 8 navigatiekaarten
  (blog, alternatieven en over toegevoegd) en links gecorrigeerd naar
  `features/index.md`
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

- **`features.md`** — Enkele features pagina vervangen door `features/` map
  met 8 subpagina's
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