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

---
## Custom CSS

MkDocs Material kan visueel worden aangepast met een eigen CSS-bestand. Hiermee
kun je de standaard styling verfijnen zonder het thema te overschrijven.

### Configuratie

Maak een CSS-bestand aan in `docs/stylesheets/` en verwijs ernaar in `mkdocs.yml`:

```yaml title="mkdocs.yml"
extra_css:
  - stylesheets/extra.css
```

### Voorbeeld: extra.css

In deze demo worden de volgende aanpassingen toegepast:

```css title="docs/stylesheets/extra.css"
/* Afgeronde hoeken voor code blokken */
.md-typeset pre {
  border-radius: 8px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.08);
}

/* Afgeronde hoeken voor admonitions */
.md-typeset .admonition,
.md-typeset details {
  border-radius: 8px;
}

/* Header schaduw */
.md-header {
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

/* Hover effect op cards */
.md-typeset .grid.cards > ul > li {
  transition: all 0.2s ease;
}

.md-typeset .grid.cards > ul > li:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

/* Afgeronde hoeken voor tabellen */
.md-typeset table:not([class]) {
  border-radius: 8px;
  overflow: hidden;
}

/* Afgeronde hoeken voor content tabs */
.md-typeset .tabbed-set {
  border-radius: 8px;
}

/* Vloeiende hover op navigatie links */
.md-nav__link {
  transition: color 0.2s ease;
}

/* Footer subtiele schaduw */
.md-footer {
  box-shadow: 0 -2px 4px rgba(0, 0, 0, 0.05);
}
```

### Overzicht aanpassingen

| Aanpassing | Effect |
|---|---|
| Afgeronde code blokken | Zachtere, moderne uitstraling |
| Afgeronde admonitions | Consistent met code blokken |
| Header schaduw | Subtiele diepte, header springt eruit |
| Card hover effect | Kaarten liften op bij hover |
| Afgeronde tabellen | Consistent afgeronde hoeken |
| Afgeronde content tabs | Consistent afgeronde hoeken |
| Navigatie hover | Vloeiende kleurovergang |
| Footer schaduw | Subtiele scheiding van content |

!!! tip "Custom kleuren"
    Je kunt ook de primaire kleuren volledig aanpassen via CSS variabelen:

    ```css
    :root {
      --md-primary-fg-color: #2e7d32;
      --md-accent-fg-color: #ff9100;
    }
    ```
---

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