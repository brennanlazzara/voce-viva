import { NextResponse } from 'next/server';
import connectDB from '../../../lib/mongodb';
import Phrase from '../../../models/Phrase';

export async function GET() {
  try {
    await connectDB();
    const phrases = await Phrase.find();
    return NextResponse.json(phrases);
  } catch (error) {
    return NextResponse.json(
      { message: (error as Error).message },
      { status: 500 }
    );
  }
}