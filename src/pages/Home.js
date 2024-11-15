import React from 'react';
import { Link } from 'react-router-dom';
import '../bootstrap.css';

function Home() {
  return (
    <div style={{ padding: '2em', textAlign: 'center' }}>
    <h1>Welcome to Root!</h1>
    <p>Hello user, let's start from what we did last time...</p>
    
    <div style={{ marginTop: '2em' }}>
        <Link to="/Records" className="btn btn-secondary">
          Go to Assignments...
        </Link>
      </div>
     
    </div>
  );
  
}

export default Home;
