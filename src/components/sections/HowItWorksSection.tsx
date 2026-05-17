import { HOW_IT_WORKS } from "@/config";
import { FadeIn } from "@/components/ui/FadeIn";

export function HowItWorksSection() {
  return (
    <section className="px-6 py-32 bg-[var(--bg-section)]">
      <div className="max-w-6xl mx-auto">
        <FadeIn>
          <h2
            className="text-center font-light text-[var(--text-primary)]"
            style={{ fontSize: "clamp(28px, 4vw, 36px)", fontWeight: 300 }}
          >
            {HOW_IT_WORKS.headline}
          </h2>
        </FadeIn>

        <div className="mt-20 grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-6 relative">
          {HOW_IT_WORKS.steps.map((s, i) => (
            <FadeIn key={s.number} delay={i * 0.15}>
              <div className="relative">
                <div
                  className="font-mono text-[var(--accent-border)] leading-none"
                  style={{ fontSize: "80px", fontWeight: 700 }}
                >
                  {s.number}
                </div>
                <h3 className="mt-4 text-[18px] font-medium text-[var(--text-primary)]">
                  {s.title}
                </h3>
                <p className="mt-2 text-[15px] text-[var(--text-secondary)] leading-relaxed">
                  {s.description}
                </p>
                {i < HOW_IT_WORKS.steps.length - 1 && (
                  <div className="hidden md:block absolute top-10 right-[-12px] w-6 h-px bg-[var(--border)]" />
                )}
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
