## Requirements

### Requirement: Skills presentation
The system SHALL display a curated set of top skills derived from `Profile.pdf` (e.g., Data Engineering, Python, SQL) in a scannable format.

#### Scenario: Visitor views top skills
- **WHEN** the Skills/Credentials section is rendered
- **THEN** top skills are visible as a compact list or chips

### Requirement: Tooling and platform categories
The system SHALL present tooling/platform experience grouped into categories (e.g., Orchestration, Warehousing, Cloud, Processing, APIs, Containers) to improve readability.

#### Scenario: Visitor scans grouped tooling
- **WHEN** the tooling list is displayed
- **THEN** tools are grouped under category headings and remain readable on mobile

### Requirement: Languages block
The system SHALL display languages and proficiency as stated in `Profile.pdf` (Português, Inglês) in an accessible text format.

#### Scenario: Visitor reads language proficiency
- **WHEN** the Languages block is rendered
- **THEN** each language and its proficiency is visible and understandable without relying on color alone

### Requirement: Certifications block
The system SHALL display certifications from `Profile.pdf` and SHALL support linking to external proof where available (optional).

#### Scenario: Visitor views certifications
- **WHEN** the Certifications block is rendered
- **THEN** certification titles are listed and remain readable without truncation

### Requirement: Education block
The system SHALL display education entries (institution, program, dates if present) as listed in `Profile.pdf`.

#### Scenario: Visitor views education history
- **WHEN** the Education block is rendered
- **THEN** education entries are shown in a consistent, scannable format
