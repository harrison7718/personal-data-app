// backend/routes/fitnessRoutes.js
const express = require('express');
const router = express.Router();
const fitnessController = require('../controllers/fitnessController');

// Create a new fitness entry
router.post('/fitness', fitnessController.createFitness);

// Get all fitness entries
router.get('/fitness', fitnessController.getAllFitness);

// Update a fitness entry
router.put('/fitness/:id', fitnessController.updateFitness);

// Delete a fitness entry
router.delete('/fitness/:id', fitnessController.deleteFitness);

module.exports = router;