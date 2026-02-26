## Requirements

### Requirement: Document metadata and social cards
The system SHALL define site-wide metadata (title, description) and SHALL include OpenGraph/Twitter card metadata suitable for link previews.

#### Scenario: Social platform requests preview metadata
- **WHEN** a crawler fetches the home page
- **THEN** OpenGraph and Twitter metadata fields are present with the configured title and description

### Requirement: Sitemap and robots configuration
The system SHALL provide a sitemap and robots directives appropriate for a personal site.

#### Scenario: Search engine requests sitemap
- **WHEN** the user agent requests `/sitemap.xml` (or equivalent Next.js route)
- **THEN** a valid sitemap is returned that includes the home route

### Requirement: Semantic structure and headings
The system SHALL use semantic HTML structure (header, main, nav, section, footer) and SHALL implement a logical heading hierarchy.

#### Scenario: Screen reader user navigates by headings
- **WHEN** a screen reader enumerates headings
- **THEN** headings follow a logical hierarchy that maps to the visible sections

### Requirement: Keyboard navigation and skip link
The system SHALL support full keyboard navigation and SHALL provide a skip link to jump directly to main content.

#### Scenario: Keyboard user skips navigation
- **WHEN** the keyboard user activates the skip link
- **THEN** focus moves to the main content container

### Requirement: Reduced motion preference
The system SHALL respect `prefers-reduced-motion` and SHALL avoid mandatory motion for comprehension.

#### Scenario: Reduced-motion user scrolls the page
- **WHEN** the page includes reveal or hover animations
- **THEN** those animations are reduced or disabled for reduced-motion users

### Requirement: Performance-oriented defaults
The system SHALL prefer performance-oriented defaults (optimized images, minimal client components, font optimization) suitable for fast initial load.

#### Scenario: Visitor loads the home page on a slow connection
- **WHEN** the home page is requested
- **THEN** the page loads core content quickly without blocking on large assets
