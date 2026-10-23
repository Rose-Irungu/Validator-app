export default function IdeaNavbar() {
  return (
    <header className="w-full border-b border-gray-200 bg-white">
      <div className="mx-auto flex max-w-[1400px] items-center justify-between px-4 py-4 md:px-6">
        <a href="/" className="flex items-center gap-2">
          <img src="/validator.svg" alt="Validator Logo" className="h-10 w-auto" />
          {/* <div>
            <p className="text-base font-bold leading-none text-[#004B38] md:text-lg">
              Validator
            </p>
            <p className="mt-1 text-[10px] leading-none text-[#004B38] md:text-xs">
              Validate with confidence
            </p>
          </div> */}
        </a>

        <a
          href="/"
          className="text-xs font-semibold text-[#004B38] transition hover:underline md:text-sm"
        >
          Back to home
        </a>
      </div>
    </header>
  );
}