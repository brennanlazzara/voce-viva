import { useState, useCallback } from "react";

export const useLessonData = () => {
  const [isLoading, setIsLoading] = useState(false);

  const fetchRegularLesson = useCallback(async (tense = "presenteIndicativo") => {
    setIsLoading(true);
    try {
      const response = await fetch(
        `${process.env.REACT_APP_API_LOCAL_URL}/api/lessons/regular/${tense}`
      );
      if (!response.ok) {
        throw new Error(`Network response was not ok: ${response.statusText}`);
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error fetching regular lesson:", error);
      throw error;
    } finally {
      setIsLoading(false);
    }
  }, []);

  const fetchIrregularLesson = useCallback(async (infinitive, tense = "presenteIndicativo") => {
    setIsLoading(true);
    try {
      const response = await fetch(
        `${process.env.REACT_APP_API_LOCAL_URL}/api/lessons/irregular/${infinitive}/${tense}`
      );
      if (!response.ok) {
        throw new Error(`Network response was not ok: ${response.statusText}`);
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error fetching irregular lesson:", error);
      throw error;
    } finally {
      setIsLoading(false);
    }
  }, []);

  const fetchLessonsByTense = useCallback(async (tense = "presenteIndicativo") => {
    setIsLoading(true);
    try {
      const response = await fetch(
        `${process.env.REACT_APP_API_LOCAL_URL}/api/lessons/tense/${tense}`
      );
      if (!response.ok) {
        throw new Error(`Network response was not ok: ${response.statusText}`);
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error fetching lessons by tense:", error);
      throw error;
    } finally {
      setIsLoading(false);
    }
  }, []);

  return {
    fetchRegularLesson,
    fetchIrregularLesson,
    fetchLessonsByTense,
    isLoading,
  };
};