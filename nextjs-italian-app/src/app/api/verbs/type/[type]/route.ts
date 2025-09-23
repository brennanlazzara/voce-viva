import { NextRequest, NextResponse } from 'next/server';
import connectDB from '../../../../../lib/mongodb';
import Verb from '../../../../../models/Verb';

type Params = {
  type: string;
};

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<Params> }
) {
  try {
    const { type } = await params;
    await connectDB();
    const verbs = await Verb.find({ type });
    return NextResponse.json(verbs);
  } catch (error) {
    return NextResponse.json(
      { message: (error as Error).message },
      { status: 500 }
    );
  }
}