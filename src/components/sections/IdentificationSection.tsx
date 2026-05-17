import { IDENTIFICATION } from "@/config";
import { FadeIn } from "@/components/ui/FadeIn";

export function IdentificationSection() {
  return (
    <section className="px-6 py-32 bg-[var(--bg-section)]">
      <div className="max-w-2xl mx-auto text-center">
        <FadeIn>
          <h2
            className="font-light text-[var(--text-primary)] leading-tight"
            style={{ fontSize: "clamp(28px, 4vw, 36px)", fontWeight: 300 }}
          >
            {IDENTIFICATION.question}
          </h2>
        </FadeIn>

        <div className="mt-12 space-y-7">
          {IDENTIFICATION.body.map((p, i) => (
            <FadeIn key={i} delay={0.1 + i * 0.08}>
              <p className="text-[var(--text-secondary)] text-[17px] leading-relaxed">{p}</p>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.6}>
          <p className="mt-14 italic text-[var(--text-tertiary)] text-[15px]">
            {IDENTIFICATION.closing}
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
