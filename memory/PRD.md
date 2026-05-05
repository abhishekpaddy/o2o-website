# OceanToOasis — Marketing Website PRD

## Original Problem Statement
> Build me a website for my startup. The colour scheme and fonts are similar to that in the attached file. The graphic in the first page is a nice graphic to use. The logo is also attached. Use Glassmorphism — blurred, semi-transparent backgrounds for highlighting important stuff to create depth.

Attached: pitch deck (OceanToOasis — Climate Positive Desalination) + logo PNG.

## User Personas
- **Investors** evaluating climate-tech deep-science startups
- **Industrial partners** (coastal industries with acid/alkali waste streams)
- **Policy stakeholders** (water scarcity, MENA / India)

## Core Requirements (Static)
- Single-page scroll marketing site
- Sections: Home / Technology / Market / Team / Contact
- Contact: mailto link only (no backend)
- Light lavender/periwinkle theme with dark blue + green/teal accents (from deck)
- Hero: animated abstract swirl graphic recreating slide 1
- Glassmorphism for stat cards, feature cards, team cards
- Typography: Chivo (display) + Figtree (body) from Google Fonts

## Architecture
- **Frontend only.** React + TailwindCSS + lucide-react icons
- No backend used (mailto links); MongoDB + FastAPI server untouched
- Components:
  - `Nav.jsx` — sticky glass nav with smooth scroll
  - `Hero.jsx` — animated blob swirl over `#0F2A44`
  - `Sections.jsx` — Problem / Paradigm / Process / Performance / Comparison / Market
  - `Team.jsx` — 3 founder cards
  - `Contact.jsx` — mailto CTA + contact details
  - `Footer.jsx` — dark footer
  - `GlassCard.jsx` — reusable glass surface

## What's Been Implemented (2026-05-05)
- Hero with animated SVG-less CSS blob swirl (teal, lime, cyan, deep navy)
- Problem grid (4 glass cards) + Paradigm banner ("generate it")
- CPSD 4-step process cards with big numbered accents
- Performance stats (>0 Wh/L, <500 ppm, $0) on dark grain section
- Comparison table (CPSD vs RO vs ED/CDI) with highlighted winning column
- Market TAM/SAM/SOM funnel with progress bars + go-to-market glass panel
- Team grid with 3 profile cards, bios, LinkedIn placeholders
- Contact section with mailto CTAs, phone, location
- Footer with logo + section anchor links
- Sticky nav with glass on scroll, mobile hamburger menu
- Smooth scroll + entrance animations + hover micro-interactions
- Favicon + title set to OceanToOasis

## Prioritized Backlog
### P1
- Replace Unsplash team photos with real founder headshots when provided
- Actual LinkedIn URLs for each founder (currently placeholder anchors)
- Download/view pitch deck CTA (host the PDF and link)
- Newsletter/updates capture (if backend later desired)

### P2
- Dedicated routes per section for SEO (`/technology`, `/team`, etc.)
- Case studies / pilot deployment page once pilots launch
- Careers page
- Blog/press section
- Animated SVG of the CPSD cell showing ion flow
- Multi-language (Hindi / Arabic for MENA markets)
- Interactive ROI/savings calculator for industrial partners
- Dark/light theme toggle
- Analytics (Plausible or PostHog events on CTA clicks)

## Next Tasks
1. Collect real founder photos + LinkedIn URLs
2. Host pitch deck PDF and add download CTA
3. Add SEO metadata (OG tags, twitter card, JSON-LD organization schema)
