## Why

The site should support an on-site “digital twin” chat experience so visitors (and the owner) can ask natural-language questions about career history, skills, and goals and get grounded answers. This enables faster storytelling, self-reflection, and a more interactive personal brand.

## What Changes

- Add an AI chat UI to the site that can answer career questions in a conversational format.
- Add a “digital twin” knowledge layer that uses the site’s existing career/skills content (and optional owner-provided notes) as grounded context for responses.
- Add a server-side chat API route that calls OpenRouter using the project-root `.env` API key and the `gpt-oss-120b` model (free tier).
- Add basic safety/guardrails: scope to career topics, avoid hallucinating specifics, and provide citations/links back to relevant site sections when possible.

## Capabilities

### New Capabilities

- `career-digital-twin-chat`: Chat experience for asking questions about the owner’s career, with responses grounded in on-site content and an explicit “digital twin” persona.
- `openrouter-llm-provider`: Server-side integration with OpenRouter to generate responses using the `gpt-oss-120b` model configured via environment variables.
- `digital-twin-knowledge-base`: A structured, versioned representation of “career facts” (from existing site content plus optional owner additions) that is passed to the model as context and can be iterated on over time.

### Modified Capabilities

<!-- none -->

## Impact

- **Frontend**: new chat page/section and components (chat history, input box, loading/error states, optional “sources” links).
- **Backend/API**: new chat endpoint (e.g., Next.js route handler) to proxy OpenRouter calls and keep the API key server-side.
- **Content**: leverage existing `career-journey` and `skills-and-credentials` content as the primary grounding source; may add a small “digital twin profile” content file for extra context.
- **Configuration**: require an OpenRouter API key in project-root `.env` (no key should be exposed to the client) and set the model to `gpt-oss-120b`.
