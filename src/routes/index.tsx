import { createFileRoute } from "@tanstack/react-router";
import { HeroSection } from "@/components/sections/HeroSection";
import { IdentificationSection } from "@/components/sections/IdentificationSection";
import { ProductSection } from "@/components/sections/ProductSection";
import { HowItWorksSection } from "@/components/sections/HowItWorksSection";
import { BeforeAfterSection } from "@/components/sections/BeforeAfterSection";
import { CtaMidSection } from "@/components/sections/CtaMidSection";
import { WhatsIncludedSection } from "@/components/sections/WhatsIncludedSection";
import { ReviewsSection } from "@/components/sections/ReviewsSection";
import { ObjectionsSection } from "@/components/sections/ObjectionsSection";
import { OfferSection } from "@/components/sections/OfferSection";
import { FaqSection } from "@/components/sections/FaqSection";
import { FooterSection } from "@/components/sections/FooterSection";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Daily Hub System — Viva seus dias com intenção" },
      {
        name: "description",
        content:
          "O template no Notion que organiza sua vida inteira num único lugar. Acesso imediato por R$17.",
      },
      { property: "og:title", content: "Daily Hub System" },
      {
        property: "og:description",
        content:
          "Em 7 dias você vai ter uma rotina que finalmente não abandona.",
      },
    ],
  }),
});

function Index() {
  return (
    <main className="bg-[var(--bg)] text-[var(--text-primary)]">
      <HeroSection />
      <IdentificationSection />
      <ProductSection />
      <HowItWorksSection />
      <BeforeAfterSection />
      <CtaMidSection />
      <WhatsIncludedSection />
      <ReviewsSection />
      <ObjectionsSection />
      <OfferSection />
      <FaqSection />
      <FooterSection />
    </main>
  );
}
