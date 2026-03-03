## 1. Prompt formatting

- [x] 1.1 Update `buildSystemPrompt()` in `src/app/api/chat/route.ts` to require a strict professional Markdown template (headings + bullets) and to forbid raw HTML
- [x] 1.2 Add a lightweight test that asserts the prompt includes the formatting rules (and continues to include grounding/uncertainty constraints)

## 2. Markdown rendering in chat UI

- [x] 2.1 Add a safe Markdown renderer dependency (e.g., `react-markdown`, optional GFM support) or equivalent safe rendering approach
- [x] 2.2 Update `src/components/site/digital-twin-chat.tsx` to render assistant messages as Markdown (and preserve line breaks) with consistent styling for headings, lists, and links
- [x] 2.3 Ensure raw HTML is not rendered (no HTML execution) and malformed Markdown does not crash the UI

## 3. Verification

- [x] 3.1 Run `pnpm lint`, `pnpm test`, and `pnpm build` and fix issues introduced by rendering changes
- [x] 3.2 Validate end-to-end locally by asking a typical career question and confirming headings/bullets render correctly and look professional
