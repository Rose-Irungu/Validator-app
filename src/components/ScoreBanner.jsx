import { formatScore, scoreVerdict } from "../utils/report";

export default function ScoreBanner({ score, overview, confidence }) {
  const value = Math.max(0, Math.min(10, Number(score) || 0));
  const radius = 40;
  const circumference = 2 * Math.PI * radius;
  const dash = (value / 10) * circumference;

  return (
    <div className="flex flex-col items-center gap-5 rounded-md bg-[#004B38] p-5 text-white sm:flex-row sm:items-center md:p-6">
      <div className="relative h-24 w-24 shrink-0">
        <svg viewBox="0 0 100 100" className="h-full w-full -rotate-90">
          <circle cx="50" cy="50" r={radius} fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="8" />
          <circle
            cx="50"
            cy="50"
            r={radius}
            fill="none"
            stroke="#FBB724"
            strokeWidth="8"
            strokeLinecap="round"
            strokeDasharray={`${dash} ${circumference}`}
          />
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className="text-2xl font-bold leading-none">{formatScore(score)}</span>
          <span className="mt-1 text-[9px] font-medium uppercase tracking-wider">/10 Viability</span>
        </div>
      </div>

      <div className="text-center sm:text-left">
        <h2 className="text-base font-semibold md:text-lg">{scoreVerdict(score)}</h2>
        <p className="mt-2 text-xs leading-relaxed text-white/90 md:text-sm">{overview}</p>
        {confidence && (
          <p className="mt-3 text-[11px] font-medium uppercase tracking-wider text-[#FBB724]">
            Confidence: {confidence}
          </p>
        )}
      </div>
    </div>
  );
}