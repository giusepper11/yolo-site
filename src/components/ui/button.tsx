import Link from "next/link";
import { type ReactNode } from "react";

type ButtonVariant = "primary" | "secondary";

type CommonProps = {
  children: ReactNode;
  className?: string;
  variant?: ButtonVariant;
};

type AnchorButtonProps = CommonProps & {
  href: string;
  external?: boolean;
};

type SolidButtonProps = CommonProps & {
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
};

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-[var(--color-accent)] text-[var(--color-on-accent)] hover:bg-[var(--color-accent-strong)]",
  secondary:
    "border border-[var(--color-border)] bg-transparent text-[var(--color-text)] hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]",
};

const baseStyles =
  "inline-flex items-center justify-center rounded-xl px-4 py-2 text-sm font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-focus)]";

export function LinkButton({
  href,
  children,
  className = "",
  variant = "primary",
  external = false,
}: AnchorButtonProps) {
  const styles = `${baseStyles} ${variantStyles[variant]} ${className}`.trim();

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={styles}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={styles}>
      {children}
    </Link>
  );
}

export function Button({
  children,
  className = "",
  variant = "primary",
  type = "button",
  onClick,
}: SolidButtonProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`${baseStyles} ${variantStyles[variant]} ${className}`.trim()}
    >
      {children}
    </button>
  );
}
