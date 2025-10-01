export interface AudioContent {
  title: string;
  description: string;
  pronunciationGuide: {
    title: string;
    points: string[];
  };
  examples: {
    verb: string;
    conjugation: string;
    pronunciation: string;
    meaning: string;
  }[];
}

export function getImperfettoAudio(
  verb: string,
  conjugations: {
    io: string;
    tu: string;
    luiLei: string;
    noi: string;
    voi: string;
    loro: string;
  }
): AudioContent {
  return {
    title: `Pronunciation: ${verb} - Imperfetto`,
    description: `Learn how to pronounce the imperfetto conjugations of "${verb}". The imperfetto has a distinctive 'v' sound in all forms, which gives it a flowing, continuous quality - perfect for expressing ongoing past actions!`,
    pronunciationGuide: {
      title: "🔊 Pronunciation Tips",
      points: [
        "The 'v' sound is consistent across all imperfetto forms",
        "Stress typically falls on the third-to-last syllable: par-LÀ-vo, cre-DÉ-vo, dor-MÌ-vo",
        "-avo endings: 'ah-voh' - open 'a' sound followed by 'v' and 'oh'",
        "-evo endings: 'eh-voh' - like 'bet' + 'voh'",
        "-ivo endings: 'ee-voh' - like 'bee' + 'voh'",
        "The double 'v' appears in 'avevo', 'avevi', etc. - pronounce both clearly",
      ],
    },
    examples: [
      {
        verb,
        conjugation: conjugations.io,
        pronunciation: getPronunciation(conjugations.io),
        meaning: `I was/used to (${verb})`,
      },
      {
        verb,
        conjugation: conjugations.tu,
        pronunciation: getPronunciation(conjugations.tu),
        meaning: `You were/used to (${verb})`,
      },
      {
        verb,
        conjugation: conjugations.luiLei,
        pronunciation: getPronunciation(conjugations.luiLei),
        meaning: `He/She was/used to (${verb})`,
      },
      {
        verb,
        conjugation: conjugations.noi,
        pronunciation: getPronunciation(conjugations.noi),
        meaning: `We were/used to (${verb})`,
      },
      {
        verb,
        conjugation: conjugations.voi,
        pronunciation: getPronunciation(conjugations.voi),
        meaning: `You all were/used to (${verb})`,
      },
      {
        verb,
        conjugation: conjugations.loro,
        pronunciation: getPronunciation(conjugations.loro),
        meaning: `They were/used to (${verb})`,
      },
    ],
  };
}

function getPronunciation(conjugation: string): string {
  // Simple pronunciation guide - this is a basic implementation
  // In a real app, you might want more sophisticated phonetic transcription
  const syllables = conjugation
    .replace(/([aeiou])/gi, "$1-")
    .replace(/-+/g, "-")
    .replace(/-$/g, "");

  // Special cases for imperfetto endings
  if (conjugation.endsWith("avo")) {
    return syllables.replace(/avo$/, "AH-voh");
  } else if (conjugation.endsWith("avi")) {
    return syllables.replace(/avi$/, "AH-vee");
  } else if (conjugation.endsWith("ava")) {
    return syllables.replace(/ava$/, "AH-vah");
  } else if (conjugation.endsWith("avamo")) {
    return syllables.replace(/avamo$/, "ah-VAH-moh");
  } else if (conjugation.endsWith("avate")) {
    return syllables.replace(/avate$/, "ah-VAH-teh");
  } else if (conjugation.endsWith("avano")) {
    return syllables.replace(/avano$/, "AH-vah-noh");
  } else if (conjugation.endsWith("evo")) {
    return syllables.replace(/evo$/, "EH-voh");
  } else if (conjugation.endsWith("evi")) {
    return syllables.replace(/evi$/, "EH-vee");
  } else if (conjugation.endsWith("eva")) {
    return syllables.replace(/eva$/, "EH-vah");
  } else if (conjugation.endsWith("evamo")) {
    return syllables.replace(/evamo$/, "eh-VAH-moh");
  } else if (conjugation.endsWith("evate")) {
    return syllables.replace(/evate$/, "eh-VAH-teh");
  } else if (conjugation.endsWith("evano")) {
    return syllables.replace(/evano$/, "EH-vah-noh");
  } else if (conjugation.endsWith("ivo")) {
    return syllables.replace(/ivo$/, "EE-voh");
  } else if (conjugation.endsWith("ivi")) {
    return syllables.replace(/ivi$/, "EE-vee");
  } else if (conjugation.endsWith("iva")) {
    return syllables.replace(/iva$/, "EE-vah");
  } else if (conjugation.endsWith("ivamo")) {
    return syllables.replace(/ivamo$/, "ee-VAH-moh");
  } else if (conjugation.endsWith("ivate")) {
    return syllables.replace(/ivate$/, "ee-VAH-teh");
  } else if (conjugation.endsWith("ivano")) {
    return syllables.replace(/ivano$/, "EE-vah-noh");
  }

  return syllables.toUpperCase();
}

export function getGeneralImperfettoAudio(): AudioContent {
  return {
    title: "Imperfetto Pronunciation Guide",
    description:
      "Master the pronunciation of the Imperfetto tense. The characteristic 'v' sound in all forms creates a flowing rhythm that reflects the ongoing nature of the imperfetto.",
    pronunciationGuide: {
      title: "🔊 General Pronunciation Rules",
      points: [
        "The 'v' sound is the signature of the imperfetto - it appears in every single conjugation",
        "Stress patterns: -avo, -evo, -ivo forms are stressed on the 'a', 'e', 'i' before the 'v'",
        "-avamo, -evamo, -ivamo: Stress shifts to the second 'a' (VAH)",
        "Double consonants like 'vv' in 'avevo' should be clearly pronounced",
        "The endings create a rhythmic pattern: -vo, -vi, -va, -vamo, -vate, -vano",
        "Practice the continuous 'v' sound to capture the ongoing sense of imperfetto",
      ],
    },
    examples: [
      {
        verb: "parlare",
        conjugation: "parlavo",
        pronunciation: "par-LAH-voh",
        meaning: "I was speaking / I used to speak",
      },
      {
        verb: "credere",
        conjugation: "credevo",
        pronunciation: "kreh-DEH-voh",
        meaning: "I was believing / I used to believe",
      },
      {
        verb: "dormire",
        conjugation: "dormivo",
        pronunciation: "dor-MEE-voh",
        meaning: "I was sleeping / I used to sleep",
      },
      {
        verb: "essere",
        conjugation: "ero",
        pronunciation: "EH-roh",
        meaning: "I was (irregular)",
      },
      {
        verb: "fare",
        conjugation: "facevo",
        pronunciation: "fah-CHEH-voh",
        meaning: "I was doing / I used to do",
      },
      {
        verb: "dire",
        conjugation: "dicevo",
        pronunciation: "dee-CHEH-voh",
        meaning: "I was saying / I used to say",
      },
    ],
  };
}
