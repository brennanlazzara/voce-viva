import { useState } from "react";

interface PhraseData {
  phrase: string;
  translation: string;
  meaning: string;
  [key: string]: any; // Allow for additional phrase properties
}

export const usePhraseData = () => {
  const [isLoading, setIsLoading] = useState(false);

  // Use environment variable for API base URL
  const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5001';

  const fetchPhrases = async (): Promise<PhraseData[]> => {
    setIsLoading(true);
    try {
      const response = await fetch(
        `${API_BASE_URL}/api/phrases`,
        {
          credentials: 'include', // Include cookies for authentication
        }
      );

      if (!response.ok) {
        throw new Error(`Network response was not ok: ${response.statusText}`);
      }

      const data = await response.json();
      return Array.isArray(data) ? data : [];
    } catch (error) {
      console.error("Error fetching phrases:", error);

      // Fallback phrase data if API fails
      return [
        {
          phrase: "Buongiorno",
          translation: "Good morning",
          meaning: "A formal greeting used in the morning"
        },
        {
          phrase: "Come stai?",
          translation: "How are you?",
          meaning: "Informal way to ask about someone's wellbeing"
        },
        {
          phrase: "Prego",
          translation: "You're welcome / Please",
          meaning: "Multipurpose polite expression"
        },
        {
          phrase: "Scusi",
          translation: "Excuse me (formal)",
          meaning: "Formal way to get attention or apologize"
        },
        {
          phrase: "Che cosa vuoi dire?",
          translation: "What do you mean?",
          meaning: "Used to ask for clarification"
        }
      ];
    } finally {
      setIsLoading(false);
    }
  };

  return { fetchPhrases, isLoading };
};