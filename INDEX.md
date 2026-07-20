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

The site documents the MCEconomy ecosystem — the MCEconomy core and the MCMarket
and MCSlayerRewards plugins — plus a versioned change log for each.

| Path | Purpose |
|---|---|
| `docs/index.html` | Home page with interactive block cards linking to each project. |
| `docs/mceconomy/index.html` | MCEconomy documentation page. |
| `docs/mceconomy/logs/index.html` | MCEconomy change log hub (mirrors the latest release). |
| `docs/mceconomy/logs/1/0/0/index.html` | Permalink for MCEconomy 1.0.0. |
| `docs/market/index.html` | MCMarket documentation page. |
| `docs/market/logs/index.html` | MCMarket change log hub. |
| `docs/market/logs/1/0/0/index.html` | Permalink for MCMarket 1.0.0. |
| `docs/slayerrewards/index.html` | MCSlayerRewards documentation page. |
| `docs/slayerrewards/logs/index.html` | MCSlayerRewards change log hub. |
| `docs/slayerrewards/logs/1/0/0/index.html` | Permalink for MCSlayerRewards 1.0.0. |

## Vendored Theme

Pages carry their own local copy of the shared MCEngine theme — no runtime
dependency on another repository. The modular "Silver Glass" theme, documented in
this repository's `DESIGN.md`, is vendored under `docs/`:

| Path | Purpose |
|---|---|
| `docs/css/main.css` | Root design tokens and base element styles. |
| `docs/css/shared/layout.css` | Header, nav, footer, and breadcrumbs. |
| `docs/css/shared/components.css` | Cards, panels, accordions, tables, badges, buttons, callouts. |
| `docs/css/home/home.css` | Home-page interactive block cards. |
| `docs/css/logs/logs.css` | Change-log layout and change tags. |
| `docs/js/site.js` | Runtime include loader for the shared header/footer. |
| `docs/partials/header.html` | Shared site header/navigation fragment. |
| `docs/partials/footer.html` | Shared site footer fragment. |
