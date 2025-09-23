import { NextResponse } from 'next/server';
import { query } from '../../../lib/postgresql';

export async function GET() {
  try {
    const result = await query(`
      SELECT id, phrase, translation, meaning
      FROM phrases
      ORDER BY id
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