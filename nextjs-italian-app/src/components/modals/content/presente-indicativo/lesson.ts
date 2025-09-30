export interface LessonSection {
  title: string;
  content: string;
  examples?: string[];
}

export interface LessonContent {
  title: string;
  isIrregular: boolean;
  sections: LessonSection[];
}

export interface VerbInfo {
  infinitive: string;
  definition: string;
  conjugations: {
    io: string;
    tu: string;
    luiLei: string;
    noi: string;
    voi: string;
    loro: string;
  };
}

export function getPresenteIndicativoLesson(
  verb: VerbInfo,
  isIrregular: boolean
): LessonContent {
  return {
    title: `${isIrregular ? "Irregular" : "Regular"} Verb: ${
      verb.infinitive
    } - Complete Guide`,
    isIrregular,
    sections: [
      {
        title: isIrregular
          ? "⚡ What makes this verb irregular?"
          : "📖 About this verb",
        content: isIrregular
          ? `The verb "${verb.infinitive}" (${verb.definition}) is irregular because it doesn't follow the standard conjugation patterns. Each form must be memorized individually.`
          : `The verb "${verb.infinitive}" (${verb.definition}) is a regular verb that follows predictable conjugation patterns. Learn the pattern once and apply it to all similar verbs!`,
        examples: isIrregular
          ? [
              `Unlike regular verbs, "${verb.infinitive}" has unique forms that don't follow predictable patterns.`,
              "Irregular verbs are often the most commonly used verbs in Italian!",
            ]
          : [
              `This verb follows the standard -${verb.infinitive
                .slice(-3)
                .toUpperCase()} conjugation pattern.`,
              "Once you learn this pattern, you can conjugate hundreds of similar verbs!",
            ],
      },
      {
        title: `Complete Conjugation of "${verb.infinitive}"`,
        content: isIrregular
          ? "Here are all the present indicative forms you need to memorize:"
          : "Here are all the present indicative forms following the regular pattern:",
        examples: [
          `io ${verb.conjugations.io}`,
          `tu ${verb.conjugations.tu}`,
          `lui/lei ${verb.conjugations.luiLei}`,
          `noi ${verb.conjugations.noi}`,
          `voi ${verb.conjugations.voi}`,
          `loro ${verb.conjugations.loro}`,
        ],
      },
      {
        title: isIrregular
          ? "💡 Memory Tips for Irregular Verbs"
          : "💡 Learning Tips",
        content: isIrregular
          ? "Strategies to help you remember these unique forms:"
          : "Strategies to master this verb and the pattern:",
        examples: isIrregular
          ? [
              "Practice daily with flashcards",
              "Use the verb in sentences to build context",
              "Group similar irregular verbs together",
              "Focus on the most common forms first (io, tu, lui/lei)",
            ]
          : [
              "Identify the stem by removing the -" + verb.infinitive.slice(-3),
              "Add the appropriate ending for each pronoun",
              "Practice with other -" +
                verb.infinitive.slice(-3).toUpperCase() +
                " verbs to reinforce the pattern",
              "Use the verb in everyday sentences",
            ],
      },
      {
        title: "Usage Examples",
        content: `Common ways to use "${verb.infinitive}" in everyday Italian:`,
        examples: [
          `Io ${verb.conjugations.io} - Example: "Io ${
            verb.conjugations.io
          } molto bene" (I ${verb.definition.replace("to ", "")} very well)`,
          `Tu ${verb.conjugations.tu} - Example: "Tu ${
            verb.conjugations.tu
          }..." (You ${verb.definition.replace("to ", "")}...)`,
          `Noi ${verb.conjugations.noi} - Example: "Noi ${
            verb.conjugations.noi
          }..." (We ${verb.definition.replace("to ", "")}...)`,
        ],
      },
    ],
  };
}

// General lesson for when no specific verb is provided
export function getGeneralPresenteIndicativoLesson(): LessonContent {
  return {
    title: "Presente Indicativo - Complete Guide",
    isIrregular: false,
    sections: [
      {
        title: "What is the Presente Indicativo?",
        content:
          "The Presente Indicativo (Present Indicative) is used to express actions happening now, habitual actions, or general truths.",
        examples: [
          "Io parlo italiano (I speak Italian)",
          "Lei studia ogni giorno (She studies every day)",
        ],
      },
      {
        title: "-ARE Verbs (First Conjugation)",
        content: "Remove -are and add: -o, -i, -a, -iamo, -ate, -ano",
        examples: [
          "parlare → io parlo, tu parli, lui parla, noi parliamo, voi parlate, loro parlano",
        ],
      },
      {
        title: "-ERE Verbs (Second Conjugation)",
        content: "Remove -ere and add: -o, -i, -e, -iamo, -ete, -ono",
        examples: [
          "vendere → io vendo, tu vendi, lui vende, noi vendiamo, voi vendete, loro vendono",
        ],
      },
      {
        title: "-IRE Verbs (Third Conjugation)",
        content: "Remove -ire and add: -o, -i, -e, -iamo, -ite, -ono",
        examples: [
          "dormire → io dormo, tu dormi, lui dorme, noi dormiamo, voi dormite, loro dormono",
        ],
      },
    ],
  };
}
