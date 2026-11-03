// Lecture 11 — Marketing Plan & Operational Plan
addLecture({
  id: "l11",
  intro: "The two plans that turn a business plan into action: how you'll win and keep customers, and how the business will run day to day.",
  body:
  chapter("l11-4p", "Four Ps, four Cs and the core of marketing", `
    <p>The <b>4 Ps</b> describe marketing from the seller's side; the <b>4 Cs</b> describe the same things from the customer's side. Match each P to its C.</p>
    <div class="match wide" id="l11match" role="group" aria-label="Match the four Ps to the four Cs"></div>
    <p class="hint" id="l11matchOut" aria-live="polite">Select a P, then the C it pairs with.</p>
    ${note("hook", "Product → Customer <b>solution</b> · Price → Customer <b>cost</b> · Place → <b>Convenience</b> · Promotion → <b>Communication</b>.")}
    <h3>Fundamental concepts of marketing</h3>
    <div class="grid3">
      <div class="tile accent"><h4>Create the value</h4><p>Build something customers value.</p></div>
      <div class="tile accent"><h4>Communicate the value</h4><p>Tell customers why it matters.</p></div>
      <div class="tile accent"><h4>Deliver the value</h4><p>Get it to them reliably.</p></div>
    </div>
  `) +
  chapter("l11-econ", "Marketing plan: economics", `
    <p>Start with facts about your industry:</p>
    <ul>
      <li>Total market size, and what share you'll have (only important if you'll be a major player)</li>
      <li>Current demand in the target market</li>
      <li>Trends: growth, consumer preferences, product development</li>
      <li>Growth potential and opportunity for a business your size</li>
    </ul>
    <h3>Barriers to entry</h3>
    <div class="chips wide">${["High capital costs", "High production costs", "High marketing costs", "Consumer acceptance / brand recognition", "Training / skills", "Unique technology / patents", "Unions", "Shipping costs", "Tariff barriers / quotas"].map(b => `<span class="chip">${b}</span>`).join("")}</div>
    <p>And, importantly: <b>how will you overcome them?</b></p>
    ${note("eg", "External changes that could affect you: technology, government regulation, the economy, and your industry.")}
  `) +
  chapter("l11-product", "Product: features versus benefits", `
    <p>Describe products from the <b>customer's point of view</b>. For each one, list its features, then its benefits.</p>
    <div class="grid2">
      <div class="tile accent"><h4>Features</h4><p>What the product <b>is</b> or <b>has</b>. A house: shelter, lasts a long time, built from certain materials to a certain design.</p></div>
      <div class="tile accent"><h4>Benefits</h4><p>What it <b>does for the customer</b>. A house: pride of ownership, financial security, providing for the family, belonging to a neighbourhood.</p></div>
    </div>
    ${note("hook", "\"You build <b>features</b> into your product so you can sell the <b>benefits</b>.\"")}
    <p>Also state your <b>after-sale services</b>: delivery, warranty, service contracts, support, follow-up, refund policy.</p>
    ${game("l11f")}
  `) +
  chapter("l11-customers", "Customers and competition", `
    <p>Identify your target customers, their characteristics and locations. If you sell through distributors, wholesalers and retailers, analyse <b>both the end consumer and the middlemen</b>. You may have several groups; build a profile for the most important ones.</p>
    ${table(["Selling to consumers", "Selling to businesses"], [
      ["Age", "Industry (or part of one)"], ["Gender", "Location"], ["Location", "Size of firm"], ["Income level", "Quality, technology and price preferences"], ["Social class / occupation", ""], ["Education", ""],
    ])}
    <h3>Example customer persona</h3>
    <div class="tile wide">
      <p><b>Online store selling yoga pants.</b> Age 18–28, female, interested in athletics, gymnastics, fitness and yoga; university or college educated; buying power $5–$20; goal: get fit and slim.</p>
      <p style="margin:0"><b>Pain points:</b> no time to shop for fitness gear locally; wants faster results; looking for compression pants that support training.</p>
    </div>
    <h3>Competition</h3>
    <ul>
      <li>Which products and companies compete with you? Directly, or only for some products, customers or places?</li>
      <li>Indirect competitors too (video rental stores competed with cinemas).</li>
      <li>Compare yourself with your <b>three most important competitors</b> on factors that matter to customers, marking each as a strength or weakness.</li>
    </ul>
    <div class="chips wide">${["Products", "Price", "Quality", "Selection", "Service", "Reliability", "Stability", "Expertise", "Reputation", "Location", "Appearance", "Sales method", "Credit policies", "Advertising", "Image"].map(b => `<span class="chip">${b}</span>`).join("")}</div>
    <p>Then write a short paragraph on your competitive advantages and disadvantages.</p>
  `) +
  chapter("l11-niche", "Niche, strategy, promotion and channels", `
    <p><mark>Niche</mark>: in one short paragraph, define your unique corner of the market. Then outline a <b>strategy</b> consistent with it.</p>
    <h3>Promotion questions</h3>
    <ul>
      <li>Which advertising media, why, and how often?</li>
      <li>Low-cost methods: trade shows, catalogues, dealer incentives, word of mouth, networks of friends or professionals.</li>
      <li>What image do you want to project? Logo, cards, letterhead, brochures, signage.</li>
      <li>A system to identify and contact repeat customers?</li>
    </ul>
    <h3>Channels for a startup</h3>
    ${flips([
      ["Social media", "The face of modern marketing: reach a wider audience of potential customers."],
      ["Search engines", "A major revenue source for digital startups: long-term organic traffic."],
      ["Email marketing", "Tried and tested, used heavily for retargeting."],
      ["Advertising", "Know your brand first, then advertise to the right audience."],
      ["Affiliates & referrals", "Affiliates are businesses paid to promote you; referrals are loyal customers who bring friends and family."],
      ["Influencer marketing", "Doesn't guarantee sales, but spreads awareness of your brand."],
    ])}
    <h3>The marketing funnel</h3>
    <p>Select a stage to see what happens there.</p>
    <div class="funnel wide" id="l11funnel"></div>
    <div class="panel wide" id="l11funnelOut" aria-live="polite">Select a stage.</div>
    ${note("hook", "Funnel: \"<b>A I C I E P</b>\" — Awareness, Interest, Consideration, Intent, Evaluation, Purchase. Top two = lead <b>generation</b>, middle = lead <b>nurture</b>, bottom = <b>sales</b>.")}
  `) +
  chapter("l11-price", "Budget, pricing, location and forecast", `
    <div class="grid2">
      <div class="tile accent"><h4>Promotional budget</h4><p>How much before startup (goes into the startup budget) and ongoing (goes into the operating plan budget)?</p></div>
      <div class="tile accent"><h4>Pricing</h4><p>For most small businesses, the <b>lowest price is not a good policy</b>: it kills margin, customers may care less about price than you think, and big rivals can undercut you. Better: average prices, competing on <b>quality and service</b>.</p></div>
      <div class="tile accent"><h4>Proposed location</h4><p>Does location matter to customers? Convenient, parking, consistent with your image? Near competitors (car dealers, fast food) or away from them (convenience stores)?</p></div>
      <div class="tile accent"><h4>Distribution channels</h4><p>Retail, direct (mail order, web, catalogue), wholesale, own sales force, agents, independent reps, bidding on contracts.</p></div>
    </div>
    <h3>Sales forecast</h3>
    <p>A month-by-month projection based on market size, growth plan, marketing strategy and research. Do two:</p>
    <div class="grid2">
      <div class="tile"><h4>Best guess</h4><p>What you really expect.</p></div>
      <div class="tile"><h4>Worst case</h4><p>A low estimate you're confident of reaching no matter what.</p></div>
    </div>
    ${note("trap", "Keep notes on your research and assumptions for every spreadsheet. Funders will ask.")}
  `) +
  chapter("l11-ops", "Operational plan", `
    <p>The <mark>operational plan</mark> explains the <b>daily operation</b> of the business: its location, equipment, people, processes and environment.</p>
    ${stepper([
      ["Production", "", "<p>How and where products or services are produced: production techniques and costs, quality control, customer service, inventory control, product development (R&amp;D).</p>"],
      ["Location", "", "<p>Physical needs: space, building type, zoning, power and utilities. Access to transport, suppliers, walk-in customers, parking. For a factory, include a layout drawing. Most new companies shouldn't sink capital into construction. Estimate occupation costs (rent, maintenance, utilities, insurance, remodelling) and set business hours.</p>"],
      ["Legal environment", "", "<p>Licensing and bonding, permits, health, workplace and environmental regulations, special industry regulations, zoning and building codes, insurance, trademarks, copyrights and patents.</p>"],
      ["Personnel", "", "<p>Number of employees; skilled, unskilled or professional; how to find them; pay structure; training; who does what (terms of reference); written procedures and job descriptions; contract workers.</p>"],
      ["Inventory", "", "<p>Raw materials, supplies or finished goods; average value in stock; turnover rate versus industry; seasonal build-ups; ordering lead time.</p>"],
      ["Suppliers", "", "<p>Key suppliers, what they supply, credit and delivery terms, reliability, backups for critical items, expected shortages, and how to handle fluctuating costs.</p>"],
      ["Credit policies", "", "<p>Who gets credit and how much; checking creditworthiness; payment terms; prompt-payment discounts only if customary; build the cost of credit into prices.</p><p><b>Accounts receivable:</b> age them at least monthly to see how much money is tied up and spot slow payers. Then set a policy for slow payers: when to phone, when to send a letter, and when to involve a lawyer.</p><p><b>Accounts payable:</b> age what you owe suppliers. Paying too early drains cash; paying late loses discounts and damages credit.</p>"],
      ["Management & organization", "", "<p>Board of directors and advisory board; the managing director's experience and a continuity plan; an organizational chart if more than about ten employees; résumés if seeking funding; professional advisers: attorney, accountant, insurance agent, banker, consultants, mentors.</p>"],
    ])}
    ${note("hook", "Eight parts: \"<b>P</b>lease <b>L</b>et <b>L</b>ucky <b>P</b>eople <b>I</b>nvest <b>S</b>ome <b>C</b>ash <b>M</b>onthly\" — Production, Location, Legal, Personnel, Inventory, Suppliers, Credit, Management.")}
    ${note("def", "<b>Aging</b>: sorting money owed by how long it has been outstanding (for example 0–30, 31–60, 60+ days).")}
  `),
  cheat: [
    "4 Ps ↔ 4 Cs: product–customer solution, price–customer cost, place–convenience, promotion–communication",
    "Marketing core: create, communicate, deliver value",
    "Economics: market size and share, demand, trends, growth, barriers to entry and how to overcome them",
    "Features (what it is) vs benefits (what it does for the customer) · after-sale services",
    "Customers: demographic profiles for consumers and businesses · persona · compare with 3 main competitors",
    "Niche → strategy → promotion · channels: social, search, email, advertising, affiliates/referrals, influencers",
    "Funnel: awareness, interest, consideration, intent, evaluation, purchase · avoid lowest-price policy · best-guess and worst-case forecasts",
    "Operational plan: production, location, legal, personnel, inventory, suppliers, credit (aging AR/AP), management & organization",
  ],
});

GAMES.l11f = { opts: ["Feature", "Benefit"], items: [
  { q: "The phone has a 5,000 mAh battery.", a: "Feature", why: "What the product has." },
  { q: "You can go two days without charging.", a: "Benefit", why: "What it does for the customer." },
  { q: "The house is built from reinforced concrete.", a: "Feature", why: "A property of the product." },
  { q: "Peace of mind that your family is secure.", a: "Benefit", why: "Customer outcome." },
  { q: "The app syncs across all devices.", a: "Feature", why: "A capability of the product." },
  { q: "Never lose your notes again.", a: "Benefit", why: "What the customer gains." },
]};

QUIZ.l11 = [
  { q: "The 4 Ps are…", o: ["Product, price, place, promotion", "People, process, profit, plan", "Product, people, price, partners", "Plan, price, place, profit"], a: 0, why: "Product, price, place, promotion." },
  { q: "In the 4 Cs, \"place\" corresponds to…", o: ["Customer cost", "Convenience", "Communication", "Customer solution"], a: 1, why: "Place → convenience." },
  { q: "\"Promotion\" corresponds to which C?", o: ["Communication", "Convenience", "Customer cost", "Customer solution"], a: 0, why: "Promotion → communication." },
  { q: "The fundamental concepts of marketing are…", o: ["Create, communicate and deliver value", "Buy, sell, profit", "Plan, do, check", "Hire, train, fire"], a: 0, why: "Value creation, communication, delivery." },
  { q: "Which is a barrier to entry?", o: ["Unique technology / patents", "Low costs", "Many suppliers", "Free advertising"], a: 0, why: "Patents and unique technology are barriers." },
  { q: "\"Pride of ownership\" for a house is a…", o: ["Feature", "Benefit", "Price", "Channel"], a: 1, why: "Benefits are what the product does for the customer." },
  { q: "You build features into a product so that you can…", o: ["Raise the price", "Sell the benefits", "Avoid competition", "Skip marketing"], a: 1, why: "Sell the benefits." },
  { q: "For business customers, a demographic factor is…", o: ["Gender", "Size of firm", "Age", "Education"], a: 1, why: "Industry, location, size of firm, quality/technology/price preferences." },
  { q: "How many main competitors should you compare yourself with?", o: ["One", "Three", "Ten", "All of them"], a: 1, why: "Your three most important competitors." },
  { q: "For most small businesses, having the lowest price is…", o: ["The best policy", "Not a good policy", "Required by law", "Always profitable"], a: 1, why: "It robs margin; compete on quality and service." },
  { q: "The first stage of the marketing funnel is…", o: ["Purchase", "Awareness", "Intent", "Evaluation"], a: 1, why: "Awareness → interest → consideration → intent → evaluation → purchase." },
  { q: "Influencer marketing…", o: ["Guarantees sales", "Doesn't guarantee sales but spreads brand awareness", "Is illegal", "Only works offline"], a: 1, why: "Great for awareness, no guarantee of sales." },
  { q: "The two sales forecasts recommended are…", o: ["Best guess and worst case", "Daily and weekly", "Gross and net", "Fixed and variable"], a: 0, why: "Best guess and worst case." },
  { q: "The operational plan explains…", o: ["Only advertising", "The daily operation of the business", "Only the founder's biography", "Only the logo"], a: 1, why: "Location, equipment, people, processes, environment." },
  { q: "Aging your accounts receivable helps you…", o: ["Hire staff", "Track money tied up in customer credit and spot slow payers", "Design products", "Choose a logo"], a: 1, why: "A receivables aging analysis." },
  { q: "Paying suppliers too early…", o: ["Always saves money", "Depletes your cash", "Improves inventory", "Is required"], a: 1, why: "Paying too early depletes cash; too late costs discounts and credit." },
];

CARDS.l11 = [
  ["4 Ps", "Product, Price, Place, Promotion"],
  ["4 Cs", "Customer solution, Customer cost, Convenience, Communication"],
  ["Marketing fundamentals", "Create value, communicate value, deliver value"],
  ["Barriers to entry", "Capital, production and marketing costs; brand recognition; skills; patents; unions; shipping; tariffs/quotas"],
  ["Feature vs benefit", "Feature: what the product is or has. Benefit: what it does for the customer"],
  ["Consumer demographics", "Age, gender, location, income, social class/occupation, education"],
  ["Business demographics", "Industry, location, size of firm, quality/technology/price preferences"],
  ["Niche", "Your unique corner of the market, stated in one short paragraph"],
  ["Startup channels", "Social media, search engines, email, advertising, affiliates & referrals, influencers"],
  ["Marketing funnel", "Awareness, interest, consideration, intent, evaluation, purchase"],
  ["Pricing advice", "Avoid the lowest price; average prices, compete on quality and service"],
  ["Sales forecasts", "Best guess and worst case, month by month"],
  ["Operational plan parts", "Production, location, legal environment, personnel, inventory, suppliers, credit policies, management & organization"],
  ["Accounts receivable aging", "At least monthly; tracks money tied up in customer credit and slow payers"],
];

INITS.push(function l11() {
  // 4P ↔ 4C matching
  const pairs = [["Product", "Customer solution"], ["Price", "Customer cost"], ["Place", "Convenience"], ["Promotion", "Communication"]];
  const m = document.getElementById("l11match"), out = document.getElementById("l11matchOut");
  const left = pairs.map(p => p[0]), right = shuffle(pairs.map(p => p[1]));
  m.innerHTML = `<div class="grid2" style="margin:0;grid-template-columns:1fr">${left.map(t => `<button type="button" data-l="${t}">${t}</button>`).join("")}</div>
    <div class="grid2" style="margin:0;grid-template-columns:1fr">${right.map(t => `<button type="button" data-r="${t}">${t}</button>`).join("")}</div>`;
  let pick = null, got = 0;
  m.querySelectorAll("[data-l]").forEach(b => b.onclick = () => {
    if (b.classList.contains("ok")) return;
    m.querySelectorAll("[data-l]").forEach(x => x.classList.remove("sel")); b.classList.add("sel"); pick = b.dataset.l;
    out.textContent = `Now choose the C that matches ${pick}.`;
  });
  m.querySelectorAll("[data-r]").forEach(b => b.onclick = () => {
    if (!pick || b.classList.contains("ok")) return;
    const ok = pairs.some(([p, c]) => p === pick && c === b.dataset.r);
    const lb = m.querySelector(`[data-l="${pick}"]`);
    if (ok) { lb.classList.replace("sel", "ok"); b.classList.add("ok"); got++; out.textContent = got === 4 ? "All four matched." : `${pick} ↔ ${b.dataset.r}. ${4 - got} to go.`; pick = null; }
    else { b.classList.add("bad"); setTimeout(() => b.classList.remove("bad"), 350); out.textContent = `Not that one. ${pick} is the seller's view; think of what the customer gets.`; }
  });

  // funnel
  const st = [
    ["Awareness", "Lead generation", "Marketing campaigns and consumer research; events, advertising, trade shows, blogs, webinars, direct mail, viral campaigns, social media, search, media mentions."],
    ["Interest", "Lead generation", "Engagement and introduction to positioning: emails, targeted content, classes, newsletters."],
    ["Consideration", "Lead nurture", "Product information and specials; automated email campaigns, case studies, free trials."],
    ["Intent", "Lead nurture", "Product demos and shopping carts."],
    ["Evaluation", "Sales", "Sales adds to the nurture stream; marketing and sales work together to prove their product is best."],
    ["Purchase", "Sales", "The sales transaction is completed."],
  ];
  const colors = ["#2F5F8C", "#23695A", "#4C5C1F", "#8A5418", "#8A3646", "#5A4290"]; // dark enough for white text in both themes
  const f = document.getElementById("l11funnel"), fo = document.getElementById("l11funnelOut");
  f.innerHTML = st.map(([t], i) => `<button type="button" aria-pressed="false" data-f="${i}" style="width:${100 - i * 11}%;background:${colors[i]}">${t}</button>`).join("");
  f.querySelectorAll("button").forEach(b => b.onclick = () => {
    f.querySelectorAll("button").forEach(x => x.setAttribute("aria-pressed", x === b));
    const [t, g, d] = st[b.dataset.f]; fo.innerHTML = `<h4>${t} <span class="hint">· ${g}</span></h4><p>${d}</p>`;
  });
});
