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

export function getImperfettoLesson(
  verb: VerbInfo,
  isIrregular: boolean
): LessonContent {
  return {
    title: `${isIrregular ? "Irregular" : "Regular"} Verb: ${
      verb.infinitive
    } - Imperfetto`,
    isIrregular,
    sections: [
      {
        title: "⏳ What is the Imperfetto?",
        content: `The Imperfetto (imperfect) is used to describe ongoing, habitual, or repeated actions in the past. It's equivalent to "I was doing" or "I used to do" in English. Unlike Passato Prossimo, which expresses completed actions, Imperfetto paints the background of past events.`,
        examples: [
          `"${verb.infinitive}" means "${verb.definition}"`,
          `Example: ${verb.conjugations.io} (I was ${verb.definition.replace(
            "to ",
            ""
          )}ing / I used to ${verb.definition.replace("to ", "")})`,
          `The imperfetto sets the scene and describes ongoing situations`,
        ],
      },
      {
        title: isIrregular
          ? "⚡ Irregular Imperfetto Formation"
          : "📖 Regular Imperfetto Formation",
        content: isIrregular
          ? `The verb "${verb.infinitive}" has an irregular imperfetto form. Most verbs form the imperfetto regularly, but a few common verbs like essere, fare, dire, and bere have irregular stems. The endings are still regular: -vo, -vi, -va, -vamo, -vate, -vano.`
          : `The verb "${verb.infinitive}" forms its imperfetto regularly. The imperfetto is one of the most regular tenses in Italian! Simply take the infinitive stem and add the appropriate endings based on the verb type.`,
        examples: isIrregular
          ? [
              `Irregular stem: ${verb.conjugations.io.replace(/vo$/, "")}`,
              `The endings are regular: -vo, -vi, -va, -vamo, -vate, -vano`,
              `Common irregular verbs: essere → ero, fare → facevo, dire → dicevo`,
            ]
          : [
              `-ARE verbs: Remove -are, add -avo, -avi, -ava, -avamo, -avate, -avano`,
              `-ERE verbs: Remove -ere, add -evo, -evi, -eva, -evamo, -evate, -evano`,
              `-IRE verbs: Remove -ire, add -ivo, -ivi, -iva, -ivamo, -ivate, -ivano`,
            ],
      },
      {
        title: "🔧 Conjugation Pattern",
        content: `${
          isIrregular
            ? `Even with an irregular stem, the endings follow a regular pattern.`
            : `The imperfetto has completely regular endings for each verb type.`
        } Notice how the "v" appears in all forms - this is characteristic of the imperfetto.`,
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
        title: "💡 When to Use the Imperfetto",
        content: `Use the Imperfetto for: (1) Ongoing past actions - "Mentre studiavo..." (While I was studying...), (2) Habitual past actions - "Da bambino, giocavo..." (As a child, I used to play...), (3) Descriptions in the past - "Era una bella giornata" (It was a beautiful day), (4) Age, time, and weather in the past.`,
        examples: [
          `Ongoing: Mentre ${
            verb.conjugations.io
          }, squillava il telefono (While I was ${verb.definition.replace(
            "to ",
            ""
          )}ing, the phone rang)`,
          `Habitual: Da giovane ${
            verb.conjugations.io
          } ogni giorno (When young, I used to ${verb.definition.replace(
            "to ",
            ""
          )} every day)`,
          `Description: ${
            verb.conjugations.io.charAt(0).toUpperCase() +
            verb.conjugations.io.slice(1)
          } quando eri piccolo? (Did you use to ${verb.definition.replace(
            "to ",
            ""
          )} when you were little?)`,
        ],
      },
      {
        title: "🆚 Imperfetto vs Passato Prossimo",
        content: `This is one of the most important distinctions in Italian! Imperfetto = ongoing/habitual/background. Passato Prossimo = completed/specific action. Often both are used together: the imperfetto sets the scene, the passato prossimo tells what happened.`,
        examples: [
          `Imperfetto (ongoing): ${
            verb.conjugations.io.charAt(0).toUpperCase() +
            verb.conjugations.io.slice(1)
          } quando... (I was ${verb.definition.replace("to ", "")}ing when...)`,
          `Passato Prossimo (completed): Ho ${verb.definition.replace(
            "to ",
            ""
          )}to ieri (I ${verb.definition.replace("to ", "")}ed yesterday)`,
          `Together: ${
            verb.conjugations.io.charAt(0).toUpperCase() +
            verb.conjugations.io.slice(1)
          } quando è arrivato (I was ${verb.definition.replace(
            "to ",
            ""
          )}ing when he arrived)`,
        ],
      },
      {
        title: "💪 Practice Tips",
        content: isIrregular
          ? `The irregular imperfetto verbs are very common in Italian. Focus on memorizing essere (ero), fare (facevo), and dire (dicevo) first. The good news is the endings are always regular, so once you know the stem, you're set!`
          : `The imperfetto is wonderfully regular! Practice by thinking about your childhood: "Quando ero piccolo/a..." (When I was little...). Describe what you used to do, what was happening, and the background of your memories.`,
        examples: isIrregular
          ? [
              `Memorize the irregular stem: ${verb.conjugations.io.replace(
                /vo$/,
                ""
              )}-`,
              `Add regular endings: -vo, -vi, -va, -vamo, -vate, -vano`,
              `Practice with time expressions: mentre, quando, sempre, ogni giorno`,
            ]
          : [
              `Think "used to" or "was -ing" in English`,
              `Describe habits: "Ogni estate ${verb.conjugations.io}..." (Every summer I used to...)`,
              `Set the scene: "Mentre ${verb.conjugations.io}..." (While I was...ing)`,
            ],
      },
    ],
  };
}

export function getGeneralImperfettoLesson(): LessonContent {
  return {
    title: "Imperfetto - Complete Guide",
    isIrregular: false,
    sections: [
      {
        title: "⏳ What is the Imperfetto?",
        content:
          'The Imperfetto (imperfect tense) describes ongoing, habitual, or repeated actions in the past. It corresponds to "was/were doing" or "used to do" in English. It paints the background and sets the scene of past events.',
        examples: [
          "Mentre studiavo, ascoltavo musica (While I was studying, I was listening to music)",
          "Da bambino, giocavo a calcio (As a child, I used to play soccer)",
          "Faceva bel tempo (The weather was nice)",
        ],
      },
      {
        title: "🔧 How to Form It",
        content:
          "The Imperfetto is one of the most regular tenses in Italian! Take the infinitive, remove the ending, and add the imperfetto endings. The characteristic 'v' appears in all conjugations.",
      },
      {
        title: "📝 Regular Imperfetto Formation",
        content:
          "For regular verbs, formation is completely predictable based on the verb type:",
        examples: [
          "-ARE verbs: parlare → parlavo, parlavi, parlava, parlavamo, parlavate, parlavano",
          "-ERE verbs: credere → credevo, credevi, credeva, credevamo, credevate, credevano",
          "-IRE verbs: dormire → dormivo, dormivi, dormiva, dormivamo, dormivate, dormivano",
          "Notice the 'v' in all forms - this is the key marker of imperfetto",
        ],
      },
      {
        title: "📋 Imperfetto Endings",
        content:
          "Memorize these endings - they're always the same for all verbs (regular and most irregular):",
        examples: [
          "-ARE: -avo, -avi, -ava, -avamo, -avate, -avano",
          "-ERE: -evo, -evi, -eva, -evamo, -evate, -evano",
          "-IRE: -ivo, -ivi, -iva, -ivamo, -ivate, -ivano",
        ],
      },
      {
        title: "⚡ Irregular Imperfetto Verbs",
        content:
          "Very few verbs are irregular in the imperfetto! The main ones to memorize are:",
        examples: [
          "essere → ero, eri, era, eravamo, eravate, erano (to be)",
          "fare → facevo, facevi, faceva, facevamo, facevate, facevano (to do/make)",
          "dire → dicevo, dicevi, diceva, dicevamo, dicevate, dicevano (to say)",
          "bere → bevevo, bevevi, beveva, bevevamo, bevevate, bevevano (to drink)",
          "tradurre → traducevo (to translate), porre → ponevo (to place)",
        ],
      },
      {
        title: "💡 When to Use It",
        content: "Use the Imperfetto for specific contexts in the past:",
        examples: [
          "1. Ongoing actions: Mentre mangiavo, guardavo la TV (While I was eating, I was watching TV)",
          "2. Habitual actions: Ogni estate andavo al mare (Every summer I used to go to the beach)",
          "3. Descriptions: La casa era grande e bella (The house was big and beautiful)",
          "4. Age, time, weather: Aveva 20 anni, era mezzogiorno, pioveva (He was 20, it was noon, it was raining)",
          "5. Mental/emotional states: Pensavo che..., Volevo..., Credevo... (I thought..., I wanted..., I believed...)",
        ],
      },
      {
        title: "🆚 Imperfetto vs Passato Prossimo",
        content:
          "This is crucial! These two past tenses work together. Imperfetto = background/ongoing. Passato Prossimo = completed action/foreground.",
        examples: [
          "Imperfetto sets the scene: Mentre studiavo... (While I was studying...)",
          "Passato Prossimo completes it: ...è arrivato Marco (...Marco arrived)",
          "Together: Mentre studiavo, è arrivato Marco (While I was studying, Marco arrived)",
          "Habitual (Imp.): Andavo in palestra ogni giorno (I used to go to the gym daily)",
          "Specific (PP): Ieri sono andato in palestra (Yesterday I went to the gym)",
        ],
      },
      {
        title: "⏰ Time Expressions",
        content: "Certain time expressions signal the imperfetto:",
        examples: [
          "mentre (while), quando (when), sempre (always)",
          "ogni giorno/anno/estate (every day/year/summer)",
          "da bambino/giovane (as a child/youth)",
          "di solito, normalmente (usually, normally)",
          "una volta (once upon a time)",
        ],
      },
    ],
  };
}
