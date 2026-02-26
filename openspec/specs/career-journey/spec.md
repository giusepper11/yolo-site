## Requirements

### Requirement: Experience timeline ordering
The system SHALL present professional experience entries in reverse chronological order (most recent first).

#### Scenario: Visitor views the Career Journey section
- **WHEN** the Career Journey section is rendered
- **THEN** the first entry shown is the most recent role and subsequent entries proceed backwards in time

### Requirement: Experience entry content
Each experience entry SHALL display company, role title, date range, and location, and SHALL include a concise set of highlights derived from `Profile.pdf`.

#### Scenario: Visitor expands an experience entry
- **WHEN** the visitor views an experience entry
- **THEN** company, role, dates, and location are visible and at least one highlight is displayed

### Requirement: Experience highlights and technology signals
The system SHALL support displaying per-role highlights and a compact "tech used" signal (tags) for roles where relevant (e.g., Airflow, DBT, Spark, Snowflake, AWS/GCP, FastAPI, Kubernetes).

#### Scenario: Visitor scans role technology tags
- **WHEN** a role includes technology tags
- **THEN** the tags render as scannable chips and do not overflow the layout

### Requirement: Progressive disclosure for detail
The system SHALL provide progressive disclosure for long role details (e.g., collapsible/expandable details) to keep the timeline scannable.

#### Scenario: Visitor toggles details
- **WHEN** the visitor toggles an "Expand details" control on a role
- **THEN** additional highlights are revealed and the control remains keyboard accessible

### Requirement: Narrative career arc framing
The system SHALL include a short introductory narrative for the Career Journey that frames the progression across roles (e.g., service engineering → software/data roles → senior data engineering).

#### Scenario: Visitor reads Career Journey introduction
- **WHEN** the visitor reaches the Career Journey section
- **THEN** a brief narrative sets context before the timeline entries
