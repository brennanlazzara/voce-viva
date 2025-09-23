'use client';

import VerbPracticeCard from "../components/VerbPracticeCard";
import { useState, useEffect } from "react";
import { usePhraseData } from "../hooks/usePhraseData";

export default function Home() {
  const [selectedTense, setSelectedTense] = useState("presente");
  const [selectedMood, setSelectedMood] = useState("indicativo");
  const [dailyPhrase, setDailyPhrase] = useState<any>(null);
  const { fetchPhrases } = usePhraseData();

  useEffect(() => {
    const loadDailyPhrase = async () => {
      try {
        const phrases = await fetchPhrases();
        if (phrases.length > 0) {
          // Use date to pick consistent daily phrase
          const today = new Date().toDateString();
          const phraseIndex = today.length % phrases.length;
          setDailyPhrase(phrases[phraseIndex]);
        }
      } catch (error) {
        console.error("Error loading daily phrase:", error);
      }
    };

    loadDailyPhrase();
  }, []); // Empty dependency array - only run once on mount

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Welcome Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="text-6xl animate-pulse">🇮🇹</div>
            <div>
              <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
                Italian Verb Practice
              </h1>
              <div className="h-1 w-32 bg-gradient-to-r from-blue-500 to-green-500 mx-auto mt-2 rounded-full"></div>
            </div>
          </div>
          <p className="text-xl text-gray-700 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Master Italian verb conjugations with interactive exercises and beautiful learning tools
          </p>
        </div>

        {/* Phrase of the Day */}
        {dailyPhrase && (
          <div className="bg-gradient-to-r from-emerald-100 via-white to-blue-100 dark:from-emerald-900/20 dark:via-gray-800 dark:to-blue-900/20 rounded-2xl p-8 mb-12 border border-emerald-200 dark:border-emerald-700 shadow-lg">
            <div className="text-center">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-500 to-blue-500 text-white px-4 py-2 rounded-full text-sm font-semibold mb-4">
                <span>⭐</span>
                Phrase of the Day
                <span>⭐</span>
              </div>
              <div className="space-y-3">
                <p className="text-3xl font-bold text-emerald-800 dark:text-emerald-300 italic">
                  "{dailyPhrase.phrase}"
                </p>
                <p className="text-xl text-blue-700 dark:text-blue-300 font-semibold">
                  {dailyPhrase.translation}
                </p>
                <p className="text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
                  {dailyPhrase.meaning}
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Tense Selector */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 mb-12 border border-gray-100 dark:border-gray-700">
          <div className="text-center mb-6">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
              🎯 Choose Your Practice Mode
            </h2>
            <p className="text-gray-600 dark:text-gray-300">Select a mood and tense to practice</p>
          </div>
          <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
            <div>
              <label className="flex items-center gap-2 text-sm font-bold text-gray-700 dark:text-gray-300 mb-3">
                <span>🎭</span> Mood
              </label>
              <select
                value={selectedMood}
                onChange={(e) => setSelectedMood(e.target.value)}
                className="w-full px-4 py-3 border-2 border-gray-200 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 text-lg bg-gray-50 dark:bg-gray-700 dark:text-white hover:bg-white dark:hover:bg-gray-600"
              >
                <option value="indicativo">Indicativo (Indicative)</option>
                <option value="congiuntivo">Congiuntivo (Subjunctive)</option>
                <option value="condizionale">Condizionale (Conditional)</option>
              </select>
            </div>
            <div>
              <label className="flex items-center gap-2 text-sm font-bold text-gray-700 dark:text-gray-300 mb-3">
                <span>⏰</span> Tense
              </label>
              <select
                value={selectedTense}
                onChange={(e) => setSelectedTense(e.target.value)}
                className="w-full px-4 py-3 border-2 border-gray-200 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 text-lg bg-gray-50 dark:bg-gray-700 dark:text-white hover:bg-white dark:hover:bg-gray-600"
              >
                <option value="presente">Presente (Present)</option>
                <option value="passato-prossimo">Passato Prossimo (Present Perfect)</option>
                <option value="imperfetto">Imperfetto (Imperfect)</option>
                <option value="futuro-semplice">Futuro Semplice (Simple Future)</option>
              </select>
            </div>
          </div>
        </div>

        {/* Practice Cards Section */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-2">
              📚 Interactive Practice Cards
            </h2>
            <p className="text-gray-600 dark:text-gray-300">Click on each card to practice different verb types</p>
          </div>
          <div className="grid xl:grid-cols-3 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <VerbPracticeCard
              verbType="are"
              tense={selectedTense}
              mood={selectedMood}
              title="Practice -ARE Verbs"
            />
            <VerbPracticeCard
              verbType="ere"
              tense={selectedTense}
              mood={selectedMood}
              title="Practice -ERE Verbs"
            />
            <VerbPracticeCard
              verbType="ire"
              tense={selectedTense}
              mood={selectedMood}
              title="Practice -IRE Verbs"
            />
          </div>
        </div>

        {/* Quick Links */}
        <div className="bg-gradient-to-r from-blue-100 via-white to-purple-100 dark:from-blue-900/20 dark:via-gray-800 dark:to-purple-900/20 rounded-2xl p-8 shadow-lg border border-blue-200 dark:border-blue-700">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-blue-800 dark:text-blue-300 mb-2">
              🚀 Quick Access Links
            </h2>
            <p className="text-blue-600 dark:text-blue-300">Jump to specific tenses and moods</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <a
              href="/verb-conjugation/indicativo/presente"
              className="group block bg-white dark:bg-gray-700 p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-105 border border-gray-100 dark:border-gray-600"
            >
              <div className="text-center">
                <div className="text-3xl mb-2">🌟</div>
                <div className="text-blue-600 dark:text-blue-400 font-bold text-lg group-hover:text-blue-700 dark:group-hover:text-blue-300">Presente Indicativo</div>
                <div className="text-sm text-gray-600 dark:text-gray-400 mt-1">Most common tense</div>
              </div>
            </a>
            <a
              href="/verb-conjugation/indicativo/passato-prossimo"
              className="group block bg-white dark:bg-gray-700 p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-105 border border-gray-100 dark:border-gray-600"
            >
              <div className="text-center">
                <div className="text-3xl mb-2">📅</div>
                <div className="text-green-600 dark:text-green-400 font-bold text-lg group-hover:text-green-700 dark:group-hover:text-green-300">Passato Prossimo</div>
                <div className="text-sm text-gray-600 dark:text-gray-400 mt-1">Past tense</div>
              </div>
            </a>
            <a
              href="/verb-conjugation/congiuntivo/presente"
              className="group block bg-white dark:bg-gray-700 p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-105 border border-gray-100 dark:border-gray-600"
            >
              <div className="text-center">
                <div className="text-3xl mb-2">🎭</div>
                <div className="text-purple-600 dark:text-purple-400 font-bold text-lg group-hover:text-purple-700 dark:group-hover:text-purple-300">Congiuntivo Presente</div>
                <div className="text-sm text-gray-600 dark:text-gray-400 mt-1">Subjunctive mood</div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
