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
    const count = await Verb.countDocuments({ type });
    const random = Math.floor(Math.random() * count);
    const verb = await Verb.findOne({ type }).skip(random);
    return NextResponse.json(verb);
  } catch (error) {
    return NextResponse.json(
      { message: (error as Error).message },
      { status: 500 }
    );
  }
}