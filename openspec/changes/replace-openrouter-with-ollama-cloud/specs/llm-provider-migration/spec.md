## ADDED Requirements

### Requirement: Preserve chat API response contract
The system SHALL preserve the existing `/api/chat` response contract when migrating providers.

#### Scenario: Provider swap deployed
- **WHEN** the upstream provider changes from OpenRouter to Ollama Cloud
- **THEN** `/api/chat` responses still contain `answer`, `sources`, and `warnings`

### Requirement: Preserve chat UI behavior
The system SHALL preserve the existing chat UI behavior when migrating providers.

#### Scenario: Visitor uses the chat UI after migration
- **WHEN** the visitor submits a question
- **THEN** the UI continues to display loading, errors, assistant replies, and source hints as before

### Requirement: Deprecate OpenRouter configuration for this feature
The system SHALL document that the career digital twin chat feature uses Ollama Cloud configuration and SHALL provide an updated `.env.example`.

#### Scenario: Developer configures the project
- **WHEN** a developer uses `.env.example` to configure environment variables
- **THEN** the file includes Ollama Cloud variables and indicates OpenRouter variables are not required for this feature

### Requirement: Migration rollback capability
The system SHALL allow rollback to the previous provider implementation with minimal code changes.

#### Scenario: Provider instability
- **WHEN** Ollama Cloud is unstable or unavailable for the chat feature
- **THEN** the system can be reverted to the prior provider (or chat can be disabled) without redesigning the API contract
