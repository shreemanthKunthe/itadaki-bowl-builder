import { createFileRoute, Link } from "@tanstack/react-router";

import { MenuList } from "@/components/MenuList";
import { Reveal } from "@/components/Reveal";

const title = "Menu — Itadaki Ramen Shop";
const description =
  "Ramen, sushi bites, matcha and add-ons at Itadaki: tori shoyu, tori miso, yasai shoyu, yasai miso, gyoza, maki and iced matcha with prices.";

export const Route = createFileRoute("/menu")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: MenuPage,
});

function MenuPage() {
  return (
    <main className="pt-24 md:pt-28">
      <div className="px-5 md:px-8">
        <Reveal>
          <p className="font-jp label text-red">おしながき</p>
          <h1 className="display mt-3 text-[17vw] leading-[0.8] text-ink md:text-[9vw]">
            Everything
            <br />
            we make.
          </h1>
        </Reveal>
      </div>
      <MenuList heading="Ramen first." />
      <section className="bg-ink px-5 py-20 md:px-8 md:py-28">
        <p className="display text-[10vw] leading-[0.85] text-cream md:text-[4vw]">
          Hungry now?
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link to="/" hash="find" className="btn-red">
            Book a table
          </Link>
        </div>
      </section>
    </main>
  );
}
