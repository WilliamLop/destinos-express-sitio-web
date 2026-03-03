"use client";

import { motion } from "framer-motion";
import { Clock, ShieldCheck, MapPin, Car, Users, Headphones } from "lucide-react";

export function Features() {
    const features = [
        {
            title: "Puntualidad 99%",
            description: "Itinerarios confiables para agendas ejecutivas sin margen de error",
            icon: <Clock size={24} className="text-accent" />,
        },
        {
            title: "Seguridad legal",
            description: "Habilitados por MinTransporte y vigilados por SuperTransporte",
            icon: <ShieldCheck size={24} className="text-accent" />,
        },
        {
            title: "Cobertura nacional",
            description: "Rutas urbanas e intermunicipales disponibles 24/7 en todo el país",
            icon: <MapPin size={24} className="text-accent" />,
        },
        {
            title: "Flota propia",
            description: "Autos, camionetas, vans y buses equipados con GPS y telemetría",
            icon: <Car size={24} className="text-accent" />,
        },
        {
            title: "Conductores certificados",
            description: "Experiencia comprobada y atención humana de excelencia",
            icon: <Users size={24} className="text-accent" />,
        },
        {
            title: "Soporte 24/7",
            description: "WhatsApp inmediato y central operativa siempre disponible",
            icon: <Headphones size={24} className="text-accent" />,
        },
    ];

    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-4xl font-bold font-heading text-primary mb-4"
                    >
                        ¿Por qué elegir <span className="text-accent">Destinos Express</span>?
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-gray-600 text-lg"
                    >
                        Más de una década de experiencia brindando soluciones de movilidad segura y confiable para el sector corporativo y turístico.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-white p-8 rounded-2xl border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                        >
                            <div className="bg-accent/10 w-14 h-14 rounded-xl flex items-center justify-center mb-6">
                                {feature.icon}
                            </div>
                            <h3 className="text-xl font-bold font-heading text-primary mb-3">
                                {feature.title}
                            </h3>
                            <p className="text-gray-600 leading-relaxed text-sm">
                                {feature.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
