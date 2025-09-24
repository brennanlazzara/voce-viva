"use client";

import React from "react";

interface VerbTreeGraphDialogProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  tense: string;
  verbType: string;
  currentVerb?: {
    infinitive: string;
    definition: string;
    conjugations?: Record<string, any> | null;
  };
}

function VerbTreeGraphDialog({
  isOpen,
  onClose,
  title,
  tense,
  verbType,
  currentVerb,
}: VerbTreeGraphDialogProps) {
  if (!isOpen) return null;

  // Get verb tree data - use current verb if available, otherwise fallback to regular patterns
  const getVerbTreeData = () => {
    if (
      currentVerb &&
      currentVerb.conjugations &&
      currentVerb.conjugations.presenteIndicativo
    ) {
      // Use actual irregular conjugations from database
      const conjugations = currentVerb.conjugations.presenteIndicativo;
      return {
        infinitive: currentVerb.infinitive,
        definition: currentVerb.definition,
        stem: currentVerb.infinitive.slice(0, -3),
        isIrregular: true,
        examples: [
          `${conjugations.io} (Io)`,
          `${conjugations.tu} (Tu)`,
          `${conjugations.luiLei} (Lui/Lei)`,
          `${conjugations.noi} (Noi)`,
          `${conjugations.voi} (Voi)`,
          `${conjugations.loro} (Loro)`,
        ],
      };
    } else {
      // Fallback to regular verb patterns
      const baseVerb =
        currentVerb?.infinitive ||
        (verbType === "are"
          ? "parlare"
          : verbType === "ere"
          ? "vendere"
          : "dormire");
      const stem = baseVerb.slice(0, -3);

      return {
        infinitive: baseVerb,
        definition: currentVerb?.definition || "example verb",
        stem: stem,
        isIrregular: false,
        examples: [
          `${stem}o (Io)`,
          `${stem}i (Tu)`,
          `${stem}${verbType === "are" ? "a" : "e"} (Lui/Lei)`,
          `${stem}iamo (Noi)`,
          `${stem}${
            verbType === "are" ? "ate" : verbType === "ere" ? "ete" : "ite"
          } (Voi)`,
          `${stem}${verbType === "are" ? "ano" : "ono"} (Loro)`,
        ],
      };
    }
  };

  const verbData = getVerbTreeData();

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black bg-opacity-50 transition-opacity"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="flex min-h-full items-center justify-center p-4">
        <div className="relative bg-white rounded-lg shadow-xl max-w-2xl w-full p-6">
          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
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
          <div className="space-y-6">
            {/* Verb Info */}
            <div
              className={`${
                verbData.isIrregular
                  ? "bg-orange-50 border border-orange-200"
                  : "bg-gray-50"
              } rounded-lg p-4`}
            >
              <h4 className="text-lg font-medium text-gray-900 mb-2">
                {verbData.isIrregular && (
                  <span className="text-orange-600">⚡ Irregular </span>
                )}
                Verb Tree: {verbData.infinitive}
              </h4>
              <p className="text-gray-600 mb-2">
                <span className="font-medium">Definition:</span>{" "}
                {verbData.definition}
              </p>
              <p className="text-gray-600">
                <span className="font-medium">Tense:</span> {tense} |
                <span className="font-medium"> Type:</span> -
                {verbType.toUpperCase()} |
                <span className="font-medium"> Stem:</span> {verbData.stem}
                {verbData.isIrregular && (
                  <span className="text-orange-600 font-medium">
                    {" "}
                    | Status: IRREGULAR
                  </span>
                )}
              </p>
            </div>

            {/* Tree Visualization */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg p-6">
              <h5 className="text-lg font-medium text-gray-900 mb-4 text-center">
                Conjugation Tree
              </h5>

              {/* Root */}
              <div className="flex justify-center mb-6">
                <div className="bg-blue-500 text-white px-4 py-2 rounded-lg font-semibold">
                  {verbData.infinitive}
                </div>
              </div>

              {/* Stem */}
              <div className="flex justify-center mb-6">
                <div className="bg-green-500 text-white px-4 py-2 rounded-lg">
                  Stem: {verbData.stem}
                </div>
              </div>

              {/* Branches */}
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {verbData.examples.map((example, index) => (
                  <div
                    key={index}
                    className="bg-white border border-gray-200 rounded-md p-3 text-center shadow-sm"
                  >
                    <span className="font-mono text-sm text-gray-800">
                      {example}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Learning Tips */}
            <div
              className={`${
                verbData.isIrregular
                  ? "bg-red-50 border border-red-200"
                  : "bg-yellow-50 border border-yellow-200"
              } rounded-md p-4`}
            >
              <h5
                className={`font-medium mb-2 ${
                  verbData.isIrregular ? "text-red-800" : "text-yellow-800"
                }`}
              >
                💡 Learning Tips
              </h5>
              <ul
                className={`text-sm space-y-1 ${
                  verbData.isIrregular ? "text-red-700" : "text-yellow-700"
                }`}
              >
                {verbData.isIrregular ? (
                  <>
                    <li>
                      • <strong>IRREGULAR VERB:</strong> Each form must be
                      memorized individually
                    </li>
                    <li>
                      • The stem <strong>{verbData.stem}</strong> doesn't follow
                      regular patterns
                    </li>
                    <li>
                      • Focus on memorizing each conjugation:{" "}
                      {verbData.examples.join(", ")}
                    </li>
                    <li>
                      • Practice frequently - irregular verbs are often the most
                      common ones
                    </li>
                    <li>
                      • Group similar irregular verbs together for easier
                      learning
                    </li>
                  </>
                ) : (
                  <>
                    <li>
                      • Focus on the stem: <strong>{verbData.stem}</strong>
                    </li>
                    <li>• Add the appropriate ending for each pronoun</li>
                    <li>
                      • Notice the pattern for -{verbType.toUpperCase()} verbs
                    </li>
                    <li>• Practice with different verbs of the same type</li>
                  </>
                )}
              </ul>
            </div>
          </div>

          {/* Footer */}
          <div className="mt-6 flex justify-end space-x-3">
            <button
              onClick={onClose}
              className="px-4 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600 transition-colors focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
            >
              Close
            </button>
            <button
              onClick={() => {
                /* In a real app, this would save progress */
                alert("Progress saved!");
              }}
              className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition-colors focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
            >
              Save Progress
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VerbTreeGraphDialog;
