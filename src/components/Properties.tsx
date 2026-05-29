import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { MapPin, MessageCircle, ArrowRight } from "lucide-react";
import luxury from "@/assets/property-luxury.jpg";
import chacra from "@/assets/property-chacra.jpg";
import urban from "@/assets/property-urban.jpg";

const images = [luxury, urban, chacra];

export function Properties() {
  const { t } = useTranslation();
  const items = t("props.items", { returnObjects: true }) as { t: string; c: string; p: string; cat: string }[];
  const categories = t("props.categories", { returnObjects: true }) as string[];

  return (
    <section id="properties" className="bg-secondary/50 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--brand-red)]">
              {t("props.eyebrow")}
            </span>
            <h2 className="mt-4 font-display text-4xl leading-tight text-foreground sm:text-5xl">
              {t("props.title")}
            </h2>
            <p className="mt-5 text-lg text-muted-foreground">{t("props.subtitle")}</p>
          </div>
        </div>

        <div className="mt-10 flex flex-wrap gap-2">
          {categories.map(c => (
            <span key={c} className="rounded-full border border-border bg-card px-4 py-1.5 text-sm text-foreground">
              {c}
            </span>
          ))}
        </div>

        <div className="mt-12 grid gap-7 md:grid-cols-2 lg:grid-cols-3">
          {items.map((p, i) => (
            <motion.article
              key={p.t}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group overflow-hidden rounded-3xl bg-card shadow-sm transition hover:shadow-elegant"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img src={images[i % images.length]} alt={p.t} loading="lazy" width={1280} height={896}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-105" />
                <span className="absolute left-4 top-4 rounded-full bg-[color:var(--brand-red)] px-3 py-1 text-xs font-semibold uppercase tracking-wider text-white">
                  {p.cat}
                </span>
              </div>
              <div className="p-6">
                <h3 className="font-display text-2xl text-card-foreground">{p.t}</h3>
                <div className="mt-2 flex items-center gap-1.5 text-sm text-muted-foreground">
                  <MapPin className="h-4 w-4" />
                  {p.c}
                </div>
                <div className="mt-4 font-display text-2xl text-[color:var(--brand-blue)]">{p.p}</div>
                <div className="mt-5 flex flex-wrap gap-2">
                  <a href="#contact"
                    className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-full bg-[color:var(--brand-blue)] px-4 py-2.5 text-sm font-semibold text-white transition hover:opacity-90">
                    {t("props.info")} <ArrowRight className="h-3.5 w-3.5" />
                  </a>
                  <a href="https://wa.me/595000000000" target="_blank" rel="noopener"
                    className="inline-flex items-center justify-center gap-1.5 rounded-full border border-[color:var(--brand-orange)] px-4 py-2.5 text-sm font-semibold text-[color:var(--brand-orange)] transition hover:bg-[color:var(--brand-orange)] hover:text-white">
                    <MessageCircle className="h-4 w-4" /> {t("props.whatsapp")}
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
