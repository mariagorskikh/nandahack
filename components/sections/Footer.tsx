import { NAV_LINKS } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="relative z-10 py-16 sm:py-20 px-6 sm:px-10 md:px-16 lg:px-24 border-t border-white/10">
      <div className="flex flex-col sm:flex-row items-start justify-between gap-10">
        <div className="space-y-4">
          <a href="#" className="inline-flex items-center space-x-2 group">
            <span className="text-xl font-semibold text-white transition-colors group-hover:text-amber-400">
              NandaHack
            </span>
          </a>
          <p className="text-sm text-white/45">
            A buildathon for practical agent infrastructure.
          </p>
        </div>

        <div className="flex flex-wrap gap-x-8 gap-y-3 text-sm text-white/50">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="hover:text-white/70 transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>

      <div className="mt-12 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <span className="text-white/35 text-sm">
          &copy; 2026 NandaHack.
        </span>
      </div>
    </footer>
  );
}
