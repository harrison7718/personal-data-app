import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div>
      <h1>Welcome to Your Fitness App!</h1>
      <p>Would you like to log an event?</p>
      <Link to="/log/fitness">
        <button>Log Fitness</button>
      </Link>
      <Link to="/log/food">
        <button>Log Food</button>
      </Link>
    </div>
  );
};

export default HomePage;