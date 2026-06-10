---
tags:
title: Feature - Diagrammen
  - features
  - mermaid
hide:
  - tags
---

# Diagrammen

Met Mermaid kun je diagrammen en flowcharts schrijven in Markdown.
Onderstaande voorbeelden laten verschillende diagramtypen zien.

---

## Flowchart

```mermaid
graph LR
  A[Start] --> B{Keuze};
  B -->|Ja| C[Doorgaan];
  B -->|Nee| D[Stoppen];
  C --> E[Klaar];
```

---

## Sequentiediagram

```mermaid
sequenceDiagram
  participant Gebruiker
  participant MkDocs
  participant Browser
  Gebruiker->>MkDocs: mkdocs serve
  MkDocs->>Browser: Serveer HTML
  Browser->>Gebruiker: Toon documentatie
```

---

## Statusdiagram

```mermaid
stateDiagram-v2
  [*] --> Concept
  Concept --> Review
  Review --> Gepubliceerd
  Review --> Concept
  Gepubliceerd --> [*]
```