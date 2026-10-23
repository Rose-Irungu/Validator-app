import { Search } from "lucide-react";

const items = [
  {
    icon: Search,
    title: "Market Demand",
    description: "Assess customer interest, market size, and industry trends.",
  },
  {
    icon: Search,
    title: "Competition",
    description: "Discover existing competitors and identify gaps you can leverage.",
  },
  {
    icon: Search,
    title: "Risk & Challenges",
    description:
      "Highlight possible obstacles before you invest significant time or money.",
  },
  {
    icon: Search,
    title: "Growth Opportunity",
    description:
      "Uncover opportunities to strengthen your idea and improve your market position.",
  },
];

export default function ReportAnalysis() {
  return (
    <aside className="rounded-md bg-[#E0E6DF] p-5 md:p-6">
      <h2 className="text-sm font-bold text-[#004B38] md:text-base">
        Your report will analyze
      </h2>
      <p className="mt-3 text-xs leading-relaxed text-black md:text-sm">
        We'll analyze your idea across multiple business dimensions to uncover
        opportunities, identify risks, and help you make informed decisions.
      </p>

      <ul className="mt-8">
        {items.map((item, index) => {
          const Icon = item.icon;
          const isLast = index === items.length - 1;
          return (
            <li
              key={item.title}
              className={`flex items-start gap-4 py-4 ${
                isLast ? "" : "border-b border-black/10"
              }`}
            >
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#C9D8CF]">
                <Icon size={16} className="text-[#004B38]" />
              </div>
              <div>
                <h3 className="text-sm font-semibold text-black">{item.title}</h3>
                <p className="mt-1 text-xs leading-relaxed text-black md:text-sm">
                  {item.description}
                </p>
              </div>
            </li>
          );
        })}
      </ul>
    </aside>
  );
}