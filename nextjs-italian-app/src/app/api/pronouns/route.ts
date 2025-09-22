import { NextResponse } from 'next/server';
import connectDB from '../../../lib/mongodb';
import Pronoun from '../../../models/Pronoun';

export async function GET() {
  try {
    await connectDB();
    const pronouns = await Pronoun.find();
    return NextResponse.json(pronouns);
  } catch (error) {
    return NextResponse.json(
      { message: (error as Error).message },
      { status: 500 }
    );
  }
}