import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
    const base = "https://destinosexpress.com";
    const now = new Date();

    return [
        {
            url: base,
            lastModified: now,
            changeFrequency: "weekly",
            priority: 1,
        },
        {
            url: `${base}/servicios`,
            lastModified: now,
            changeFrequency: "monthly",
            priority: 0.9,
        },
        {
            url: `${base}/flota`,
            lastModified: now,
            changeFrequency: "monthly",
            priority: 0.8,
        },
        {
            url: `${base}/trabaja-con-nosotros`,
            lastModified: now,
            changeFrequency: "monthly",
            priority: 0.7,
        },
    ];
}
