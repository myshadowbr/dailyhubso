import type { ReactNode } from "react";

export function AppBadge({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <span
      className={`inline-flex items-center font-mono text-[11px] uppercase tracking-wider px-3 py-1.5 rounded-full border border-[var(--accent-border)] text-[var(--text-tertiary)] ${className}`}
    >
      {children}
    </span>
  );
}
