// backend/routes/workoutRoutes.js
const express = require('express');
const router = express.Router();
const workoutController = require('../controllers/workoutController');

// Create a new workout
router.post('/workout', workoutController.createWorkout);

// add an exercise to a workout
router.post('/workout/:id/exercise', workoutController.addExercise);

// add set to an exercise
router.post('/workout/:id/exercise/set', workoutController.addSet);

module.exports = router;
