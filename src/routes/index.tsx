import { createFileRoute } from "@tanstack/react-router";
import "@/i18n";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { WhyInvest } from "@/components/WhyInvest";
import { Services } from "@/components/Services";
import { Properties } from "@/components/Properties";
import { Testimonials } from "@/components/Testimonials";
import { FAQ } from "@/components/FAQ";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Elige Paraguay — Tierra de Paz y Oportunidades" },
      { name: "description", content: "Vive, invierte y emprende en Encarnación e Itapúa. Inmobiliaria especializada en extranjeros: residencia, inversión, propiedades y asesoría integral." },
      { name: "keywords", content: "vivir en Paraguay, invertir en Encarnación, inmobiliaria Paraguay, residencia paraguaya, Itapúa, morar no Paraguai" },
      { property: "og:title", content: "Elige Paraguay — Tierra de Paz y Oportunidades" },
      { property: "og:description", content: "Vive, invierte y emprende en Encarnación e Itapúa." },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "preconnect", href: "https://fonts.googleapis.com" }, {
      rel: "stylesheet",
      href: "https://fonts.googleapis.com/css2?family=Playfair+Display:wght@500;600;700&family=Inter:wght@400;500;600;700&display=swap"
    }],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <Hero />
      <About />
      <WhyInvest />
      <Services />
      <Properties />
      <Testimonials />
      <FAQ />
      <Contact />
      <Footer />
      <WhatsAppFloat />
    </main>
  );
}
