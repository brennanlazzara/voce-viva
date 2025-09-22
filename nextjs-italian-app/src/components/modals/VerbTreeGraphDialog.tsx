'use client';

import React from 'react';

interface VerbTreeGraphDialogProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  tense: string;
  verbType: string;
}

function VerbTreeGraphDialog({ isOpen, onClose, title, tense, verbType }: VerbTreeGraphDialogProps) {
  if (!isOpen) return null;

  // Sample verb tree data (in a real app this would come from API)
  const getVerbTreeData = () => {
    const baseVerb = verbType === 'are' ? 'parlare' : verbType === 'ere' ? 'vendere' : 'dormire';
    const stem = baseVerb.slice(0, -3);

    return {
      infinitive: baseVerb,
      stem: stem,
      examples: [
        `${stem}o (Io)`,
        `${stem}i (Tu)`,
        `${stem}${verbType === 'are' ? 'a' : 'e'} (Lui/Lei)`,
        `${stem}iamo (Noi)`,
        `${stem}${verbType === 'are' ? 'ate' : verbType === 'ere' ? 'ete' : 'ite'} (Voi)`,
        `${stem}${verbType === 'are' ? 'ano' : 'ono'} (Loro)`,
      ]
    };
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
            <h3 className="text-xl font-semibold text-gray-900">
              {title}
            </h3>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600 transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Content */}
          <div className="space-y-6">
            {/* Verb Info */}
            <div className="bg-gray-50 rounded-lg p-4">
              <h4 className="text-lg font-medium text-gray-900 mb-2">
                Verb Tree: {verbData.infinitive}
              </h4>
              <p className="text-gray-600">
                <span className="font-medium">Tense:</span> {tense} |
                <span className="font-medium"> Type:</span> -{verbType.toUpperCase()} |
                <span className="font-medium"> Stem:</span> {verbData.stem}
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
                  <div key={index} className="bg-white border border-gray-200 rounded-md p-3 text-center shadow-sm">
                    <span className="font-mono text-sm text-gray-800">{example}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Learning Tips */}
            <div className="bg-yellow-50 border border-yellow-200 rounded-md p-4">
              <h5 className="font-medium text-yellow-800 mb-2">💡 Learning Tips</h5>
              <ul className="text-yellow-700 text-sm space-y-1">
                <li>• Focus on the stem: <strong>{verbData.stem}</strong></li>
                <li>• Add the appropriate ending for each pronoun</li>
                <li>• Notice the pattern for -{verbType.toUpperCase()} verbs</li>
                <li>• Practice with different verbs of the same type</li>
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
                alert('Progress saved!');
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