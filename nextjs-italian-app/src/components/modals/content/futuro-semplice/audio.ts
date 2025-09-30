export interface AudioContent {
  title: string;
  description: string;
  pronunciationTips: string[];
}

export function getFuturoSempliceAudio(
  infinitive: string,
  definition: string
): AudioContent {
  return {
    title: `Pronunciation Guide: ${infinitive}`,
    description: `Learn how to pronounce "${infinitive}" (${definition}) in the Futuro Semplice tense.`,
    pronunciationTips: [
      "🎵 Audio pronunciation feature coming soon!",
      "Focus on the stressed syllables in future tense endings",
      "The -ò ending (io) has a strong accent on the final o",
      "Listen for the clear vowel sounds in each conjugation",
    ],
  };
}
