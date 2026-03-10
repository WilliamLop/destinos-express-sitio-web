"use client";

import { useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Send, MapPin, Calendar, Clock, ArrowRight, ArrowLeft, CheckCircle2, ShieldCheck, Zap, Headphones, Star } from "lucide-react";
import { supabase } from "@/lib/supabase/client";

// Zod Schema
const formSchema = z.object({
    origen: z.string().min(3, "Origen requerido"),
    destino: z.string().min(3, "Destino requerido"),
    tipo_trayecto: z.enum(["Sencillo", "Ida y Vuelta", "A disposición"]),
    fecha: z.string().min(1, "Seleccione fecha"),
    hora: z.string().optional(),

    pax: z.coerce.number().min(1, "Mínimo 1 pasajero"),
    maletas: z.coerce.number().min(0).optional(),
    tipo_vehiculo: z.enum(["SUV", "Minivan", "Van", "Bus"]),
    observaciones: z.string().optional(),

    nombre: z.string().min(2, "Nombre requerido"),
    empresa: z.string().optional(),
    email: z.string().email("Correo inválido"),
    telefono: z.string().min(10, "Teléfono inválido"),
});

type FormData = z.infer<typeof formSchema>;

function QuoteWizardForm() {
    const searchParams = useSearchParams();
    const selectedService = searchParams?.get("servicio");

    const [step, setStep] = useState(1);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const { register, handleSubmit, formState: { errors }, trigger, watch } = useForm<FormData>({
        resolver: zodResolver(formSchema) as any,
        defaultValues: {
            tipo_trayecto: "Sencillo",
            tipo_vehiculo: "Minivan",
            pax: 1,
            maletas: 0,
        }
    });

    const formData = watch();

    const nextStep = async () => {
        let fieldsToValidate: any[] = [];
        if (step === 1) fieldsToValidate = ["origen", "destino", "fecha", "hora", "tipo_trayecto"];
        if (step === 2) fieldsToValidate = ["pax", "maletas", "tipo_vehiculo"];

        const isStepValid = await trigger(fieldsToValidate);
        if (isStepValid) setStep((prev) => prev + 1);
    };

    const prevStep = () => setStep((prev) => prev - 1);

    const formatWhatsAppMsg = (data: FormData) => {
        const servInfo = selectedService ? `\n*Servicio de interés:* ${selectedService}` : "";
        return `Hola, deseo cotizar un servicio de transporte:${servInfo}\n\n*Ruta:* ${data.origen} -> ${data.destino}\n*Fecha:* ${data.fecha} a las ${data.hora || 'Por definir'}\n*Pasajeros:* ${data.pax} | *Vehículo:* ${data.tipo_vehiculo}\n*A nombre de:* ${data.nombre}\n\nQuedo atento.`;
    };

    const onSubmit = async (data: FormData) => {
        setIsSubmitting(true);
        try {
            // 1. Save to Supabase
            const { error } = await supabase.from('leads').insert([{
                nombre: data.nombre,
                empresa: data.empresa,
                email: data.email,
                telefono: data.telefono,
                origen: data.origen,
                destino: data.destino,
                fecha: data.fecha,
                hora: data.hora,
                pax: data.pax,
                maletas: data.maletas,
                tipo_vehiculo: data.tipo_vehiculo,
                tipo_trayecto: data.tipo_trayecto,
                observaciones: selectedService ? `[Servicio: ${selectedService}] ${data.observaciones || ''}` : data.observaciones,
                origen_lead: 'Web Form'
            }]);

            if (error) {
                console.error("Error saving lead:", error);
                // Fallback to whatsapp if error happens (for UX)
            }

            setIsSuccess(true);

            // Optional: open WhatsApp in new tab after showing success
            setTimeout(() => {
                window.open(`https://wa.me/573024060101?text=${encodeURIComponent(formatWhatsAppMsg(data))}`, "_blank");
            }, 2000);

        } catch (e) {
            console.error(e);
        } finally {
            setIsSubmitting(false);
        }
    };

    // WhatsApp direct option (no DB save)
    const buyViaWhatsApp = async () => {
        // validate all steps
        const isValid = await trigger();
        if (isValid) {
            window.open(`https://wa.me/573024060101?text=${encodeURIComponent(formatWhatsAppMsg(formData))}`, "_blank");
        }
    };

    const trustItems = [
        { icon: <Zap size={16} />, text: "Respuesta en menos de 1 hora" },
        { icon: <ShieldCheck size={16} />, text: "Datos protegidos con SSL" },
        { icon: <Headphones size={16} />, text: "Asesor dedicado para tu solicitud" },
        { icon: <Star size={16} />, text: "99% de satisfacción de clientes" },
    ];

    return (
        <section id="cotizar" className="relative bg-primary py-24 overflow-hidden">

            {/* ── Background photo layer ── */}
            <div className="absolute inset-0 z-0">
                <img
                    src="https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?q=80&w=2670&auto=format&fit=crop"
                    alt=""
                    aria-hidden
                    className="w-full h-full object-cover opacity-20"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-primary/70 via-primary/85 to-primary" />
            </div>

            {/* ── Gold dot grid ── */}
            <div
                className="absolute inset-0 z-0 opacity-[0.05] pointer-events-none"
                style={{
                    backgroundImage: "radial-gradient(#FCA311 1px, transparent 1px)",
                    backgroundSize: "30px 30px",
                }}
            />

            {/* ── Ambient glow accents ── */}
            <div className="absolute -top-32 right-0 w-[500px] h-[500px] bg-accent/10 rounded-full blur-[100px] pointer-events-none z-0" />
            <div className="absolute bottom-0 left-0 w-[350px] h-[350px] bg-accent/5 rounded-full blur-[80px] pointer-events-none z-0" />

            {/* ── Diagonal accent line ── */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent z-0" />

            <div className="container mx-auto px-4 md:px-6 relative z-10">

                {/* ── Dramatic header ── */}
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center max-w-3xl mx-auto mb-10"
                >
                    <span className="inline-flex items-center gap-2 bg-accent/15 border border-accent/30 text-accent text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-5">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                        Cotización Gratuita — Sin Compromiso
                    </span>
                    <h2 className="text-4xl md:text-6xl font-bold font-heading text-white leading-tight mb-5">
                        Tu próximo viaje,<br />
                        <span className="text-accent">cotizado en 2 minutos</span>
                    </h2>
                    <p className="text-white/55 text-lg leading-relaxed max-w-xl mx-auto">
                        Completa los detalles de tu ruta y recibe una propuesta personalizada con el vehículo y la tarifa exacta para tus necesidades.
                    </p>
                </motion.div>

                {/* ── Trust signals row ── */}
                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="flex flex-wrap justify-center gap-3 mb-12"
                >
                    {trustItems.map((item, i) => (
                        <div
                            key={i}
                            className="inline-flex items-center gap-2 bg-white/8 border border-white/12 backdrop-blur-sm text-white/75 text-sm font-medium px-4 py-2 rounded-full"
                        >
                            <span className="text-accent">{item.icon}</span>
                            {item.text}
                        </div>
                    ))}
                </motion.div>

                {/* ── Form card — identical internals, elevated shadow ── */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.15 }}
                    className="max-w-4xl mx-auto bg-white rounded-3xl shadow-[0_32px_80px_rgba(0,0,0,0.45)] overflow-hidden ring-1 ring-white/10 p-1"
                >

                    <div className="grid grid-cols-1 md:grid-cols-12 min-h-[600px]">
                        {/* Sidebar / Progress */}
                        <div className="md:col-span-4 bg-primary text-white p-8 rounded-2xl flex flex-col justify-between relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-accent rounded-full blur-3xl opacity-20 -mr-10 -mt-10" />

                            <div>
                                <h3 className="text-2xl font-bold font-heading mb-2">Cotizar Servicio</h3>
                                <p className="text-gray-400 text-sm mb-12">Obtén tu tarifa en menos de un minuto.</p>

                                {selectedService && (
                                    <div className="mb-10 inline-flex items-center gap-2 bg-white/10 border border-white/20 px-4 py-2.5 rounded-xl text-sm font-medium text-white shadow-sm backdrop-blur-sm">
                                        <CheckCircle2 size={18} className="text-accent" />
                                        <span>Servicio: <span className="font-bold">{selectedService}</span></span>
                                    </div>
                                )}

                                <div className="space-y-8 relative">
                                    {/* Progress Line */}
                                    <div className="absolute left-4 top-4 w-0.5 h-32 bg-white/10" />

                                    <div className="flex items-center gap-4 relative z-10">
                                        <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm transition-colors ${step >= 1 ? "bg-accent text-primary" : "bg-white/10 text-gray-400"}`}>1</div>
                                        <span className={`font-medium ${step >= 1 ? "text-white" : "text-gray-400"}`}>Detalles de Viaje</span>
                                    </div>

                                    <div className="flex items-center gap-4 relative z-10">
                                        <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm transition-colors ${step >= 2 ? "bg-accent text-primary" : "bg-white/10 text-gray-400"}`}>2</div>
                                        <span className={`font-medium ${step >= 2 ? "text-white" : "text-gray-400"}`}>Vehículo y Logística</span>
                                    </div>

                                    <div className="flex items-center gap-4 relative z-10">
                                        <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm transition-colors ${step >= 3 ? "bg-accent text-primary" : "bg-white/10 text-gray-400"}`}>3</div>
                                        <span className={`font-medium ${step >= 3 ? "text-white" : "text-gray-400"}`}>Datos de Contacto</span>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-12">
                                <div className="bg-white/10 backdrop-blur-sm p-4 rounded-xl border border-white/10">
                                    <p className="text-xs text-gray-300">
                                        ¿Asistencia Inmediata?
                                    </p>
                                    <a href="https://wa.me/573024060101" target="_blank" rel="noopener noreferrer" className="font-bold text-accent text-sm mt-1 block hover:underline">
                                        Chatear con Operaciones
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Form Area */}
                        <div className="md:col-span-8 p-8 md:p-12 bg-white relative">
                            {isSuccess ? (
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    className="h-full flex flex-col items-center justify-center text-center px-4"
                                >
                                    <div className="w-20 h-20 bg-green-100 text-green-500 rounded-full flex items-center justify-center mb-6">
                                        <CheckCircle2 size={40} />
                                    </div>
                                    <h3 className="text-2xl font-bold text-primary font-heading mb-2">¡Solicitud Enviada!</h3>
                                    <p className="text-gray-600 mb-8 max-w-sm">
                                        Hemos registrado tu solicitud correctamente. En breve te redirigiremos a WhatsApp para seguimiento inmediato, o uno de nuestros asesores te contactará al correo proporcionado.
                                    </p>
                                    <button onClick={() => window.location.reload()} className="text-accent font-semibold hover:underline">
                                        Realizar nueva cotización
                                    </button>
                                </motion.div>
                            ) : (
                                <form onSubmit={handleSubmit(onSubmit as any)} className="h-full flex flex-col">

                                    <div className="flex-1">
                                        <AnimatePresence mode="wait">

                                            {/* STEP 1 */}
                                            {step === 1 && (
                                                <motion.div
                                                    key="step1"
                                                    initial={{ opacity: 0, x: 20 }}
                                                    animate={{ opacity: 1, x: 0 }}
                                                    exit={{ opacity: 0, x: -20 }}
                                                    className="space-y-6"
                                                >
                                                    <h4 className="text-xl font-bold text-primary font-heading mb-6 border-b pb-2">Datos de la Ruta</h4>

                                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                                        <div>
                                                            <label className="block text-sm font-medium text-gray-700 mb-1">Punto de Origen *</label>
                                                            <div className="relative">
                                                                <MapPin size={18} className="absolute left-3 top-3.5 text-gray-400" />
                                                                <input {...register("origen")} className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-accent focus:border-accent outline-none transition-all" placeholder="Ej. Aeropuerto El Dorado" />
                                                            </div>
                                                            {errors.origen && <p className="text-red-500 text-xs mt-1">{errors.origen.message as string}</p>}
                                                        </div>

                                                        <div>
                                                            <label className="block text-sm font-medium text-gray-700 mb-1">Destino Final *</label>
                                                            <div className="relative">
                                                                <MapPin size={18} className="absolute left-3 top-3.5 text-gray-400" />
                                                                <input {...register("destino")} className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-accent focus:border-accent outline-none transition-all" placeholder="Ej. Hotel Tequendama" />
                                                            </div>
                                                            {errors.destino && <p className="text-red-500 text-xs mt-1">{errors.destino.message as string}</p>}
                                                        </div>
                                                    </div>

                                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                                        <div>
                                                            <label className="block text-sm font-medium text-gray-700 mb-1">Fecha *</label>
                                                            <div className="relative">
                                                                <Calendar size={18} className="absolute left-3 top-3.5 text-gray-400" />
                                                                <input type="date" {...register("fecha")} className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-accent focus:border-accent outline-none" />
                                                            </div>
                                                            {errors.fecha && <p className="text-red-500 text-xs mt-1">{errors.fecha.message as string}</p>}
                                                        </div>

                                                        <div>
                                                            <label className="block text-sm font-medium text-gray-700 mb-1">Hora Estimada</label>
                                                            <div className="relative">
                                                                <Clock size={18} className="absolute left-3 top-3.5 text-gray-400" />
                                                                <input type="time" {...register("hora")} className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-accent focus:border-accent outline-none" />
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div>
                                                        <label className="block text-sm font-medium text-gray-700 mb-2">Tipo de Trayecto</label>
                                                        <div className="flex flex-wrap gap-4">
                                                            {["Sencillo", "Ida y Vuelta", "A disposición"].map((type) => (
                                                                <label key={type} className="relative flex items-center p-3 border border-gray-200 rounded-xl cursor-pointer hover:bg-gray-50">
                                                                    <input type="radio" value={type} {...register("tipo_trayecto")} className="w-4 h-4 text-accent border-gray-300 focus:ring-accent" />
                                                                    <span className="ml-3 text-sm font-medium text-gray-700">{type}</span>
                                                                </label>
                                                            ))}
                                                        </div>
                                                    </div>
                                                </motion.div>
                                            )}

                                            {/* STEP 2 */}
                                            {step === 2 && (
                                                <motion.div
                                                    key="step2"
                                                    initial={{ opacity: 0, x: 20 }}
                                                    animate={{ opacity: 1, x: 0 }}
                                                    exit={{ opacity: 0, x: -20 }}
                                                    className="space-y-6"
                                                >
                                                    <h4 className="text-xl font-bold text-primary font-heading mb-6 border-b pb-2">Logística y Vehículo</h4>

                                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                                        <div>
                                                            <label className="block text-sm font-medium text-gray-700 mb-1">Número de Pasajeros *</label>
                                                            <input type="number" min="1" {...register("pax")} className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-accent" />
                                                            {errors.pax && <p className="text-red-500 text-xs mt-1">{errors.pax.message as string}</p>}
                                                        </div>
                                                        <div>
                                                            <label className="block text-sm font-medium text-gray-700 mb-1">Piezas de Equipaje</label>
                                                            <input type="number" min="0" {...register("maletas")} className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-accent" />
                                                        </div>
                                                    </div>

                                                    <div>
                                                        <label className="block text-sm font-medium text-gray-700 mb-2">Tipo de Vehículo Sugerido</label>
                                                        <select {...register("tipo_vehiculo")} className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-accent outline-none">
                                                            <option value="SUV">SUV 4x4 (1-4 pax)</option>
                                                            <option value="Minivan">Kia Sedona / Hyundai Staria (5-8 pax)</option>
                                                            <option value="Van">Renault Master / MB Sprinter (9-16 pax)</option>
                                                            <option value="Bus">Busetón / Bus (20+ pax)</option>
                                                        </select>
                                                    </div>

                                                    <div>
                                                        <label className="block text-sm font-medium text-gray-700 mb-1">Requerimientos Adicionales</label>
                                                        <textarea {...register("observaciones")} rows={3} className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-accent outline-none resize-none" placeholder="Silla para bebé, paradas adicionales, conductor bilingüe..." />
                                                    </div>
                                                </motion.div>
                                            )}

                                            {/* STEP 3 */}
                                            {step === 3 && (
                                                <motion.div
                                                    key="step3"
                                                    initial={{ opacity: 0, x: 20 }}
                                                    animate={{ opacity: 1, x: 0 }}
                                                    exit={{ opacity: 0, x: -20 }}
                                                    className="space-y-6"
                                                >
                                                    <h4 className="text-xl font-bold text-primary font-heading mb-6 border-b pb-2">Información de Contacto</h4>

                                                    <div className="grid grid-cols-1 gap-6">
                                                        <div>
                                                            <label className="block text-sm font-medium text-gray-700 mb-1">Nombre Completo *</label>
                                                            <input {...register("nombre")} className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-accent" placeholder="Juan Pérez" />
                                                            {errors.nombre && <p className="text-red-500 text-xs mt-1">{errors.nombre.message as string}</p>}
                                                        </div>

                                                        <div>
                                                            <label className="block text-sm font-medium text-gray-700 mb-1">Empresa (Opcional)</label>
                                                            <input {...register("empresa")} className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-accent" placeholder="Mi Empresa S.A.S." />
                                                        </div>

                                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                                            <div>
                                                                <label className="block text-sm font-medium text-gray-700 mb-1">Correo Electrónico *</label>
                                                                <input type="email" {...register("email")} className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-accent" placeholder="juan@correo.com" />
                                                                {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message as string}</p>}
                                                            </div>
                                                            <div>
                                                                <label className="block text-sm font-medium text-gray-700 mb-1">Teléfono / WhatsApp *</label>
                                                                <input type="tel" {...register("telefono")} className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-accent" placeholder="+57 300 000 0000" />
                                                                {errors.telefono && <p className="text-red-500 text-xs mt-1">{errors.telefono.message as string}</p>}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </motion.div>
                                            )}

                                        </AnimatePresence>
                                    </div>

                                    {/* Form Footer / Buttons */}
                                    <div className="flex items-center justify-between mt-10 pt-6 border-t border-gray-100">
                                        {step > 1 ? (
                                            <button type="button" onClick={prevStep} className="px-6 py-2.5 text-gray-500 hover:text-primary font-medium flex items-center gap-2">
                                                <ArrowLeft size={18} /> Atrás
                                            </button>
                                        ) : (
                                            <div /> // empty flex placeholder
                                        )}

                                        {step < 3 ? (
                                            <button type="button" onClick={nextStep} className="bg-primary hover:bg-primary-light text-white px-8 py-3 rounded-xl font-semibold flex items-center gap-2 transition-all">
                                                Siguiente <ArrowRight size={18} />
                                            </button>
                                        ) : (
                                            <div className="flex gap-4">
                                                <button
                                                    type="button"
                                                    onClick={buyViaWhatsApp}
                                                    className="bg-[#25D366] hover:bg-[#20BE5A] text-white px-6 py-3 rounded-xl font-bold flex items-center gap-2 transition-all"
                                                >
                                                    <Send size={18} /> Cotizar vía WP
                                                </button>
                                                <button
                                                    type="submit"
                                                    disabled={isSubmitting}
                                                    className="bg-accent hover:bg-accent-hover text-white px-6 py-3 rounded-xl font-bold flex items-center gap-2 transition-all disabled:opacity-50"
                                                >
                                                    {isSubmitting ? "Enviando..." : "Solicitar Cotización Formal"}
                                                </button>
                                            </div>
                                        )}
                                    </div>

                                </form>
                            )}
                        </div>

                    </div>
                </motion.div>
            </div>
        </section>
    );
}

export function QuoteWizard() {
    return (
        <Suspense fallback={
            <div className="py-24 bg-primary flex justify-center min-h-[600px] items-center">
                <p className="text-white/50 font-medium">Cargando cotizador...</p>
            </div>
        }>
            <QuoteWizardForm />
        </Suspense>
    );
}
