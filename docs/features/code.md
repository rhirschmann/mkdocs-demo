---
tags:
title: Feature - Code
  - features
  - code
hide:
  - tags
---

# Code & Tabs

## Code Blokken

Code blokken worden gerenderd met syntaxkleuring en een ingebouwde
kopieerknop. Meerdere programmeertalen worden ondersteund.

```python title="hello_world.py" linenums="1"
def hello_world(name: str) -> str:
    """Geeft een begroeting terug."""
    return f"Hallo, {name}!"

print(hello_world("MkDocs"))
```

```bash title="installatie"
pip install mkdocs mkdocs-material
mkdocs serve
```

```yaml title="mkdocs.yml"
site_name: Mijn Documentatie
theme:
  name: material
  language: nl
```

---

## Content Tabs

Met content tabs kun je gerelateerde inhoud naast elkaar tonen, zoals
voorbeeldcode in meerdere programmeertalen.

=== "Python"
    ```python
    def groet():
        print("Hallo vanuit Python!")
    ```

=== "JavaScript"
    ```javascript
    function groet() {
        console.log("Hallo vanuit JavaScript!");
    }
    ```

=== "Bash"
    ```bash
    echo "Hallo vanuit Bash!"
    ```

=== "PowerShell"
    ```powershell
    Write-Host "Hallo vanuit PowerShell!"
    ```

---

## Takenlijsten

Takenlijsten zijn handig om stappen of checklists overzichtelijk weer te
geven. Met de `tasklist` extensie worden de checkboxen visueel gestijld.

- [x] MkDocs installeren
- [x] Material-thema instellen
- [x] Navigatie configureren
- [x] Features pagina aanmaken
- [ ] Documentatie uitschrijven
- [ ] Publiceren naar GitHub Pages