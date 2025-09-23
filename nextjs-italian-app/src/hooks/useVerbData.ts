import { useState, useCallback } from "react";

interface VerbData {
  infinitive: string;
  type: "are" | "ere" | "ire";
  definition: string;
  regularPresenteIndicativo?: boolean;
  auxiliaryVerb?: string;
  conjugations?: any;
}

interface FilterOptions {
  regularOnly?: boolean | null;
  type?: "are" | "ere" | "ire" | null;
}

export const useVerbData = () => {
  const [isLoading, setIsLoading] = useState(false);

  // Use Next.js internal API routes
  const API_BASE_URL =
    process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000";

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
      const { regularOnly = null, type = null } = filterOptions;
      try {
        let isValidVerb = false;
        let data = null;
        let attempts = 0;
        const maxAttempts = 20; // Prevent infinite loops

        while (!isValidVerb && attempts < maxAttempts) {
          // Use type-specific endpoint if type is specified
          const endpoint = type
            ? `/api/verbs/random/${type}`
            : "/api/verbs/random";
          const response = await fetch(`${API_BASE_URL}${endpoint}`, {
            credentials: "include", // Include cookies for auth
          });

          if (!response.ok) {
            throw new Error("Network response was not ok");
          }

          data = await response.json();

          // Check filtering criteria
          if (regularOnly !== null) {
            if (regularOnly && data.regularPresenteIndicativo === true) {
              isValidVerb = true;
            } else if (
              !regularOnly &&
              data.regularPresenteIndicativo === false
            ) {
              isValidVerb = true;
            }
          } else {
            // No filtering, accept any verb
            isValidVerb = true;
          }

          attempts++;
        }

        if (!isValidVerb) {
          throw new Error(
            "Could not find a verb matching the criteria after multiple attempts"
          );
        }

        return {
          infinitive: data.infinitive,
          type: data.type,
          definition: data.definition,
          regularPresenteIndicativo: data.regularPresenteIndicativo,
          auxiliaryVerb: data.auxiliaryVerb,
          conjugations: data.conjugations,
        };
      } catch (error) {
        console.error("Error fetching random verb:", error);

        // Fallback to static verbs if API fails
        const fallbackVerbs = {
          are: [
            {
              infinitive: "parlare",
              definition: "to speak",
              type: "are" as const,
              regularPresenteIndicativo: true,
            },
            {
              infinitive: "cantare",
              definition: "to sing",
              type: "are" as const,
              regularPresenteIndicativo: true,
            },
            {
              infinitive: "giocare",
              definition: "to play",
              type: "are" as const,
              regularPresenteIndicativo: true,
            },
          ],
          ere: [
            {
              infinitive: "vendere",
              definition: "to sell",
              type: "ere" as const,
              regularPresenteIndicativo: true,
            },
            {
              infinitive: "credere",
              definition: "to believe",
              type: "ere" as const,
              regularPresenteIndicativo: true,
            },
            {
              infinitive: "scrivere",
              definition: "to write",
              type: "ere" as const,
              regularPresenteIndicativo: true,
            },
          ],
          ire: [
            {
              infinitive: "dormire",
              definition: "to sleep",
              type: "ire" as const,
              regularPresenteIndicativo: true,
            },
            {
              infinitive: "partire",
              definition: "to leave",
              type: "ire" as const,
              regularPresenteIndicativo: true,
            },
            {
              infinitive: "aprire",
              definition: "to open",
              type: "ire" as const,
              regularPresenteIndicativo: true,
            },
          ],
        };

        // If regularOnly filter is applied, return appropriate verb
        if (regularOnly === true) {
          const allRegularVerbs = [
            ...fallbackVerbs.are,
            ...fallbackVerbs.ere,
            ...fallbackVerbs.ire,
          ];
          return allRegularVerbs[
            Math.floor(Math.random() * allRegularVerbs.length)
          ];
        }

        // Otherwise return any verb
        const allVerbs = [
          ...fallbackVerbs.are,
          ...fallbackVerbs.ere,
          ...fallbackVerbs.ire,
        ];
        return allVerbs[Math.floor(Math.random() * allVerbs.length)];
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
