## ADDED Requirements

### Requirement: Design token system
The system SHALL define a design token system (colors, typography, spacing, radii, shadows) that is applied consistently across all sections and components.

#### Scenario: Page renders with consistent styling
- **WHEN** the home page is rendered
- **THEN** headings, body text, spacing, and surfaces use the defined tokens consistently

### Requirement: Enterprise-meets-edgy visual tone
The system SHALL implement a visual style that balances enterprise clarity (readability, structure, restraint) with edgy accents (high-contrast highlights, sharp geometry, subtle glow/gradient usage).

#### Scenario: Visitor perceives brand tone
- **WHEN** a visitor views the hero and section surfaces
- **THEN** the page communicates a premium professional feel with a distinct accent style that does not reduce readability

### Requirement: Accessible contrast and focus
The system SHALL meet WCAG AA contrast expectations for text and interactive elements, and SHALL provide a visible focus indicator for keyboard navigation.

#### Scenario: Keyboard user navigates interactive elements
- **WHEN** a user tabs through links and buttons
- **THEN** a clearly visible focus state is shown for each focused element

### Requirement: Motion guidelines with reduced-motion support
The system SHALL use subtle motion (micro-interactions, section reveals) and SHALL respect `prefers-reduced-motion` by reducing or disabling non-essential animation.

#### Scenario: Reduced-motion user visits the site
- **WHEN** the user agent indicates `prefers-reduced-motion: reduce`
- **THEN** non-essential animations are disabled or significantly reduced without breaking layout

### Requirement: Reusable component primitives
The system SHALL provide reusable primitives (e.g., Button, Card, Badge/Tag, Section container, Timeline item) that enforce consistent spacing, states, and typography.

#### Scenario: Sections reuse primitives
- **WHEN** multiple sections render cards or tags
- **THEN** the UI components share consistent styling and interaction states
