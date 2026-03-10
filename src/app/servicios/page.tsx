"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
    ChevronRight, Building2, Plane, MapPin,
    Star, Crown, Heart, ArrowRight
} from "lucide-react";
import { Services } from "@/components/sections/Services";
import { FAQ } from "@/components/sections/FAQ";

const services = [
    { icon: Building2, label: "Empresarial" },
    { icon: Plane,     label: "Aeropuerto 24/7" },
    { icon: MapPin,    label: "Turístico" },
    { icon: Star,      label: "Eventos" },
    { icon: Crown,     label: "Ejecutivo VIP" },
    { icon: Heart,     label: "Senior" },
];

const stats = [
    { value: "16+",  label: "Ciudades" },
    { value: "24/7", label: "Disponibilidad" },
    { value: "+500", label: "Empresas" },
    { value: "10+",  label: "Años" },
];

const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    show: (delay: number) => ({
        opacity: 1, y: 0,
        transition: { duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
    }),
};

export default function ServiciosPage() {
    return (
        <main className="min-h-screen bg-gray-50">

            {/* ── HERO ── */}
            <section className="relative overflow-hidden bg-[#0D0D0D]">

                {/* Background image */}
                <div className="absolute inset-0 z-0">
                    <img
                        src="https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?q=80&w=2670&auto=format&fit=crop"
                        alt="" aria-hidden
                        className="w-full h-full object-cover opacity-40"
                        style={{ filter: "saturate(0.7)" }}
                    />
                    {/* Overlay base oscuro izquierda — protege legibilidad del texto */}
                    <div className="absolute inset-0 bg-gradient-to-r from-[#0D0D0D] via-[#0D0D0D]/80 to-[#0D0D0D]/30" />
                    {/* Foco radial centro-derecha — ilumina el vehículo */}
                    <div
                        className="absolute inset-0"
                        style={{
                            background: "radial-gradient(ellipse 55% 70% at 72% 55%, rgba(252,163,17,0.07) 0%, transparent 70%)",
                        }}
                    />
                    {/* Fade al fondo desde abajo */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0D] via-transparent to-transparent" />
                </div>

                {/* Vertical golden rule */}
                <div className="absolute left-0 top-1/2 w-1 h-32 bg-gradient-to-b from-transparent via-[#FCA311] to-transparent -translate-y-1/2 pointer-events-none z-0" />

                {/* ── CONTENIDO PRINCIPAL ── */}
                <div className="relative z-10 container mx-auto px-4 md:px-8 py-14">
                    <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-start lg:items-center">

                        {/* Columna izquierda */}
                        <div className="flex-1">

                            {/* Breadcrumb + eyebrow en una sola fila */}
                            <motion.div
                                custom={0} variants={fadeUp} initial="hidden" animate="show"
                                className="flex flex-wrap items-center gap-x-4 gap-y-2 mb-5"
                            >
                                <nav className="flex items-center gap-1.5 text-white/40 text-xs font-medium" aria-label="breadcrumb">
                                    <Link href="/" className="hover:text-white/70 transition-colors">Inicio</Link>
                                    <ChevronRight size={12} className="flex-shrink-0" />
                                    <span className="text-[#FCA311]">Servicios</span>
                                </nav>
                                <span className="inline-flex items-center gap-1.5 bg-[#FCA311]/10 border border-[#FCA311]/25 text-[#FCA311] text-xs font-semibold tracking-widest uppercase px-3 py-1 rounded-full">
                                    <span className="w-1 h-1 rounded-full bg-[#FCA311] animate-pulse" />
                                    Transporte Especial
                                </span>
                            </motion.div>

                            {/* Headline */}
                            <motion.h1
                                custom={0.15} variants={fadeUp} initial="hidden" animate="show"
                                className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading text-white tracking-tight leading-[1.05] mb-4"
                            >
                                Nuestros{" "}
                                <span className="relative inline-block">
                                    <span className="text-[#FCA311]">Servicios</span>
                                    <svg
                                        className="absolute -bottom-1.5 left-0 w-full"
                                        viewBox="0 0 200 8" fill="none"
                                        preserveAspectRatio="none" aria-hidden
                                    >
                                        <motion.path
                                            d="M2 6 Q50 2 100 5 Q150 8 198 3"
                                            stroke="#FCA311" strokeWidth="2.5" strokeLinecap="round"
                                            initial={{ pathLength: 0 }} animate={{ pathLength: 1 }}
                                            transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
                                        />
                                    </svg>
                                </span>
                            </motion.h1>

                            {/* Descripción */}
                            <motion.p
                                custom={0.25} variants={fadeUp} initial="hidden" animate="show"
                                className="text-white/60 text-base leading-relaxed max-w-md mb-7"
                            >
                                Transporte corporativo, aeroportuario, turístico y de eventos en 16 ciudades. Flota moderna, operación 24/7.
                            </motion.p>

                            {/* CTAs */}
                            <motion.div
                                custom={0.35} variants={fadeUp} initial="hidden" animate="show"
                                className="flex items-center gap-3 flex-wrap"
                            >
                                <a
                                    href="https://wa.me/573024060101?text=Hola%2C%20quiero%20cotizar%20un%20servicio%20de%20transporte"
                                    target="_blank" rel="noopener noreferrer"
                                    className="group inline-flex items-center gap-2.5 bg-[#FCA311] hover:bg-[#e8940a] text-[#0D0D0D] font-bold text-sm px-6 py-3 rounded-xl transition-all duration-200 shadow-lg shadow-[#FCA311]/20 hover:shadow-[#FCA311]/35 hover:scale-[1.02]"
                                >
                                    Cotizar ahora
                                    <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
                                </a>
                                <a
                                    href="#servicios"
                                    className="inline-flex items-center gap-2 text-white/55 hover:text-white text-sm font-medium transition-colors border border-white/10 hover:border-white/25 px-5 py-3 rounded-xl"
                                >
                                    Ver todos
                                </a>
                            </motion.div>
                        </div>

                        {/* Columna derecha — chips de servicios 2x3 compactos */}
                        <div className="lg:w-[380px] flex-shrink-0">
                            <motion.p
                                custom={0.2} variants={fadeUp} initial="hidden" animate="show"
                                className="text-white/25 text-[10px] font-semibold tracking-widest uppercase mb-3"
                            >
                                Lo que ofrecemos
                            </motion.p>
                            <motion.div
                                custom={0.3} variants={fadeUp} initial="hidden" animate="show"
                                className="grid grid-cols-2 gap-2"
                            >
                                {services.map((s) => (
                                    <div
                                        key={s.label}
                                        className="flex items-center gap-2.5 bg-white/5 hover:bg-white/10 border border-white/8 hover:border-[#FCA311]/25 rounded-xl px-3.5 py-2.5 transition-all duration-150 cursor-default"
                                    >
                                        <div className="w-7 h-7 rounded-lg bg-[#FCA311]/10 flex items-center justify-center flex-shrink-0">
                                            <s.icon size={14} className="text-[#FCA311]" />
                                        </div>
                                        <span className="text-white text-xs font-semibold leading-tight">{s.label}</span>
                                    </div>
                                ))}
                            </motion.div>
                        </div>
                    </div>
                </div>

                {/* ── STATS STRIP ── */}
                <motion.div
                    custom={0.4} variants={fadeUp} initial="hidden" animate="show"
                    className="relative z-10 border-t border-white/8"
                >
                    <div className="container mx-auto px-4 md:px-8">
                        <div className="grid grid-cols-2 md:grid-cols-4">
                            {stats.map((s) => (
                                <div
                                    key={s.label}
                                    className="py-4 px-4 flex items-center gap-3 border-r border-white/8 last:border-r-0"
                                >
                                    <span className="text-2xl font-bold font-heading text-[#FCA311] tracking-tight">{s.value}</span>
                                    <span className="text-white/40 text-xs font-medium uppercase tracking-wider leading-tight">{s.label}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </section>

            <div id="servicios">
                <Services />
            </div>
            <FAQ />
        </main>
    );
}
