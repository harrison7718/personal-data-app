// backend/controllers/fitnessController.js
const Fitness = require('../models/Fitness');

// Create a new fitness entry
exports.createFitness = async (req, res) => {
  try {
    const { exercise, reps, sets } = req.body;
    const fitness = new Fitness({ exercise, reps, sets });
    await fitness.save();
    res.status(201).json(fitness);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get all fitness entries
exports.getAllFitness = async (req, res) => {
  try {
    const fitnessEntries = await Fitness.find();
    res.json(fitnessEntries);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get all unique exercises
exports.getAllUniqueExercises = async (req, res) => {
  try {
    const fitnessEntries = await Fitness.find();
    const exercises = [];
    fitnessEntries.forEach((entry) => {
      if (!exercises.includes(entry.exercise)) {
        exercises.push(entry.exercise);
      }
    });
    res.json(exercises);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update a fitness entry
exports.updateFitness = async (req, res) => {
  try {
    const { exercise, reps, sets } = req.body;
    await Fitness.findByIdAndUpdate(req.params.id, { exercise, reps, sets });
    res.json({ message: 'Fitness entry updated successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Delete a fitness entry
exports.deleteFitness = async (req, res) => {
  try {
    await Fitness.findByIdAndDelete(req.params.id);
    res.json({ message: 'Fitness entry deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};