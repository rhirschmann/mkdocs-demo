---
title: Getting started
hide:
  - tags
tags:
  - mkdocs
  - introductie
---

# Introductie

MkDocs is een statische sitegenerator speciaal ontworpen voor projectdocumentatie. Je schrijft je inhoud in **Markdown**, en MkDocs bouwt er automatisch een volledige website van.

## Waarom MkDocs?

!!! tip "Geen webontwikkeling nodig"
    Je hoeft geen HTML, CSS of JavaScript te kennen. Alles wat je schrijft in Markdown wordt automatisch omgezet naar een professionele website.

Belangrijkste voordelen op een rij:

- **Snel**: de site wordt statisch gegenereerd — geen server nodig
- **Eenvoudig**: documentatie in Markdown, configuratie in één YAML-bestand
- **Mooi**: het Material-thema geeft direct een professioneel resultaat
- **Gratis hosting**: via GitHub Pages publiceer je automatisch bij elke commit

## Hoe werkt het?

```mermaid
graph LR
    A["📝 Markdown schrijven"] --> B["⚙️ mkdocs build"]
    B --> C["🌐 Statische HTML"]
    C --> D["🚀 GitHub Pages"]
```

## Structuur van dit project

Een typisch MkDocs-project ziet er zo uit:

```
mkdocs-demo/
│
├── mkdocs.yml
├── README.md
│
├── .github/
│   └── workflows/
│       └── deploy.yml
│
└── docs/
    ├── index.md
    ├── features.md
    ├── changelog.md
    ├── tags.md
    │
    ├── about/
    │   └── index.md
    │
    ├── blog/
    │   ├── .authors.yml
    │   ├── index.md
    │   └── posts/
    │       └── 2026-05-07-welkom.md
    │
    ├── getting-started/
    │   ├── index.md
    │   ├── install.md
    │   └── deployment.md
    │
    └── includes/
            abbreviations.md
```

## Code annotaties

Een krachtige functie van MkDocs Material is de mogelijkheid om code te voorzien van genummerde annotaties. Klik op de nummers om de uitleg te zien:

```yaml
theme:
  name: material # (1)!
  language: nl   # (2)!
  palette:
    - scheme: slate # (3)!
```

1. Het Material-thema geeft je direct een professionele uitstraling.
2. Alle UI-elementen worden automatisch vertaald naar Nederlands.
3. `slate` is de donkere modus — schakelbaar via de toggle rechtsboven.

---

Klaar om te beginnen? Ga naar de [installatiepagina](install.md) of bekijk direct alle
[deployment opties](deployment.md) om te zien op welke platforms je jouw documentatiesite
kunt publiceren.

[Installatie :material-arrow-right:](install.md){ .md-button .md-button--primary }
[Deployment opties :material-rocket-launch:](deployment.md){ .md-button }