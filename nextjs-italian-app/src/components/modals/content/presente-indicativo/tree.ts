export interface VerbTreeData {
  infinitive: string;
  definition: string;
  stem: string;
  isIrregular: boolean;
  examples: string[];
}

export interface VerbConjugations {
  io: string;
  tu: string;
  luiLei: string;
  noi: string;
  voi: string;
  loro: string;
}

export function getPresenteIndicativoTree(
  infinitive: string,
  definition: string,
  conjugations: VerbConjugations,
  isIrregular: boolean
): VerbTreeData {
  const stem = infinitive.slice(0, -3);

  return {
    infinitive,
    definition,
    stem,
    isIrregular,
    examples: [
      `${conjugations.io} (Io)`,
      `${conjugations.tu} (Tu)`,
      `${conjugations.luiLei} (Lui/Lei)`,
      `${conjugations.noi} (Noi)`,
      `${conjugations.voi} (Voi)`,
      `${conjugations.loro} (Loro)`,
    ],
  };
}

// Fallback for when no verb data is available
export function getDefaultPresenteIndicativoTree(
  verbType: "are" | "ere" | "ire",
  infinitive?: string,
  definition?: string
): VerbTreeData {
  const baseVerb =
    infinitive ||
    (verbType === "are"
      ? "parlare"
      : verbType === "ere"
      ? "vendere"
      : "dormire");
  const stem = baseVerb.slice(0, -3);

  return {
    infinitive: baseVerb,
    definition: definition || "example verb",
    stem,
    isIrregular: false,
    examples: [
      `${stem}o (Io)`,
      `${stem}i (Tu)`,
      `${stem}${verbType === "are" ? "a" : "e"} (Lui/Lei)`,
      `${stem}iamo (Noi)`,
      `${stem}${
        verbType === "are" ? "ate" : verbType === "ere" ? "ete" : "ite"
      } (Voi)`,
      `${stem}${verbType === "are" ? "ano" : "ono"} (Loro)`,
    ],
  };
}

export function getVerbTreeLearningTips(
  isIrregular: boolean,
  stem: string,
  verbType?: string
): string[] {
  if (isIrregular) {
    return [
      "• IRREGULAR VERB: Each form must be memorized individually",
      `• The stem ${stem} doesn't follow regular patterns`,
      "• Focus on memorizing each conjugation",
      "• Practice frequently - irregular verbs are often the most common ones",
      "• Group similar irregular verbs together for easier learning",
    ];
  } else {
    return [
      `• Focus on the stem: ${stem}`,
      "• Add the appropriate ending for each pronoun",
      verbType
        ? `• Notice the pattern for -${verbType.toUpperCase()} verbs`
        : "• Notice the regular conjugation pattern",
      "• Practice with different verbs of the same type",
    ];
  }
}
