import type { Metadata } from "next";
import SiteHeader from "../../components/SiteHeader";
import SiteFooter from "../../components/SiteFooter";

export const metadata: Metadata = {
  title: "About · NandaHack: Agentic AI Hackathon",
  description:
    "About NandaHack: Agentic AI Hackathon by HCLTech and MIT Media Lab, held June 13 to July 11, 2026, to build the practical infrastructure that AI agents actually need.",
};

const audience = [
  {
    title: "Builders and engineers",
    description: "People who like shipping real systems, not just demos, and who built the missing agent layers with their own stack.",
  },
  {
    title: "Researchers and students",
    description:
      "People who tested new ideas in production-like scenarios and got feedback from practitioners, judges, and mentors.",
  },
  {
    title: "Product and domain teams",
    description: "Teams who turned a real enterprise pain point into a solution with measurable business impact.",
  },
];

const benefits = [
  {
    title: "Mentors and feedback",
    description: "Direct input from technical and business leaders across enterprise AI and systems design.",
  },
  {
    title: "Real-world evaluation",
    description: "Work was judged on utility, robustness, and how well a stock agent could actually use it.",
  },
  {
    title: "Career and visibility",
    description: "The top 10 teams presented at the final MIT event and gained visibility with leaders across the ecosystem.",
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
            A hands-on hackathon, held June 13 to July 11, 2026, for people building the real
            infrastructure that enterprise AI agents need, not just demos.
          </p>
        </div>
        <div className="intro-grid">
          <article className="info-card">
            <h3>The big idea</h3>
            <p>
              AI agents are only as useful as the services they can reach. NandaHack was about building those
              services, and improving the shared town that lets agents find and use them. It is part of{" "}
              <a className="text-link" href="https://projectnanda.org/#/" target="_blank" rel="noopener noreferrer">
                Project NANDA
              </a>
              , the broader effort behind NANDA Town.
            </p>
          </article>
          <article className="info-card">
            <h3>Two steps, start to finish</h3>
            <p>
              First, participants warmed up by improving NANDA Town, the shared home for agents. Then they built
              their own service that any agent could pick up and use on its own. That second step was the main event.
            </p>
          </article>
        </div>
      </section>

      <section className="section section-soft">
        <div className="section-head">
          <h2>Who took part</h2>
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
          <h2>What participants got</h2>
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
          <h2>See the results</h2>
          <p className="section-subtitle">
            The hackathon has concluded. See the winners, the numbers, and the official MIT Media Lab recap.
          </p>
        </div>
        <div className="hero-actions">
          <a className="btn btn-primary btn-xl" href="/#results">
            See the winners
          </a>
          <a
            className="btn btn-light btn-xl"
            href="https://www.media.mit.edu/posts/mit-media-lab-and-hcltech-host-nandahack-to-advance-agentic-ai-innovation/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Read the MIT Media Lab recap
          </a>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
