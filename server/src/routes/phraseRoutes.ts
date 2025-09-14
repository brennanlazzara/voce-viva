import express, { Router } from 'express';
import { getPhrases } from '../controllers/phraseController';

const router: Router = express.Router();

router.get('/', getPhrases);
 
export default router;