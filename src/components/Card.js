import React from 'react';
import './card.css'; 

/** 
 * flip card 
 */

function flipCard(title, question, image, answer) {
    return (
        <div className="card-container">
          <div className="card custom-card">
            <div className="card-front">
                <h1>{title}</h1>
                <p>{question}</p>   
                <img src={image} alt="" className="card-image" />
            </div>
            
            <div className="card-back">
              <p>{answer}</p>
            </div>
          </div>
        </div>
      );
    }

export default flipCard;
