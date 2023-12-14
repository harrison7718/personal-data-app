// backend/controllers/foodController.js
const Food = require('../models/Food');

// Example controller methods
exports.getAllFoods = async (req, res) => {
  try {
    const foods = await Food.find();
    res.json(foods);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Add more controller methods as needed