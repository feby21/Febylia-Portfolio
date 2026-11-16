# Febylia Eugene: portfolio website

Plain HTML, CSS and a little JavaScript. No build step.

## Preview it on your Mac

```bash
python3 -m http.server 4173
```

Then open http://localhost:4173

## Where things live

```
index.html                     Home page (one long scroll)
work/                          Case study pages
data/projects.js               Project cards + ticker items (edit this to add projects)
assets/css/styles.css          All styles (colours are at the top)
assets/js/main.js              Theme toggle, phone menu, card rendering, contact form
assets/img/                    Your photo and the Love Bristol screenshots
demo/love-bristol/             The Love Bristol prototype, bundled so visitors can try it
components/ui/                 The doodle footer's source (React, TypeScript)
tools/                         Build script for the footer
CHECKLIST.md                   What is still left for you to do
```

## Common edits

**Turn a reserved card into a real project.** Open `data/projects.js`, find the
entry (for example `hunch`) and follow the steps in the comment at the top of
the file. Then copy one of the pages in `work/` as the starting point for the
new case study.

**Change a colour.** The palette is the `:root` block at the top of
`assets/css/styles.css`. Dark mode colours are in the two blocks just below it
(keep those two the same as each other).

**Add a new Project Manager Agent version.** In
`work/project-manager-agent.html`, add a new `<li>` at the top of the
`changelog` list and update the version badge near the top of the page.

**Update the "Last updated" date.** It is in the footer of all four pages.

## Design

The look is editorial: warm off-white, near-black ink, espresso bands and one
dusty blue section. Headlines use Instrument Serif with italic accents, body
text uses DM Sans, and numbers, the ticker and badges use JetBrains Mono.

## The doodle footer

The footer is a React component. The rest of the site is plain HTML, so the
component is compiled once into `assets/js/doodle-footer.js` and the pages load
React from a CDN. You do not need Node.

- `components/ui/doodle-crew-footer.tsx` is the component itself.
- `components/ui/doodle-footer-mount.tsx` holds your words, links and the
  characters' lines. Edit this file to change what the footer says.
- After editing either file, start the preview server and run:

```bash
./tools/build-footer.sh
```

To change the giant word, edit `wordmark` in the mount file. Each character has
a `letter` number that says which letter it sits on, counting from 0.

## The logo

Your brand mark is the yeti from the footer beside "Febylia Eugene" in text. It
is used in the top bar and at the top of the footer on every page. The images
are `assets/img/mark.png` and `mark-dark.png`. The full doodle wordmark is also
saved as `assets/img/logo.png` and `logo-dark.png` in case you want it elsewhere.

If you change the characters, start the preview server and run
`./tools/build-logo.sh` to save all four images again.

## Company logos

The small logos in the "I'm a..." list are in `assets/img/logos/`. They are the
icons from each organisation's own website (HSBC UK, JPMorganChase, University
of Bristol, Sertie, Turbo AI, No Ordinary Moments), plus the Spring Capital
Partners and HLB files you supplied. To add one, save a square PNG in that folder and use
`<img class="mark mark--logo" src="assets/img/logos/NAME.png" alt="">`.
