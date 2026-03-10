import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Trabaja con Nosotros — Conductores y Propietarios",
    description: "Únete al equipo de Destinos Express. Buscamos conductores con licencia C1/C2 y propietarios de vehículos modelo 2020+. Ingresos estables, rutas garantizadas y respaldo operativo en 16 ciudades.",
    keywords: [
        "trabajo conductor transporte Colombia",
        "afiliación vehículo transporte especial",
        "empleo conductor Bogotá",
        "vincular vehículo empresa transporte",
        "trabajo van transporte Colombia",
    ],
    alternates: { canonical: "https://destinosexpress.com/trabaja-con-nosotros" },
    openGraph: {
        url: "https://destinosexpress.com/trabaja-con-nosotros",
        title: "Trabaja con Nosotros | Destinos Express",
        description: "Conductores y propietarios: únete a la empresa de transporte especial líder en Colombia. Rutas garantizadas e ingresos estables.",
    },
};

const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "BreadcrumbList",
            itemListElement: [
                { "@type": "ListItem", position: 1, name: "Inicio", item: "https://destinosexpress.com" },
                { "@type": "ListItem", position: 2, name: "Trabaja con Nosotros", item: "https://destinosexpress.com/trabaja-con-nosotros" },
            ],
        },
        {
            "@type": "JobPosting",
            title: "Conductor de Transporte Especial",
            description: "Buscamos conductores con licencia C1/C2 vigente, mínimo 3 años de experiencia en transporte de pasajeros y conocimiento de rutas urbanas e intermunicipales.",
            hiringOrganization: {
                "@type": "Organization",
                name: "Destinos Express S.A.S.",
                sameAs: "https://destinosexpress.com",
            },
            jobLocation: {
                "@type": "Place",
                address: {
                    "@type": "PostalAddress",
                    addressLocality: "Bogotá",
                    addressCountry: "CO",
                },
            },
            employmentType: "CONTRACTOR",
            jobLocationType: "TELECOMMUTE",
        },
    ],
};

export default function TrabajaLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
            {children}
        </>
    );
}
