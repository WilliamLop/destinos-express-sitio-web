# Diseño Estratégico: Destinos Express S.A.S.

## 1. Visión y Posicionamiento
Sitio web corporativo diseñado bajo el modelo de embudo de ventas (AIDA). El objetivo principal es proyectar una imagen premium, corporativa, ágil y de alta confiabilidad en el sector del transporte especial en Colombia. No cuenta con sistema de usuarios/login; está enfocado al 100% en la captación de leads (B2B y B2C de alto valor) mediante cotizaciones detalladas y contacto por WhatsApp.

## 2. Identidad Visual
- **Colores:** 
  - Primario: Negro (`#0D0D0D`) - Elegancia.
  - Acento: Amarillo Dorado (`#FCA311`) - Call to action, urgencia y servicio premium.
  - Fondo: Blanco (`#FFFFFF`) - Limpieza.
  - Secundario: Gris Cálido (`#F5F5F5`) - Fondos de secciones alternas.
- **Tipografías:**
  - Títulos (Headings): **Montserrat** (Fuerte, geométrica, corporativa).
  - Cuerpo de texto (Body): **Poppins** (Legibilidad, modernidad).

## 3. Arquitectura de la Información y Embudo AIDA (Página Principal)

La página principal funcionará como una Landing Page de alta conversión:

1. **Hero Section (Attention - TOFU):**
   - Título de alto impacto centrado en la propuesta de valor (Transporte Especial, Ejecutivo y Turístico).
   - Fondo con video/imagen premium de la flota en acción o de la ciudad urbana.
   - Dos Call to Actions (CTAs): "Cotizar Servicio" (Lleva al formulario) y "Contacto Rápido" (Lleva a WhatsApp).

2. **¿Por qué elegirnos? (Interest):**
   - 3 a 4 pilares: Seguridad SG-SST, Conductores Bilingües/Capacitados, Trazabilidad 24/7, Confort Premium.

3. **Nuestros Servicios (Interest/Desire):**
   - Tarjetas (Cards) interactivas detallando cada especialidad:
     - *Empresarial* (Convenios, facturación, rutas).
     - *Aeropuerto 24/7* (**Badge "Popular"**, traslados El Dorado/Nacionales).
     - *Turístico* (Grupos, familias, asistencia).
     - *Eventos* (Ferias, congresos, bodas).
     - *Ejecutivo* (Servicio puerta a puerta VIP).
     - *Senior* (Trazabilidad y seguridad especial).

4. **Nuestra Flota (Desire):**
   - Carrusel o Grid elegante mostrando el vehículo, capacidad técnica y su mejor uso.
     - *Duster 4x4* (4 pax | Confort ejecutivo).
     - *Minivan* (6-8 pax | Eficiencia).
     - *Van* (12-16 pax | **Badge "Más Demandada"**).
     - *Bus* (20-45 pax | Grandes grupos).

5. **Testimonios / Clientes B2B (Desire/Trust):**
   - Reseñas de clientes corporativos y logotipos de empresas que confían en el servicio (Social Proof).

6. **Cobertura Nacional (Trust):**
   - Mapa de Colombia estilizado o lista interactiva.
   - **Elemento Visual:** Icono de MapPin intermitente grande (`pings animados`).
   - Texto de anclaje: *"Cobertura 24/7 en las principales ciudades"* (Bogotá, Medellín, Cali, Eje Cafetero, Costa Caribe, etc., además de rutas rurales bajo condiciones).

7. **Cotizador / Formulario Complejo (Action - MOFU):**
   - Interfaz de "Wizard" o panel limpio.
   - Indicador de progreso visual en 3 estados: `Initial` -> `Calculating` -> `Complete`.
   - Banner de visualización del servicio actual seleccionado con botón "Cambiar".
   - **Campos:** Nombre*, Empresa, Correo* (validación Regex), Tel/WhatsApp* (+57 validado), Origen*, Destino*, Fecha*, Hora, Número de Pax*, Maletas, Tipo de Vehículo* (select dropdown), Tipo de Trayecto* (Sencillo, Ida/Vuelta, Paradas), Observaciones.
   - **Salidas (Endpoints de acción):**
     1. Botón WhatsApp: Toma los campos clave (Origen, Destino, Fecha) y arma un mensaje pre-formateado hacia la API de WhatsApp sin guardar en BD.
     2. Botón Email/Cotización Formal: Validación estricta, inserta registro en tabla `leads` y ejecuta edge function `send-quote-email` de Supabase.

8. **FAQ (Objection Handling):**
   - Acordeón responsivo resolviendo al menos 10 dudas comunes: Modalidades de pago, seguros, cambios de ruta, turismo, cobertura de certificaciones, etc.

9. **Footer (Trust Badges):**
   - *Columna 1 (Marca):* Logo, Tagline, Badges oficiales (Supertransporte, MinTransporte, SG-SST).
   - *Columna 2 (Contacto):* Líneas WP (+57 302 406 0101), PBX (+57 601 743-7070), Mail, Horario, Sedes (BOG/MED).
   - *Columna 3 (Navegación Rápida):* Links directos a los anchor de la página (#servicios, #flota).
   - *Columna 4 (Confianza):* Íconos de SSL, pasarela de pago seguro, seguro al pasajero.
   - Bottom bar: "© 2026 Destinos Express S.A.S." y créditos.

## 4. Páginas Secundarias

### 4.1. "Trabaja con Nosotros"
- Landing page específica para captar talento y parque automotor.
- Tabs o divisiones claras: 
  - **Para Conductores:** Perfil requerido, beneficios empresariales.
  - **Para Propietarios de Vehículo:** Requisitos técnicos del auto (modelo, placa blanca, cilindraje), rentabilidad, modelo de afiliación.
- Formularios específicos de aplicación con subida de documentos básicos.

## 5. Próximos pasos
1. Aprobación final del diseño por parte del Product Owner (Usuario).
2. Transición a planificación técnica y arquitectura de base de datos (`leads` y `Supabase`).
3. Ejecución del frontend (`frontend-design`).
