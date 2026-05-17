import * as Icons from "lucide-react";
import { OBJECTIONS } from "@/config";
import { FadeIn } from "@/components/ui/FadeIn";
import { AppCard } from "@/components/ui/AppCard";

export function ObjectionsSection() {
  return (
    <section className="px-6 py-32 bg-[var(--bg)]">
      <div className="max-w-6xl mx-auto">
        <FadeIn>
          <h2
            className="text-center font-light text-[var(--text-primary)]"
            style={{ fontSize: "clamp(28px, 4vw, 36px)", fontWeight: 300 }}
          >
            {OBJECTIONS.headline}
          </h2>
        </FadeIn>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          {OBJECTIONS.items.map((item, i) => {
            const Icon = (Icons as any)[item.icon] as React.ComponentType<{
              size?: number;
              color?: string;
            }>;
            return (
              <FadeIn key={item.title} delay={i * 0.08}>
                <AppCard className="h-full">
                  {Icon && <Icon size={24} color="var(--accent)" />}
                  <h3 className="mt-5 text-[17px] font-medium text-[var(--text-primary)]">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-[14px] text-[var(--text-secondary)] leading-relaxed">
                    {item.description}
                  </p>
                </AppCard>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
