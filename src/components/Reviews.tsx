import { Reveal } from "@/components/Reveal";

export function Reviews() {
  return (
    <section id="reviews" className="relative bg-red px-6 py-28 text-white md:px-12 md:py-44">
      <div className="mx-auto max-w-7xl">
        {/* Poster Top Bar */}
        <Reveal>
          <div className="flex items-center justify-between border-b border-white/25 pb-4">
            <span className="meta-label text-white/80">06 / POSTER INTERRUPTION</span>
            <span className="font-jp meta-label text-white/80">一杯の温もり · A HUG FROM JAPAN</span>
          </div>
        </Reveal>

        {/* Poster Statement: Minimal, breathable, high impact */}
        <div className="my-14 md:my-24">
          <Reveal delay={80}>
            <p className="meta-label text-black/80 font-bold">OVERHEARD AT THE COUNTER</p>
            <blockquote className="display-1 mt-5 max-w-4xl text-[2.5rem] leading-[0.9] text-white sm:text-4xl md:text-7xl lg:text-8xl">
              “The broth tastes like somebody actually cared.”
            </blockquote>
          </Reveal>
        </div>

        {/* Poster Footer Metadata */}
        <Reveal delay={140}>
          <div className="grid grid-cols-12 items-end gap-6 border-t border-white/25 pt-6">
            <div className="col-span-12 md:col-span-6">
              <cite className="meta-label not-italic text-white">
                Kabir M. · Regular, Indiranagar Counter
              </cite>
            </div>
            <div className="col-span-12 md:col-span-6 md:text-right">
              <span className="meta-label text-black/90 font-bold">
                ITADAKI RAMEN SHOP · BENGALURU
              </span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

