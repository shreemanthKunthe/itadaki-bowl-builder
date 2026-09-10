import { createFileRoute } from "@tanstack/react-router";

import { StorySection } from "@/components/StorySection";
import { FoodEditorial } from "@/components/FoodEditorial";
import { FinalCta } from "@/components/FinalCta";
import { Reveal } from "@/components/Reveal";

const title = "Our Story — Itadaki Ramen Shop";
const description =
  "Itadaki is a young ramen brand born in India, making Japanese comfort food bold, warm and uncomplicated. Comfort, with attitude.";

export const Route = createFileRoute("/story")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: StoryPage,
});

function StoryPage() {
  return (
    <main className="pt-24 md:pt-28">
      <div className="px-5 md:px-8">
        <Reveal>
          <p className="label text-red">Comfort, with attitude</p>
          <h1 className="display mt-3 text-[17vw] leading-[0.8] text-ink md:text-[9vw]">
            Born in India.
            <br />
            Raised on <span className="text-red">ramen.</span>
          </h1>
        </Reveal>
      </div>
      <StorySection />
      <FoodEditorial />
      <FinalCta />
    </main>
  );
}
