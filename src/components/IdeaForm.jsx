import { useState } from "react";

export default function IdeaForm({ onSubmit, isLoading = false }) {
  const [concept, setConcept] = useState("");
  const [market, setMarket] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!concept.trim() || isLoading) return;
    if (onSubmit) {
      onSubmit({ concept: concept.trim(), market: market.trim() });
    }
  };

  return (
    <div>
      <h1 className="text-3xl font-bold leading-tight text-[#004B38] md:text-4xl">
        Tell us about your idea
      </h1>
      <p className="mt-4 max-w-md text-sm leading-relaxed text-black md:text-base">
        The more specific you are, the sharper your report will be. This takes
        about <span className="font-bold text-[#004B38]">3 minutes.</span>
      </p>

      <form onSubmit={handleSubmit} className="mt-8">
        <label htmlFor="concept" className="block text-sm font-semibold text-black">
          Concept core
        </label>
        <textarea
          id="concept"
          rows={5}
          value={concept}
          onChange={(e) => setConcept(e.target.value)}
          placeholder="Describe your idea ..."
          required
          className="mt-2 w-full resize-none rounded-md border border-gray-300 bg-white px-3 py-2 text-sm text-black placeholder:text-gray-400 focus:border-[#004B38] focus:outline-none focus:ring-1 focus:ring-[#004B38]"
        />

        <label htmlFor="market" className="mt-6 block text-sm font-semibold text-black">
          Target market / region{" "}
          <span className="font-normal">( Optional )</span>
        </label>
        <input
          id="market"
          type="text"
          value={market}
          onChange={(e) => setMarket(e.target.value)}
          placeholder="e.g. A City, or a Country, or a Continent"
          className="mt-2 w-full rounded-md border border-gray-300 bg-white px-3 py-2.5 text-sm text-black placeholder:text-gray-400 focus:border-[#004B38] focus:outline-none focus:ring-1 focus:ring-[#004B38]"
        />

        <button
          type="submit"
          disabled={isLoading || !concept.trim()}
          className="mt-4 w-full rounded-sm bg-[#004B38] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#003B2D] disabled:cursor-not-allowed disabled:opacity-60"
        >
          {isLoading ? "Analyzing..." : "Run Analysis"}
        </button>
        <p className="mt-3 text-center text-xs text-black">
          This may take up to 30 seconds
        </p>
      </form>
    </div>
  );
}