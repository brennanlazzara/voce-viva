import express, { Router } from 'express';
import { getLessons, getRegularLesson, getIrregularLesson, getLessonsByTense } from '../controllers/lessonController';

const router: Router = express.Router();

router.get('/', getLessons);
router.get('/tense/:tense', getLessonsByTense);
router.get('/regular/:tense', getRegularLesson);
router.get('/irregular/:infinitive/:tense', getIrregularLesson);

export default router;