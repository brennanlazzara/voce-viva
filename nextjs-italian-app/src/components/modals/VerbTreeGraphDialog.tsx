"use client";

import React from "react";
import {
  getPresenteIndicativoTree,
  getDefaultPresenteIndicativoTree,
  getVerbTreeLearningTips as getPresenteTips,
  type VerbTreeData as PresenteTreeData,
} from "./content/presente-indicativo/tree";
import {
  getPassatoProssimoTree,
  getDefaultPassatoProssimoTree,
  getVerbTreeLearningTips as getPassatoTips,
  type VerbTreeData as PassatoTreeData,
} from "./content/passato-prossimo/tree";
import {
  getFuturoSempliceTree,
  getDefaultFuturoSempliceTree,
  getVerbTreeLearningTips as getFuturoTips,
  type VerbTreeData as FuturoTreeData,
} from "./content/futuro-semplice/tree";
import {
  getImperfettoTree,
  getDefaultImperfettoTree,
  getVerbTreeLearningTips as getImperfettoTips,
  type VerbTreeData as ImperfettoTreeData,
} from "./content/imperfetto/tree";

type VerbTreeData =
  | PresenteTreeData
  | PassatoTreeData
  | FuturoTreeData
  | ImperfettoTreeData;

interface VerbTreeGraphDialogProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  tense: string;
  verbType: string;
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
      regularImperfetto?: boolean;
    };
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
  const getVerbTreeData = (): VerbTreeData => {
    const hasConjugations = currentVerb && currentVerb.conjugation;

    // Presente Indicativo
    if (tense === "presente") {
      if (hasConjugations) {
        const isIrregular =
          currentVerb.metadata.regularPresenteIndicativo === false;
        return getPresenteIndicativoTree(
          currentVerb.infinitive,
          currentVerb.definition,
          {
            io: currentVerb.conjugation!.io!,
            tu: currentVerb.conjugation!.tu!,
            luiLei: currentVerb.conjugation!.luiLei!,
            noi: currentVerb.conjugation!.noi!,
            voi: currentVerb.conjugation!.voi!,
            loro: currentVerb.conjugation!.loro!,
          },
          isIrregular
        );
      }
      return getDefaultPresenteIndicativoTree(
        verbType as "are" | "ere" | "ire",
        currentVerb?.infinitive,
        currentVerb?.definition
      );
    }

    // Passato Prossimo
    if (tense === "passato-prossimo") {
      if (hasConjugations) {
        const isIrregular =
          currentVerb.metadata.regularPassatoProssimo === false;
        return getPassatoProssimoTree(
          {
            infinitive: currentVerb.infinitive,
            definition: currentVerb.definition,
            auxiliaryVerb: currentVerb.metadata.auxiliaryVerb,
          },
          {
            io: currentVerb.conjugation!.io!,
            tu: currentVerb.conjugation!.tu!,
            luiLei: currentVerb.conjugation!.luiLei!,
            noi: currentVerb.conjugation!.noi!,
            voi: currentVerb.conjugation!.voi!,
            loro: currentVerb.conjugation!.loro!,
          },
          isIrregular
        );
      }
      return getDefaultPassatoProssimoTree();
    }

    // Futuro Semplice
    if (tense === "futuro-semplice") {
      if (hasConjugations) {
        const isIrregular =
          currentVerb.metadata.regularFuturoSemplice === false;
        return getFuturoSempliceTree(
          currentVerb.infinitive,
          currentVerb.definition,
          {
            io: currentVerb.conjugation!.io!,
            tu: currentVerb.conjugation!.tu!,
            luiLei: currentVerb.conjugation!.luiLei!,
            noi: currentVerb.conjugation!.noi!,
            voi: currentVerb.conjugation!.voi!,
            loro: currentVerb.conjugation!.loro!,
          },
          isIrregular
        );
      }
      return getDefaultFuturoSempliceTree(
        verbType as "are" | "ere" | "ire",
        currentVerb?.infinitive,
        currentVerb?.definition
      );
    }

    // Imperfetto
    if (tense === "imperfetto") {
      if (hasConjugations) {
        const isIrregular = currentVerb.metadata.regularImperfetto === false;
        return getImperfettoTree(
          {
            infinitive: currentVerb.infinitive,
            definition: currentVerb.definition,
          },
          {
            io: currentVerb.conjugation!.io!,
            tu: currentVerb.conjugation!.tu!,
            luiLei: currentVerb.conjugation!.luiLei!,
            noi: currentVerb.conjugation!.noi!,
            voi: currentVerb.conjugation!.voi!,
            loro: currentVerb.conjugation!.loro!,
          },
          isIrregular
        );
      }
      return getDefaultImperfettoTree();
    }

    // Default fallback
    return getDefaultPresenteIndicativoTree(
      verbType as "are" | "ere" | "ire",
      currentVerb?.infinitive,
      currentVerb?.definition
    );
  };

  const verbData = getVerbTreeData();

  // Get learning tips based on tense
  const learningTips =
    tense === "passato-prossimo"
      ? getPassatoTips(
          verbType as "are" | "ere" | "ire",
          verbData.isIrregular,
          (verbData as PassatoTreeData).auxiliaryVerb
        )
      : tense === "futuro-semplice"
      ? getFuturoTips(verbData.isIrregular, verbData.stem, verbType)
      : tense === "imperfetto"
      ? getImperfettoTips(verbType as "are" | "ere" | "ire", verbData.isIrregular)
      : getPresenteTips(verbData.isIrregular, verbData.stem, verbType);

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
                {tense === "passato-prossimo" && (
                  <>
                    {" "}
                    |<span className="font-medium"> Auxiliary:</span>{" "}
                    {(verbData as PassatoTreeData).auxiliaryVerb} |
                    <span className="font-medium"> Past Participle:</span>{" "}
                    {(verbData as PassatoTreeData).pastParticiple}
                  </>
                )}
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
                {learningTips.map((tip, index) => (
                  <li key={index}>{tip}</li>
                ))}
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
