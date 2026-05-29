import { useTranslation } from "react-i18next";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

export function FAQ() {
  const { t } = useTranslation();
  const items = t("faq.items", { returnObjects: true }) as { q: string; a: string }[];
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="bg-secondary/50 py-24 lg:py-32">
      <div className="mx-auto max-w-3xl px-5 lg:px-8">
        <h2 className="text-center font-display text-4xl leading-tight text-foreground sm:text-5xl">
          {t("faq.title")}
        </h2>
        <div className="mt-12 space-y-3">
          {items.map((it, i) => (
            <div key={it.q} className="overflow-hidden rounded-2xl border border-border bg-card">
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left transition hover:bg-secondary"
              >
                <span className="font-display text-lg text-card-foreground">{it.q}</span>
                <ChevronDown
                  className={`h-5 w-5 shrink-0 text-[color:var(--brand-blue)] transition-transform ${open === i ? "rotate-180" : ""}`}
                />
              </button>
              {open === i && (
                <div className="px-6 pb-5 text-muted-foreground leading-relaxed">{it.a}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
