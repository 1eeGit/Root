import React from 'react';
import './card.css';

function flipCard(title, progress, image) {
  return (
    <div className="card-container">
      <div className="card custom-card">
        {/* Front of the Card */}
        <div className="card-front">
          <img src={image} alt="" className="card-image"  style={{ width: '60px', height: '60px' }}/>
          <h3>{title}</h3>
        </div>

        {/* Back of the Card */}
        <div className="card-back">
          <h4>Progress</h4>
          {/* Bootstrap Progress Bar */}
          <div className="progress" style={{ height: '20px' }}>
            <div
              className="progress-bar bg-success"
              role="progressbar"
              style={{ width: `${progress}%` }}
              aria-valuenow={progress}
              aria-valuemin="0"
              aria-valuemax="100"
            >
              {progress}%
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default flipCard;
