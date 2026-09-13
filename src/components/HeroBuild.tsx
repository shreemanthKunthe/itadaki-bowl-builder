import { Link } from "@tanstack/react-router";
import { useEffect, useRef } from "react";

import bowlEmpty from "@/assets/bowl-01-empty.png";
import bowlBroth from "@/assets/bowl-02-broth.png";
import bowlNoodles from "@/assets/bowl-03-noodles.png";
import bowlToppings from "@/assets/bowl-04-toppings.png";
import bowlComplete from "@/assets/bowl-05-complete.png";

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
            scrub: 0.6,
            pin: pin.current,
            pinSpacing: false,
            anticipatePin: 1,
          },
        });

        // ----------------------------------------------------
        // 01. BOWL PROGRESSIVE ASSEMBLY
        // ----------------------------------------------------
        // Broth appears (Layer 1)
        tl.fromTo(
          `[data-layer="1"]`,
          { opacity: 0, scale: 0.96 },
          { opacity: 1, scale: 1, duration: 0.8 },
          0.4,
        );

        // Noodles appear (Layer 2)
        tl.fromTo(
          `[data-layer="2"]`,
          { opacity: 0, scale: 0.97 },
          { opacity: 1, scale: 1, duration: 0.8 },
          1.2,
        );

        // Toppings appear (Layer 3)
        tl.fromTo(
          `[data-layer="3"]`,
          { opacity: 0, scale: 0.98 },
          { opacity: 1, scale: 1, duration: 0.8 },
          2.0,
        );

        // Finished complete bowl (Layer 4)
        tl.fromTo(
          `[data-layer="4"]`,
          { opacity: 0, scale: 0.99 },
          { opacity: 1, scale: 1, duration: 0.8 },
          2.8,
        );

        // ----------------------------------------------------
        // 02. STATE 01 -> STATE 02 -> STATE 03 TYPOGRAPHY FLOW
        // ----------------------------------------------------
        // State 01 headline & right metadata clear out as scroll begins
        tl.to("[data-hero-open]", { opacity: 0, y: -20, duration: 0.4 }, 0.25)
          .to("[data-hero-right]", { opacity: 0, y: -16, duration: 0.4 }, 0.25);

        // State 02: Broth annotation (Quiet editorial label)
        tl.fromTo(
          "[data-step-broth]",
          { opacity: 0, y: 14 },
          { opacity: 1, y: 0, duration: 0.3 },
          0.65,
        ).to("[data-step-broth]", { opacity: 0, y: -12, duration: 0.3 }, 1.5);

        // State 02 continuation: Noodles & Toppings craft note
        tl.fromTo(
          "[data-step-toppings]",
          { opacity: 0, y: 14 },
          { opacity: 1, y: 0, duration: 0.3 },
          1.85,
        ).to("[data-step-toppings]", { opacity: 0, y: -12, duration: 0.3 }, 2.7);

        // State 03: Final payoff reveals ONLY after bowl is complete
        // Left brand signature
        tl.fromTo(
          "[data-hero-close-left]",
          { opacity: 0, y: 24 },
          { opacity: 1, y: 0, duration: 0.5 },
          3.2,
        );

        // Right CTA cluster (away from bowl, rock-solid full opacity)
        tl.fromTo(
          "[data-hero-close-right]",
          { opacity: 0, y: 24 },
          { opacity: 1, y: 0, duration: 0.5 },
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
    <div ref={root} className="relative h-[420vh] bg-paper">
      <div ref={pin} className="sticky top-0 h-screen overflow-hidden">
        {/* ==================================================
            BACKGROUND GRAPHIC: Giant ITADAKI Wordmark
            Sits behind the bowl as a disciplined graphic environment.
            Visually consistent across all three states (stable opacity & scale).
            ================================================== */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 top-1/2 -translate-y-1/2 text-center select-none"
        >
          <span className="wordmark block text-[25vw] text-red opacity-[0.16] tracking-tight">
            ITADAKI
          </span>
        </div>

        {/* ==================================================
            HERO OBJECT: The Ramen Bowl
            Center 6 columns, approximately fixed central focal point.
            The bowl interrupts/overlaps the giant ITADAKI wordmark.
            ================================================== */}
        <div className="absolute left-1/2 top-[56%] h-[60vmin] w-[60vmin] -translate-x-1/2 -translate-y-1/2 drop-shadow-2xl md:top-1/2 md:h-[68vmin] md:w-[68vmin] lg:h-[72vmin] lg:w-[72vmin]">
          {LAYERS.map((src, i) => (
            <img
              key={src}
              data-layer={i}
              src={src}
              alt={
                i === LAYERS.length - 1
                  ? "Finished Itadaki Tori Shoyu Ramen bowl"
                  : `Ramen bowl stage ${i + 1}`
              }
              width={1024}
              height={1024}
              loading={i === 0 ? "eager" : "lazy"}
              className="absolute inset-0 h-full w-full object-contain"
              style={{ opacity: i === 0 ? 1 : 0 }}
            />
          ))}
        </div>

        {/* ==================================================
            STATE 01: INTRODUCTION (EMPTY BOWL)
            Left 3 columns: Primary Headline + Supporting Copy + Scroll Cue
            ================================================== */}
        <div
          data-hero-open
          className="absolute left-6 top-[12vh] z-10 max-w-[85vw] md:left-12 md:top-[24vh] md:max-w-[280px] lg:left-16"
        >
          <span className="meta-label text-red">01 / 03 · SPECIFICATION</span>
          
          <h1 className="font-display mt-2.5 text-[11vw] uppercase leading-[0.84] tracking-[-0.03em] text-ink md:mt-3 md:text-5xl lg:text-[4.25rem]">
            It starts
            <br />
            with a
            <br />
            bowl.
          </h1>

          <p className="mt-3.5 font-sans text-xs leading-relaxed text-muted-foreground md:mt-4 md:text-sm max-w-[26ch]">
            Japanese comfort food, made for the kind of craving that doesn't need a reason.
          </p>

          <div className="mt-5 flex items-center gap-2 md:mt-7">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-red animate-pulse" />
            <span className="meta-label text-ink/70">Scroll to build ↓</span>
          </div>
        </div>

        {/* STATE 01: Right 3 columns metadata (Restrained museum/technical labels) */}
        <div
          data-hero-right
          className="hidden md:flex absolute right-12 top-[24vh] lg:right-16 flex-col items-end text-right space-y-6"
        >
          <div className="border-r-2 border-red pr-3.5">
            <p className="meta-label text-red">VESSEL · SPEC</p>
            <p className="mt-1 font-sans text-xs font-semibold text-ink uppercase tracking-wider">
              Matte Black Ceramic
            </p>
            <p className="mt-0.5 font-sans text-[0.6875rem] text-muted-foreground">
              Hand-thrown Japanese Vessel
            </p>
          </div>

          <div className="pr-3.5 space-y-1 text-right">
            <p className="meta-label text-ink">ITADAKI RAMEN SHOP</p>
            <p className="meta-label text-muted-foreground">Bengaluru · India</p>
            <p className="font-jp text-xs text-red font-medium tracking-widest mt-1.5">
              いただき · 一杯の温もり
            </p>
          </div>
        </div>

        {/* ==================================================
            STATE 02: THE BROTH / THE BASE (QUIETER MOMENT)
            Restrained editorial label replacing the headline area.
            Lets the visual transformation speak.
            ================================================== */}
        <div
          data-step-broth
          className="pointer-events-none absolute left-6 top-[28vh] z-10 max-w-xs md:left-12 md:top-[30vh] lg:left-16"
          style={{ opacity: 0 }}
        >
          <div className="border-l-2 border-red pl-4">
            <span className="meta-label text-red">02 / 03 · THE BASE</span>
            <p className="font-display mt-2 text-2xl uppercase tracking-tight text-ink md:text-3xl">
              Rich. Warm. Deep.
            </p>
            <p className="mt-1 font-sans text-xs leading-relaxed text-muted-foreground max-w-[24ch]">
              Slow-simmered chicken shoyu broth poured steaming hot into the vessel.
            </p>
          </div>
        </div>

        <div
          data-step-toppings
          className="pointer-events-none absolute left-6 top-[28vh] z-10 max-w-xs md:left-12 md:top-[30vh] lg:left-16"
          style={{ opacity: 0 }}
        >
          <div className="border-l-2 border-red pl-4">
            <span className="meta-label text-red">THE CRAFT · ASSEMBLY</span>
            <p className="font-display mt-2 text-2xl uppercase tracking-tight text-ink md:text-3xl">
              Noodles &amp; Toppings
            </p>
            <p className="mt-1 font-sans text-xs leading-relaxed text-muted-foreground max-w-[24ch]">
              Springy wheat noodles, charred chicken, jammy ajitama, menma and nori.
            </p>
          </div>
        </div>

        {/* ==================================================
            STATE 03: FINISHED RAMEN (THE PAYOFF)
            Appears ONLY after the bowl is complete.
            Left: Subtle brand title & phrase (smaller than hero headline).
            Right: Clear, high-contrast CTAs positioned away from bowl.
            ================================================== */}
        <div
          data-hero-close-left
          className="absolute bottom-8 left-6 z-20 md:bottom-12 md:left-12 lg:left-16"
          style={{ opacity: 0 }}
        >
          <span className="meta-label text-red">03 / 03 · FINISHED BOWL</span>
          <h2 className="font-display mt-1 text-3xl uppercase tracking-tight text-ink md:text-4xl lg:text-5xl">
            ITADAKI.
          </h2>
          <p className="font-jp meta-label mt-1 text-ink/75 tracking-wider">
            A HUG FROM JAPAN.
          </p>
        </div>

        <div
          data-hero-close-right
          className="absolute bottom-8 right-6 z-20 md:bottom-12 md:right-12 lg:right-16"
          style={{ opacity: 0 }}
        >
          <div className="flex flex-wrap items-center gap-3">
            <Link to="/menu" className="btn-red">
              Explore Menu →
            </Link>
            <Link to="/" hash="find" className="btn-outline">
              Reserve a Seat
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}


