"use client";

import React from "react";
import {
  getPresenteIndicativoLesson,
  getGeneralPresenteIndicativoLesson,
  type LessonContent as PresenteLessonContent,
} from "./content/presente-indicativo/lesson";
import {
  getPassatoProssimoLesson,
  getGeneralPassatoProssimoLesson,
  type LessonContent as PassatoLessonContent,
} from "./content/passato-prossimo/lesson";
import {
  getFuturoSempliceLesson,
  getGeneralFuturoSempliceLesson,
  type LessonContent as FuturoLessonContent,
} from "./content/futuro-semplice/lesson";

type LessonContent =
  | PresenteLessonContent
  | PassatoLessonContent
  | FuturoLessonContent;

interface LessonDialogProps {
  isOpen: boolean;
  onClose: () => void;
  tense: string;
  mood: string;
  currentVerb?: {
    infinitive: string;
    definition: string;
    conjugation: {
      io: string | null;
      tu: string | null;
      luiLei: string | null;
      noi: string | null;
      voi: string | null;
      loro: string | null;
    } | null;
    metadata: {
      auxiliaryVerb?: string;
      regularPresenteIndicativo?: boolean;
      regularPassatoProssimo?: boolean;
      regularFuturoSemplice?: boolean;
    };
  };
}

function LessonDialog({
  isOpen,
  onClose,
  tense,
  mood,
  currentVerb,
}: LessonDialogProps) {
  if (!isOpen) return null;

  const getLessonContent = (): LessonContent => {
    const hasConjugations = currentVerb && currentVerb.conjugation;

    // Presente Indicativo
    if (tense === "presente" && mood === "indicativo") {
      if (hasConjugations) {
        const isIrregular =
          currentVerb.metadata.regularPresenteIndicativo === false;
        return getPresenteIndicativoLesson(
          {
            infinitive: currentVerb.infinitive,
            definition: currentVerb.definition,
            conjugations: {
              io: currentVerb.conjugation!.io!,
              tu: currentVerb.conjugation!.tu!,
              luiLei: currentVerb.conjugation!.luiLei!,
              noi: currentVerb.conjugation!.noi!,
              voi: currentVerb.conjugation!.voi!,
              loro: currentVerb.conjugation!.loro!,
            },
          },
          isIrregular
        );
      } else {
        return getGeneralPresenteIndicativoLesson();
      }
    }

    // Passato Prossimo
    if (tense === "passato-prossimo" && mood === "indicativo") {
      if (hasConjugations) {
        const isIrregular =
          currentVerb.metadata.regularPassatoProssimo === false;
        return getPassatoProssimoLesson(
          {
            infinitive: currentVerb.infinitive,
            definition: currentVerb.definition,
            conjugations: {
              io: currentVerb.conjugation!.io!,
              tu: currentVerb.conjugation!.tu!,
              luiLei: currentVerb.conjugation!.luiLei!,
              noi: currentVerb.conjugation!.noi!,
              voi: currentVerb.conjugation!.voi!,
              loro: currentVerb.conjugation!.loro!,
            },
            auxiliaryVerb: currentVerb.metadata.auxiliaryVerb,
          },
          isIrregular
        );
      } else {
        return getGeneralPassatoProssimoLesson();
      }
    }

    // Futuro Semplice
    if (tense === "futuro-semplice" && mood === "indicativo") {
      if (hasConjugations) {
        const isIrregular =
          currentVerb.metadata.regularFuturoSemplice === false;
        return getFuturoSempliceLesson(
          {
            infinitive: currentVerb.infinitive,
            definition: currentVerb.definition,
            conjugations: {
              io: currentVerb.conjugation!.io!,
              tu: currentVerb.conjugation!.tu!,
              luiLei: currentVerb.conjugation!.luiLei!,
              noi: currentVerb.conjugation!.noi!,
              voi: currentVerb.conjugation!.voi!,
              loro: currentVerb.conjugation!.loro!,
            },
          },
          isIrregular
        );
      } else {
        return getGeneralFuturoSempliceLesson();
      }
    }

    // Default lesson content for other tenses
    return {
      title: `${mood.charAt(0).toUpperCase() + mood.slice(1)} ${
        tense.charAt(0).toUpperCase() + tense.slice(1)
      } - Guide`,
      isIrregular: false,
      sections: [
        {
          title: "About This Tense",
          content: `The ${mood} ${tense} is an important tense in Italian grammar.`,
          examples: [
            "This lesson content will be expanded based on the specific tense.",
          ],
        },
      ],
    };
  };

  const lesson = getLessonContent();

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black bg-opacity-50 transition-opacity"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="flex min-h-full items-center justify-center p-4">
        <div className="relative bg-white rounded-lg shadow-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
          {/* Header */}
          <div
            className={`sticky top-0 ${
              lesson.isIrregular
                ? "bg-orange-50 border-orange-200"
                : "bg-white border-gray-200"
            } border-b px-6 py-4 flex items-center justify-between`}
          >
            <h3 className="text-xl font-semibold text-gray-900">
              {lesson.isIrregular && (
                <span className="text-orange-600">⚡ </span>
              )}
              {lesson.title}
            </h3>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600 transition-colors"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          {/* Content */}
          <div className="p-6 space-y-6">
            {lesson.sections.map((section, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6">
                <h4 className="text-lg font-semibold text-gray-900 mb-3">
                  {section.title}
                </h4>
                <p className="text-gray-700 mb-4">{section.content}</p>
                {section.examples && section.examples.length > 0 && (
                  <div className="bg-white border border-gray-200 rounded-md p-4">
                    <h5 className="font-medium text-gray-800 mb-2">
                      Examples:
                    </h5>
                    <ul className="space-y-1">
                      {section.examples.map((example, exIndex) => (
                        <li
                          key={exIndex}
                          className="text-gray-600 font-mono text-sm"
                        >
                          • {example}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}

            {/* Practice Tips */}
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
              <h4 className="text-lg font-semibold text-blue-900 mb-3">
                📚 Study Tips
              </h4>
              <ul className="text-blue-800 space-y-2">
                <li>• Start by memorizing the verb endings for each pronoun</li>
                <li>
                  • Practice with regular verbs before moving to irregular ones
                </li>
                <li>• Use flashcards to reinforce the conjugation patterns</li>
                <li>• Read Italian sentences aloud to improve pronunciation</li>
                <li>• Practice daily with the interactive cards above</li>
              </ul>
            </div>

            {/* Quick Reference */}
            {tense === "presente" && mood === "indicativo" && (
              <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                <h4 className="text-lg font-semibold text-green-900 mb-3">
                  📋 Quick Reference
                </h4>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="bg-white rounded-md p-3">
                    <h5 className="font-medium text-green-800 mb-2">
                      -ARE Verbs
                    </h5>
                    <div className="text-sm text-green-700 font-mono space-y-1">
                      <div>io → -o</div>
                      <div>tu → -i</div>
                      <div>lui/lei → -a</div>
                      <div>noi → -iamo</div>
                      <div>voi → -ate</div>
                      <div>loro → -ano</div>
                    </div>
                  </div>
                  <div className="bg-white rounded-md p-3">
                    <h5 className="font-medium text-blue-800 mb-2">
                      -ERE Verbs
                    </h5>
                    <div className="text-sm text-blue-700 font-mono space-y-1">
                      <div>io → -o</div>
                      <div>tu → -i</div>
                      <div>lui/lei → -e</div>
                      <div>noi → -iamo</div>
                      <div>voi → -ete</div>
                      <div>loro → -ono</div>
                    </div>
                  </div>
                  <div className="bg-white rounded-md p-3">
                    <h5 className="font-medium text-purple-800 mb-2">
                      -IRE Verbs
                    </h5>
                    <div className="text-sm text-purple-700 font-mono space-y-1">
                      <div>io → -o</div>
                      <div>tu → -i</div>
                      <div>lui/lei → -e</div>
                      <div>noi → -iamo</div>
                      <div>voi → -ite</div>
                      <div>loro → -ono</div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Footer */}
          <div className="sticky bottom-0 bg-white border-t border-gray-200 px-6 py-4 flex justify-end space-x-3">
            <button
              onClick={onClose}
              className="px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              Continue Learning
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LessonDialog;
