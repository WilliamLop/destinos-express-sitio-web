# Destinos Express - Brainstorming Notes

## General Info
- Company: Destinos Express S.A.S. - Transporte empresarial, ejecutivo y turístico en Colombia.
- Goal: Corporate website to generate trust, show services/fleet, capture leads (forms/WhatsApp). No user auth/dashboard.

## Design Variables
- Typography: Poppins (body), Montserrat (headings).
- Palette: 
  - Primary: Black (#0D0D0D)
  - Accent: Gold Yellow (#FCA311)
  - Background: White (#FFFFFF)
  - Secondary: Warm Grey (#F5F5F5)
- Vibe: Corporate, modern, agile, reliable, premium.

## Landing Page Strategy (AIDA / Funnel)
- Formula: AIDA (Attention - Interest - Desire - Action) combined with a strong TOFU (Top of Funnel) to MOFU (Middle of Funnel) transition.
- Structure:
  1. Hero (Attention / TOFU)
  2. ¿Por qué elegirnos? (Interest)
  3. Servicios (Interest / Desire)
  4. Flota (Desire)
  5. Testimonios (Desire / Trust)
  6. Cobertura (Trust - MapPin animation)
  7. Formulario (Action / MOFU)
  8. FAQ (Objection Handling)
  9. Footer (Trust badges & Secondary links)

## Services
1. Empresarial (Convenios, facturación mensual, rutas recurrentes)
2. Aeropuerto 24/7 (Destacado "Popular" - El Dorado y nacionales)
3. Turístico (Familias, grupos, asistencia integral)
4. Eventos (Congresos, ferias, bodas)
5. Ejecutivo (Puerta a puerta)
6. Senior (Trazabilidad, seguridad especial)

## Fleet
- Duster 4x4 (4 pax, confort ejecutivo)
- Minivan (6-8 pax, eficiencia)
- Van (12-16 pax, más demandada)
- Bus (20-45 pax, grandes grupos)

## Additional Pages
- Trabaja con Nosotros: Info for Drivers and Owners.

## Coverage
- Cities: Bogotá, Medellín, Cali, Bucaramanga, Ibagué, Neiva, Armenia, Pereira, Cartagena, Barranquilla, Santa Marta, Manizales, Tunja, Villavicencio, Pasto, Cúcuta.
- Rural zones with special conditions.
- Visual: Large MapPin with animated pings, "Cobertura 24/7".

## Lead Capture Form Logic
- Complex form fields (Name, Company, Email, Phone, Origin, Destination, Date, Time, Pax, Bags, Vehicle Type, Trip Type, Notes).
- UI: 3-state progress indicator (initial, calculating, complete).
- UI: Selected service banner with icon and "Change" button.
- Action 1 (WhatsApp): Requires origin, dest, date to build pre-formatted message.
- Action 2 (Email): Full validation, save to `leads` table, invoke `send-quote-email` edge function.

## Footer & Trust
- Badges: Sup. Transporte, MinTransporte, SG-SST.
- Security: SSL, Passenger Insurance, Secure Payment.
