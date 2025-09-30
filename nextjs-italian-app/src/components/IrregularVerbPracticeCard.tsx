"use client";

import React, { useState, useEffect } from "react";
import HintDialog from "./modals/HintDialog";
import VerbTreeGraphDialog from "./modals/VerbTreeGraphDialog";
import LessonDialog from "./modals/LessonDialog";
import { useVerbData } from "../hooks/useVerbData";

interface IrregularVerbPracticeCardProps {
  verbType: "are" | "ere" | "ire";
  tense: string;
  mood: string;
  title: string;
}

const PRONOUNS = ["Io", "Tu", "Lui/Lei", "Noi", "Voi", "Loro"];

function IrregularVerbPracticeCard({
  verbType,
  tense,
  mood,
  title,
}: IrregularVerbPracticeCardProps) {
  const [currentVerb, setCurrentVerb] = useState({
    infinitive: "",
    definition: "",
    type: verbType,
    conjugations: null as Record<string, any> | null,
  });
  const [currentPronoun, setCurrentPronoun] = useState(PRONOUNS[0]);
  const [userAnswer, setUserAnswer] = useState("");
  const [isFlipped, setIsFlipped] = useState(false);
  const [feedback, setFeedback] = useState<"correct" | "incorrect" | null>(
    null
  );
  const [isHintDialogOpen, setIsHintDialogOpen] = useState(false);
  const [isVerbTreeOpen, setIsVerbTreeOpen] = useState(false);
  const [isLessonOpen, setIsLessonOpen] = useState(false);

  const { fetchRandomPronoun, fetchRandomVerb, isLoading } = useVerbData();

  useEffect(() => {
    generateNewCard();
  }, [verbType]); // eslint-disable-line react-hooks/exhaustive-deps

  const generateNewCard = async () => {
    try {
      // Fetch pronoun and irregular verb data from API
      const [pronounData, verbData] = await Promise.all([
        fetchRandomPronoun(),
        fetchRandomVerb({ regularOnly: false, type: verbType }), // Filter for irregular verbs AND specific verb type
      ]);

      setCurrentPronoun(pronounData);
      setCurrentVerb({
        infinitive: verbData.infinitive,
        definition: verbData.definition,
        type: verbData.type,
        conjugations: verbData.conjugations ?? null,
      });
      setUserAnswer("");
      setIsFlipped(false);
      setFeedback(null);
    } catch (error) {
      console.error("Error loading new card:", error);
      // Fallback to irregular verb examples if API fails
      const fallbackIrregularVerbs = {
        are: [
          {
            infinitive: "andare",
            definition: "to go",
            type: verbType,
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
        ],
        ere: [
          {
            infinitive: "essere",
            definition: "to be",
            type: verbType,
            conjugations: {
              presenteIndicativo: {
                io: "sono",
                tu: "sei",
                luiLei: "è",
                noi: "siamo",
                voi: "siete",
                loro: "sono",
              },
            },
          },
        ],
        ire: [
          {
            infinitive: "venire",
            definition: "to come",
            type: verbType,
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
        ],
      };

      const fallbackVerbs =
        fallbackIrregularVerbs[verbType] || fallbackIrregularVerbs.ere;
      const fallbackVerb = fallbackVerbs[0];

      const fallbackPronoun =
        PRONOUNS[Math.floor(Math.random() * PRONOUNS.length)];

      setCurrentPronoun(fallbackPronoun);
      setCurrentVerb(fallbackVerb);
      setUserAnswer("");
      setIsFlipped(false);
      setFeedback(null);
    }
  };

  const getConjugationFromDatabase = (
    pronoun: string,
    conjugations: Record<string, any> | null
  ) => {
    if (!conjugations || !conjugations.presenteIndicativo) {
      return null;
    }

    // Handle both data structures:
    // 1. Regular verbs: conjugations.presenteIndicativo.conjugations.io
    // 2. Irregular verbs: conjugations.presenteIndicativo.io
    const presenteIndicativo = conjugations.presenteIndicativo;
    const presentConjugations =
      presenteIndicativo.conjugations || presenteIndicativo;

    // Map display pronouns to database keys
    const pronounMap: { [key: string]: string } = {
      Io: "io",
      Tu: "tu",
      "Lui/Lei": "luiLei",
      Noi: "noi",
      Voi: "voi",
      Loro: "loro",
    };

    const dbKey = pronounMap[pronoun];
    return dbKey ? presentConjugations[dbKey] : null;
  };

  const checkAnswer = () => {
    const correctAnswer = getConjugationFromDatabase(
      currentPronoun,
      currentVerb.conjugations
    );
    console.log("Debug - Pronoun:", currentPronoun);
    console.log("Debug - Verb:", currentVerb.infinitive);
    console.log("Debug - Expected answer:", correctAnswer);
    console.log("Debug - User answer:", userAnswer.trim().toLowerCase());

    if (!correctAnswer) {
      console.error("No conjugation found for this verb");
      return;
    }

    const isCorrect =
      userAnswer.trim().toLowerCase() === correctAnswer.toLowerCase();

    setFeedback(isCorrect ? "correct" : "incorrect");

    if (isCorrect) {
      setTimeout(async () => {
        await generateNewCard();
      }, 1500);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      checkAnswer();
    }
  };

  const getVerbTypeColor = () => {
    switch (verbType) {
      case "are":
        return "bg-orange-100 dark:bg-orange-900/30 text-orange-800 dark:text-orange-300 border-orange-200 dark:border-orange-700";
      case "ere":
        return "bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-300 border-red-200 dark:border-red-700";
      case "ire":
        return "bg-pink-100 dark:bg-pink-900/30 text-pink-800 dark:text-pink-300 border-pink-200 dark:border-pink-700";
      default:
        return "bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-300 border-gray-200 dark:border-gray-600";
    }
  };

  const getHintText = () => {
    return {
      type: `This is an IRREGULAR -${verbType.toUpperCase()} verb (${
        currentVerb.definition
      })`,
      endings: ["Irregular conjugations - each verb has unique forms!"],
    };
  };

  const hint = getHintText();

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border-2 border-dashed border-orange-300 dark:border-orange-600 max-w-sm mx-auto">
      {/* Header with Title and Hint Button */}
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-bold text-gray-800 dark:text-white">
          {title}
        </h3>
        <button
          onClick={() => setIsHintDialogOpen(true)}
          className="p-2 text-orange-500 dark:text-orange-400 hover:text-orange-700 dark:hover:text-orange-300 hover:bg-orange-50 dark:hover:bg-orange-900/30 rounded-lg transition-all duration-200"
          title="Show hint"
        >
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
            <path
              fillRule="evenodd"
              d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>

      {/* Irregular Verb Type Badge */}
      <div className="flex justify-center mb-6">
        <div
          className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-bold ${getVerbTypeColor()} shadow-sm`}
        >
          <span className="mr-1">⚡</span>IRREGULAR VERBS
        </div>
      </div>

      {/* Interactive Card */}
      <div
        className={`w-full h-40 rounded-xl flex items-center justify-center cursor-pointer transition-all duration-500 transform hover:scale-105 mb-6 ${
          isFlipped
            ? "bg-gradient-to-br from-red-500 to-pink-600 text-white shadow-lg"
            : "bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-600 text-gray-800 dark:text-gray-200 hover:from-gray-200 hover:to-gray-300 dark:hover:from-gray-600 dark:hover:to-gray-500"
        }`}
        onClick={() => setIsFlipped(!isFlipped)}
      >
        <div className="text-center">
          <div className="text-3xl font-bold mb-2">
            {isFlipped ? currentVerb.infinitive : currentPronoun}
          </div>
          {isFlipped && (
            <div className="text-sm opacity-90">{currentVerb.definition}</div>
          )}
        </div>
      </div>

      {/* Card Instructions */}
      {!isFlipped && (
        <p className="text-sm text-gray-500 dark:text-gray-400 text-center mb-6 italic">
          💡 Click the card to reveal the irregular verb
        </p>
      )}

      {/* Input Section */}
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Your Answer:
          </label>
          <input
            type="text"
            placeholder="Enter irregular conjugation"
            value={userAnswer}
            onChange={(e) => setUserAnswer(e.target.value)}
            onKeyDown={handleKeyPress}
            className="w-full px-4 py-3 border-2 border-orange-200 dark:border-orange-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all duration-200 text-lg bg-white dark:bg-gray-700 dark:text-white"
          />
        </div>

        {/* Action Buttons */}
        <div className="grid grid-cols-2 gap-3">
          <button
            onClick={() => generateNewCard()}
            className="px-4 py-3 bg-gray-500 hover:bg-gray-600 text-white rounded-lg transition-all duration-200 font-medium transform hover:scale-105 shadow-md"
            disabled={isLoading}
          >
            {isLoading ? "🔄 Loading..." : "🎲 New Card"}
          </button>
          <button
            onClick={checkAnswer}
            className="px-4 py-3 bg-orange-500 hover:bg-orange-600 text-white rounded-lg transition-all duration-200 font-medium transform hover:scale-105 shadow-md"
          >
            ✓ Check Answer
          </button>
        </div>

        {/* Feedback */}
        {feedback && (
          <div
            className={`text-center p-4 rounded-lg font-bold text-lg ${
              feedback === "correct"
                ? "bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 border border-green-200 dark:border-green-700"
                : "bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-300 border border-red-200 dark:border-red-700"
            }`}
          >
            {feedback === "correct"
              ? "🎉 Perfetto! Correct!"
              : "❌ Incorrect. Try again!"}
          </div>
        )}

        {/* Study Tools */}
        <div className="border-t pt-4 space-y-3">
          <p className="text-sm font-medium text-gray-700 dark:text-gray-300 text-center">
            Study Tools:
          </p>
          <div className="grid grid-cols-1 gap-2">
            <button
              onClick={() => setIsVerbTreeOpen(true)}
              className="w-full px-4 py-3 bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white text-sm rounded-lg transition-all duration-200 font-medium transform hover:scale-105 shadow-md"
            >
              🌳 View Conjugation Tree
            </button>
            <button
              onClick={() => setIsLessonOpen(true)}
              className="w-full px-4 py-3 bg-gradient-to-r from-pink-500 to-red-500 hover:from-pink-600 hover:to-red-600 text-white text-sm rounded-lg transition-all duration-200 font-medium transform hover:scale-105 shadow-md"
            >
              📚 Study Grammar Lesson
            </button>
          </div>
        </div>
      </div>

      {/* Modal Components */}
      <HintDialog
        isOpen={isHintDialogOpen}
        onClose={() => setIsHintDialogOpen(false)}
        hint={hint}
      />

      <VerbTreeGraphDialog
        isOpen={isVerbTreeOpen}
        onClose={() => setIsVerbTreeOpen(false)}
        title="Irregular Verb Tree Graphs"
        tense={tense}
        verbType={verbType}
        currentVerb={currentVerb}
      />

      <LessonDialog
        isOpen={isLessonOpen}
        onClose={() => setIsLessonOpen(false)}
        tense={tense}
        mood={mood}
        currentVerb={currentVerb}
      />
    </div>
  );
}

export default IrregularVerbPracticeCard;
