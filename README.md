# MCClauneck Website

* **Platform:** [github.com](https://github.com)
* **Organization:** [MCClauneck](https://github.com/MCClauneck)
* **Repository:** [mcclauneck.github.io](https://github.com/MCClauneck/mcclauneck.github.io)

The website repository for the **MCClauneck** organization. It hosts the public
site for the **MCEconomy** ecosystem — the MCEconomy core plus the MCMarket and
MCSlayerRewards plugins — and a versioned change log for each project. The site
is served by **GitHub Pages** from the [`docs/`](docs/) folder.

## What's inside

* [`docs/`](docs/) — the published site: a home page, one documentation page per
  project, and a permalinked change log for every release.
* Vendored copy of the shared MCEngine "Silver Glass" theme (CSS, the runtime
  header/footer loader, and shared partials), so the site has no runtime
  dependency on any other repository.

## Documentation

* [`INDEX.md`](INDEX.md) — the repository structure index; read it first.
* [`DESIGN.md`](DESIGN.md) — the design system: theme tokens, components, and the
  rules for changing the site.
* [`AGENTS.md`](AGENTS.md) — pointer to the portable [`.agents/`](.agents/)
  instruction set (rules, git workflow, and site architecture).

## Local preview

The header and footer are fetched at runtime, so preview over HTTP rather than
opening files directly:

```bash
python3 -m http.server 8000 --directory docs
# then open http://localhost:8000/
```
