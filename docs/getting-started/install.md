---
tags:
  - installatie
  - python
  - pip
---

# Installatie

Op deze pagina installeer je alles wat je nodig hebt om MkDocs lokaal te draaien en je site te deployen naar GitHub Pages.

## Checklist

- [x] GitHub-account aangemaakt
- [x] Git geïnstalleerd
- [x] Python 3.8 of hoger geïnstalleerd
- [ ] `mkdocs` en `mkdocs-material` geïnstalleerd
- [ ] `mkdocs serve` werkt lokaal
- [ ] Eerste push naar `master` gedaan

## Vereisten

!!! warning "Python vereist"
    MkDocs heeft **Python 3.8 of hoger** nodig. Controleer je versie met:
    ```bash
    python --version
    ```

## Stap 1 — Installeer MkDocs en het Material-thema

=== "pip (standaard)"
    ```bash
    pip install mkdocs mkdocs-material
    ```

=== "pip met virtual environment (aanbevolen)"
    ```bash
    python -m venv .venv
    source .venv/bin/activate   # Windows: .venv\Scripts\activate
    pip install mkdocs mkdocs-material
    ```

## Stap 2 — Start de lokale ontwikkelserver

```bash
mkdocs serve
```

De site is nu bereikbaar op [http://127.0.0.1:8000](http://127.0.0.1:8000).
Wijzigingen in je Markdown-bestanden worden **direct zichtbaar** in de browser — zonder herladen.

!!! info "Live reload"
    MkDocs houdt je bestanden in de gaten. Sla je een bestand op, dan herlaadt de browser automatisch.

## Stap 3 — Bouw de productiesite

```bash
mkdocs build
```

Dit genereert een `site/`-map met alle statische HTML. Deze map wordt door de GitHub Actions workflow automatisch naar GitHub Pages gepubliceerd.

## Stap 4 — Deploy naar GitHub Pages

Met de meegeleverde GitHub Actions workflow hoef je zelf niets te doen. Push je wijzigingen naar de `master`-branch:

```bash
git add .
git commit -m "docs: update documentatie"
git push
```

!!! success "Automatisch online"
    Binnen ongeveer een minuut is je site live op:
    `https://<jouw-gebruikersnaam>.github.io/<repo-naam>/`

## Overzicht commando's

| Commando             | Omschrijving                               |
|----------------------|--------------------------------------------|
| `mkdocs serve`       | Start lokale ontwikkelserver (live reload) |
| `mkdocs build`       | Bouw de statische site naar `./site/`      |
| `mkdocs gh-deploy`   | Deploy direct naar GitHub Pages            |
| `mkdocs new .`       | Maak een nieuw MkDocs-project aan          |