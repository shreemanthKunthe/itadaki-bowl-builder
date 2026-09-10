import { Reveal } from "@/components/Reveal";
import people from "@/assets/ed-people.jpg";

export function StorySection() {
  return (
    <section id="story" className="bg-cream px-5 py-24 md:px-8 md:py-36">
      <Reveal>
        <h2 className="display text-[20vw] leading-[0.8] text-ink md:text-[10vw]">
          Not just
          <br />
          <span className="text-red">a bowl.</span>
        </h2>
      </Reveal>

      <div className="mt-14 grid grid-cols-12 gap-y-10">
        <Reveal className="col-span-12 md:col-span-7 md:col-start-6">
          <div className="img-hover">
            <img
              src={people}
              alt="Friends eating ramen at the Itadaki counter"
              width={1600}
              height={1104}
              loading="lazy"
              className="w-full"
            />
          </div>
        </Reveal>

        <Reveal className="col-span-12 md:col-span-4 md:col-start-1 md:row-start-1 md:pt-16" delay={80}>
          <p className="text-base leading-relaxed text-ink">
            Itadaki brings Japanese comfort food to the streets of India — keeping the flavours bold,
            the bowls comforting and the experience uncomplicated.
          </p>
          <p className="display mt-8 text-[9vw] leading-[0.9] text-red md:text-[2.6vw]">
            Come alone.
            <br />
            Bring your people.
            <br />
            Stay for another bowl.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
