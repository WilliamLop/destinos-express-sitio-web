"use client";

import { motion } from "framer-motion";
import { Users, Shield, Navigation } from "lucide-react";
import Link from "next/link";

export function Fleet() {
    const fleet = []; // No longer needed here, using general view

    return (
        <section id="flota" className="py-24 bg-white">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-4xl font-bold font-heading text-primary mb-4"
                    >
                        Nuestra <span className="text-accent">Flota de Vehículos</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-gray-600 text-lg"
                    >
                        Equipos de última generación, sometidos a estrictas revisiones técnico-mecánicas para garantizar un viaje placentero y seguro.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h3 className="text-2xl md:text-3xl font-bold font-heading text-primary mb-6">
                            Vehículos modernos para cada necesidad
                        </h3>
                        <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                            Nuestra flota está compuesta por una amplia variedad de vehículos recientes, desde cómodas SUVs ejecutivas hasta modernos buses con capacidad para 45 pasajeros.
                        </p>
                        <ul className="space-y-4 mb-8">
                            <li className="flex items-center text-gray-700">
                                <Shield className="text-accent mr-3" size={24} />
                                <span className="font-medium">Mantenimiento preventivo riguroso</span>
                            </li>
                            <li className="flex items-center text-gray-700">
                                <Navigation className="text-accent mr-3" size={24} />
                                <span className="font-medium">Monitoreo satelital 24/7 en todos los trayectos</span>
                            </li>
                            <li className="flex items-center text-gray-700">
                                <Users className="text-accent mr-3" size={24} />
                                <span className="font-medium">Capacidad desde 4 hasta 45 pasajeros</span>
                            </li>
                        </ul>

                        <Link href="/flota" className="inline-flex bg-primary hover:bg-primary-light text-white font-bold py-4 px-8 rounded-xl transition-colors duration-300 shadow-md hover:shadow-lg items-center gap-2">
                            Conoce toda nuestra flota
                        </Link>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="relative h-[400px] md:h-[500px] rounded-3xl overflow-hidden shadow-2xl"
                    >
                        <img
                            src="https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?q=80&w=2669&auto=format&fit=crop"
                            alt="Bus de transporte ejecutivo"
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                        <div className="absolute bottom-6 left-6 right-6">
                            <div className="bg-white/20 backdrop-blur-md rounded-xl p-4 border border-white/20 text-white">
                                <p className="font-bold text-lg">Viaja Seguro</p>
                                <p className="text-sm opacity-90">Conductores profesionales y vehículos en perfecto estado.</p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
