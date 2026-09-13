import { Reveal } from "@/components/Reveal";
import people from "@/assets/ed-people.jpg";

export function StorySection() {
  return (
    <section id="story" className="relative bg-paper px-6 py-24 text-ink md:px-12 md:py-36">
      <div className="mx-auto max-w-7xl">
        {/* Section Header: Display 02 (Quieter, disciplined) */}
        <Reveal>
          <div className="rule-ink pt-6 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="meta-label text-red">04 / THE ATMOSPHERE</p>
              <h2 className="display-2 mt-3 text-4xl text-ink md:text-6xl lg:text-7xl">
                Not just
                <br />
                a bowl.
              </h2>
            </div>
            <p className="meta-label text-muted-foreground">
              Counter Dining · Bengaluru 560038
            </p>
          </div>
        </Reveal>

        {/* Composition: Photography as the Emotional Anchor ("I want to be there") */}
        <div className="mt-14 grid grid-cols-12 gap-x-6 gap-y-12 lg:gap-x-12">
          {/* Main Visual: Warm, tactile crowd eating at counter */}
          <Reveal className="col-span-12 lg:col-span-8">
            <div className="group relative">
              <div className="img-hover overflow-hidden border border-ink/10 bg-white/40">
                <img
                  src={people}
                  alt="Friends laughing and eating ramen together at the Itadaki counter"
                  width={1600}
                  height={1104}
                  loading="lazy"
                  className="aspect-[16/10] w-full object-cover"
                />
              </div>
              <div className="mt-4 flex items-center justify-between border-t border-ink/10 pt-3">
                <p className="meta-label text-red">Counter Seat Culture</p>
                <p className="meta-label text-muted-foreground">Loud broth, good company</p>
              </div>
            </div>
          </Reveal>

          {/* Editorial Column: Quiet, concise, human */}
          <Reveal className="col-span-12 lg:col-span-4 flex flex-col justify-between" delay={80}>
            <div className="space-y-6">
              <div className="border-l-2 border-red pl-4">
                <p className="font-jp text-xs text-red">温かい場所</p>
                <p className="meta-label text-ink mt-1">A WARM CORNER IN THE CITY</p>
              </div>

              <p className="body-editorial text-sm leading-relaxed text-ink/80 md:text-base">
                Itadaki was built around a very specific feeling: walking in from rain or traffic,
                hearing noodles drop into boiling water, and wrapping your hands around a steaming
                ceramic bowl.
              </p>

              <p className="body-editorial text-sm leading-relaxed text-ink/80 md:text-base">
                No dress codes. No complicated rituals. Just honest Japanese comfort food cooked with
                discipline and served with street attitude.
              </p>
            </div>

            <div className="border-t border-ink/10 pt-6 mt-8">
              <p className="meta-label text-red">THE HOUSE PROMISE</p>
              <p className="mt-2 font-sans text-sm font-semibold text-ink">
                Come alone. Bring your people.
                <br />
                Stay for another bowl.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

