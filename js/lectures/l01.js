// Lecture 1 — Innovation
addLecture({
  id: "l01",
  intro: "What separates an invention from an innovation, the ways innovation can be classified, and where Peter Drucker says new ideas come from.",
  body:
  chapter("l01-invention", "Invention: something that never existed", `
    <p class="def-line"><mark>Invention</mark> is creating something new that has never existed before.</p>
    ${note("def", "An invention must pass the <b>inventive step</b>, also called <b>non-obviousness</b>, to be patented: it has to be an adequate distance beyond the current state of the art.")}
    <p>Patent laws in most countries ask the same question: would an expert in the field have found this obvious? If yes, it is not inventive enough to protect.</p>
    ${note("hook", "Invention = <b>first</b>. Innovation = <b>useful</b>. The light bulb's first glow was invention; lighting every home was innovation.")}
  `) +
  chapter("l01-innovation", "Innovation: new value for people", `
    <p class="def-line">"Innovation means doing something new that <mark>improves a product, process or service</mark>." <span class="hint">— WIPO</span></p>
    ${note("def", "WIPO is the World Intellectual Property Organization.")}
    <p>A fuller definition from Kelly and Kranzburg (1978):</p>
    <p><mark>Innovation</mark> is the process of making changes to something established by introducing something new that <b>adds value to customers</b> and <b>contributes to the knowledge store</b> of the organization.</p>
    <p><mark>Innovation management</mark> lets an organization respond to external or internal opportunities and use its creativity to introduce new ideas, processes or products.</p>
    ${note("trap", "Innovation does not have to be brand new to the world. Improving something that already exists still counts, as long as it adds value.")}
  `) +
  chapter("l01-examples", "Seven inventions and the innovations they became", `
    <p>Each card shows an invention on the front. Flip it to see where the real innovation happened.</p>
    ${flips([
      ["Microprocessor", "<b>Invention:</b> Intel's Ted Hoff and Federico Faggin built a tiny chip that acts as a computer's brain.<br><b>Innovation:</b> its development into countless devices, more computing power and the digital age."],
      ["Zipper", "<b>Invention:</b> Gideon Sundback's fastening device.<br><b>Innovation:</b> putting zippers into clothes, bags and products, which made fastening faster and enabled new designs."],
      ["Mouse and GUI", "<b>Invention:</b> created at Xerox's Palo Alto Research Center (PARC).<br><b>Innovation:</b> Apple and others adopted them, making graphical, user-friendly computers common."],
      ["Telephone", "<b>Invention:</b> Alexander Graham Bell's voice-over-distance device.<br><b>Innovation:</b> telephone networks and the global telecom industry."],
      ["Printing press", "<b>Invention:</b> Johannes Gutenberg's machine for mass-producing print.<br><b>Innovation:</b> spreading knowledge, the publishing industry, education and cultural exchange."],
      ["Steam engine", "<b>Invention:</b> James Watt's key contributions to steam power.<br><b>Innovation:</b> using it in factories and transport, which drove the Industrial Revolution."],
      ["Internet", "<b>Invention:</b> a global network of connected computers, built by many people.<br><b>Innovation:</b> email, e-commerce, social media and the digital transformation of society."],
    ])}
    <h3>Main differences</h3>
    ${table(["", "Invention", "Innovation"], [
      ["Origin and essence", "Pioneers an entirely new concept", "Adapts and reimagines existing creations"],
      ["Impact and evolution", "A single groundbreaking moment", "Evolves through continuous improvement"],
      ["Risk and uncertainty", "Ventures into uncharted territory", "Calculated risk-taking"],
      ["Time frame", "Extensive research, development and testing", "Faster: refines or adapts existing products"],
      ["Parties involved", "Led by the research and development department", "Needs cross-departmental collaboration"],
    ], "wide")}
    ${note("hook", "Xerox invented the mouse; Apple innovated with it. When an exam asks for an example, this pair is the clearest one to write.")}
    <h3>Practice: invention or innovation?</h3>
    ${game("l01a")}
  `) +
  chapter("l01-types", "Product, service and process innovation", `
    <p>Innovation can change <b>what</b> a company offers or <b>how</b> it works.</p>
    <div class="grid3">
      <div class="tile accent"><h4>Product innovation</h4><p>A new or improved good. Example: a phone with a better camera.</p></div>
      <div class="tile accent"><h4>Service innovation</h4><p>A new or better way of serving customers. Example: ordering a taxi through an app.</p></div>
      <div class="tile accent"><h4>Process innovation</h4><p>A new or better way of producing or delivering. Example: Ford's moving assembly line.</p></div>
    </div>
    ${note("hook", "Product = <b>what you sell</b>. Service = <b>what you do for someone</b>. Process = <b>how you make it</b>.")}
  `) +
  chapter("l01-radical", "Incremental and radical innovation", `
    <div class="grid2">
      <div class="tile accent"><h4>Incremental innovation</h4><p>Smaller improvements to something that exists. Easier to manage than radical innovation. Example: each year's slightly better phone model.</p></div>
      <div class="tile accent"><h4>Radical innovation</h4><p><b>Major changes</b> to something established, often creating a new market. Example: the jump from film cameras to digital photography.</p></div>
    </div>
    ${note("trap", "Incremental innovations are smaller endeavours, which is exactly why they are <b>easier to manage</b> than radical innovation. Expect this as a comparison question.")}
  `) +
  chapter("l01-matrix", "Architectural and modular innovation", `
    <p>This matrix sorts innovations by two questions: does it change the <b>components</b>, and does it change the <b>way components are linked</b> (the architecture)? Select a quadrant.</p>
    <figure class="diagram wide">
      <svg viewBox="0 0 640 400" role="group" aria-label="Innovation matrix">
        <line x1="320" y1="30" x2="320" y2="370" style="stroke:var(--line)" stroke-width="2"></line>
        <line x1="60" y1="200" x2="600" y2="200" style="stroke:var(--line)" stroke-width="2"></line>
        <text x="320" y="20" text-anchor="middle" class="soft" font-size="13">High impact on architectural knowledge</text>
        <text x="320" y="392" text-anchor="middle" class="soft" font-size="13">Low impact on architectural knowledge</text>
        <text x="8" y="196" class="soft" font-size="12">Low impact on</text><text x="8" y="212" class="soft" font-size="12">components</text>
        <text x="632" y="196" text-anchor="end" class="soft" font-size="12">High impact on</text><text x="632" y="212" text-anchor="end" class="soft" font-size="12">components</text>
        ${[["arch", 110, 40, "Architectural"], ["rad", 330, 40, "Radical"], ["inc", 110, 210, "Incremental"], ["mod", 330, 210, "Modular"]].map(([k, x, y, t]) =>
          `<g class="svg-btn" tabindex="0" role="button" data-q="${k}" aria-label="${t} innovation"><rect x="${x}" y="${y}" width="200" height="150" rx="12" style="fill:var(--sheet-2);stroke:var(--line)" stroke-width="2"></rect><text x="${x + 100}" y="${y + 82}" text-anchor="middle" font-size="18" font-weight="700">${t}</text></g>`).join("")}
      </svg>
      <figcaption id="l01MatrixOut" aria-live="polite">Select a quadrant to see what it means.</figcaption>
    </figure>
    ${note("hook", "<b>Modular</b> = swap a part, keep the layout (a better lens on the same camera). <b>Architectural</b> = same parts, new layout (the slide's camera rig rebuilt from familiar pieces).")}
    ${note("eg", "The slides show two video cameras: one changes the parts inside, the other rearranges standard parts into a new configuration.")}
  `) +
  chapter("l01-drucker", "Peter Drucker's seven sources of innovation", `
    <p>Drucker listed seven places where innovation opportunities appear. The first four are <b>inside</b> a company or industry; the last three are <b>outside</b> in society.</p>
    ${stepper([
      ["The unexpected", "1", `<p>An unexpected success, an unexpected failure, or an unexpected outside event.</p>
        <p><b>Penicillin:</b> in 1928 Alexander Fleming returned from holiday to find mould in a petri dish, with no bacteria around it. Oxford chemists later turned it into medicine; it was first used on a patient in 1940 and widely from 1942. It is now the most used antibiotic in the world.</p>
        <p><b>Viagra:</b> developed by Pfizer to treat angina (a heart condition). It failed at that, but trials revealed a different effect, and the "failure" became one of the world's most prescribed drugs.</p>`],
      ["Incongruity", "2", `<p>When what is needed does not match what is supplied. Five kinds:</p>
        ${table(["Incongruity", "What it means"], [
          ["Between reality and assumptions", "What everyone assumes is true differs from what is actually true (outdated information, bias)."],
          ["In a process", "The current way of doing things doesn't make sense; a more efficient way exists."],
          ["Between perception and reality", "How people perceive a situation doesn't match reality, creating room to correct it."],
          ["In industry or market structure", "Changes in market share, competition or technology create imbalances."],
          ["Demographic", "Changes in population size, age, ethnicity or gender create unmet needs."],
        ])}`],
      ["Process need", "3", `<p>"Necessity is the mother of innovation." A weak link in an existing process demands a fix.</p><p><b>Example:</b> Ford's automated assembly line.</p>`],
      ["Industry or market structure", "4", `<p>Changes in industry or market structure that catch everyone unawares, such as streaming disrupting video rental.</p>`],
      ["Demographics", "5", `<p>Different lifestyle needs as populations change, for example an ageing population needing new health services.</p>`],
      ["Perception, mood, meaning", "6", `<p>Changes in how people see things, such as a shift towards healthy eating creating demand for new foods.</p>`],
      ["New knowledge", "7", `<p>Scientific and non-scientific discoveries, such as AI and nanotechnology.</p>`],
    ])}
    ${note("hook", "<b>U I P I D P N</b>: \"<b>U</b>nder <b>I</b>nspection, <b>P</b>eople <b>I</b>nvent <b>D</b>ifferent <b>P</b>roducts <b>N</b>ightly\" — Unexpected, Incongruity, Process need, Industry change, Demographics, Perception, New knowledge.")}
    ${note("trap", "Penicillin and Viagra are both examples of <b>the unexpected</b>, not new knowledge.")}
    <h3>Practice: name the source</h3>
    ${game("l01b")}
  `),
  cheat: [
    "Invention: something never existed before; must be non-obvious (inventive step) to be patented",
    "Innovation (WIPO): doing something new that improves a product, process or service",
    "Innovation adds value to customers and the organization's knowledge store",
    "Examples: microprocessor, zipper, Xerox mouse/GUI, telephone, printing press, steam engine, internet",
    "Types: product, service, process · incremental (small, easier) vs radical (major change)",
    "Matrix: incremental (low/low), modular (new components), architectural (new links), radical (both)",
    "Drucker's 7 sources: unexpected, incongruity, process need, industry/market change, demographics, perception, new knowledge",
  ],
});

GAMES.l01a = { opts: ["Invention", "Innovation"], done: "You can tell the two apart.", items: [
  { q: "Gutenberg builds the first printing press.", a: "Invention", why: "Something that never existed before." },
  { q: "Apple puts PARC's mouse and graphical interface into a mass-market computer.", a: "Innovation", why: "Adopting and developing an existing invention so it adds value." },
  { q: "Telephone networks spread across the world, creating the telecom industry.", a: "Innovation", why: "Applying the telephone at scale." },
  { q: "Gideon Sundback creates the zipper.", a: "Invention", why: "A brand-new fastening device." },
  { q: "Factories adopt steam engines to mechanise production.", a: "Innovation", why: "Integrating the steam engine into applications." },
  { q: "A lab creates a material with a property never seen before and patents it.", a: "Invention", why: "New and non-obvious, so patentable." },
  { q: "A bank lets customers open accounts through a mobile app.", a: "Innovation", why: "Doing something new that improves a service." },
]};
GAMES.l01b = { opts: ["The unexpected", "Incongruity", "Process need", "Industry change", "Demographics", "Perception", "New knowledge"], items: [
  { q: "Mould contaminating a petri dish leads to the first antibiotic.", a: "The unexpected", why: "An unexpected event: penicillin." },
  { q: "Ford builds a moving assembly line because hand-building cars is too slow.", a: "Process need", why: "Necessity in the process." },
  { q: "An ageing population creates demand for home-care services.", a: "Demographics", why: "Population change creates new needs." },
  { q: "Advances in AI make automatic translation apps possible.", a: "New knowledge", why: "A new scientific capability." },
  { q: "People start seeing fast food as unhealthy, so plant-based meals boom.", a: "Perception", why: "A change in perception, mood and meaning." },
  { q: "Everyone assumes customers want the cheapest option, but they actually pay more for convenience.", a: "Incongruity", why: "A gap between assumptions and reality." },
  { q: "Streaming services suddenly reshape how films are distributed.", a: "Industry change", why: "Industry or market structure changes." },
]};

QUIZ.l01 = [
  { q: "Creating something new that has never existed before is…", o: ["Innovation", "Invention", "Imitation", "Incremental change"], a: 1, why: "That is the definition of invention." },
  { q: "To be patented, an invention must be…", o: ["Cheap", "Non-obvious (an inventive step)", "Already on sale", "Approved by customers"], a: 1, why: "The inventive step / non-obviousness requirement." },
  { q: "According to WIPO, innovation means…", o: ["Inventing something nobody has seen", "Doing something new that improves a product, process or service", "Copying a competitor", "Filing a patent"], a: 1, why: "WIPO's definition." },
  { q: "Innovation, per Kelly and Kranzburg, adds value to customers and…", o: ["Reduces staff", "Contributes to the organization's knowledge store", "Removes all risk", "Replaces invention"], a: 1, why: "It contributes to the knowledge store of the organization." },
  { q: "The mouse and GUI were invented at…", o: ["Apple", "Xerox PARC", "Intel", "IBM"], a: 1, why: "Xerox PARC invented them; Apple innovated with them." },
  { q: "Who is credited with the microprocessor invention in the lecture?", o: ["Bell", "Ted Hoff and Federico Faggin at Intel", "Gutenberg", "James Watt"], a: 1, why: "Intel's Ted Hoff and Federico Faggin." },
  { q: "Compared with invention, innovation typically…", o: ["Takes longer", "Involves calculated risk and cross-department collaboration", "Is led only by R&D", "Is a single moment"], a: 1, why: "Innovation evolves continuously, with calculated risk and collaboration." },
  { q: "Which is easier to manage?", o: ["Radical innovation", "Incremental innovation", "Both equally", "Neither"], a: 1, why: "Incremental innovations are smaller endeavours." },
  { q: "Making major changes to something established is…", o: ["Incremental innovation", "Radical innovation", "Modular innovation", "Process need"], a: 1, why: "Radical innovation." },
  { q: "High impact on components but low impact on architecture is…", o: ["Architectural", "Modular", "Radical", "Incremental"], a: 1, why: "Modular: new components, same linkages." },
  { q: "Low impact on components but high impact on architecture is…", o: ["Architectural", "Modular", "Radical", "Incremental"], a: 0, why: "Architectural: same components, new linkages." },
  { q: "Penicillin is an example of which Drucker source?", o: ["New knowledge", "The unexpected", "Demographics", "Process need"], a: 1, why: "An accidental discovery: the unexpected." },
  { q: "Ford's assembly line illustrates…", o: ["Process need", "Perception", "Incongruity", "Demographics"], a: 0, why: "Innovation based on process need." },
  { q: "When need is incongruent with supply, Drucker calls it…", o: ["Incongruity", "The unexpected", "New knowledge", "Industry change"], a: 0, why: "Incongruity." },
  { q: "Which is NOT one of Drucker's seven sources?", o: ["Demographics", "New knowledge", "Government subsidies", "Changes in perception"], a: 2, why: "The seven: unexpected, incongruity, process need, industry/market, demographics, perception, new knowledge." },
];

CARDS.l01 = [
  ["Invention", "Creating something new that has never existed before"],
  ["Inventive step", "Non-obviousness: the invention must be an adequate distance beyond the state of the art to be patented"],
  ["Innovation (WIPO)", "Doing something new that improves a product, process or service"],
  ["Innovation (Kelly & Kranzburg)", "Changing something established by introducing something new that adds value to customers and the organization's knowledge store"],
  ["Innovation management", "Lets an organization respond to opportunities and use creativity to introduce new ideas, processes or products"],
  ["Xerox vs Apple", "Xerox PARC invented the mouse and GUI; Apple innovated by bringing them to mass-market computers"],
  ["Invention vs innovation: risk", "Invention: uncharted territory. Innovation: calculated risk-taking"],
  ["Incremental vs radical", "Incremental: smaller, easier to manage. Radical: major changes to something established"],
  ["Modular innovation", "New components, same architecture (high component, low architectural impact)"],
  ["Architectural innovation", "Same components linked in a new way (low component, high architectural impact)"],
  ["Drucker's seven sources", "Unexpected, incongruity, process need, industry/market change, demographics, perception, new knowledge"],
  ["Five incongruities", "Reality vs assumptions, in a process, perception vs reality, industry/market structure, demographic"],
  ["Example of the unexpected", "Penicillin (Fleming, 1928) and Viagra (failed angina drug)"],
];

INITS.push(function l01() {
  const info = {
    inc: "<b>Incremental</b>: low impact on components and on architecture. Small refinements of an existing design.",
    mod: "<b>Modular</b>: high impact on components, low on architecture. Replace a core part, keep how parts connect.",
    arch: "<b>Architectural</b>: low impact on components, high on architecture. Existing parts linked in a new way.",
    rad: "<b>Radical</b>: high impact on both. New components and a new architecture.",
  };
  const out = document.getElementById("l01MatrixOut");
  document.querySelectorAll("#l01-matrix [data-q]").forEach(g => {
    const pick = () => {
      document.querySelectorAll("#l01-matrix [data-q] rect").forEach(r => { r.style.fill = "var(--sheet-2)"; r.style.stroke = "var(--line)"; });
      const r = g.querySelector("rect"); r.style.fill = "color-mix(in srgb, var(--lec) 18%, var(--sheet))"; r.style.stroke = "var(--lec)";
      out.innerHTML = info[g.dataset.q];
    };
    g.addEventListener("click", pick);
    g.addEventListener("keydown", e => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); pick(); } });
  });
});
