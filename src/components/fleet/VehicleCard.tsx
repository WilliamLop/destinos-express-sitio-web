"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Users, Settings2, Briefcase, ShieldCheck, Wifi, Calendar, X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export interface VehicleFeature {
    icon: React.ReactNode;
    title: string;
    description: string;
}

export interface Vehicle {
    id: string;
    name: string;
    subtitle: string;
    year: string;
    images: string[];
    features: VehicleFeature[];
}

interface VehicleCardProps {
    vehicle: Vehicle;
    index: number;
}

export function VehicleCard({ vehicle, index }: VehicleCardProps) {
    const [activeImage, setActiveImage] = useState(0);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const maxThumbnails = 4;
    const thumbnails = vehicle.images.slice(0, maxThumbnails);
    const remainingPhotos = vehicle.images.length - maxThumbnails;

    return (
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100 mb-16">
            <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 p-6 md:p-8 lg:p-10">
                {/* Left Side: Gallery */}
                <div className="w-full lg:w-1/2 flex flex-col gap-4">
                    {/* Main Image */}
                    <div className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden bg-gray-100 mb-2">
                        <div className="absolute top-4 left-4 z-10 bg-primary text-accent text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wider">
                            Modelo {vehicle.year}
                        </div>
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeImage}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.3 }}
                                className="absolute inset-0"
                            >
                                <img
                                    src={vehicle.images[activeImage]}
                                    alt={`${vehicle.name} vista ${activeImage + 1}`}
                                    className="w-full h-full object-cover"
                                />
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    {/* Thumbnails */}
                    <div className="grid grid-cols-4 gap-3 md:gap-4">
                        {thumbnails.map((img, idx) => {
                            const isLastThumbnail = idx === maxThumbnails - 1;
                            const hasMorePhotos = remainingPhotos > 0;

                            return (
                                <div
                                    key={idx}
                                    className={`relative aspect-square rounded-xl overflow-hidden cursor-pointer border-2 transition-all ${activeImage === idx ? "border-accent shadow-md" : "border-transparent hover:border-gray-300"
                                        }`}
                                    onMouseEnter={() => {
                                        if (!isLastThumbnail || !hasMorePhotos) {
                                            setActiveImage(idx);
                                        }
                                    }}
                                    onClick={() => {
                                        if (isLastThumbnail && hasMorePhotos) {
                                            setIsModalOpen(true);
                                        } else {
                                            setActiveImage(idx);
                                        }
                                    }}
                                >
                                    <img
                                        src={img}
                                        alt={`Miniatura ${idx + 1}`}
                                        className="w-full h-full object-cover"
                                    />
                                    {isLastThumbnail && hasMorePhotos && (
                                        <div className="absolute inset-0 bg-black/60 flex flex-col items-center justify-center text-white transition-colors hover:bg-black/70">
                                            <span className="text-sm md:text-base font-bold">+{remainingPhotos + 1}</span>
                                            <span className="text-xs md:text-sm">Fotos</span>
                                        </div>
                                    )}
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* Right Side: Details */}
                <div className="w-full lg:w-1/2 flex flex-col justify-center">
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                    >
                        <h2 className="text-3xl lg:text-4xl font-bold font-heading text-primary mb-2">
                            {vehicle.name}
                        </h2>
                        <div className="flex items-center text-accent mb-8">
                            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M14.707 9.707a1 1 0 00-1.414 0L10 13.086 6.707 9.707a1 1 0 00-1.414 1.414l4 4a1 1 0 001.414 0l4-4a1 1 0 000-1.414z" clipRule="evenodd" />
                            </svg>
                            <p className="text-lg font-medium">{vehicle.subtitle}</p>
                        </div>

                        <div className="space-y-4 mb-10">
                            {vehicle.features.map((feature, idx) => (
                                <div key={idx} className="flex items-center bg-gray-50 p-4 rounded-2xl border border-gray-100 hover:border-gray-200 transition-colors">
                                    <div className="w-12 h-12 flex items-center justify-center bg-white rounded-xl shadow-sm border border-gray-100 text-primary mr-4 shrink-0">
                                        {feature.icon}
                                    </div>
                                    <div>
                                        <p className="text-xs uppercase tracking-wider text-gray-500 font-semibold mb-0.5">
                                            {feature.title}
                                        </p>
                                        <p className="text-primary font-medium">
                                            {feature.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <Link
                            href={`/#cotizar?service=Transporte Especial&vehicle=${encodeURIComponent(vehicle.name)}`}
                            className="w-full sm:w-auto inline-flex items-center justify-center bg-accent hover:bg-accent-hover text-primary font-bold py-4 px-8 rounded-xl transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
                        >
                            <Calendar className="w-5 h-5 mr-2" />
                            Reservar este vehículo
                        </Link>
                    </motion.div>
                </div>
            </div>

            {/* Gallery Modal */}
            <AnimatePresence>
                {isModalOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-4 md:p-8"
                    >
                        <button
                            onClick={() => setIsModalOpen(false)}
                            className="absolute top-4 right-4 md:top-8 md:right-8 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors z-50"
                        >
                            <X className="w-8 h-8" />
                        </button>

                        <div className="w-full max-w-6xl max-h-[90vh] overflow-y-auto no-scrollbar rounded-2xl">
                            <h3 className="text-2xl font-bold text-white mb-6 font-heading text-center">
                                Galería de fotos - {vehicle.name}
                            </h3>
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                                {vehicle.images.map((img, idx) => (
                                    <motion.div
                                        key={idx}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: idx * 0.05 }}
                                        className="relative aspect-[4/3] rounded-xl overflow-hidden"
                                    >
                                        <img
                                            src={img}
                                            alt={`Foto ${idx + 1}`}
                                            className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                                        />
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
