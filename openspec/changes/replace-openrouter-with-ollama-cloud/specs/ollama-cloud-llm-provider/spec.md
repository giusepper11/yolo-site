## ADDED Requirements

### Requirement: Server-side Ollama Cloud integration
The system SHALL call Ollama Cloud from server-side code only and SHALL never expose the `OLLAMA_API_KEY` to client-side runtime.

#### Scenario: Client requests a chat completion
- **WHEN** a visitor submits a message through the digital twin UI
- **THEN** the backend chat route performs the Ollama Cloud request and returns only sanitized response payload fields

### Requirement: Required environment configuration
The system SHALL read Ollama Cloud credentials and provider configuration from environment variables in project-root `.env`.

#### Scenario: Missing API key
- **WHEN** the chat API is called without `OLLAMA_API_KEY` configured
- **THEN** the API responds with a controlled configuration error and does not leak secrets

### Requirement: Base URL default and override
The system SHALL use `https://ollama.com/api` as the default Ollama Cloud base URL and SHALL allow overriding the base URL via configuration.

#### Scenario: No base URL override configured
- **WHEN** a chat completion request is sent and no base URL override is set
- **THEN** the provider call targets `https://ollama.com/api`

### Requirement: Model selection default
The system SHALL use `gpt-oss:120b` as the default Ollama model identifier for the digital twin chat provider.

#### Scenario: No model override configured
- **WHEN** a chat request is processed and no alternative model is set in environment configuration
- **THEN** the provider call uses model `gpt-oss:120b`

### Requirement: Native Ollama chat request/response mapping
The system SHALL call the Ollama Cloud chat endpoint and SHALL extract assistant content from the returned assistant message.

#### Scenario: Provider returns a successful completion
- **WHEN** Ollama Cloud returns a completion payload with an assistant `message`
- **THEN** the system extracts `message.content` as the assistant answer

### Requirement: Timeout and failure handling
The system SHALL enforce a timeout and graceful error handling for upstream provider failures.

#### Scenario: Provider request exceeds timeout
- **WHEN** the Ollama Cloud request exceeds configured timeout
- **THEN** the backend returns a retry-safe error response and does not crash the application
