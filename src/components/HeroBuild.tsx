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
        // 01. BOWL PROGRESSIVE INGREDIENT ASSEMBLY
        // ----------------------------------------------------
        // Broth appears (Layer 1)
        tl.fromTo(
          `[data-layer="1"]`,
          { opacity: 0 },
          { opacity: 1, duration: 0.8 },
          0.5,
        );

        // Noodles appear (Layer 2)
        tl.fromTo(
          `[data-layer="2"]`,
          { opacity: 0 },
          { opacity: 1, duration: 0.8 },
          1.3,
        );

        // Toppings appear (Layer 3)
        tl.fromTo(
          `[data-layer="3"]`,
          { opacity: 0 },
          { opacity: 1, duration: 0.8 },
          2.1,
        );

        // Finished complete bowl (Layer 4)
        tl.fromTo(
          `[data-layer="4"]`,
          { opacity: 0 },
          { opacity: 1, duration: 0.8 },
          2.9,
        );

        // ----------------------------------------------------
        // 02. EDITORIAL TYPOGRAPHY FLOW ACROSS 3 STATES
        // ----------------------------------------------------
        // State 01: Headline & Right metadata fade out
        tl.fromTo(
          "[data-hero-state-1-left]",
          { opacity: 1, y: 0 },
          { opacity: 0, y: -16, duration: 0.35 },
          0.4,
        );
        tl.fromTo(
          "[data-hero-state-1-right]",
          { opacity: 1, y: 0 },
          { opacity: 0, y: -16, duration: 0.35 },
          0.4,
        );

        // State 02: Broth quiet craft note fades in during broth/noodle immersion, fades out before payoff
        tl.fromTo(
          "[data-hero-state-2]",
          { opacity: 0, y: 14 },
          { opacity: 1, y: 0, duration: 0.35 },
          0.75,
        ).to("[data-hero-state-2]", { opacity: 0, y: -12, duration: 0.35 }, 2.5);

        // State 03: Final payoff reveals ONLY after bowl is fully assembled
        tl.fromTo(
          "[data-hero-state-3-left]",
          { opacity: 0, y: 16 },
          { opacity: 1, y: 0, duration: 0.4 },
          3.15,
        );

        tl.fromTo(
          "[data-hero-state-3-right]",
          { opacity: 0, y: 16 },
          { opacity: 1, y: 0, duration: 0.4 },
          3.25,
        );

        tl.fromTo(
          "[data-hero-state-3-mobile]",
          { opacity: 0, y: 14 },
          { opacity: 1, y: 0, duration: 0.4 },
          3.2,
        );
      }, root);
    })();

    return () => {
      cancelled = true;
      ctx?.revert();
    };
  }, []);

  return (
    <div ref={root} className="relative h-[380vh] bg-paper">
      <div ref={pin} className="sticky top-0 h-screen overflow-hidden">
        {/* ==================================================
            BACKGROUND GRAPHIC: Giant ITADAKI Wordmark
            Sits strictly behind the bowl as an architectural backdrop.
            Sized and centered to create tension without overlapping
            left headline or right annotations.
            Stable across all states.
            ================================================== */}
        <div
          aria-hidden
          className="pointer-events-none absolute left-1/2 top-[51%] -translate-x-1/2 -translate-y-1/2 text-center select-none z-0 md:top-1/2"
        >
          <span className="wordmark block text-[20vw] leading-[0.75] text-red opacity-[0.13] tracking-tight whitespace-nowrap md:text-[13.5vw]">
            ITADAKI
          </span>
        </div>

        {/* ==================================================
            HERO OBJECT: The Ramen Bowl
            Dominant central focal point.
            Visually interrupts / covers the giant wordmark.
            Maintains stable position throughout scroll.
            ================================================== */}
        <div className="absolute left-1/2 top-[51%] h-[54vw] w-[54vw] max-h-[260px] max-w-[260px] -translate-x-1/2 -translate-y-1/2 drop-shadow-[0_22px_38px_rgba(0,0,0,0.18)] z-10 md:top-1/2 md:h-[62vmin] md:w-[62vmin] md:max-h-none md:max-w-none lg:h-[66vmin] lg:w-[66vmin]">
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
              className="absolute inset-0 h-full w-full object-contain pointer-events-none select-none"
              style={{ opacity: i === 0 ? 1 : 0 }}
            />
          ))}
        </div>

        {/* ==================================================
            STATE 01: INTRODUCTION (EMPTY BOWL)
            Left zone: Primary Headline + Secondary Body + Scroll cue
            Clear breathing room, no collision with center bowl or red mark.
            ================================================== */}
        <div
          data-hero-state-1-left
          className="absolute left-6 top-[68px] z-20 max-w-[260px] md:left-10 md:top-[22vh] md:max-w-[290px] lg:left-16 lg:top-[24vh] lg:max-w-[320px]"
          style={{ opacity: 1 }}
        >
          <div className="flex items-center gap-2">
            <span className="meta-label text-red">01 / 03</span>
            <span className="h-px w-3 bg-red/40" />
            <span className="meta-label text-ink/70">SPECIFICATION</span>
          </div>

          <h1 className="font-display mt-2 text-[2.5rem] uppercase leading-[0.88] tracking-[-0.03em] text-ink md:mt-3 md:text-5xl lg:text-[4.25rem]">
            It starts
            <br />
            with a
            <br />
            bowl.
          </h1>

          <p className="mt-2.5 font-sans text-xs leading-relaxed text-muted-foreground md:mt-4 md:text-[0.8125rem] max-w-[26ch]">
            Japanese comfort food, made for the kind of craving that doesn't need a reason.
          </p>

          <div className="mt-3.5 flex items-center gap-2 md:mt-7">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-red animate-pulse" />
            <span className="meta-label text-ink/75">Scroll to build ↓</span>
          </div>
        </div>

        {/* STATE 01: Right zone metadata (Museum / Spec notes) */}
        <div
          data-hero-state-1-right
          className="hidden md:flex absolute right-10 top-[22vh] z-20 lg:right-16 lg:top-[24vh] flex-col items-end text-right space-y-7 max-w-[260px]"
          style={{ opacity: 1 }}
        >
          <div className="border-r border-red pr-4">
            <div className="flex items-center justify-end gap-1.5">
              <span className="meta-label text-red">01 / 03</span>
              <span className="meta-label text-red">→</span>
              <span className="meta-label text-red">BOWL</span>
            </div>
            <p className="mt-1.5 font-sans text-xs font-bold text-ink uppercase tracking-wider">
              Matte Black Ceramic
            </p>
            <p className="mt-0.5 font-sans text-[0.6875rem] text-muted-foreground">
              Hand-thrown Japanese Vessel
            </p>
          </div>

          <div className="pr-4 space-y-1 text-right">
            <p className="meta-label text-ink">ITADAKI RAMEN SHOP</p>
            <p className="meta-label text-muted-foreground">Hubli / India</p>
            <p className="font-jp text-xs text-red font-medium tracking-widest mt-2">
              いただき · 一杯の温もり
            </p>
            <p className="meta-label text-ink/60 text-[0.625rem] mt-1 tracking-widest">
              A HUG FROM JAPAN.
            </p>
          </div>
        </div>

        {/* ==================================================
            STATE 02: THE BASE / BROTH (QUIETER MOMENT)
            Restrained editorial label replacing the headline area.
            Lets the visual transformation speak.
            ================================================== */}
        <div
          data-hero-state-2
          className="pointer-events-none absolute left-6 top-[68px] z-20 max-w-[260px] md:left-10 md:top-[24vh] md:max-w-[300px] lg:left-16 lg:top-[26vh]"
          style={{ opacity: 0 }}
        >
          <div className="border-l border-red pl-4">
            <div className="flex items-center gap-2">
              <span className="meta-label text-red">02 / 03</span>
              <span className="meta-label text-red">→</span>
              <span className="meta-label text-red">BROTH</span>
            </div>
            <p className="meta-label text-ink/60 mt-1 tracking-wider">THE BASE</p>
            <h2 className="font-display mt-2 text-2xl uppercase tracking-tight text-ink md:text-3xl lg:text-[2.25rem] leading-[0.9]">
              Rich. Warm. Deep.
            </h2>
            <p className="mt-2.5 font-sans text-xs leading-relaxed text-muted-foreground max-w-[24ch]">
              Slow-simmered chicken shoyu broth poured steaming hot into the vessel.
            </p>
          </div>
        </div>

        {/* ==================================================
            STATE 03: FINISHED RAMEN (THE PAYOFF)
            Reveals ONLY after the bowl is fully complete.
            Desktop: Subtle brand signature at bottom-left, CTAs at bottom-right.
            Mobile: Cleanly stacked payoff cluster at bottom.
            ================================================== */}
        {/* Desktop Left Brand Signature */}
        <div
          data-hero-state-3-left
          className="hidden md:block absolute bottom-10 left-10 z-20 lg:bottom-12 lg:left-16"
          style={{ opacity: 0 }}
        >
          <div className="flex items-center gap-2">
            <span className="meta-label text-red">03 / 03</span>
            <span className="meta-label text-red">→</span>
            <span className="meta-label text-red">FINISHED RAMEN</span>
          </div>
          <h2 className="font-display mt-1 text-3xl uppercase tracking-tight text-ink md:text-4xl lg:text-[3.25rem] leading-[0.88]">
            ITADAKI.
          </h2>
          <p className="font-jp meta-label mt-1 text-ink/75 tracking-widest">
            A HUG FROM JAPAN.
          </p>
        </div>

        {/* Desktop Right CTAs */}
        <div
          data-hero-state-3-right
          className="hidden md:block absolute bottom-10 right-10 z-20 lg:bottom-12 lg:right-16"
          style={{ opacity: 0 }}
        >
          <div className="flex items-center gap-3">
            <Link to="/menu" className="btn-red">
              Explore Menu →
            </Link>
            <Link to="/" hash="find" className="btn-outline">
              Reserve a Seat
            </Link>
          </div>
        </div>

        {/* Mobile State 03 Payoff Cluster */}
        <div
          data-hero-state-3-mobile
          className="absolute bottom-20 inset-x-5 z-20 flex flex-col items-center text-center gap-2 md:hidden"
          style={{ opacity: 0 }}
        >
          <div>
            <span className="meta-label text-red text-[0.625rem]">03 / 03 · FINISHED RAMEN</span>
            <h2 className="font-display text-2xl uppercase tracking-tight text-ink leading-none mt-0.5">
              ITADAKI.
            </h2>
            <p className="meta-label text-ink/70 text-[0.5625rem] tracking-widest mt-0.5">
              A HUG FROM JAPAN.
            </p>
          </div>
          <div className="flex w-full items-center justify-center gap-2 pt-1">
            <Link to="/menu" className="btn-red !py-2 !px-3 text-[0.625rem] flex-1 text-center">
              Explore Menu →
            </Link>
            <Link to="/" hash="find" className="btn-outline !py-2 !px-3 text-[0.625rem] flex-1 text-center">
              Reserve a Seat
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
