import { Link } from "@tanstack/react-router";
import { Reveal } from "@/components/Reveal";

export function FinalCta() {
  return (
    <section className="relative bg-ink px-6 py-28 text-paper md:px-12 md:py-44">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <p className="meta-label text-red">08 / THE FINALE</p>
          <h2 className="display-1 mt-4 text-5xl text-paper md:text-8xl lg:text-[7.5rem]">
            Come hungry.
            <br />
            <span className="text-red">Leave happy.</span>
          </h2>
        </Reveal>

        <Reveal delay={80}>
          <div className="mt-12 flex flex-col gap-8 border-t border-paper/15 pt-8 md:flex-row md:items-center md:justify-between">
            <p className="font-sans text-sm font-medium text-paper/65 md:text-base">
              Fresh noodles. Rolling broths. Seats at the counter are open.
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <Link to="/" hash="find" className="btn-red">
                Book a table
              </Link>
              <Link to="/menu" className="btn-outline-white">
                Explore menu
              </Link>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

