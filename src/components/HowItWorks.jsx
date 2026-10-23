import { Search, FileText } from "lucide-react";

const steps = [
  {
    number: "1",
    title: "Share Your Idea",
    description: "State your ideas in a few single sentence.",
    icon: null,
    image: "/Light On.png",
  },
  {
    number: "2",
    title: "Ai Research",
    description: "Our Ai scans the market, competitors and trends.",
    icon: Search,
    image: null,
  },
  {
    number: "3",
    title: "Get Insights",
    description: "Receive scores, insights and actionable recommendations.",
    icon: null,
    image: "/Bar Chart.png",
  },
  {
    number: "4",
    title: "Make Decisions",
    description: "Build with confidence and reduce risk of failure.",
    icon: FileText,
    image: null,
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-[#E2E8DF] px-6 py-16 md:px-10 md:py-20">
      <div className="mx-auto max-w-6xl text-center">
        <p className="text-xs font-medium uppercase tracking-[0.15em] text-[#004B38]">
          How it works
        </p>
        <h2 className="mt-4 text-3xl font-bold tracking-tight text-black md:text-4xl">
          From idea to verdict in three steps.
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed tracking-wide text-gray-900 md:text-lg">
          No forms that take an hour, no spreadsheets. Just the questions that
          actually matter, answered in minutes.
        </p>

        <div className="relative mt-14">
          <div className="absolute left-[12.5%] right-[12.5%] top-[22px] hidden h-[2px] bg-[repeating-linear-gradient(to_right,#004B38_0,#004B38_8px,transparent_8px,transparent_14px)] md:block" />

          <div className="relative grid grid-cols-1 gap-10 md:grid-cols-4 md:gap-6">
            {steps.map((step) => {
              const Icon = step.icon;
              return (
                <div key={step.number} className="flex flex-col items-center">
                  <div className="relative z-10 flex h-11 w-11 items-center justify-center rounded-full bg-[#004B38] ring-8 ring-[#E2E8DF]">
                    {Icon && <Icon size={20} className="text-white" />}
                    {!Icon && step.image && (
                      <img
                        src={step.image}
                        alt=""
                        className="h-5 w-5 object-contain"
                      />
                    )}
                  </div>
                  <h3 className="mt-4 text-sm font-semibold text-black md:text-base">
                    {step.number}. {step.title}
                  </h3>
                  <p className="mt-2 max-w-[200px] text-xs leading-relaxed text-gray-900 md:text-sm">
                    {step.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}