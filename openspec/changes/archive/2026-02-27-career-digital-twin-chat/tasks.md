## 1. Provider and configuration foundation

- [x] 1.1 Add server-side OpenRouter configuration/env helpers for API key, base URL, and default model (`gpt-oss-120b`)
- [x] 1.2 Implement `src/lib/ai/openrouter.ts` with request builder, timeout handling, and normalized response/error mapping
- [x] 1.3 Add/update `.env.example` with OpenRouter variables and usage notes (keep secrets out of client code)

## 2. Digital twin knowledge grounding

- [x] 2.1 Create a structured digital-twin knowledge module that composes career and skills content into a normalized context object
- [x] 2.2 Add optional curated twin-profile content support and merge logic
- [x] 2.3 Implement context-size controls (deterministic trimming/summarization) before provider calls

## 3. Chat API route

- [x] 3.1 Create `app/api/chat/route.ts` with payload validation and stable response contract (`answer`, `sources`, `warnings`)
- [x] 3.2 Integrate route with OpenRouter provider utility and digital-twin context builder
- [x] 3.3 Add scope guardrails for career-only usage and explicit uncertainty behavior when facts are missing
- [x] 3.4 Add graceful error handling for timeout/rate-limit/configuration failures

## 4. Frontend chat experience

- [x] 4.1 Build chat UI components (message list, composer, send action, loading and error states)
- [x] 4.2 Add a user entry point for the digital twin chat (embedded section or dedicated route) and connect to `/api/chat`
- [x] 4.3 Render source hints in assistant responses when provided by the API
- [x] 4.4 Ensure accessibility basics (keyboard submit, focus order, screen-readable status messages)

## 5. Verification and hardening

- [x] 5.1 Add unit/integration tests for provider mapping, API validation, and key happy/error paths
- [x] 5.2 Run lint/build/test checks and fix issues introduced by the chat feature
- [ ] 5.3 Validate end-to-end behavior locally with real OpenRouter key from project-root `.env`

Blocked note: Live OpenRouter call from local environment returned `403 Key limit exceeded (total limit)`.
