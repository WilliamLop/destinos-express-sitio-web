"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle, Upload, Briefcase, Car } from "lucide-react";

export default function TrabajaConNosotros() {
    const [activeTab, setActiveTab] = useState<"conductor" | "propietario">("conductor");

    return (
        <div className="min-h-screen bg-gray-50 pt-10 pb-24">
            {/* Header */}
            <div className="container mx-auto px-4 md:px-6 mb-12">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="max-w-3xl mx-auto text-center"
                >
                    <h1 className="text-4xl md:text-5xl font-bold font-heading text-primary mb-6">
                        Únete a nuestro gran <span className="text-accent">Equipo Operativo</span>
                    </h1>
                    <p className="text-lg text-gray-600">
                        En Destinos Express buscamos personal altamente calificado y vehículos en excelentes condiciones para seguir brindando el mejor servicio de Colombia.
                    </p>
                </motion.div>
            </div>

            <div className="container mx-auto px-4 md:px-6">
                <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">

                    {/* Tabs */}
                    <div className="flex flex-col sm:flex-row border-b border-gray-100">
                        <button
                            onClick={() => setActiveTab("conductor")}
                            className={`flex-1 flex items-center justify-center gap-3 py-6 px-4 font-heading font-bold text-lg transition-colors ${activeTab === "conductor"
                                    ? "bg-primary text-white"
                                    : "text-gray-500 hover:bg-gray-50"
                                }`}
                        >
                            <Briefcase size={20} />
                            Soy Conductor
                        </button>
                        <button
                            onClick={() => setActiveTab("propietario")}
                            className={`flex-1 flex items-center justify-center gap-3 py-6 px-4 font-heading font-bold text-lg transition-colors ${activeTab === "propietario"
                                    ? "bg-primary text-white"
                                    : "text-gray-500 hover:bg-gray-50"
                                }`}
                        >
                            <Car size={20} />
                            Soy Propietario de Vehículo
                        </button>
                    </div>

                    {/* Content */}
                    <div className="p-8 md:p-12">

                        {activeTab === "conductor" && (
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: 20 }}
                            >
                                <div className="mb-10">
                                    <h3 className="text-2xl font-bold text-primary mb-4 font-heading">Perfil del Conductor</h3>
                                    <div className="grid sm:grid-cols-2 gap-4 text-gray-600">
                                        <div className="flex items-start gap-2"><CheckCircle size={18} className="text-accent shrink-0 mt-0.5" /> Licencia de conducción C1/C2 vigente sin multas.</div>
                                        <div className="flex items-start gap-2"><CheckCircle size={18} className="text-accent shrink-0 mt-0.5" /> Experiencia mínima de 3 años en transporte de pasajeros.</div>
                                        <div className="flex items-start gap-2"><CheckCircle size={18} className="text-accent shrink-0 mt-0.5" /> Conocimiento avanzado de rutas urbanas e intermunicipales.</div>
                                        <div className="flex items-start gap-2"><CheckCircle size={18} className="text-accent shrink-0 mt-0.5" /> Excelente presentación personal y habilidades blandas (Plus: Inglés).</div>
                                    </div>
                                </div>

                                <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
                                    <h4 className="font-bold text-primary mb-4 border-b pb-2">Formulario de Aplicación - Conductor</h4>
                                    <form className="space-y-4">
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            <input type="text" placeholder="Nombres Completos" className="w-full px-4 py-3 rounded-xl border border-gray-200 outline-none focus:border-accent" />
                                            <input type="text" placeholder="Apellidos" className="w-full px-4 py-3 rounded-xl border border-gray-200 outline-none focus:border-accent" />
                                            <input type="email" placeholder="Correo Electrónico" className="w-full px-4 py-3 rounded-xl border border-gray-200 outline-none focus:border-accent" />
                                            <input type="tel" placeholder="Número Celular" className="w-full px-4 py-3 rounded-xl border border-gray-200 outline-none focus:border-accent" />
                                            <input type="text" placeholder="Ciudad de Residencia" className="w-full px-4 py-3 rounded-xl border border-gray-200 outline-none focus:border-accent" />
                                            <input type="text" placeholder="Categoría de Licencia (Ej. C2)" className="w-full px-4 py-3 rounded-xl border border-gray-200 outline-none focus:border-accent" />
                                        </div>

                                        <div className="mt-4 border-2 border-dashed border-gray-200 rounded-xl p-6 text-center hover:bg-gray-100 cursor-pointer transition-colors">
                                            <Upload size={24} className="mx-auto text-gray-400 mb-2" />
                                            <p className="text-sm font-medium text-gray-600">Adjuntar Hoja de Vida (PDF, max 5MB)</p>
                                        </div>

                                        <button type="button" className="w-full bg-accent hover:bg-accent-hover text-white font-bold py-3 rounded-xl transition-all">
                                            Enviar Aplicación
                                        </button>
                                    </form>
                                </div>
                            </motion.div>
                        )}

                        {activeTab === "propietario" && (
                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                            >
                                <div className="mb-10">
                                    <h3 className="text-2xl font-bold text-primary mb-4 font-heading">Requisitos para Afiliación de Vehículo</h3>
                                    <div className="grid sm:grid-cols-2 gap-4 text-gray-600">
                                        <div className="flex items-start gap-2"><CheckCircle size={18} className="text-accent shrink-0 mt-0.5" /> Vehículo modelo 2020 en adelante (SUVs, Vans, Busetas).</div>
                                        <div className="flex items-start gap-2"><CheckCircle size={18} className="text-accent shrink-0 mt-0.5" /> Documentación al día (SOAT, Técnico Mecánica, Seguro contractual).</div>
                                        <div className="flex items-start gap-2"><CheckCircle size={18} className="text-accent shrink-0 mt-0.5" /> Estado impecable mecánico, cojinería e interior.</div>
                                        <div className="flex items-start gap-2"><CheckCircle size={18} className="text-accent shrink-0 mt-0.5" /> GPS activo con acceso para central de monitoreo.</div>
                                    </div>
                                </div>

                                <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
                                    <h4 className="font-bold text-primary mb-4 border-b pb-2">Registro de Vehículo</h4>
                                    <form className="space-y-4">
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            <input type="text" placeholder="Nombre del Propietario" className="w-full px-4 py-3 rounded-xl border border-gray-200 outline-none focus:border-accent" />
                                            <input type="tel" placeholder="Número Celular" className="w-full px-4 py-3 rounded-xl border border-gray-200 outline-none focus:border-accent" />
                                            <input type="text" placeholder="Marca y Línea del Vehículo" className="w-full px-4 py-3 rounded-xl border border-gray-200 outline-none focus:border-accent" />
                                            <input type="text" placeholder="Modelo (Año)" className="w-full px-4 py-3 rounded-xl border border-gray-200 outline-none focus:border-accent" />
                                            <input type="text" placeholder="Capacidad de Pasajeros" className="w-full px-4 py-3 rounded-xl border border-gray-200 outline-none focus:border-accent" />
                                            <select className="w-full px-4 py-3 rounded-xl border border-gray-200 outline-none focus:border-accent text-gray-500">
                                                <option value="">¿Cuenta con conductor?</option>
                                                <option value="si">Sí, cuenta con conductor</option>
                                                <option value="no">No, solo alquilo el vehículo</option>
                                            </select>
                                        </div>

                                        <button type="button" className="w-full bg-accent hover:bg-accent-hover text-white font-bold py-3 rounded-xl transition-all">
                                            Solicitar Evaluación de Afiliación
                                        </button>
                                    </form>
                                </div>
                            </motion.div>
                        )}

                    </div>
                </div>
            </div>
        </div>
    );
}
