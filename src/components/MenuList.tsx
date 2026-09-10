import { MENU } from "@/data/menu";
import { Reveal } from "@/components/Reveal";

export function MenuList({ heading = "The menu" }: { heading?: string }) {
  return (
    <section id="menu" className="bg-cream px-5 py-24 md:px-8 md:py-32">
      <Reveal>
        <h2 className="display rule-red pt-5 text-[14vw] text-ink md:text-[7vw]">{heading}</h2>
      </Reveal>

      <div className="mt-14 flex flex-col gap-16">
        {MENU.map((group) => (
          <Reveal key={group.category}>
            <div className="grid grid-cols-12 gap-y-6">
              <p className="label col-span-12 text-red md:col-span-3">{group.category}</p>
              <ul className="col-span-12 md:col-span-9">
                {group.items.map((item) => (
                  <li
                    key={item.name}
                    className="flex items-baseline justify-between gap-6 border-b border-border py-5"
                  >
                    <div>
                      <h3 className="display text-[6.5vw] text-ink md:text-[2.1vw]">
                        {item.name}
                        {item.jp ? (
                          <span className="font-jp ml-3 align-middle text-xs font-normal tracking-normal text-red">
                            {item.jp}
                          </span>
                        ) : null}
                      </h3>
                      <p className="mt-1 max-w-[46ch] text-sm text-muted-foreground">{item.desc}</p>
                    </div>
                    <span className="label whitespace-nowrap text-ink">{item.price}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
