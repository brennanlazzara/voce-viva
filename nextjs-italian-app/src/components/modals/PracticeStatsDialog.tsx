"use client";

import React from "react";
import { getComingSoonStats } from "./content/presente-indicativo/stats";

interface PracticeStatsDialogProps {
  isOpen: boolean;
  onClose: () => void;
  currentVerb?: {
    infinitive: string;
    definition: string;
  };
}

function PracticeStatsDialog({
  isOpen,
  onClose,
  currentVerb,
}: PracticeStatsDialogProps) {
  if (!isOpen) return null;

  const statsContent = getComingSoonStats(currentVerb?.infinitive);

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
              📊 {statsContent.title}
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
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-lg p-8 text-center border-2 border-dashed border-blue-300 dark:border-blue-700">
              <div className="text-6xl mb-4">📊</div>
              <h4 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                Coming Soon!
              </h4>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                {statsContent.description}
              </p>

              {/* Preview Features */}
              <div className="bg-white dark:bg-gray-700 rounded-lg p-6 text-left">
                <h5 className="font-semibold text-gray-900 dark:text-white mb-3">
                  What&apos;s Coming:
                </h5>
                <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                  {statsContent.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-green-500 mr-2">✓</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Mock Stats Preview */}
            {statsContent.previewStats && (
              <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-6 opacity-50">
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">
                      {statsContent.previewStats.accuracy}
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">
                      Accuracy
                    </div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-green-600 dark:text-green-400">
                      {statsContent.previewStats.timesPracticed}
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">
                      Times Practiced
                    </div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-purple-600 dark:text-purple-400">
                      {statsContent.previewStats.masteryLevel}
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">
                      Mastery Level
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Footer */}
          <div className="mt-6 flex justify-end">
            <button
              onClick={onClose}
              className="px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              Got It
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PracticeStatsDialog;
