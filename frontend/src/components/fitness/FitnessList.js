import React, { useState, useEffect } from 'react';
import axios from 'axios';

const FitnessList = () => {
  const [fitnessEntries, setFitnessEntries] = useState([]);

  useEffect(() => {
    // Fetch fitness entries from the backend when the component mounts
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/fitness');
        setFitnessEntries(response.data);
      } catch (error) {
        console.error('Error fetching fitness entries:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h2>Fitness Entries</h2>
      <ul>
        {fitnessEntries.map((entry) => (
          <li key={entry._id}>
            {entry.exercise} - Reps: {entry.reps}, Sets: {entry.sets}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FitnessList;