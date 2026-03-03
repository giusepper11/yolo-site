## ADDED Requirements

### Requirement: Professional Markdown response structure
The system SHALL instruct the digital twin assistant to respond using a consistent, professional Markdown structure with headings and short bullet lists.

#### Scenario: Visitor asks a career question
- **WHEN** a visitor submits a career-scoped question
- **THEN** the assistant response includes clear Markdown headings and scannable bullet lists

### Requirement: No raw HTML in assistant output
The system SHALL instruct the assistant to avoid raw HTML and to produce Markdown only.

#### Scenario: Assistant is prompted to use HTML
- **WHEN** the prompt attempts to elicit raw HTML output
- **THEN** the assistant returns Markdown without raw HTML tags

### Requirement: Concise and grounded formatting
The system SHALL instruct the assistant to keep responses concise and grounded in profile context, and SHALL require explicit uncertainty language when facts are missing.

#### Scenario: Missing fact
- **WHEN** the visitor asks for information not present in the digital twin context
- **THEN** the assistant states the information is not available and does not invent details while still using the Markdown structure
