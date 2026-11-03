// Lecture 5 — New Product Development Process
addLecture({
  id: "l05",
  intro: "Three structured tools for building the right product: the stage-gate process, the House of Quality, and the seven steps of product development.",
  body:
  chapter("l05-npd", "New product development", `
    <p class="def-line"><mark>New product development (NPD)</mark> is the complete process of bringing a new product to market, renewing an existing product, or introducing a product to a new market.</p>
    <ul>
      <li>It transforms a <b>market opportunity</b> into a product available for sale.</li>
      <li>The product can be <b>tangible or intangible</b> (a service, an experience, even a belief).</li>
      <li>It requires understanding customer needs and wants, the competitive environment and the market.</li>
      <li><b>Cost, time and quality</b> are the main variables that drive customer needs.</li>
      <li>Innovative companies keep developing new products to satisfy customers and grow market share.</li>
    </ul>
    ${note("hook", "The three drivers of customer needs: <b>C-T-Q</b>, \"<b>C</b>ustomers <b>T</b>rack <b>Q</b>uality\" — cost, time, quality.")}
  `) +
  chapter("l05-stagegate", "The stage-gate process", `
    <p>A <mark>stage-gate process</mark> splits development into <b>stages</b> (where work happens) separated by <b>gates</b> (where managers decide whether to continue).</p>
    <ul>
      <li>Each <b>stage</b> collects specific information to move the project to the next decision point.</li>
      <li>That information <b>reduces technical uncertainty and economic risk</b>.</li>
      <li>Each <b>gate</b> has its own quantitative and qualitative criteria for approving funding into the next stage.</li>
    </ul>
    <figure class="diagram wide">
      <svg viewBox="0 0 760 120" role="img" aria-label="Typical stage-gate flow: discover, scope, design, develop, scale up, launch, with a gate between each">
        ${["Discover", "Scope", "Design", "Develop", "Scale up", "Launch"].map((t, i) => {
          const x = 20 + i * 124;
          return `<rect x="${x}" y="30" width="86" height="50" rx="10" style="fill:color-mix(in srgb, var(--lec) 16%, var(--sheet));stroke:var(--lec)" stroke-width="2"></rect>
            <text x="${x + 43}" y="60" text-anchor="middle" font-size="14" font-weight="700">${t}</text>` +
            (i < 5 ? `<polygon points="${x + 105},40 ${x + 117},55 ${x + 105},70 ${x + 93},55" style="fill:var(--sheet);stroke:var(--ink-2)" stroke-width="2"></polygon><text x="${x + 105}" y="100" text-anchor="middle" font-size="11" class="soft">Gate ${i + 1}</text>` : "");
        }).join("")}
      </svg>
      <figcaption>Stages are boxes; gates are diamonds. Customer and user input continues throughout.</figcaption>
    </figure>
    <h3>The five stages and four gates</h3>
    ${table(["Stage", "What happens", "Gate after it"], [
      ["1. Preliminary investigation and analysis", "Scoping studies to identify research topics; technical and market assessments; idea generation.", "Research project selection"],
      ["2. Concept definition", "Early research to explore and define the technical concept; laboratory-scale research.", "Research approval"],
      ["3. Concept development", "Develop and test prototype technology; models and simulations; prove feasibility at prototype or bench scale.", "Proof of technical feasibility"],
      ["4. Technology development and verification", "Pilot-scale development; verify technical performance and economic potential in field tests.", "Proof of commercial feasibility"],
      ["5. Information dissemination and commercialization", "Commercial launch: production-scale manufacture, installation and market infrastructure.", "—"],
    ], "wide")}
    ${note("hook", "Stages = <b>work</b>, gates = <b>decide</b>. Five stages, four gates between them.")}
    <h3>Try it: you are the gatekeeper</h3>
    <p>A project arrives at a gate. Choose a decision for each situation.</p>
    ${game("l05g")}
    ${note("def", "<b>Go forward</b>: goals met, funding approved. <b>Stop</b>: not progressing, market shifted or tech obsolete. <b>Hold</b>: suspended, re-check later. <b>Return</b>: goals not met but still a priority; redo the previous stage.")}
  `) +
  chapter("l05-hoq", "The House of Quality", `
    <p>The <mark>House of Quality</mark> is the basic design tool of <b>quality function deployment (QFD)</b>. It began in <b>1972 at Mitsubishi's Kobe shipyard</b>.</p>
    <ul>
      <li>Used by Japanese makers of electronics, appliances, clothing, circuits, rubber, construction equipment and engines.</li>
      <li>Also used for services such as swimming schools, retail outlets and even apartment layouts.</li>
      <li>A <b>conceptual map</b> for planning and communication across departments.</li>
    </ul>
    <p>Select each room of the house to see what it holds:</p>
    <figure class="diagram wide">
      <svg viewBox="0 0 640 430" role="group" aria-label="House of Quality diagram"></svg>
      <figcaption id="l05hoqOut" aria-live="polite">Select a room.</figcaption>
    </figure>
    ${note("hook", "Build it like a house: <b>left wall</b> = what customers want, <b>ceiling</b> = how engineers measure it, <b>rooms</b> = how strongly they connect, <b>roof</b> = trade-offs, <b>right wall</b> = competitors, <b>basement</b> = targets.")}
    ${note("trap", "Customer attributes are recorded in the <b>customers' own words</b>. Engineering characteristics must be <b>measurable</b>.")}
    <p>The design of a House of Quality is <b>custom-made</b>: teams can add extra columns to highlight factors that matter for a particular new development.</p>
    <p>The idea extends to <b>four linked houses</b> that carry the voice of the customer all the way through to manufacturing.</p>
  `) +
  chapter("l05-steps", "Design thinking and the seven steps", `
    <p>Design thinking (Lecture 4) is also part of this process: <b>empathize, define, ideate, prototype, test</b>. The lecture closes with seven steps of product development:</p>
    <figure class="diagram wide">
      <svg viewBox="0 0 760 210" role="img" aria-label="Seven steps of the product development process">
        ${["Idea generation", "Idea screening", "Concept development & testing", "Market analysis", "Product development", "Market testing", "Commercialization & launch"].map((t, i) => {
          const row = i < 4 ? 0 : 1, col = row ? i - 4 : i, x = 90 + col * (row ? 200 : 190) + (row ? 60 : 0), y = 55 + row * 110;
          const words = t.split(" "), half = Math.ceil(words.length / 2);
          return `<circle cx="${x}" cy="${y}" r="44" style="fill:color-mix(in srgb, var(--lec) 15%, var(--sheet));stroke:var(--lec)" stroke-width="2"></circle>
            <text x="${x}" y="${y - 22}" text-anchor="middle" font-size="16" font-weight="800" style="fill:var(--lec)">${i + 1}</text>
            <text x="${x}" y="${y}" text-anchor="middle" font-size="11.5" font-weight="700">${words.slice(0, half).join(" ")}</text>
            <text x="${x}" y="${y + 15}" text-anchor="middle" font-size="11.5" font-weight="700">${words.slice(half).join(" ")}</text>`;
        }).join("")}
      </svg>
    </figure>
    ${note("trap", "This is the seven-step version. Lecture 4 has an eight-stage version that adds the feasibility study and technical design. Read the question carefully for which one it wants.")}
    ${ask("Which step comes right after idea screening?", "Concept development and testing.")}
  `),
  cheat: [
    "NPD: bring a new product to market, renew one, or enter a new market · tangible or intangible · cost, time, quality",
    "Stage-gate: stages collect information (reduce technical and economic risk); gates apply criteria to approve funding",
    "5 stages: preliminary investigation, concept definition, concept development, technology development & verification, commercialization",
    "4 gates: research project selection, research approval, proof of technical feasibility, proof of commercial feasibility",
    "Gate decisions: go forward, stop, hold, return",
    "House of Quality: QFD tool, 1972 Mitsubishi Kobe shipyard · customer attributes, importance, competitive comparison, engineering characteristics, relationships, target values, roof",
    "7 steps: idea generation, screening, concept dev & testing, market analysis, product development, market testing, commercialization",
  ],
});

GAMES.l05g = { opts: ["Go forward", "Stop", "Hold", "Return"], items: [
  { q: "All technical and market goals for this stage are met and funding is approved.", a: "Go forward", why: "Goals met: move to the next stage." },
  { q: "The market has shifted and the technology is now obsolete.", a: "Stop", why: "No longer progressing or relevant." },
  { q: "A key partner is undecided; the project should be re-evaluated in three months.", a: "Hold", why: "Suspended for a set period, then re-evaluated." },
  { q: "The prototype missed its targets, but the project is still a high priority.", a: "Return", why: "Redo the previous stage." },
  { q: "Desired technical objectives cannot be met at all.", a: "Stop", why: "Objectives can't be met." },
]};

QUIZ.l05 = [
  { q: "NPD is…", o: ["Only brand-new inventions", "Bringing a new product to market, renewing one, or introducing one to a new market", "Only advertising", "Only manufacturing"], a: 1, why: "All three are part of NPD." },
  { q: "The main variables driving customer needs are…", o: ["Cost, time and quality", "Price, place and promotion", "Size, colour and weight", "Staff, tools and buildings"], a: 0, why: "Cost, time and quality." },
  { q: "In a stage-gate process, information collected in each stage reduces…", o: ["Staff numbers", "Technical uncertainty and economic risk", "Customer needs", "Product quality"], a: 1, why: "Reduce levels of technical uncertainty and economic risk." },
  { q: "What happens at a gate?", o: ["Products are built", "Criteria decide whether to approve the project into the next stage", "Marketing campaigns run", "Customers are interviewed"], a: 1, why: "Gates use quantitative and qualitative criteria." },
  { q: "Which gate follows concept development?", o: ["Research approval", "Proof of technical feasibility", "Proof of commercial feasibility", "Research project selection"], a: 1, why: "Stage 3 → Gate 3: proof of technical feasibility." },
  { q: "Pilot-scale development and field tests happen in…", o: ["Concept definition", "Technology development and verification", "Preliminary investigation", "Commercialization"], a: 1, why: "Stage 4." },
  { q: "A project that missed its goals but is still a priority should…", o: ["Go forward", "Stop", "Hold", "Return"], a: 3, why: "Return to the previous stage." },
  { q: "The House of Quality originated at…", o: ["Toyota, 1980", "Mitsubishi's Kobe shipyard, 1972", "IDEO, 2000", "Xerox PARC, 1970"], a: 1, why: "1972, Mitsubishi Kobe shipyard." },
  { q: "The House of Quality is the basic design tool of…", o: ["Design thinking", "Quality function deployment", "Stage-gate", "Lean canvas"], a: 1, why: "QFD." },
  { q: "Customer attributes are recorded…", o: ["In engineering units", "In the customers' own words", "As prices", "As patents"], a: 1, why: "Customers' own words." },
  { q: "Engineering characteristics must be…", o: ["Measurable", "Secret", "Cheap", "Customer quotes"], a: 0, why: "Describe the product in measurable terms." },
  { q: "The roof of the House of Quality shows…", o: ["Customer importance", "Trade-offs between engineering characteristics", "Competitor prices", "Sales forecasts"], a: 1, why: "The roof matrix shows features to improve together and trade-offs." },
  { q: "Four linked houses carry the voice of the customer through to…", o: ["Marketing", "Manufacturing", "Accounting", "Recruitment"], a: 1, why: "Through to manufacturing." },
  { q: "In the seven steps, what comes after market analysis?", o: ["Idea screening", "Product development", "Commercialization", "Concept testing"], a: 1, why: "Market analysis → product development → market testing → commercialization." },
];

CARDS.l05 = [
  ["New product development", "Bringing a new product to market, renewing one, or introducing one to a new market"],
  ["Drivers of customer needs", "Cost, time and quality"],
  ["Stage vs gate", "Stage: collects information to reduce risk. Gate: criteria to approve funding into the next stage"],
  ["Five stages", "Preliminary investigation, concept definition, concept development, technology development & verification, commercialization"],
  ["Four gates", "Research project selection, research approval, proof of technical feasibility, proof of commercial feasibility"],
  ["Gate decisions", "Go forward, Stop, Hold, Return"],
  ["House of Quality", "Basic design tool of QFD; began in 1972 at Mitsubishi's Kobe shipyard"],
  ["Customer attributes (CA)", "Customer requirements in their own words, weighted by importance"],
  ["Engineering characteristics (EC)", "Measurable product features that directly affect customer perceptions"],
  ["Relationship matrix", "How much each EC affects each CA, shown with numbers or symbols"],
  ["HoQ roof", "Shows engineering features to improve together and the trade-offs"],
  ["Seven steps of product development", "Idea generation, screening, concept dev & testing, market analysis, product development, market testing, commercialization & launch"],
];

INITS.push(function l05() {
  const svg = document.querySelector("#l05-hoq svg"), out = document.getElementById("l05hoqOut");
  const rooms = [
    ["roof", "Roof: correlations", "The distinctive roof matrix shows which engineering features have to be improved together, and helps engineers make trade-offs.", "M200 120 L380 30 L560 120 Z"],
    ["ec", "Engineering characteristics", "How engineers describe the product in measurable terms. One EC may affect several customer attributes. A time for patient analysis and brainstorming.", "M200 120 H560 V170 H200 Z"],
    ["ca", "Customer attributes", "What customers want, in their own words. The house begins here.", "M40 170 H160 V350 H40 Z"],
    ["imp", "Relative importance", "Weights showing how much each attribute matters to customers, from direct experience or surveys.", "M160 170 H200 V350 H160 Z"],
    ["rel", "Relationship matrix", "How strongly each engineering characteristic affects each customer attribute, using numbers or symbols, based on experience, customer responses and experiments.", "M200 170 H560 V350 H200 Z"],
    ["comp", "Competitive comparison", "How customers rate you against competitors. Shows where meeting needs gives a competitive edge and where to improve. Perceptual maps help with positioning.", "M560 170 H620 V350 H560 Z"],
    ["tgt", "Target values", "When objective measures are known, the team sets ideal new values for each engineering characteristic in the redesigned product.", "M200 350 H560 V400 H200 Z"],
  ];
  svg.innerHTML = rooms.map(([k, t, , d]) => `<g class="svg-btn" tabindex="0" role="button" data-r="${k}" aria-label="${t}">
      <path d="${d}" style="fill:var(--sheet-2);stroke:var(--ink-2)" stroke-width="2"></path></g>`).join("") +
    [["Roof", 380, 95], ["Engineering characteristics (how)", 380, 150], ["Customer", 100, 255], ["attributes", 100, 272], ["(what)", 100, 289], ["Weight", 180, 262, 1], ["Relationships", 380, 265], ["Rivals", 590, 262, 1], ["Target values", 380, 380]]
      .map(([t, x, y, v]) => `<text x="${x}" y="${y}" text-anchor="middle" font-size="${v ? 11 : 14}" font-weight="700" pointer-events="none"${v ? ` transform="rotate(-90 ${x} ${y})"` : ""}>${t}</text>`).join("");
  svg.querySelectorAll("[data-r]").forEach(g => {
    const pick = () => {
      svg.querySelectorAll("[data-r] path").forEach(p => { p.style.fill = "var(--sheet-2)"; });
      g.querySelector("path").style.fill = "color-mix(in srgb, var(--lec) 22%, var(--sheet))";
      const r = rooms.find(x => x[0] === g.dataset.r); out.innerHTML = `<b>${r[1]}</b>: ${r[2]}`;
    };
    g.addEventListener("click", pick);
    g.addEventListener("keydown", e => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); pick(); } });
  });
});
