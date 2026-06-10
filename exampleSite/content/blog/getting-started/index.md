---
title: "Getting Started with splitflap"
date: 2024-03-15
draft: false
description: "A walkthrough of the theme's main features: split-flap board, color themes, shortcodes, and content sections."
tags: ["Hugo", "Theme", "Setup"]
# featured_image: "cover.png"
# featured_layout: "left"   # left | right | top | bottom
# toc: true
---

Welcome to **splitflap** — a Hugo theme centered on a split-flap display landing page, the Ayu color system, and the Monaspace typeface family.

<!--more-->

This post walks through the key moving parts so you can get your own site up and running quickly.

{{< tldr >}}
Copy `exampleSite/hugo.toml` to your project root, adjust `baseURL` and `params`, add content, and run `hugo server`.
{{< /tldr >}}

## The split-flap board

The landing page renders an animated split-flap display. Messages are configured in `hugo.toml` under `params.board.messages`:

```toml
[params.board]
  messages = [
    ['', '', 'HELLO WORLD', '', 'MY SITE', '', ''],
    ['', '', 'WELCOME', '', '', '', '']
  ]
```

Each message is an array of up to **7 lines**. Each line holds at most **20 characters**. Use only: `A-Z 0-9 . , - ! ? ' / :` and space — all uppercase.

{{< callout type="tip" title="Empty lines for centering" >}}
Pad messages with empty strings at the top and bottom to vertically center the text on the board.
{{< /callout >}}

## Color themes

Three themes are available: **Light**, **Mirage**, and **Dark**. The switcher in the header lets visitors change themes at any time; the choice is persisted in `localStorage`.

Set the default theme for first-time visitors in `hugo.toml`:

```toml
[params]
  defaultTheme = "light"   # light | mirage | dark
```

All colors derive from the [Ayu](https://github.com/ayu-theme) color system, exposed as CSS custom properties.

## Navigation icons

Each main menu entry supports a Nerd Font icon via `params.icon`:

```toml
[[menus.main]]
  name = "Blog"
  url  = "/blog/"
  params = { icon = "f02d" }   # Nerd Font codepoint (hex, no 0x prefix)
```

The theme ships with the Monaspace Neon Nerd Font variant, so all standard Nerd Font glyphs are available without additional font files.

## Shortcodes

Two shortcodes are bundled with the theme.

### callout

```
{{</* callout type="info" title="Optional heading" */>}}
Content goes here. Markdown is supported.
{{</* /callout */>}}
```

Valid `type` values: `info` (default), `warning`, `tip`, `note`.

{{< callout type="note" title="Strict mode" >}}
Mermaid diagrams run in `securityLevel: strict`. Do not use raw HTML or angle brackets inside node labels.
{{< /callout >}}

### tldr

```
{{</* tldr */>}}
A short summary at the top of long posts.
{{</* /tldr */>}}
```

## Blog frontmatter reference

| Field | Type | Required | Notes |
|---|---|---|---|
| `title` | string | yes | |
| `date` | date | yes | ISO 8601 |
| `draft` | bool | yes | |
| `description` | string | yes | Used in meta and list cards |
| `tags` | list | yes | |
| `featured_image` | string | no | Filename inside the page bundle |
| `featured_layout` | string | no | `left` / `right` / `top` / `bottom` |
| `toc` | bool | no | Force table of contents |

## Next steps

- Add your own posts in `content/blog/`
- Add projects in `content/projects/`
- Edit `data/links.yaml` for the Links page
- Replace `static/images/avatar.png` with your own 160×160 image
