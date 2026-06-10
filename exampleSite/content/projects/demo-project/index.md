---
title: "demo-project"
description: "A demo project entry showing all supported frontmatter fields for the projects index."
date: 2024-02-01
draft: false
tags: ["Hugo", "Go", "Demo"]
technologies: ["Hugo", "Go", "TypeScript"]
category: "Web Tool"
weight: 1
github: "https://github.com/example/demo-project"
---

This is a placeholder project page. The projects list at `/projects/` reads the following frontmatter fields:

| Field | Purpose |
|---|---|
| `title` | Project name in the index |
| `description` | Short one-liner below the title |
| `technologies` | Stack badges with Ayu color coding |
| `category` | Metadata label in the index row |
| `weight` | Sort order (lower = first) |
| `github` | Repository link; also supports GitLab, Gitea, Bitbucket URLs |
| `date` | Used as secondary sort key |

## Technology colors

Stack badges are colored by semantic similarity to Ayu syntax tokens. Known technologies are mapped in `layouts/projects/list.html`. Unknown entries fall back to `--text-secondary`.

## Repository detection

The `github` field accepts any Git hosting URL. The theme detects the platform automatically and renders the matching Nerd Font icon:

- `github.com` — GitHub icon (`f09b`)
- `gitlab.com` — GitLab icon (`f296`)
- `gitea.*` — Gitea icon (`e65a`)
- `bitbucket.org` — Bitbucket icon (`f171`)

If `github` is omitted, a private lock icon is shown instead.
