## ADDED Requirements

### Requirement: Server-side OpenRouter integration
The system SHALL call OpenRouter from server-side code only and SHALL never expose the OpenRouter API key to client-side runtime.

#### Scenario: Client sends chat prompt
- **WHEN** a chat message is submitted from the frontend
- **THEN** the backend route performs the OpenRouter request and the client receives only sanitized response payload fields

### Requirement: Required environment configuration
The system SHALL read OpenRouter credentials and provider configuration from environment variables in project-root `.env`.

#### Scenario: Missing API key
- **WHEN** the server starts or handles a chat request without a configured OpenRouter API key
- **THEN** the chat API responds with a controlled configuration error without leaking secrets

### Requirement: Model selection default
The system SHALL use `gpt-oss-120b` as the default OpenRouter model for digital-twin responses.

#### Scenario: No model override configured
- **WHEN** a chat request is processed and no alternative model is set in environment configuration
- **THEN** the provider call uses `gpt-oss-120b`

### Requirement: Request and response normalization
The system SHALL normalize outbound provider requests and inbound provider responses into a stable internal API contract.

#### Scenario: Provider returns a successful completion
- **WHEN** OpenRouter returns a valid completion payload
- **THEN** the backend maps it to the internal chat response contract with answer text and optional source hints

### Requirement: Timeout and failure handling
The system SHALL enforce request timeout and graceful error handling for upstream provider failures.

#### Scenario: Provider request exceeds timeout
- **WHEN** the OpenRouter request exceeds configured timeout
- **THEN** the backend returns a retry-safe error response and does not crash the application
