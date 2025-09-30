export interface AudioContent {
  title: string;
  description: string;
  features: string[];
  hasAudioControls: boolean;
}

export function getComingSoonAudio(verbName?: string): AudioContent {
  return {
    title: `Audio & Pronunciation${verbName ? ` - ${verbName}` : ""}`,
    description:
      "We're working on bringing you native Italian pronunciation guides and audio playback.",
    features: [
      "Native speaker audio for each conjugation",
      "Syllable breakdown and stress patterns",
      "IPA (International Phonetic Alphabet) notation",
      "Common pronunciation mistakes to avoid",
      "Slow and normal speed playback",
      "Regional pronunciation variations",
    ],
    hasAudioControls: false, // Will be true when implemented
  };
}

// Future: Add tense-specific audio functions
// export function getPresenteIndicativoAudio(verb: VerbInfo): AudioContent { ... }
// export function getPassatoProssimoAudio(verb: VerbInfo): AudioContent { ... }
