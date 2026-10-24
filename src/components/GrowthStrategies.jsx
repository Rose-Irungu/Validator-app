export default function GrowthStrategies({ strategies }) {
  const list = Array.isArray(strategies) ? strategies : [];
  if (list.length === 0) return null;

  return (
    <section>
      <h3 className="text-base font-semibold text-black md:text-lg">Growth strategies</h3>
      <ol className="mt-4">
        {list.map((item, index) => {
          const parts = String(item).split(" — ");
          const main = parts[0];
          const meta = parts.slice(1).join(" · ");
          return (
            <li key={index} className="flex items-start gap-4 border-b border-gray-200 py-4 last:border-b-0">
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#004B38] text-xs font-semibold text-white">
                {index + 1}
              </span>
              <div>
                <p className="text-sm leading-relaxed text-black">{main}</p>
                {meta && <p className="mt-1 text-xs text-gray-600">{meta}</p>}
              </div>
            </li>
          );
        })}
      </ol>
    </section>
  );
}