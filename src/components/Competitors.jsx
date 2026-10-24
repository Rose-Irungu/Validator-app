import { MapPin, ExternalLink } from "lucide-react";

const avatarColors = ["bg-[#C026D3]", "bg-[#004B38]", "bg-[#F59E0B]", "bg-[#2563EB]", "bg-[#DC2626]"];

const sentimentStyles = {
  positive: "bg-[#C9F0E0] text-[#0B6B4B]",
  mixed: "bg-[#FDEBD3] text-[#B26A00]",
  neutral: "bg-gray-100 text-gray-700",
  negative: "bg-[#FADBDB] text-[#A60F0F]",
};

function sentimentStyle(value) {
  return sentimentStyles[String(value || "").toLowerCase()] || sentimentStyles.neutral;
}

function capitalize(text) {
  const str = String(text || "");
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export default function Competitors({ competitors }) {
  const list = Array.isArray(competitors) ? competitors : [];

  return (
    <section className="rounded-md border border-gray-200 bg-white p-4 shadow-sm md:p-6">
      <h2 className="text-lg font-semibold text-black md:text-xl">Who's already operating in this space</h2>
      <p className="mt-2 text-sm text-gray-900">
        Ranked by how closely each one overlaps with what you're building.
      </p>

      {list.length === 0 ? (
        <p className="mt-5 rounded-md bg-gray-50 px-4 py-3 text-sm text-gray-600">
          No direct competitors were identified for this idea.
        </p>
      ) : (
        <div className="mt-5 grid grid-cols-1 gap-4 md:grid-cols-2">
          {list.map((c, index) => {
            const name = c.name || "Unnamed";
            return (
              <div key={`${name}-${index}`} className="flex flex-col rounded-md border border-gray-200 p-4">
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <span
                      className={`flex h-8 w-8 shrink-0 items-center justify-center rounded text-sm font-bold text-white ${
                        avatarColors[index % avatarColors.length]
                      }`}
                    >
                      {name.charAt(0).toUpperCase()}
                    </span>
                    <div>
                      <p className="text-sm font-semibold text-black">{name}</p>
                      {c.location && (
                        <p className="mt-0.5 flex items-center gap-1 text-xs text-gray-600">
                          <MapPin size={12} />
                          {c.location}
                        </p>
                      )}
                    </div>
                  </div>
                  {c.url && (
                    <a
                      href={c.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Open ${name}`}
                      className="shrink-0 text-gray-500 transition hover:text-[#004B38]"
                    >
                      <ExternalLink size={16} />
                    </a>
                  )}
                </div>

                {c.description && <p className="mt-3 text-sm leading-relaxed text-black">{c.description}</p>}

                <div className="mt-3 flex flex-wrap items-center gap-2">
                  {c.userSentiment && (
                    <span className={`rounded-full px-3 py-1 text-xs font-medium ${sentimentStyle(c.userSentiment)}`}>
                      {capitalize(c.userSentiment)}
                    </span>
                  )}
                  {c.engagement && (
                    <span className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-700">
                      {c.engagement}
                    </span>
                  )}
                </div>

                {c.differentiationAngle && (
                  <div className="mt-4 rounded-md bg-[#F3F6F4] p-3">
                    <p className="text-[11px] font-semibold uppercase tracking-wide text-[#004B38]">
                      How to stand out
                    </p>
                    <p className="mt-1 text-sm leading-relaxed text-black">{c.differentiationAngle}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}
    </section>
  );
}