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
      "We're working on bringing you detailed practice statistics and progress tracking.",
    features: [
      "Accuracy tracking for each verb",
      "Practice frequency and streaks",
      "Difficulty ratings and mastery levels",
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
// export function getPresenteIndicativoStats(verb: VerbInfo): StatsContent { ... }
// export function getPassatoProssimoStats(verb: VerbInfo): StatsContent { ... }
