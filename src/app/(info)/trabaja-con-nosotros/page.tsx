"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { CheckCircle, Upload, Briefcase, Car, ChevronRight, ArrowRight, Shield, MapPin, Clock, TrendingUp } from "lucide-react";

export default function TrabajaConNosotros() {
    const [activeTab, setActiveTab] = useState<"conductor" | "propietario">("conductor");
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState<"conductor" | "propietario" | null>(null);

    const submitConductor = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const form = e.currentTarget;
        const fd = new FormData(form);
        setIsSubmitting(true);
        try {
            await fetch("/api/aplicar", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    tipo: "conductor",
                    nombres: fd.get("nombres"),
                    apellidos: fd.get("apellidos"),
                    email: fd.get("email"),
                    celular: fd.get("celular"),
                    ciudad: fd.get("ciudad"),
                    licencia: fd.get("licencia"),
                }),
            });
            setIsSuccess("conductor");
        } catch (err) {
            console.error(err);
        } finally {
            setIsSubmitting(false);
        }
    };

    const submitPropietario = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const form = e.currentTarget;
        const fd = new FormData(form);
        setIsSubmitting(true);
        try {
            await fetch("/api/aplicar", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    tipo: "propietario",
                    nombre: fd.get("nombre"),
                    celular: fd.get("celular"),
                    marca_linea: fd.get("marca_linea"),
                    modelo: fd.get("modelo"),
                    capacidad: fd.get("capacidad"),
                    tiene_conductor: fd.get("tiene_conductor"),
                }),
            });
            setIsSuccess("propietario");
        } catch (err) {
            console.error(err);
        } finally {
            setIsSubmitting(false);
        }
    };

    const fadeUp = {
        hidden: { opacity: 0, y: 20 },
        show: (delay: number) => ({
            opacity: 1, y: 0,
            transition: { duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
        }),
    };

    const stats = [
        { value: "16+",  label: "Ciudades" },
        { value: "10+",  label: "Años de experiencia" },
        { value: "500+", label: "Empresas atendidas" },
        { value: "24/7", label: "Operación" },
    ];

    const perks = [
        { icon: TrendingUp, label: "Ingresos estables" },
        { icon: MapPin,     label: "Rutas garantizadas" },
        { icon: Shield,     label: "Respaldo operativo" },
        { icon: Clock,      label: "Horarios flexibles" },
    ];

    return (
        <div className="min-h-screen bg-gray-50 pb-24">

            {/* ── HERO ── */}
            <section className="relative overflow-hidden bg-[#0D0D0D] pt-20">

                {/* Background image */}
                <div className="absolute inset-0 z-0">
                    <img
                        src="https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=2669&auto=format&fit=crop"
                        alt="" aria-hidden
                        className="w-full h-full object-cover opacity-40"
                        style={{ filter: "saturate(0.6)" }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-[#0D0D0D] via-[#0D0D0D]/85 to-[#0D0D0D]/30" />
                    <div
                        className="absolute inset-0"
                        style={{
                            background: "radial-gradient(ellipse 50% 65% at 70% 50%, rgba(252,163,17,0.07) 0%, transparent 70%)",
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
                            <span className="text-[#FCA311]">Trabaja con Nosotros</span>
                        </nav>
                        <span className="inline-flex items-center gap-1.5 bg-[#FCA311]/10 border border-[#FCA311]/25 text-[#FCA311] text-xs font-semibold tracking-widest uppercase px-3 py-1 rounded-full">
                            <span className="w-1 h-1 rounded-full bg-[#FCA311] animate-pulse" />
                            Únete al equipo
                        </span>
                    </motion.div>

                    <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-start lg:items-center">

                        {/* Columna izquierda */}
                        <div className="flex-1 max-w-xl">
                            <motion.h1
                                custom={0.15} variants={fadeUp} initial="hidden" animate="show"
                                className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading text-white tracking-tight leading-[1.05] mb-4"
                            >
                                Trabaja con{" "}
                                <span className="relative inline-block">
                                    <span className="text-[#FCA311]">Nosotros</span>
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
                                className="text-white/60 text-base leading-relaxed mb-6"
                            >
                                Buscamos conductores comprometidos y propietarios con vehículos de calidad para seguir siendo el mejor servicio de transporte especial de Colombia.
                            </motion.p>

                            {/* Perks pills */}
                            <motion.div
                                custom={0.32} variants={fadeUp} initial="hidden" animate="show"
                                className="flex flex-wrap gap-2"
                            >
                                {perks.map((p) => (
                                    <span
                                        key={p.label}
                                        className="inline-flex items-center gap-1.5 bg-white/6 border border-white/10 text-white/65 text-xs font-medium px-3 py-1.5 rounded-full"
                                    >
                                        <p.icon size={12} className="text-[#FCA311]" />
                                        {p.label}
                                    </span>
                                ))}
                            </motion.div>
                        </div>

                        {/* Columna derecha — selector de ruta */}
                        <div className="lg:w-[420px] flex-shrink-0">
                            <motion.p
                                custom={0.2} variants={fadeUp} initial="hidden" animate="show"
                                className="text-white/70 text-xs font-semibold tracking-widest uppercase mb-3"
                            >
                                ¿Cómo quieres unirte?
                            </motion.p>
                            <motion.div
                                custom={0.3} variants={fadeUp} initial="hidden" animate="show"
                                className="flex flex-col gap-3"
                            >
                                {/* Card Conductor */}
                                <a
                                    href="#formulario"
                                    onClick={() => setActiveTab("conductor")}
                                    className="group flex items-center justify-between bg-white/5 hover:bg-[#FCA311]/10 border border-white/8 hover:border-[#FCA311]/40 rounded-2xl px-5 py-4 transition-all duration-200"
                                >
                                    <div className="flex items-center gap-4">
                                        <div className="w-10 h-10 rounded-xl bg-[#FCA311]/10 group-hover:bg-[#FCA311]/20 flex items-center justify-center flex-shrink-0 transition-colors">
                                            <Briefcase size={18} className="text-[#FCA311]" />
                                        </div>
                                        <div>
                                            <p className="text-white font-bold text-sm leading-tight">Soy Conductor</p>
                                            <p className="text-white/40 text-xs mt-0.5">Aplica con tu licencia C1/C2</p>
                                        </div>
                                    </div>
                                    <ArrowRight size={16} className="text-white/25 group-hover:text-[#FCA311] group-hover:translate-x-1 transition-all" />
                                </a>

                                {/* Card Propietario */}
                                <a
                                    href="#formulario"
                                    onClick={() => setActiveTab("propietario")}
                                    className="group flex items-center justify-between bg-white/5 hover:bg-[#FCA311]/10 border border-white/8 hover:border-[#FCA311]/40 rounded-2xl px-5 py-4 transition-all duration-200"
                                >
                                    <div className="flex items-center gap-4">
                                        <div className="w-10 h-10 rounded-xl bg-[#FCA311]/10 group-hover:bg-[#FCA311]/20 flex items-center justify-center flex-shrink-0 transition-colors">
                                            <Car size={18} className="text-[#FCA311]" />
                                        </div>
                                        <div>
                                            <p className="text-white font-bold text-sm leading-tight">Soy Propietario de Vehículo</p>
                                            <p className="text-white/40 text-xs mt-0.5">Afilia tu vehículo modelo 2020+</p>
                                        </div>
                                    </div>
                                    <ArrowRight size={16} className="text-white/25 group-hover:text-[#FCA311] group-hover:translate-x-1 transition-all" />
                                </a>
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

            <div id="formulario" className="container mx-auto px-4 md:px-6 mt-12">
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
                                    {isSuccess === "conductor" ? (
                                        <div className="flex flex-col items-center justify-center py-10 text-center">
                                            <CheckCircle size={48} className="text-accent mb-4" />
                                            <p className="font-bold text-primary text-lg">¡Aplicación Enviada!</p>
                                            <p className="text-gray-500 text-sm mt-2">Nos pondremos en contacto contigo pronto.</p>
                                        </div>
                                    ) : (
                                        <form className="space-y-4" onSubmit={submitConductor}>
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                                <input required name="nombres" type="text" placeholder="Nombres Completos" className="w-full px-4 py-3 rounded-xl border border-gray-200 outline-none focus:border-accent" />
                                                <input required name="apellidos" type="text" placeholder="Apellidos" className="w-full px-4 py-3 rounded-xl border border-gray-200 outline-none focus:border-accent" />
                                                <input required name="email" type="email" placeholder="Correo Electrónico" className="w-full px-4 py-3 rounded-xl border border-gray-200 outline-none focus:border-accent" />
                                                <input required name="celular" type="tel" placeholder="Número Celular" className="w-full px-4 py-3 rounded-xl border border-gray-200 outline-none focus:border-accent" />
                                                <input required name="ciudad" type="text" placeholder="Ciudad de Residencia" className="w-full px-4 py-3 rounded-xl border border-gray-200 outline-none focus:border-accent" />
                                                <input required name="licencia" type="text" placeholder="Categoría de Licencia (Ej. C2)" className="w-full px-4 py-3 rounded-xl border border-gray-200 outline-none focus:border-accent" />
                                            </div>

                                            <div className="mt-4 border-2 border-dashed border-gray-200 rounded-xl p-6 text-center hover:bg-gray-100 cursor-pointer transition-colors">
                                                <Upload size={24} className="mx-auto text-gray-400 mb-2" />
                                                <p className="text-sm font-medium text-gray-600">Adjuntar Hoja de Vida (PDF, max 5MB)</p>
                                            </div>

                                            <button type="submit" disabled={isSubmitting} className="w-full bg-accent hover:bg-accent-hover text-white font-bold py-3 rounded-xl transition-all disabled:opacity-60">
                                                {isSubmitting ? "Enviando..." : "Enviar Aplicación"}
                                            </button>
                                        </form>
                                    )}
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
                                    {isSuccess === "propietario" ? (
                                        <div className="flex flex-col items-center justify-center py-10 text-center">
                                            <CheckCircle size={48} className="text-accent mb-4" />
                                            <p className="font-bold text-primary text-lg">¡Solicitud Enviada!</p>
                                            <p className="text-gray-500 text-sm mt-2">Revisaremos tu vehículo y te contactaremos pronto.</p>
                                        </div>
                                    ) : (
                                        <form className="space-y-4" onSubmit={submitPropietario}>
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                                <input required name="nombre" type="text" placeholder="Nombre del Propietario" className="w-full px-4 py-3 rounded-xl border border-gray-200 outline-none focus:border-accent" />
                                                <input required name="celular" type="tel" placeholder="Número Celular" className="w-full px-4 py-3 rounded-xl border border-gray-200 outline-none focus:border-accent" />
                                                <input required name="marca_linea" type="text" placeholder="Marca y Línea del Vehículo" className="w-full px-4 py-3 rounded-xl border border-gray-200 outline-none focus:border-accent" />
                                                <input required name="modelo" type="text" placeholder="Modelo (Año)" className="w-full px-4 py-3 rounded-xl border border-gray-200 outline-none focus:border-accent" />
                                                <input required name="capacidad" type="text" placeholder="Capacidad de Pasajeros" className="w-full px-4 py-3 rounded-xl border border-gray-200 outline-none focus:border-accent" />
                                                <select required name="tiene_conductor" className="w-full px-4 py-3 rounded-xl border border-gray-200 outline-none focus:border-accent text-gray-500">
                                                    <option value="">¿Cuenta con conductor?</option>
                                                    <option value="si">Sí, cuenta con conductor</option>
                                                    <option value="no">No, solo alquilo el vehículo</option>
                                                </select>
                                            </div>

                                            <button type="submit" disabled={isSubmitting} className="w-full bg-accent hover:bg-accent-hover text-white font-bold py-3 rounded-xl transition-all disabled:opacity-60">
                                                {isSubmitting ? "Enviando..." : "Solicitar Evaluación de Afiliación"}
                                            </button>
                                        </form>
                                    )}
                                </div>
                            </motion.div>
                        )}

                    </div>
                </div>
            </div>
        </div>
    );
}
