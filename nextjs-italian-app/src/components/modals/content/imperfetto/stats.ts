export interface StatsContent {
  title: string;
  stats: {
    icon: string;
    label: string;
    value: string;
    description: string;
  }[];
  funFacts: {
    icon: string;
    fact: string;
  }[];
}

export function getImperfettoStats(): StatsContent {
  return {
    title: "Imperfetto - Interesting Facts",
    stats: [
      {
        icon: "📊",
        label: "Regularity Score",
        value: "95%",
        description:
          "The Imperfetto is one of the MOST regular tenses in Italian - only a handful of verbs are irregular!",
      },
      {
        icon: "⚡",
        label: "Irregular Verbs",
        value: "~8",
        description:
          "Only about 8 common verbs have irregular imperfetto forms (essere, fare, dire, bere, tradurre, porre, condurre, produrre)",
      },
      {
        icon: "🎯",
        label: "Usage Frequency",
        value: "Very High",
        description:
          "The Imperfetto is used constantly in Italian storytelling, descriptions, and everyday conversation about the past",
      },
      {
        icon: "🔤",
        label: "Characteristic Letter",
        value: "V",
        description:
          "The letter 'V' appears in ALL imperfetto conjugations (except essere), making it easy to recognize",
      },
    ],
    funFacts: [
      {
        icon: "📚",
        fact: 'The word "imperfetto" comes from Latin "imperfectus" meaning "incomplete" or "not finished" - perfectly describing its use for ongoing actions!',
      },
      {
        icon: "🎨",
        fact: "Italian children's stories often begin with 'C'era una volta...' (Once upon a time there was...) - using the imperfetto 'era' to set the scene!",
      },
      {
        icon: "🌍",
        fact: "The imperfetto is unique to Romance languages. English speakers often struggle with it because English expresses the same concept using 'was -ing' or 'used to'.",
      },
      {
        icon: "✨",
        fact: "The imperfetto has a poetic quality in Italian - it's often used in songs and poetry to evoke nostalgia and memories of the past.",
      },
      {
        icon: "🎭",
        fact: "In Italian cinema, flashback scenes typically use the imperfetto to transport viewers to the past, while the passato prossimo marks specific events.",
      },
      {
        icon: "🧠",
        fact: "Neurolinguistic studies show that native Italian speakers process imperfetto vs. passato prossimo almost automatically - it's deeply ingrained in how they conceptualize time!",
      },
      {
        icon: "📖",
        fact: "Famous Italian authors like Italo Calvino masterfully use imperfetto to create atmosphere: 'Era una notte buia e tempestosa...' (It was a dark and stormy night...)",
      },
      {
        icon: "🔊",
        fact: "The regular rhythm of imperfetto endings (-avo, -avi, -ava...) makes it one of the easiest tenses to recognize when listening to spoken Italian!",
      },
      {
        icon: "⏰",
        fact: "Historians use imperfetto extensively to describe historical contexts: 'Nel Medioevo, la gente viveva in castelli...' (In the Middle Ages, people lived in castles...)",
      },
      {
        icon: "🎵",
        fact: "Italian pop songs love the imperfetto for nostalgia: 'Quando ero bambino...' (When I was a child...) is a common lyrical theme.",
      },
      {
        icon: "🌟",
        fact: "The imperfetto is so regular that once you learn the pattern, you can conjugate almost any verb correctly - even ones you've never seen before!",
      },
      {
        icon: "🗣️",
        fact: "In spoken Italian, 'mentre' (while) + imperfetto is one of the most common constructions: 'Mentre mangiavo...' (While I was eating...)",
      },
    ],
  };
}
