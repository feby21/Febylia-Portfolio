/* ==========================================================================
   PROJECT DATA — the home page grid and the ticker are both built from this.

   To turn a reserved slot into a real project, edit its entry here:
     1. set  reserved: false
     2. change  status  (kind: "shipped" | "live" | "work" | "soon" | "planning")
     3. add  result,  chips  and a  visual
     4. set  href  to the new case study page, e.g. "work/hunch.html"
   No layout or HTML changes are needed.

   size:   "featured" (full width) | "normal"
   visual: { type: "phones", images: [{src, alt}] }
           { type: "flow", nodes: ["A", "B", "C"], main: 1 }
           { type: "stat", number: "7h → 10min", caption: "…" }
           { type: "placeholder", label: "Coming soon" }
   ticker: dir is "up" (▲), "down" (▼) or "flat" (●)
   ========================================================================== */

window.PROJECTS = [
  {
    slug: "love-bristol",
    title: "Love Bristol",
    status: { label: "Shipped · prototype", kind: "shipped" },
    category: "Product design",
    oneLiner: "A rewards app that gives students a reason to explore Bristol's newest district, built for the Bristol Business Improvement District.",
    result: "First Class · positive feedback from Bristol BID",
    chips: ["HTML", "CSS", "JavaScript", "PWA", "Claude Code"],
    visual: {
      type: "phones",
      images: [
        { src: "assets/img/love-bristol/wallet.png", alt: "Love Bristol wallet screen showing a credit balance and ways to earn credits" },
        { src: "assets/img/love-bristol/home.png", alt: "Love Bristol home screen with a wallet card and categories to explore" },
        { src: "assets/img/love-bristol/bazaar.png", alt: "Love Bristol event screen with a floor map and stalls to scan for credits" }
      ]
    },
    href: "work/love-bristol.html",
    size: "featured",
    reserved: false,
    ticker: { symbol: "LOVEBRISTOL", dir: "up", text: "First Class" }
  },
  {
    slug: "project-manager-agent",
    title: "Personal Project Manager Agent",
    status: { label: "Live · v1.2", kind: "live" },
    category: "AI agent",
    oneLiner: "An AI agent that ranks my projects, plans my week into my calendar and replans when things overrun.",
    result: "Version 1 · in daily use since Nov 2026",
    chips: ["Claude", "Notion", "Google Calendar", "Scheduled tasks"],
    visual: { type: "flow", nodes: ["Notion", "Claude", "Google Calendar"], main: 1 },
    href: "work/project-manager-agent.html",
    size: "normal",
    reserved: false,
    ticker: { symbol: "PMA v1.2", dir: "up", text: "in daily use" }
  },
  {
    slug: "stock-return-predictor",
    title: "Stock Return Predictor",
    status: { label: "Coming soon", kind: "soon" },
    category: "Finance / ML",
    teaser: "In the lab: a machine learning model in Python that predicts next-month stock returns and is evaluated honestly, bringing my finance degree and coding together. Coming early 2027.",
    chips: ["Python"],
    visual: { type: "placeholder", label: "Coming early 2027" },
    href: null,                       // later: "work/stock-return-predictor.html"
    size: "normal",
    reserved: true,
    ticker: { symbol: "FIN-ML", dir: "flat", text: "coming early 2027" }
  },
  {
    slug: "hunch",
    title: "Hunch",
    status: { label: "Planning", kind: "planning" },
    category: "Product design",
    oneLiner: "Can't decide what to eat? Hunch picks for you, then learns your taste over time.",
    teaser: "Planning: the first prototype focuses on food decisions. Hunch starts by picking at random, then uses your choices to learn what you like.",
    chips: ["TBC"],
    visual: { type: "placeholder", label: "Planning" },
    href: null,                       // later: "work/hunch.html"
    size: "normal",
    reserved: true,
    ticker: { symbol: "HUNCH", dir: "flat", text: "planning" }
  }
];
