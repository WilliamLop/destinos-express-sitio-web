import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // Rutas WordPress antiguas → nuevas
      { source: "/index.php/servicios", destination: "/servicios", permanent: true },
      { source: "/index.php/contacto", destination: "/#cotizar", permanent: true },
      { source: "/index.php/transporte-empresarial", destination: "/servicios", permanent: true },
      { source: "/index.php/transporte-especial", destination: "/servicios", permanent: true },
      { source: "/index.php/trabaja-con-nosotros", destination: "/trabaja-con-nosotros", permanent: true },
      { source: "/index.php/inicio", destination: "/", permanent: true },
      { source: "/index.php/:path*", destination: "/", permanent: true }, // catch-all para cualquier otra ruta WordPress
    ];
  },
};

export default nextConfig;
