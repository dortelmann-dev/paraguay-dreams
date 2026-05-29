import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { FileCheck, IdCard, Scale, Briefcase, LineChart, Plane } from "lucide-react";

const icons = [IdCard, FileCheck, Scale, Briefcase, LineChart, Plane];

export function Services() {
  const { t } = useTranslation();
  const items = t("services.items", { returnObjects: true }) as { t: string; d: string }[];

  return (
    <section id="services" className="bg-background py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--brand-red)]">
            {t("services.eyebrow")}
          </span>
          <h2 className="mt-4 font-display text-4xl leading-tight text-foreground sm:text-5xl">
            {t("services.title")}
          </h2>
          <p className="mt-5 text-lg text-muted-foreground">{t("services.subtitle")}</p>
        </div>

        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((it, i) => {
            const Icon = icons[i % icons.length];
            return (
              <motion.div
                key={it.t}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="group relative overflow-hidden rounded-3xl border border-border bg-card p-8 transition hover:-translate-y-1 hover:shadow-elegant"
              >
                <div className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-gradient-warm opacity-0 blur-2xl transition group-hover:opacity-30" />
                <div className="relative">
                  <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-warm text-white shadow-warm">
                    <Icon className="h-7 w-7" />
                  </div>
                  <h3 className="mt-5 font-display text-2xl text-card-foreground">{it.t}</h3>
                  <p className="mt-3 leading-relaxed text-muted-foreground">{it.d}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
