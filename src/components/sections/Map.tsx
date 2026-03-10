"use client";

import { motion, AnimatePresence, useMotionValue, useTransform, animate } from "framer-motion";
import { MapPin, ArrowRight } from "lucide-react";
import Link from "next/link";
import { useEffect, useState, useRef } from "react";

/* ── Cities ─────────────────────────────────────────────────── */
const cities = [
    { name: "Barranquilla",  x: 182.9, y: 99.4  },
    { name: "Cartagena",     x: 156.3, y: 120.4 },
    { name: "Santa Marta",   x: 213.0, y: 88.0  },
    { name: "Montería",      x: 145.0, y: 175.0 },
    { name: "Bucaramanga",   x: 243.2, y: 239   },
    { name: "Cúcuta",        x: 282.0, y: 200.0 },
    { name: "Medellín",      x: 154.5, y: 270.7 },
    { name: "Manizales",     x: 156.2, y: 313.7 },
    { name: "Pereira",       x: 149.7, y: 323   },
    { name: "Armenia",       x: 148.0, y: 335.0 },
    { name: "Ibagué",        x: 183.0, y: 342.0 },
    { name: "Bogotá D.C.",   x: 208.7, y: 326.7 },
    { name: "Villavicencio", x: 243.0, y: 355.0 },
    { name: "Cali",          x: 119.7, y: 372.4 },
    { name: "Pasto",         x: 133.0, y: 455.0 },
    { name: "Valledupar",    x: 248.0, y: 140.0 },
];

const ROUTES = [
    ["Bogotá D.C.", "Medellín"],
    ["Bogotá D.C.", "Cali"],
    ["Bogotá D.C.", "Bucaramanga"],
    ["Medellín",    "Cartagena"],
    ["Medellín",    "Barranquilla"],
    ["Barranquilla","Santa Marta"],
    ["Cali",        "Pasto"],
    ["Bogotá D.C.", "Villavicencio"],
    ["Bucaramanga", "Cúcuta"],
    ["Pereira",     "Manizales"],
];

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

/* ── Quadratic bezier helpers ───────────────────────────────── */
function bezierControl(ax: number, ay: number, bx: number, by: number) {
    const dist = Math.hypot(bx - ax, by - ay);
    return {
        cx: (ax + bx) / 2,
        cy: (ay + by) / 2 - dist * 0.28,
    };
}
function bezierAt(t: number, ax: number, ay: number, bx: number, by: number) {
    const { cx, cy } = bezierControl(ax, ay, bx, by);
    const mt = 1 - t;
    return {
        x: mt * mt * ax + 2 * mt * t * cx + t * t * bx,
        y: mt * mt * ay + 2 * mt * t * cy + t * t * by,
    };
}
function curvedPath(ax: number, ay: number, bx: number, by: number) {
    const { cx, cy } = bezierControl(ax, ay, bx, by);
    return `M ${ax} ${ay} Q ${cx} ${cy} ${bx} ${by}`;
}

/* ── Route animation — motionValue dot (no re-renders) ──────── */
function RouteAnimation({ from, to }: { from: string; to: string }) {
    const a = cities.find((c) => c.name === from)!;
    const b = cities.find((c) => c.name === to)!;
    const progress = useMotionValue(0);
    const dotX = useTransform(progress, (t) => bezierAt(t, a.x, a.y, b.x, b.y).x);
    const dotY = useTransform(progress, (t) => bezierAt(t, a.x, a.y, b.x, b.y).y);
    const lineOpacity = useTransform(progress, [0, 0.1, 0.85, 1], [0, 1, 1, 0]);
    const dotOpacity  = useTransform(progress, [0, 0.05, 0.85, 1], [0, 1, 1, 0]);

    useEffect(() => {
        progress.set(0);
        const ctrl = animate(progress, 1, { duration: 1.4, ease: "easeInOut" });
        return () => ctrl.stop();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [from, to]);

    if (!a || !b) return null;
    const d = curvedPath(a.x, a.y, b.x, b.y);

    return (
        <g>
            {/* Animated draw line */}
            <motion.path
                d={d}
                fill="none"
                stroke="#FCA311"
                strokeWidth="1.8"
                strokeLinecap="round"
                style={{ opacity: lineOpacity }}
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1.4, ease: "easeInOut" }}
            />
            {/* Travelling dot — updated via motionValue, zero re-renders */}
            <motion.circle
                r={3.5}
                fill="#FFD166"
                filter="url(#glowBright)"
                cx={dotX}
                cy={dotY}
                style={{ opacity: dotOpacity }}
            />
        </g>
    );
}

/* ── Idle pulse ring (CSS keyframe, no JS per-frame) ─────────── */
function IdlePulse({ cx, cy, delay }: { cx: number; cy: number; delay: number }) {
    return (
        <circle
            cx={cx} cy={cy} r={5}
            fill="none"
            stroke="rgba(252,163,17,0.7)"
            strokeWidth="1.5"
            style={{
                animation: `mapPulse 2.8s ease-out ${delay}s infinite`,
                transformOrigin: `${cx}px ${cy}px`,
            }}
        />
    );
}

/* ── City pin ───────────────────────────────────────────────── */
function CityPin({ city, active }: { city: typeof cities[number]; active: boolean }) {
    const labelRight = city.x > 220;
    const lx = city.x + (labelRight ? 13 : -13);

    return (
        <g>
            {/* Idle ring */}
            {!active && <IdlePulse cx={city.x} cy={city.y} delay={city.name.length * 0.12} />}

            {/* Active burst rings */}
            {active && (
                <>
                    <motion.circle
                        cx={city.x} cy={city.y} r={7}
                        fill="none" stroke="#FFD166" strokeWidth={2}
                        initial={{ r: 7, opacity: 1 }}
                        animate={{ r: 34, opacity: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    />
                    <motion.circle
                        cx={city.x} cy={city.y} r={7}
                        fill="none" stroke="#FCA311" strokeWidth={1.5}
                        initial={{ r: 7, opacity: 0.6 }}
                        animate={{ r: 50, opacity: 0 }}
                        transition={{ duration: 1.2, ease: "easeOut", delay: 0.15 }}
                    />
                </>
            )}

            {/* Halo */}
            <circle
                cx={city.x} cy={city.y}
                r={active ? 12 : 8}
                fill={active ? "rgba(252,163,17,0.22)" : "rgba(252,163,17,0.09)"}
                style={{ transition: "r 0.4s, fill 0.4s" }}
            />

            {/* Core dot */}
            <circle
                cx={city.x} cy={city.y}
                r={active ? 6 : 4}
                fill={active ? "#FFD166" : "#FCA311"}
                filter={active ? "url(#glowBright)" : "url(#glowSoft)"}
                style={{ transition: "r 0.4s, fill 0.4s" }}
            />

            {/* Label */}
            <text
                x={lx} y={city.y + 4.5}
                textAnchor={labelRight ? "start" : "end"}
                fill={active ? "#FFD166" : "rgba(255,255,255,0.72)"}
                fontSize={active ? "13.5" : "11"}
                fontWeight={active ? "700" : "500"}
                fontFamily="system-ui, sans-serif"
                filter="url(#textShadow)"
                style={{ transition: "font-size 0.3s, fill 0.3s" }}
            >
                {city.name}
            </text>
        </g>
    );
}

/* ── Main section ─────────────────────────────────────────────── */
export function MapSection() {
    const [activeIdx, setActiveIdx] = useState(0);
    const [routeKey,  setRouteKey]  = useState(0);
    const [routeIdx,  setRouteIdx]  = useState(0);
    const [inView,    setInView]    = useState(false);
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const obs = new IntersectionObserver(
            ([e]) => { if (e.isIntersecting) setInView(true); },
            { threshold: 0.25 }
        );
        if (sectionRef.current) obs.observe(sectionRef.current);
        return () => obs.disconnect();
    }, []);

    /* City cycle */
    useEffect(() => {
        if (!inView) return;
        const t = setInterval(() => setActiveIdx((i) => (i + 1) % cities.length), 1600);
        return () => clearInterval(t);
    }, [inView]);

    /* Route cycle */
    useEffect(() => {
        if (!inView) return;
        const t = setInterval(() => {
            setRouteIdx((i) => (i + 1) % ROUTES.length);
            setRouteKey((k) => k + 1);
        }, 1500);
        return () => clearInterval(t);
    }, [inView]);

    const activeCity = cities[activeIdx];

    return (
        <section
            ref={sectionRef}
            id="cobertura"
            className="py-24 bg-primary text-white overflow-hidden relative"
        >
            {/* CSS keyframes for idle pulse */}
            <style>{`
                @keyframes mapPulse {
                    0%   { r: 5px;  opacity: 0.7; }
                    100% { r: 20px; opacity: 0;   }
                }
            `}</style>

            {/* Background dot grid */}
            <div
                className="absolute inset-0 opacity-[0.07] pointer-events-none"
                style={{
                    backgroundImage: "radial-gradient(#FCA311 1px, transparent 1px)",
                    backgroundSize: "36px 36px",
                }}
            />
            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[55%] h-[90%] bg-accent/5 rounded-full blur-[120px] pointer-events-none" />

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                    {/* ── Left ── */}
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
                            {cities.map((city, i) => (
                                <div
                                    key={i}
                                    className={`flex items-center gap-2 transition-colors duration-300 ${
                                        activeIdx === i ? "text-[#FFD166]" : "text-gray-300"
                                    }`}
                                >
                                    <MapPin
                                        size={16}
                                        className={`transition-colors duration-300 ${activeIdx === i ? "text-[#FFD166]" : "text-accent"}`}
                                    />
                                    <span className="font-medium text-sm">{city.name}</span>
                                </div>
                            ))}
                        </div>

                        {/* Fixed-height slot — no layout shift */}
                        <div className="h-7 flex items-center mb-6">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={activeCity.name}
                                    initial={{ opacity: 0, y: 5 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -5 }}
                                    transition={{ duration: 0.2 }}
                                    className="inline-flex items-center gap-2 text-sm"
                                >
                                    <span className="w-1.5 h-1.5 rounded-full bg-[#FFD166] animate-pulse" />
                                    <span className="text-[#FFD166]/70">Operando ahora en</span>
                                    <span className="font-bold text-[#FFD166]">{activeCity.name}</span>
                                </motion.div>
                            </AnimatePresence>
                        </div>

                        <Link
                            href="#cotizar"
                            className="inline-flex justify-center items-center gap-2 bg-white text-primary hover:bg-gray-100 px-6 py-3 rounded-full font-bold transition-colors"
                        >
                            Cotizar Ruta
                            <ArrowRight size={18} />
                        </Link>
                    </motion.div>

                    {/* ── Right: map ── */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.93 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, ease: "easeOut" }}
                        className="relative h-[500px] md:h-[680px] w-full"
                    >
                        <div className="absolute -inset-3 rounded-[2.5rem] bg-accent/8 blur-2xl pointer-events-none" />

                        <div className="relative h-full w-full rounded-3xl overflow-hidden shadow-[0_0_60px_rgba(252,163,17,0.12)] bg-[#07080a] border border-white/8">
                            {/* Scanlines */}
                            <div
                                className="absolute inset-0 pointer-events-none z-10 rounded-3xl"
                                style={{
                                    backgroundImage:
                                        "repeating-linear-gradient(0deg, transparent, transparent 3px, rgba(0,0,0,0.06) 3px, rgba(0,0,0,0.06) 4px)",
                                }}
                            />

                            {/* HUD corners */}
                            <div className="absolute top-3 left-3 w-5 h-5 border-t-2 border-l-2 border-accent/50 rounded-tl-md z-20" />
                            <div className="absolute top-3 right-3 w-5 h-5 border-t-2 border-r-2 border-accent/50 rounded-tr-md z-20" />
                            <div className="absolute bottom-3 left-3 w-5 h-5 border-b-2 border-l-2 border-accent/50 rounded-bl-md z-20" />
                            <div className="absolute bottom-3 right-3 w-5 h-5 border-b-2 border-r-2 border-accent/50 rounded-br-md z-20" />

                            {/* Status bar */}
                            <div className="absolute top-4 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2 px-3 py-1 rounded-full bg-black/60 border border-accent/20 backdrop-blur-sm">
                                <span className="w-1.5 h-1.5 rounded-full bg-[#FFD166] animate-pulse" />
                                <span className="text-[10px] font-mono text-accent/80 tracking-widest uppercase">Live Coverage</span>
                            </div>

                            {/* City badge bottom */}
                            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20">
                                <AnimatePresence mode="wait">
                                    <motion.div
                                        key={activeCity.name}
                                        initial={{ opacity: 0, y: 5 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -5 }}
                                        transition={{ duration: 0.2 }}
                                        className="px-4 py-1.5 rounded-full bg-black/70 border border-[#FCA311]/30 backdrop-blur-sm text-[#FFD166] text-xs font-bold tracking-wider uppercase font-mono whitespace-nowrap"
                                    >
                                        {activeCity.name}
                                    </motion.div>
                                </AnimatePresence>
                            </div>

                            {/* SVG — will-change: transform forces GPU layer */}
                            <svg
                                viewBox="0 0 500 700"
                                className="w-full h-full"
                                preserveAspectRatio="xMidYMid meet"
                                style={{ willChange: "transform" }}
                            >
                                <defs>
                                    <filter id="glowBright" x="-80%" y="-80%" width="260%" height="260%">
                                        <feGaussianBlur stdDeviation="4" result="b" />
                                        <feMerge>
                                            <feMergeNode in="b" />
                                            <feMergeNode in="b" />
                                            <feMergeNode in="SourceGraphic" />
                                        </feMerge>
                                    </filter>
                                    <filter id="glowSoft" x="-50%" y="-50%" width="200%" height="200%">
                                        <feGaussianBlur stdDeviation="2.5" result="b" />
                                        <feMerge>
                                            <feMergeNode in="b" />
                                            <feMergeNode in="SourceGraphic" />
                                        </feMerge>
                                    </filter>
                                    <filter id="mapGlow" x="-15%" y="-15%" width="130%" height="130%">
                                        <feGaussianBlur stdDeviation="5" result="b" />
                                        <feMerge>
                                            <feMergeNode in="b" />
                                            <feMergeNode in="SourceGraphic" />
                                        </feMerge>
                                    </filter>
                                    <filter id="textShadow" x="-20%" y="-20%" width="140%" height="140%">
                                        <feDropShadow dx="0" dy="1" stdDeviation="2.5" floodColor="#000" floodOpacity="0.9" />
                                    </filter>
                                    <radialGradient id="mapFill" cx="50%" cy="50%" r="55%">
                                        <stop offset="0%"   stopColor="rgba(252,163,17,0.13)" />
                                        <stop offset="100%" stopColor="rgba(252,163,17,0.03)" />
                                    </radialGradient>
                                    <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
                                        <path d="M 20 0 L 0 0 0 20" fill="none" stroke="rgba(252,163,17,0.04)" strokeWidth="0.5" />
                                    </pattern>
                                    <clipPath id="colombiaClip">
                                        <path d={COLOMBIA_PATH} />
                                    </clipPath>
                                </defs>

                                {/* Grid inside Colombia */}
                                <rect x="0" y="0" width="500" height="700" fill="url(#grid)" clipPath="url(#colombiaClip)" />

                                {/* Colombia shape */}
                                <path d={COLOMBIA_PATH} fill="url(#mapFill)" stroke="rgba(252,163,17,0.07)" strokeWidth="7" strokeLinejoin="round" filter="url(#mapGlow)" />
                                <path d={COLOMBIA_PATH} fill="none" stroke="rgba(252,163,17,0.6)" strokeWidth="1.5" strokeLinejoin="round" />

                                {/* Static dim routes */}
                                {ROUTES.map(([from, to], i) => {
                                    const a = cities.find((c) => c.name === from)!;
                                    const b = cities.find((c) => c.name === to)!;
                                    if (!a || !b) return null;
                                    return (
                                        <path
                                            key={i}
                                            d={curvedPath(a.x, a.y, b.x, b.y)}
                                            fill="none"
                                            stroke="rgba(252,163,17,0.09)"
                                            strokeWidth="1"
                                            strokeDasharray="3 6"
                                        />
                                    );
                                })}

                                {/* Animated route — key forces remount on change */}
                                {inView && (
                                    <RouteAnimation
                                        key={routeKey}
                                        from={ROUTES[routeIdx][0]}
                                        to={ROUTES[routeIdx][1]}
                                    />
                                )}

                                {/* Pins */}
                                {cities.map((city, i) => (
                                    <CityPin key={city.name} city={city} active={inView && activeIdx === i} />
                                ))}
                            </svg>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
