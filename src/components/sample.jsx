import { ArrowRight, Download } from "lucide-react";

export default function Hero() {
  return (
    <section className="px-6 md:px-10 py-16 md:py-20 max-w-7xl mx-auto flex items-center justify-between gap-12">
      <div className="max-w-xl">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
          Test if your idea
          <br />
          is <span className="text-emerald-700">viable.</span>
        </h1>

        <p className="mt-6 text-gray-600 leading-relaxed max-w-md">
          Describe your business idea and Validator checks the market, the
          competition, and the risks then gives you a clear score telling you
          if it's worth building.
        </p>

        <div className="mt-8 flex flex-wrap items-center gap-4">
          <button className="flex items-center gap-2 bg-emerald-950 text-white font-semibold px-6 py-3 rounded-full hover:bg-emerald-900 transition">
            Validate an Idea
            <ArrowRight size={18} />
          </button>

          <button className="flex items-center gap-2 border border-gray-300 text-gray-900 font-semibold px-6 py-3 rounded-full hover:bg-gray-50 transition">
            <Download size={18} />
            Download App
          </button>
        </div>
      </div>

      <div className="hidden md:block flex-shrink-0 w-[420px]">
        <img
          src="/perso"
          alt="Validator app preview"
          className="w-100 h-auto"
        />
      </div>
    </section>
  );
}