# Repository Index

This file is the entry point for any agent working in this repository. Read it
first, then [`AGENTS.md`](AGENTS.md) and [`README.md`](README.md).

`mcclauneck.github.io` is the MCClauneck project website, served by GitHub Pages
from `docs/`. It uses the shared MCEngine theme (white/silver/modern) imported
from `https://mcengine.github.io`. Keep this index accurate whenever files or
directories are added, removed, or restructured.

## Root Files

| Path | Purpose |
|---|---|
| AGENTS.md | Agent instruction set (workflow, branching, commits, content rules). |
| README.md | Repository overview. |
| INDEX.md | This file. |

## Site Content (`docs/`, served by GitHub Pages)

No site content exists yet. When a site is added, place all pages under `docs/`
(with `docs/index.html` as the homepage) and import the shared MCEngine theme
from `https://mcengine.github.io` — see **Website repository structure** in
[`AGENTS.md`](AGENTS.md).

## Shared Theme Assets

The pages carry no local stylesheets or scripts. They import the shared MCEngine
theme hosted by `MCEngine/mcengine.github.io` — the single source of truth for
the design system (`DESIGN.md` lives there, not here):

- `https://mcengine.github.io/css/main.css`, `.../css/shared/layout.css`,
  `.../css/shared/components.css` — the modular theme, or
- `https://mcengine.github.io/styles/main/style.css` plus
  `https://mcengine.github.io/scripts/main/script.js` — the single-file theme
  with page transitions.
