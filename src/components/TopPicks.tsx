import { Reveal } from "@/components/Reveal";
import bowlComplete from "@/assets/bowl-05-complete.png";
import yasai from "@/assets/ed-yasai.jpg";
import matcha from "@/assets/ed-matcha.jpg";
import bites from "@/assets/ed-bites.jpg";

export function TopPicks() {
  return (
    <section id="picks" className="relative bg-paper px-6 py-24 md:px-12 md:py-36">
      <div className="mx-auto max-w-7xl">
        {/* Section Header: Display 02 */}
        <Reveal>
          <div className="rule-ink pt-6 flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
            <div>
              <p className="meta-label text-red">02 / CURATED SELECTION</p>
              <h2 className="display-2 mt-3 max-w-[14ch] text-4xl text-ink md:text-6xl lg:text-7xl">
                The ones worth
                <br />
                slurping.
              </h2>
            </div>
            <p className="body-editorial max-w-[36ch] md:pt-6">
              Our essential bowls, bites and sips. Made for first-timers, regulars, and anyone who
              suddenly finds themselves craving real ramen.
            </p>
          </div>
        </Reveal>

        {/* Editorial Asymmetrical Grid */}
        <div className="mt-16 grid grid-cols-12 gap-x-6 gap-y-16 md:mt-24 lg:gap-x-10">
          {/* PRIMARY ITEM: Tori Shoyu Ramen (Dominant Visual Space) */}
          <Reveal className="col-span-12 lg:col-span-7">
            <div className="group relative">
              <div className="flex items-center justify-between border-b border-ink/10 pb-2 mb-4">
                <span className="meta-label text-red">01 / SIGNATURE BOWL</span>
                <span className="font-jp meta-label text-muted-foreground">鶏醤油ラーメン</span>
              </div>
              <div className="img-hover relative overflow-hidden border border-ink/10 bg-white/60 p-6 md:p-12">
                <img
                  src={bowlComplete}
                  alt="Tori Shoyu Ramen"
                  width={1024}
                  height={1024}
                  loading="lazy"
                  className="mx-auto max-h-[480px] w-full object-contain"
                />
              </div>
              <div className="mt-5 flex items-baseline justify-between gap-4">
                <h3 className="display-2 text-2xl text-ink md:text-3xl">Tori Shoyu Ramen</h3>
                <span className="price-tag text-ink">₹460</span>
              </div>
              <p className="body-editorial mt-2 max-w-[42ch]">
                The bowl you just built. Soy-forward double chicken broth, charred tender chicken,
                jammy ajitama egg, and crisp nori sheet.
              </p>
            </div>
          </Reveal>

          {/* SECONDARY ITEM: Yasai Miso (Offset Down the Grid) */}
          <Reveal className="col-span-12 lg:col-span-5 lg:pt-24" delay={80}>
            <div className="group relative">
              <div className="flex items-center justify-between border-b border-ink/10 pb-2 mb-4">
                <span className="meta-label text-red">02 / VEGETABLE BROTH</span>
                <span className="font-jp meta-label text-muted-foreground">野菜味噌</span>
              </div>
              <div className="img-hover overflow-hidden border border-ink/10 bg-white/40">
                <img
                  src={yasai}
                  alt="Yasai Miso Ramen"
                  width={1200}
                  height={1200}
                  loading="lazy"
                  className="aspect-square w-full object-cover"
                />
              </div>
              <div className="mt-5 flex items-baseline justify-between gap-4">
                <h3 className="display-2 text-2xl text-ink md:text-3xl">Yasai Miso</h3>
                <span className="price-tag text-ink">₹440</span>
              </div>
              <p className="body-editorial mt-2">
                Fermented red miso broth, silken tofu cubes, charred sweet corn, shiitake and rich umami depth.
              </p>
            </div>
          </Reveal>

          {/* SUPPORTING ITEM 01: Iced Matcha */}
          <Reveal className="col-span-12 sm:col-span-6 lg:col-span-4" delay={60}>
            <div className="group relative">
              <div className="flex items-center justify-between border-b border-ink/10 pb-2 mb-3">
                <span className="meta-label text-red">03 / SIP</span>
                <span className="font-jp meta-label text-muted-foreground">冷製抹茶</span>
              </div>
              <div className="img-hover overflow-hidden border border-ink/10 bg-white/40">
                <img
                  src={matcha}
                  alt="Iced Matcha"
                  width={900}
                  height={1200}
                  loading="lazy"
                  className="aspect-[4/5] w-full object-cover"
                />
              </div>
              <div className="mt-4 flex items-baseline justify-between gap-4">
                <h3 className="display-2 text-xl text-ink md:text-2xl">Iced Matcha</h3>
                <span className="price-tag text-ink">₹260</span>
              </div>
              <p className="body-editorial mt-1 text-xs">
                Ceremonial grade Uji matcha whisked fresh, poured over cold whole milk.
              </p>
            </div>
          </Reveal>

          {/* SUPPORTING GRAPHIC MOMENT: Editorial Craft Stamp */}
          <div className="col-span-12 sm:col-span-6 lg:col-span-3 flex flex-col justify-end">
            <Reveal className="w-full border border-ink/15 bg-paper p-6 md:p-8">
              <span className="meta-label text-red">ITADAKI STANDARD</span>
              <p className="font-jp mt-3 text-lg text-ink font-bold">いただきます</p>
              <p className="display-2 mt-3 text-xl leading-tight text-ink">
                Hot broth.
                <br />
                Cold drink.
                <br />
                Zero shortcuts.
              </p>
              <p className="body-editorial mt-4 text-xs">
                Every broth simmered for 12 hours minimum in our Bengaluru kitchen.
              </p>
            </Reveal>
          </div>

          {/* SUPPORTING ITEM 02: Gyoza & Maki */}
          <Reveal className="col-span-12 lg:col-span-5" delay={100}>
            <div className="group relative">
              <div className="flex items-center justify-between border-b border-ink/10 pb-2 mb-3">
                <span className="meta-label text-red">04 / SIDES</span>
                <span className="font-jp meta-label text-muted-foreground">餃子と巻き</span>
              </div>
              <div className="img-hover overflow-hidden border border-ink/10 bg-white/40">
                <img
                  src={bites}
                  alt="Gyoza and maki bites"
                  width={1200}
                  height={900}
                  loading="lazy"
                  className="aspect-[16/10] w-full object-cover"
                />
              </div>
              <div className="mt-4 flex items-baseline justify-between gap-4">
                <h3 className="display-2 text-xl text-ink md:text-2xl">Gyoza &amp; Maki</h3>
                <span className="price-tag text-ink">From ₹260</span>
              </div>
              <p className="body-editorial mt-1 text-xs">
                Pan-crisped handmade gyoza with house ponzu and fresh hand-rolled maki.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

