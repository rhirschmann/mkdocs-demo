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
    A[📝 Markdown schrijven] --> B[⚙️ mkdocs build]
    B --> C[🌐 Statische HTML]
    C --> D[🚀 GitHub Pages]