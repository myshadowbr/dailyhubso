import { useEffect, useRef, useState, type ReactNode, type ElementType } from "react";

interface FadeInProps {
  children: ReactNode;
  delay?: number;
  className?: string;
  as?: ElementType;
}

export function FadeIn({ children, delay = 0, className = "", as: Tag = "div" }: FadeInProps) {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setVisible(true);
            obs.disconnect();
          }
        });
      },
      { threshold: 0.1 },
    );
    obs.observe(node);
    return () => obs.disconnect();
  }, []);

  const Component = Tag as ElementType;
  return (
    <Component
      ref={ref as unknown as React.Ref<HTMLElement>}
      className={`fade-in ${visible ? "is-visible" : ""} ${className}`}
      style={{ animationDelay: `${delay}s` }}
    >
      {children}
    </Component>
  );
}
