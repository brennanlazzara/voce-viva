import { useState } from "react";

export const usePhraseData = () => {
  const [isLoading, setIsLoading] = useState(false);

  const fetchPhrases = async () => {
    setIsLoading(true);
    try {
      const res = await fetch(
        `${process.env.REACT_APP_API_LOCAL_URL}/api/phrases`
      );
      if (!res.ok)
        throw new Error(`Network response was not ok: ${res.statusText}`);
      return await res.json(); // expects [{ phrase, translation, meaning }, ...]
    } finally {
      setIsLoading(false);
    }
  };

  return { fetchPhrases, isLoading };
};
