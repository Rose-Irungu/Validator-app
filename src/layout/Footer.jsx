

export default function Footer() {
  return (
    <footer className="bg-[#F6F6ED] px-4 md:px-6">
      <div className="mx-auto max-w-350 border-t border-[#004B38]/60">
        <div className="flex flex-col items-start gap-6 py-8 md:flex-row md:items-center md:justify-between md:py-10">
          <a href="/" className="flex items-center gap-2">
            <img src="/logo.svg" alt="Validator Logo" className="h-9 w-auto" />
            <div>
              <p className="text-sm font-bold leading-none text-[#004B38]">Validator</p>
              <p className="mt-1.5 text-[11px] leading-none text-[#004B38]">
                Validate with confidence
              </p>
            </div>
          </a>

          <div className="flex items-center gap-10 text-sm text-black md:gap-16 md:text-base">
            <a href="#how-it-works" className="transition hover:text-[#004B38]">
              How It Works
            </a>
            <a href="#pricing" className="transition hover:text-[#004B38]">
              Pricing
            </a>
          </div>

          <a
            href="mailto:enquiries@gmail.com"
            className="text-sm text-black transition hover:text-[#004B38] md:text-base"
          >
            enquiries@gmail.com
          </a>
        </div>

        <div className="flex flex-col items-start justify-between gap-4 border-t border-gray-300 py-6 text-sm text-black md:flex-row md:items-center md:text-base">
          <p>© 2026 Validator. All rights reserved.</p>
          <div className="flex items-center gap-6 md:gap-8">
            <a href="#terms" className="transition hover:underline">
              Term &amp; Conditions
            </a>
            <a href="#privacy" className="transition hover:underline">
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}