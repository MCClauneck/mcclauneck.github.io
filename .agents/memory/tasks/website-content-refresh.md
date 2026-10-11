# Task record — website content refresh

**Status:** in progress

## Request

The owner updated the plugins but not the website. Read the plugin code and update the
website content. The website must contain no code or code snippets, only explanation:
what each plugin is, how it works, and so on.

## Intake

* **Goal:** the website explains each plugin as it works today, so server owners and
  players can understand MCEconomy, MCMarket and MCSlayerRewards without reading code.
* **Objective:** every page under `docs/` describes the current plugins accurately
  (versions, repository links, features, behaviour, setup) and contains no code: no code
  or preformatted elements, config keys, file names, package names or command syntax.
* **Detail:** content only; no CSS, script, partial or structure change. The plugin
  repositories are read, never changed. Facts come from the plugin source on each default
  branch (MCEconomy 1.1.0, MCMarket 1.3.0, MCSlayerRewards 1.3.0); where a plugin wiki
  disagrees with the code, the code wins.
* **Assumptions:** commands are described in words instead of slash syntax; the change
  logs are cleaned as well as the main pages; the website carries no version number, so
  the release task waits for the owner to approve one.

## Tasks

| # | Title | Branch | Files / areas | PR |
|---|---|---|---|---|
| 1 | Task record | `chore/website-content-refresh-plan` | `.agents/memory/`, `.agents/INDEX.md`, `.agents/README.md` | |
| 2 | MCEconomy page | `docs/mceconomy-page` | `docs/mceconomy/index.html` | |
| 3 | MCMarket page | `docs/market-page` | `docs/market/index.html` | |
| 4 | MCSlayerRewards page | `docs/slayerrewards-page` | `docs/slayerrewards/index.html` | |
| 5 | Home page | `docs/home-page` | `docs/index.html` | |
| 6 | Change logs in prose | `docs/change-logs` | `docs/*/logs/**/index.html` | |
| 7 | Release | `release/{version}` | this record's close-out | |

Branches stack: task 1 from `master`, task k from task k-1.

## Decisions

* The owner asked for no questions while away and for choices to be posted with a
  recommendation and then followed. The plan, pull request and merge gates were therefore
  handled with a recommended choice instead of waiting; merging is left to the owner.
* Pull request 9, opened on a `claude/` branch before this plan existed, is superseded by
  this chain and closed.

## Progress

### Task 1 — chore/website-content-refresh-plan

Created this record and the `.agents/memory/` folder, and indexed both. Nothing else
changed. Tasks 2 to 6 reuse content already drafted and checked against the plugin source.

### Task 2 — docs/mceconomy-page

Rewrote the MCEconomy page from the plugin source: how per-character wallets work, the
seven default currencies and which can be traded, the balance menu, the rules a payment
must pass, storage options, setup, and the developer integration in prose. Version shown as
1.1.0. The module table and all code formatting are gone.

### Task 3 — docs/market-page

Rewrote the MCMarket page: buying and selling rules, the editor controls, commands and
permission in words, setup, and storage including the central server. Version shown as
1.3.0 and the repository link now points at market.

### Task 4 — docs/slayerrewards-page

Rewrote the MCSlayerRewards page: what happens when a mob dies, the editor controls, the
currency rules (a missing currency pays Coin, an unknown one skips the money, following
the code rather than the wiki), setup, and storage. Version shown as 1.3.0 and the
repository link now points at slayer-rewards.
