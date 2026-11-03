// Venture Notes — app engine: routing, progress, quizzes, spaced repetition, widgets.
"use strict";
const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];
const esc = s => String(s).replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]);
const store = {
  get(k, d) { try { const v = localStorage.getItem("vn:" + k); return v ? JSON.parse(v) : d; } catch { return d; } },
  set(k, v) { try { localStorage.setItem("vn:" + k, JSON.stringify(v)); } catch { /* storage unavailable */ } },
};
const shuffle = a => { a = [...a]; for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };
const today = () => new Date().toISOString().slice(0, 10);
const addDays = (d, n) => { const t = new Date(d + "T00:00:00Z"); t.setUTCDate(t.getUTCDate() + n); return t.toISOString().slice(0, 10); };
const LIDS = LECTURES.map(l => l.id);
const reduced = matchMedia("(prefers-reduced-motion: reduce)").matches;
const smooth = () => (reduced ? "auto" : "smooth");

/* ---------- theme ---------- */
const themeBtn = $("#themeBtn");
function applyTheme(t) {
  document.documentElement.dataset.theme = t;
  themeBtn.innerHTML = icon(t === "dark" ? "sun" : "moon");
  themeBtn.setAttribute("aria-label", t === "dark" ? "Switch to light mode" : "Switch to dark mode");
}
applyTheme(store.get("theme", matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"));
themeBtn.onclick = () => { const t = document.documentElement.dataset.theme === "dark" ? "light" : "dark"; applyTheme(t); store.set("theme", t); };

/* ---------- toast & streak ---------- */
function toast(msg) {
  const t = $("#toast"); t.textContent = msg; t.classList.add("show");
  clearTimeout(toast.t); toast.t = setTimeout(() => t.classList.remove("show"), 2600);
}
let days = (store.get("days", []) || []).filter(d => /^\d{4}-\d{2}-\d{2}$/.test(d));
function touch() { const d = today(); if (!days.includes(d)) { days.push(d); store.set("days", days.slice(-400)); } }
function streak() {
  let n = 0, d = today();
  if (!days.includes(d)) d = addDays(d, -1);
  while (days.includes(d)) { n++; d = addDays(d, -1); }
  return n;
}

/* ---------- sidebar, home grid, journey ---------- */
$("#lecList").innerHTML = LECTURES.map(l => `
  <li><a href="#${l.id}" data-page="${l.id}" style="--c: var(--${l.id})"><span class="num"><span>${l.n}</span></span><span>${l.title}</span></a></li>`).join("");
$("#lecGrid").innerHTML = LECTURES.map(l => `
  <a class="lec-card card" href="#${l.id}" style="--lec: var(--${l.id})">
    <span class="n">Lecture ${l.n}</span><h3>${l.title}</h3><p>${l.tag}</p>
    <div class="meter"><i data-prog="${l.id}"></i></div>
  </a>`).join("");
(function journey() {
  // a gentle S-curve with one stop per lecture
  const W = 1000, H = 190, n = LECTURES.length;
  const pts = LECTURES.map((l, i) => {
    const x = 40 + i * (W - 80) / (n - 1);
    const y = H / 2 + Math.sin(i / (n - 1) * Math.PI * 2) * 48;
    return [x, y];
  });
  let d = `M${pts[0][0]} ${pts[0][1]}`;
  for (let i = 1; i < n; i++) { const [x0, y0] = pts[i - 1], [x1, y1] = pts[i], mx = (x0 + x1) / 2; d += ` C${mx} ${y0} ${mx} ${y1} ${x1} ${y1}`; }
  const stops = LECTURES.map((l, i) => {
    const [x, y] = pts[i], up = i % 2 === 0;
    return `<a href="#${l.id}" class="stop" aria-label="Lecture ${l.n}: ${l.title}">
      <circle class="dot" cx="${x}" cy="${y}" r="13" style="fill:var(--${l.id})"></circle>
      <text class="n" x="${x}" y="${y + 4}" text-anchor="middle">${l.n}</text>
      <text x="${x}" y="${up ? y - 24 : y + 34}" text-anchor="middle">${l.short}</text></a>`;
  }).join("");
  $("#journey").innerHTML = `<svg viewBox="0 0 ${W} ${H}" role="group" aria-label="Lectures in order">
      <path d="${d}" fill="none" style="stroke:var(--line)" stroke-width="6" stroke-linecap="round"></path>
      <path id="journeyDone" d="${d}" fill="none" style="stroke:var(--teal)" stroke-width="6" stroke-linecap="round" pathLength="100" stroke-dasharray="0 100"></path>
      ${stops}</svg>
    <ol class="journey-list">${LECTURES.map(l => `<li><a href="#${l.id}" style="--lec: var(--${l.id})"><span>${l.n}</span>${l.short}</a></li>`).join("")}</ol>`;
})();

/* ---------- drawer (mobile sidebar) ---------- */
const side = $("#sidebar"), scrim = $("#scrim"), menuBtn = $("#menuBtn");
function drawer(open) {
  side.classList.toggle("open", open); scrim.hidden = !open; menuBtn.setAttribute("aria-expanded", open);
  if (open) $("#closeSide").focus();
}
menuBtn.onclick = () => drawer(true);
$("#closeSide").onclick = () => { drawer(false); menuBtn.focus(); };
scrim.onclick = () => drawer(false);
document.addEventListener("keydown", e => { if (e.key === "Escape" && side.classList.contains("open")) { drawer(false); menuBtn.focus(); } });

/* ---------- progress ---------- */
let done = store.get("done", {});
if (typeof done !== "object" || !done) done = {};
const chaptersOf = l => $$(`#${l} .chapter`);
const lecPct = l => { const c = chaptersOf(l); return c.length ? Math.round(c.filter(x => done[x.id]).length / c.length * 100) : 0; };
function updateProgress() {
  let all = 0, got = 0;
  LIDS.forEach(l => {
    const chs = chaptersOf(l), n = chs.filter(c => done[c.id]).length, p = lecPct(l);
    all += chs.length; got += n;
    const bar = $(`[data-prog="${l}"]`); if (bar) bar.style.width = p + "%";
    const a = $(`#lecList a[data-page="${l}"]`);
    if (a) { a.querySelector(".num").style.setProperty("--p", p); a.classList.toggle("done", p === 100); a.setAttribute("aria-label", `Lecture ${l.slice(1) * 1}, ${p}% learned`); }
    const ring = $(`#${l} .ring`);
    if (ring) {
      ring.style.setProperty("--p", p); ring.querySelector("b").textContent = p + "%";
      const next = chs.find(c => !done[c.id]), go = $(`#${l} [data-go]`);
      go.innerHTML = `${!n ? "Start reading" : next ? "Continue at chapter " + (chs.indexOf(next) + 1) : "Take the quiz"} ${icon("arrow")}`;
      go.dataset.go = next ? next.id : l + "-study";
    }
    $$(`#${l} .toc a`).forEach((t, i) => t.classList.toggle("done", !!done[chs[i].id]));
  });
  const p = all ? Math.round(got / all * 100) : 0;
  $("#sideBar").style.width = p + "%";
  $("#sideLbl").textContent = `${p}% of the course · ${got}/${all} chapters`;
  const jd = $("#journeyDone");
  if (jd) { const lp = LIDS.filter(l => lecPct(l) === 100).length; jd.setAttribute("stroke-dasharray", `${lp / (LIDS.length - 1) * 100} 100`); }
}

/* lecture headers, chapter numbering, table of contents, next/previous */
LECTURES.forEach((L, li) => {
  const sec = $("#" + L.id);
  if (!sec) return;
  const chs = chaptersOf(L.id);
  chs.forEach((c, i) => { c.querySelector(".ch-num").textContent = i + 1; });
  $(".lec-meta", sec).innerHTML = `
    <div class="ring" style="--p:0"><b>0%</b></div>
    <div class="meta-item"><b>${chs.length}</b><small>chapters</small></div>
    <div class="meta-item"><b>${(QUIZ[L.id] || []).length}</b><small>quiz questions</small></div>
    <div class="meta-item"><b>${(CARDS[L.id] || []).length}</b><small>flashcards</small></div>
    <div class="meta-item"><b>~${chs.length * 6}</b><small>minutes</small></div>
    <div class="meta-btns"><button class="btn" data-go=""></button><button class="btn ghost" data-quizjump>Go to quiz</button></div>`;
  $(".toc", sec).innerHTML = chs.map((c, i) => `<a href="#${c.id}">${i + 1}. ${esc(c.querySelector("h2").textContent)}</a>`).join("");
  $("[data-go]", sec).onclick = e => document.getElementById(e.currentTarget.dataset.go).scrollIntoView({ behavior: smooth() });
  $("[data-quizjump]", sec).onclick = () => $(`#${L.id}-study`).scrollIntoView({ behavior: smooth() });
  const prev = LECTURES[li - 1], next = LECTURES[li + 1];
  sec.insertAdjacentHTML("beforeend", `<nav class="lec-nav" aria-label="Other lectures">
    ${prev ? `<a href="#${prev.id}"><small>Previous lecture</small><b>${prev.n}. ${prev.title}</b></a>` : ""}
    ${next ? `<a class="next" href="#${next.id}"><small>Next lecture</small><b>${next.n}. ${next.title}</b></a>` : `<a class="next" href="#exam"><small>Finished every lecture</small><b>Exam practice</b></a>`}
  </nav>`);
});

/* chapters: mark as learned, then move on */
$$(".chapter").forEach(ch => {
  const row = document.createElement("div"); row.className = "done-row";
  const b = document.createElement("button"); b.className = "done-btn"; b.type = "button";
  row.appendChild(b); $(".ch-body", ch).appendChild(row);
  const paint = () => {
    const on = !!done[ch.id];
    b.setAttribute("aria-pressed", on); ch.classList.toggle("learned", on);
    b.innerHTML = on ? `${icon("check")} Learned` : "Mark as learned and continue";
    const n = $(".ch-num", ch); if (on) n.innerHTML = icon("check"); else n.textContent = chaptersOf(ch.closest(".lecture").id).indexOf(ch) + 1;
  };
  b.onclick = () => {
    done[ch.id] = !done[ch.id]; store.set("done", done); paint(); updateProgress();
    if (!done[ch.id]) return;
    touch();
    const l = ch.closest(".lecture").id;
    toast(lecPct(l) === 100 ? `Lecture ${l.slice(1) * 1} complete. Lock it in with the quiz.` : `${lecPct(l)}% of this lecture learned`);
    const nx = ch.nextElementSibling && ch.nextElementSibling.classList.contains("chapter") ? ch.nextElementSibling : $(`#${l}-study`);
    setTimeout(() => nx.scrollIntoView({ behavior: smooth() }), 380);
  };
  paint();
});

/* ---------- router ---------- */
function route() {
  const hash = location.hash.slice(1);
  const id = hash.split("-")[0];
  const pg = document.getElementById(id);
  const page = pg && pg.classList.contains("page") ? id : "home";
  $$(".page").forEach(p => p.classList.toggle("show", p.id === page));
  $$(".topnav a, #lecList a").forEach(a => {
    const on = a.dataset.page === page;
    a.classList.toggle("active", on);
    if (on) a.setAttribute("aria-current", "page"); else a.removeAttribute("aria-current");
  });
  const L = LECTURES.find(l => l.id === page);
  document.documentElement.style.setProperty("--lec", L ? `var(--${L.id})` : "var(--teal)");
  const SITE = "Innovation Management & Entrepreneurship";
  document.title = page === "home" ? SITE : L ? `${L.n}. ${L.title} · ${SITE}` : `${{ review: "Daily review", exam: "Exam practice", sheet: "Revision sheet" }[page]} · ${SITE}`;
  drawer(false);
  if (page === "home") renderDash();
  if (page === "review") { paintBoxes(); $('[data-deck="review"]').reset(); }
  const target = hash.includes("-") && document.getElementById(hash);
  requestAnimationFrame(() => {
    if (target) target.scrollIntoView(); else window.scrollTo(0, 0);
    onScroll();
  });
}
window.addEventListener("hashchange", () => { route(); const h = $(".page.show h1"); if (h && !location.hash.slice(1).includes("-")) { h.setAttribute("tabindex", "-1"); h.focus({ preventScroll: true }); } });

/* ---------- generic widgets ---------- */
// steppers: tabs + panels
$$(".stepper").forEach((st, k) => {
  const btns = $$(".steps button", st), panels = $$(":scope > .panel", st);
  $(".steps", st).setAttribute("role", "tablist");
  btns.forEach((b, i) => {
    b.setAttribute("role", "tab"); b.id = `st${k}-${i}`; b.type = "button";
    if (panels[i]) { panels[i].setAttribute("role", "tabpanel"); panels[i].setAttribute("aria-labelledby", b.id); }
    const sel = () => {
      btns.forEach((x, j) => { x.setAttribute("aria-selected", j === i); x.tabIndex = j === i ? 0 : -1; if (panels[j]) panels[j].hidden = j !== i; });
    };
    b.onclick = sel;
    b.onkeydown = e => {
      const d = e.key === "ArrowRight" ? 1 : e.key === "ArrowLeft" ? -1 : 0;
      if (d) { e.preventDefault(); const n = btns[(i + d + btns.length) % btns.length]; n.click(); n.focus(); }
    };
    if (i === 0) sel();
  });
});
// flip cards are buttons
document.addEventListener("click", e => {
  const f = e.target.closest(".flip");
  if (f && !f.closest(".deck")) f.setAttribute("aria-pressed", f.getAttribute("aria-pressed") !== "true");
});
// lecture tabs: quiz / flashcards
$$(".study .tabs").forEach(t => {
  const sec = t.closest(".study");
  $$("button", t).forEach(b => b.onclick = () => {
    $$("button", t).forEach(x => x.setAttribute("aria-selected", x === b));
    $$(".tabpanel", sec).forEach(p => p.hidden = p.dataset.panel !== b.dataset.tab);
  });
});
// "explain" chips: data-explain group with data-x text, output in [data-explain-out]
$$("[data-explain]").forEach(g => {
  const out = $(`[data-explain-out="${g.dataset.explain}"]`);
  $$("button", g).forEach(b => {
    b.type = "button"; b.setAttribute("aria-pressed", "false");
    b.onclick = () => {
      $$("button", g).forEach(x => x.setAttribute("aria-pressed", x === b));
      out.innerHTML = `<span class="note-label">${esc(b.textContent)}</span><div>${b.dataset.x}</div>`;
    };
  });
});

/* sorter games: <div class="game" data-game="key"> */
$$("[data-game]").forEach(g => {
  const { opts, items, done: finish } = GAMES[g.dataset.game];
  g.innerHTML = `<div class="game-top"><span>Scenario <span data-g="i">1</span> of <span data-g="n"></span></span><span>Score <span data-g="s">0</span></span></div>
    <p class="scenario" data-g="q" aria-live="polite"></p><div class="opts" data-g="opts" role="group" aria-label="Answer options"></div>
    <p class="fb" data-g="fb" aria-live="polite"></p>
    <div class="row"><button class="btn" data-g="next" disabled>Next scenario ${icon("arrow")}</button><button class="btn ghost" data-g="restart">${icon("rotate")} Restart</button></div>`;
  const el = k => $(`[data-g="${k}"]`, g);
  let list, i, score;
  const start = () => { list = shuffle(items); i = 0; score = 0; el("n").textContent = list.length; show(); };
  function show() {
    if (i >= list.length) {
      el("q").textContent = `Done: ${score} of ${list.length} correct. ${score >= list.length * .8 ? (finish || "You've got this one.") : "Restart and try once more."}`;
      el("opts").innerHTML = ""; el("fb").textContent = ""; el("next").disabled = true; return;
    }
    el("i").textContent = i + 1; el("s").textContent = score; el("q").textContent = list[i].q; el("fb").textContent = ""; el("next").disabled = true;
    el("opts").innerHTML = "";
    opts.forEach(o => {
      const b = document.createElement("button"); b.type = "button"; b.textContent = o;
      b.onclick = () => {
        const ok = o === list[i].a; if (ok) score++;
        $$("button", el("opts")).forEach(x => { x.disabled = true; if (x.textContent === list[i].a) x.classList.add("right"); });
        if (!ok) b.classList.add("wrong");
        el("fb").innerHTML = `<b>${ok ? "Correct." : "It's " + esc(list[i].a) + "."}</b> ${list[i].why}`;
        el("s").textContent = score; el("next").disabled = false; el("next").focus(); touch();
      };
      el("opts").appendChild(b);
    });
  }
  el("next").onclick = () => { i++; show(); const f = $(".opts button", g); if (f) f.focus(); };
  el("restart").onclick = start;
  start();
});

/* ---------- quizzes ---------- */
const QID = {};
Object.entries(QUIZ).forEach(([l, qs]) => qs.forEach((q, i) => { q.id = l + ":" + i; q.l = l; QID[q.id] = q; }));
let wrong = store.get("wrong", {});
if (typeof wrong !== "object" || !wrong) wrong = {};
Object.keys(wrong).forEach(k => { if (!QID[k]) delete wrong[k]; });
let examSet = new Set(LIDS), examMistakes = false;
function makeQuiz(el) {
  const key = el.dataset.quiz;
  let qs, i, score, missed;
  function start() {
    let pool = key === "all" ? [...examSet].flatMap(k => QUIZ[k] || []) : QUIZ[key] || [];
    if (key === "all" && examMistakes) pool = Object.keys(wrong).map(id => QID[id]).filter(Boolean);
    if (!pool.length) { el.innerHTML = `<div class="result"><p class="big">0</p><p>No missed questions to practise. Pick lectures above instead.</p></div>`; return; }
    qs = shuffle(pool).slice(0, key === "all" ? 25 : pool.length); i = 0; score = 0; missed = []; show();
  }
  el.restart = start;
  function show() {
    if (i >= qs.length) {
      const pct = Math.round(score / qs.length * 100);
      const best = store.get("best", {}); const prev = Number(best[key]) || 0; best[key] = Math.max(prev, pct); store.set("best", best);
      el.innerHTML = `<div class="result"><p class="big">${pct}%</p><p>${score} of ${qs.length} correct · best ${best[key]}%</p>
        <p>${pct >= 80 ? "Exam ready on this set." : pct >= 50 ? "Solid start. Go through the misses below, then retry." : "Reread the chapters and their margin notes, then retry."}</p>
        <div class="row" style="justify-content:center"><button class="btn" data-again>${icon("rotate")} Try again</button>${missed.length ? `<button class="btn ghost" data-redo>Retry the ${missed.length} I missed</button>` : ""}</div></div>
        ${missed.length ? `<div class="mistakes"><h3>What you missed</h3>${missed.map(q => `<div class="mk"><b>${q.q}</b><span>${q.o[q.a]}</span><small>${q.why}</small></div>`).join("")}</div>` : ""}`;
      $("[data-again]", el).onclick = start;
      if (missed.length) $("[data-redo]", el).onclick = () => { qs = shuffle(missed); i = 0; score = 0; missed = []; show(); };
      return;
    }
    const q = qs[i], order = shuffle(q.o.map((t, k) => ({ t, k })));
    const L = LECTURES.find(l => l.id === q.l);
    el.innerHTML = `<div class="qtop"><span>Question ${i + 1} of ${qs.length}${key === "all" ? ` · Lecture ${L.n}` : ""}</span><span>Score ${score}</span></div>
      <div class="meter"><i style="width:${i / qs.length * 100}%"></i></div>
      <p class="q">${q.q}</p><div class="ans" role="group" aria-label="Answers"></div><div class="why" hidden aria-live="polite"></div>
      <div class="row" style="margin-top:14px"><button class="btn" disabled data-next>Next question ${icon("arrow")}</button></div>`;
    const ans = $(".ans", el);
    order.forEach(({ t, k }, n) => {
      const b = document.createElement("button"); b.type = "button"; b.innerHTML = `<kbd>${n + 1}</kbd><span>${t}</span>`;
      b.onclick = () => {
        $$("button", ans).forEach(x => x.disabled = true);
        const ok = k === q.a; touch();
        if (ok) { score++; delete wrong[q.id]; } else { missed.push(q); wrong[q.id] = 1; }
        store.set("wrong", wrong); paintMistakes();
        b.classList.add(ok ? "right" : "wrong");
        $$("button", ans)[order.findIndex(o => o.k === q.a)].classList.add("right");
        const w = $(".why", el); w.hidden = false; w.innerHTML = `<b>${ok ? "Correct." : "Not quite."}</b> ${q.why}`;
        const nx = $("[data-next]", el); nx.disabled = false; nx.focus();
      };
      ans.appendChild(b);
    });
    $("[data-next]", el).onclick = () => { i++; show(); const f = $(".ans button", el); if (f) f.focus({ preventScroll: true }); };
  }
  start();
}
$("#examPick").innerHTML = `<button class="chip" data-pick="all" aria-pressed="true">All lectures</button><button class="chip" data-pick="mist" id="mistChip" aria-pressed="false"></button>` +
  LECTURES.map(l => `<button class="chip" data-pick="${l.id}" aria-pressed="false" style="--lec: var(--${l.id})">${l.n}. ${l.short}</button>`).join("");
function paintMistakes() { $("#mistChip").textContent = `Questions I missed (${Object.keys(wrong).length})`; }
paintMistakes();
$$("[data-quiz]").forEach(makeQuiz);
$$("#examPick button").forEach(b => b.onclick = () => {
  const k = b.dataset.pick, allB = $('#examPick [data-pick="all"]'), mist = $("#mistChip");
  const press = (x, v) => x.setAttribute("aria-pressed", v);
  if (k === "mist") { examMistakes = !examMistakes; press(mist, examMistakes); }
  else if (k === "all") { examMistakes = false; examSet = new Set(LIDS); $$("#examPick button").forEach(x => press(x, x === allB)); }
  else {
    examMistakes = false; press(mist, false);
    if (allB.getAttribute("aria-pressed") === "true") { examSet.clear(); press(allB, false); }
    const on = b.getAttribute("aria-pressed") !== "true"; press(b, on); on ? examSet.add(k) : examSet.delete(k);
    if (!examSet.size) { examSet = new Set(LIDS); press(allB, true); }
  }
  $('#exam [data-quiz="all"]').restart();
});

/* ---------- flashcards with spaced repetition ---------- */
const INTERVAL = [0, 1, 3, 7, 14, 30];
let srs = store.get("srs", {});
srs = Object.fromEntries(Object.entries(typeof srs === "object" && srs ? srs : {}).filter(([, v]) =>
  v && Number.isInteger(v.box) && v.box >= 0 && v.box <= 5 && /^\d{4}-\d{2}-\d{2}$/.test(v.due)));
const ALL_CARDS = Object.entries(CARDS).flatMap(([l, cs]) => cs.map((c, i) => ({ id: l + ":" + i, l, f: c[0], b: c[1] })));
const isDue = c => srs[c.id] && srs[c.id].due <= today();
const dueCount = () => ALL_CARDS.filter(isDue).length;
function rate(c, know) {
  const box = know ? Math.min((srs[c.id] ? srs[c.id].box : 0) + 1, 5) : 0;
  srs[c.id] = { box, due: addDays(today(), INTERVAL[box]) };
  store.set("srs", srs); touch(); paintDue();
}
function paintDue() { const n = dueCount(), b = $("#dueBadge"); b.textContent = n; b.hidden = !n; b.setAttribute("aria-label", `${n} cards due`); }
let reviewScope = "due";
function deckCards(key) {
  if (key !== "review") {
    const cs = ALL_CARDS.filter(c => c.l === key);
    return [...cs.filter(isDue), ...cs.filter(c => !srs[c.id]), ...cs.filter(c => srs[c.id] && !isDue(c))];
  }
  if (reviewScope === "due") return shuffle(ALL_CARDS.filter(isDue));
  if (reviewScope === "new") return ALL_CARDS.filter(c => !srs[c.id]).slice(0, 15);
  return shuffle(ALL_CARDS.filter(c => c.l === reviewScope));
}
const decks = [];
function makeDeck(el) {
  const key = el.dataset.deck;
  let cards = [], i = 0;
  el.reset = () => { cards = deckCards(key); i = 0; show(); };
  function show() {
    if (!cards.length) {
      el.innerHTML = key === "review" && reviewScope === "due"
        ? `<div class="result card" style="padding:26px"><p class="big">0</p><p>No cards due right now. Come back tomorrow, or start on new cards.</p><button class="btn" data-new>Learn 15 new cards</button></div>`
        : `<div class="result card" style="padding:26px"><p>Session finished. Rated cards will return when they're due.</p><button class="btn" data-re>${icon("rotate")} Go again</button></div>`;
      const n = $("[data-new]", el); if (n) n.onclick = () => setScope("new");
      const r = $("[data-re]", el); if (r) r.onclick = () => el.reset();
      return;
    }
    i = (i + cards.length) % cards.length;
    const c = cards[i], st = srs[c.id], L = LECTURES.find(l => l.id === c.l);
    const tag = !st ? `<span class="tag new">New</span>` : isDue(c) ? `<span class="tag due">Due</span>` : `<span class="tag">Next ${st.due}</span>`;
    el.innerHTML = `<div class="deck-top"><span>${key === "review" ? `Lecture ${L.n} · ` : ""}Card ${i + 1} of ${cards.length}</span>${tag}</div>
      <button class="flip" type="button" aria-pressed="false" aria-label="Flashcard. Press to flip">
        <span class="inner"><span class="face front" style="--lec: var(--${c.l})"><b>${c.f}</b><small>Tap or press Space to flip</small></span>
        <span class="face back">${c.b}</span></span></button>
      <div class="deck-ctrl"><button class="btn ghost" data-a="prev" aria-label="Previous card">${icon("left")}</button>
        <span class="mid"><button class="btn again" data-a="again">Again <kbd>A</kbd></button><button class="btn know" data-a="know">${icon("check")} Got it <kbd>K</kbd></button></span>
        <button class="btn ghost" data-a="next" aria-label="Next card">${icon("right")}</button></div>`;
    const card = $(".flip", el);
    card.onclick = () => card.setAttribute("aria-pressed", card.getAttribute("aria-pressed") !== "true");
    $$("[data-a]", el).forEach(b => b.onclick = () => act(b.dataset.a));
  }
  function act(a) {
    if (!cards.length) return;
    const c = cards[i];
    if (a === "next") i++;
    if (a === "prev") i--;
    if (a === "know") { rate(c, true); cards.splice(i, 1); }
    if (a === "again") { rate(c, false); cards.splice(i, 1); cards.push(c); }
    show(); paintBoxes();
  }
  el.act = act; decks.push(el); el.reset();
}
$$("[data-deck]").forEach(makeDeck);
function setScope(k) {
  reviewScope = k;
  $$("#reviewPick button").forEach(b => b.setAttribute("aria-pressed", b.dataset.rs === k));
  $('[data-deck="review"]').reset();
}
$("#reviewPick").innerHTML = `<button class="chip" data-rs="due" aria-pressed="true">Due today</button><button class="chip" data-rs="new" aria-pressed="false">15 new cards</button>` +
  LECTURES.map(l => `<button class="chip" data-rs="${l.id}" aria-pressed="false" style="--lec: var(--${l.id})">Lecture ${l.n}</button>`).join("");
$$("#reviewPick button").forEach(b => b.onclick = () => setScope(b.dataset.rs));
function paintBoxes() {
  const cnt = [0, 0, 0, 0, 0, 0]; let fresh = 0;
  ALL_CARDS.forEach(c => srs[c.id] ? cnt[srs[c.id].box]++ : fresh++);
  $("#srsBoxes").innerHTML = `<div class="bx"><b>${fresh}</b><small>not seen</small></div>` +
    cnt.map((n, b) => `<div class="bx"><b>${n}</b><small>${b ? "every " + INTERVAL[b] + "d" : "today"}</small></div>`).join("");
}
paintBoxes(); paintDue();

/* ---------- home dashboard ---------- */
function renderDash() {
  const last = document.getElementById(store.get("last", "") || "");
  const lastL = last && last.classList.contains("chapter") && LECTURES.find(l => l.id === last.closest(".lecture").id);
  const b = Number((store.get("best", {}) || {}).all), best = Number.isFinite(b) ? Math.round(b) : null;
  const got = Object.values(done).filter(Boolean).length, all = $$(".chapter").length, s = streak(), due = dueCount();
  $("#dash").innerHTML = `
    ${lastL ? `<a class="continue card" href="#${last.id}" style="--lec: var(--${lastL.id})"><small>Pick up where you left off</small><b>${lastL.n}. ${lastL.title}</b><span>${esc(last.querySelector("h2").textContent)} ${icon("arrow")}</span></a>`
      : `<a class="continue card" href="#l01" style="--lec: var(--l01)"><small>Start here</small><b>1. Innovation</b><span>Begin with chapter 1 ${icon("arrow")}</span></a>`}
    <div class="stat card">${icon("flame")}<b>${s}</b><small>day streak</small></div>
    <div class="stat card">${icon("check")}<b>${got}</b><small>of ${all} chapters</small></div>
    <a class="stat card" href="#review">${icon("cards")}<b>${due}</b><small>cards due</small></a>
    <a class="stat card" href="#exam">${icon("target")}<b>${best != null ? best + "%" : "–"}</b><small>best exam score</small></a>`;
}

/* ---------- revision sheet tabs ---------- */
$$("#sheetTabs button").forEach(b => b.onclick = () => {
  $$("#sheetTabs button").forEach(x => x.setAttribute("aria-selected", x === b));
  const k = b.dataset.st, alt = $("#sheetAlt");
  $("#sheet-grid").hidden = k !== "sheet"; alt.hidden = k === "sheet";
  if (k === "sheet") return;
  alt.innerHTML = LECTURES.map(L => {
    const notes = $$(`#${L.id} .note-${k}`);
    return notes.length ? `<section class="hook-group" style="--lec: var(--${L.id})"><h3>${L.n}. ${L.title}</h3>${notes.map(n => n.outerHTML).join("")}</section>` : "";
  }).join("");
});

/* ---------- scrolling: reading bar, back to top, last chapter seen ---------- */
function onScroll() {
  const h = document.documentElement, onLec = LIDS.includes(($(".page.show") || {}).id);
  $("#readBar").style.width = onLec ? Math.min(100, h.scrollTop / Math.max(1, h.scrollHeight - h.clientHeight) * 100) + "%" : "0";
  $("#toTop").classList.toggle("show", h.scrollTop > 900);
}
window.addEventListener("scroll", onScroll, { passive: true });
$("#toTop").onclick = () => window.scrollTo({ top: 0, behavior: smooth() });
const seen = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) store.set("last", e.target.id); }), { rootMargin: "-35% 0px -60% 0px" });
$$(".chapter").forEach(c => seen.observe(c));

/* ---------- keyboard shortcuts ---------- */
const inView = el => { const r = el.getBoundingClientRect(); return el.offsetParent && r.bottom > 80 && r.top < innerHeight; };
document.addEventListener("keydown", e => {
  if (/INPUT|SELECT|TEXTAREA/.test(e.target.tagName) || e.ctrlKey || e.metaKey || e.altKey) return;
  const deck = decks.find(d => inView(d) && $(".flip", d));
  if (deck) {
    const k = e.key.toLowerCase();
    if (e.code === "Space" && !e.target.closest("button:not(.flip)")) { e.preventDefault(); $(".flip", deck).click(); return; }
    if (k === "k") return deck.act("know");
    if (k === "a") return deck.act("again");
    if (e.key === "ArrowRight" && !e.target.closest('[role="tab"]')) return deck.act("next");
    if (e.key === "ArrowLeft" && !e.target.closest('[role="tab"]')) return deck.act("prev");
  }
  const quiz = $$(".page.show [data-quiz]").find(inView);
  if (!quiz) return;
  if (/^[1-4]$/.test(e.key)) { const b = $$(".ans button", quiz)[+e.key - 1]; if (b && !b.disabled) b.click(); }
});

/* ---------- lecture-specific widgets ---------- */
INITS.forEach(fn => { try { fn(); } catch (err) { console.error(err); } });

$("#year").textContent = new Date().getFullYear();
updateProgress();
route();
