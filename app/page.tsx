import Image from "next/image";
import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";

const GITHUB_REPO = "https://github.com/projnanda/nandatown";
const LUMA_URL = "https://luma.com/6q9q00sm";
const DISCORD_URL = "https://discord.gg/DJeWUtxnF";
const WEBINAR_URL = "https://luma.com/a98t3dze";

type Step = {
  num: string;
  kicker: string;
  title: string;
  intro: string;
  todo: string[];
  judged: string[];
  href: string;
  cta: string;
  secondaryHref?: string;
  secondaryCta?: string;
};

const steps: Step[] = [
  {
    num: "1",
    kicker: "Warm-up · 20%",
    title: "Improve NANDA Town",
    intro:
      "NANDA Town is an open-source sandbox where AI agents test how they talk, trust, pay, and coordinate — across 12 building blocks. Warm up by making one of them better.",
    todo: [
      "Open the NANDA Town repo on GitHub and download (clone) it.",
      "Install it and get it running on your computer — the README has the exact commands.",
      "Pick one of the 12 building blocks and improve it, or add a new one.",
      "Add tests, and make sure the project's checks pass.",
      "Open a pull request named hackathon/your-name-topic. It shows up on the NANDA Town hackathon page automatically.",
      "Wait for review — a judge usually replies within about a week.",
    ],
    judged: [
      "It works correctly and is well tested.",
      "It fits how NANDA Town is already built.",
      "It's clearly documented.",
    ],
    href: GITHUB_REPO,
    cta: "Open the repo on GitHub",
    secondaryHref: "/go/nanda-town",
    secondaryCta: "See how the town works",
  },
  {
    num: "2",
    kicker: "Main event · 80%",
    title: "Build a service agents can use on their own",
    intro:
      "The main event. Build any service, host it online, and write a SKILL.md so an AI agent can find it and use it on its own — no human help needed.",
    todo: [
      "Build any service you want and host it online so it stays reachable (Railway, Vercel, Render, Fly — your choice).",
      "Test your endpoints in a browser or with curl to make sure they work.",
      "Write a SKILL.md: a plain Markdown file with your service's name, what it does, its web address, the endpoints, and the steps to use them.",
      "Submit it on the NANDA Town skills page — paste a hosted link, a GitHub repo, or the text, plus your live endpoint links.",
    ],
    judged: [
      "Useful — it does something agents really need.",
      "Creative — it's a fresh idea.",
      "Easy to set up — little effort to a working call.",
      "Agents succeed using only your SKILL.md.",
    ],
    href: "/go/submit",
    cta: "Submit your skill",
  },
];

const scoring = [
  {
    title: "Step 1 — NANDA Town",
    weight: "20%",
    description:
      "A short warm-up. Scored on correct, well-tested code that fits NANDA Town's design and is clearly documented.",
  },
  {
    title: "Step 2 — Service + SKILL.md",
    weight: "80%",
    description:
      "The main event. Scored on usefulness, creativity, easy setup, and whether agents can use it from your SKILL.md alone.",
  },
];

const faqs = [
  {
    question: "Do I have to do both steps?",
    answer:
      "We recommend it. Step 1 is a short warm-up worth 20% that teaches you how NANDA Town works. Step 2 — your own service with a SKILL.md — is the main event, worth 80%. You can enter just one, but doing both gives you the best score.",
  },
  {
    question: "What is a SKILL.md?",
    answer:
      "It's a plain Markdown file that teaches an AI agent how to use your service — what it does, its web address, the endpoints, and how to call them. An agent reads it and then uses your service on its own, with no human help.",
  },
  {
    question: "What is NANDA Town?",
    answer:
      "It's an open-source sandbox where AI agents practice talking, trusting, paying, and coordinating across 12 building blocks. In Step 1 you improve one of those building blocks, so you learn how the town works before building your own service.",
  },
  {
    question: "Where do I submit?",
    answer:
      "Step 1 is a pull request on the NANDA Town repo on GitHub. Step 2 you submit on the NANDA Town skills page. Use the button on each step above.",
  },
  {
    question: "Do I have to attend in person?",
    answer:
      "No — taking part is fully online. But if you can, we recommend coming to MIT Media Lab on Saturday, July 11, 2026: the NANDA Summit runs 10:00 AM – 1:00 PM and the hackathon demos & awards run 2:00 PM – 5:00 PM. It's a great chance to meet the key leaders behind NANDA.",
  },
  {
    question: "Who can join?",
    answer:
      "Anyone — students, builders, researchers, and professionals. You can enter on your own or as a team.",
  },
];

export default function Home() {
  return (
    <main className="landing-shell">
      <SiteHeader />

      <section className="hero grid-bg">
        <div className="hero-inner">
          <div className="hero-copy-wrap">
            <p className="date-pill">OPEN NOW — IN-PERSON FINALE JULY 11, 2026 · MIT MEDIA LAB</p>
            <h1>
              NandaHack:
              <br />
              <span>Agentic AI</span>
              <br />
              Hackathon
            </h1>
            <p className="hero-sponsors-inline">HCLTech · MIT Media Lab</p>
            <p className="hero-copy">
              Two steps. First, warm up on NANDA Town. Then build a service an AI agent can use on its own.
            </p>
            <div className="hero-actions">
              <a className="btn btn-primary btn-xl" href="https://forms.gle/HKCSitSChcFSqyzY8">
                Apply to Attend
              </a>
              <a className="btn btn-light btn-xl" href="#how">
                See how it works
              </a>
            </div>
          </div>

          <div className="hero-art">
            <Image
              src="/landing_image.webp"
              alt="NandaHack visual"
              className="hero-art-image"
              fill
              sizes="(max-width: 1024px) 100vw, 520px"
              priority
            />
          </div>
        </div>
      </section>

      <section id="how" className="section">
        <div className="section-head">
          <h2>How it works</h2>
          <p className="section-subtitle">
            Two steps. Do the warm-up first, then build your own service for the main event.
          </p>
        </div>

        <div className="steps-flow">
          {steps.map((step, idx) => (
            <div key={step.num}>
              <article className="step-card">
                <div className="step-top">
                  <span className="step-num" aria-hidden="true">
                    {step.num}
                  </span>
                  <span className="step-kicker">{step.kicker}</span>
                </div>

                <h3 className="step-title">{step.title}</h3>
                <p className="step-intro">{step.intro}</p>

                <div className="step-cols">
                  <div className="step-block">
                    <h4>What to do</h4>
                    <ol className="step-todo">
                      {step.todo.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ol>
                  </div>
                  <aside className="step-scored">
                    <h4>How it&apos;s scored</h4>
                    <ul className="step-judged">
                      {step.judged.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </aside>
                </div>

                <div className="step-foot">
                  <a className="btn btn-primary" href={step.href} target="_blank" rel="noopener noreferrer">
                    {step.cta}
                  </a>
                  {step.secondaryHref && (
                    <a className="btn btn-light" href={step.secondaryHref} target="_blank" rel="noopener noreferrer">
                      {step.secondaryCta}
                    </a>
                  )}
                </div>
              </article>

              {idx === 0 && (
                <div className="step-connector" aria-hidden="true">
                  <i />
                  <span>then</span>
                  <i />
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      <section id="connect" className="section">
        <div className="section-head">
          <h2>Stay connected</h2>
          <p className="section-subtitle">
            Join the Discord for everything happening during the hackathon, and register for the info
            webinar to get the full walkthrough before you start.
          </p>
        </div>
        <div className="intro-grid">
          <article className="info-card connect-card">
            <h3>Join the Discord</h3>
            <p>
              All hackathon communication lives here — updates, announcements, team formation, and
              technical questions. It&apos;s the place to get help and find teammates.
            </p>
            <a className="btn btn-primary" href={DISCORD_URL} target="_blank" rel="noopener noreferrer">
              Join the Discord
            </a>
          </article>
          <article className="info-card connect-card">
            <h3>Watch the info webinar</h3>
            <p>
              A walkthrough of the format, timeline, judging criteria, NANDA Town, and SKILL.md —
              everything you need to make the most of NandaHack.
            </p>
            <a className="btn btn-primary" href={WEBINAR_URL} target="_blank" rel="noopener noreferrer">
              Register for the webinar
            </a>
          </article>
        </div>
      </section>

      <section id="judging" className="section section-soft">
        <div className="section-head">
          <h2>How scoring works</h2>
          <p className="section-subtitle">The warm-up is worth 20%. The main event is worth 80%.</p>
        </div>
        <div className="intro-grid">
          {scoring.map((item) => (
            <article key={item.title} className="info-card judging-card">
              <div className="judging-topline">
                <h3>{item.title}</h3>
                <span>{item.weight}</span>
              </div>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="attend" className="section section-soft">
        <div className="section-head">
          <h2>Join us on July 11</h2>
          <p className="section-subtitle">
            Taking part is fully online, so attending in person is optional — but recommended. Come to MIT Media Lab
            on Saturday, July 11, 2026 to meet the key leaders behind NANDA.
          </p>
        </div>
        <div className="intro-grid">
          <article className="info-card">
            <h3>NANDA Summit</h3>
            <p>10:00 AM – 1:00 PM · MIT Media Lab</p>
          </article>
          <article className="info-card">
            <h3>Hackathon demos &amp; awards</h3>
            <p>2:00 PM – 5:00 PM · MIT Media Lab</p>
          </article>
        </div>
        <div className="attend-foot">
          <a className="btn btn-primary" href={LUMA_URL} target="_blank" rel="noopener noreferrer">
            RSVP on Luma
          </a>
          <span className="attend-note">Registration requires host approval</span>
        </div>
      </section>

      <section id="faq" className="section section-soft">
        <div className="section-head">
          <h2>FAQ</h2>
        </div>
        <div className="faq-list">
          {faqs.map((item) => (
            <details key={item.question} className="faq-item">
              <summary>{item.question}</summary>
              <p>{item.answer}</p>
            </details>
          ))}
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
