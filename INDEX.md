# Repository Index

This file is the entry point for any agent working in this repository. Read it
first, then [`AGENTS.md`](AGENTS.md) and [`README.md`](README.md).

`mcclauneck.github.io` is the MCClauneck project website, served by GitHub Pages
from `docs/`. It uses the shared MCEngine theme (white/silver/modern), which is
vendored locally when a site is added. Keep this index accurate whenever files or
directories are added, removed, or restructured.

## Root Files

| Path | Purpose |
|---|---|
| AGENTS.md | Universal pointer to the portable `.agents/` instruction set. |
| .agents/ | Portable agent instruction set (rules, git workflow, architecture). See [`.agents/INDEX.md`](.agents/INDEX.md). |
| DESIGN.md | Design system: theme tokens, components, motion, and rules for changing the site (a copy of the shared MCEngine "Silver Glass" system). |
| README.md | Repository overview. |
| INDEX.md | This file. |

## Site Content (`docs/`, served by GitHub Pages)

No site content exists yet. When a site is added, place all pages under `docs/`
(with `docs/index.html` as the homepage) and vendor a local copy of the shared
MCEngine theme under `docs/` — see **Website repository structure** in
[`AGENTS.md`](AGENTS.md).

## Vendored Theme

Pages carry their own local copy of the shared MCEngine theme — no runtime
dependency on another repository. The design system is documented in this
repository's `DESIGN.md`. When a site is added, vendor one of:

- the modular theme (`docs/css/main.css`, `docs/css/shared/layout.css`,
  `docs/css/shared/components.css`), or
- the single-file theme (`docs/styles/main/style.css` plus
  `docs/scripts/main/script.js`) with page transitions.
