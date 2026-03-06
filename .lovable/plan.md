
# Geometric Services — Premium Creative Studio Website

## Overview
A cinematic, full-featured multi-page website for **Geometric Services** — a 3D advertising & creative studio based in Egypt. Built with React (Vite), Tailwind CSS, and premium interactions. Uses real brand content from their PDFs, actual service images extracted from the deck, and the official brand guidelines.

---

## Phase 1 — Foundation & Global Setup

**Brand System**
- Install Google Fonts: `Satoshi` (headlines) + `IBM Plex Sans` (body) via CSS @import
- Set Tailwind custom colors: Deep Teal `#0B4956`, Neon Yellow `#E7F523`, Creamy White `#F2EEE0`, Slate Gray `#535B61`, Sky Blue `#009CFF`, Coral Red `#FF6F61`, Medium Sea Green `#4CAF91`
- Dark background (`#070C0E`) as global base
- Install: `framer-motion`, `@react-three/fiber`, `@react-three/drei`, `three`, `@studio-freight/lenis`

**Global Layout**
- `RootLayout` with sticky minimal header: Geometric logo (left) + hamburger menu button (right) + a thin "Start a Project" CTA pill
- Fullscreen animated overlay navigation menu (opens on hamburger click) — grid layout of nav links with hover animations, brand colors, staggered entrance
- Full footer with: logo, service links, contact info (+20 1063565635, geometric3dadv@gmail.com), social handles (geometric_studios / geometric_stud / geometric-studios), copyright
- Smooth scroll with Lenis throughout
- Global page transition animation (fade + slide)

---

## Phase 2 — Copy extracted images from PDFs to project assets
Extract and copy all service page screenshots from the parsed PDFs (pages 4–18) to `src/assets/services/` for use throughout the site.

---

## Phase 3 — Home Page (`/`)

**Hero Section**
- Full-viewport dark cinematic section
- Three.js canvas: rotating wireframe globe/sphere with neon teal lines, subtle particle drift
- Headline: **"Where Creativity Meets Precision"** in Satoshi, large, white
- Subheadline: *"Precision in Imagination"*
- Two CTAs: `View Work` (neon yellow filled) + `Start a Project` (ghost border)
- Animated scroll indicator

**Studio Intro** — Brief manifesto: *"Creativity guides us. Precision defines us…"* with brand accent word highlights

**Services Grid** — 12 animated cards in a masonry/grid layout; each card has service icon, name, short description, and hover glow effect — links to `/services/:serviceName`

**Featured Projects** — Horizontal scroll carousel of 6 mock project cards extracted from PDF visuals; hover reveals project category + CTA

**Creative Process** — Horizontal animated timeline: Discovery → Concept → 3D Modeling → Simulation → Animation → Rendering → Delivery

**Technology Stack** — Icon grid: Blender, Cinema 4D, Unreal Engine, AI tools, etc. with fade-in

**Testimonials** — 3 cinematic quote cards with brand colors

**Call to Action** — Full-width section: *"Your Next Vision Starts Here"* + `Let's Connect` button

---

## Phase 4 — About Page (`/about`)

- Studio essence + brand manifesto (from PDF: *"To redefine visual storytelling…"*)
- Core values grid: Creativity with Structure, Innovation-Driven, Collaboration, Detail-Oriented, Reliability
- Design principles: Balance, Contrast, Emphasis, Alignment, Repetition, Proximity, Hierarchy, White Space, Unity, Movement
- Animation philosophy (12 Principles of Animation from the guidelines)
- Team/studio visual with brand imagery

---

## Phase 5 — Services Pages (`/services` + `/services/:serviceName`)

**Services Index** — Animated cards grid for all 12 services; hover reveals description; click navigates to detail page

**12 Service Detail Pages** — Each page includes:
- Full-width hero with extracted PDF image (or brand gradient fallback)
- Service name + cinematic tagline (pulled from PDF descriptions)
- Description paragraph
- Key deliverables list
- CTA: *"Start a Project"* → links to `/contact`

Services with their PDF descriptions:
1. **Motion Graphics** — *"Stories don't have to be told with words…"*
2. **Product Visualization & Animation** — *"Every reflection, texture, and movement…"*
3. **Booth & Exhibition Design** — Interior/Exterior design + Technical Drawing
4. **Social Media Content** — *"Fast, bold, and made to stop the scroll…"*
5. **Anamorphic Screens** — *"The illusion of depth breaking the flat screen…"*
6. **Simulations** — *"Chaos has its own rhythm. Fire burns, smoke dances…"*
7. **Architectural Visualization** — *"It's more than walls and glass — it's atmosphere…"*
8. **Micro Visualization** — *"Tiny worlds. Huge stories…"*
9. **VR Environments** — *"Step into a world built from imagination…"*
10. **CGI Compositing** — *"Where CGI and reality meet in perfect harmony…"*
11. **3D Scanning** — *"Every curve, every imperfection captured perfectly…"*
12. **AI Content Production** — *"AI tools integrated into our pipeline…"*

---

## Phase 6 — Portfolio Page (`/portfolio` + `/portfolio/:projectId`)

**Portfolio Index**
- Filter tabs: All / Motion / Product Visualization / Architecture / CGI / Booth Design / AI Content
- Masonry grid of project cards with extracted PDF imagery
- Hover: image zoom + category label reveal + view button
- Smooth filter transition animation

**Project Detail Page**
- Full-screen hero image
- Project title, category, description
- Visual gallery grid (using PDF-extracted images)
- Related projects at bottom

---

## Phase 7 — Process Page (`/process`)

- Full animated vertical scroll timeline
- 7 stages: Discovery, Concept, 3D Modeling, Simulation, Animation, Rendering, Delivery
- Each stage: icon, number, name, description, animated reveal on scroll
- Connecting animated vertical line between stages
- Interactive: clicking a stage expands more detail

---

## Phase 8 — Technology Page (`/technology`)

- Grid of technology tools used at Geometric (Blender, Cinema 4D, Unreal Engine, Houdini, AI tools, etc.)
- Animated entrance cards per tool
- Brief description of their tech philosophy
- Stat counters: years of experience, projects delivered, clients, etc.

---

## Phase 9 — Contact Page (`/contact`)

**Left side:** Contact info
- Emails, phones (+20 1063565635, +20 1025247955, +20 1032843037)
- Social: Instagram / Behance / LinkedIn handles
- Map placeholder / office visual

**Right side:** Premium contact form (visual UI only)
- Fields: Name, Company, Email, Project Type (dropdown), Budget range (dropdown), Message
- Animated field focus states with neon yellow accent
- Submit button with loading animation → success state
- Form validation with zod

---

## Phase 10 — Polish & Performance

- Route-level code splitting with React.lazy + Suspense
- Image lazy loading on all portfolio/service images
- Loading animation (animated Geometric logo on first load)
- 404 Not Found page in brand style
- Mobile responsive: all pages optimized for mobile/tablet
- Smooth Framer Motion page transitions (slide + fade between routes)
- SEO meta tags per page
