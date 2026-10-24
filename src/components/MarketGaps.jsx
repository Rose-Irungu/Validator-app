import { capitalize, sentimentInfo } from "../utils/report";

export default function MarketGaps({ gaps }) {
  const list = Array.isArray(gaps) ? gaps : [];

  return (
    <section>
      <h2 className="text-xl font-semibold text-black md:text-2xl">Market Gaps &amp; Growth Strategies</h2>
      <p className="mt-2 text-sm text-gray-900">
        Where the biggest unmet need sits, and what to do about it in the next few months.
      </p>

      <div className="mt-6 flex flex-col gap-4">
        {list.length === 0 && (
          <p className="rounded-md bg-gray-50 px-4 py-3 text-sm text-gray-600">No market gaps were identified.</p>
        )}

        {list.map((gap, index) => {
          const sentiment = sentimentInfo(gap.sentimentBreakdown);
          const painPoints = Array.isArray(gap.painPoints) ? gap.painPoints : [];
          return (
            <div key={`${gap.theme}-${index}`} className="rounded-md border border-gray-200 bg-white p-4 shadow-sm md:p-6">
              <h3 className="text-base font-semibold text-black md:text-lg">{capitalize(gap.theme)}</h3>

              {gap.sentimentBreakdown && (
                <div className="mt-4">
                  <p className="text-sm text-gray-700">Sentiment</p>
                  {sentiment.percent !== null && (
                    <div className="mt-2 h-3 w-full overflow-hidden rounded-full bg-gray-200">
                      <div
                        className={`h-full rounded-full ${sentiment.isPositive ? "bg-[#1E8E5A]" : "bg-[#A60F0F]"}`}
                        style={{ width: `${sentiment.percent}%` }}
                      />
                    </div>
                  )}
                  <p className={`mt-1 text-xs ${sentiment.isPositive ? "text-[#1E8E5A]" : "text-[#A60F0F]"}`}>
                    {sentiment.label}
                  </p>
                </div>
              )}

              {painPoints.length > 0 && (
                <div className="mt-5">
                  <p className="text-sm font-semibold text-black">Pain Points</p>
                  <ul className="mt-2 list-disc space-y-2 pl-5 text-sm leading-relaxed text-black">
                    {painPoints.map((point, i) => (
                      <li key={i}>{point}</li>
                    ))}
                  </ul>
                </div>
              )}

              {gap.opportunity && (
                <div className="mt-5 rounded-md border border-[#B9DDB4] bg-[#D9EFD6] p-4">
                  <p className="text-sm font-semibold text-[#004B38]">Opportunity</p>
                  <p className="mt-2 text-sm leading-relaxed text-black">{gap.opportunity}</p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}