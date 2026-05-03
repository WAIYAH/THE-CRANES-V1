# Kanunka FC - The Cranes Website

Official multi-page static website for Kanunka FC - The Cranes.

## Overview

This project is built with plain HTML, CSS, and JavaScript.
It includes club content, matches, squad, careers, gallery, contact details, and a shared design system.

The site is configured for Vercel deployment and uses a shared JS app shell for:
- Global navbar
- Global footer
- Theme toggle
- Scroll/reveal effects

## Current Pages

- `index.html` - Home
- `matches.html` - Matches and standings view
- `players.html` - Squad listing, filters, and stats
- `news.html` - News highlights
- `gallery.html` - Photo/video gallery with lightbox
- `about.html` - Club story, staff, and legends
- `tickets.html` - Matchday tickets and memberships
- `careers.html` - Open positions and trial application
- `contact.html` - Contact form, map, and channels
- `404.html` - Custom not-found page

## Tech Stack

- HTML5
- CSS3
- Vanilla JavaScript
- GSAP (CDN)
- Font Awesome (CDN)

## Project Structure

```text
THE-CRANES-V1/
├── css/
│   └── styles.css
├── docs/
│   ├── SPORTS_WEBSITE_ARCHITECTURE.md
│   └── VERCEL_READINESS_CHECKLIST.md
├── img/
│   ├── logo/
│   ├── players/
│   ├── photos/
│   ├── squad/
│   ├── training/
│   └── videos/
├── js/
│   ├── app.js
│   ├── about.js
│   ├── careers.js
│   ├── contact.js
│   ├── gallery.js
│   ├── home.js
│   ├── matches.js
│   ├── news.js
│   ├── photo-library.js
│   ├── players.js
│   └── tickets.js
├── *.html
├── manifest.json
├── robots.txt
├── sitemap.xml
└── vercel.json
```

## Image and Data Standards

- Image paths are lowercase and web-safe.
- Player/Staff cards include `alt` attributes.
- Unknown or unmatched player images use `img/players/sample.jpg`.
- Player dataset is maintained in `js/players.js` (`playersData`).

## Local Development

1. Open the repository in your editor.
2. Start a local server from project root:

```bash
python -m http.server 8000
```

3. Open `http://localhost:8000`.

## Deployment

- Primary deployment target: Vercel
- Config file: `vercel.json`
- Review checklist: `docs/VERCEL_READINESS_CHECKLIST.md`

## Notes

- Forms are client-side only (no backend submission yet).
- Media-heavy pages can be optimized further with WebP/AVIF conversion if needed.

## License

MIT License. See `LICENSE`.
