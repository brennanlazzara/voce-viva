import { NextRequest, NextResponse } from 'next/server';
import connectDB from '../../../../../lib/mongodb';
import Lesson from '../../../../../models/Lesson';

type Params = {
  tense: string;
};

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<Params> }
) {
  try {
    const { tense } = await params;
    await connectDB();
    const lessons = await Lesson.find({ tense: tense });
    return NextResponse.json(lessons);
  } catch (error) {
    return NextResponse.json(
      { message: (error as Error).message },
      { status: 500 }
    );
  }
}