import { Reveal } from "@/components/Reveal";
import { Link } from "@tanstack/react-router";
import shop from "@/assets/ed-shop.jpg";

export function FindUs() {
  return (
    <section id="find" className="relative bg-paper px-6 py-24 text-ink md:px-12 md:py-36">
      <div className="mx-auto max-w-7xl">
        {/* Section Header: Display 02 */}
        <Reveal>
          <div className="rule-ink pt-6 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="meta-label text-red">07 / THE SHOP</p>
              <h2 className="display-2 mt-3 text-4xl text-ink md:text-6xl lg:text-7xl">
                Find your <span className="text-red">Itadaki.</span>
              </h2>
            </div>
            <p className="body-editorial max-w-[32ch] text-xs md:text-sm">
              Counter seating for 18. First come, first slurped. Limited table reservations daily.
            </p>
          </div>
        </Reveal>

        <div className="mt-14 grid grid-cols-12 gap-x-6 gap-y-12 lg:gap-x-12">
          {/* Shop Atmosphere Photography */}
          <Reveal className="col-span-12 lg:col-span-7">
            <div className="group relative">
              <div className="img-hover overflow-hidden border border-ink/10 bg-white/40">
                <img
                  src={shop}
                  alt="Itadaki ramen shop interior with warm wood counter"
                  width={1600}
                  height={1000}
                  loading="lazy"
                  className="aspect-[16/10] w-full object-cover"
                />
              </div>
              <div className="mt-4 flex items-center justify-between border-t border-ink/10 pt-3">
                <p className="meta-label text-red">Indiranagar Counter</p>
                <p className="meta-label text-muted-foreground">Warm cedar wood · 18 seats</p>
              </div>
            </div>
          </Reveal>

          {/* Editorial Location Info */}
          <Reveal className="col-span-12 lg:col-span-5 flex flex-col justify-between" delay={80}>
            <dl className="space-y-6">
              <div className="border-t border-ink/12 pt-4">
                <dt className="meta-label text-red">ADDRESS &amp; NEIGHBORHOOD</dt>
                <dd className="mt-2 font-sans text-base leading-relaxed text-ink">
                  Ground floor, Ranka Junction
                  <br />
                  100 Feet Road, Indiranagar
                  <br />
                  Bengaluru 560038
                </dd>
              </div>

              <div className="border-t border-ink/12 pt-4">
                <dt className="meta-label text-red">SERVICE HOURS</dt>
                <dd className="mt-2 font-sans text-base leading-relaxed text-ink">
                  Tuesday – Sunday · 12:00 – 23:00
                  <br />
                  <span className="text-muted-foreground">Monday · Closed for broth prep</span>
                </dd>
              </div>

              <div className="border-t border-ink/12 pt-4">
                <dt className="meta-label text-red">DIRECT DELIVERY</dt>
                <dd className="mt-2 font-sans text-sm text-muted-foreground">
                  Delivery radius 6 km via online ordering · 12:00 – 22:30
                </dd>
              </div>
            </dl>

            <div className="mt-8 flex flex-wrap gap-3 border-t border-ink/12 pt-6">
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
      </div>
    </section>
  );
}

