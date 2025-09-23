import { NextRequest, NextResponse } from "next/server";
import { query } from "../../../../../lib/postgresql";

type Params = {
  type: string;
};

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<Params> }
) {
  try {
    const { type } = await params;
    const result = await query(
      `
      SELECT id, infinitive, type, definition, auxiliary_verb,
             regular_presente_indicativo as "regularPresenteIndicativo",
             regular_passato_prossimo as "regularPassatoProssimo",
             conjugations
      FROM verbs
      WHERE type = $1
      ORDER BY RANDOM()
      LIMIT 1
    `,
      [type]
    );

    if (result.rows.length === 0) {
      return NextResponse.json(
        { message: `No ${type} verbs found` },
        { status: 404 }
      );
    }

    return NextResponse.json(result.rows[0]);
  } catch (error) {
    console.error("Database error:", error);
    return NextResponse.json(
      { message: "Database error occurred" },
      { status: 500 }
    );
  }
}
