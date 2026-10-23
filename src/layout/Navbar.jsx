import  { useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { label: "How it works", href: "#how-it-works" },
  { label: "What you get", href: "#what-you-get" },
  { label: "Pricing", href: "#pricing" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full bg-[#004B38] text-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-10">
        <a href="/" className="flex items-center gap-2">
          <img
            src="/logo.svg"
            alt="Validator Logo"
            className="h-9 w-auto brightness-0 invert"
          />
          <div>
            <p className="text-lg font-bold leading-none md:text-xl">Validator</p>
            <p className="mt-1 text-[10px] font-medium leading-none text-white/90 md:text-xs">
              Validate with confidence
            </p>
          </div>
        </a>

        <div className="hidden items-center gap-8 text-sm font-medium md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="transition hover:text-[#FBB724]"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-6 md:flex">
          <a href="/signin" className="text-sm font-medium transition hover:text-[#FBB724]">
            Sign In
          </a>
          <a
            href="/signup"
            className="rounded-sm bg-[#FFBE28] px-5 py-2.5 text-sm font-semibold text-[#004B38] transition hover:brightness-95"
          >
            Sign Up
          </a>
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden"
          aria-label="Toggle menu"
          aria-expanded={isOpen}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {isOpen && (
        <div className="flex flex-col gap-4 border-t border-white/10 px-6 pb-6 pt-4 text-sm font-medium md:hidden">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="transition hover:text-[#FBB724]"
            >
              {link.label}
            </a>
          ))}
          <a
            href="/signin"
            onClick={() => setIsOpen(false)}
            className="transition hover:text-[#FBB724]"
          >
            Sign In
          </a>
          <a
            href="/signup"
            onClick={() => setIsOpen(false)}
            className="w-full rounded-sm bg-[#FFBE28] px-5 py-2.5 text-center font-semibold text-[#004B38] transition hover:brightness-95"
          >
            Sign Up
          </a>
        </div>
      )}
    </nav>
  );
}