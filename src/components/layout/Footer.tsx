import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, ShieldCheck, CreditCard, Truck, Award, HardHat } from "lucide-react";

export function Footer() {
    return (
        <footer className="bg-primary text-white pt-20 pb-8">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    {/* Brand */}
                    <div className="space-y-6 flex flex-col items-center md:items-start ">
                        <Link href="/" className="inline-block">
                            <Image
                                src="/icons/logoWhitee.png"
                                alt="Destinos Express"
                                width={140}
                                height={44}
                                className="object-contain w-[110px] h-auto "
                            />
                        </Link>
                        <p className="text-gray-400 text-sm leading-relaxed text-center md:text-start">
                            Transporte especial, ejecutivo y turístico con los más altos estándares de calidad, seguridad y confort en toda Colombia.
                        </p>
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center" title="Mintransporte habilitado">
                                <Truck size={20} className="text-accent" />
                            </div>
                            <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center" title="Supertransporte certificado">
                                <Award size={20} className="text-accent" />
                            </div>
                            <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center" title="SG-SST implementado">
                                <HardHat size={20} className="text-accent" />
                            </div>
                        </div>
                    </div>

                    {/* Contact */}
                    <div className="flex flex-col items-center md:items-start">
                        <h4 className="text-lg font-semibold font-heading mb-6 border-b border-gray-800 pb-2 inline-block">Contáctanos</h4>
                        <ul className="space-y-4 text-center md:text-start  w-auto md:w-full">
                            <li className="flex items-center md:items-start gap-3">
                                <Phone size={20} className="text-accent shrink-0 mt-0.5" />
                                <div className="w-full text-center md:text-start">
                                    <a href="https://wa.me/573024060101" className="block text-gray-300 hover:text-white transition-colors">+57 302 406 0101</a>
                                    <p className="text-sm text-gray-500">Línea WhatsApp 24/7</p>
                                </div>
                            </li>
                            <li className="flex items-start gap-3">
                                <Mail size={20} className="text-accent shrink-0 mt-0.5" />
                                <a href="mailto:comercial@destinosexpress.com" className="text-gray-300  hover:text-white transition-colors">comercial@destinosexpress.com</a>
                            </li>
                            <li className="flex items-start gap-3">
                                <MapPin size={20} className="text-accent shrink-0 mt-0.5" />
                                <span className="text-gray-300  w-full text-center md:text-start">Bogotá D.C. & Medellín<br />Colombia</span>
                            </li>
                        </ul>
                    </div>

                    {/* Links */}
                    <div className="flex flex-col items-center md:items-start">
                        <h4 className="text-lg font-semibold font-heading mb-6 border-b border-gray-800 pb-2 inline-block">Navegación</h4>
                        <ul className="space-y-3 text-center md:text-start">
                            <li><Link href="/" className="text-gray-400 hover:text-accent transition-colors">Inicio</Link></li>
                            <li><Link href="/servicios" className="text-gray-400 hover:text-accent transition-colors">Servicios</Link></li>
                            <li><Link href="/flota" className="text-gray-400 hover:text-accent transition-colors">Flota</Link></li>
                            <li><Link href="/trabaja-con-nosotros" className="text-gray-400 hover:text-accent transition-colors">Trabaja con Nosotros</Link></li>
                        </ul>
                    </div>

                    {/* Trust */}
                    <div className="flex flex-col items-center md:items-start">
                        <h4 className="text-lg font-semibold font-heading mb-6 border-b border-gray-800 pb-2 inline-block">Pago Seguro</h4>
                        <p className="text-gray-400 text-sm mb-4 text-center md:text-start">Múltiples medios de pago a través de plataformas seguras y encriptadas.</p>
                        <div className="flex gap-2 mb-6">
                            <div className="bg-white/10 p-2 rounded"><CreditCard size={24} /></div>
                            <div className="bg-white/10 px-3 py-2 rounded text-xs font-bold leading-none flex items-center">PSE</div>
                            <div className="bg-white/10 px-3 py-2 rounded text-xs font-bold leading-none flex items-center">VISA</div>
                        </div>
                        <div className="flex items-center gap-2 text-gray-400 text-sm">
                            <ShieldCheck size={16} className="text-green-500" />
                            <span>Sitio Seguro SSL</span>
                        </div>
                    </div>
                </div>

                {/* Bottom */}
                <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-500">
                    <p>© {new Date().getFullYear()} Destinos Express S.A.S. Todos los derechos reservados.</p>
                    <div className="flex gap-4">
                        <Link href="/politica-privacidad" className="hover:text-white transition-colors">Política de Privacidad</Link>
                        <Link href="/terminos" className="hover:text-white transition-colors">Términos y Condiciones</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
