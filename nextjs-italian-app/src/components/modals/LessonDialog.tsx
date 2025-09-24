"use client";

import React from "react";

interface LessonDialogProps {
  isOpen: boolean;
  onClose: () => void;
  tense: string;
  mood: string;
  currentVerb?: {
    infinitive: string;
    definition: string;
    conjugations?: Record<string, any> | null;
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

  const getLessonContent = () => {
    const isIrregular =
      currentVerb &&
      currentVerb.conjugations &&
      currentVerb.conjugations.presenteIndicativo;

    if (tense === "presente" && mood === "indicativo") {
      if (isIrregular) {
        // Irregular verb lesson
        const conjugations = currentVerb!.conjugations!.presenteIndicativo;
        return {
          title: `Irregular Verb: ${currentVerb!.infinitive} - Complete Guide`,
          isIrregular: true,
          sections: [
            {
              title: "⚡ What makes this verb irregular?",
              content: `The verb "${currentVerb!.infinitive}" (${
                currentVerb!.definition
              }) is irregular because it doesn't follow the standard conjugation patterns. Each form must be memorized individually.`,
              examples: [
                `Unlike regular verbs, "${
                  currentVerb!.infinitive
                }" has unique forms that don't follow predictable patterns.`,
                "Irregular verbs are often the most commonly used verbs in Italian!",
              ],
            },
            {
              title: `Complete Conjugation of "${currentVerb!.infinitive}"`,
              content:
                "Here are all the present indicative forms you need to memorize:",
              examples: [
                `io ${conjugations.io}`,
                `tu ${conjugations.tu}`,
                `lui/lei ${conjugations.luiLei}`,
                `noi ${conjugations.noi}`,
                `voi ${conjugations.voi}`,
                `loro ${conjugations.loro}`,
              ],
            },
            {
              title: "💡 Memory Tips for Irregular Verbs",
              content: "Strategies to help you remember these unique forms:",
              examples: [
                "Practice daily with flashcards",
                "Use the verb in sentences to build context",
                "Group similar irregular verbs together",
                "Focus on the most common forms first (io, tu, lui/lei)",
              ],
            },
            {
              title: "Usage Examples",
              content: `Common ways to use "${
                currentVerb!.infinitive
              }" in everyday Italian:`,
              examples: [
                `Io ${conjugations.io} - Example: "Io ${
                  conjugations.io
                } molto bene" (I ${currentVerb!.definition.replace(
                  "to ",
                  ""
                )} very well)`,
                `Tu ${conjugations.tu} - Example: "Tu ${
                  conjugations.tu
                }..." (You ${currentVerb!.definition.replace("to ", "")}...)`,
                `Noi ${conjugations.noi} - Example: "Noi ${
                  conjugations.noi
                }..." (We ${currentVerb!.definition.replace("to ", "")}...)`,
              ],
            },
          ],
        };
      } else {
        // Regular verb lesson
        return {
          title: "Presente Indicativo - Complete Guide",
          isIrregular: false,
          sections: [
            {
              title: "What is the Presente Indicativo?",
              content:
                "The Presente Indicativo (Present Indicative) is used to express actions happening now, habitual actions, or general truths.",
              examples: [
                "Io parlo italiano (I speak Italian)",
                "Lei studia ogni giorno (She studies every day)",
              ],
            },
            {
              title: "-ARE Verbs (First Conjugation)",
              content: "Remove -are and add: -o, -i, -a, -iamo, -ate, -ano",
              examples: [
                "parlare → io parlo, tu parli, lui parla, noi parliamo, voi parlate, loro parlano",
              ],
            },
            {
              title: "-ERE Verbs (Second Conjugation)",
              content: "Remove -ere and add: -o, -i, -e, -iamo, -ete, -ono",
              examples: [
                "vendere → io vendo, tu vendi, lui vende, noi vendiamo, voi vendete, loro vendono",
              ],
            },
            {
              title: "-IRE Verbs (Third Conjugation)",
              content: "Remove -ire and add: -o, -i, -e, -iamo, -ite, -ono",
              examples: [
                "dormire → io dormo, tu dormi, lui dorme, noi dormiamo, voi dormite, loro dormono",
              ],
            },
          ],
        };
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
