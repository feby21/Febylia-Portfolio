/* Febylia Eugene — portfolio scripts.
   Small on purpose: theme toggle, phone menu, project grid + ticker
   (both built from data/projects.js) and the contact form. */

(function () {
  "use strict";

  /* ---------- Theme toggle (remembers the visitor's choice) ---------- */
  var root = document.documentElement;
  try {
    var saved = localStorage.getItem("theme");
    if (saved === "light" || saved === "dark") root.setAttribute("data-theme", saved);
  } catch (e) { /* private mode: follow the system setting */ }

  var themeBtn = document.querySelector("[data-theme-toggle]");
  if (themeBtn) {
    themeBtn.addEventListener("click", function () {
      var current = root.getAttribute("data-theme") ||
        (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
      var next = current === "dark" ? "light" : "dark";
      root.setAttribute("data-theme", next);
      try { localStorage.setItem("theme", next); } catch (e) {}
    });
  }

  /* ---------- Phone menu ---------- */
  var menuBtn = document.querySelector("[data-menu-toggle]");
  var links = document.getElementById("nav-links");
  if (menuBtn && links) {
    menuBtn.addEventListener("click", function () {
      var open = links.classList.toggle("is-open");
      menuBtn.setAttribute("aria-expanded", String(open));
    });
    links.addEventListener("click", function (e) {
      if (e.target.closest("a")) {
        links.classList.remove("is-open");
        menuBtn.setAttribute("aria-expanded", "false");
      }
    });
  }

  /* ---------- Helpers ---------- */
  function el(tag, cls, text) {
    var node = document.createElement(tag);
    if (cls) node.className = cls;
    if (text != null) node.textContent = text;
    return node;
  }

  /* ---------- Project grid ---------- */
  function buildVisual(p) {
    var box = el("div", "card__visual");
    var v = p.visual || { type: "placeholder", label: p.status.label };

    if (v.type === "phones") {
      var phones = el("div", "phones");
      v.images.forEach(function (img) {
        var frame = el("div", "phone");
        var image = el("img");
        image.src = img.src;
        image.alt = img.alt;
        image.loading = "lazy";
        image.width = 390;
        image.height = 844;
        frame.appendChild(image);
        phones.appendChild(frame);
      });
      box.appendChild(phones);
    } else if (v.type === "flow") {
      var flow = el("div", "flow");
      flow.setAttribute("role", "img");
      flow.setAttribute("aria-label", "Flow diagram: " + v.nodes.join(" to "));
      v.nodes.forEach(function (name, i) {
        if (i > 0) flow.appendChild(el("span", "flow__arrow", "→"));
        flow.appendChild(el("span", "flow__node" + (i === v.main ? " flow__node--main" : ""), name));
      });
      box.appendChild(flow);
    } else if (v.type === "stat") {
      var stat = el("div", "bigstat");
      stat.appendChild(el("div", "bigstat__num", v.number));
      stat.appendChild(el("div", "bigstat__cap", v.caption));
      box.appendChild(stat);
    } else {
      box.appendChild(el("span", "card__placeholder", v.label));
    }
    return box;
  }

  function buildCard(p) {
    var card = el("article", "card" +
      (p.size === "featured" ? " card--featured" : "") +
      (p.reserved ? " card--reserved" : ""));

    card.appendChild(buildVisual(p));

    var body = el("div", "card__body");
    var meta = el("div", "card__meta");
    meta.appendChild(el("span", "pill pill--" + p.status.kind, p.status.label));
    meta.appendChild(el("span", "card__cat", p.category));
    body.appendChild(meta);
    body.appendChild(el("h3", null, p.title));
    if (p.oneLiner) body.appendChild(el("p", "card__one", p.oneLiner));
    if (p.result) body.appendChild(el("p", "card__result", p.result));
    if (p.teaser) body.appendChild(el("p", "card__teaser", p.teaser));

    if (p.chips && p.chips.length) {
      var chips = el("ul", "chips");
      chips.setAttribute("aria-label", "Built with");
      p.chips.forEach(function (c) { chips.appendChild(el("li", null, c)); });
      body.appendChild(chips);
    }

    // Reserved slots get no link until their page exists
    if (p.href && !p.reserved) {
      // Same look as the footer links: bold text with a hand-drawn squiggle
      // that draws itself underneath on hover.
      var link = el("a", "card__link");
      var label = el("span", "squiggle-link", "Read case study →");
      var NS = "http://www.w3.org/2000/svg";
      var svg = document.createElementNS(NS, "svg");
      svg.setAttribute("class", "squiggle");
      svg.setAttribute("viewBox", "0 0 100 8");
      svg.setAttribute("preserveAspectRatio", "none");
      svg.setAttribute("aria-hidden", "true");
      var path = document.createElementNS(NS, "path");
      path.setAttribute("pathLength", "1");
      path.setAttribute("d", "M1 5 C10 1 16 7 25 4 S40 1 50 4 S66 7 75 4 S90 1 99 4");
      svg.appendChild(path);
      label.appendChild(svg);
      link.appendChild(label);
      link.href = p.href;
      link.setAttribute("aria-label", "Read the " + p.title + " case study");
      body.appendChild(link);
    }

    card.appendChild(body);
    return card;
  }

  var grid = document.getElementById("project-grid");
  if (grid && window.PROJECTS) {
    grid.textContent = "";
    window.PROJECTS.forEach(function (p) { grid.appendChild(buildCard(p)); });
  }

  /* ---------- Ticker ---------- */
  var track = document.getElementById("ticker-track");
  if (track && window.PROJECTS) {
    var symbols = { up: "▲", down: "▼", flat: "●" };
    var words = { up: "up", down: "down", flat: "pending" };

    var makeGroup = function (hidden) {
      var group = el("div", "ticker__group");
      if (hidden) group.setAttribute("aria-hidden", "true");
      window.PROJECTS.forEach(function (p) {
        if (!p.ticker) return;
        var item = el("span", "ticker__item");
        item.appendChild(el("span", "ticker__sym", p.ticker.symbol));
        var dir = el("span", "ticker__dir ticker__dir--" + p.ticker.dir, symbols[p.ticker.dir]);
        dir.setAttribute("aria-label", words[p.ticker.dir]);
        item.appendChild(dir);
        item.appendChild(el("span", "ticker__txt", p.ticker.text));
        group.appendChild(item);
      });
      return group;
    };

    track.textContent = "";
    // Enough copies to fill wide screens; the second half is a hidden duplicate
    // so the loop is seamless.
    for (var i = 0; i < 4; i++) track.appendChild(makeGroup(i > 0));
  }

  /* ---------- Contact form (Formspree) ---------- */
  var form = document.getElementById("contact-form");
  if (form) {
    var status = document.getElementById("form-status");
    var say = function (msg, state) {
      status.textContent = msg;
      status.setAttribute("data-state", state || "");
    };

    form.addEventListener("submit", function (e) {
      e.preventDefault();

      // Until a real Formspree ID is added, don't pretend the message was sent.
      if (form.action.indexOf("YOUR_FORM_ID") !== -1) {
        say("This form isn't connected yet. Please reach me on LinkedIn for now.", "error");
        return;
      }

      var button = form.querySelector("button[type=submit]");
      button.disabled = true;
      say("Sending…");

      fetch(form.action, {
        method: "POST",
        body: new FormData(form),
        headers: { Accept: "application/json" }
      })
        .then(function (res) {
          if (!res.ok) throw new Error("Formspree returned " + res.status);
          form.reset();
          say("Thanks, your message has been sent. I'll reply soon.");
        })
        .catch(function () {
          say("Sorry, that didn't send. Please try again or message me on LinkedIn.", "error");
        })
        .then(function () { button.disabled = false; });
    });
  }
})();
