# What's left for you to do

The site is built and works locally. These are the things only you can do.

## Needed before the site is fully ready

- [ ] **Put the site on GitHub Pages.** Create a public repo (for example
      `feby21.github.io`, or any name such as `portfolio`), upload this folder,
      then go to the repo's Settings → Pages → Source: "Deploy from a branch",
      branch `main`, folder `/ (root)`.
- [ ] **Connect the contact form.** Sign up at formspree.io, create a form, and
      copy its ID. In `index.html`, search for `YOUR_FORM_ID` and replace it.
      Until then the form shows "This form isn't connected yet" and sends
      nothing.
- [ ] **Send a test message** through the live form to confirm it reaches you.
- [ ] **Read the two case studies and correct anything that is off.** I wrote
      them from your facts doc and the agent's README. Check these in particular:
  - Love Bristol timeline: I put "2025–26 academic year". Change it if wrong.
  - The "What I learned" sections on Love Bristol and the Project Manager
    Agent are my drafts in your voice. Rewrite them in your own words.
  - Project Manager Agent "The problem": I described your week as lectures, a
    part-time job and several projects, based on your calendar names.
- [ ] **Check the new hero wording.** The side notes say "Real briefs from HSBC UK, Bristol BID
      and Sertie.io" and "Finance, design and code in one person". Change any
      that you would not say yourself.
- [ ] **Read the footer characters' lines** in
      `components/ui/doodle-footer-mount.tsx` and reword any you don't like
      (then run `./tools/build-footer.sh`).
- [ ] **Update your CV interests** to reading fiction, dancing and cooking, so
      the CV and the site match.

## Worth doing soon

- [ ] **Publish the Project Manager Agent repo on GitHub**, then update the
      GitHub button at the bottom of `work/project-manager-agent.html` to point
      at the repo. Right now it points at your profile.
- [ ] **Test the Love Bristol demo on your phone** once the site is live
      (`/demo/love-bristol/`). I changed its file paths so it works inside the
      portfolio, and I fixed the "Harbourside" tag that overlapped the wallet
      label. Your original copy in `Documents/GitHub/Love Bristol` is untouched.
- [ ] **Add a share preview image.** Make a 1200×630 image, save it as
      `assets/img/share.png`, and add the `og:image` line noted in the `<head>`
      of `index.html`. This is the picture LinkedIn shows when you post the link.
- [ ] **Add a time-saved number to the Project Manager Agent** once you have
      used it for a few weeks (for example hours of planning saved per week).

## Optional

- [ ] Buy a domain such as `febyliaeugene.com` (about £10 a year) and connect
      it in GitHub Pages settings.
- [ ] Add analytics (GoatCounter or Plausible) to see which projects people open.
- [ ] Add a CV download. You chose to leave it out for now. If you change your
      mind, export a PDF without your phone number or home address.

## Later, when the projects exist

- [ ] **Stock Return Predictor** (promised for early 2027) and **Hunch**: edit
      their entries in `data/projects.js` and add a page in `work/`. The steps
      are in the comment at the top of that file.
- [ ] When the predictor is live, update the third "Work with me" card, which
      currently says "Coming 2027".
