---
title: Deployment
hide:
  - tags
tags:
  - deployment
  - hosting
  - github-pages
  - netlify
  - vercel
---

# Deployment

MkDocs genereert statische HTML-bestanden die op elk hostingplatform kunnen
worden geplaatst. Op deze pagina vind je instructies voor de meest gebruikte
platforms.

---

## GitHub Pages (huidig)

GitHub Pages is het platform dat in deze demo gebruikt wordt. Deployment
verloopt volledig automatisch via GitHub Actions bij elke push naar de
`main` branch.

```yaml title=".github/workflows/deploy.yml"
name: Deploy MkDocs
on:
  push:
    branches:
      - main

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-python@v5
        with:
          python-version: '3.x'
      - run: pip install mkdocs mkdocs-material
      - run: mkdocs gh-deploy --force
```

---

## GitLab Pages

Voeg een `.gitlab-ci.yml` toe aan de root van je repository:

```yaml title=".gitlab-ci.yml"
pages:
  image: python:3.12
  script:
    - pip install mkdocs mkdocs-material
    - mkdocs build --site-dir public
  artifacts:
    paths:
      - public
  only:
    - main
```

---

## Netlify

Netlify detecteert automatisch MkDocs-projecten. Voeg een `netlify.toml`
toe aan de root van je repository:

```toml title="netlify.toml"
[build]
  command   = "pip install mkdocs mkdocs-material && mkdocs build"
  publish   = "site"

[build.environment]
  PYTHON_VERSION = "3.12"
```

Verbind daarna je GitHub-repository via [netlify.com](https://netlify.com)
en deployment verloopt automatisch bij elke push.

---

## Vercel

Vercel ondersteunt MkDocs via een `vercel.json` configuratiebestand:

```json title="vercel.json"
{
  "buildCommand": "pip install mkdocs mkdocs-material && mkdocs build",
  "outputDirectory": "site",
  "installCommand": "pip install mkdocs mkdocs-material"
}
```

Verbind je repository via [vercel.com](https://vercel.com) en deployment
start automatisch bij elke push naar de hoofdbranch.

---

## Cloudflare Pages

Configureer Cloudflare Pages via het dashboard met de volgende instellingen:

| Instelling          | Waarde                              |
|---------------------|-------------------------------------|
| Build command       | `pip install mkdocs mkdocs-material && mkdocs build` |
| Build output folder | `site`                              |
| Python versie       | `3.12`                              |

---

## Azure Static Web Apps

Voeg een GitHub Actions workflow toe voor Azure:

```yaml title=".github/workflows/azure-deploy.yml"
name: Deploy naar Azure Static Web Apps
on:
  push:
    branches:
      - main

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-python@v5
        with:
          python-version: '3.x'
      - run: pip install mkdocs mkdocs-material && mkdocs build
      - uses: Azure/static-web-apps-deploy@v1
        with:
          azure_static_web_apps_api_token: ${{ secrets.AZURE_TOKEN }}
          action: upload
          app_location: site
```

---

## Read the Docs

Read the Docs is speciaal gebouwd voor documentatiesites en ondersteunt
MkDocs native. Voeg een `.readthedocs.yaml` toe:

```yaml title=".readthedocs.yaml"
version: 2

build:
  os: ubuntu-22.04
  tools:
    python: "3.12"

mkdocs:
  configuration: mkdocs.yml

python:
  install:
    - requirements: requirements.txt
```

Maak ook een `requirements.txt` aan:

```text title="requirements.txt"
mkdocs
mkdocs-material
```

Verbind daarna je repository via [readthedocs.org](https://readthedocs.org).

---

## Lokaal draaien

Zonder extern platform kun je de documentatie altijd lokaal bekijken:

```bash
mkdocs serve
```

De site is dan beschikbaar op `http://127.0.0.1:8000`.

!!! tip "Kies het juiste platform"
    - **Simpelste setup:** Netlify of Cloudflare Pages
    - **Al op GitHub:** GitHub Pages (zoals in deze demo)
    - **Microsoft-omgeving:** Azure Static Web Apps
    - **Puur voor documentatie:** Read the Docs