import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Servicios de Transporte Especial",
    description: "Conoce todos nuestros servicios: traslados empresariales, aeropuerto 24/7, turístico, eventos especiales, ejecutivo VIP y transporte para adulto mayor en Colombia.",
    keywords: [
        "servicios transporte especial Colombia",
        "transporte aeropuerto Bogotá 24/7",
        "transporte empresarial Colombia",
        "transporte turístico Colombia",
        "transporte VIP ejecutivo",
        "transporte adulto mayor Colombia",
        "transporte eventos especiales",
    ],
    alternates: { canonical: "https://destinosexpress.com/servicios" },
    openGraph: {
        url: "https://destinosexpress.com/servicios",
        title: "Servicios de Transporte Especial | Destinos Express",
        description: "Traslados empresariales, aeropuerto 24/7, turístico, eventos, ejecutivo VIP y adulto mayor. Flota moderna en 16 ciudades de Colombia.",
    },
};

const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "BreadcrumbList",
            itemListElement: [
                { "@type": "ListItem", position: 1, name: "Inicio", item: "https://destinosexpress.com" },
                { "@type": "ListItem", position: 2, name: "Servicios", item: "https://destinosexpress.com/servicios" },
            ],
        },
        {
            "@type": "Service",
            serviceType: "Transporte Especial",
            provider: { "@type": "Organization", name: "Destinos Express S.A.S." },
            areaServed: { "@type": "Country", name: "Colombia" },
            hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "Servicios de Transporte",
                itemListElement: [
                    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Transporte Empresarial", description: "Traslados corporativos diarios para empleados y directivos." } },
                    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Transporte Aeropuerto 24/7", description: "Traslados al aeropuerto disponibles las 24 horas, los 7 días." } },
                    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Transporte Turístico", description: "Planes turísticos y recorridos a nivel nacional." } },
                    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Transporte para Eventos", description: "Logística de transporte para congresos, bodas y eventos empresariales." } },
                    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Servicio Ejecutivo VIP", description: "Vehículos premium con conductor profesional para ejecutivos." } },
                    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Transporte Adulto Mayor", description: "Traslados especializados para personas mayores con atención prioritaria." } },
                ],
            },
        },
    ],
};

export default function ServiciosLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
            {children}
        </>
    );
}
