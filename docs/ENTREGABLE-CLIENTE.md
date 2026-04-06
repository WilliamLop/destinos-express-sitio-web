# Destinos Express — Informe de Entregables del Sitio Web

> Documento técnico y de resultados para el cliente. Refleja el estado actual del sitio web corporativo de **Destinos Express S.A.S.**

---

## Resumen Ejecutivo

Se desarrolló un sitio web corporativo de nivel premium, cuyo objetivo principal es **convertir visitantes en clientes que cotizen y contacten**. No es un sitio de imagen estática — es una herramienta de ventas activa: captura leads por formulario, los notifica al equipo comercial por correo y los conecta directamente a WhatsApp con el mensaje ya redactado.

El sitio está construido con tecnología moderna de nivel empresarial, diseño profesional con animaciones fluidas, y configurado desde el código para posicionarse en Google sin depender de plugins externos.

---

## Tecnologías y Por Qué Importan

No se trata de nombrar herramientas — se trata de lo que le dan al negocio:

| Tecnología | Lo que hace por el negocio |
|---|---|
| **Next.js 16** | El sitio carga en menos de 1 segundo. Google premia la velocidad con mejor posicionamiento. |
| **TypeScript** | El código no se rompe fácilmente. Menos bugs, menos tiempo perdido arreglando cosas. |
| **Tailwind CSS v4** | Diseño consistente en todas las páginas. La marca se ve igual en móvil, tablet y computador. |
| **Framer Motion v12** | Animaciones fluidas que generan confianza visual. Un sitio que "se mueve bien" se percibe como más serio y profesional. |
| **React Hook Form + Zod** | El formulario de cotización valida los datos antes de enviarlos. No llegan solicitudes vacías ni con teléfonos inválidos. |
| **Resend (correo transaccional)** | Cada vez que alguien cotiza, el equipo de ventas recibe un correo automático con todos los datos organizados. Sin intervención manual. |
| **Vercel (hosting)** | El sitio vive en servidores globales. Carga rápido desde cualquier ciudad de Colombia. |

---

## Qué Tiene el Sitio y Qué Resultado Genera

### 1. Landing Page Principal — La Cara del Negocio

**8 secciones** diseñadas en orden estratégico para guiar al visitante desde el primer impacto hasta la cotización:

#### Hero — Primera impresión (los primeros 3 segundos)
- **Fondo de video en loop** con overlay degradado
- Titular claro: *"Transporte Especial, Ejecutivo y Turístico"*
- Subtítulo de posicionamiento: *"Excelencia en Movilidad Corporativa"*
- **Resultado:** El visitante entiende en 3 segundos qué ofrece la empresa y tiene dos opciones de acción inmediata: cotizar o escribir por WhatsApp

#### Features — Por qué confiar en Destinos Express
- 6 tarjetas de valor: Puntualidad 99%, Seguridad Legal, Cobertura Nacional, Flota Propia, Conductores Certificados, Soporte 24/7
- Animación en cascada al hacer scroll
- **Resultado:** El visitante que tenía dudas encuentra las razones para seguir leyendo

#### Servicios — Qué ofrece la empresa
- Introducción visual a los 6 tipos de servicio con enlace a página completa
- **Resultado:** El visitante identifica si su necesidad está cubierta

#### Flota — El producto físico
- Galería de vehículos reales con enlace al catálogo completo
- **Resultado:** Ver los vehículos genera confianza y reduce la fricción para cotizar

#### Mapa de Cobertura — Alcance nacional
- Visualización de las 16 ciudades cubiertas
- **Resultado:** Empresas con operación en varias ciudades ven que Destinos Express puede atenderlas

#### Testimonios — Prueba social
- Reseñas de clientes reales con animaciones
- **Resultado:** El visitante siente que otros ya confiaron en la empresa

#### Formulario de Cotización — El núcleo de conversión
- Formulario inteligente de 3 pasos integrado en la página
- **Resultado:** El visitante puede cotizar sin salir del sitio, en menos de 2 minutos

#### FAQ — Cierre de objeciones
- 10 preguntas frecuentes en acordeón interactivo
- Sidebar fijo con botón de WhatsApp
- **Resultado:** Las dudas más comunes se resuelven antes de que el visitante se vaya

---

### 2. Página de Servicios (`/servicios`) — Para quien quiere saber más

Página dedicada con detalle completo de los **6 servicios** y sus características:

| Servicio | Lo que ofrece |
|---|---|
| **Empresarial** | Convenios corporativos, facturación mensual, rutas dedicadas |
| **Aeropuerto 24/7** | Traslados El Dorado, seguimiento de vuelo en tiempo real |
| **Turístico** | Excursiones, guías bilingües, grupos de 4 a 45 pasajeros |
| **Eventos Especiales** | Ferias, congresos, bodas, grados |
| **Ejecutivo VIP** | Puerta a puerta, máximo confort y privacidad |
| **Senior** | Cuidado especializado, paramédicos disponibles, trazabilidad |

- Banda de estadísticas: **16+ ciudades · 24/7 · +500 empresas · 10+ años**
- Animaciones profesionales con Framer Motion
- FAQ propia al final de la página

**Resultado:** Un cliente empresarial que llega buscando transporte corporativo encuentra toda la información para tomar la decisión de contactar, sin tener que llamar para preguntar lo básico.

---

### 3. Página de Flota (`/flota`) — El catálogo de vehículos

Catálogo interactivo con **6 vehículos** y ficha técnica completa:

- Kia Soluto (sedán ejecutivo)
- Renault Duster 4x4 (terreno y ciudad)
- Mini Van (6–8 pasajeros)
- Van Trafic (media capacidad)
- Van Sprinter (12–16 pasajeros)
- Bus (20–45 pasajeros)

**Por cada vehículo:**
- Galería de fotos con carrusel de miniaturas y visor de pantalla completa
- Año del modelo como badge de referencia
- Especificaciones: capacidad de pasajeros, transmisión/tracción, maletas, seguridad y conectividad
- Navegación lateral para saltar directamente al vehículo que interesa

**Resultado:** El cliente sabe exactamente qué vehículo necesita antes de cotizar, lo que mejora la calidad de las solicitudes que llegan al equipo comercial.

---

### 4. Página Nosotros (`/nosotros`) — Quiénes son

- Misión, Visión y los 4 valores corporativos: Seguridad, Puntualidad, Excelencia, Compromiso
- Historia y presentación de la empresa
- Bloques visuales con animaciones

**Resultado:** Empresas B2B que evalúan proveedores tienen un lugar donde conocer la trayectoria y valores antes de firmar un convenio.

---

### 5. Página Trabaja con Nosotros (`/trabaja-con-nosotros`) — Captación de talento

Formulario inteligente con **dos perfiles diferenciados** por pestañas:

**Para conductores:**
- Nombres, apellidos, email, celular, ciudad, número de licencia, carga de hoja de vida

**Para propietarios de vehículo:**
- Nombre, celular, marca y línea del vehículo, modelo, capacidad, indica si tiene conductor

- Mensaje de confirmación al enviar exitosamente
- Correo automático al equipo con los datos del aplicante
- Sección de beneficios para atraer perfiles de calidad

**Resultado:** La empresa recibe hojas de vida y propuestas de vehículos sin necesidad de publicar en plataformas externas ni revisar correos manualmente — todo llega organizado.

---

## Formulario de Cotización (QuoteWizard) — El Motor de Leads

El componente más importante del sitio. Formulario de **3 pasos** con validación en tiempo real en cada campo:

### Paso 1 — El viaje
Ciudad de Origen · Ciudad de Destino · Fecha · Hora · Tipo de trayecto (Sencillo / Ida y Vuelta / A disposición)

### Paso 2 — La logística
Número de pasajeros · Maletas · Tipo de vehículo preferido · Observaciones

### Paso 3 — El contacto
Nombre · Empresa · Correo electrónico · Teléfono/WhatsApp

### Lo que pasa cuando alguien envía el formulario:

1. **Correo automático a ventas** — El equipo recibe en `ventas@destinosexpress.com` un correo con todos los datos organizados: ruta, fecha, pasajeros, vehículo y datos de contacto. Con un botón directo para responder al cliente.

2. **WhatsApp se abre automáticamente** — Con un mensaje ya redactado que incluye los datos del viaje, para que el asesor pueda continuar la conversación de inmediato.

3. **Botón alternativo de WhatsApp directo** — Para usuarios que prefieren no llenar el formulario, hay un botón que abre WhatsApp con un mensaje base pre-redactado.

**Resultado: ningún lead se pierde.** El cliente tiene dos caminos para contactar y el equipo de ventas recibe la información de manera inmediata y organizada, sin depender de que el cliente explique todo de nuevo por teléfono.

---

## Integración de Correo Electrónico (Resend)

Dos flujos de correo automático configurados:

| Evento | Qué pasa |
|---|---|
| Alguien envía cotización | Correo automático a `ventas@destinosexpress.com` con datos completos del viaje y contacto |
| Alguien aplica como conductor/propietario | Correo automático con los datos del aplicante, clasificado por tipo de perfil |

- Las plantillas de correo tienen diseño HTML profesional con la marca de la empresa
- El campo "responder a" apunta al email del cliente, no al sistema — el asesor puede responder con un clic
- Asunto descriptivo: `Nueva cotización — {nombre} | {origen} → {destino}`

---

## WhatsApp Business — Siempre Visible, Siempre Disponible

- **Botón flotante fijo** en la esquina inferior derecha de todas las páginas
- A los **2.5 segundos** de entrar al sitio aparece un tooltip: *"En línea ahora"*
- El tooltip desaparece a los 8 segundos para no ser invasivo
- Al hacer clic abre WhatsApp con el mensaje: *"Hola! Quiero reservar un servicio de transporte ejecutivo. ¿Me pueden ayudar?"*
- Efectos visuales de pulso para captar atención sin molestar

**Resultado:** El visitante nunca tiene que buscar cómo contactar. El canal está siempre visible y reduce la fricción al mínimo.

---

## SEO — Posicionamiento en Google desde el Día 1

Esta parte es invisible para el visitante pero es de las más valiosas a largo plazo.

### ¿Qué se configuró?

**Metadata completa por página**
- Título único por página con el nombre de la empresa
- Descripción optimizada con términos que buscan los clientes
- 12 palabras clave estratégicas: transporte especial, ejecutivo, aeropuerto, turístico, empresarial, y más

**Datos Estructurados (JSON-LD) — 4 schemas**
Son instrucciones que le dicen a Google exactamente qué es el negocio:
- `Organization` → nombre legal, teléfono, idioma, atención 24/7
- `LocalBusiness` → dos sedes (Bogotá y Medellín), horarios, 16 ciudades de cobertura
- `FAQPage` → 7 preguntas marcadas para aparecer directamente en resultados de Google
- `WebSite` → nombre del sitio, idioma español

**Imagen Open Graph dinámica (1200×630 px)**
Cuando alguien comparte el sitio en LinkedIn, WhatsApp o cualquier red social, aparece una imagen profesional generada automáticamente con estadísticas de la empresa: 16+ ciudades, 24/7, +500 Empresas, 10+ Años.

**Sitemap XML automático**
Lista de todas las páginas enviada a Google para que las indexe. Generado automáticamente desde el código.

**Robots.txt**
Archivo que le dice a Google qué puede y qué no puede indexar. Las rutas privadas del sistema están bloqueadas.

**Resultado:** El sitio está técnicamente configurado para aparecer en Google cuando alguien busque *"transporte ejecutivo Bogotá"*, *"servicio de transporte aeropuerto Colombia"* u otros términos relacionados — sin pagar publicidad.

---

## Diseño y Experiencia Visual

### Identidad de Marca Aplicada en Todo el Sitio
- **Negro** `#0D0D0D` como color base — sobriedad y elegancia
- **Amarillo dorado** `#FCA311` como acento — energía y diferenciación
- **Montserrat** para títulos — autoridad y modernidad
- **Poppins** para el cuerpo — legibilidad y calidez

### Animaciones Profesionales
- Secciones aparecen suavemente al hacer scroll (fade-up con timing calculado)
- Subrayado dorado animado en los títulos principales
- Transiciones entre pasos del formulario con dirección
- Acordeón del FAQ con animación de altura fluida
- Visor de galería con animación de escala
- Botón de WhatsApp con pulso y efecto ripple al pasar el cursor

### Calidad de Componentes
- Cards con elevación al hover
- Badges de estado: "Popular", "Premium"
- Hero con video y degradados multicapa para legibilidad perfecta
- Galerías con carrusel y visor de pantalla completa
- Menú hamburguesa animado en móvil

### Responsive Completo
El sitio se adapta correctamente a **cualquier tamaño de pantalla**: teléfono, tablet, portátil, monitor. Las grillas pasan de 1 columna en móvil a 3 columnas en escritorio. La tipografía escala proporcionalmente.

---

## Seguridad

- Las claves de los servicios externos (correo, etc.) están en variables de entorno — nunca visibles en el código público
- TypeScript estricto en todo el proyecto — reduce errores silenciosos en producción
- Validación de formularios en el cliente y en el servidor — no se procesan datos malformados
- Rutas de API no indexadas por Google

---

## Infraestructura y Costos Operativos

| Servicio | Plan recomendado | Costo estimado |
|---|---|---|
| Vercel (hosting) | Hobby (gratuito) | $0 USD/mes |
| Resend (correos) | Free (100 correos/día) | $0 USD/mes |
| Dominio `.com` | Anual | ~$15 USD/año (~$65.000 COP) |

> El sitio puede operar con **costo operativo casi cero** mientras el volumen de leads sea normal. Solo escala en costo si el tráfico o el volumen de correos crece significativamente.

---

## Lo Que Recibe el Cliente

- Sitio web completo con 5 páginas funcionales
- Formulario de cotización conectado a correo automático y WhatsApp
- Formulario de empleo con notificación automática al equipo
- Diseño profesional responsive para todos los dispositivos
- SEO técnico configurado desde el código (4 schemas JSON-LD, sitemap, metadata completa)
- Imagen Open Graph para redes sociales generada dinámicamente
- Código fuente 100% propio y organizado, listo para escalar
- Documento de entrega con instrucciones de uso y accesos

---

## Valoración del Proyecto

### ¿Qué se está pagando realmente?

No se pagó una plantilla de WordPress. Se construyó un sistema de captación de clientes a medida, con tecnología de producción usada por startups y empresas internacionales.

**Lo que diferencia este proyecto de un sitio web común:**

- **No hay plantillas**: cada componente fue diseñado y programado desde cero para Destinos Express
- **Correo automático real**: cada cotización llega organizada al equipo sin que nadie tenga que hacer nada manual
- **SEO técnico de nivel**: la mayoría de sitios en Colombia no tienen JSON-LD estructurado ni imagen OG dinámica
- **Código escalable**: se pueden agregar páginas, nuevos servicios o integraciones sin reescribir nada
- **Animaciones orquestadas**: no son efectos CSS genéricos; están coordinadas con timing y eventos de scroll
- **WhatsApp con intención**: el mensaje que llega al asesor ya viene redactado con los datos del cliente

### Desglose por Módulos

| Módulo | Valor estimado (COP) |
|---|---|
| Diseño visual y sistema de marca | $800.000 – $1.500.000 |
| Landing page completa (8 secciones) | $2.000.000 – $3.500.000 |
| Páginas internas (Servicios, Flota, Nosotros, Trabaja con Nosotros) | $2.000.000 – $3.000.000 |
| QuoteWizard — formulario 3 pasos con validación | $1.200.000 – $2.000.000 |
| Integración de correo automático (Resend) | $600.000 – $1.000.000 |
| SEO técnico avanzado (JSON-LD, sitemap, OG, robots) | $700.000 – $1.200.000 |
| Animaciones profesionales (Framer Motion) | $600.000 – $1.000.000 |
| Catálogo de flota interactivo con galería y lightbox | $700.000 – $1.200.000 |
| WhatsApp Business integrado en todo el sitio | $300.000 – $500.000 |
| QA, ajustes finales y entrega | $400.000 – $700.000 |

### Inversión Total

| Referencia | Valor (COP) |
|---|---|
| Valor mínimo de mercado | **$8.000.000** |
| Valor medio justo | **$10.000.000 – $12.000.000** |
| Valor en agencia digital | $20.000.000 – $35.000.000 |

> Este sitio tiene el nivel de producción de una agencia, construido con la eficiencia de un desarrollador independiente especializado.

---

### ¿Por qué vale lo que vale?

Un sitio hecho en WordPress con plantilla cuesta entre $1.000.000 y $3.000.000 COP. Puede verse bien en pantalla, pero no tiene:

- Formulario que envía correo automático organizado al equipo de ventas
- SEO técnico con schemas estructurados que Google puede leer
- Animaciones orquestadas que generan confianza en el visitante
- Código propio que no depende de plugins que se rompen con las actualizaciones
- Velocidad de carga optimizada desde la arquitectura
- Imagen profesional cuando alguien comparte el sitio en redes

La diferencia entre un sitio de imagen y un sitio que genera clientes es exactamente lo que se construyó aquí.

---

*Destinos Express S.A.S. — Documento de entregables del proyecto web*
*Fecha: marzo 2026*
