import React, { useEffect, useState } from 'react';
import { fetchDataFromAPI } from '../services/apiService';

/** 
 * Fetch data from the given API endpoint
*/
function FetchAPI({ endpoint }) {
  const [data, setData] = useState(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const result = await fetchDataFromAPI(endpoint); 
        setData(result);
      } catch (error) {
        console.error("Failed to fetch data:", error);
      }
    };
    
    getData();
  }, [endpoint]); 

  return (
    <div>
      <h1>Results {endpoint}</h1>
      {data ? <pre>{JSON.stringify(data, null, 2)}</pre> : "Loading..."}
    </div>
  );
}

export default FetchAPI;
