# yolo-site

Personal website built with Next.js (App Router + TypeScript + Tailwind CSS).

## Local development

```bash
pnpm install
pnpm dev
```

Open `http://localhost:3000`.

## Quality checks

```bash
pnpm lint
pnpm build
```

## Project structure

- `src/app` - routes, global layout, metadata routes (`sitemap.ts`, `robots.ts`)
- `src/content/site.ts` - typed single source of truth for all profile content
- `src/components/ui` - reusable UI primitives (Button, Card, Badge, Section, IconLink)
- `src/components/site` - site-specific interactive components