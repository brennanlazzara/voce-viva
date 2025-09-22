import { NextRequest, NextResponse } from 'next/server';
import connectDB from '../../../../../../lib/mongodb';
import Lesson from '../../../../../../models/Lesson';

type Params = {
  infinitive: string;
  tense: string;
};

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<Params> }
) {
  try {
    const { infinitive, tense } = await params;
    await connectDB();
    const lesson = await Lesson.findOne({
      type: 'irregular',
      infinitive: infinitive,
      tense: tense
    });

    if (!lesson) {
      return NextResponse.json(
        { message: 'Irregular lesson not found for this verb and tense' },
        { status: 404 }
      );
    }

    return NextResponse.json(lesson);
  } catch (error) {
    return NextResponse.json(
      { message: (error as Error).message },
      { status: 500 }
    );
  }
}