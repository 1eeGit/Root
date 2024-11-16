import React from 'react';
import { useNavigate } from 'react-router-dom';
import flipCard from '../components/Card';
import assignments from '../data/assignments';
import './Assignments.css';

function Records() {
  const navigate = useNavigate();

  const handleCardClick = (assignmentId) => {
    navigate(`/coding/${assignmentId}`);
  };

  return (
    <div className="container">
      <h1>Your Assignments</h1>
      <div className="cards-grid">
        {assignments.map((assignment) => (
          <div
            key={assignment.id}
            onClick={() => handleCardClick(assignment.id)}
            className="card-wrapper"
          >
            {flipCard(assignment.title, assignment.progress, assignment.image)}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Records;
