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

export function getFuturoSempliceLesson(
  verb: VerbInfo,
  isIrregular: boolean
): LessonContent {
  return {
    title: `${isIrregular ? "Irregular" : "Regular"} Verb: ${
      verb.infinitive
    } - Futuro Semplice`,
    isIrregular,
    sections: [
      {
        title: "🔮 What is Futuro Semplice?",
        content: `The Futuro Semplice (simple future) is used to express actions that will happen in the future. It's equivalent to "I will do" in English. Unlike English, Italian doesn't use a helping verb - the future is expressed through verb endings.`,
        examples: [
          `"${verb.infinitive}" means "${verb.definition}"`,
          `Example: ${verb.conjugations.io} (I will ${verb.definition.replace(
            "to ",
            ""
          )})`,
          `The future tense adds certainty and formality to future actions`,
        ],
      },
      {
        title: isIrregular
          ? "⚡ Irregular Future Stem"
          : "📖 Regular Future Formation",
        content: isIrregular
          ? `The verb "${verb.infinitive}" has an irregular future stem. The stem doesn't follow the standard pattern, but once you know the irregular stem, the endings are regular: -ò, -ai, -à, -emo, -ete, -anno.`
          : `The verb "${verb.infinitive}" forms its future regularly. For -ARE and -ERE verbs, drop the final -e and add future endings. For -IRE verbs, keep the full infinitive and add endings. The first vowel of -ARE verbs changes from 'a' to 'e'.`,
        examples: isIrregular
          ? [
              `Irregular stem: ${verb.conjugations.io.replace(/ò$/, "")}`,
              `Remember: Irregular future stems must be memorized!`,
              `Common irregular verbs: essere → sarò, avere → avrò, fare → farò`,
            ]
          : [
              `-ARE verbs: parlare → parlerò (a→e change)`,
              `-ERE verbs: vendere → venderò`,
              `-IRE verbs: dormire → dormirò`,
            ],
      },
      {
        title: "🔧 Future Endings",
        content: `All verbs (regular and irregular) use the same future endings: -ò, -ai, -à, -emo, -ete, -anno. These endings are added to the future stem.`,
        examples: Object.entries(verb.conjugations).map(
          ([pronoun, conjugation]) => {
            const pronounMap: { [key: string]: string } = {
              io: "Io",
              tu: "Tu",
              luiLei: "Lui/Lei",
              noi: "Noi",
              voi: "Voi",
              loro: "Loro",
            };
            return `${pronounMap[pronoun]}: ${conjugation}`;
          }
        ),
      },
      {
        title: "💡 When to Use Futuro Semplice",
        content: `Use the Futuro Semplice for actions that will happen in the future, predictions, suppositions, and probability. In spoken Italian, the present tense is often used for near future, but Futuro Semplice adds formality and certainty.`,
        examples: [
          `Definite future: Domani andrò al cinema (Tomorrow I will go to the cinema)`,
          `Prediction: Pioverà domani (It will rain tomorrow)`,
          `Probability: Saranno le tre (It's probably three o'clock)`,
          `Time expressions: domani (tomorrow), prossima settimana (next week), fra poco (soon)`,
        ],
      },
      {
        title: "💪 Practice Tips",
        content: isIrregular
          ? `Memorize the irregular future stem first, then practice adding the regular future endings. The most common irregular verbs (essere, avere, fare, dare, stare) are used frequently, so focus on these first.`
          : `Remember the stem changes: -ARE verbs change 'a' to 'e' (parlare → parler-), while -ERE and -IRE verbs simply drop or modify the infinitive ending. Practice with time expressions to build natural fluency.`,
        examples: isIrregular
          ? [
              `Focus on memorizing the irregular stem`,
              `The endings are always regular: -ò, -ai, -à, -emo, -ete, -anno`,
              `Practice with time expressions: domani, prossimo, fra`,
            ]
          : [
              `Master the stem formation rules for each verb type`,
              `Remember: -ARE verbs change 'a' to 'e'`,
              `Use in context: "Domani parlerò italiano" (Tomorrow I will speak Italian)`,
            ],
      },
    ],
  };
}

export function getGeneralFuturoSempliceLesson(): LessonContent {
  return {
    title: "Futuro Semplice - Complete Guide",
    isIrregular: false,
    sections: [
      {
        title: "🔮 What is Futuro Semplice?",
        content:
          "The Futuro Semplice (simple future) is used to express actions that will take place in the future. It corresponds to 'will + verb' in English. Unlike English, Italian doesn't use a helping verb - the future is expressed through verb endings.",
        examples: [
          "Parlerò con lui domani (I will speak with him tomorrow)",
          "Andremo al mare (We will go to the beach)",
          "Finiranno il lavoro presto (They will finish the work soon)",
        ],
      },
      {
        title: "🔧 How to Form It",
        content:
          "The Futuro Semplice is formed by modifying the infinitive and adding future endings. The endings are the same for all verbs: -ò, -ai, -à, -emo, -ete, -anno.",
      },
      {
        title: "📝 Regular Future Formation",
        content:
          "For regular verbs, the future is formed by modifying the infinitive ending:",
        examples: [
          "-ARE verbs: Change -are to -erò (parlare → parlerò, io parlerò)",
          "-ERE verbs: Change -ere to -erò (vendere → venderò, io venderò)",
          "-IRE verbs: Change -ire to -irò (dormire → dormirò, io dormirò)",
          "Note: The 'a' in -ARE verbs changes to 'e' before adding endings",
        ],
      },
      {
        title: "📋 Future Endings (All Verbs)",
        content:
          "These endings are the same for ALL verbs, regular and irregular:",
        examples: [
          "io → -ò (parlerò)",
          "tu → -ai (parlerai)",
          "lui/lei → -à (parlerà)",
          "noi → -emo (parleremo)",
          "voi → -ete (parlerete)",
          "loro → -anno (parleranno)",
        ],
      },
      {
        title: "⚡ Common Irregular Future Stems",
        content:
          "Many common verbs have irregular future stems, but they still use the regular future endings:",
        examples: [
          "essere → sarò (I will be)",
          "avere → avrò (I will have)",
          "fare → farò (I will do/make)",
          "andare → andrò (I will go)",
          "venire → verrò (I will come)",
          "vedere → vedrò (I will see)",
          "potere → potrò (I will be able to)",
          "dovere → dovrò (I will have to)",
          "sapere → saprò (I will know)",
          "vivere → vivrò (I will live)",
        ],
      },
      {
        title: "💡 When to Use It",
        content: "The Futuro Semplice is used for various future contexts:",
        examples: [
          "Future actions: Domani andrò a Roma (Tomorrow I'll go to Rome)",
          "Predictions: Pioverà domani (It will rain tomorrow)",
          "Probability/supposition: Saranno le tre (It must be three o'clock)",
          "Promises: Ti aiuterò (I will help you)",
          "Time expressions: domani, prossimo, fra/tra, in futuro",
        ],
      },
      {
        title: "🎯 Futuro vs Present for Future",
        content:
          "In spoken Italian, the present tense is often used for near future actions, especially with time expressions. The Futuro Semplice adds formality and certainty:",
        examples: [
          "Informal/near future: Domani vado al cinema (present)",
          "Formal/distant future: L'anno prossimo andrò in Italia (future)",
          "The future tense is more common in writing and formal speech",
        ],
      },
    ],
  };
}
