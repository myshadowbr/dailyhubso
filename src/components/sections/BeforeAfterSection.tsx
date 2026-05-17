import { Check, X } from "lucide-react";
import { BEFORE_AFTER } from "@/config";
import { FadeIn } from "@/components/ui/FadeIn";
import { Card } from "@/components/ui/Card";

export function BeforeAfterSection() {
  return (
    <section className="px-6 py-32 bg-[var(--bg)]">
      <div className="max-w-5xl mx-auto">
        <FadeIn>
          <h2
            className="text-center font-light text-[var(--text-primary)]"
            style={{ fontSize: "clamp(28px, 4vw, 36px)", fontWeight: 300 }}
          >
            {BEFORE_AFTER.headline}
          </h2>
        </FadeIn>

        <div className="mt-16 grid md:grid-cols-2 gap-6">
          <FadeIn>
            <Card className="h-full">
              <div
                className="font-mono text-[11px] uppercase tracking-wider"
                style={{ color: "#EF444499" }}
              >
                {BEFORE_AFTER.before.label}
              </div>
              <ul className="mt-6 space-y-4">
                {BEFORE_AFTER.before.items.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-[var(--text-secondary)] text-[15px]">
                    <X size={18} color="#EF4444" className="mt-0.5 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </FadeIn>

          <FadeIn delay={0.1}>
            <Card variant="accent" className="h-full">
              <div
                className="font-mono text-[11px] uppercase tracking-wider"
                style={{ color: "var(--accent)" }}
              >
                {BEFORE_AFTER.after.label}
              </div>
              <ul className="mt-6 space-y-4">
                {BEFORE_AFTER.after.items.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-[var(--text-primary)] text-[15px]">
                    <Check size={18} color="var(--accent)" className="mt-0.5 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
