import Image from "next/image";

export default function SiteHeader() {
  return (
    <>
      <div className="announce-bar">
        <p>
          <strong>NandaHack is on.</strong> <strong>Jul 10, 12 PM ET</strong>{" "}
          <span>- initial SkillMD + Phase 1 PRs due (registers you).</span>{" "}
          <strong>Jul 11, 2 PM ET</strong>{" "}
          <span>- SkillMDs final + demo video (required for judging, not scored).</span>
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
        <a href="/#deadlines">Deadlines</a>
        <a href="/#resources">Resources</a>
        <a href="/#faq">FAQ</a>
        <a className="btn btn-primary" href="https://forms.gle/HKCSitSChcFSqyzY8">
          Register
        </a>
        </nav>
      </header>
    </>
  );
}
