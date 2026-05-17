import { CTA_MID } from "@/config";
import { FadeIn } from "@/components/ui/FadeIn";
import { AppButton } from "@/components/ui/AppButton";

export function CtaMidSection() {
  return (
    <section className="px-6 py-32 bg-[var(--bg-section)]">
      <div className="max-w-[640px] mx-auto text-center">
        <FadeIn>
          <h2
            className="font-light text-[var(--text-primary)] leading-tight"
            style={{ fontSize: "clamp(24px, 3.5vw, 32px)", fontWeight: 300 }}
          >
            {CTA_MID.headline}
          </h2>
        </FadeIn>
        <FadeIn delay={0.1}>
          <p className="mt-6 text-[var(--text-secondary)] text-[17px] leading-relaxed">
            {CTA_MID.subheadline}
          </p>
        </FadeIn>
        <FadeIn delay={0.2}>
          <div className="mt-10 flex flex-col items-center gap-3">
            <AppButton variant="primary">{CTA_MID.cta}</AppButton>
            <span className="text-[12px] text-[var(--text-tertiary)]">{CTA_MID.ctaSub}</span>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
