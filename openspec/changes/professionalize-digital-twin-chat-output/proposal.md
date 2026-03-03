## Why

The digital twin chat answers currently render as a single unformatted paragraph, which makes them feel unprofessional and harder to scan. This change improves clarity by standardizing responses as Markdown and rendering them appropriately in the chat UI.

## What Changes

- Update the system prompt to instruct the model to respond in a consistent, professional Markdown structure (headings + short bullets).
- Update the chat UI to render assistant messages as safe Markdown (and preserve line breaks), so formatting is visible.
- Keep the `/api/chat` response contract unchanged (`answer`, `sources`, `warnings`) and keep grounding/safety rules intact.

## Capabilities

### New Capabilities

- `digital-twin-chat-markdown-formatting`: Professional Markdown response structure for the career digital twin chat, with consistent sections and scannable output.
- `safe-markdown-rendering`: Safe Markdown rendering in the chat UI (no raw HTML), preserving readability and accessibility.

### Modified Capabilities

<!-- none -->

## Impact

- **Backend**: update the system prompt in `src/app/api/chat/route.ts` to request structured Markdown output.
- **Frontend**: update `src/components/site/digital-twin-chat.tsx` to render assistant messages as Markdown (or preserve line breaks) and style common elements (headings, lists, links).
- **Dependencies**: may add a Markdown renderer dependency (e.g., `react-markdown` + GFM support) if needed.
