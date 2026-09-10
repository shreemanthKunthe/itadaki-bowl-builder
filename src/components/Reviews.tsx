import { Reveal } from "@/components/Reveal";

const REVIEWS = [
  { quote: "I came for one bowl. I stayed for two.", by: "Aditi R." },
  { quote: "The broth tastes like somebody actually cared.", by: "Kabir M." },
  { quote: "Loud, warm, and open late. My kind of place.", by: "Sneha T." },
];

export function Reviews() {
  return (
    <section id="reviews" className="bg-red px-5 py-24 md:px-8 md:py-32">
      <Reveal>
        <p className="label text-cream/70">Overheard at the counter</p>
      </Reveal>
      <div className="mt-10 grid grid-cols-12 gap-y-12">
        {REVIEWS.map((r, i) => (
          <Reveal
            key={r.by}
            delay={i * 90}
            className={
              i === 1
                ? "col-span-12 md:col-span-5 md:col-start-7 md:pt-16"
                : i === 2
                  ? "col-span-12 md:col-span-4 md:col-start-3"
                  : "col-span-12 md:col-span-6"
            }
          >
            <blockquote className="display text-[9vw] leading-[0.9] text-cream md:text-[3vw]">
              “{r.quote}”
            </blockquote>
            <cite className="label mt-3 block not-italic text-cream/70">{r.by}</cite>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
