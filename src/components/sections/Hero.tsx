"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, MessageCircle } from "lucide-react";

export function Hero() {
    return (
        <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-primary pt-20">
            {/* Background Video/Overlay */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-primary/95 z-10" />
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover"
                >
                    <source src="/videos/videoherobg.mp4" type="video/mp4" />
                </video>
            </div>

            <div className="container relative z-20 mx-auto px-4 md:px-6 flex flex-col items-center text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="max-w-4xl"
                >
                    <span className="inline-block py-1 px-3 rounded-full bg-white/10 border border-white/20 text-accent font-medium text-sm mb-6 backdrop-blur-sm">
                        Excelencia en Movilidad Corporativa
                    </span>

                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white font-heading leading-tight mb-6">
                        Transporte <span className="text-accent">Especial, Ejecutivo</span> y Turístico
                    </h1>

                    <p className="text-lg md:text-xl text-gray-300 font-sans mb-10 max-w-2xl mx-auto leading-relaxed">
                        Experimente la tranquilidad de viajar con la máxima seguridad, trazabilidad 24/7 y un confort incomparable en todo el territorio colombiano.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Link
                            href="#cotizar"
                            className="w-full sm:w-auto flex items-center justify-center gap-2 bg-accent hover:bg-accent-hover text-white px-8 py-4 rounded-full font-semibold transition-all shadow-lg hover:shadow-accent/30 text-lg group"
                        >
                            Cotizar Servicio
                            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                        </Link>

                        <a
                            href="https://wa.me/573024060101"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full sm:w-auto flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white border border-white/20 px-8 py-4 rounded-full font-semibold transition-all backdrop-blur-sm text-lg"
                        >
                            <MessageCircle size={20} />
                            Contacto Rápido
                        </a>
                    </div>
                </motion.div>

                {/* Scroll indicator */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1, duration: 1 }}
                    className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center"
                >
                    <span className="text-gray-400 text-xs uppercase tracking-widest mb-2">Descubra Más</span>
                    <div className="w-[1px] h-12 bg-gray-600 relative overflow-hidden">
                        <motion.div
                            animate={{ y: [0, 48] }}
                            transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
                            className="absolute top-0 left-0 w-full h-1/2 bg-accent"
                        />
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
