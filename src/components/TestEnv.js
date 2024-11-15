import React from 'react';

const TestEnv = () => {
  console.log('API Key:', process.env.REACT_APP_JUDGE0_API_KEY);
  return <div>Check the console for the API key</div>;
};

export default TestEnv;
