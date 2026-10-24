export function splitSource(text) {
  const str = String(text ?? "");
  const match = str.match(/\s*\((https?:\/\/[^\s)]+)\)\s*$/);
  if (!match) return { text: str, url: null };
  return { text: str.slice(0, match.index).trim(), url: match[1] };
}

export function sentimentInfo(value) {
  const str = String(value ?? "");
  const isPositive = /positive/i.test(str);
  let percent = null;
  const ratio = str.match(/(\d+)\s+of\s+(\d+)/i);
  if (ratio && Number(ratio[2]) > 0) {
    percent = Math.round((Number(ratio[1]) / Number(ratio[2])) * 100);
  } else {
    const pct = str.match(/(\d+(?:\.\d+)?)\s*%/);
    if (pct) percent = Math.round(Number(pct[1]));
  }
  return {
    percent,
    isPositive,
    label: percent === null ? str : `${percent}% ${isPositive ? "positive" : "negative"}`,
  };
}

export function scoreVerdict(score) {
  const value = Number(score);
  if (value >= 7) return "Strong potential, worth pursuing";
  if (value >= 5) return "Promising, but validate the risks first";
  if (value >= 3) return "Weak signals, proceed with caution";
  return "Not enough evidence yet";
}

export function formatScore(score) {
  const value = Number(score);
  if (Number.isNaN(value)) return "-";
  return Number.isInteger(value) ? String(value) : value.toFixed(1);
}

export function shortTitle(text, max = 60) {
  const first = String(text ?? "").split(/[.!?\n]/)[0].trim();
  if (first.length <= max) return first;
  const cut = first.slice(0, max);
  return `${cut.slice(0, cut.lastIndexOf(" ") > 0 ? cut.lastIndexOf(" ") : max)}…`;
}

export function capitalize(text) {
  const str = String(text ?? "");
  return str.charAt(0).toUpperCase() + str.slice(1);
}