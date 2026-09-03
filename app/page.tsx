import Image from "next/image";
import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";

const GITHUB_REPO = "https://github.com/projnanda/nandatown";
const NANDA_TOWN_URL = "https://nandatown.projectnanda.org";
const GUIDE_URL = "https://dhve.github.io/nandahack-guide/";
const LUMA_CALENDAR = "https://luma.com/nanda";
const LUMA_URL = "https://luma.com/6q9q00sm";
const DISCORD_URL = "https://discord.gg/xHAQNcF3m2";
const RECAP_URL =
  "https://www.media.mit.edu/posts/mit-media-lab-and-hcltech-host-nandahack-to-advance-agentic-ai-innovation/";
const HACKATHON_PRS_URL = "https://nandatown.projectnanda.org/hackathon";
const SKILLS_URL = "/go/submit";
const INFO_SESSION_RECORDING_URL =
  "https://drive.google.com/file/d/1cXjsm7TzP-FgF5-gf_CtmJPsK7ieckuu/view?usp=sharing";

type Stat = {
  value: string;
  label: string;
  detail: string;
};

const stats: Stat[] = [
  {
    value: "400+",
    label: "Registrants",
    detail: "Builders, students, and researchers joined online and in person from around the world.",
  },
  {
    value: "230+",
    label: "Unique submissions",
    detail: "Services with a SKILL.md, submitted on the NANDA Town skills page.",
  },
  {
    value: "125+",
    label: "Complete submissions",
    detail: "Entries that finished both phases and were reviewed in full by the organizing team.",
  },
  {
    value: "164",
    label: "Pull requests",
    detail: "Contributions to the NANDA Town repository on GitHub during the Phase 1 warm-up.",
  },
];

type Winner = {
  place: string;
  title: string;
  detail: string;
};

const winners: Winner[] = [
  {
    place: "First prize",
    title: "AgentPress: The Autonomous Newsroom of the Agent Economy",
    detail:
      "An agent-to-agent news economy. Agents register for free starter credits and file news signals. An autonomous editor named Herald scores them on a deterministic 8-factor rubric and compiles paid editions, and contributors earn an exact 80% revenue share every time their edition is read.",
  },
  {
    place: "Second prize",
    title: "2036 Agentic Town: AI Constitution (Civil Ledger)",
    detail:
      "A constitution and civil ledger for an agentic town, exploring how autonomous agents can share rules, records, and civic services.",
  },
  {
    place: "Third prize",
    title: "Litmus: secure NANDA",
    detail:
      "A NANDA Town agent-safety honeypot. On its face it is a web-reader tool; underneath, it tests how agents behave when a service is not what it seems.",
  },
];

const topTen = [
  "AgentPress",
  "2036 Agentic Town: AI Constitution (Civil Ledger)",
  "Litmus",
  "AgentHall",
  "Pareto Multi-Attribute Negotiation",
  "Sever Trust Plane",
  "CipherWatch",
  "LEX AUTOMATA",
  "RingGuard",
  "SkillProbe",
];

type Resource = {
  kicker: string;
  title: string;
  description: string;
  href: string;
  cta: string;
};

const resources: Resource[] = [
  {
    kicker: "Live app",
    title: "NANDA Town",
    description:
      "The open sandbox where AI agents talk, trust, pay, and coordinate. It stays up after the hackathon, so explore it and run experiments.",
    href: NANDA_TOWN_URL,
    cta: "Explore NANDA Town",
  },
  {
    kicker: "Quickstart",
    title: "NandaHack Guide",
    description:
      "The interactive walkthrough participants used for their first NANDA Town pull request, writing a SKILL.md, and a live demo.",
    href: GUIDE_URL,
    cta: "Read the guide",
  },
  {
    kicker: "Source code",
    title: "NANDA Town on GitHub",
    description:
      "The repository that received 164 pull requests during Phase 1. Clone it, run it locally, and keep contributing.",
    href: GITHUB_REPO,
    cta: "View the repo",
  },
  {
    kicker: "Ask questions",
    title: "Nanda Discord",
    description:
      "The Project NANDA community server. Keep in touch with participants, mentors, and the team, and hear about what comes next.",
    href: DISCORD_URL,
    cta: "Join the Discord",
  },
];

type LumaEvent = {
  title: string;
  date: string;
  href: string;
};

const events: LumaEvent[] = [
  {
    title: "Nanda Summit + NandaHack finale at MIT",
    date: "Sat, July 11, 2026 · 9:30 AM to 5:00 PM ET · MIT Media Lab · Concluded",
    href: LUMA_URL,
  },
];

type Step = {
  num: string;
  kicker: string;
  title: string;
  intro: string;
  todo: string[];
  judged: string[];
  checklist?: string[];
  href: string;
  cta: string;
  note?: string;
  secondaryHref?: string;
  secondaryCta?: string;
};

const steps: Step[] = [
  {
    num: "1",
    kicker: "Phase 1 · Warm-up · 20%",
    title: "Improve NANDA Town",
    intro:
      "NANDA Town is an open-source sandbox where AI agents test how they talk, trust, pay, and coordinate, across 12 building blocks. Participants warmed up by making one of them better.",
    todo: [
      "Cloned the repo and got it running locally, following the README.",
      "Picked one of the 12 building blocks and improved it or added a new one.",
      "Added a test that fails without the change and passes with it, then ran make ci-local before pushing.",
      "Pushed a branch named hackathon/your-name-topic and opened a pull request. The PR was the entry, and it appeared automatically on the NANDA Town hackathon page.",
      "Judges replied on each PR, and participants revised and resubmitted until the Friday, July 10 deadline. Around 164 pull requests came in.",
    ],
    judged: [
      "It works correctly and is well tested.",
      "It fits how NANDA Town is already built.",
      "It is clearly documented.",
    ],
    href: HACKATHON_PRS_URL,
    cta: "Browse the Phase 1 pull requests",
    secondaryHref: "/go/nanda-town",
    secondaryCta: "Explore NANDA Town",
  },
  {
    num: "2",
    kicker: "Phase 2 · Main event · 80%",
    title: "Build a service, then write a SKILL.md for it",
    intro:
      "The main event. Each team built one web service plus a SKILL.md, a plain text file that tells an AI agent what the service does and how to call it. Nobody built an agent. Judges ran a stock agent that got only the SKILL.md and had to use the service with no other help.",
    todo: [
      "Built one web service and hosted it on a platform that stayed up on its own, with no tunnels to a laptop.",
      "Tested every endpoint on the public URL, since the registry and the judge's agent called it directly.",
      "Wrote a SKILL.md with a title, the base URL, every endpoint with an example call and response, and plain-language steps for the agent.",
      "Submitted on the NANDA Town skills page, where the registry checked each link and showed a reachability badge on the card.",
      "Recorded a video demo and shared it in the final form by Saturday, July 11 at 2:00 PM ET. More than 230 unique submissions came in, and over 125 were complete.",
    ],
    judged: [
      "Useful: it does something agents really need.",
      "Creative: it is a fresh idea.",
      "Easy to set up: little effort to a working call.",
      "Agents succeed using only the SKILL.md.",
    ],
    href: SKILLS_URL,
    cta: "Browse the submitted skills",
  },
];

type Mentor = {
  name: string;
  credential?: string;
  role: string;
  photo: string;
  bio: string;
};

const mentors: Mentor[] = [
  {
    name: "Grace Davin",
    credential: "AIGP",
    role: "Thought Leadership & Enablement, Office of Responsible AI and Governance · HCLTech",
    photo: "/mentors/grace-davin.jpg",
    bio: "Grace manages the Thought Leadership and Enablement Team in the Office of Responsible AI and Governance at HCLTech, where she turns organizational expertise into content, tools, and programs that educate employees, support sales, and demonstrate the company's strength in Responsible AI and Governance. Previously, she was a Program Manager supporting operational functions at IBM, including IBM Consulting's North America Cybersecurity and Operations teams. She is AIGP certified and a member of the IAPP.",
  },
  {
    name: "Jeff Turnham",
    role: "AVP & Chief Architect, Applied Research · HCLTech",
    photo: "/mentors/jeff-turnham.jpg",
    bio: "Jeff is Assistant Vice President and Chief Architect with the HCLTech Applied Research team. His work focuses on building secure, governed AI systems that help organizations adopt AI at scale, including agentic software development and AI security. Previously, Jeff held senior architecture and engineering leadership roles at IBM, including leading architecture for AppScan and enterprise application security products.",
  },
  {
    name: "Dr. Jie Hui",
    role: "Head of AI Adoption Center of Excellence · HCLTech",
    photo: "/mentors/jie-hui.jpg",
    bio: "Jie is an enterprise AI deployment and innovation leader at HCLTech, where she heads the AI Adoption Center of Excellence. Her work focuses on accelerating enterprise adoption of OpenAI technologies, driving AI commercialization, and helping organizations deploy secure, governed AI at scale through adoption frameworks, governance, and business transformation. Previously, she led Enterprise AI and Digital Innovation at T-Mobile, scaling ChatGPT Enterprise to 25,000+ employees. She holds a Ph.D. in Computer Engineering and is the inventor of 30+ patents.",
  },
  {
    name: "Dr. Gary Kuvich",
    role: "Senior Solution Director, Evolve AI Practice · HCLTech",
    photo: "/mentors/gary-kuvich.png",
    bio: "Gary is a Senior Solution Director in the HCLTech Evolve AI Practice, with many years of experience across both industry and academia and a track record of successful generative and agentic AI implementations across diverse customer platforms.",
  },
  {
    name: "Prof. Ramesh Raskar",
    role: "Associate Professor, MIT Media Lab · Director, Project NANDA",
    photo: "/mentors/ramesh-raskar.jpg",
    bio: "Ramesh is an Associate Professor at the MIT Media Lab, where he directs the Camera Culture research group and leads NANDA@MIT — creating the building blocks for the Internet of AI Agents. He holds 130+ patents in computer vision, computational health, sensors, and imaging, and received the Lemelson-MIT Prize. He is also founder and chairman of the PathCheck Foundation, a nonprofit launched at MIT for pandemic response.",
  },
  {
    name: "Maria Gorskikh",
    role: "Core Contributor, Project NANDA · MIT · CEO & Co-Founder, Maritime",
    photo: "/mentors/maria-gorskikh.jpg",
    bio: "Maria is a core contributor to Project NANDA at MIT, where she develops protocols and infrastructure for the emerging agentic web — the Internet of AI Agents. She is also CEO and co-founder of Maritime, a cloud hosting platform for AI agents.",
  },
  {
    name: "Nikolay Vyahhi",
    role: "Founder, Hyperskill · Lecturer, MIT",
    photo: "/mentors/nikolay-vyahhi.jpg",
    bio: "Nikolay is the founder of Hyperskill, a project-based platform for learning software engineering, and an AI educator and MIT lecturer who has built and deployed LLM systems at scale in production. He previously co-founded Stepik, Rosalind, and the Bioinformatics Institute, and worked with JetBrains on JetBrains Academy.",
  },
  {
    name: "Vedh Krishnan",
    role: "Research and Development Consultant, MIT Media Lab · NandaHack Coordinator",
    photo: "/mentors/vedh-krishnan.jpg",
    bio: "Vedh provides operational, administrative, and research support for NANDA and the Camera Culture group at the MIT Media Lab, working directly with Prof. Ramesh Raskar and postdoctoral researchers on initiatives centered on the agentic web, decentralized AI, and autonomous AI systems. He helps architect and lead the R&D behind NANDA Town, a test rig for protocols and services headed for the open agentic web (nandatown.projectnanda.org and nanda.town), and is a code contributor and tester on NANDA Index (nandaindex.org) and Host39 (host39.org).",
  },
];

const scoring = [
  {
    title: "Phase 1: NANDA Town",
    weight: "20%",
    description:
      "A short warm-up. Scored on correct, well-tested code that fit NANDA Town's design and was clearly documented.",
  },
  {
    title: "Phase 2: Service + SKILL.md",
    weight: "80%",
    description:
      "The main event. Scored on usefulness, creativity, easy setup, and whether agents could use it from the SKILL.md alone.",
  },
];

const faqs = [
  {
    question: "Is NandaHack still open?",
    answer:
      "No. NandaHack ran from June 13 through July 11, 2026 and has concluded. Submissions closed on Saturday, July 11 at 2:00 PM ET, and the demos and awards took place that afternoon at the MIT Media Lab.",
  },
  {
    question: "Who won?",
    answer:
      "First prize went to AgentPress, an autonomous newsroom for the agent economy. Second prize went to 2036 Agentic Town: AI Constitution (Civil Ledger). Third prize went to Litmus, a NANDA Town agent-safety honeypot. The full top 10 is listed in the results section above.",
  },
  {
    question: "How big was the hackathon?",
    answer:
      "More than 400 people registered. Participants sent in more than 230 unique submissions, of which over 125 were complete and reviewed in full by the organizing team. In parallel, contributors opened around 164 pull requests on the NANDA Town repository.",
  },
  {
    question: "How was it scored?",
    answer:
      "Phase 1, the NANDA Town warm-up, was worth 20% and was scored on correct, well-tested code that fits the existing design and is clearly documented. Phase 2, a service plus a SKILL.md, was worth 80% and was scored on usefulness, creativity, ease of setup, and whether a stock agent could use the service from the SKILL.md alone.",
  },
  {
    question: "Where can I see the submissions?",
    answer:
      "Phase 1 pull requests are listed on the NANDA Town hackathon page and on the projnanda/nandatown repository on GitHub. Phase 2 skills are listed on the NANDA Town skills page. Both links are in the Hackathon steps section above.",
  },
  {
    question: "What is NANDA Town?",
    answer:
      "It is an open-source sandbox where AI agents practice talking, trusting, paying, and coordinating across 12 building blocks. Participants improved one of those building blocks in Phase 1, and NANDA Town's registry hosted the Phase 2 skills. It is still running, and you can explore it any time.",
  },
  {
    question: "What is a SKILL.md?",
    answer:
      "It is a plain Markdown file that teaches an AI agent how to use a service: what it does, its web address, the endpoints, and how to call them. An agent reads it and then uses the service on its own, with no human help. Every Phase 2 entry was judged on its SKILL.md.",
  },
  {
    question: "Can I still contribute to NANDA Town?",
    answer:
      "Yes. The repository is open source and accepts pull requests outside the hackathon. The NandaHack Guide still works as a walkthrough for a first contribution, and the Discord is the place to ask questions.",
  },
  {
    question: "Will there be another NandaHack?",
    answer:
      "Announcements for future NANDA events go out on the Project NANDA Discord and the NANDA Luma calendar. Join either one to hear about what comes next.",
  },
  {
    question: "Where is the official recap?",
    answer:
      "The MIT Media Lab published a recap post on August 4, 2026, with the numbers, the winners, and photos from the finale. Use the Read the MIT Media Lab recap button at the top of this page.",
  },
];

export default function Home() {
  return (
    <main className="landing-shell">
      <SiteHeader />

      <section className="hero grid-bg">
        <div className="hero-inner">
          <div className="hero-copy-wrap">
            <p className="date-pill">CONCLUDED · JUNE 13 TO JULY 11, 2026 · 100% VIRTUAL · IN-PERSON FINALE AT MIT MEDIA LAB</p>
            <h1>
              NandaHack:
              <br />
              <span>Agentic AI</span>
              <br />
              Hackathon
            </h1>
            <p className="hero-sponsors-inline">HCLTech · MIT Media Lab</p>
            <p className="hero-copy">
              <strong>NandaHack has concluded.</strong> From June 13 through July 11, 2026, more
              than 400 registrants warmed up on NANDA Town, then built services and wrote SKILL.md
              files that stock AI agents could use on their own. The finale, with demos and awards,
              took place at the MIT Media Lab on July 11. Thank you to HCLTech, the NANDA team, and
              everyone who took part.
            </p>
            <div className="hero-actions">
              <a className="btn btn-primary btn-xl" href="#results">
                See the winners
              </a>
              <a className="btn btn-light btn-xl" href={RECAP_URL} target="_blank" rel="noopener noreferrer">
                Read the MIT Media Lab recap
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

      <section id="results" className="section section-soft">
        <div className="section-head">
          <h2>By the numbers</h2>
          <p className="section-subtitle">
            Participants joined both online and in person. These are the totals the organizing team
            reported after the July 11 finale.
          </p>
        </div>
        <div className="resource-grid">
          {stats.map((stat) => (
            <article key={stat.label} className="info-card stat-card">
              <p className="stat-value">{stat.value}</p>
              <h3>{stat.label}</h3>
              <p>{stat.detail}</p>
            </article>
          ))}
        </div>

        <div className="section-head results-head">
          <h2>Winners</h2>
          <p className="section-subtitle">
            The finale showcased projects across agent safety, civic services, autonomous newsrooms,
            trust and reputation systems, negotiation, and skill verification. Congratulations to the
            winning teams.
          </p>
        </div>
        <div className="card-grid">
          {winners.map((winner) => (
            <article key={winner.place} className="info-card winner-card">
              <p className="resource-kicker">{winner.place}</p>
              <h3>{winner.title}</h3>
              <p>{winner.detail}</p>
            </article>
          ))}
        </div>

        <div className="top-ten">
          <h3>Top 10 projects</h3>
          <ul className="top-ten-list">
            {topTen.map((name) => (
              <li key={name}>{name}</li>
            ))}
          </ul>
        </div>
      </section>

      <section id="how" className="section">
        <div className="section-head">
          <h2>How the hackathon worked</h2>
          <p className="section-subtitle">
            Participants registered once, then completed two phases in order. Phase 1 was a pull
            request on NANDA Town. Phase 2 was a hosted service with a SKILL.md, submitted on the
            NANDA Town skills page. Both are still browsable.
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
                    <h4>What participants did</h4>
                    <ol className="step-todo">
                      {step.todo.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ol>
                  </div>
                  <aside className="step-scored">
                    <h4>How it was scored</h4>
                    <ul className="step-judged">
                      {step.judged.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </aside>
                </div>

                {step.checklist && (
                  <div className="step-block step-checklist">
                    <h4>Checklist before Friday, July 10 at noon ET</h4>
                    <ul className="step-judged">
                      {step.checklist.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                )}

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
                {step.note && <p className="step-note">{step.note}</p>}
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

      <section id="resources" className="section">
        <div className="section-head">
          <h2>Resources &amp; quick links</h2>
          <p className="section-subtitle">
            Everything from the hackathon, still live: the app, the step-by-step guide, the code, the
            community, and the event page.
          </p>
        </div>

        <div className="resource-grid">
          {resources.map((resource) => (
            <article key={resource.title} className="resource-card">
              <p className="resource-kicker">{resource.kicker}</p>
              <h3>{resource.title}</h3>
              <p>{resource.description}</p>
              <a className="btn btn-primary" href={resource.href} target="_blank" rel="noopener noreferrer">
                {resource.cta}
              </a>
            </article>
          ))}
        </div>

        <div className="resource-events">
          <div className="resource-events-head">
            <h3>NandaHack events</h3>
            <a className="text-link" href={LUMA_CALENDAR} target="_blank" rel="noopener noreferrer">
              See all events on Luma
            </a>
          </div>
          {events.map((event) => (
            <div key={event.title} className="resource-event">
              <div className="resource-event-main">
                <p className="resource-event-title">{event.title}</p>
                <p className="resource-event-date">{event.date}</p>
              </div>
              <a className="btn btn-light" href={event.href} target="_blank" rel="noopener noreferrer">
                View on Luma
              </a>
            </div>
          ))}
        </div>
      </section>

      <section id="connect" className="section">
        <div className="section-head">
          <h2>Stay connected</h2>
          <p className="section-subtitle">
            The Discord stays open after the hackathon, and the info session recording is the full
            walkthrough of the format if you want to see how it was run.
          </p>
        </div>
        <div className="intro-grid">
          <article className="info-card connect-card">
            <h3>Join the Discord</h3>
            <p>
              All hackathon communication lived here, and it is still the place to reach
              participants, mentors, and the Project NANDA team. Ask questions, share what you
              built, and hear about future events.
            </p>
            <a className="btn btn-primary" href={DISCORD_URL} target="_blank" rel="noopener noreferrer">
              Join the Discord
            </a>
          </article>
          <article className="info-card connect-card">
            <h3>Info session recording</h3>
            <p>
              Watch a recording of one of the info sessions for the full walkthrough of the
              format, judging criteria, NANDA Town, and SKILL.md as they were presented to
              participants.
            </p>
            <a className="btn btn-primary" href={INFO_SESSION_RECORDING_URL} target="_blank" rel="noopener noreferrer">
              Watch the recording
            </a>
          </article>
        </div>
      </section>

      <section id="mentors" className="section">
        <div className="section-head">
          <h2>Mentors and organizers</h2>
          <p className="section-subtitle">
            Participants had guidance from the MIT Project NANDA team and HCLTech leaders in
            Responsible AI, enterprise adoption, and secure AI architecture.
          </p>
        </div>
        <div className="mentor-grid">
          {mentors.map((mentor) => (
            <article key={mentor.name} className="mentor-card">
              <div className="mentor-photo-wrap">
                <Image
                  src={mentor.photo}
                  alt={mentor.name}
                  className="mentor-photo"
                  width={96}
                  height={96}
                />
              </div>
              <div className="mentor-head">
                <h3>
                  {mentor.name}
                  {mentor.credential && <span className="mentor-cred">, {mentor.credential}</span>}
                </h3>
                <p className="mentor-role">{mentor.role}</p>
              </div>
              <p className="mentor-bio">{mentor.bio}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="judging" className="section section-soft">
        <div className="section-head">
          <h2>How scoring worked</h2>
          <p className="section-subtitle">
            The warm-up was worth 20% and the main event 80%. Teams could enter one phase, but
            doing both scored best. Judging ran on the morning of July 11 to pick the top 10.
          </p>
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

      <section id="finale" className="section section-soft">
        <div className="section-head">
          <h2>The finale at MIT</h2>
          <p className="section-subtitle">
            The hackathon culminated on Saturday, July 11, 2026 at the MIT Media Lab. The morning
            opened with the NANDA Summit, judging ran in parallel to pick the top 10, and the
            afternoon closed with demos and awards. Virtual participants took part in full.
          </p>
        </div>
        <div className="card-grid">
          <article className="info-card">
            <h3>NANDA Summit</h3>
            <p>9:30 AM to 1:00 PM ET · MIT Media Lab</p>
          </article>
          <article className="info-card">
            <h3>Judging</h3>
            <p>9:30 AM to 12:00 PM ET · A stock agent called every submitted service using only its SKILL.md</p>
          </article>
          <article className="info-card">
            <h3>Demos &amp; awards</h3>
            <p>2:00 PM to 5:00 PM ET · MIT Media Lab</p>
          </article>
        </div>
        <div className="attend-foot">
          <a className="btn btn-primary" href={RECAP_URL} target="_blank" rel="noopener noreferrer">
            Read the MIT Media Lab recap
          </a>
          <span className="attend-note">Published August 4, 2026 by the MIT Media Lab</span>
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
