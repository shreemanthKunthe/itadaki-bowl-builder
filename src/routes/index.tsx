import { createFileRoute } from "@tanstack/react-router";

import { HeroBuild } from "@/components/HeroBuild";
import { TopPicks } from "@/components/TopPicks";
import { StorySection } from "@/components/StorySection";
import { FoodEditorial } from "@/components/FoodEditorial";
import { MenuList } from "@/components/MenuList";
import { Reviews } from "@/components/Reviews";
import { FindUs } from "@/components/FindUs";
import { FinalCta } from "@/components/FinalCta";

const title = "Itadaki Ramen Shop — A Hug From Japan";
const description =
  "Build the bowl as you scroll. Japanese comfort food in Bengaluru: shoyu and miso ramen, gyoza, maki and iced matcha. Book a table at Itadaki.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main>
      <HeroBuild />
      <TopPicks />
      <FoodEditorial />
      <StorySection />
      <MenuList heading="The short list." />
      <Reviews />
      <FindUs />
      <FinalCta />
    </main>
  );
}
