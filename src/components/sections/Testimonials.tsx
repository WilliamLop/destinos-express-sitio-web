"use client";

import React from "react";
import { motion } from "framer-motion";

const testimonialsData = [
    {
        name: "Carlos Méndez",
        company: "Empresa de Servicios Financieros",
        role: "Gerente Administrativo",
        service: "Transporte Empresarial",
        text: "Destinos Express se convirtió en nuestro proveedor principal por su puntualidad, respaldo operativo y claridad en la facturación. Es un aliado confiable para nuestra operación diaria."
    },
    {
        name: "Laura Gómez",
        company: "Consultora Independiente",
        role: "Consultora Senior",
        service: "Traslados Aeropuerto",
        text: "Uso Destinos Express cada vez que viajo por trabajo. Siempre llegan a tiempo, los vehículos están en excelente estado y el servicio es muy profesional."
    },
    {
        name: "Andrés Pardo",
        company: "Productora de Eventos",
        role: "Director de Operaciones",
        service: "Transporte para Eventos",
        text: "Hemos trabajado con Destinos Express en varios eventos corporativos y la logística siempre ha sido impecable. Responden rápido y solucionan cualquier novedad."
    },
    {
        name: "María Fernanda Ruiz",
        company: "Multinacional de Tecnología",
        role: "HR Manager",
        service: "Transporte Empresarial",
        text: "Lo que más valoramos es la seriedad y el cumplimiento. Destinos Express entiende los estándares corporativos y los cumple sin excusas."
    },
    {
        name: "Jorge Salazar",
        company: "Firma de Abogados",
        role: "Socio",
        service: "Transporte Ejecutivo",
        text: "Nuestros clientes internacionales siempre destacan el servicio. Conductores profesionales, buena presentación y total confidencialidad."
    },
    {
        name: "Natalia Cárdenas",
        company: "Agencia de Turismo",
        role: "Coordinadora de Operaciones",
        service: "Transporte Turístico",
        text: "Destinos Express nos permite operar con tranquilidad. Cumplen rutas, horarios y ofrecen una experiencia segura para los turistas."
    },
    {
        name: "Felipe Ramírez",
        company: "Empresa del Sector Salud",
        role: "Coordinador Logístico",
        service: "Transporte Médico",
        text: "Necesitábamos un proveedor serio y responsable. Destinos Express respondió con orden, puntualidad y muy buena atención."
    },
    {
        name: "Diana Torres",
        company: "Empresa de Consultoría",
        role: "Directora Comercial",
        service: "Traslados Corporativos",
        text: "El servicio es consistente, algo difícil de encontrar. Sabemos que podemos contar con ellos incluso en servicios de última hora."
    },
    {
        name: "Ricardo López",
        company: "Holding Empresarial",
        role: "Administrador",
        service: "Transporte Ejecutivo",
        text: "Trabajamos con varios proveedores, pero Destinos Express es el único que mantiene el mismo nivel de calidad en cada servicio."
    },
    {
        name: "Paula Herrera",
        company: "Organización Internacional",
        role: "Project Manager",
        service: "Transporte Empresarial y Aeropuerto",
        text: "La coordinación es clara y el servicio es confiable. Para nosotros es clave contar con un proveedor que entienda la importancia del tiempo."
    }
].map((t) => ({
    ...t,
    image: `https://ui-avatars.com/api/?name=${encodeURIComponent(t.name)}&background=random&color=fff&size=100`,
}));

const TestimonialsColumn = (props: {
    className?: string;
    testimonials: typeof testimonialsData;
    duration?: number;
}) => {
    return (
        <div className={props.className}>
            <motion.div
                animate={{
                    translateY: "-50%",
                }}
                transition={{
                    duration: props.duration || 10,
                    repeat: Infinity,
                    ease: "linear",
                    repeatType: "loop",
                }}
                className="flex flex-col gap-6 pb-6 bg-transparent"
            >
                {[
                    ...new Array(2).fill(0).map((_, index) => (
                        <React.Fragment key={index}>
                            {props.testimonials.map(({ text, image, name, role, company }, i) => (
                                <div
                                    className="p-8 rounded-3xl border border-gray-100 bg-white hover:border-primary/20 hover:shadow-primary/5 shadow-sm transition-all duration-300 w-full flex flex-col gap-5 relative overflow-hidden group"
                                    key={i}
                                >
                                    <div className="absolute top-0 left-0 w-1 h-full bg-accent/0 group-hover:bg-accent transition-colors duration-300 rounded-l-3xl"></div>
                                    <div className="text-gray-700 leading-relaxed italic z-10 relative">"{text}"</div>
                                    <div className="flex items-center gap-4 mt-2">
                                        <img
                                            width={48}
                                            height={48}
                                            src={image}
                                            alt={name}
                                            className="h-12 w-12 rounded-full border border-gray-100 bg-gray-50 flex-shrink-0"
                                        />
                                        <div className="flex flex-col">
                                            <div className="font-bold tracking-tight text-primary leading-tight">{name}</div>
                                            <div className="text-sm tracking-tight text-gray-500">{role} - {company}</div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </React.Fragment>
                    )),
                ]}
            </motion.div>
        </div>
    );
};

export function Testimonials() {
    // Diviendo los testimonios en 3 columnas
    const col1 = testimonialsData.slice(0, 4);
    const col2 = testimonialsData.slice(4, 7);
    const col3 = testimonialsData.slice(7, 10);

    return (
        <section className="py-24 bg-gray-50 border-t border-gray-100 relative overflow-hidden">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-5xl font-bold font-heading text-primary mb-6"
                    >
                        Nuestros <span className="text-accent">Clientes</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-gray-600 text-lg md:text-xl"
                    >
                        La satisfacción de quienes confían en nosotros es nuestro mejor respaldo
                    </motion.p>
                </div>

                {/* Scroll infinito de testimonios */}
                <div className="flex justify-center gap-6 h-[600px] overflow-hidden relative w-full mb-16">
                    {/* Fades mask arriba y abajo */}
                    <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-gray-50 to-transparent z-10 pointer-events-none"></div>
                    <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-gray-50 to-transparent z-10 pointer-events-none"></div>

                    <TestimonialsColumn
                        testimonials={col1}
                        duration={35}
                        className="w-full md:w-[380px] flex-shrink-0"
                    />
                    <TestimonialsColumn
                        testimonials={col2}
                        duration={45}
                        className="hidden md:block w-[380px] flex-shrink-0"
                    />
                    <TestimonialsColumn
                        testimonials={col3}
                        duration={40}
                        className="hidden lg:block w-[380px] flex-shrink-0"
                    />
                </div>

                {/* B2B Logos Placeholder */}
                <div className="border-t border-gray-200/60 pt-16">
                    <p className="text-center text-sm text-gray-400 font-semibold tracking-wider uppercase mb-8">
                        Empresas que confían en nosotros
                    </p>
                    <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
                        {/* These would ideally be real SVG logos of partner companies */}
                        <div className="text-xl font-bold text-gray-800 font-heading">COMPANY LOGO</div>
                        <div className="text-xl font-bold text-gray-800 font-heading">CORPORATION</div>
                        <div className="text-xl font-bold text-gray-800 font-heading">ENTERPRISE LTDA</div>
                        <div className="text-xl font-bold text-gray-800 font-heading">GRUPO INVERSOR</div>
                        <div className="text-xl font-bold text-gray-800 font-heading">BRAND INC</div>
                    </div>
                </div>
            </div>
        </section>
    );
}
