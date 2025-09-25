'use client';

import React from 'react';

interface HintDialogProps {
  isOpen: boolean;
  onClose: () => void;
  hint: {
    type: string;
    endings: string[];
    tense?: string;
  };
}

function HintDialog({ isOpen, onClose, hint }: HintDialogProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black bg-opacity-50 transition-opacity"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="flex min-h-full items-center justify-center p-4">
        <div className="relative bg-white rounded-lg shadow-xl max-w-md w-full p-6">
          {/* Header */}
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-900">
              Verb Conjugation Hint
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
          <div className="space-y-4">
            <div className="bg-blue-50 border border-blue-200 rounded-md p-4">
              <p className="text-blue-800 font-medium mb-2">
                {hint.type}
              </p>
              {hint.tense && (
                <p className="text-blue-700 font-medium mb-2">
                  {hint.tense}
                </p>
              )}
              <div className="text-blue-700">
                <p className="text-sm mb-2">
                  {hint.tense ? "Conjugated forms:" : "Conjugation endings for this verb type:"}
                </p>
                <div className="grid grid-cols-2 gap-2">
                  {hint.endings.map((ending, index) => (
                    <div key={index} className="bg-white px-2 py-1 rounded text-center text-sm font-mono">
                      {ending}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="bg-yellow-50 border border-yellow-200 rounded-md p-3">
              <p className="text-yellow-800 text-sm">
                💡 <strong>Tip:</strong> {hint.tense
                  ? "Passato Prossimo requires the auxiliary verb + past participle. Match the pronoun with the correct auxiliary form!"
                  : "Remove the infinitive ending (-are, -ere, -ire) and add the appropriate ending based on the pronoun."
                }
              </p>
            </div>
          </div>

          {/* Footer */}
          <div className="mt-6 flex justify-end">
            <button
              onClick={onClose}
              className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              Got it!
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HintDialog;