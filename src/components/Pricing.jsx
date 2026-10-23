import { Activity } from "lucide-react";

const plans = [
  {
    label: "1 Idea",
    tag: "Ksh 100 / idea",
    price: "KSh 100",
    priceSuffix: "for 1 Full Validation",
    description:
      "Enough to validate 1 ideas. Good for testing a first batch of concepts before committing further.",
    button: "Buy starter pack",
    cardBg: "bg-white",
    border: "border border-gray-200",
    tagBg: "bg-[#D9D9D9] text-black",
    buttonStyle: "border border-[#004B38] text-[#004B38] hover:bg-[#004B38] hover:text-white",
    iconBg: "bg-white",
    iconBorder: "border-[#C2D3D2]",
    iconColor: "text-[#004B38]",
  },
  {
    label: "3 Ideas",
    tag: "Ksh 80 / Idea",
    price: "KSh 240",
    priceSuffix: "for 3 Full Validations",
    description:
      "3x the starter pack for a fraction more. Built for founders validating several ideas in parallel.",
    button: "Buy Pro pack",
    cardBg: "bg-[#F3F6F4]",
    border: "border border-[#D5DDD9]",
    tagBg: "bg-[#004B38] text-white",
    buttonStyle: "bg-[#004B38] text-white hover:bg-[#003B2D]",
    iconBg: "bg-white",
    iconBorder: "border-[#C2D3D2]",
    iconColor: "text-[#004B38]",
  },
  {
    label: "5 Ideas",
    tag: "Ksh 70 / Idea",
    price: "KSh 350",
    priceSuffix: "for 5 Full Validations",
    description:
      "For teams and serial founders running continuous validation across a full idea pipeline.",
    button: "Buy Premium pack",
    cardBg: "bg-[#FFFEEA]",
    border: "border border-[#F6E27A]",
    tagBg: "bg-[#FBB724] text-black",
    buttonStyle: "bg-[#FBB724] text-[#004B38] hover:brightness-95",
    iconBg: "bg-white",
    iconBorder: "border-[#E9D98A]",
    iconColor: "text-[#004B38]",
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="bg-white px-4 py-16 md:px-6 md:py-20">
      <div className="mx-auto max-w-[1400px] text-center">
        <p className="text-xs font-medium uppercase tracking-[0.15em] text-[#004B38]">
          Pricing
        </p>
        <h2 className="mt-4 text-3xl font-bold tracking-tight text-black md:text-4xl">
          Pay per idea. <span className="text-[#004B38]">Not per month.</span>
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-sm leading-relaxed tracking-wide text-gray-900 md:text-base">
          No subscription, no retainer. Buy credits, validate ideas whenever you
          <br className="hidden md:block" /> have something worth testing.
        </p>

        <div className="mt-12 grid grid-cols-1 gap-6 text-left md:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.label}
              className={`${plan.cardBg} ${plan.border} flex flex-col rounded-lg p-6 shadow-sm`}
            >
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div
                    className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full border ${plan.iconBg} ${plan.iconBorder}`}
                  >
                    <Activity size={16} className={plan.iconColor} />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-black">{plan.label}</p>
                    <p className="text-xs text-gray-900">Perfect for getting started</p>
                  </div>
                </div>
                <span
                  className={`${plan.tagBg} whitespace-nowrap rounded-full px-3 py-1 text-[11px] font-medium`}
                >
                  {plan.tag}
                </span>
              </div>

              <div className="mt-6 border-b border-dashed border-gray-300 pb-5">
                <span className="text-3xl font-bold text-black md:text-[32px]">
                  {plan.price}
                </span>
                <span className="ml-2 text-xs font-semibold text-black md:text-sm">
                  {plan.priceSuffix}
                </span>
              </div>

              <p className="mt-4 flex-1 text-sm leading-relaxed text-gray-900">
                {plan.description}
              </p>

              <button
                className={`${plan.buttonStyle} mt-6 w-full rounded-sm px-5 py-3 text-sm font-semibold transition`}
              >
                {plan.button}
              </button>
            </div>
          ))}
        </div>

        <p className="mt-10 text-sm text-gray-900 md:text-base">
          No sign-up needed — pay as a guest and validate your idea right away.
          <br />
          Your report is emailed to you either way.
        </p>
      </div>
    </section>
  );
}