// backend/controllers/fitnessController.js
const Workout = require('../models/Workout');

// Create a new workout
exports.createWorkout = async (req, res) => {
  try {
    const workout = new Workout({ exercises: []});
    await workout.save();
    res.status(201).json(workout);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// add an exercise to a workout
exports.addExercise = async (req, res) => {
  try {
    const name = req.body.name;
    const workout = await Workout.findById(req.params.id);
    workout.exercises.push({
        name,
        sets: []
    });
    await workout.save();
    res.json({ 
        message: 'Exercise added successfully',
        exerciseIndex: workout.exercises.length - 1
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// add set to an exercise
exports.addSet = async (req, res) => {
  try {
    const { set } = req.body;
    const workout = await Workout.findById(req.params.id);
    const exercise = workout.exercises.id(req.params.exerciseId);
    exercise.sets.push(set);
    await workout.save();
    res.json({ message: 'Set added successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};