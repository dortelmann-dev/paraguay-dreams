import { createFileRoute } from "@tanstack/react-router";
import { useTranslation } from "react-i18next";
import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Calendar, Play, Search, Share2, Tag } from "lucide-react";
import "@/i18n";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";
import blogHero from "@/assets/blog-hero.jpg";
import post1 from "@/assets/blog-post-1.jpg";
import post2 from "@/assets/blog-post-2.jpg";
import post3 from "@/assets/blog-post-3.jpg";
import propLuxury from "@/assets/property-luxury.jpg";
import propUrban from "@/assets/property-urban.jpg";
import propChacra from "@/assets/property-chacra.jpg";
import beach from "@/assets/beach-sanjose.jpg";
import night from "@/assets/encarnacion-night.jpg";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Blog Elige Paraguay — Morar e investir no Paraguai" },
      { name: "description", content: "Notícias, guias e oportunidades para quem quer viver, investir ou empreender no Paraguai. Tudo sobre Encarnación, Itapúa, residência e imóveis." },
      { name: "keywords", content: "morar no Paraguai, viver em Encarnación, investir no Paraguai, imóveis em Encarnación, residência paraguaia, custo de vida Paraguai" },
      { property: "og:title", content: "Blog Elige Paraguay" },
      { property: "og:description", content: "Tudo sobre morar e investir no Paraguai." },
      { property: "og:type", content: "website" },
      { property: "og:image", content: blogHero },
    ],
  }),
  component: BlogPage,
});

type Lang = "pt" | "es" | "en";

const ui = {
  pt: {
    eyebrow: "Blog Elige Paraguay",
    title: "Informações, notícias e oportunidades para viver e investir no Paraguai",
    subtitle: "Guias completos, atualizações de legislação, novidades imobiliárias e tudo o que estrangeiros precisam saber.",
    searchPlaceholder: "Buscar artigos…",
    all: "Todos",
    featured: "Em destaque",
    latest: "Últimos artigos",
    videos: "Vídeos em destaque",
    readMore: "Ler mais",
    share: "Compartilhar",
    empty: "Nenhum artigo encontrado.",
    minRead: "min de leitura",
  },
  es: {
    eyebrow: "Blog Elige Paraguay",
    title: "Información, noticias y oportunidades para vivir e invertir en Paraguay",
    subtitle: "Guías completas, novedades legales, mercado inmobiliario y todo lo que un extranjero necesita saber.",
    searchPlaceholder: "Buscar artículos…",
    all: "Todos",
    featured: "Destacados",
    latest: "Últimos artículos",
    videos: "Videos destacados",
    readMore: "Leer más",
    share: "Compartir",
    empty: "No se encontraron artículos.",
    minRead: "min de lectura",
  },
  en: {
    eyebrow: "Elige Paraguay Blog",
    title: "News, guides and opportunities to live and invest in Paraguay",
    subtitle: "Complete guides, legal updates, real estate insights and everything foreigners need to know.",
    searchPlaceholder: "Search articles…",
    all: "All",
    featured: "Featured",
    latest: "Latest articles",
    videos: "Featured videos",
    readMore: "Read more",
    share: "Share",
    empty: "No articles found.",
    minRead: "min read",
  },
} satisfies Record<Lang, unknown>;

const categories = [
  "Viver no Paraguai",
  "Encarnación",
  "Itapúa",
  "Mercado Imobiliário",
  "Investimentos",
  "Turismo",
  "Economia",
  "Documentação",
  "Qualidade de Vida",
  "Notícias",
];

type Post = {
  id: string;
  image: string;
  date: string;
  category: string;
  read: number;
  featured?: boolean;
  title: Record<Lang, string>;
  excerpt: Record<Lang, string>;
};

const posts: Post[] = [
  {
    id: "1",
    image: post1,
    date: "2026-05-22",
    category: "Mercado Imobiliário",
    read: 6,
    featured: true,
    title: {
      pt: "Mercado imobiliário em Encarnación: o que esperar em 2026",
      es: "Mercado inmobiliario en Encarnación: qué esperar en 2026",
      en: "Encarnación real estate: what to expect in 2026",
    },
    excerpt: {
      pt: "Valorização constante, novos empreendimentos e a chegada de capital estrangeiro estão transformando a costanera mais bonita do Paraguai.",
      es: "Plusvalía constante, nuevos emprendimientos y la llegada de capital extranjero están transformando la costanera más linda de Paraguay.",
      en: "Steady appreciation, new developments and inflows of foreign capital are reshaping Paraguay's most beautiful waterfront.",
    },
  },
  {
    id: "2",
    image: post2,
    date: "2026-05-14",
    category: "Documentação",
    read: 8,
    featured: true,
    title: {
      pt: "Residência paraguaia: guia completo e atualizado para 2026",
      es: "Residencia paraguaya: guía completa y actualizada para 2026",
      en: "Paraguayan residency: complete 2026 guide",
    },
    excerpt: {
      pt: "Documentos, prazos, custos e dicas práticas para obter sua residência permanente de forma segura.",
      es: "Documentos, plazos, costos y consejos prácticos para obtener tu residencia permanente de forma segura.",
      en: "Documents, timelines, costs and practical tips to get your permanent residency safely.",
    },
  },
  {
    id: "3",
    image: post3,
    date: "2026-05-02",
    category: "Qualidade de Vida",
    read: 5,
    title: {
      pt: "Qualidade de vida em Encarnación: por que estrangeiros estão escolhendo a cidade",
      es: "Calidad de vida en Encarnación: por qué los extranjeros eligen la ciudad",
      en: "Quality of life in Encarnación: why foreigners are choosing the city",
    },
    excerpt: {
      pt: "Praias urbanas, segurança, custo de vida acessível e uma comunidade internacional acolhedora.",
      es: "Playas urbanas, seguridad, costo de vida accesible y una comunidad internacional acogedora.",
      en: "Urban beaches, safety, affordable cost of living and a welcoming international community.",
    },
  },
  {
    id: "4",
    image: propLuxury,
    date: "2026-04-20",
    category: "Investimentos",
    read: 7,
    title: {
      pt: "Por que investir em imóveis de luxo no Paraguai agora",
      es: "Por qué invertir en propiedades de lujo en Paraguay ahora",
      en: "Why invest in luxury real estate in Paraguay now",
    },
    excerpt: {
      pt: "Rentabilidade em dólar, imposto único de 10% e demanda crescente por imóveis premium em Encarnación.",
      es: "Rentabilidad en dólares, impuesto único del 10% y demanda creciente de propiedades premium en Encarnación.",
      en: "Dollar-denominated returns, 10% flat tax and rising demand for premium properties in Encarnación.",
    },
  },
  {
    id: "5",
    image: propChacra,
    date: "2026-04-08",
    category: "Itapúa",
    read: 6,
    title: {
      pt: "Chácaras em Itapúa: oportunidade rural com alto potencial",
      es: "Chacras en Itapúa: oportunidad rural con alto potencial",
      en: "Farms in Itapúa: rural opportunities with high potential",
    },
    excerpt: {
      pt: "O departamento de Itapúa concentra terras férteis, clima ameno e excelente custo-benefício para o investidor.",
      es: "El departamento de Itapúa concentra tierras fértiles, clima agradable y excelente relación costo-beneficio.",
      en: "Itapúa concentrates fertile land, mild climate and excellent value for investors.",
    },
  },
  {
    id: "6",
    image: beach,
    date: "2026-03-28",
    category: "Turismo",
    read: 4,
    title: {
      pt: "Praia San José: o paraíso urbano de Encarnación",
      es: "Playa San José: el paraíso urbano de Encarnación",
      en: "San José Beach: Encarnación's urban paradise",
    },
    excerpt: {
      pt: "Areia branca, águas calmas e infraestrutura completa às margens do rio Paraná.",
      es: "Arena blanca, aguas calmas e infraestructura completa a orillas del río Paraná.",
      en: "White sand, calm waters and full infrastructure on the banks of the Paraná river.",
    },
  },
  {
    id: "7",
    image: propUrban,
    date: "2026-03-15",
    category: "Encarnación",
    read: 5,
    title: {
      pt: "Os melhores bairros para morar em Encarnación",
      es: "Los mejores barrios para vivir en Encarnación",
      en: "The best neighborhoods to live in Encarnación",
    },
    excerpt: {
      pt: "Da costanera ao centro: conheça as zonas mais valorizadas e seguras da cidade.",
      es: "De la costanera al centro: conocé las zonas más valorizadas y seguras de la ciudad.",
      en: "From the waterfront to downtown: discover the most valued and safest areas.",
    },
  },
  {
    id: "8",
    image: night,
    date: "2026-03-02",
    category: "Economia",
    read: 6,
    title: {
      pt: "Custo de vida no Paraguai: comparativo 2026",
      es: "Costo de vida en Paraguay: comparativo 2026",
      en: "Cost of living in Paraguay: 2026 comparison",
    },
    excerpt: {
      pt: "Quanto custa morar bem em Encarnación? Comparamos com Brasil, Argentina e Estados Unidos.",
      es: "¿Cuánto cuesta vivir bien en Encarnación? Comparamos con Brasil, Argentina y Estados Unidos.",
      en: "How much does it cost to live well in Encarnación? We compare with Brazil, Argentina and the US.",
    },
  },
];

const videos = [
  { id: "dQw4w9WgXcQ", title: { pt: "Tour por Encarnación", es: "Tour por Encarnación", en: "Tour through Encarnación" } },
  { id: "5qap5aO4i9A", title: { pt: "Como obter a residência paraguaia", es: "Cómo obtener la residencia paraguaya", en: "How to get Paraguayan residency" } },
];

function BlogPage() {
  const { i18n } = useTranslation();
  const lang: Lang = (["pt", "es", "en"] as const).includes(i18n.language.slice(0, 2) as Lang)
    ? (i18n.language.slice(0, 2) as Lang)
    : "pt";
  const t = ui[lang];

  const [query, setQuery] = useState("");
  const [activeCat, setActiveCat] = useState<string>(t.all);

  const filtered = useMemo(() => {
    return posts.filter(p => {
      const matchCat = activeCat === t.all || p.category === activeCat;
      const q = query.trim().toLowerCase();
      const matchQ =
        !q ||
        p.title[lang].toLowerCase().includes(q) ||
        p.excerpt[lang].toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q);
      return matchCat && matchQ;
    });
  }, [query, activeCat, lang, t.all]);

  const featured = posts.filter(p => p.featured);
  const dateFmt = (d: string) =>
    new Date(d).toLocaleDateString(lang === "pt" ? "pt-BR" : lang === "es" ? "es-ES" : "en-US", {
      day: "2-digit", month: "short", year: "numeric",
    });

  return (
    <main className="min-h-screen bg-background">
      <Header />

      {/* Hero */}
      <section className="relative w-full overflow-hidden pt-32 pb-20 lg:pt-40 lg:pb-28">
        <img src={blogHero} alt="" className="absolute inset-0 h-full w-full object-cover" loading="eager" width={1920} height={1280} />
        <div className="absolute inset-0 bg-gradient-to-b from-[color:var(--brand-ink)]/85 via-[color:var(--brand-blue)]/70 to-[color:var(--brand-ink)]/95" />
        <div className="relative z-10 mx-auto max-w-5xl px-5 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.18em] text-white backdrop-blur">
              <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--brand-orange)]" />
              {t.eyebrow}
            </span>
            <h1 className="mt-6 max-w-4xl font-display text-4xl leading-[1.1] text-white sm:text-5xl lg:text-6xl">{t.title}</h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/85">{t.subtitle}</p>

            <div className="mt-8 flex max-w-xl items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-2 backdrop-blur">
              <Search className="h-4 w-4 text-white/70" />
              <input
                value={query}
                onChange={e => setQuery(e.target.value)}
                placeholder={t.searchPlaceholder}
                className="flex-1 bg-transparent py-2 text-white placeholder:text-white/60 focus:outline-none"
                aria-label={t.searchPlaceholder}
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured */}
      <section className="py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="flex items-end justify-between">
            <h2 className="font-display text-2xl text-foreground sm:text-3xl">{t.featured}</h2>
          </div>
          <div className="mt-8 grid gap-6 lg:grid-cols-2">
            {featured.map(p => (
              <article key={p.id} className="group overflow-hidden rounded-3xl border border-border bg-card shadow-sm transition hover:shadow-elegant">
                <div className="relative aspect-[16/9] overflow-hidden">
                  <img src={p.image} alt="" loading="lazy" className="h-full w-full object-cover transition duration-700 group-hover:scale-105" width={1280} height={720} />
                  <span className="absolute top-4 left-4 rounded-full bg-gradient-warm px-3 py-1 text-xs font-semibold text-white shadow-warm">
                    {p.category}
                  </span>
                </div>
                <div className="p-7">
                  <div className="flex items-center gap-4 text-xs uppercase tracking-wider text-muted-foreground">
                    <span className="inline-flex items-center gap-1.5"><Calendar className="h-3.5 w-3.5" /> {dateFmt(p.date)}</span>
                    <span>{p.read} {t.minRead}</span>
                  </div>
                  <h3 className="mt-3 font-display text-2xl leading-tight text-foreground">{p.title[lang]}</h3>
                  <p className="mt-3 text-muted-foreground">{p.excerpt[lang]}</p>
                  <button className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[color:var(--brand-red)] transition hover:gap-3">
                    {t.readMore} <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Categories + Grid */}
      <section className="bg-secondary/40 py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
            <h2 className="font-display text-2xl text-foreground sm:text-3xl">{t.latest}</h2>
          </div>

          <div className="mt-6 flex flex-wrap gap-2">
            {[t.all, ...categories].map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCat(cat)}
                className={`inline-flex items-center gap-1.5 rounded-full border px-4 py-1.5 text-xs font-medium transition ${
                  activeCat === cat
                    ? "border-transparent bg-[color:var(--brand-blue)] text-white"
                    : "border-border bg-card text-foreground hover:border-[color:var(--brand-orange)]"
                }`}
              >
                <Tag className="h-3 w-3" />
                {cat}
              </button>
            ))}
          </div>

          {filtered.length === 0 ? (
            <p className="mt-12 text-center text-muted-foreground">{t.empty}</p>
          ) : (
            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {filtered.map((p, i) => (
                <motion.article
                  key={p.id}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.04 }}
                  className="group overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition hover:-translate-y-1 hover:shadow-elegant"
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img src={p.image} alt="" loading="lazy" className="h-full w-full object-cover transition duration-700 group-hover:scale-105" width={1280} height={960} />
                    <span className="absolute top-3 left-3 rounded-full bg-background/85 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-foreground backdrop-blur">
                      {p.category}
                    </span>
                  </div>
                  <div className="p-5">
                    <div className="flex items-center gap-3 text-[11px] uppercase tracking-wider text-muted-foreground">
                      <span className="inline-flex items-center gap-1"><Calendar className="h-3 w-3" />{dateFmt(p.date)}</span>
                      <span>·</span>
                      <span>{p.read} {t.minRead}</span>
                    </div>
                    <h3 className="mt-2 font-display text-lg leading-snug text-foreground">{p.title[lang]}</h3>
                    <p className="mt-2 line-clamp-3 text-sm text-muted-foreground">{p.excerpt[lang]}</p>
                    <div className="mt-4 flex items-center justify-between">
                      <button className="inline-flex items-center gap-1.5 text-sm font-semibold text-[color:var(--brand-red)] transition hover:gap-2.5">
                        {t.readMore} <ArrowRight className="h-3.5 w-3.5" />
                      </button>
                      <button className="inline-flex items-center gap-1.5 text-xs text-muted-foreground transition hover:text-[color:var(--brand-blue)]" aria-label={t.share}>
                        <Share2 className="h-3.5 w-3.5" />
                        {t.share}
                      </button>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Videos */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="flex items-center gap-3">
            <Play className="h-7 w-7 text-[color:var(--brand-red)]" />
            <h2 className="font-display text-2xl text-foreground sm:text-3xl">{t.videos}</h2>
          </div>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {videos.map(v => (
              <div key={v.id} className="overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
                <div className="aspect-video">
                  <iframe
                    className="h-full w-full"
                    src={`https://www.youtube.com/embed/${v.id}`}
                    title={v.title[lang]}
                    loading="lazy"
                    allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
                <div className="p-5">
                  <h3 className="font-display text-lg text-foreground">{v.title[lang]}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppFloat />
    </main>
  );
}
