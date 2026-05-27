---

## 📄 `docs/getting-started/install.md`

```markdown
# Installatie

Op deze pagina installeer je alles wat je nodig hebt om MkDocs lokaal te draaien en je site te deployen naar GitHub Pages.

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