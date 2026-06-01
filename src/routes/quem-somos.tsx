import { createFileRoute } from "@tanstack/react-router";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { ArrowRight, Check, Compass, Eye, Heart, ShieldCheck, Sparkles, Users } from "lucide-react";
import "@/i18n";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";
import teamImg from "@/assets/team-office.jpg";

export const Route = createFileRoute("/quem-somos")({
  head: () => ({
    meta: [
      { title: "Quem Somos — Elige Paraguay | Imobiliária para estrangeiros" },
      { name: "description", content: "Conheça a Elige Paraguay: assessoria imobiliária especializada em estrangeiros que desejam viver, investir ou empreender em Encarnación e Itapúa." },
      { property: "og:title", content: "Quem Somos — Elige Paraguay" },
      { property: "og:description", content: "Seu parceiro de confiança para viver e investir no Paraguai." },
      { property: "og:type", content: "website" },
    ],
  }),
  component: AboutUsPage,
});

type Lang = "pt" | "es" | "en";

const copy = {
  pt: {
    eyebrow: "Quem Somos",
    heroTitle: "Seu parceiro de confiança para viver e investir no Paraguai",
    heroSub: "Ajudamos estrangeiros a encontrar oportunidades, segurança jurídica e qualidade de vida em Encarnación e em todo o departamento de Itapúa.",
    cta: "Fale com um Especialista",
    storyTitle: "Nossa História",
    storyLead: "Uma trajetória construída sobre confiança, conhecimento local e resultados reais.",
    storyBody: "A Elige Paraguay nasceu da experiência de profissionais apaixonados pelo mercado imobiliário paraguaio e pela região de Encarnación e Itapúa. Ao longo dos anos, ajudamos centenas de famílias e investidores estrangeiros — do Brasil, Argentina, Estados Unidos e Europa — a darem o passo definitivo rumo a uma nova vida no Paraguai. Combinamos profundo conhecimento do mercado local com atendimento humano, multilíngue e juridicamente seguro. Mais que uma imobiliária, somos seu parceiro estratégico em cada etapa.",
    mvvTitle: "Missão, Visão e Valores",
    mission: { t: "Missão", d: "Ajudar pessoas e investidores a encontrarem oportunidades seguras no Paraguai." },
    vision: { t: "Visão", d: "Ser referência em assessoria imobiliária e investimentos para estrangeiros no Paraguai." },
    values: { t: "Valores", list: ["Transparência", "Ética", "Segurança", "Compromisso", "Excelência no atendimento"] },
    diffTitle: "Nossos Diferenciais",
    diffSub: "Por que tantos estrangeiros confiam na Elige Paraguay.",
    differentials: [
      "Atendimento em Português",
      "Atendimento em Espanhol",
      "Atendimento em Inglês",
      "Assessoria Jurídica",
      "Apoio Documental",
      "Oportunidades Exclusivas",
      "Acompanhamento Completo",
    ],
    teamTitle: "Nossa Equipe",
    teamSub: "Profissionais multilíngues prontos para acompanhar cada etapa da sua jornada. Em breve apresentaremos cada membro.",
    teamPlaceholder: "Membro da Equipe",
    teamRole: "Em breve",
    ctaTitle: "Pronto para começar sua jornada no Paraguai?",
    ctaBtn: "Entre em Contato",
  },
  es: {
    eyebrow: "Quiénes Somos",
    heroTitle: "Tu socio de confianza para vivir e invertir en Paraguay",
    heroSub: "Ayudamos a extranjeros a encontrar oportunidades, seguridad jurídica y calidad de vida en Encarnación y en todo el departamento de Itapúa.",
    cta: "Hablar con un Especialista",
    storyTitle: "Nuestra Historia",
    storyLead: "Una trayectoria construida sobre confianza, conocimiento local y resultados reales.",
    storyBody: "Elige Paraguay nació de la experiencia de profesionales apasionados por el mercado inmobiliario paraguayo y por la región de Encarnación e Itapúa. A lo largo de los años, hemos ayudado a cientos de familias e inversores extranjeros — de Brasil, Argentina, Estados Unidos y Europa — a dar el paso definitivo hacia una nueva vida en Paraguay. Combinamos profundo conocimiento del mercado local con atención humana, multilingüe y jurídicamente segura.",
    mvvTitle: "Misión, Visión y Valores",
    mission: { t: "Misión", d: "Ayudar a personas e inversores a encontrar oportunidades seguras en Paraguay." },
    vision: { t: "Visión", d: "Ser referencia en asesoría inmobiliaria e inversiones para extranjeros en Paraguay." },
    values: { t: "Valores", list: ["Transparencia", "Ética", "Seguridad", "Compromiso", "Excelencia en la atención"] },
    diffTitle: "Nuestros Diferenciales",
    diffSub: "Por qué tantos extranjeros confían en Elige Paraguay.",
    differentials: [
      "Atención en Portugués",
      "Atención en Español",
      "Atención en Inglés",
      "Asesoría Jurídica",
      "Apoyo Documental",
      "Oportunidades Exclusivas",
      "Acompañamiento Completo",
    ],
    teamTitle: "Nuestro Equipo",
    teamSub: "Profesionales multilingües listos para acompañarte en cada etapa.",
    teamPlaceholder: "Miembro del Equipo",
    teamRole: "Próximamente",
    ctaTitle: "¿Listo para comenzar tu camino en Paraguay?",
    ctaBtn: "Contáctanos",
  },
  en: {
    eyebrow: "About Us",
    heroTitle: "Your trusted partner to live and invest in Paraguay",
    heroSub: "We help foreigners find opportunities, legal certainty and quality of life in Encarnación and across the Itapúa department.",
    cta: "Talk to a Specialist",
    storyTitle: "Our Story",
    storyLead: "A journey built on trust, local knowledge and real results.",
    storyBody: "Elige Paraguay was born from the experience of professionals passionate about the Paraguayan real estate market and the Encarnación–Itapúa region. Over the years we've helped hundreds of foreign families and investors — from Brazil, Argentina, the US and Europe — take the definitive step toward a new life in Paraguay.",
    mvvTitle: "Mission, Vision & Values",
    mission: { t: "Mission", d: "Help people and investors find safe opportunities in Paraguay." },
    vision: { t: "Vision", d: "Become the reference in real estate advisory and investment for foreigners in Paraguay." },
    values: { t: "Values", list: ["Transparency", "Ethics", "Safety", "Commitment", "Service excellence"] },
    diffTitle: "What Sets Us Apart",
    diffSub: "Why so many foreigners trust Elige Paraguay.",
    differentials: [
      "Portuguese support",
      "Spanish support",
      "English support",
      "Legal advisory",
      "Document handling",
      "Exclusive opportunities",
      "End-to-end support",
    ],
    teamTitle: "Our Team",
    teamSub: "Multilingual professionals ready to walk you through every step.",
    teamPlaceholder: "Team Member",
    teamRole: "Coming soon",
    ctaTitle: "Ready to begin your journey in Paraguay?",
    ctaBtn: "Get in Touch",
  },
} satisfies Record<Lang, unknown>;

function AboutUsPage() {
  const { i18n } = useTranslation();
  const lang = (i18n.language.slice(0, 2) as Lang) in copy ? (i18n.language.slice(0, 2) as Lang) : "pt";
  const c = copy[lang];

  return (
    <main className="min-h-screen bg-background">
      <Header />

      {/* Hero */}
      <section className="relative w-full overflow-hidden pt-32 pb-24 lg:pt-40 lg:pb-32">
        <img src={teamImg} alt="Equipe Elige Paraguay" className="absolute inset-0 h-full w-full object-cover" loading="eager" width={1920} height={1280} />
        <div className="absolute inset-0 bg-gradient-to-b from-[color:var(--brand-ink)]/85 via-[color:var(--brand-blue)]/65 to-[color:var(--brand-ink)]/90" />
        <div className="relative z-10 mx-auto max-w-5xl px-5 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.18em] text-white backdrop-blur">
              <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--brand-orange)]" />
              {c.eyebrow}
            </span>
            <h1 className="mt-6 max-w-4xl font-display text-4xl leading-[1.1] text-white sm:text-5xl lg:text-6xl">
              {c.heroTitle}
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/85">{c.heroSub}</p>
            <a href="/#contact" className="group mt-8 inline-flex items-center gap-2 rounded-full bg-gradient-warm px-7 py-3.5 text-base font-semibold text-white shadow-warm transition hover:translate-y-[-2px]">
              {c.cta}
              <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
            </a>
          </motion.div>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-12 lg:px-8">
          <div className="lg:col-span-5">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--brand-red)]">{c.storyTitle}</span>
            <h2 className="mt-3 font-display text-3xl text-foreground sm:text-4xl">{c.storyLead}</h2>
          </div>
          <div className="lg:col-span-7">
            <p className="text-lg leading-relaxed text-muted-foreground">{c.storyBody}</p>
          </div>
        </div>
      </section>

      {/* Mission / Vision / Values */}
      <section className="bg-secondary/40 py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <h2 className="font-display text-3xl text-foreground sm:text-4xl">{c.mvvTitle}</h2>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              { icon: Compass, t: c.mission.t, d: c.mission.d },
              { icon: Eye, t: c.vision.t, d: c.vision.d },
            ].map(b => (
              <div key={b.t} className="rounded-2xl border border-border bg-card p-8 shadow-sm">
                <b.icon className="h-8 w-8 text-[color:var(--brand-blue)]" />
                <h3 className="mt-5 font-display text-2xl text-foreground">{b.t}</h3>
                <p className="mt-3 text-muted-foreground">{b.d}</p>
              </div>
            ))}
            <div className="rounded-2xl border border-border bg-card p-8 shadow-sm">
              <Heart className="h-8 w-8 text-[color:var(--brand-red)]" />
              <h3 className="mt-5 font-display text-2xl text-foreground">{c.values.t}</h3>
              <ul className="mt-4 space-y-2">
                {c.values.list.map(v => (
                  <li key={v} className="flex items-start gap-2 text-sm text-foreground">
                    <Check className="mt-0.5 h-4 w-4 flex-none text-[color:var(--brand-orange)]" />
                    {v}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Differentials */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--brand-red)]">{c.diffTitle}</span>
            <h2 className="mt-3 font-display text-3xl text-foreground sm:text-4xl">{c.diffSub}</h2>
          </div>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {c.differentials.map((d, i) => (
              <motion.div
                key={d}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="group flex items-center gap-4 rounded-2xl border border-border bg-card p-5 transition hover:border-[color:var(--brand-orange)] hover:shadow-warm"
              >
                <span className="inline-flex h-10 w-10 flex-none items-center justify-center rounded-full bg-gradient-warm text-white">
                  <Check className="h-5 w-5" />
                </span>
                <span className="font-medium text-foreground">{d}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team placeholder */}
      <section className="bg-secondary/40 py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--brand-red)]">
              <Users className="mr-2 inline h-4 w-4" />
              {c.teamTitle}
            </span>
            <h2 className="mt-3 font-display text-3xl text-foreground sm:text-4xl">{c.teamSub}</h2>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[0, 1, 2, 3].map(i => (
              <div key={i} className="overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
                <div className="flex aspect-[3/4] items-center justify-center bg-gradient-to-br from-[color:var(--brand-blue)]/10 to-[color:var(--brand-orange)]/15 text-[color:var(--brand-blue)]/50">
                  <Sparkles className="h-12 w-12" />
                </div>
                <div className="p-5">
                  <div className="font-display text-lg text-foreground">{c.teamPlaceholder}</div>
                  <div className="text-sm text-muted-foreground">{c.teamRole}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative overflow-hidden py-24">
        <div className="absolute inset-0 bg-gradient-hero" />
        <div className="relative z-10 mx-auto max-w-4xl px-5 text-center lg:px-8">
          <ShieldCheck className="mx-auto h-10 w-10 text-[color:var(--brand-orange)]" />
          <h2 className="mt-5 font-display text-3xl text-white sm:text-4xl lg:text-5xl">{c.ctaTitle}</h2>
          <a href="/#contact" className="mt-8 inline-flex items-center gap-2 rounded-full bg-gradient-warm px-8 py-4 text-base font-semibold text-white shadow-warm transition hover:translate-y-[-2px]">
            {c.ctaBtn}
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </section>

      <Footer />
      <WhatsAppFloat />
    </main>
  );
}
