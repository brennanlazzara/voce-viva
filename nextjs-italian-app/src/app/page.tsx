export default function Home() {
  return (
    <div className="min-h-screen p-8">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        <div className="flex items-center justify-center gap-3">
          <span className="text-5xl">🇮🇹</span>
          <h1 className="text-4xl font-bold text-blue-600">
            Italian Verb Master
          </h1>
        </div>

        <p className="text-xl text-gray-600">
          Learn Italian verb conjugations with interactive exercises
        </p>

        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-green-600">
            🎉 Next.js 14 Migration Complete!
          </h2>
          <p className="text-gray-600">
            Phase 1: Foundation setup with App Router and TypeScript
          </p>

          <button className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-lg text-lg font-medium transition-colors">
            Start Learning Verbs
          </button>
        </div>
      </div>
    </div>
  );
}
