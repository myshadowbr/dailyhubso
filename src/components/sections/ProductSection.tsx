import * as Icons from "lucide-react";
import { PRODUCT, IMAGES } from "@/config";
import { FadeIn } from "@/components/ui/FadeIn";
import { ImagePlaceholder } from "@/components/ImagePlaceholder";
import { Button } from "@/components/ui/Button";

export function ProductSection() {
  return (
    <section className="px-6 py-32 bg-[var(--bg)]">
      <div className="max-w-6xl mx-auto grid md:grid-cols-[40fr_60fr] gap-12 md:gap-16 items-start">
        <FadeIn className="space-y-5 order-1">
          <ImagePlaceholder
            src={IMAGES.productCard1}
            alt="Diário"
            aspectRatio="4/3"
            label="/public/images/product-diario.png · 4:3"
          />
          <ImagePlaceholder
            src={IMAGES.productCard2}
            alt="Tracker"
            aspectRatio="4/3"
            label="/public/images/product-tracker.png · 4:3"
          />
          <ImagePlaceholder
            src={IMAGES.productCard3}
            alt="Planner"
            aspectRatio="4/3"
            label="/public/images/product-planner.png · 4:3"
          />
        </FadeIn>

        <div className="order-2">
          <FadeIn>
            <h2
              className="font-light leading-[1.15] text-[var(--text-primary)]"
              style={{ fontSize: "clamp(28px, 4vw, 40px)", fontWeight: 300 }}
            >
              {PRODUCT.headline[0]}
              <br />
              {PRODUCT.headline[1]}
            </h2>
          </FadeIn>

          <ul className="mt-10 space-y-4">
            {PRODUCT.features.map((f, i) => {
              const Icon = (Icons as any)[f.icon] as React.ComponentType<{ size?: number; color?: string }>;
              return (
                <FadeIn as="li" key={f.title} delay={i * 0.04}>
                  <div className="flex items-start gap-3">
                    {Icon && <Icon size={16} color="var(--accent)" />}
                    <div className="flex-1">
                      <div className="text-[15px] font-medium text-[var(--text-primary)]">
                        {f.title}
                      </div>
                      <div className="text-[14px] text-[var(--text-secondary)]">{f.description}</div>
                    </div>
                  </div>
                </FadeIn>
              );
            })}
          </ul>

          <FadeIn delay={0.4}>
            <p className="mt-10 italic text-[var(--text-tertiary)] text-[15px]">
              {PRODUCT.closing}
            </p>
            <div className="mt-4">
              <Button variant="ghost">{PRODUCT.cta}</Button>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
