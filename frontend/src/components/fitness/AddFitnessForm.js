import React, { useState } from 'react';
import axios from 'axios';

const AddFitnessForm = ({ onFitnessAdded }) => {
  const [exercise, setExercise] = useState('');
  const [reps, setReps] = useState('');
  const [sets, setSets] = useState('');

  const handleAddFitness = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:5000/api/fitness', {
        exercise,
        reps,
        sets,
      });

      // Call the parent component's callback to trigger a refresh of the fitness list
      onFitnessAdded();

      // Clear form fields
      setExercise('');
      setReps('');
      setSets('');

      console.log('Fitness entry added successfully:', response.data);
    } catch (error) {
      console.error('Error adding fitness entry:', error);
    }
  };

  return (
    <div>
      <h2>Add Fitness Entry</h2>
      <form onSubmit={handleAddFitness}>
        <label>
          Exercise:
          <input
            type="text"
            value={exercise}
            onChange={(e) => setExercise(e.target.value)}
            required
          />
        </label>
        <br />
        <label>
          Reps:
          <input
            type="number"
            value={reps}
            onChange={(e) => setReps(e.target.value)}
            required
          />
        </label>
        <br />
        <label>
          Sets:
          <input
            type="number"
            value={sets}
            onChange={(e) => setSets(e.target.value)}
            required
          />
        </label>
        <br />
        <button type="submit">Add Entry</button>
      </form>
    </div>
  );
};

export default AddFitnessForm;