"use client";

import { motion } from "framer-motion";
import {
    Briefcase,
    Plane,
    Globe,
    CalendarCheck,
    Crown,
    HeartHandshake,
    ArrowRight,
    Clock,
    Receipt,
    MapPin,
    ShieldCheck,
    Users,
    Navigation,
} from "lucide-react";
import Link from "next/link";

const services = [
    {
        id: "empresarial",
        icon: <Briefcase className="w-7 h-7" />,
        badge: null,
        title: "Empresarial",
        tagline: "Movilidad corporativa de alto rendimiento",
        description:
            "Convenios corporativos con facturación mensual, rutas dedicadas y atención VIP para ejecutivos.",
        highlights: [
            { icon: <Receipt className="w-3.5 h-3.5" />, text: "Facturación mensual y a crédito" },
            { icon: <MapPin className="w-3.5 h-3.5" />, text: "Rutas dedicadas y recurrentes" },
            { icon: <ShieldCheck className="w-3.5 h-3.5" />, text: "Conductores asignados por empresa" },
        ],
        dark: true,
        accent: false,
        popular: false,
        cta: "Solicitar convenio",
    },
    {
        id: "aeropuerto",
        icon: <Plane className="w-7 h-7" />,
        badge: "Popular",
        title: "Aeropuerto 24/7",
        tagline: "Traslados El Dorado y aeropuertos nacionales",
        description:
            "Llegamos a tiempo, siempre. Recogida y entrega en aeropuertos a cualquier hora, incluyendo vuelos nocturnos.",
        highlights: [
            { icon: <Clock className="w-3.5 h-3.5" />, text: "Disponibilidad 24/7 sin excepción" },
            { icon: <Navigation className="w-3.5 h-3.5" />, text: "Seguimiento de vuelo en tiempo real" },
            { icon: <ShieldCheck className="w-3.5 h-3.5" />, text: "El Dorado y aeropuertos nacionales" },
        ],
        dark: false,
        accent: false,
        popular: true,
        cta: "Reservar traslado",
    },
    {
        id: "turistico",
        icon: <Globe className="w-7 h-7" />,
        badge: null,
        title: "Turístico",
        tagline: "Colombia entera a tu alcance",
        description:
            "Excursiones y tours para grupos familiares o corporativos. Guías bilingües disponibles y acompañamiento integral.",
        highlights: [
            { icon: <Globe className="w-3.5 h-3.5" />, text: "Cobertura en todo el territorio nacional" },
            { icon: <Users className="w-3.5 h-3.5" />, text: "Grupos desde 4 hasta 45 pasajeros" },
            { icon: <HeartHandshake className="w-3.5 h-3.5" />, text: "Guías bilingües opcionales" },
        ],
        dark: false,
        accent: false,
        popular: false,
        cta: "Planificar viaje",
    },
    {
        id: "eventos",
        icon: <CalendarCheck className="w-7 h-7" />,
        badge: null,
        title: "Eventos Especiales",
        tagline: "Logística impecable para tu evento",
        description:
            "Ferias, congresos, bodas y grados. Logística de movilidad completa para que tus invitados lleguen en tiempo y con estilo.",
        highlights: [
            { icon: <CalendarCheck className="w-3.5 h-3.5" />, text: "Coordinación completa del evento" },
            { icon: <Users className="w-3.5 h-3.5" />, text: "Múltiples vehículos simultáneos" },
            { icon: <MapPin className="w-3.5 h-3.5" />, text: "Rutas y horarios personalizados" },
        ],
        dark: false,
        accent: false,
        popular: false,
        cta: "Cotizar evento",
    },
    {
        id: "ejecutivo",
        icon: <Crown className="w-7 h-7" />,
        badge: "Premium",
        title: "Ejecutivo VIP",
        tagline: "Puerta a puerta con máximo confort",
        description:
            "Vehículos de gama alta, conductores con protocolo ejecutivo y confidencialidad garantizada para viajeros de alto perfil.",
        highlights: [
            { icon: <Crown className="w-3.5 h-3.5" />, text: "Vehículos de alta gama" },
            { icon: <ShieldCheck className="w-3.5 h-3.5" />, text: "Confidencialidad garantizada" },
            { icon: <HeartHandshake className="w-3.5 h-3.5" />, text: "Protocolo ejecutivo de primer nivel" },
        ],
        dark: false,
        accent: true,
        popular: false,
        cta: "Contratar VIP",
    },
    {
        id: "senior",
        icon: <HeartHandshake className="w-7 h-7" />,
        badge: null,
        title: "Senior & Especial",
        tagline: "Cuidado y trazabilidad para los tuyos",
        description:
            "Diseñado para adultos mayores y personas con movilidad reducida. Trazabilidad en tiempo real para tu completa tranquilidad.",
        highlights: [
            { icon: <MapPin className="w-3.5 h-3.5" />, text: "GPS y trazabilidad en tiempo real" },
            { icon: <HeartHandshake className="w-3.5 h-3.5" />, text: "Conductores con capacitación especial" },
            { icon: <ShieldCheck className="w-3.5 h-3.5" />, text: "Asistencia médica de emergencia opcional" },
        ],
        dark: false,
        accent: false,
        popular: false,
        cta: "Más información",
    },
];

export function Services() {
    return (
        <section id="servicios" className="py-24 bg-white">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <motion.span
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-block text-accent font-semibold text-sm uppercase tracking-widest mb-3"
                    >
                        Portafolio Completo
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.05 }}
                        className="text-3xl md:text-5xl font-bold font-heading text-primary mb-6"
                    >
                        Servicios diseñados para{" "}
                        <span className="text-accent">cada necesidad</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-gray-600 text-lg"
                    >
                        Desde traslados ejecutivos hasta logística para grandes grupos, contamos
                        con la solución exacta para tu movilidad.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {services.map((service, index) => (
                        <motion.div
                            key={service.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.08 }}
                            className={`relative rounded-2xl overflow-hidden group flex flex-col transition-all duration-300 hover:-translate-y-1 ${
                                service.dark
                                    ? "bg-primary shadow-xl"
                                    : service.accent
                                    ? "bg-accent shadow-xl shadow-accent/20"
                                    : service.popular
                                    ? "bg-white border-2 border-accent shadow-lg"
                                    : "bg-white border border-gray-100 shadow-sm hover:shadow-xl hover:border-gray-200"
                            }`}
                        >
                            {/* Badge */}
                            {service.badge && (
                                <span
                                    className={`absolute top-5 right-5 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider z-10 ${
                                        service.badge === "Popular"
                                            ? "bg-accent text-primary"
                                            : "bg-primary text-white"
                                    }`}
                                >
                                    {service.badge}
                                </span>
                            )}

                            <div className="p-8 flex flex-col h-full">
                                {/* Icon */}
                                <div
                                    className={`w-14 h-14 rounded-xl flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110 ${
                                        service.dark
                                            ? "bg-white/10 text-accent"
                                            : service.accent
                                            ? "bg-primary/10 text-primary"
                                            : "bg-primary/5 text-primary"
                                    }`}
                                >
                                    {service.icon}
                                </div>

                                {/* Content */}
                                <p
                                    className={`text-xs font-semibold uppercase tracking-widest mb-1 ${
                                        service.dark
                                            ? "text-white/40"
                                            : service.accent
                                            ? "text-primary/50"
                                            : "text-gray-400"
                                    }`}
                                >
                                    {service.tagline}
                                </p>
                                <h3
                                    className={`text-xl font-bold font-heading mb-3 ${
                                        service.dark
                                            ? "text-white"
                                            : service.accent
                                            ? "text-primary"
                                            : "text-primary"
                                    }`}
                                >
                                    {service.title}
                                </h3>
                                <p
                                    className={`mb-5 leading-relaxed text-sm flex-1 ${
                                        service.dark
                                            ? "text-white/70"
                                            : service.accent
                                            ? "text-primary/70"
                                            : "text-gray-500"
                                    }`}
                                >
                                    {service.description}
                                </p>

                                {/* Highlights */}
                                <ul className="space-y-2 mb-7">
                                    {service.highlights.map((h, i) => (
                                        <li
                                            key={i}
                                            className={`flex items-center gap-2 text-sm font-medium ${
                                                service.dark
                                                    ? "text-white/80"
                                                    : service.accent
                                                    ? "text-primary/80"
                                                    : "text-gray-600"
                                            }`}
                                        >
                                            <span
                                                className={
                                                    service.dark
                                                        ? "text-accent"
                                                        : service.accent
                                                        ? "text-primary"
                                                        : "text-accent"
                                                }
                                            >
                                                {h.icon}
                                            </span>
                                            {h.text}
                                        </li>
                                    ))}
                                </ul>

                                {/* CTA */}
                                <Link
                                    href={`/?servicio=${encodeURIComponent(service.title)}#cotizar`}
                                    className={`inline-flex items-center gap-2 font-bold text-sm group/cta transition-all ${
                                        service.dark
                                            ? "text-accent hover:text-white"
                                            : service.accent
                                            ? "text-primary hover:text-primary/70"
                                            : "text-primary hover:text-accent"
                                    }`}
                                >
                                    {service.cta}
                                    <ArrowRight className="w-4 h-4 group-hover/cta:translate-x-1 transition-transform" />
                                </Link>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Bottom CTA strip */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-14 bg-primary rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-6"
                >
                    <div>
                        <h3 className="text-2xl md:text-3xl font-bold font-heading text-white mb-2">
                            ¿Necesitas un servicio a medida?
                        </h3>
                        <p className="text-gray-400 text-sm">
                            Nuestro equipo diseña soluciones personalizadas para contratos corporativos de largo plazo.
                        </p>
                    </div>
                    <Link
                        href="/#cotizar"
                        className="shrink-0 bg-accent hover:bg-accent-hover text-primary font-bold px-7 py-3.5 rounded-full transition-all shadow-lg hover:shadow-accent/30 flex items-center gap-2"
                    >
                        Solicitar Cotización
                        <ArrowRight className="w-4 h-4" />
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}
