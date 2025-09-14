import { Request, Response } from 'express';
import Phrase, { IPhrase } from '../models/Phrase';

// Get all Phrases
export const getPhrases = async (req: Request, res: Response): Promise<void> => {
  try {
    const phrases: IPhrase[] = await Phrase.find();
    res.json(phrases);
  } catch (error) {
    res.status(500).json({ message: (error as Error).message });
  }
};