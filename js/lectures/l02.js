// Lecture 2 — Innovation Management Techniques
addLecture({
  id: "l02",
  intro: "Innovation is less about the newest technology and more a way of thinking. These nine techniques help a company find creative solutions in a systematic way.",
  body:
  chapter("l02-imt", "What innovation management techniques are", `
    <p>Innovation management (from Lecture 1) lets an organization respond to opportunities and introduce new ideas, processes or products. <mark>Innovation management techniques (IMTs)</mark> are the practical toolkit for doing that.</p>
    <ul>
      <li>Innovation does not always mean cutting-edge technology. It is <b>less a question of technology and more a way of thinking</b> and finding creative solutions.</li>
      <li>IMTs are a range of <b>tools, techniques and methodologies</b> that help companies adapt to circumstances and meet market challenges <b>systematically</b>.</li>
      <li>They are well developed and standardised, and aim to improve competitiveness by focusing on <b>knowledge</b>.</li>
    </ul>
    ${note("hook", "The nine tools, in order: <b>K I C B · B M P Q B</b> — \"<b>K</b>ind <b>I</b>deas <b>C</b>reate <b>B</b>usinesses; <b>B</b>rilliant <b>M</b>inds <b>P</b>rototype <b>Q</b>uality <b>B</b>uilds.\"")}
    <div class="grid3">
      ${["Knowledge management", "Intellectual property rights", "Customer relationship management", "Business intelligence", "Brainstorming", "Mind mapping", "Prototyping", "Quality function deployment", "Business simulation"].map((t, i) => `<div class="tile"><span class="hint">${String.fromCharCode(97 + i)})</span> <b>${t}</b></div>`).join("")}
    </div>
  `) +
  chapter("l02-km", "Knowledge management", `
    <p class="def-line"><mark>Knowledge management (KM)</mark> is the process of creating, sharing, using and managing the knowledge and information of an organization.</p>
    ${table(["Aspect", "What the lecture lists"], [
      ["Perspectives", "Community of practice, intellectual property"],
      ["Dimensions", "Tacit knowledge and explicit knowledge"],
      ["Strategies", "Knowledge sharing (between projects and organizations), storytelling, after-action reviews, knowledge mapping, communities of practice, expert systems"],
      ["Technologies", "Groupware, content and document management systems, e-learning systems"],
    ])}
    ${note("def", "<b>Tacit</b> knowledge lives in people's heads and is hard to write down (how a senior engineer \"just knows\"). <b>Explicit</b> knowledge is written down: manuals, reports, databases.")}
    ${note("hook", "Tacit = <b>t</b>alent in your head. Explicit = <b>e</b>xported to paper.")}
  `) +
  chapter("l02-ipr", "Intellectual property rights management", `
    <p><mark>Intellectual property rights (IPR)</mark> are a potential source of <b>market power</b>. An organization should manage its existing IPRs and build a culture that creates new ones.</p>
    <h3>Four strategic uses of IPR</h3>
    <div class="grid2">
      <div class="tile accent"><h4>Sell</h4><p>Transfer ownership for a payment.</p></div>
      <div class="tile accent"><h4>License</h4><p>Let others use it for a fee while you keep ownership.</p></div>
      <div class="tile accent"><h4>Collaborate</h4><p>Share it with partners to develop something together.</p></div>
      <div class="tile accent"><h4>Donate</h4><p>Give it away, for example to build goodwill or a standard.</p></div>
    </div>
    <p>A <b>patent search or technology search</b> helps a company find and develop alternatives.</p>
    ${note("hook", "<b>S-L-C-D</b>: \"<b>S</b>ome <b>L</b>awyers <b>C</b>an <b>D</b>ance.\"")}
  `) +
  chapter("l02-crm", "Customer relationship management and business intelligence", `
    <h3>Customer relationship management (CRM)</h3>
    <ul>
      <li>Gathering, managing and using <b>customer information</b> is essential to sustain a business.</li>
      <li><b>Customer interviews focused on pain points</b> are the core of product development.</li>
      <li>Social media and other technologies connect businesses with customers and gather their input during <b>idea generation</b>.</li>
    </ul>
    <h3>Business intelligence (BI)</h3>
    <p><mark>BI</mark> technologies handle large amounts of <b>structured and unstructured data</b> to identify, develop and create new strategic business opportunities, for your own products and your competitors'.</p>
    ${note("eg", "BI technologies listed: reporting, online analytical processing, analytics, data mining, process mining, complex event processing, business performance management, benchmarking, text mining, predictive and prescriptive analytics.")}
    ${note("trap", "CRM is about <b>customers</b> (their pain points and input). BI is about <b>data</b> (finding opportunities in large data sets). Don't mix them up.")}
  `) +
  chapter("l02-brain", "Brainstorming and mind mapping", `
    <h3>Brainstorming</h3>
    <p>A <mark>group creativity technique</mark> where members spontaneously contribute a list of ideas to find a conclusion for a specific problem.</p>
    <div class="grid2">
      <div class="tile accent"><h4>Go for quantity</h4><p>More ideas means more good ones.</p></div>
      <div class="tile accent"><h4>Withhold criticism</h4><p>Judge later, not during.</p></div>
      <div class="tile accent"><h4>Welcome wild ideas</h4><p>Strange ideas spark practical ones.</p></div>
      <div class="tile accent"><h4>Combine and improve</h4><p>Build on others' ideas.</p></div>
    </div>
    <p>Usually followed by <mark>affinity grouping</mark>: collecting similar ideas together.</p>
    ${note("hook", "Brainstorm rules = <b>Q-W-W-C</b>: Quantity, Withhold criticism, Wild ideas, Combine.")}
    <h3>Mind mapping</h3>
    <p>A <mark>mind map</mark> is a diagram of tasks, words or concepts arranged <b>around a central concept</b> in a non-linear layout. It is a visualising technique similar to concept maps. The diagram below is a small mind map of this lecture; select a branch to expand it.</p>
    <figure class="diagram wide" id="l02map">
      <svg viewBox="0 0 700 380" role="group" aria-label="Mind map of the nine innovation management techniques"></svg>
      <figcaption id="l02mapOut" aria-live="polite">Select a branch.</figcaption>
    </figure>
  `) +
  chapter("l02-proto", "Prototyping, QFD and business simulation", `
    <h3>Prototyping</h3>
    <p>A <mark>prototype</mark> is an early sample, model or release of a product built to <b>test a concept or process</b>. It provides specifications for a real, working system rather than a theoretical one.</p>
    ${note("def", "<b>Rapid prototyping</b> quickly fabricates a scale model of a physical part using 3D computer-aided design (CAD) data.")}
    <h3>Quality function deployment (QFD)</h3>
    <p>A method to <mark>transform qualitative user demands into quantitative parameters</mark>, then deploy them through subsystems and components down to specific manufacturing steps.</p>
    <p>Used in product design, manufacturing, engineering, R&amp;D, IT, support, testing and regulatory work, for hardware, software, services and systems. Its core tool, the House of Quality, is covered in Lecture 5.</p>
    ${note("hook", "QFD turns \"customers want it <i>comfortable</i>\" into \"seat padding 4 cm thick\".")}
    <h3>Business simulation</h3>
    <ul>
      <li>Simulation used for business <b>training, education or analysis</b>.</li>
      <li><b>Business process simulation</b> shows how processes behave over time when conditions change, giving insight into performance, quality, customer satisfaction and resource use.</li>
      <li><b>Marketing simulation games</b> let people test decisions on strategy, positioning, pricing and consumer behaviour.</li>
    </ul>
    <h3>Practice: which technique?</h3>
    ${game("l02")}
  `),
  cheat: [
    "IMTs: tools, techniques and methodologies to meet market challenges systematically; more a way of thinking than technology",
    "KM: create, share, use, manage knowledge · tacit vs explicit · storytelling, after-action reviews, expert systems",
    "IPR: source of market power · sell, license, collaborate, donate · patent search",
    "CRM: customer information and pain-point interviews · BI: structured + unstructured data for opportunities",
    "Brainstorming rules: quantity, withhold criticism, wild ideas, combine/improve → affinity grouping",
    "Mind map: concepts around a central idea, non-linear",
    "Prototype: early model to test a concept · rapid prototyping uses 3D CAD",
    "QFD: qualitative demands → quantitative parameters · Business simulation: training, process and marketing simulation",
  ],
});

GAMES.l02 = { opts: ["Knowledge mgmt", "IPR", "CRM", "Business intelligence", "Brainstorming", "Mind mapping", "Prototyping", "QFD", "Simulation"], items: [
  { q: "A team writes down lessons after every project in an after-action review.", a: "Knowledge mgmt", why: "After-action reviews are a KM strategy." },
  { q: "A company licenses its patented battery design to another manufacturer.", a: "IPR", why: "Licensing is a strategic use of IPR." },
  { q: "Product managers interview users about their biggest frustrations.", a: "CRM", why: "Customer pain-point interviews are core to CRM." },
  { q: "Analysts mine sales and social-media data to spot an unmet market.", a: "Business intelligence", why: "BI handles large structured and unstructured data." },
  { q: "A group lists 80 ideas in 20 minutes without judging any of them.", a: "Brainstorming", why: "Quantity and withholding criticism." },
  { q: "A student draws the topic in the centre of a page with branches for each subtopic.", a: "Mind mapping", why: "Concepts arranged around a central idea." },
  { q: "Engineers 3D-print a scale model of a new part to test the fit.", a: "Prototyping", why: "Rapid prototyping from CAD data." },
  { q: "\"Easy to hold\" is translated into a handle diameter of 32 mm.", a: "QFD", why: "Qualitative demand → quantitative parameter." },
  { q: "Managers test pricing decisions in a market game before launch.", a: "Simulation", why: "Marketing simulation games." },
]};

QUIZ.l02 = [
  { q: "Innovation management techniques are best described as…", o: ["Only the latest technology", "Tools, techniques and methodologies to meet market challenges systematically", "Accounting standards", "Legal contracts"], a: 1, why: "IMTs are a range of tools, techniques and methodologies." },
  { q: "According to the lecture, innovation is…", o: ["Mainly about cutting-edge technology", "Less about technology and more a way of thinking", "Only for large companies", "The same as invention"], a: 1, why: "It is a way of thinking and finding creative solutions." },
  { q: "The two dimensions of knowledge in KM are…", o: ["Public and private", "Tacit and explicit", "Old and new", "Internal and external"], a: 1, why: "Tacit and explicit knowledge." },
  { q: "Which is a KM technology?", o: ["Groupware", "Affinity grouping", "Licensing", "Rapid prototyping"], a: 0, why: "Groupware, content/document management, e-learning." },
  { q: "IPR is a potential source of…", o: ["Market power", "Tax refunds", "Staff turnover", "Customer complaints"], a: 0, why: "IPR is a potential source of market power." },
  { q: "Which is NOT a strategic use of IPR in the lecture?", o: ["Sell", "License", "Donate", "Hide"], a: 3, why: "Sell, license, collaborate, donate." },
  { q: "The core of product development in CRM is…", o: ["Customer interviews focusing on pain points", "Patent searches", "Mind maps", "Cash budgets"], a: 0, why: "Pain-point interviews." },
  { q: "BI technologies handle…", o: ["Only structured data", "Large amounts of structured and unstructured data", "Only paper records", "Only customer emails"], a: 1, why: "Structured and unstructured data." },
  { q: "Which is a brainstorming rule?", o: ["Criticise every idea", "Go for quality over quantity", "Welcome wild ideas", "Work alone"], a: 2, why: "Quantity, withhold criticism, wild ideas, combine and improve." },
  { q: "Brainstorming is normally followed by…", o: ["Affinity grouping", "A patent search", "QFD", "Simulation"], a: 0, why: "Collect similar items together." },
  { q: "A diagram of concepts arranged around a central subject is a…", o: ["Prototype", "Mind map", "Balance sheet", "Stage gate"], a: 1, why: "Mind map." },
  { q: "Rapid prototyping uses…", o: ["3D CAD data to fabricate a scale model", "Customer surveys", "Brainstorming", "Accounting software"], a: 0, why: "Rapid prototyping uses 3D computer-aided design data." },
  { q: "QFD transforms…", o: ["Quantitative data into stories", "Qualitative user demands into quantitative parameters", "Ideas into patents", "Cash into profit"], a: 1, why: "Qualitative demands → quantitative parameters." },
  { q: "Testing pricing and positioning decisions in an interactive game is…", o: ["Marketing simulation", "Knowledge mapping", "CRM", "IPR"], a: 0, why: "Marketing simulation games." },
];

CARDS.l02 = [
  ["Innovation management techniques", "Tools, techniques and methodologies that help companies adapt and meet market challenges systematically"],
  ["The nine IMTs", "Knowledge mgmt, IPR, CRM, business intelligence, brainstorming, mind mapping, prototyping, QFD, business simulation"],
  ["Knowledge management", "Creating, sharing, using and managing an organization's knowledge and information"],
  ["Tacit vs explicit knowledge", "Tacit: in people's heads, hard to write down. Explicit: documented"],
  ["IPR strategic uses", "Sell, license, collaborate, donate"],
  ["CRM core", "Gathering and using customer information; pain-point interviews drive product development"],
  ["Business intelligence", "Handles large structured and unstructured data to find strategic opportunities"],
  ["Brainstorming rules", "Go for quantity, withhold criticism, welcome wild ideas, combine and improve"],
  ["Affinity grouping", "Collecting similar ideas together after brainstorming"],
  ["Mind map", "Non-linear diagram of concepts arranged around a central subject"],
  ["Prototype", "Early sample or model built to test a concept or process"],
  ["QFD", "Transforms qualitative user demands into quantitative parameters through to manufacturing"],
  ["Business simulation", "Simulation for training, education or analysis; process and marketing simulations"],
];

INITS.push(function l02() {
  const branches = [
    ["Knowledge mgmt", "Create, share, use and manage knowledge. Tacit vs explicit."],
    ["IPR", "Market power. Sell, license, collaborate, donate."],
    ["CRM", "Customer information and pain-point interviews."],
    ["Business intelligence", "Opportunities from structured and unstructured data."],
    ["Brainstorming", "Quantity, no criticism, wild ideas, combine."],
    ["Mind mapping", "Concepts around a central idea. You're looking at one."],
    ["Prototyping", "Early model to test a concept. Rapid prototyping uses CAD."],
    ["QFD", "Qualitative demands to quantitative parameters."],
    ["Simulation", "Training, process and marketing simulation."],
  ];
  const svg = document.querySelector("#l02map svg"), out = document.getElementById("l02mapOut");
  const cx = 350, cy = 190;
  svg.innerHTML = branches.map(([t], i) => {
    const a = -Math.PI / 2 + i * 2 * Math.PI / branches.length, x = cx + Math.cos(a) * 250, y = cy + Math.sin(a) * 150;
    const qx = cx + Math.cos(a) * 120, qy = cy + Math.sin(a) * 40;
    return `<path d="M${cx} ${cy} Q${qx} ${qy} ${x} ${y}" fill="none" style="stroke:color-mix(in srgb, var(--lec) 45%, transparent)" stroke-width="3"></path>
      <g class="svg-btn" tabindex="0" role="button" data-b="${i}" aria-label="${t}"><rect x="${x - 70}" y="${y - 17}" width="140" height="34" rx="17" style="fill:var(--sheet);stroke:var(--lec)" stroke-width="2"></rect>
      <text x="${x}" y="${y + 5}" text-anchor="middle" font-size="13" font-weight="700">${t}</text></g>`;
  }).join("") + `<circle cx="${cx}" cy="${cy}" r="58" style="fill:var(--lec)"></circle><text x="${cx}" y="${cy - 4}" text-anchor="middle" font-size="15" font-weight="700" style="fill:var(--sheet)">Innovation</text><text x="${cx}" y="${cy + 15}" text-anchor="middle" font-size="13" style="fill:var(--sheet)">techniques</text>`;
  svg.querySelectorAll("[data-b]").forEach(g => {
    const pick = () => {
      svg.querySelectorAll("[data-b] rect").forEach(r => r.style.fill = "var(--sheet)");
      g.querySelector("rect").style.fill = "color-mix(in srgb, var(--lec) 18%, var(--sheet))";
      const [t, d] = branches[g.dataset.b]; out.innerHTML = `<b>${t}</b>: ${d}`;
    };
    g.addEventListener("click", pick);
    g.addEventListener("keydown", e => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); pick(); } });
  });
});
