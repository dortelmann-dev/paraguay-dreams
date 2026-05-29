import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";

export function Testimonials() {
  const { t } = useTranslation();
  const items = t("testimonials.items", { returnObjects: true }) as { n: string; c: string; q: string }[];

  return (
    <section className="bg-background py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <h2 className="mx-auto max-w-2xl text-center font-display text-4xl leading-tight text-foreground sm:text-5xl">
          {t("testimonials.title")}
        </h2>
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {items.map((it, i) => (
            <motion.div
              key={it.n}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative rounded-3xl border border-border bg-card p-8"
            >
              <Quote className="absolute right-6 top-6 h-10 w-10 text-[color:var(--brand-orange)]/20" />
              <p className="text-lg leading-relaxed text-card-foreground">"{it.q}"</p>
              <div className="mt-6 border-t border-border pt-4">
                <div className="font-semibold text-foreground">{it.n}</div>
                <div className="text-sm text-muted-foreground">{it.c}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
