import Image from "next/image";
import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";

const GITHUB_REPO = "https://github.com/projnanda/nandatown";
const NANDA_TOWN_URL = "https://nandatown.projectnanda.org";
const GUIDE_URL = "https://dhve.github.io/nandahack-guide/";
const LUMA_CALENDAR = "https://luma.com/nanda";
const LUMA_URL = "https://luma.com/6q9q00sm";
const DISCORD_URL = "https://discord.gg/xHAQNcF3m2";
const REGISTER_FORM_URL = "https://forms.gle/HKCSitSChcFSqyzY8";
const FINAL_FORM_URL = "https://forms.gle/JVNkqKLh9MS4FYY2A";
const INFO_SESSION_RECORDING_URL =
  "https://drive.google.com/file/d/1cXjsm7TzP-FgF5-gf_CtmJPsK7ieckuu/view?usp=sharing";

type Deadline = {
  when: string;
  title: string;
  detail: string;
  href?: string;
  cta?: string;
};

const deadlines: Deadline[] = [
  {
    when: "Friday, July 10, 2026 · 12:00 PM (noon) ET",
    title: "Initial submission, both phases",
    detail:
      "The initial submission deadline. It covers both phases and applies wherever you are building from. All Phase 1 (NANDA Town PR) submissions are final at this time.",
  },
  {
    when: "Saturday, July 11, 2026 · 9:30 AM to 12:00 PM ET",
    title: "Judging morning",
    detail:
      "Judging runs Saturday morning to pick the top 10. Keep your service up through Saturday: if it is down when the judge's agent calls, the agent fails.",
  },
  {
    when: "Saturday, July 11, 2026 · 2:00 PM ET",
    title: "Phase 2 edits close, video demo due",
    detail:
      "You can modify and continue working on your submission for Phase 2 only until this time. Your required video demo of Phase 2 is also due by this time at the latest.",
  },
  {
    when: "Saturday, July 11, 2026 · 2:00 PM ET",
    title: "Final submission form closes",
    detail:
      "The final Google form must be fully completed before this time. Resubmit it even if you have completed it already: there are new required fields for your final submission. Share your Phase 2 video demo in this form.",
    href: FINAL_FORM_URL,
    cta: "Complete the final form",
  },
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
      "The open sandbox where AI agents talk, trust, pay, and coordinate. Explore it and run experiments.",
    href: NANDA_TOWN_URL,
    cta: "Explore NANDA Town",
  },
  {
    kicker: "Quickstart",
    title: "NandaHack Guide",
    description:
      "An interactive walkthrough for your first NANDA Town pull request, writing a SKILL.md, and a live demo.",
    href: GUIDE_URL,
    cta: "Read the guide",
  },
  {
    kicker: "Source code",
    title: "NANDA Town on GitHub",
    description:
      "Clone the repo, run it locally, and improve one of the 12 building blocks for the Phase 1 warm-up.",
    href: GITHUB_REPO,
    cta: "View the repo",
  },
  {
    kicker: "Ask questions",
    title: "Nanda Discord",
    description:
      "The Project NANDA community server. Get help, find teammates, and ask anything about the hackathon.",
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
    title: "Nanda Summit + NandaHack at MIT",
    date: "Sat, July 11, 2026 · 9:30 AM to 5:00 PM ET · MIT Media Lab · Optional, RSVP required",
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
      "NANDA Town is an open-source sandbox where AI agents test how they talk, trust, pay, and coordinate, across 12 building blocks. Warm up by making one of them better.",
    todo: [
      "Clone the repo and get it running on your computer. The README has the exact commands.",
      "Pick one of the 12 building blocks. Improve it or add a new one.",
      "Add a test. A good test fails without your change and passes with it.",
      "Run make ci-local before you push. This is the same check the repo runs on your PR.",
      "Create a branch named hackathon/your-name-topic that describes the real work. Good: hackathon/faster-auction-validator. Not okay: hackathon/test1. This naming rule is how your PR gets picked up, so it is required.",
      "Push the branch and open a pull request on the repo. Your PR appears automatically at nandatown.projectnanda.org/hackathon. The PR is your entry: there is nothing else to file.",
      "A judge replies as soon as they can, so do not wait until the last minute. You can revise and resubmit as many times as you like, but if you wait until the deadline and your code does not work properly, the PR has to be closed and you cannot proceed with the hackathon, no matter how good the idea was.",
    ],
    judged: [
      "It works correctly and is well tested.",
      "It fits how NANDA Town is already built.",
      "It's clearly documented.",
    ],
    href: `${GITHUB_REPO}#readme`,
    cta: "Start Phase 1: open the README",
    secondaryHref: "/go/nanda-town",
    secondaryCta: "Explore NANDA Town",
    note: "All Phase 1 (Nanda Town PR) submissions are final on Friday, July 10, 2026 at 12:00 PM (noon) Eastern Time.",
  },
  {
    num: "2",
    kicker: "Phase 2 · Main event · 80%",
    title: "Build a service, then write a SKILL.md for it",
    intro:
      "The main event. You are building one web service plus a SKILL.md, a plain text file that tells an AI agent what your service does and how to call it. You are not building an agent. Judges run a stock agent that gets only your SKILL.md and must use your service with no other help. Build for that test.",
    todo: [
      "Build one web service and host it so it stays up on its own. Use Railway, Vercel, Render, or Fly: all have free tiers. Do not use ngrok or any tunnel to your laptop. The registry and judges call your URL after your laptop is closed.",
      "Test every endpoint on the public URL, not localhost, in a browser or with curl. Free tiers sleep when idle, so the first request after a quiet period can take 30 to 60 seconds. Send one warm-up request, then test.",
      "Write the SKILL.md with these sections: a title line (# Your Service Name) and one sentence on what it does; the base URL on its own line; each endpoint with its method and path (for example GET /weather?city={city}), one sentence of description, one example curl call, and one example response; and numbered, plain-language steps on how the agent should use it.",
      "Keep it concrete. One real curl call and its real response is worth more than a paragraph, and one endpoint that clearly works beats five that half work. Use clear, boring, precise, technical language and do not be vague at all.",
      "Host the SKILL.md at a raw GitHub URL, or serve it from your app at /skill.md. You can paste the text into the form instead, but pasted entries do not get the reachability badge, so a hosted link or repo is better.",
      "Submit on the NANDA Town skills page. Scroll to the form, fill in the fields, and press Submit SkillMD.",
      "Record a video demo of your Phase 2 submission and share it in the final Google form by Saturday, July 11 at 2:00 PM ET. The video will not impact your score, but it is required to fully complete your submission, and if you are selected for the top 10 teams we need a video to show to people.",
    ],
    judged: [
      "Useful: it does something agents really need.",
      "Creative: it's a fresh idea.",
      "Easy to set up: little effort to a working call.",
      "Agents succeed using only your SKILL.md.",
    ],
    checklist: [
      "Registered with the participation form.",
      "Phase 1 PR open on projnanda/nandatown from a hackathon/your-name-topic branch.",
      "Service hosted online and answering on its public URL.",
      "SKILL.md names the service, base URL, and every endpoint, each with one example call and response.",
      "Entry shows on the NANDA Town skills page with your GitHub username filled in.",
      'Card badge reads "link responded."',
    ],
    href: "/go/submit",
    cta: "Submit your skill",
    note: "This button opens the NANDA Town skills page. Submit your skill there, on that page. Scroll down to find the form. Initial submissions for both phases are due Friday, July 10 at 12:00 PM (noon) ET, and you can keep modifying Phase 2 only until Saturday, July 11 at 2:00 PM ET.",
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
];

const scoring = [
  {
    title: "Phase 1: NANDA Town",
    weight: "20%",
    description:
      "A short warm-up. Scored on correct, well-tested code that fits NANDA Town's design and is clearly documented.",
  },
  {
    title: "Phase 2: Service + SKILL.md",
    weight: "80%",
    description:
      "The main event. Scored on usefulness, creativity, easy setup, and whether agents can use it from your SKILL.md alone.",
  },
];

const faqs = [
  {
    question: "What order do I do things in?",
    answer:
      "Register with the participation form, do Phase 1, then do Phase 2 and submit your skill. Phase 1 is the warm-up: improve NANDA Town and open a pull request. Phase 2 is the main event: build a service, write a SKILL.md for it, and submit it on the NANDA Town skills page.",
  },
  {
    question: "How many forms are there?",
    answer:
      "Two. The participation form is where you register once; it does not submit Phase 1 or Phase 2. Phase 1 is submitted as a pull request on GitHub, and Phase 2 is submitted on the NANDA Town skills page. Separately, the final Google form must be fully completed before Saturday, July 11 at 2:00 PM ET. Resubmit that final form even if you have completed it already, because there are new required fields for your final submission, and share your Phase 2 video demo in it.",
  },
  {
    question: "What are the deadlines?",
    answer:
      "The initial submission deadline is Friday, July 10, 2026 at 12:00 PM (noon) Eastern Time. It covers both phases and applies wherever you are building from. All Phase 1 (Nanda Town PR) submissions are final at that time. You can modify and continue working on your submission for Phase 2 only until Saturday, July 11 at 2:00 PM ET, which is also when your required video demo is due at the latest. The final Google form must also be fully completed before Saturday, July 11 at 2:00 PM ET.",
  },
  {
    question: "Is a video demo required?",
    answer:
      "Yes. A video demo of your Phase 2 submission is required, and you share it in the final Google form. The video will not impact your score, but it is a requirement to fully complete your submission, and if you get selected for the top 10 teams we need a video to show to people. It is due at the latest Saturday, July 11, 2026 at 2:00 PM ET.",
  },
  {
    question: "Do I have to do both phases?",
    answer:
      "We recommend it. Phase 1 is a short warm-up worth 20% that teaches you how NANDA Town works. Phase 2, your own service with a SKILL.md, is the main event, worth 80%. You can enter just one, but doing both gives you the best score.",
  },
  {
    question: "How do I start Phase 1?",
    answer:
      "Press the Start Phase 1 button above. It opens the NANDA Town README, which has the exact commands to clone the repo and run it locally. Then pick one of the 12 building blocks, improve it or add a new one, add tests, and open a pull request named hackathon/your-name-topic.",
  },
  {
    question: "Am I building an agent?",
    answer:
      "No. In Phase 2 you build a service and write a SKILL.md that describes it. Agents that already exist read your SKILL.md and call your service. You never write agent code.",
  },
  {
    question: "What is a SKILL.md?",
    answer:
      "It's a plain Markdown file that teaches an AI agent how to use your service: what it does, its web address, the endpoints, and how to call them. An agent reads it and then uses your service on its own, with no human help.",
  },
  {
    question: "What is NANDA Town?",
    answer:
      "It's an open-source sandbox where AI agents practice talking, trusting, paying, and coordinating across 12 building blocks. In Phase 1 you improve one of those building blocks, so you learn how the town works before building your own service. Use the Explore NANDA Town button above to see it running.",
  },
  {
    question: "Where do I submit?",
    answer:
      "Phase 1 is a pull request on the NANDA Town repo on GitHub. Phase 2 is submitted on the NANDA Town skills page: press Submit your skill above, then scroll down on that page to find the form. That page is the only place Phase 2 is submitted. Then complete the final Google form (with your video demo) before Saturday, July 11 at 2:00 PM ET.",
  },
  {
    question: "What are the fields on the Phase 2 submission form?",
    answer:
      "Skill name: required. Your name or team: optional, but fill it in, since it shows on your registry card. Email: private, never shown on the site or public API. GitHub username: the bare handle, not a URL; this is how your registry entry is matched to your Phase 1 PR and registration. One line description: what the service does. Source type: a hosted link (URL to your .md), a GitHub repo (link to repo or file), or paste the file (the Markdown text). Your endpoints: one per line, method then the full live URL, for example GET https://your-app.onrender.com/weather?city={city} or POST https://your-app.onrender.com/alerts. These must be real, live URLs, because the registry checks them. Tags: comma separated, for example weather, api, demo. Then press Submit SkillMD.",
  },
  {
    question: "Can I keep my SKILL.md private?",
    answer:
      "Yes. The form gives you the option to make the SKILL.md file or link itself private if you would like. But the idea, description, and authorship should still be discoverable for collaboration purposes.",
  },
  {
    question: "How do I confirm my submission was recorded?",
    answer:
      'After a successful submit, the form shows "Saved." with your skill name and a "View its API record" link. Your card appears at the top of the list on the skills page, and the "Submitted so far" count goes up by one. To verify with curl: GET https://nandatown.projectnanda.org/api/skills returns a count and the list of skills. Find your entry, note its id, then GET https://nandatown.projectnanda.org/api/skills/<id> returns your full record. There is no confirmation email. If your entry is in that JSON, it is recorded.',
  },
  {
    question: "How do I confirm a judge's agent can reach my service?",
    answer:
      'The registry checks your link and shows a badge on your card: green "link responded" or red "couldn\'t reach link." The check is not instant, so submit, then return to the skills page until your card reads "link responded." If it reads "couldn\'t reach link," your host is asleep or down: open your URL yourself to wake it, confirm it answers, then submit again. There is no edit button; resubmitting is the normal way to fix an entry. Keep your service up through Saturday, July 11: judging runs that morning from 9:30 AM to noon ET to pick the top 10, and if your service is down when the judge\'s agent calls, the agent fails.',
  },
  {
    question: "Can I submit Phase 2 by API instead of the form?",
    answer:
      "Yes, optionally. POST JSON to https://nandatown.projectnanda.org/api/skills with a name, a source_type of url, github, or content, a source_url (or a content field for pasted Markdown), and your endpoints. The form is still preferred because it also records your GitHub username, which the API example does not.",
  },
  {
    question: "Do I have to attend in person?",
    answer:
      "No. Attendance at the in-person event on Saturday, July 11 from 9:30 AM to 5:00 PM ET at MIT is not required: you can still fully participate and win by being fully virtual, as this is a fully global hackathon. If you do come, you are encouraged to use the time to finish up your Phase 2 submission; there will be a dedicated space to do that. RSVP on Luma is required to attend.",
  },
  {
    question: "Who can join?",
    answer:
      "Anyone: students, builders, researchers, and professionals. You can enter on your own or as a team.",
  },
];

export default function Home() {
  return (
    <main className="landing-shell">
      <SiteHeader />

      <section className="hero grid-bg">
        <div className="hero-inner">
          <div className="hero-copy-wrap">
            <p className="date-pill">SUBMIT BY FRI JULY 10, 12 PM ET · 100% VIRTUAL · OPTIONAL IN-PERSON FINALE · MIT MEDIA LAB</p>
            <h1>
              NandaHack:
              <br />
              <span>Agentic AI</span>
              <br />
              Hackathon
            </h1>
            <p className="hero-sponsors-inline">HCLTech · MIT Media Lab</p>
            <p className="hero-copy">
              <strong>Join fully online from anywhere. You never have to be in person.</strong> Two
              phases: first warm up on NANDA Town (Phase 1), then build a service and write a
              SKILL.md for it (Phase 2). Initial submissions for both phases are due Friday, July
              10, 2026 at 12:00 PM (noon) Eastern Time.
            </p>
            <div className="hero-actions">
              <a className="btn btn-primary btn-xl" href={REGISTER_FORM_URL}>
                Register for the Hackathon
              </a>
              <a className="btn btn-light btn-xl" href="#deadlines">
                See the deadlines
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

      <section id="deadlines" className="section section-soft">
        <div className="section-head">
          <h2>Key deadlines</h2>
          <p className="section-subtitle">
            All times are Eastern Time. Deadlines apply wherever you are building from. Do not wait
            until the last minute: you are welcome to revise and resubmit as many times as you like
            before each deadline.
          </p>
        </div>
        <div className="intro-grid">
          {deadlines.map((deadline) => (
            <article key={deadline.title} className="info-card">
              <p className="resource-kicker">{deadline.when}</p>
              <h3>{deadline.title}</h3>
              <p>{deadline.detail}</p>
              {deadline.href && (
                <a className="btn btn-primary" href={deadline.href} target="_blank" rel="noopener noreferrer">
                  {deadline.cta}
                </a>
              )}
            </article>
          ))}
        </div>
      </section>

      <section id="how" className="section">
        <div className="section-head">
          <h2>Hackathon Steps</h2>
          <p className="section-subtitle">
            There are three places you interact with: one registration form, one pull request, and
            one service submission. That is the whole flow, plus one final Google form to complete
            before Saturday, July 11 at 2:00 PM ET. Register once with the form above, then do the
            two phases in order: Phase 1 first, Phase 2 after. You submit each phase in the place
            named on its card below.
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
            Everything you need to build, in one place: the live app, the step-by-step guide, the code,
            the community, and every event.
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
                RSVP on Luma
              </a>
            </div>
          ))}
        </div>
      </section>

      <section id="connect" className="section">
        <div className="section-head">
          <h2>Stay connected</h2>
          <p className="section-subtitle">
            Join the Discord for everything happening during the hackathon, and watch an info
            session recording to get the full walkthrough before you submit.
          </p>
        </div>
        <div className="intro-grid">
          <article className="info-card connect-card">
            <h3>Join the Discord</h3>
            <p>
              All hackathon communication lives here: updates, announcements, team formation, and
              technical questions. It&apos;s the place to get help and find teammates. If you have
              any questions at all, ask them on the Project NANDA Discord.
            </p>
            <a className="btn btn-primary" href={DISCORD_URL} target="_blank" rel="noopener noreferrer">
              Join the Discord
            </a>
          </article>
          <article className="info-card connect-card">
            <h3>Info session recording</h3>
            <p>
              The last chance info sessions have finished. Watch a recording of one of the info
              sessions for the full walkthrough of the format, deadlines, judging criteria, NANDA
              Town, and SKILL.md before you submit.
            </p>
            <a className="btn btn-primary" href={INFO_SESSION_RECORDING_URL} target="_blank" rel="noopener noreferrer">
              Watch the recording
            </a>
          </article>
        </div>
      </section>

      <section id="mentors" className="section">
        <div className="section-head">
          <h2>Meet your mentors</h2>
          <p className="section-subtitle">
            Guidance from the MIT Project NANDA team and HCLTech leaders in Responsible AI,
            enterprise adoption, and secure AI architecture.
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
          <h2>How scoring works</h2>
          <p className="section-subtitle">
            The warm-up is worth 20%. The main event is worth 80%. You can enter one phase, but
            doing both scores best. Never assume what the judges will or will not look at: be as
            clear and specific as possible and leave absolutely no room for guesswork.
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

      <section id="attend" className="section section-soft">
        <div className="section-head">
          <h2>Join us on July 11</h2>
          <p className="section-subtitle">
            Attendance in person is <strong>not</strong> required: you can fully participate and win
            while fully virtual, since this is a fully global hackathon. If you can, come to MIT on
            Saturday, July 11, 2026 from 9:30 AM to 5:00 PM ET to meet the key leaders behind NANDA
            and finish up your Phase 2 submission on site.
          </p>
        </div>
        <div className="card-grid">
          <article className="info-card">
            <h3>NANDA Summit</h3>
            <p>9:30 AM to 1:00 PM ET · MIT Media Lab</p>
          </article>
          <article className="info-card">
            <h3>Hackathon demos &amp; awards</h3>
            <p>2:00 PM to 5:00 PM ET · MIT Media Lab</p>
          </article>
          <article className="info-card">
            <h3>Phase 2 work space</h3>
            <p>
              A dedicated space to work on and finish up your Phase 2 submission before edits close
              at 2:00 PM ET.
            </p>
          </article>
        </div>
        <div className="attend-foot">
          <a className="btn btn-primary" href={LUMA_URL} target="_blank" rel="noopener noreferrer">
            RSVP on Luma
          </a>
          <span className="attend-note">RSVP is required and registration requires host approval</span>
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
