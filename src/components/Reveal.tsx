import { useEffect, useRef, type ReactNode } from "react";

/** Editorial reveal: content rises into place once, on first scroll into view. */
export function Reveal({
  children,
  className,
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            el.style.transitionDelay = `${delay}ms`;
            el.style.opacity = "1";
            el.style.transform = "none";
            io.unobserve(el);
          }
        }
      },
      { threshold: 0.2 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [delay]);

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: 0,
        transform: "translateY(28px)",
        transition: "opacity 0.9s cubic-bezier(0.16,1,0.3,1), transform 0.9s cubic-bezier(0.16,1,0.3,1)",
      }}
    >
      {children}
    </div>
  );
}
