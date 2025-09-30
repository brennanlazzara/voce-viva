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
  auxiliaryVerb?: string;
}

export function getPassatoProssimoLesson(
  verb: VerbInfo,
  isIrregular: boolean
): LessonContent {
  const auxiliary = verb.auxiliaryVerb || "avere";
  const pastParticiple = verb.conjugations.io.split(" ")[1]; // Extract past participle from "ho parlato"

  return {
    title: `${isIrregular ? "Irregular" : "Regular"} Verb: ${
      verb.infinitive
    } - Passato Prossimo`,
    isIrregular,
    sections: [
      {
        title: "📅 What is Passato Prossimo?",
        content: `The Passato Prossimo is the most common past tense in Italian. It's used to describe completed actions in the past, similar to English "I have done" or "I did". It's formed with an auxiliary verb (avere or essere) + past participle.`,
        examples: [
          `"${verb.infinitive}" uses the auxiliary verb "${auxiliary}"`,
          `Past participle: ${pastParticiple}`,
          `Example: ${verb.conjugations.io} (I ${verb.definition.replace(
            "to ",
            ""
          )}ed)`,
        ],
      },
      {
        title: isIrregular
          ? "⚡ Irregular Past Participle"
          : "📖 Regular Past Participle",
        content: isIrregular
          ? `The verb "${verb.infinitive}" has an irregular past participle: "${pastParticiple}". This doesn't follow the standard -ato, -uto, or -ito patterns and must be memorized.`
          : `The verb "${verb.infinitive}" forms its past participle regularly by replacing the infinitive ending with the appropriate past participle ending.`,
        examples: isIrregular
          ? [
              `Irregular form: ${pastParticiple}`,
              `Remember: Irregular past participles are very common in Italian!`,
              `The auxiliary verb still conjugates regularly.`,
            ]
          : [
              `-are verbs → -ato (parlare → parlato)`,
              `-ere verbs → -uto (vendere → venduto)`,
              `-ire verbs → -ito (dormire → dormito)`,
            ],
      },
      {
        title: "🔧 How to conjugate",
        content: `To form the Passato Prossimo, conjugate the auxiliary verb "${auxiliary}" in the presente indicativo, then add the past participle "${pastParticiple}".`,
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
        title: "💡 Usage Tips",
        content: `The Passato Prossimo is used for actions completed in the recent or distant past. Think of it as "I have done" or "I did" in English.`,
        examples: [
          `Use with time expressions: oggi (today), ieri (yesterday), stamattina (this morning)`,
          auxiliary === "essere"
            ? `⚠️ With essere verbs, the past participle agrees with the subject!`
            : `With avere verbs, the past participle doesn't change.`,
          `Most common past tense in spoken Italian`,
        ],
      },
      {
        title:
          auxiliary === "essere" ? "⚠️ Agreement Rules" : "💪 Practice Tips",
        content:
          auxiliary === "essere"
            ? `Since "${
                verb.infinitive
              }" uses "essere" as auxiliary, the past participle must agree in gender and number with the subject. Masculine singular: ${pastParticiple}, Feminine singular: ${pastParticiple.replace(
                /o$/,
                "a"
              )}, Masculine plural: ${pastParticiple.replace(
                /o$/,
                "i"
              )}, Feminine plural: ${pastParticiple.replace(/o$/, "e")}.`
            : `Practice conjugating the auxiliary verb "${auxiliary}" separately, then combine it with the past participle. Master the pattern and you can use it with any ${
                isIrregular ? "verb" : "regular verb"
              }!`,
        examples:
          auxiliary === "essere"
            ? [
                `Lui è ${pastParticiple} (he went)`,
                `Lei è ${pastParticiple.replace(/o$/, "a")} (she went)`,
                `Loro sono ${pastParticiple.replace(
                  /o$/,
                  "i"
                )} (they went - masc.)`,
              ]
            : [
                `Memorize the ${
                  isIrregular ? "irregular" : "regular"
                } past participle: ${pastParticiple}`,
                `Practice with different subjects`,
                `Use in sentences to build fluency`,
              ],
      },
    ],
  };
}

export function getGeneralPassatoProssimoLesson(): LessonContent {
  return {
    title: "Passato Prossimo - Complete Guide",
    isIrregular: false,
    sections: [
      {
        title: "📅 What is Passato Prossimo?",
        content:
          "The Passato Prossimo (present perfect) is the most commonly used past tense in Italian. It describes completed actions in the past and corresponds to both 'I have done' and 'I did' in English.",
      },
      {
        title: "🔧 How to Form It",
        content:
          "The Passato Prossimo is a compound tense formed with: AUXILIARY VERB (avere or essere in presente) + PAST PARTICIPLE",
        examples: [
          "Ho parlato (I spoke/have spoken)",
          "Sono andato (I went/have gone)",
          "Abbiamo mangiato (We ate/have eaten)",
        ],
      },
      {
        title: "⚖️ Avere vs Essere",
        content:
          "Most verbs use 'avere' as auxiliary. Movement verbs, reflexive verbs, and some state-of-being verbs use 'essere'.",
        examples: [
          "AVERE: parlare, mangiare, leggere, dormire, fare",
          "ESSERE: andare, venire, restare, essere, nascere",
          "Remember: With essere, the past participle agrees with the subject!",
        ],
      },
      {
        title: "📝 Regular Past Participles",
        content:
          "Regular verbs form their past participles by replacing the infinitive ending:",
        examples: [
          "-ARE verbs → -ATO: parlare → parlato",
          "-ERE verbs → -UTO: vendere → venduto",
          "-IRE verbs → -ITO: dormire → dormito",
        ],
      },
      {
        title: "⚡ Common Irregular Past Participles",
        content:
          "Many common verbs have irregular past participles that must be memorized:",
        examples: [
          "fare → fatto (done/made)",
          "dire → detto (said)",
          "scrivere → scritto (written)",
          "leggere → letto (read)",
          "essere → stato (been)",
          "venire → venuto (come)",
        ],
      },
      {
        title: "💡 When to Use It",
        content:
          "Use Passato Prossimo for actions completed in the recent or distant past, especially when:",
        examples: [
          "Actions have a clear beginning and end",
          "Talking about today or recent events (stamattina, ieri)",
          "In spoken conversation (most common past tense)",
          "Comparing with imperfetto: Passato Prossimo = completed action, Imperfetto = ongoing/repeated action",
        ],
      },
    ],
  };
}
