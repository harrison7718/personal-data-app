import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ExerciseForm = () => {
  const navigate = useNavigate();
  const [exerciseForm, setExerciseForm] = useState({
    exercise: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setExerciseForm((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Add logic to submit the form (send to backend, etc.)

    // add new exercise to database
    try {
      // console.log(exerciseForm);
      console.log(JSON.stringify({ exerciseForm }));
      const response = await fetch('http://localhost:5000/api/fitness', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(exerciseForm),
      });
  
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
  
      const data = await response.json();
      console.log('Success:', data);
  
      // For navigation, make sure 'navigate' is defined and correctly initialized
      navigate('/log/fitness');
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div>
      <h2>Log Exercise</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Exercise Name:
          <input
            type="text"
            name="exercise"
            value={exerciseForm.exercise}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ExerciseForm;