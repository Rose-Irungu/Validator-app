import { Link } from "react-router-dom";
import { Download, Mail } from "lucide-react";

export default function ResultsNavbar({ onDownload, mailHref }) {
  return (
    <header className="bg-[#004B38] text-white print:hidden">
      <div className="mx-auto flex max-w-4xl items-center justify-between px-4 py-4 md:px-6">
        <Link to="/" className="text-base font-bold md:text-lg">
          Validator
        </Link>
        <div className="flex items-center gap-5">
          <button
            type="button"
            onClick={onDownload}
            aria-label="Download report"
            className="transition hover:text-[#FBB724]"
          >
            <Download size={20} />
          </button>
          <a
            href={mailHref}
            aria-label="Email report"
            className="transition hover:text-[#FBB724]"
          >
            <Mail size={20} />
          </a>
        </div>
      </div>
    </header>
  );
}