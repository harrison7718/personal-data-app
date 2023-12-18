// backend/models/Workout.js
const mongoose = require('mongoose');

const setSchema = new mongoose.Schema({
    reps: { type: Number },
    weight: { type: Number },
    distance: { type: Number },
    // Add more exercise-related fields as needed
});

const exerciseSchema = new mongoose.Schema({
    name: { type: String, required: true },
    sets: [setSchema]
    // Add more exercise-related fields as needed
});

const workoutSchema = new mongoose.Schema({
    exercises: [exerciseSchema], // Array of exercise objects
    start: { type: Date, default: Date.now },
    end: {
        type: Date,
        default: function() {
            // Set the default value to one hour after the start date
            return new Date(this.start.getTime() + 60 * 60 * 1000);
        },
    },
    // Add more fields as needed
  });

module.exports = mongoose.model('Workout', workoutSchema);
