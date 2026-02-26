## 1. Project setup (Next.js + tooling)

- [x] 1.1 Initialize a Next.js app in the repo root (App Router + TypeScript)
- [x] 1.2 Add Tailwind CSS and configure global styles and CSS variables for tokens
- [x] 1.3 Configure linting/formatting defaults (ESLint; optional Prettier) and ensure `pnpm dev` / `pnpm build` succeed
- [x] 1.4 Add a minimal `README.md` with local run instructions and project structure

## 2. Content model (single source of truth)

- [x] 2.1 Create `src/content/site.ts` (or equivalent) with typed content objects for identity, links, summary/about, experience timeline, skills/tools, languages, certifications, education
- [x] 2.2 Populate the content from `Profile.pdf` (name, title, summary, roles, education, certifications, links)
- [x] 2.3 Add a portfolio data model with zero-project support (placeholders) and optional external portfolio link

## 3. Brand visual system (enterprise meets edgy)

- [x] 3.1 Choose and configure fonts via `next/font` (body + display) and set a consistent type scale
- [x] 3.2 Implement the tokenized color palette (surfaces, text, accent) and accessible focus styles
- [x] 3.3 Build reusable primitives: `Button`, `Card`, `Badge/Tag`, `Section`, `IconLink` (or equivalents)
- [x] 3.4 Add subtle “edgy” accents (gradient/glow/lines) that remain performant and readable

## 4. Site foundation (layout + navigation)

- [x] 4.1 Implement the global layout (`app/layout.tsx`) and main home route (`app/page.tsx`)
- [x] 4.2 Add sticky header navigation with anchor links to each section
- [x] 4.3 Add a skip link and ensure keyboard focus lands correctly when using anchors
- [x] 4.4 Validate responsive behavior on mobile/tablet/desktop breakpoints

## 5. Hero + About

- [x] 5.1 Implement the Hero section (name, title, positioning statement, expertise chips, accent element)
- [x] 5.2 Add primary CTAs: LinkedIn, GitHub, and “Contact” anchor
- [x] 5.3 Implement the About section rendering from the content model (curated summary + key tooling)

## 6. Career Journey (timeline)

- [x] 6.1 Implement Career Journey intro narrative and timeline container
- [x] 6.2 Render experience entries in reverse chronological order with company/role/dates/location
- [x] 6.3 Add progressive disclosure (expand/collapse) for long highlights with full keyboard accessibility
- [x] 6.4 Render optional per-role technology chips (Airflow/DBT/Spark/Snowflake/AWS/GCP/etc.)

## 7. Skills + Credentials

- [x] 7.1 Implement Top Skills block (scannable chips/list)
- [x] 7.2 Implement grouped tooling/platform categories
- [x] 7.3 Implement Languages block with proficiency text
- [x] 7.4 Implement Certifications and Education blocks from the content model

## 8. Portfolio (placeholder)

- [x] 8.1 Implement Portfolio section shell with future-proof layout
- [x] 8.2 Render placeholder cards when no projects are configured (“Coming soon”)
- [x] 8.3 Render project cards when projects exist (title/description/tags/links)
- [x] 8.4 Add optional prominent external portfolio link (e.g., GitHub) when configured

## 9. Contact + Social

- [x] 9.1 Implement Contact section with email/phone/LinkedIn/GitHub
- [x] 9.2 Ensure correct link schemes (`mailto:`, `tel:`) and external link behavior (new tab)
- [x] 9.3 Add optional copy-to-clipboard for email/phone with non-disruptive confirmation

## 10. SEO, accessibility, and performance pass

- [x] 10.1 Implement site metadata (title/description) and OpenGraph/Twitter metadata
- [x] 10.2 Add `sitemap` and `robots` routes appropriate for a personal site
- [x] 10.3 Ensure semantic landmarks and logical heading hierarchy across sections
- [x] 10.4 Ensure reduced-motion support (`prefers-reduced-motion`) for any animations
- [x] 10.5 Run a quick performance sanity check (no oversized assets; minimize client components)
