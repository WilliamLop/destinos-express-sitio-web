"use client";

import { motion } from "framer-motion";
import { Briefcase, Plane, Users, ArrowRight, ShieldCheck } from "lucide-react";
import Link from "next/link";

export function ServicesIntro() {
    return (
        <section id="servicios-intro" className="py-24 bg-gray-50">
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
                    <div className="max-w-2xl">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-3xl md:text-4xl font-bold font-heading text-primary mb-4"
                        >
                            Soluciones de Movilidad a tu <span className="text-accent">Medida</span>
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-gray-500 text-lg"
                        >
                            Descubre nuestro portafolio de servicios diseñados para brindar comodidad, seguridad y puntualidad en cada trayecto.
                        </motion.p>
                    </div>
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                    >
                        <Link href="/servicios" className="group flex items-center gap-2 text-primary font-bold hover:text-accent transition-colors bg-white px-6 py-3 rounded-full shadow-sm border border-gray-100">
                            Ver todos los servicios
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Card 1: Empresarial (Spans 2 columns on large screens) */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="md:col-span-2 bg-primary text-white p-8 md:p-10 rounded-3xl relative overflow-hidden group flex flex-col justify-between"
                    >
                        <div className="relative z-10">
                            <Briefcase className="w-12 h-12 text-accent mb-6" />
                            <h3 className="text-2xl md:text-3xl font-bold font-heading mb-4">Transporte Empresarial</h3>
                            <p className="text-white/80 max-w-md mb-8 text-lg leading-relaxed">
                                Rutas corporativas, convenios y atención VIP para ejecutivos. Soluciones integrales con facturación mensual para tu empresa.
                            </p>
                            <Link href="/servicios" className="inline-flex items-center gap-2 bg-white text-primary px-6 py-3 rounded-xl font-bold hover:bg-accent transition-colors">
                                Conocer beneficios
                            </Link>
                        </div>
                        {/* Background decoration */}
                        <div className="absolute right-0 bottom-0 opacity-10 group-hover:opacity-20 transition-opacity duration-700 transform translate-x-1/4 translate-y-1/4 pointer-events-none">
                            <Briefcase className="w-72 h-72" />
                        </div>
                    </motion.div>

                    {/* Card 2: Aeropuerto */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="bg-white border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 p-8 rounded-3xl relative overflow-hidden group flex flex-col"
                    >
                        <div className="w-14 h-14 rounded-2xl bg-primary/5 flex items-center justify-center mb-6 group-hover:bg-primary/10 transition-colors">
                            <Plane className="w-8 h-8 text-primary" />
                        </div>
                        <h3 className="text-xl font-bold font-heading text-primary mb-3">Aeropuerto 24/7</h3>
                        <p className="text-gray-500 mb-8 flex-grow">
                            Traslados seguros y puntuales desde y hacia El Dorado, a cualquier hora del día o noche.
                        </p>
                        <Link href="/servicios" className="text-accent font-semibold flex items-center gap-2 group-hover:text-primary transition-colors mt-auto">
                            Ver detalles <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </motion.div>

                    {/* Card 3: Turismo y Eventos */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        className="bg-white border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 p-8 rounded-3xl relative overflow-hidden group flex flex-col"
                    >
                        <div className="w-14 h-14 rounded-2xl bg-primary/5 flex items-center justify-center mb-6 group-hover:bg-primary/10 transition-colors">
                            <Users className="w-8 h-8 text-primary" />
                        </div>
                        <h3 className="text-xl font-bold font-heading text-primary mb-3">Turismo y Eventos</h3>
                        <p className="text-gray-500 mb-8 flex-grow">
                            Logística impecable para congresos, ferias, excursiones familiares y eventos especiales.
                        </p>
                        <Link href="/servicios" className="text-accent font-semibold flex items-center gap-2 group-hover:text-primary transition-colors mt-auto">
                            Ver detalles <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </motion.div>

                    {/* Card 4: CTA Card (Spans 2 columns) */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 }}
                        className="md:col-span-2 bg-gradient-to-r from-accent to-[#E6B300] text-primary p-8 md:p-10 rounded-3xl relative overflow-hidden group flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6"
                    >
                        <div className="relative z-10 flex items-center gap-4">
                            <div className="bg-primary/10 p-3 rounded-full hidden sm:block">
                                <ShieldCheck className="w-8 h-8 text-primary" />
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold font-heading mb-1">¿Necesitas un servicio especializado?</h3>
                                <p className="font-medium opacity-90 text-primary/80">Contamos con opciones VIP, Senior/Teens y más.</p>
                            </div>
                        </div>
                        <Link href="/servicios" className="bg-primary text-white p-4 rounded-full hover:bg-gray-900 transition-colors transform group-hover:scale-105 duration-300 shadow-lg shrink-0">
                            <ArrowRight className="w-8 h-8" />
                        </Link>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
