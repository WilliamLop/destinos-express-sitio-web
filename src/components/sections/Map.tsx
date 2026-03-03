"use client";

import { motion } from "framer-motion";
import { MapPin, ArrowRight } from "lucide-react";
import Link from "next/link";

/* ── Coverage cities with real geographic SVG coordinates ──────── */
const coverageCities: { name: string; x: number; y: number; delay: number }[] = [
    { name: "Barranquilla", x: 182.9, y: 99.4, delay: 0 },
    { name: "Cartagena", x: 156.3, y: 120.4, delay: 0.4 },
    { name: "Bucaramanga", x: 243.2, y: 239, delay: 0.8 },
    { name: "Medellín", x: 154.5, y: 270.7, delay: 1.2 },
    { name: "Manizales", x: 156.2, y: 313.7, delay: 1.6 },
    { name: "Pereira", x: 149.7, y: 323, delay: 2.0 },
    { name: "Bogotá D.C.", x: 208.7, y: 326.7, delay: 2.4 },
    { name: "Cali", x: 119.7, y: 372.4, delay: 2.8 },
];

/* ── Real Colombia outline from GeoJSON (viewBox 0 0 500 700) ─── */
const COLOMBIA_PATH = `
M 161.4 503.3 L 145.8 494.7 L 128 482.7 L 117.7 488.5 L 86.9 483.4
L 78 467.8 L 71.3 468.4 L 34.9 447.7 L 30 436.4 L 43.6 433.7
L 41.9 415.5 L 50.5 402.3 L 68.5 399.9 L 83.8 377 L 97.7 358
L 84.3 349.3 L 91.1 328.3 L 82.9 295 L 90.7 285.5 L 85 254.8
L 70.3 235.4 L 74.9 217.8 L 86.7 220.4 L 93.5 209.6 L 85.1 188.2
L 89.5 182.9 L 108.2 184 L 135.5 158.7 L 150.4 154.8 L 150.8 142.8
L 157.5 112.1 L 178.3 95.3 L 201.2 94.6 L 204.1 87 L 232.5 90
L 261.1 71.7 L 275.3 63.6 L 292.8 46.1 L 305.7 48.3 L 315.2 57.9
L 308.2 70.1 L 284.9 76.2 L 275.6 94.3 L 261.6 104.8 L 251 118.3
L 246.6 144.2 L 236.5 165.4 L 255.3 167.8 L 259.9 184.5 L 267.9 192.5
L 270.8 207.2 L 266.5 220.6 L 267.8 228.2 L 276.7 231.2 L 285.4 243.9
L 332.1 240.4 L 353.2 245 L 378.7 276.3 L 393.4 272.4 L 419.6 274.3
L 440.3 270.2 L 453.1 276.4 L 446.6 296 L 438.5 308.2 L 435.6 334.2
L 442.9 358.4 L 453.2 369.1 L 454.5 377.3 L 436.1 395.4 L 449.3 403.4
L 458.9 416.1 L 470 452.3 L 463.1 456.8 L 456.1 435.3 L 446 423.8
L 434 436.3 L 363.2 435.5 L 363.6 458.3 L 384.9 462 L 383.7 475.9
L 376.4 472.2 L 356 478.1 L 355.8 504.5 L 371.9 517.8 L 377.6 538.6
L 376.7 554.3 L 360.4 653.9 L 342.2 634.6 L 331.4 633.7 L 354.8 596.8
L 327 579.8 L 305.2 582.9 L 292.1 576.6 L 272.1 586.2 L 245 581.7
L 223.6 543.6 L 206.8 534.2 L 195.2 517.1 L 171.1 499.9 Z
`;

/* ── Animated city pin ────────────────────────────────────────── */
function CityPin({ city }: { city: (typeof coverageCities)[number] }) {
    /* Label placement: push label right unless city is on right half */
    const labelAnchor = city.x > 220 ? "start" : "end";
    const labelDx = city.x > 220 ? 14 : -14;

    return (
        <g>
            {/* Animated glow ring */}
            <motion.circle
                cx={city.x}
                cy={city.y}
                r={6}
                fill="none"
                stroke="#FCA311"
                strokeWidth={2}
                initial={{ r: 6, opacity: 0.8 }}
                animate={{ r: 22, opacity: 0 }}
                transition={{
                    duration: 2.2,
                    repeat: Infinity,
                    delay: city.delay,
                    ease: "easeOut",
                }}
            />
            {/* Second subtle glow */}
            <motion.circle
                cx={city.x}
                cy={city.y}
                r={6}
                fill="none"
                stroke="#FCA311"
                strokeWidth={1}
                initial={{ r: 6, opacity: 0.5 }}
                animate={{ r: 32, opacity: 0 }}
                transition={{
                    duration: 2.8,
                    repeat: Infinity,
                    delay: city.delay + 0.3,
                    ease: "easeOut",
                }}
            />
            {/* Soft halo */}
            <circle cx={city.x} cy={city.y} r={10} fill="rgba(252,163,17,0.15)" />
            {/* Core dot */}
            <circle cx={city.x} cy={city.y} r={5} fill="#FCA311" filter="url(#glow)" />
            {/* City name label */}
            <text
                x={city.x + labelDx}
                y={city.y + 5}
                textAnchor={labelAnchor}
                fill="white"
                fontSize="13"
                fontWeight="600"
                fontFamily="var(--font-heading), system-ui, sans-serif"
                filter="url(#textShadow)"
            >
                {city.name}
            </text>
        </g>
    );
}

/* ── Main section ─────────────────────────────────────────────── */
export function MapSection() {
    return (
        <section id="cobertura" className="py-24 bg-primary text-white overflow-hidden relative">
            {/* Decorative background dot pattern */}
            <div
                className="absolute inset-0 opacity-10 pointer-events-none"
                style={{
                    backgroundImage: "radial-gradient(#FCA311 1px, transparent 1px)",
                    backgroundSize: "40px 40px",
                }}
            />

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                    {/* ── Left column: text content ── */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="max-w-xl"
                    >
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/20 border border-accent/30 text-accent text-sm font-semibold mb-6">
                            <span className="relative flex h-2.5 w-2.5">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75" />
                                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-accent" />
                            </span>
                            Presencia Nacional
                        </div>

                        <h2 className="text-3xl md:text-5xl font-bold font-heading mb-6 leading-tight">
                            Cobertura 24/7 en las{" "}
                            <span className="text-accent text-transparent bg-clip-text bg-gradient-to-r from-accent to-[#FFD166]">
                                principales ciudades
                            </span>
                        </h2>

                        <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                            Brindamos servicios de transporte especial en las zonas urbanas clave
                            del país, además de rutas rurales y traslados intermunicipales bajo
                            condiciones de seguridad evaluadas previamente.
                        </p>

                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-y-4 gap-x-6 mb-10">
                            {coverageCities.map((city, i) => (
                                <div key={i} className="flex items-center gap-2 text-gray-300">
                                    <MapPin size={16} className="text-accent" />
                                    <span className="font-medium">{city.name}</span>
                                </div>
                            ))}
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <Link
                                href="#cotizar"
                                className="inline-flex justify-center items-center gap-2 bg-white text-primary hover:bg-gray-100 px-6 py-3 rounded-full font-bold transition-colors"
                            >
                                Cotizar Ruta
                                <ArrowRight size={18} />
                            </Link>
                        </div>
                    </motion.div>

                    {/* ── Right column: Colombia SVG map ── */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="relative h-[450px] md:h-[650px] w-full rounded-3xl overflow-hidden shadow-2xl bg-[#0a0a0a] border border-white/10 flex items-center justify-center p-4 md:p-8"
                    >
                        <svg
                            viewBox="0 0 500 700"
                            className="w-full h-full"
                            preserveAspectRatio="xMidYMid meet"
                        >
                            <defs>
                                {/* Glow filter for city dots */}
                                <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
                                    <feGaussianBlur stdDeviation="3" result="blur" />
                                    <feMerge>
                                        <feMergeNode in="blur" />
                                        <feMergeNode in="SourceGraphic" />
                                    </feMerge>
                                </filter>
                                {/* Text shadow for legibility */}
                                <filter id="textShadow" x="-20%" y="-20%" width="140%" height="140%">
                                    <feDropShadow dx="0" dy="1" stdDeviation="2" floodColor="#000" floodOpacity="0.8" />
                                </filter>
                            </defs>

                            {/* Colombia outline – real GeoJSON-derived shape */}
                            <path
                                d={COLOMBIA_PATH}
                                fill="rgba(252,163,17,0.06)"
                                stroke="rgba(252,163,17,0.25)"
                                strokeWidth="1.5"
                                strokeLinejoin="round"
                            />

                            {/* City pins with glow */}
                            {coverageCities.map((city) => (
                                <CityPin key={city.name} city={city} />
                            ))}
                        </svg>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
