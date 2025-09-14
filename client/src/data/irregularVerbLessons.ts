export interface IrregularVerbLesson {
  infinitive: string;
  etymology: string;
  memoryTricks: string[];
  commonPhrases: string[];
  learnerPitfalls: string[];
}

export interface RegularVerbLesson {
  patternExplanation: string;
  memoryTricks: string[];
  commonPhrases: string[];
  learnerPitfalls: string[];
  conjugationExamples: {
    are: { stem: string; infinitive: string; conjugations: string[] };
    ere: { stem: string; infinitive: string; conjugations: string[] };
    ire: { stem: string; infinitive: string; conjugations: string[] };
  };
}

export const irregularVerbLessons: { [key: string]: IrregularVerbLesson } = {
  andare: {
    infinitive: "andare",
    etymology: "From Latin 'ambulare' (to walk), but merged with Latin 'vadere' (to go). The 'vad-' forms come from 'vadere', explaining why 'io vado' doesn't look like 'andare'!",
    memoryTricks: [
      "Remember: 'io **V**ADO' - I **go** with a **V**!",
      "'noi andiamo' keeps the original 'and-' root",
      "Think: 'They **V**ANNO go' = 'loro vanno'"
    ],
    commonPhrases: [
      "Vado a casa - I'm going home",
      "Dove vai? - Where are you going?",
      "Andiamo! - Let's go!"
    ],
    learnerPitfalls: [
      "Don't say 'io ando' - it's 'io vado'",
      "'loro vanno' has double 'n', not 'vano'",
      "Remember 'andiamo' keeps the 'and-' root"
    ]
  },

  dare: {
    infinitive: "dare",
    etymology: "From Latin 'dare' (to give). One of the few verbs that kept its Latin form almost unchanged, but developed irregular conjugations over time.",
    memoryTricks: [
      "'io **D**O' - I **D**o give (very short!)",
      "'dà' (he gives) has an accent to distinguish from 'da' (from)",
      "'loro danno' - they give damage (danno = damage)"
    ],
    commonPhrases: [
      "Ti do una mano - I'll give you a hand",
      "Dai! - Come on! (literally: give!)",
      "Cosa danno al cinema? - What's playing at the cinema?"
    ],
    learnerPitfalls: [
      "Don't forget the accent: 'lui dà' not 'lui da'",
      "'loro danno' has double 'n'",
      "Very short forms: 'io do', 'tu dai'"
    ]
  },

  stare: {
    infinitive: "stare",
    etymology: "From Latin 'stare' (to stand). Related to English 'state' and 'statue'. The idea evolved from 'standing' to 'staying/being in a place'.",
    memoryTricks: [
      "'io **ST**O' - I **ST**and/stay",
      "'stiamo' - we **ST**ay together",
      "'stanno' - they're **ST**anding there"
    ],
    commonPhrases: [
      "Come stai? - How are you?",
      "Sto bene - I'm doing well",
      "Stiamo a casa - We're staying home"
    ],
    learnerPitfalls: [
      "Don't confuse with 'essere' - 'stare' is for temporary states",
      "'loro stanno' has double 'n'",
      "Use 'stare' for ongoing actions: 'sto mangiando'"
    ]
  },

  cercare: {
    infinitive: "cercare",
    etymology: "From Latin 'circare' (to go around in circles). The 'c' changes to 'ch' before 'i' and 'e' to maintain the hard 'k' sound.",
    memoryTricks: [
      "'cerco' sounds like 'circa' (around) - searching around!",
      "'cerchi' - you search with **CH**eck",
      "Hard 'k' sound always: cerco, cerchi, cerca"
    ],
    commonPhrases: [
      "Cerco lavoro - I'm looking for work",
      "Che cosa cerchi? - What are you looking for?",
      "Cerchiamo una soluzione - We're seeking a solution"
    ],
    learnerPitfalls: [
      "Always 'ch' before 'i': 'tu cerchi' not 'tu cerci'",
      "Keep the hard 'k' sound throughout",
      "Don't drop the 'h': 'cerchiamo' not 'cerciamo'"
    ]
  },

  leggere: {
    infinitive: "leggere",
    etymology: "From Latin 'legere' (to read, to choose). The double 'g' softens before 'i' and 'e', creating the 'j' sound in 'leggi'.",
    memoryTricks: [
      "'leggo' - double 'g' like in 'egg' but soft",
      "'leggi' sounds like 'Leh-jee' - soft 'g'",
      "Think 'legal' documents need **L**E**GG**ing (reading)"
    ],
    commonPhrases: [
      "Leggo un libro - I'm reading a book",
      "Leggi il giornale? - Do you read the newspaper?",
      "Leggete insieme - You all read together"
    ],
    learnerPitfalls: [
      "Double 'g' makes soft 'j' sound before 'i' and 'e'",
      "Don't say 'lego' - it's 'leggo' with double 'g'",
      "'leggiamo' keeps the soft sound"
    ]
  },

  sapere: {
    infinitive: "sapere",
    etymology: "From Latin 'sapere' (to taste, to have good taste, to know). Originally meant 'to taste' - you 'taste' knowledge!",
    memoryTricks: [
      "'io **S**O' - **S**imple **O**ne letter = I know",
      "'sai' rhymes with 'hai' (you have) - you have knowledge",
      "'sappiamo' - we **S**hare **APP**reciated wisdom"
    ],
    commonPhrases: [
      "Non lo so - I don't know",
      "Sai parlare inglese? - Do you know how to speak English?",
      "Sapete la risposta? - Do you know the answer?"
    ],
    learnerPitfalls: [
      "Very short: 'io so' not 'io sapo'",
      "Don't confuse with 'conoscere' - 'sapere' is for facts/skills",
      "'sappiamo' has double 'p'"
    ]
  },

  rimanere: {
    infinitive: "rimanere",
    etymology: "From Latin 'remanere' (to remain). The 'n' changes to 'ng' in some forms due to sound evolution, like 'rimango'.",
    memoryTricks: [
      "'rim**ANG**o' - I remain at an **ANG**le",
      "'rimani' - you remain, sounds like 'remain-ee'",
      "'rimangono' - they remain **GONE** (but actually staying!)"
    ],
    commonPhrases: [
      "Rimango a casa - I'm staying home",
      "Rimani qui - Stay here",
      "Rimangono in Italia - They're remaining in Italy"
    ],
    learnerPitfalls: [
      "'io rimango' with 'ng' sound, not 'rimanno'",
      "'loro rimangono' - double syllable 'man-go-no'",
      "Don't say 'rimanio' - it's 'rimango'"
    ]
  },

  venire: {
    infinitive: "venire",
    etymology: "From Latin 'venire' (to come). Related to English 'venue' and 'advent'. The 'n' becomes 'ng' in 'vengo' due to sound changes.",
    memoryTricks: [
      "'vengo' - I come with 'ng' like in 'ring'",
      "'vieni' sounds like 'Vienna' - come to Vienna!",
      "'vengono' - they come **GONE** to here"
    ],
    commonPhrases: [
      "Vengo subito - I'm coming right away",
      "Vieni qui! - Come here!",
      "Vengono domani - They're coming tomorrow"
    ],
    learnerPitfalls: [
      "'io vengo' with 'ng', not 'venio'",
      "'loro vengono' not 'venono'",
      "Don't confuse with 'andare' - opposite directions!"
    ]
  },

  uscire: {
    infinitive: "uscire",
    etymology: "From Latin 'exire' (to go out). The 'sc' creates a 'sh' sound, and becomes just 's' in some forms like 'esco'.",
    memoryTricks: [
      "'esco' - **E**xit and **S**lip **C**arefully **O**ut",
      "'esci' - you **E**xit **S**oon **C**arefully **I**ndeed",
      "'usciamo' keeps the 'sc' = 'sh' sound"
    ],
    commonPhrases: [
      "Esco di casa - I'm leaving the house",
      "Esci stasera? - Are you going out tonight?",
      "Usciamo insieme - Let's go out together"
    ],
    learnerPitfalls: [
      "'io esco' not 'uscio' - drops the 'u'",
      "'tu esci' not 'tusci' - remember the pattern",
      "'usciamo' keeps all letters with 'sh' sound"
    ]
  },

  dire: {
    infinitive: "dire",
    etymology: "From Latin 'dicere' (to say). Heavily contracted over time - 'dicere' became 'dire', but kept some 'dic-' forms like 'dico'.",
    memoryTricks: [
      "'dico' keeps the Latin 'dic-' (think 'dictate')",
      "'dici' - you **D**o **I**ndeed **C**ommunicate **I**deas",
      "'diciamo' - we **DIC**tate **I**mportant **AM**ounts **O**f info"
    ],
    commonPhrases: [
      "Che cosa dici? - What are you saying?",
      "Dico sempre la verità - I always tell the truth",
      "Diciamo domani - Let's say tomorrow"
    ],
    learnerPitfalls: [
      "'io dico' with 'c', not 'io diro'",
      "'dite' is very short (you all say)",
      "Don't say 'dicono' - it's 'dicono' (they say)"
    ]
  }
};

export const regularVerbLesson: RegularVerbLesson = {
  patternExplanation: "Regular Italian verbs follow predictable patterns based on their infinitive endings. The magic lies in recognizing the STEM (infinitive minus ending) + ENDING system that works across all three verb families.",

  conjugationExamples: {
    are: {
      stem: "parl",
      infinitive: "parlare",
      conjugations: ["parlo", "parli", "parla", "parliamo", "parlate", "parlano"]
    },
    ere: {
      stem: "cred",
      infinitive: "credere",
      conjugations: ["credo", "credi", "crede", "crediamo", "credete", "credono"]
    },
    ire: {
      stem: "dorm",
      infinitive: "dormire",
      conjugations: ["dormo", "dormi", "dorme", "dormiamo", "dormite", "dormono"]
    }
  },

  memoryTricks: [
    "**ARE**: 'A-R-E' sounds like 'ANO' - remember the 'loro' ending!",
    "**ERE**: Think 'E-R-E' leads to 'ONO' - they end similar!",
    "**IRE**: 'I-R-E' uses 'ONO' too, but 'voi' gets 'ITE' (sounds like 'bite')",
    "**Shared pattern**: io/tu/lui forms are nearly identical across all types",
    "**The '3-2-1' rule**: 3 singular forms are short, noi/voi are longer, loro is longest"
  ],

  commonPhrases: [
    "**ARE verbs**: Parlo italiano - I speak Italian",
    "**ARE verbs**: Mangiamo pizza - We eat pizza",
    "**ARE verbs**: Studiate molto? - Do you all study a lot?",
    "**ERE verbs**: Credi in me? - Do you believe in me?",
    "**ERE verbs**: Vendono libri - They sell books",
    "**IRE verbs**: Dormo bene - I sleep well",
    "**IRE verbs**: Partite domani - You all are leaving tomorrow"
  ],

  learnerPitfalls: [
    "Don't mix up **-ete** (ERE verbs) and **-ite** (IRE verbs) for 'voi'",
    "**-ano** vs **-ono**: ARE verbs use 'ano', ERE/IRE use 'ono'",
    "Remember to **drop the entire ending** (-are/-ere/-ire), not just the 'e'",
    "**Silent 'h'** in 'noi' forms: 'parliamo' not 'parlaimo'",
    "**Double letters** in 'voi': 'parlate', 'credete', 'dormite' - don't drop letters!"
  ]
};