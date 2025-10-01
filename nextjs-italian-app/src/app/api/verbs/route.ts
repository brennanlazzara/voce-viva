import { NextResponse } from 'next/server';
import { query } from '../../../lib/postgresql';

export async function GET() {
  try {
    const result = await query(`
      SELECT id, infinitive, type, definition, auxiliary_verb,
             regular_presente_indicativo as "regularPresenteIndicativo",
             regular_passato_prossimo as "regularPassatoProssimo",
             regular_futuro_semplice as "regularFuturoSemplice",
             regular_imperfetto as "regularImperfetto",
             conjugations
      FROM verbs
      ORDER BY infinitive
    `);

    return NextResponse.json(result.rows);
  } catch (error) {
    console.error('Database error:', error);
    return NextResponse.json(
      { message: 'Database error occurred' },
      { status: 500 }
    );
  }
}