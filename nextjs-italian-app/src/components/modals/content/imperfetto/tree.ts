export interface VerbTreeData {
  infinitive: string;
  definition: string;
  stem: string;
  isIrregular: boolean;
  examples: string[];
  imperfettoEnding: string;
}

export function getImperfettoTree(
  verb: { infinitive: string; definition: string },
  conjugations: { [key: string]: string },
  isIrregular: boolean
): VerbTreeData {
  const verbType = verb.infinitive.slice(-3);
  const stem = isIrregular
    ? conjugations.io?.replace(/vo$/, "") || verb.infinitive.slice(0, -3)
    : verb.infinitive.slice(0, -3);

  const endingMap: { [key: string]: string } = {
    are: "-avo",
    ere: "-evo",
    ire: "-ivo",
  };

  return {
    infinitive: verb.infinitive,
    definition: verb.definition,
    stem,
    isIrregular,
    imperfettoEnding: isIrregular ? "irregular" : endingMap[verbType] || "-vo",
    examples: [
      `Io ${conjugations.io} (I was ${verb.definition.replace(
        "to ",
        ""
      )}ing / I used to ${verb.definition.replace("to ", "")})`,
      `Tu ${conjugations.tu} (You were ${verb.definition.replace(
        "to ",
        ""
      )}ing / You used to ${verb.definition.replace("to ", "")})`,
      `Lui/Lei ${conjugations.luiLei} (He/She was ${verb.definition.replace(
        "to ",
        ""
      )}ing / He/She used to ${verb.definition.replace("to ", "")})`,
      `Noi ${conjugations.noi} (We were ${verb.definition.replace(
        "to ",
        ""
      )}ing / We used to ${verb.definition.replace("to ", "")})`,
      `Voi ${conjugations.voi} (You all were ${verb.definition.replace(
        "to ",
        ""
      )}ing / You all used to ${verb.definition.replace("to ", "")})`,
      `Loro ${conjugations.loro} (They were ${verb.definition.replace(
        "to ",
        ""
      )}ing / They used to ${verb.definition.replace("to ", "")})`,
    ],
  };
}

export function getDefaultImperfettoTree(): VerbTreeData {
  return {
    infinitive: "parlare",
    definition: "to speak",
    stem: "parl",
    isIrregular: false,
    imperfettoEnding: "-avo",
    examples: [
      "Io parlavo (I was speaking / I used to speak)",
      "Tu parlavi (You were speaking / You used to speak)",
      "Lui/Lei parlava (He/She was speaking / He/She used to speak)",
      "Noi parlavamo (We were speaking / We used to speak)",
      "Voi parlavate (You all were speaking / You all used to speak)",
      "Loro parlavano (They were speaking / They used to speak)",
    ],
  };
}

export function getVerbTreeLearningTips(
  verbType: "are" | "ere" | "ire",
  isIrregular: boolean
): string[] {
  const tips = [
    `📌 Imperfetto = Stem + Imperfetto Endings`,
    `⏰ Used for ongoing/habitual past actions (like "I was doing" or "I used to do")`,
    `🔑 The letter 'V' appears in all conjugations - it's the signature of imperfetto!`,
  ];

  if (isIrregular) {
    tips.push(
      "⚡ This verb has an irregular imperfetto stem - but endings are regular!",
      "💡 Only about 8 common verbs are irregular in imperfetto",
      "📝 Key irregular verbs: essere (ero), fare (facevo), dire (dicevo), bere (bevevo)"
    );
  } else {
    const endings: { [key: string]: string } = {
      are: "-avo, -avi, -ava, -avamo, -avate, -avano",
      ere: "-evo, -evi, -eva, -evamo, -evate, -evano",
      ire: "-ivo, -ivi, -iva, -ivamo, -ivate, -ivano",
    };
    tips.push(
      `✓ Regular -${verbType.toUpperCase()} verb endings: ${endings[verbType]}`,
      "💪 Imperfetto is 95% regular - learn the pattern once, use it everywhere!",
      "🎯 Just remove the infinitive ending and add imperfetto endings"
    );
  }

  tips.push(
    "🆚 Imperfetto vs Passato Prossimo:",
    "   • Imperfetto = ongoing, habitual, background (I was doing, I used to do)",
    "   • Passato Prossimo = completed, specific action (I did, I have done)",
    "💭 Common uses: descriptions, age, time, weather, mental states in the past",
    "⏱️ Time markers: mentre (while), sempre (always), ogni giorno (every day)"
  );

  return tips;
}
