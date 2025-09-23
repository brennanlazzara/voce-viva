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
    <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border border-gray-100 max-w-sm mx-auto">
      {/* Header with Title and Hint Button */}
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-bold text-gray-800">{title}</h3>
        <button
          onClick={() => setIsHintDialogOpen(true)}
          className="p-2 text-blue-500 hover:text-blue-700 hover:bg-blue-50 rounded-lg transition-all duration-200"
          title="Show hint"
        >
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
          </svg>
        </button>
      </div>

      {/* Verb Type Badge */}
      <div className="flex justify-center mb-6">
        <div className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-bold ${getVerbTypeColor()} shadow-sm`}>
          <span className="mr-1">📖</span>
          -{verbType.toUpperCase()} VERBS
        </div>
      </div>

      {/* Interactive Card */}
      <div
        className={`w-full h-40 rounded-xl flex items-center justify-center cursor-pointer transition-all duration-500 transform hover:scale-105 mb-6 ${
          isFlipped
            ? 'bg-gradient-to-br from-indigo-500 to-purple-600 text-white shadow-lg'
            : 'bg-gradient-to-br from-gray-100 to-gray-200 text-gray-800 hover:from-gray-200 hover:to-gray-300'
        }`}
        onClick={() => setIsFlipped(!isFlipped)}
      >
        <div className="text-center">
          <div className="text-3xl font-bold mb-2">
            {isFlipped ? currentVerb.infinitive : currentPronoun}
          </div>
          {isFlipped && (
            <div className="text-sm opacity-90">
              {currentVerb.definition}
            </div>
          )}
        </div>
      </div>

      {/* Card Instructions */}
      {!isFlipped && (
        <p className="text-sm text-gray-500 text-center mb-6 italic">
          💡 Click the card to reveal the verb
        </p>
      )}

      {/* Input Section */}
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Your Answer:
          </label>
          <input
            type="text"
            placeholder="Enter conjugation (e.g., 'parlo')"
            value={userAnswer}
            onChange={(e) => setUserAnswer(e.target.value)}
            onKeyDown={handleKeyPress}
            className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 text-lg"
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
            className="px-4 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-all duration-200 font-medium transform hover:scale-105 shadow-md"
          >
            ✓ Check Answer
          </button>
        </div>

        {/* Feedback */}
        {feedback && (
          <div className={`text-center p-4 rounded-lg font-bold text-lg ${
            feedback === "correct"
              ? "bg-green-100 text-green-800 border border-green-200"
              : "bg-red-100 text-red-800 border border-red-200"
          }`}>
            {feedback === "correct" ? "🎉 Perfetto! Correct!" : "❌ Incorrect. Try again!"}
          </div>
        )}

        {/* Study Tools */}
        <div className="border-t pt-4 space-y-3">
          <p className="text-sm font-medium text-gray-700 text-center">Study Tools:</p>
          <div className="grid grid-cols-1 gap-2">
            <button
              onClick={() => setIsVerbTreeOpen(true)}
              className="w-full px-4 py-3 bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white text-sm rounded-lg transition-all duration-200 font-medium transform hover:scale-105 shadow-md"
            >
              🌳 View Conjugation Tree
            </button>
            <button
              onClick={() => setIsLessonOpen(true)}
              className="w-full px-4 py-3 bg-gradient-to-r from-purple-500 to-indigo-500 hover:from-purple-600 hover:to-indigo-600 text-white text-sm rounded-lg transition-all duration-200 font-medium transform hover:scale-105 shadow-md"
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