import { Link } from "@tanstack/react-router";

export function Footer() {
  return (
    <footer className="border-t border-paper/15 bg-ink px-6 py-12 text-paper md:px-12 md:py-16">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-12 gap-y-10 md:items-start md:gap-x-8">
          <div className="col-span-12 md:col-span-5">
            <Link to="/" className="wordmark text-3xl text-red md:text-4xl">
              ITADAKI
            </Link>
            <p className="meta-label mt-3 text-paper/60">
              Japanese Comfort Food · A Hug From Japan
            </p>
            <p className="mt-4 font-sans text-xs leading-relaxed text-paper/40 max-w-xs">
              Born in India. Crafted with 12-hour simmered broths and Tokyo-style noodles.
            </p>
          </div>

          <div className="col-span-6 md:col-span-3 md:col-start-7">
            <p className="meta-label text-red">INDEX</p>
            <ul className="mt-4 space-y-2.5">
              <li>
                <Link to="/menu" className="font-sans text-xs text-paper/80 transition-colors hover:text-red">
                  Menu / The Short List
                </Link>
              </li>
              <li>
                <Link to="/story" className="font-sans text-xs text-paper/80 transition-colors hover:text-red">
                  Our Story / Atmosphere
                </Link>
              </li>
              <li>
                <Link to="/" hash="find" className="font-sans text-xs text-paper/80 transition-colors hover:text-red">
                  Location &amp; Hours
                </Link>
              </li>
            </ul>
          </div>

          <div className="col-span-6 md:col-span-3">
            <p className="meta-label text-red">LOCATION</p>
            <p className="mt-4 font-sans text-xs leading-relaxed text-paper/80">
              Ground Floor, Ranka Junction
              <br />
              100 Feet Rd, Indiranagar
              <br />
              Bengaluru 560038
            </p>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-paper/10 pt-6 font-sans text-[0.6875rem] text-paper/40 md:flex-row md:items-center">
          <p>© {new Date().getFullYear()} Itadaki Ramen Shop. All rights reserved.</p>
          <p className="font-jp text-paper/30">いただきます · ラーメン</p>
        </div>
      </div>
    </footer>
  );
}

