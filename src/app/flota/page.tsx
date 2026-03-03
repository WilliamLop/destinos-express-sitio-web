"use client";

import { Users, Settings2, Briefcase, ShieldCheck, Wifi } from "lucide-react";
import { VehicleCard, type Vehicle } from "@/components/fleet/VehicleCard";

const vehicles: Vehicle[] = [
    {
        id: "renault-duster",
        name: "Renault Duster 4x4",
        subtitle: "Robustez y Versatilidad Todoterreno",
        year: "2024",
        images: [
            "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?q=80&w=2670&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?q=80&w=2670&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1550355291-bbee04a92027?q=80&w=2636&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1627916949980-60b764c63283?q=80&w=2670&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1601362840469-51e4d8d58785?q=80&w=2670&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1542282088-fe8426682b8f?q=80&w=2574&auto=format&fit=crop"
        ],
        features: [
            {
                icon: <Users className="w-6 h-6" />,
                title: "Pasajeros",
                description: "4 Adultos + Conductor"
            },
            {
                icon: <Settings2 className="w-6 h-6" />,
                title: "Tracción",
                description: "4x4 Integral Inteligente"
            },
            {
                icon: <Briefcase className="w-6 h-6" />,
                title: "Equipaje",
                description: "475 Litros de Capacidad"
            },
            {
                icon: <ShieldCheck className="w-6 h-6" />,
                title: "Seguridad",
                description: "Airbags + ABS + Control Estabilidad"
            },
            {
                icon: <Wifi className="w-6 h-6" />,
                title: "Conectividad",
                description: "Wi-Fi abordo + Navegador GPS"
            }
        ]
    },
    {
        id: "sedan-ejecutivo",
        name: "Sedán Ejecutivo",
        subtitle: "Confort y Elegancia Corporativa",
        year: "2024",
        images: [
            "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?q=80&w=2574&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1616885375001-f92e21b8c199?q=80&w=2624&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1533106497176-45ae19e68ba2?q=80&w=2670&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1502877338593-d29a101f8208?q=80&w=2670&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1583121274602-3e2820c69888?q=80&w=2670&auto=format&fit=crop"
        ],
        features: [
            {
                icon: <Users className="w-6 h-6" />,
                title: "Pasajeros",
                description: "3 Adultos + Conductor"
            },
            {
                icon: <Settings2 className="w-6 h-6" />,
                title: "Transmisión",
                description: "Automática"
            },
            {
                icon: <Briefcase className="w-6 h-6" />,
                title: "Equipaje",
                description: "2 Maletas Grandes"
            },
            {
                icon: <ShieldCheck className="w-6 h-6" />,
                title: "Seguridad",
                description: "6 Airbags + Frenos ABS"
            },
            {
                icon: <Wifi className="w-6 h-6" />,
                title: "Conectividad",
                description: "Bluetooth + USB"
            }
        ]
    },
    {
        id: "van-pasajeros",
        name: "Van de Pasajeros",
        subtitle: "Amplitud y Comodidad para Grupos",
        year: "2024",
        images: [
            "https://images.unsplash.com/photo-1559416523-140ddc3d238c?q=80&w=2669&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1516733968668-dbdce39c4651?q=80&w=2676&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1518306057088-7e53f31eff61?q=80&w=2669&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=2621&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1494905998402-395d579af36f?q=80&w=2670&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1502877338593-d29a101f8208?q=80&w=2670&auto=format&fit=crop"
        ],
        features: [
            {
                icon: <Users className="w-6 h-6" />,
                title: "Pasajeros",
                description: "14 a 19 Adultos"
            },
            {
                icon: <Settings2 className="w-6 h-6" />,
                title: "Confort",
                description: "Asientos Reclinables + A/C"
            },
            {
                icon: <Briefcase className="w-6 h-6" />,
                title: "Equipaje",
                description: "Bodega Amplia"
            },
            {
                icon: <ShieldCheck className="w-6 h-6" />,
                title: "Seguridad",
                description: "Monitoreo GPS 24/7"
            },
            {
                icon: <Wifi className="w-6 h-6" />,
                title: "Conectividad",
                description: "Pantallas + Sonido Envolvente"
            }
        ]
    }
];

export default function FlotaPage() {
    return (
        <main className="min-h-screen pt-24 bg-white">
            {/* Page Header */}
            <div className="bg-primary text-white py-20 relative overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img
                        src="https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?q=80&w=2670&auto=format&fit=crop"
                        alt="Flota Destinos Express"
                        className="w-full h-full object-cover opacity-20"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-primary to-primary/80" />
                </div>
                <div className="container mx-auto px-4 md:px-6 relative z-10">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading mb-6 tracking-tight">
                        Nuestra <span className="text-accent">Flota</span>
                    </h1>
                    <p className="text-lg md:text-xl max-w-2xl text-white/90 leading-relaxed text-balance">
                        Contamos con vehículos de último modelo, rigurosamente mantenidos y equipados con la mejor tecnología para garantizar que tu traslado sea cómodo, seguro y puntual.
                    </p>
                </div>
            </div>

            {/* Vehículos List */}
            <div className="container mx-auto px-4 md:px-6 py-16">
                <div className="max-w-6xl mx-auto">
                    {vehicles.map((vehicle, index) => (
                        <VehicleCard key={vehicle.id} vehicle={vehicle} index={index} />
                    ))}
                </div>
            </div>
        </main>
    );
}
