# Hon. Henry Musasizi Portfolio (Astro + Decap CMS)

Production-ready static portfolio website for Hon. Henry Musasizi, Minister of State for Finance (Uganda), built with Astro v5 and Decap CMS.

## Stack

- Astro v5
- Tailwind CSS
- Decap CMS (`/admin`)
- Markdown content collections for speeches, projects, and gallery

## Brand System

- Coffee Brown: `#4B2E0A`
- Origin Gold: `#C8922A`
- Forest Green: `#2D6A2D`
- Deep Navy: `#1A3557`
- Light Tan: `#F5ECD7`
- Sidebar Background: `#FDFAF5`
- Fonts: Inter and JetBrains Mono

## Content Editing

Open `/admin/` after deployment with Git Gateway enabled to create and update:

- Speeches & Statements (`src/content/speeches`)
- Development Projects (`src/content/projects`)
- Photo Gallery (`src/content/gallery`)

## Run Locally

```bash
npm install --legacy-peer-deps
npm run dev
```

## Build

```bash
npm run build
```
