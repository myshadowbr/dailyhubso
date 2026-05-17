import { Check } from "lucide-react";
import { WHATS_INCLUDED } from "@/config";
import { FadeIn } from "@/components/ui/FadeIn";

export function WhatsIncludedSection() {
  return (
    <section className="px-6 py-32 bg-[var(--bg)]">
      <div className="max-w-2xl mx-auto">
        <FadeIn>
          <h2
            className="text-center font-light text-[var(--text-primary)]"
            style={{ fontSize: "clamp(28px, 4vw, 36px)", fontWeight: 300 }}
          >
            {WHATS_INCLUDED.headline}
          </h2>
        </FadeIn>

        <ul className="mt-14 space-y-5">
          {WHATS_INCLUDED.items.map((item, i) => (
            <FadeIn as="li" key={item} delay={i * 0.05}>
              <div className="flex items-start gap-3 text-[16px] text-[var(--text-primary)]">
                <Check size={20} color="var(--accent)" className="mt-0.5 shrink-0" />
                <span>{item}</span>
              </div>
            </FadeIn>
          ))}
        </ul>

        <FadeIn delay={0.4}>
          <p className="mt-14 italic text-center text-[var(--text-tertiary)] text-[15px]">
            {WHATS_INCLUDED.closing}
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
