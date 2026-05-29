import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { Shield, Waves, Building2, UtensilsCrossed, TreePine, Wallet } from "lucide-react";
import beach from "@/assets/beach-sanjose.jpg";
import night from "@/assets/encarnacion-night.jpg";

const icons = [Shield, Waves, Building2, UtensilsCrossed, TreePine, Wallet];

export function About() {
  const { t } = useTranslation();
  const points = t("about.points", { returnObjects: true }) as { t: string; d: string }[];

  return (
    <section id="about" className="relative bg-background py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid items-end gap-12 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--brand-red)]">
              {t("about.eyebrow")}
            </span>
            <h2 className="mt-4 font-display text-4xl leading-tight text-foreground sm:text-5xl">
              {t("about.title")}
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">{t("about.body")}</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="grid grid-cols-2 gap-4"
          >
            <img src={beach} alt="San José Beach" loading="lazy" width={800} height={600}
              className="aspect-[3/4] rounded-3xl object-cover shadow-elegant" />
            <img src={night} alt="Encarnación nightlife" loading="lazy" width={800} height={600}
              className="mt-10 aspect-[3/4] rounded-3xl object-cover shadow-warm" />
          </motion.div>
        </div>

        <div className="mt-20 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {points.map((p, i) => {
            const Icon = icons[i % icons.length];
            return (
              <motion.div
                key={p.t}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className="group rounded-2xl border border-border bg-card p-7 transition hover:border-[color:var(--brand-orange)] hover:shadow-warm"
              >
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-[color:var(--brand-blue)]/10 text-[color:var(--brand-blue)] transition group-hover:bg-gradient-warm group-hover:text-white">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-4 font-display text-xl text-card-foreground">{p.t}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.d}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
