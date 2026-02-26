## Requirements

### Requirement: Contact section content
The system SHALL provide a Contact section containing at minimum email, phone number, LinkedIn profile link, and GitHub profile link, derived from `Profile.pdf`.

#### Scenario: Visitor views contact methods
- **WHEN** the visitor scrolls to the Contact section
- **THEN** email, phone, LinkedIn, and GitHub contact methods are visible and usable

### Requirement: Link behaviors
Email and phone actions SHALL use appropriate link schemes (`mailto:` and `tel:`), and external links SHALL open in a new tab.

#### Scenario: Visitor clicks email link
- **WHEN** the visitor clicks the email contact action
- **THEN** the user agent opens the default mail client using a `mailto:` link

### Requirement: Copy-to-clipboard affordance (optional)
The system SHALL support an optional copy-to-clipboard action for email and phone, with a clear success indication.

#### Scenario: Visitor copies email
- **WHEN** the visitor activates "Copy email"
- **THEN** the email address is copied to the clipboard and a non-disruptive confirmation is shown

### Requirement: Accessibility for contact interactions
All contact actions SHALL be reachable via keyboard and SHALL have accessible names that identify their purpose (e.g., "Open LinkedIn profile", "Copy phone number").

#### Scenario: Keyboard user navigates contact actions
- **WHEN** the user tabs through the Contact section actions
- **THEN** each action receives focus and exposes a meaningful accessible name
