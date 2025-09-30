export interface VerbTreeData {
  infinitive: string;
  definition: string;
  stem: string;
  isIrregular: boolean;
  examples: string[];
  auxiliaryVerb: string;
  pastParticiple: string;
}

export function getPassatoProssimoTree(
  verb: { infinitive: string; definition: string; auxiliaryVerb?: string },
  conjugations: { [key: string]: string },
  isIrregular: boolean
): VerbTreeData {
  const auxiliary = verb.auxiliaryVerb || "avere";
  const pastParticiple = conjugations.io?.split(" ")[1] || "";
  const stem = verb.infinitive.slice(0, -3);

  return {
    infinitive: verb.infinitive,
    definition: verb.definition,
    stem,
    isIrregular,
    auxiliaryVerb: auxiliary,
    pastParticiple,
    examples: [
      `Io ${conjugations.io} (I ${verb.definition.replace("to ", "")}ed)`,
      `Tu ${conjugations.tu} (You ${verb.definition.replace("to ", "")}ed)`,
      `Lui/Lei ${conjugations.luiLei} (He/She ${verb.definition.replace(
        "to ",
        ""
      )}ed)`,
      `Noi ${conjugations.noi} (We ${verb.definition.replace("to ", "")}ed)`,
      `Voi ${conjugations.voi} (You all ${verb.definition.replace(
        "to ",
        ""
      )}ed)`,
      `Loro ${conjugations.loro} (They ${verb.definition.replace(
        "to ",
        ""
      )}ed)`,
    ],
  };
}

export function getDefaultPassatoProssimoTree(): VerbTreeData {
  return {
    infinitive: "parlare",
    definition: "to speak",
    stem: "parl",
    isIrregular: false,
    auxiliaryVerb: "avere",
    pastParticiple: "parlato",
    examples: [
      "Io ho parlato",
      "Tu hai parlato",
      "Lui/Lei ha parlato",
      "Noi abbiamo parlato",
      "Voi avete parlato",
      "Loro hanno parlato",
    ],
  };
}

export function getVerbTreeLearningTips(
  verbType: "are" | "ere" | "ire",
  isIrregular: boolean,
  auxiliaryVerb: string
): string[] {
  const tips = [
    `📌 Passato Prossimo = Auxiliary Verb (${auxiliaryVerb}) + Past Participle`,
    `⏰ Used for completed past actions (like "I have done" or "I did")`,
  ];

  if (isIrregular) {
    tips.push(
      "⚡ This verb has an irregular past participle - memorize it!",
      "💡 Irregular verbs are often the most commonly used verbs"
    );
  } else {
    const endings: { [key: string]: string } = {
      are: "-ato",
      ere: "-uto",
      ire: "-ito",
    };
    tips.push(
      `✓ Regular -${verbType.toUpperCase()} verbs form past participle with ${
        endings[verbType]
      } ending`,
      "💪 Learn the pattern once, use it for all regular verbs!"
    );
  }

  if (auxiliaryVerb === "essere") {
    tips.push(
      "⚠️ IMPORTANT: With 'essere', past participle agrees with subject!",
      "👥 andato (masc. sing.), andata (fem. sing.), andati (masc. plur.), andate (fem. plur.)"
    );
  } else {
    tips.push(
      "✓ With 'avere', past participle never changes",
      "🎯 Just conjugate avere + add past participle!"
    );
  }

  return tips;
}
