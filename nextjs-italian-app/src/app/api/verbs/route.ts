import { NextRequest, NextResponse } from 'next/server';
import connectDB from '../../../lib/mongodb';
import Verb from '../../../models/Verb';

export async function GET() {
  try {
    await connectDB();
    const verbs = await Verb.find();
    return NextResponse.json(verbs);
  } catch (error) {
    return NextResponse.json(
      { message: (error as Error).message },
      { status: 500 }
    );
  }
}