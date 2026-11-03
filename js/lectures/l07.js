// Lecture 7 — Classifying Entrepreneurs
addLecture({
  id: "l07",
  intro: "Entrepreneurs can be grouped in many ways: by ownership, personality, business type, technology, motivation, profession and experience. Plus Danhof's and Cole's classifications, and intrapreneurship.",
  body:
  chapter("l07-explorer", "Classification explorer", `
    <p>Pick a way of classifying, then flip the cards for each type. Every type has a definition and, where the lecture gives one, a real example.</p>
    <div class="chips wide" id="l07pick" role="group" aria-label="Classification basis"></div>
    <div class="flips wide" id="l07cards" aria-live="polite"></div>
    ${note("hook", "Eight bases: <b>O P T T M P T E</b> — \"<b>O</b>nly <b>P</b>eople <b>T</b>hink <b>T</b>wice, <b>M</b>ost <b>P</b>lans <b>T</b>ake <b>E</b>ffort\": Ownership, Personality, Type of business, Technology use, Motivation, Profession, Technical experience, Entrepreneurial experience.")}
    ${note("trap", "<b>Induced entrepreneur</b> appears under both personality and motivation. Both mean starting a business because of outside support such as government incentives.")}
  `) +
  chapter("l07-habitual", "Novice, serial and portfolio entrepreneurs", `
    <figure class="diagram wide">
      <svg viewBox="0 0 640 210" role="img" aria-label="Novice versus habitual entrepreneurs, split into serial and portfolio">
        <rect x="20" y="70" width="160" height="70" rx="12" style="fill:var(--sheet-2);stroke:var(--ink-2)" stroke-width="2"></rect>
        <text x="100" y="100" text-anchor="middle" font-weight="700">Novice</text><text x="100" y="120" text-anchor="middle" font-size="12" class="soft">first business</text>
        <rect x="240" y="70" width="160" height="70" rx="12" style="fill:var(--sheet-2);stroke:var(--lec)" stroke-width="2"></rect>
        <text x="320" y="100" text-anchor="middle" font-weight="700">Habitual</text><text x="320" y="120" text-anchor="middle" font-size="12" class="soft">owned 2+ firms</text>
        <path d="M400 95 L460 45 M400 115 L460 165" style="stroke:var(--lec)" stroke-width="2" fill="none"></path>
        <rect x="460" y="15" width="160" height="62" rx="12" style="fill:color-mix(in srgb, var(--lec) 15%, var(--sheet));stroke:var(--lec)" stroke-width="2"></rect>
        <text x="540" y="42" text-anchor="middle" font-weight="700">Serial</text><text x="540" y="61" text-anchor="middle" font-size="12" class="soft">one after another</text>
        <rect x="460" y="133" width="160" height="62" rx="12" style="fill:color-mix(in srgb, var(--lec) 15%, var(--sheet));stroke:var(--lec)" stroke-width="2"></rect>
        <text x="540" y="160" text-anchor="middle" font-weight="700">Portfolio</text><text x="540" y="179" text-anchor="middle" font-size="12" class="soft">several at once</text>
      </svg>
    </figure>
    <ul>
      <li><b>Novice:</b> no prior business ownership, but now owns a stake in a new, purchased or inherited business. N. R. Narayana Murthy was a novice when he co-founded Infosys in 1981.</li>
      <li><b>Habitual:</b> has owned at least two firms, either one after another (<b>serial</b>) or at the same time (<b>portfolio</b>).</li>
      <li><b>Serial:</b> has sold or closed a business and now owns another. Driven by impact more than wealth; sees failure as experience (Ryan, 2000). Example: Sunil Bharti Mittal of Bharti Airtel.</li>
      <li><b>Portfolio:</b> owns stakes in two or more businesses at once. Example: Kishore Biyani with Big Bazaar, Pantaloons and Central.</li>
    </ul>
    ${note("hook", "<b>S</b>erial = <b>S</b>equence. <b>P</b>ortfolio = <b>P</b>arallel.")}
  `) +
  chapter("l07-danhof", "Clarence Danhof's classification", `
    <p>Danhof ranks entrepreneurs by how readily they <b>adopt change</b>. Select each one along the spectrum.</p>
    <div class="spectrum wide" id="l07danhof" role="group" aria-label="Danhof's four types"></div>
    <div class="panel wide" id="l07danOut" aria-live="polite"></div>
    ${note("hook", "<b>I-I-F-D</b>, from boldest to most stubborn: \"<b>I</b> <b>I</b>mitate, <b>F</b>ear, <b>D</b>on't.\" Innovative, Imitative, Fabian, Drone.")}
    ${note("trap", "<b>Fabian</b> adopts change only when not doing so would damage the business. <b>Drone</b> refuses change even at the cost of lower returns.")}
  `) +
  chapter("l07-cole", "Arthur H. Cole's classification", `
    <p>Cole divided the history of American entrepreneurship into three stages of entrepreneurial thinking:</p>
    <div class="grid3">
      <div class="tile accent"><h4>Empirical</h4><p class="hint">From the start to 1860</p><p>Rarely introduce anything radical. Guided by <b>rule of thumb</b>.</p></div>
      <div class="tile accent"><h4>Rational</h4><p class="hint">1860 – 1890</p><p>Informed about the business environment and economic conditions; introduce <b>modifications</b> when necessary.</p></div>
      <div class="tile accent"><h4>Cognitive</h4><p class="hint">1890 onwards</p><p>Sophisticated; use <b>expert advisers</b>; may make changes that completely break from the existing scheme.</p></div>
    </div>
    ${note("hook", "<b>E-R-C</b>: \"<b>E</b>xperience, <b>R</b>eason, <b>C</b>onsultants.\" Rule of thumb → informed → expert-advised.")}
  `) +
  chapter("l07-social", "Spiritual and social entrepreneurs", `
    <h3>Spiritual entrepreneur</h3>
    <p>Sri Sri Ravi Shankar founded the Art of Living foundation, now in over 140 countries with more than 20 million participants. He links success to (1) the <b>efficiency of the product</b>, which brings benefits so success follows naturally, and (2) having a <b>philosophy</b> you live by: those who \"walk the talk\" make a lasting impact.</p>
    <h3>Social entrepreneur</h3>
    <p>Innovative, motivated, creative thinkers driven to <b>solve social problems</b>. They are:</p>
    <div class="grid2">
      <div class="tile"><b>Ambitious</b></div><div class="tile"><b>Persistent</b></div>
      <div class="tile"><b>Tackling major social issues</b></div><div class="tile"><b>Offering new ideas for wide-scale change</b></div>
    </div>
    <p>Examples: Florence Nightingale (UK), Maria Montessori (Italy), Muhammad Yunus (Bangladesh, 2006 Nobel Peace Prize), Vinoba Bhave (India), Satyam Mishra (India).</p>
    <p>They pioneer innovations that benefit humanity, drive local change, and act as <b>role models</b> who prove that citizens who channel their passion into action can do almost anything.</p>
    ${note("eg", "\"Social entrepreneurs are not content just to give a fish or teach how to fish. They will not rest until they have revolutionized the fishing industry.\" — Skoll Foundation")}
  `) +
  chapter("l07-intra", "Intrapreneurship", `
    <p class="def-line"><mark>Intrapreneurship</mark> is behaving like an entrepreneur while working inside a large organization.</p>
    <ul>
      <li>A corporate management style that combines <b>risk-taking and innovation</b> with the rewards and motivation usually linked to entrepreneurship.</li>
      <li>"Employee initiatives in organizations to undertake something new, <b>without being asked to do so</b>."</li>
      <li>The intrapreneur turns an idea into a profitable venture while operating <b>within the organization</b>.</li>
    </ul>
    ${note("hook", "<b>Intra</b> = <b>inside</b> (like intranet). An entrepreneur builds outside; an intrapreneur builds inside a company.")}
    <h3>Practice: classify the entrepreneur</h3>
    ${game("l07")}
  `),
  cheat: [
    "Ownership: founder (pure), second-generation, franchisee, owner-manager",
    "Personality: achiever, induced, idea generator, real manager, real achiever",
    "Business type: business, industrial, trading, corporate, agricultural · Technology: technical vs non-technical",
    "Motivation: pure, induced, motivated, spontaneous · Profession: professional, forced, individual",
    "Technical experience (Jones-Evans 1995): research, producer, user, opportunist",
    "Experience: novice vs habitual (serial = one after another, portfolio = several at once)",
    "Danhof: innovative, imitative/adoptive, Fabian, drone · Cole: empirical (to 1860), rational (1860–1890), cognitive (1890+)",
    "Social entrepreneurs: ambitious, persistent, major social issues, wide-scale change · Intrapreneurship: entrepreneur inside an organization",
  ],
});

GAMES.l07 = { opts: ["Franchisee", "Owner-manager", "Idea generator", "Fabian", "Drone", "Serial", "Portfolio", "Intrapreneur"], items: [
  { q: "Runs a fast-food outlet using a parent brand's trademark and methods for a regular fee.", a: "Franchisee", why: "Licensed trademark and proven methods in exchange for recurring payments." },
  { q: "Bill Gates buys Hotmail from its founder and then manages it.", a: "Owner-manager", why: "Buys a business from the founder and runs it." },
  { q: "Always first to sense demand and enjoys first-mover advantage.", a: "Idea generator", why: "Highly creative, the \"essence of entrepreneurship\"." },
  { q: "Adopts new technology only when not doing so would ruin the business.", a: "Fabian", why: "Timid and cautious; decides at the last moment." },
  { q: "Keeps the same old machinery even as profits fall.", a: "Drone", why: "Refuses change even at reduced returns." },
  { q: "Sold one startup and is now building the next.", a: "Serial", why: "Owns businesses one after another." },
  { q: "Owns three separate supermarket chains at the same time.", a: "Portfolio", why: "Stakes in two or more businesses simultaneously." },
  { q: "An employee launches a new product line inside a big company without being asked.", a: "Intrapreneur", why: "Entrepreneurial behaviour within an organization." },
]};

QUIZ.l07 = [
  { q: "Someone who inherits a family business from their parents is a…", o: ["Pure founder", "Second-generation operator", "Franchisee", "Owner-manager"], a: 1, why: "Second-generation operator of a family-owned business." },
  { q: "A franchisee…", o: ["Conceived the business idea", "Uses the franchiser's trademark and methods for recurring payments", "Owns several firms at once", "Works inside a corporation"], a: 1, why: "Licensed trademark and proven methods." },
  { q: "Microsoft's purchase of Hotmail made Bill Gates its…", o: ["Founder", "Owner-manager", "Franchisee", "Intrapreneur"], a: 1, why: "Owner-manager: buys a business from the founder." },
  { q: "An entrepreneur who starts a business because of government subsidies is…", o: ["Induced", "Spontaneous", "Drone", "Cognitive"], a: 0, why: "Induced by external factors such as policy." },
  { q: "A technical entrepreneur concentrates more on…", o: ["Marketing", "Production", "Finance", "Distribution"], a: 1, why: "Craftsman type; production more than marketing." },
  { q: "Professional entrepreneurs typically…", o: ["Stay in one business forever", "Start enterprises, sell them, and start new ones", "Are forced by poverty", "Avoid risk"], a: 1, why: "They never cling to the enterprises they establish." },
  { q: "Jones-Evans's classification is based on…", o: ["Previous occupational background in technology", "Age", "Family wealth", "Location"], a: 0, why: "Research, producer, user, opportunist technical entrepreneurs." },
  { q: "Amar Bose, an MIT acoustics researcher who founded Bose Corporation, is a…", o: ["Research technical entrepreneur", "User technical entrepreneur", "Opportunist", "Drone"], a: 0, why: "Research background before founding." },
  { q: "Owning stakes in two or more businesses at the same time is…", o: ["Serial", "Portfolio", "Novice", "Fabian"], a: 1, why: "Portfolio entrepreneurship." },
  { q: "In Danhof's classification, who adopts innovations introduced by others?", o: ["Innovative", "Imitative/adoptive", "Fabian", "Drone"], a: 1, why: "Imitative entrepreneurs copy tested technology." },
  { q: "Which Danhof type refuses to change even at the risk of reduced returns?", o: ["Fabian", "Drone", "Imitative", "Innovative"], a: 1, why: "Drone entrepreneurs are laggards." },
  { q: "Imitative entrepreneurs are especially helpful in…", o: ["Less developed countries", "Space agencies", "Monopolies", "Charities only"], a: 0, why: "They spread enterprise and create jobs in less developed countries." },
  { q: "Cole's rational stage covers…", o: ["Before 1860", "1860–1890", "1890 onwards", "2000 onwards"], a: 1, why: "Empirical to 1860, rational 1860–1890, cognitive 1890+." },
  { q: "Cognitive entrepreneurs…", o: ["Follow rule of thumb", "Use expert advisers and may break from the existing scheme", "Refuse change", "Imitate others"], a: 1, why: "Sophisticated, expert-advised." },
  { q: "Intrapreneurship is…", o: ["Starting a franchise", "Behaving like an entrepreneur within a large organization", "Owning many firms", "Government entrepreneurship"], a: 1, why: "Entrepreneurial behaviour inside an organization." },
];

CARDS.l07 = [
  ["Classification bases", "Ownership, personality, type of business, technology use, motivation, profession, technical experience, entrepreneurial experience"],
  ["Ownership types", "Founder (pure), second-generation operator, franchisee, owner-manager"],
  ["Personality types", "Achiever, induced, idea generator, real manager, real achiever"],
  ["Business types", "Business, industrial, trading, corporate, agricultural"],
  ["Motivation types", "Pure, induced, motivated, spontaneous"],
  ["Profession types", "Professional (start and sell), forced, individual"],
  ["Technical experience (Jones-Evans 1995)", "Research, producer, user, opportunist"],
  ["Serial vs portfolio", "Serial: one business after another. Portfolio: several at the same time"],
  ["Danhof's four types", "Innovative, imitative/adoptive, Fabian (cautious), drone (refuses change)"],
  ["Cole's three stages", "Empirical (to 1860, rule of thumb), rational (1860–1890, informed), cognitive (1890+, expert-advised)"],
  ["Social entrepreneur traits", "Ambitious, persistent, tackle major social issues, offer new ideas for wide-scale change"],
  ["Intrapreneurship", "Acting like an entrepreneur inside a large organization, without being asked"],
];

INITS.push(function l07() {
  const sets = {
    "Ownership": [
      ["Founder (pure entrepreneur)", "Conceives the business plan and makes it succeed. Example: Dhirubhai Ambani, Reliance Group."],
      ["Second-generation operator", "Inherits the family business. Example: Mukesh and Anil Ambani."],
      ["Franchisee", "Uses the franchiser's trademark and proven methods for a recurring payment, without conceiving the business."],
      ["Owner-manager", "Buys a business from its founder and runs it. Example: Bill Gates and Microsoft buying Hotmail (founded by Sabeer Bhatia) for $400 million."],
    ],
    "Personality": [
      ["The achiever", "Self-driven by a desire to excel and make a mark; a go-getter who often builds the business around a personal brand. Example: Narayana Murthy leaving a settled job to start Infosys."],
      ["Induced entrepreneur", "Pushed by external factors: government policy, unemployment, family or institutional support. Tends to be realistic."],
      ["Idea generator", "Highly creative, senses demand early, enjoys first-mover advantage. The \"essence of entrepreneurship\". Example: Bill Gates."],
      ["Real manager", "Runs the business systematically: analyses situations, opportunities and threats; prefers incremental change to radical transformation."],
      ["Real achiever", "Full of life; pursues the goals of employees, suppliers and distributors as well as their own."],
    ],
    "Type of business": [
      ["Business entrepreneur", "Turns an idea into a small or large business unit, usually in trading or manufacturing. Example: readymade garments."],
      ["Industrial entrepreneur", "A manufacturer who tailors products to customer needs. Example: electronics, textiles, machine tools."],
      ["Trading entrepreneur", "Trades without manufacturing; finds markets and stimulates demand."],
      ["Corporate entrepreneur", "Shows innovative skill in organizing a corporate undertaking registered under a statute, such as a company or trust."],
      ["Agricultural entrepreneur", "Produces and markets crops, fertilisers and other agricultural inputs."],
    ],
    "Technology use": [
      ["Technical entrepreneur", "A craftsman type: develops better-quality goods through craftsmanship and focuses on production more than marketing."],
      ["Non-technical entrepreneur", "Not concerned with technical aspects; focuses on marketing and distribution strategies."],
    ],
    "Motivation": [
      ["Pure entrepreneur", "Motivated by psychological and economic rewards: personal satisfaction, ego or status."],
      ["Induced entrepreneur", "Takes up a task because of government assistance, incentives or concessions."],
      ["Motivated entrepreneur", "Driven by a desire for self-fulfilment."],
      ["Spontaneous entrepreneur", "Starts out of natural talent, with initiative, boldness and confidence."],
    ],
    "Profession": [
      ["Professional entrepreneur", "Loves starting enterprises, then sells them and starts new ones; never clings to them."],
      ["Forced entrepreneur", "Compelled by socio-economic background, such as being jobless or having little education."],
      ["Individual entrepreneur", "Works at an individual level; can start large or small firms, usually small-scale."],
    ],
    "Technical experience": [
      ["Research", "Did technological research at a university or lab first. Example: Prof. Amar Bose (MIT acoustics) founding Bose Corporation."],
      ["Producer", "Worked in commercial production or development, usually in a large firm. Example: Subroto Bagchi (ex-Wipro R&D) co-founding MindTree in 1999."],
      ["User", "Used the technology as an end user, without developing it. Example: Tulsi Tanti installed wind turbines for his textile business, then founded Suzlon Energy."],
      ["Opportunist", "Spots a technology opportunity with little or no technical experience. Example: Azim Premji moving inherited Wipro from oil into IT."],
    ],
    "Entrepreneurial experience": [
      ["Novice", "No prior ownership; now owns a stake in a new, bought or inherited firm. Example: Narayana Murthy founding Infosys (1981)."],
      ["Serial", "Has sold or closed a business and now owns another. Example: Sunil Bharti Mittal."],
      ["Portfolio", "Owns stakes in two or more businesses at the same time. Example: Kishore Biyani."],
    ],
  };
  const pick = document.getElementById("l07pick"), cards = document.getElementById("l07cards");
  const show = k => {
    pick.querySelectorAll("button").forEach(b => b.setAttribute("aria-pressed", b.dataset.k === k));
    cards.innerHTML = sets[k].map(([f, b]) => flip(f, b)).join("");
  };
  pick.innerHTML = Object.keys(sets).map(k => `<button class="chip" type="button" data-k="${k}" aria-pressed="false">${k}</button>`).join("");
  pick.querySelectorAll("button").forEach(b => b.onclick = () => show(b.dataset.k));
  show("Ownership");

  const dan = [
    ["Innovative", "Also called aggressive. Characterised by a \"smell of innovativeness\". Assembles information and introduces new combinations of the factors of production. Senses opportunities for new ideas, technologies, markets and organizations. Transforms lifestyles; very valuable to a country."],
    ["Imitative / adoptive", "Adopts innovations introduced by others and sets up in the same manner. Very helpful in less developed countries: uses tested technology and creates jobs, so treated as an agent of economic development."],
    ["Fabian", "Timid and cautious. Imitates only when certain that not doing so will damage the business. Sceptical, not adaptable, decides at the last moment."],
    ["Drone", "Conservative, orthodox. Never gives up traditional business, machinery or systems; refuses change even at the risk of reduced returns. A laggard."],
  ];
  const sp = document.getElementById("l07danhof"), dOut = document.getElementById("l07danOut");
  sp.innerHTML = dan.map(([t], i) => `<button type="button" aria-pressed="false" data-d="${i}">${t}<br><small class="hint">${["most open", "copies", "cautious", "resists"][i]} to change</small></button>`).join("");
  const selD = i => { sp.querySelectorAll("button").forEach(b => b.setAttribute("aria-pressed", +b.dataset.d === i)); dOut.innerHTML = `<h4>${dan[i][0]}</h4><p>${dan[i][1]}</p>`; };
  sp.querySelectorAll("button").forEach(b => b.onclick = () => selD(+b.dataset.d));
  selD(0);
});
