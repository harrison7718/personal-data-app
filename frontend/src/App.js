// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import EventTypePage from './components/EventTypePage';
import FitnessTypePage from './components/fitness/FitnessTypePage';
import ExerciseForm from './components/fitness/ExerciseForm';

const App = () => {
  return (
    <Router>
      <div>
        {/* Add any global components or layout here */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/log" element={<EventTypePage />} />
          <Route path="/log/fitness" element={<FitnessTypePage />} />
          <Route path="/log/fitness/add" element={<ExerciseForm />} />
          {/* Add routes for other event types and exercise pages */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;