import { NextResponse } from 'next/server';
import connectDB from '../../../lib/mongodb';
import Lesson from '../../../models/Lesson';

export async function GET() {
  try {
    await connectDB();
    const lessons = await Lesson.find();
    return NextResponse.json(lessons);
  } catch (error) {
    return NextResponse.json(
      { message: (error as Error).message },
      { status: 500 }
    );
  }
}