// Shared course data and the helpers each lecture file uses to register itself.
const LECTURES = [
  { id: "l01", n: 1, short: "Innovation", title: "Innovation", tag: "Invention vs innovation, types of innovation, Drucker's seven sources" },
  { id: "l02", n: 2, short: "Innovation tools", title: "Innovation Management Techniques", tag: "Nine tools: knowledge management to business simulation" },
  { id: "l03", n: 3, short: "Ideation", title: "Dynamics of Ideation & Creativity", tag: "Creative process, techniques, barriers, idea to opportunity" },
  { id: "l04", n: 4, short: "Product development", title: "Product Development", tag: "Design thinking, the 8-stage NPD process, innovation sweet spot" },
  { id: "l05", n: 5, short: "NPD process", title: "New Product Development Process", tag: "Stage-gate, House of Quality, the 7 steps" },
  { id: "l06", n: 6, short: "Entrepreneur", title: "Entrepreneur and Entrepreneurship", tag: "Who is an entrepreneur, risks, characteristics, skills" },
  { id: "l07", n: 7, short: "Entrepreneur types", title: "Classifying Entrepreneurs", tag: "Classifications, Danhof, Cole, social entrepreneurs, intrapreneurship" },
  { id: "l08", n: 8, short: "Business model", title: "Business Model", tag: "Value proposition canvas, business model canvas, lean canvas" },
  { id: "l09", n: 9, short: "Business plan", title: "Business Plan", tag: "Functions, three tests, key elements, guidelines" },
  { id: "l10", n: 10, short: "Finance", title: "Financial Planning & Cash Management", tag: "P&L, balance sheet, cash flow, budgets, managing cash" },
  { id: "l11", n: 11, short: "Marketing", title: "Marketing Plan & Operational Plan", tag: "4Ps and 4Cs, customers, competition, funnel, operations" },
];

const QUIZ = {}, CARDS = {}, GAMES = {}, INITS = [];

// Small SVG icon from the sprite in index.html
const icon = (name, cls = "") => `<svg class="i ${cls}" aria-hidden="true"><use href="#i-${name}"></use></svg>`;

// Chapter markup. Body children are laid out in a two-column grid on wide screens;
// anything with class "note" sits in the margin next to the block before it.
const chapter = (id, title, body) => `
  <article class="chapter" id="${id}">
    <header class="ch-head"><span class="ch-num"></span><h2>${title}</h2></header>
    <div class="ch-body">${body}</div>
  </article>`;

// Margin notes: def (definition), hook (memory hook), trap (exam trap), eg (example)
const NOTE_LABEL = { def: "Definition", hook: "Memory hook", trap: "Exam trap", eg: "Example" };
const NOTE_ICON = { def: "book", hook: "bulb", trap: "alert", eg: "check" };
const note = (kind, html, title) => `
  <aside class="note note-${kind}">
    <span class="note-label">${icon(NOTE_ICON[kind])}${title || NOTE_LABEL[kind]}</span>
    <div>${html}</div>
  </aside>`;

// Flip card (a button, so content must be inline: use <br> instead of lists)
const flip = (front, back, hint = "Tap to flip") =>
  `<button class="flip" type="button" aria-pressed="false"><span class="inner"><span class="face front"><b>${front}</b><small>${hint}</small></span><span class="face back">${back}</span></span></button>`;
const flips = items => `<div class="flips wide">${items.map(([f, b, h]) => flip(f, b, h)).join("")}</div>`;

// Stepper: [label, small caption, panel html]
const stepper = (steps, wide = true) => `<div class="stepper${wide ? " wide" : ""}">
  <div class="steps">${steps.map(([l, s]) => `<button>${s ? `<small>${s}</small>` : ""}${l}</button>`).join("")}</div>
  ${steps.map(([, , h]) => `<div class="panel">${h}</div>`).join("")}</div>`;

const table = (head, rows, cls = "") => `<div class="tbl-wrap ${cls}"><table><thead><tr>${head.map(h => `<th scope="col">${h}</th>`).join("")}</tr></thead>
  <tbody>${rows.map(r => `<tr>${r.map((c, i) => i ? `<td>${c}</td>` : `<th scope="row" class="rh">${c}</th>`).join("")}</tr>`).join("")}</tbody></table></div>`;

const ask = (q, a) => `<details class="ask"><summary>${q}</summary><div>${a}</div></details>`;
const game = key => `<div class="game wide" data-game="${key}"></div>`;

// Each lecture file calls this once.
function addLecture({ id, intro, body, cheat }) {
  const L = LECTURES.find(l => l.id === id);
  document.getElementById("lectures").insertAdjacentHTML("beforeend", `
    <section class="page lecture" id="${id}" style="--lec: var(--${id})" aria-labelledby="${id}-title">
      <header class="lec-head">
        <p class="eyebrow">Lecture ${L.n} of ${LECTURES.length}</p>
        <h1 id="${id}-title">${L.title}</h1>
        <p class="lead">${intro}</p>
        <div class="lec-meta"></div>
        <nav class="toc" aria-label="Chapters in this lecture"></nav>
      </header>
      ${body}
      <section class="study" id="${id}-study" aria-labelledby="${id}-study-title">
        <h2 id="${id}-study-title" class="study-title">Test yourself</h2>
        <div class="tabs" role="tablist">
          <button role="tab" aria-selected="true" data-tab="quiz">Quiz</button>
          <button role="tab" aria-selected="false" data-tab="cards">Flashcards</button>
        </div>
        <div class="tabpanel" data-panel="quiz"><div class="quiz" data-quiz="${id}"></div></div>
        <div class="tabpanel" data-panel="cards" hidden><div class="deck" data-deck="${id}"></div></div>
      </section>
    </section>`);
  if (cheat) document.getElementById("sheet-grid").insertAdjacentHTML("beforeend",
    `<section class="sheet-card" style="--lec: var(--${id})"><h3><span>${L.n}</span>${L.title}</h3><ul>${cheat.map(c => `<li>${c}</li>`).join("")}</ul></section>`);
}
