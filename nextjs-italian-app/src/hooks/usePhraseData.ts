import { useState, useCallback, useRef } from "react";

interface PhraseData {
  phrase: string;
  translation: string;
  meaning: string;
  [key: string]: any; // Allow for additional phrase properties
}

export const usePhraseData = () => {
  const [isLoading, setIsLoading] = useState(false);
  const cacheRef = useRef<PhraseData[] | null>(null);

  // Use relative URLs for API calls (works in both development and production)
  const API_BASE_URL = "";

  const fetchPhrases = useCallback(async (): Promise<PhraseData[]> => {
    // Return cached data if available
    if (cacheRef.current) {
      return cacheRef.current;
    }

    setIsLoading(true);
    try {
      const response = await fetch(`${API_BASE_URL}/api/phrases`, {
        credentials: "include", // Include cookies for authentication
      });

      if (!response.ok) {
        throw new Error(`Network response was not ok: ${response.statusText}`);
      }

      const data = await response.json();
      const phrases = Array.isArray(data) ? data : [];

      // Cache the result
      cacheRef.current = phrases;
      return phrases;
    } catch (error) {
      console.error("Error fetching phrases:", error);

      // Fallback phrase data if API fails
      const fallbackPhrases = [
        {
          phrase: "Buongiorno",
          translation: "Good morning",
          meaning: "A formal greeting used in the morning",
        },
        {
          phrase: "Come stai?",
          translation: "How are you?",
          meaning: "Informal way to ask about someone's wellbeing",
        },
        {
          phrase: "Prego",
          translation: "You're welcome / Please",
          meaning: "Multipurpose polite expression",
        },
        {
          phrase: "Scusi",
          translation: "Excuse me (formal)",
          meaning: "Formal way to get attention or apologize",
        },
        {
          phrase: "Che cosa vuoi dire?",
          translation: "What do you mean?",
          meaning: "Used to ask for clarification",
        },
      ];

      // Cache the fallback data
      cacheRef.current = fallbackPhrases;
      return fallbackPhrases;
    } finally {
      setIsLoading(false);
    }
  }, [API_BASE_URL]);

  return { fetchPhrases, isLoading };
};
