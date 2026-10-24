import { Activity } from "lucide-react";
import { splitSource } from "../utils/report";

const sections = [
  { key: "strengths", title: "Strengths" },
  { key: "weaknesses", title: "Weaknesses" },
  { key: "opportunities", title: "Opportunities" },
  { key: "threats", title: "Threats" },
  { key: "strategies", title: "Suggested Strategy" },
];

export default function SwotSection({ swot }) {
  return (
    <section>
      <h2 className="text-xl font-semibold text-black md:text-2xl">SWOT Analysis</h2>
      <p className="mt-2 text-sm text-gray-900">
        What's working in your favor, what could hold you back, and the moves that turn the second into the first.
      </p>

      <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2">
        {sections.map((section) => {
          const items = Array.isArray(swot?.[section.key]) ? swot[section.key] : [];
          return (
            <div key={section.key} className="rounded-md border border-gray-200 bg-white p-4 shadow-sm md:p-5">
              <div className="flex items-center gap-2">
                <span className="flex h-6 w-6 items-center justify-center rounded border border-gray-300 text-[#004B38]">
                  <Activity size={14} />
                </span>
                <h3 className="text-xs font-bold uppercase tracking-wide text-black">{section.title}</h3>
              </div>

              {items.length === 0 ? (
                <p className="mt-4 text-sm text-gray-500">Nothing identified yet.</p>
              ) : (
                <ol className="mt-4 flex flex-col gap-3">
                  {items.map((item, index) => {
                    const { text, url } = splitSource(item);
                    return (
                      <li key={index} className="flex gap-2 text-sm leading-relaxed text-black">
                        <span className="shrink-0">{index + 1}.</span>
                        <span>
                          {text}
                          {url && (
                            <a
                              href={url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="ml-1 font-medium text-[#004B38] underline"
                            >
                              Source
                            </a>
                          )}
                        </span>
                      </li>
                    );
                  })}
                </ol>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}