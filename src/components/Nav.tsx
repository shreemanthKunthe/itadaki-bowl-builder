import { Link } from "@tanstack/react-router";

export function Nav() {
  return (
    <nav
      aria-label="Primary Navigation"
      className="pointer-events-none fixed bottom-5 inset-x-0 z-50 flex justify-center px-4 md:bottom-7"
    >
      <div className="pointer-events-auto flex items-center gap-1 rounded-full border border-white/15 bg-ink/92 p-1.5 text-paper shadow-[0_16px_40px_rgba(0,0,0,0.45)] backdrop-blur-xl transition-all md:gap-2 md:p-2">
        {/* Left Badge: ITADAKI Wordmark */}
        <Link
          to="/"
          className="flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1.5 transition-all hover:bg-white/10 md:px-4 md:py-2"
          aria-label="Itadaki home"
        >
          <span className="wordmark text-sm tracking-tight text-red md:text-base">
            ITADAKI
          </span>
        </Link>

        {/* Center Links: Segmented Editorial Tabs */}
        <div className="flex items-center gap-0.5 md:gap-1">
          <Link
            to="/menu"
            className="rounded-full px-2.5 py-1.5 text-[0.625rem] font-semibold uppercase tracking-wider text-paper/75 transition-all hover:bg-white/10 hover:text-white md:px-3.5 md:py-2 md:text-xs [&.active]:bg-white/15 [&.active]:text-white"
          >
            Menu
          </Link>
          <Link
            to="/story"
            className="rounded-full px-2.5 py-1.5 text-[0.625rem] font-semibold uppercase tracking-wider text-paper/75 transition-all hover:bg-white/10 hover:text-white md:px-3.5 md:py-2 md:text-xs [&.active]:bg-white/15 [&.active]:text-white"
          >
            Our Story
          </Link>
          <Link
            to="/"
            hash="reviews"
            className="rounded-full px-2.5 py-1.5 text-[0.625rem] font-semibold uppercase tracking-wider text-paper/75 transition-all hover:bg-white/10 hover:text-white md:px-3.5 md:py-2 md:text-xs"
          >
            Reviews
          </Link>
          <Link
            to="/"
            hash="find"
            className="hidden rounded-full px-2.5 py-1.5 text-[0.625rem] font-semibold uppercase tracking-wider text-paper/75 transition-all hover:bg-white/10 hover:text-white sm:inline-block md:px-3.5 md:py-2 md:text-xs"
          >
            Location
          </Link>
        </div>

        {/* Right Action Button: BOOK A TABLE */}
        <Link
          to="/"
          hash="find"
          className="rounded-full bg-red px-3.5 py-1.5 text-[0.625rem] font-semibold uppercase tracking-wider text-white shadow-xs transition-all hover:bg-white hover:text-ink md:px-4 md:py-2 md:text-xs"
        >
          Book a table
        </Link>
      </div>
    </nav>
  );
}
