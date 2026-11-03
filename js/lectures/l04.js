// Lecture 4 — Product Development
addLecture({
  id: "l04",
  intro: "How a product travels from first idea to market launch, with design thinking, the eight-stage new product development process, and the innovation sweet spot.",
  body:
  chapter("l04-what", "What product development is", `
    <p class="def-line"><mark>Product development</mark>, also called new product management, is a series of steps covering the <b>conceptualization, design, development and marketing</b> of newly created or rebranded goods and services.</p>
    <p>It covers a product's entire journey: from the <b>initial idea to market release and beyond</b>.</p>
    <h3>Design thinking: a product development framework</h3>
    ${stepper([
      ["Empathize", "Step 1", "<p>Learn about the problem from multiple perspectives. Who am I designing for? What matters to them?</p>"],
      ["Define", "Step 2", "<p>Identify the scope and true nature of the problem, based on user needs and insights.</p>"],
      ["Ideate", "Step 3", "<p>Brainstorm solutions. Wild ideas are encouraged.</p>"],
      ["Prototype", "Step 4", "<p>Build quick, rough versions to weed out unworkable or impractical solutions.</p>"],
      ["Test", "Step 5", "<p>Share the prototype with users and ask for feedback. What worked? What didn't?</p>"],
    ])}
    ${note("hook", "<b>E-D-I-P-T</b>: \"<b>E</b>very <b>D</b>esigner <b>I</b>s <b>P</b>retty <b>T</b>ired.\"")}
  `) +
  chapter("l04-plan", "How to create a product development plan", `
    <ol>
      <li><b>Identify a product need and business case.</b> Use test marketing and surveys to gauge interest, so the product has a strong reason to exist.</li>
      <li><b>Create a product vision.</b> The product's purpose, what it does, who it's for and its design.</li>
      <li><b>Draft a roadmap.</b> A detailed plan of action showing which goals to meet and when.</li>
      <li><b>Implement the roadmap.</b> Build, review and improve product iterations.</li>
      <li><b>Continue development and assessments.</b> Keep enhancing the product using customer feedback.</li>
    </ol>
    ${note("hook", "Need → Vision → Roadmap → Build → Improve.")}
  `) +
  chapter("l04-npd", "The eight-stage new product development process", `
    ${stepper([
      ["Idea generation", "1", "<p>A continuous, systematic search for new opportunities, including updating existing products. The goal: ideas that fill a gap in the market.</p>"],
      ["Idea screening", "2", "<p>Weed out flawed or less desirable ideas through objective review, early testing and feedback from consumers and stakeholders.</p>"],
      ["Concept development and testing", "3", "<p>Test the product concept and functionality on customers and develop it based on feedback.</p><p><b>Example:</b> car makers build clay concept cars for auto shows to collect reactions.</p>"],
      ["Market strategy and business analysis", "4", `<p>Decide the best way to market and sell, using the <b>4 Ps</b>:</p>
        <div class="grid2"><div class="tile"><h4>Product</h4><p>Designed to satisfy the target audience's demand.</p></div><div class="tile"><h4>Price</h4><p>Affects profit margins, supply and demand, and strategy.</p></div>
        <div class="tile"><h4>Promotion</h4><p>Advertising, PR and campaigns that show the value proposition.</p></div><div class="tile"><h4>Place</h4><p>Physical store, online-only, or omnichannel.</p></div></div>`],
      ["Feasibility study", "5", "<ul><li>Do you have the labour and materials required?</li><li>What does production, delivery and promotion cost?</li><li>Do you have access to the right distribution channels?</li></ul>"],
      ["Technical design and roadmap", "6", "<p>Combine the feasibility results and feedback into the product. Turn prototypes into workable offerings, fix technical problems and prepare R&amp;D, finance, marketing, production and operations for launch, guided by a product roadmap.</p>"],
      ["Test marketing", "7", "<p>Validate the whole concept (marketing, packaging, advertising, distribution) by offering the product to a random sample of the target market before full launch.</p>"],
      ["Market entry and commercialization", "8", "<p>Launch to the whole target market. The product lifecycle begins.</p>"],
    ])}
    ${note("hook", "\"<b>I S C M F T T M</b>\": <b>I</b>deas <b>S</b>urvive <b>C</b>areful <b>M</b>arket <b>F</b>easibility <b>T</b>ests <b>T</b>hen <b>M</b>arket.")}
    ${note("trap", "Feasibility study (stage 5) comes <b>after</b> market strategy (stage 4), and test marketing (7) comes <b>before</b> commercialization (8).")}
    <h3>Example: Uber</h3>
    <div class="grid2">
      <div class="tile accent"><h4>Idea generation · 2008</h4><p>Travis Kalanick and Garrett Camp couldn't get a taxi on a snowy night in Paris and thought of a smartphone app.</p></div>
      <div class="tile accent"><h4>Technical design</h4><p>Engineers built it with well-known languages: Python, Node.js and Java.</p></div>
      <div class="tile accent"><h4>Concept testing · 2010</h4><p>The first Uber ride was requested and taken in San Francisco.</p></div>
      <div class="tile accent"><h4>Market entry · Dec 2011</h4><p>Rolled out internationally, starting in Paris.</p></div>
    </div>
  `) +
  chapter("l04-sweet", "The innovation sweet spot", `
    <p>The ideal innovation meets three tests at once, an idea from the design firm <b>IDEO</b> in the early 2000s. Tick what your idea passes and watch the diagram.</p>
    <div class="calc wide">
      <div class="row" role="group" aria-label="Tests your idea passes">
        <label class="chip"><input type="checkbox" data-dfv="d"> Desirable</label>
        <label class="chip"><input type="checkbox" data-dfv="f"> Feasible</label>
        <label class="chip"><input type="checkbox" data-dfv="v"> Viable</label>
      </div>
      <figure style="max-width:420px;margin:12px auto 0">
        <svg viewBox="0 0 400 360" role="img" aria-labelledby="l04vennOut">
          <circle id="vd" cx="200" cy="130" r="105" style="fill:var(--l04);fill-opacity:.12;stroke:var(--l04)" stroke-width="2"></circle>
          <circle id="vv" cx="140" cy="230" r="105" style="fill:var(--l01);fill-opacity:.12;stroke:var(--l01)" stroke-width="2"></circle>
          <circle id="vf" cx="260" cy="230" r="105" style="fill:var(--l03);fill-opacity:.12;stroke:var(--l03)" stroke-width="2"></circle>
          <text x="200" y="80" text-anchor="middle" font-weight="700">Desirability</text>
          <text x="95" y="265" text-anchor="middle" font-weight="700">Viability</text>
          <text x="305" y="265" text-anchor="middle" font-weight="700">Feasibility</text>
          <text x="200" y="205" text-anchor="middle" font-size="13" class="soft">sweet spot</text>
        </svg>
      </figure>
      <p class="center" id="l04vennOut" aria-live="polite"><b>Tick the tests your idea passes.</b></p>
    </div>
    <div class="grid3">
      <div class="tile accent"><h4>Desirability</h4><p>A solution your customer <b>needs</b>. Are we solving the right pain point?</p></div>
      <div class="tile accent"><h4>Feasibility</h4><p>Builds on the strengths of your <b>operational capabilities</b>.</p></div>
      <div class="tile accent"><h4>Viability</h4><p>A <b>sustainable business model</b>. Does it make a profit?</p></div>
    </div>
    ${note("hook", "<b>Customer · Company · Cash.</b> Desirability: do customers want it? Feasibility: can our company build it? Viability: will it bring in cash?")}
  `) +
  chapter("l04-dfv", "Each test in detail", `
    ${stepper([
      ["Desirability", "Customer", `<p><b>Tests whether your innovation is solving the right customer problem</b>: is it a nice-to-have or a must-have?</p>
        <ul><li>What task am I helping my customer complete?</li><li>What does successful completion of that task look like for them?</li></ul>
        <p>If you solve their key pain points, you pass. If other pain points remain, <b>pivoting</b> may put you on a better path.</p>`],
      ["Feasibility", "Company", `<p><b>Tests whether your company has enough technical requirements and resources</b> to produce the product.</p>
        <p>Look inward and objectively assess strengths: technology, finance, branding, customer service, partnerships. Ask: how can we build this to make our business healthier and stronger?</p>
        <p>Needing completely new capabilities is <b>riskier</b>: more resources, and it may change how the market sees you.</p>`],
      ["Viability", "Cash", `<p><b>Tests whether your company can make a profit</b> from the product, process or service, now and in the future.</p>
        <ul><li>Does the business model fit how customers want to use and pay for it?</li><li>Is the way we build it and buy from suppliers profitable?</li></ul>
        <p>Viability also looks at <b>sustainability</b>: contributing to community and society.</p>`],
    ])}
    <h3>Adding sustainability</h3>
    <p>A fourth circle, <b>sustainability</b>, extends the sweet spot. <mark>Sustainable innovation</mark> means new products, processes or services that contribute positively <b>economically, ecologically and socially</b>.</p>
    <div class="grid2">
      <div class="tile"><h4>Ecological</h4><p>Reduce resource consumption.</p></div>
      <div class="tile"><h4>Social</h4><p>Meet social needs: better quality of life for everyone, equal opportunities.</p></div>
    </div>
    ${note("trap", "Feasibility asks \"<b>can we</b> build it\" (internal capability). Viability asks \"<b>should we</b>, will it pay\" (business model and profit). Students swap these often.")}
    ${game("l04")}
  `),
  cheat: [
    "Product development: conceptualization, design, development and marketing of new or rebranded goods/services",
    "Design thinking: empathize, define, ideate, prototype, test",
    "Plan: need & business case → vision → roadmap → implement → keep improving",
    "NPD 8 stages: idea generation, screening, concept dev & testing, market strategy (4Ps), feasibility, technical design, test marketing, commercialization",
    "Uber: idea 2008 (Paris snow) → first ride 2010 (SF) → international Dec 2011 (Paris)",
    "Sweet spot (IDEO): desirability (customer need), feasibility (capabilities), viability (profitable model)",
    "Sustainable innovation: economic, ecological, social contribution",
  ],
});

GAMES.l04 = { opts: ["Desirability", "Feasibility", "Viability"], items: [
  { q: "\"Do customers actually need this, or is it just nice to have?\"", a: "Desirability", why: "Solving the right customer problem." },
  { q: "\"Do we have the engineers and factory capacity to build it?\"", a: "Feasibility", why: "Technical requirements and resources." },
  { q: "\"Will customers pay enough for us to make a profit?\"", a: "Viability", why: "Profit and business model fit." },
  { q: "\"We'd have to build a whole new set of capabilities from scratch.\"", a: "Feasibility", why: "Building new capabilities raises feasibility risk." },
  { q: "\"Users keep saying the onboarding is their biggest pain point.\"", a: "Desirability", why: "Pain points are a desirability question." },
  { q: "\"Our supplier costs make each unit lose money.\"", a: "Viability", why: "Is the way we build and buy profitable?" },
]};

QUIZ.l04 = [
  { q: "Product development covers…", o: ["Only manufacturing", "Conceptualization, design, development and marketing", "Only marketing", "Only patenting"], a: 1, why: "The product's whole journey from idea to market and beyond." },
  { q: "The five design thinking steps in order are…", o: ["Define, empathize, test, ideate, prototype", "Empathize, define, ideate, prototype, test", "Ideate, prototype, test, define, empathize", "Test, define, ideate, empathize, prototype"], a: 1, why: "Empathize, define, ideate, prototype, test." },
  { q: "Which design thinking step weeds out unworkable solutions?", o: ["Empathize", "Prototype", "Define", "Ideate"], a: 1, why: "Prototype." },
  { q: "The first stage of new product development is…", o: ["Idea screening", "Idea generation", "Test marketing", "Feasibility study"], a: 1, why: "Idea generation." },
  { q: "Clay concept cars at auto shows belong to which stage?", o: ["Concept development and testing", "Commercialization", "Idea generation", "Feasibility"], a: 0, why: "Concept development and testing." },
  { q: "The 4 Ps used in market strategy are…", o: ["People, process, place, profit", "Product, price, promotion, place", "Plan, price, product, partners", "Product, profit, people, promotion"], a: 1, why: "Product, price, promotion, place." },
  { q: "\"Do you have the labor and materials required?\" is asked in…", o: ["Feasibility study", "Test marketing", "Idea screening", "Market entry"], a: 0, why: "Feasibility study questions." },
  { q: "Offering the product to a random sample of the target market before launch is…", o: ["Idea screening", "Test marketing", "Commercialization", "Concept testing"], a: 1, why: "Test marketing." },
  { q: "Uber's first ride took place in…", o: ["Paris, 2008", "San Francisco, 2010", "London, 2011", "New York, 2009"], a: 1, why: "San Francisco, 2010." },
  { q: "The innovation sweet spot idea originated from…", o: ["IDEO", "WIPO", "Heroku", "Intel"], a: 0, why: "IDEO, early 2000s." },
  { q: "Desirability tests whether…", o: ["You can make a profit", "You are solving the right customer problem", "You have the resources", "You are sustainable"], a: 1, why: "Desirability = right customer problem." },
  { q: "Feasibility tests whether…", o: ["Customers want it", "Your company has the technical requirements and resources", "It is profitable", "It is legal"], a: 1, why: "Feasibility = capabilities and resources." },
  { q: "Viability tests whether…", o: ["Your company can make a profit from it", "Customers like the colour", "Engineers can build it", "It is patented"], a: 0, why: "Viability = profit and sustainable business model." },
  { q: "Sustainable innovation contributes positively in which three ways?", o: ["Legally, politically, technically", "Economically, ecologically, socially", "Quickly, cheaply, easily", "Locally, nationally, globally"], a: 1, why: "Economically, ecologically and socially." },
];

CARDS.l04 = [
  ["Product development", "Steps covering conceptualization, design, development and marketing of new or rebranded goods and services"],
  ["Design thinking steps", "Empathize, Define, Ideate, Prototype, Test"],
  ["Product development plan", "Need & business case, vision, roadmap, implement roadmap, continue development & assessment"],
  ["NPD eight stages", "Idea generation, idea screening, concept development & testing, market strategy & business analysis, feasibility, technical design & roadmap, test marketing, commercialization"],
  ["The 4 Ps", "Product, Price, Promotion, Place"],
  ["Feasibility study questions", "Labour and materials? Cost of production, delivery, promotion? Right distribution channels?"],
  ["Test marketing", "Offer the product to a random sample of the target market to validate the whole package before launch"],
  ["Uber timeline", "Idea 2008 (Paris) · first ride 2010 (San Francisco) · international Dec 2011 (Paris)"],
  ["Innovation sweet spot", "Desirability + Feasibility + Viability (IDEO)"],
  ["Desirability", "Solving the right customer problem: must-have vs nice-to-have"],
  ["Feasibility", "Enough technical requirements and resources; builds on operational strengths"],
  ["Viability", "Can make a profit with a sustainable business model, now and in future"],
  ["Sustainable innovation", "New products/processes/services contributing economically, ecologically and socially"],
];

INITS.push(function l04() {
  const boxes = document.querySelectorAll("#l04-sweet [data-dfv]"), out = document.getElementById("l04vennOut");
  const msg = {
    "": "Tick the tests your idea passes.",
    d: "Desirable only: people want it, but can you build it and make money?",
    f: "Feasible only: you can build it, but does anyone want it?",
    v: "Viable only: it could pay, but nobody wants it and you can't build it yet.",
    df: "Desirable and feasible: a loved product that loses money. Fix the business model.",
    dv: "Desirable and viable: people would pay, but you lack the capability. Find partners or skills.",
    fv: "Feasible and viable: profitable on paper, but customers don't need it. Talk to users.",
    dfv: "All three: the innovation sweet spot.",
  };
  const paint = () => {
    const on = [...boxes].filter(b => b.checked).map(b => b.dataset.dfv).sort((a, b) => "dfv".indexOf(a) - "dfv".indexOf(b)).join("");
    ["d", "f", "v"].forEach(k => { document.getElementById("v" + k).style.fillOpacity = on.includes(k) ? ".42" : ".12"; });
    out.innerHTML = `<b>${msg[on]}</b>`;
  };
  boxes.forEach(b => b.addEventListener("change", paint));
});
