import { REVIEWS } from "@/config";
import { FadeIn } from "@/components/ui/FadeIn";
import { Card } from "@/components/ui/Card";

export function ReviewsSection() {
  return (
    <section className="px-6 py-32 bg-[var(--bg-section)]">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6">
        {REVIEWS.map((r, i) => (
          <FadeIn key={r.name} delay={i * 0.1}>
            <Card className="h-full relative">
              <div
                className="absolute top-2 left-4 font-serif select-none pointer-events-none"
                style={{ color: "var(--accent-muted)", fontSize: "72px", lineHeight: 1 }}
              >
                “
              </div>
              <p className="relative text-[15px] leading-relaxed text-[var(--text-primary)] pt-6">
                {r.text}
              </p>
              <div className="mt-6">
                <div className="text-[15px] font-medium text-[var(--text-primary)]">{r.name}</div>
                <div className="text-[13px] text-[var(--text-tertiary)]">{r.role}</div>
              </div>
            </Card>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
