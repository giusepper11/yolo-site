## ADDED Requirements

### Requirement: Render assistant responses as Markdown
The chat UI SHALL render assistant message bodies as Markdown so headings, lists, and links appear formatted and readable.

#### Scenario: Assistant returns Markdown with headings and bullets
- **WHEN** the assistant response contains Markdown headings and bullet lists
- **THEN** the chat UI displays headings and bullet lists with visible formatting

### Requirement: Safe rendering without raw HTML
The chat UI SHALL render Markdown safely and SHALL not allow raw HTML execution in assistant message bodies.

#### Scenario: Assistant output contains HTML tags
- **WHEN** an assistant message contains raw HTML tags
- **THEN** the UI does not render them as executable HTML

### Requirement: Graceful degradation
The chat UI SHALL gracefully display assistant output even if Markdown is malformed.

#### Scenario: Assistant output contains invalid Markdown
- **WHEN** the assistant returns malformed Markdown
- **THEN** the UI still displays readable text without crashing

### Requirement: Accessibility and readability
The chat UI SHALL preserve accessibility and readability for Markdown output, including keyboard-accessible links and sensible spacing for headings and lists.

#### Scenario: Visitor navigates formatted answer
- **WHEN** a visitor navigates the assistant message with keyboard and screen reader
- **THEN** links are focusable and the content order remains logical and readable
