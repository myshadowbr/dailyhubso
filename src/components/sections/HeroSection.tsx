import { HERO, IMAGES } from "@/config";
import { AppBadge } from "@/components/ui/AppBadge";
import { AppButton } from "@/components/ui/AppButton";
import { FadeIn } from "@/components/ui/FadeIn";
import { ImagePlaceholder } from "@/components/ImagePlaceholder";

export function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-24 bg-[var(--bg)]">
      <div className="max-w-5xl w-full mx-auto text-center flex flex-col items-center">
        <FadeIn>
          <AppBadge>{HERO.badge}</AppBadge>
        </FadeIn>

        <FadeIn delay={0.1}>
          <h1
            className="mt-8 font-light leading-[1.1] tracking-tight text-[var(--text-primary)]"
            style={{ fontSize: "clamp(40px, 7vw, 80px)", fontWeight: 300 }}
          >
            {HERO.headline[0]}
            <br />
            {HERO.headline[1].split("finalmente")[0]}
            <em
              className="italic"
              style={{ color: "var(--accent)", fontStyle: "italic" }}
            >
              finalmente
            </em>
            {HERO.headline[1].split("finalmente")[1]}
            <br />
            {HERO.headline[2]}
          </h1>
        </FadeIn>

        <FadeIn delay={0.2}>
          <p className="mt-8 max-w-2xl mx-auto text-[var(--text-secondary)] text-[17px] leading-relaxed">
            {HERO.subheadline}
          </p>
        </FadeIn>

        <FadeIn delay={0.3}>
          <div className="mt-10 flex flex-col items-center gap-3">
            <AppButton variant="primary">{HERO.cta}</AppButton>
            <span className="text-[12px] text-[var(--text-tertiary)]">{HERO.ctaSub}</span>
          </div>
        </FadeIn>

        <FadeIn delay={0.4} className="w-full mt-16">
          <div className="max-w-[800px] mx-auto" style={{ filter: "drop-shadow(0 0 60px #4ADE8020)" }}>
            <ImagePlaceholder
              src={IMAGES.heroMockup}
              alt="Daily Hub System"
              aspectRatio="16/9"
              label="/public/images/hero-mockup.png · 16:9"
            />
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
