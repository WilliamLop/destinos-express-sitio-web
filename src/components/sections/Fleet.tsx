"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Users, Shield, Navigation, ArrowRight, Wifi, Luggage, CheckCircle2, Images } from "lucide-react";
import Link from "next/link";

const vehicles = [
    {
        id: "kia-soluto",
        fleetId: "kia-soluto",
        label: "Kia Soluto",
        badge: "Sedán",
        pax: "1–3",
        image: "/flota/kia-soluto/hero.webp",
        description: "Sedán moderno ideal para traslados ejecutivos individuales o en pareja. Confort, tecnología y presentación impecable.",
        specs: [
            { icon: <Users size={14} />, label: "Pasajeros", value: "3 + conductor" },
            { icon: <Luggage size={14} />, label: "Equipaje", value: "2 maletas grandes" },
            { icon: <Wifi size={14} />, label: "Conectividad", value: "Bluetooth + USB" },
            { icon: <Shield size={14} />, label: "Seguridad", value: "6 airbags + ABS" },
        ],
        tags: ["Puerta a puerta", "A/C", "GPS activo"],
        accentStat: "2026",
        accentLabel: "Modelo",
    },
    {
        id: "duster",
        fleetId: "renault-duster",
        label: "Renault Duster",
        badge: "Todoterreno",
        pax: "1–4",
        image: "/flota/duster-4x4/hero.webp",
        description: "Robustez todoterreno con confort ejecutivo. Ideal para traslados a zonas urbanas, rurales e intermunicipales.",
        specs: [
            { icon: <Users size={14} />, label: "Pasajeros", value: "4 + conductor" },
            { icon: <Luggage size={14} />, label: "Equipaje", value: "475 L" },
            { icon: <Wifi size={14} />, label: "Conectividad", value: "Wi-Fi + GPS" },
            { icon: <Navigation size={14} />, label: "Tracción", value: "4x4 integral" },
        ],
        tags: ["Puerta a puerta", "GPS activo", "A/C dual zona"],
        accentStat: "4",
        accentLabel: "Pasajeros",
    },
    {
        id: "mini-van",
        fleetId: "mini-van",
        label: "Mini Van",
        badge: "Grupos medianos",
        pax: "5–7",
        image: "/flota/mini-van/hero.webp",
        description: "Equilibrio perfecto entre capacidad y agilidad urbana. La elección ideal para grupos ejecutivos y familias.",
        specs: [
            { icon: <Users size={14} />, label: "Pasajeros", value: "5-7 + conductor" },
            { icon: <Luggage size={14} />, label: "Equipaje", value: "Bodega amplia" },
            { icon: <Wifi size={14} />, label: "Conectividad", value: "Wi-Fi + USB" },
            { icon: <Shield size={14} />, label: "Seguridad", value: "ABS + airbags" },
        ],
        tags: ["Asientos reclinables", "A/C", "GPS activo"],
        accentStat: "7",
        accentLabel: "Pasajeros",
    },
    {
        id: "van-trafic",
        fleetId: "van-trafic",
        label: "Van Trafic",
        badge: "Más Demandada",
        pax: "9–12",
        image: "/flota/van-trafic/hero.webp",
        description: "La solución más solicitada para grupos corporativos, traslados de eventos y turismo de mediana escala.",
        specs: [
            { icon: <Users size={14} />, label: "Pasajeros", value: "9-12 + conductor" },
            { icon: <Luggage size={14} />, label: "Equipaje", value: "Bodega trasera" },
            { icon: <Wifi size={14} />, label: "Conectividad", value: "Wi-Fi + pantallas" },
            { icon: <Navigation size={14} />, label: "Monitoreo", value: "GPS 24/7" },
        ],
        tags: ["Sonido envolvente", "Pantallas", "Wi-Fi a bordo"],
        accentStat: "12",
        accentLabel: "Pasajeros",
    },
    {
        id: "van-sprinter",
        fleetId: "van-sprinter",
        label: "Van Sprinter",
        badge: "Capacidad Extra",
        pax: "13–19",
        image: "/flota/van-sprinter/hero.webp",
        description: "La opción ideal para grupos grandes que requieren más espacio y confort. Perfecta para traslados corporativos y turísticos.",
        specs: [
            { icon: <Users size={14} />, label: "Pasajeros", value: "13-19 + conductor" },
            { icon: <Luggage size={14} />, label: "Equipaje", value: "Bodega trasera" },
            { icon: <Wifi size={14} />, label: "Conectividad", value: "Wi-Fi + USB" },
            { icon: <Navigation size={14} />, label: "Monitoreo", value: "GPS 24/7" },
        ],
        tags: ["Asientos reclinables", "A/C", "Wi-Fi a bordo"],
        accentStat: "19",
        accentLabel: "Pasajeros",
    },
    {
        id: "bus",
        fleetId: "bus",
        label: "Bus",
        badge: "Grupos grandes",
        pax: "20–45",
        image: "/flota/bus/hero.webp",
        description: "Para eventos masivos, congresos y turismo grupal. Máxima capacidad con estándares de seguridad y confort premium.",
        specs: [
            { icon: <Users size={14} />, label: "Pasajeros", value: "Hasta 45" },
            { icon: <Luggage size={14} />, label: "Equipaje", value: "Compartimento inferior" },
            { icon: <Wifi size={14} />, label: "Conectividad", value: "Wi-Fi + USB" },
            { icon: <Shield size={14} />, label: "Seguridad", value: "Telemetría activa" },
        ],
        tags: ["A/C industrial", "Micrófono a bordo", "Doble puerta"],
        accentStat: "45",
        accentLabel: "Pax máx.",
    },
];

const stats = [
    { value: "6", label: "Tipos de vehículo" },
    { value: "45", label: "Pasajeros máx." },
    { value: "24/7", label: "Monitoreo GPS" },
    { value: "100%", label: "Flota propia" },
];

export function Fleet() {
    const [activeIdx, setActiveIdx] = useState(0);
    const active = vehicles[activeIdx];

    return (
        <section id="flota" className="py-24 bg-primary overflow-hidden relative">
            {/* Background texture */}
            <div
                className="absolute inset-0 opacity-[0.04] pointer-events-none"
                style={{
                    backgroundImage: "radial-gradient(#FCA311 1px, transparent 1px)",
                    backgroundSize: "32px 32px",
                }}
            />
            {/* Ambient glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-accent/5 rounded-full blur-[120px] pointer-events-none" />

            <div className="container mx-auto px-4 md:px-6 relative z-10">

                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <span className="inline-block text-accent font-semibold text-sm uppercase tracking-widest mb-3">
                            Nuestra Flota
                        </span>
                        <h2 className="text-3xl md:text-5xl font-bold font-heading text-white leading-tight">
                            El vehículo perfecto<br />
                            para <span className="text-accent">cada viaje</span>
                        </h2>
                    </motion.div>

                    {/* ── CTA button: llamativo ── */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.15 }}
                    >
                        <Link
                            href="/flota"
                            className="relative inline-flex items-center gap-3 bg-accent hover:bg-accent-hover text-primary font-bold px-7 py-4 rounded-full transition-all shadow-lg shadow-accent/30 hover:shadow-accent/50 hover:scale-105 group overflow-hidden"
                        >
                            {/* Shimmer sweep */}
                            <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/25 to-transparent skew-x-12" />
                            <Images size={18} />
                            Ver flota completa
                            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </motion.div>
                </div>

                {/* Main showcase */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-6">

                    {/* Selector sidebar */}
                    <div className="lg:col-span-3 flex lg:flex-col gap-3 overflow-x-auto lg:overflow-visible pb-2 lg:pb-0">
                        {vehicles.map((v, i) => (
                            <button
                                key={v.id}
                                onClick={() => setActiveIdx(i)}
                                className={`relative shrink-0 lg:w-full text-left px-5 py-4 rounded-2xl border transition-all duration-200 ${
                                    activeIdx === i
                                        ? "bg-accent border-accent text-primary shadow-lg shadow-accent/25"
                                        : "bg-white/5 border-white/10 text-white/70 hover:bg-white/10 hover:border-white/20 hover:text-white"
                                }`}
                            >
                                <span className={`text-[10px] font-bold uppercase tracking-widest block mb-1 ${activeIdx === i ? "text-primary/50" : "text-white/35"}`}>
                                    {v.badge}
                                </span>
                                <p className={`font-bold font-heading text-lg leading-tight ${activeIdx === i ? "text-primary" : "text-white"}`}>
                                    {v.label}
                                </p>
                                <p className={`text-xs mt-0.5 ${activeIdx === i ? "text-primary/65" : "text-white/45"}`}>
                                    {v.pax} pasajeros
                                </p>
                            </button>
                        ))}
                    </div>

                    {/* Main image card */}
                    <div className="lg:col-span-9">
                        <div className="relative h-[360px] md:h-[480px] rounded-3xl overflow-hidden">

                            {/* ── All images stacked — CSS crossfade (no JS lag) ── */}
                            {vehicles.map((v, i) => (
                                <img
                                    key={v.id}
                                    src={v.image}
                                    alt={v.label}
                                    className="absolute inset-0 w-full h-full object-cover transition-opacity duration-300"
                                    style={{ opacity: i === activeIdx ? 1 : 0 }}
                                />
                            ))}

                            {/* Gradient overlays — always on top */}
                            <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/25 to-black/10" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

                            {/* ── Single animated content block ── */}
                            <div className="absolute inset-0 p-7 md:p-8 flex flex-col justify-between pointer-events-none">

                                {/* Top row: badge + stat chip */}
                                <div className="flex items-start justify-between">
                                    <AnimatePresence mode="wait">
                                        <motion.span
                                            key={active.id + "-badge"}
                                            initial={{ opacity: 0, y: -8 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: -8 }}
                                            transition={{ duration: 0.18 }}
                                            className="inline-flex items-center gap-1.5 bg-accent text-primary text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wider"
                                        >
                                            <CheckCircle2 size={11} />
                                            {active.badge}
                                        </motion.span>
                                    </AnimatePresence>

                                    <AnimatePresence mode="wait">
                                        <motion.div
                                            key={active.id + "-stat"}
                                            initial={{ opacity: 0, scale: 0.85 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            exit={{ opacity: 0, scale: 0.85 }}
                                            transition={{ duration: 0.18 }}
                                            className="bg-black/55 backdrop-blur-md border border-white/12 rounded-2xl px-4 py-3 text-right"
                                        >
                                            <p className="text-3xl font-bold font-heading text-accent leading-none">{active.accentStat}</p>
                                            <p className="text-[10px] text-white/55 uppercase tracking-widest mt-0.5">{active.accentLabel}</p>
                                        </motion.div>
                                    </AnimatePresence>
                                </div>

                                {/* Bottom: info + explore button */}
                                <AnimatePresence mode="wait">
                                    <motion.div
                                        key={active.id + "-info"}
                                        initial={{ opacity: 0, y: 14 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -8 }}
                                        transition={{ duration: 0.22, ease: "easeOut" }}
                                        className="pointer-events-auto"
                                    >
                                        <h3 className="text-3xl md:text-4xl font-bold font-heading text-white mb-2">
                                            {active.label}
                                        </h3>
                                        <p className="text-white/70 text-sm md:text-base max-w-md mb-4 leading-relaxed">
                                            {active.description}
                                        </p>

                                        <div className="flex flex-wrap items-center gap-2">
                                            {/* Feature tags */}
                                            {active.tags.map((tag) => (
                                                <span
                                                    key={tag}
                                                    className="inline-flex items-center bg-white/10 backdrop-blur-sm border border-white/15 text-white/80 text-xs font-medium px-3 py-1.5 rounded-full"
                                                >
                                                    {tag}
                                                </span>
                                            ))}

                                            {/* ── Explore vehicle button ── */}
                                            <Link
                                                href={active.fleetId ? `/flota#${active.fleetId}` : "/flota"}
                                                className="inline-flex items-center gap-1.5 bg-white text-primary hover:bg-accent hover:text-primary text-xs font-bold px-4 py-1.5 rounded-full transition-all duration-200 group/btn ml-auto shrink-0 shadow-lg"
                                            >
                                                <Images size={13} />
                                                Ver galería
                                                <ArrowRight size={12} className="group-hover/btn:translate-x-0.5 transition-transform" />
                                            </Link>
                                        </div>
                                    </motion.div>
                                </AnimatePresence>
                            </div>
                        </div>

                        {/* Specs row — no animation, instant update */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-4">
                            {active.specs.map((spec) => (
                                <div
                                    key={spec.label}
                                    className="bg-white/5 border border-white/8 rounded-2xl px-4 py-3 flex items-center gap-3"
                                >
                                    <span className="text-accent shrink-0">{spec.icon}</span>
                                    <div>
                                        <p className="text-white/40 text-[10px] uppercase tracking-widest leading-none mb-0.5">{spec.label}</p>
                                        <p className="text-white text-sm font-semibold">{spec.value}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Bottom stats bar */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/8 rounded-2xl overflow-hidden border border-white/8"
                >
                    {stats.map((stat, i) => (
                        <div
                            key={i}
                            className="bg-primary/80 backdrop-blur-sm px-6 py-5 flex flex-col items-center text-center"
                        >
                            <span className="text-3xl font-bold font-heading text-accent mb-1">{stat.value}</span>
                            <span className="text-white/50 text-xs uppercase tracking-widest">{stat.label}</span>
                        </div>
                    ))}
                </motion.div>

            </div>
        </section>
    );
}
