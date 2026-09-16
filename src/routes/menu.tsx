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
    <main className="bg-paper pt-16 md:pt-24">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <Reveal>
          <p className="font-jp meta-label text-red">おしながき · THE COMPLETE MENU</p>
          <h1 className="display-1 mt-4 text-5xl text-ink md:text-7xl lg:text-8xl">
            Everything
            <br />
            we make.
          </h1>
          <p className="body-editorial mt-4 max-w-md">
            Handcrafted broths, wheat noodles, and Tokyo street snacks. Made with patience, served with attitude.
          </p>
        </Reveal>
      </div>
      <MenuList heading="Ramen first." />
      <section className="bg-ink px-6 py-20 text-paper md:px-12 md:py-28">
        <div className="mx-auto max-w-7xl flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="meta-label text-red">COUNTER SEATS AVAILABLE</p>
            <p className="display-1 mt-2 text-4xl text-paper md:text-6xl">
              Hungry now?
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link to="/" hash="find" className="btn-red">
              Book a table
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

