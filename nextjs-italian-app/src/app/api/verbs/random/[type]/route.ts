import { NextRequest, NextResponse } from "next/server";
import { query } from "../../../../../lib/postgresql";

type Params = {
  type: string;
};

// Helper function to normalize conjugation data structure
function normalizeConjugations(conjugations: any, tense: string, mood: string) {
  if (!conjugations) return null;

  // Map tense-mood combinations to database keys
  const tenseMap: { [key: string]: string } = {
    "presente-indicativo": "presenteIndicativo",
    "passato-prossimo-indicativo": "passatoProssimo",
    "futuro-semplice-indicativo": "futuroSemplice",
    "imperfetto-indicativo": "imperfetto",
  };

  const dbKey = tenseMap[`${tense}-${mood}`];
  if (!dbKey || !conjugations[dbKey]) return null;

  const tenseData = conjugations[dbKey];

  // Handle both data structures:
  // Regular verbs: conjugations.presenteIndicativo.conjugations.io
  // Irregular verbs: conjugations.presenteIndicativo.io
  const conjugationData = tenseData.conjugations || tenseData;

  return {
    io: conjugationData.io || null,
    tu: conjugationData.tu || null,
    luiLei: conjugationData.luiLei || null,
    noi: conjugationData.noi || null,
    voi: conjugationData.voi || null,
    loro: conjugationData.loro || null,
  };
}

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<Params> }
) {
  try {
    const { type } = await params;
    const { searchParams } = new URL(request.url);
    const tense = searchParams.get("tense") || "presente";
    const mood = searchParams.get("mood") || "indicativo";
    const regularOnly = searchParams.get("regularOnly");

    // Build WHERE clause based on filters
    let whereClause = "WHERE type = $1";
    const queryParams: any[] = [type];

    if (regularOnly === "true") {
      whereClause += " AND regular_presente_indicativo = true";
    } else if (regularOnly === "false") {
      whereClause += " AND regular_presente_indicativo = false";
    }

    const result = await query(
      `
      SELECT id, infinitive, type, definition, auxiliary_verb,
             regular_presente_indicativo as "regularPresenteIndicativo",
             regular_passato_prossimo as "regularPassatoProssimo",
             regular_futuro_semplice as "regularFuturoSemplice",
             regular_imperfetto as "regularImperfetto",
             conjugations
      FROM verbs
      ${whereClause}
      ORDER BY RANDOM()
      LIMIT 1
    `,
      queryParams
    );

    if (result.rows.length === 0) {
      return NextResponse.json(
        { message: `No ${type} verbs found` },
        { status: 404 }
      );
    }

    const verb = result.rows[0];

    // Normalize the response
    const normalizedVerb = {
      id: verb.id,
      infinitive: verb.infinitive,
      type: verb.type,
      definition: verb.definition,
      conjugation: normalizeConjugations(verb.conjugations, tense, mood),
      metadata: {
        auxiliaryVerb: verb.auxiliary_verb,
        regularPresenteIndicativo: verb.regularPresenteIndicativo,
        regularPassatoProssimo: verb.regularPassatoProssimo,
        regularFuturoSemplice: verb.regularFuturoSemplice,
        regularImperfetto: verb.regularImperfetto,
      },
    };

    return NextResponse.json(normalizedVerb);
  } catch (error) {
    console.error("Database error:", error);
    return NextResponse.json(
      { message: "Database error occurred" },
      { status: 500 }
    );
  }
}
