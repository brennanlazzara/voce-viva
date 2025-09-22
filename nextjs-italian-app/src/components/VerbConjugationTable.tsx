import React from "react";

interface VerbConjugationTableProps {
  verbType: "are" | "ere" | "ire" | "pronounRoot" | "irregular";
  tense: string;
  mood: string;
  irregularConjugations?: { [key: string]: string };
}

// Expanded conjugation data for all moods and tenses
const conjugationEndings: { [key: string]: { [tense: string]: string[] } } = {
  pronounRoot: {
    presente: ["Io", "Tu", "Lui/Lei", "Noi", "Voi", "Loro"],
  },
  are: {
    // Indicativo
    presente: ["o", "i", "a", "iamo", "ate", "ano"],
    passatoProssimo: ["ato", "ato", "ato", "ato", "ato", "ato"],
    imperfetto: ["avo", "avi", "ava", "avamo", "avate", "avano"],
    futuroSemplice: ["erò", "erai", "erà", "eremo", "erete", "eranno"],

    // Congiuntivo
    presenteCongiuntivo: ["i", "i", "i", "iamo", "iate", "ino"],
    passatoCongiuntivo: ["ato", "ato", "ato", "ato", "ato", "ato"],
    imperfettoCongiuntivo: ["assi", "assi", "asse", "assimo", "aste", "assero"],

    // Condizionale
    presenteCondizionale: ["erei", "eresti", "erebbe", "eremmo", "ereste", "erebbero"],
    passatoCondizionale: ["ato", "ato", "ato", "ato", "ato", "ato"],

    // Imperativo
    presenteImperativo: ["—", "a", "i", "iamo", "ate", "ino"],

    // Infinito
    presenteInfinito: ["are", "are", "are", "are", "are", "are"],
    passatoInfinito: ["aver cantato", "aver cantato", "aver cantato", "aver cantato", "aver cantato", "aver cantato"],

    // Participio
    presenteParticipio: ["ante", "ante", "ante", "ante", "ante", "ante"],
    passatoParticipio: ["ato", "ato", "ato", "ato", "ato", "ato"],

    // Gerundio
    presenteGerundio: ["ando", "ando", "ando", "ando", "ando", "ando"],
    passatoGerundio: ["avendo cantato", "avendo cantato", "avendo cantato", "avendo cantato", "avendo cantato", "avendo cantato"],
  },
  ere: {
    // Indicativo
    presente: ["o", "i", "e", "iamo", "ete", "ono"],
    passatoProssimo: ["uto", "uto", "uto", "uto", "uto", "uto"],
    imperfetto: ["evo", "evi", "eva", "evamo", "evate", "evano"],
    futuroSemplice: ["erò", "erai", "erà", "eremo", "erete", "eranno"],

    // Congiuntivo
    presenteCongiuntivo: ["a", "a", "a", "iamo", "iate", "ano"],
    passatoCongiuntivo: ["uto", "uto", "uto", "uto", "uto", "uto"],
    imperfettoCongiuntivo: ["essi", "essi", "esse", "essimo", "este", "essero"],

    // Condizionale
    presenteCondizionale: ["erei", "eresti", "erebbe", "eremmo", "ereste", "erebbero"],
    passatoCondizionale: ["uto", "uto", "uto", "uto", "uto", "uto"],

    // Imperativo
    presenteImperativo: ["—", "i", "a", "iamo", "ete", "ano"],

    // Infinito
    presenteInfinito: ["ere", "ere", "ere", "ere", "ere", "ere"],
    passatoInfinito: ["aver venduto", "aver venduto", "aver venduto", "aver venduto", "aver venduto", "aver venduto"],

    // Participio
    presenteParticipio: ["ente", "ente", "ente", "ente", "ente", "ente"],
    passatoParticipio: ["uto", "uto", "uto", "uto", "uto", "uto"],

    // Gerundio
    presenteGerundio: ["endo", "endo", "endo", "endo", "endo", "endo"],
    passatoGerundio: ["avendo venduto", "avendo venduto", "avendo venduto", "avendo venduto", "avendo venduto", "avendo venduto"],
  },
  ire: {
    // Indicativo
    presente: ["o", "i", "e", "iamo", "ite", "ono"],
    passatoProssimo: ["ito", "ito", "ito", "ito", "ito", "ito"],
    imperfetto: ["ivo", "ivi", "iva", "ivamo", "ivate", "ivano"],
    futuroSemplice: ["irò", "irai", "irà", "iremo", "irete", "iranno"],

    // Congiuntivo
    presenteCongiuntivo: ["a", "a", "a", "iamo", "iate", "ano"],
    passatoCongiuntivo: ["ito", "ito", "ito", "ito", "ito", "ito"],
    imperfettoCongiuntivo: ["issi", "issi", "isse", "issimo", "iste", "issero"],

    // Condizionale
    presenteCondizionale: ["irei", "iresti", "irebbe", "iremmo", "ireste", "irebbero"],
    passatoCondizionale: ["ito", "ito", "ito", "ito", "ito", "ito"],

    // Imperativo
    presenteImperativo: ["—", "i", "a", "iamo", "ite", "ano"],

    // Infinito
    presenteInfinito: ["ire", "ire", "ire", "ire", "ire", "ire"],
    passatoInfinito: ["aver dormito", "aver dormito", "aver dormito", "aver dormito", "aver dormito", "aver dormito"],

    // Participio
    presenteParticipio: ["ente", "ente", "ente", "ente", "ente", "ente"],
    passatoParticipio: ["ito", "ito", "ito", "ito", "ito", "ito"],

    // Gerundio
    presenteGerundio: ["endo", "endo", "endo", "endo", "endo", "endo"],
    passatoGerundio: ["avendo dormito", "avendo dormito", "avendo dormito", "avendo dormito", "avendo dormito", "avendo dormito"],
  },
};

// Helper function to get the correct tense key
function getTenseKey(mood: string, tense: string): string {
  if (mood === "indicativo") {
    return tense; // presente, passato-prossimo, etc.
  }
  return `${tense}${mood.charAt(0).toUpperCase() + mood.slice(1)}`; // presenteCongiuntivo, etc.
}

function VerbConjugationTable({ verbType, tense, mood, irregularConjugations }: VerbConjugationTableProps) {
  const tenseKey = getTenseKey(mood, tense.replace('-', ''));

  const endings = verbType === "irregular" && irregularConjugations
    ? [
        irregularConjugations["io"] || irregularConjugations["Io"],
        irregularConjugations["tu"] || irregularConjugations["Tu"],
        irregularConjugations["luiLei"] || irregularConjugations["Lui/Lei"],
        irregularConjugations["noi"] || irregularConjugations["Noi"],
        irregularConjugations["voi"] || irregularConjugations["Voi"],
        irregularConjugations["loro"] || irregularConjugations["Loro"],
      ]
    : conjugationEndings[verbType]?.[tenseKey] || ["—", "—", "—", "—", "—", "—"];

  const pronouns = ["Io", "Tu", "Lui/Lei", "Noi", "Voi", "Loro"];

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-sm">
        <thead className="bg-blue-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-blue-900 uppercase tracking-wider border-b border-gray-200">
              Pronoun
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-blue-900 uppercase tracking-wider border-b border-gray-200">
              Conjugation
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {pronouns.map((pronoun, index) => (
            <tr key={pronoun} className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                {pronoun}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                <span className="font-mono bg-blue-100 px-2 py-1 rounded text-blue-800">
                  {endings[index]}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default VerbConjugationTable;