type PageProps = {
  params: Promise<{
    mood: string;
    tense: string;
  }>;
};

export default async function VerbConjugationPage({ params }: PageProps) {
  const { mood, tense } = await params;

  // Transform URL params back to readable format
  const formatParam = (param: string) =>
    param
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');

  const moodName = formatParam(mood);
  const tenseName = formatParam(tense);

  return (
    <div className="min-h-screen p-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-blue-600 mb-2">
            Italian Verb Conjugation
          </h1>
          <div className="text-xl text-gray-700">
            <span className="font-semibold text-green-600">{moodName}</span>
            {' → '}
            <span className="font-semibold text-purple-600">{tenseName}</span>
          </div>
        </div>

        {/* Route Info - Great for Interview Demo! */}
        <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-8">
          <h2 className="text-lg font-semibold text-blue-800 mb-2">
            🎯 Dynamic Route Demo
          </h2>
          <p className="text-blue-700">
            <strong>Route:</strong> <code>/verb-conjugation/{mood}/{tense}</code>
          </p>
          <p className="text-blue-700 mt-1">
            <strong>Replaces:</strong> 25+ individual React Router routes with 1 dynamic route!
          </p>
        </div>

        {/* Content Area */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">
            {moodName} - {tenseName}
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Verb Conjugation Table Placeholder */}
            <div className="space-y-4">
              <h3 className="text-lg font-medium text-gray-700">Conjugation Table</h3>
              <div className="bg-gray-50 p-4 rounded">
                <p className="text-gray-600">
                  🚧 Verb conjugation table will be implemented here
                </p>
                <p className="text-sm text-gray-500 mt-2">
                  This will fetch verb data based on mood/tense parameters
                </p>
              </div>
            </div>

            {/* Practice Exercises Placeholder */}
            <div className="space-y-4">
              <h3 className="text-lg font-medium text-gray-700">Practice Exercises</h3>
              <div className="bg-gray-50 p-4 rounded">
                <p className="text-gray-600">
                  🎯 Interactive exercises will be implemented here
                </p>
                <p className="text-sm text-gray-500 mt-2">
                  Dynamic content based on the specific mood/tense combination
                </p>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="mt-8 pt-6 border-t">
            <div className="flex flex-wrap gap-2">
              <span className="text-sm font-medium text-gray-700">Quick Navigation:</span>
              <a href="/verb-conjugation/indicativo/presente"
                 className="text-sm bg-blue-100 text-blue-800 px-2 py-1 rounded hover:bg-blue-200">
                Indicativo Presente
              </a>
              <a href="/verb-conjugation/congiuntivo/passato"
                 className="text-sm bg-green-100 text-green-800 px-2 py-1 rounded hover:bg-green-200">
                Congiuntivo Passato
              </a>
              <a href="/verb-conjugation/condizionale/presente"
                 className="text-sm bg-purple-100 text-purple-800 px-2 py-1 rounded hover:bg-purple-200">
                Condizionale Presente
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}