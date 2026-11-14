/* Mounts the Doodle Crew Footer on any page that has <div id="doodle-footer">.
   This is where the footer's words, links and characters are set.
   `data-base` on the div is the path back to the site root ("" or "../"). */

function mountDoodleFooter() {
  const el = document.getElementById("doodle-footer")
  if (!el) return
  const base = el.getAttribute("data-base") || ""
  const home = base + "index.html"

  const crew: CrewMember[] = [
    { kind: "yeti", letter: 0, seat: "front", offset: -0.32, name: "Bruno", says: "7 hours → 10 minutes. I timed it." },
    { kind: "bird", letter: 1, seat: "top", offset: 0.02, name: "Pip", says: "Rates are up. So am I." },
    { kind: "mushroom", letter: 2, seat: "front", offset: 0.12, scale: 0.95, name: "Morel", says: "I'm a fun-d manager." },
    { kind: "ghost", letter: 3, seat: "behind", offset: 0, name: "Boo", says: "Boo! Just checking your priority score." },
    { kind: "kid", letter: 5, seat: "top", offset: 0, name: "Juno", says: "Best view of the market from up here." },
    { kind: "cat", letter: 6, seat: "front", offset: 0.45, flip: true, name: "Patch", says: "Nice cursor. Is it installable?" },
  ]

  const columns: FooterColumn[] = [
    {
      title: "Work",
      links: [
        { label: "Love Bristol", href: base + "work/love-bristol.html" },
        { label: "Project Manager Agent", href: base + "work/project-manager-agent.html" },
      ],
    },
    {
      title: "Site",
      links: [
        { label: "About", href: home + "#about" },
        { label: "Experience", href: home + "#experience" },
        { label: "Work with me", href: home + "#services" },
        { label: "Contact", href: home + "#contact" },
      ],
    },
    {
      title: "Elsewhere",
      links: [
        { label: "GitHub", href: "https://github.com/feby21" },
        { label: "LinkedIn", href: "https://www.linkedin.com/in/febylia-eugene-irawan-762b68220/" },
      ],
    },
  ]

  ReactDOM.createRoot(el).render(
    <DoodleCrewFooter
      wordmark="FEBYLIA"
      brand="Febylia Eugene"
      blurb="Fintech Product Builder in Bristol, UK. I design digital products and build data-driven tools where finance meets technology."
      tagline="Finance, design and code, drawn together. Click the crew to say hello."
      columns={columns}
      actions={[
        { label: "See my work", href: home + "#work", icon: "star", variant: "outline" },
        { label: "Get in touch", href: home + "#contact", icon: "bolt", variant: "solid" },
      ]}
      copyright="© 2026 Febylia Eugene · Built with Claude Code · Last updated 13 Nov 2026"
      legal={[]}
      socials={[
        { label: "GitHub", href: "https://github.com/feby21" },
        { label: "LinkedIn", href: "https://www.linkedin.com/in/febylia-eugene-irawan-762b68220/" },
      ]}
      crew={crew}
      doodles={["star", "bolt", "sparkle", "plane", "heart", "spiral", "star", "sparkle"]}
      doodleCount={10}
      palette={{ background: "var(--bg)", ink: "var(--ink)", accent: "var(--accent)" }}
      fontFamily={'"Fraunces", "Iowan Old Style", Georgia, serif'}
      serifFamily={'"Instrument Serif", Georgia, serif'}
      height="720px"
    />,
  )
}

if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", mountDoodleFooter)
else mountDoodleFooter()
