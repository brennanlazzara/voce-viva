"use client";

import React from "react";
import { getComingSoonAudio } from "./content/presente-indicativo/audio";

interface AudioPronunciationDialogProps {
  isOpen: boolean;
  onClose: () => void;
  currentVerb?: {
    infinitive: string;
    definition: string;
  };
}

function AudioPronunciationDialog({
  isOpen,
  onClose,
  currentVerb,
}: AudioPronunciationDialogProps) {
  if (!isOpen) return null;

  const audioContent = getComingSoonAudio(currentVerb?.infinitive);

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black bg-opacity-50 transition-opacity"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="flex min-h-full items-center justify-center p-4">
        <div className="relative bg-white dark:bg-gray-800 rounded-lg shadow-xl max-w-2xl w-full p-6">
          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
              🔊 {audioContent.title}
            </h3>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
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

          {/* Coming Soon Content */}
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-lg p-8 text-center border-2 border-dashed border-purple-300 dark:border-purple-700">
              <div className="text-6xl mb-4">🔊</div>
              <h4 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                Coming Soon!
              </h4>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                {audioContent.description}
              </p>

              {/* Preview Features */}
              <div className="bg-white dark:bg-gray-700 rounded-lg p-6 text-left">
                <h5 className="font-semibold text-gray-900 dark:text-white mb-3">
                  What&apos;s Coming:
                </h5>
                <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                  {audioContent.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-green-500 mr-2">✓</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Mock Audio Interface */}
            <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-6 opacity-50">
              <div className="flex items-center justify-center space-x-4 mb-4">
                <button
                  disabled
                  className="w-16 h-16 rounded-full bg-purple-500 flex items-center justify-center text-white cursor-not-allowed"
                >
                  <svg
                    className="w-8 h-8"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                  </svg>
                </button>
              </div>
              <div className="text-center text-sm text-gray-600 dark:text-gray-400">
                Audio controls will appear here
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="mt-6 flex justify-end">
            <button
              onClick={onClose}
              className="px-6 py-2 bg-purple-500 text-white rounded-md hover:bg-purple-600 transition-colors focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
            >
              Got It
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AudioPronunciationDialog;
