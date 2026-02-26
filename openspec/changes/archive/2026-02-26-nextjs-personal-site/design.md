## Context

This change introduces a new personal website built with Next.js, intended to run locally for development and serve as a long-lived professional landing page. Content is derived from `Profile.pdf` (LinkedIn export) and focuses on clear storytelling (About + Career Journey) with a distinctive “enterprise meets edgy” look.

Current repository state is minimal (OpenSpec workflow + `Profile.pdf`), so the Next.js application will be created from scratch within this repo.

Constraints / considerations:
- Must run smoothly in a local dev environment (WSL2) with a simple workflow.
- Visual tone: premium, enterprise-grade polish with subtle edgy accents (contrast, glow, sharp geometry, restrained motion).
- Content should be easy to update without rewriting components.
- Strong baseline accessibility and performance (Lighthouse-friendly defaults).

## Goals / Non-Goals

**Goals:**
- Deliver a single-page (or primarily single-page) personal site with anchored navigation: Hero/About, Career Journey, Skills/Credentials, Portfolio (placeholder), Contact.
- Establish a cohesive brand system (colors, typography, spacing, components, motion) that reads “enterprise” at a distance and “edgy” up close.
- Implement a data-driven content model so all profile content lives in one place and the UI renders from structured data.
- Provide baseline SEO (metadata + OpenGraph) and accessibility (semantics, focus management, contrast, reduced-motion support).
- Ensure a clean local developer workflow: install → dev server → lint/build.

**Non-Goals:**
- Full CMS integration, authentication, comments, or blog/MDX system (can be added later).
- Backend APIs beyond minimal Next.js metadata routes (e.g., sitemap).
- Production deployment automation (can be added later; design keeps it compatible with Vercel).

## Decisions

- **Next.js App Router + TypeScript**
  - Use the modern `app/` router for layouts, metadata, and route handlers (`sitemap.ts`, `robots.ts`).
  - TypeScript provides maintainability for content objects (timeline entries, skills, links).
  - Alternative considered: Pages Router. Rejected due to weaker layout/metadata ergonomics.

- **Styling: Tailwind CSS + CSS variables (design tokens)**
  - Tailwind accelerates iteration and consistent spacing/typography.
  - CSS variables (e.g., `--background`, `--foreground`, `--accent`) enable theming and the “enterprise/edgy” palette.
  - Alternative considered: CSS modules only. Rejected due to slower iteration for a component-heavy landing page.

- **Component approach: small curated UI kit**
  - Use a minimal set of primitives (Button, Badge, Card, Section, Timeline, LinkWithIcon).
  - Optionally adopt a lightweight component library (e.g., Radix-based shadcn/ui) if it speeds delivery without adding noise.
  - Rationale: keep the codebase understandable and avoid “template bloat”.

- **Content model: single structured source**
  - Store all personal/site content in a typed module (e.g., `src/content/site.ts`) including:
    - identity (name, title, location), summary paragraphs
    - experience timeline (role, company, dates, location, highlights, tech)
    - skills + tools, languages, certifications, education
    - external links (LinkedIn, GitHub, email/phone)
  - Renders are purely presentational; no content is hardcoded inside components.
  - Alternative considered: MD files/MDX. Deferred to keep initial scope fast and predictable.

- **Information architecture**
  - Home route (`/`) as the primary surface with anchored sections and a sticky top nav.
  - Optional secondary routes can be added later (`/portfolio`, `/about`) without restructuring the content model.

- **Motion and “edgy” accents**
  - Motion kept subtle: section reveal, hover micro-interactions, and a hero accent effect.
  - Respect `prefers-reduced-motion` and avoid heavy, performance-costly animations.

- **SEO + social**
  - Use `metadata` for title/description, OpenGraph, and Twitter card.
  - Add `sitemap` and `robots` routes and a stable canonical base (configurable).

## Risks / Trade-offs

- **Risk: Edgy styling reduces readability** → Mitigation: strict contrast checks, generous whitespace, restrained accent usage, keep body typography “enterprise”.
- **Risk: Over-engineering content model too early** → Mitigation: start with a simple typed object; evolve only when real portfolio content arrives.
- **Risk: Too many dependencies for a small site** → Mitigation: prefer native Next/Tailwind; only add UI libraries if they reduce total code and maintenance.
- **Risk: Profile content accuracy/wording** → Mitigation: source from `Profile.pdf` and keep copy editable in one place.

## Migration Plan

- Initial delivery is local-first: `pnpm install` → `pnpm dev`.
- When ready for production:
  - set canonical site URL
  - add analytics if desired
  - deploy to a static-friendly platform (e.g., Vercel) with minimal changes

## Open Questions

- Do we have a preferred domain/canonical URL for metadata?
- Do you want a headshot avatar or keep it typographic (name/monogram)?
- Should we expose the resume as a downloadable PDF link (and if so, which file should be used)?
