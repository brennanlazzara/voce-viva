import { useState, useCallback } from "react";

interface VerbData {
  infinitive: string;
  type: "are" | "ere" | "ire";
  definition: string;
  conjugation: {
    io: string | null;
    tu: string | null;
    luiLei: string | null;
    noi: string | null;
    voi: string | null;
    loro: string | null;
  } | null;
  metadata: {
    auxiliaryVerb?: string;
    regularPresenteIndicativo?: boolean;
    regularPassatoProssimo?: boolean;
  };
}

interface FilterOptions {
  regularOnly?: boolean | null;
  type?: "are" | "ere" | "ire" | null;
  tense?: string;
  mood?: string;
}

export const useVerbData = () => {
  const [isLoading, setIsLoading] = useState(false);

  // Use relative URLs for API calls (works in both development and production)
  const API_BASE_URL = "";

  const fetchRandomPronoun = useCallback(async (): Promise<string> => {
    setIsLoading(true);
    try {
      const response = await fetch(
        `${API_BASE_URL}/api/pronouns/random/subject`,
        {
          credentials: "include", // Include cookies for auth
        }
      );

      if (!response.ok) {
        throw new Error(`Network response was not ok: ${response.statusText}`);
      }

      const data = await response.json();
      if (data && data.pronouns && data.pronouns.length > 0) {
        const randomIndex = Math.floor(Math.random() * data.pronouns.length);
        return data.pronouns[randomIndex];
      } else {
        throw new Error("No pronouns data received");
      }
    } catch (error) {
      console.error("Error fetching random pronoun:", error);
      // Fallback to static pronouns if API fails
      const fallbackPronouns = ["Io", "Tu", "Lui/Lei", "Noi", "Voi", "Loro"];
      return fallbackPronouns[
        Math.floor(Math.random() * fallbackPronouns.length)
      ];
    } finally {
      setIsLoading(false);
    }
  }, [API_BASE_URL]);

  const fetchRandomVerb = useCallback(
    async (filterOptions: FilterOptions = {}): Promise<VerbData> => {
      setIsLoading(true);
      const {
        regularOnly = null,
        type = null,
        tense = "presente",
        mood = "indicativo",
      } = filterOptions;
      try {
        // Use type-specific endpoint if type is specified
        const endpoint = type
          ? `/api/verbs/random/${type}`
          : "/api/verbs/random";

        // Add query parameters
        const params = new URLSearchParams();
        if (tense) params.append("tense", tense);
        if (mood) params.append("mood", mood);
        if (regularOnly !== null)
          params.append("regularOnly", String(regularOnly));

        const url = `${API_BASE_URL}${endpoint}?${params.toString()}`;
        const response = await fetch(url, {
          credentials: "include", // Include cookies for auth
        });

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const data = await response.json();

        return {
          infinitive: data.infinitive,
          type: data.type,
          definition: data.definition,
          conjugation: data.conjugation,
          metadata: data.metadata || {},
        };
      } catch (error) {
        console.error("Error fetching random verb:", error);

        // Fallback to static verbs if API fails
        const fallbackVerbs: VerbData[] = [
          {
            infinitive: "parlare",
            definition: "to speak",
            type: "are",
            conjugation: {
              io: "parlo",
              tu: "parli",
              luiLei: "parla",
              noi: "parliamo",
              voi: "parlate",
              loro: "parlano",
            },
            metadata: {
              regularPresenteIndicativo: true,
            },
          },
          {
            infinitive: "vendere",
            definition: "to sell",
            type: "ere",
            conjugation: {
              io: "vendo",
              tu: "vendi",
              luiLei: "vende",
              noi: "vendiamo",
              voi: "vendete",
              loro: "vendono",
            },
            metadata: {
              regularPresenteIndicativo: true,
            },
          },
          {
            infinitive: "dormire",
            definition: "to sleep",
            type: "ire",
            conjugation: {
              io: "dormo",
              tu: "dormi",
              luiLei: "dorme",
              noi: "dormiamo",
              voi: "dormite",
              loro: "dormono",
            },
            metadata: {
              regularPresenteIndicativo: true,
            },
          },
        ];

        return fallbackVerbs[Math.floor(Math.random() * fallbackVerbs.length)];
      } finally {
        setIsLoading(false);
      }
    },
    [API_BASE_URL]
  );

  return {
    fetchRandomPronoun,
    fetchRandomVerb,
    isLoading,
  };
};
