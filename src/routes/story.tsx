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
    <main className="bg-paper pt-16 md:pt-24">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <Reveal>
          <p className="meta-label text-red">COMFORT, WITH ATTITUDE · OUR ORIGIN</p>
          <h1 className="display-1 mt-4 text-5xl text-ink md:text-7xl lg:text-8xl">
            Born in India.
            <br />
            Raised on <span className="text-red">ramen.</span>
          </h1>
          <p className="body-editorial mt-4 max-w-lg">
            We didn't want to build an untouchable temple of cuisine. We wanted to bring the warmth,
            slurp, and vitality of Tokyo back-alleys to the streets of Bengaluru.
          </p>
        </Reveal>
      </div>
      <StorySection />
      <FoodEditorial />
      <FinalCta />
    </main>
  );
}

