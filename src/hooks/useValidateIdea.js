import { useState, useCallback } from "react";
import { validateIdea } from "../services/ideaService";

const STORAGE_KEY = "validator:lastAnalysis";

export function getStoredAnalysis() {
  try {
    const raw = sessionStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
}

export default function useValidateIdea() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [result, setResult] = useState(null);

  const run = useCallback(async (input) => {
    setIsLoading(true);
    setError(null);
    try {
      const data = await validateIdea(input);
      setResult(data);
      try {
        sessionStorage.setItem(STORAGE_KEY, JSON.stringify({ input, result: data }));
      } catch {
        // storage unavailable, result still returned
      }
      return data;
    } catch (err) {
      setError(err.message);
      return null;
    } finally {
      setIsLoading(false);
    }
  }, []);

  return { run, isLoading, error, result };
}