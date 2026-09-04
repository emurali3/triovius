# Triovius — Brand & Website Package

## What's inside

```
triovius/
├── website/              Full static website (deploy-ready)
│   ├── index.html
│   ├── styles.css
│   ├── script.js
│   └── assets/           favicon + app icons used by the site
│
├── logos/                All logo concepts, source + exports
│   ├── generate_logos.py             Python script that generated every file below
│   │                                  (edit colors/shapes here and rerun to regenerate)
│   ├── concept-A-triad-bloom_*        RECOMMENDED — used on the live site
│   ├── concept-B-convergence-bars_*   Alternate concept
│   ├── concept-C-triline-monogram_*   Alternate concept
│   └── favicon.ico, icon-192.png, icon-512.png, apple-touch-icon-180.png
│
└── README.md             This file
```

Each logo concept includes:
- `_icon.svg` / `.png` — square mark alone, for favicons/social avatars
- `_lockup-light.svg` / `.png` — full logo (mark + wordmark) for light backgrounds
- `_lockup-dark.svg` / `.png` — full logo for dark backgrounds
- `_icon_on-navy-swatch.png` / `_icon_on-porcelain-swatch.png` — presentation swatches

All PNGs are exported transparent at high resolution (3x) except the swatch and
favicon/app-icon files, which have a background baked in on purpose.

## Brand concept

**Triovius** is positioned as an enterprise technology & digital transformation
consultancy built on three integrated disciplines — **Strategy, Engineering,
and Scale** — delivered by one accountable team instead of being handed off
between vendors. The name's "trio" is carried through visually: every logo
concept is built from exactly three elements, and the three brand colors map
onto the three disciplines everywhere on the site (pillars, stat highlights,
case study metrics).

### Color palette
| Token | Hex | Use |
|---|---|---|
| Navy (Strategy) | `#1B2A4A` | Primary brand color, headings, light-theme buttons |
| Teal (Engineering) | `#2E6E63` | Secondary accent |
| Bronze (Scale) | `#B8863E` | Primary CTA / highlight accent |
| Ink | `#10192E` | Near-black text, dark theme background |
| Porcelain | `#EEF0F4` | Light theme secondary surface (cool, not cream) |
| Slate | `#6B7690` | Muted text |

### Type
- **Headlines:** Newsreader (serif) — editorial, confident, used large
- **Body / UI:** IBM Plex Sans — a typeface with real enterprise-tech
  heritage (built for IBM), which fits an "enterprise technology" brand
  literally as well as visually
- Both are loaded from Google Fonts in `index.html`; no local font files
  are needed as long as the site has internet access when it loads.

### Logo concepts
1. **Triad Bloom** (recommended, live on the site) — a three-petal pinwheel,
   one petal per discipline color. Reads as motion/convergence.
2. **Convergence Bars** — three ascending bars with a trendline; leans into
   the "Scale" / growth story more literally.
3. **Triline Monogram** — a T·V ligature built from exactly three strokes,
   most minimal of the three.

Open `logos/concept-A-triad-bloom_lockup-light.svg` (etc.) in any vector
editor (Illustrator, Affinity, Figma, Inkscape) to adjust further — colors
are plain fills, easy to swap.

## Deploying the website

The `website/` folder is a fully static site — no build step, no
dependencies to install. Any of the following work:

- **Netlify / Vercel:** drag-and-drop the `website` folder onto the deploy
  dashboard, or connect it to a Git repo.
- **GitHub Pages:** push the contents of `website/` to a repo and enable
  Pages on the branch.
- **Any shared host:** upload the contents of `website/` via FTP/SFTP to
  your `public_html` (or equivalent) directory.

The theme toggle (top right) persists the visitor's light/dark preference
in `localStorage` and also respects their OS-level preference on first
visit.

## Editing content

All copy lives directly in `website/index.html` — company description,
services, case studies, testimonials, and stats are plain text/HTML with
no templating, so they're safe to edit directly. Section by section:

- Hero — headline, subhead, hero stat card
- Trust bar — client name list (currently placeholder names)
- Pillars — Strategy / Engineering / Scale descriptions
- Approach — 4-step process timeline
- Services — 6-item service list
- Work — 3 case studies with metrics
- Stats band — 4 headline numbers
- Testimonials — 2 quotes
- Footer — nav links, contact email

**Note:** the trust-bar client names and the case-study clients
(NorthPeak Financial, Calder Logistics, Meridian Health, etc.) are
placeholder/fictional and should be replaced with real client names and
metrics once you have them.
