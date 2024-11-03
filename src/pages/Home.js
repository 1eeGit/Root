import React from 'react';
import { Link } from 'react-router-dom';


function Home() {
  return (
    <div style={{ padding: '2em', textAlign: 'center' }}>
    <h1>Welcome to Root!</h1>
    <p>Hello user, let's start from what we did last time...</p>
    
    <Link to="/python">
      <button>Start </button>
    </Link>
    </div>
  );
}

export default Home;
