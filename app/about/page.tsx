import type { Metadata } from "next";
import SiteHeader from "../../components/SiteHeader";
import SiteFooter from "../../components/SiteFooter";

export const metadata: Metadata = {
  title: "About — NandaHack: Agentic AI Hackathon",
  description:
    "About NandaHack: Agentic AI Hackathon by HCLTech and MIT Media Lab. Build the practical infrastructure that AI agents actually need.",
};

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

export default function About() {
  return (
    <main className="landing-shell">
      <SiteHeader />

      <section className="section">
        <div className="section-head">
          <h1>About NandaHack</h1>
          <p className="section-subtitle">
            A hands-on hackathon for people building the real infrastructure that enterprise AI agents
            need — not just demos.
          </p>
        </div>
        <div className="intro-grid">
          <article className="info-card">
            <h3>The big idea</h3>
            <p>
              AI agents are only as useful as the services they can reach. NandaHack is about building those
              services — and improving the shared town that lets agents find and use them. It&apos;s part of{" "}
              <a className="text-link" href="https://projectnanda.org/#/" target="_blank" rel="noopener noreferrer">
                Project NANDA
              </a>
              , the broader effort behind NANDA Town.
            </p>
          </article>
          <article className="info-card">
            <h3>Two steps, start to finish</h3>
            <p>
              First, warm up by improving NANDA Town, the shared home for agents. Then build your own service that
              any agent can pick up and use on its own. That second step is the main event.
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

      <section className="section section-soft">
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

      <section className="section section-soft">
        <div className="section-head">
          <h2>Ready to build?</h2>
          <p className="section-subtitle">Two steps: warm up on NANDA Town, then build your own service.</p>
        </div>
        <div className="hero-actions">
          <a className="btn btn-primary btn-xl" href="/#how">
            See how it works
          </a>
          <a className="btn btn-light btn-xl" href="https://forms.gle/HKCSitSChcFSqyzY8">
            Apply to Attend
          </a>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
