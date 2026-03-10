"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const WHATSAPP_NUMBER = "573024060101";
const WHATSAPP_MESSAGE = encodeURIComponent(
  "Hola! Quiero reservar un servicio de transporte ejecutivo. ¿Me pueden ayudar?"
);

export function WhatsAppButton() {
  const [showTooltip, setShowTooltip] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowTooltip(true);
      setHasAnimated(true);
    }, 2500);

    const hideTimer = setTimeout(() => {
      setShowTooltip(false);
    }, 8000);

    return () => {
      clearTimeout(timer);
      clearTimeout(hideTimer);
    };
  }, []);

  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {/* Tooltip */}
      <div
        className={`
          relative max-w-[240px] transition-all duration-500 ease-out
          ${showTooltip
            ? "opacity-100 translate-y-0 scale-100"
            : "opacity-0 translate-y-2 scale-95 pointer-events-none"
          }
        `}
      >
        {/* Alert card */}
        <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 p-4 relative">
          {/* Pulse ring on card */}
          <div className="absolute -top-1 -right-1 w-3 h-3">
            <span className="absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75 animate-ping" />
            <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500" />
          </div>

          {/* Status badge */}
          <div className="flex items-center gap-1.5 mb-2">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <span className="text-xs font-semibold text-green-600 uppercase tracking-wide">
              En línea ahora
            </span>
          </div>

          <p className="text-sm font-semibold text-gray-800 leading-snug mb-3">
            ¿Necesitas transporte seguro hoy?
          </p>
          <p className="text-xs text-gray-500 leading-relaxed mb-3">
            Reserva en minutos. Atención inmediata 24/7.
          </p>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="
              block w-full text-center text-xs font-bold text-white
              bg-[#25D366] hover:bg-[#20bb5a]
              rounded-xl py-2 px-3 transition-colors duration-200
              shadow-sm
            "
          >
            Chatear ahora →
          </a>

          {/* Triangle pointer */}
          <div
            className="
              absolute -bottom-2 right-6
              w-0 h-0
              border-l-[8px] border-l-transparent
              border-r-[8px] border-r-transparent
              border-t-[8px] border-t-white
              drop-shadow-sm
            "
          />
        </div>
      </div>

      {/* Main button */}
      <div className="relative">
        {/* Ripple rings */}
        <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-30 animate-ping" />
        <span className="absolute inset-1 rounded-full bg-[#25D366] opacity-20 animate-ping [animation-delay:0.3s]" />

        {/* Active dot */}
        <span className="absolute top-0 right-0 z-10 flex h-4 w-4">
          <span className="absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75 animate-ping" />
          <span className="relative inline-flex rounded-full h-4 w-4 bg-green-500 border-2 border-white shadow" />
        </span>

        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          onMouseEnter={() => setShowTooltip(true)}
          onMouseLeave={() => setShowTooltip(false)}
          aria-label="Contactar por WhatsApp"
          className="
            relative flex items-center justify-center
            w-16 h-16 rounded-full
            bg-[#25D366] hover:bg-[#20bb5a]
            shadow-[0_8px_30px_rgba(37,211,102,0.45)]
            hover:shadow-[0_8px_40px_rgba(37,211,102,0.65)]
            transition-all duration-300 hover:scale-110 active:scale-95
          "
        >
          <Image
            src="/icons/whatsapp-icon.png"
            alt="WhatsApp"
            width={36}
            height={36}
            className="object-contain drop-shadow-sm"
          />
        </a>
      </div>
    </div>
  );
}
