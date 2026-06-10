# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Projektübersicht

**Projektname:** Splitflap (Repo: `hugo-theme-splitflap`)
**Beschreibung:** Eigenständiges Open-Source-Hugo-Theme — Split-Flap-Display-Landing-Page, Ayu-Farbsystem, Monaspace-Typografie. Extrahiert aus dem Monorepo `hnsstrk.de` (mit vollständiger Git-Historie via `git filter-repo`).
**Lizenz:** MIT (eigener Code) — gebündelte Drittanbieter-Komponenten siehe `THIRD-PARTY-LICENSES.md`
**Konsument:** hnsstrk.de bindet dieses Theme künftig als Git-Submodule unter `themes/splitflap` ein.

## Attribution — nicht verhandelbar

Der saubere Umgang mit Fremdarbeit ist Kernanforderung dieses Projekts:

1. **`THIRD-PARTY-LICENSES.md` ist die maßgebliche Liste.** Jede neu gebündelte oder adaptierte Fremdkomponente wird dort mit Volltext-Lizenz eingetragen — vor dem Commit, nicht danach.
2. **Fonts:** Die OFL-Kopie `static/fonts/OFL.txt` muss bei den Monaspace-Fonts liegen (Lizenzpflicht der OFL-1.1). Beim Hinzufügen/Entfernen von Fonts prüfen.
3. **FlipOff-Sonderfall:** Upstream hat keine LICENSE-Datei, nur die MIT-Erklärung im README (wörtlich zitiert in `THIRD-PARTY-LICENSES.md`). Bei Änderungen an den Board-JS-Dateien diesen Hinweis nicht entfernen.
4. **Minifizierte Bundles** (z. B. `mermaid.min.js`) verlieren ihre Lizenz-Banner — der Volltext in `THIRD-PARTY-LICENSES.md` ersetzt das. Beim Aktualisieren der Mermaid-Version Copyright-Zeile prüfen.
5. **Niemals** Fremdcode ohne Lizenzprüfung einbündeln. Bei unklarer Lizenz: User fragen, nicht raten.

## Befehle

Das Theme allein baut nicht — es braucht eine Site. Test-Build gegen hnsstrk.de:

```bash
hugo --source /Users/hnsstrk/Repositories/hnsstrk.de \
     --themesDir /Users/hnsstrk/Repositories \
     --theme hugo-theme-splitflap \
     --destination /tmp/splitflap-build-test --minify
```

Sobald `exampleSite/` existiert:

```bash
hugo server --source exampleSite --themesDir ../.. --theme hugo-theme-splitflap
```

## Architektur

### Theme-System (Ayu)

Drei Themes: **Light** (Default), **Mirage**, **Dark** — Umschaltung per `data-theme`-Attribut auf `<html>`. `assets/js/theme.js` verwaltet den Wechsel (localStorage-gestützt, abgesichert gegen blockierte Cookies) und feuert ein `themechange`-CustomEvent. Alle Farben als CSS Custom Properties in `assets/css/style.css`, dreischichtig: UI-Farben, Syntax-Farben, Utopia-Fluid-Scales.

### Split-Flap-Board

Modulare JS-Architektur in `assets/js/` (adaptiert von FlipOff, s. Attribution):
- `Board.js` + `Tile.js` — Kern-Animation (Scramble + Flip)
- `KeyboardController.js` — Tastatursteuerung
- `MessageRotator.js` — Nachrichtenrotation
- `constants.js` — Konfiguration, Charset, Farb-Getter
- `main.js` / `404-main.js` — Initialisierung Landing Page bzw. 404

### Nerd Font Icons

Icons als Nerd-Font-Glyphen über Klasse `.nf-icon` (keine SVGs). Jede Monaspace-Variante hat eine NF-Version (`*NF-Regular.woff2`), geladen per `unicode-range`. Neue Codepoints vor Verwendung per fontTools auf Existenz prüfen.

### Mermaid

Nur geladen, wenn die Seite Mermaid-Codeblöcke enthält (Store-Flag `hasMermaid` via Render-Hook `layouts/_default/_markup/render-codeblock-mermaid.html`). Theming-Logik als Inline-Script in `layouts/_default/baseof.html`; `securityLevel: 'strict'` — keine HTML-Tags/Entities in Node-Labels.

## Konventionen

- **Dokumentation intern:** Deutsch (CLAUDE.md, Commit-Messages — konsistent zur extrahierten Historie)
- **Öffentliche Doku:** Englisch (README.md, THIRD-PARTY-LICENSES.md, exampleSite-Kommentare)
- **Code:** Englisch (Variablen, Funktionen, CSS-Klassen); Code-Kommentare Deutsch
- **Commits:** Konventionelle Commits (`feat:`, `fix:`, `docs:`, `style:`, `chore:`)
- **Encoding:** UTF-8, deutsche Umlaute exakt erhalten (ä ö ü ß — nie ASCII-Digraphen)

## Offene Aufgaben bis zur Veröffentlichung

1. **Entkopplung** (Site-spezifisches konfigurierbar machen):
   - `assets/js/constants.js` — Board-Messages (enthält noch `@hnsstrk`) → über Site-Params injizieren
   - `layouts/_default/about.html` — Avatar-Pfad und alt-Text hardcoded → `site.Params`
2. **`exampleSite/`** mit Demo-Content und vollständig kommentierter `hugo.toml`
3. **Screenshots** für die Hugo-Themes-Galerie: `images/screenshot.png` (1500×1000) + `images/tn.png` (900×600)
4. **hnsstrk.de umstellen:** `themes/hnsstrk` entfernen, Submodule einbinden, Server-Build-Skript `build-hnsstrk` um `git submodule update --init` ergänzen — **vorher auf dem Server testen, sonst deployt die Seite ohne Theme**
5. GitHub-Repo `hnsstrk/hugo-theme-splitflap` anlegen (gemeinsam mit dem User)

## Projektdokumentation

Konzepte, Entscheidungen und ADRs liegen im Obsidian Vault, Projektordner `Projekte/hnsstrk.de/` (das Theme ist dort Teilprojekt). Vault-Pfade siehe globale CLAUDE.md.
