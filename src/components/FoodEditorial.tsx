import { Reveal } from "@/components/Reveal";
import lift from "@/assets/ed-lift.jpg";

export function FoodEditorial() {
  return (
    <section className="relative bg-ink px-5 py-24 md:px-8 md:py-36">
      <div className="grid grid-cols-12 items-center gap-y-12">
        <Reveal className="col-span-12 md:col-span-6 md:col-start-1">
          <h2 className="display text-[22vw] leading-[0.8] text-cream md:text-[11vw]">
            Hot.
            <br />
            <span className="text-red">Loud.</span>
            <br />
            Comforting.
          </h2>
          <p className="mt-8 max-w-[32ch] text-sm leading-relaxed text-cream/70">
            Slow-simmered broths. Springy noodles. Good toppings. No unnecessary fuss.
          </p>
        </Reveal>

        <Reveal className="col-span-12 md:col-span-7 md:col-start-6 md:-mt-24" delay={100}>
          <div className="img-hover">
            <img
              src={lift}
              alt="Chopsticks lifting steaming ramen noodles"
              width={1200}
              height={1600}
              loading="lazy"
              className="w-full"
            />
          </div>
          <p className="label mt-4 text-cream/50">Noodle pull / 22:40, counter seat 04</p>
        </Reveal>
      </div>
    </section>
  );
}
