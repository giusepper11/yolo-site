## Requirements

### Requirement: Hero identity block
The system SHALL display an above-the-fold hero section that includes the person's name, primary professional title, and a succinct positioning statement derived from `Profile.pdf`.

#### Scenario: Visitor loads the top of the page
- **WHEN** a visitor lands on `/`
- **THEN** the hero section is immediately visible and clearly communicates identity and role

### Requirement: Primary calls-to-action
The system SHALL provide clear calls-to-action from the hero area, including at minimum links to LinkedIn and GitHub, and a route/anchor to Contact.

#### Scenario: Visitor clicks LinkedIn CTA
- **WHEN** a visitor clicks the LinkedIn call-to-action
- **THEN** the visitor is taken to the configured LinkedIn profile in a new tab

### Requirement: About content derived from profile summary
The system SHALL include an About section that presents a curated version of the `Profile.pdf` summary, emphasizing data engineering scope, collaboration, and key tooling (e.g., Python, SQL, cloud, Airflow/DBT/Spark).

#### Scenario: Visitor reads About section
- **WHEN** a visitor scrolls to the About section
- **THEN** the content summarizes professional mission and strengths in a concise, readable format

### Requirement: Highlighted expertise chips
The system SHALL display a small set of highlighted expertise areas (e.g., Data Engineering, Python, SQL, Cloud, Orchestration) as tags/chips near the hero or About section.

#### Scenario: Visitor scans highlighted expertise
- **WHEN** the hero/about area is visible
- **THEN** key expertise is shown as scannable chips without overwhelming the layout

### Requirement: Optional visual identity element
The system SHALL support an optional visual identity element in the hero (e.g., monogram, abstract accent, or avatar placeholder) that matches the brand visual system.

#### Scenario: Hero renders with visual accent
- **WHEN** the hero section is rendered
- **THEN** the accent element appears without obscuring text and remains responsive
