# Hon. Henry Musasizi — Portfolio Website
## Implementation Guide & Content Strategy

**Prepared by:** Your PM / Tech Director  
**Date:** 23 April 2026  
**Repo:** `github.com/Mucunguzi256/musasizi`  
**Stack:** Astro v5 + Tailwind CSS + Decap CMS  
**Target Domain:** `henrymusasizi.ug`

---

## 1. PERSON PROFILE — EXTRACTED CONTENT

### Full Name
**Hon. Henry Ariganyira Musasizi**

### Tagline / One-liner
Minister of State for Finance, Planning & Economic Development (General Duties) · MP Rubanda East · Certified Public Accountant

### Short Bio (Hero Section — ~60 words)
Hon. Henry Ariganyira Musasizi is a Ugandan politician, certified public accountant, and MBA graduate of Heriot-Watt University (Edinburgh Business School). He has served as Member of Parliament for Rubanda East since 2011 and as Minister of State for Finance, Planning and Economic Development (General Duties) since 2021. He is also Chairman of NRM Rubanda District.

### Full Biography (About Page — expanded)
Hon. Henry Ariganyira Musasizi (born 25 February 1981) is a distinguished Ugandan politician, certified public accountant, and business administrator. He has represented Rubanda East Constituency in the Parliament of Uganda since 2011 and currently serves as Minister of State for Finance, Planning and Economic Development (General Duties), a position he has held since 2021.

Before entering politics, Henry built a career in finance and accounting. He was a Partner at AHMHE Associates, Certified Public Accountants (2012–2015), and held roles at AMREF Uganda as Regional Accountant (2009–2010) and Project Accountant (2007–2009). He began his professional career as an Accountant at CARITAS Kabale Diocese (2006–2007).

In Parliament, he has chaired the Committee on Finance, Planning and Economic Development (2016–2021), served on the Budget Committee, the Public Accounts Committee (Central Government), and the Presidential Advisory Committee on Budget. He is a long-standing member of the Institute of Certified Public Accountants of Uganda.

Beyond formal roles, he has served as Chairman of the Kabale District Roads Committee, Vice Chairman of the Uganda Parliamentary Forum on Youth Affairs, Treasurer of the Kabale Parliamentary Forum, and Member of the Kigezi Parliamentary Forum.

He holds an MBA from Heriot-Watt University (Edinburgh Business School) and a Bachelor of Commerce (Accounting, Second Class Upper) from Makerere University.

---

## 2. POSITIONS HELD — STRUCTURED DATA

### Current Positions
| Position | Period |
|---|---|
| Minister of State for Finance, Planning & Economic Development (General Duties) | 2021 – Present |
| Member of Parliament, Rubanda East Constituency | 2011 – Present |
| Chairman, NRM Rubanda District | 2020 – Present |

### Parliamentary Committees
| Role | Period |
|---|---|
| Chairperson, Committee on Finance, Planning & Economic Development | 2016 – 2021 |
| Member, Business Committee, Parliament of Uganda | 2016 – 2021 |
| Member, Presidential Advisory Committee on Budget | 2016 – 2021 |
| Member, Budget Committee, Parliament of Uganda | 2018 – 2021 |
| Member, Committee on Finance, Planning & Economic Development | 2011 – 2016 |
| Member, Public Accounts Committee (Central Government) | 2011 – 2018 |

### Professional Career
| Role | Organisation | Period |
|---|---|---|
| Partner | AHMHE Associates, CPAs | 2012 – 2015 |
| Regional Accountant | AMREF Uganda | 2009 – 2010 |
| Project Accountant | AMREF Uganda | 2007 – 2009 |
| Accountant | CARITAS Kabale Diocese | 2006 – 2007 |

### Other Responsibilities
- Member, Kigezi Parliamentary Forum
- Chairman, Kabale District Roads Committee
- Vice Chairman, Uganda Parliamentary Forum on Youth Affairs
- Treasurer, Kabale Parliamentary Forum

---

## 3. EDUCATION

| Qualification | Institution | Period |
|---|---|---|
| MBA | Heriot-Watt University (Edinburgh Business School) | 2010 – 2012 |
| CPAU (Certified Public Accountant) | Institute of Certified Public Accountants of Uganda | 2007 – 2009 |
| Bachelor of Commerce (Accounting) — Second Class Upper | Makerere University | 2001 – 2005 |
| Uganda Advanced Certificate of Education (UACE) | — | 1999 – 2000 |
| Uganda Certificate of Education (UCE) | — | 1995 – 1998 |

---

## 4. X (TWITTER) PROFILE — EXTRACTED BIO

> **Hon Henry Musasizi** (@henrymusasizi1)  
> Minister of State for Finance Planning and Economic Devt, Member of Parliament Rubanda East, Chairman NRM Rubanda District, Certified Public Accountant.

---

## 5. COLOUR SYSTEM

### Design Reference: Museveni's Site (yowerikmuseveni.com)
Museveni's official site uses a **deep green and gold/cream palette** — authoritative, presidential, distinctly Ugandan. Clean serif headers, lots of white space, structured layout with clear navigation.

### Your Colour Direction: NRM Yellow + Ugandan Identity

The NRM party colour is **yellow/gold**. Combined with the Ugandan national colours (black, yellow, red) and a desire for something "simple yet rich":

```
PRIMARY PALETTE
─────────────────────────────────────────
NRM Gold (Primary)      #D4A017   — CTAs, highlights, accents, hero backgrounds
Deep Black              #1A1A1A   — Primary text, headers
Rich Cream              #FAF6E9   — Page background, cards
Pure White              #FFFFFF   — Cards, content areas

SECONDARY PALETTE
─────────────────────────────────────────
Ugandan Red             #CE1126   — Sparingly for alerts, national flag reference
Forest Green            #2D6A2D   — Secondary accents (echoes national flag)
Dark Gold               #B8860B   — Hover states, gradients
Warm Grey               #6B6B6B   — Body text, captions

TYPOGRAPHY
─────────────────────────────────────────
Headings: Playfair Display (serif, authoritative — like Museveni's site)
Body: Inter (clean, modern, highly readable)
Mono: JetBrains Mono (for data/stats)
```

### Colour Usage Rules
1. **Hero section:** NRM Gold gradient overlay on a hero image, with white text
2. **Navigation:** Dark background (near-black) with gold accent on active link
3. **Cards & Content Areas:** Rich Cream background with white cards
4. **CTAs:** NRM Gold buttons with dark text (high contrast, accessible)
5. **Footer:** Deep Black with gold accents
6. **Section dividers:** Thin gold lines

---

## 6. SITE ARCHITECTURE

```
PAGES
─────
/                        → Homepage (Hero + Featured Sections)
/about                   → Full Biography, CV, Positions, Education
/speeches                → Speeches & Statements listing
/speeches/[slug]         → Individual speech
/news                    → News listing (new collection — needs creation)
/news/[slug]             → Individual news article
/gallery                 → Photo Gallery
/blog                    → Blog posts
/blog/[slug]             → Individual blog post
/achievements            → Achievements & Impact
/admin                   → Decap CMS (already exists)

NAVIGATION
──────────
Primary: Home | About | Speeches | News | More ▾ (Achievements, Gallery, Blog)
Mobile: Hamburger → full-screen overlay nav
```

---

## 7. HOMEPAGE — SECTION-BY-SECTION WIREFRAME

### Section 1: HERO
```
┌─────────────────────────────────────────────────────────┐
│  [Full-width hero image with NRM Gold gradient overlay] │
│                                                         │
│  "SERVING UGANDA WITH INTEGRITY"                        │
│  Hon. Henry Ariganyira Musasizi                         │
│  Minister of State for Finance, Planning &              │
│  Economic Development · MP Rubanda East                 │
│                                                         │
│  [View Full Biography →]    [Speeches & Statements]    │
│                                                         │
│  [Subtle gold accent line at bottom]                    │
└─────────────────────────────────────────────────────────┘
```
- Professional portrait photo (official parliamentary or ministerial photo)
- Gold gradient from left (darker) to right (transparent)
- Text on left side, image visible on right
- Two CTA buttons: primary gold, secondary outlined

### Section 2: QUICK STATS BAR
```
┌─────────────────────────────────────────────────────────┐
│  15+ Years    │  Rubanda East  │  Minister of State  │  CPA │
│  Public Service│  Constituency │  Finance (Gen. Duties)│ MBA │
└─────────────────────────────────────────────────────────┘
```
- Dark background strip with gold text/icons
- 4 key stats in a horizontal row
- Subtle count-up animation on scroll

### Section 3: ABOUT PREVIEW
```
┌─────────────────────────────────────────────────────────┐
│  ABOUT HON. MUSASIZI                                    │
│                                                         │
│  [Photo]    Henry Ariganyira Musasizi is a Ugandan      │
│             politician, certified public accountant,    │
│             and MBA graduate who has served Rubanda     │
│             East since 2011...                          │
│                                                         │
│  Key highlights:                                        │
│  • Minister of State for Finance (2021–Present)         │
│  • Chairperson, Finance Committee (2016–2021)           │
│  • CPAU Member since 2011                               │
│                                                         │
│  [Read Full Biography →]                                │
└─────────────────────────────────────────────────────────┘
```

### Section 4: SPEECHES & STATEMENTS (Preview — 3 latest)
```
┌─────────────────────────────────────────────────────────┐
│  SPEECHES & STATEMENTS                      [View All →]│
│                                                         │
│  ┌─────────┐  ┌─────────┐  ┌─────────┐                │
│  │ [Card]  │  │ [Card]  │  │ [Card]  │                │
│  │ Title   │  │ Title   │  │ Title   │                │
│  │ Date    │  │ Date    │  │ Date    │                │
│  │ Location│  │ Location│  │ Location│                │
│  └─────────┘  └─────────┘  └─────────┘                │
└─────────────────────────────────────────────────────────┘
```
- 3-column grid on desktop, stack on mobile
- Cards with subtle gold left-border accent
- Pull from `src/content/speeches` collection

### Section 5: NEWS (Preview — 3 latest)
```
┌─────────────────────────────────────────────────────────┐
│  LATEST NEWS                                [View All →]│
│                                                         │
│  [Featured large card]     [Card 2]  [Card 3]          │
│  with image                compact   compact            │
└─────────────────────────────────────────────────────────┘
```
- NEW collection: `src/content/news`
- Featured first article (large card with image), 2 smaller beside it

### Section 6: ACHIEVEMENTS HIGHLIGHT
```
┌─────────────────────────────────────────────────────────┐
│  ACHIEVEMENTS & IMPACT                                  │
│                                                         │
│  ┌──────────┐  ┌──────────┐  ┌──────────┐             │
│  │ Budget   │  │ Rubanda  │  │ Finance  │             │
│  │ Oversight│  │ Develop. │  │ Reform   │             │
│  │ as Chair │  │ Projects │  │ Work     │             │
│  └──────────┘  └──────────┘  └──────────┘             │
│                                                         │
│  [Explore All Achievements →]                           │
└─────────────────────────────────────────────────────────┘
```
- Card grid with icon + title + short description
- Can use the existing `projects` collection or create dedicated achievements data

### Section 7: GALLERY PREVIEW
```
┌─────────────────────────────────────────────────────────┐
│  GALLERY                                    [View All →]│
│                                                         │
│  [img] [img] [img] [img]  ← horizontal scroll/masonry  │
└─────────────────────────────────────────────────────────┘
```
- 4–6 images in a masonry or grid
- Pull from `src/content/gallery`
- Lightbox on click

### Section 8: FOOTER
```
┌─────────────────────────────────────────────────────────┐
│  Hon. Henry Musasizi                                    │
│  Minister of State for Finance, Planning &              │
│  Economic Development (General Duties)                  │
│                                                         │
│  Quick Links    │  Contact      │  Connect              │
│  About          │  Parliament   │  Twitter/X            │
│  Speeches       │  Rubanda East │  Facebook             │
│  News           │               │  Parliament.ug        │
│                                                         │
│  © 2026 Hon. Henry Musasizi. All rights reserved.       │
│  Built with NRM values. Serving Uganda.                 │
└─────────────────────────────────────────────────────────┘
```
- Dark background (near-black) with gold text accents
- NRM logo or coat of arms subtle watermark

---

## 8. CONTENT COLLECTIONS — SCHEMA UPDATES

The existing `content.config.ts` already has `speeches`, `projects`, `gallery`, and `blog`. You need to ADD a `news` collection:

```typescript
// Add to content.config.ts
const news = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    source: z.string().optional(),        // e.g. "Daily Monitor", "Parliament Watch"
    sourceUrl: z.string().url().optional(),
    image: z.string().optional(),
    excerpt: z.string().optional(),
    featured: z.boolean().default(false)
  })
});

// Update export:
export const collections = { speeches, projects, gallery, blog, news };
```

### Enhanced Schema Suggestions

```typescript
// speeches — add optional fields
const speeches = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    location: z.string().optional(),
    event: z.string().optional(),          // e.g. "Budget Reading 2025"
    type: z.enum(["speech", "statement", "address", "remarks"]).default("speech"),
    image: z.string().optional()
  })
});

// projects/achievements — add more detail
const projects = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    district: z.string(),
    status: z.enum(["Planning", "Ongoing", "Completed"]),
    category: z.string().optional(),       // e.g. "Infrastructure", "Health", "Education"
    description: z.string().optional(),
    year: z.coerce.date().optional(),
    image: z.string().optional()
  })
});
```

---

## 9. PAGE SPECIFICATIONS

### /about (Full Biography Page)
```
Structure:
1. Hero banner with name + title + gold accent
2. Full biography text (from Section 1 above)
3. Positions Held — interactive timeline or tabbed sections:
   - Current Roles
   - Parliamentary Committees
   - Professional Career
   - Other Responsibilities
4. Education — cards with institution, degree, year
5. Professional Memberships
6. CTA: "Download CV" (PDF link if available)
```

### /speeches (Listing)
```
Structure:
1. Page header with title + filter bar (by year, type)
2. Card grid: title, date, location, excerpt
3. Search functionality
4. Pagination
```

### /news (Listing — NEW PAGE)
```
Structure:
1. Page header
2. Featured article (large card with image)
3. Grid of remaining articles
4. Filter by source/date
```

### /achievements (NEW PAGE)
```
Structure:
1. Hero: "Achievements & Impact"
2. Categories: Infrastructure, Education, Health, Finance Reform, Youth
3. Each category → card grid of specific achievements
4. Impact stats/metrics where available
5. Source: use the existing `projects` collection + add an `achievements` data file
```

### /gallery
```
Already exists — enhance with:
1. Masonry layout (CSS grid)
2. Lightbox on click
3. Filter by date/event
```

### /blog
```
Already exists — enhance with:
1. Card-based listing
2. Author info
3. Reading time estimate
```

---

## 10. COMPONENT INVENTORY

Based on the existing `src/components/` directory and the sections above, you need:

| Component | Purpose | Status |
|---|---|---|
| `Header.astro` | Site navigation + mobile menu | Likely exists — update nav links |
| `Footer.astro` | Site footer | Likely exists — update content |
| `Hero.astro` | Homepage hero section | NEW — full-width image + text + CTAs |
| `StatsBar.astro` | Quick stats horizontal strip | NEW |
| `AboutPreview.astro` | Homepage about section | NEW |
| `SpeechCard.astro` | Speech preview card | NEW or refactor existing |
| `NewsCard.astro` | News article card | NEW |
| `AchievementCard.astro` | Achievement card with icon | NEW |
| `GalleryGrid.astro` | Masonry photo gallery | NEW or refactor existing |
| `Timeline.astro` | Positions held timeline | NEW — for /about page |
| `EducationCard.astro` | Education entry card | NEW |
| `FilterBar.astro` | Search/filter controls | NEW — for speeches, news |
| `CTA.astro` | Call-to-action button | NEW — reusable |
| `SectionHeader.astro` | Section title + "View All" link | NEW — reusable |

---

## 11. RESPONSIVE BREAKPOINTS

```
Mobile:    < 640px   — single column, hamburger nav
Tablet:    640–1024px — 2-column grid, condensed nav
Desktop:   > 1024px  — full layout, visible nav
Wide:      > 1440px  — max-width container, larger typography
```

---

## 12. PERFORMANCE & SEO

- All images: WebP format, lazy loading, proper alt text
- Lighthouse target: 90+ across all metrics
- Meta tags per page (Open Graph, Twitter Cards)
- Structured data (JSON-LD): Person schema for homepage/about
- Sitemap via `astro-robots-txt` (already configured)
- Canonical URLs

---

## 13. DECAP CMS CONFIGURATION

The admin panel at `/admin` already exists. Update the CMS config to include:

1. **News collection** — new config entry
2. **Enhanced speeches** — add event, type fields
3. **Enhanced projects** — add category, description, year, image
4. **Site settings** — single-type collection for hero text, stats, social links

### CMS Collections to Configure:
```
/admin/config.yml (or equivalent):

collections:
  - name: "speeches"
    - title, date, location, event, type, body
  - name: "news"
    - title, date, source, sourceUrl, image, excerpt, featured, body
  - name: "projects"
    - title, district, status, category, description, year, image, body
  - name: "gallery"
    - title, image, caption, date
  - name: "blog"
    - title, date, body
  - name: "settings" (single type)
    - heroTitle, heroSubtitle, stats (array), socialLinks (object)
```

---

## 14. DEPLOYMENT CHECKLIST

- [ ] Update `site` in `astro.config.mjs` to `https://henrymusasizi.ug`
- [ ] Set up Git Gateway for Decap CMS
- [ ] Configure Netlify/Vercel hosting
- [ ] Set up domain DNS for `henrymusasizi.ug`
- [ ] Add SSL certificate (auto with Netlify/Vercel)
- [ ] Upload hero images and gallery photos
- [ ] Seed initial content (speeches, news, achievements)
- [ ] Test CMS workflow (create, edit, publish)
- [ ] Run Lighthouse audit
- [ ] Test on mobile devices

---

## 15. CONTENT SEEDING — SAMPLE ENTRIES

### Sample Speech (src/content/speeches/budget-statement-2025.md)
```markdown
---
title: "Budget Day Statement 2025"
date: 2025-06-12
location: "Parliament of Uganda, Kampala"
event: "National Budget Reading 2025"
type: "statement"
---

Hon. Musasizi addressed Parliament on the floor of the House during the 2025 National Budget Reading, emphasizing fiscal discipline, domestic revenue mobilisation, and strategic investment in infrastructure and human capital development...
```

### Sample News (src/content/news/musasizi-re-election-bid.md)
```markdown
---
title: "State Minister Henry Musasizi Launches Re-election Bid for Rubanda East"
date: 2025-06-19
source: "A Pearl News"
sourceUrl: "https://www.apearlnews.net/news/state-minister-henry-musasizi-launches-re-election-bid-for-rubanda-east/"
excerpt: "Minister Musasizi launched his re-election bid, pledging program-driven development for Rubanda East Constituency."
featured: true
---

State Minister Henry Musasizi has officially launched his re-election bid for Rubanda East Constituency, pledging continued focus on program-driven development...
```

### Sample Achievement (src/content/projects/finance-committee-chair.md)
```markdown
---
title: "Chairperson, Committee on Finance, Planning & Economic Development"
district: "National"
status: "Completed"
category: "Finance Reform"
description: "Led Parliament's oversight of national budgets and financial legislation for five years, ensuring accountability and fiscal discipline."
year: 2016-01-01
---
```

---

*End of Implementation Guide*
