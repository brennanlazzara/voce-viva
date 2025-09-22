import { useState, useCallback } from "react";

interface LessonData {
  title?: string;
  content?: string;
  examples?: string[];
  [key: string]: any; // Allow for additional lesson properties
}

export const useLessonData = () => {
  const [isLoading, setIsLoading] = useState(false);

  // Use environment variable for API base URL
  const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5001';

  const fetchRegularLesson = useCallback(async (tense: string = "presenteIndicativo"): Promise<LessonData> => {
    setIsLoading(true);
    try {
      const response = await fetch(
        `${API_BASE_URL}/api/lessons/regular/${tense}`,
        {
          credentials: 'include', // Include cookies for authentication
        }
      );

      if (!response.ok) {
        throw new Error(`Network response was not ok: ${response.statusText}`);
      }

      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error fetching regular lesson:", error);

      // Fallback lesson content if API fails
      return {
        title: `Regular Verbs - ${tense}`,
        content: `This lesson covers regular verb conjugations for ${tense}.`,
        examples: [
          "Example verbs and conjugations will be loaded from the API.",
          "Check your backend connection if this message persists."
        ]
      };
    } finally {
      setIsLoading(false);
    }
  }, [API_BASE_URL]);

  const fetchIrregularLesson = useCallback(async (infinitive: string, tense: string = "presenteIndicativo"): Promise<LessonData> => {
    setIsLoading(true);
    try {
      const response = await fetch(
        `${API_BASE_URL}/api/lessons/irregular/${infinitive}/${tense}`,
        {
          credentials: 'include', // Include cookies for authentication
        }
      );

      if (!response.ok) {
        throw new Error(`Network response was not ok: ${response.statusText}`);
      }

      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error fetching irregular lesson:", error);

      // Fallback lesson content if API fails
      return {
        title: `Irregular Verb: ${infinitive} - ${tense}`,
        content: `This lesson covers the irregular conjugations for ${infinitive} in ${tense}.`,
        examples: [
          `${infinitive} has irregular conjugation patterns.`,
          "Check your backend connection for detailed conjugations."
        ]
      };
    } finally {
      setIsLoading(false);
    }
  }, [API_BASE_URL]);

  const fetchLessonsByTense = useCallback(async (tense: string = "presenteIndicativo"): Promise<LessonData[]> => {
    setIsLoading(true);
    try {
      const response = await fetch(
        `${API_BASE_URL}/api/lessons/tense/${tense}`,
        {
          credentials: 'include', // Include cookies for authentication
        }
      );

      if (!response.ok) {
        throw new Error(`Network response was not ok: ${response.statusText}`);
      }

      const data = await response.json();
      return Array.isArray(data) ? data : [data];
    } catch (error) {
      console.error("Error fetching lessons by tense:", error);

      // Fallback lesson content if API fails
      return [{
        title: `${tense} Lessons`,
        content: `Comprehensive lessons for ${tense} tense.`,
        examples: [
          "Multiple lesson topics will be loaded from the API.",
          "Check your backend connection if this message persists."
        ]
      }];
    } finally {
      setIsLoading(false);
    }
  }, [API_BASE_URL]);

  return {
    fetchRegularLesson,
    fetchIrregularLesson,
    fetchLessonsByTense,
    isLoading,
  };
};