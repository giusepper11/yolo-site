## Context

The digital twin chat feature is implemented as a Next.js route handler (`src/app/api/chat/route.ts`) returning `{ answer, sources, warnings }`, and a client UI component (`src/components/site/digital-twin-chat.tsx`) that currently renders the answer inside a plain `<p>`. HTML collapses whitespace, so even if the model returns structured text, the UI visually flattens it.

This change standardizes model output as professional Markdown and updates the UI to render it safely so answers are scannable and consistent.

Constraints:
- Preserve the `/api/chat` response contract to avoid breaking the UI’s data flow.
- Keep existing grounding and guardrails (career-only scope, uncertainty policy, no fabricated facts).
- Render Markdown safely (no raw HTML execution) to avoid injection risks.
- Keep accessibility and readability strong (headings, lists, links, and status messages).

## Goals / Non-Goals

**Goals:**
- Update the system prompt so the assistant outputs a consistent, professional Markdown structure.
- Render assistant messages as Markdown in the chat UI (including line breaks, lists, and headings).
- Apply a minimal, tasteful style for Markdown elements inside chat bubbles.
- Ensure rendering is safe by default (disallow raw HTML).

**Non-Goals:**
- Building a rich document editor or WYSIWYG renderer.
- Supporting arbitrary HTML in model output.
- Changing the API response shape or adding new required fields.
- Adding streaming responses; keep existing request/response behavior.

## Decisions

- **Prompting: enforce a fixed Markdown template**
  - Include explicit section headings and constraints to keep output concise and consistent.
  - Example structure:
    - `## Summary` (1–2 sentences)
    - `## Key strengths` (3–5 bullets)
    - `## Evidence from experience` (2–4 bullets; cite company/role from context)
    - `## Suggested positioning` (1–3 bullets)
    - `## Sources` (list section names; align with `sources` hints returned by API)
  - Rationale: consistent answers that look professional and are easy to scan.
  - Alternative: prompt-only without UI changes. Rejected because HTML collapses whitespace and Markdown would not render.

- **Rendering: use a dedicated Markdown renderer in the chat UI**
  - Use a renderer that defaults to safe behavior (no raw HTML) and supports basic Markdown and lists.
  - Add GFM support if tables and checklists are desired; otherwise keep core Markdown only.
  - Map Markdown elements to existing Tailwind styling classes for consistent look in chat bubbles.
  - Alternative: only `white-space: pre-wrap`. Considered, but does not give headings/lists/link styling or consistent formatting.

- **Security: disallow raw HTML**
  - Do not enable “render raw HTML” features (e.g., `rehype-raw`).
  - Treat model output as untrusted content.

- **Accessibility: preserve readable structure**
  - Ensure headings are not visually overwhelming inside chat bubbles.
  - Links should be keyboard accessible and have clear focus states (already present globally).

## Risks / Trade-offs

- **Risk: Markdown renderer adds dependency weight** → Mitigation: choose a small, widely-used renderer; keep component mapping minimal.
- **Risk: Model outputs malformed Markdown** → Mitigation: keep prompt strict; renderer should degrade gracefully to plain text.
- **Risk: Tables/complex markdown reduce readability on mobile** → Mitigation: constrain template; avoid wide tables; style overflow if needed.

## Migration Plan

- Update `buildSystemPrompt()` in `src/app/api/chat/route.ts` to require the Markdown template and explicitly forbid HTML.
- Update `src/components/site/digital-twin-chat.tsx` to render assistant messages using a Markdown renderer and apply consistent element styling.
- Add/update tests to validate:
  - prompt contains the required Markdown template constraints (lightweight snapshot/string assertions)
  - rendering does not allow raw HTML
- Validate locally by asking typical questions and confirming headings and bullets render properly.

## Open Questions

- Do you want to allow GFM tables (for skills comparisons), or keep to headings + bullet lists only?
- Should the assistant include the `Sources` section in the Markdown body, or should sources remain UI-only chips?
