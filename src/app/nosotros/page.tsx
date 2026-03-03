"use client";

import { motion } from "framer-motion";
import { Shield, Target, Award, Users } from "lucide-react";

export default function NosotrosPage() {
    const values = [
        {
            icon: <Shield size={24} className="text-white" />,
            title: "Seguridad",
            description: "Es nuestra prioridad número uno. Mantenemos nuestra flota en óptimas condiciones y nuestros conductores están altamente capacitados."
        },
        {
            icon: <Target size={24} className="text-white" />,
            title: "Puntualidad",
            description: "Entendemos el valor de tu tiempo. Garantizamos recogidas y llegadas exactas según tu programación."
        },
        {
            icon: <Award size={24} className="text-white" />,
            title: "Excelencia",
            description: "Brindamos una experiencia de transporte premium con atención al detalle y un servicio al cliente excepcional."
        },
        {
            icon: <Users size={24} className="text-white" />,
            title: "Compromiso",
            description: "Estamos dedicados a superar tus expectativas en cada viaje, construyendo relaciones a largo plazo con nuestros clientes."
        }
    ];

    return (
        <main className="min-h-screen pt-24 bg-white">
            {/* Page Header */}
            <div className="bg-primary text-white py-20 relative overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img
                        src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2670&auto=format&fit=crop"
                        alt="Equipo Destinos Express"
                        className="w-full h-full object-cover opacity-20"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-primary to-primary/80" />
                </div>
                <div className="container mx-auto px-4 md:px-6 relative z-10">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading mb-6 tracking-tight">
                        Acerca de <span className="text-accent">Nosotros</span>
                    </h1>
                    <p className="text-lg md:text-xl max-w-2xl text-white/90 leading-relaxed text-balance">
                        Conoce la historia, misión y visión detrás de Destinos Express. Somos tu aliado estratégico de confianza en soluciones de transporte en Colombia.
                    </p>
                </div>
            </div>

            {/* Our Story / Who We Are */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-3xl md:text-4xl font-bold font-heading text-primary mb-6">
                                Quiénes <span className="text-accent">Somos</span>
                            </h2>
                            <p className="text-gray-600 text-lg leading-relaxed mb-6 block">
                                En <strong>Destinos Express S.A.S.</strong> somos una empresa líder en el sector del transporte terrestre especial de pasajeros, constituida legalmente y habilitada por el Ministerio de Transporte.
                            </p>
                            <p className="text-gray-600 text-lg leading-relaxed mb-6 block">
                                Nos hemos consolidado como un referente de calidad y cumplimiento, ofreciendo soluciones de movilidad eficientes, seguras y confortables para el sector empresarial, escolar, turístico y usuarios particulares.
                            </p>
                            <p className="text-gray-600 text-lg leading-relaxed block">
                                Nuestro equipo humano está integrado por profesionales con profunda experiencia en la industria del transporte y logística, dedicados a diseñar y operar modelos de servicio orientados a la satisfacción total de nuestros clientes.
                            </p>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl"
                        >
                            <img
                                src="https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?q=80&w=2669&auto=format&fit=crop"
                                alt="Transporte Corporativo"
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-primary/10"></div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Mission & Vision */}
            <section className="py-20 bg-secondary">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Mission */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="bg-white p-10 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300"
                        >
                            <div className="bg-accent/10 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                                <span className="text-3xl">🚀</span>
                            </div>
                            <h3 className="text-2xl font-bold font-heading text-primary mb-4">Nuestra Misión</h3>
                            <p className="text-gray-600 leading-relaxed text-lg">
                                Proveer servicios de transporte especial de pasajeros con los más altos estándares de calidad, seguridad y cumplimiento. Generamos valor para nuestros clientes a través de un acompañamiento integral, optimizando sus desplazamientos y contribuyendo a la eficiencia de sus operaciones diarias.
                            </p>
                        </motion.div>

                        {/* Vision */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="bg-white p-10 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300"
                        >
                            <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                                <span className="text-3xl">👁️</span>
                            </div>
                            <h3 className="text-2xl font-bold font-heading text-primary mb-4">Nuestra Visión</h3>
                            <p className="text-gray-600 leading-relaxed text-lg">
                                Para el 2030, ser reconocidos como la compañía de transporte especial más innovadora y confiable de Colombia. Lideraremos la transformación del sector integrando tecnologías sostenibles, ampliando nuestra cobertura nacional y estableciendo nuevos paradigmas en la experiencia del usuario.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Values */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="text-center max-w-2xl mx-auto mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold font-heading text-primary mb-4">
                            Nuestros <span className="text-accent">Valores Corporativos</span>
                        </h2>
                        <p className="text-gray-600 text-lg">
                            Los pilares fundamentales que guían nuestras acciones y decisiones cada día.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {values.map((value, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-primary p-8 rounded-2xl text-white group hover:-translate-y-2 transition-transform duration-300"
                            >
                                <div className="bg-white/10 w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:bg-accent transition-colors duration-300">
                                    {value.icon}
                                </div>
                                <h4 className="text-xl font-bold font-heading mb-3">{value.title}</h4>
                                <p className="text-white/80 text-sm leading-relaxed">
                                    {value.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
}
