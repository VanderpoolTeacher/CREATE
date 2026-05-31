# The Game That Ends — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Produce a take-home toolkit (frameworks + rubrics + weave-in strategies) and a 30-45 min presentation outline that deliver a wake-up call to K-12 educators about the durable skills students need after "the last checklist."

**Architecture:** This is a content/document project, not software. Artifacts are Markdown files designed to be read, printed, and used by educators. Build order puts the **toolkit first** (the real goal), then the presentation that earns attention for it. Each task writes one focused artifact and verifies it against acceptance criteria before committing. The design spec at `docs/superpowers/specs/2026-05-31-the-game-that-ends-design.md` is the source of truth.

**"Tech Stack":** Markdown. Plain prose, tables for rubrics. Printable single-page artifacts where noted. No build tooling.

**Note on TDD:** Code TDD does not apply to prose. Each task substitutes **acceptance criteria** — a concrete checklist the writer verifies against the artifact before committing. That is the "test."

---

## File Structure

- `toolkit/durable-skills-framework.md` — one-page reference: the six skill clusters, each defined in 1-2 lines. Everything else references this.
- `toolkit/rubrics.md` — six single-page rubrics, one per cluster, for **teaching and assessing** the skill (3-level scale). The take-home core.
- `toolkit/weave-in-strategies.md` — low-lift moves to embed the skills in assignments teachers already give, plus the decomposition framework students apply to any ambiguous task.
- `presentation/outline.md` — slide-by-slide outline with speaker notes for a 30-45 min session (~20-30 slides). Earns attention for the toolkit.
- `curriculum/sample-units.md` — optional: 3-4 sample unit sketches for teachers with room to go beyond weave-in.
- `README.md` — already exists; update links once artifacts land.

Files are split by responsibility (reference / assessment / strategies / talk / optional units) so each stays focused and printable on its own.

---

### Task 1: Durable-skills framework (one page)

The foundational reference. Six clusters, each defined plainly, drawn from spec §3 and §7d. Everything else points back here.

**Files:**
- Create: `toolkit/durable-skills-framework.md`

- [ ] **Step 1: Define acceptance criteria** (the "test")

The finished file must:
- Name all six clusters exactly: Decomposition; Work & time organization; Working with ambiguity; Initiative / self-starting; Communication & presentation; Digital & systems fluency.
- Give each cluster a 1-2 line plain-language definition and one concrete "looks like in a student" example.
- Fit on a single printed page (roughly ≤ 400 words of body).
- State the "school game" framing in 2-3 sentences at the top so the page stands alone.

- [ ] **Step 2: Write the framework**

Write `toolkit/durable-skills-framework.md` with: a short header stating the school-game idea (from spec §2), then a six-row table or six short sections — cluster name, definition, "looks like" example. Pull definitions verbatim-in-spirit from spec §7d and the "looks like" examples from spec §3 (e.g., decomposition: "Can follow a checklist flawlessly but stalls turning a project into ordered steps").

- [ ] **Step 3: Verify against acceptance criteria**

Re-read the file against Step 1's checklist. Confirm all six clusters present and named exactly, each has definition + example, header states the frame, length ≤ ~400 words. Fix any miss inline.

- [ ] **Step 4: Commit**

```bash
git add toolkit/durable-skills-framework.md
git commit -m "Add one-page durable-skills framework"
```

---

### Task 2: Rubrics for teaching & assessing the six skills

The take-home core (spec §7c). One single-page rubric per cluster, each on a 3-level scale, written so the skill becomes nameable and gradeable *inside* existing assignments.

**Files:**
- Create: `toolkit/rubrics.md`
- Reference: `toolkit/durable-skills-framework.md` (cluster names must match exactly)

- [ ] **Step 1: Define acceptance criteria** (the "test")

The finished file must:
- Be **competency-based**: each rubric is built from observable **"The student can…" competency statements**, not generic quality bands.
- Contain one rubric for each of the six clusters, using the exact cluster names from Task 1.
- Use a consistent **4-level continuum** across all rubrics: **Not Yet → Approaching → Proficient → Advanced**, where *Proficient* = the competency is demonstrated and *Advanced* = the student does it unprompted / extends it. This mastery orientation reinforces the gradual-release goal from spec §7e (target = demonstrated, self-directed competence, not compliance).
- For each rubric, give 2-4 competency-statement rows, with a plain-language descriptor in each of the four levels (no jargon; an observable behavior a teacher could spot).
- Tie at least one competency per rubric to a behavior the spec named (e.g., for Initiative: "starts without prompting"; for Communication: "presents to a group / uses note cards"; for Work & time org: "uses a calendar / organizes files").
- Each rubric fits on one printed page.

- [ ] **Step 2: Write the rubrics**

Write `toolkit/rubrics.md`. Open with a 2-3 sentence "how to use these" note: these are competency-based and meant to be applied to assignments teachers already give, scoring the *skill* alongside the content. Then six rubric tables. Each table: columns = `Competency — "The student can…" | Not Yet | Approaching | Proficient | Advanced`; rows = the 2-4 competency statements for that cluster. Anchor descriptors in spec behaviors (decomposition, ambiguity/early questions, initiative/self-start, work+time org incl. calendar & files, communication/note cards, digital & systems fluency / "where files live").

- [ ] **Step 3: Verify against acceptance criteria**

Re-read against Step 1. Confirm six rubrics, exact cluster names, consistent Emerging/Developing/Independent scale, observable descriptors, each anchored to a spec behavior, each one page. Fix inline.

- [ ] **Step 4: Commit**

```bash
git add toolkit/rubrics.md
git commit -m "Add teaching & assessment rubrics for the six skill clusters"
```

---

### Task 3: Weave-in strategies + decomposition framework

The other half of the take-home core (spec §7a, §7b, §7c). Low-lift moves to embed skills in existing work, led by the constraint-we-respect framing, plus a student-facing decomposition framework.

**Files:**
- Create: `toolkit/weave-in-strategies.md`
- Reference: `toolkit/durable-skills-framework.md`, `toolkit/rubrics.md`

- [ ] **Step 1: Define acceptance criteria** (the "test")

The finished file must:
- Open with the "constraint we respect" framing (spec §7a): names standards/testing/mandated pacing, and states plainly this asks for **no new course** — only a different way of holding existing work.
- Provide at least one concrete weave-in move per skill cluster (six total minimum), each phrased as a tweak to an assignment teachers already give. Include the four named in spec §7b (grade the clarifying questions on an under-specified brief; require a one-paragraph break-it-down-and-schedule plan before work; add a 90-second stand-and-explain; make "where it lives" / folder structure part of the grade).
- Include the **decomposition framework** (spec §7c): a short, reusable prompt sequence students apply to any ambiguous task — e.g., *What's being asked? What don't I know? What are the steps? What's first?*
- Point teachers to `rubrics.md` for assessing each woven-in skill.
- Stay practical and skimmable (headers, short bullets), usable "Monday morning."

- [ ] **Step 2: Write the strategies**

Write `toolkit/weave-in-strategies.md`: (1) constraint framing intro; (2) the decomposition framework as a boxed/quoted prompt sequence; (3) a per-cluster list of weave-in moves (one+ each, including the four spec moves), each noting which rubric in `rubrics.md` to assess it with; (4) a one-line closing tying back to gradual release (withdraw support over time).

- [ ] **Step 3: Verify against acceptance criteria**

Re-read against Step 1. Confirm constraint framing present, ≥1 move per cluster, all four spec moves included, decomposition framework present, rubric cross-references present, skimmable. Fix inline.

- [ ] **Step 4: Commit**

```bash
git add toolkit/weave-in-strategies.md
git commit -m "Add weave-in strategies and decomposition framework"
```

---

### Task 4: Presentation outline (slide-by-slide with speaker notes)

The talk that earns attention for the toolkit (spec §5, plus §1-6). ~20-30 slides for a 30-45 min session, following the 9-beat arc, threading "Maya," and landing in the toolkit.

**Files:**
- Create: `presentation/outline.md`
- Reference: all three `toolkit/` files (the talk's payoff points to them)

- [ ] **Step 1: Define acceptance criteria** (the "test")

The finished file must:
- Cover all nine arc beats from spec §5 in order: (1) Hook — silence then night-before flood; (2) The school game frame; (3) The six skill cliffs; (4) Three students, one blind spot; (5) AI raises the floor; (6) Why it matters (Maya); (7) "We know your hands are tied" (constraint); (8) What could help — weave it in (the toolkit, the payoff); (9) Close — "the game that doesn't end."
- Be structured slide-by-slide: each slide has a **title**, **on-slide content** (sparse — a few words/a visual idea), and **speaker notes** (what the presenter says).
- Total ~20-30 slides; estimate fits 30-45 min.
- Thread the composite student "Maya" (capable, workforce-bound middle student) through at least the hook, the stakes (beat 6), and the close.
- Mark `[YOUR STORY]` prompts at beats where a fresh firsthand anecdote would strengthen the moment (spec §8), each with a one-line suggestion of what kind of story fits.
- Beat 8 explicitly hands the audience the toolkit and names the three artifacts (framework, rubrics, weave-in strategies).
- Use the real source anecdotes from spec §8 in the relevant speaker notes (school-game checklist vs. multistep; silence then night-before questions; note cards foreign; can't find their files).

- [ ] **Step 2: Write the outline**

Write `presentation/outline.md`. Top matter: title (*The Game That Ends: What Students Need After the Last Checklist*), audience, duration, slide count. Then one section per slide using a consistent template:

```
### Slide N — <title>
**On slide:** <sparse content / visual idea>
**Notes:** <what the presenter says>
```

Map the nine beats across the ~20-30 slides (e.g., Hook 1-2; School game 3-4; Six cliffs 5-11; Three students 12-14; AI 15-16; Why it matters/Maya 17-18; Constraint 19; Toolkit/weave-in 20-26; Close 27-28). Insert `[YOUR STORY]` prompts and weave Maya per the criteria.

- [ ] **Step 3: Verify against acceptance criteria**

Re-read against Step 1. Confirm all nine beats in order, slide template consistent, ~20-30 slides, Maya threaded, `[YOUR STORY]` prompts placed, beat 8 names the three toolkit artifacts, source anecdotes used. Fix inline.

- [ ] **Step 4: Commit**

```bash
git add presentation/outline.md
git commit -m "Add slide-by-slide presentation outline with speaker notes"
```

---

### Task 5: Sample unit sketches (optional — for teachers with room)

Spec §7f. Demoted/optional — for educators who can go beyond weave-in. 3-4 sketches, each showing how support is withdrawn over time (gradual release).

**Files:**
- Create: `curriculum/sample-units.md`
- Reference: `toolkit/durable-skills-framework.md`

- [ ] **Step 1: Define acceptance criteria** (the "test")

The finished file must:
- State up front these are optional, for teachers with room; otherwise the weave-in strategies are the primary path.
- Include the four sketches from spec §7f: "The Ambiguous Brief," "Many Plates Spinning," "Stand & Deliver," "Where Does It Live?" — each tagged with the skill cluster(s) it builds.
- For each: a one-line objective, the core activity, and an explicit note on **how scaffolding is withdrawn over time** (gradual release, spec §7e).
- Keep each sketch short (a sketch, not a full lesson plan).

- [ ] **Step 2: Write the units**

Write `curriculum/sample-units.md` with the optional-path note, then four short sketches using a consistent template: `**Builds:** <clusters>`, `**Objective:** ...`, `**Core activity:** ...`, `**Releasing support:** ...`.

- [ ] **Step 3: Verify against acceptance criteria**

Re-read against Step 1. Confirm optional framing, all four units, cluster tags, gradual-release note in each, kept short. Fix inline.

- [ ] **Step 4: Commit**

```bash
git add curriculum/sample-units.md
git commit -m "Add optional sample unit sketches"
```

---

### Task 6: Wire up README and final pass

Link the artifacts from the README and do a final cross-artifact consistency check.

**Files:**
- Modify: `README.md`

- [ ] **Step 1: Define acceptance criteria** (the "test")

- README "What's here" links resolve to the real files now created (`toolkit/`, `presentation/`, `curriculum/`).
- The six cluster names are identical across README, framework, rubrics, and weave-in strategies (no drift).
- No `[YOUR STORY]` prompts leaked into the toolkit files (they belong only in the presentation notes).

- [ ] **Step 2: Update README and check consistency**

Edit `README.md` to point the "coming" bullets at the now-existing files. Grep the six cluster names across all artifacts and reconcile any wording drift to match `durable-skills-framework.md`.

Run: `grep -rn "Digital & systems fluency\|Work & time organization" toolkit/ presentation/ curriculum/ README.md`
Expected: cluster names appear with identical wording everywhere.

- [ ] **Step 3: Verify and push**

Confirm acceptance criteria. Then:

```bash
git add -A
git commit -m "Link artifacts from README and reconcile cluster naming"
git push
```

---

### Task 7: Interactive GitHub Pages hub — content sections

A polished single-page static site (no build step) presenting the framework, rubrics, weave-in strategies, and optional sample units interactively. Files at repo root so GitHub Pages can serve from `main`.

**Files:**
- Create: `index.html`, `assets/styles.css`, `assets/app.js`
- Reference (source content): `toolkit/durable-skills-framework.md`, `toolkit/rubrics.md`, `toolkit/weave-in-strategies.md`, `curriculum/sample-units.md`

**Acceptance criteria:** Hero with the "school game" thesis + title; sticky nav (Framework / Rubrics / Weave-In / Units / Talk); six skills as expandable cards (definition + "looks like"); competency rubrics as interactive tables; weave-in strategies as a filterable-by-skill explorer with the decomposition framework featured; responsive/mobile-friendly; no external build step; self-contained except CDN libs. Content must match the Markdown sources exactly (cluster names Title-Case). Commit.

### Task 8: Interactive GitHub Pages hub — reveal.js talk deck

The 28-slide presentation as a browser-presentable deck, linked from the hub.

**Files:**
- Create: `talk.html`
- Reference: `presentation/outline.md`

**Acceptance criteria:** reveal.js (CDN) deck with one slide per outline slide; "On slide" content rendered as the slide, speaker `Notes` placed in `<aside class="notes">` (visible in speaker view, `S`); `[YOUR STORY]` prompts included in the notes; arrow-key/click navigation; linked to/from `index.html`; visually consistent with the hub. Commit.

### Task 9: Enable GitHub Pages, wire README, final pass

**Files:** Modify `README.md`; add `.nojekyll` at root (serve raw static files, skip Jekyll processing).

**Acceptance criteria:** `.nojekyll` present; README links to the live site and lists all artifacts (no "coming" placeholders); six cluster names identical across all artifacts and the site; no `[YOUR STORY]` prompts leaked into toolkit/site content (only in presentation notes / deck speaker notes); after merge to `main`, GitHub Pages enabled on `main` root via `gh`/API and the live URL verified to load. Commit and push.

---

## Self-Review

**Spec coverage:**
- §1 Purpose / wake-up call → Task 4 (talk).
- §2 Thesis / school game → Tasks 1, 4 (header + frame).
- §3 Six skill cliffs → Task 1 (framework), Task 4 (beat 3).
- §4 Three students → Task 4 (beat 4).
- §5 Arc → Task 4.
- §6 AI raises the floor → Task 4 (beat 5).
- §7a constraint → Task 3, Task 4 (beat 7).
- §7b weave-in → Task 3.
- §7c frameworks & rubrics → Task 2, Task 3.
- §7d framework → Task 1.
- §7e gradual release → Tasks 2 (rubric mastery orientation: Proficient/Advanced = demonstrated, self-directed competence), 3 (closing), 5 (releasing support).
- §7f sample units → Task 5.
- §8 stories → Task 4 (source anecdotes + `[YOUR STORY]` prompts).
- §9 deliverables → all tasks; toolkit (Tasks 1-3) sequenced first as the headline.

No gaps found.

**Placeholder scan:** `[YOUR STORY]` is an intentional, defined convention scoped to the presentation notes (Task 4) and explicitly kept out of toolkit files (Task 6 check). No other placeholders.

**Type/name consistency:** The six cluster names are fixed in Task 1 and reused by exact name in Tasks 2, 3, 4, 6; the rubric scale (Not Yet / Approaching / Proficient / Advanced) is defined once in Task 2 and referenced in Task 5's gradual-release language. Consistent.
