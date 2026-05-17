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
import { FAQ, PRICING } from "@/config";

const TITLE = "Daily Hub System — Viva seus dias com intenção";
const DESCRIPTION =
  "O template no Notion que organiza sua vida inteira num único lugar. Acesso imediato por R$17.";
const OG_TITLE = "Daily Hub System — Hub de organização pessoal no Notion";
const OG_DESCRIPTION =
  "Em 7 dias você vai ter uma rotina que finalmente não abandona. Template Notion + aulas por R$17.";

const productJsonLd = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "Daily Hub System",
  description:
    "Template Notion completo + aulas para organizar rotina, hábitos, projetos e reflexões num único sistema.",
  brand: { "@type": "Brand", name: "Daily Hub" },
  offers: {
    "@type": "Offer",
    price: PRICING.current.replace(/[^0-9.]/g, ""),
    priceCurrency: "BRL",
    availability: "https://schema.org/InStock",
    url: "https://dailyhubso.lovable.app/",
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQ.map((f) => ({
    "@type": "Question",
    name: f.question,
    acceptedAnswer: { "@type": "Answer", text: f.answer },
  })),
};

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: OG_TITLE },
      { property: "og:description", content: OG_DESCRIPTION },
      { property: "og:url", content: "https://dailyhubso.lovable.app/" },
      { property: "og:type", content: "product" },
    ],
    links: [{ rel: "canonical", href: "https://dailyhubso.lovable.app/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(productJsonLd),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify(faqJsonLd),
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
