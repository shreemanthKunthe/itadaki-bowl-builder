import { Reveal } from "@/components/Reveal";
import lift from "@/assets/ed-lift.jpg";

export function FoodEditorial() {
  return (
    <section className="relative bg-ink px-6 py-24 text-paper md:px-12 md:py-36">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-12 items-center gap-x-6 gap-y-14 lg:gap-x-12">
          {/* Typographic Hero: Display 01 with ONLY "LOUD." disruptive */}
          <Reveal className="col-span-12 lg:col-span-6">
            <span className="meta-label text-red">03 / THE SENSATION</span>
            
            <div className="mt-4 space-y-1">
              <span className="display-1 block text-[3.25rem] text-paper sm:text-6xl md:text-8xl lg:text-[7rem] leading-[0.85]">
                HOT.
              </span>
              {/* Disruptive LOUD: offset, scaled, and in Itadaki Red */}
              <span className="display-1 inline-block translate-x-2 text-[3.25rem] text-red sm:translate-x-3 sm:text-6xl md:translate-x-8 md:text-8xl lg:text-[7.4rem] tracking-normal font-bold leading-[0.85]">
                LOUD.
              </span>
              <span className="display-1 block text-[3.25rem] text-paper sm:text-6xl md:text-8xl lg:text-[7rem] leading-[0.85]">
                COMFORTING.
              </span>
            </div>

            <p className="mt-8 max-w-[34ch] font-sans text-sm leading-relaxed text-paper/75 md:text-base">
              Slow-simmered double broths. Springy high-hydration noodles. Balanced tare.
              No unnecessary fuss—just pure, uncompromising warmth.
            </p>

            <div className="rule-paper mt-10 pt-6 flex flex-wrap items-center gap-8">
              <div>
                <p className="meta-label text-red">Broth Simmer</p>
                <p className="mt-1 font-sans text-xs text-paper/70">12 Hours Continuous</p>
              </div>
              <div className="h-6 w-px bg-paper/15" />
              <div>
                <p className="meta-label text-red">Serving Speed</p>
                <p className="mt-1 font-sans text-xs text-paper/70">Piped Hot at Counter</p>
              </div>
            </div>
          </Reveal>

          {/* Tactile Food Moment: Steaming Noodle Pull */}
          <Reveal className="col-span-12 lg:col-span-6" delay={100}>
            <div className="group relative">
              <div className="img-hover overflow-hidden border border-paper/15 bg-black">
                <img
                  src={lift}
                  alt="Chopsticks lifting steaming ramen noodles"
                  width={1200}
                  height={1600}
                  loading="lazy"
                  className="aspect-[4/5] w-full object-cover"
                />
              </div>
              <div className="mt-4 flex items-center justify-between border-t border-paper/15 pt-3">
                <p className="meta-label text-paper/60">Tactile Noodle Pull</p>
                <p className="meta-label text-paper/40">Counter Seat 04 · 22:40</p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

