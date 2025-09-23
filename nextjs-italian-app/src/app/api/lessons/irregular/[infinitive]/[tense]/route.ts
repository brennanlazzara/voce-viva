import { NextRequest, NextResponse } from "next/server";
import { query } from "../../../../../../lib/postgresql";

type Params = {
  infinitive: string;
  tense: string;
};

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<Params> }
) {
  try {
    const { infinitive, tense } = await params;
    const result = await query(
      `
      SELECT * FROM lessons
      WHERE type = 'irregular' AND infinitive = $1 AND tense = $2
      LIMIT 1
    `,
      [infinitive, tense]
    );

    if (result.rows.length === 0) {
      return NextResponse.json(
        { message: "Irregular lesson not found for this verb and tense" },
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
