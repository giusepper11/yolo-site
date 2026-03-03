## Why

The current career digital twin chat depends on OpenRouter and is blocked by key quota limits. Switching to Ollama Cloud provides a more reliable hosted provider path using an API key already configured in `.env`.

## What Changes

- Replace OpenRouter-backed provider calls with Ollama Cloud provider calls for the career digital twin chat API.
- Update server-side configuration to use `OLLAMA_API_KEY` and Ollama Cloud base URL (`https://ollama.com/api`) instead of OpenRouter variables.
- Update the default model identifier to an Ollama-compatible model name (e.g., `gpt-oss:120b`) while keeping the chat UI and response contract stable.
- Keep safety/guardrails and grounding behavior unchanged (career scope, uncertainty policy, no fabricated facts).

## Capabilities

### New Capabilities

- `ollama-cloud-llm-provider`: Server-side integration with Ollama Cloud (ollama.com) to generate chat completions using an API key and a configurable model.
- `llm-provider-migration`: Provider swap behavior that preserves the existing chat API contract and user experience while changing the upstream LLM backend.

### Modified Capabilities



## Impact

- **Backend/provider**: replace `src/lib/ai/openrouter.ts` and related env/config helpers with an Ollama Cloud implementation.
- **API route**: update `src/app/api/chat/route.ts` to call the new provider utility and use Ollama-specific configuration.
- **Configuration**: add/update `.env.example` with `OLLAMA_API_KEY`, optional base URL and model variables; deprecate OpenRouter variables for this feature.
- **Docs/tests**: adjust tests to cover Ollama request/response mapping and error conditions.

