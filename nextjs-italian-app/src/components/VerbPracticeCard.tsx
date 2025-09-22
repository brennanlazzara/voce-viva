'use client';

import React, { useState, useEffect } from 'react';
import HintDialog from './modals/HintDialog';
import VerbTreeGraphDialog from './modals/VerbTreeGraphDialog';
import LessonDialog from './modals/LessonDialog';
import { useVerbData } from '../hooks/useVerbData';

interface VerbPracticeCardProps {
  verbType: "are" | "ere" | "ire";
  tense: string;
  mood: string;
  title: string;
}

const PRONOUNS = ["Io", "Tu", "Lui/Lei", "Noi", "Voi", "Loro"];

function VerbPracticeCard({ verbType, tense, mood, title }: VerbPracticeCardProps) {
  const [currentVerb, setCurrentVerb] = useState({ infinitive: "", definition: "", type: verbType });
  const [currentPronoun, setCurrentPronoun] = useState(PRONOUNS[0]);
  const [userAnswer, setUserAnswer] = useState("");
  const [isFlipped, setIsFlipped] = useState(false);
  const [feedback, setFeedback] = useState<"correct" | "incorrect" | null>(null);
  const [isHintDialogOpen, setIsHintDialogOpen] = useState(false);
  const [isVerbTreeOpen, setIsVerbTreeOpen] = useState(false);
  const [isLessonOpen, setIsLessonOpen] = useState(false);

  const { fetchRandomPronoun, fetchRandomVerb, isLoading } = useVerbData();

  useEffect(() => {
    generateNewCard();
  }, [verbType]); // eslint-disable-line react-hooks/exhaustive-deps

  const generateNewCard = async () => {
    try {
      // Fetch pronoun and verb data from API
      const [pronounData, verbData] = await Promise.all([
        fetchRandomPronoun(),
        fetchRandomVerb({ regularOnly: true }) // Filter for regular verbs for practice
      ]);

      setCurrentPronoun(pronounData);
      setCurrentVerb(verbData);
      setUserAnswer("");
      setIsFlipped(false);
      setFeedback(null);
    } catch (error) {
      console.error("Error loading new card:", error);
      // Fallback to static data if API fails
      const fallbackPronoun = PRONOUNS[Math.floor(Math.random() * PRONOUNS.length)];
      const fallbackVerb = { infinitive: "parlare", definition: "to speak", type: verbType };

      setCurrentPronoun(fallbackPronoun);
      setCurrentVerb(fallbackVerb);
      setUserAnswer("");
      setIsFlipped(false);
      setFeedback(null);
    }
  };

  const conjugateVerb = (pronoun: string, verb: string) => {
    const stem = verb.slice(0, -3);
    const ending = verb.slice(-3);

    // Simple presente indicativo conjugation
    if (tense === "presente" && mood === "indicativo") {
      switch (pronoun) {
        case "Io":
          return `${stem}o`;
        case "Tu":
          return `${stem}i`;
        case "Lui/Lei":
          return `${stem}${ending === "are" ? "a" : "e"}`;
        case "Noi":
          return `${stem}iamo`;
        case "Voi":
          return `${stem}${
            ending === "are" ? "ate" : ending === "ere" ? "ete" : "ite"
          }`;
        case "Loro":
          return `${stem}${ending === "are" ? "ano" : "ono"}`;
        default:
          return verb;
      }
    }

    // For other tenses, return a placeholder (to be implemented)
    return `${stem}[${tense}]`;
  };

  const checkAnswer = () => {
    const correctAnswer = conjugateVerb(currentPronoun, currentVerb.infinitive);
    const isCorrect = userAnswer.trim().toLowerCase() === correctAnswer.toLowerCase();

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
      case "are": return "bg-green-100 text-green-800 border-green-200";
      case "ere": return "bg-blue-100 text-blue-800 border-blue-200";
      case "ire": return "bg-purple-100 text-purple-800 border-purple-200";
      default: return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  const getHintText = () => {
    const endings = {
      are: ["-o", "-i", "-a", "-iamo", "-ate", "-ano"],
      ere: ["-o", "-i", "-e", "-iamo", "-ete", "-ono"],
      ire: ["-o", "-i", "-e", "-iamo", "-ite", "-ono"],
    };

    return {
      type: `This is an -${verbType.toUpperCase()} verb (${currentVerb.definition})`,
      endings: endings[verbType],
    };
  };

  const hint = getHintText();

  return (
    <div className="bg-white rounded-lg shadow-md p-6 max-w-sm">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
        <button
          onClick={() => setIsHintDialogOpen(true)}
          className="text-blue-500 hover:text-blue-700"
          title="Show hint"
        >
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
          </svg>
        </button>
      </div>

      <div className={`inline-block px-3 py-1 rounded-full text-sm font-medium mb-4 ${getVerbTypeColor()}`}>
        -{verbType.toUpperCase()}
      </div>

      <div
        className="w-full h-32 bg-gray-100 rounded-md flex items-center justify-center cursor-pointer hover:bg-gray-200 transition-colors mb-4"
        onClick={() => setIsFlipped(!isFlipped)}
      >
        <span className="text-2xl font-bold text-gray-800">
          {isFlipped ? currentVerb.infinitive : currentPronoun}
        </span>
      </div>

      {!isFlipped && (
        <p className="text-sm text-gray-500 text-center mb-4">
          Click the card to see the verb
        </p>
      )}


      <div className="space-y-3">
        <input
          type="text"
          placeholder="Enter conjugation (e.g., 'parlo')"
          value={userAnswer}
          onChange={(e) => setUserAnswer(e.target.value)}
          onKeyDown={handleKeyPress}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        />

        <div className="flex space-x-2">
          <button
            onClick={() => generateNewCard()}
            className="flex-1 px-4 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600 transition-colors"
            disabled={isLoading}
          >
            {isLoading ? "Loading..." : "New Card"}
          </button>
          <button
            onClick={checkAnswer}
            className="flex-1 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
          >
            Check Answer
          </button>
        </div>

        {feedback && (
          <div className={`text-center font-bold ${
            feedback === "correct" ? "text-green-600" : "text-red-600"
          }`}>
            {feedback === "correct" ? "Correct! 🎉" : "Incorrect. Try again!"}
          </div>
        )}

        {/* Additional Action Buttons */}
        <div className="border-t pt-3 space-y-2">
          <button
            onClick={() => setIsVerbTreeOpen(true)}
            className="w-full px-3 py-2 bg-green-500 text-white text-sm rounded-md hover:bg-green-600 transition-colors"
          >
            🌳 View Verb Tree
          </button>
          <button
            onClick={() => setIsLessonOpen(true)}
            className="w-full px-3 py-2 bg-purple-500 text-white text-sm rounded-md hover:bg-purple-600 transition-colors"
          >
            📚 Study Lesson
          </button>
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
        title="Verb Tree Graphs"
        tense={tense}
        verbType={verbType}
      />

      <LessonDialog
        isOpen={isLessonOpen}
        onClose={() => setIsLessonOpen(false)}
        tense={tense}
        mood={mood}
      />
    </div>
  );
}

export default VerbPracticeCard;