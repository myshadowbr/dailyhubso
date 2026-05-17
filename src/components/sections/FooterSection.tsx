import { Instagram, BookOpen } from "lucide-react";
import { FOOTER, LINKS } from "@/config";

export function FooterSection() {
  return (
    <footer className="px-6 py-12" style={{ background: "#050505" }}>
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 items-center">
        <div className="text-center md:text-left">
          <div
            className="text-[24px] text-[var(--text-primary)]"
            style={{ fontWeight: 300 }}
          >
            {FOOTER.brand}
          </div>
          <div className="text-[13px] text-[var(--text-tertiary)] mt-1">{FOOTER.tagline}</div>
        </div>

        <div className="flex items-center justify-center gap-6">
          <a
            href={LINKS.instagram}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="text-[var(--text-tertiary)] hover:text-[var(--accent)] transition-colors"
          >
            <Instagram size={20} />
          </a>
          <a
            href={LINKS.substack}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Substack"
            className="text-[var(--text-tertiary)] hover:text-[var(--accent)] transition-colors"
          >
            <BookOpen size={20} />
          </a>
        </div>

        <div className="text-center md:text-right text-[12px] text-[var(--text-tertiary)]">
          {FOOTER.rights}
        </div>
      </div>
    </footer>
  );
}
