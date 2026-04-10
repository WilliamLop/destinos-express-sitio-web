"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Phone } from "lucide-react";

export function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const pathname = usePathname();
    const quoteHref = pathname === "/" || pathname === "/servicios" || pathname === "/flota"
        ? "#cotizar"
        : "/#cotizar";

    const navLinks = [
        { href: "/", label: "Inicio" },
        { href: "/servicios", label: "Servicios" },
        { href: "/flota", label: "Flota" },
        { href: "/trabaja-con-nosotros", label: "Trabaja con Nosotros" },
    ];

    const isActive = (href: string) =>
        href === "/" ? pathname === "/" : pathname.startsWith(href);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 w-full bg-white/95 backdrop-blur-md ${isScrolled
                ? "shadow-sm py-3"
                : "py-5"
                }`}
        >
            <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
                <Link href="/" className="flex items-center">
                    <img src="/icons/logohero.svg" alt="Destinos Express" className="h-10 w-auto" />
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-8">
                    {navLinks.map(({ href, label }) => (
                        <Link
                            key={href}
                            href={href}
                            className={`text-sm font-medium transition-colors hover:text-accent ${
                                isActive(href)
                                    ? "text-accent font-semibold border-b-2 border-accent pb-0.5"
                                    : "text-gray-700"
                            }`}
                        >
                            {label}
                        </Link>
                    ))}
                </nav>

                {/* CTA & Contact*/}
                <div className="hidden md:flex items-center gap-4">
                    <a
                        href="https://wa.me/573024060101"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`flex items-center gap-2 text-sm font-semibold transition-colors text-primary hover:text-accent`}
                    >
                        <Phone size={18} />
                        +57 302 406 0101
                    </a>
                    <Link
                        href={quoteHref}
                        className="bg-accent hover:bg-accent-hover text-white px-5 py-2.5 rounded-full font-semibold transition-all shadow-md hover:shadow-lg text-sm"
                    >
                        Cotizar Servicio
                    </Link>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden p-2 text-primary bg-white/80 rounded-md backdrop-blur-sm"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Nav */}
            {isMobileMenuOpen && (
                <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-xl border-t border-gray-100 flex flex-col py-4 px-6 gap-4">
                    {navLinks.map(({ href, label }) => (
                        <Link
                            key={href}
                            href={href}
                            className={`text-lg font-medium ${
                                isActive(href) ? "text-accent font-semibold" : "text-gray-800"
                            }`}
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            {label}
                        </Link>
                    ))}
                    <div className="h-px w-full bg-gray-100 my-2" />
                    <Link
                        href={quoteHref}
                        className="bg-accent text-white text-center py-3 rounded-xl font-semibold w-full"
                        onClick={() => setIsMobileMenuOpen(false)}
                    >
                        Cotizar Servicio
                    </Link>
                </div>
            )}
        </header>
    );
}
