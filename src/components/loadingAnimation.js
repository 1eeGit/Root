import React from 'react';

const LoadingSpinner = () => (
  <div className="text-center">
    <div className="spinner-border text-primary" role="status">
      <span className="sr-only"></span>
    </div>
    <p>Loading...</p>
  </div>
);

export default LoadingSpinner;
