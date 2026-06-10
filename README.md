# Splitflap

A Hugo theme built around an animated split-flap display ("Fallblattanzeige") —
the classic mechanical departure-board look as a landing page, paired with an
editorial content style, Ayu colors and Monaspace typography.

**Demo:** [hnsstrk.de](https://hnsstrk.de/)

## Features

- **Split-flap landing page** — animated board with scramble effect, message
  rotation and keyboard controls (adapted from
  [FlipOff](https://github.com/magnum6actual/flipoff))
- **Three color themes** — Ayu Light, Mirage and Dark, switchable at runtime,
  with system-preference detection and FOUC-free loading
- **Monaspace typography** — all five Monaspace variants bundled as variable
  fonts, plus Nerd Font icon variants (no SVG icons)
- **Mermaid diagrams** — self-hosted, loaded only on pages that use them,
  re-themed live on theme switch
- **Editorial content layouts** — blog with archive, projects, links and
  about pages; TOC, callout and TL;DR shortcodes
- **Hardened by default** — CSP-friendly asset pipeline with subresource
  integrity, `rel="noopener noreferrer"` on external links, strict Mermaid
  security level

## Requirements

- Hugo **extended** ≥ 0.146.0 (image processing, CSS bundling)

## Installation

As a Git submodule (recommended):

```bash
git submodule add https://github.com/hnsstrk/hugo-theme-splitflap.git themes/splitflap
echo 'theme = "splitflap"' >> hugo.toml
```

> **Note for CI/server builds:** make sure your build checks out submodules
> (`git submodule update --init`).

## Configuration

Minimal `hugo.toml`:

```toml
baseURL = "https://example.org/"
locale = "de"
title = "Your Name"
theme = "splitflap"

[params]
  description = "Your site description"
  author = "Your Name"
  tagline = "Optional footer tagline"
  logoPrompt = ">"          # prompt character before the site title

  [params.social]           # rendered in footer + JSON-LD sameAs
    github = "yourhandle"
    mastodon = "@yourhandle"
    # bluesky = "yourhandle"
    # linkedin = "yourhandle"

[menus]
  [[menus.main]]
    name = "Blog"
    url = "/blog/"
    weight = 10
    [menus.main.params]
      icon = "f02d"         # Nerd Font codepoint
```

A full reference of all parameters will ship with the `exampleSite/`.

## License

[MIT](LICENSE) — © 2026 Hans Jürgen Stark.

This theme bundles and adapts third-party work. Full license texts in
[THIRD-PARTY-LICENSES.md](THIRD-PARTY-LICENSES.md):

| Component | License |
|---|---|
| [FlipOff](https://github.com/magnum6actual/flipoff) — split-flap JS (adapted) | MIT |
| [Monaspace](https://github.com/githubnext/monaspace) — fonts (bundled) | OFL-1.1 |
| [Nerd Fonts](https://github.com/ryanoasis/nerd-fonts) — icon patching | MIT |
| [Mermaid.js](https://github.com/mermaid-js/mermaid) — diagrams (bundled) | MIT |
| [Ayu](https://github.com/ayu-theme/ayu-colors) — color palettes | MIT |

If you use this theme, a link back to this repository is appreciated — not
required.
