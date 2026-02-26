## Requirements

### Requirement: Portfolio section exists and is future-proof
The system SHALL include a Portfolio section designed to be populated later with real projects without restructuring the page.

#### Scenario: Visitor scrolls to Portfolio
- **WHEN** the visitor reaches the Portfolio section
- **THEN** the section is present and visually consistent with the rest of the page

### Requirement: Placeholder project cards
The system SHALL render placeholder project cards when no portfolio projects are configured, indicating "Coming soon" (or equivalent) and setting expectations.

#### Scenario: No projects are configured
- **WHEN** the portfolio data source contains zero projects
- **THEN** placeholder cards are shown instead of an empty section

### Requirement: Project card data model
The system SHALL support a project card data model including title, short description, tags, and optional links (e.g., GitHub, live demo).

#### Scenario: A project includes external links
- **WHEN** a project has a GitHub link configured
- **THEN** the project card renders a clickable link with an accessible label

### Requirement: Optional external portfolio link
The system SHALL support an optional prominent external portfolio link (e.g., to GitHub profile) as a stopgap until projects are added.

#### Scenario: External portfolio link is configured
- **WHEN** an external portfolio URL is present
- **THEN** the Portfolio section shows a clear link action to that URL
