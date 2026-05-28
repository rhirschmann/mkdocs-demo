---
tags:
  - features
  - opmaak
hide:
  - tags
---

# Opmaak & Styling

## Logo & Favicon

Het standaard Material-thema logo kan vervangen worden door een eigen logo.
Voor de beste resultaten gebruik je een SVG-bestand — dit is altijd scherp,
schaalbaar en heeft automatisch een transparante achtergrond.

### Configuratie

```yaml title="mkdocs.yml"
theme:
  logo: assets/logo.svg
  favicon: assets/logo.svg
```

### Bestandslocatie

```
docs/
└── assets/
    └── logo.svg
```

### Waarom SVG?

| | PNG | SVG |
|---|---|---|
| Transparante achtergrond | ⚙️ Niet altijd | ✅ Altijd |
| Schaalbaar | ❌ Pixelated bij vergroting | ✅ Scherp op elk formaat |
| Bestandsgrootte | Groter | Kleiner |
| Bewerkbaar | Nee | Ja (teksteditor) |

### Alternatief: Material icon als logo

Als je geen eigen afbeelding wilt gebruiken, kun je een ingebouwd Material
icon als logo instellen:

```yaml title="mkdocs.yml"
theme:
  icon:
    logo: material/book-open-page-variant
```

!!! tip "Logo ontwerp"
    Gebruik lichte kleuren (wit of lichtgrijs) voor je logo, zodat het
    goed zichtbaar is op de gekleurde header. SVG-bestanden zijn ideaal
    omdat ze geen achtergrond hebben en scherp blijven op elk schermformaat.

## Admonitions

Admonitions zijn gekleurde blokken om de lezer te attenderen op
belangrijke informatie. MkDocs Material ondersteunt meerdere typen.

!!! note "Opmerking"
    Dit is een informatieve opmerking, handig voor aanvullende uitleg.

!!! tip "Tip"
    Gebruik tips om de lezer te wijzen op handige trucs of shortcuts.

!!! warning "Let op"
    Gebruik dit blok om de lezer te waarschuwen voor mogelijke valkuilen.

!!! danger "Gevaar"
    Dit blok is bedoeld voor kritieke meldingen die directe aandacht vereisen.

!!! success "Succes"
    Gebruik dit om een succesvol resultaat of een positieve bevestiging te tonen.

!!! info "Informatie"
    Extra achtergrondinformatie die niet direct noodzakelijk is, maar nuttig kan zijn.

??? example "Uitklapbaar voorbeeld (klik om te openen)"
    Dit is een collapsible admonition. De inhoud is standaard verborgen
    en kan worden uitgeklapt door op de titel te klikken.

---

## Tabellen

Tabellen worden volledig ondersteund in Markdown en zijn eenvoudig
leesbaar en uitbreidbaar.

| Feature            | Beschikbaar | Notitie                          |
|--------------------|:-----------:|----------------------------------|
| Tags               | ✅          | Via `material/tags` plugin       |
| Mermaid diagrammen | ✅          | Via `pymdownx.superfences`       |
| Zoekfunctie        | ✅          | Ingebouwd, geen plugin nodig     |
| Content Tabs       | ✅          | Via `pymdownx.tabbed`            |
| Admonitions        | ✅          | Via `admonition` extensie        |

---

## Knoppen

MkDocs Material ondersteunt gestylede knoppen via CSS-klassen. Knoppen
kunnen worden gebruikt als call-to-action of voor navigatie.

[Primaire knop](#){ .md-button .md-button--primary }
[Secundaire knop](#){ .md-button }

---

## Iconen & Emoji

MkDocs Material ondersteunt iconen uit drie bibliotheken: **Material
Design Icons**, **FontAwesome** en **Octicons**. Iconen kunnen inline in
tekst worden gebruikt.

| Bibliotheek       | Voorbeeld gebruik                   | Resultaat                       |
|-------------------|-------------------------------------|---------------------------------|
| Material Design   | `:material-check-circle:`           | :material-check-circle:         |
| Material Design   | `:material-alert-circle:`           | :material-alert-circle:         |
| FontAwesome       | `:fontawesome-brands-github:`       | :fontawesome-brands-github:     |
| FontAwesome       | `:fontawesome-brands-python:`       | :fontawesome-brands-python:     |
| Octicons          | `:octicons-repo-16:`                | :octicons-repo-16:              |
| Emoji             | `:smile:`                           | :smile:                         |