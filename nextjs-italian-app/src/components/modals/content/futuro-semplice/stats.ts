export interface StatsContent {
  title: string;
  description: string;
  tips: string[];
}

export function getFuturoSempliceStats(): StatsContent {
  return {
    title: "Practice Statistics - Futuro Semplice",
    description:
      "Track your progress with Futuro Semplice conjugations. Statistics and analytics coming soon!",
    tips: [
      "📊 Practice statistics feature coming soon!",
      "Track your accuracy across all verb types",
      "Identify which future conjugations need more practice",
      "Set goals and monitor your improvement over time",
    ],
  };
}
