# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/).

## [0.1.0] - 2026-06-12

### Added

- **Split-flap landing page** — animated board adapted from
  [FlipOff](https://github.com/magnum6actual/flipoff) (MIT, attributed);
  scramble effect, message rotation, keyboard controls, `params.board.messages`
  config.
- **Three Ayu color themes** — Light (default), Mirage, Dark; runtime switcher
  with `localStorage` persistence, system-preference detection on first visit,
  `defaultTheme` param, and a `themechange` CustomEvent for live diagram
  re-rendering.
- **Monaspace typography** — all five Monaspace variants as variable fonts,
  plus Nerd Font icon variants (`*NF-Regular.woff2`) loaded via `unicode-range`.
  Icons via `.nf-icon` class — no SVG icons.
- **Mermaid diagrams** — self-hosted `mermaid.min.js`, loaded only on pages
  that contain a `mermaid` code block (render-hook flag `hasMermaid`). Full Ayu
  color mapping across all three themes; `darken()` helper for text and border
  colors; live re-theming on `themechange`; `securityLevel: strict`.
- **Editorial layouts** — blog with archive and pagination, projects, links
  (data-driven via `data/links.yaml`), tags, and about page. TOC, `callout`,
  and `tldr` shortcodes. `featured_image` and `featured_layout` support in blog
  posts and list cards.
- **i18n** — German (`de`) and English (`en`) translation files; full coverage
  of all UI strings.
- **Hardened defaults** — CSP-friendly asset pipeline with subresource
  integrity, `rel="noopener noreferrer"` on external links, JSON-LD structured
  data, strict Mermaid security level.
- **`exampleSite/`** — fully commented `hugo.toml`, demo blog posts (getting
  started, diagrams, mindmap, Gantt), projects, links, and about content.
- **`go.mod`** — Hugo Modules support (`github.com/hnsstrk/splitflap`).

### Changed (hnsstrk.de → standalone theme)

- Extracted from the `hnsstrk.de` monorepo with full Git history via
  `git filter-repo`.
- All site-specific values replaced by theme params (`params.board.messages`,
  `params.avatar`, `params.author`, `params.ogLocale`, `params.contentLicense`,
  `params.ogImage`).
- OG default images removed from theme (personal content); users provide their
  own via `params.ogImage`.

### Improved (2026-06-12 polish round)

- **Reduced-motion support** — split-flap animation and CSS transitions respect
  `prefers-reduced-motion: reduce`.
- **Ayu token integration** — color tokens unified across CSS, Mermaid config,
  and theme switcher; no hard-coded hex values outside the token layer.
- **Accessibility and contrast** — foreground/background pairs across all three
  themes verified against WCAG AA; focus indicators added.
- **Pagination** — blog list pages use Hugo's standard `pagination.pagerSize`;
  `[pagination]` section added to `exampleSite/hugo.toml` (commented example).
- **`featured_image` rendering** — images inside page bundles are now picked up
  and rendered correctly on blog list cards and single pages.
- **Mastodon param** — `params.social.mastodon` now accepts both a bare handle
  (`@user`) and a full URL (`https://fosstodon.org/@user`).
- **`defaultTheme` param** — first-visit theme configurable in `hugo.toml`
  (`"light"` | `"mirage"` | `"dark"`).

[0.1.0]: https://github.com/hnsstrk/splitflap/releases/tag/v0.1.0
