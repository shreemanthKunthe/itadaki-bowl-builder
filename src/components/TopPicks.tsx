import { Reveal } from "@/components/Reveal";
import bowlComplete from "@/assets/bowl-05-complete.png";
import yasai from "@/assets/ed-yasai.jpg";
import matcha from "@/assets/ed-matcha.jpg";
import bites from "@/assets/ed-bites.jpg";

export function TopPicks() {
  return (
    <section id="picks" className="relative bg-cream px-5 pb-28 pt-24 md:px-8 md:pb-40 md:pt-32">
      <Reveal>
        <div className="rule-red flex flex-col gap-6 pt-5 md:flex-row md:items-start md:justify-between">
          <h2 className="display max-w-[16ch] text-[13vw] text-ink md:text-[6.5vw]">
            The ones worth slurping.
          </h2>
          <p className="max-w-[36ch] text-sm leading-relaxed text-muted-foreground md:pt-3">
            Our go-to bowls, bites and sips. Made for first-timers, regulars, and anyone who
            suddenly finds themselves craving ramen.
          </p>
        </div>
      </Reveal>

      <div className="mt-16 grid grid-cols-12 gap-x-4 gap-y-14 md:mt-24">
        {/* oversized hero pick, pushed off the grid */}
        <Reveal className="col-span-12 md:col-span-7 md:col-start-1">
          <div className="relative">
            <span className="display absolute -left-2 -top-10 text-[22vw] text-red/15 md:-top-24 md:text-[12vw]">
              01
            </span>
            <div className="img-hover relative bg-red">
              <img
                src={bowlComplete}
                alt="Tori shoyu ramen"
                width={1024}
                height={1024}
                loading="lazy"
                className="w-full"
              />
            </div>
            <div className="mt-4 flex items-baseline justify-between">
              <h3 className="display text-[8vw] text-ink md:text-[3vw]">Tori Shoyu Ramen</h3>
              <span className="label text-red">₹460</span>
            </div>
            <p className="mt-1 max-w-[38ch] text-sm text-muted-foreground">
              The bowl you just built. Soy-forward chicken broth, grilled chicken, jammy egg.
            </p>
          </div>
        </Reveal>

        <Reveal className="col-span-12 md:col-span-4 md:col-start-9 md:pt-48" delay={80}>
          <div className="img-hover">
            <img
              src={yasai}
              alt="Yasai miso ramen"
              width={1200}
              height={1200}
              loading="lazy"
              className="w-full"
            />
          </div>
          <div className="mt-4 flex items-baseline justify-between">
            <h3 className="display text-[7vw] text-ink md:text-[2.1vw]">Yasai Miso</h3>
            <span className="label text-red">₹440</span>
          </div>
          <p className="mt-1 text-sm text-muted-foreground">Tofu, corn, mushrooms, miso depth.</p>
        </Reveal>

        <Reveal className="col-span-7 md:col-span-3 md:col-start-2">
          <div className="img-hover">
            <img
              src={matcha}
              alt="Iced matcha"
              width={900}
              height={1200}
              loading="lazy"
              className="w-full"
            />
          </div>
          <div className="mt-4 flex items-baseline justify-between">
            <h3 className="display text-[6vw] text-ink md:text-[1.9vw]">Iced Matcha</h3>
            <span className="label text-red">₹260</span>
          </div>
        </Reveal>

        <div className="col-span-5 flex items-end md:col-span-2 md:col-start-6">
          <Reveal className="w-full">
            <div className="bg-red p-5 md:p-6">
              <p className="font-jp label text-cream">いただき</p>
              <p className="display mt-3 text-[7vw] leading-[0.85] text-cream md:text-[1.8vw]">
                Slurp. Repeat.
              </p>
            </div>
          </Reveal>
        </div>

        <Reveal className="col-span-12 md:col-span-4 md:col-start-9" delay={60}>
          <div className="img-hover">
            <img
              src={bites}
              alt="Gyoza and maki bites"
              width={1200}
              height={900}
              loading="lazy"
              className="w-full"
            />
          </div>
          <div className="mt-4 flex items-baseline justify-between">
            <h3 className="display text-[7vw] text-ink md:text-[2.1vw]">Gyoza &amp; Maki</h3>
            <span className="label text-red">From ₹260</span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
