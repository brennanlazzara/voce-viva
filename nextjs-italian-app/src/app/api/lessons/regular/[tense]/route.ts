import { NextRequest, NextResponse } from 'next/server';
import { query } from '../../../../../lib/postgresql';

type Params = {
  tense: string;
};

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<Params> }
) {
  try {
    const { tense } = await params;
    const result = await query(`
      SELECT * FROM lessons
      WHERE type = 'regular' AND tense = $1
      LIMIT 1
    `, [tense]);

    if (result.rows.length === 0) {
      return NextResponse.json(
        { message: 'Regular lesson not found for this tense' },
        { status: 404 }
      );
    }

    return NextResponse.json(result.rows[0]);
  } catch (error) {
    return NextResponse.json(
      { message: (error as Error).message },
      { status: 500 }
    );
  }
}