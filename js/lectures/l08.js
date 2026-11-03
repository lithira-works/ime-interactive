// Lecture 8 — Business Model
addLecture({
  id: "l08",
  intro: "Three one-page tools for designing a business: the value proposition canvas, the business model canvas, and the lean canvas. Plus why you should love the problem, not your solution.",
  body:
  chapter("l08-vpc", "Value proposition canvas", `
    <p>The <mark>value proposition canvas</mark> helps you:</p>
    <ul>
      <li>Understand the customer, their needs and expectations</li>
      <li>Develop a product that matches what customers need and want</li>
      <li>Compare a product you already have with the user's needs</li>
      <li>Find your <b>product-market fit</b></li>
      <li>Avoid producing something nobody wants</li>
    </ul>
    <p>It has two sides that must match. Select each part.</p>
    <figure class="diagram wide">
      <svg viewBox="0 0 700 330" role="group" aria-label="Value proposition canvas"></svg>
      <figcaption id="l08vpcOut" aria-live="polite">Select a part of the canvas.</figcaption>
    </figure>
    ${note("hook", "Left square = <b>what you make</b>. Right circle = <b>who you serve</b>. Pain relievers answer pains; gain creators answer gains. When they line up, you have <b>fit</b>.")}
  `) +
  chapter("l08-bmc", "Business model canvas", `
    <p>A <mark>business model</mark> describes the rationale of how an organization <b>creates, delivers and captures value</b>. It is made of <b>nine building blocks</b>, laid out as the business model canvas. Select a block to see the question it answers.</p>
    <div class="row wide" style="margin-bottom:10px"><button class="chip" type="button" id="l08mode" aria-pressed="false">Fill in my own idea</button><button class="chip" type="button" id="l08clear" hidden>Clear my canvas</button></div>
    <div class="canvas-grid wide" id="l08bmc"></div>
    <div class="panel wide" id="l08bmcOut" aria-live="polite">Select a block.</div>
    ${note("hook", "Read it like a story, right to left: <b>who</b> (segments) wants <b>what</b> (value proposition), reached <b>how</b> (channels, relationships), paying <b>what</b> (revenue). Then the left side: what it takes (resources, activities, partners) and what it costs.")}
    ${note("trap", "Key partners, key activities and key resources are on the <b>left</b> (the company's side). Customer relationships, channels and segments are on the <b>right</b> (the customer's side).")}
  `) +
  chapter("l08-lean", "Lean canvas", `
    <p>The <mark>lean canvas</mark> adapts the business model canvas for startups. Four blocks are replaced, and it is filled in a set order (the numbers).</p>
    <div class="canvas-grid wide" id="l08lean"></div>
    <div class="panel wide" id="l08leanOut" aria-live="polite">Select a block.</div>
    ${table(["Business model canvas block", "Replaced in the lean canvas by"], [
      ["Key partners", "Problem"], ["Key activities", "Solution"], ["Key resources", "Key metrics"], ["Customer relationships", "Unfair advantage"],
    ])}
    ${note("hook", "Fill order: <b>Customers first, then problem</b>, then the promise (UVP), then the fix (solution). Money comes next (channels, revenue, cost), proof after that (metrics), and the moat last (unfair advantage).")}
    ${note("trap", "An <b>unfair advantage</b> is something that can't easily be copied or bought, such as insider information or a strong community.")}
  `) +
  chapter("l08-love", "Love your problem, not your solution", `
    <p>The slides show an old wristwatch next to a smartphone with the question <b>"Do you go back?"</b> People needed to know the time; the watch was one solution and the phone replaced it. The <b>problem stayed; the solution changed</b>.</p>
    ${note("hook", "\"Love your problem.\" If you love your solution, you'll defend it when customers move on. If you love the problem, you'll keep finding better answers.")}
    <h3>Google Glass</h3>
    <p>Google Glass was a head-mounted augmented-reality computer sold to early adopters for about $1,500. It had bone-conduction audio, a camera, a prism display and voice commands. It was technically impressive (<b>feasible</b>) and backed by Google (<b>viable</b>), but people didn't want to wear it in daily life, and others were uncomfortable around it. It failed the <b>desirability</b> test.</p>
    <h3>Desirability, feasibility and viability, again</h3>
    <p>The innovation process diagram links each test to a field: <b>human values</b> (psychology, sociology, need-finding) give desirability; <b>technology</b> (engineering, materials, programming) gives feasibility; <b>business</b> (finance, marketing, operations, strategy) gives viability.</p>
    ${ask("Why did Google Glass fail, in sweet-spot terms?", "It was feasible and viable but not desirable: it didn't solve a pain point people felt strongly enough to wear it.")}
  `) +
  chapter("l08-factory", "Customer factory and traction", `
    <p>Every business shares one goal: <b>making happy customers</b>. The <mark>customer factory model</mark> shows how visitors become paying, returning, recommending customers. Select each stage.</p>
    <figure class="diagram wide">
      <svg viewBox="0 0 720 240" role="group" aria-label="Customer factory model"></svg>
      <figcaption id="l08cfOut" aria-live="polite">Select a stage.</figcaption>
    </figure>
    ${note("hook", "<b>A-A-R-R-R</b>, said as \"pirate metrics\": Acquisition, Activation, Retention, Revenue, Referral.")}
    <h3>Traction modelling</h3>
    <p>A traction model plots expected customers over time against a <b>minimum success criterion</b>, for example $10M revenue within 3 years. Growth follows a hockey stick through three milestones:</p>
    <figure class="diagram wide">
      <svg viewBox="0 0 640 260" role="img" aria-label="Traction model hockey-stick curve">
        <line x1="50" y1="220" x2="620" y2="220" style="stroke:var(--line)" stroke-width="2"></line>
        <line x1="50" y1="20" x2="50" y2="220" style="stroke:var(--line)" stroke-width="2"></line>
        <line x1="50" y1="40" x2="620" y2="40" style="stroke:var(--coral)" stroke-width="2" stroke-dasharray="6 5"></line>
        <text x="60" y="34" font-size="12" style="fill:var(--coral)">Minimum success criteria (e.g. $10M revenue in 3 years)</text>
        <path d="M50 218 C250 215 380 205 460 170 S 570 90 600 45" fill="none" style="stroke:var(--lec)" stroke-width="4"></path>
        ${[["Problem/solution fit", 120, 216, "3 months"], ["Product/market fit", 380, 196, "12 months"], ["Scale", 600, 45, "36 months"]].map(([t, x, y, m]) => `<circle cx="${x}" cy="${y}" r="7" style="fill:var(--lec)"></circle><text x="${x}" y="${y - 14}" text-anchor="middle" font-size="12" font-weight="700">${t}</text><text x="${x}" y="240" text-anchor="middle" font-size="11" class="soft">${m}</text>`).join("")}
        <text x="20" y="130" font-size="11" class="soft" transform="rotate(-90 20 130)">Customers</text>
      </svg>
      <figcaption>A 10× growth model: problem/solution fit, then product/market fit, then scale.</figcaption>
    </figure>
    <h3>The lean stack in 10 steps</h3>
    <ol>
      <li>Idea</li><li>Existing solutions</li><li>Problem <span class="hint">(validate 1: problem-solution fit)</span></li><li>Solution</li><li>Market size</li>
      <li>Revenue <span class="hint">(validate 2)</span></li><li>3-year growth plan and 10× traction model</li><li>MVP product, tested with the customer <span class="hint">(validate 3)</span></li>
      <li>Risky assumptions, checked against desirability, feasibility and viability</li><li>Define an experimentation plan for validations</li>
    </ol>
    ${note("def", "<b>MVP</b> (minimum viable product): the simplest version you can put in front of customers to learn whether the idea works.")}
  `),
  cheat: [
    "Value proposition canvas: value map (products & services, pain relievers, gain creators) ↔ customer profile (jobs, pains, gains) → product-market fit",
    "Business model: how an organization creates, delivers and captures value · nine blocks",
    "BMC blocks: customer segments, value propositions, channels, customer relationships, revenue streams, key resources, key activities, key partners, cost structure",
    "Lean canvas: problem, solution, key metrics, unfair advantage replace partners, activities, resources, relationships",
    "Lean fill order: segments, problem, UVP, solution, channels, revenue, cost, key metrics, unfair advantage",
    "Love your problem (watch → phone) · Google Glass failed desirability",
    "Customer factory: acquisition, activation, retention, revenue, referral · Traction: problem/solution fit → product/market fit → scale",
  ],
});

QUIZ.l08 = [
  { q: "A business model describes how an organization…", o: ["Hires staff", "Creates, delivers and captures value", "Files taxes", "Designs a logo"], a: 1, why: "Creates, delivers and captures value." },
  { q: "How many building blocks are in the business model canvas?", o: ["Five", "Seven", "Nine", "Twelve"], a: 2, why: "Nine basic building blocks." },
  { q: "\"For whom are we creating value?\" is the question for…", o: ["Value propositions", "Customer segments", "Key partners", "Channels"], a: 1, why: "Customer segments." },
  { q: "\"Through which channels do customers want to be reached?\" belongs to…", o: ["Channels", "Revenue streams", "Key activities", "Cost structure"], a: 0, why: "Channels." },
  { q: "Which BMC block sits on the company (left) side?", o: ["Customer segments", "Channels", "Key resources", "Customer relationships"], a: 2, why: "Key partners, activities and resources are on the left." },
  { q: "The value proposition canvas helps you find…", o: ["Product-market fit", "A bank loan", "A patent", "A tax rate"], a: 0, why: "Finding your product-market fit." },
  { q: "In the value proposition canvas, pain relievers address the customer's…", o: ["Gains", "Pains", "Jobs", "Channels"], a: 1, why: "Pain relievers ↔ pains; gain creators ↔ gains." },
  { q: "In the lean canvas, \"Key partners\" is replaced by…", o: ["Solution", "Problem", "Key metrics", "Unfair advantage"], a: 1, why: "Key partners → Problem." },
  { q: "\"Customer relationships\" becomes which lean canvas block?", o: ["Unfair advantage", "Channels", "Solution", "Revenue streams"], a: 0, why: "Customer relationships → Unfair advantage." },
  { q: "What is filled in first on a lean canvas?", o: ["Problem", "Customer segments", "Solution", "Revenue streams"], a: 1, why: "1 customer segments, 2 problem, 3 UVP…" },
  { q: "Google Glass mainly failed which test?", o: ["Feasibility", "Viability", "Desirability", "Legality"], a: 2, why: "People didn't want to wear it." },
  { q: "\"Love your problem\" means…", o: ["Never change your product", "Stay focused on the customer's problem, not your particular solution", "Avoid customers", "Ignore competitors"], a: 1, why: "Solutions change; the problem stays." },
  { q: "The customer factory stages are…", o: ["Plan, build, sell", "Acquisition, activation, retention, revenue, referral", "Awareness, interest, purchase", "Idea, MVP, scale"], a: 1, why: "AARRR." },
  { q: "In traction modelling, which milestone comes first?", o: ["Scale", "Product/market fit", "Problem/solution fit", "IPO"], a: 2, why: "Problem/solution fit → product/market fit → scale." },
];

CARDS.l08 = [
  ["Business model", "The rationale of how an organization creates, delivers and captures value"],
  ["Value proposition canvas purpose", "Understand customers, match product to needs, find product-market fit, avoid building what nobody wants"],
  ["Customer profile", "Customer jobs, pains, gains"],
  ["Value map", "Products & services, pain relievers, gain creators"],
  ["Nine BMC blocks", "Customer segments, value propositions, channels, customer relationships, revenue streams, key resources, key activities, key partners, cost structure"],
  ["Key resources question", "What key resources do our value propositions, channels, relationships and revenue streams require?"],
  ["Lean canvas replacements", "Key partners → Problem · Key activities → Solution · Key resources → Key metrics · Customer relationships → Unfair advantage"],
  ["Lean canvas fill order", "Customer segments, problem, UVP, solution, channels, revenue streams, cost structure, key metrics, unfair advantage"],
  ["Unfair advantage", "Something that can't easily be copied or bought"],
  ["Love your problem", "Solutions get replaced (watch → phone); stay attached to the customer's problem"],
  ["Google Glass lesson", "Feasible and viable, but failed desirability"],
  ["Customer factory (AARRR)", "Acquisition, activation, retention, revenue, referral"],
  ["Traction milestones", "Problem/solution fit → product/market fit → scale, against a minimum success criterion"],
];

INITS.push(function l08() {
  // value proposition canvas
  const vsvg = document.querySelector("#l08-vpc svg"), vOut = document.getElementById("l08vpcOut");
  const vparts = [
    ["ps", "Products & services", "What you offer: the list of products and services your value proposition is built around.", "M60 70 H300 V170 H60 Z", 180, 125],
    ["pr", "Pain relievers", "How your products reduce or remove the customer's pains.", "M60 170 H180 V280 H60 Z", 120, 230],
    ["gc", "Gain creators", "How your products produce the outcomes and benefits customers want.", "M180 170 H300 V280 H180 Z", 240, 230],
    ["jobs", "Customer jobs", "What customers are trying to get done: tasks, problems to solve, needs to satisfy.", "M530 70 A110 105 0 0 1 640 175 H530 Z", 585, 135],
    ["pains", "Pains", "Bad outcomes, risks and obstacles customers face when trying to get the job done.", "M640 175 A110 105 0 0 1 420 175 H530 V280 A110 105 0 0 1 640 175 Z", 590, 225],
    ["gains", "Gains", "Outcomes and benefits customers want or would be surprised by.", "M420 175 A110 105 0 0 1 530 70 V175 Z", 478, 135],
  ];
  vsvg.innerHTML = `<text x="180" y="55" text-anchor="middle" font-weight="700" style="fill:var(--lec)">Value map</text><text x="530" y="55" text-anchor="middle" font-weight="700" style="fill:var(--lec)">Customer profile</text>
    <path d="M320 175 H400" style="stroke:var(--ink-2)" stroke-width="2"></path><path d="M400 185 H320" style="stroke:var(--ink-2)" stroke-width="2"></path>
    <text x="360" y="210" text-anchor="middle" font-size="12" class="soft">fit</text>` +
    vparts.map(([k, t, , d, x, y]) => `<g class="svg-btn" tabindex="0" role="button" data-v="${k}" aria-label="${t}"><path d="${d}" style="fill:var(--sheet-2);stroke:var(--ink-2)" stroke-width="2"></path>
      <text x="${x}" y="${y}" text-anchor="middle" font-size="13" font-weight="700" pointer-events="none">${t}</text></g>`).join("");
  vsvg.querySelectorAll("[data-v]").forEach(g => {
    const pick = () => {
      vsvg.querySelectorAll("[data-v] path").forEach(p => p.style.fill = "var(--sheet-2)");
      g.querySelector("path").style.fill = "color-mix(in srgb, var(--lec) 22%, var(--sheet))";
      const p = vparts.find(x => x[0] === g.dataset.v); vOut.innerHTML = `<b>${p[1]}</b>: ${p[2]}`;
    };
    g.addEventListener("click", pick);
    g.addEventListener("keydown", e => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); pick(); } });
  });

  // canvas builder used by both BMC and lean canvas
  function canvas(el, out, blocks, opts = {}) {
    let fill = false;
    const saved = opts.saveKey ? store.get(opts.saveKey, {}) : {};
    function draw() {
      el.innerHTML = blocks.map(b => {
        const style = `grid-column:${b.c};grid-row:${b.r}`;
        if (fill) return `<label class="cell${b.full ? " full" : ""}" style="${style}"><b>${b.t}</b><textarea data-k="${b.k}" maxlength="400" placeholder="${b.ph || "Type here"}" aria-label="${b.t}"></textarea></label>`;
        return `<button type="button" class="cell${b.full ? " full" : ""}" style="${style}" data-k="${b.k}" aria-pressed="false">${b.n ? `<span class="k">${b.n}</span>` : ""}<b>${b.t}</b><span class="hint">${b.s || ""}</span></button>`;
      }).join("");
      if (fill) {
        el.querySelectorAll("textarea").forEach(t => {
          t.value = typeof saved[t.dataset.k] === "string" ? saved[t.dataset.k] : "";
          t.addEventListener("input", () => { saved[t.dataset.k] = t.value.slice(0, 400); store.set(opts.saveKey, saved); });
        });
        out.innerHTML = "Your notes stay in this browser only. Use the questions from each block as prompts.";
      } else {
        el.querySelectorAll("button.cell").forEach(c => c.onclick = () => {
          el.querySelectorAll("button.cell").forEach(x => x.setAttribute("aria-pressed", x === c));
          const b = blocks.find(x => x.k === c.dataset.k); out.innerHTML = `<h4>${b.n ? b.n + ". " : ""}${b.t}</h4><p>${b.q}</p>`;
        });
      }
    }
    el.setFill = v => { fill = v; draw(); };
    el.clear = () => { Object.keys(saved).forEach(k => delete saved[k]); store.set(opts.saveKey, saved); draw(); };
    draw();
  }

  const bmc = [
    { k: "kp", t: "Key partners", c: "1/3", r: "1/3", q: "Who are our key partners and suppliers? Which key resources do we get from partners? Which key activities do partners perform?" },
    { k: "ka", t: "Key activities", c: "3/5", r: "1/2", q: "What key activities do our value propositions, distribution channels, customer relationships and revenue streams require?" },
    { k: "kr", t: "Key resources", c: "3/5", r: "2/3", q: "What key resources do our value propositions, distribution channels, customer relationships and revenue streams require?" },
    { k: "vp", t: "Value propositions", c: "5/7", r: "1/3", q: "What value do we deliver to the customer? Which of their problems are we helping to solve? Which needs are we satisfying? What bundles of products and services do we offer each segment?" },
    { k: "cr", t: "Customer relationships", c: "7/9", r: "1/2", q: "What type of relationship does each segment expect us to establish and maintain? Which have we established? How costly are they? How do they fit with the rest of the model?" },
    { k: "ch", t: "Channels", c: "7/9", r: "2/3", q: "Through which channels do our segments want to be reached? How are we reaching them now? How are channels integrated? Which work best and are most cost-efficient? How do they fit customer routines?" },
    { k: "cs", t: "Customer segments", c: "9/11", r: "1/3", q: "For whom are we creating value? Who are our most important customers?" },
    { k: "co", t: "Cost structure", c: "1/6", r: "3/4", full: true, q: "What are the most important costs in our business model? Which key resources and activities are most expensive?" },
    { k: "rs", t: "Revenue streams", c: "6/11", r: "3/4", full: true, q: "For what value are customers really willing to pay? What do they pay for now, and how? How would they prefer to pay? How much does each stream contribute to total revenue?" },
  ];
  const bmcEl = document.getElementById("l08bmc"), bmcOut = document.getElementById("l08bmcOut");
  canvas(bmcEl, bmcOut, bmc, { saveKey: "bmc" });
  const mode = document.getElementById("l08mode"), clear = document.getElementById("l08clear");
  mode.onclick = () => {
    const on = mode.getAttribute("aria-pressed") !== "true";
    mode.setAttribute("aria-pressed", on); mode.textContent = on ? "Show the guiding questions" : "Fill in my own idea";
    clear.hidden = !on; bmcEl.setFill(on); if (!on) bmcOut.textContent = "Select a block.";
  };
  clear.onclick = () => bmcEl.clear();

  const lean = [
    { k: "pb", n: 2, t: "Problem", s: "Top 3 problems", c: "1/3", r: "1/2", q: "List your customers' top three problems. Below it: existing alternatives, meaning how these problems are solved today." },
    { k: "ea", t: "Existing alternatives", s: "", c: "1/3", r: "2/3", q: "How these problems are solved today." },
    { k: "so", n: 4, t: "Solution", s: "One per problem", c: "3/5", r: "1/2", q: "Outline a possible solution for each problem." },
    { k: "km", n: 8, t: "Key metrics", s: "Numbers that matter", c: "3/5", r: "2/3", q: "List the key numbers that tell you how your business is doing." },
    { k: "uv", n: 3, t: "Unique value proposition", s: "Clear, compelling message", c: "5/7", r: "1/3", q: "A single, clear, compelling message that turns an unaware visitor into an interested prospect. Below it, a high-level concept: \"X for Y\" (e.g. \"YouTube = Flickr for videos\")." },
    { k: "ua", n: 9, t: "Unfair advantage", s: "Can't be copied or bought", c: "7/9", r: "1/2", q: "Something that cannot easily be copied or bought." },
    { k: "cn", n: 5, t: "Channels", s: "Path to customers", c: "7/9", r: "2/3", q: "List your path to customers." },
    { k: "cs", n: 1, t: "Customer segments", s: "Target customers", c: "9/11", r: "1/2", q: "List your target customers and users. Below it: early adopters, the characteristics of your ideal first customer." },
    { k: "ad", t: "Early adopters", s: "", c: "9/11", r: "2/3", q: "List the characteristics of your ideal customer." },
    { k: "co", n: 7, t: "Cost structure", s: "Fixed and variable costs", c: "1/6", r: "3/4", full: true, q: "List your fixed and variable costs." },
    { k: "rs", n: 6, t: "Revenue streams", s: "Sources of revenue", c: "6/11", r: "3/4", full: true, q: "List your sources of revenue." },
  ];
  canvas(document.getElementById("l08lean"), document.getElementById("l08leanOut"), lean);

  // customer factory
  const csvg = document.querySelector("#l08-factory svg"), cOut = document.getElementById("l08cfOut");
  const st = [
    ["Acquisition", 70, 120, "Turn unaware visitors into interested prospects: get people to your site, app or shop."],
    ["Activation", 260, 120, "Turn interested prospects into users with a great first experience (the \"aha\" moment)."],
    ["Revenue", 450, 120, "Users start paying: you make money."],
    ["Retention", 260, 30, "Users keep coming back and keep using the product."],
    ["Referral", 260, 210, "Happy customers bring in new customers."],
  ];
  csvg.innerHTML = `<path d="M115 120 H210 M305 120 H400" style="stroke:var(--ink-2)" stroke-width="2"></path>
    <path d="M260 95 V55 M260 145 V185" style="stroke:var(--ink-2)" stroke-width="2" stroke-dasharray="5 4"></path>
    <path d="M495 120 H620" style="stroke:var(--ink-2)" stroke-width="2"></path><text x="640" y="125" font-weight="700" style="fill:var(--green)">Happy</text><text x="640" y="142" font-weight="700" style="fill:var(--green)">customers</text>` +
    st.map(([t, x, y], i) => `<g class="svg-btn" tabindex="0" role="button" data-s="${i}" aria-label="${t}"><rect x="${x - 50}" y="${y - 22}" width="100" height="44" rx="22" style="fill:var(--sheet);stroke:var(--lec)" stroke-width="2"></rect>
      <text x="${x}" y="${y + 5}" text-anchor="middle" font-size="13" font-weight="700" pointer-events="none">${t}</text></g>`).join("");
  csvg.querySelectorAll("[data-s]").forEach(g => {
    const pick = () => {
      csvg.querySelectorAll("[data-s] rect").forEach(r => r.style.fill = "var(--sheet)");
      g.querySelector("rect").style.fill = "color-mix(in srgb, var(--lec) 22%, var(--sheet))";
      const s = st[g.dataset.s]; cOut.innerHTML = `<b>${s[0]}</b>: ${s[3]}`;
    };
    g.addEventListener("click", pick);
    g.addEventListener("keydown", e => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); pick(); } });
  });
});
