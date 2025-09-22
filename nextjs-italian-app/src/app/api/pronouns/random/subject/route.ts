import { NextResponse } from 'next/server';
import connectDB from '../../../../../lib/mongodb';
import Pronoun from '../../../../../models/Pronoun';

export async function GET() {
  try {
    await connectDB();
    const pronouns = await Pronoun.findOne({ type: 'subject' });

    if (!pronouns) {
      return NextResponse.json(
        { message: 'No subject pronouns found' },
        { status: 404 }
      );
    }

    // Return the pronouns in the expected format
    return NextResponse.json({ pronouns: pronouns.pronouns });
  } catch (error) {
    return NextResponse.json(
      { message: (error as Error).message },
      { status: 500 }
    );
  }
}