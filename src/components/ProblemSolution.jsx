const cards = [
  {
    label: "The problem",
    title: "Guessing is expensive",
    description:
      "Most founders sink months and savings into an idea built on a hunch. Without real signals, every decision is a bet — is there actual demand? Is someone already doing this better? You find out only after the money's gone.",
    image: "/problem.png",
    alt: "Founder stressed over guessing",
    bg: "bg-[#FBB724]",
    from: "from-[#FBB724]",
    via: "via-[#FBB724]/60",
    labelColor: "text-[#004B38]",
    titleColor: "text-black",
    textColor: "text-black",
  },
  {
    label: "The validator way",
    title: "Confidence, backed by data",
    description:
      "A viability score, competitor intelligence, and a full SWOT breakdown — ready in minutes. Walk into your next pitch, hire, or launch knowing exactly where you stand, not hoping.",
    image: "/confidence.png",
    alt: "Founder confident with data",
    position: "object-[70%_25%]",
    bg: "bg-[#004B38]",
    from: "from-[#004B38]",
    via: "via-[#004B38]/60",
    labelColor: "text-[#FBB724]",
    titleColor: "text-white",
    textColor: "text-white",
  },
];

export default function ProblemSolution() {
  return (
    <section className="bg-white px-4 py-16 md:px-6 md:py-20">
      <div className="mx-auto max-w-350">
        <h2 className="text-center text-3xl font-bold leading-tight text-black md:text-4xl">
          Every great startup
          <br />
          begins with one{" "}
          <span className="text-[#004B38]">validated idea.</span>
        </h2>

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8">
          {cards.map((card) => (
            <div
              key={card.title}
              className={`relative flex flex-col overflow-hidden rounded-lg shadow-sm ring-1 ring-black/5 md:min-h-65.5 md:flex-row ${card.bg}`}
            >
              <div className="relative z-10 p-6 md:w-[62%] md:p-8 md:py-10">
                <p
                  className={`text-xs font-semibold uppercase tracking-wider ${card.labelColor}`}
                >
                  {card.label}
                </p>
                <h3
                  className={`mt-6 text-lg font-semibold uppercase md:text-xl ${card.titleColor}`}
                >
                  {card.title}
                </h3>
                <p className={`mt-3 text-sm leading-relaxed ${card.textColor}`}>
                  {card.description}
                </p>
              </div>

              <div className="relative h-56 w-full md:absolute md:inset-y-0 md:right-0 md:h-full md:w-1/2">
                <img
  src={card.image}
  alt={card.alt}
  className={`h-full w-full object-cover ${card.position}`}
/>
                <div
                  className={`absolute inset-0 bg-linear-to-b ${card.from} ${card.via} to-transparent md:bg-linear-to-r`}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
