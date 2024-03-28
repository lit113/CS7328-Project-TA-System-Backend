import { Router } from 'express';
import * as TaPerformanceController from './taPerformance.controller';

const router = Router();

// Define a POST route for creating a new TA evaluation
router.post('/ta-evaluation', TaPerformanceController.createTaEvaluation);

// Define a GET route for retrieving all TA evaluations
router.get('/performance-results', TaPerformanceController.getAllTaEvaluations);

export default router;