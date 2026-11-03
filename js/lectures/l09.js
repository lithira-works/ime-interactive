// Lecture 9 — Business Plan
addLecture({
  id: "l09",
  intro: "What a business plan is, who writes one, the two jobs it does, the three tests it must pass, what goes in it, and how to write a good one.",
  body:
  chapter("l09-what", "What a business plan is", `
    <p class="def-line">A <mark>business plan</mark> is a written document that defines the goals of your business and describes how you will attain them.</p>
    <div class="grid2">
      <div class="tile">It is worth a considerable investment of time, effort and energy.</div>
      <div class="tile">It sets objectives, defines budgets, engages partners and <b>anticipates problems before they occur</b>.</div>
      <div class="tile">It is critical for a company's success.</div>
      <div class="tile">Different businesses need different types of plan; each section explains a core aspect of the company.</div>
    </div>
    <h3>Who writes a business plan?</h3>
    <ul>
      <li><b>Researchers</b> with a unique idea that can be commercialized</li>
      <li><b>Young ventures</b> without enough capital to turn their idea into a commercial product</li>
      <li>A <b>small industry</b> that wants to grow</li>
    </ul>
    ${note("hook", "A plan is a <b>road map</b> through unfamiliar, harsh, dangerous territory. \"Don't attempt a trip without a map!\" It doesn't guarantee success, but it raises your chances.")}
  `) +
  chapter("l09-functions", "Two essential functions", `
    <div class="grid2">
      <div class="tile accent"><h4>1. Guiding the company</h4><p>Charting its future course and defining the strategy for following it. (Internal use.)</p></div>
      <div class="tile accent"><h4>2. Attracting lenders and investors</h4><p>Convincing them to provide the capital the business needs. (External use.)</p></div>
    </div>
    ${note("hook", "<b>Inside</b>: a compass for the team. <b>Outside</b>: a pitch for the money.")}
  `) +
  chapter("l09-tests", "Three tests a plan must pass", `
    <div class="grid3">
      <div class="tile accent"><h4>Reality test</h4><p>Proves that a <b>market really exists</b> for your product or service, and that you can <b>build it for the cost</b> in the plan.</p></div>
      <div class="tile accent"><h4>Competitive test</h4><p>Evaluates your <b>position relative to competitors</b>, and management's ability to build a company that gains an <b>edge over rivals</b>.</p></div>
      <div class="tile accent"><h4>Value test</h4><p>Proves the venture offers investors or lenders an <b>attractive rate of return</b> or a high probability of <b>repayment</b>.</p></div>
    </div>
    ${note("hook", "<b>R-C-V</b>: Is it <b>Real</b>? Can it <b>Compete</b>? Is it <b>Valuable</b> to investors?")}
    ${game("l09")}
  `) +
  chapter("l09-elements", "Key elements of a business plan", `
    <p>Use this as a checklist when you write your own plan. Ticks stay in this browser.</p>
    <ul class="checklist wide" id="l09check"></ul>
    <p class="hint" id="l09count" aria-live="polite"></p>
    ${note("trap", "The <b>executive summary</b> comes first in the plan but is usually written last, once everything else is clear.")}
  `) +
  chapter("l09-guide", "Guidelines for writing it", `
    <ol>
      <li><b>No one can create your plan for you.</b></li>
      <li>Lenders want financial projections, but they care more about the <b>strategies for reaching</b> them.</li>
      <li>Show how you'll stand apart from competitors. Don't fall into the <b>"me too" trap</b>.</li>
      <li>Identify your target market and give <b>evidence that customers exist</b>.</li>
      <li>Prove the business will <b>make money</b>, eventually if not immediately.</li>
      <li>Use <b>spreadsheets</b> for financial forecasts.</li>
      <li>Always include <b>cash flow projections</b>.</li>
      <li>Keep it <b>crisp: 25 to 40 pages</b>.</li>
      <li><b>Tell the truth, always.</b></li>
    </ol>
    ${note("trap", "Length: <b>25–40 pages</b>. And cash flow projections are \"always\" included.")}
    ${ask("An investor reads your plan and says \"this is just like every other delivery app\". Which guideline did you miss?", "Showing how you'll set yourself apart: you fell into the \"me too\" trap.")}
  `),
  cheat: [
    "Business plan: written document defining goals and how you'll reach them; sets objectives, budgets, partners, anticipates problems",
    "Who writes: researchers with a commercial idea, young ventures lacking capital, small industries wanting to grow",
    "Two functions: guide the company (strategy) and attract lenders/investors (capital)",
    "Three tests: reality (market exists, cost achievable), competitive (position, edge), value (return or repayment)",
    "Elements: packaging, executive summary, vision/mission, history, industry profile, business model, strategy, products, marketing, market claims, customer interest, competitors, team, operations, financials, loan/investment proposal",
    "Guidelines: yours alone, strategies over numbers, avoid \"me too\", prove customers, prove profit, spreadsheets, cash flow, 25–40 pages, truth",
  ],
});

GAMES.l09 = { opts: ["Reality test", "Competitive test", "Value test"], items: [
  { q: "Survey data shows 2,000 local cafés would buy your product.", a: "Reality test", why: "Proves a market really exists." },
  { q: "You show your app is faster and cheaper than the three market leaders.", a: "Competitive test", why: "Position relative to competitors." },
  { q: "Projections show investors could earn a 35% annual return.", a: "Value test", why: "Attractive rate of return." },
  { q: "Supplier quotes prove you can build it within your cost estimate.", a: "Reality test", why: "Can build it for the cost in the plan." },
  { q: "The bank wants to know how likely the loan is to be repaid.", a: "Value test", why: "Probability of repayment." },
  { q: "Your management team's experience gives you an edge over rivals.", a: "Competitive test", why: "Management's ability to gain an edge." },
]};

QUIZ.l09 = [
  { q: "A business plan is…", o: ["A tax form", "A written document defining your goals and how you'll attain them", "A marketing poster", "A patent application"], a: 1, why: "Definition from the lecture." },
  { q: "Which is NOT listed as someone who writes a business plan?", o: ["Researchers with a commercial idea", "Young ventures lacking capital", "Small industries wanting to grow", "Customers choosing a product"], a: 3, why: "The three groups are researchers, young ventures and small industries." },
  { q: "The two essential functions of a business plan are…", o: ["Hiring and firing", "Guiding the company and attracting lenders/investors", "Advertising and selling", "Taxes and audits"], a: 1, why: "Guide the company and attract capital." },
  { q: "Proving a market exists and the product can be built for the estimated cost is the…", o: ["Reality test", "Competitive test", "Value test", "Stage gate"], a: 0, why: "Reality test." },
  { q: "The value test proves…", o: ["The product works", "Investors get an attractive return or high probability of repayment", "There are no competitors", "Staff are happy"], a: 1, why: "Value test." },
  { q: "Evaluating your position relative to competitors is the…", o: ["Reality test", "Competitive test", "Value test", "Feasibility test"], a: 1, why: "Competitive test." },
  { q: "According to the guidelines, a business plan should be…", o: ["5–10 pages", "25–40 pages", "100+ pages", "One page only"], a: 1, why: "Keep it crisp: 25–40 pages." },
  { q: "Lenders are more interested in…", o: ["The font", "The strategies for reaching the financial projections", "The founder's hobbies", "The logo"], a: 1, why: "Strategies, not just projections." },
  { q: "What should a business plan ALWAYS include?", o: ["Cash flow projections", "Celebrity endorsements", "A patent", "A finished product"], a: 0, why: "Always include cash flow projections." },
  { q: "The \"me too\" trap means…", o: ["Copying competitors without differentiation", "Hiring friends", "Borrowing too much", "Writing too much"], a: 0, why: "Show how you set yourself apart." },
  { q: "Which is a key element of a business plan?", o: ["Executive summary", "Employee birthdays", "Office decoration", "Personal diary"], a: 0, why: "Packaging, executive summary, vision/mission… loan or investment proposal." },
];

CARDS.l09 = [
  ["Business plan", "A written document defining the goals of your business and how you will attain them"],
  ["Who writes business plans", "Researchers with a commercial idea, young ventures lacking capital, small industries wanting to grow"],
  ["Two functions", "Guiding the company (strategy) and attracting lenders and investors (capital)"],
  ["Reality test", "A market exists, and you can build it for the cost estimates"],
  ["Competitive test", "Position relative to competitors; management's ability to gain an edge"],
  ["Value test", "Attractive return for investors or high probability of repayment for lenders"],
  ["Plan length", "Crisp: 25 to 40 pages"],
  ["\"Me too\" trap", "Failing to show how you differ from competitors"],
  ["Always include", "Cash flow projections"],
  ["Road map analogy", "A plan guides you through unfamiliar, harsh territory; it raises your chances but guarantees nothing"],
];

INITS.push(function l09() {
  const items = ["Packaging", "Executive summary", "Vision and mission statements", "Company history", "Business and industry profile", "Business model", "Business strategy", "Description of products/services",
    "Marketing strategy", "Documented market claims", "Evidence of customer interest", "Competitor analysis", "Description of management team", "Plan of operation", "Projected financial statements", "Loan or investment proposal"];
  const saved = store.get("plan", {}) || {};
  const ul = document.getElementById("l09check"), count = document.getElementById("l09count");
  ul.innerHTML = items.map((t, i) => `<li><label><input type="checkbox" data-i="${i}"${saved[i] === true ? " checked" : ""}> ${t}</label></li>`).join("");
  const paint = () => { const n = ul.querySelectorAll("input:checked").length; count.textContent = `${n} of ${items.length} elements covered`; };
  ul.querySelectorAll("input").forEach(c => c.addEventListener("change", () => { saved[c.dataset.i] = c.checked; store.set("plan", saved); paint(); }));
  paint();
});
