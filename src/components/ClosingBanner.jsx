import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function CallToAction() {
  return (
    <section className="relative overflow-hidden bg-linear-to-r from-[#0F3F39] via-[#08342F] to-[#08342F]">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/2 h-[380px] w-[380px] -translate-x-1/2 -translate-y-1/2 rotate-45 bg-gradient-to-br from-[#305E5A]/50 via-[#1B4B48]/60 to-[#0F3F39]/10 md:h-[460px] md:w-[460px]" />
        <div className="absolute left-[78%] top-1/2 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rotate-45 bg-gradient-to-br from-[#305E5A]/40 via-[#1B4B48]/40 to-[#08342F]/0 md:left-[72%] md:h-[400px] md:w-[400px]" />
        <div className="absolute left-[4%] top-1/2 h-[260px] w-[260px] -translate-x-1/2 -translate-y-1/2 rotate-45 bg-gradient-to-br from-[#1B4B48]/30 to-[#08342F]/0 md:left-[12%] md:h-[340px] md:w-[340px]" />
        <div className="absolute -top-8 left-1/2 h-14 w-14 -translate-x-1/2 rotate-45 bg-[#08342F]/80" />
        <div className="absolute -bottom-8 left-1/2 h-14 w-14 -translate-x-1/2 rotate-45 bg-[#08342F]/80" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_55%,rgba(48,94,90,0.25)_0%,transparent_60%)]" />
      </div>

      <div className="relative z-10 mx-auto flex max-w-[1400px] flex-col items-center px-6 py-16 text-center md:px-10 md:py-20">
        <h2 className="text-3xl font-bold leading-tight text-white md:text-4xl">
          Your idea is still just a theory.
        </h2>
        <p className="mt-3 text-lg font-semibold text-white md:text-xl">
          Let's find out if it holds up.
        </p>
        <Link
        to="/idea"
         className="mt-8 inline-flex items-center gap-2 bg-[#FBB724] px-6 py-3 text-sm font-medium text-[#004B38] transition hover:brightness-95">
          Validate an Idea
          <ArrowRight size={18} />
        </Link>
      </div>
    </section>
  );
}