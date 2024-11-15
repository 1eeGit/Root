import React from 'react';
import './Card.css'; 


function flipCard(title, question, image, answer) {
    return (
        <div className="card-container">
          <div className="card custom-card">
            <div className="card-front">
                <h2>{title}</h2>
                <h1>{question}</h1>   
                <img src={image} alt="" className="card-image" style={{ width: '60px', height: '60px' }} />
            </div>
            
            <div className="card-back">
              <p>{answer}</p>
            </div>
          </div>
        </div>
      );
    }

export default flipCard;
