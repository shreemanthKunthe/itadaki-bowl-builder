import { Link } from "@tanstack/react-router";

export function Nav() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 mix-blend-normal">
      <nav className="flex items-center justify-between px-5 py-4 md:px-8">
        <Link to="/" className="wordmark text-xl text-red md:text-2xl" aria-label="Itadaki home">
          ITADAKI
        </Link>

        <ul className="hidden items-center gap-8 md:flex">
          <li>
            <Link to="/menu" className="label text-ink hover:text-red">
              Menu
            </Link>
          </li>
          <li>
            <Link to="/story" className="label text-ink hover:text-red">
              Our Story
            </Link>
          </li>
          <li>
            <Link to="/" hash="reviews" className="label text-ink hover:text-red">
              Reviews
            </Link>
          </li>
        </ul>

        <Link to="/" hash="find" className="btn-red !px-4 !py-2.5 md:!px-6 md:!py-3">
          Book a table
        </Link>
      </nav>
    </header>
  );
}
