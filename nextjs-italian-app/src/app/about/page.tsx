export default function About() {
  return (
    <div className="min-h-screen p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-blue-600 mb-6 text-center">
          About VoceViva
        </h1>

        <div className="prose prose-lg mx-auto">
          <div className="bg-white rounded-lg shadow-md p-8 space-y-6">
            <p className="text-xl text-gray-700 leading-relaxed">
              Master Italian verb conjugations with our interactive learning platform,
              now powered by <strong>Next.js 14</strong> for the ultimate learning experience!
            </p>

            <div className="grid md:grid-cols-2 gap-8 mt-8">
              <div>
                <h2 className="text-2xl font-semibold text-green-600 mb-4">
                  🎯 Learning Features
                </h2>
                <ul className="space-y-2 text-gray-700">
                  <li>• Interactive verb conjugation exercises</li>
                  <li>• All Italian verb tenses and moods</li>
                  <li>• Progress tracking</li>
                  <li>• Personalized practice sessions</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-purple-600 mb-4">
                  🚀 Technical Excellence
                </h2>
                <ul className="space-y-2 text-gray-700">
                  <li>• Next.js 14 App Router</li>
                  <li>• Server-Side Rendering</li>
                  <li>• Dynamic routing system</li>
                  <li>• TypeScript & Tailwind CSS</li>
                </ul>
              </div>
            </div>

            <div className="bg-blue-50 p-6 rounded-lg mt-8">
              <h2 className="text-xl font-semibold text-blue-800 mb-3">
                🔥 Migration Success Story
              </h2>
              <p className="text-blue-700">
                Successfully migrated from React Router with 25+ individual routes
                to Next.js 14 dynamic routing with a single <code>[mood]/[tense]</code> route pattern!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}