import { useEffect, useRef, useState } from "react";
// Bowls layers
import bowlBroth from "@/assets/bowl-02-broth.png";
import bowlNoodles from "@/assets/bowl-03-noodles.png";
import bowlToppings from "@/assets/bowl-04-toppings.png";
import bowlComplete from "@/assets/bowl-05-complete.png";

// Ramen components from src/assets/Components
import eggComponent from "@/assets/Components/Egg.png";
import narutoComponent from "@/assets/Components/Naruto.png";
import noriComponent from "@/assets/Components/Nori.png";
import scallionsComponent from "@/assets/Components/Scallions.png";

export function Preloader() {
  const containerRef = useRef<HTMLDivElement>(null);
  const bgOverlayRef = useRef<HTMLDivElement>(null);
  const watermarkRef = useRef<HTMLDivElement>(null);
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    let ctx: { revert: () => void } | null = null;
    let cancelled = false;

    // Lock body scrolling during preloader playback
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    (async () => {
      const { default: gsap } = await import("gsap");
      if (cancelled || !containerRef.current) return;

      ctx = gsap.context(() => {
        const isMobile = window.innerWidth <= 768;
        const yStart = isMobile ? "-165vh" : "-150vh";
        const yEnd = isMobile ? "165vh" : "150vh";

        const feastItems = containerRef.current?.querySelectorAll<HTMLElement>(".feast-item");
        if (!feastItems || feastItems.length === 0) {
          setIsDone(true);
          document.body.style.overflow = prevOverflow;
          return;
        }

        // 1. Initial State: Position all ramen elements completely above the viewport
        gsap.set(feastItems, {
          y: yStart,
          force3D: true,
          visibility: "visible",
        });

        if (watermarkRef.current) {
          gsap.set(watermarkRef.current, {
            y: "-45vh",
            opacity: 0,
            force3D: true,
          });
        }

        // 2. Timeline Choreography (The "Massive Feast Transition")
        const tl = gsap.timeline({
          onComplete: () => {
            document.body.style.overflow = prevOverflow;
            setIsDone(true);
          },
        });

        // =========================================================================
        // PHASE 1: CASCADING WATERFALL DROP IN FROM TOP (yStart -> 0)
        // Stagger from 'end' creates an organic downpour of ramen ingredients
        // =========================================================================
        if (watermarkRef.current) {
          tl.to(
            watermarkRef.current,
            {
              y: "0vh",
              opacity: 1,
              duration: 1.1,
              ease: "power3.out",
            },
            0
          );
        }

        tl.to(
          feastItems,
          {
            y: "0vh",
            force3D: true,
            duration: 1.3,
            ease: "power3.inOut",
            stagger: {
              amount: 0.5,
              from: "end",
            },
          },
          0
        );

        // =========================================================================
        // PHASE 2: 100% WALL-TO-WALL COVERAGE FEAST HOLD (~0.35s)
        // Zero white space visible — screen is totally packed with ramen
        // =========================================================================
        tl.to({}, { duration: 0.35 });

        // =========================================================================
        // PHASE 3: CASCADING WATERFALL EXIT DOWNWARD THROUGH FLOOR (0 -> yEnd)
        // Accelerating plunge through the bottom of the screen
        // =========================================================================
        tl.to(feastItems, {
          y: yEnd,
          force3D: true,
          duration: 1.3,
          ease: "power3.in",
          stagger: {
            amount: 0.4,
            from: "end",
          },
        });

        if (watermarkRef.current) {
          tl.to(
            watermarkRef.current,
            {
              y: "60vh",
              opacity: 0,
              duration: 0.9,
              ease: "power3.in",
            },
            "<0.1"
          );
        }

        // Crossfade background canvas cleanly revealing the underlying site hero
        if (bgOverlayRef.current) {
          tl.to(
            bgOverlayRef.current,
            {
              opacity: 0,
              duration: 0.4,
              ease: "power2.out",
            },
            "-=0.75"
          );
        }
      }, containerRef);
    })();

    return () => {
      cancelled = true;
      document.body.style.overflow = prevOverflow;
      if (ctx) ctx.revert();
    };
  }, []);

  if (isDone) return null;

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-[9999] overflow-hidden select-none pointer-events-none"
      style={{ willChange: "transform" }}
      aria-hidden="true"
    >
      {/* Background Canvas */}
      <div
        ref={bgOverlayRef}
        className="absolute inset-0 bg-[#F5F0E8] z-0"
        style={{ willChange: "opacity" }}
      >
        <div
          className="absolute inset-0 opacity-[0.04] pointer-events-none"
          style={{
            backgroundImage: `radial-gradient(#1B1A17 1.2px, transparent 1.2px)`,
            backgroundSize: "9px 9px",
          }}
        />

        <div
          ref={watermarkRef}
          className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none select-none overflow-hidden"
        >
          <span className="font-display text-[26vw] leading-none text-ink/[0.08] tracking-tight uppercase whitespace-nowrap">
            ITADAKI
          </span>
          <span className="font-jp text-[3vw] font-bold text-ink/[0.09] tracking-[0.45em] -mt-6 uppercase">
            いただきます · 自家製麺
          </span>
        </div>
      </div>

      {/* =====================================================================
          FEAST COLLAGE: 100% FULL-SCREEN COVERAGE (NO WHITE SPACE)
          Dense 9-bowl foundation + large Nori sheets + Narutomaki + Eggs + Scallions
          ===================================================================== */}
      <div className="absolute inset-0 z-10 overflow-hidden pointer-events-none">
        {/* Brand Bar Badges */}
        <div className="feast-item absolute top-4 left-6 z-50 flex items-center gap-2.5 bg-ink text-paper px-4 py-1.5 rounded-full border border-paper/20 shadow-xl">
          <span className="w-2.5 h-2.5 rounded-full bg-red animate-pulse" />
          <span className="font-mono text-[10px] md:text-xs tracking-wider uppercase font-semibold">
            ITADAKI RAMEN CRAFT · 100% INGREDIENTS
          </span>
        </div>

        <div className="feast-item absolute top-4 right-6 z-50 hidden sm:flex items-center gap-2 bg-red text-white px-4 py-1.5 rounded-full border border-ink shadow-xl">
          <span className="font-jp text-xs font-bold">熱々の一杯</span>
          <span className="w-1.5 h-1.5 rounded-full bg-white" />
          <span className="font-mono text-[10px] md:text-xs uppercase tracking-wider">
            ZERO SHORTCUTS
          </span>
        </div>

        {/* -----------------------------------------------------------------
            1. NINE GIANT RAMEN BOWLS (CREATING COMPLETE SCREEN CARPET)
            ----------------------------------------------------------------- */}

        {/* 1A. Top-Left Bowl (Tori Shoyu) */}
        <div
          className="feast-item absolute -top-[12vw] -left-[10vw] md:-top-[8%] md:-left-[8%] z-10 w-[58vw] h-[58vw] min-w-[460px] max-w-[850px] min-h-[460px] max-h-[850px]"
          style={{ transform: "rotate(-14deg)" }}
        >
          <img
            src={bowlComplete}
            alt="Tori Shoyu Ramen Bowl"
            className="w-full h-full object-contain filter contrast-[1.06] drop-shadow-[0_32px_55px_rgba(0,0,0,0.5)]"
            loading="eager"
          />
        </div>

        {/* 1B. Top-Center Bowl (Toppings & Chashu) */}
        <div
          className="feast-item absolute -top-[14vw] left-[22vw] md:-top-[10%] md:left-[22vw] z-10 w-[56vw] h-[56vw] min-w-[440px] max-w-[820px] min-h-[440px] max-h-[820px]"
          style={{ transform: "rotate(6deg)" }}
        >
          <img
            src={bowlToppings}
            alt="Ramen Chashu Toppings Bowl"
            className="w-full h-full object-contain filter contrast-[1.06] drop-shadow-[0_30px_50px_rgba(0,0,0,0.48)]"
            loading="eager"
          />
        </div>

        {/* 1C. Top-Right Bowl (Handmade Noodles in Broth) */}
        <div
          className="feast-item absolute -top-[12vw] -right-[10vw] md:-top-[8%] md:-right-[8%] z-10 w-[58vw] h-[58vw] min-w-[460px] max-w-[850px] min-h-[460px] max-h-[850px]"
          style={{ transform: "rotate(16deg)" }}
        >
          <img
            src={bowlNoodles}
            alt="Noodles in Golden Broth"
            className="w-full h-full object-contain filter contrast-[1.06] drop-shadow-[0_32px_55px_rgba(0,0,0,0.5)]"
            loading="eager"
          />
        </div>

        {/* 1D. Mid-Left Bowl (12-Hour Golden Broth) */}
        <div
          className="feast-item absolute top-[20vh] -left-[12vw] md:top-[18vh] md:-left-[10vw] z-12 w-[58vw] h-[58vw] min-w-[460px] max-w-[850px] min-h-[460px] max-h-[850px]"
          style={{ transform: "rotate(10deg)" }}
        >
          <img
            src={bowlBroth}
            alt="12-Hour Golden Shoyu Broth"
            className="w-full h-full object-contain filter contrast-[1.06] drop-shadow-[0_30px_50px_rgba(0,0,0,0.48)]"
            loading="eager"
          />
        </div>

        {/* 1E. Mid-Right Bowl (Ajitama & Chashu Toppings) */}
        <div
          className="feast-item absolute top-[20vh] -right-[12vw] md:top-[18vh] md:-right-[10vw] z-12 w-[58vw] h-[58vw] min-w-[460px] max-w-[850px] min-h-[460px] max-h-[850px]"
          style={{ transform: "rotate(-12deg)" }}
        >
          <img
            src={bowlToppings}
            alt="Chashu and Ajitama Bowl"
            className="w-full h-full object-contain filter contrast-[1.06] drop-shadow-[0_30px_50px_rgba(0,0,0,0.48)]"
            loading="eager"
          />
        </div>

        {/* 1F. Bottom-Left Bowl (Kansui Noodles & Broth) */}
        <div
          className="feast-item absolute -bottom-[14vw] -left-[10vw] md:-bottom-[10%] md:-left-[8%] z-10 w-[60vw] h-[60vw] min-w-[480px] max-w-[860px] min-h-[480px] max-h-[860px]"
          style={{ transform: "rotate(-8deg)" }}
        >
          <img
            src={bowlNoodles}
            alt="Kansui Noodles Bowl"
            className="w-full h-full object-contain filter contrast-[1.06] drop-shadow-[0_32px_55px_rgba(0,0,0,0.5)]"
            loading="eager"
          />
        </div>

        {/* 1G. Bottom-Center Bowl (Tokyo Shoyu Broth Bowl) */}
        <div
          className="feast-item absolute -bottom-[16vw] left-[22vw] md:-bottom-[12%] md:left-[22vw] z-10 w-[56vw] h-[56vw] min-w-[440px] max-w-[820px] min-h-[440px] max-h-[820px]"
          style={{ transform: "rotate(-5deg)" }}
        >
          <img
            src={bowlBroth}
            alt="Tokyo Shoyu Broth Bowl"
            className="w-full h-full object-contain filter contrast-[1.06] drop-shadow-[0_30px_50px_rgba(0,0,0,0.48)]"
            loading="eager"
          />
        </div>

        {/* 1H. Bottom-Right Bowl (Artisanal Signature Ramen Bowl) */}
        <div
          className="feast-item absolute -bottom-[14vw] -right-[10vw] md:-bottom-[10%] md:-right-[8%] z-10 w-[60vw] h-[60vw] min-w-[480px] max-w-[860px] min-h-[480px] max-h-[860px]"
          style={{ transform: "rotate(12deg)" }}
        >
          <img
            src={bowlComplete}
            alt="Artisanal Signature Bowl"
            className="w-full h-full object-contain filter contrast-[1.06] drop-shadow-[0_32px_55px_rgba(0,0,0,0.5)]"
            loading="eager"
          />
        </div>

        {/* 1I. DEAD CENTER DOMINANT BOWL (Focal Master Ramen Bowl) */}
        <div
          className="feast-item absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 w-[64vw] h-[64vw] min-w-[500px] max-w-[880px] min-h-[500px] max-h-[880px]"
          style={{ transform: "rotate(-2deg)" }}
        >
          <img
            src={bowlComplete}
            alt="Master Craft Ramen Bowl"
            className="w-full h-full object-contain filter contrast-[1.08] drop-shadow-[0_40px_70px_rgba(0,0,0,0.6)]"
            loading="eager"
          />
          <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-red text-white text-[11px] md:text-sm font-bold px-5 py-1.5 rounded-full uppercase tracking-wider shadow-2xl border border-paper/30">
            MASTER CRAFT BOWL
          </span>
        </div>

        {/* -----------------------------------------------------------------
            2. FOUR LARGE NORI SHEETS (BLANKETING REMAINING CORNER/SEAM GAPS)
            ----------------------------------------------------------------- */}

        {/* 2A. Nori Sheet 01: Top-Left to Center Bridge */}
        <div
          className="feast-item absolute top-[4%] left-[15vw] z-25 w-[32vw] min-w-[220px] max-w-[420px]"
          style={{ transform: "rotate(-20deg)" }}
        >
          <img
            src={noriComponent}
            alt="Crisp Tokyo Nori Seaweed"
            className="w-full h-auto object-contain filter drop-shadow-[0_24px_38px_rgba(0,0,0,0.55)]"
            loading="eager"
          />
          <span className="absolute top-4 left-6 bg-red text-white text-[9px] md:text-[10px] font-bold px-2.5 py-0.5 rounded shadow uppercase tracking-wider">
            CRISP NORI
          </span>
        </div>

        {/* 2B. Nori Sheet 02: Top-Right to Center Bridge */}
        <div
          className="feast-item absolute top-[4%] right-[15vw] z-25 w-[32vw] min-w-[220px] max-w-[420px]"
          style={{ transform: "rotate(24deg)" }}
        >
          <img
            src={noriComponent}
            alt="Crisp Tokyo Nori Seaweed"
            className="w-full h-auto object-contain filter drop-shadow-[0_24px_38px_rgba(0,0,0,0.55)]"
            loading="eager"
          />
          <span className="absolute top-4 right-6 bg-ink text-paper text-[9px] md:text-[10px] font-bold px-2.5 py-0.5 rounded shadow uppercase tracking-wider">
            TOKYO NORI
          </span>
        </div>

        {/* 2C. Nori Sheet 03: Bottom-Left to Center Bridge */}
        <div
          className="feast-item absolute bottom-[6%] left-[14vw] z-25 w-[34vw] min-w-[230px] max-w-[440px]"
          style={{ transform: "rotate(16deg)" }}
        >
          <img
            src={noriComponent}
            alt="Crisp Tokyo Nori Seaweed"
            className="w-full h-auto object-contain filter drop-shadow-[0_24px_38px_rgba(0,0,0,0.55)]"
            loading="eager"
          />
        </div>

        {/* 2D. Nori Sheet 04: Bottom-Right to Center Bridge */}
        <div
          className="feast-item absolute bottom-[6%] right-[14vw] z-25 w-[34vw] min-w-[230px] max-w-[440px]"
          style={{ transform: "rotate(-18deg)" }}
        >
          <img
            src={noriComponent}
            alt="Crisp Tokyo Nori Seaweed"
            className="w-full h-auto object-contain filter drop-shadow-[0_24px_38px_rgba(0,0,0,0.55)]"
            loading="eager"
          />
        </div>

        {/* -----------------------------------------------------------------
            3. NARUTOMAKI FISH CAKE SWIRLS (VIBRANT PINK & WHITE HIGHLIGHTS)
            ----------------------------------------------------------------- */}

        {/* 3A. Naruto 01: Top-Left */}
        <div
          className="feast-item absolute top-[14%] left-[20vw] z-35 w-[22vw] min-w-[160px] max-w-[280px]"
          style={{ transform: "rotate(-25deg)" }}
        >
          <img
            src={narutoComponent}
            alt="Narutomaki Fish Cake"
            className="w-full h-auto object-contain filter drop-shadow-[0_22px_32px_rgba(0,0,0,0.45)]"
            loading="eager"
          />
          <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-ink text-paper text-[8px] md:text-[10px] font-bold px-2.5 py-0.5 rounded shadow uppercase tracking-wider">
            NARUTO
          </span>
        </div>

        {/* 3B. Naruto 02: Top-Right */}
        <div
          className="feast-item absolute top-[16%] right-[22vw] z-35 w-[24vw] min-w-[170px] max-w-[300px]"
          style={{ transform: "rotate(20deg)" }}
        >
          <img
            src={narutoComponent}
            alt="Narutomaki Fish Cake"
            className="w-full h-auto object-contain filter drop-shadow-[0_22px_32px_rgba(0,0,0,0.45)]"
            loading="eager"
          />
          <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-ink text-paper text-[8px] md:text-[10px] font-bold px-2.5 py-0.5 rounded shadow uppercase tracking-wider">
            NARUTOMAKI
          </span>
        </div>

        {/* 3C. Naruto 03: Bottom-Left */}
        <div
          className="feast-item absolute bottom-[16%] left-[22vw] z-35 w-[22vw] min-w-[160px] max-w-[280px]"
          style={{ transform: "rotate(-15deg)" }}
        >
          <img
            src={narutoComponent}
            alt="Narutomaki Fish Cake"
            className="w-full h-auto object-contain filter drop-shadow-[0_22px_32px_rgba(0,0,0,0.45)]"
            loading="eager"
          />
        </div>

        {/* 3D. Naruto 04: Bottom-Right */}
        <div
          className="feast-item absolute bottom-[18%] right-[20vw] z-35 w-[24vw] min-w-[170px] max-w-[300px]"
          style={{ transform: "rotate(28deg)" }}
        >
          <img
            src={narutoComponent}
            alt="Narutomaki Fish Cake"
            className="w-full h-auto object-contain filter drop-shadow-[0_22px_32px_rgba(0,0,0,0.45)]"
            loading="eager"
          />
        </div>

        {/* 3E. Naruto 05: Centerpiece Focal Swirl on Main Bowl */}
        <div
          className="feast-item absolute top-[40%] left-[48%] z-40 w-[18vw] min-w-[140px] max-w-[240px]"
          style={{ transform: "rotate(-8deg)" }}
        >
          <img
            src={narutoComponent}
            alt="Narutomaki Swirl"
            className="w-full h-auto object-contain filter drop-shadow-[0_24px_36px_rgba(0,0,0,0.5)]"
            loading="eager"
          />
        </div>

        {/* -----------------------------------------------------------------
            4. AJITSUKE TAMAGO RAMEN EGGS (GOLDEN SOFT-BOILED YOLKS)
            ----------------------------------------------------------------- */}

        {/* 4A. Egg 01: Mid-Left */}
        <div
          className="feast-item absolute top-[32%] left-[18vw] z-35 w-[24vw] min-w-[170px] max-w-[300px]"
          style={{ transform: "rotate(-30deg)" }}
        >
          <img
            src={eggComponent}
            alt="Soft-Boiled Ramen Egg"
            className="w-full h-auto object-contain filter drop-shadow-[0_22px_32px_rgba(0,0,0,0.45)]"
            loading="eager"
          />
          <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-ink text-paper text-[8px] md:text-[10px] font-bold px-2.5 py-0.5 rounded shadow uppercase tracking-wider">
            SOFT-BOILED EGG
          </span>
        </div>

        {/* 4B. Egg 02: Mid-Right */}
        <div
          className="feast-item absolute top-[34%] right-[18vw] z-35 w-[25vw] min-w-[180px] max-w-[310px]"
          style={{ transform: "rotate(25deg)" }}
        >
          <img
            src={eggComponent}
            alt="Ajitama Egg"
            className="w-full h-auto object-contain filter drop-shadow-[0_22px_32px_rgba(0,0,0,0.45)]"
            loading="eager"
          />
          <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-ink text-paper text-[8px] md:text-[10px] font-bold px-2.5 py-0.5 rounded shadow uppercase tracking-wider">
            AJITAMA EGG
          </span>
        </div>

        {/* 4C. Egg 03: Bottom-Center */}
        <div
          className="feast-item absolute bottom-[26%] left-[36vw] z-35 w-[23vw] min-w-[165px] max-w-[290px]"
          style={{ transform: "rotate(12deg)" }}
        >
          <img
            src={eggComponent}
            alt="Ramen Egg"
            className="w-full h-auto object-contain filter drop-shadow-[0_22px_32px_rgba(0,0,0,0.45)]"
            loading="eager"
          />
        </div>

        {/* 4D. Egg 04: Top-Center */}
        <div
          className="feast-item absolute top-[24%] right-[36vw] z-35 w-[23vw] min-w-[165px] max-w-[290px]"
          style={{ transform: "rotate(-18deg)" }}
        >
          <img
            src={eggComponent}
            alt="Seasoned Tamago Egg"
            className="w-full h-auto object-contain filter drop-shadow-[0_22px_32px_rgba(0,0,0,0.45)]"
            loading="eager"
          />
        </div>

        {/* -----------------------------------------------------------------
            5. SCALLIONS CLUSTERS (FRESH NEGI DETAILS FILLING CENTRAL SEAMS)
            ----------------------------------------------------------------- */}

        {/* 5A. Scallions 01: Center-Left */}
        <div
          className="feast-item absolute top-[48%] left-[32vw] z-40 w-[20vw] min-w-[150px] max-w-[260px]"
          style={{ transform: "rotate(15deg)" }}
        >
          <img
            src={scallionsComponent}
            alt="Fresh Sliced Scallions"
            className="w-full h-auto object-contain filter drop-shadow-[0_16px_25px_rgba(0,0,0,0.4)]"
            loading="eager"
          />
          <span className="absolute -top-2 left-1/2 -translate-x-1/2 bg-ink text-paper text-[8px] md:text-[9px] font-bold px-2 py-0.5 rounded shadow uppercase tracking-wider">
            FRESH NEGI
          </span>
        </div>

        {/* 5B. Scallions 02: Center-Right */}
        <div
          className="feast-item absolute top-[52%] right-[30vw] z-40 w-[20vw] min-w-[150px] max-w-[260px]"
          style={{ transform: "rotate(-12deg)" }}
        >
          <img
            src={scallionsComponent}
            alt="Green Scallions Cluster"
            className="w-full h-auto object-contain filter drop-shadow-[0_16px_25px_rgba(0,0,0,0.4)]"
            loading="eager"
          />
          <span className="absolute -top-2 left-1/2 -translate-x-1/2 bg-ink text-paper text-[8px] md:text-[9px] font-bold px-2 py-0.5 rounded shadow uppercase tracking-wider">
            GREEN SCALLIONS
          </span>
        </div>

        {/* Floating Japanese Seal Stamp */}
        <div
          className="feast-item absolute bottom-[8%] left-[22vw] md:bottom-[7%] md:left-[24vw] z-50 hidden sm:flex items-center gap-2.5 bg-red text-white border-2 border-ink px-4 py-1.5 shadow-2xl rounded-full"
          style={{ transform: "rotate(-4deg)" }}
        >
          <span className="font-jp text-xs md:text-sm font-bold">いただきます</span>
          <span className="w-1.5 h-1.5 rounded-full bg-white" />
          <span className="font-mono text-[9px] md:text-[11px] uppercase tracking-wider">
            AUTHENTIC RAMEN INGREDIENTS
          </span>
        </div>

        {/* Bottom Tagline Ribbon */}
        <div className="feast-item absolute bottom-4 left-1/2 -translate-x-1/2 z-50 flex items-center justify-center">
          <p className="font-mono text-[10px] sm:text-xs text-ink/80 uppercase tracking-widest text-center bg-paper/95 backdrop-blur-sm px-4 py-1 rounded-full border border-ink/10 shadow-sm">
            BORN IN INDIA · RAISED ON RAMEN
          </p>
        </div>
      </div>
    </div>
  );
}
