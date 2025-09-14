import { Request, Response } from 'express';
import Lesson, { ILesson } from '../models/Lesson';

// Get all lessons
export const getLessons = async (req: Request, res: Response): Promise<void> => {
  try {
    const lessons: ILesson[] = await Lesson.find();
    res.json(lessons);
  } catch (error) {
    res.status(500).json({ message: (error as Error).message });
  }
};

// Get regular lesson for a specific tense
export const getRegularLesson = async (req: Request, res: Response): Promise<void> => {
  try {
    const { tense } = req.params;
    const lesson: ILesson | null = await Lesson.findOne({
      type: 'regular',
      tense: tense
    });

    if (!lesson) {
      res.status(404).json({ message: 'Regular lesson not found for this tense' });
      return;
    }

    res.json(lesson);
  } catch (error) {
    res.status(500).json({ message: (error as Error).message });
  }
};

// Get irregular lesson for a specific verb and tense
export const getIrregularLesson = async (req: Request, res: Response): Promise<void> => {
  try {
    const { infinitive, tense } = req.params;
    const lesson: ILesson | null = await Lesson.findOne({
      type: 'irregular',
      infinitive: infinitive,
      tense: tense
    });

    if (!lesson) {
      res.status(404).json({ message: 'Irregular lesson not found for this verb and tense' });
      return;
    }

    res.json(lesson);
  } catch (error) {
    res.status(500).json({ message: (error as Error).message });
  }
};

// Get all lessons for a specific tense
export const getLessonsByTense = async (req: Request, res: Response): Promise<void> => {
  try {
    const { tense } = req.params;
    const lessons: ILesson[] = await Lesson.find({ tense: tense });
    res.json(lessons);
  } catch (error) {
    res.status(500).json({ message: (error as Error).message });
  }
};