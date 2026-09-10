import { useEffect } from "react";

export function SmoothScroll() {
  useEffect(() => {
    let raf = 0;
    let lenis: { raf: (t: number) => void; destroy: () => void } | null = null;
    let cancelled = false;

    (async () => {
      const [{ default: Lenis }, { ScrollTrigger }] = await Promise.all([
        import("lenis"),
        import("gsap/ScrollTrigger"),
      ]);
      if (cancelled) return;
      const instance = new Lenis({ duration: 1.1, smoothWheel: true });
      lenis = instance as unknown as { raf: (t: number) => void; destroy: () => void };
      instance.on("scroll", ScrollTrigger.update);
      const loop = (time: number) => {
        instance.raf(time);
        raf = requestAnimationFrame(loop);
      };
      raf = requestAnimationFrame(loop);
    })();

    return () => {
      cancelled = true;
      cancelAnimationFrame(raf);
      lenis?.destroy();
    };
  }, []);

  return null;
}
