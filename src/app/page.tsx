import { CopyButton } from "@/components/site/copy-button";
import { Badge } from "@/components/ui/badge";
import { LinkButton } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { IconLink } from "@/components/ui/icon-link";
import { Section } from "@/components/ui/section";
import { siteContent } from "@/content/site";

export default function Home() {
  const {
    identity,
    links,
    expertise,
    about,
    careerIntro,
    experience,
    topSkills,
    toolsByCategory,
    languages,
    certifications,
    education,
    portfolio,
  } = siteContent;

  const navLinks = [
    { id: "about", label: "About" },
    { id: "career", label: "Career" },
    { id: "skills", label: "Skills" },
    { id: "portfolio", label: "Portfolio" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <div className="mx-auto max-w-6xl px-4 pb-14 sm:px-6">
      <a href="#main-content" className="skip-link">
        Skip to content
      </a>

      <header className="sticky top-0 z-20 border-b border-[var(--color-border)] bg-[color:color-mix(in_oklab,var(--color-bg)_82%,transparent)] backdrop-blur">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3 py-4">
          <div>
            <p className="text-sm font-semibold text-[var(--color-text)]">{identity.name}</p>
            <p className="text-xs text-[var(--color-muted)]">Senior Data Engineer</p>
          </div>
          <nav aria-label="Section navigation" className="flex flex-wrap gap-3 text-sm">
            {navLinks.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className="text-[var(--color-muted)] transition-colors hover:text-[var(--color-accent)]"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      </header>

      <main id="main-content" className="pt-12">
        <section
          id="hero"
          tabIndex={-1}
          className="grid scroll-mt-24 gap-6 rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6 sm:grid-cols-[1.8fr_1fr] sm:p-8"
        >
          <div className="space-y-6">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--color-accent)]">
              Enterprise Meets Edgy
            </p>
            <div className="space-y-3">
              <h1 className="text-4xl font-semibold leading-tight text-[var(--color-text)] sm:text-5xl">
                {identity.name}
              </h1>
              <p className="text-lg font-medium text-[var(--color-muted)] sm:text-xl">{identity.title}</p>
              <p className="max-w-2xl text-base leading-8 text-[var(--color-muted)]">
                {identity.positioning}
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              {expertise.map((item) => (
                <Badge key={item}>{item}</Badge>
              ))}
            </div>
            <div className="flex flex-wrap gap-3">
              <LinkButton href={links.linkedin} external>
                LinkedIn
              </LinkButton>
              <LinkButton href={links.github} external variant="secondary">
                GitHub
              </LinkButton>
              <LinkButton href="#contact" variant="secondary">
                Contact
              </LinkButton>
            </div>
          </div>
          <aside className="edgy-border subtle-float rounded-2xl bg-[var(--color-surface-2)] p-6">
            <p className="text-xs uppercase tracking-[0.16em] text-[var(--color-muted)]">Location</p>
            <p className="mt-2 text-sm text-[var(--color-text)]">{identity.location}</p>
            <div className="mt-6 space-y-2">
              <p className="text-xs uppercase tracking-[0.16em] text-[var(--color-muted)]">Focus</p>
              <p className="text-sm leading-7 text-[var(--color-text)]">
                Data reliability, cloud orchestration, and scalable analytics platforms.
              </p>
            </div>
          </aside>
        </section>

        <Section id="about" eyebrow="About" title="Mission and impact">
          <div className="grid gap-4 lg:grid-cols-2">
            <Card>
              <p className="text-sm leading-7 text-[var(--color-muted)]">{about.mission}</p>
              <div className="mt-4 space-y-3">
                {identity.summary.map((paragraph) => (
                  <p key={paragraph} className="text-sm leading-7 text-[var(--color-muted)]">
                    {paragraph}
                  </p>
                ))}
              </div>
            </Card>
            <Card>
              <h3 className="text-lg font-semibold text-[var(--color-text)]">Key tooling</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {about.keyTooling.map((tool) => (
                  <Badge key={tool}>{tool}</Badge>
                ))}
              </div>
            </Card>
          </div>
        </Section>

        <Section
          id="career"
          eyebrow="Career Journey"
          title="Building dependable systems across industries"
          description={careerIntro}
        >
          <div className="space-y-4">
            {experience.map((entry) => (
              <Card key={`${entry.company}-${entry.role}`}>
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <h3 className="text-lg font-semibold text-[var(--color-text)]">
                      {entry.role} · {entry.company}
                    </h3>
                    <p className="text-sm text-[var(--color-muted)]">
                      {entry.dateRange} · {entry.location}
                    </p>
                  </div>
                </div>
                <p className="mt-3 text-sm leading-7 text-[var(--color-muted)]">{entry.intro}</p>
                <details className="mt-4 rounded-lg border border-[var(--color-border)] bg-[var(--color-surface-2)] p-3">
                  <summary className="cursor-pointer list-none text-sm font-semibold text-[var(--color-text)]">
                    Expand details
                  </summary>
                  <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-7 text-[var(--color-muted)]">
                    {entry.highlights.map((highlight) => (
                      <li key={highlight}>{highlight}</li>
                    ))}
                  </ul>
                </details>
                {entry.technologies?.length ? (
                  <div className="mt-4 flex flex-wrap gap-2">
                    {entry.technologies.map((technology) => (
                      <Badge key={technology}>{technology}</Badge>
                    ))}
                  </div>
                ) : null}
              </Card>
            ))}
          </div>
        </Section>

        <Section id="skills" eyebrow="Skills and Credentials" title="Capabilities at a glance">
          <div className="grid gap-4 lg:grid-cols-2">
            <Card>
              <h3 className="text-lg font-semibold text-[var(--color-text)]">Top skills</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {topSkills.map((skill) => (
                  <Badge key={skill}>{skill}</Badge>
                ))}
              </div>
            </Card>
            <Card>
              <h3 className="text-lg font-semibold text-[var(--color-text)]">Languages</h3>
              <ul className="mt-4 space-y-2">
                {languages.map((language) => (
                  <li key={language.name} className="text-sm text-[var(--color-muted)]">
                    {language.name} - {language.proficiency}
                  </li>
                ))}
              </ul>
            </Card>
            <Card>
              <h3 className="text-lg font-semibold text-[var(--color-text)]">Tooling by category</h3>
              <div className="mt-4 space-y-4">
                {toolsByCategory.map((group) => (
                  <div key={group.category}>
                    <p className="text-sm font-semibold text-[var(--color-text)]">{group.category}</p>
                    <p className="mt-1 text-sm text-[var(--color-muted)]">{group.items.join(", ")}</p>
                  </div>
                ))}
              </div>
            </Card>
            <Card>
              <h3 className="text-lg font-semibold text-[var(--color-text)]">Certifications</h3>
              <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-7 text-[var(--color-muted)]">
                {certifications.map((certification) => (
                  <li key={certification.title}>{certification.title}</li>
                ))}
              </ul>
              <h3 className="mt-6 text-lg font-semibold text-[var(--color-text)]">Education</h3>
              <ul className="mt-4 space-y-3 text-sm text-[var(--color-muted)]">
                {education.map((entry) => (
                  <li key={`${entry.institution}-${entry.program}`}>
                    <p className="font-semibold text-[var(--color-text)]">{entry.institution}</p>
                    <p>{entry.program}</p>
                    {entry.period ? <p>{entry.period}</p> : null}
                  </li>
                ))}
              </ul>
            </Card>
          </div>
        </Section>

        <Section id="portfolio" eyebrow="Portfolio" title="Projects and case studies">
          <div className="space-y-4">
            {portfolio.externalPortfolioUrl ? (
              <LinkButton href={portfolio.externalPortfolioUrl} external>
                View GitHub Portfolio
              </LinkButton>
            ) : null}

            {portfolio.projects.length > 0 ? (
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {portfolio.projects.map((project) => (
                  <Card key={project.title}>
                    <h3 className="text-lg font-semibold text-[var(--color-text)]">{project.title}</h3>
                    <p className="mt-2 text-sm leading-7 text-[var(--color-muted)]">{project.description}</p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <Badge key={tag}>{tag}</Badge>
                      ))}
                    </div>
                  </Card>
                ))}
              </div>
            ) : (
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {portfolio.placeholders.map((placeholder) => (
                  <Card key={placeholder.title}>
                    <h3 className="text-lg font-semibold text-[var(--color-text)]">{placeholder.title}</h3>
                    <p className="mt-2 text-sm leading-7 text-[var(--color-muted)]">{placeholder.description}</p>
                  </Card>
                ))}
              </div>
            )}
          </div>
        </Section>

        <Section id="contact" eyebrow="Contact" title="Let us build something valuable">
          <Card>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-3">
                <IconLink href={`mailto:${links.email}`} label="Send email" icon="@" />
                <IconLink href={`tel:${links.phone}`} label="Call phone" icon="Phone" />
                <IconLink href={links.linkedin} label="Open LinkedIn profile" icon="in" external />
                <IconLink href={links.github} label="Open GitHub profile" icon="GH" external />
              </div>
              <div className="space-y-3">
                <CopyButton value={links.email} label="email" />
                <CopyButton value={links.phone} label="phone number" />
              </div>
            </div>
          </Card>
        </Section>
      </main>

      <footer className="border-t border-[var(--color-border)] pt-8">
        <p className="text-sm text-[var(--color-muted)]">
          Built with Next.js and focused on clarity, accessibility, and performance.
        </p>
      </footer>
    </div>
  );
}
