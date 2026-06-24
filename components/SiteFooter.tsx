export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-left footer-brand">
        <span className="footer-brand-text">NandaHack</span>
        <span className="footer-sep">|</span>
        <span className="footer-partners">HCLTech & MIT Media Lab</span>
      </div>
      <nav className="footer-links" aria-label="Footer">
        <a href="/about">About</a>
        <a href="/#faq">FAQ</a>
        <a href="https://discord.gg/DJeWUtxnF" target="_blank" rel="noopener noreferrer">
          Discord
        </a>
        <a href="https://www.media.mit.edu/" target="_blank" rel="noopener noreferrer">
          MIT Media Lab
        </a>
        <a href="https://accessibility.mit.edu" target="_blank" rel="noopener noreferrer">
          Accessibility
        </a>
      </nav>
      <div className="footer-right">© 2026 NandaHack · MIT</div>
    </footer>
  );
}
