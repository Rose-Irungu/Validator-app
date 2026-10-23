import { ArrowRight } from "lucide-react";

export default function GetTheApp() {
  return (
    <section className="relative overflow-hidden bg-[#08342F]">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-[18%] aspect-square w-[170%] -translate-x-1/2 rounded-full bg-[#0F3F39] md:top-[22%] md:w-[120%]" />
        <div className="absolute left-1/2 top-[42%] aspect-square w-[130%] -translate-x-1/2 rounded-full bg-[#1B4B48] md:top-[48%] md:w-[90%]" />
        <div className="absolute left-1/2 top-[68%] aspect-square w-[90%] -translate-x-1/2 rounded-full bg-[#305E5A]/50 md:top-[74%] md:w-[55%]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_100%,rgba(48,94,90,0.85)_0%,rgba(48,94,90,0.25)_35%,transparent_65%)]" />
      </div>

      <div className="relative z-10 mx-auto flex max-w-[1400px] flex-col items-center gap-12 px-6 py-16 md:min-h-[560px] md:flex-row md:gap-8 md:px-10 md:py-20">
        <div className="w-full md:w-1/2">
          <span className="inline-block bg-[#FBB724] px-4 py-2 text-xs font-bold text-[#004B38]">
            Coming Soon
          </span>

          <h2 className="mt-8 text-4xl font-bold leading-tight text-white md:text-5xl">
            Validate ideas from your
            <br className="hidden sm:block" /> pocket.
          </h2>

          <p className="mt-6 max-w-lg text-sm leading-relaxed tracking-wide text-white md:text-base">
            Save every spark the moment it hits you. Validate the ones worth
            pursuing, and keep the rest banked for later.
          </p>

          <p className="mt-4 max-w-lg text-sm leading-relaxed tracking-wide text-white md:text-base">
            Everything in this report the score, the competitors, the
            strategies lives in the Validator app. Download it and start your
            idea bank today.
          </p>

          <div className="mt-8">
            <button className="inline-flex items-center gap-2 rounded-sm border border-white px-6 py-3 text-sm font-medium text-white transition hover:bg-white hover:text-[#08342F]">
              Join Wait List
              <ArrowRight size={18} />
            </button>
          </div>
        </div>

        <div className="flex w-full justify-center md:w-1/2 md:justify-end">
          <img
            src="/phone.svg"
            alt="Validator app preview"
            className="h-auto w-full max-w-sm md:max-w-md lg:max-w-lg"
          />
        </div>
      </div>
    </section>
  );
}