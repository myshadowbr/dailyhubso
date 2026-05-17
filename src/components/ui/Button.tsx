import type { ReactNode } from "react";
import { LINKS } from "@/config";

type Variant = "primary" | "secondary" | "ghost";

interface ButtonProps {
  variant?: Variant;
  href?: string;
  children: ReactNode;
  className?: string;
  external?: boolean;
}

export function Button({
  variant = "primary",
  href = LINKS.checkout,
  children,
  className = "",
  external = true,
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center font-medium transition-all duration-200 rounded-[8px]";

  const styles: Record<Variant, string> = {
    primary:
      "bg-[var(--accent)] text-[var(--bg)] px-7 py-4 text-[15px] hover:brightness-90 shadow-[0_0_40px_var(--accent-muted)]",
    secondary:
      "bg-transparent border border-[var(--accent-border)] text-[var(--accent)] px-7 py-4 text-[15px] hover:border-[var(--accent)]",
    ghost:
      "text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:underline underline-offset-4 px-0 py-2 text-[14px]",
  };

  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className={`${base} ${styles[variant]} ${className}`}
    >
      {children}
    </a>
  );
}
