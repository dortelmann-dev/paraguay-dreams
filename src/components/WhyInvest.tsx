import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { Check, TrendingUp, Home } from "lucide-react";

export function WhyInvest() {
  const { t } = useTranslation();
  const benefits = t("why.benefits", { returnObjects: true }) as string[];

  return (
    <section id="invest" className="relative overflow-hidden bg-gradient-hero py-24 text-white lg:py-32">
      <div className="absolute inset-0 opacity-20" style={{
        backgroundImage: "radial-gradient(circle at 20% 20%, white 0%, transparent 40%), radial-gradient(circle at 80% 70%, var(--brand-orange) 0%, transparent 40%)"
      }} />

      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass rounded-3xl p-8 sm:p-10"
          >
            <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-white/15">
              <Home className="h-6 w-6 text-[color:var(--brand-orange)]" />
            </div>
            <h3 className="mt-5 font-display text-3xl">{t("why.liveTitle")}</h3>
            <p className="mt-4 leading-relaxed text-white/85">{t("why.liveBody")}</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="glass rounded-3xl p-8 sm:p-10"
          >
            <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-white/15">
              <TrendingUp className="h-6 w-6 text-[color:var(--brand-orange)]" />
            </div>
            <h3 className="mt-5 font-display text-3xl">{t("why.investTitle")}</h3>
            <p className="mt-4 leading-relaxed text-white/85">{t("why.investBody")}</p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-12 rounded-3xl border border-white/15 bg-white/5 p-8 backdrop-blur sm:p-10"
        >
          <h4 className="font-display text-2xl text-[color:var(--brand-orange)]">
            Oportunidades para brasileños, argentinos y extranjeros
          </h4>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {benefits.map(b => (
              <li key={b} className="flex items-start gap-3 text-white/90">
                <span className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[color:var(--brand-orange)] text-[color:var(--brand-ink)]">
                  <Check className="h-3.5 w-3.5" strokeWidth={3} />
                </span>
                <span className="text-sm">{b}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
