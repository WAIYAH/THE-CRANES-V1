# 🏟️ Kanunka FC - The Cranes: Sports Platform Architecture Blueprint

**Version:** 2.0  
**Author:** Principal Frontend Engineer  
**Date:** February 9, 2026  
**Status:** APPROVED FOR IMPLEMENTATION

---

## A. Sports Platform Analysis

### Target Audience

| Segment | Needs | Priority |
|---------|-------|----------|
| **Fans** | Match updates, player info, news, gallery, tickets | 🔴 Critical |
| **Players** | Squad info, stats, career opportunities | 🟡 High |
| **Sponsors** | Professional brand presence, media reach, partnership info | 🟡 High |
| **Media** | Press resources, match data, contact information | 🟢 Medium |

### Competitor Analysis — Top Football Club Websites

| Club | Key Features | Our Takeaways |
|------|-------------|---------------|
| Manchester City | Dark theme, immersive hero, live ticker, data viz | Premium dark aesthetic, match ticker |
| FC Barcelona | Bold colors, category nav, multimedia focus | Strong brand identity throughout |
| Bayern Munich | Clean layouts, stat dashboards, mobile excellence | Data visualization patterns |
| Liverpool FC | Story-driven content, fan engagement | Editorial-quality content layout |

### Mobile-First Sports Consumption Patterns
- **78% of sports fans** consume content on mobile
- Key mobile priorities: scores → news → highlights → tickets
- Touch targets minimum 44px for sports data interaction
- Progressive disclosure for stats (summary → detailed)

### Real-Time Update Strategy (Frontend-Only)
- Simulated live match ticker with countdown timers
- Static JSON data for league tables, fixtures, results
- Client-side filtering and sorting for instant interactions
- Periodic "last updated" timestamps for credibility

---

## B. Technical Stack Decisions

### Core Stack
| Technology | Purpose | CDN Source |
|-----------|---------|------------|
| **HTML5** | Semantic markup, accessibility | — |
| **Tailwind CSS 3.4** | Utility-first styling, design system | CDN (play.tailwindcss.com) |
| **Vanilla JavaScript ES6+** | Interactive features, data rendering | — |
| **GSAP 3.12** | Premium animations (retained, optimized) | cdnjs |
| **Font Awesome 6** | Iconography | cdnjs |

### Why Tailwind CSS over Bootstrap
- **Performance**: Only ship what you use (CDN Play handles purging)
- **Customization**: Design tokens map directly to club brand
- **Consistency**: Utility classes eliminate CSS drift
- **Responsiveness**: Built-in responsive modifiers (sm:, md:, lg:, xl:)
- **Dark Mode**: Native `dark:` variant support

### Asset Optimization Strategy
- SVG for logos and icons (scalable, small)
- Lazy loading (`loading="lazy"`) for all below-fold images
- Responsive image patterns with proper alt text
- YouTube lite embeds for video (facade pattern)

### Removal of AOS Library
- Replace AOS with lightweight CSS-only scroll animations via `@keyframes` + Intersection Observer
- Reduces external dependency from 14KB to 0
- Better performance with native browser APIs

---

## C. Component Architecture

### Design Token System

```
COLORS:
  Primary:     #1e3a5f (Deep Navy — The Cranes main)
  Secondary:   #f59e0b (Amber Gold — accent/CTA)
  Accent:      #10b981 (Emerald — success/wins)
  Danger:      #ef4444 (Red — losses/alerts)
  Dark BG:     #0f172a (Slate 900)
  Light BG:    #f8fafc (Slate 50)
  Card Dark:   #1e293b (Slate 800)
  Card Light:  #ffffff

TYPOGRAPHY:
  Headings:    Inter (clean, modern, great for sports)
  Body:        Inter
  Scores:      Font-variant-numeric: tabular-nums
  Display:     text-4xl to text-7xl for hero elements

SPACING:
  Sports card:   p-4 to p-6
  Section gap:   py-16 to py-24
  Component gap:  space-y-4 to space-y-8

ANIMATIONS:
  Duration:    200ms (micro), 500ms (transitions), 1000ms (hero)
  Easing:      ease-out for entrances, ease-in-out for hover
```

### Reusable Component Patterns
1. **Match Card** — Team logos + score + date + venue
2. **Player Card** — Photo + name + position + key stats
3. **News Card** — Image + category badge + title + excerpt
4. **Stat Bar** — Label + value + visual bar
5. **Section Header** — Title + subtitle + optional CTA
6. **Filter Pills** — Category filter buttons

### Layout System
- **CSS Grid** for page-level layouts
- **Flexbox** for component-level alignment
- **Tailwind Grid** (grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4)

---

## D. Page Structure & SEO Strategy

### Semantic HTML Structure
Every page follows:
```
<html lang="en">
  <head> — meta, structured data, preloads
  <body>
    <header> — navigation + match ticker
    <main> — page content with <section> elements
    <footer> — multi-column footer
```

### Meta Strategy Per Page Type

| Page | Title Pattern | Description Focus |
|------|--------------|-------------------|
| Home | Kanunka FC - The Cranes \| Official Site | Club overview, latest news |
| Matches | Fixtures & Results \| Kanunka FC | Match data, league position |
| Players | First Team Squad \| Kanunka FC | Player roster, stats |
| News | Latest News \| Kanunka FC | Club news, transfers |
| Gallery | Photo & Video Gallery \| Kanunka FC | Media content |
| About | Club History \| Kanunka FC | History, management |
| Tickets | Tickets & Membership \| Kanunka FC | Pricing, matchday info |
| Contact | Contact Us \| Kanunka FC | Location, inquiries |
| Careers | Join The Cranes \| Kanunka FC | Jobs, trials |

### JSON-LD Structured Data
- `SportsTeam` on every page (Organization)
- `SportsEvent` on Matches page (per fixture)
- `Person` on Players and About pages
- `BreadcrumbList` on all inner pages
- `WebSite` with SearchAction on home

### Performance Budget (Lighthouse Targets)
| Metric | Target | Strategy |
|--------|--------|----------|
| Performance | >90 | Lazy loading, minimal JS, CDN |
| Accessibility | >95 | ARIA, semantic HTML, contrast |
| Best Practices | >90 | HTTPS-ready, no console errors |
| SEO | >95 | Meta tags, structured data, semantics |
| LCP | <2.5s | Preload hero, critical CSS inline |
| FID | <100ms | Minimal JS blocking, deferred scripts |
| CLS | <0.1 | Explicit image dimensions, font-display |

---

## E. Implementation Phases

### Phase 1: Core Architecture & Design System ✅
- [x] Architecture document
- [ ] Tailwind CSS configuration via CDN
- [ ] Global stylesheet with design tokens
- [ ] Shared JavaScript module (app.js)

### Phase 2: Global Components
- [ ] Header/Navigation (responsive, dark mode, match ticker)
- [ ] Footer (multi-column, social, marquee)
- [ ] Shared utilities (theme toggle, scroll animations)

### Phase 3: Critical Pages
- [ ] Home — Hero, countdown, news, highlights
- [ ] Matches — League table, fixtures, results, stats
- [ ] Players — Roster grid, filters, stats, POTM

### Phase 4: Content Pages
- [ ] News/Blog — Category filters, article cards
- [ ] Gallery — Photo/video grid, lightbox
- [ ] About — History timeline, management, legends

### Phase 5: New + Support Pages
- [ ] Tickets — Matchday info, membership, merchandise
- [ ] Contact — Form, map, department contacts
- [ ] Careers — Job listings, application, trials

### Phase 6: Optimization & Launch
- [ ] SEO structured data implementation
- [ ] Performance audit and optimization
- [ ] Cross-browser testing
- [ ] Accessibility audit (WCAG 2.1 AA)
- [ ] Legacy file cleanup

---

## F. File Structure (New)

```
THE-CRANES/
├── index.html              # Home page
├── matches.html            # Matches & Results
├── players.html            # First Team Squad
├── news.html               # News & Blog (renamed)
├── gallery.html            # Photo & Video Gallery
├── about.html              # Club History & Info
├── tickets.html            # Tickets & Membership (NEW)
├── contact.html            # Contact Information
├── careers.html            # Careers & Vacancies
├── css/
│   └── styles.css          # Single consolidated stylesheet
├── js/
│   ├── app.js              # Shared: nav, footer, theme, animations
│   ├── home.js             # Home page logic
│   ├── matches.js          # Matches page logic
│   ├── players.js          # Players page logic
│   ├── news.js             # News page logic
│   ├── gallery.js          # Gallery page logic
│   ├── about.js            # About page logic
│   ├── tickets.js          # Tickets page logic
│   ├── contact.js          # Contact page logic
│   └── careers.js          # Careers page logic
├── img/--------------------# All images
├── docs/
│   └── SPORTS_WEBSITE_ARCHITECTURE.md
└── README.md
```

---

## G. Migration Checklist

- [ ] Remove all Bootstrap CSS/JS CDN references
- [ ] Remove AOS CSS/JS CDN references
- [ ] Add Tailwind CSS CDN (play)
- [ ] Consolidate 8 CSS files → 1 styles.css
- [ ] Create shared app.js for nav/footer/theme
- [ ] Implement consistent header/footer via JS injection
- [ ] Migrate each page's markup to Tailwind utilities
- [ ] Preserve all existing data (players, matches, blog posts, etc.)
- [ ] Implement JSON-LD structured data
- [ ] Add comprehensive meta tags
- [ ] Performance test all pages

---

**BLUEPRINT STATUS: ✅ APPROVED — READY FOR IMPLEMENTATION**

*"Building the digital home where every Crane soars."*
