## Context

This change adds an on-site AI chat experience that acts as a career-focused digital twin. The current site already contains structured content about career journey and skills, but users must manually navigate sections to understand the full profile. The new chat should answer natural-language career questions while staying grounded in known facts from site content.

Constraints and considerations:
- The OpenRouter API key must remain server-side and be loaded from project-root `.env`.
- The requested model is `gpt-oss-120b` on the free tier.
- Responses should stay in scope (career/professional context) and avoid fabricated details.
- The implementation should fit the existing Next.js architecture and remain maintainable.

## Goals / Non-Goals

**Goals:**
- Provide a chat UI where users can ask questions about career history, skills, achievements, and work style.
- Implement a server-side chat endpoint that calls OpenRouter with `gpt-oss-120b`.
- Create a digital-twin knowledge payload assembled from existing site data plus optional dedicated twin profile content.
- Add lightweight guardrails (topic scope, confidence language, and source linking hints).
- Keep secrets safe (no client-side API key exposure).

**Non-Goals:**
- Building a full RAG/vector database system in this iteration.
- Supporting non-career domains (finance, legal, medical, personal counseling).
- Persisting long-term cross-session chat history (session-only is acceptable initially).
- Multi-model routing or provider failover beyond OpenRouter.

## Decisions

- **Server-side provider abstraction for OpenRouter**
  - Create a dedicated server utility (e.g., `src/lib/ai/openrouter.ts`) responsible for request shape, headers, timeouts, and error normalization.
  - Keep provider logic out of route handlers so model/provider changes are isolated.
  - Alternative considered: call OpenRouter directly inside the route handler. Rejected to avoid tight coupling and repeated logic.

- **Route-handler based chat API**
  - Add a Next.js route handler (e.g., `app/api/chat/route.ts`) that accepts user input and optional short conversation context.
  - Validate payload schema server-side and reject invalid/empty prompts.
  - Return a consistent JSON response with `answer`, `sources`, and `warnings`.
  - Alternative considered: server actions for chat. Rejected for clearer API boundaries and easier future external consumption/testing.

- **Digital-twin knowledge bundle from first-party content**
  - Build a normalized “career facts” object from current content modules (`career-journey`, `skills-and-credentials`, and profile metadata).
  - Optionally merge a small `digital-twin-profile` content file for preferred tone, positioning, and explicit Q&A hints.
  - Inject this bundle into system/developer prompt context for grounding.
  - Alternative considered: retrieve raw page text at runtime. Rejected due to noisier context and less deterministic behavior.

- **Prompting strategy with explicit grounding constraints**
  - Use a structured system prompt: role, allowed scope, required behavior when uncertain, and “cite source section names when possible.”
  - Instruct model to say “I don’t have that information” when facts are unavailable.
  - Keep prompt templates versioned in code for reviewability.
  - Alternative considered: minimal prompt. Rejected due to higher hallucination risk.

- **Security and resilience defaults**
  - Read API key from env only on server.
  - Add basic request throttling/rate limiting at the route level (or minimal anti-abuse guard if no infra limiter exists).
  - Enforce max input length and max completion tokens to control abuse and cost.
  - Add graceful fallback messages for provider timeout/rate-limit errors.

- **Model and configuration**
  - Default model: `gpt-oss-120b` through OpenRouter.
  - Keep model string configurable through env (with default fallback to requested model) to ease future tuning without code rewrites.
  - Alternative considered: hard-coded model. Rejected because free-tier model availability can change.

## Risks / Trade-offs

- **Risk: Hallucinated career facts** -> Mitigation: strict grounding prompt, explicit uncertainty policy, source section references, and compact curated context.
- **Risk: Free-tier model latency/availability variance** -> Mitigation: timeout handling, user-facing retry guidance, and env-based model override.
- **Risk: Prompt/context grows too large as content evolves** -> Mitigation: normalize and summarize facts before prompt injection; cap context size.
- **Risk: API key leakage through client code or logs** -> Mitigation: server-only env usage, avoid echoing secrets, and sanitize error payloads.
- **Risk: Overly restrictive guardrails reduce answer usefulness** -> Mitigation: allow broad career-related reasoning while preserving fact constraints.

## Migration Plan

- Add required env vars in project-root `.env` (e.g., OpenRouter API key and optional model override).
- Implement provider utility and API route behind internal feature path.
- Add chat UI entry point and connect to the new route.
- Run local validation: malformed payloads, empty prompts, timeout simulation, and happy-path Q&A.
- Rollback strategy: hide/remove chat entry point and disable endpoint usage if provider instability appears.

## Open Questions

- Should the chat be embedded on the home page or exposed as a dedicated `/chat` route (or both)?
- Do you want citations to show section labels only, or also deep links to anchors when available?
- Should we include personal preferences/personality constraints in the twin profile, or keep it strictly factual for v1?
