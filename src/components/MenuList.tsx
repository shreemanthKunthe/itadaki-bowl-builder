import { MENU } from "@/data/menu";
import { Reveal } from "@/components/Reveal";

export function MenuList({ heading = "The short list." }: { heading?: string }) {
  return (
    <section id="menu" className="relative bg-paper px-6 py-24 text-ink md:px-12 md:py-36">
      <div className="mx-auto max-w-7xl">
        {/* Section Header: Display 02 */}
        <Reveal>
          <div className="rule-ink pt-6 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="meta-label text-red">05 / PRINTED INDEX</p>
              <h2 className="display-2 mt-3 text-4xl text-ink md:text-6xl lg:text-7xl">
                {heading}
              </h2>
            </div>
            <p className="body-editorial max-w-[32ch] text-xs md:text-sm">
              All broths simmered in-house. Noodles crafted fresh daily. Prices inclusive of taxes.
            </p>
          </div>
        </Reveal>

        {/* Editorial Menu Index */}
        <div className="mt-16 flex flex-col gap-16 md:mt-24 md:gap-20">
          {MENU.map((group, groupIndex) => (
            <Reveal key={group.category} delay={groupIndex * 40}>
              <div className="grid grid-cols-12 gap-y-6 md:gap-x-8">
                {/* Category Column */}
                <div className="col-span-12 md:col-span-3">
                  <div className="sticky top-20 flex items-center gap-3 md:block">
                    <span className="meta-label text-red">{group.category}</span>
                    <p className="mt-1 hidden font-sans text-xs text-muted-foreground md:block">
                      {group.items.length} selections
                    </p>
                  </div>
                </div>

                {/* Items Column: Thin rules, clean tabular alignment */}
                <div className="col-span-12 md:col-span-9">
                  <ul className="divide-y divide-ink/12 border-t border-b border-ink/12">
                    {group.items.map((item) => (
                      <li
                        key={item.name}
                        className="group py-5 transition-colors hover:bg-black/[0.015]"
                      >
                        <div className="flex items-baseline justify-between gap-4">
                          <h3 className="font-sans text-base font-semibold tracking-tight text-ink md:text-lg">
                            {item.name}
                            {item.jp ? (
                              <span className="font-jp ml-3 text-xs font-normal text-red">
                                {item.jp}
                              </span>
                            ) : null}
                          </h3>
                          <span className="price-tag shrink-0 text-sm font-semibold text-ink md:text-base">
                            {item.price}
                          </span>
                        </div>
                        <p className="mt-1 max-w-xl font-sans text-xs leading-relaxed text-muted-foreground md:text-sm">
                          {item.desc}
                        </p>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

