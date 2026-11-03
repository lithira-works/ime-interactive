# Venture Notes

An interactive study site for innovation management and entrepreneurship: eleven lectures retold as short chapters with diagrams, practice tools, quizzes and spaced-repetition flashcards.

## Features

- **11 lectures, 64 chapters** — innovation, innovation tools, ideation and creativity, product development, the NPD process, entrepreneurs and their types, business models, business plans, finance, and marketing and operations
- **Margin notes** beside the text on wide screens: definitions, memory hooks, exam traps and examples
- **Interactive diagrams** — innovation matrix, mind map, sweet-spot Venn, stage-gate, House of Quality, value proposition canvas, business model and lean canvases, customer factory, marketing funnel
- **Practice tools** — scenario sorters, a P&L calculator, a balance-sheet checker, a cash-vs-profit demo
- **Quizzes** with explanations and a "questions I missed" exam mode
- **Spaced repetition** — flashcards return after 1, 3, 7, 14 and 30 days
- **Progress tracking**, light and dark themes, keyboard shortcuts, fully responsive

## Run locally

No build step. Open `index.html`, or serve the folder:

```bash
python -m http.server 5520
```

Progress is stored only in the browser's `localStorage`.

## Deploy

Static site, ready for Vercel. `vercel.json` sets a strict Content-Security-Policy and other security headers.

## Structure

```
index.html            page shell: home, review, exam, revision sheet
css/styles.css        design tokens and all styles
js/data.js            lecture list and content helpers
js/lectures/l01–l11   one file per lecture (chapters, quiz, flashcards, widgets)
js/app.js             routing, progress, quizzes, spaced repetition, keyboard
vercel.json           security headers
```

---

© Lithira Silva (li.kkaa). All rights reserved. Original lecture material belongs to its respective authors; this site is a personal study aid.
