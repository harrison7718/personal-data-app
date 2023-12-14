// backend/models/Fitness.js
const mongoose = require('mongoose');

const fitnessSchema = new mongoose.Schema({
  exercise: { type: String, required: true },
  reps: { type: Number},
  sets: { type: Number},
  datetime: { type: Date, default: Date.now },
  // Add more fields as needed
});

module.exports = mongoose.model('Fitness', fitnessSchema);
