import { Link } from "@tanstack/react-router";
import { useEffect, useRef } from "react";

import bowlEmpty from "@/assets/bowl-01-empty.png";
import bowlBroth from "@/assets/bowl-02-broth.png";
import bowlNoodles from "@/assets/bowl-03-noodles.png";
import bowlToppings from "@/assets/bowl-04-toppings.png";
import bowlComplete from "@/assets/bowl-05-complete.png";

const STEPS = [
  { id: "empty", index: "00", name: "Empty", note: "Nothing yet. Everything soon." },
  { id: "broth", index: "01", name: "Broth", note: "Rich. Deep. Warm." },
  { id: "noodles", index: "02", name: "Noodles", note: "The foundation." },
  { id: "toppings", index: "03", name: "Toppings", note: "Chicken, mushroom, spring onion." },
  { id: "complete", index: "04", name: "Complete", note: "Egg, nori, done." },
];

const LAYERS = [bowlEmpty, bowlBroth, bowlNoodles, bowlToppings, bowlComplete];

export function HeroBuild() {
  const root = useRef<HTMLDivElement>(null);
  const pin = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let ctx: { revert: () => void } | null = null;
    let cancelled = false;

    (async () => {
      const [{ default: gsap }, { ScrollTrigger }] = await Promise.all([
        import("gsap"),
        import("gsap/ScrollTrigger"),
      ]);
      if (cancelled || !root.current) return;
      gsap.registerPlugin(ScrollTrigger);

      ctx = gsap.context(() => {
        const tl = gsap.timeline({
          defaults: { ease: "none" },
          scrollTrigger: {
            trigger: root.current,
            start: "top top",
            end: "bottom bottom",
            scrub: 0.8,
            pin: pin.current,
            pinSpacing: false,
            anticipatePin: 1,
          },
        });

        // bowl content builds up, layer by layer
        for (let i = 1; i < LAYERS.length; i += 1) {
          tl.fromTo(
            `[data-layer="${i}"]`,
            { opacity: 0, scale: 0.94 },
            { opacity: 1, scale: 1, duration: 1 },
            i - 1,
          );
        }

        // editorial annotations crossfade with the build
        STEPS.forEach((step, i) => {
          tl.fromTo(
            `[data-step="${step.id}"]`,
            { opacity: 0, y: 18 },
            { opacity: 1, y: 0, duration: 0.35 },
            Math.max(i - 0.15, 0),
          );
          if (i < STEPS.length - 1) {
            tl.to(`[data-step="${step.id}"]`, { opacity: 0, y: -14, duration: 0.3 }, i + 0.55);
          }
        });

        // opening copy clears out, wordmark grows and settles
        tl.to("[data-hero-open]", { opacity: 0, y: -40, duration: 0.6 }, 0.1)
          .fromTo(
            "[data-hero-word]",
            { scale: 0.86, letterSpacing: "0em" },
            { scale: 1.06, letterSpacing: "-0.05em", duration: 4 },
            0,
          )
          .fromTo(
            "[data-hero-close]",
            { opacity: 0, y: 40 },
            { opacity: 1, y: 0, duration: 0.6 },
            3.3,
          );
      }, root);
    })();

    return () => {
      cancelled = true;
      ctx?.revert();
    };
  }, []);

  return (
    <div ref={root} className="relative h-[500vh] bg-cream">
      <div ref={pin} className="sticky top-0 h-screen overflow-hidden">
        {/* giant wordmark behind the bowl */}
        <div
          data-hero-word
          aria-hidden
          className="pointer-events-none absolute inset-x-0 top-1/2 -translate-y-1/2 text-center"
        >
          <span className="wordmark block text-[27vw] text-red">ITADAKI</span>
        </div>

        {/* the bowl */}
        <div className="absolute left-1/2 top-1/2 h-[72vmin] w-[72vmin] -translate-x-1/2 -translate-y-1/2">
          {LAYERS.map((src, i) => (
            <img
              key={src}
              data-layer={i}
              src={src}
              alt={
                i === LAYERS.length - 1
                  ? "Finished Itadaki tori shoyu ramen bowl"
                  : `Ramen bowl, stage ${i + 1}`
              }
              width={1024}
              height={1024}
              loading={i === 0 ? "eager" : "lazy"}
              className="absolute inset-0 h-full w-full object-contain"
              style={{ opacity: i === 0 ? 1 : 0 }}
            />
          ))}
        </div>

        {/* opening copy */}
        <div
          data-hero-open
          className="absolute left-5 top-[18vh] max-w-[13ch] md:left-8 md:top-[22vh]"
        >
          <h1 className="display text-[13vw] text-ink md:text-[7vw]">
            It starts
            <br />
            with a bowl.
          </h1>
          <p className="mt-5 max-w-[34ch] text-sm leading-relaxed text-muted-foreground">
            Japanese comfort food, made for the kind of craving that doesn't need a reason.
          </p>
          <p className="label mt-8 text-red">Scroll to build ↓</p>
        </div>

        {/* step annotations */}
        <div className="absolute bottom-[8vh] left-5 md:bottom-[12vh] md:left-8">
          {STEPS.map((step) => (
            <div
              key={step.id}
              data-step={step.id}
              className="absolute bottom-0 left-0 w-[60vw] md:w-[26vw]"
              style={{ opacity: 0 }}
            >
              <div className="rule-red pt-3">
                <p className="label text-red">
                  {step.index} / {step.name}
                </p>
                <p className="display mt-2 text-[7vw] text-ink md:text-[2.4vw]">{step.note}</p>
              </div>
            </div>
          ))}
        </div>

        {/* resolved state */}
        <div
          data-hero-close
          className="absolute inset-x-5 bottom-[7vh] md:inset-x-8 md:bottom-[9vh]"
          style={{ opacity: 0 }}
        >
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="font-jp label text-red">いただき</p>
              <p className="display mt-2 text-[11vw] text-ink md:text-[4.6vw]">
                A hug from Japan.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <Link to="/menu" className="btn-red">
                Explore the menu →
              </Link>
              <Link to="/" hash="find" className="btn-outline">
                Reserve a seat
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
