# Plan de Imágenes — Destinos Express Flota

> Objetivo: crear imágenes de dos tipos para cada vehículo de la flota.
> - **Imágenes de escena** → para el landing page (section Fleet)
> - **Imágenes de galería** → para la página /flota (detalle del vehículo)

---

## Especificaciones técnicas

| Tipo | Dimensiones | Formato | Peso máx. | Uso |
|------|-------------|---------|-----------|-----|
| Escena (hero card) | 800 × 500 px | WebP | 150 KB | Landing page - Fleet section |
| Galería principal | 1200 × 800 px | WebP | 200 KB | /flota - foto grande |
| Galería secundaria | 800 × 600 px | WebP | 120 KB | /flota - ángulos adicionales |

**Dónde guardar:**
```
public/
└── flota/
    ├── duster-4x4/
    │   ├── hero.webp          ← imagen de escena
    │   ├── galeria-01.webp    ← frente
    │   ├── galeria-02.webp    ← lateral
    │   ├── galeria-03.webp    ← trasera
    │   └── galeria-04.webp    ← interior
    ├── sedan-ejecutivo/
    │   ├── hero.webp
    │   ├── galeria-01.webp
    │   ├── galeria-02.webp
    │   ├── galeria-03.webp
    │   └── galeria-04.webp
    └── van-pasajeros/
        ├── hero.webp
        ├── galeria-01.webp
        ├── galeria-02.webp
        ├── galeria-03.webp
        └── galeria-04.webp
```

---

## Vehículo 1 — Renault Duster 4x4

### Imagen de escena (hero.webp)
- [ ] Fotografiar o renderizar el Duster en una locación exterior
- [ ] **Fondo sugerido:** carretera destapada, zona montañosa, o vía intermunicipal colombiana
- [ ] Vehículo centrado-derecho en el encuadre, con espacio a la izquierda para el texto
- [ ] Luz natural, preferiblemente hora dorada (amanecer/atardecer) para tono cálido
- [ ] Color del vehículo destacado (blanco o gris oscuro idealmente)
- [ ] Exportar a WebP 800 × 500 px, calidad 85%, máx. 150 KB
- [ ] Guardar en: `public/flota/duster-4x4/hero.webp`

### Imágenes de galería
- [ ] **galeria-01.webp** — Frente 3/4, fondo neutro blanco o gris claro
- [ ] **galeria-02.webp** — Lateral completo, fondo neutro
- [ ] **galeria-03.webp** — Trasera 3/4, fondo neutro
- [ ] **galeria-04.webp** — Interior: asientos, tablero, consola central
- [ ] Exportar todas a WebP: principal 1200×800, secundarias 800×600
- [ ] Guardar en: `public/flota/duster-4x4/`

---

## Vehículo 2 — Sedán Ejecutivo

### Imagen de escena (hero.webp)
- [ ] Fotografiar o renderizar el Sedán en locación ejecutiva/corporativa
- [ ] **Fondo sugerido:** edificio empresarial, aeropuerto, centro financiero de Bogotá o Medellín
- [ ] Vehículo en posición 3/4 frontal, luz limpia y profesional
- [ ] Tono oscuro/premium — refleja el segmento VIP
- [ ] Exportar a WebP 800 × 500 px, calidad 85%, máx. 150 KB
- [ ] Guardar en: `public/flota/sedan-ejecutivo/hero.webp`

### Imágenes de galería
- [ ] **galeria-01.webp** — Frente 3/4, fondo neutro oscuro o blanco
- [ ] **galeria-02.webp** — Lateral completo
- [ ] **galeria-03.webp** — Detalle interior: asientos de cuero, espacio trasero
- [ ] **galeria-04.webp** — Maletero abierto con maletas (para ilustrar capacidad)
- [ ] Exportar todas a WebP: principal 1200×800, secundarias 800×600
- [ ] Guardar en: `public/flota/sedan-ejecutivo/`

---

## Vehículo 3 — Van de Pasajeros

### Imagen de escena (hero.webp)
- [ ] Fotografiar o renderizar la Van en locación grupal/turística
- [ ] **Fondo sugerido:** aeropuerto (zona de llegadas), centro histórico, hotel o zona turística
- [ ] Vehículo completo visible — que se aprecie el tamaño y capacidad
- [ ] Puertas laterales abiertas si es posible (transmite accesibilidad y capacidad)
- [ ] Exportar a WebP 800 × 500 px, calidad 85%, máx. 150 KB
- [ ] Guardar en: `public/flota/van-pasajeros/hero.webp`

### Imágenes de galería
- [ ] **galeria-01.webp** — Frente 3/4, fondo neutro
- [ ] **galeria-02.webp** — Lateral mostrando todas las ventanas y capacidad
- [ ] **galeria-03.webp** — Interior: filas de asientos, pasillo, vista desde el frente
- [ ] **galeria-04.webp** — Bodega abierta con maletas
- [ ] Exportar todas a WebP: principal 1200×800, secundarias 800×600
- [ ] Guardar en: `public/flota/van-pasajeros/`

---

## Conversión a WebP

Si las fotos salen en JPG o PNG, conviértelas a WebP con alguna de estas opciones:

**Online (sin instalar nada):**
- [squoosh.app](https://squoosh.app) — arrastra la imagen, selecciona WebP, ajusta calidad a 85
- [convertio.co](https://convertio.co/es/jpg-webp/)

**macOS (terminal) — si tienes `cwebp` instalado:**
```bash
cwebp -q 85 foto.jpg -o hero.webp
```

**Instalar cwebp en Mac:**
```bash
brew install webp
```

---

## Checklist final antes de integrar al código

- [ ] Todos los `hero.webp` pesan menos de 150 KB
- [ ] Todas las `galeria-*.webp` pesan menos de 200 KB
- [ ] Archivos guardados con los nombres exactos indicados
- [ ] Las 3 carpetas están completas (`duster-4x4`, `sedan-ejecutivo`, `van-pasajeros`)
- [ ] Avisar a Claude para reemplazar URLs de Unsplash por rutas locales en el código

---

> Cuando completes este plan, avísame y actualizo el código para usar tus imágenes reales.
