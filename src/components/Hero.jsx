import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-[#1E5D47]">
      <img
        src="/hero.svg"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 -z-20 h-full w-full object-cover object-[75%_center]"
      />
      <div className="absolute inset-0 -z-10 bg-[#1E5D47]/90 md:bg-[#1E5D47]/85" />

      <div className="mx-auto flex min-h-130 max-w-7xl items-center px-6 py-16 md:min-h-160 md:px-10 md:py-24">
        <div className="max-w-xl">
          <h1 className="text-4xl font-bold leading-tight text-white sm:text-5xl md:text-6xl">
            Test if your idea
            <br />
            is <span className="text-[#FBB724]">viable.</span>
          </h1>

          <p className="mt-6 max-w-md text-sm leading-relaxed text-white md:text-base">
            Describe your business idea and Validator checks the market, the
            competition, and the risks then gives you a clear score telling you
            if it's worth building.
          </p>

          <div className="mt-8">
            <Link
              to="/idea"
              className="inline-flex items-center gap-2 rounded-sm border border-white px-6 py-3 text-sm font-medium text-white transition hover:bg-white hover:text-[#004B38]"
            >
              Validate an Idea
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
