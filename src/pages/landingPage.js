import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import LoadingSpinner from '../components/LoadingAnimation';

function LandingPage() {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = () => {
    setLoading(true); 
    setTimeout(() => {
      setLoading(false); 
      navigate('/home'); 
    }, 500);
  };

  return (
    <div className="container">
      <h1 className="text-center">Welcome to Root!</h1>
      <p className="text-center">Root is a coding platform open to everyone.</p>
      <p className="text-center">Have fun rooting! :)</p>

      <label>Username</label>
      <input type="text" className="form-control" />
      <label>Password</label>
      <input type="password" className="form-control" />

      {loading ? (
        <LoadingSpinner /> 
      ) : (
        <button className="btn btn-primary" onClick={handleLogin}>
          Root now
        </button>
      )}
    </div>
  );
}

export default LandingPage;
