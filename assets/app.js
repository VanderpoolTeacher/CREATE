/* Rebuilding the Foundations for Student Success — interactive hub
   Vanilla JS. Renders from window.CREATE_CONTENT. */
(function () {
  "use strict";
  var C = window.CREATE_CONTENT;
  if (!C) { console.error("Content data not found."); return; }

  var $ = function (sel, ctx) { return (ctx || document).querySelector(sel); };
  function el(tag, cls, html) {
    var n = document.createElement(tag);
    if (cls) n.className = cls;
    if (html != null) n.innerHTML = html;
    return n;
  }
  function esc(s) {
    return String(s).replace(/[&<>"]/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c];
    });
  }
  var chevron =
    '<svg class="card__chevron" width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M6 9l6 6 6-6" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/></svg>';

  /* ---------- expand/collapse helper (animated, accessible) ---------- */
  function bindDisclosure(btn, panel) {
    btn.addEventListener("click", function () {
      var open = btn.getAttribute("aria-expanded") === "true";
      btn.setAttribute("aria-expanded", String(!open));
      panel.style.maxHeight = open ? "0px" : panel.scrollHeight + "px";
    });
    // keep height correct on resize when open
    window.addEventListener("resize", function () {
      if (btn.getAttribute("aria-expanded") === "true") {
        panel.style.maxHeight = panel.scrollHeight + "px";
      }
    });
  }

  /* ================= FRAMEWORK ================= */
  function renderFramework() {
    var grid = $("#frameworkGrid");
    C.clusters.forEach(function (c, i) {
      var card = el("article", "card");
      var panelId = "fw-panel-" + c.id;
      card.innerHTML =
        '<h3 style="margin:0">' +
        '<button class="card__btn" type="button" aria-expanded="false" aria-controls="' + panelId + '">' +
          '<span class="card__top">' +
            '<span class="card__num" aria-hidden="true">' + (c.icon || c.num) + "</span>" +
            '<span class="card__heading"><span class="card__name">' + esc(c.name) + "</span></span>" +
            chevron +
          "</span>" +
          '<span class="card__def">' + esc(c.definition) + "</span>" +
        "</button></h3>" +
        '<div class="card__panel" id="' + panelId + '" role="region">' +
          '<div class="card__panel-inner">' +
            '<p class="card__looks-label">Looks like in a student</p>' +
            '<p class="card__looks">' + esc(c.looksLike) + "</p>" +
          "</div></div>";
      grid.appendChild(card);
      bindDisclosure($(".card__btn", card), $(".card__panel", card));
    });
  }

  /* ================= RUBRICS ================= */
  var rubricState = { active: C.clusters[0].id, target: false };

  function renderRubricTabs() {
    var tabs = $("#rubricTabs");
    C.clusters.forEach(function (c) {
      var b = el("button", "rubric__tab", esc(c.name));
      b.type = "button";
      b.setAttribute("role", "tab");
      b.id = "rtab-" + c.id;
      b.dataset.cluster = c.id;
      b.setAttribute("aria-selected", String(c.id === rubricState.active));
      b.setAttribute("tabindex", c.id === rubricState.active ? "0" : "-1");
      b.addEventListener("click", function () { selectRubric(c.id); });
      b.addEventListener("keydown", onTabKey);
      tabs.appendChild(b);
    });
  }

  function onTabKey(e) {
    var keys = ["ArrowRight", "ArrowLeft", "Home", "End"];
    if (keys.indexOf(e.key) === -1) return;
    e.preventDefault();
    var list = Array.prototype.slice.call(document.querySelectorAll(".rubric__tab"));
    var idx = list.indexOf(e.currentTarget);
    var next = idx;
    if (e.key === "ArrowRight") next = (idx + 1) % list.length;
    else if (e.key === "ArrowLeft") next = (idx - 1 + list.length) % list.length;
    else if (e.key === "Home") next = 0;
    else if (e.key === "End") next = list.length - 1;
    selectRubric(list[next].dataset.cluster);
    list[next].focus();
  }

  function selectRubric(id) {
    rubricState.active = id;
    document.querySelectorAll(".rubric__tab").forEach(function (b) {
      var on = b.dataset.cluster === id;
      b.setAttribute("aria-selected", String(on));
      b.setAttribute("tabindex", on ? "0" : "-1");
    });
    updateRubricDownload(id);
    renderRubricTable();
  }

  function updateRubricDownload(id) {
    var dl = document.getElementById("rubricDownload");
    if (!dl) return;
    var c = C.clusters.filter(function (x) { return x.id === id; })[0];
    if (!c) return;
    var n = ("0" + c.num).slice(-2);
    dl.setAttribute("href", "toolkit/rubrics-pdf/" + n + "-" + c.id + ".pdf");
    dl.innerHTML = "<span aria-hidden='true'>↓</span> Download the " + esc(c.name) + " rubric (PDF)";
  }

  function renderRubricTable() {
    var cluster = C.clusters.filter(function (c) { return c.id === rubricState.active; })[0];
    var rows = C.rubrics[rubricState.active];
    var levels = C.rubricLevels;
    var targetIdx = levels.indexOf("Proficient");

    var thead = "<thead><tr><th scope='col' class='col-can'>The student can…</th>";
    levels.forEach(function (lvl, i) {
      thead += "<th scope='col'" + (i === targetIdx ? " class='is-target'" : "") + ">" + esc(lvl) + "</th>";
    });
    thead += "</tr></thead>";

    var tbody = "<tbody>";
    rows.forEach(function (row) {
      tbody += "<tr><th scope='row' class='col-can'>" + esc(row.can) + "</th>";
      row.levels.forEach(function (txt, i) {
        tbody += "<td class='level" + (i === targetIdx ? " is-target" : "") +
          "' data-level='" + esc(levels[i]) + "' tabindex='0' role='button' aria-pressed='false'>" +
          esc(txt) + "</td>";
      });
      tbody += "</tr>";
    });
    tbody += "</tbody>";

    var table = $("#rubricTable");
    table.innerHTML =
      "<caption class='visually-hidden'>Rubric for " + esc(cluster.name) + "</caption>" + thead + tbody;

    // cell selection (one pick per row)
    table.querySelectorAll("td.level").forEach(function (cell) {
      function toggle() {
        var picked = cell.classList.contains("is-picked");
        var rowCells = cell.parentNode.querySelectorAll("td.level");
        rowCells.forEach(function (c2) { c2.classList.remove("is-picked"); c2.setAttribute("aria-pressed", "false"); });
        if (!picked) { cell.classList.add("is-picked"); cell.setAttribute("aria-pressed", "true"); }
      }
      cell.addEventListener("click", toggle);
      cell.addEventListener("keydown", function (e) {
        if (e.key === "Enter" || e.key === " ") { e.preventDefault(); toggle(); }
      });
    });
  }

  function bindTargetToggle() {
    var box = $("#targetToggle");
    box.addEventListener("change", function () {
      $(".rubric").classList.toggle("show-target", box.checked);
    });
  }

  /* ================= WEAVE-IN ================= */
  function clusterName(id) {
    var c = C.clusters.filter(function (x) { return x.id === id; })[0];
    return c ? c.name : id;
  }

  function renderDecompFramework() {
    $("#decompIntro").textContent = C.decompositionFramework.intro;
    var list = $("#decompList");
    C.decompositionFramework.questions.forEach(function (item) {
      var li = el("li");
      li.innerHTML = "<span class='callout__q'>" + esc(item.q) + "</span>" +
        "<span class='callout__a'>" + esc(item.a) + "</span>";
      list.appendChild(li);
    });
  }

  var moveFilter = "all";
  function renderChips() {
    var wrap = $("#moveChips");
    var opts = [{ id: "all", name: "All" }].concat(
      C.clusters.map(function (c) { return { id: c.id, name: c.name }; })
    );
    opts.forEach(function (o) {
      var chip = el("button", "chip", esc(o.name));
      chip.type = "button";
      chip.dataset.filter = o.id;
      chip.setAttribute("aria-pressed", String(o.id === moveFilter));
      chip.addEventListener("click", function () {
        moveFilter = o.id;
        document.querySelectorAll(".chip").forEach(function (ch) {
          ch.setAttribute("aria-pressed", String(ch.dataset.filter === moveFilter));
        });
        renderMoves();
      });
      wrap.appendChild(chip);
    });
  }

  function renderMoves() {
    var grid = $("#movesGrid");
    grid.innerHTML = "";
    var list = C.moves.filter(function (m) { return moveFilter === "all" || m.cluster === moveFilter; });
    if (!list.length) {
      grid.appendChild(el("p", "explorer__empty", "No moves for that filter."));
      return;
    }
    list.forEach(function (m) {
      var card = el("article", "move");
      card.innerHTML =
        "<span class='move__cluster'>" + esc(clusterName(m.cluster)) + "</span>" +
        "<h4 class='move__title'>" + esc(m.title) + "</h4>" +
        "<p class='move__tweak'>" + esc(m.tweak) + "</p>" +
        "<div class='move__meta'>" +
          "<p class='move__row'><b>Fits onto</b>" + esc(m.fits) + "</p>" +
          "<p class='move__row'><b>Assess with</b>" + esc(m.assess) + "</p>" +
        "</div>";
      grid.appendChild(card);
    });
  }

  /* ================= UNITS ================= */
  function renderUnits() {
    var grid = $("#unitsGrid");
    C.units.forEach(function (u, i) {
      var card = el("article", "unit");
      var panelId = "unit-panel-" + i;
      var builds = u.builds.map(function (b) { return "<span>" + esc(b) + "</span>"; }).join("");
      var unitLinks = [];
      if (u.plan) unitLinks.push("<a href='" + esc(u.plan) + "' target='_blank' rel='noopener'>Full lesson plan &rarr;</a>");
      if (u.handout) unitLinks.push("<a href='" + esc(u.handout) + "' target='_blank' rel='noopener'>Student handout (PDF)</a>");
      var planLink = unitLinks.length
        ? "<p class='unit__plan'>" + unitLinks.join("<span class='unit__plan-sep'>·</span>") + "</p>"
        : "";
      card.innerHTML =
        "<div class='unit__body'>" +
          "<h3 class='unit__name'>" + esc(u.name) + "</h3>" +
          "<div class='unit__builds'><span style='background:transparent;color:var(--slate);padding-left:0'>Builds:</span>" + builds + "</div>" +
          "<p class='unit__obj'>" + esc(u.objective) + "</p>" +
        "</div>" +
        "<button class='unit__btn' type='button' aria-expanded='false' aria-controls='" + panelId + "'>" +
          "<span>Core activity &amp; releasing support</span>" + chevron +
        "</button>" +
        "<div class='unit__panel' id='" + panelId + "'><div class='unit__panel-inner'>" +
          "<div class='unit__block'><h4>Core activity</h4><p>" + esc(u.activity) + "</p></div>" +
          "<div class='unit__block'><h4>Releasing support</h4><p>" + esc(u.releasing) + "</p></div>" +
          planLink +
        "</div></div>";
      grid.appendChild(card);
      bindDisclosure($(".unit__btn", card), $(".unit__panel", card));
    });
  }

  /* ================= NAV ================= */
  function setupNav() {
    var toggle = $("#navToggle");
    var links = $("#navLinks");
    toggle.addEventListener("click", function () {
      var open = toggle.getAttribute("aria-expanded") === "true";
      toggle.setAttribute("aria-expanded", String(!open));
      links.classList.toggle("is-open", !open);
    });
    // close mobile menu on link tap
    links.querySelectorAll("a").forEach(function (a) {
      a.addEventListener("click", function () {
        toggle.setAttribute("aria-expanded", "false");
        links.classList.remove("is-open");
      });
    });

    // active-section highlight via IntersectionObserver
    var navLinks = Array.prototype.slice.call(document.querySelectorAll(".nav__links a[data-nav]"));
    var map = {};
    navLinks.forEach(function (a) { map[a.getAttribute("href").slice(1)] = a; });
    var sections = ["framework", "rubrics", "weave-in", "units"]
      .map(function (id) { return document.getElementById(id); })
      .filter(Boolean);

    if ("IntersectionObserver" in window) {
      var visible = {};
      var obs = new IntersectionObserver(function (entries) {
        entries.forEach(function (en) { visible[en.target.id] = en.isIntersecting ? en.intersectionRatio : 0; });
        var best = null, bestR = 0;
        Object.keys(visible).forEach(function (id) { if (visible[id] > bestR) { bestR = visible[id]; best = id; } });
        navLinks.forEach(function (a) { a.classList.remove("is-active"); });
        if (best && map[best]) map[best].classList.add("is-active");
      }, { rootMargin: "-45% 0px -50% 0px", threshold: [0, .25, .5, 1] });
      sections.forEach(function (s) { obs.observe(s); });
    }
  }

  /* ================= INIT ================= */
  function init() {
    $("#rubricHowTo").textContent = C.rubricHowTo;
    $("#constraintLine").textContent = C.constraintLine;
    $("#unitsIntro").textContent = C.unitsIntro;

    renderFramework();
    renderRubricTabs();
    updateRubricDownload(rubricState.active);
    renderRubricTable();
    bindTargetToggle();
    renderDecompFramework();
    renderChips();
    renderMoves();
    renderUnits();
    setupNav();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
