import { NextResponse } from 'next/server';
import { query } from '../../../../../lib/postgresql';

export async function GET() {
  try {
    const result = await query(`
      SELECT pronouns
      FROM pronouns
      WHERE type = 'subject'
      LIMIT 1
    `);

    if (result.rows.length === 0) {
      return NextResponse.json(
        { message: 'No subject pronouns found' },
        { status: 404 }
      );
    }

    // Return the pronouns in the expected format
    return NextResponse.json({ pronouns: result.rows[0].pronouns });
  } catch (error) {
    console.error('Database error:', error);
    return NextResponse.json(
      { message: 'Database error occurred' },
      { status: 500 }
    );
  }
}