import { Link } from "@tanstack/react-router";
import { Reveal } from "@/components/Reveal";

export function FinalCta() {
  return (
    <section className="bg-ink px-5 py-28 md:px-8 md:py-40">
      <Reveal>
        <h2 className="display text-[19vw] leading-[0.78] text-cream md:text-[10vw]">
          Come hungry.
          <br />
          <span className="text-red">Leave happy.</span>
        </h2>
      </Reveal>
      <Reveal delay={100}>
        <div className="mt-12 flex flex-col gap-7 md:flex-row md:items-end md:justify-between">
          <p className="display text-[8vw] text-cream/60 md:text-[2.4vw]">
            Your next bowl is waiting.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link to="/" hash="find" className="btn-red">
              Book a table
            </Link>
            <Link
              to="/menu"
              className="btn-outline !border-cream !text-cream hover:!bg-cream hover:!text-ink"
            >
              Explore menu
            </Link>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
