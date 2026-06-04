/* Structured content for Rebuilding the Foundations for Student Success toolkit hub.
   Content is canonical to the Markdown sources in /toolkit and /curriculum. */

window.CREATE_CONTENT = {
  /* ---- Six skill clusters (durable-skills-framework.md) ---- */
  clusters: [
    {
      id: "decomposition",
      num: 1,
      icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3 3 8l9 5 9-5-9-5Z"/><path d="m3 13 9 5 9-5"/></svg>`,
      name: "Decomposition",
      definition:
        "Taking a big, ambiguous goal and breaking it into ordered, doable steps — without being handed a checklist first.",
      looksLike:
        "Can follow a checklist flawlessly but stalls when given a multi-step project to organize on their own.",
    },
    {
      id: "organization",
      num: 2,
      icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M12 7.5V12l3 2"/></svg>`,
      name: "Work & Time Organization",
      definition:
        "Managing tasks and deadlines across multiple concurrent projects; using a calendar to define and protect work time; keeping files organized so anything can be found again.",
      looksLike:
        "Misses that two project deadlines collide; can't find where their own files are saved.",
    },
    {
      id: "ambiguity",
      num: 3,
      icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M9.3 9.3a2.8 2.8 0 1 1 4 2.5c-.9.5-1.3 1-1.3 2"/><path d="M12 17h.01"/></svg>`,
      name: "Working with Ambiguity",
      definition:
        "Asking clarifying questions early in a project and adapting when requirements shift as more becomes known.",
      looksLike:
        "Goes silent when a project is introduced, then sends a flood of questions the night before it's due.",
    },
    {
      id: "initiative",
      num: 4,
      icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M13 2 4.5 13.5H11l-1 8.5L18.5 10H12l1-8Z"/></svg>`,
      name: "Initiative / Self-Starting",
      definition:
        "Getting going without being prompted; investigating a problem independently and proposing a next step before stopping or waiting on someone else. This is often the hardest shift.",
      looksLike: "Waits to be told the next step instead of making a move.",
    },
    {
      id: "communication",
      num: 5,
      icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12a8 8 0 0 1-11.5 7.2L4 21l1.8-5.5A8 8 0 1 1 21 12Z"/></svg>`,
      name: "Communication & Presentation",
      definition:
        "Speaking about your own work in front of a group — explaining what you did, why, and what you learned.",
      looksLike:
        "Little practice standing up to present; even working from note cards can feel unfamiliar.",
    },
    {
      id: "digital",
      num: 6,
      icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7Z"/></svg>`,
      name: "Digital & Systems Fluency",
      definition:
        "Comfort with how software actually works and where information lives — understanding abstraction at a basic level. This skill is increasingly urgent as AI tools become part of everyday work.",
      looksLike: "Doesn't know where files are stored on their own computer.",
    },
  ],

  /* ---- Rubrics (rubrics.md). Levels order: Not Yet, Approaching, Proficient, Advanced ---- */
  rubricHowTo:
    "These are competency-based rubrics — apply them to assignments you already give, scoring the skill alongside the content without adding new curriculum. Proficient means the competency is demonstrated: the student does it reliably and independently; that is the target. Advanced means the student extends the skill unprompted — anticipates problems, helps peers, or transfers the skill to a new situation.",
  rubricLevels: ["Not Yet", "Approaching", "Proficient", "Advanced"],
  rubrics: {
    decomposition: [
      {
        can: "…break a project into ordered steps without being handed a checklist.",
        levels: [
          "Waits for the teacher to provide a step-by-step list; cannot name a next action independently.",
          "Names a few steps when prompted, but order is incomplete or missing key pieces.",
          "Independently maps out an ordered sequence before asking for help, and adjusts the plan when something changes.",
          "Produces a sequenced breakdown unprompted, flags dependencies or risks, and helps a peer do the same.",
        ],
      },
      {
        can: "…identify which step must come first (the blocker).",
        levels: [
          "Lists tasks randomly with no sense of what must happen before something else can start.",
          "Puts most steps in a workable order but skips at least one dependency (e.g., writing before researching).",
          "Sequences steps so each one sets up the next and can explain why a particular step is the blocker.",
          "Identifies the critical path and redesigns the sequence when a blocker changes.",
        ],
      },
      {
        can: "…size each step so work can be paced.",
        levels: [
          "Treats all tasks as the same effort; no sense of relative size.",
          "Can identify big vs. small tasks but does not connect estimates to available time.",
          "Sizes each step well enough to decide where to start and how to pace across available days.",
          "Estimates effort, builds in buffer for likely problems, and revises estimates mid-project based on evidence.",
        ],
      },
    ],
    organization: [
      {
        can: "…use a calendar to protect work time before deadlines arrive.",
        levels: [
          "Does not use a calendar; all planning is in their head or not at all.",
          "Has deadlines written down but does not block time in advance to do the work.",
          "Adds working sessions to a calendar before deadlines arrive and notices when two projects collide.",
          "Proactively protects time weeks out, flags conflicts to collaborators early, and adjusts when new demands appear.",
        ],
      },
      {
        can: "…organize files so work can be found again without a search.",
        levels: [
          "Files are untitled, saved to a default location, or simply lost; cannot locate own work.",
          "Files are saved but named inconsistently; finding them takes trial and error.",
          "Files are named clearly and stored in a folder structure they can describe to someone else; nothing important is lost.",
          "Maintains a system others could navigate, versions work intentionally, and can explain the logic of their structure.",
        ],
      },
      {
        can: "…track open tasks across more than one project at a time.",
        levels: [
          "Loses track of what is due when managing more than one assignment.",
          "Tracks due dates individually but misses that two land on the same day or require shared prep time.",
          "Maintains a running task list across all projects and updates it regularly without reminders.",
          "Uses their system to proactively surface conflicts, reprioritize, and keep collaborators informed.",
        ],
      },
    ],
    ambiguity: [
      {
        can: "…ask clarifying questions early, not the night before something is due.",
        levels: [
          "Goes silent when a project is introduced; sends questions only when the deadline is hours away.",
          "Asks some questions but waits until stuck rather than front-loading key clarifications at the start.",
          "Within the first day or two, asks targeted questions that remove the biggest unknowns before starting.",
          "Anticipates ambiguities before the teacher surfaces them and drafts a working definition to validate early.",
        ],
      },
      {
        can: "…make a stated assumption and keep working when information is incomplete.",
        levels: [
          "Freezes or refuses to proceed without explicit instructions for every step.",
          "Will move forward when told it is okay, but does not name or flag the assumption made.",
          "States the assumption out loud (\"I'm treating X as Y — let me know if that's wrong\") and keeps working.",
          "Names assumptions, weighs the risk of each, and designs the work so it can adapt quickly if an assumption is wrong.",
        ],
      },
      {
        can: "…adapt when requirements shift mid-project.",
        levels: [
          "Treats a change in scope as a crisis; restarts from scratch or shuts down.",
          "Adjusts the work but needs reassurance before continuing and may discard still-usable material.",
          "Acknowledges the change, identifies which parts of existing work still apply, and updates the plan without drama.",
          "Frames the change as useful data, identifies the delta, adjusts with minimal lost work, and brings the team along.",
        ],
      },
    ],
    initiative: [
      {
        can: "…start work without being prompted.",
        levels: [
          "Sits idle after an assignment is given; waits to be told the specific next step before doing anything.",
          "Gets started after a general nudge (\"you should probably begin\") but needs that nudge every session.",
          "Opens the project and begins on their own, without a reminder, at the expected time or earlier.",
          "Begins before the formal start, scopes what they don't know yet, and shares early drafts to surface issues fast.",
        ],
      },
      {
        can: "…investigate a problem before asking for help.",
        levels: [
          "Asks the first question that arises without attempting to find the answer independently.",
          "Makes one attempt to find an answer, then asks immediately if it does not work.",
          "Makes a genuine effort to investigate (tries a different approach, searches, re-reads) and then asks a specific, informed question.",
          "Documents what was tried before asking, frames the question precisely, and proposes a hypothesis to test.",
        ],
      },
      {
        can: "…propose a next step when stuck.",
        levels: [
          "Reports being stuck and waits for the teacher to provide the next move.",
          "Describes the problem but offers no idea for how to proceed.",
          "Describes the problem and names at least one concrete thing to try next.",
          "Generates multiple options, evaluates the trade-offs briefly, and acts on the most promising one.",
        ],
      },
    ],
    communication: [
      {
        can: "…present work to a group clearly and within time.",
        levels: [
          "Reads directly from a screen or sheet with no eye contact; audience cannot follow the explanation.",
          "Makes occasional eye contact and has a loose structure but loses the thread partway through.",
          "Looks at the audience, follows a clear arc (what I did, why, what I learned), and finishes within time.",
          "Tailors the arc to this specific audience, anticipates a likely question, and lands the close memorably.",
        ],
      },
      {
        can: "…use note cards as a guide, not a script.",
        levels: [
          "Either reads every word verbatim or improvises with no structure at all.",
          "Uses notes but drifts into reading them word-for-word when nervous.",
          "Glances at note cards to stay on track but speaks in their own words; cards hold cues, not sentences.",
          "Uses a minimal cue system that keeps eye contact nearly continuous and recovers smoothly from any stumble.",
        ],
      },
      {
        can: "…explain the reasoning behind their decisions, not just the output.",
        levels: [
          "Describes what the project is without explaining why any choices were made.",
          "Names a choice or two when prompted but cannot explain the reasoning unprompted.",
          "Volunteers the reasoning behind at least one key decision and can answer \"why did you do it that way?\" without hesitation.",
          "Weaves decision rationale throughout the presentation, names trade-offs considered, and invites pushback.",
        ],
      },
    ],
    digital: [
      {
        can: "…locate where a file lives and retrieve it immediately.",
        levels: [
          "Cannot locate files on their own device; does not distinguish local storage, cloud, and downloads folder.",
          "Can find a file eventually but describes its location in vague terms (\"it's saved somewhere\").",
          "Can state where a file is saved and why (local vs. cloud, which folder, which account) and retrieve it immediately.",
          "Maintains a consistent storage system, can explain it to a peer, and recovers quickly when a sync or access issue occurs.",
        ],
      },
      {
        can: "…describe a basic mental model of how a piece of software does its job.",
        levels: [
          "Treats software as a black box; has no model for what happens between input and output.",
          "Can describe the general purpose of a tool but not how data moves through it.",
          "Gives a simple, accurate model: input goes in, it is processed this way, output comes out — without jargon.",
          "Applies the mental model to predict what will happen in an unfamiliar tool or when something goes wrong.",
        ],
      },
      {
        can: "…troubleshoot when technology does not behave as expected.",
        levels: [
          "Stops working and waits for someone else to fix the problem.",
          "Tries one thing (usually restarting) and escalates immediately if it does not work.",
          "Works through a small set of logical steps, narrows down the likely cause, and escalates with a specific description of what was tried.",
          "Diagnoses systematically, searches for solutions independently, and documents the fix so it can be reused.",
        ],
      },
    ],
  },

  /* ---- Weave-in (weave-in-strategies.md) ---- */
  constraintLine:
    "K-12 teachers operate inside a structure built from the outside in: standards, mandated pacing, high-stakes testing, graduation requirements. There is no margin for a new course, a new unit, or another initiative. What this asks for instead is a different way of holding the work you already assign — same assignment, same time slot, same grade, different framing.",
  decompositionFramework: {
    intro:
      "Post this on the wall. Hand it out at the start of any complex assignment. Students apply these four questions to whatever task is in front of them — no new curriculum required.",
    questions: [
      {
        q: "What's actually being asked?",
        a: "Say it in one sentence, in your own words.",
      },
      {
        q: "What do I not know yet?",
        a: "List every unknown — information gaps, unclear terms, missing constraints.",
      },
      {
        q: "What are the steps?",
        a: "Break the work into chunks small enough to hand to a calendar.",
      },
      {
        q: "What's first?",
        a: "Identify the blocker — the one thing everything else depends on.",
      },
    ],
  },
  moves: [
    {
      cluster: "decomposition",
      title: "The \"plan-before-you-start\" memo",
      tweak:
        "Before students touch the actual work, require a one-paragraph written plan: how they will break this project down and when they intend to do each part. No more than half a page. Grade it alongside the finished product.",
      fits: "Any multi-day assignment, research paper, lab report, project.",
      assess:
        "The Decomposition rubric — specifically \"break a project into ordered steps\" and \"identify which step must come first.\"",
    },
    {
      cluster: "decomposition",
      title: "The under-specified brief",
      tweak:
        "Hand out the next project as a deliberately sparse prompt — less detail than usual. Make the clarifying questions students ask part of the grade, not just the deliverable. A student who asks three sharp, early questions before starting is demonstrating exactly the right instinct.",
      fits:
        "Any project you already assign; just remove one or two specification details from the handout.",
      assess:
        "The Decomposition rubric (\"identify which step must come first\") and the Working with Ambiguity rubric (\"ask clarifying questions early\").",
    },
    {
      cluster: "organization",
      title: "\"Where it lives\" is part of the grade",
      tweak:
        "When students submit work, require it to be organized in a named folder structure you specify (or that they define and label). A submission that cannot be found or that lives in \"Downloads\" does not demonstrate the skill.",
      fits: "Any digital submission — essay, slideshow, spreadsheet, video file.",
      assess:
        "The Work & Time Organization rubric (\"organize files so work can be found again\") and the Digital & Systems Fluency rubric (\"locate where a file lives\").",
    },
    {
      cluster: "organization",
      title: "The deadline collision check",
      tweak:
        "Before any multi-week project, give students five minutes to write down every other due date or commitment they have during the same window. Ask: do any collide? What do you do about it? This is time-management thinking made visible.",
      fits: "The opening day of any unit with a major project.",
      assess:
        "The Work & Time Organization rubric (\"use a calendar to protect work time\" and \"track open tasks across more than one project at a time\").",
    },
    {
      cluster: "ambiguity",
      title: "Grade the questions, not just the answers",
      tweak:
        "When you hand out the under-specified brief, tell students explicitly: \"The questions you ask me in the first two days count toward your grade.\" Give partial credit for a substantive clarifying question asked early. Give no credit for questions asked the night before it is due.",
      fits: "Any project already in your rotation.",
      assess:
        "The Working with Ambiguity rubric — \"ask clarifying questions early, not the night before something is due.\"",
    },
    {
      cluster: "ambiguity",
      title: "State your assumption",
      tweak:
        "On any assignment where students must interpret or estimate something, require them to write one sentence: \"I am assuming X because Y.\" That single sentence is the whole move.",
      fits:
        "Math word problems, science lab write-ups, essay prompts with open-ended scope.",
      assess:
        "The Working with Ambiguity rubric (\"make a stated assumption and keep working when information is incomplete\").",
    },
    {
      cluster: "initiative",
      title: "The silent first step",
      tweak:
        "At the start of a work session, before you give any direction, have students write down — silently and independently — the first thing they plan to do today on their project. Collect or share out after two minutes. The move makes self-starting a public, practiced habit.",
      fits: "The opening two minutes of any class that includes project work time.",
      assess:
        "The Initiative / Self-Starting rubric (\"start work without being prompted\").",
    },
    {
      cluster: "initiative",
      title: "The \"what I tried first\" box",
      tweak:
        "Add a small box to any assignment sheet: \"Before asking for help, I tried: ___.\" Students fill it in. If the box is blank and the hand goes up, redirect: \"Fill in the box first.\" Over time, the box trains the disposition.",
      fits: "Any worksheet, lab, or project handout — one added line.",
      assess:
        "The Initiative / Self-Starting rubric (\"investigate a problem before asking for help\").",
    },
    {
      cluster: "communication",
      title: "The 90-second stand-and-explain",
      tweak:
        "At the end of a work session or after a quiz, call on a few students to stand and explain — in 90 seconds — what they did, why they made a key choice, and what they would do differently. No slides, no preparation beyond the work they just did.",
      fits:
        "After any assignment students have already completed — lab, essay draft, math problem set, art critique.",
      assess:
        "The Communication & Presentation rubric — \"present work to a group clearly and within time\" and \"explain the reasoning behind their decisions.\"",
    },
    {
      cluster: "communication",
      title: "The one-sentence summary",
      tweak:
        "Before a student turns in any written assignment, require a single closing sentence: \"The most important thing I want you to understand about this work is ___.\" It forces them to think about what they are actually communicating, not just what they produced.",
      fits: "Any essay, report, or project with a written component.",
      assess:
        "The Communication & Presentation rubric (\"explain the reasoning behind their decisions, not just the output\").",
    },
    {
      cluster: "digital",
      title: "Name the tool, describe the move",
      tweak:
        "Once per unit, ask students to write two sentences about a digital tool they used: what it does, and how information moves through it. Not a how-to guide — a mental model. \"I used Google Slides. I put text and images into it, it arranged them on a page, and the output was a shareable link.\"",
      fits:
        "Any assignment that involves a digital tool — word processing, spreadsheets, presentation software, a learning management system.",
      assess:
        "The Digital & Systems Fluency rubric (\"describe a basic mental model of how a piece of software does its job\").",
    },
  ],

  /* ---- Sample units (sample-units.md) ---- */
  unitsIntro:
    "These units are optional — and that's by design. The weave-in strategies are the primary path; these are for when you have room to carve out dedicated practice time. Each one is now a complete, pick-up-and-teach lesson plan — sessions, timing, copy-ready student handouts, look-fors, the matching rubric, and a gradual-release plan — and each ends with a low-lift version you can use instead. The five units together cover all six durable skills.",
  units: [
    {
      name: "The Ambiguous Brief",
      builds: ["Working with Ambiguity", "Decomposition"],
      objective:
        "Students will ask targeted clarifying questions before beginning a project and break an open-ended prompt into a concrete, executable plan.",
      activity:
        "Students receive a deliberately thin project brief — something like \"Create something that helps a newcomer understand this community.\" No rubric is handed out at the start. Their first task is to surface their assumptions and write down every question they'd need answered before they could begin. After a structured Q&A round (with the teacher playing the \"client\"), they decompose the project into phases with owners and rough timelines. The gap between their first instinct and their post-clarification plan is the main discussion artifact.",
      releasing:
        "In the first round, the teacher models a few good clarifying questions to prime the pump. In the second round, students generate questions independently but review them in pairs before the client meeting. By the third iteration, students submit a clarifying-questions document cold — no prompts, no pairs — and self-assess against a checklist they helped write.",
      plan: "https://github.com/VanderpoolTeacher/CREATE/blob/main/curriculum/units/the-ambiguous-brief.md",
      handout: "curriculum/units-pdf/the-ambiguous-brief-handout.pdf",
    },
    {
      name: "Many Plates Spinning",
      builds: ["Work & Time Organization"],
      objective:
        "Students will manage two concurrent, mid-length projects using a real calendar and a shared file system, and recover gracefully when a deadline conflict arises.",
      activity:
        "Two projects launch on the same day with overlapping but offset deadlines. Students must maintain a live task list, block time on a shared calendar, and store all work in a named, organized folder structure (no \"untitled\" files, no desktop dumps). Midway through, the teacher shifts one deadline by two days — without warning — and students have to adjust their plans in writing and explain the trade-offs they made.",
      releasing:
        "Week one, the teacher walks through a sample calendar block and folder structure. Week two, students build their own structure from scratch but check in against a peer's for a five-minute comparison. By week three, no templates are provided; students are expected to set up their own systems from day one and flag conflicts to the teacher before they become crises.",
      plan: "https://github.com/VanderpoolTeacher/CREATE/blob/main/curriculum/units/many-plates-spinning.md",
      handout: "curriculum/units-pdf/many-plates-spinning-handout.pdf",
    },
    {
      name: "Nobody Assigned This",
      builds: ["Initiative / Self-Starting"],
      objective:
        "Students will spot a real problem nobody handed them, investigate it before asking for help, and take a concrete first step on their own.",
      activity:
        "Students identify an unassigned problem worth solving in their classroom, school, or community — the recycling bins overflow by Thursday, newcomers can't find the library — and instead of waiting to be told what to do, they investigate (trying a few things before raising a hand), propose at least one next step, and take a small first action: a draft, an email, a five-minute experiment. The deliverable is intentionally small and fast, because the unit is about the start, not a finished project. A standing norm — \"try three things before you ask me\" — turns \"I'm stuck\" into \"here's what I tried and here's what I'll try next.\"",
      releasing:
        "In the first iteration, the teacher offers a menu of problems and models the investigate-before-asking norm. In the second, students pick from a broad category and run the norm independently. By the third, students spot their own problem cold, investigate, propose options, and take the first step with no prompting — then self-assess. The end state: the student begins before being told.",
      plan: "https://github.com/VanderpoolTeacher/CREATE/blob/main/curriculum/units/nobody-assigned-this.md",
      handout: "curriculum/units-pdf/nobody-assigned-this-handout.pdf",
    },
    {
      name: "Stand & Deliver",
      builds: ["Communication & Presentation"],
      objective:
        "Students will deliver a clear, structured two-minute spoken explanation to an unfamiliar audience using only note cards — no slides, no script.",
      activity:
        "Every week, each student draws a topic card on Monday and presents for two minutes on Friday — to a small group, not the whole class. Topics rotate between personal (explain something you know well), academic (explain a concept from another class), and professional (explain a process or decision). Peers give one structured piece of feedback using a simple form: What was the clearest moment? What would help you follow along even better? Over the term, students track their own growth by keeping a brief self-reflection log after each round.",
      releasing:
        "Early rounds include a planning scaffold — an index card template with labeled sections (hook, main point, example, close). After a few rounds, the template is removed and students design their own note card structure. By the end of the term, the topic is assigned Monday and students present Friday with no intermediate check-in from the teacher — planning, prep, and delivery are fully student-owned.",
      plan: "https://github.com/VanderpoolTeacher/CREATE/blob/main/curriculum/units/stand-and-deliver.md",
      handout: "curriculum/units-pdf/stand-and-deliver-handout.pdf",
    },
    {
      name: "Where Does It Live?",
      builds: ["Digital & Systems Fluency"],
      objective:
        "Students will explain, in plain language, what happens to a file or a piece of data when they save, share, sync, or submit it — and identify at least one decision that follows from that understanding.",
      activity:
        "Students audit their own digital life: they map where three of their school projects actually live (device, cloud, both?), trace what happens when they hit \"submit\" on an assignment, and draw a simple diagram of what an AI tool does with the text they type into it. The goal is not technical depth — it is that students stop treating software as magic and start asking \"where does this go, and who can see it?\" The unit closes with a short discussion: one thing you will now do differently, and why.",
      releasing:
        "The first audit is done with a guided worksheet and whole-class debrief. The second audit (a different tool or workflow) uses only a blank diagram template. By the final project, students choose the tool, design their own diagram, and write their own reflection questions — demonstrating that the habit of asking \"where does it live?\" has become automatic, not assigned.",
      plan: "https://github.com/VanderpoolTeacher/CREATE/blob/main/curriculum/units/where-does-it-live.md",
      handout: "curriculum/units-pdf/where-does-it-live-handout.pdf",
    },
  ],
};
