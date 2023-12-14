import React from 'react';
import { Link } from 'react-router-dom';

const EventTypePage = () => {
  return (
    <div>
      <h2>Choose an Event Type</h2>
      <div className="button-grid">
        <Link to="/log/fitness">
          <button>Fitness</button>
        </Link>
        <Link to="/log/food">
          <button>Food</button>
        </Link>
        {/* Add more event types as needed */}
      </div>
    </div>
  );
};

export default EventTypePage;