import Image from "next/image";

const phaseRows = [
  {
    label: "PHASE 1",
    dates: "Apr 10 - May 7, 2026",
    title: "Enterprise Agent Ideas",
    description:
      "Build agent infrastructure that solves real enterprise problems. On demo day, a judge hands a stock OpenClaw agent your instructions — if it can use what you built, you pass.",
    rows: [
      {
        track: "Client 0",
        builds: "Internal AI agents, copilots, productivity tools",
        impact: "Creates proven use cases + credibility",
        revenue: "Faster deal conversion (proof-led selling)",
      },
      {
        track: "Enterprise AI (incl. Modernization)",
        builds: "Client-ready solutions (SAP, legacy, agents)",
        impact: "Generates direct qualified opportunities",
        revenue: "Large transformation deals ($$$)",
      },
      {
        track: "Sales AI Enablement (Client 0 x Enterprise)",
        builds: "AI-powered account insights, RFP agents",
        impact: "Improves deal identification + win rates",
        revenue: "Pipeline expansion + higher conversion",
      },
      {
        track: "Responsible AI",
        builds: "Safety, governance, red-teaming solutions",
        impact: "Reduces enterprise adoption friction",
        revenue: "Unlocks regulated industry deals (BFSI, healthcare)",
      },
      {
        track: "Executive AI Coaching",
        builds: "AI copilots for CXOs + coaching model",
        impact: "Opens C-suite access + strategic deals",
        revenue: "High-value consulting + transformation programs",
      },
    ],
  },
];

const timeline = [
  { phase: "Announcement", date: "Apr 10, 2026" },
  { phase: "Phase 1: Enterprise Agents", date: "Apr 10 - May 7, 2026" },
  { phase: "Phase 2: Agent Arena", date: "May 7 - June 13, 2026" },
  { phase: "Hackathon & Awards", date: "June 13, 2026 at MIT Media Lab" },
];

const audience = [
  {
    title: "Builders and engineers",
    description: "You like shipping real systems, not just demos. Bring your stack and build the missing agent layers.",
  },
  {
    title: "Researchers and students",
    description:
      "Test new ideas in production-like scenarios and get feedback from practitioners, judges, and mentors.",
  },
  {
    title: "Product and domain teams",
    description: "Have a real enterprise pain point? Turn it into a solution with measurable business impact.",
  },
];

const benefits = [
  {
    title: "Mentors and feedback",
    description: "Get direct input from technical and business leaders across enterprise AI and systems design.",
  },
  {
    title: "Real-world evaluation",
    description: "Your work is judged on utility, robustness, and how well a stock agent can actually use it.",
  },
  {
    title: "Career and visibility",
    description: "Top teams present at the final MIT event and gain visibility with leaders across the ecosystem.",
  },
];

const judgingCriteria = [
  {
    title: "Problem Relevance",
    weight: "30%",
    description: "How clearly the team targets a real enterprise bottleneck in agent deployment or coordination.",
  },
  {
    title: "Technical Quality",
    weight: "30%",
    description: "Architecture, reliability, and implementation depth. Judges look for practical systems, not mockups.",
  },
  {
    title: "Usability by Agents",
    weight: "25%",
    description: "How effectively a stock agent can discover, call, and use what you built in a realistic workflow.",
  },
  {
    title: "Business Impact",
    weight: "15%",
    description: "Potential to unlock measurable value: speed, trust, compliance, efficiency, or revenue outcomes.",
  },
];

const faqs = [
  {
    question: "Who can apply?",
    answer:
      "Students, builders, researchers, and professionals are welcome. Cross-functional teams are encouraged.",
  },
  {
    question: "Do I need a full team before applying?",
    answer:
      "No. You can apply as an individual or as a team. Team matching support will be available before the build phase.",
  },
  {
    question: "What should we submit?",
    answer:
      "A working prototype, clear documentation, and a short demo that shows the problem, approach, and impact.",
  },
  {
    question: "What makes a strong project?",
    answer:
      "Projects that solve high-friction enterprise bottlenecks with practical, reliable, and testable agent workflows.",
  },
];

export default function Home() {
  return (
    <main className="landing-shell">
      <header className="top-nav">
        <a href="#" className="mit-lockup" aria-label="MIT home">
          <Image
            src="/mit-logo.svg"
            alt="Massachusetts Institute of Technology"
            className="mit-logo"
            width={280}
            height={72}
            priority
          />
        </a>

        <nav className="nav-links" aria-label="Main navigation">
          <a href="#faq">FAQ</a>
          <a className="btn btn-primary" href="https://forms.gle/HKCSitSChcFSqyzY8">
            Apply to Attend
          </a>
        </nav>
      </header>

      <section className="hero grid-bg">
        <div className="hero-inner">
          <div className="hero-copy-wrap">
            <p className="date-pill">APRIL 10 - JUNE 13, 2026</p>
            <h1>
              NandaHack:
              <br />
              <span>Agentic AI</span>
              <br />
              Hackathon
            </h1>
            <p className="eyebrow">HCLTECH · MIT MEDIA LAB</p>
            <p className="hero-copy">
              Build a system, tool, or layer that fixes a real bottleneck in how AI agents are deployed,
              coordinated, or scaled.
            </p>
            <div className="hero-actions">
              <a className="btn btn-primary btn-xl" href="https://forms.gle/HKCSitSChcFSqyzY8">
                Apply to Attend
              </a>
              <a className="btn btn-light btn-xl" href="https://forms.gle/ziXo4WHMQei7B9rf9">
                Volunteer
              </a>
            </div>
          </div>

          <div className="hero-art">
            <Image
              src="/landing_image.webp"
              alt="NandaHack Agent Arena visual"
              className="hero-art-image"
              fill
              sizes="(max-width: 1024px) 100vw, 520px"
              priority
            />
          </div>
        </div>
      </section>

      <section id="about" className="section">
        <div className="section-head">
          <h2>What is NandaHack?</h2>
          <p className="section-subtitle">
            A high-signal hackathon for teams building practical infrastructure for enterprise AI agents.
          </p>
        </div>
        <div className="intro-grid">
          <article className="info-card">
            <h3>Mission</h3>
            <p>
              Move beyond chatbot demos and build the trust, coordination, memory, safety, and integration layers that
              enterprises actually need.
            </p>
          </article>
          <article className="info-card">
            <h3>Format</h3>
            <p>
              Two phases over ten weeks. Teams prototype, iterate with mentor feedback, and present at a final live
              event at MIT Media Lab.
            </p>
          </article>
        </div>
      </section>

      <section className="section section-soft">
        <div className="section-head">
          <h2>Who should join</h2>
        </div>
        <div className="card-grid">
          {audience.map((item) => (
            <article key={item.title} className="info-card">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="tracks" className="section section-soft">
        <div className="section-head">
          <h2>Why participate</h2>
        </div>
        <div className="card-grid">
          {benefits.map((item) => (
            <article key={item.title} className="info-card">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="phases" className="section">
        <div className="section-head">
          <h2>Phases & Tracks</h2>
          <p className="section-subtitle">
            Build solutions that can be used by real enterprise agents in real operational workflows.
          </p>
        </div>
        {phaseRows.map((phase) => (
          <article key={phase.title} className="phase-card">
            <div className="phase-header">
              <span className="phase-tag">{phase.label}</span>
              <span className="phase-date">{phase.dates}</span>
            </div>
            <h3>{phase.title}</h3>
            <p>{phase.description}</p>

            <div className="table-wrap">
              <table>
                <thead>
                  <tr>
                    <th>Track</th>
                    <th>What It Builds</th>
                    <th>Pipeline Impact</th>
                    <th>Revenue Lever</th>
                  </tr>
                </thead>
                <tbody>
                  {phase.rows.map((row) => (
                    <tr key={row.track}>
                      <td>{row.track}</td>
                      <td>{row.builds}</td>
                      <td>{row.impact}</td>
                      <td>{row.revenue}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </article>
        ))}
      </section>

      <section id="judging" className="section section-soft">
        <div className="section-head">
          <h2>Judging</h2>
          <p className="section-subtitle">
            Projects are evaluated on real utility, technical rigor, and readiness for enterprise agent workflows.
          </p>
        </div>
        <div className="card-grid">
          {judgingCriteria.map((item) => (
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

      <section id="timeline" className="section timeline">
        <h2>Timeline</h2>
        <p className="section-subtitle">Ten weeks, two phases, one final event at MIT</p>
        <div className="timeline-list">
          {timeline.map((item) => (
            <div className="timeline-item" key={item.phase}>
              <span className="timeline-dot" aria-hidden="true" />
              <div className="timeline-card">
                <strong>{item.phase}</strong>
                <span>{item.date}</span>
              </div>
            </div>
          ))}
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

      <footer className="site-footer">
        <div className="footer-left footer-brand">
          <Image
            src="/mit-logo.svg"
            alt="Massachusetts Institute of Technology"
            className="footer-mit-logo"
            width={132}
            height={34}
          />
          <span>NandaHack</span>
        </div>
        <nav className="footer-links" aria-label="Footer">
          <a href="#about">About</a>
          <a href="#faq">FAQ</a>
          <a href="https://www.media.mit.edu/" target="_blank" rel="noopener noreferrer">
            MIT Media Lab
          </a>
          <a href="https://accessibility.mit.edu" target="_blank" rel="noopener noreferrer">
            Accessibility
          </a>
        </nav>
        <div className="footer-right">© 2026 NandaHack · MIT</div>
      </footer>
    </main>
  );
}
