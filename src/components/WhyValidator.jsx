import { Search, Users, Shield, TrendingUp } from "lucide-react";

const features = [
  {
    icon: Search,
    title: "Market Research",
    description: "Real-time data and trends to uncover new opportunities.",
  },
  {
    icon: Users,
    title: "Competitor Intelligence",
    description: "Know your competitors and find your unfair edge.",
  },
  {
    icon: Shield,
    title: "Risk Assessment",
    description: "Identify potential risks before they become problems.",
  },
  {
    icon: TrendingUp,
    title: "Growth Potential",
    description: "Essential growth, revenue and long-term potential.",
  },
];

export default function WhyValidator() {
  return (
    <section id="what-you-get" className="bg-white px-4 py-16 md:px-6 md:py-20">
      <div className="mx-auto max-w-350 text-center">
        <p className="text-xs font-medium uppercase tracking-[0.15em] text-[#004B38]">
          Why validator
        </p>
        <h2 className="mt-4 text-3xl font-bold tracking-tight text-black md:text-4xl">
          Build with confidence
        </h2>

        <div className="mt-12 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div key={feature.title} className="flex flex-col items-center">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#E2E8DF] md:h-12 md:w-12">
                  <Icon size={20} strokeWidth={1.75} className="text-[#004B38]" />
                </div>
                <h3 className="mt-4 text-sm font-semibold text-black md:text-base">
                  {feature.title}
                </h3>
                <p className="mt-2 max-w-55 text-xs leading-relaxed text-gray-900 md:text-sm">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}