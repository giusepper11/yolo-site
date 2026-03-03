## ADDED Requirements

### Requirement: Structured career knowledge source
The system SHALL construct a structured digital-twin knowledge object from first-party career content sources maintained in the repository.

#### Scenario: Building the twin context
- **WHEN** the chat backend prepares context for a user question
- **THEN** it assembles a normalized career knowledge object from approved content modules

### Requirement: Knowledge source boundaries
The system SHALL restrict grounding context to approved profile sources and SHALL not incorporate unverified runtime data.

#### Scenario: Unknown external claim
- **WHEN** a question implies details not present in approved profile sources
- **THEN** the system avoids asserting the claim as fact and responds with uncertainty language

### Requirement: Optional twin-profile augmentation
The system SHALL support an optional curated twin-profile content file to refine tone, positioning, and preferred answer framing.

#### Scenario: Twin profile file exists
- **WHEN** optional twin profile content is present in the configured location
- **THEN** the backend merges it into the digital-twin context before prompting the model

### Requirement: Context size control
The system SHALL apply context-size controls to keep model prompts within operational limits.

#### Scenario: Context exceeds configured threshold
- **WHEN** assembled digital-twin context exceeds the maximum configured prompt budget
- **THEN** the system applies deterministic truncation or summarization before provider invocation

### Requirement: Versionable and maintainable knowledge representation
The digital-twin knowledge representation SHALL be stored in source-controlled, human-editable files so updates can be reviewed and iterated.

#### Scenario: Profile data update
- **WHEN** the owner updates career or skills content
- **THEN** the change is captured in version control and automatically reflected in subsequent chat grounding
