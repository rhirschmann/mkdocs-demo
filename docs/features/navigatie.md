---
title: Feature - Navigatie
tags:
  - features
  - navigatie
hide:
  - tags
---

# Navigatie & Verwijzingen

## Tags

Tags worden bovenaan de pagina getoond en maken het eenvoudig om pagina's
te categoriseren en terug te vinden via de tagpagina. Voeg tags toe via
de frontmatter bovenaan een Markdown-bestand:

```yaml
---
tags:
  - demo
  - features
  - overzicht
---
```

### Tags verbergen

Tags blijven altijd werken in de zoekfunctie en op de [tagpagina](../tags.md),
ook als ze visueel verborgen zijn op de pagina zelf. Voeg `tags` toe aan de
`hide` lijst in de frontmatter om ze te verbergen:

```yaml
---
tags:
  - demo
  - features
hide:
  - tags
---
```

### Overzicht taggedrag

| Instelling | Zichtbaar op pagina | Zichtbaar in zoekfunctie | Zichtbaar op tagpagina |
|---|:---:|:---:|:---:|
| Tags zonder `hide` | ✅ | ✅ | ✅ |
| Tags met `hide: tags` | ❌ | ✅ | ✅ |
| Geen tags | ❌ | ❌ | ❌ |

!!! tip "Best practice"
    Voeg tags altijd toe via de frontmatter, ook als je ze visueel verbergt.
    Ze blijven dan doorzoekbaar en zichtbaar op de tagpagina.

---

## Afkortingen (Abbreviations)

Door gebruik te maken van het `includes/abbreviations.md` bestand worden
afkortingen automatisch voorzien van een tooltip. Beweeg je muis over de
onderstaande afkortingen om de uitleg te zien.

Deze documentatie is gebouwd met MkDocs en maakt gebruik van YAML voor
de configuratie. De HTML-output wordt gegenereerd via een CLI-commando.

--8<-- "includes/abbreviations.md"

---

## Grids & Cards

Cards bieden een visuele manier om features of onderwerpen overzichtelijk
te presenteren.

<div class="grid cards" markdown>

-   :material-clock-fast:{ .lg .middle } __Snel opgezet__

    ---

    Binnen enkele minuten een professionele documentatiesite draaien
    met MkDocs en het Material-thema.

-   :material-language-markdown:{ .lg .middle } __Markdown__

    ---

    Schrijf documentatie in eenvoudige Markdown-syntax, zonder kennis
    van HTML of CSS.

-   :material-magnify:{ .lg .middle } __Zoekfunctie__

    ---

    Ingebouwde zoekfunctie doorzoekt alle pagina's direct in de browser,
    zonder externe diensten.

-   :material-palette:{ .lg .middle } __Thema & Stijlen__

    ---

    Pas kleuren, lettertypen en de lay-out volledig aan via de
    `mkdocs.yml` configuratie.

</div>

---

## Footnotes

Voetnoten zijn handig voor bronvermeldingen of aanvullende uitleg die de
hoofdtekst niet onderbreekt. Klik op het cijfer om naar de voetnoot te
springen.[^1]

MkDocs is een open-source project en actief onderhouden door de
community.[^2]

[^1]: Dit is een voetnoot. Je kunt hier bronvermeldingen of aanvullende
      informatie kwijt zonder de leesflow te onderbreken.
[^2]: Meer informatie op [mkdocs.org](https://www.mkdocs.org) en
      [squidfunk.github.io/mkdocs-material](https://squidfunk.github.io/mkdocs-material).