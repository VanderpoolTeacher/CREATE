# CREATE — Rebuilding the Foundations for Student Success

**A presentation and take-home toolkit for K-12 educators on the durable skills students need after the last checklist.**

A college-instructor and workforce-development perspective on why students arrive underprepared — not in academic content, but in the self-directed, organizational, and communication skills that college and the workforce actually reward. The talk is a wake-up call; **the real deliverable is a low-lift toolkit** teachers can use without adding to an already-full curriculum.

## 🌐 The interactive site

**→ https://vanderpoolteacher.github.io/CREATE/**

A polished, interactive hub: the six skills as expandable cards, the competency rubrics as interactive tables, and a filterable weave-in-strategy explorer — plus the full talk as a browser-presentable slide deck (press **S** for speaker notes). Everything below is also readable as plain Markdown right here in the repo.

---

## Start here — pick your path

| If you want to… | Go to |
|---|---|
| **Use one idea with your students this week** | [`toolkit/weave-in-strategies.md`](toolkit/weave-in-strategies.md) — pick a single low-lift move |
| **Understand the whole argument fast** | [The six skills](#the-six-skill-clusters) below, then [`toolkit/durable-skills-framework.md`](toolkit/durable-skills-framework.md) (one page) |
| **Grade these skills on work you already assign** | [`toolkit/rubrics.md`](toolkit/rubrics.md) |
| **Give the talk yourself** | [`presentation/outline.md`](presentation/outline.md) + open [`talk.html`](talk.html) in a browser |
| **Run a full, dedicated unit** | [`curriculum/`](curriculum/README.md) — five turnkey lesson plans |
| **Just browse it all, nicely formatted** | the [interactive site](https://vanderpoolteacher.github.io/CREATE/) |

---

## What's in this repository

```
CREATE/
├── toolkit/            ← THE HEADLINE DELIVERABLE — framework, rubrics, weave-in moves
├── curriculum/         ← five turnkey lesson plans (optional, for teachers with room)
├── presentation/       ← the talk: slide-by-slide outline (speaker script is kept private)
├── index.html          ← the interactive hub (the live site)
├── talk.html           ← the talk as a reveal.js slide deck
├── assets/             ← styles + content + behavior for the hub
└── docs/superpowers/   ← the design spec and build plan behind this project
```

### 1. The Toolkit — `toolkit/` *(the headline deliverable)*

The take-home core. Designed to be printed, pinned to a wall, and used Monday morning.

- **[`durable-skills-framework.md`](toolkit/durable-skills-framework.md)** — the one-page reference. The six skill clusters, each defined in plain language with a "looks like in a student" example. **Read this first.** Everything else hangs off it.
- **[`rubrics.md`](toolkit/rubrics.md)** — six competency-based rubrics, one per skill, written as *"The student can…"* statements on a four-level ladder: **Not Yet → Approaching → Proficient → Advanced**. Lay them over an assignment you already give and score the *skill* alongside the content.
- **[`weave-in-strategies.md`](toolkit/weave-in-strategies.md)** — the practical heart. Small, low-lift tweaks to existing assignments (grade the clarifying questions; require a plan-before-you-start memo; the 90-second stand-and-explain; make "where it lives" part of the grade), plus a reusable **decomposition framework** students can apply to any ambiguous task.

### 2. The Curriculum — `curriculum/` *(optional, for teachers with room)*

Five **turnkey, pick-up-and-teach units** — one for each durable skill. Each is a complete lesson plan: timed session sequence, copy-ready student handout, teacher look-fors, the matching rubric rows, a gradual-release plan, differentiation notes, and common pitfalls. Every unit also ends with a **low-lift version** if you can't spare the full unit.

- **[`curriculum/README.md`](curriculum/README.md)** — the index and how-to-use (start here)
- **[The Ambiguous Brief](curriculum/units/the-ambiguous-brief.md)** — Working with Ambiguity · Decomposition
- **[Many Plates Spinning](curriculum/units/many-plates-spinning.md)** — Work & Time Organization
- **[Nobody Assigned This](curriculum/units/nobody-assigned-this.md)** — Initiative / Self-Starting
- **[Stand & Deliver](curriculum/units/stand-and-deliver.md)** — Communication & Presentation
- **[Where Does It Live?](curriculum/units/where-does-it-live.md)** — Digital & Systems Fluency
- **[`sample-units.md`](curriculum/sample-units.md)** — quick-glance summaries of all five, each linking to its full plan

> These units are **optional by design.** The weave-in strategies are the primary path; the units are for when you have room to carve out dedicated practice time.

### 3. The Talk — `presentation/`

- **[`outline.md`](presentation/outline.md)** — the slide-by-slide outline with speaker notes for all 28 slides, following the talk's arc from "the silence in the room" through the six cliffs to the toolkit hand-off. This is the public, shareable version.
- **`talk.html`** *(repo root)* — the same talk as a [reveal.js slide deck](talk.html). Open it in any browser, present full-screen, and press **`S`** for speaker view (notes, timer, next-slide preview).
- *Note:* the full word-for-word **speaker script** (with delivery cues and personal stories) is kept as a private working document and is intentionally **not** published in this repo.

### 4. The Interactive Hub — `index.html` + `assets/`

The source for the live site. A self-contained static page — no build step, no framework.

- **[`index.html`](index.html)** — the page structure
- **`assets/content.js`** — all the words (framework, rubrics, weave-in moves, units) in one editable data file
- **`assets/app.js`** — rendering and interactivity (expandable cards, filters, tables)
- **`assets/styles.css`** — the visual design

**To edit the site's content,** change `assets/content.js` — the page rebuilds itself from that data on load.

### 5. Project docs — `docs/superpowers/`

The thinking behind the project, if you want to see how it was scoped and built.

- **[design spec](docs/superpowers/specs/2026-05-31-the-game-that-ends-design.md)** — purpose, audience, the talk's arc, and the deliverables
- **[implementation plan](docs/superpowers/plans/2026-05-31-the-game-that-ends.md)** — the task-by-task build plan

---

## The six skill clusters

1. **Decomposition** — breaking an ambiguous, multistep project into ordered steps.
2. **Work & Time Organization** — managing multiple projects; protecting time; organizing files.
3. **Working with Ambiguity** — asking clarifying questions early; adapting to changing requirements.
4. **Initiative / Self-Starting** — getting going without being prodded.
5. **Communication & Presentation** — speaking about your own work.
6. **Digital & Systems Fluency** — how software works, where things live — increasingly urgent in the AI era.

## The core idea: "the school game"

Students have mastered a game of checking off boxes someone else defines. College and the workforce reward the opposite. We hand off students who are excellent at a game that *ends* the day they leave us — and AI has raised the stakes. This project is about teaching the game that *doesn't* end, by weaving these durable skills into the work teachers already assign. **Nothing new gets added. It gets woven in.**

---

## Tech notes

This is a **static site** — plain HTML, CSS, and vanilla JavaScript, no build step and no dependencies to install. It's served by **GitHub Pages** from the `main` branch root; the `.nojekyll` file tells Pages to serve the files as-is. To preview locally, open `index.html` directly in a browser, or run any static file server (e.g. `python3 -m http.server`) from the repo root.
