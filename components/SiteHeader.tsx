import Image from "next/image";

const RECAP_URL =
  "https://www.media.mit.edu/posts/mit-media-lab-and-hcltech-host-nandahack-to-advance-agentic-ai-innovation/";

export default function SiteHeader() {
  return (
    <>
      <div className="announce-bar">
        <p>
          <strong>NandaHack has concluded.</strong>{" "}
          <span>June 13 to July 11, 2026. 400+ registrants, 230+ submissions, 164 pull requests.</span>{" "}
          <strong>
            <a href="/#results">See the winners</a>
          </strong>
        </p>
      </div>
      <header className="top-nav">
      <a href="/" className="mit-lockup" aria-label="MIT home">
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
        <a href="/about">About</a>
        <a href="/#results">Results</a>
        <a href="/#resources">Resources</a>
        <a href="/#faq">FAQ</a>
        <a className="btn btn-primary" href={RECAP_URL} target="_blank" rel="noopener noreferrer">
          Read the recap
        </a>
        </nav>
      </header>
    </>
  );
}
