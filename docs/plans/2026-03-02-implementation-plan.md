# Implementation Plan: Destinos Express Web

## 1. Tech Stack
- **Framework:** Next.js 15 (App Router).
- **Styling:** Tailwind CSS v4, leveraging `tailwindcss-mobile-first` patterns.
- **Components:** React Server Components (RSC) + Client Components for interactive forms.
- **Typography:** `next/font/google` (Poppins, Montserrat).
- **Icons:** `lucide-react` (premium SVG icons).
- **Animations:** Framer Motion (page transitions, map ping animations, scroll reveals).
- **Forms:** React Hook Form + Zod (validation).
- **Database/Backend:** Supabase (leads table, edge functions for email).

## 2. Directory Structure Setup
```
src/
├── app/
│   ├── (marketing)/
│   │   ├── page.tsx (Home - AIDA Funnel)
│   │   ├── servicios/ (Subpages if needed later)
│   │   └── flota/
│   ├── (info)/
│   │   ├── trabaja-con-nosotros/
│   │   └── contacto/
│   ├── layout.tsx
│   └── globals.css
├── components/
│   ├── ui/ (Buttons, Inputs, Cards - Reusable)
│   ├── sections/ (Hero, Services, Fleet, Testimonials, Map)
│   ├── form/ (Wizard logic)
│   └── layout/ (Navbar, Footer, WhatsApp Floating Button)
├── lib/
│   ├── supabase/ (Client & Server configuration)
│   └── utils/ (Tailwind merge, data formatting)
└── types/
    └── supabase.ts (Database definitions)
```

## 3. Implementation Phases

### Phase 1: Foundational Setup
- [ ] Initialize Next.js project with Tailwind CSS.
- [ ] Configure global colors (Black #0D0D0D, Gold #FCA311), typography (Poppins, Montserrat), and utilities.
- [ ] Set up Supabase client and `.env` variables.
- [ ] Create core UI components (Navbar, Footer, Premium Buttons).

### Phase 2: Landing Page (AIDA)
- [ ] **Hero Section:** High-impact text, CTA, video/image background.
- [ ] **Features (Por qué elegirnos):** 4 pillars with icons.
- [ ] **Services Display:** Grid/Cards for Empresarial, Aeropuerto, etc., with badges.
- [ ] **Fleet Showcase:** Sliding/Grid presentation of vehicles and stats.
- [ ] **Coverage Map:** Interactive map section with animated pings for 16 cities.
- [ ] **Testimonials & Trust:** Logos, Social Proof.
- [ ] **FAQ Section:** Reusable Accordion for 10 common questions.

### Phase 3: Complex Form & Conversion
- [ ] Build 3-step Wizard Form component with Zod validation.
- [ ] Implement conditional formatting (e.g. Pax vs Vehicle Type).
- [ ] Integrate WhatsApp Web URL generation logic.
- [ ] Integrate Supabase RPC/Insert for the `leads` table and trigger Email.

### Phase 4: Secondary Pages
- [ ] Develop "Trabaja con Nosotros" page (Tabs for Drivers/Owners).
- [ ] Develop individual service pages if necessary.

### Phase 5: Polish & Optimizations
- [ ] Apply Framer Motion animations for premium feel.
- [ ] Performance audit (Lighthouse/Vercel best practices).
- [ ] Final mobile responsiveness checks (`tailwindcss-mobile-first` guidelines).
