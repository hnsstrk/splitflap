# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/).

## [0.4.2] - 2026-06-16

### Fixed

- **Article pages now read as a centered manuscript column** — the meta
  toolrow (the horizontal divider), the title and the body text previously sat
  at different widths with the body left-aligned, so the divider ran much wider
  than the text and the whole page leaned left. Article pages now bind every
  element to a centered reading zone: text-bearing elements (eyebrow, lede,
  toolrow/divider, TOC, tags, related) share the body measure, while display
  elements (title, featured image, figures, tables, diagrams) extend
  symmetrically to the wider display measure. The divider now matches the text
  width and the column is centered. Scoped via a new `.type-article` class on
  the single/about layouts, so the full-width list grids on index pages are
  unaffected.

### Changed

- The lede on article pages uses the body measure, aligning its left edge with
  the text column.
- List markers indent via `padding-left` so list blocks center cleanly within
  the reading column.

## [0.4.1] - 2026-06-16

### Fixed

- **Body text and embedded blocks now share one reading measure** — previously
  only paragraphs and headings were capped while code blocks, callouts, TL;DR
  boxes, tables and figures ran to the full container width, leaving the text
  column visibly narrower than everything around it. A central `--measure`
  token now governs body text and text-bearing boxes (code, callout, TL;DR,
  blockquote) so they share the same left and right edge; purely visual blocks
  (images, tables, diagrams) may extend to `--measure-wide`.
- **Figure captions sit directly under their image** — the image's bottom
  margin inside a `<figure>` was pushing the caption far below; the caption now
  carries its own small top margin instead.
- **Text contrast meets WCAG AA** — `--text-secondary` and `--text-muted` were
  below 4.5:1 on the page background in all three themes and are raised to AA
  across Light, Mirage and Dark.
- Blockquotes align to the body measure (the horizontal margin that made them
  narrower than the surrounding text is removed); the first and last content
  element no longer leak outer margins into the surrounding layout.

### Added

- **Table render hook** wrapping tables in a horizontally scrollable container
  so wide tables scroll within the reading measure instead of overflowing the
  viewport on small screens.
- Reading-measure tokens (`--measure`, `--measure-wide`, `--measure-short`) as
  a single source for column widths; the four previously hard-coded measures
  (54/58/72ch) are consolidated onto them.

### Changed

- Heading anchor links become visible on keyboard focus, not only on hover.
- Long link URLs and handles wrap instead of overflowing the links grid.

## [0.4.0] - 2026-06-15

### Changed

- **Links page reworked into a platform-led list** — the address-block
  category header now carries the platform/category name directly next to the
  numeral (dropping the generic "category" label and the subtitle line), and
  each link row leads with the platform icon and the entry title, with the
  handle (or host as fallback) moving underneath. The previous handle-first
  layout (`@user@instance` rail, host-dots-title line) is replaced.
- **List grid and link categories unified** — the project index and the links
  address book share one grid rhythm and one category-heading treatment.

### Removed

- The `category` i18n label usage in the links template (the platform name now
  heads each block).

## [0.3.1] - 2026-06-12

### Changed

- **Title typography unified the other way around** — 0.3.0 made all titles
  bold and wide (600/125%); the intended look was the slim, narrow style of
  the about page. The graduated slim heading scale (h1 250/100% … h6 400/102%)
  is restored for markdown content, and the editorial titles now follow it:
  project titles at the h2 step (280/100%), blog list titles, link handles
  and the related-posts heading at the h3 step (320/102%). Mega-titles,
  category heads and the solid numerals stay bold as the display tier.

## [0.3.0] - 2026-06-12

### Changed

- **One numeral system, modeled on the blog date** — the blog logbook's
  date block (massive solid number, small-caps label below) is now the
  shared pattern: project rows show `01 / CATEGORY`, links categories show
  `01 / CATEGORY` above the category name. The outline-numeral experiment
  from 0.2.0 is reverted for row numerals (year dividers keep their
  outline style).
- **Links page back to the two-column address book** — the full-width
  category dividers from 0.2.0 are reverted; the narrow category column
  returns, now headed by the unified numeral block.
- **Unified title typography** — one recipe (weight 600, stretch 125%,
  tracking -0.035em) for markdown content headings (h2–h6) and editorial
  titles. Content headings were thin (weight 280–440) and narrow before;
  project titles drop from 700 to 600. Page-level h1 and the mega-titles
  remain intentionally distinct display styles.

### Fixed

- Long category labels (e.g. PRODUKTIVITÄT) breaking mid-word in the
  project index column.

## [0.2.0] - 2026-06-12

### Changed

- **Unified display family across list pages** — the project index numbers
  and the links category dividers now share the outline-numeral style of the
  blog year dividers (transparent fill, 1px text stroke, tabular numerals).
- **Links category headers rebuilt** — full-width divider (outline number,
  category name, italic subtitle) instead of a narrow side column that forced
  multi-line wrapping of long category names.
- **Section accent applied consistently** — hover backgrounds, title hovers,
  and tag hashes on blog, projects, links, and tag pages now use the page's
  `--type-accent` instead of hardcoded syntax colors.
- **Calmer hero rhythm** — uniform spacing below the toolrow on all list
  pages, no more double hairline above the project list, first year divider
  sits flush.

### Fixed

- Long link handles (e.g. `@user@instance.tld`) overflowing the viewport on
  small screens — handles now wrap and scale down on mobile.

### Removed

- Orphaned `category` i18n key (the links template no longer renders a
  category label).

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
  and `tldr` shortcodes. `featured_image` support in blog posts (rendered
  above the post, also used for OG meta).
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
