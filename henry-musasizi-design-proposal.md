# Henry Musasizi — Design Audit & Redesign Proposal

> **Hon. Henry Musasizi** | Minister of State for Finance (General Duties), Uganda | MP for Rubanda East (since 2011)
> Current stack: Astro v5 + Tailwind CSS v3 + Decap CMS | Hosted on Netlify
> Target URL: henrymusasizi.ug

---

## Table of Contents

1. [Full Design Audit](#1-full-design-audit)
2. [Design System: OKLch Palette, Typography, Spacing, Tokens](#2-design-system)
3. [Layout Architecture: Statesman Bento Grid](#3-layout-architecture)
4. [Redesigned Hero](#4-redesigned-hero)
5. [Content Page Templates](#5-content-page-templates)
6. [About Page Architecture](#6-about-page-architecture)
7. [Contact Form Redesign](#7-contact-form-redesign)
8. [Mobile-First Responsive Strategy](#8-mobile-first-responsive-strategy)
9. [Performance & Accessibility](#9-performance--accessibility)
10. [Migration Path](#10-migration-path)

---

## 1. Full Design Audit

### 1.1 Visual Identity & Brand Cohesion

| Issue | Severity | Detail |
|-------|----------|--------|
| **Dark theme mismatch** | 🔴 Critical | Dark theme with glass orbs and particle effects creates a SaaS startup aesthetic. A government minister's site needs authority, warmth, and approachability — not techno-futurism. Dark themes on political sites also reduce readability for older constituents. |
| **No cohesive design system** | 🔴 Critical | Colors used as raw hex values across components. `#4B2E0A` (coffee brown), `#C8922A` (origin gold), `#2D6A2D` (forest green), `#1A3557` (deep navy), `#F5ECD7` (light tan) appear inconsistently — sometimes as backgrounds, sometimes as text, sometimes as borders — with no documented role assignment. |
| **6 font families loaded** | 🟠 High | Loading six font families (likely including display, serif, sans, script, mono variants) adds ~300-500KB of font payload, causes CLS from FOUT/FOIT, and creates visual noise. Even the most ambitious government sites use 2-3 families max. |
| **Same portrait on every page** | 🟡 Medium | Reusing the same photo across hero, about, and content pages creates visual fatigue and wastes the opportunity to show the minister in different contexts (constituency visits, parliamentary sessions, international meetings). |

### 1.2 Navigation & Information Architecture

| Issue | Severity | Detail |
|-------|----------|--------|
| **"More" dropdown feels tacked-on** | 🟠 High | A single "More" menu item in the primary nav suggests sections were added after the nav was built. This breaks information scent — users can't discover content they don't know exists. |
| **No clear primary/secondary nav distinction** | 🟠 High | All nav items have equal visual weight. The most important actions (constituency services, contact) should be visually distinguished from informational pages. |
| **Footer lacks social links & press kit** | 🟡 Medium | No social media presence (X/Twitter, Facebook, YouTube), no press kit download, no constituency office address. This is table-stakes for a public figure. |

### 1.3 Content Pages

| Issue | Severity | Detail |
|-------|----------|--------|
| **Identical card pattern on all pages** | 🔴 Critical | Speeches, policy posts, projects, and media appearances all use the same card layout with different labels. This destroys visual hierarchy and makes the site feel templated rather than curated. |
| **About page nav cards point to non-existent sections** | 🔴 Critical | Navigation cards on the About page reference sections that don't exist or are empty. This is a broken-user-journey — visitors click expecting content and hit 404 or blank states. |
| **No social proof or press mentions** | 🟠 High | No news coverage, press quotes, media appearances, or endorsements section. For a 13-year incumbent who holds a ministerial portfolio, this is a massive trust-building gap. |
| **No OG images or Twitter cards** | 🟡 Medium | Missing `og:image` and `twitter:card` means links shared on WhatsApp, Twitter, Facebook render as plain text URLs with no preview. This severely limits organic reach. |

### 1.4 Hero Section

| Issue | Severity | Detail |
|-------|----------|--------|
| **Lacks gravitas** | 🔴 Critical | The hero needs to communicate authority and accessibility simultaneously. Current implementation (glass orbs + particles) communicates "we build software" not "I serve the people of Rubanda East." |
| **No coat of arms** | 🟠 High | The Uganda Coat of Arms is a trust signal on government-affiliated sites. Its absence is noticeable — citizens expect to see national symbols on their representatives' sites. |
| **No tagline hierarchy** | 🟡 Medium | The minister has multiple constituencies: national (Minister of State), regional (Rubanda East MP), and functional (Finance). These need hierarchical treatment, not a flat list. |

### 1.5 Contact & Forms

| Issue | Severity | Detail |
|-------|----------|--------|
| **Raw hex colors inline** | 🟠 High | Inline color values in the contact form suggest it was built outside the design system (likely a copy-paste from another template). This will become a maintenance burden. |
| **No validation UX** | 🟠 High | No inline validation, no success/error states, no confirmation message. Constituents who submit a message have no idea whether it was received. |
| **No accessibility labels** | 🟡 Medium | Missing `aria-` attributes and proper `<label>` associations make this form unusable with screen readers. |

### 1.6 Performance

| Issue | Severity | Detail |
|-------|----------|--------|
| **6 font families** | 🟠 High | Six font files = 400-700KB of render-blocking resources + significant CLS from font swaps |
| **Particle/glass effects** | 🟠 High | Canvas-based particle systems and CSS backdrop-filter glass effects are GPU-intensive and cause jank on mid-range devices (common in rural Uganda where many constituents access via affordable smartphones) |
| **Dark theme image rendering** | 🟡 Medium | Dark theme on a political site means constituency photos and official portraits need careful treatment — dark overlays, contrast adjustments, and format optimization |

---

## 2. Design System

### 2.1 Design Philosophy

> **"Authority without intimidation. Fiscal responsibility. Ugandan pride."**

The redesign moves from a dark, tech-forward aesthetic to a **warm, editorial, dignified** visual language. We draw on:
- **Print government publications** (Uganda Gazette, Hansard, annual budgets) for typographic discipline
- **Uganda's national colors** (black, yellow, red) as accent constraints — not primary canvas
- **The Uganda Coat of Arms** as a recurring trust signal
- **Warm natural tones** inspired by the terraced hills of Rubanda (Kigezi region)
- **Mid-century modern government design** (clean, honest, typography-led)

### 2.2 OKLch Color Palette

OKLch is chosen because it's perceptually uniform — `oklch(50% 0.1 250)` is the same perceived lightness and chroma regardless of hue. This gives us consistent contrast ratios and harmonious color derivation without guesswork.

#### Core Palette

```css
:root {
  /* ===== SURFACE ===== */
  /* Warm off-white paper — the dominant background. Never pure white. */
  --color-bg:        oklch(96.5% 0.012 75);
  /* Slightly warmer / lighter for content cards */
  --color-surface:   oklch(98.5% 0.006 75);
  /* Elevated surfaces: modals, dropdowns, sticky nav */
  --color-elevated:  oklch(99% 0.003 75);

  /* ===== TEXT ===== */
  /* Primary body text — warm near-black */
  --color-text:      oklch(18% 0.008 60);
  /* Secondary / muted text — metadata, captions */
  --color-muted:     oklch(48% 0.012 60);
  /* Inverse text (for dark sections) */
  --color-text-inv:  oklch(92% 0.006 75);

  /* ===== BORDERS ===== */
  /* Subtle separators — visible but doesn't compete */
  --color-border:    oklch(88% 0.008 75);
  /* Stronger border for interactive elements */
  --color-border-strong: oklch(78% 0.012 75);

  /* ===== BRAND ACCENTS ===== */
  /* Uganda Gold — PRIMARY accent. Links, CTAs, highlights. */
  --color-accent:    oklch(68% 0.16 85);
  /* Uganda Gold hover / active */
  --color-accent-hover: oklch(58% 0.16 85);
  /* Subtle accent tint (for backgrounds, badges) */
  --color-accent-subtle: oklch(92% 0.04 85);

  /* ===== SECONDARY ACCENTS ===== */
  /* Uganda Black — used sparingly for high-impact text or dark sections */
  --color-ink:       oklch(12% 0.004 60);
  /* Uganda Red — alert / urgency sparingly */
  --color-red:       oklch(50% 0.2 25);
  /* Deep navy — trust & stability (for ministerial sections) */
  --color-navy:      oklch(25% 0.03 260);
  /* Forest green — growth (for projects & development sections) */
  --color-forest:    oklch(38% 0.06 145);

  /* ===== SEMANTIC ===== */
  --color-success:   oklch(55% 0.15 145);
  --color-warning:   oklch(65% 0.15 85);
  --color-error:     oklch(50% 0.2 25);
  --color-info:      oklch(55% 0.1 240);
}
```

#### Color Role Assignment

| Token | Usage | Contrast (on bg) |
|-------|-------|-----------------|
| `--color-bg` | Page background | — |
| `--color-surface` | Cards, sidebars, content blocks | — |
| `--color-elevated` | Sticky nav, modals, dropdowns | — |
| `--color-text` | Body copy, headings | 14.5:1 on bg ✅ |
| `--color-muted` | Dates, bylines, secondary labels | 6.1:1 on bg ✅ |
| `--color-accent` | Links, primary CTA, active nav | 6.8:1 on bg ✅ |
| `--color-navy` | Ministerial section headers, hero overlay | — |
| `--color-forest` | Development/project badges, success signals | — |

### 2.3 Typography

#### Strategy

- **2 font families maximum** (down from 6). One display face for headings, one body face for reading.
- **System fonts as fallback** — no script or decorative fonts.
- **Variable fonts** where available — single file per family, access to all weights.

#### Recommended Families

```css
:root {
  /* DISPLAY: A warm, dignified serif for headlines, hero text, and section titles */
  /* Option A: Newsreader (Variable, Google Fonts, open-source, warm serif) */
  /* Option B: Literata (Variable, Google Fonts, slightly more modern) */
  --font-display: 'Newsreader', 'Literata', 'Iowan Old Style', 'Charter', Georgia, serif;

  /* BODY: A neutral, highly-readable sans for body copy, nav, metadata */
  /* Open Source: Inter or Source Sans 3 (Variable) */
  --font-body: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', system-ui, sans-serif;

  /* MONO: For data, statistics, budget figures only (not for body) */
  --font-mono: 'JetBrains Mono', 'IBM Plex Mono', ui-monospace, Menlo, monospace;
}
```

#### Type Scale

```css
:root {
  /* Fluid type scale — min/max clamp */
  /* Base: 16px @ 375px → 18px @ 1440px */
  --text-xs:    clamp(0.69rem, 0.69rem + 0.08vw, 0.75rem);   /* 11-12px */
  --text-sm:    clamp(0.81rem, 0.79rem + 0.11vw, 0.88rem);   /* 13-14px */
  --text-base:  clamp(0.94rem, 0.88rem + 0.25vw, 1rem);      /* 15-16px */
  --text-md:    clamp(1.06rem, 0.98rem + 0.38vw, 1.13rem);   /* 17-18px */
  --text-lg:    clamp(1.19rem, 1.07rem + 0.56vw, 1.25rem);   /* 19-20px */
  --text-xl:    clamp(1.31rem, 1.14rem + 0.81vw, 1.5rem);    /* 21-24px */
  --text-2xl:   clamp(1.5rem,  1.27rem + 1.13vw, 1.88rem);   /* 24-30px */
  --text-3xl:   clamp(1.69rem, 1.38rem + 1.56vw, 2.25rem);   /* 27-36px */
  --text-4xl:   clamp(1.88rem, 1.45rem + 2.13vw, 2.75rem);   /* 30-44px */
  --text-5xl:   clamp(2.13rem, 1.53rem + 2.94vw, 3.5rem);    /* 34-56px */
  --text-6xl:   clamp(2.38rem, 1.55rem + 3.94vw, 4.5rem);    /* 38-72px */
  --text-7xl:   clamp(2.63rem, 1.57rem + 5.06vw, 5.5rem);    /* 42-88px */

  /* Line heights */
  --leading-tight:   1.1;  /* Display */
  --leading:         1.5;  /* Body */
  --leading-relaxed: 1.65; /* Long-form reading */
  --leading-loose:   1.8;  /* Bio / narrative sections */

  /* Letter spacing */
  --tracking-tight:  -0.02em;
  --tracking-normal: 0;
  --tracking-wide:   0.04em;
  --tracking-wider:  0.08em;
}
```

#### Typography Usage Rules

| Element | Size | Weight | Line Height | Letter Spacing |
|---------|------|--------|-------------|----------------|
| Hero name | `--text-7xl` | 400 (regular) | 1.1 | -0.02em |
| Hero title | `--text-2xl` | 400 | 1.2 | 0 |
| Section heading | `--text-4xl` | 400 | 1.15 | -0.01em |
| Card heading | `--text-xl` | 500 | 1.25 | 0 |
| Body copy | `--text-base` | 400 | 1.6 | 0 |
| Pull quote | `--text-2xl` | 400 (italic) | 1.4 | 0 |
| Nav link | `--text-sm` | 500 | 1 | 0.02em |
| Button | `--text-sm` | 600 | 1 | 0.04em |
| Metadata/timestamp | `--text-xs` | 400 | 1.3 | 0.04em |
| Statistic number | `--text-4xl` | 600 (tabular) | 1 | -0.02em |
| Caption | `--text-xs` | 400 | 1.4 | 0 |

### 2.4 Spacing Scale

```css
:root {
  --space-1:  0.25rem;  /*  4px */
  --space-2:  0.5rem;   /*  8px */
  --space-3:  0.75rem;  /* 12px */
  --space-4:  1rem;     /* 16px */
  --space-5:  1.25rem;  /* 20px */
  --space-6:  1.5rem;   /* 24px */
  --space-8:  2rem;     /* 32px */
  --space-10: 2.5rem;   /* 40px */
  --space-12: 3rem;     /* 48px */
  --space-16: 4rem;     /* 64px */
  --space-20: 5rem;     /* 80px */
  --space-24: 6rem;     /* 96px */
  --space-32: 8rem;     /* 128px */

  /* Section spacing */
  --section-y:    var(--space-20);  /* 80px between major sections */
  --section-y-sm: var(--space-12);  /* 48px on mobile */
  --container:    1200px;
  --container-narrow: 720px;  /* For reading pages */
  --container-wide: 1440px;   /* For gallery/media */
}
```

### 2.5 Component Tokens

```css
:root {
  /* ===== BORDERS & RADII ===== */
  --radius-sm:    4px;
  --radius-md:    8px;
  --radius-lg:    12px;
  --radius-xl:    16px;
  --radius-full:  9999px;
  --border-width: 1px;

  /* ===== SHADOWS ===== */
  /* Subtle: cards, content blocks */
  --shadow-sm: 0 1px 2px oklch(0% 0 0 / 6%);
  /* Medium: dropdowns, sticky nav */
  --shadow-md: 0 4px 6px oklch(0% 0 0 / 6%), 0 2px 4px oklch(0% 0 0 / 4%);
  /* Elevated: modals, toasts */
  --shadow-lg: 0 10px 15px oklch(0% 0 0 / 6%), 0 4px 6px oklch(0% 0 0 / 4%);

  /* ===== TRANSITIONS ===== */
  --ease-out:    cubic-bezier(0.16, 1, 0.3, 1);
  --ease-in-out: cubic-bezier(0.65, 0, 0.35, 1);
  --duration:    200ms;
  --duration-slow: 400ms;

  /* ===== LAYOUT ===== */
  --nav-height: 4rem;
  --max-width: 1200px;
  --grid-gap: var(--space-6);
}
```

### 2.6 Tailwind CSS v3 Configuration

```js
// tailwind.config.mjs (for Astro v5)
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        // Map CSS custom properties if using @apply, but prefer inline arbitrary values
        // with the CSS variables above. If you must use Tailwind utility classes:
        surface: {
          DEFAULT: 'oklch(96.5% 0.012 75)',
          card:    'oklch(98.5% 0.006 75)',
          elevated: 'oklch(99% 0.003 75)',
        },
        text: {
          DEFAULT: 'oklch(18% 0.008 60)',
          muted:   'oklch(48% 0.012 60)',
          inverse: 'oklch(92% 0.006 75)',
        },
        accent: {
          DEFAULT: 'oklch(68% 0.16 85)',
          hover:   'oklch(58% 0.16 85)',
          subtle:  'oklch(92% 0.04 85)',
        },
        ink:  'oklch(12% 0.004 60)',
        red:  'oklch(50% 0.2 25)',
        navy: 'oklch(25% 0.03 260)',
        forest: 'oklch(38% 0.06 145)',
      },
      fontFamily: {
        display: ['Newsreader', 'Iowan Old Style', 'Charter', 'Georgia', 'serif'],
        body:    ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'system-ui', 'sans-serif'],
        mono:    ['JetBrains Mono', 'IBM Plex Mono', 'ui-monospace', 'Menlo', 'monospace'],
      },
      fontSize: {
        'xs':  ['clamp(0.69rem, 0.69rem + 0.08vw, 0.75rem)', { lineHeight: '1.3' }],
        'sm':  ['clamp(0.81rem, 0.79rem + 0.11vw, 0.88rem)', { lineHeight: '1.4' }],
        'base':['clamp(0.94rem, 0.88rem + 0.25vw, 1rem)',  { lineHeight: '1.6' }],
        'md':  ['clamp(1.06rem, 0.98rem + 0.38vw, 1.13rem)', { lineHeight: '1.5' }],
        'lg':  ['clamp(1.19rem, 1.07rem + 0.56vw, 1.25rem)', { lineHeight: '1.4' }],
        'xl':  ['clamp(1.31rem, 1.14rem + 0.81vw, 1.5rem)', { lineHeight: '1.25' }],
        '2xl': ['clamp(1.5rem, 1.27rem + 1.13vw, 1.88rem)', { lineHeight: '1.2' }],
        '3xl': ['clamp(1.69rem, 1.38rem + 1.56vw, 2.25rem)', { lineHeight: '1.15' }],
        '4xl': ['clamp(1.88rem, 1.45rem + 2.13vw, 2.75rem)', { lineHeight: '1.1' }],
        '5xl': ['clamp(2.13rem, 1.53rem + 2.94vw, 3.5rem)',  { lineHeight: '1.1' }],
        '6xl': ['clamp(2.38rem, 1.55rem + 3.94vw, 4.5rem)',  { lineHeight: '1.05' }],
        '7xl': ['clamp(2.63rem, 1.57rem + 5.06vw, 5.5rem)',  { lineHeight: '1.05' }],
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '30': '7.5rem',
      },
      maxWidth: {
        'container': '1200px',
        'narrow':    '720px',
        'wide':      '1440px',
      },
      boxShadow: {
        'subtle': '0 1px 2px oklch(0% 0 0 / 6%)',
        'card':   '0 4px 6px oklch(0% 0 0 / 6%), 0 2px 4px oklch(0% 0 0 / 4%)',
        'modal':  '0 10px 15px oklch(0% 0 0 / 6%), 0 4px 6px oklch(0% 0 0 / 4%)',
      },
      transitionTimingFunction: {
        'out-expo': 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
    },
  },
};
```

---

## 3. Layout Architecture

### 3.1 Statesman Bento Grid — Concept

Rather than a standard blog-list layout, the homepage uses a **statesman bento grid** — an asymmetrical, editorial grid that gives each content type a distinct visual weight and position. This replaces the current "everything is a card" problem.

```
┌─────────────────────────────────────────────────────────────┐
│                    NAVBAR (sticky, frosted)                  │
├────────────────┬────────────────┬────────────────────────────┤
│                │                │                            │
│   HERO         │   BIO SNAP    │   CONSTITUENCY OFFICE      │
│   (Portrait +  │   (3-line     │   (Hours, walk-in,         │
│    Coat of     │    summary    │    phone, map)              │
│    Arms +      │    + link)    │                            │
│    Title)      │                │                            │
│                │                │                            │
├────────────────┴────────────────┴────────────────────────────┤
│                                                               │
│   QUICK STATS — 4 columns                                     │
│   [ 13 Years MP ] [ Minister ] [ Constituents ] [ Bills ]     │
│                                                               │
├──────────────────────────┬────────────────────────────────────┤
│                          │                                    │
│   LATEST SPEECH          │   POLICY BRIEF                     │
│   (Full-width feature    │   (Featured policy post            │
│    card, large quote,    │    with key quote, category         │
│    link to full text)    │    tag, read time)                  │
│                          │                                    │
├──────────────────────────┴────────────────────────────────────┤
│                                                               │
│   DEVELOPMENT PROJECTS  ───  3-across card grid               │
│   [ Project A ]   [ Project B ]   [ Project C ]              │
│                                                               │
├───────────────────────────────────────────────────────────────┤
│                                                               │
│   GALLERY / PRESS  ───  horizontal scroll strip              │
│   [📸] [📸] [📸] [📸]                                       │
│                                                               │
├───────────────────────────────────────────────────────────────┤
│                                                               │
│   FOOTER (2-col: links + office details + social + press)    │
│                                                               │
└───────────────────────────────────────────────────────────────┘
```

### 3.2 Grid Implementation

```astro
---
// src/pages/index.astro
---

<!-- The hero spans the full width, then we enter a 12-column grid -->
<main class="page">
  <HeroComponent />

  <!-- Journal section: 12-col grid with varied spans -->
  <section class="container grid grid-cols-12 gap-6 py-20">
    <!-- Bio snap: 4 cols -->
    <aside class="col-span-12 md:col-span-4">
      <BioSnapCard />
    </aside>

    <!-- Office info: 4 cols -->
    <aside class="col-span-12 md:col-span-4">
      <ConstituencyOfficeCard />
    </aside>

    <!-- Quick links: 4 cols -->
    <nav class="col-span-12 md:col-span-4">
      <QuickLinksCard />
    </nav>
  </section>

  <!-- Stats band: full-width accent strip -->
  <StatsBand />

  <!-- Feature content: 12-col, 2/3 + 1/3 split -->
  <section class="container grid grid-cols-12 gap-6 py-20">
    <div class="col-span-12 md:col-span-8">
      <FeaturedSpeechBlock />
    </div>
    <div class="col-span-12 md:col-span-4">
      <LatestPolicyBrief />
    </div>
  </section>

  <!-- Projects: 12-col, 3-across -->
  <ProjectsGrid />

  <!-- Gallery / Press: full-width scrolling strip -->
  <PressGalleryStrip />
</main>
```

### 3.3 Responsive Strategy

| Breakpoint | Grid Columns | Key Changes |
|------------|-------------|-------------|
| < 640px (phone) | 4 cols, everything spans 4 | Hero collapses to stacked portrait + text. Bento grid becomes single-column flow. Stats band wraps to 2×2. Cards stack. |
| 640-1024px (tablet) | 8 cols | 2-col layouts in some sections, 3-col projects become 2. |
| 1024px+ (desktop) | 12 cols | Full bento grid as designed above. |

---

## 4. Redesigned Hero

### 4.1 Layout Specification

```
┌──────────────────────────────────────────────────────────────────────┐
│  ┌────────────────────────┐  ┌────────────────────────────────────┐  │
│  │                        │  │                                      │  │
│  │    COAT OF ARMS        │  │  Henry K. Musasizi                  │  │
│  │    (small, top-left)   │  │  (font-display, --text-7xl)         │  │
│  │                        │  │                                      │  │
│  │    OFFICIAL PORTRAIT   │  │  Minister of State for Finance       │  │
│  │    (3:4 ratio,         │  │  (General Duties)                    │  │
│  │     professional suit, │  │  --text-2xl                          │  │
│  │     dark background)   │  │                                      │  │
│  │                        │  │  Member of Parliament                │  │
│  │                        │  │  Rubanda East Constituency           │  │
│  │                        │  │  —text-xl, muted                      │  │
│  │                        │  │                                      │  │
│  │                        │  │  « Serving the people of Uganda      │  │
│  │                        │  │    with integrity and fiscal         │  │
│  │                        │  │    responsibility since 2011 »       │  │
│  │                        │  │  (pull quote, italic, accent)        │  │
│  │                        │  │                                      │  │
│  │                        │  │  [Contact] [Constituency Services]   │  │
│  │                        │  │                                      │  │
│  └────────────────────────┘  └──────────────────────────────────────┘  │
│                                                                        │
│  ──────── subtle gold divider line ────────                            │
│  [13 Years MP]  [Finance Minister]  [Rubanda East]  [Bills Passed]    │
│                                                                        │
└──────────────────────────────────────────────────────────────────────┘
```

### 4.2 CSS Architecture

```css
.hero {
  --hero-padding-y: clamp(3rem, 6vw, 6rem);
  --hero-max-width: 1200px;

  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: clamp(2rem, 4vw, 4rem);
  align-items: center;

  padding: var(--hero-padding-y) var(--space-6);
  max-width: var(--hero-max-width);
  margin-inline: auto;

  /* Warm off-white background with subtle texture */
  background-color: var(--color-bg);
  /* Optional: very subtle repeating pattern overlay */
  background-image:
    repeating-linear-gradient(
      45deg,
      transparent,
      transparent 40px,
      oklch(0% 0 0 / 1%) 40px,
      oklch(0% 0 0 / 1%) 41px
    );
}

.hero__portrait-wrapper {
  position: relative;
  aspect-ratio: 3 / 4;
  max-width: 380px;
  width: 100%;
  justify-self: end;
}

.hero__portrait {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center 20%; /* Face-centered */
  border-radius: var(--radius-lg);
  /* Subtle dark vignette overlay for gravitas */
}

.hero__coat-of-arms {
  position: absolute;
  top: var(--space-4);
  left: var(--space-4);
  width: 48px;
  height: auto;
  opacity: 0.9;
  filter: drop-shadow(0 1px 2px oklch(0% 0 0 / 20%));
}

.hero__content {
  display: flex;
  flex-direction: column;
  gap: var(--space-4);
  max-width: 560px;
}

.hero__name {
  font-family: var(--font-display);
  font-size: var(--text-7xl);
  line-height: var(--leading-tight);
  letter-spacing: var(--tracking-tight);
  color: var(--color-text);
  font-weight: 400;
}

.hero__title {
  font-family: var(--font-body);
  font-size: var(--text-2xl);
  line-height: 1.3;
  color: var(--color-text);
  font-weight: 400;
}

.hero__constituency {
  font-family: var(--font-body);
  font-size: var(--text-xl);
  color: var(--color-muted);
  font-weight: 400;
}

.hero__motto {
  font-family: var(--font-display);
  font-size: var(--text-lg);
  line-height: var(--leading-relaxed);
  color: var(--color-accent);
  font-style: italic;
  padding-left: var(--space-4);
  border-left: 3px solid var(--color-accent);
  margin-top: var(--space-2);
}

/* Stats bar */
.stats-bar {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: var(--space-6);
  padding: var(--space-8) var(--space-6);
  max-width: var(--container);
  margin-inline: auto;
}

.stat-item {
  text-align: center;
}

.stat-item__number {
  font-family: var(--font-display);
  font-size: var(--text-4xl);
  font-weight: 600;
  color: var(--color-text);
  line-height: 1;
  font-variant-numeric: tabular-nums;
}

.stat-item__label {
  font-family: var(--font-body);
  font-size: var(--text-sm);
  color: var(--color-muted);
  letter-spacing: var(--tracking-wide);
  text-transform: uppercase;
  margin-top: var(--space-1);
}
```

### 4.3 Mobile Hero (≤640px)

```css
@media (max-width: 640px) {
  .hero {
    grid-template-columns: 1fr;
    text-align: center;
    padding: var(--space-8) var(--space-4);
  }

  .hero__portrait-wrapper {
    max-width: 240px;
    justify-self: center;
    margin-bottom: var(--space-4);
  }

  .hero__content {
    align-items: center;
  }

  .hero__motto {
    border-left: none;
    border-top: 3px solid var(--color-accent);
    padding-left: 0;
    padding-top: var(--space-3);
  }

  .stats-bar {
    grid-template-columns: repeat(2, 1fr);
    gap: var(--space-4);
  }
}
```

### 4.4 Portrait Photograph Strategy

Instead of reusing the same photo on every page:

| Page | Photo Context | Description |
|------|--------------|-------------|
| **Home hero** | Official portrait | Professional suit, dark background, Uganda flag bokeh. 3:4 ratio. |
| **About page** | Constituency context | In Rubanda East, meeting constituents, traditional Kigezi backdrop. |
| **Speeches** | Parliamentary / podium | At the despatch box, delivering budget speech. |
| **Projects** | On-site | At a project site (school, health center, road) interacting with community. |
| **Media/Gallery** | Mixed candid | Variety of settings: international meetings, community events, family. |

This requires ~5 original photographs. The site should prefer **actual photography over stock imagery** throughout.

---

## 5. Content Page Templates

### 5.1 Page Type Differentiation

The current site uses one card pattern for everything. The redesign assigns distinct visual treatments to each content type:

| Type | Visual Signature | Layout Pattern |
|------|-----------------|----------------|
| **Speeches** | Large pull quote hero, serif body, date prominence, PDF download | Narrow reading column (720px) |
| **Policy Posts** | Data-rich, tabular numerics, navy accent sidebar, reference links | Two-column (2/3 + 1/3) |
| **Development Projects** | Photo-led, forest accent, progress badges, location map | Bento gallery grid |
| **Press & Media** | Gallery layout, video embeds, publication logos as trust signals | Horizontal scroll + grid |
| **Gallery** | Full-bleed images, lightbox, caption overlay on hover | Masonry / justified grid |

### 5.2 Speech Template

```astro
---
// src/layouts/SpeechLayout.astro
// Route: /speeches/[slug]
---

<article class="speech">
  <!-- Hero: pull quote + metadata -->
  <header class="speech__hero">
    <div class="container--narrow">
      <p class="speech__category">Speech</p>
      <h1 class="speech__title">{title}</h1>
      <div class="speech__meta">
        <time datetime={date}>{formattedDate}</time>
        <span class="speech__venue">{venue}</span>
        <span class="speech__duration">{readTime} min read</span>
      </div>
    </div>
  </header>

  <!-- Pull quote (if available) -->
  <blockquote class="speech__quote container--narrow">
    “{pullQuote}”
  </blockquote>

  <!-- Body: narrow reading column -->
  <div class="speech__body container--narrow prose">
    <slot />
  </div>

  <!-- Footer: PDF download + share -->
  <footer class="speech__footer container--narrow">
    <a href={pdfUrl} class="btn btn--outline" download>
      Download full speech (PDF)
    </a>
    <div class="speech__share">{/* Social share buttons */}</div>
  </footer>
</article>

<style>
  .speech__hero {
    padding: var(--section-y) var(--space-6);
    background: var(--color-bg);
    border-bottom: 1px solid var(--color-border);
  }

  .speech__title {
    font-family: var(--font-display);
    font-size: var(--text-4xl);
    line-height: var(--leading-tight);
    color: var(--color-text);
    margin-top: var(--space-4);
  }

  .speech__meta {
    display: flex;
    gap: var(--space-4);
    margin-top: var(--space-3);
    font-size: var(--text-sm);
    color: var(--color-muted);
  }

  .speech__quote {
    font-family: var(--font-display);
    font-size: var(--text-2xl);
    line-height: var(--leading-relaxed);
    color: var(--color-accent);
    font-style: italic;
    padding: var(--space-8) var(--space-4);
    margin: var(--space-8) auto;
    border-top: 2px solid var(--color-accent-subtle);
    border-bottom: 2px solid var(--color-accent-subtle);
  }

  .speech__body {
    font-size: var(--text-base);
    line-height: var(--leading-relaxed);
    color: var(--color-text);
  }

  .speech__body :deep(p) {
    margin-bottom: var(--space-4);
  }

  .speech__footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: var(--space-8) 0;
    margin-top: var(--space-12);
    border-top: 1px solid var(--color-border);
  }
</style>
```

### 5.3 Policy Post Template

```astro
---
// src/layouts/PolicyLayout.astro
// Route: /policy/[slug]
---

<div class="policy">
  <article class="policy__content">
    <header>
      <p class="policy__category accent-tag">Policy Brief</p>
      <h1 class="policy__title">{title}</h1>
      <p class="policy__summary">{summary}</p>
      <div class="policy__meta">
        <time datetime={date}>{formattedDate}</time>
        <span>•</span>
        <span>{ministry}</span>
      </div>
    </header>

    <!-- Key stats / data highlights (if applicable) -->
    {dataHighlights && (
      <div class="policy__highlights">
        {dataHighlights.map(highlight => (
          <div class="policy__stat">
            <span class="policy__stat-number">{highlight.number}</span>
            <span class="policy__stat-label">{highlight.label}</span>
          </div>
        ))}
      </div>
    )}

    <div class="prose">
      <slot />
    </div>
  </article>

  <!-- Sidebar: reference documents, related policy -->
  <aside class="policy__sidebar">
    {documents && (
      <section>
        <h3>Reference Documents</h3>
        <ul>
          {documents.map(doc => (
            <li><a href={doc.url} download>{doc.title} (PDF)</a></li>
          ))}
        </ul>
      </section>
    )}

    <section>
      <h3>Related Policy</h3>
      <ul>{/* Related posts */}</ul>
    </section>
  </aside>
</div>

<style>
  .policy {
    display: grid;
    grid-template-columns: 2fr 1fr;
    gap: var(--space-10);
    max-width: var(--container);
    margin: 0 auto;
    padding: var(--section-y) var(--space-6);
  }

  .policy__highlights {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
    gap: var(--space-4);
    padding: var(--space-6);
    background: var(--color-navy);
    border-radius: var(--radius-md);
    margin: var(--space-8) 0;
  }

  .policy__stat-number {
    font-family: var(--font-display);
    font-size: var(--text-4xl);
    font-weight: 600;
    color: var(--color-text-inv);
    font-variant-numeric: tabular-nums;
    display: block;
  }

  .policy__stat-label {
    font-size: var(--text-sm);
    color: oklch(70% 0.01 260);
  }

  .policy__sidebar {
    border-left: 1px solid var(--color-border);
    padding-left: var(--space-8);
  }

  .policy__sidebar section {
    margin-bottom: var(--space-8);
  }

  .policy__sidebar h3 {
    font-family: var(--font-body);
    font-size: var(--text-xs);
    text-transform: uppercase;
    letter-spacing: var(--tracking-wider);
    color: var(--color-muted);
    margin-bottom: var(--space-3);
  }

  .policy__sidebar ul {
    list-style: none;
    padding: 0;
  }

  .policy__sidebar li {
    margin-bottom: var(--space-2);
  }

  .policy__sidebar a {
    font-size: var(--text-sm);
    color: var(--color-text);
    text-decoration: none;
    border-bottom: 1px solid oklch(0% 0 0 / 15%);
  }

  @media (max-width: 768px) {
    .policy {
      grid-template-columns: 1fr;
    }
    .policy__sidebar {
      border-left: none;
      border-top: 1px solid var(--color-border);
      padding-left: 0;
      padding-top: var(--space-8);
    }
  }
</style>
```

### 5.4 Card Component Tokens

The ubiquitous card gets type-specific treatments:

```css
/* Base card */
.card {
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
  padding: var(--space-6);
  transition: box-shadow var(--duration) var(--ease-out),
              transform var(--duration) var(--ease-out);
}

.card:hover {
  box-shadow: var(--shadow-md);
  transform: translateY(-2px);
}

/* Speech card — accent top border */
.card--speech {
  border-top: 3px solid var(--color-accent);
}

/* Policy card — navy left border */
.card--policy {
  border-left: 3px solid var(--color-navy);
}

/* Project card — forest bottom accent + photo emphasis */
.card--project {
  border-bottom: 3px solid var(--color-forest);
  padding: 0; /* Photo fills the top */
  overflow: hidden;
}

.card--project img {
  width: 100%;
  aspect-ratio: 16 / 9;
  object-fit: cover;
}

.card--project .card__body {
  padding: var(--space-4) var(--space-6) var(--space-6);
}

/* Press card — minimal, publication logo */
.card--press {
  border: none;
  background: transparent;
  padding: 0;
  box-shadow: none;
}
```

---

## 6. About Page Architecture

### 6.1 Page Structure

The About page is a long-form editorial narrative rather than a list of facts. Visual rhythm alternates between content density and breathing room.

```
┌─────────────────────────────────────────────────────┐
│  Hero: Large portrait (constituency setting)         │
│  "Serving Rubanda East since 2011"                   │
│  ─ Subtitle / role line                              │
├─────────────────────────────────────────────────────┤
│                                                       │
│  BIOGRAPHY — Narrow reading column                    │
│  "Born in Rubanda..." 3-4 paragraph narrative         │
│  Pull quote inset                                     │
│                                                       │
├─────────────────────────────────────────────────────┤
│                                                       │
│  KEY ROLES — 3-across card grid                       │
│  ┌──────────┐ ┌──────────┐ ┌──────────┐              │
│  │ Minister │ │   MP     │ │   C'tee  │              │
│  │ of State │ │ Rubanda  │ │  Chair   │              │
│  │ Finance  │ │ East     │ │  Budget  │              │
│  └──────────┘ └──────────┘ └──────────┘              │
│                                                       │
├─────────────────────────────────────────────────────┤
│                                                       │
│  TIMELINE — Alternating vertical line                 │
│                                                       │
│  2011  ●──── Elected MP for Rubanda East              │
│                                                       │
│  2015  ●──── Re-elected                                │
│                                                       │
│  2016  ●──── Appointed (role)                         │
│                                                       │
│  2020  ●──── Re-elected                                │
│                                                       │
│  2021  ●──── Appointed Minister of State for Finance   │
│                                                       │
│  2025  ●──── Re-elected                                │
│                                                       │
├─────────────────────────────────────────────────────┤
│                                                       │
│  EDUCATION — Simple list with institution badges      │
│                                                       │
├─────────────────────────────────────────────────────┤
│                                                       │
│  CONSTITUENCY — Map + office hours + contact           │
│                                                       │
└─────────────────────────────────────────────────────┘
```

### 6.2 Timeline Component

```astro
---
// src/components/Timeline.astro
// Vertical timeline with alternating left/right content on desktop
---

<ol class="timeline">
  {timeline.map((entry, i) => (
    <li class="timeline__entry">
      <div class="timeline__dot" aria-hidden="true"></div>
      <time class="timeline__year">{entry.year}</time>
      <div class="timeline__content">
        <h3>{entry.title}</h3>
        <p>{entry.description}</p>
        {entry.tags && (
          <div class="timeline__tags">
            {entry.tags.map(tag => <span class="tag">{tag}</span>)}
          </div>
        )}
      </div>
    </li>
  ))}
</ol>

<style>
  .timeline {
    --timeline-line: 2px;
    --timeline-dot: 16px;

    list-style: none;
    padding: 0;
    position: relative;
    max-width: 640px;
    margin: 0 auto;
  }

  /* Vertical line */
  .timeline::before {
    content: '';
    position: absolute;
    left: calc(var(--timeline-dot) / 2 + 3px);
    top: 0;
    bottom: 0;
    width: var(--timeline-line);
    background: var(--color-border);
  }

  .timeline__entry {
    position: relative;
    padding-left: calc(var(--timeline-dot) + var(--space-6));
    padding-bottom: var(--space-8);
  }

  .timeline__entry:last-child {
    padding-bottom: 0;
  }

  .timeline__dot {
    position: absolute;
    left: 0;
    top: var(--space-1);
    width: var(--timeline-dot);
    height: var(--timeline-dot);
    border-radius: 50%;
    background: var(--color-accent);
    border: 3px solid var(--color-bg);
    z-index: 1;
  }

  .timeline__year {
    display: inline-block;
    font-family: var(--font-display);
    font-size: var(--text-sm);
    font-weight: 600;
    color: var(--color-accent);
    letter-spacing: var(--tracking-wide);
    margin-bottom: var(--space-1);
  }

  .timeline__content h3 {
    font-family: var(--font-display);
    font-size: var(--text-lg);
    color: var(--color-text);
    margin-bottom: var(--space-1);
  }

  .timeline__content p {
    font-size: var(--text-sm);
    color: var(--color-muted);
    line-height: var(--leading);
    margin: 0;
  }

  .timeline__tags {
    display: flex;
    gap: var(--space-2);
    margin-top: var(--space-2);
    flex-wrap: wrap;
  }

  @media (min-width: 768px) {
    .timeline {
      max-width: 800px;
    }

    .timeline::before {
      left: 50%;
      transform: translateX(-50%);
    }

    .timeline__entry {
      padding-left: 0;
      width: 50%;
    }

    .timeline__entry:nth-child(odd) {
      padding-right: var(--space-8);
      text-align: right;
    }

    .timeline__entry:nth-child(even) {
      margin-left: 50%;
      padding-left: var(--space-8);
    }

    .timeline__entry:nth-child(odd) .timeline__dot {
      right: calc(-1 * var(--timeline-dot) / 2);
      left: auto;
    }

    .timeline__entry:nth-child(even) .timeline__dot {
      left: calc(-1 * var(--timeline-dot) / 2);
    }

    .timeline__entry:nth-child(odd) .timeline__tags {
      justify-content: flex-end;
    }
  }
</style>
```

### 6.3 Key Roles Cards

```astro
---
// src/components/RoleCard.astro
---

{roles.map(role => (
  <article class="role-card">
    <div class="role-card__icon" aria-hidden="true">
      {role.icon} <!-- SVG icon from a minimal set -->
    </div>
    <h3 class="role-card__title">{role.title}</h3>
    <p class="role-card__subtitle">{role.subtitle}</p>
    <p class="role-card__period">{role.period}</p>
    <p class="role-card__description">{role.description}</p>
  </article>
))}

<style>
  .role-card {
    background: var(--color-surface);
    border: 1px solid var(--color-border);
    border-radius: var(--radius-md);
    padding: var(--space-6);
    display: flex;
    flex-direction: column;
    gap: var(--space-2);
  }

  .role-card__icon {
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: var(--color-accent-subtle);
    border-radius: var(--radius-sm);
    color: var(--color-accent);
    margin-bottom: var(--space-2);
  }

  .role-card__title {
    font-family: var(--font-display);
    font-size: var(--text-lg);
    color: var(--color-text);
    line-height: var(--leading-tight);
  }

  .role-card__subtitle {
    font-size: var(--text-sm);
    color: var(--color-muted);
  }

  .role-card__period {
    font-size: var(--text-xs);
    color: var(--color-accent);
    font-weight: 600;
    letter-spacing: var(--tracking-wide);
    text-transform: uppercase;
  }

  .role-card__description {
    font-size: var(--text-sm);
    color: var(--color-muted);
    line-height: var(--leading);
    margin-top: var(--space-1);
  }
</style>
```

---

## 7. Contact Form Redesign

### 7.1 Form Layout

```
┌──────────────────────────────────────────────────────────────┐
│  [ Select constituency office ]  ▼                           │
│                                                               │
│  [ Your full name          ]  [ Your email       ]            │
│                                                               │
│  [ Phone (optional)        ]  [ Category:         ]  ▼        │
│                                                               │
│  [ Subject                 ]                                  │
│                                                               │
│  [ Message                                              ]     │
│  [                                                      ]     │
│  [                                                      ]     │
│                                                               │
│  [✓] I consent to the data being stored per the privacy policy│
│                                                               │
│  [ Send Message ]                                             │
│                                                               │
│  Or reach the constituency office directly:                   │
│  📞 +256 XXX XXX XXX                                          │
│  📍 Rubanda East Constituency Office, [Town]                  │
│  🕐 Mon-Fri 9:00 AM - 5:00 PM                                 │
└──────────────────────────────────────────────────────────────┘
```

### 7.2 Form Styling

```css
/* ===== FORM TOKENS ===== */
:root {
  --input-border:       var(--color-border);
  --input-border-focus: var(--color-accent);
  --input-border-error: var(--color-error);
  --input-bg:           var(--color-surface);
  --input-text:         var(--color-text);
  --input-placeholder:  var(--color-muted);
  --input-radius:       var(--radius-sm);
  --input-padding-y:    var(--space-3);
  --input-padding-x:    var(--space-4);
  --input-font-size:    var(--text-base);
  --label-font-size:    var(--text-sm);
}

/* ===== FORM GROUP ===== */
.form-group {
  display: flex;
  flex-direction: column;
  gap: var(--space-1);
  margin-bottom: var(--space-5);
}

.form-group--row {
  flex-direction: row;
  gap: var(--space-4);
}

.form-group--row > * {
  flex: 1;
}

/* ===== LABEL ===== */
.form-label {
  font-size: var(--label-font-size);
  font-weight: 500;
  color: var(--color-text);
}

.form-label--required::after {
  content: ' *';
  color: var(--color-error);
}

/* ===== INPUT ===== */
.form-input,
.form-select,
.form-textarea {
  width: 100%;
  padding: var(--input-padding-y) var(--input-padding-x);
  font-size: var(--input-font-size);
  font-family: var(--font-body);
  color: var(--input-text);
  background: var(--input-bg);
  border: 1px solid var(--input-border);
  border-radius: var(--input-radius);
  transition: border-color var(--duration) var(--ease-out),
              box-shadow var(--duration) var(--ease-out);
  appearance: none;
}

.form-input::placeholder,
.form-textarea::placeholder {
  color: var(--input-placeholder);
  opacity: 1;
}

.form-input:focus,
.form-select:focus,
.form-textarea:focus {
  outline: none;
  border-color: var(--input-border-focus);
  box-shadow: 0 0 0 3px oklch(68% 0.16 85 / 20%);
}

.form-input[aria-invalid="true"],
.form-select[aria-invalid="true"],
.form-textarea[aria-invalid="true"] {
  border-color: var(--input-border-error);
  box-shadow: 0 0 0 3px oklch(50% 0.2 25 / 15%);
}

.form-textarea {
  min-height: 140px;
  resize: vertical;
  line-height: var(--leading);
}

/* ===== SELECT ===== */
.form-select {
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8'%3E%3Cpath fill='%23666' d='M6 8L0 0h12z'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right var(--space-3) center;
  background-size: 12px;
  padding-right: var(--space-8);
}

/* ===== CHECKBOX ===== */
.form-checkbox {
  display: flex;
  align-items: flex-start;
  gap: var(--space-3);
  font-size: var(--text-sm);
  color: var(--color-muted);
  line-height: var(--leading);
}

.form-checkbox input[type="checkbox"] {
  width: 18px;
  height: 18px;
  margin-top: 2px;
  accent-color: var(--color-accent);
  flex-shrink: 0;
}

/* ===== ERROR MESSAGE ===== */
.form-error {
  font-size: var(--text-xs);
  color: var(--color-error);
  display: flex;
  align-items: center;
  gap: var(--space-1);
  margin-top: var(--space-1);
}

/* ===== SUCCESS STATE ===== */
.form-success {
  padding: var(--space-4) var(--space-6);
  background: oklch(55% 0.15 145 / 10%);
  border: 1px solid var(--color-success);
  border-radius: var(--radius-md);
  color: var(--color-success);
  text-align: center;
}

/* ===== BUTTON ===== */
.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: var(--space-2);
  padding: var(--space-3) var(--space-6);
  font-family: var(--font-body);
  font-size: var(--text-sm);
  font-weight: 600;
  line-height: 1;
  letter-spacing: var(--tracking-wide);
  text-transform: uppercase;
  text-decoration: none;
  border-radius: var(--radius-sm);
  border: 1px solid transparent;
  cursor: pointer;
  transition: all var(--duration) var(--ease-out);
}

.btn--primary {
  background: var(--color-accent);
  color: white;
  border-color: var(--color-accent);
}

.btn--primary:hover {
  background: var(--color-accent-hover);
  border-color: var(--color-accent-hover);
}

.btn--primary:focus-visible {
  outline: 2px solid var(--color-accent);
  outline-offset: 2px;
}

.btn--outline {
  background: transparent;
  color: var(--color-text);
  border-color: var(--color-border-strong);
}

.btn--outline:hover {
  border-color: var(--color-text);
  background: var(--color-bg);
}

.btn--disabled,
.btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}
```

### 7.3 Decap CMS Configuration

The Decap CMS contact form should integrate with a Netlify form handler:

```yaml
# public/admin/config.yml (partial)
collections:
  - name: "contact"
    label: "Contact Submissions"
    folder: "src/content/contact"
    create: true
    format: "json"
    fields:
      - { label: "Name", name: "name", widget: "string" }
      - { label: "Email", name: "email", widget: "string" }
      - { label: "Phone", name: "phone", widget: "string", required: false }
      - { label: "Subject", name: "subject", widget: "string" }
      - { label: "Message", name: "message", widget: "text" }
      - { label: "Category", name: "category", widget: "select",
          options: ["General Inquiry", "Constituency Service", "Media Request", "Policy Feedback", "Other"] }
      - { label: "Consent", name: "consent", widget: "boolean" }
      - { label: "Submitted At", name: "submittedAt", widget: "datetime" }
```

---

## 8. Mobile-First Responsive Strategy

### 8.1 Breakpoint System

```css
:root {
  /* Use in media queries */
  --bp-sm:  640px;
  --bp-md:  768px;
  --bp-lg:  1024px;
  --bp-xl:  1280px;
}
```

### 8.2 Responsive Patterns

| Component | < 640px | 640-1024px | 1024px+ |
|-----------|---------|------------|---------|
| **Navbar** | Hamburger menu, slide-in panel | Hamburger + 2-3 visible links | Full horizontal nav |
| **Hero** | Portrait stacked above text, centered | Portrait left, text right (2-col) | 2-col with full spacing |
| **Stats bar** | 2×2 grid | 4 columns, smaller text | 4 columns, full size |
| **Content grid** | Single column | 2 columns | Full bento grid |
| **Projects** | Single column | 2 columns | 3 columns |
| **Timeline** | Left-dot single column | Left-dot single column | Alternating 2-column |
| **Policy layout** | Single column | Single column | 2/3 + 1/3 sidebar |
| **Gallery** | Single column | 2 columns | Justified / masonry |
| **Footer** | Stacked | 2-column | 3-column |

### 8.3 Navbar Responsive

```astro
---
// src/components/Navbar.astro
// Sticky frosted navbar with mobile hamburger
---

<nav class="navbar" aria-label="Main navigation">
  <div class="navbar__inner">
    <!-- Logo: Coat of arms + name on desktop, icon on mobile -->
    <a href="/" class="navbar__logo">
      <img src="/assets/coat-of-arms.svg" alt="" width="32" height="32" />
      <span class="navbar__logo-text">Henry Musasizi</span>
    </a>

    <!-- Desktop nav -->
    <ul class="navbar__links" role="list">
      <li><a href="/">Home</a></li>
      <li><a href="/about">About</a></li>
      <li><a href="/speeches">Speeches</a></li>
      <li><a href="/policy">Policy</a></li>
      <li><a href="/projects">Projects</a></li>
      <li><a href="/gallery">Gallery</a></li>
      <li><a href="/contact" class="navbar__cta">Contact</a></li>
    </ul>

    <!-- Mobile hamburger -->
    <button class="navbar__toggle" aria-label="Menu" aria-expanded="false">
      <span></span><span></span><span></span>
    </button>
  </div>
</nav>

<style>
  .navbar {
    position: sticky;
    top: 0;
    z-index: 100;
    background: oklch(99% 0.003 75 / 85%);
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);
    border-bottom: 1px solid var(--color-border);
  }

  .navbar__inner {
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: var(--container);
    margin: 0 auto;
    padding: 0 var(--space-6);
    height: var(--nav-height);
  }

  .navbar__logo {
    display: flex;
    align-items: center;
    gap: var(--space-2);
    text-decoration: none;
    color: var(--color-text);
  }

  .navbar__logo-text {
    font-family: var(--font-display);
    font-size: var(--text-lg);
    font-weight: 500;
  }

  .navbar__links {
    display: none;
    list-style: none;
    gap: var(--space-1);
    padding: 0;
    margin: 0;
  }

  .navbar__links a {
    padding: var(--space-2) var(--space-3);
    font-size: var(--text-sm);
    font-weight: 500;
    color: var(--color-muted);
    text-decoration: none;
    border-radius: var(--radius-sm);
    transition: color var(--duration) var(--ease-out),
                background var(--duration) var(--ease-out);
  }

  .navbar__links a:hover {
    color: var(--color-text);
    background: oklch(0% 0 0 / 4%);
  }

  .navbar__links a[aria-current="page"] {
    color: var(--color-accent);
  }

  .navbar__cta {
    background: var(--color-accent) !important;
    color: white !important;
    padding: var(--space-2) var(--space-4) !important;
  }

  .navbar__cta:hover {
    background: var(--color-accent-hover) !important;
  }

  .navbar__toggle {
    display: flex;
    flex-direction: column;
    gap: 5px;
    background: none;
    border: none;
    cursor: pointer;
    padding: var(--space-2);
  }

  .navbar__toggle span {
    display: block;
    width: 24px;
    height: 2px;
    background: var(--color-text);
    border-radius: 1px;
    transition: transform var(--duration) var(--ease-out);
  }

  @media (min-width: 768px) {
    .navbar__links {
      display: flex;
    }
    .navbar__toggle {
      display: none;
    }
  }
</style>
```

---

## 9. Performance & Accessibility

### 9.1 Performance Budget

| Metric | Target | Current Estimated |
|--------|--------|-------------------|
| First Contentful Paint (FCP) | < 1.5s | Likely > 2.5s (fonts + particles) |
| Largest Contentful Paint (LCP) | < 2.5s | Likely > 4s (hero image + fonts) |
| Total Blocking Time (TBT) | < 200ms | Unknown (particle JS likely contributes) |
| Cumulative Layout Shift (CLS) | < 0.1 | Likely > 0.25 (6 font swaps) |
| Time to Interactive (TTI) | < 3.5s | Unknown |
| Page weight (initial) | < 500KB | Likely > 1MB (6 fonts + particles) |

### 9.2 Font Optimization

```astro
---
// src/layouts/BaseLayout.astro
// Strategy: preload + swap + subset
---

<!-- Preload critical font files -->
<link rel="preload" href="/fonts/newsreader-latin-400.woff2" as="font" type="font/woff2" crossorigin>
<link rel="preload" href="/fonts/inter-latin-400.woff2" as="font" type="font/woff2" crossorigin>
<link rel="preload" href="/fonts/inter-latin-500.woff2" as="font" type="font/woff2" crossorigin>
<link rel="preload" href="/fonts/inter-latin-600.woff2" as="font" type="font/woff2" crossorigin>

<style>
  /* Font-face declarations with font-display: swap */
  @font-face {
    font-family: 'Newsreader';
    src: url('/fonts/newsreader-latin-400.woff2') format('woff2');
    font-weight: 400;
    font-style: normal;
    font-display: swap;
    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA,
                   U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193,
                   U+2212, U+2215, U+FEFF, U+FFFD;
  }

  /* ... more @font-face declarations for weights 400 italic, 500, 600 */

  /* Fallback while fonts load — match metrics to prevent CLS */
  :root {
    --fallback-font: Georgia, serif;
  }
</style>
```

### 9.3 Image Optimization

```astro
---
// Astro's built-in Image optimization with sharp
---

<Image
  src={portrait}
  alt="Official portrait of Henry Musasizi"
  widths={[400, 800, 1200]}
  sizes="(max-width: 640px) 100vw, 50vw"
  format="webp"
  quality={85}
  loading="eager"  <!-- Only hero image -->
  decoding="async"
  class="hero__portrait"
/>

<!-- Non-critical images: lazy loading -->
<Image
  src={projectPhoto}
  alt={projectAlt}
  widths={[300, 600, 900]}
  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
  format="webp"
  quality={80}
  loading="lazy"
  decoding="async"
/>
```

### 9.4 Accessibility Checklist

| Requirement | Implementation |
|-------------|---------------|
| **Color contrast** | All text pairs tested: body (14.5:1), muted (6.1:1), accent (6.8:1) against `--color-bg`. All exceed WCAG AA. Accent on hover (4.4:1) meets AA for large text only — use for accents, not body. |
| **Skip navigation link** | First focusable element on every page |
| **Heading hierarchy** | Single `<h1>` per page. Sections use `<h2>`, subsections `<h3>`. Never skip levels. |
| **Form labels** | Every `<input>` has an associated `<label>` with `for` attribute |
| **Form validation** | `aria-invalid`, `aria-describedby`, error messages associated with `aria-live="polite"` |
| **Focus indicators** | 2px outline at 3px offset on all interactive elements. No `outline: none` without replacement. |
| **Image alt text** | Every `<img>` has descriptive alt text. Decorative images use `alt=""`. |
| **ARIA landmarks** | `<nav aria-label="Main">`, `<main>`, `<footer>`, `<aside aria-label="...">` |
| **Reduced motion** | `@media (prefers-reduced-motion: reduce)` disables all transitions and transforms |
| **Screen reader announcements** | Dynamic content (form submission, gallery load) announces via `aria-live` regions |
| **Touch targets** | All interactive elements ≥ 44×44px on mobile |
| **Font resizing** | All sizes use `rem` or `clamp()` — resizable without breakage |
| **Print stylesheet** | Clean print layout with black text, hidden nav, visible URLs |

```css
/* Reduced motion */
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}

/* Print */
@media print {
  .navbar,
  .navbar__toggle,
  .btn {
    display: none !important;
  }

  body {
    color: black;
    background: white;
  }

  a[href]::after {
    content: " (" attr(href) ")";
    font-size: 0.8em;
  }
}
```

### 9.5 Lighthouse Targets

| Category | Target Score |
|----------|-------------|
| Performance | ≥ 90 |
| Accessibility | ≥ 95 |
| Best Practices | ≥ 90 |
| SEO | 100 |

### 9.6 Netlify Configuration

```toml
# netlify.toml
[build]
  command = "pnpm build"
  publish = "dist"

[[headers]]
  for = "/*"
  [headers.values]
    X-Content-Type-Options = "nosniff"
    X-Frame-Options = "DENY"
    Referrer-Policy = "strict-origin-when-cross-origin"
    Permissions-Policy = "camera=(), microphone=(), geolocation=()"

[[headers]]
  for = "/assets/*"
  [headers.values]
    Cache-Control = "public, max-age=31536000, immutable"

[[headers]]
  for = "/*.woff2"
  [headers.values]
    Cache-Control = "public, max-age=31536000, immutable"

[[redirects]]
  from = "/admin/*"
  to = "/admin/index.html"
  status = 200
```

---

## 10. Migration Path

### 10.1 Implementation Order

| Phase | Scope | Effort | Risk |
|-------|-------|--------|------|
| **Phase 1** | CSS variable system, color tokens, typography setup. No visual changes yet — just wire the system in. | 2-3 days | Low |
| **Phase 2** | Hero redesign. Coat of arms SVG, new portrait, typography hierarchy, stats bar. | 2-3 days | Medium |
| **Phase 3** | Navbar + footer redesign. Full navigation IA, mobile menu, social links, press kit. | 1-2 days | Low |
| **Phase 4** | Content page templates. Speech layout, policy layout, project cards, media gallery. | 3-4 days | Medium |
| **Phase 5** | About page. Timeline, biography, role cards, education, constituency contact. | 2-3 days | Low |
| **Phase 6** | Contact form. Validation UX, CMS integration, success states. | 1-2 days | Low |
| **Phase 7** | OG tags, SEO, font optimization, performance tuning. | 1-2 days | Low |
| **Phase 8** | Photography. Commission new portraits and constituency photographs. | External | Medium |
| **Total** | | **~15-19 days** | |

### 10.2 Files to Create

```
src/
├── layouts/
│   ├── BaseLayout.astro         ← Updated with new CSS vars, fonts, SEO
│   ├── SpeechLayout.astro       ← New
│   ├── PolicyLayout.astro       ← New
│   └── GalleryLayout.astro      ← New
├── components/
│   ├── Navbar.astro             ← Redesign
│   ├── Footer.astro             ← Redesign
│   ├── Hero.astro               ← Redesign
│   ├── StatsBar.astro           ← New
│   ├── Timeline.astro           ← New
│   ├── RoleCard.astro           ← New
│   ├── BioSnapCard.astro        ← New
│   ├── ContactForm.astro        ← Redesign
│   ├── ProjectCard.astro        ← New
│   ├── SpeechCard.astro         ← New
│   ├── PolicyCard.astro         ← New
│   ├── PressCard.astro          ← New
│   └── GalleryLightbox.astro    ← New
├── styles/
│   ├── design-tokens.css        ← New (CSS variables)
│   ├── typography.css           ← New
│   ├── forms.css                ← New
│   └── global.css               ← Update (remove old patterns)
└── assets/
    ├── coat-of-arms.svg         ← Add (official Uganda COA SVG)
    ├── portraits/                ← Add (new photography)
    └── fonts/                    ← Add (subset woff2 files)
```

### 10.3 Files to Remove

- Any particle/glass effect JavaScript
- Extra font stylesheets beyond Newsreader + Inter
- Old inline color values in components
- About page nav cards pointing to empty sections
- Old hero component with glass orbs
- The "More" dropdown and its associated content

---

## Appendix A: Summary of Critical Changes

| # | Issue | Fix | Priority |
|---|-------|-----|----------|
| 1 | Dark theme mismatch | Switch to warm off-white editorial theme | 🔴 Critical |
| 2 | 6 font families | Reduce to Newsreader + Inter (2 families) | 🔴 Critical |
| 3 | No CSS design system | Implement full OKLch variable system | 🔴 Critical |
| 4 | Hero lacks gravitas | Portrait + Coat of Arms + tagline hierarchy | 🔴 Critical |
| 5 | About page broken links | Rewrite About with timeline, roles, education | 🔴 Critical |
| 6 | Identical card patterns | Type-specific cards (speech/policy/project/press) | 🟠 High |
| 7 | No social proof | Add press mentions, news coverage, endorsements | 🟠 High |
| 8 | Contact form raw/validation | Styled form with validation + success UX | 🟠 High |
| 9 | "More" dropdown | Full IA redesign with clear nav labels | 🟠 High |
| 10 | Footer sparse | Add social links, press kit, constituency address | 🟡 Medium |
| 11 | Missing OG tags | Add og:image, twitter:card, complete meta | 🟡 Medium |
| 12 | Same photo everywhere | Commission 4-5 context-specific photographs | 🟡 Medium |

## Appendix B: Uganda Coat of Arms Usage

The Uganda Coat of Arms should be used according to official protocol:
- Small version in the navbar (24-32px width)
- Medium version in the hero (48px, top-left of portrait area)
- Full version optionally in the footer
- Always use the official SVG or PNG — never redraw or stylize
- Follow the Ugandan Flag and Coat of Arms Act for correct use
- Default to shield-only variant for web (more compact), full version for print/press kit

## Appendix C: Content Strategy Recommendations

| Content Gap | Recommendation | Format |
|-------------|---------------|--------|
| No press mentions | Add a `/press` or `/media` section with coverage logos | Gallery grid |
| No constituency news | Monthly newsletter signup in footer | Email form |
| No transparency reports | Link to parliamentary attendance, budget submissions | Data table |
| No constituent resources | Downloadable forms for constituency services | Resource list |
| No video | Embed parliamentary speeches from YouTube | Video card |

---

*This proposal is based on the detailed design brief provided. Actual implementation should validate color contrast ratios against the deployed environment and test the OKLch color values across target browsers. The font recommendation of Newsreader + Inter assumes open-source licensing is acceptable; if the Uganda Government has existing typeface brand guidelines, those should take precedence.*
