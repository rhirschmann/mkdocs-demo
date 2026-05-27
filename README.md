# mkdocs-demo

Een demonstratieproject dat laat zien hoe eenvoudig je professionele documentatie publiceert met **MkDocs** en **Material for MkDocs** — volledig geautomatiseerd via GitHub Actions.

---

## 🌐 Live demo

👉 [https://rhirschmann.github.io/mkdocs-demo/](https://rhirschmann.github.io/mkdocs-demo/)

---

## ✨ Features

- 📄 Documentatie geschreven in Markdown
- 🎨 Professioneel thema via Material for MkDocs
- 🌙 Dark/light mode schakelaar
- 🔍 Ingebouwde zoekfunctie
- 🏷️ Tags met automatische indexpagina
- 📰 Blog met archief, categorieën en auteursprofiel
- 💡 Code annotaties en syntax highlighting
- ⌨️ Toetsenbordtoetsen notatie
- ✅ Interactieve task lists
- 📊 Mermaid diagrammen (flowcharts, sequentiediagrammen)
- 🃏 Grid cards voor visuele navigatie
- 🔤 Automatische tooltips op afkortingen
- 🚀 Automatische deployment via GitHub Actions naar GitHub Pages

---

## 📁 Projectstructuur
mkdocs-demo/
│   mkdocs.yml
│   README.md
│   CHANGELOG.md
│
├───.github/
│   └───workflows/
│           deploy.yml
│
└───docs/
│   index.md
│   features.md
│   changelog.md
│   tags.md
│   404.md
│
├───includes/
│       abbreviations.md
│
├───getting-started/
│       index.md
│       install.md
│
├───about/
│       index.md
│
└───blog/
│   .authors.yml
└───posts/
        2026-05-27-welkom.md

---

## 🚀 Lokale ontwikkeling

**Vereisten:** Python 3.8 of hoger

```bash
# Installeer dependencies
pip install mkdocs mkdocs-material

# Start lokale ontwikkelserver (live reload)
mkdocs serve

De site is bereikbaar op http://127.0.0.1:8000.