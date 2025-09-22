import { NextRequest, NextResponse } from 'next/server';
import connectDB from '../../../../lib/mongodb';
import Verb from '../../../../models/Verb';

export async function GET() {
  try {
    await connectDB();
    const count = await Verb.countDocuments();
    const random = Math.floor(Math.random() * count);
    const verb = await Verb.findOne().skip(random);
    return NextResponse.json(verb);
  } catch (error) {
    return NextResponse.json(
      { message: (error as Error).message },
      { status: 500 }
    );
  }
}