"use client";

import { Services } from "@/components/sections/Services";
import { FAQ } from "@/components/sections/FAQ";

export default function ServiciosPage() {
    return (
        <main className="min-h-screen pt-24 bg-gray-50">
            {/* Page Header */}
            <div className="bg-primary text-white py-20 relative overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img
                        src="https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?q=80&w=2670&auto=format&fit=crop"
                        alt="Servicios Destinos Express"
                        className="w-full h-full object-cover opacity-20"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-primary to-primary/80" />
                </div>
                <div className="container mx-auto px-4 md:px-6 relative z-10">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading mb-6 tracking-tight">
                        Nuestros <span className="text-accent">Servicios</span>
                    </h1>
                    <p className="text-lg md:text-xl max-w-2xl text-white/90 leading-relaxed text-balance">
                        Conoce todas las soluciones de transporte que tenemos diseñadas para tu empresa, tus viajes turísticos y tus eventos especiales, siempre con la máxima calidad y seguridad.
                    </p>
                </div>
            </div>

            <Services />
            <FAQ />
        </main>
    );
}
