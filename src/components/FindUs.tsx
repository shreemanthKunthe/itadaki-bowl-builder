import { Reveal } from "@/components/Reveal";
import { Link } from "@tanstack/react-router";
import shop from "@/assets/ed-shop.jpg";

export function FindUs() {
  return (
    <section id="find" className="bg-cream px-5 py-24 md:px-8 md:py-32">
      <Reveal>
        <h2 className="display text-[16vw] leading-[0.82] text-ink md:text-[8vw]">
          Find your <span className="text-red">Itadaki.</span>
        </h2>
      </Reveal>

      <div className="mt-14 grid grid-cols-12 gap-x-4 gap-y-12">
        <Reveal className="col-span-12 md:col-span-7">
          <div className="img-hover">
            <img
              src={shop}
              alt="Itadaki ramen shop interior"
              width={1600}
              height={1000}
              loading="lazy"
              className="w-full"
            />
          </div>
        </Reveal>

        <Reveal className="col-span-12 md:col-span-4 md:col-start-9" delay={80}>
          <dl className="flex flex-col gap-7">
            <div className="rule-red pt-3">
              <dt className="label text-red">Where</dt>
              <dd className="mt-2 text-base leading-relaxed text-ink">
                Ground floor, Ranka Junction
                <br />
                100 Feet Road, Indiranagar
                <br />
                Bengaluru 560038
              </dd>
            </div>
            <div className="rule-red pt-3">
              <dt className="label text-red">Hours</dt>
              <dd className="mt-2 text-base leading-relaxed text-ink">
                Tue – Sun · 12:00 – 23:00
                <br />
                Monday · closed
              </dd>
            </div>
            <div className="rule-red pt-3">
              <dt className="label text-red">Order in</dt>
              <dd className="mt-2 text-base text-ink">Delivery within 6 km, 12:00 – 22:30</dd>
            </div>
          </dl>

          <div className="mt-9 flex flex-wrap gap-3">
            <a
              className="btn-red"
              href="https://maps.google.com/?q=Indiranagar+Bengaluru"
              target="_blank"
              rel="noreferrer"
            >
              Book a table
            </a>
            <Link to="/menu" className="btn-outline">
              Explore menu
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
