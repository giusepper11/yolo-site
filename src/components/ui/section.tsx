import { type ReactNode } from "react";

type SectionProps = {
  id: string;
  eyebrow?: string;
  title: string;
  description?: string;
  children: ReactNode;
};

export function Section({ id, eyebrow, title, description, children }: SectionProps) {
  return (
    <section id={id} tabIndex={-1} className="scroll-mt-24 py-14 sm:py-16">
      <div className="mb-6 space-y-3">
        {eyebrow ? (
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--color-accent)]">
            {eyebrow}
          </p>
        ) : null}
        <h2 className="text-2xl font-semibold text-[var(--color-text)] sm:text-3xl">{title}</h2>
        {description ? (
          <p className="max-w-3xl text-sm leading-7 text-[var(--color-muted)] sm:text-base">
            {description}
          </p>
        ) : null}
      </div>
      {children}
    </section>
  );
}
