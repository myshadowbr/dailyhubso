import type { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
  variant?: "default" | "accent";
}

export function AppCard({ children, className = "", variant = "default" }: CardProps) {
  const base = "rounded-[12px] p-6 transition-colors duration-200";
  const styles =
    variant === "accent"
      ? "bg-[var(--accent-muted)] border border-[var(--accent-border)]"
      : "bg-[var(--bg-card)] border border-[var(--border)] hover:border-[var(--accent-border)]";
  return <div className={`${base} ${styles} ${className}`}>{children}</div>;
}
