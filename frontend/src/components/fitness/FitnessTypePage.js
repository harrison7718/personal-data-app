import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const FitnessTypePage = () => {
  const [exerciseNames, setExerciseNames] = useState([]);

  useEffect(() => {
    // Fetch unique exercise names from your API endpoint
    fetch('http://localhost:5000/api/fitness/exercises')
      .then(response => response.json())
      .then(data => setExerciseNames(data))
      .catch(error => console.error('Error fetching exercise names:', error));
  }, []); // Empty dependency array ensures this effect runs once when the component mounts

  return (
    <div>
      <h2>Choose a Fitness Type</h2>
      <div className="button-grid">
        <Link to="/log/fitness/add">
          <button>Add New Exercise</button>
        </Link>

        {/* Render buttons for each exercise name */}
        {exerciseNames.map(exerciseName => (
          console.log(exerciseName),
          <Link key={exerciseName} to={`/log/fitness/add`}>
            <button>{exerciseName}</button>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default FitnessTypePage;