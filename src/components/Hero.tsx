import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import heroImg from "@/assets/hero-encarnacion.jpg";

export function Hero() {
  const { t } = useTranslation();
  const stats = t("hero.stats", { returnObjects: true }) as { value: string; label: string }[];

  return (
    <section id="top" className="relative min-h-screen w-full overflow-hidden">
      <img
        src={heroImg}
        alt="Encarnación, Paraguay"
        className="absolute inset-0 h-full w-full object-cover"
        width={1920}
        height={1280}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[color:var(--brand-ink)]/80 via-[color:var(--brand-blue)]/55 to-[color:var(--brand-ink)]/85" />

      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col justify-center px-5 pt-32 pb-20 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.18em] text-white backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--brand-orange)]" />
            {t("hero.eyebrow")}
          </span>

          <h1 className="mt-6 font-display text-5xl leading-[1.05] text-white sm:text-6xl lg:text-7xl">
            Tierra de Paz <br />
            <span className="text-gradient-brand">y Oportunidades</span>
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/85 sm:text-xl">
            {t("hero.subtitle")}
          </p>

          <div className="mt-9 flex flex-wrap gap-3">
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 rounded-full bg-gradient-warm px-7 py-3.5 text-base font-semibold text-white shadow-warm transition hover:translate-y-[-2px]"
            >
              {t("hero.ctaPrimary")}
              <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
            </a>
            <a
              href="#about"
              className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-7 py-3.5 text-base font-semibold text-white backdrop-blur transition hover:bg-white/15"
            >
              {t("hero.ctaSecondary")}
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-16 grid max-w-2xl grid-cols-3 gap-4 sm:gap-8"
        >
          {stats.map(s => (
            <div key={s.label} className="glass rounded-2xl px-4 py-5 text-white sm:px-6">
              <div className="font-display text-3xl text-[color:var(--brand-orange)] sm:text-4xl">{s.value}</div>
              <div className="mt-1 text-xs uppercase tracking-wider text-white/75 sm:text-sm">{s.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
