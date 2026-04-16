import type { Metadata } from "next";
import { Montserrat, Poppins } from "next/font/google";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://destinosexpress.com"),
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.png", type: "image/png", sizes: "192x192" },
    ],
    shortcut: "/favicon.ico",
    apple: { url: "/icon.png", type: "image/png", sizes: "192x192" },
  },
  title: {
    template: "%s | Destinos Express",
    default: "Destinos Express — Transporte Especial y Ejecutivo en Colombia",
  },
  description: "Transporte especial, ejecutivo y turístico en Colombia. Traslados de aeropuerto 24/7, servicio empresarial, turístico y para adulto mayor. Cobertura en 16 ciudades. Flota moderna con GPS.",
  keywords: [
    "transporte especial Colombia",
    "transporte ejecutivo Bogotá",
    "transporte aeropuerto El Dorado",
    "traslados empresariales Colombia",
    "van transporte pasajeros",
    "servicio transporte turístico Colombia",
    "transporte adulto mayor Colombia",
    "transporte corporativo Bogotá",
    "transporte VIP Colombia",
    "traslados ejecutivos Medellín",
    "Destinos Express",
    "transporte especial Bogotá",
  ],
  authors: [{ name: "Destinos Express S.A.S." }],
  creator: "Destinos Express S.A.S.",
  publisher: "Destinos Express S.A.S.",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "es_CO",
    url: "https://destinosexpress.com",
    siteName: "Destinos Express",
    title: "Destinos Express — Transporte Especial y Ejecutivo en Colombia",
    description: "Transporte especial, ejecutivo y turístico en Colombia. Traslados de aeropuerto 24/7, servicio empresarial, turístico y para adulto mayor. Cobertura en 16 ciudades.",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Destinos Express — Transporte Especial Colombia",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Destinos Express — Transporte Especial y Ejecutivo",
    description: "Transporte especial, ejecutivo y turístico en Colombia. 16 ciudades. 24/7.",
    images: ["/opengraph-image"],
  },
  alternates: {
    canonical: "https://destinosexpress.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://destinosexpress.com/#organization",
        name: "Destinos Express S.A.S.",
        url: "https://destinosexpress.com",
        logo: {
          "@type": "ImageObject",
          url: "https://destinosexpress.com/icons/logowhite.png",
        },
        contactPoint: {
          "@type": "ContactPoint",
          telephone: "+57-302-406-0101",
          contactType: "customer service",
          availableLanguage: ["Spanish"],
          hoursAvailable: "Mo-Su 00:00-23:59",
        },
        sameAs: [],
      },
      {
        "@type": "LocalBusiness",
        "@id": "https://destinosexpress.com/#localbusiness",
        name: "Destinos Express S.A.S.",
        description: "Empresa colombiana de transporte especial, ejecutivo y turístico con cobertura en 16 ciudades del país.",
        url: "https://destinosexpress.com",
        telephone: "+57-302-406-0101",
        email: "comercial@destinosexpress.com",
        priceRange: "$$",
        image: "https://destinosexpress.com/og-image.jpg",
        address: [
          {
            "@type": "PostalAddress",
            addressLocality: "Bogotá",
            addressRegion: "Cundinamarca",
            addressCountry: "CO",
          },
          {
            "@type": "PostalAddress",
            addressLocality: "Medellín",
            addressRegion: "Antioquia",
            addressCountry: "CO",
          },
        ],
        openingHoursSpecification: {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],
          opens: "00:00",
          closes: "23:59",
        },
        areaServed: [
          "Bogotá","Medellín","Cali","Barranquilla","Cartagena",
          "Bucaramanga","Pereira","Manizales","Armenia","Ibagué",
          "Cúcuta","Villavicencio","Santa Marta","Montería","Pasto","Valledupar",
        ],
      },
    ],
  };

  return (
    <html lang="es" data-scroll-behavior="smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${poppins.variable} ${montserrat.variable} antialiased selection:bg-accent selection:text-white flex flex-col min-h-screen`}>
        <Navbar />
        <main className="flex-grow pt-20">
          {children}
        </main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
