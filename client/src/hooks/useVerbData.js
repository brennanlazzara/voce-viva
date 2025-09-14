import { useState, useCallback } from "react";

export const useVerbData = () => {
  const [isLoading, setIsLoading] = useState(false);

  const fetchRandomPronoun = useCallback(async () => {
    setIsLoading(true);
    try {
      const response = await fetch(
        `${process.env.REACT_APP_API_LOCAL_URL}/api/pronouns/random/subject`
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
      throw error;
    } finally {
      setIsLoading(false);
    }
  }, []);

  const fetchRandomVerb = useCallback(async (filterOptions = {}) => {
    setIsLoading(true);
    try {
      const { regularOnly = null } = filterOptions;

      let isValidVerb = false;
      let data = null;
      let attempts = 0;
      const maxAttempts = 20; // Prevent infinite loops

      while (!isValidVerb && attempts < maxAttempts) {
        const response = await fetch(
          `${process.env.REACT_APP_API_LOCAL_URL}/api/verbs/random`
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        data = await response.json();

        // Check filtering criteria
        if (regularOnly !== null) {
          if (regularOnly && data.regularPresenteIndicativo === true) {
            isValidVerb = true;
          } else if (!regularOnly && data.regularPresenteIndicativo === false) {
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
      throw error;
    } finally {
      setIsLoading(false);
    }
  }, []);

  return {
    fetchRandomPronoun,
    fetchRandomVerb,
    isLoading,
  };
};
