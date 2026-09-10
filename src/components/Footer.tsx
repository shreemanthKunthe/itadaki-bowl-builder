import { Link } from "@tanstack/react-router";

export function Footer() {
  return (
    <footer className="bg-ink px-5 py-10 text-cream md:px-8">
      <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <p className="wordmark text-[16vw] leading-[0.75] text-red md:text-[9vw]">ITADAKI</p>
        <div className="flex flex-col gap-2">
          <span className="label text-cream/60">A hug from Japan</span>
          <Link to="/menu" className="label hover:text-red">
            Menu
          </Link>
          <Link to="/story" className="label hover:text-red">
            Our Story
          </Link>
        </div>
      </div>
    </footer>
  );
}
