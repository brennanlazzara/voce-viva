export interface StatsContent {
  title: string;
  description: string;
  features: string[];
  previewStats?: {
    accuracy: string;
    timesPracticed: string;
    masteryLevel: string;
  };
}

export function getComingSoonStats(verbName?: string): StatsContent {
  return {
    title: `Practice Stats${verbName ? ` - ${verbName}` : ""}`,
    description:
      "We're working on bringing you detailed practice statistics and progress tracking for Passato Prossimo.",
    features: [
      "Accuracy tracking for each verb (auxiliary + past participle)",
      "Practice frequency and streaks",
      "Difficulty ratings and mastery levels",
      "Track both regular and irregular past participles",
      "Personalized verb recommendations",
      "Progress charts and achievements",
    ],
    previewStats: {
      accuracy: "--",
      timesPracticed: "--",
      masteryLevel: "--",
    },
  };
}

// Future: Add tense-specific stats functions
// export function getPassatoProssimoStats(verb: VerbInfo): StatsContent { ... }
