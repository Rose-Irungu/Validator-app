const API_URL =
  import.meta.env.VITE_API_URL ||
  "https://api-rhafs2hpta-uc.a.run.app/api/idea/validate";

const TIMEOUT_MS = 90000;

export async function validateIdea({ concept, market }) {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), TIMEOUT_MS);

  try {
    const response = await fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        query: concept,
        region: market || "",
      }),
      signal: controller.signal,
    });

    let data = null;
    try {
      data = await response.json();
    } catch {
      data = null;
    }

    if (!response.ok) {
      console.error("Validate API error:", response.status, data);
      const message =
        response.status >= 500
          ? "Our analysis service is having trouble right now. Please try again in a few minutes."
          : typeof data?.error === "string"
            ? data.error
            : typeof data?.message === "string"
              ? data.message
              : "Something went wrong. Please try again.";
      throw new Error(message);
    }

    return data;
  } catch (err) {
    if (err.name === "AbortError") {
      throw new Error("The analysis is taking too long. Please try again.", {
        cause: err,
      });
    }
    if (err instanceof TypeError) {
      throw new Error(
        "Could not reach the server. Check your connection and try again.",
        { cause: err },
      );
    }
    throw err;
  } finally {
    clearTimeout(timer);
  }
}