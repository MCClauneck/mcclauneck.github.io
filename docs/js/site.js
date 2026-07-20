/*
 * Runtime include system for the MCClauneck site.
 *
 * Each page sets two globals in <head> before this script runs:
 *   window.SITE_ROOT    — relative path back to docs/ (e.g. "", "../", "../../")
 *   window.PAGE_SECTION  — nav id for active-link highlighting
 *
 * The loader fetches the shared header/footer partials, swaps the {{ROOT}}
 * token for SITE_ROOT, wires the mobile menu and active link, injects a
 * favicon, and stamps the current year. Because it uses fetch(), always serve
 * the site over HTTP when testing (see AGENTS.md / DESIGN.md).
 */
(function () {
  "use strict";

  var ROOT = typeof window.SITE_ROOT === "string" ? window.SITE_ROOT : "";
  var SECTION = window.PAGE_SECTION || "";

  function injectFavicon() {
    if (document.querySelector('link[rel="icon"]')) return;
    var svg =
      '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">' +
      '<rect width="64" height="64" rx="14" fill="#eef1f6"/>' +
      '<text x="32" y="44" font-size="38" text-anchor="middle" font-family="sans-serif">⚙</text>' +
      "</svg>";
    var link = document.createElement("link");
    link.rel = "icon";
    link.href = "data:image/svg+xml," + encodeURIComponent(svg);
    document.head.appendChild(link);
  }

  function mount(id, html) {
    var el = document.getElementById(id);
    if (el) el.innerHTML = html.replace(/\{\{ROOT\}\}/g, ROOT);
    return el;
  }

  function wireHeader() {
    var toggle = document.querySelector(".nav__toggle");
    var links = document.querySelector(".nav__links");
    if (toggle && links) {
      toggle.addEventListener("click", function () {
        var open = links.classList.toggle("is-open");
        toggle.setAttribute("aria-expanded", open ? "true" : "false");
      });
    }
    if (SECTION) {
      var active = document.querySelector(
        '.nav__link[data-section="' + SECTION + '"]'
      );
      if (active) active.classList.add("is-active");
    }
  }

  function stampYear() {
    var y = String(new Date().getFullYear());
    document.querySelectorAll("[data-year]").forEach(function (n) {
      n.textContent = y;
    });
  }

  function load(name, id, after) {
    return fetch(ROOT + "partials/" + name + ".html")
      .then(function (r) {
        return r.ok ? r.text() : "";
      })
      .then(function (html) {
        if (html) {
          mount(id, html);
          if (after) after();
        }
      })
      .catch(function () {
        /* Partial failed to load (e.g. opened over file://); page body still renders. */
      });
  }

  function init() {
    injectFavicon();
    load("header", "site-header", wireHeader);
    load("footer", "site-footer", stampYear);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
