"use client";

import { motion } from "framer-motion";
import { Briefcase, Plane, Users, PartyPopper, Star, HeartHandshake } from "lucide-react";
import Link from "next/link";

export function Services() {
    const services = [
        {
            title: "Empresarial",
            description: "Convenios corporativos, transporte diario de colaboradores, eventos empresariales y facturación mensual",
            icon: <Briefcase size={28} className="text-accent" />,
            popular: false,
            features: [
                "Convenios",
                "Facturación mensual",
                "Rutas recurrentes"
            ]
        },
        {
            title: "Aeropuerto 24/7",
            description: "Traslados al Aeropuerto El Dorado y aeropuertos nacionales disponibles las 24 horas del día",
            icon: <Plane size={28} className="text-primary" />,
            popular: true,
            features: [
                "El Dorado",
                "Aeropuertos nacionales",
                "24/7"
            ]
        },
        {
            title: "Turístico",
            description: "Traslados para familias y grupos, rutas turísticas seguras con asistencia integral durante el viaje",
            icon: <Users size={28} className="text-accent" />,
            popular: false,
            features: [
                "Familias y grupos",
                "Rutas seguras",
                "Asistencia integral"
            ]
        },
        {
            title: "Eventos",
            description: "Logística de transporte para congresos, ferias, bodas y eventos especiales de cualquier magnitud",
            icon: <PartyPopper size={28} className="text-accent" />,
            popular: false,
            features: [
                "Congresos",
                "Ferias",
                "Bodas y eventos"
            ]
        },
        {
            title: "Ejecutivo",
            description: "Servicio puerta a puerta, vehículos premium VIP y atención personalizada para ejecutivos",
            icon: <Star size={28} className="text-accent" />,
            popular: false,
            features: [
                "Puerta a puerta",
                "Vehículos premium",
                "Atención VIP"
            ]
        },
        {
            title: "Senior/Teens",
            description: "Movilidad segura para adultos mayores y adolescentes con trazabilidad y comunicación constante",
            icon: <HeartHandshake size={28} className="text-accent" />,
            popular: false,
            features: [
                "Trazabilidad total",
                "Comunicación constante",
                "Seguridad especial"
            ]
        },
    ];

    return (
        <section id="servicios" className="py-24 bg-background">
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex flex-col justify-center items-center text-center mb-16 gap-6">
                    <div className="max-w-2xl">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-3xl md:text-4xl font-bold font-heading text-primary mb-4"
                        >
                            Nuestros <span className="text-accent">Servicios</span>
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-gray-500 text-lg"
                        >
                            Soluciones a medida para cada necesidad de transporte, con la garantía y el respaldo que solo una empresa formalmente constituida puede ofrecer.
                        </motion.p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 xl:gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className={`bg-white rounded-2xl p-8 border hover:shadow-xl transition-all duration-300 relative flex flex-col h-full ${service.popular
                                ? "border-accent shadow-md md:-translate-y-2"
                                : "border-gray-200 shadow-sm hover:border-accent/30"
                                }`}
                        >
                            {service.popular && (
                                <div className="absolute top-6 right-6 bg-accent text-primary text-sm font-bold px-4 py-1.5 rounded-full z-10">
                                    Popular
                                </div>
                            )}

                            <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 shadow-sm border border-black/5 ${service.popular ? "bg-accent" : "bg-accent/10"
                                }`}>
                                {service.icon}
                            </div>

                            <h3 className="text-xl font-bold font-heading text-primary mb-4">
                                {service.title}
                            </h3>

                            <p className="text-gray-500 text-sm leading-relaxed mb-6">
                                {service.description}
                            </p>

                            <ul className="space-y-3 mb-8 flex-grow">
                                {service.features.map((feature, idx) => (
                                    <li key={idx} className="flex items-center text-sm font-medium text-gray-600">
                                        <span className="w-1.5 h-1.5 rounded-full bg-accent mr-3 flex-shrink-0"></span>
                                        {feature}
                                    </li>
                                ))}
                            </ul>

                            <Link href={`/?servicio=${encodeURIComponent(service.title)}#cotizar`} className={`mt-auto w-full py-3.5 rounded-xl font-semibold transition-colors duration-300 text-sm flex items-center justify-center ${service.popular
                                ? "bg-primary text-white hover:bg-primary-light"
                                : "bg-white text-primary border border-gray-200 hover:border-gray-300 hover:bg-gray-50"
                                }`} scroll={true}>
                                Cotizar servicio
                            </Link>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-16 flex justify-center">
                    <Link
                        href="/servicios"
                        className="bg-primary hover:bg-primary-light text-white font-bold py-4 px-8 rounded-xl transition-colors duration-300 shadow-lg hover:shadow-xl inline-flex items-center gap-2"
                    >
                        Ver todos nuestros servicios
                    </Link>
                </div>
            </div>
        </section>
    );
}
