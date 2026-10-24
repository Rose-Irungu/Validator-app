import { MapPin } from "lucide-react";

const avatarColors = ["bg-[#C026D3]", "bg-[#004B38]", "bg-[#F59E0B]", "bg-[#2563EB]", "bg-[#DC2626]"];

function tagStyle(label) {
  const value = String(label || "").toLowerCase();
  if (value.startsWith("high")) return "bg-[#C9F0E0] text-[#0B6B4B]";
  if (value.startsWith("moderate") || value.startsWith("medium")) return "bg-[#FDEBD3] text-[#B26A00]";
  return "bg-gray-100 text-gray-700";
}

function normalize(item) {
  const c = typeof item === "string" ? { name: item } : item || {};
  const overlap = c.overlap || c.overlapLevel || c.threatLevel || c.threat;
  const extra = c.scale || c.size || c.note;
  return {
    name: c.name || c.company || "Unnamed",
    location: c.location || c.city || c.region || c.country,
    description: c.description || c.summary || c.offering,
    tag: [overlap, extra].filter(Boolean).join(" · "),
  };
}

export default function Competitors({ competitors }) {
  const list = Array.isArray(competitors) ? competitors.map(normalize) : [];

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
          {list.map((c, index) => (
            <div key={`${c.name}-${index}`} className="rounded-md border border-gray-200 p-4">
              <div className="flex items-center gap-3">
                <span
                  className={`flex h-8 w-8 shrink-0 items-center justify-center rounded text-sm font-bold text-white ${
                    avatarColors[index % avatarColors.length]
                  }`}
                >
                  {c.name.charAt(0).toUpperCase()}
                </span>
                <div>
                  <p className="text-sm font-semibold text-black">{c.name}</p>
                  {c.location && (
                    <p className="mt-0.5 flex items-center gap-1 text-xs text-gray-600">
                      <MapPin size={12} />
                      {c.location}
                    </p>
                  )}
                </div>
              </div>
              {c.description && <p className="mt-3 text-sm leading-relaxed text-black">{c.description}</p>}
              {c.tag && (
                <span className={`mt-3 inline-block rounded-full px-3 py-1 text-xs font-medium ${tagStyle(c.tag)}`}>
                  {c.tag}
                </span>
              )}
            </div>
          ))}
        </div>
      )}
    </section>
  );
}