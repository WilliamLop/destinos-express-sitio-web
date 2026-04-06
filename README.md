# Destinos Express — Sitio Web Corporativo

Sitio web oficial de **Destinos Express**, empresa de transporte especial y ejecutivo en Colombia. Desarrollado con Next.js 16, ofrece información de servicios, catálogo de flota y un formulario de cotización integrado.

## Tecnologías

- **Next.js 16** — App Router, SSR, optimización de imágenes
- **TypeScript** — tipado estático en todo el proyecto
- **Tailwind CSS** — estilos utilitarios
- **Framer Motion** — animaciones y transiciones
- **React Hook Form + Zod** — formulario de cotización con validación
- **Resend** — envío de correos transaccionales desde `/api/cotizar`
- **Lucide React** — iconografía

## Páginas

| Ruta | Descripción |
|------|-------------|
| `/` | Home: hero, servicios, flota destacada, mapa, testimonios, cotizador, FAQ |
| `/servicios` | Detalle de todos los servicios ofrecidos + cotizador |
| `/flota` | Catálogo completo de vehículos con galería + cotizador |
| `/nosotros` | Historia y valores de la empresa |

## Funcionalidad destacada

### Cotizador (`QuoteWizard`)
Formulario de 3 pasos que soporta los 3 tipos de trayecto:
- **Sencillo** — origen, destino, fecha y hora
- **Ida y Vuelta** — agrega campos de fecha y hora de vuelta
- **A disposición** — reemplaza destino por duración estimada

Al enviar, dispara dos acciones en paralelo:
1. Correo HTML a `ventas@destinosexpress.com` vía Resend
2. Mensaje pre-formateado para WhatsApp (bot de cotización en Telegram)

### Preselección por URL
Desde cualquier página, un botón puede llevar al cotizador con un vehículo o servicio preseleccionado:
```
/flota?vehiculo=Van Sprinter#cotizar
/?servicio=Transporte Ejecutivo#cotizar
```

## Desarrollo local

```bash
npm install
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000).

### Variables de entorno requeridas

Crea un archivo `.env.local` con:

```env
RESEND_API_KEY=re_xxxxxxxxxxxx
```

## Estructura del proyecto

```
src/
├── app/
│   ├── api/cotizar/       # Endpoint de cotización (email + validación)
│   ├── flota/             # Página de flota
│   ├── servicios/         # Página de servicios
│   ├── nosotros/          # Página institucional
│   └── page.tsx           # Home
├── components/
│   ├── form/              # QuoteWizard
│   ├── fleet/             # VehicleCard
│   ├── layout/            # Navbar, Footer
│   ├── sections/          # Hero, Services, Fleet, Map, Testimonials, FAQ
│   └── ui/                # Componentes reutilizables
```

## Deploy

El proyecto se despliega en **Vercel**. Cada push a `main` activa un deploy automático.

```bash
npm run build   # Verificar build antes de push
```
