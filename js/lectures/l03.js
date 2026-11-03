// Lecture 3 — Dynamics of Ideation & Creativity
addLecture({
  id: "l03",
  intro: "How ideas are formed, how the creative process unfolds, what helps and blocks creativity, and how an idea becomes a real opportunity.",
  body:
  chapter("l03-ideation", "Ideas and ideation", `
    <p class="def-line"><mark>Ideation</mark> is the process of generating, developing and communicating new ideas: the formation of ideas and concepts.</p>
    <ul>
      <li>It describes the sequence of thoughts <b>from the original concept to implementation</b>.</li>
      <li>Typically means developing and conveying prescriptive ideas to others, often in a business setting.</li>
      <li>Ideas can spring from past or present knowledge, external influences, opinions, convictions or principles.</li>
      <li>Ideation can be done by <b>individuals, organizations or crowds</b>.</li>
      <li>It can be expressed in <b>graphical, written or verbal</b> form.</li>
    </ul>
    ${note("def", "<b>Creativity</b> is the phenomenon by which something somehow new and somehow valuable is formed.")}
    ${note("hook", "Ideation is the <b>journey</b> of an idea: born → developed → communicated.")}
  `) +
  chapter("l03-creativity", "Creativity", `
    <p class="def-line"><mark>Creativity</mark> is a person's ability to generate new ideas, alternatives, solutions and possibilities in a unique and different way.</p>
    <ul>
      <li>The ability to conceive something <b>unpredictable, original and unique</b>.</li>
      <li>It must be <b>expressive, exciting and imaginative</b>.</li>
      <li>A brainstorming, mind-stretching activity where you think beyond your usual imagination to produce something worthwhile.</li>
      <li>An activity of <b>unveiling something previously hidden</b>.</li>
    </ul>
    ${note("eg", "Reddit borrowed the idea of a social news site from Slashdot, but its upvote/downvote system made it stand out. Instagram did the same by adopting Snapchat's Stories. Creativity often means <b>adding more value to features that already exist</b>.")}
  `) +
  chapter("l03-process", "The creative process", `
    <p>The <mark>creative process</mark> is the evolution of an idea into its final form through a progression of thoughts and actions. Its stages were first described by <b>Graham Wallas in 1926</b>, and it relies on critical thinking and problem solving. The slides show five stages:</p>
    ${stepper([
      ["Preparation", "Stage 1", "<p>Research, consume, immerse and gather information about the problem.</p>"],
      ["Incubation", "Stage 2", "<p>Step back and let the mind work on it: explore, experiment, synthesise. Ideas form below conscious thought.</p>"],
      ["Illumination", "Stage 3", "<p>The \"aha!\" moment, when the idea suddenly becomes clear.</p>"],
      ["Evaluation", "Stage 4", "<p>Reflect, criticise and assess. Is the idea actually good and workable?</p>"],
      ["Implementation", "Stage 5", "<p>Work, work, work: turn the idea into something real.</p>"],
    ])}
    ${note("hook", "<b>P-I-I-E-I</b>: \"<b>P</b>lease <b>I</b>gnore <b>I</b>t, <b>E</b>veryone <b>I</b>mproves.\" Or picture a shower thought: prepare, forget about it, aha in the shower, check it, build it.")}
    ${note("trap", "Graham Wallas, 1926. Expect the name and year.")}
  `) +
  chapter("l03-techniques", "Creative idea generation techniques", `
    <p>Ten techniques designers use. Flip each card.</p>
    ${flips([
      ["Role playing", "Designers act out scenarios."],
      ["Active search", "Hunting for a particular solution."],
      ["Attribute listing", "Break an existing product into parts, then recombine them into new forms."],
      ["Brainstorm", "Generate a large number of solutions, focusing on quantity."],
      ["Critique", "Get input on current ideas, from a colleague or by critiquing your own."],
      ["Collaborate", "Two or more people working towards a common goal."],
      ["Documenting", "Writing ideas down, physically or electronically."],
      ["Expert opinion", "Ask experts to spot problems before full evaluation."],
      ["Empathy / user research", "Observe people in everyday situations to build empathy."],
      ["Storyboards", "Represent what you learned in research as a sequence of pictures."],
    ])}
    ${note("hook", "Split them in two: <b>alone</b> (active search, attribute listing, documenting, storyboards) and <b>with others</b> (role play, brainstorm, critique, collaborate, expert opinion, user research).")}
  `) +
  chapter("l03-enhance", "How to enhance creativity", `
    <p>Eight things an entrepreneur or manager can do to make a team more creative:</p>
    <div class="grid2">
      <div class="tile accent"><h4>Provide creativity training</h4><p>Everyone has creative capacity; training helps people tap it.</p></div>
      <div class="tile accent"><h4>Provide support</h4><p>Give tools and resources. One of the most valuable is <b>time</b>.</p></div>
      <div class="tile accent"><h4>Reward creativity</h4><p>Money, praise, recognition and celebration.</p></div>
      <div class="tile accent"><h4>Model creative behaviour</h4><p>Take chances and challenge the status quo yourself.</p></div>
      <div class="tile accent"><h4>Expect creativity</h4><p>Give employees permission to be creative.</p></div>
      <div class="tile accent"><h4>Expect and tolerate failure</h4><p>Remove the fear of failure; creative ideas produce failures too.</p></div>
      <div class="tile accent"><h4>Encourage curiosity</h4><p>Ask "what if…" and take a "maybe we could…" attitude.</p></div>
      <div class="tile accent"><h4>View problems as challenges</h4><p>Every problem is an opportunity to innovate.</p></div>
    </div>
    ${note("eg", "\"What separates the average person from Edison, Picasso or Shakespeare isn't creative capacity: it's the ability to tap that capacity.\"")}
    ${note("hook", "Train, Support, Reward, Model · Expect, Tolerate failure, Curiosity, Challenges.")}
  `) +
  chapter("l03-barriers", "Barriers to creativity", `
    <p>Nine habits that block creative thinking:</p>
    ${table(["Barrier", "Why it blocks creativity"], [
      ["Searching for the one right answer", "Schools teach one right answer, which blocks brainstorming."],
      ["Focusing on being logical", "Logic matters when evaluating, but too early it discourages intuition."],
      ["Blindly following the rules", "Creativity often means breaking existing rules."],
      ["Constantly being practical", "Suspending practicality for a while frees the mind."],
      ["Becoming overly specialised", "Seeing a problem as one specialty hides links to other areas."],
      ["Avoiding ambiguity", "Ambiguity forces us to think differently."],
      ["Fearing looking foolish", "New ideas are rarely born where everyone conforms."],
      ["Fearing mistakes and failure", "Failure is a pit stop on the way to success, not the end."],
      ["Believing \"I'm not creative\"", "The belief becomes reality. Everyone has creative potential."],
    ])}
    ${note("trap", "The slide's wording says searching for one right answer is \"a boon to creativity\"; the point it makes is the opposite: it <b>blocks</b> brainstorming. Write it as a barrier.")}
    <h3>Practice: help or barrier?</h3>
    ${game("l03")}
  `) +
  chapter("l03-opportunity", "From idea to opportunity", `
    <p class="def-line">An <mark>opportunity</mark> is a favourable set of circumstances that creates a need for a new product, service or process.</p>
    <ul>
      <li>Economically, entrepreneurial opportunities are situations with the potential for <b>new economic value</b>.</li>
      <li>Opportunities exist in reality. The entrepreneur's role is to <b>identify</b> them and spot which can generate economic value.</li>
    </ul>
    ${note("eg", "The slides point to Forbes' list of the next billion-dollar startups (2023): young companies that spotted an opportunity early and turned it into fast-growing businesses.")}
    <h3>The process: turning an idea into an opportunity</h3>
    ${stepper([
      ["Strategic fit", "1", "<p>You need something the market wants, or the market needs to want what you have.</p>"],
      ["Business plan", "2", "<p>A business plan converts the idea into an opportunity (Lecture 9).</p>"],
      ["Team", "3", "<p>Delivering an opportunity takes a team.</p>"],
      ["Leadership", "4", "<p>Guide the team effectively.</p>"],
      ["Resources", "5", "<p>Resources are needed to turn the idea into an opportunity.</p>"],
    ])}
    ${note("hook", "<b>S-B-T-L-R</b>: \"<b>S</b>tartups <b>B</b>uild <b>T</b>eams that <b>L</b>ead <b>R</b>esources.\"")}
    ${note("eg", "Successful entrepreneurs are good at working out which ideas can become opportunities, and then they turn them into one.")}
  `),
  cheat: [
    "Ideation: generating, developing and communicating new ideas, from concept to implementation",
    "Creativity: generating new ideas and possibilities in a unique way; something new and valuable",
    "Creative process (Graham Wallas, 1926): preparation, incubation, illumination, evaluation, implementation",
    "Techniques: role playing, active search, attribute listing, brainstorm, critique, collaborate, documenting, expert opinion, user research, storyboards",
    "Enhance: training, support (time), reward, model, expect, tolerate failure, curiosity, problems as challenges",
    "Barriers: one right answer, too logical, rules, too practical, over-specialised, avoiding ambiguity, fear of looking foolish, fear of failure, \"I'm not creative\"",
    "Opportunity: favourable circumstances creating a need · idea → opportunity: strategic fit, business plan, team, leadership, resources",
  ],
});

GAMES.l03 = { opts: ["Enhances creativity", "Barrier"], items: [
  { q: "A manager gives the team a free afternoon every week to explore ideas.", a: "Enhances creativity", why: "Providing support: time is one of the most valuable resources." },
  { q: "\"Let's find the one correct solution before we waste time on others.\"", a: "Barrier", why: "Searching for the one right answer blocks brainstorming." },
  { q: "A team lead celebrates a bold experiment even though it failed.", a: "Enhances creativity", why: "Expecting and tolerating failure." },
  { q: "An engineer refuses to look outside their own speciality.", a: "Barrier", why: "Becoming overly specialised." },
  { q: "Someone stays quiet because the idea might sound silly.", a: "Barrier", why: "Fearing looking foolish." },
  { q: "A founder keeps asking \"what if we did it the other way round?\"", a: "Enhances creativity", why: "Encouraging curiosity." },
  { q: "\"I'm just not a creative person.\"", a: "Barrier", why: "The belief becomes reality." },
  { q: "The CEO personally challenges the status quo and takes chances.", a: "Enhances creativity", why: "Modelling creative behaviour." },
]};

QUIZ.l03 = [
  { q: "Ideation is…", o: ["Only writing a business plan", "The process of generating, developing and communicating new ideas", "Patenting an invention", "Selling a product"], a: 1, why: "Formation of ideas and concepts, from concept to implementation." },
  { q: "Ideation can be conducted by…", o: ["Only individuals", "Only organizations", "Individuals, organizations or crowds", "Only experts"], a: 2, why: "Individuals, organizations, or crowds." },
  { q: "Creativity is a phenomenon whereby something is formed that is…", o: ["Old and cheap", "Somehow new and somehow valuable", "Always technical", "Always profitable"], a: 1, why: "Something somehow new and somehow valuable." },
  { q: "Who first articulated the stages of the creative process?", o: ["Peter Drucker", "Graham Wallas", "Howard Stevenson", "Arthur Cole"], a: 1, why: "Graham Wallas in 1926." },
  { q: "The \"aha!\" moment is which stage?", o: ["Preparation", "Incubation", "Illumination", "Evaluation"], a: 2, why: "Illumination." },
  { q: "Which stage involves research and gathering information?", o: ["Preparation", "Illumination", "Implementation", "Evaluation"], a: 0, why: "Preparation: research, consume, immerse, gather." },
  { q: "Breaking an existing product into parts and recombining them is…", o: ["Role playing", "Attribute listing", "Storyboarding", "Critique"], a: 1, why: "Attribute listing." },
  { q: "Observing people in everyday situations to build empathy is…", o: ["Empathy / user research", "Active search", "Documenting", "Expert opinion"], a: 0, why: "User research." },
  { q: "One of the most valuable resources for creativity is…", o: ["Money", "Time", "Office space", "Rules"], a: 1, why: "Providing support: time." },
  { q: "Which is NOT a way to enhance creativity?", o: ["Rewarding creativity", "Tolerating failure", "Blindly following the rules", "Encouraging curiosity"], a: 2, why: "Blindly following rules is a barrier." },
  { q: "\"Ambiguity forces us to think something different.\" Avoiding ambiguity is therefore…", o: ["A way to enhance creativity", "A barrier to creativity", "A stage of the creative process", "An idea generation technique"], a: 1, why: "Avoiding ambiguity is a barrier." },
  { q: "An opportunity is…", o: ["Any idea", "A favourable set of circumstances that creates a need for a new product, service or process", "A patent", "A loan"], a: 1, why: "Definition of opportunity." },
  { q: "Which is the first step in turning an idea into an opportunity?", o: ["Resources", "Strategic fit", "Leadership", "Team"], a: 1, why: "Strategic fit, business plan, team, leadership, resources." },
  { q: "Reddit's success over Slashdot came mainly from…", o: ["A brand-new technology", "The upvote/downvote system on an existing idea", "A government grant", "Lower prices"], a: 1, why: "Adding value to features that already exist." },
];

CARDS.l03 = [
  ["Ideation", "Generating, developing and communicating new ideas; from original concept to implementation"],
  ["Creativity", "Generating new ideas, alternatives and possibilities in a unique way; something new and valuable"],
  ["Creative process stages", "Preparation, Incubation, Illumination, Evaluation, Implementation (Graham Wallas, 1926)"],
  ["Illumination", "The \"aha!\" stage of the creative process"],
  ["Attribute listing", "Break a product into parts and recombine them into new forms"],
  ["Storyboards", "Represent research findings as a sequence of pictures"],
  ["Ways to enhance creativity", "Training, support (time), rewards, modelling, expecting it, tolerating failure, curiosity, problems as challenges"],
  ["Barriers to creativity", "One right answer, being too logical, blindly following rules, too practical, over-specialised, avoiding ambiguity, fear of looking foolish, fear of failure, \"I'm not creative\""],
  ["Opportunity", "A favourable set of circumstances that creates a need for a new product, service or process"],
  ["Idea → opportunity", "Strategic fit, business plan, team, leadership, resources"],
  ["Reddit lesson", "Borrowed Slashdot's idea; won with upvote/downvote. Add value to existing features"],
];
