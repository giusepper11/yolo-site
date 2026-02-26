import { type ReactNode } from "react";

type IconLinkProps = {
  href: string;
  label: string;
  icon: ReactNode;
  external?: boolean;
};

export function IconLink({ href, label, icon, external = false }: IconLinkProps) {
  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      aria-label={label}
      className="inline-flex items-center gap-2 text-sm text-[var(--color-muted)] underline-offset-4 transition-colors hover:text-[var(--color-accent)] hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-focus)]"
    >
      <span aria-hidden>{icon}</span>
      <span>{label}</span>
    </a>
  );
}
