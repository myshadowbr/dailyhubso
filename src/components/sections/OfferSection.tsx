import { Check } from "lucide-react";
import { OFFER, PRICING, WHATS_INCLUDED } from "@/config";
import { FadeIn } from "@/components/ui/FadeIn";
import { Button } from "@/components/ui/Button";

export function OfferSection() {
  return (
    <section className="px-6 py-32 bg-[var(--bg-section)]">
      <div className="max-w-5xl mx-auto">
        <FadeIn>
          <h2
            className="text-center font-light text-[var(--text-primary)] leading-[1.15]"
            style={{ fontSize: "clamp(32px, 5vw, 56px)", fontWeight: 300 }}
          >
            {OFFER.headline[0]}
            <br />
            {OFFER.headline[1]}
          </h2>
        </FadeIn>

        <div className="mt-16 grid md:grid-cols-2 gap-10 items-center">
          <FadeIn>
            <ul className="space-y-4">
              {WHATS_INCLUDED.items.map((item) => (
                <li key={item} className="flex items-start gap-3 text-[15px] text-[var(--text-primary)]">
                  <Check size={18} color="var(--accent)" className="mt-0.5 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </FadeIn>

          <FadeIn delay={0.1}>
            <div className="text-center md:text-left">
              <div className="text-[14px] text-[var(--text-tertiary)] line-through">
                de {PRICING.original}
              </div>
              <div
                className="mt-2 text-[var(--accent)] leading-none"
                style={{ fontSize: "56px", fontWeight: 500 }}
              >
                {PRICING.current}
              </div>
              <div className="mt-4 inline-block font-mono text-[12px] uppercase tracking-wider px-3 py-1.5 rounded-full bg-[var(--accent-muted)] text-[var(--accent)] border border-[var(--accent-border)]">
                {PRICING.discount} · {PRICING.badge}
              </div>
            </div>
          </FadeIn>
        </div>

        <FadeIn delay={0.2}>
          <div className="mt-14 flex flex-col items-center gap-3">
            <Button variant="primary" className="!px-12 !py-5 text-[16px]">
              {OFFER.cta}
            </Button>
            <span className="text-[12px] text-[var(--text-tertiary)] text-center">
              {OFFER.ctaSub}
            </span>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
