---
tags:
  - features
  - i18n
hide:
  - tags
---

# Meertaligheid (i18n)

MkDocs ondersteunt meertalige documentatie via de `mkdocs-static-i18n` plugin.
De UI-elementen van het Material-thema worden automatisch vertaald naar 60+ talen
via de `language` instelling in het thema.

## UI-taal instellen

De taal van alle UI-elementen (zoekbalk, navigatie, footer) wordt ingesteld via
het thema:

```yaml title="mkdocs.yml"
theme:
  name: material
  language: nl
```

## Meertalige content

Voor het aanbieden van documentatie in meerdere talen kan de `mkdocs-static-i18n`
plugin gebruikt worden. Installeer deze via pip:

```bash
pip install mkdocs-static-i18n
```

Configureer vervolgens de talen in `mkdocs.yml`:

```yaml title="mkdocs.yml"
plugins:
  - i18n:
      languages:
        - locale: nl
          default: true
          name: Nederlands
        - locale: en
          name: English
          build: true
```

## Bestandsnaamconventie

Vertaalde pagina's worden aangeduid met een taalsuffix in de bestandsnaam.
De standaardtaal heeft geen suffix nodig.

```
docs/
├── index.md          # Nederlands (standaard)
├── index.en.md       # Engels
├── about/
│   ├── index.md      # Nederlands (standaard)
│   └── index.en.md   # Engels
└── ...
```

## Taalschakelaar

Na het configureren van de plugin verschijnt er automatisch een taalschakelaar
in de header van de site. Bezoekers kunnen hiermee eenvoudig wisselen tussen
de beschikbare talen.

| Instelling | Gedrag |
|---|---|
| `default: true` | Deze taal wordt standaard getoond |
| `build: true` | De vertaling wordt meegebouwd |
| Geen `.en.md` variant | Pagina wordt alleen in de standaardtaal getoond |

!!! danger "Niet compatibel met de Blog plugin"
    De `mkdocs-static-i18n` plugin is **niet compatibel** met de ingebouwde
    Material blog plugin. Blogposts worden niet meer getoond wanneer beide
    plugins tegelijkertijd actief zijn. Dit is een bevestigd probleem zonder
    oplossing ([GitHub Issue #4863](https://github.com/squidfunk/mkdocs-material/issues/4863)).
    Kies daarom voor **óf** de blog plugin **óf** de i18n plugin.

!!! warning "navigation.instant"
    De taalschakelaar is niet compatibel met de `navigation.instant` feature.
    Verwijder deze uit je thema-configuratie wanneer je de i18n plugin gebruikt.

!!! tip "Niet alles hoeft vertaald"
    Pagina's zonder vertaling worden automatisch in de standaardtaal getoond.
    Je hoeft dus niet alle pagina's te vertalen om meertaligheid te activeren.

!!! info "Deze demo"
    In deze demo is gekozen voor de blog plugin. Meertaligheid via de i18n
    plugin is daarom niet geactiveerd maar wel gedocumenteerd op deze pagina
    als referentie.