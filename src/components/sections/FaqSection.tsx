import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { FAQ } from "@/config";
import { FadeIn } from "@/components/ui/FadeIn";

export function FaqSection() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="px-6 py-32 bg-[var(--bg)]">
      <div className="max-w-2xl mx-auto">
        <FadeIn>
          <div className="text-center font-mono text-[11px] uppercase tracking-wider text-[var(--text-tertiary)]">
            Perguntas frequentes
          </div>
        </FadeIn>

        <div className="mt-12">
          {FAQ.map((f, i) => {
            const isOpen = open === i;
            return (
              <FadeIn key={f.question} delay={i * 0.05}>
                <div className="border-b border-[var(--border)]">
                  <button
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="w-full flex items-center justify-between gap-4 py-6 text-left"
                  >
                    <span className="text-[16px] font-medium text-[var(--text-primary)]">
                      {f.question}
                    </span>
                    <ChevronDown
                      size={20}
                      color="var(--accent)"
                      className="shrink-0 transition-transform duration-300"
                      style={{ transform: isOpen ? "rotate(180deg)" : "rotate(0)" }}
                    />
                  </button>
                  <div
                    className="grid transition-all duration-300 ease-out"
                    style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
                  >
                    <div className="overflow-hidden">
                      <p className="pb-6 text-[15px] text-[var(--text-secondary)] leading-relaxed">
                        {f.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
