import mongoose from "mongoose";
import dotenv from "dotenv";
import Verb from "./models/Verb";
import Pronoun from "./models/Pronoun";
import Lesson from "./models/Lesson";
import Phrase from "./models/Phrase";

dotenv.config();

const verbData = {
  areVerbs: [
    {
      infinitive: "parlare",
      definition: "to speak",
      auxiliaryVerb: "avere",
      regularPresenteIndicativo: true,
      regularPassatoProssimo: true,
    },
    {
      infinitive: "mangiare",
      definition: "to eat",
      auxiliaryVerb: "avere",
      regularPresenteIndicativo: true,
      regularPassatoProssimo: true,
    },
    {
      infinitive: "lavorare",
      definition: "to work",
      auxiliaryVerb: "avere",
      regularPresenteIndicativo: true,
      regularPassatoProssimo: true,
    },
    {
      infinitive: "guardare",
      definition: "to watch",
      auxiliaryVerb: "avere",
      regularPresenteIndicativo: true,
      regularPassatoProssimo: true,
    },
    {
      infinitive: "pensare",
      definition: "to think",
      auxiliaryVerb: "avere",
      regularPresenteIndicativo: true,
      regularPassatoProssimo: true,
    },
    {
      infinitive: "trovare",
      definition: "to find",
      auxiliaryVerb: "avere",
      regularPresenteIndicativo: true,
      regularPassatoProssimo: true,
    },
    {
      infinitive: "aspettare",
      definition: "to wait",
      auxiliaryVerb: "avere",
      regularPresenteIndicativo: true,
      regularPassatoProssimo: true,
    },
    {
      infinitive: "comprare",
      definition: "to buy",
      auxiliaryVerb: "avere",
      regularPresenteIndicativo: true,
      regularPassatoProssimo: true,
    },
    {
      infinitive: "chiamare",
      definition: "to call",
      auxiliaryVerb: "avere",
      regularPresenteIndicativo: true,
      regularPassatoProssimo: true,
    },
    {
      infinitive: "studiare",
      definition: "to study",
      auxiliaryVerb: "avere",
      regularPresenteIndicativo: true,
      regularPassatoProssimo: true,
    },
    {
      infinitive: "amare",
      definition: "to love",
      auxiliaryVerb: "avere",
      regularPresenteIndicativo: true,
      regularPassatoProssimo: true,
    },
    {
      infinitive: "portare",
      definition: "to bring",
      auxiliaryVerb: "avere",
      regularPresenteIndicativo: true,
      regularPassatoProssimo: true,
    },
    {
      infinitive: "arrivare",
      definition: "to arrive",
      auxiliaryVerb: "essere",
      regularPresenteIndicativo: true,
      regularPassatoProssimo: true,
    },
    {
      infinitive: "entrare",
      definition: "to enter",
      auxiliaryVerb: "essere",
      regularPresenteIndicativo: true,
      regularPassatoProssimo: true,
    },
    {
      infinitive: "lasciare",
      definition: "to leave",
      auxiliaryVerb: "avere",
      regularPresenteIndicativo: true,
      regularPassatoProssimo: true,
    },
    {
      infinitive: "giocare",
      definition: "to play",
      auxiliaryVerb: "avere",
      regularPresenteIndicativo: true,
      regularPassatoProssimo: true,
    },
    {
      infinitive: "ascoltare",
      definition: "to listen",
      auxiliaryVerb: "avere",
      regularPresenteIndicativo: true,
      regularPassatoProssimo: true,
    },
    {
      infinitive: "camminare",
      definition: "to walk",
      auxiliaryVerb: "avere",
      regularPresenteIndicativo: true,
      regularPassatoProssimo: true,
    },
    {
      infinitive: "aiutare",
      definition: "to help",
      auxiliaryVerb: "avere",
      regularPresenteIndicativo: true,
      regularPassatoProssimo: true,
    },
    {
      infinitive: "usare",
      definition: "to use",
      auxiliaryVerb: "avere",
      regularPresenteIndicativo: true,
      regularPassatoProssimo: true,
    },
    {
      infinitive: "cantare",
      definition: "to sing",
      auxiliaryVerb: "avere",
      regularPresenteIndicativo: true,
      regularPassatoProssimo: true,
    },
    {
      infinitive: "pagare",
      definition: "to pay",
      auxiliaryVerb: "avere",
      regularPresenteIndicativo: true,
      regularPassatoProssimo: true,
    },
    {
      infinitive: "preparare",
      definition: "to prepare",
      auxiliaryVerb: "avere",
      regularPresenteIndicativo: true,
      regularPassatoProssimo: true,
    },
    {
      infinitive: "cercare",
      definition: "to search",
      auxiliaryVerb: "avere",
      regularPresenteIndicativo: false,
      regularPassatoProssimo: true,
      conjugations: {
        presenteIndicativo: {
          io: "cerco",
          tu: "cerchi",
          luiLei: "cerca",
          noi: "cerchiamo",
          voi: "cercate",
          loro: "cercano",
        },
      },
    },
    {
      infinitive: "incontrare",
      definition: "to meet",
      auxiliaryVerb: "avere",
      regularPresenteIndicativo: true,
      regularPassatoProssimo: true,
    },
    {
      infinitive: "tornare",
      definition: "to return",
      auxiliaryVerb: "essere",
      regularPresenteIndicativo: true,
      regularPassatoProssimo: true,
    },
    {
      infinitive: "mandare",
      definition: "to send",
      auxiliaryVerb: "avere",
      regularPresenteIndicativo: true,
      regularPassatoProssimo: true,
    },
    {
      infinitive: "passare",
      definition: "to pass",
      auxiliaryVerb: "avere",
      regularPresenteIndicativo: true,
      regularPassatoProssimo: true,
    },
    {
      infinitive: "viaggiare",
      definition: "to travel",
      auxiliaryVerb: "avere",
      regularPresenteIndicativo: true,
      regularPassatoProssimo: true,
    },
    {
      infinitive: "cominciare",
      definition: "to begin",
      auxiliaryVerb: "avere",
      regularPresenteIndicativo: true,
      regularPassatoProssimo: true,
    },
    {
      infinitive: "abitare",
      definition: "to live (reside)",
      auxiliaryVerb: "avere",
      regularPresenteIndicativo: true,
      regularPassatoProssimo: true,
    },
    {
      infinitive: "suonare",
      definition: "to play (an instrument)",
      auxiliaryVerb: "avere",
      regularPresenteIndicativo: true,
      regularPassatoProssimo: true,
    },
    {
      infinitive: "imparare",
      definition: "to learn",
      auxiliaryVerb: "avere",
      regularPresenteIndicativo: true,
      regularPassatoProssimo: true,
    },
    {
      infinitive: "insegnare",
      definition: "to teach",
      auxiliaryVerb: "avere",
      regularPresenteIndicativo: true,
      regularPassatoProssimo: true,
    },
    {
      infinitive: "ricordare",
      definition: "to remember",
      auxiliaryVerb: "avere",
      regularPresenteIndicativo: true,
      regularPassatoProssimo: true,
    },
    {
      infinitive: "dimenticare",
      definition: "to forget",
      auxiliaryVerb: "avere",
      regularPresenteIndicativo: true,
      regularPassatoProssimo: true,
    },
    {
      infinitive: "cambiare",
      definition: "to change",
      auxiliaryVerb: "avere",
      regularPresenteIndicativo: true,
      regularPassatoProssimo: true,
    },
    {
      infinitive: "provare",
      definition: "to try",
      auxiliaryVerb: "avere",
      regularPresenteIndicativo: true,
      regularPassatoProssimo: true,
    },
    {
      infinitive: "ordinare",
      definition: "to order",
      auxiliaryVerb: "avere",
      regularPresenteIndicativo: true,
      regularPassatoProssimo: true,
    },
    {
      infinitive: "cucinare",
      definition: "to cook",
      auxiliaryVerb: "avere",
      regularPresenteIndicativo: true,
      regularPassatoProssimo: true,
    },
    {
      infinitive: "andare",
      definition: "to go",
      auxiliaryVerb: "essere",
      regularPresenteIndicativo: false,
      regularPassatoProssimo: true,
      conjugations: {
        presenteIndicativo: {
          io: "vado",
          tu: "vai",
          luiLei: "va",
          noi: "andiamo",
          voi: "andate",
          loro: "vanno",
        },
      },
    },
    {
      infinitive: "dare",
      definition: "to give",
      auxiliaryVerb: "avere",
      regularPresenteIndicativo: false,
      regularPassatoProssimo: true,
      conjugations: {
        presenteIndicativo: {
          io: "do",
          tu: "dai",
          luiLei: "dà",
          noi: "diamo",
          voi: "date",
          loro: "danno",
        },
      },
    },
    {
      infinitive: "stare",
      definition: "to stay",
      auxiliaryVerb: "essere",
      regularPresenteIndicativo: false,
      regularPassatoProssimo: true,
      conjugations: {
        presenteIndicativo: {
          io: "sto",
          tu: "stai",
          luiLei: "sta",
          noi: "stiamo",
          voi: "state",
          loro: "stanno",
        },
      },
    },
  ],
  ereVerbs: [
    {
      infinitive: "credere",
      definition: "to believe",
      auxiliaryVerb: "avere",
      regularPresenteIndicativo: true,
      regularPassatoProssimo: true,
    },
    {
      infinitive: "scrivere",
      definition: "to write",
      auxiliaryVerb: "avere",
      regularPresenteIndicativo: true,
      regularPassatoProssimo: false,
    },
    {
      infinitive: "leggere",
      definition: "to read",
      auxiliaryVerb: "avere",
      regularPresenteIndicativo: false,
      regularPassatoProssimo: false,
      conjugations: {
        presenteIndicativo: {
          io: "leggo",
          tu: "leggi",
          luiLei: "legge",
          noi: "leggiamo",
          voi: "leggete",
          loro: "leggono",
        },
      },
    },
    {
      infinitive: "mettere",
      definition: "to put",
      auxiliaryVerb: "avere",
      regularPresenteIndicativo: true,
      regularPassatoProssimo: false,
    },
    {
      infinitive: "prendere",
      definition: "to take",
      auxiliaryVerb: "avere",
      regularPresenteIndicativo: true,
      regularPassatoProssimo: false,
    },
    {
      infinitive: "chiedere",
      definition: "to ask",
      auxiliaryVerb: "avere",
      regularPresenteIndicativo: true,
      regularPassatoProssimo: false,
    },
    {
      infinitive: "vivere",
      definition: "to live",
      auxiliaryVerb: "essere",
      regularPresenteIndicativo: true,
      regularPassatoProssimo: false,
    },
    {
      infinitive: "ricevere",
      definition: "to receive",
      auxiliaryVerb: "avere",
      regularPresenteIndicativo: true,
      regularPassatoProssimo: true,
    },
    {
      infinitive: "perdere",
      definition: "to lose",
      auxiliaryVerb: "avere",
      regularPresenteIndicativo: true,
      regularPassatoProssimo: false,
    },
    {
      infinitive: "vendere",
      definition: "to sell",
      auxiliaryVerb: "avere",
      regularPresenteIndicativo: true,
      regularPassatoProssimo: true,
    },
    {
      infinitive: "rispondere",
      definition: "to answer",
      auxiliaryVerb: "avere",
      regularPresenteIndicativo: true,
      regularPassatoProssimo: false,
    },
    {
      infinitive: "decidere",
      definition: "to decide",
      auxiliaryVerb: "avere",
      regularPresenteIndicativo: true,
      regularPassatoProssimo: false,
    },
    {
      infinitive: "conoscere",
      definition: "to know (a person)",
      auxiliaryVerb: "avere",
      regularPresenteIndicativo: true,
      regularPassatoProssimo: false,
    },
    {
      infinitive: "crescere",
      definition: "to grow",
      auxiliaryVerb: "essere",
      regularPresenteIndicativo: true,
      regularPassatoProssimo: false,
    },
    {
      infinitive: "correre",
      definition: "to run",
      auxiliaryVerb: "essere",
      regularPresenteIndicativo: true,
      regularPassatoProssimo: false,
    },
    {
      infinitive: "sapere",
      definition: "to know",
      auxiliaryVerb: "avere",
      regularPresenteIndicativo: false,
      regularPassatoProssimo: true,
      conjugations: {
        presenteIndicativo: {
          io: "so",
          tu: "sai",
          luiLei: "sa",
          noi: "sappiamo",
          voi: "sapete",
          loro: "sanno",
        },
      },
    },
    {
      infinitive: "rimanere",
      definition: "to stay/remain",
      auxiliaryVerb: "essere",
      regularPresenteIndicativo: false,
      regularPassatoProssimo: false,
      conjugations: {
        presenteIndicativo: {
          io: "rimango",
          tu: "rimani",
          luiLei: "rimane",
          noi: "rimaniamo",
          voi: "rimanete",
          loro: "rimangono",
        },
      },
    },
  ],
  ireVerbs: [
    {
      infinitive: "partire",
      definition: "to depart",
      auxiliaryVerb: "essere",
      regularPresenteIndicativo: true,
      regularPassatoProssimo: true,
    },
    {
      infinitive: "dormire",
      definition: "to sleep",
      auxiliaryVerb: "avere",
      regularPresenteIndicativo: true,
      regularPassatoProssimo: true,
    },
    {
      infinitive: "sentire",
      definition: "to hear/feel",
      auxiliaryVerb: "avere",
      regularPresenteIndicativo: true,
      regularPassatoProssimo: true,
    },
    {
      infinitive: "aprire",
      definition: "to open",
      auxiliaryVerb: "avere",
      regularPresenteIndicativo: true,
      regularPassatoProssimo: false,
    },
    {
      infinitive: "seguire",
      definition: "to follow",
      auxiliaryVerb: "avere",
      regularPresenteIndicativo: true,
      regularPassatoProssimo: true,
    },
    {
      infinitive: "offrire",
      definition: "to offer",
      auxiliaryVerb: "avere",
      regularPresenteIndicativo: true,
      regularPassatoProssimo: false,
    },
    {
      infinitive: "servire",
      definition: "to serve",
      auxiliaryVerb: "avere",
      regularPresenteIndicativo: true,
      regularPassatoProssimo: true,
    },
    {
      infinitive: "coprire",
      definition: "to cover",
      auxiliaryVerb: "avere",
      regularPresenteIndicativo: true,
      regularPassatoProssimo: false,
    },
    {
      infinitive: "scoprire",
      definition: "to discover",
      auxiliaryVerb: "avere",
      regularPresenteIndicativo: true,
      regularPassatoProssimo: false,
    },
    {
      infinitive: "soffrire",
      definition: "to suffer",
      auxiliaryVerb: "avere",
      regularPresenteIndicativo: true,
      regularPassatoProssimo: false,
    },
    {
      infinitive: "bollire",
      definition: "to boil",
      auxiliaryVerb: "avere",
      regularPresenteIndicativo: true,
      regularPassatoProssimo: true,
    },
    {
      infinitive: "fuggire",
      definition: "to flee",
      auxiliaryVerb: "essere",
      regularPresenteIndicativo: true,
      regularPassatoProssimo: true,
    },
    {
      infinitive: "mentire",
      definition: "to lie",
      auxiliaryVerb: "avere",
      regularPresenteIndicativo: true,
      regularPassatoProssimo: true,
    },
    {
      infinitive: "nutrire",
      definition: "to nourish/feed",
      auxiliaryVerb: "avere",
      regularPresenteIndicativo: true,
      regularPassatoProssimo: true,
    },
    {
      infinitive: "restituire",
      definition: "to return (give back)",
      auxiliaryVerb: "avere",
      regularPresenteIndicativo: true,
      regularPassatoProssimo: true,
    },
    {
      infinitive: "salire",
      definition: "to go up",
      auxiliaryVerb: "essere",
      regularPresenteIndicativo: true,
      regularPassatoProssimo: true,
    },
    {
      infinitive: "vestire",
      definition: "to dress",
      auxiliaryVerb: "avere",
      regularPresenteIndicativo: true,
      regularPassatoProssimo: true,
    },
    {
      infinitive: "assalire",
      definition: "to attack/assail",
      auxiliaryVerb: "avere",
      regularPresenteIndicativo: true,
      regularPassatoProssimo: true,
    },
    {
      infinitive: "conseguire",
      definition: "to achieve",
      auxiliaryVerb: "avere",
      regularPresenteIndicativo: true,
      regularPassatoProssimo: true,
    },
    {
      infinitive: "convertire",
      definition: "to convert",
      auxiliaryVerb: "avere",
      regularPresenteIndicativo: true,
      regularPassatoProssimo: true,
    },
    {
      infinitive: "inseguire",
      definition: "to chase/pursue",
      auxiliaryVerb: "avere",
      regularPresenteIndicativo: true,
      regularPassatoProssimo: true,
    },
    {
      infinitive: "inserire",
      definition: "to insert",
      auxiliaryVerb: "avere",
      regularPresenteIndicativo: true,
      regularPassatoProssimo: true,
    },
    {
      infinitive: "costituire",
      definition: "to constitute",
      auxiliaryVerb: "avere",
      regularPresenteIndicativo: true,
      regularPassatoProssimo: true,
    },
    {
      infinitive: "venire",
      definition: "to come",
      auxiliaryVerb: "essere",
      regularPresenteIndicativo: false,
      regularPassatoProssimo: true,
      conjugations: {
        presenteIndicativo: {
          io: "vengo",
          tu: "vieni",
          luiLei: "viene",
          noi: "veniamo",
          voi: "venite",
          loro: "vengono",
        },
      },
    },
    {
      infinitive: "uscire",
      definition: "to go out",
      auxiliaryVerb: "essere",
      regularPresenteIndicativo: false,
      regularPassatoProssimo: true,
      conjugations: {
        presenteIndicativo: {
          io: "esco",
          tu: "esci",
          luiLei: "esce",
          noi: "usciamo",
          voi: "uscite",
          loro: "escono",
        },
      },
    },
    {
      infinitive: "dire",
      definition: "to say/tell",
      auxiliaryVerb: "avere",
      regularPresenteIndicativo: false,
      regularPassatoProssimo: true,
      conjugations: {
        presenteIndicativo: {
          io: "dico",
          tu: "dici",
          luiLei: "dice",
          noi: "diciamo",
          voi: "dite",
          loro: "dicono",
        },
      },
    },
  ],
};

const pronounData = {
  subjectPronouns: ["Io", "Tu", "Lui/Lei", "Noi", "Voi", "Loro"],
  directObjectPronouns: ["Mi", "Ti", "Lo/La", "Ci", "Vi", "Li/Le"],
  indirectObjectPronouns: ["Mi", "Ti", "Gli/Lei", "Ci", "Vi", "Gli/Le"],
};

const lessonData = {
  // Regular verb lesson
  regular: {
    type: "regular",
    tense: "presenteIndicativo",
    patternExplanation:
      "Regular Italian verbs follow predictable patterns based on their infinitive endings. The magic lies in recognizing the STEM (infinitive minus ending) + ENDING system that works across all three verb families.",
    conjugationExamples: {
      are: {
        stem: "parl",
        infinitive: "parlare",
        conjugations: [
          "parlo",
          "parli",
          "parla",
          "parliamo",
          "parlate",
          "parlano",
        ],
      },
      ere: {
        stem: "cred",
        infinitive: "credere",
        conjugations: [
          "credo",
          "credi",
          "crede",
          "crediamo",
          "credete",
          "credono",
        ],
      },
      ire: {
        stem: "dorm",
        infinitive: "dormire",
        conjugations: [
          "dormo",
          "dormi",
          "dorme",
          "dormiamo",
          "dormite",
          "dormono",
        ],
      },
    },
    memoryTricks: [
      "**ARE**: 'A-R-E' sounds like 'ANO' - remember the 'loro' ending!",
      "**ERE**: Think 'E-R-E' leads to 'ONO' - they end similar!",
      "**IRE**: 'I-R-E' uses 'ONO' too, but 'voi' gets 'ITE' (sounds like 'bite')",
      "**Shared pattern**: io/tu/lui forms are nearly identical across all types",
      "**The '3-2-1' rule**: 3 singular forms are short, noi/voi are longer, loro is longest",
    ],
    commonPhrases: [
      "**ARE verbs**: Parlo italiano - I speak Italian",
      "**ARE verbs**: Mangiamo pizza - We eat pizza",
      "**ARE verbs**: Studiate molto? - Do you all study a lot?",
      "**ERE verbs**: Credi in me? - Do you believe in me?",
      "**ERE verbs**: Vendono libri - They sell books",
      "**IRE verbs**: Dormo bene - I sleep well",
      "**IRE verbs**: Partite domani - You all are leaving tomorrow",
    ],
    learnerPitfalls: [
      "Don't mix up **-ete** (ERE verbs) and **-ite** (IRE verbs) for 'voi'",
      "**-ano** vs **-ono**: ARE verbs use 'ano', ERE/IRE use 'ono'",
      "Remember to **drop the entire ending** (-are/-ere/-ire), not just the 'e'",
      "**Silent 'h'** in 'noi' forms: 'parliamo' not 'parlaimo'",
      "**Double letters** in 'voi': 'parlate', 'credete', 'dormite' - don't drop letters!",
    ],
  },

  // Irregular verb lessons
  irregular: {
    andare: {
      type: "irregular",
      infinitive: "andare",
      tense: "presenteIndicativo",
      etymology:
        "From Latin 'ambulare' (to walk), but merged with Latin 'vadere' (to go). The 'vad-' forms come from 'vadere', explaining why 'io vado' doesn't look like 'andare'!",
      memoryTricks: [
        "Remember: 'io **V**ADO' - I **go** with a **V**!",
        "'noi andiamo' keeps the original 'and-' root",
        "Think: 'They **V**ANNO go' = 'loro vanno'",
      ],
      commonPhrases: [
        "Vado a casa - I'm going home",
        "Dove vai? - Where are you going?",
        "Andiamo! - Let's go!",
      ],
      learnerPitfalls: [
        "Don't say 'io ando' - it's 'io vado'",
        "'loro vanno' has double 'n', not 'vano'",
        "Remember 'andiamo' keeps the 'and-' root",
      ],
    },

    dare: {
      type: "irregular",
      infinitive: "dare",
      tense: "presenteIndicativo",
      etymology:
        "From Latin 'dare' (to give). One of the few verbs that kept its Latin form almost unchanged, but developed irregular conjugations over time.",
      memoryTricks: [
        "'io **D**O' - I **D**o give (very short!)",
        "'dà' (he gives) has an accent to distinguish from 'da' (from)",
        "'loro danno' - they give damage (danno = damage)",
      ],
      commonPhrases: [
        "Ti do una mano - I'll give you a hand",
        "Dai! - Come on! (literally: give!)",
        "Cosa danno al cinema? - What's playing at the cinema?",
      ],
      learnerPitfalls: [
        "Don't forget the accent: 'lui dà' not 'lui da'",
        "'loro danno' has double 'n'",
        "Very short forms: 'io do', 'tu dai'",
      ],
    },

    stare: {
      type: "irregular",
      infinitive: "stare",
      tense: "presenteIndicativo",
      etymology:
        "From Latin 'stare' (to stand). Related to English 'state' and 'statue'. The idea evolved from 'standing' to 'staying/being in a place'.",
      memoryTricks: [
        "'io **ST**O' - I **ST**and/stay",
        "'stiamo' - we **ST**ay together",
        "'stanno' - they're **ST**anding there",
      ],
      commonPhrases: [
        "Come stai? - How are you?",
        "Sto bene - I'm doing well",
        "Stiamo a casa - We're staying home",
      ],
      learnerPitfalls: [
        "Don't confuse with 'essere' - 'stare' is for temporary states",
        "'loro stanno' has double 'n'",
        "Use 'stare' for ongoing actions: 'sto mangiando'",
      ],
    },

    cercare: {
      type: "irregular",
      infinitive: "cercare",
      tense: "presenteIndicativo",
      etymology:
        "From Latin 'circare' (to go around in circles). The 'c' changes to 'ch' before 'i' and 'e' to maintain the hard 'k' sound.",
      memoryTricks: [
        "'cerco' sounds like 'circa' (around) - searching around!",
        "'cerchi' - you search with **CH**eck",
        "Hard 'k' sound always: cerco, cerchi, cerca",
      ],
      commonPhrases: [
        "Cerco lavoro - I'm looking for work",
        "Che cosa cerchi? - What are you looking for?",
        "Cerchiamo una soluzione - We're seeking a solution",
      ],
      learnerPitfalls: [
        "Always 'ch' before 'i': 'tu cerchi' not 'tu cerci'",
        "Keep the hard 'k' sound throughout",
        "Don't drop the 'h': 'cerchiamo' not 'cerciamo'",
      ],
    },

    leggere: {
      type: "irregular",
      infinitive: "leggere",
      tense: "presenteIndicativo",
      etymology:
        "From Latin 'legere' (to read, to choose). The double 'g' softens before 'i' and 'e', creating the 'j' sound in 'leggi'.",
      memoryTricks: [
        "'leggo' - double 'g' like in 'egg' but soft",
        "'leggi' sounds like 'Leh-jee' - soft 'g'",
        "Think 'legal' documents need **L**E**GG**ing (reading)",
      ],
      commonPhrases: [
        "Leggo un libro - I'm reading a book",
        "Leggi il giornale? - Do you read the newspaper?",
        "Leggete insieme - You all read together",
      ],
      learnerPitfalls: [
        "Double 'g' makes soft 'j' sound before 'i' and 'e'",
        "Don't say 'lego' - it's 'leggo' with double 'g'",
        "'leggiamo' keeps the soft sound",
      ],
    },

    sapere: {
      type: "irregular",
      infinitive: "sapere",
      tense: "presenteIndicativo",
      etymology:
        "From Latin 'sapere' (to taste, to have good taste, to know). Originally meant 'to taste' - you 'taste' knowledge!",
      memoryTricks: [
        "'io **S**O' - **S**imple **O**ne letter = I know",
        "'sai' rhymes with 'hai' (you have) - you have knowledge",
        "'sappiamo' - we **S**hare **APP**reciated wisdom",
      ],
      commonPhrases: [
        "Non lo so - I don't know",
        "Sai parlare inglese? - Do you know how to speak English?",
        "Sapete la risposta? - Do you know the answer?",
      ],
      learnerPitfalls: [
        "Very short: 'io so' not 'io sapo'",
        "Don't confuse with 'conoscere' - 'sapere' is for facts/skills",
        "'sappiamo' has double 'p'",
      ],
    },

    rimanere: {
      type: "irregular",
      infinitive: "rimanere",
      tense: "presenteIndicativo",
      etymology:
        "From Latin 'remanere' (to remain). The 'n' changes to 'ng' in some forms due to sound evolution, like 'rimango'.",
      memoryTricks: [
        "'rim**ANG**o' - I remain at an **ANG**le",
        "'rimani' - you remain, sounds like 'remain-ee'",
        "'rimangono' - they remain **GONE** (but actually staying!)",
      ],
      commonPhrases: [
        "Rimango a casa - I'm staying home",
        "Rimani qui - Stay here",
        "Rimangono in Italia - They're remaining in Italy",
      ],
      learnerPitfalls: [
        "'io rimango' with 'ng' sound, not 'rimanno'",
        "'loro rimangono' - double syllable 'man-go-no'",
        "Don't say 'rimanio' - it's 'rimango'",
      ],
    },

    venire: {
      type: "irregular",
      infinitive: "venire",
      tense: "presenteIndicativo",
      etymology:
        "From Latin 'venire' (to come). Related to English 'venue' and 'advent'. The 'n' becomes 'ng' in 'vengo' due to sound changes.",
      memoryTricks: [
        "'vengo' - I come with 'ng' like in 'ring'",
        "'vieni' sounds like 'Vienna' - come to Vienna!",
        "'vengono' - they come **GONE** to here",
      ],
      commonPhrases: [
        "Vengo subito - I'm coming right away",
        "Vieni qui! - Come here!",
        "Vengono domani - They're coming tomorrow",
      ],
      learnerPitfalls: [
        "'io vengo' with 'ng', not 'venio'",
        "'loro vengono' not 'venono'",
        "Don't confuse with 'andare' - opposite directions!",
      ],
    },

    uscire: {
      type: "irregular",
      infinitive: "uscire",
      tense: "presenteIndicativo",
      etymology:
        "From Latin 'exire' (to go out). The 'sc' creates a 'sh' sound, and becomes just 's' in some forms like 'esco'.",
      memoryTricks: [
        "'esco' - **E**xit and **S**lip **C**arefully **O**ut",
        "'esci' - you **E**xit **S**oon **C**arefully **I**ndeed",
        "'usciamo' keeps the 'sc' = 'sh' sound",
      ],
      commonPhrases: [
        "Esco di casa - I'm leaving the house",
        "Esci stasera? - Are you going out tonight?",
        "Usciamo insieme - Let's go out together",
      ],
      learnerPitfalls: [
        "'io esco' not 'uscio' - drops the 'u'",
        "'tu esci' not 'tusci' - remember the pattern",
        "'usciamo' keeps all letters with 'sh' sound",
      ],
    },

    dire: {
      type: "irregular",
      infinitive: "dire",
      tense: "presenteIndicativo",
      etymology:
        "From Latin 'dicere' (to say). Heavily contracted over time - 'dicere' became 'dire', but kept some 'dic-' forms like 'dico'.",
      memoryTricks: [
        "'dico' keeps the Latin 'dic-' (think 'dictate')",
        "'dici' - you **D**o **I**ndeed **C**ommunicate **I**deas",
        "'diciamo' - we **DIC**tate **I**mportant **AM**ounts **O**f info",
      ],
      commonPhrases: [
        "Che cosa dici? - What are you saying?",
        "Dico sempre la verità - I always tell the truth",
        "Diciamo domani - Let's say tomorrow",
      ],
      learnerPitfalls: [
        "'io dico' with 'c', not 'io diro'",
        "'dite' is very short (you all say)",
        "Don't say 'dicono' - it's 'dicono' (they say)",
      ],
    },
  },
};

const phraseData = [
  [
    {
      phrase: "Buona giornata!",
      translation: "Have a good day!",
      meaning: "A common way to wish someone well for their day.",
    },
    {
      phrase: "In bocca al lupo!",
      translation: "Good luck!",
      meaning:
        "Literally 'into the wolf’s mouth,' it's the Italian way to wish someone luck, often before an exam or performance.",
    },
    {
      phrase: "Ci vediamo presto!",
      translation: "See you soon!",
      meaning: "Friendly and casual way to say you'll meet someone again soon.",
    },
    {
      phrase: "Come va?",
      translation: "How’s it going?",
      meaning: "Informal greeting used in everyday conversations.",
    },
    {
      phrase: "A presto!",
      translation: "See you soon!",
      meaning:
        "A polite way to say goodbye, often used in both formal and informal settings.",
    },
    {
      phrase: "Non vedo l’ora!",
      translation: "I can’t wait!",
      meaning: "Used to express excitement about something in the future.",
    },
    {
      phrase: "Grazie mille!",
      translation: "Thank you very much!",
      meaning: "Common way to express sincere gratitude.",
    },
    {
      phrase: "Va tutto bene.",
      translation: "Everything’s fine.",
      meaning: "Reassurance that things are okay.",
    },
    {
      phrase: "Scusa, puoi ripetere?",
      translation: "Sorry, can you repeat?",
      meaning: "Useful everyday phrase when you don’t understand something.",
    },
    {
      phrase: "Buona fortuna!",
      translation: "Good luck!",
      meaning: "General way to wish someone luck in any situation.",
    },
  ],
];

// Function to seed the database

const seedDatabase = async () => {
  try {
    // Connect to the database
    await mongoose.connect(
      process.env.MONGODB_URI || "mongodb://localhost/mydatabase"
    );
    console.log("Connected to MongoDB");

    // Clear existing data
    await Verb.deleteMany({});
    await Pronoun.deleteMany({});
    await Lesson.deleteMany({});
    console.log("Cleared existing data");

    // Construct the verbs array for seeding
    const verbs = [
      ...verbData.areVerbs.map((verb) => ({
        infinitive: verb.infinitive,
        type: "are",
        definition: verb.definition,
        auxiliaryVerb: verb.auxiliaryVerb,
        regularPresenteIndicativo: verb.regularPresenteIndicativo,
        regularPassatoProssimo: verb.regularPassatoProssimo,
        ...(verb.conjugations && { conjugations: verb.conjugations }),
      })),
      ...verbData.ereVerbs.map((verb) => ({
        infinitive: verb.infinitive,
        type: "ere",
        definition: verb.definition,
        auxiliaryVerb: verb.auxiliaryVerb,
        regularPresenteIndicativo: verb.regularPresenteIndicativo,
        regularPassatoProssimo: verb.regularPassatoProssimo,
        ...(verb.conjugations && { conjugations: verb.conjugations }),
      })),
      ...verbData.ireVerbs.map((verb) => ({
        infinitive: verb.infinitive,
        type: "ire",
        definition: verb.definition,
        auxiliaryVerb: verb.auxiliaryVerb,
        regularPresenteIndicativo: verb.regularPresenteIndicativo,
        regularPassatoProssimo: verb.regularPassatoProssimo,
        ...(verb.conjugations && { conjugations: verb.conjugations }),
      })),
    ];

    // Construct the pronouns array for seeding
    const pronouns = [
      { type: "subject", pronouns: pronounData.subjectPronouns },
      { type: "directObject", pronouns: pronounData.directObjectPronouns },
      {
        type: "indirectObject",
        pronouns: pronounData.indirectObjectPronouns,
      },
    ];

    // Log the data to be seeded
    console.log("Verbs to be inserted:", verbs);
    console.log("Pronouns to be inserted:", pronouns);

    // Insert pronouns first
    console.log("Inserting pronouns...");
    const pronounResult = await Pronoun.insertMany(pronouns);
    console.log("Pronouns inserted successfully:", pronounResult);

    // Insert verbs
    console.log("Inserting verbs...");
    const verbResult = await Verb.insertMany(verbs);
    console.log("Verbs inserted successfully:", verbResult);

    // Construct the lessons array for seeding
    const lessons = [
      // Regular lesson
      lessonData.regular,
      // Irregular lessons
      ...Object.values(lessonData.irregular),
    ];

    console.log("Lessons to be inserted:", lessons);

    // Insert lessons
    console.log("Inserting lessons...");
    const lessonResult = await Lesson.insertMany(lessons);
    console.log("Lessons inserted successfully:", lessonResult);

    // Insert phrases
    console.log("Inserting phrases...");
    for (const phraseGroup of phraseData) {
      const phraseResult = await Phrase.insertMany(phraseGroup);
      console.log("Phrases inserted successfully:", phraseResult);
    }

    console.log("Database seeding completed successfully!");

    // Close the connection
    mongoose.connection.close();
  } catch (error) {
    console.error("Error seeding database:", error);
    process.exit(1);
  }
};

// Run the seeding script
seedDatabase();
