import { Link } from "@tanstack/react-router";

export function Nav() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-ink/10 bg-paper/85 backdrop-blur-md transition-colors">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3.5 md:px-8">
        <Link
          to="/"
          className="wordmark text-xl tracking-tight text-red transition-opacity hover:opacity-90 md:text-2xl"
          aria-label="Itadaki home"
        >
          ITADAKI
        </Link>

        <ul className="hidden items-center gap-9 md:flex">
          <li>
            <Link to="/menu" className="meta-label text-ink transition-colors hover:text-red">
              Menu
            </Link>
          </li>
          <li>
            <Link to="/story" className="meta-label text-ink transition-colors hover:text-red">
              Our Story
            </Link>
          </li>
          <li>
            <Link to="/" hash="reviews" className="meta-label text-ink transition-colors hover:text-red">
              Philosophy
            </Link>
          </li>
          <li>
            <Link to="/" hash="find" className="meta-label text-ink transition-colors hover:text-red">
              Location
            </Link>
          </li>
        </ul>

        <Link
          to="/"
          hash="find"
          className="btn-red !py-2 !px-4 text-[0.6875rem] md:!py-2.5 md:!px-5"
        >
          Book a table
        </Link>
      </nav>
    </header>
  );
}

