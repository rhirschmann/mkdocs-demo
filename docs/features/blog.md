---
tags:
  - features
  - blog
hide:
  - tags
---

# Blog

MkDocs Material bevat een ingebouwde blogplugin waarmee je blogposts kunt
publiceren naast je documentatie. De blog heeft een eigen lay-out met
automatisch gegenereerd archief en categorieën in de linkerzijbalk.

## Configuratie

```yaml title="mkdocs.yml"
plugins:
  - blog:
      blog_dir: blog
      blog_toc: true
      post_date_format: long
      post_readtime: true
      archive: true
      archive_name: Archief
      archive_date_format: MMMM yyyy
      archive_toc: true
      categories: true
      categories_name: Categorieën
      categories_toc: true
      pagination: true
      pagination_per_page: 10
```

## Navigatie instellen

Om de blog correct in de linkerzijbalk te tonen met archief en categorieën
zijn twee instellingen vereist in `mkdocs.yml`.

De blog moet als **subsectie** in de `nav` staan, niet als directe link:

```yaml title="mkdocs.yml — nav"
nav:
  - Blog:
      - blog/index.md
```

Daarnaast moet `navigation.indexes` actief zijn om te voorkomen dat "Blog"
dubbel wordt getoond in de zijbalk:

```yaml title="mkdocs.yml — theme features"
theme:
  features:
    - navigation.indexes
```

## Resultaat in de linkerzijbalk

Met bovenstaande configuratie toont de blog automatisch de volgende
navigatiestructuur:

| Element | Automatisch | Voorbeeld |
|---|:---:|---|
| Blog index | ✅ | Blog |
| Archief per maand | ✅ | mei 2026 |
| Categorieën | ✅ | Nieuws |

## Blogpost aanmaken

Blogposts worden geplaatst in de `docs/blog/posts/` map met een datum-prefix
in de bestandsnaam:

```
docs/
└── blog/
    ├── .authors.yml
    ├── index.md
    └── posts/
        └── 2026-05-07-welkom.md
```

Een blogpost bevat frontmatter met datum, auteur en categorie:

```yaml title="docs/blog/posts/2026-05-07-welkom.md"
---
date: 2026-05-07
authors:
  - rhirschmann
categories:
  - Nieuws
tags:
  - blog
  - welkom
---

# Welkom bij de mkdocs-demo blog

Dit is de eerste blogpost...

<!-- more -->

De rest van de blogpost staat hier.
```

De `<!-- more -->` separator bepaalt welk deel van de post als preview wordt
getoond op de blog indexpagina.

## Auteurs configureren

Auteurs worden gedefinieerd in `docs/blog/.authors.yml`:

```yaml title="docs/blog/.authors.yml"
authors:
  rhirschmann:
    name: Ruud Hirschmann
    description: Auteur & maintainer
    avatar: https://github.com/rhirschmann.png
```

## Verschil met documentatiepagina's

| Kenmerk | Documentatiepagina's | Blog |
|---|:---:|:---:|
| Linkernavigatie | ✅ Navigatieboom | ✅ Archief & categorieën |
| Inhoudsopgave (rechts) | ✅ | ✅ |
| Chronologische weergave | ❌ | ✅ |
| Leestijd | ❌ | ✅ |
| Auteursinformatie | ❌ | ✅ |
| `<!-- more -->` separator | ❌ | ✅ |

!!! tip "Nieuwe posts"
    Nieuwe blogposts worden automatisch opgenomen in het archief en de
    juiste categorie. Er is geen handmatige aanpassing van de navigatie
    of configuratie nodig.