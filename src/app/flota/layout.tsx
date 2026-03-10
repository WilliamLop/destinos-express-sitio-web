import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Flota de Vehículos — Transporte Premium",
    description: "Conoce nuestra flota: Kia Soluto, Renault Duster 4x4, Mini Van, Van Trafic, Van Sprinter y Bus. Vehículos modernos con GPS, aire acondicionado y conductores certificados.",
    keywords: [
        "flota transporte especial Colombia",
        "van de pasajeros Colombia",
        "Renault Duster transporte",
        "Van Sprinter pasajeros",
        "bus transporte empresarial",
        "vehículos transporte ejecutivo",
    ],
    alternates: { canonical: "https://destinosexpress.com/flota" },
    openGraph: {
        url: "https://destinosexpress.com/flota",
        title: "Flota de Vehículos Premium | Destinos Express",
        description: "Kia Soluto, Duster 4x4, Mini Van, Van Trafic, Van Sprinter y Bus. Flota moderna con GPS y conductores certificados.",
    },
};

const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "BreadcrumbList",
            itemListElement: [
                { "@type": "ListItem", position: 1, name: "Inicio", item: "https://destinosexpress.com" },
                { "@type": "ListItem", position: 2, name: "Flota", item: "https://destinosexpress.com/flota" },
            ],
        },
        {
            "@type": "ItemList",
            name: "Flota de Vehículos Destinos Express",
            itemListElement: [
                { "@type": "ListItem", position: 1, name: "Kia Soluto — Sedán Ejecutivo (1-4 pax)" },
                { "@type": "ListItem", position: 2, name: "Renault Duster 4x4 — SUV (1-4 pax)" },
                { "@type": "ListItem", position: 3, name: "Mini Van — (5-7 pax)" },
                { "@type": "ListItem", position: 4, name: "Van Trafic — (9-12 pax)" },
                { "@type": "ListItem", position: 5, name: "Van Sprinter — (13-19 pax)" },
                { "@type": "ListItem", position: 6, name: "Bus — (20+ pax)" },
            ],
        },
    ],
};

export default function FlotaLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
            {children}
        </>
    );
}
