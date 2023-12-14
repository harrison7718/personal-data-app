// backend/models/Food.js
const mongoose = require('mongoose');

const foodSchema = new mongoose.Schema({
  name: String,
  calories: Number,
  // Add more fields as needed
});

module.exports = mongoose.model('Food', foodSchema);