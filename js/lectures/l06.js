// Lecture 6 — Entrepreneur and Entrepreneurship
addLecture({
  id: "l06",
  intro: "Who an entrepreneur is, the risks they manage, the qualities they share, why people choose this path, and the skills an innovative entrepreneur needs.",
  body:
  chapter("l06-who", "Who is an entrepreneur?", `
    <p class="def-line">"Entrepreneurship is <mark>the pursuit of opportunity beyond resources controlled</mark>." <span class="hint">— Professor Howard Stevenson</span></p>
    <p>Each part of that sentence means something. Step through it:</p>
    ${stepper([
      ["Pursuit", "Part 1", `<p>Implies a <b>singular, relentless focus</b>.</p><ul><li>Entrepreneurs often see a short window of opportunity.</li><li>They must show tangible progress to attract resources, while time eats into limited cash.</li></ul>`],
      ["Opportunity", "Part 2", `<p>An offering that is <b>novel</b> in one or more of four ways (not mutually exclusive):</p>
        <ol><li>Pioneering a truly innovative product</li><li>Devising a new business model</li><li>Creating a better or cheaper version of an existing product</li><li>Targeting an existing product to new sets of customers</li></ol>`],
      ["Beyond resources controlled", "Part 3", `<p>Implies <b>resource constraints</b>. At first, founders control only their own human, social and financial capital.</p>
        <ul><li>Many <b>bootstrap</b>: keep spending to a minimum, investing only their own time and money. Sometimes this is enough to reach self-sustaining cash flow.</li>
        <li>Most high-potential ventures must mobilise <b>more resources than they control</b>: facilities, distribution channels, working capital.</li></ul>`],
    ])}
    ${note("def", "<b>Bootstrapping</b>: running a new venture on minimal spending and the founders' own time and money.")}
    ${note("hook", "Four opportunity types = <b>New product, New model, Better/cheaper, New customers</b>. \"<b>P-M-B-C</b>: <b>P</b>izza <b>M</b>akes <b>B</b>etter <b>C</b>ustomers.\"")}
    <h3>Simple definitions</h3>
    <div class="grid2">
      <div class="tile accent"><h4>Entrepreneur</h4><p>Someone who perceives an opportunity and creates an organization to pursue it. A person who <b>organizes, operates and assumes the risk</b> of a business venture.</p></div>
      <div class="tile accent"><h4>Entrepreneurship</h4><p>The <b>process of action</b> an entrepreneur undertakes to establish their enterprise. The entrepreneur is a business leader; the functions they perform are entrepreneurship.</p></div>
    </div>
    ${note("trap", "Entrepreneur = the <b>person</b>. Entrepreneurship = the <b>process</b>.")}
  `) +
  chapter("l06-risk", "Four risks every entrepreneur faces", `
    <div class="grid2">
      <div class="tile accent"><h4>Demand risk</h4><p>Will prospective customers <b>adopt</b> the solution?</p></div>
      <div class="tile accent"><h4>Technology risk</h4><p>High when <b>engineering or scientific breakthroughs</b> are needed.</p></div>
      <div class="tile accent"><h4>Execution risk</h4><p>Can the entrepreneur attract <b>employees and partners</b> to implement the plan?</p></div>
      <div class="tile accent"><h4>Financing risk</h4><p>Will <b>external capital</b> be available on reasonable terms?</p></div>
    </div>
    <p>The entrepreneur's task is to <b>manage this uncertainty</b>, while recognising that some risks can't be influenced.</p>
    ${note("hook", "<b>D-T-E-F</b>: \"<b>D</b>on't <b>T</b>rust <b>E</b>very <b>F</b>orecast.\" Demand, Technology, Execution, Financing.")}
    ${game("l06")}
  `) +
  chapter("l06-traits", "Characteristics of an entrepreneur", `
    <p>An entrepreneur is a highly <b>achievement-oriented, enthusiastic and energetic</b> person who:</p>
    <ol>
      <li>Is action-oriented, highly motivated and takes risks to achieve goals.</li>
      <li>Has unwavering determination and commitment; is creative and result-oriented; works hard for personal and financial rewards.</li>
      <li>Accepts responsibility with enthusiasm and endurance.</li>
      <li>Is self-confident and dedicated, setting self-determined goals.</li>
      <li>Is both a thinker and a doer, a planner and a worker.</li>
      <li>Can foresee the future, with a salesperson's persuasiveness, financial talent and an auditor's precision.</li>
      <li>Depends on intelligence, imagination and strength of purpose.</li>
    </ol>
    <h3>Which qualities can be developed?</h3>
    <p>Choose a column to highlight which qualities have that property.</p>
    <div class="chips" id="l06cols" role="group" aria-label="Highlight a property"></div>
    <div class="tbl-wrap wide" id="l06tbl"></div>
    ${note("trap", "<b>Imagination</b> is the only quality marked essential and rare but <b>not</b> capable of development. <b>Delegation</b> and <b>organizational skills</b> are not marked essential.")}
  `) +
  chapter("l06-why", "Why become an entrepreneur?", `
    <h3>Wage employment vs entrepreneurial employment</h3>
    ${table(["", "Wage employment", "Entrepreneurial employment"], [
      ["Nature", "Self-satiating", "Self-generating"],
      ["Scope", "Limited", "Unlimited"],
      ["Orientation", "Routine, status quo, problem-avoiding, dependent", "Creative, innovative, problem-solving, independent decisions"],
      ["Contribution", "Consumes national wealth", "Generates national wealth"],
      ["Earning", "Fixed (subsistence)", "Growing (generating surplus)"],
    ], "wide")}
    ${note("hook", "Wage = <b>consume</b> and <b>maintain</b>. Entrepreneurial = <b>create</b> and <b>grow</b>.")}
    <h3>Advantages of being an entrepreneur</h3>
    <p class="wide" style="line-height:2.1">
      ${[["Independence", 1.6], ["Achievement", 1.45], ["Satisfaction", 1.3], ["Confidence", 1.3], ["Recognition", 1.15], ["Learning", 1.15], ["Freedom", 1.05], ["Financial independence", 1], ["Personal growth", 1], ["Personal satisfaction", .95], ["Respect", .9], ["Network", .9], ["Creativity", .9], ["Flexible time", .85], ["Work-life balance", .85], ["Customer satisfaction", .85], ["Providing employment", .85], ["Be my own boss", .85]]
        .map(([w, s]) => `<span style="font:800 ${s}rem var(--display);margin-right:.7em;color:${s > 1.2 ? "var(--lec)" : "var(--ink-2)"}">${w}</span>`).join("")}
    </p>
  `) +
  chapter("l06-skills", "Skills of an innovative entrepreneur", `
    ${flips([
      ["Basic financial skills", "Budgeting and financial statement analysis. A reasonable budget you stick to can decide success or failure."],
      ["Networking", "Meet like-minded people, build your future team and track your industry. Includes co-workers, clients, industry leaders, friends and family."],
      ["Accepting feedback", "Stay humble: your idea of the perfect product may not resonate with customers. Act on feedback."],
      ["Pattern recognition", "Spot patterns in data, market trends and user behaviour, such as seasonality in sales or cash flow."],
      ["Strategic thinking", "Critical thinking for complex problems and planning: analytical, communication, problem-solving and management skills."],
      ["Negotiation", "With investors, early employees and partners."],
      ["Growth mindset", "Intelligence and talent can be learned and improved, unlike a fixed mindset that sees them as unchangeable."],
    ])}
    ${note("hook", "<b>F-N-F-P-S-N-G</b>: \"<b>F</b>ounders <b>N</b>eed <b>F</b>eedback, <b>P</b>atterns, <b>S</b>trategy, <b>N</b>egotiation and <b>G</b>rowth.\"")}
  `),
  cheat: [
    "Stevenson: pursuit of opportunity beyond resources controlled",
    "Pursuit = relentless focus · Opportunity = new product, new business model, better/cheaper, new customers · Beyond resources = constraints, bootstrapping",
    "Entrepreneur: perceives opportunity, organizes, operates, assumes risk · Entrepreneurship: the process",
    "Four risks: demand, technology, execution, financing",
    "Traits: achievement-oriented, action, determination, responsibility, confidence, thinker & doer, foresight",
    "Wage vs entrepreneurial: self-satiating vs self-generating, limited vs unlimited, consumes vs generates national wealth, fixed vs growing earnings",
    "Skills: financial, networking, feedback, pattern recognition, strategic thinking, negotiation, growth mindset",
  ],
});

GAMES.l06 = { opts: ["Demand", "Technology", "Execution", "Financing"], items: [
  { q: "Nobody is sure customers will switch from their current app.", a: "Demand", why: "Willingness of customers to adopt." },
  { q: "The product only works if a new battery chemistry is perfected.", a: "Technology", why: "Needs a scientific breakthrough." },
  { q: "The founder can't hire experienced engineers to build it.", a: "Execution", why: "Attracting employees and partners." },
  { q: "Banks are only lending at very high interest rates this year.", a: "Financing", why: "External capital on reasonable terms." },
  { q: "Distribution partners are refusing to sign contracts.", a: "Execution", why: "Partners who implement the plan." },
  { q: "A survey shows few people would pay for the service.", a: "Demand", why: "Customer adoption." },
]};

QUIZ.l06 = [
  { q: "Howard Stevenson defines entrepreneurship as…", o: ["Running a family business", "The pursuit of opportunity beyond resources controlled", "Inventing new technology", "Working for a large company"], a: 1, why: "Stevenson's definition." },
  { q: "In Stevenson's definition, \"pursuit\" implies…", o: ["Casual interest", "A singular, relentless focus", "Avoiding risk", "Waiting for funding"], a: 1, why: "Relentless focus." },
  { q: "Which is NOT one of the four opportunity types?", o: ["A truly innovative product", "A new business model", "A better or cheaper existing product", "A government job"], a: 3, why: "The four: innovative product, new business model, better/cheaper, new customers." },
  { q: "Keeping expenses minimal and using only your own time and money is called…", o: ["Bootstrapping", "Licensing", "Franchising", "Leveraging"], a: 0, why: "Bootstrapping." },
  { q: "Risk that customers won't adopt the solution is…", o: ["Execution risk", "Demand risk", "Financing risk", "Technology risk"], a: 1, why: "Demand risk." },
  { q: "Risk around attracting employees and partners is…", o: ["Execution risk", "Technology risk", "Demand risk", "Financing risk"], a: 0, why: "Execution risk." },
  { q: "Entrepreneurship refers to…", o: ["The person", "The process of action an entrepreneur takes to establish an enterprise", "A type of loan", "A legal structure"], a: 1, why: "Entrepreneur = person; entrepreneurship = process." },
  { q: "An entrepreneur organizes, operates and…", o: ["Avoids all risk", "Assumes the risk of a business venture", "Works only for wages", "Waits for instructions"], a: 1, why: "Assumes the risk." },
  { q: "Which quality is essential and rare but NOT capable of development?", o: ["Communication", "Imagination", "Networking skills", "Analytical ability"], a: 1, why: "Imagination." },
  { q: "Entrepreneurial employment is described as…", o: ["Self-satiating", "Self-generating", "Limited in scope", "Fixed earnings"], a: 1, why: "Self-generating, unlimited, generates national wealth." },
  { q: "Wage employment…", o: ["Generates national wealth", "Consumes national wealth", "Has unlimited scope", "Is problem-solving"], a: 1, why: "Consumes national wealth." },
  { q: "Viewing intelligence and talents as learnable is a…", o: ["Fixed mindset", "Growth mindset", "Wage mindset", "Risk mindset"], a: 1, why: "Growth mindset." },
  { q: "Spotting seasonality in cash flow statements is…", o: ["Pattern recognition", "Negotiation", "Networking", "Bootstrapping"], a: 0, why: "Pattern recognition." },
];

CARDS.l06 = [
  ["Stevenson's definition", "Entrepreneurship is the pursuit of opportunity beyond resources controlled"],
  ["\"Pursuit\" means", "A singular, relentless focus; short windows; show progress before cash runs out"],
  ["Four opportunity types", "Innovative product, new business model, better/cheaper version, existing product to new customers"],
  ["\"Beyond resources controlled\"", "Resource constraints: founders control only their own capital; often bootstrap, then mobilise more"],
  ["Bootstrapping", "Minimal spending, investing only the founders' own time and money"],
  ["Four entrepreneurial risks", "Demand, technology, execution, financing"],
  ["Entrepreneur vs entrepreneurship", "Entrepreneur: person who organizes, operates and assumes risk. Entrepreneurship: the process of action"],
  ["Wage vs entrepreneurial employment", "Self-satiating vs self-generating; limited vs unlimited; consumes vs generates national wealth; fixed vs growing earnings"],
  ["Quality not capable of development", "Imagination (essential, rare, difficult to screen for)"],
  ["Skills of an innovative entrepreneur", "Financial skills, networking, accepting feedback, pattern recognition, strategic thinking, negotiation, growth mindset"],
  ["Growth mindset", "Intelligence, abilities and talents are learnable and improvable"],
];

INITS.push(function l06() {
  const cols = ["Essential", "Rare", "Difficult to screen for", "Observable over time", "Capable of development"];
  const rows = [
    ["Foresight", "11111"], ["Imagination", "11100"], ["Communication", "10011"], ["Self-knowledge", "10111"], ["Autonomy", "11111"],
    ["Search skills", "10111"], ["Analytical ability", "11011"], ["Networking skills", "10011"], ["Manage risk", "10011"],
    ["Delegation", "01111"], ["Organizational skills", "01111"], ["Industry knowledge / expertise", "10011"],
  ];
  const wrap = document.getElementById("l06tbl"), chips = document.getElementById("l06cols");
  let sel = -1;
  function draw() {
    wrap.innerHTML = `<table><thead><tr><th scope="col">Quality</th>${cols.map((c, i) => `<th scope="col"${i === sel ? ' style="color:var(--lec)"' : ""}>${c}</th>`).join("")}</tr></thead><tbody>` +
      rows.map(([q, m]) => {
        const hit = sel >= 0 && m[sel] === "1";
        return `<tr${hit ? ' style="background:color-mix(in srgb, var(--lec) 12%, transparent)"' : ""}><th scope="row" class="rh">${q}</th>${[...m].map(v => `<td class="y">${v === "1" ? '<span aria-label="yes">✓</span>' : '<span class="hint" aria-label="no">·</span>'}</td>`).join("")}</tr>`;
      }).join("") + "</tbody></table>";
  }
  chips.innerHTML = cols.map((c, i) => `<button class="chip" type="button" aria-pressed="false" data-c="${i}">${c}</button>`).join("");
  chips.querySelectorAll("button").forEach(b => b.onclick = () => {
    sel = sel === +b.dataset.c ? -1 : +b.dataset.c;
    chips.querySelectorAll("button").forEach(x => x.setAttribute("aria-pressed", +x.dataset.c === sel));
    draw();
  });
  draw();
});
