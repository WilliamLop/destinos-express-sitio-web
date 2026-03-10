"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Users, Settings2, Briefcase, ShieldCheck, Wifi, ChevronRight, ArrowRight } from "lucide-react";
import { VehicleCard, type Vehicle } from "@/components/fleet/VehicleCard";

const vehicles: Vehicle[] = [
    {
        id: "kia-soluto",
        name: "Kia Soluto",
        subtitle: "Confort y Elegancia Corporativa",
        year: "2026",
        images: [
            "/flota/kia-soluto/kia-frontal-angulo.png",
            "/flota/kia-soluto/kia-frontal.png",
            "/flota/kia-soluto/kia-horizontal.webp",
            "/flota/kia-soluto/kia-trasero.png",
            "/flota/kia-soluto/kia-interior.webp",
            "/flota/kia-soluto/kia-baul.webp",
        ],
        features: [
            {
                icon: <Users className="w-6 h-6" />,
                title: "Pasajeros",
                description: "3 Adultos + Conductor"
            },
            {
                icon: <Settings2 className="w-6 h-6" />,
                title: "Transmisión",
                description: "Automática"
            },
            {
                icon: <Briefcase className="w-6 h-6" />,
                title: "Equipaje",
                description: "2 Maletas Grandes"
            },
            {
                icon: <ShieldCheck className="w-6 h-6" />,
                title: "Seguridad",
                description: "6 Airbags + Frenos ABS"
            },
            {
                icon: <Wifi className="w-6 h-6" />,
                title: "Conectividad",
                description: "Bluetooth + USB"
            }
        ]
    },
    {
        id: "renault-duster",
        name: "Renault Duster",
        subtitle: "Robustez y Versatilidad Todoterreno",
        year: "2024",
        images: [
            "/flota/duster-4x4/duster-frontal-angulo.webp",
            "/flota/duster-4x4/duster-frontal.webp",
            "/flota/duster-4x4/duster-horizontal.webp",
            "/flota/duster-4x4/duster-trasera-cerrada.webp",
            "/flota/duster-4x4/duster-interior.webp",
            "/flota/duster-4x4/duster-baul.webp",
        ],
        features: [
            {
                icon: <Users className="w-6 h-6" />,
                title: "Pasajeros",
                description: "4 Adultos + Conductor"
            },
            {
                icon: <Settings2 className="w-6 h-6" />,
                title: "Tracción",
                description: "4x4 Integral Inteligente"
            },
            {
                icon: <Briefcase className="w-6 h-6" />,
                title: "Equipaje",
                description: "475 Litros de Capacidad"
            },
            {
                icon: <ShieldCheck className="w-6 h-6" />,
                title: "Seguridad",
                description: "Airbags + ABS + Control Estabilidad"
            },
            {
                icon: <Wifi className="w-6 h-6" />,
                title: "Conectividad",
                description: "Wi-Fi abordo + Navegador GPS"
            }
        ]
    },
    {
        id: "mini-van",
        name: "Mini Van",
        subtitle: "Capacidad y Agilidad para Grupos Medianos",
        year: "2024",
        images: [
            "/flota/mini-van/mini-van-frontal-angulo.webp",
            "/flota/mini-van/mini-van-frontal.webp",
            "/flota/mini-van/mini-van-horizontal.webp",
            "/flota/mini-van/mini-van-trasero.webp",
            "/flota/mini-van/mini-van-interior.webp",
            "/flota/mini-van/mini-van-interior-2.webp",
            "/flota/mini-van/mini-van-baul.webp",
        ],
        features: [
            {
                icon: <Users className="w-6 h-6" />,
                title: "Pasajeros",
                description: "5 a 7 Adultos + Conductor"
            },
            {
                icon: <Settings2 className="w-6 h-6" />,
                title: "Confort",
                description: "Asientos Reclinables + A/C"
            },
            {
                icon: <Briefcase className="w-6 h-6" />,
                title: "Equipaje",
                description: "Bodega Amplia"
            },
            {
                icon: <ShieldCheck className="w-6 h-6" />,
                title: "Seguridad",
                description: "ABS + Airbags + GPS"
            },
            {
                icon: <Wifi className="w-6 h-6" />,
                title: "Conectividad",
                description: "Bluetooth + USB"
            }
        ]
    },
    {
        id: "van-trafic",
        name: "Van Trafic",
        subtitle: "Amplitud y Comodidad para Grupos Grandes",
        year: "2024",
        images: [
            "/flota/van-trafic/vantraffic-frontal-angulo.webp",
            "/flota/van-trafic/vantraffic-horizontal.webp",
            "/flota/van-trafic/vantraffic-atras-angulo.webp",
            "/flota/van-trafic/vantrafic-interior1.webp",
            "/flota/van-trafic/vantraffic-baul.webp",
        ],
        features: [
            {
                icon: <Users className="w-6 h-6" />,
                title: "Pasajeros",
                description: "9 a 12 Adultos + Conductor"
            },
            {
                icon: <Settings2 className="w-6 h-6" />,
                title: "Confort",
                description: "Asientos Reclinables + A/C"
            },
            {
                icon: <Briefcase className="w-6 h-6" />,
                title: "Equipaje",
                description: "Bodega Trasera Amplia"
            },
            {
                icon: <ShieldCheck className="w-6 h-6" />,
                title: "Seguridad",
                description: "Monitoreo GPS 24/7"
            },
            {
                icon: <Wifi className="w-6 h-6" />,
                title: "Conectividad",
                description: "Pantallas + Sonido Envolvente"
            }
        ]
    },
    {
        id: "van-sprinter",
        name: "Van Sprinter",
        subtitle: "Capacidad Premium para Grupos Medianos-Grandes",
        year: "2024",
        images: [
            "/flota/van-sprinter/vansprinter-frontal.webp",
            "/flota/van-sprinter/vansprinter-horizontal.webp",
            "/flota/van-sprinter/vansrpinter-trasero-angulo.webp",
            "/flota/van-sprinter/vansprinter-interior.webp",
            "/flota/van-sprinter/vansprinter-interior-2.webp",
            "/flota/van-sprinter/vansprinter-baul.webp",
        ],
        features: [
            {
                icon: <Users className="w-6 h-6" />,
                title: "Pasajeros",
                description: "13 a 19 Adultos + Conductor"
            },
            {
                icon: <Settings2 className="w-6 h-6" />,
                title: "Confort",
                description: "Asientos Reclinables + A/C"
            },
            {
                icon: <Briefcase className="w-6 h-6" />,
                title: "Equipaje",
                description: "Bodega Trasera Amplia"
            },
            {
                icon: <ShieldCheck className="w-6 h-6" />,
                title: "Seguridad",
                description: "Monitoreo GPS 24/7"
            },
            {
                icon: <Wifi className="w-6 h-6" />,
                title: "Conectividad",
                description: "Wi-Fi + USB a Bordo"
            }
        ]
    },
    {
        id: "bus",
        name: "Bus",
        subtitle: "Máxima Capacidad para Eventos y Grupos",
        year: "2024",
        images: [
            "/flota/bus/buseta-frontal-angulo.webp",
            "/flota/bus/buseta-frontal.webp",
            "/flota/bus/buseta-interior1.webp",
            "/flota/bus/buseta-interior2.webp",
            "/flota/bus/buseta-interior-3.webp",
        ],
        features: [
            {
                icon: <Users className="w-6 h-6" />,
                title: "Pasajeros",
                description: "Hasta 45 Adultos"
            },
            {
                icon: <Settings2 className="w-6 h-6" />,
                title: "Confort",
                description: "A/C Industrial + Asientos Reclinables"
            },
            {
                icon: <Briefcase className="w-6 h-6" />,
                title: "Equipaje",
                description: "Compartimento Inferior"
            },
            {
                icon: <ShieldCheck className="w-6 h-6" />,
                title: "Seguridad",
                description: "Telemetría Activa + GPS"
            },
            {
                icon: <Wifi className="w-6 h-6" />,
                title: "Conectividad",
                description: "Wi-Fi + Micrófono a Bordo"
            }
        ]
    },
];

const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    show: (delay: number) => ({
        opacity: 1, y: 0,
        transition: { duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] },
    }),
};

const vehicleNav = [
    { id: "kia-soluto",    label: "Kia Soluto",     pax: "3 pax",        tag: "Sedán" },
    { id: "renault-duster", label: "Renault Duster", pax: "4 pax",       tag: "Todoterreno" },
    { id: "mini-van",      label: "Mini Van",        pax: "5-7 pax",     tag: "Grupos" },
    { id: "van-trafic",    label: "Van Trafic",      pax: "9-12 pax",    tag: "Grupos" },
    { id: "van-sprinter",  label: "Van Sprinter",    pax: "13-19 pax",   tag: "Grupos" },
    { id: "bus",           label: "Bus",             pax: "hasta 45 pax", tag: "Eventos" },
];

const stats = [
    { value: "3",    label: "Tipos de vehículo" },
    { value: "19",   label: "Pax máx." },
    { value: "24/7", label: "Disponibilidad" },
    { value: "100%", label: "Mantenimiento" },
];

export default function FlotaPage() {
    return (
        <main className="min-h-screen bg-white">

            {/* ── HERO ── */}
            <section className="relative overflow-hidden bg-[#0D0D0D] pt-20">

                {/* Background — Van Trafic */}
                <div className="absolute inset-0 z-0">
                    <img
                        src="/flota/van-trafic/hero.webp"
                        alt="" aria-hidden
                        className="w-full h-full object-cover opacity-40"
                        style={{ filter: "saturate(0.65)" }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-[#0D0D0D] via-[#0D0D0D]/80 to-[#0D0D0D]/25" />
                    <div
                        className="absolute inset-0"
                        style={{
                            background: "radial-gradient(ellipse 50% 65% at 75% 50%, rgba(252,163,17,0.08) 0%, transparent 70%)",
                        }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0D] via-transparent to-transparent" />
                </div>

                {/* Vertical golden rule */}
                <div className="absolute left-0 top-1/2 w-1 h-32 bg-gradient-to-b from-transparent via-[#FCA311] to-transparent -translate-y-1/2 pointer-events-none z-0" />

                {/* ── CONTENIDO ── */}
                <div className="relative z-10 container mx-auto px-4 md:px-8 pt-6 pb-14">

                    {/* Breadcrumb + eyebrow */}
                    <motion.div
                        custom={0} variants={fadeUp} initial="hidden" animate="show"
                        className="flex flex-wrap items-center gap-x-4 gap-y-2 mb-5"
                    >
                        <nav className="flex items-center gap-1.5 text-white/40 text-xs font-medium" aria-label="breadcrumb">
                            <Link href="/" className="hover:text-white/70 transition-colors">Inicio</Link>
                            <ChevronRight size={12} className="flex-shrink-0" />
                            <span className="text-[#FCA311]">Flota</span>
                        </nav>
                        <span className="inline-flex items-center gap-1.5 bg-[#FCA311]/10 border border-[#FCA311]/25 text-[#FCA311] text-xs font-semibold tracking-widest uppercase px-3 py-1 rounded-full">
                            <span className="w-1 h-1 rounded-full bg-[#FCA311] animate-pulse" />
                            Flota Moderna
                        </span>
                    </motion.div>

                    <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-start lg:items-center">

                        {/* Columna izquierda */}
                        <div className="flex-1">
                            <motion.h1
                                custom={0.15} variants={fadeUp} initial="hidden" animate="show"
                                className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading text-white tracking-tight leading-[1.05] mb-4"
                            >
                                Nuestra{" "}
                                <span className="relative inline-block">
                                    <span className="text-[#FCA311]">Flota</span>
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

                            <motion.p
                                custom={0.25} variants={fadeUp} initial="hidden" animate="show"
                                className="text-white/60 text-base leading-relaxed max-w-md mb-7"
                            >
                                Vehículos de último modelo, rigurosamente mantenidos y equipados para que tu traslado sea cómodo, seguro y puntual.
                            </motion.p>

                            <motion.a
                                custom={0.35} variants={fadeUp} initial="hidden" animate="show"
                                href="https://wa.me/573024060101?text=Hola%2C%20quiero%20cotizar%20un%20servicio%20de%20transporte"
                                target="_blank" rel="noopener noreferrer"
                                className="group inline-flex items-center gap-2.5 bg-[#FCA311] hover:bg-[#e8940a] text-[#0D0D0D] font-bold text-sm px-6 py-3 rounded-xl transition-all duration-200 shadow-lg shadow-[#FCA311]/20 hover:shadow-[#FCA311]/35 hover:scale-[1.02]"
                            >
                                Cotizar vehículo
                                <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
                            </motion.a>
                        </div>

                        {/* Columna derecha — navegador de vehículos */}
                        <div className="lg:w-[420px] flex-shrink-0">
                            <motion.p
                                custom={0.2} variants={fadeUp} initial="hidden" animate="show"
                                className="text-white/70 text-xs font-semibold tracking-widest uppercase mb-3"
                            >
                                Ir directo a
                            </motion.p>
                            <motion.div
                                custom={0.3} variants={fadeUp} initial="hidden" animate="show"
                                className="flex flex-col gap-2"
                            >
                                {vehicleNav.map((v) => (
                                    <a
                                        key={v.id}
                                        href={`#${v.id}`}
                                        className="group flex items-center justify-between bg-white/5 hover:bg-white/10 border border-white/8 hover:border-[#FCA311]/30 rounded-xl px-4 py-3 transition-all duration-150"
                                    >
                                        <div className="flex items-center gap-3">
                                            <div className="w-2 h-2 rounded-full bg-[#FCA311]/50 group-hover:bg-[#FCA311] transition-colors flex-shrink-0" />
                                            <div>
                                                <span className="text-white text-sm font-semibold">{v.label}</span>
                                                <span className="text-white/35 text-xs ml-2">{v.pax}</span>
                                            </div>
                                        </div>
                                        <span className="text-[10px] font-semibold tracking-widest uppercase text-[#FCA311]/60 group-hover:text-[#FCA311] bg-[#FCA311]/8 group-hover:bg-[#FCA311]/15 px-2.5 py-1 rounded-full transition-all">
                                            {v.tag}
                                        </span>
                                    </a>
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

            {/* Vehículos List */}
            <div className="container mx-auto px-4 md:px-6 py-16">
                <div className="max-w-6xl mx-auto">
                    {vehicles.map((vehicle, index) => (
                        <div key={vehicle.id} id={vehicle.id}>
                            <VehicleCard vehicle={vehicle} index={index} />
                        </div>
                    ))}
                </div>
            </div>
        </main>
    );
}
