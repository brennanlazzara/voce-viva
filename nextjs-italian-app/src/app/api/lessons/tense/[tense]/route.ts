import { NextRequest, NextResponse } from "next/server";
import { query } from "../../../../../lib/postgresql";

type Params = {
  tense: string;
};

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<Params> }
) {
  try {
    const { tense } = await params;
    const result = await query(
      `
      SELECT * FROM lessons
      WHERE tense = $1
      ORDER BY id
    `,
      [tense]
    );

    return NextResponse.json(result.rows);
  } catch (error) {
    console.error("Database error:", error);
    return NextResponse.json(
      { message: "Database error occurred" },
      { status: 500 }
    );
  }
}
