"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

export function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const faqs = [
        {
            question: "¿Cuáles son los métodos de pago aceptados?",
            answer: "Aceptamos pago mediante transferencia bancaria, tarjetas de crédito/débito (Visa, Mastercard, Amex), pagos en efectivo directamente en nuestras sedes y enlaces de pago seguros PSE para empresas constituidas.",
        },
        {
            question: "¿Con cuánto tiempo de anticipación debo reservar?",
            answer: "Recomendamos realizar la reserva con un mínimo de 24 horas de antelación para garantizar disponibilidad y selección del vehículo idóneo. Sin embargo, para emergencias o aeropuerto sujetos a disponibilidad, aceptamos traslados con 3 horas de aviso.",
        },
        {
            question: "¿Los vehículos cuentan con seguros y permisos vigentes?",
            answer: "Absolutamente. Todos nuestros vehículos operan bajo la modalidad de Servicio Público Especial (placa blanca), cuentan con pólizas de responsabilidad civil contractual y extracontractual, y conductores certificados con tarjeta de operación vigente al día.",
        },
        {
            question: "¿Qué política manejan para cancelación o modificación de ruta?",
            answer: "Las cancelaciones deben realizarse con al menos 12 horas de anticipación para evitar recargos. Las modificaciones de ruta en pleno trayecto (\"paradas adicionales\") pueden incurrir en recargos por hora o kilómetro adicional dependiendo del tipo de convenio corporativo.",
        },
        {
            question: "¿Ofrecen servicios de van y buses intermunicipales o para turismo?",
            answer: "Sí, a través de nuestra división turística podemos cubrir rutas a nivel nacional y sitios de interés turístico, acompañados si se requiere de guías bilingües y paramédicos para grupos especiales o de tercera edad.",
        },
    ];

    const toggleAccordion = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section id="faq" className="py-24 bg-white">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

                    {/* Left Column */}
                    <div className="lg:col-span-5">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="sticky top-24"
                        >
                            <h2 className="text-3xl md:text-4xl font-bold font-heading text-primary mb-6">
                                Preguntas <span className="text-accent">Frecuentes</span>
                            </h2>
                            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                                Respondemos las inquietudes más comunes sobre nuestras operaciones, modalidades de servicio y garantías de seguridad integrales.
                            </p>

                            <div className="bg-secondary p-8 rounded-2xl border border-gray-100">
                                <h4 className="font-bold text-primary mb-2">¿Aún tienes dudas?</h4>
                                <p className="text-sm text-gray-600 mb-6">Nuestro equipo de operaciones está listo para asesorarte sin compromiso.</p>
                                <a
                                    href="https://wa.me/573024060101"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex w-full items-center justify-center bg-gray-900 text-white hover:bg-black px-6 py-3 rounded-xl font-semibold transition-colors text-sm"
                                >
                                    Contactar por WhatsApp
                                </a>
                            </div>
                        </motion.div>
                    </div>

                    {/* Right Column - Accordion */}
                    <div className="lg:col-span-7">
                        <div className="space-y-4">
                            {faqs.map((faq, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="border border-gray-200 rounded-2xl overflow-hidden bg-white hover:border-accent/30 transition-colors"
                                >
                                    <button
                                        onClick={() => toggleAccordion(index)}
                                        className="w-full text-left px-6 py-5 flex items-center justify-between focus:outline-none"
                                    >
                                        <span className="font-bold text-primary pr-8 font-heading text-lg">
                                            {faq.question}
                                        </span>
                                        <div className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors ${openIndex === index ? "bg-accent text-white" : "bg-gray-100 text-gray-500"
                                            }`}>
                                            {openIndex === index ? <Minus size={16} /> : <Plus size={16} />}
                                        </div>
                                    </button>

                                    <AnimatePresence>
                                        {openIndex === index && (
                                            <motion.div
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{ height: "auto", opacity: 1 }}
                                                exit={{ height: 0, opacity: 0 }}
                                                transition={{ duration: 0.3, ease: "easeInOut" }}
                                                className="overflow-hidden"
                                            >
                                                <div className="px-6 pb-6 text-gray-600 leading-relaxed pt-2 border-t border-gray-100 mx-6">
                                                    {faq.answer}
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
