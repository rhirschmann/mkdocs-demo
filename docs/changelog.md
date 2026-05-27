# Changelog

Alle noemenswaardige wijzigingen in dit project worden hier bijgehouden.
De opmaak volgt [Keep a Changelog](https://keepachangelog.com/nl/1.0.0/).

---

## [0.2.0] — 2026-05-27

### Toegevoegd

- Grid cards op de homepage voor visuele navigatie
- Code annotaties op de Getting Started pagina
- Task list (checklist) op de installatiepagina
- Tags-ondersteuning op alle pagina's met tags-indexpagina
- Afkortingen met automatische tooltips (`includes/abbreviations.md`)
- Custom 404-pagina
- Dark mode toggle op beide kleurenschema's (licht én donker)
- `pymdownx.emoji` extensie voor correcte icoonweergave
- `pymdownx.tasklist` extensie voor interactieve checkboxen
- `content.code.annotate` feature voor code annotaties
- Pip-caching in de GitHub Actions workflow

### Gewijzigd

- Navigatiestructuur omgezet naar submappen (`getting-started/`, `about/`)
- `deploy.yml` vereenvoudigd: externe `peaceiris` action vervangen door `mkdocs gh-deploy`
- Mermaid-diagram labels voorzien van aanhalingstekens voor correcte parsing
- Bestandsnamen omgezet naar lowercase voor Linux-compatibiliteit

### Opgelost

- Dubbele `theme:` sleutel verwijderd uit `mkdocs.yml`
- Nav-paden gecorrigeerd na introductie van submappen
- Paginabrede icooonweergave opgelost door `pymdownx.emoji` toe te voegen

---

## [0.1.0] — 2026-05-20

### Toegevoegd

- Automatische projectstructuur aangemaakt
- MkDocs configuratie toegevoegd (`mkdocs.yml`)
- GitHub Actions workflow voor automatische deployment naar GitHub Pages
- Startpagina, Getting Started en Over-pagina's
- Zoekfunctie, codeblokken met kopieerknop, navigatietabs