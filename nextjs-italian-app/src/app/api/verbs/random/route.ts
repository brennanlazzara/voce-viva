import { NextResponse } from 'next/server';
import { query } from '../../../../lib/postgresql';

export async function GET() {
  try {
    // Get a random verb from PostgreSQL
    const result = await query(`
      SELECT id, infinitive, type, definition, auxiliary_verb,
             regular_presente_indicativo as "regularPresenteIndicativo",
             regular_passato_prossimo as "regularPassatoProssimo",
             conjugations
      FROM verbs
      ORDER BY RANDOM()
      LIMIT 1
    `);

    if (result.rows.length === 0) {
      return NextResponse.json(
        { message: 'No verbs found' },
        { status: 404 }
      );
    }

    return NextResponse.json(result.rows[0]);
  } catch (error) {
    console.error('Database error:', error);
    return NextResponse.json(
      { message: 'Database error occurred' },
      { status: 500 }
    );
  }
}