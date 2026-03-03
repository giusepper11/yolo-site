## 1. Configuration and provider foundation

- [x] 1.1 Add Ollama Cloud env/config helper (`OLLAMA_API_KEY`, default base URL `https://ollama.com/api`, default model `gpt-oss:120b`, timeouts/limits)
- [x] 1.2 Implement `src/lib/ai/ollama-cloud.ts` (or provider-neutral replacement) with request builder, timeout handling, and normalized response/error mapping
- [x] 1.3 Update `.env.example` to include Ollama Cloud variables and note that OpenRouter vars are not required for this feature

## 2. Route handler migration

- [x] 2.1 Update `src/app/api/chat/route.ts` to call the Ollama Cloud provider instead of OpenRouter
- [x] 2.2 Ensure the `/api/chat` response contract remains unchanged (`answer`, `sources`, `warnings`)
- [x] 2.3 Ensure configuration and provider errors return controlled, sanitized messages (no secret leakage)

## 3. Tests and verification

- [x] 3.1 Update/add tests to cover Ollama provider response parsing and common error statuses (401/403/429/5xx/timeout)
- [x] 3.2 Run `pnpm lint`, `pnpm test`, and `pnpm build` and fix issues introduced by the provider swap
- [x] 3.3 Validate end-to-end chat flow locally with Ollama Cloud key from project-root `.env`
