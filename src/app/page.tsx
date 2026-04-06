import type { Metadata } from "next";
import dynamic from "next/dynamic";
import { Hero } from "@/components/sections/Hero";
import { Features } from "@/components/sections/Features";

const ServicesIntro = dynamic(() => import("@/components/sections/ServicesIntro").then(m => ({ default: m.ServicesIntro })));
const Fleet         = dynamic(() => import("@/components/sections/Fleet").then(m => ({ default: m.Fleet })));
const MapSection    = dynamic(() => import("@/components/sections/Map").then(m => ({ default: m.MapSection })));
const Testimonials  = dynamic(() => import("@/components/sections/Testimonials").then(m => ({ default: m.Testimonials })));
const QuoteWizard   = dynamic(() => import("@/components/form/QuoteWizard").then(m => ({ default: m.QuoteWizard })));
const FAQ           = dynamic(() => import("@/components/sections/FAQ").then(m => ({ default: m.FAQ })));

export const metadata: Metadata = {
  title: "Destinos Express — Transporte Especial y Ejecutivo en Colombia",
  description: "Transporte especial, ejecutivo y turístico en Colombia. Traslados de aeropuerto 24/7, servicio empresarial, turístico y para adulto mayor. +500 empresas confían en nosotros. Cobertura en 16 ciudades.",
  alternates: { canonical: "https://destinosexpress.com" },
  openGraph: {
    url: "https://destinosexpress.com",
    title: "Destinos Express — Transporte Especial y Ejecutivo en Colombia",
    description: "Transporte especial, ejecutivo y turístico en Colombia. Traslados de aeropuerto 24/7, servicio empresarial y turístico. +500 empresas. 16 ciudades.",
    images: [{ url: "/opengraph-image", width: 1200, height: 630 }],
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "¿Cuáles son los métodos de pago aceptados?", acceptedAnswer: { "@type": "Answer", text: "Aceptamos transferencia bancaria, tarjetas Visa/Mastercard/Amex, efectivo y enlaces PSE para empresas." } },
    { "@type": "Question", name: "¿Con cuánto tiempo de anticipación debo reservar?", acceptedAnswer: { "@type": "Answer", text: "Recomendamos 24 horas de antelación. Para emergencias y traslados de aeropuerto aceptamos reservas con 3 horas de aviso." } },
    { "@type": "Question", name: "¿Los vehículos cuentan con seguros y permisos vigentes?", acceptedAnswer: { "@type": "Answer", text: "Sí. Todos operan bajo Servicio Público Especial, con pólizas de responsabilidad civil contractual y extracontractual, y conductores certificados." } },
    { "@type": "Question", name: "¿Qué política manejan para cancelación o modificación de ruta?", acceptedAnswer: { "@type": "Answer", text: "Las cancelaciones deben realizarse con al menos 12 horas de anticipación para evitar recargos." } },
    { "@type": "Question", name: "¿Ofrecen servicios de van y buses intermunicipales o para turismo?", acceptedAnswer: { "@type": "Answer", text: "Sí, cubrimos rutas nacionales y sitios turísticos, con guías bilingües y paramédicos para grupos especiales o de tercera edad." } },
    { "@type": "Question", name: "¿Cómo funciona el servicio de trazabilidad y monitoreo?", acceptedAnswer: { "@type": "Answer", text: "Todos los vehículos tienen GPS activo. Para servicios Senior y corporativos compartimos enlace de seguimiento en tiempo real." } },
    { "@type": "Question", name: "¿Cuál es la cobertura geográfica del servicio?", acceptedAnswer: { "@type": "Answer", text: "Operamos en 16 ciudades: Bogotá, Medellín, Cali, Barranquilla, Cartagena, Bucaramanga, Pereira, Manizales, Armenia, Ibagué, Cúcuta, Villavicencio, Santa Marta, Montería, Pasto y Valledupar." } },
  ],
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://destinosexpress.com/#website",
  url: "https://destinosexpress.com",
  name: "Destinos Express",
  description: "Transporte especial, ejecutivo y turístico en Colombia",
  inLanguage: "es-CO",
};

export default function Home() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }} />
      <Hero />
      <Features />
      <ServicesIntro />
      <Fleet />
      <MapSection />
      <Testimonials />
      <QuoteWizard />
      <FAQ />
    </>
  );
}
