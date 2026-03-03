## Context

The site now includes a career “digital twin” chat feature implemented as a Next.js route handler (`src/app/api/chat/route.ts`) plus a provider utility (`src/lib/ai/openrouter.ts`) and env/config (`src/lib/ai/env.ts`). The current OpenRouter API key hit quota limits, blocking end-to-end verification.

Ollama Cloud (ollama.com) provides a hosted API accessible via an API key (`OLLAMA_API_KEY`) and a cloud base URL (`https://ollama.com/api`). Ollama also documents an OpenAI-compatible endpoint (`/v1/chat/completions`) and native endpoints (e.g., `/api/chat`).

Constraints:
- Secrets must remain server-side (no API key exposure to the browser).
- Preserve the existing chat API contract returned by `/api/chat` (`answer`, `sources`, `warnings`) so the UI does not need to change.
- Keep current grounding and guardrails (career scope enforcement and uncertainty policy).
- Prefer minimal, reversible changes: swap provider implementation, keep the rest stable.

## Goals / Non-Goals

**Goals:**
- Replace OpenRouter provider calls with Ollama Cloud calls using `OLLAMA_API_KEY`.
- Add Ollama Cloud env/config with sensible defaults (base URL and default model).
- Maintain current API route behavior and response shape.
- Update tests to validate Ollama request/response mapping and error handling.
- Enable end-to-end validation with Ollama Cloud as the upstream provider.

**Non-Goals:**
- Introducing local Ollama runtime dependency (`localhost:11434`) in this change.
- Implementing streaming responses (keep `stream: false` for v1 parity).
- Changing the digital twin knowledge grounding logic or chat UI beyond wiring updates.

## Decisions

- **Use Ollama Cloud base URL `https://ollama.com/api`**
  - Keep base URL configurable via env for future flexibility.
  - Rationale: official cloud base URL for API keys; avoids reliance on local runtime.
  - Alternative: hard-code cloud URL. Rejected to keep deploy flexibility.

- **Use Ollama native cloud chat endpoint (`/api/chat` at base URL)**
  - Use native request/response shape:
    - request: `{ model, messages, stream: false, options: { num_predict } }`
    - response: parse `message.content`
  - Rationale: verified working behavior with Ollama Cloud key and model in this project.
  - Alternative: OpenAI-compatible `/v1/chat/completions`. Considered, but did not return usable assistant content reliably in this environment for the selected model.

- **Introduce a provider-neutral internal interface**
  - Keep the route handler calling a single function (e.g., `sendLlmChat`) that can be implemented by different providers.
  - Rationale: reduces future migration cost and isolates auth/error/timeout concerns.
  - Alternative: embed Ollama fetch in route handler. Rejected due to duplication and tighter coupling.

- **Model naming**
  - Default model for Ollama Cloud: `gpt-oss:120b` (Ollama naming style) rather than OpenRouter `gpt-oss-120b`.
  - Make model configurable via env (e.g., `OLLAMA_MODEL`) with the default above.
  - Rationale: avoids hard dependency on one model string and supports future tuning.

- **Error mapping**
  - Normalize upstream failures into typed errors with HTTP status:
    - 401/403 for auth issues, 429 for rate limit, 5xx for provider errors, 504 for timeout.
  - The API route returns sanitized error messages without leaking secrets.

## Risks / Trade-offs

- **Risk: Endpoint mismatch (native vs OpenAI-compatible)** → Mitigation: implement with native endpoint validated by smoke test using the configured key.
- **Risk: Model availability or naming differences** → Mitigation: env-based model override; clear configuration errors in `/api/chat`.
- **Risk: Different moderation/safety characteristics** → Mitigation: keep existing prompt guardrails and scope checks; return uncertainty when context lacks facts.
- **Risk: Increased latency for cloud calls** → Mitigation: enforce timeout and surface retry-safe errors.

## Migration Plan

- Add new env variables (and `.env.example` updates) for Ollama Cloud:
  - `OLLAMA_API_KEY` (required)
  - `OLLAMA_BASE_URL` (default `https://ollama.com/api`)
  - `OLLAMA_MODEL` (default `gpt-oss:120b`)
  - optional timeout and token limits
- Implement new provider utility (e.g., `src/lib/ai/ollama-cloud.ts`) and switch route handler to use it.
- Keep current OpenRouter code temporarily (or remove if unused) to reduce risk; ensure dead code is not referenced.
- Update tests to cover Ollama response parsing and failure scenarios.
- Validate end-to-end locally by sending a chat message in the UI and confirming the provider returns a completion.
- Rollback: revert route handler to OpenRouter provider (or disable chat section) if provider issues occur.

## Open Questions

- Should we remove OpenRouter env/config and code entirely or keep it behind a fallback for a short period?
- Do you want the provider layer to support both Ollama Cloud and local Ollama (for offline dev) in the future?
