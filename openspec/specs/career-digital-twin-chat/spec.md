## ADDED Requirements

### Requirement: Career-focused chat interface
The system SHALL provide an interactive chat interface that accepts natural-language questions about the site owner's career history, skills, and professional positioning.

#### Scenario: Visitor asks a career question
- **WHEN** a visitor submits a question about experience, skills, or accomplishments
- **THEN** the system returns a conversational answer in the chat history without full page reload

### Requirement: Career-domain scope enforcement
The system SHALL keep responses within professional and career-related scope and SHALL refuse or redirect out-of-scope requests.

#### Scenario: Visitor asks an out-of-scope question
- **WHEN** a visitor submits a prompt unrelated to the owner's career profile
- **THEN** the system returns a brief boundary response and invites a career-related question

### Requirement: Grounded response behavior
The system SHALL ground answers in known first-party profile data and SHALL state uncertainty when required facts are unavailable.

#### Scenario: Missing fact in profile context
- **WHEN** the visitor asks for a fact not present in the digital twin context
- **THEN** the system states that the information is not available and does not invent specific details

### Requirement: Source hint presentation
The system SHALL include source hints that map responses to relevant site profile sections when sufficient grounding evidence exists.

#### Scenario: Answer references known profile sections
- **WHEN** an answer is generated from data tied to specific profile sections
- **THEN** the response payload includes source labels that can be rendered as references in the UI

### Requirement: Chat error and loading states
The system SHALL provide visible loading and failure states during chat requests.

#### Scenario: Upstream provider failure
- **WHEN** the chat API request fails due to timeout, rate limit, or provider error
- **THEN** the UI shows a non-blocking error message and allows the visitor to retry
