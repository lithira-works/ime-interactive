// Lecture 10 — Financial Planning & Cash Management
addLecture({
  id: "l10",
  intro: "How a venture plans its money: the three final accounts, budgets, pro forma statements, and why cash is not the same as profit.",
  body:
  chapter("l10-plan", "Financial planning", `
    <p class="def-line"><mark>Financial planning</mark> is the task of determining how a business will <b>afford to achieve its strategic goals</b> and objectives.</p>
    <p>It gives the entrepreneur a complete picture of:</p>
    <ul>
      <li>How much money is coming in, and when</li>
      <li>Where money is going and how much cash is available</li>
      <li>The projected financial position of the firm</li>
    </ul>
    <p>It explains how the entrepreneur will <b>meet financial obligations and keep the venture liquid</b>, and confirms the business plan's objectives are financially achievable.</p>
    ${note("trap", "A common mistake: failing to collect and analyse basic financial data. Many entrepreneurs run their companies with no financial plan at all.")}
    <p>Financial planning also helps set financial targets and reward staff for meeting them.</p>
  `) +
  chapter("l10-accounting", "Accounting: the language of business", `
    <p><mark>Accounting</mark> is known as the "language of business". Its end product, financial statements, gives users information for making decisions.</p>
    <h3>Four phases</h3>
    <div class="grid2">
      <div class="tile accent"><h4>a) Recording</h4><p>Write down every transaction.</p></div>
      <div class="tile accent"><h4>b) Classifying</h4><p>Group similar transactions.</p></div>
      <div class="tile accent"><h4>c) Summarizing</h4><p>Produce totals and statements.</p></div>
      <div class="tile accent"><h4>d) Interpreting</h4><p>Explain what the numbers mean.</p></div>
    </div>
    ${note("hook", "<b>R-C-S-I</b>: \"<b>R</b>eal <b>C</b>ompanies <b>S</b>how <b>I</b>nformation.\"")}
    ${note("def", "<b>Entity concept</b>: a business is a separately identifiable organization using resources to reach its goals, either profit-making or non-profit.")}
    <p>The <b>final accounts</b> of a company are the <b>profit and loss account, the balance sheet and the cash flow statement</b>.</p>
  `) +
  chapter("l10-pl", "Profit and loss account", `
    <p>The <mark>profit and loss account</mark> (income statement) shows <b>income and expenses over a period</b>, and whether the business made a profit or loss. It is compiled annually, quarterly, monthly or even weekly, usually on an <b>accrual basis</b> (recorded when the transaction happens).</p>
    <h3>Try it: build a P&amp;L</h3>
    <div class="calc wide">
      <div class="fields">
        <label class="field">Income / turnover (sales)<input type="number" id="plInc" value="500000" min="0" step="1000" inputmode="decimal"></label>
        <label class="field">Cost of sales<input type="number" id="plCos" value="200000" min="0" step="1000" inputmode="decimal"></label>
        <label class="field">Operating expenses<input type="number" id="plOpx" value="180000" min="0" step="1000" inputmode="decimal"></label>
      </div>
      <div class="out" id="plOut" aria-live="polite"></div>
    </div>
    ${table(["Part", "Meaning"], [
      ["Income or turnover", "Total sales, listed by category then totalled."],
      ["Cost of sales", "Direct costs of the goods sold, such as the product itself or direct labour."],
      ["Gross profit", "Income minus cost of sales."],
      ["Operating expenses", "General running costs: admin, stationery, insurance, rent, interest, and depreciation of assets."],
      ["Net profit", "Gross profit minus all expenses. The actual profit of the business."],
    ])}
    ${note("hook", "Sales − cost of sales = <b>gross</b>. Gross − running costs = <b>net</b>. \"Gross is before the bills, net is what's left.\"")}
    ${note("trap", "The income statement measures <b>profitability, not cash flow</b>. It comes in two forms: single-step and <b>multi-step</b>, which shows four profit measures: gross, operating, pretax and after-tax.")}
  `) +
  chapter("l10-bs", "Balance sheet", `
    <p>The <mark>balance sheet</mark> (net worth statement) is a <b>snapshot of the financial position at one point in time</b>: what the business owns and owes.</p>
    <p class="def-line">Assets = Liabilities + Shareholder equity</p>
    <h3>Try it: make it balance</h3>
    <div class="calc wide">
      <div class="fields">
        <label class="field">Cash and receivables (short-term assets)<input type="number" id="bsA1" value="120000" min="0" step="1000"></label>
        <label class="field">Property, plant and equipment (long-term assets)<input type="number" id="bsA2" value="380000" min="0" step="1000"></label>
        <label class="field">Payables and wages (short-term liabilities)<input type="number" id="bsL1" value="60000" min="0" step="1000"></label>
        <label class="field">Bank loans (long-term liabilities)<input type="number" id="bsL2" value="200000" min="0" step="1000"></label>
        <label class="field">Shareholder equity<input type="number" id="bsE" value="200000" min="0" step="1000"></label>
      </div>
      <div class="out" id="bsOut" aria-live="polite"></div>
    </div>
    <div class="grid2">
      <div class="tile"><h4>Assets</h4><p>Short-term: cash, accounts receivable. Long-term: property, plant and equipment (PP&amp;E).</p></div>
      <div class="tile"><h4>Liabilities</h4><p>Short-term: accounts payable, wages payable. Long-term: bank loans, other debt.</p></div>
      <div class="tile"><h4>Shareholder equity</h4><p>Money attributable to the owners.</p></div>
      <div class="tile"><h4>Retained earnings</h4><p>Net earnings reinvested, used to pay debt, or paid to shareholders as dividends.</p></div>
    </div>
    ${note("eg", "Used by executives, investors, analysts and regulators to judge financial health. Fundamental analysts use it to calculate financial ratios.")}
  `) +
  chapter("l10-cf", "Cash flow statement", `
    <p>The <mark>cash flow statement</mark> summarizes the <b>cash and cash equivalents entering and leaving</b> the company. It shows how well the company generates cash to pay debts and fund operating expenses, and it is a mandatory part of financial reports.</p>
    <div class="grid3">
      <div class="tile accent"><h4>Operating activities</h4><p>Cash from the core business: sales receipts, paying suppliers and staff.</p></div>
      <div class="tile accent"><h4>Investing activities</h4><p>Buying or selling long-term assets such as equipment.</p></div>
      <div class="tile accent"><h4>Financing activities</h4><p>Loans, repayments, owner investment, dividends.</p></div>
    </div>
    <ul>
      <li>Two calculation methods: <b>direct</b> and <b>indirect</b>.</li>
      <li>Derived from the income statement and balance sheet; it starts from <b>net earnings</b>.</li>
      <li>Net cash flow for the year should equal the change in cash between two consecutive balance sheets.</li>
      <li>Shows whether the company has enough <b>liquidity</b>, helps predict future cash flow and budget, and tells investors about financial health.</li>
    </ul>
    ${note("hook", "<b>O-I-F</b>: \"<b>O</b>perate, <b>I</b>nvest, <b>F</b>inance.\" Day-to-day, long-term assets, funding.")}
    <h3>Practice: which activity?</h3>
    ${game("l10")}
  `) +
  chapter("l10-budget", "Budgeting and pro forma statements", `
    <h3>Budgeting</h3>
    <ul>
      <li>A <mark>budget</mark> is an estimate of revenue and expenses over a specified future period, usually a year.</li>
      <li>It pictures likely future sales, production, expenses, machinery and cash flows, so the organization can <b>mitigate future losses or risks</b>.</li>
      <li>It is like a <b>blueprint</b> of the organization's future and creates <b>financial discipline</b>.</li>
      <li>Budgets are built on estimations, so the company needs a sound basis for them.</li>
    </ul>
    <h3>Pro forma financial plan</h3>
    <p><mark>Pro forma</mark> statements are financial reports based on <b>assumptions about future events</b>, often shown to outsiders as part of an investment or lending proposal. A budget is a kind of pro forma statement.</p>
    ${note("trap", "The problem with pro forma statements: they rely on management's assumptions, which may turn out to be very inaccurate.")}
    ${table(["Pro forma statement", "What it shows"], [
      ["Pro forma income statement", "Expected profitability: revenue minus expenses, using realistic revenue assumptions."],
      ["Pro forma balance sheet", "Expected assets, liabilities and equity. Lenders use it to check the debt-to-equity ratio; too high and borrowing may not be available."],
      ["Pro forma cash flow statement", "When cash shortages or surpluses may happen, and whether cutting spending or a loan would help."],
    ])}
    <div class="grid3">
      <div class="tile"><h4>Short term</h4><p>Several weeks ahead; <b>highly accurate</b>. Uses existing payables and outstanding invoices.</p></div>
      <div class="tile"><h4>Medium term</h4><p>Estimates revenue not yet billed and the expenses to support it.</p></div>
      <div class="tile"><h4>Long term</h4><p>Budgeted revenue turned into receipts; <b>not very accurate</b>.</p></div>
    </div>
  `) +
  chapter("l10-cash", "Managing cash: cash is not profit", `
    <div class="grid2">
      <div class="tile accent"><h4>Profit</h4><p>Total revenue minus total expenses.</p></div>
      <div class="tile accent"><h4>Cash</h4><p>Money that is free and readily available to use. Cash flow measures liquidity: the ability to pay bills.</p></div>
    </div>
    <h3>See the difference</h3>
    <p>A shop sells Rs. 300,000 of goods this month, but customers pay in 60 days. Drag the slider for how much is paid this month.</p>
    <div class="calc wide">
      <label class="field">Share of sales paid in cash this month: <span id="cashPctLbl"></span><input type="range" id="cashPct" min="0" max="100" value="20"></label>
      <div class="out" id="cashOut" aria-live="polite"></div>
    </div>
    ${note("hook", "A business can be <b>profitable and still go bust</b> if the cash arrives too late to pay the bills.")}
    <h3>Cash budget</h3>
    <p>A <b>"cash map"</b> showing how much cash is needed and when receipts and payments happen. It predicts the cash needed to run smoothly. Steps:</p>
    ${stepper([
      ["Minimum balance", "1", "<p>Determine a minimum cash balance to keep as a safety cushion.</p>"],
      ["Forecast sales", "2", "<p>Estimate sales for each month.</p>"],
      ["Forecast receipts", "3", "<p>Estimate when cash from those sales actually arrives.</p>"],
      ["Forecast disbursements", "4", "<p>Estimate when cash goes out: suppliers, wages, rent, loans.</p>"],
      ["End-of-month balance", "5", "<p>Opening cash + receipts − disbursements = end-of-month balance.</p>"],
    ])}
    <h3>Benefits of managing cash</h3>
    <ul>
      <li>Increase the amount and speed of cash flowing <b>in</b></li>
      <li>Reduce the amount and speed of cash flowing <b>out</b></li>
      <li>Make the most efficient use of available cash</li>
      <li>Take advantage of savings such as cash discounts</li>
      <li>Finance seasonal business needs</li>
    </ul>
  `),
  cheat: [
    "Financial planning: how the business will afford its goals; funds in/out, cash available, projected position, liquidity",
    "Accounting = language of business: recording, classifying, summarizing, interpreting · entity concept",
    "Final accounts: P&L, balance sheet, cash flow statement",
    "P&L: income − cost of sales = gross profit; − operating expenses = net profit · accrual basis · measures profit not cash",
    "Balance sheet: snapshot · assets = liabilities + shareholder equity",
    "Cash flow statement: operating, investing, financing · direct and indirect methods",
    "Budget: estimate of revenue and expenses, usually a year · Pro forma: statements built on assumptions (income, balance sheet, cash flow; short/medium/long term)",
    "Cash ≠ profit · Cash budget: minimum balance, sales, receipts, disbursements, end-of-month balance",
  ],
});

GAMES.l10 = { opts: ["Operating", "Investing", "Financing"], items: [
  { q: "Cash received from customers for goods sold.", a: "Operating", why: "Core business activity." },
  { q: "Buying a new delivery van.", a: "Investing", why: "Purchase of a long-term asset." },
  { q: "Taking out a bank loan.", a: "Financing", why: "Raising funds." },
  { q: "Paying staff salaries.", a: "Operating", why: "Day-to-day running costs." },
  { q: "Selling old factory equipment.", a: "Investing", why: "Sale of a long-term asset." },
  { q: "Paying dividends to shareholders.", a: "Financing", why: "Returns to owners." },
  { q: "Paying suppliers for stock.", a: "Operating", why: "Core business activity." },
  { q: "Owners invest more money into the business.", a: "Financing", why: "Owner funding." },
]};

QUIZ.l10 = [
  { q: "Financial planning determines…", o: ["How a business will afford to achieve its strategic goals", "Only staff salaries", "Only the logo budget", "Only tax payments"], a: 0, why: "Definition of financial planning." },
  { q: "Accounting is commonly called…", o: ["The language of business", "The art of selling", "The science of marketing", "The heart of operations"], a: 0, why: "The language of business." },
  { q: "The four phases of accounting are…", o: ["Plan, do, check, act", "Recording, classifying, summarizing, interpreting", "Buy, sell, save, spend", "Earn, invest, borrow, repay"], a: 1, why: "Recording, classifying, summarizing, interpreting." },
  { q: "The final accounts of a company are…", o: ["P&L, balance sheet, cash flow statement", "Budget, invoice, receipt", "Sales, purchases, stock", "Assets, wages, rent"], a: 0, why: "The three final accounts." },
  { q: "Gross profit equals…", o: ["Income minus cost of sales", "Income minus all expenses", "Assets minus liabilities", "Cash in minus cash out"], a: 0, why: "Gross profit = income − cost of sales." },
  { q: "Net profit is…", o: ["Total sales", "Gross profit minus operating expenses", "Assets plus liabilities", "Cash in the bank"], a: 1, why: "The actual profit after all expenses." },
  { q: "The income statement measures…", o: ["Cash flow", "Profitability", "Liquidity only", "Market share"], a: 1, why: "Profitability, not cash flow." },
  { q: "The multi-step income statement shows how many profit measures?", o: ["Two", "Three", "Four", "Five"], a: 2, why: "Gross, operating, pretax, after-tax." },
  { q: "The balance sheet equation is…", o: ["Assets = Liabilities + Shareholder equity", "Profit = Revenue + Costs", "Cash = Profit", "Assets = Revenue − Expenses"], a: 0, why: "Assets = liabilities + equity." },
  { q: "The balance sheet shows the financial position…", o: ["Over a year", "At a given point in time", "Only in the future", "Only for tax"], a: 1, why: "A snapshot at a point in time." },
  { q: "Buying equipment appears under which cash flow activity?", o: ["Operating", "Investing", "Financing", "None"], a: 1, why: "Investing activities." },
  { q: "The two methods of calculating cash flow are…", o: ["Direct and indirect", "Gross and net", "Short and long", "Fixed and variable"], a: 0, why: "Direct and indirect." },
  { q: "The main problem with pro forma statements is that…", o: ["They are illegal", "They rely on assumptions that may prove inaccurate", "They ignore revenue", "They are too short"], a: 1, why: "Management's assumptions may differ substantially from reality." },
  { q: "Which pro forma cash flow period is considered highly accurate?", o: ["Short term", "Medium term", "Long term", "All equally"], a: 0, why: "Short-term projections over several weeks." },
  { q: "\"Cash ≠ profits\" means…", o: ["A profitable business always has cash", "A business can be profitable yet short of available cash", "Cash is always higher than profit", "Profit is always cash"], a: 1, why: "Profit is revenue minus expenses; cash is money available now." },
];

CARDS.l10 = [
  ["Financial planning", "Determining how a business will afford to achieve its strategic goals and objectives"],
  ["Accounting phases", "Recording, classifying, summarizing, interpreting"],
  ["Entity concept", "A business is a separately identifiable organization using resources to reach its goals"],
  ["Final accounts", "Profit and loss account, balance sheet, cash flow statement"],
  ["Gross profit", "Income (turnover) minus cost of sales"],
  ["Net profit", "Gross profit minus all operating expenses"],
  ["Multi-step income statement", "Shows gross, operating, pretax and after-tax profit"],
  ["Balance sheet equation", "Assets = Liabilities + Shareholder equity"],
  ["Retained earnings", "Net earnings reinvested, used to pay debt, or paid as dividends"],
  ["Cash flow activities", "Operating, investing, financing"],
  ["Budget", "An estimate of revenue and expenses for a future period, usually a year"],
  ["Pro forma statements", "Financial reports based on assumptions about future events"],
  ["Cash vs profit", "Profit = revenue − expenses. Cash = money readily available"],
  ["Cash budget steps", "Minimum balance, forecast sales, receipts, disbursements, end-of-month balance"],
];

INITS.push(function l10() {
  const fmt = n => "Rs. " + Math.round(n).toLocaleString("en-US");
  const num = id => Math.max(0, Number(document.getElementById(id).value) || 0);
  const cell = (label, v, cls = "") => `<div class="${cls}"><small>${label}</small><b>${fmt(v)}</b></div>`;

  function pl() {
    const inc = num("plInc"), cos = num("plCos"), opx = num("plOpx"), gp = inc - cos, np = gp - opx;
    document.getElementById("plOut").innerHTML =
      cell("Gross profit (income − cost of sales)", gp, gp >= 0 ? "pos" : "neg") +
      cell("Net profit (gross − operating expenses)", np, np >= 0 ? "pos" : "neg") +
      `<div><small>Net profit margin</small><b>${inc ? (np / inc * 100).toFixed(1) : "0"}%</b></div>`;
  }
  ["plInc", "plCos", "plOpx"].forEach(id => document.getElementById(id).addEventListener("input", pl)); pl();

  function bs() {
    const a = num("bsA1") + num("bsA2"), l = num("bsL1") + num("bsL2"), e = num("bsE"), diff = a - (l + e);
    document.getElementById("bsOut").innerHTML = cell("Total assets", a) + cell("Liabilities + equity", l + e) +
      `<div class="${diff === 0 ? "pos" : "neg"}"><small>Status</small><b>${diff === 0 ? "Balanced" : (diff > 0 ? "Assets higher by " : "Assets lower by ") + fmt(Math.abs(diff))}</b></div>`;
  }
  ["bsA1", "bsA2", "bsL1", "bsL2", "bsE"].forEach(id => document.getElementById(id).addEventListener("input", bs)); bs();

  const r = document.getElementById("cashPct");
  function cash() {
    const sales = 300000, cost = 180000, wages = 90000, paid = sales * r.value / 100, profit = sales - cost - wages, cashFlow = paid - cost - wages;
    document.getElementById("cashPctLbl").textContent = r.value + "%";
    document.getElementById("cashOut").innerHTML = cell("Profit this month", profit, "pos") + cell("Cash change this month", cashFlow, cashFlow >= 0 ? "pos" : "neg") +
      `<div><small>What it means</small><b style="font-size:1rem">${cashFlow >= 0 ? "Profitable and cash-positive." : "Profitable, but short of cash to pay bills."}</b></div>`;
  }
  r.addEventListener("input", cash); cash();
});
