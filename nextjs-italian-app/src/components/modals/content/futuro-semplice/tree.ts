export interface VerbTreeData {
  infinitive: string;
  definition: string;
  stem: string;
  examples: string[];
  isIrregular: boolean;
}

export function getFuturoSempliceTree(
  infinitive: string,
  definition: string,
  conjugations: { [key: string]: string },
  isIrregular: boolean
): VerbTreeData {
  // Extract the stem from the io conjugation by removing the -ò ending
  const stem = conjugations.io?.replace(/ò$/, "") || infinitive;

  const examples = [
    `io: ${conjugations.io}`,
    `tu: ${conjugations.tu}`,
    `lui/lei: ${conjugations.luiLei}`,
    `noi: ${conjugations.noi}`,
    `voi: ${conjugations.voi}`,
    `loro: ${conjugations.loro}`,
  ];

  return {
    infinitive,
    definition,
    stem,
    examples,
    isIrregular,
  };
}

export function getDefaultFuturoSempliceTree(
  verbType: "are" | "ere" | "ire",
  infinitive?: string,
  definition?: string
): VerbTreeData {
  const defaults = {
    are: {
      infinitive: infinitive || "parlare",
      definition: definition || "to speak",
      stem: "parler",
      examples: [
        "io: parlerò",
        "tu: parlerai",
        "lui/lei: parlerà",
        "noi: parleremo",
        "voi: parlerete",
        "loro: parleranno",
      ],
    },
    ere: {
      infinitive: infinitive || "vendere",
      definition: definition || "to sell",
      stem: "vender",
      examples: [
        "io: venderò",
        "tu: venderai",
        "lui/lei: venderà",
        "noi: venderemo",
        "voi: venderete",
        "loro: venderanno",
      ],
    },
    ire: {
      infinitive: infinitive || "dormire",
      definition: definition || "to sleep",
      stem: "dormir",
      examples: [
        "io: dormirò",
        "tu: dormirai",
        "lui/lei: dormirà",
        "noi: dormiremo",
        "voi: dormirete",
        "loro: dormiranno",
      ],
    },
  };

  const defaultData = defaults[verbType];

  return {
    ...defaultData,
    isIrregular: false,
  };
}

export function getVerbTreeLearningTips(
  isIrregular: boolean,
  stem: string,
  verbType: string
): string[] {
  if (isIrregular) {
    return [
      `Focus on the stem: ${stem}-`,
      `This verb has an irregular future stem that must be memorized.`,
      `All verbs use the same future endings: -ò, -ai, -à, -emo, -ete, -anno`,
      `Practice with different subjects to build fluency.`,
      `Common irregular stems: essere → sar-, avere → avr-, fare → far-`,
    ];
  }

  const typeSpecificTips: { [key: string]: string[] } = {
    are: [
      `Regular -ARE verbs change the infinitive ending from -are to -er-`,
      `Note the vowel change: parlare → parler- (a → e)`,
      `Add the future endings: -ò, -ai, -à, -emo, -ete, -anno`,
      `The stem is: ${stem}-`,
      `All -ARE verbs follow this pattern.`,
    ],
    ere: [
      `Regular -ERE verbs drop the final -e and add -er-`,
      `The infinitive ending -ere becomes -er-: vendere → vender-`,
      `Add the future endings: -ò, -ai, -à, -emo, -ete, -anno`,
      `The stem is: ${stem}-`,
      `All regular -ERE verbs follow this pattern.`,
    ],
    ire: [
      `Regular -IRE verbs change the infinitive ending from -ire to -ir-`,
      `Keep the stem and add -ir-: dormire → dormir-`,
      `Add the future endings: -ò, -ai, -à, -emo, -ete, -anno`,
      `The stem is: ${stem}-`,
      `Both regular and -isc verbs follow the same pattern in the future.`,
    ],
  };

  return (
    typeSpecificTips[verbType] || [
      "Learn the stem formation rules for your verb type.",
      "Practice with time expressions like domani, prossimo, fra.",
      "The future tense is used for predictions, promises, and future actions.",
    ]
  );
}
