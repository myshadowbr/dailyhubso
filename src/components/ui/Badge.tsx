import type { ReactNode } from "react";

interface BadgeProps {
  children: ReactNode;
  className?: string;
}

export function Badge({ children, className = "" }: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center font-mono text-[11px] uppercase tracking-wider px-3 py-1.5 rounded-full border border-[var(--accent-border)] text-[var(--text-tertiary)] ${className}`}
    >
      {children}
    </span>
  );
}
